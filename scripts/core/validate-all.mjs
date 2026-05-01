#!/usr/bin/env node

/**
 * Unified Validation Runner
 *
 * Runs all active validators through one entrypoint, writes a machine-readable
 * validation snapshot, and exits non-zero only on blocking validator failures.
 *
 * Usage:
 *   node scripts/core/validate-all.mjs
 *   node scripts/core/validate-all.mjs --report-json
 */

import { execFile, execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode, stripLoggingModeArgs } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { getLatestInputMtime } from '../lib/execution-cache.mjs';
import { readReportJson } from '../lib/report-json.mjs';
import { createReportSchema, normalizeRawReport, unwrapReportData } from '../lib/report-schema.mjs';

import { evaluateReportSize, validateReportFile } from './report-schema-validator.mjs';
import { validators } from './validator-manifest.mjs';

const rawArgs = stripLoggingModeArgs(process.argv.slice(2));
const args = new Set(rawArgs);
const reportJson = args.has('--report-json');
const forceRun = args.has('--force');
const skipSnapshotBuild = args.has('--skip-snapshot-build');
const onlyArg = rawArgs.find(arg => arg.startsWith('--only='));
const selectedValidatorNames = onlyArg
  ? new Set(
      onlyArg
        .split('=')[1]
        .split(',')
        .map(value => value.trim())
        .filter(Boolean)
    )
  : null;

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'validation-results.json');
const validationReportPath = path.join(root, 'reports', 'validation-report.json');
const staleReportThresholdMs = 15 * 60 * 1000;
const loggingMode = resolveLoggingMode(process.argv.slice(2), systemEnv);
const logger = createLogger({ label: 'validate-all', mode: loggingMode, rootDir: root });
const reportAuditDirectories = [
  path.join(root, 'reports'),
  path.join(root, 'reports', 'dashboard'),
];
const snapshotPath = path.join(root, 'reports', '.system-full', 'system-snapshot.json');

/**
 * @typedef {{ name: string; command: string; args: string[]; blocking: boolean; reportFile: string; syntheticReport?: boolean }} Validator
 * @typedef {{ name: string; command: string; args: string[]; status: 'pass' | 'fail'; duration: number; output: string; reportFile: string; reportMissing?: boolean }} ValidatorResult
 */

function getReportAbsolutePath(fileName) {
  return path.join(root, 'reports', fileName);
}

function buildSystemSnapshotArtifact() {
  execFileSync(
    process.execPath,
    ['--import', 'tsx/esm', 'scripts/core/build-system-snapshot.mjs'],
    {
      cwd: root,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 120_000,
      env: {
        ...process.env,
      },
    }
  );

  return snapshotPath;
}

function getSyntheticValidatorInputPaths(validator) {
  if (validator.name === 'typecheck') {
    return [
      path.join(root, 'src'),
      path.join(root, 'scripts'),
      path.join(root, 'config'),
      path.join(root, 'tsconfig.json'),
      path.join(root, 'next-env.d.ts'),
      path.join(root, 'package.json'),
    ];
  }

  if (validator.name === 'lint') {
    return [
      path.join(root, 'src'),
      path.join(root, 'config'),
      path.join(root, 'lib'),
      path.join(root, 'eslint.config.js'),
      path.join(root, 'package.json'),
      path.join(root, 'scripts', 'core'),
      path.join(root, 'scripts', 'runners'),
      path.join(root, 'scripts', 'lib'),
      path.join(root, 'scripts', 'analyzers', 'export-reports.mjs'),
      path.join(root, 'scripts', 'validators', 'validate-system-manifest-integrity.ts'),
    ];
  }

  return [];
}

function getCachedReportState(validator) {
  const reportPath = getReportAbsolutePath(validator.reportFile);

  if (!fs.existsSync(reportPath)) {
    return null;
  }

  const payload = readReportJson(root, validator.reportFile);

  if (payload === null) {
    return null;
  }

  const normalized = normalizeRawReport({
    name: validator.name,
    payload,
    sourceCommand: [validator.command, ...validator.args].join(' '),
  });

  fs.writeFileSync(reportPath, `${JSON.stringify(normalized, null, 2)}\n`, 'utf8');
  validateReportFile(reportPath, validator.reportFile);

  const reportMtimeMs = fs.statSync(reportPath).mtimeMs;
  if (Number.isFinite(reportMtimeMs) && Date.now() - reportMtimeMs > staleReportThresholdMs) {
    return null;
  }

  if (validator.syntheticReport && normalized.status === 'FAIL') {
    return null;
  }

  if (validator.syntheticReport) {
    const { latestMtimeMs } = getLatestInputMtime(getSyntheticValidatorInputPaths(validator));
    if (latestMtimeMs > fs.statSync(reportPath).mtimeMs) {
      return null;
    }
  }

  return {
    generatedAt: normalized.generatedAt,
    reportStatus: normalized.status,
  };
}

function buildCachedValidatorResult(validator, cachedReport) {
  const generatedAtTimestamp = Date.parse(cachedReport.generatedAt);

  return {
    name: validator.name,
    command: validator.command,
    args: validator.args,
    status: cachedReport.reportStatus === 'FAIL' ? 'fail' : 'pass',
    duration: 0,
    output: '',
    reportFile: validator.reportFile,
    reportMissing: false,
    cached: true,
    executionStatus: 'CACHED',
    reportStatus: cachedReport.reportStatus,
    reportGeneratedAt: cachedReport.generatedAt,
    stale: Number.isFinite(generatedAtTimestamp) && false,
  };
}

function writeSyntheticValidatorReport(validator, result) {
  const reportPath = getReportAbsolutePath(validator.reportFile);
  const report = createReportSchema({
    name: validator.name,
    status: result.status === 'pass' ? 'PASS' : validator.blocking ? 'FAIL' : 'WARN',
    summary: {
      total: 1,
      passed: result.status === 'pass' ? 1 : 0,
      failed: result.status === 'fail' && validator.blocking ? 1 : 0,
      warnings: result.status === 'fail' && !validator.blocking ? 1 : 0,
    },
    issues:
      result.status === 'fail'
        ? [{ validator: validator.name, output: result.output || 'Validator failed.' }]
        : [],
    data: {
      validator: validator.name,
      blocking: validator.blocking,
      command: [validator.command, ...validator.args].join(' '),
      durationMs: result.duration,
    },
    sourceCommand: [validator.command, ...validator.args].join(' '),
  });

  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
}

function finalizeValidatorResult(validator, result) {
  if (validator.syntheticReport && result.cached !== true) {
    writeSyntheticValidatorReport(validator, result);
  }

  const reportPath = getReportAbsolutePath(validator.reportFile);
  const reportExists = fs.existsSync(reportPath);
  if (reportExists) {
    try {
      const payload = readReportJson(root, validator.reportFile);
      if (payload !== null) {
        const normalizedReport = normalizeRawReport({
          name: validator.name,
          payload,
          sourceCommand: [validator.command, ...validator.args].join(' '),
        });
        fs.writeFileSync(reportPath, `${JSON.stringify(normalizedReport, null, 2)}\n`, 'utf8');

        result.reportGeneratedAt = normalizedReport.generatedAt;
        result.reportStatus = normalizedReport.status;
      }

      validateReportFile(reportPath, validator.reportFile);
    } catch (error) {
      return {
        ...result,
        status: 'fail',
        output: [result.output, error instanceof Error ? error.message : String(error)]
          .filter(Boolean)
          .join('\n'),
        reportFile: validator.reportFile,
        reportMissing: false,
      };
    }

    return {
      ...result,
      reportFile: validator.reportFile,
      reportMissing: false,
      executionStatus: result.executionStatus ?? (result.status === 'fail' ? 'FAIL' : 'PASS'),
    };
  }

  return {
    ...result,
    status: 'fail',
    output: [result.output, `Missing required report file: reports/${validator.reportFile}`]
      .filter(Boolean)
      .join('\n'),
    reportFile: validator.reportFile,
    reportMissing: true,
    executionStatus: 'FAIL',
  };
}

/**
 * @param {Validator} validator
 * @returns {ValidatorResult}
 */
function runValidator(validator) {
  const start = Date.now();
  let output = '';
  let status = 'pass';

  try {
    const result = execFileSync(validator.command, validator.args, {
      cwd: root,
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'],
      timeout: 120_000,
      env: {
        ...process.env,
        SYSTEM_SNAPSHOT_PATH: snapshotPath,
      },
    });
    output = result || '';
  } catch (err) {
    status = 'fail';
    output = [err.stdout, err.stderr].filter(Boolean).join('\n');
  }

  return {
    name: validator.name,
    command: validator.command,
    args: validator.args,
    status,
    duration: Date.now() - start,
    output,
    reportFile: validator.reportFile,
    cached: false,
    executionStatus: status === 'fail' ? 'FAIL' : 'PASS',
    reportStatus: status === 'fail' ? 'FAIL' : 'PASS',
    reportGeneratedAt: null,
    stale: false,
  };
}

function runValidatorAsync(validator) {
  const start = Date.now();

  return new Promise(resolve => {
    execFile(
      validator.command,
      validator.args,
      {
        cwd: root,
        encoding: 'utf8',
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 120_000,
        env: {
          ...process.env,
          SYSTEM_SNAPSHOT_PATH: snapshotPath,
        },
      },
      (error, stdout, stderr) => {
        resolve({
          name: validator.name,
          command: validator.command,
          args: validator.args,
          status: error ? 'fail' : 'pass',
          duration: Date.now() - start,
          output: error ? [stdout, stderr].filter(Boolean).join('\n') : stdout || '',
          reportFile: validator.reportFile,
          cached: false,
          executionStatus: error ? 'FAIL' : 'PASS',
          reportStatus: error ? 'FAIL' : 'PASS',
          reportGeneratedAt: null,
          stale: false,
        });
      }
    );
  });
}

function buildReport(results) {
  const reportSize = auditReportSizes();
  const passed = results.filter(result => result.status === 'pass');
  const failed = results.filter(result => result.status === 'fail');
  const staleReports = results.filter(result => result.stale === true);
  const blockingFailed = failed.filter(
    result => validators.find(validator => validator.name === result.name)?.blocking !== false
  );
  const advisoryFailed = failed.filter(
    result => validators.find(validator => validator.name === result.name)?.blocking === false
  );
  const reportSizePassed = reportSize.failures.length === 0 && reportSize.warnings.length === 0;
  const totalChecks = results.length + 1;
  const totalPassed = passed.length + (reportSizePassed ? 1 : 0);
  const totalFailed = blockingFailed.length + (reportSize.failures.length > 0 ? 1 : 0);
  const totalWarnings =
    advisoryFailed.length +
    (reportSize.failures.length === 0 && reportSize.warnings.length > 0 ? 1 : 0) +
    staleReports.length;

  const contentQualityReport = unwrapReportData(
    readReportJson(root, 'content-quality-report.json')
  );

  const payload = {
    total: {
      passed: totalPassed,
      failed: totalFailed,
      blockingFailed: blockingFailed.length + reportSize.failures.length,
      advisoryFailed: advisoryFailed.length + reportSize.warnings.length,
      total: totalChecks,
    },
    validators: results.map(result => {
      const validator = validators.find(entry => entry.name === result.name);
      return {
        name: result.name,
        status: result.status,
        duration: 0,
        blocking: validator?.blocking !== false,
        reportFile: result.reportFile,
        reportMissing: result.reportMissing === true,
        cached: result.cached === true,
        executionStatus: result.executionStatus,
        reportStatus: result.reportStatus,
        reportGeneratedAt: result.reportGeneratedAt,
        stale: result.stale === true,
      };
    }),
    errors: failed.map(result => {
      const validator = validators.find(entry => entry.name === result.name);
      return {
        validator: result.name,
        blocking: validator?.blocking !== false,
        output: result.output,
      };
    }),
    reportSize: {
      status:
        reportSize.failures.length > 0 ? 'FAIL' : reportSize.warnings.length > 0 ? 'WARN' : 'PASS',
      checked: reportSize.checked,
      warnings: reportSize.warnings,
      failures: reportSize.failures,
    },
    latestRun: 'stable',
    cacheHits: results.filter(result => result.cached === true).length,
    staleReports: staleReports.map(result => ({
      validator: result.name,
      reportFile: result.reportFile,
      generatedAt: result.reportGeneratedAt,
    })),
    seo: contentQualityReport?.summary?.seo ?? null,
    content: contentQualityReport?.summary?.content ?? null,
    authority: contentQualityReport?.summary?.authority ?? null,
  };

  const issues = [
    ...payload.errors,
    ...reportSize.failures.map(item => ({
      validator: 'report-size-guard',
      blocking: true,
      output: `${item.label} exceeded ${item.failAt} bytes (${item.size} bytes)`,
    })),
    ...reportSize.warnings.map(item => ({
      validator: 'report-size-guard',
      blocking: false,
      output: `${item.label} reached warning threshold ${item.warnAt} bytes (${item.size} bytes)`,
    })),
    ...staleReports.map(result => ({
      validator: result.name,
      blocking: false,
      output: `stale report reused: ${result.reportFile} (${result.reportGeneratedAt ?? 'unknown'})`,
    })),
  ];

  return createReportSchema({
    name: 'validation-results',
    status: totalFailed > 0 ? 'FAIL' : totalWarnings > 0 ? 'WARN' : 'PASS',
    summary: {
      total: totalChecks,
      passed: totalPassed,
      failed: totalFailed,
      warnings: totalWarnings,
    },
    issues,
    data: payload,
    sourceCommand: 'node scripts/core/validate-all.mjs --report-json',
  });
}

function listAuditedReportFiles() {
  const reportFiles = [];

  for (const dirPath of reportAuditDirectories) {
    if (!fs.existsSync(dirPath)) {
      continue;
    }

    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
      if (
        entry.name.startsWith('.') ||
        entry.name === 'system-snapshots' ||
        entry.name === 'visual-audit'
      ) {
        continue;
      }

      const absolutePath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        continue;
      }

      if (!/\.(json|md)$/i.test(entry.name)) {
        continue;
      }

      reportFiles.push({
        absolutePath,
        label: path.relative(path.join(root, 'reports'), absolutePath).replaceAll(path.sep, '/'),
      });
    }
  }

  return reportFiles.sort((left, right) => left.label.localeCompare(right.label));
}

function auditReportSizes() {
  const checked = listAuditedReportFiles().map(({ absolutePath, label }) => {
    const size = fs.statSync(absolutePath).size;
    return evaluateReportSize(label, size);
  });

  return {
    checked: checked.length,
    warnings: checked.filter(item => item.status === 'WARN'),
    failures: checked.filter(item => item.status === 'FAIL'),
  };
}

function logValidatorResult(result) {
  const displayStatus = result.cached ? 'SKIPPED' : result.status === 'pass' ? 'PASS' : 'FAIL';
  logger.printNodeLine(
    `[VALIDATOR] ${result.name} -> ${displayStatus} (${result.duration}ms${result.cached ? ', cached' : ''})`
  );

  if (logger.isDebug()) {
    logger.printDebug(result.name, {
      kind: 'validator',
      input: [result.command, ...result.args].join(' '),
      output: result.reportFile,
      durationMs: result.duration,
      executionStatus: displayStatus,
      warning: result.stale ? 'stale report reused' : undefined,
    });
  }
}

async function main() {
  const activeValidators = selectedValidatorNames
    ? validators.filter(validator => selectedValidatorNames.has(validator.name))
    : validators;

  if (!skipSnapshotBuild) {
    buildSystemSnapshotArtifact();
  }

  logger.printSection('running validators');
  if (forceRun) {
    logger.printSummary('force mode -> validators will rerun even when reports already exist');
  }
  if (selectedValidatorNames) {
    logger.printSummary(
      `validator subset -> ${activeValidators.map(validator => validator.name).join(', ')}`
    );
  }
  if (skipSnapshotBuild) {
    logger.printSummary('snapshot build skipped for this run');
  }

  /** @type {ValidatorResult[]} */
  const blockingResults = [];
  const advisoryValidators = [];

  for (const validator of activeValidators) {
    if (validator.blocking === false) {
      advisoryValidators.push(validator);
      continue;
    }

    const cachedReport = forceRun ? null : getCachedReportState(validator);
    const result = finalizeValidatorResult(
      validator,
      cachedReport ? buildCachedValidatorResult(validator, cachedReport) : runValidator(validator)
    );
    blockingResults.push(result);
    logValidatorResult(result);
  }

  /** @type {ValidatorResult[]} */
  let advisoryResults = [];

  if (advisoryValidators.length > 0) {
    logger.printSection('running advisory validators');

    advisoryResults = await Promise.all(
      advisoryValidators.map(async validator => {
        const cachedReport = forceRun ? null : getCachedReportState(validator);
        return finalizeValidatorResult(
          validator,
          cachedReport
            ? buildCachedValidatorResult(validator, cachedReport)
            : await runValidatorAsync(validator)
        );
      })
    );

    for (const result of advisoryResults) {
      logValidatorResult(result);
    }
  }

  const resultByName = new Map(
    [...blockingResults, ...advisoryResults].map(result => [result.name, result])
  );
  const results = activeValidators
    .map(validator => resultByName.get(validator.name))
    .filter(Boolean);

  const report = buildReport(results);

  logger.printTotals({
    passed: report.summary.passed,
    blockingFailed: report.data.total.blockingFailed,
    advisoryFailed: report.data.total.advisoryFailed,
    total: report.summary.total,
  });

  if ((report.issues ?? []).length > 0) {
    logger.printErrors(
      report.issues.map(failure => {
        const excerpt = failure.output
          ? failure.output
              .split('\n')
              .map(line => line.trim())
              .filter(Boolean)
              .slice(0, logger.isVerbose() ? 8 : 1)
              .join(' | ')
          : 'no output captured';
        return `${failure.validator} (${failure.blocking ? 'blocking' : 'advisory'}): ${excerpt}`;
      }),
      'failures',
      logger.isVerbose() ? 12 : 5
    );
  }

  const writtenReportPath = logger.writeReport(reportPath, report);
  logger.writeReport(validationReportPath, report);
  validateReportFile(reportPath, 'validation-results.json');
  validateReportFile(validationReportPath, 'validation-report.json');
  logger.printSummary(`report -> ${writtenReportPath}`);
  logger.printSummary(`report -> ${logger.relativePath(validationReportPath)}`);

  if (reportJson && logger.isVerbose()) {
    logger.printSummary('report-json flag active; full payload preserved in file output');
  }

  if (report.data.total.blockingFailed > 0) {
    process.exitCode = 1;
  } else {
    logger.printSummary('all blocking validators passed');
  }
}

main();
