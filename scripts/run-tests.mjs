#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const reportsDir = path.join(root, 'reports');
const reportPath = path.join(reportsDir, 'test-results.json');
const tempDir = path.join(reportsDir, '.tmp-test-results');
const isWindows = process.platform === 'win32';

const commands = {
  node: process.execPath,
  npx: isWindows ? 'npx.cmd' : 'npx',
};

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function runCommand(command, args, options = {}) {
  const startedAt = Date.now();
  const result = spawnSync(command, args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 10 * 1024 * 1024,
    ...options,
  });

  return {
    status: result.status ?? 1,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
    duration: Date.now() - startedAt,
  };
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function parseJsonText(raw) {
  const text = raw.trim();
  if (!text) {
    return null;
  }

  try {
    return JSON.parse(text);
  } catch {
    const firstBrace = text.indexOf('{');
    const lastBrace = text.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      return null;
    }

    try {
      return JSON.parse(text.slice(firstBrace, lastBrace + 1));
    } catch {
      return null;
    }
  }
}

function summarizeVitestReport(report, fallbackDuration) {
  const passed = report?.numPassedTests ?? 0;
  const failed = report?.numFailedTests ?? 0;
  const skipped = (report?.numPendingTests ?? 0) + (report?.numTodoTests ?? 0);
  const duration = report?.testResults?.reduce?.((total, entry) => {
    if (typeof entry?.startTime === 'number' && typeof entry?.endTime === 'number') {
      return total + Math.max(0, entry.endTime - entry.startTime);
    }
    return total;
  }, 0);

  return {
    passed,
    failed,
    skipped,
    duration: typeof duration === 'number' && duration > 0 ? duration : fallbackDuration,
  };
}

function walkPlaywrightSuites(suites, counts) {
  for (const suite of suites ?? []) {
    for (const spec of suite.specs ?? []) {
      for (const test of spec.tests ?? []) {
        const statuses = new Set((test.results ?? []).map(result => result.status));

        if (statuses.has('failed') || statuses.has('timedOut') || statuses.has('interrupted')) {
          counts.failed += 1;
        } else if (statuses.has('skipped')) {
          counts.skipped += 1;
        } else if (statuses.has('passed')) {
          counts.passed += 1;
        }
      }
    }

    walkPlaywrightSuites(suite.suites, counts);
  }
}

function summarizePlaywrightReport(report, fallbackDuration) {
  const counts = { passed: 0, failed: 0, skipped: 0 };
  walkPlaywrightSuites(report?.suites ?? [], counts);

  return {
    ...counts,
    duration: report?.stats?.duration ?? fallbackDuration,
  };
}

function toLayerStatus(summary) {
  return summary.failed > 0 ? 'failed' : 'passed';
}

function buildLayerReport(summary) {
  return {
    passed: summary.passed,
    failed: summary.failed,
    skipped: summary.skipped,
    duration: summary.duration,
    status: toLayerStatus(summary),
  };
}

function main() {
  const startedAt = Date.now();
  ensureDir(reportsDir);
  ensureDir(tempDir);

  const validatorRun = runCommand(commands.node, ['scripts/core/validate-all.mjs']);
  const validationResults = readJson(path.join(reportsDir, 'validation-results.json'));

  const unitOutputPath = path.join(tempDir, 'vitest-unit.json');
  const systemOutputPath = path.join(tempDir, 'vitest-system.json');
  const integrationOutputPath = path.join(tempDir, 'vitest-integration.json');

  const unitRun = runCommand(commands.npx, [
    'vitest',
    'run',
    'tests/unit',
    '--reporter=json',
    `--outputFile=${unitOutputPath}`,
  ]);
  const systemRun = runCommand(commands.npx, [
    'vitest',
    'run',
    'tests/system',
    '--reporter=json',
    `--outputFile=${systemOutputPath}`,
  ]);
  const integrationRun = runCommand(commands.npx, [
    'vitest',
    'run',
    'tests/integration',
    '--reporter=json',
    `--outputFile=${integrationOutputPath}`,
  ]);
  const e2eRun = runCommand(commands.npx, ['playwright', 'test', 'tests/e2e', '--reporter=json']);

  const unitSummary = summarizeVitestReport(readJson(unitOutputPath), unitRun.duration);
  const systemSummary = summarizeVitestReport(readJson(systemOutputPath), systemRun.duration);
  const integrationSummary = summarizeVitestReport(
    readJson(integrationOutputPath),
    integrationRun.duration
  );
  const e2eSummary = summarizePlaywrightReport(
    parseJsonText(e2eRun.stdout),
    e2eRun.duration
  );

  const report = {
    generatedAt: new Date().toISOString(),
    lastRunTimestamp: new Date().toISOString(),
    passed: unitSummary.passed + systemSummary.passed + integrationSummary.passed + e2eSummary.passed,
    failed: unitSummary.failed + systemSummary.failed + integrationSummary.failed + e2eSummary.failed,
    skipped: unitSummary.skipped + systemSummary.skipped + integrationSummary.skipped + e2eSummary.skipped,
    duration: Date.now() - startedAt,
    categories: {
      unit: buildLayerReport(unitSummary),
      system: buildLayerReport(systemSummary),
      integration: buildLayerReport(integrationSummary),
      e2e: buildLayerReport(e2eSummary),
    },
    validators: {
      passed: validationResults?.total?.passed ?? 0,
      failed: validationResults?.total?.failed ?? 0,
      blockingFailed: validationResults?.total?.blockingFailed ?? 0,
      advisoryFailed: validationResults?.total?.advisoryFailed ?? 0,
      total: validationResults?.total?.total ?? 0,
      duration: validatorRun.duration,
      status:
        (validationResults?.total?.blockingFailed ?? 0) > 0 || validatorRun.status !== 0
          ? 'failed'
          : 'passed',
    },
    blocking: {
      validators: (validationResults?.total?.blockingFailed ?? 0) > 0 || validatorRun.status !== 0,
      system: systemSummary.failed > 0 || systemRun.status !== 0,
      integration: integrationSummary.failed > 0 || integrationRun.status !== 0,
    },
    advisory: {
      unit: unitSummary.failed > 0 || unitRun.status !== 0,
      e2e: e2eSummary.failed > 0 || e2eRun.status !== 0,
    },
    commands: {
      validators: {
        command: 'node scripts/core/validate-all.mjs',
        exitCode: validatorRun.status,
      },
      unit: {
        command: 'npx vitest run tests/unit --reporter=json',
        exitCode: unitRun.status,
      },
      system: {
        command: 'npx vitest run tests/system --reporter=json',
        exitCode: systemRun.status,
      },
      integration: {
        command: 'npx vitest run tests/integration --reporter=json',
        exitCode: integrationRun.status,
      },
      e2e: {
        command: 'npx playwright test tests/e2e --reporter=json',
        exitCode: e2eRun.status,
      },
    },
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + '\n');

  const shouldFail = report.blocking.validators || report.blocking.system || report.blocking.integration;
  process.stdout.write(JSON.stringify(report, null, 2) + '\n');
  process.exitCode = shouldFail ? 1 : 0;
}

main();