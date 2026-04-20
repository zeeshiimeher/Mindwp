/**
 * Export Reports (unified)
 *
 * Regenerates deterministic report artifacts that are not emitted directly by validate-all,
 * normalizes report envelopes, and writes pipeline coverage artifacts.
 */

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { readJsonFile } from '../lib/report-json.mjs';
import { createReportSchema, normalizeRawReport, unwrapReportData } from '../lib/report-schema.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const REPORTS_DIR = path.join(ROOT, 'reports');
const EXPORT_SOURCE_COMMAND = 'node --import tsx/esm scripts/analyzers/export-reports.mjs';
const SYSTEM_MODE = process.env.SYSTEM_MODE ?? 'development';
const LOGGING_MODE = resolveLoggingMode(process.argv.slice(2), process.env);
const logger = createLogger({ label: 'export-reports', mode: LOGGING_MODE, rootDir: ROOT });
const OPTIONAL_AUDITS_ENABLED = process.env.SYSTEM_INCLUDE_OPTIONAL_AUDITS === '1';

const typeArg = process.argv.find(arg => arg.startsWith('--type='));
const requestedType = typeArg ? typeArg.split('=')[1] : 'all';

const generatorSteps = [
  {
    name: 'generate-topic-authority-scores',
    relativePath: 'scripts/generators/generate-topic-authority-scores.ts',
    sourceCommand: 'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts',
    reportFiles: ['topic-authority-scores.json', 'topic-authority-scores.md'],
  },
];

const analyzerSteps = [
  {
    name: 'generate-content-gaps',
    relativePath: 'scripts/analyzers/generate-content-gaps.ts',
    sourceCommand: 'node --import tsx/esm scripts/analyzers/generate-content-gaps.ts',
    reportFiles: ['content-gaps.json', 'content-gaps.md'],
  },
  {
    name: 'audit-content-consistency',
    relativePath: 'scripts/analyzers/audit-content-consistency.mjs',
    sourceCommand: 'node --import tsx/esm scripts/analyzers/audit-content-consistency.mjs',
    reportFiles: ['content-consistency-audit.json'],
  },
  {
    name: 'detect-page-priorities',
    relativePath: 'scripts/analyzers/detect-page-priorities.mjs',
    sourceCommand: 'node --import tsx/esm scripts/analyzers/detect-page-priorities.mjs',
    reportFiles: ['page-priorities.json'],
  },
  {
    name: 'generate-content-intelligence',
    relativePath: 'scripts/analyzers/generate-content-intelligence.ts',
    sourceCommand: 'node --import tsx/esm scripts/analyzers/generate-content-intelligence.ts',
    reportFiles: ['content-intelligence.json'],
  },
  {
    name: 'inspect-graph',
    relativePath: 'scripts/analyzers/inspect-graph.ts',
    sourceCommand: 'node --import tsx/esm scripts/analyzers/inspect-graph.ts',
    reportFiles: ['graph-derived-summary.json'],
  },
  {
    name: 'score-content',
    relativePath: 'scripts/analyzers/score-content.mjs',
    sourceCommand: 'node --import tsx/esm scripts/analyzers/score-content.mjs',
    reportFiles: ['content-score.json'],
  },
  {
    name: 'heading-audit',
    optional: true,
    reason: 'not required',
    syntheticReportFile: 'heading-audit-report.json',
  },
  {
    name: 'run-visual-audit',
    optional: true,
    reason: 'not required',
    syntheticReportFile: 'visual-audit-report.json',
  },
];

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
  const { ensureGraphInitialized } = await import(path.join(ROOT, 'src/domains/init/ensureGraphInitialized.ts'));
  await ensureGraphInitialized();
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
}

function writeJson(filePath, data) {
  logger.writeReport(filePath, data);
}

function readReport(fileName) {
  return readJsonFile(path.join(REPORTS_DIR, fileName));
}

function readReportData(fileName) {
  return unwrapReportData(readReport(fileName)) ?? {};
}

function runManagedScript(relativePath) {
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

function normalizeReportOutput(fileName, sourceCommand) {
  const filePath = path.join(REPORTS_DIR, fileName);
  if (!fs.existsSync(filePath) || !fileName.endsWith('.json')) {
    return;
  }

  const payload = readJsonFile(filePath);
  if (payload === null) {
    return;
  }

  writeJson(
    filePath,
    normalizeRawReport({
      name: fileName.replace(/\.json$/i, ''),
      payload,
      sourceCommand,
    })
  );
}

function writeSkippedReport(fileName, name, reason) {
  const filePath = path.join(REPORTS_DIR, fileName);
  writeJson(
    filePath,
    createReportSchema({
      name,
      status: 'WARN',
      summary: {
        total: 0,
        passed: 0,
        failed: 0,
        warnings: 1,
      },
      data: {
        skipped: true,
        reason,
      },
      sourceCommand: EXPORT_SOURCE_COMMAND,
    })
  );
}

function runPipelineStep(step, bucket) {
  if (step.optional && !OPTIONAL_AUDITS_ENABLED) {
    if (step.syntheticReportFile) {
      writeSkippedReport(step.syntheticReportFile, step.name, step.reason ?? 'not required');
    }

    bucket.push({
      name: step.name,
      status: 'SKIPPED',
      outputs: step.syntheticReportFile ? [step.syntheticReportFile] : [],
      skipped: true,
      reason: step.reason ?? 'not required',
    });
    return;
  }

  logger.printSection(`running ${step.name}`);
  runManagedScript(step.relativePath);

  for (const fileName of step.reportFiles ?? []) {
    normalizeReportOutput(fileName, step.sourceCommand);
  }

  bucket.push({
    name: step.name,
    status: 'PASS',
    outputs: step.reportFiles ?? [],
    skipped: false,
  });
}

function buildTopicInsights() {
  const topicScores = readReportData('topic-authority-scores.json');
  const scores = Array.isArray(topicScores?.scores) ? topicScores.scores : [];
  const strongest = scores.slice(0, 5).map(topic => ({
    topic: topic.topic,
    score: topic.score,
    level: topic.level,
    status: topic.status,
  }));
  const weakest = [...scores].slice(-5).reverse().map(topic => ({
    topic: topic.topic,
    score: topic.score,
    level: topic.level,
    status: topic.status,
  }));
  const report = createReportSchema({
    name: 'topic-insights',
    status: weakest.length > 0 ? 'WARN' : 'PASS',
    summary: {
      total: scores.length,
      passed: Math.max(scores.length - weakest.length, 0),
      failed: 0,
      warnings: weakest.length,
    },
    issues: weakest,
    data: {
      strongest,
      weakest,
      averageScore: topicScores?.averageScore ?? 0,
      topicsAnalyzed: topicScores?.topicsAnalyzed ?? scores.length,
    },
    sourceCommand: EXPORT_SOURCE_COMMAND,
  });

  const filePath = path.join(REPORTS_DIR, 'topic-insights.json');
  writeJson(filePath, report);
  logger.printSummary(`report -> ${logger.relativePath(filePath)}`);
}

function buildClientReport() {
  const validationResults = readReportData('validation-results.json');
  const contentQuality = readReportData('content-quality-report.json');
  const graphReport = readReportData('graph-report.json');
  const reportNames = fs.readdirSync(REPORTS_DIR).filter(name => !name.startsWith('.')).sort();

  const totalPages = validationResults?.seo?.pagesAnalyzed ?? 0;
  const issueCount = contentQuality?.issueCount ?? 0;
  const warningCount = contentQuality?.warningCount ?? 0;
  const critical = issueCount || validationResults?.total?.blockingFailed || 0;
  const payload = {
    summary: {
      totalPages,
      healthy: Math.max(totalPages - issueCount, 0),
      weak: warningCount,
      critical,
    },
    validation: validationResults?.total ?? null,
    contentQuality: {
      issueCount,
      warningCount,
    },
    graph: {
      errorCount: graphReport?.errorCount ?? 0,
      warningCount: graphReport?.warningCount ?? 0,
    },
    reports: reportNames.map(name => ({ name })),
  };

  const report = createReportSchema({
    name: 'client-report',
    status: critical > 0 ? 'WARN' : 'PASS',
    summary: {
      total: totalPages,
      passed: payload.summary.healthy,
      failed: 0,
      warnings: payload.summary.weak + payload.summary.critical,
    },
    data: payload,
    sourceCommand: EXPORT_SOURCE_COMMAND,
  });

  const jsonPath = path.join(REPORTS_DIR, 'client-report.json');
  writeJson(jsonPath, report);
  logger.printSummary(`report -> ${logger.relativePath(jsonPath)}`);

  const mdPath = path.join(REPORTS_DIR, 'client-report.md');
  fs.writeFileSync(
    mdPath,
    [
      '# Client Report',
      '',
      `Generated at: ${report.generatedAt}`,
      '',
      '## Summary',
      '',
      `- Total pages: ${payload.summary.totalPages}`,
      `- Healthy: ${payload.summary.healthy}`,
      `- Weak: ${payload.summary.weak}`,
      `- Critical: ${payload.summary.critical}`,
      '',
      '## Report Files',
      '',
      ...payload.reports.map(item => `- ${item.name}`),
      '',
    ].join('\n'),
    'utf8'
  );
  logger.printSummary(`report -> ${logger.relativePath(mdPath)}`);
}

function buildCtaReport() {
  const validationResults = readReportData('validation-results.json');
  const validators = new Map((validationResults?.validators ?? []).map(validator => [validator.name, validator]));
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
  const warningCount = entries.filter(entry => entry.status !== 'pass').length;
  writeJson(
    path.join(REPORTS_DIR, 'cta-report.json'),
    createReportSchema({
      name: 'cta-report',
      status: warningCount > 0 ? 'WARN' : 'PASS',
      summary: {
        total: entries.length,
        passed: entries.length - warningCount,
        failed: 0,
        warnings: warningCount,
      },
      issues: entries.filter(entry => entry.status !== 'pass'),
      data: {
        validators: entries,
      },
      sourceCommand: EXPORT_SOURCE_COMMAND,
    })
  );
}

function buildPipelineReport(generatorResults, analyzerResults) {
  const validationResults = readReportData('validation-results.json');
  const validators = Array.isArray(validationResults?.validators) ? validationResults.validators : [];
  const validatorEntries = validators.map(validator => ({
    name: validator.name,
    status: String(validator.status).toUpperCase() === 'FAIL' ? 'FAIL' : 'PASS',
    reportFile: validator.reportFile,
    reportMissing: validator.reportMissing === true,
  }));

  const missing = [
    ...generatorResults.flatMap(entry => entry.outputs ?? []).filter(fileName => !fs.existsSync(path.join(REPORTS_DIR, fileName))),
    ...analyzerResults.flatMap(entry => entry.outputs ?? []).filter(fileName => !fs.existsSync(path.join(REPORTS_DIR, fileName))),
    ...validatorEntries.filter(entry => entry.reportMissing).map(entry => entry.reportFile),
  ];
  const skipped = analyzerResults
    .filter(entry => entry.skipped)
    .map(entry => ({
      name: entry.name,
      skipped: true,
      reason: entry.reason,
    }));
  const failedCount = validatorEntries.filter(entry => entry.status === 'FAIL').length + missing.length;
  const warningCount = skipped.length;
  const report = createReportSchema({
    name: 'pipeline-report',
    status: failedCount > 0 ? 'FAIL' : warningCount > 0 ? 'WARN' : 'PASS',
    summary: {
      total: generatorResults.length + analyzerResults.length + validatorEntries.length,
      passed:
        generatorResults.filter(entry => entry.status === 'PASS').length +
        analyzerResults.filter(entry => entry.status === 'PASS').length +
        validatorEntries.filter(entry => entry.status === 'PASS').length,
      failed: failedCount,
      warnings: warningCount,
    },
    issues: missing.map(fileName => ({ file: fileName, reason: 'missing required report output' })),
    data: {
      generators: generatorResults,
      analyzers: analyzerResults,
      validators: validatorEntries,
      missing,
      skipped,
    },
    sourceCommand: EXPORT_SOURCE_COMMAND,
  });

  const filePath = path.join(REPORTS_DIR, 'pipeline-report.json');
  writeJson(filePath, report);
  logger.printSummary(`report -> ${logger.relativePath(filePath)}`);
}

function normalizeCoreReports() {
  normalizeReportOutput('validation-results.json', 'node scripts/core/validate-all.mjs --report-json');
  normalizeReportOutput('validation-report.json', 'node scripts/core/validate-all.mjs --report-json');
  normalizeReportOutput('content-quality-report.json', 'npx tsx scripts/validators/validate-content-quality.mjs --report-json');
  normalizeReportOutput('graph-report.json', 'npx tsx scripts/validators/validate-graph.ts --report-json');
  normalizeReportOutput('authority-map.json', 'node --import tsx/esm scripts/generators/generate-authority-map.ts');
}

async function exportClient() {
  const generatorResults = [];
  const analyzerResults = [];

  for (const step of generatorSteps) {
    runPipelineStep(step, generatorResults);
  }

  for (const step of analyzerSteps) {
    runPipelineStep(step, analyzerResults);
  }

  normalizeCoreReports();
  buildTopicInsights();
  buildClientReport();
  buildCtaReport();
  buildPipelineReport(generatorResults, analyzerResults);
}

async function main() {
  assertExportLock();
  await init();

  if (requestedType === 'client' || requestedType === 'all') {
    await exportClient();
  }

  logger.printSummary('done');
}

main().catch(error => {
  process.stderr.write(`[export-reports] Failed: ${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});