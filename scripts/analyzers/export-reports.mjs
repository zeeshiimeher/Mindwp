/**
 * Export Reports (unified)
 *
 * Regenerates report artifacts that are not emitted directly by validate-all.
 * Usage:
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs --type=client
 *   node --import tsx/esm scripts/analyzers/export-reports.mjs
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { readJsonFile } from '../lib/report-json.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const EXPORT_SOURCE_COMMAND = 'node --import tsx/esm scripts/analyzers/export-reports.mjs';
const SYSTEM_MODE = process.env.SYSTEM_MODE ?? 'development';
const LOGGING_MODE = resolveLoggingMode(process.argv.slice(2), process.env);
const logger = createLogger({ label: 'export-reports', mode: LOGGING_MODE, rootDir: ROOT });

const typeArg = process.argv.find(a => a.startsWith('--type='));
const requestedType = typeArg ? typeArg.split('=')[1] : 'all';

function assertExportLock() {
  if (SYSTEM_MODE !== 'production') {
    return;
  }

  if (process.env.SYSTEM_ALLOW_REPORT_EXPORT === '1') {
    return;
  }

  throw new Error(
    'Manual report generation is locked in production mode. Use npm run system:full so the full pipeline stays deterministic.'
  );
}

async function init() {
  const { ensureGraphInitialized } = await import(
    path.join(ROOT, 'src/domains/init/ensureGraphInitialized.ts')
  );
  await ensureGraphInitialized();

  const reportsDir = path.join(ROOT, 'reports');
  if (!fs.existsSync(reportsDir)) fs.mkdirSync(reportsDir, { recursive: true });
  return reportsDir;
}

function writeJson(filePath, data) {
  logger.writeReport(filePath, data);
}

function runTsScript(relativePath) {
  const scriptPath = path.join(ROOT, relativePath);
  const result = spawnSync(process.execPath, ['--import', 'tsx/esm', scriptPath], {
    cwd: ROOT,
    encoding: 'utf8',
    env: {
      ...process.env,
      SYSTEM_LOGGING_MODE: LOGGING_MODE,
    },
  });

  if (result.status !== 0) {
    const output = [result.stdout, result.stderr]
      .filter(Boolean)
      .join('\n')
      .split('\n')
      .map(line => line.trim())
      .filter(Boolean)
      .slice(0, 8)
      .join(' | ');
    throw new Error(`Failed to run ${relativePath}${output ? `: ${output}` : ''}`);
  }
}

function stampReportSource(reportsDir, fileName, sourceCommand) {
  const filePath = path.join(reportsDir, fileName);
  const report = readJsonFile(filePath);

  if (!report || typeof report !== 'object' || Array.isArray(report)) {
    return;
  }

  writeJson(filePath, {
    ...report,
    generatedAt: typeof report.generatedAt === 'string' ? report.generatedAt : new Date().toISOString(),
    sourceCommand,
  });
}

function buildMarkdownSummary(report) {
  const lines = [
    '# Client Report',
    '',
    `Generated at: ${report.generatedAt}`,
    '',
    '## Summary',
    '',
    `- Total pages: ${report.summary.totalPages}`,
    `- Healthy: ${report.summary.healthy}`,
    `- Weak: ${report.summary.weak}`,
    `- Critical: ${report.summary.critical}`,
    '',
    '## Report Files',
    '',
  ];

  for (const item of report.reports) {
    lines.push(`- ${item.name}`);
  }

  lines.push('');
  return lines.join('\n');
}

function buildClientReport(reportsDir) {
  const validationResults = readJsonFile(path.join(reportsDir, 'validation-results.json')) ?? {};
  const contentQuality = readJsonFile(path.join(reportsDir, 'content-quality-report.json')) ?? {};
  const graphReport = readJsonFile(path.join(reportsDir, 'graph-report.json')) ?? {};
  const reportNames = fs.readdirSync(reportsDir).filter(name => !name.startsWith('.')).sort();

  const report = {
    generatedAt: new Date().toISOString(),
    sourceCommand: EXPORT_SOURCE_COMMAND,
    summary: {
      totalPages: validationResults?.seo?.pagesAnalyzed ?? 0,
      healthy: Math.max((validationResults?.seo?.pagesAnalyzed ?? 0) - (contentQuality?.issueCount ?? 0), 0),
      weak: contentQuality?.warningCount ?? 0,
      critical: contentQuality?.issueCount ?? validationResults?.total?.blockingFailed ?? 0,
    },
    validation: validationResults?.total ?? null,
    contentQuality: {
      issueCount: contentQuality?.issueCount ?? 0,
      warningCount: contentQuality?.warningCount ?? 0,
    },
    graph: {
      errorCount: graphReport?.errorCount ?? 0,
      warningCount: graphReport?.warningCount ?? 0,
    },
    reports: reportNames.map(name => ({ name })),
  };

  const jsonPath = path.join(reportsDir, 'client-report.json');
  writeJson(jsonPath, report);
  logger.printSummary(`report -> ${logger.relativePath(jsonPath)}`);

  const mdPath = path.join(reportsDir, 'client-report.md');
  fs.writeFileSync(mdPath, buildMarkdownSummary(report));
  logger.printSummary(`report -> ${logger.relativePath(mdPath)}`);
  logger.printTotals({
    pages: report.summary.totalPages,
    healthy: report.summary.healthy,
    weak: report.summary.weak,
    critical: report.summary.critical,
  });
}

function buildCtaReport(reportsDir) {
  const validationResults = readJsonFile(path.join(reportsDir, 'validation-results.json')) ?? {};
  const validators = new Map(
    (validationResults.validators ?? []).map(validator => [validator.name, validator])
  );
  const trackedValidators = [
    'validate-cta-label-contract',
    'validate-conversion-contract',
    'validate-cta-violations',
  ];
  const entries = trackedValidators.map(name => {
    const validator = validators.get(name);
    return {
      name,
      status: validator?.status ?? 'missing',
      blocking: validator?.blocking ?? true,
      duration: validator?.duration ?? null,
    };
  });

  writeJson(path.join(reportsDir, 'cta-report.json'), {
    generatedAt: new Date().toISOString(),
    sourceCommand: EXPORT_SOURCE_COMMAND,
    status: entries.some(entry => entry.status !== 'pass') ? 'warning' : 'clean',
    validators: entries,
  });
}

async function exportClient(reportsDir) {
  logger.printSection('generating topic authority scores');
  runTsScript('scripts/generators/generate-topic-authority-scores.ts');
  stampReportSource(
    reportsDir,
    'topic-authority-scores.json',
    'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts'
  );

  logger.printSection('generating content gaps report');
  runTsScript('scripts/analyzers/generate-content-gaps.ts');
  stampReportSource(
    reportsDir,
    'content-gaps.json',
    'node --import tsx/esm scripts/analyzers/generate-content-gaps.ts'
  );

  stampReportSource(reportsDir, 'validation-results.json', 'node scripts/core/validate-all.mjs --report-json');
  stampReportSource(reportsDir, 'content-quality-report.json', 'npx tsx scripts/validators/validate-content-quality.mjs --report-json');
  stampReportSource(reportsDir, 'graph-report.json', 'npx tsx scripts/validators/validate-graph.ts');

  logger.printSection('generating client report');
  buildClientReport(reportsDir);
  logger.printSection('generating cta report');
  buildCtaReport(reportsDir);
}

async function main() {
  assertExportLock();

  const reportsDir = await init();

  if (requestedType === 'client' || requestedType === 'all') {
    await exportClient(reportsDir);
  }

  logger.printSummary('done');
}

main().catch(err => {
  process.stderr.write(`[export-reports] Failed: ${err instanceof Error ? err.message : String(err)}\n`);
  process.exit(1);
});
