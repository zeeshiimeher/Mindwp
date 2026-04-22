#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { buildSystemProcessEnv, systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { isExecutionCacheValid } from '../lib/execution-cache.mjs';
import { attachGeneratedJsonMetadata } from '../lib/generated-file-metadata.mjs';
import { readJsonFile, readReportJson } from '../lib/report-json.mjs';
import { createReportSchema, normalizeRawReport, unwrapReportData } from '../lib/report-schema.mjs';
import {
  parseClientDashboardContract,
  parseSystemReportContract,
} from '../lib/system-contract-schemas.mjs';

import { getReportFiles, getValidatorDefinitions } from './system-manifest.mjs';
import { buildAndValidateDashboardData, DASHBOARD_REPORT_FILES } from './dashboard-data.mjs';
import { validateReportFile } from './report-schema-validator.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const reportsDir = path.join(root, 'reports');
const reportPath = path.join(reportsDir, 'system-report.json');
const clientDashboardPath = path.join(reportsDir, 'client-dashboard.json');
const snapshotDir = path.join(reportsDir, 'system-snapshots');
const snapshotSummaryPath = path.join(snapshotDir, 'latest-summary.json');
const tempDir = path.join(reportsDir, '.system-full');
const isWindows = process.platform === 'win32';
const skipTests = process.argv.includes('--skip-tests');
const includeE2E = process.argv.includes('--include-e2e') || process.argv.includes('--e2e');
const sourceCommand =
  systemEnv.SYSTEM_ENTRY_COMMAND ??
  (includeE2E ? 'npm run system:full -- --include-e2e' : 'npm run system:full');
const systemMode = systemEnv.SYSTEM_MODE;
const executionLock = systemEnv.SYSTEM_EXECUTION_LOCK;
const loggingMode = resolveLoggingMode(process.argv.slice(2), systemEnv);
const logger = createLogger({ label: 'system:full', mode: loggingMode, rootDir: root });
const reportInputPathsByFile = new Map([
  [
    'authority-map.json',
    [
      'src/domains/blog/registry.ts',
      'src/domains/case-studies/registry.ts',
      'src/domains/features/registry.ts',
      'src/domains/industries/registry.ts',
      'src/domains/resources/generatedRegistry.ts',
      'src/domains/services/registry.ts',
      'src/domains/contentModel.ts',
      'src/domains/init',
      'src/lib/authority',
      'src/lib/content-graph',
      'src/lib/content-quality',
      'scripts/generators/generate-authority-map.ts',
    ],
  ],
  [
    'topic-authority-scores.json',
    [
      'src/domains/blog/registry.ts',
      'src/domains/case-studies/registry.ts',
      'src/domains/features/registry.ts',
      'src/domains/industries/registry.ts',
      'src/domains/resources/generatedRegistry.ts',
      'src/domains/services/registry.ts',
      'src/domains/contentModel.ts',
      'src/domains/init',
      'src/lib/content-graph',
      'src/lib/content-quality',
      'scripts/generators/generate-topic-authority-scores.ts',
    ],
  ],
  [
    'topic-authority-scores.md',
    [
      'src/domains/blog/registry.ts',
      'src/domains/case-studies/registry.ts',
      'src/domains/features/registry.ts',
      'src/domains/industries/registry.ts',
      'src/domains/resources/generatedRegistry.ts',
      'src/domains/services/registry.ts',
      'src/domains/contentModel.ts',
      'src/domains/init',
      'src/lib/content-graph',
      'src/lib/content-quality',
      'scripts/generators/generate-topic-authority-scores.ts',
    ],
  ],
]);
const quickPreservedReportFiles = [
  'pipeline-report.json',
  'system-report.json',
  'system-health.json',
  'client-dashboard.json',
  'dashboard/system.json',
  'dashboard/validators.json',
  'dashboard/graph.json',
  'dashboard/topics.json',
  'dashboard/content.json',
  'dashboard/pipeline.json',
];

function parseOutputModeArg(arg) {
  if (!arg.startsWith('--output=')) {
    return null;
  }

  return arg.slice('--output='.length).trim() || null;
}

function normalizeOutputMode(value) {
  return value === 'full' ? 'full' : 'summary';
}

function resolveOutputMode(argv = []) {
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--output') {
      return normalizeOutputMode(argv[index + 1]);
    }

    const inlineMode = parseOutputModeArg(arg);
    if (inlineMode) {
      return normalizeOutputMode(inlineMode);
    }
  }

  return 'summary';
}

const outputMode = resolveOutputMode(process.argv.slice(2));

const binaries = {
  node: process.execPath,
  npm: isWindows ? 'npm.cmd' : 'npm',
  npx: isWindows ? 'npx.cmd' : 'npx',
};

const reportStaleThresholdMs = 15 * 60 * 1000;
const requiredReportFiles = new Set(getReportFiles());

const validatorReportSourceByFile = new Map(
  getValidatorDefinitions().map(validator => [
    validator.reportFile,
    [validator.command, ...validator.args].join(' '),
  ])
);
const validatorCommandByName = new Map(
  getValidatorDefinitions().map(validator => [validator.name, [validator.command, ...validator.args].join(' ')])
);
const validatorReportFileByName = new Map(
  getValidatorDefinitions().map(validator => [validator.name, validator.reportFile])
);

const reportSourceByFile = new Map([
  ['authority-map.json', 'node --import tsx/esm scripts/generators/generate-authority-map.ts'],
  ['validation-report.json', 'node scripts/core/validate-all.mjs --report-json'],
  ['validation-results.json', 'node scripts/core/validate-all.mjs --report-json'],
  ['graph-derived-summary.json', 'node --import tsx/esm scripts/analyzers/inspect-graph.ts'],
  [
    'topic-authority-scores.json',
    'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts',
  ],
  [
    'topic-authority-scores.md',
    'node --import tsx/esm scripts/generators/generate-topic-authority-scores.ts',
  ],
  ['topic-insights.json', 'node --import tsx/esm scripts/analyzers/export-reports.mjs'],
  ['content-gaps.json', 'node --import tsx/esm scripts/analyzers/generate-content-gaps.ts'],
  ['content-gaps.md', 'node --import tsx/esm scripts/analyzers/generate-content-gaps.ts'],
  [
    'content-intelligence.json',
    'node --import tsx/esm scripts/analyzers/generate-content-intelligence.ts',
  ],
  [
    'content-consistency-audit.json',
    'node --import tsx/esm scripts/analyzers/audit-content-consistency.mjs',
  ],
  ['content-score.json', 'node --import tsx/esm scripts/analyzers/score-content.mjs'],
  ['page-priorities.json', 'node --import tsx/esm scripts/analyzers/detect-page-priorities.mjs'],
  ['pipeline-report.json', 'node --import tsx/esm scripts/analyzers/export-reports.mjs'],
  ['client-report.json', 'node --import tsx/esm scripts/analyzers/export-reports.mjs'],
  ['client-report.md', 'node --import tsx/esm scripts/analyzers/export-reports.mjs'],
  ['client-dashboard.json', 'npm run system:full'],
  ['cta-report.json', 'node --import tsx/esm scripts/analyzers/export-reports.mjs'],
  ['system.json', 'node scripts/core/dashboard-data.mjs'],
  ['validators.json', 'node scripts/core/dashboard-data.mjs'],
  ['graph.json', 'node scripts/core/dashboard-data.mjs'],
  ['topics.json', 'node scripts/core/dashboard-data.mjs'],
  ['content.json', 'node scripts/core/dashboard-data.mjs'],
  ['pipeline.json', 'node scripts/core/dashboard-data.mjs'],
  ['system-health.json', 'npm run system:full'],
  ...validatorReportSourceByFile,
]);

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function normalizePath(filePath) {
  return filePath.replaceAll(path.sep, '/');
}

function formatCommand(binary, args) {
  return [binary, ...args].join(' ');
}

function runCommand(binary, args, extraEnv = {}) {
  const startedAt = Date.now();
  const result = spawnSync(binary, args, {
    cwd: root,
    encoding: 'utf8',
    maxBuffer: 30 * 1024 * 1024,
    env: buildSystemProcessEnv({
      ...extraEnv,
      SYSTEM_LOGGING_MODE: loggingMode,
    }),
  });

  return {
    exitCode: result.status ?? 1,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
    durationMs: Date.now() - startedAt,
    command: formatCommand(binary === process.execPath ? 'node' : binary, args),
  };
}

function writeJson(filePath, data) {
  ensureDir(path.dirname(filePath));
  const payload =
    filePath.endsWith('.json') && !data?.meta?.generatedFile && !data?.generatedFile
      ? attachGeneratedJsonMetadata(data, {
        generatedBy:
          path.basename(filePath) === 'client-dashboard.json' ? 'system-report' : sourceCommand,
        source:
          path.basename(filePath) === 'client-dashboard.json'
            ? 'system dashboard inputs'
            : sourceCommand,
        generatedAt:
          typeof data?.generatedAt === 'string'
            ? data.generatedAt
            : typeof data?.timestamp === 'string'
              ? data.timestamp
              : new Date().toISOString(),
      })
      : data;
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2) + '\n');

  if (
    filePath.endsWith('.json') &&
    !filePath.startsWith(snapshotDir) &&
    path.basename(filePath) !== 'system-report.json' &&
    path.basename(filePath) !== 'client-dashboard.json'
  ) {
    validateReportFile(filePath, normalizePath(path.relative(root, filePath)));
  }
}

function buildSystemHealthReport(report, pipelineReport) {
  const pipelineData = unwrapReportData(pipelineReport) ?? {};
  const validatorCount = report.validate.validatorCount ?? report.validate.total ?? 0;
  const analyzerCount = Array.isArray(pipelineData.analyzers) ? pipelineData.analyzers.length : 0;
  const reportsCount = report.reports.fileCount ?? 0;
  const drift =
    report.reports.missing.length > 0 ||
    report.reports.stale.length > 0 ||
    report.validate.blockingFailed > 0;

  return createReportSchema({
    name: 'system-health',
    status: drift ? 'FAIL' : report.status === 'WARN' ? 'WARN' : 'PASS',
    summary: {
      total: validatorCount + analyzerCount,
      passed: drift ? 0 : validatorCount + analyzerCount,
      failed: drift ? 1 : 0,
      warnings: report.status === 'WARN' ? 1 : 0,
    },
    data: {
      status: drift ? 'FAIL' : report.status,
      validators: validatorCount,
      analyzers: analyzerCount,
      reports: reportsCount,
      coverage: {
        validators:
          report.validate.blockingFailed === 0 && report.validate.advisoryFailed === 0
            ? '100%'
            : 'partial',
        analyzers:
          Array.isArray(pipelineData.missing) && pipelineData.missing.length === 0
            ? '100%'
            : 'partial',
      },
      drift,
    },
    sourceCommand,
  });
}

function combineOutput(result) {
  return [result.stdout, result.stderr].filter(Boolean).join('\n').trim();
}

function excerptOutput(output, maxLines = 8) {
  const lines = String(output)
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .slice(0, maxLines);

  return lines.join(' | ');
}

function isGitWorkspaceDirty() {
  const result = spawnSync('git', ['status', '--porcelain'], {
    cwd: root,
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    return false;
  }

  return String(result.stdout ?? '').trim().length > 0;
}

function uniqueStrings(values) {
  return [...new Set(values.filter(Boolean))];
}

function buildSkippedTestsSection() {
  return {
    status: 'SKIPPED',
    command: 'npm run test -- --run',
    durationMs: 0,
    total: 0,
    passed: 0,
    failed: 0,
    skipped: 0,
    files: [],
    failedFiles: [],
    errors: [],
  };
}

function preserveReportFiles(relativePaths) {
  const preserved = new Map();

  for (const relativePath of relativePaths) {
    const absolutePath = path.join(reportsDir, relativePath);
    if (!fs.existsSync(absolutePath)) {
      continue;
    }

    preserved.set(relativePath, fs.readFileSync(absolutePath, 'utf8'));
  }

  return preserved;
}

function restoreReportFiles(preserved) {
  for (const [relativePath, content] of preserved.entries()) {
    const absolutePath = path.join(reportsDir, relativePath);
    ensureDir(path.dirname(absolutePath));
    fs.writeFileSync(absolutePath, content, 'utf8');
  }
}

function buildPerformanceSummary(report, pipelineReport) {
  const pipelineData = unwrapReportData(pipelineReport) ?? {};
  const generatorSteps = Array.isArray(pipelineData.generators) ? pipelineData.generators : [];
  const analyzerSteps = Array.isArray(pipelineData.analyzers) ? pipelineData.analyzers : [];
  const topSlowSteps = [
    ...generatorSteps.map(step => ({
      name: step.name,
      durationMs: step.durationMs,
      skipped: step.skipped,
    })),
    ...analyzerSteps.map(step => ({
      name: step.name,
      durationMs: step.durationMs ?? 0,
      skipped: step.skipped === true,
    })),
  ]
    .sort((left, right) => {
      if ((right.durationMs ?? 0) !== (left.durationMs ?? 0)) {
        return (right.durationMs ?? 0) - (left.durationMs ?? 0);
      }

      return left.name.localeCompare(right.name);
    })
    .slice(0, 3);
  const analyzerRuntimeMs = analyzerSteps.reduce(
    (total, step) => total + (step.durationMs ?? 0),
    0
  );

  return {
    graphInitMs: null,
    topSlowSteps,
    validatorRuntimeMs: report.validate.durationMs ?? 0,
    analyzerRuntimeMs,
  };
}

function formatPerformanceDuration(step) {
  if (step.skipped) {
    return 'skipped (cache valid)';
  }

  return `${step.durationMs} ms`;
}

function printStructuredSystemSummary(report, performanceSummary) {
  const warningCount =
    report.validate.advisoryFailed + report.reports.stale.length + report.reports.missing.length;
  const testStatus =
    report.tests.status === 'SKIPPED' ? 'SKIPPED' : report.tests.failed === 0 ? 'PASS' : 'FAIL';

  process.stdout.write('[system:full]\n');
  process.stdout.write(`Status: ${report.status}\n`);
  process.stdout.write(`Validators: ${report.validate.passed}/${report.validate.total}\n`);
  process.stdout.write(`Tests: ${testStatus}\n`);
  process.stdout.write(`Warnings: ${warningCount}\n`);
  process.stdout.write(`Reports: ${report.reports.fileCount}\n`);

  if (performanceSummary.topSlowSteps.length > 0 || performanceSummary.graphInitMs !== null) {
    process.stdout.write('Top Slow Steps:\n');
    if (performanceSummary.graphInitMs !== null) {
      process.stdout.write(`- graph-init: ${performanceSummary.graphInitMs} ms\n`);
    }
    for (const step of performanceSummary.topSlowSteps) {
      process.stdout.write(`- ${step.name}: ${formatPerformanceDuration(step)}\n`);
    }
    process.stdout.write('Total Runtime:\n');
    process.stdout.write(`- validators: ${performanceSummary.validatorRuntimeMs} ms\n`);
    process.stdout.write(`- analyzers: ${performanceSummary.analyzerRuntimeMs} ms\n`);
  }
}

function printStructuredSystemDetails(report, performanceSummary) {
  const blockingValidators = report.validate.validators
    .filter(validator => validator.status === 'FAIL' && validator.blocking)
    .map(validator => validator.name)
    .sort((left, right) => left.localeCompare(right));
  const advisoryValidators = report.validate.validators
    .filter(validator => validator.status === 'FAIL' && !validator.blocking)
    .map(validator => validator.name)
    .sort((left, right) => left.localeCompare(right));
  const failingTests = report.tests.files
    .filter(file => file.status === 'FAIL')
    .flatMap(file => file.failedTests.map(name => `${file.file}: ${name}`))
    .sort((left, right) => left.localeCompare(right));
  const reportWarnings = [
    ...report.reports.stale.map(name => `stale report: ${name}`),
    ...report.reports.missing.map(name => `missing report: ${name}`),
  ].sort((left, right) => left.localeCompare(right));

  process.stdout.write('Steps:\n');
  process.stdout.write(
    `- Validate: ${report.validate.status} (${report.validate.passed}/${report.validate.total})\n`
  );
  process.stdout.write(`- Typecheck: ${report.typecheck.status}\n`);
  process.stdout.write(
    `- Tests: ${report.tests.status} (${report.tests.failed}/${report.tests.total} failed)\n`
  );
  process.stdout.write(`- Reports: ${report.reports.status} (${report.reports.fileCount} files)\n`);
  process.stdout.write(`- E2E: ${report.e2e.status}\n`);

  if (advisoryValidators.length > 0 || reportWarnings.length > 0) {
    process.stdout.write('Warnings:\n');
    for (const warning of [...advisoryValidators, ...reportWarnings]) {
      process.stdout.write(`- ${warning}\n`);
    }
  }

  if (blockingValidators.length > 0 || failingTests.length > 0) {
    process.stdout.write('Failures:\n');
    for (const validator of blockingValidators) {
      process.stdout.write(`- validator: ${validator}\n`);
    }
    for (const testName of failingTests) {
      process.stdout.write(`- test: ${testName}\n`);
    }
  }

  process.stdout.write('Metrics:\n');
  process.stdout.write(`- Duration: ${report.durationMs}ms\n`);
  process.stdout.write(`- Blocking: ${report.validate.blockingFailed}\n`);
  process.stdout.write(`- Advisory: ${report.validate.advisoryFailed}\n`);
  process.stdout.write(`- Validator runtime: ${performanceSummary.validatorRuntimeMs}ms\n`);
  process.stdout.write(`- Analyzer runtime: ${performanceSummary.analyzerRuntimeMs}ms\n`);
}

function assertLockedExecution() {
  if (systemMode !== 'production') {
    return;
  }

  if (executionLock !== 'system:full') {
    throw new Error(
      'Execution entry is locked in production mode. Use npm run system:full so validators, dashboards, and snapshots stay in sync.'
    );
  }
}

function sanitizeSnapshotTimestamp(timestamp) {
  return timestamp.replaceAll(':', '-').replaceAll('.', '-');
}

function listSnapshotFiles() {
  if (!fs.existsSync(snapshotDir)) {
    return [];
  }

  return fs
    .readdirSync(snapshotDir)
    .filter(
      fileName => fileName.endsWith('.json') && fileName !== path.basename(snapshotSummaryPath)
    )
    .sort();
}

function readPreviousSnapshotReport() {
  const latestFileName = 'system-report-current.json';
  const latestPath = path.join(snapshotDir, latestFileName);

  if (!fs.existsSync(latestPath)) {
    return null;
  }

  return {
    fileName: latestFileName,
    report: readJsonFile(latestPath),
  };
}

function validateFrozenOutputs(report, clientDashboard) {
  try {
    return {
      report: parseSystemReportContract(report),
      clientDashboard: parseClientDashboardContract(clientDashboard),
    };
  } catch (error) {
    const reason = error instanceof Error ? error.message : 'Unknown contract validation failure.';
    const contractError = new Error(
      [
        'Production contract validation failed.',
        `Reason: ${reason}`,
        'Affected area: Frozen report contracts (system-report.json or client-dashboard.json).',
        'Suggested fix: Update the report builder, schemas, validators, and dashboards together before changing a locked contract.',
      ].join(' ')
    );
    contractError.cause = error;
    throw contractError;
  }
}

function writeSnapshotArtifacts(report) {
  ensureDir(snapshotDir);

  const snapshotFileName = 'system-report-current.json';
  const snapshotFilePath = path.join(snapshotDir, snapshotFileName);

  writeJson(snapshotFilePath, report);
  writeJson(snapshotSummaryPath, {
    generatedAt: 'stable',
    sourceCommand: report.sourceCommand,
    currentSnapshot: `reports/system-snapshots/${snapshotFileName}`,
    previousSnapshot: null,
    trackedChanges: {
      priorities: {
        current: report.priorities.length,
        previous: report.priorities.length,
        delta: 0,
      },
      pageStatusChanged: [],
      newIssues: [],
      resolvedIssues: [],
    },
  });
}

function stabilizeRuntimeMetrics(value) {
  if (Array.isArray(value)) {
    return value.map(stabilizeRuntimeMetrics);
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  return Object.entries(value).reduce((output, [key, entry]) => {
    if (key === 'durationMs' || key === 'duration') {
      output[key] = 0;
      return output;
    }

    if (key === 'timestamp' || key === 'generatedAt' || key === 'time') {
      output[key] = 'stable';
      return output;
    }

    output[key] = stabilizeRuntimeMetrics(entry);
    return output;
  }, Array.isArray(value) ? [] : {});
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

function parseTimestamp(value, fallback = Date.now()) {
  if (typeof value !== 'string') {
    return fallback;
  }

  const timestamp = Date.parse(value);
  return Number.isFinite(timestamp) ? timestamp : fallback;
}

function normalizeStatus(value) {
  if (value === 'pass' || value === 'PASS' || value === 'passed') {
    return 'PASS';
  }

  if (value === 'fail' || value === 'FAIL' || value === 'failed') {
    return 'FAIL';
  }

  return 'SKIPPED';
}

function extractRelativePath(candidate) {
  if (typeof candidate !== 'string' || candidate.trim().length === 0) {
    return null;
  }

  return candidate.startsWith(root)
    ? normalizePath(path.relative(root, candidate))
    : normalizePath(candidate);
}

function collectOutputLines(output, maxLines = 20) {
  return String(output)
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean)
    .slice(0, maxLines);
}

function findValidatorFailure(failuresByValidator, validatorName) {
  return failuresByValidator.get(validatorName)?.output ?? '';
}

function stripAnsi(value) {
  return String(value).replace(/\u001B\[[0-9;]*m/g, '');
}

function normalizeFailureText(value) {
  return stripAnsi(value).replace(/\r/g, '').trim();
}

function extractPrimaryFailureReason(message, fallback = 'Unknown failure.') {
  const lines = normalizeFailureText(message)
    .split('\n')
    .map(line => line.trim())
    .filter(Boolean);

  for (const line of lines) {
    if (line.startsWith('at ') || line.startsWith('file://')) {
      continue;
    }

    if (line === 'Error:' || line === 'AssertionError:') {
      continue;
    }

    return line.replace(/^(Error|AssertionError):\s*/u, '').trim() || fallback;
  }

  return fallback;
}

function extractExpectedReceived(message) {
  const normalized = normalizeFailureText(message);
  const expectedMatch = normalized.match(/Expected:\s*([^\n]+)/u);
  const receivedMatch = normalized.match(/Received:\s*([^\n]+)/u);

  return {
    expected: expectedMatch?.[1]?.trim() ?? null,
    received: receivedMatch?.[1]?.trim() ?? null,
  };
}

function isSnapshotFailure(message) {
  return /snapshot/i.test(normalizeFailureText(message));
}

function classifySnapshotReason(message) {
  const normalized = normalizeFailureText(message);

  if (/mismatched/i.test(normalized)) {
    return 'Snapshot content mismatch.';
  }

  if (/obsolete|unchecked|removed|not written|missing snapshot/i.test(normalized)) {
    return 'Snapshot count mismatch.';
  }

  return 'Snapshot assertion failed.';
}

function createFailureEntry({ file, reason, fixSuggestion, expected = null, received = null }) {
  return {
    file,
    reason,
    fixSuggestion,
    expected,
    received,
  };
}

function dedupeFailures(entries) {
  const seen = new Set();

  return entries.filter(entry => {
    const key = [entry.file, entry.reason, entry.fixSuggestion, entry.expected, entry.received].join('::');
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}

function readValidatorIssueEntries(validatorName) {
  const reportFile = validatorReportFileByName.get(validatorName);

  if (!reportFile) {
    return [];
  }

  const report = readReportJson(root, reportFile);
  const data = unwrapReportData(report) ?? report ?? {};
  const issues = Array.isArray(data?.issues) ? data.issues : Array.isArray(report?.issues) ? report.issues : [];

  return issues
    .map(issue => {
      const file = issue?.file ? extractRelativePath(issue.file) ?? issue.file : `validator:${validatorName}`;
      const line = typeof issue?.line === 'number' ? issue.line : null;
      const code = typeof issue?.code === 'string' ? issue.code : null;
      const message = typeof issue?.message === 'string' ? issue.message : null;

      if (!message) {
        return null;
      }

      return createFailureEntry({
        file: line ? `${file}:${line}` : file,
        reason: code ? `${message} [${code}]` : message,
        fixSuggestion: validatorCommandByName.get(validatorName) ?? 'npm run system:full',
      });
    })
    .filter(Boolean);
}

function buildRuntimeFailureDiagnostics(report, vitestReport = null) {
  const testFailures = [];
  const snapshotFailures = [];
  const validationFailures = [];

  for (const testResult of vitestReport?.testResults ?? []) {
    const file = extractRelativePath(testResult?.name) ?? 'unknown';

    for (const assertion of testResult?.assertionResults ?? []) {
      if (assertion?.status !== 'failed') {
        continue;
      }

      const failureMessage = Array.isArray(assertion?.failureMessages)
        ? assertion.failureMessages.join('\n')
        : '';
      const reason = extractPrimaryFailureReason(
        failureMessage,
        assertion?.fullName ?? assertion?.title ?? 'Unnamed failed test.'
      );
      const { expected, received } = extractExpectedReceived(failureMessage);

      if (isSnapshotFailure(failureMessage)) {
        snapshotFailures.push(
          createFailureEntry({
            file,
            reason: classifySnapshotReason(failureMessage),
            fixSuggestion: `npx vitest run ${file} -u`,
            expected,
            received,
          })
        );
        continue;
      }

      testFailures.push(
        createFailureEntry({
          file,
          reason,
          fixSuggestion: `npx vitest run ${file}`,
          expected,
          received,
        })
      );
    }
  }

  for (const unchecked of vitestReport?.snapshot?.uncheckedKeysByFile ?? []) {
    const file = extractRelativePath(unchecked?.filePath) ?? 'unknown';
    const count = Array.isArray(unchecked?.keys) ? unchecked.keys.length : 0;
    snapshotFailures.push(
      createFailureEntry({
        file,
        reason:
          count > 0
            ? `Snapshot count mismatch (${count} unchecked snapshot key${count === 1 ? '' : 's'}).`
            : 'Snapshot count mismatch.',
        fixSuggestion: `npx vitest run ${file} -u`,
      })
    );
  }

  for (const validator of report.validate.validators ?? []) {
    if (validator.status !== 'FAIL') {
      continue;
    }

    const issueEntries = readValidatorIssueEntries(validator.name);
    if (issueEntries.length > 0) {
      validationFailures.push(...issueEntries);
      continue;
    }

    const lines = validator.blocking ? validator.errors : validator.warnings;
    validationFailures.push(
      createFailureEntry({
        file: `validator:${validator.name}`,
        reason: lines[0] ?? `${validator.name} failed.`,
        fixSuggestion: validatorCommandByName.get(validator.name) ?? 'npm run system:full',
      })
    );
  }

  for (const error of report.reports.errors ?? []) {
    validationFailures.push(
      createFailureEntry({
        file: 'reports',
        reason: error,
        fixSuggestion: 'node --import tsx/esm scripts/analyzers/export-reports.mjs',
      })
    );
  }

  for (const fileName of report.reports.missing ?? []) {
    validationFailures.push(
      createFailureEntry({
        file: `reports/${fileName}`,
        reason: 'Required report file is missing.',
        fixSuggestion: reportSourceByFile.get(fileName) ?? validatorReportSourceByFile.get(fileName) ?? 'node --import tsx/esm scripts/analyzers/export-reports.mjs',
      })
    );
  }

  for (const fileName of report.reports.stale ?? []) {
    validationFailures.push(
      createFailureEntry({
        file: `reports/${fileName}`,
        reason: 'Report file is stale.',
        fixSuggestion: reportSourceByFile.get(fileName) ?? validatorReportSourceByFile.get(fileName) ?? 'node --import tsx/esm scripts/analyzers/export-reports.mjs',
      })
    );
  }

  return {
    testFailures: dedupeFailures(testFailures),
    snapshotFailures: dedupeFailures(snapshotFailures),
    validationFailures: dedupeFailures(validationFailures),
  };
}

function printFailureEntries(title, entries) {
  if (entries.length === 0) {
    return;
  }

  process.stdout.write(`${title}\n`);
  for (const entry of entries) {
    process.stdout.write(`- file: ${entry.file}\n`);
    process.stdout.write(`  reason: ${entry.reason}\n`);
    if (entry.expected) {
      process.stdout.write(`  expected: ${entry.expected}\n`);
    }
    if (entry.received) {
      process.stdout.write(`  received: ${entry.received}\n`);
    }
    process.stdout.write(`  fix: ${entry.fixSuggestion}\n`);
  }
}

function printSystemFailures(diagnostics) {
  const totalFailures =
    diagnostics.testFailures.length +
    diagnostics.snapshotFailures.length +
    diagnostics.validationFailures.length;

  if (totalFailures === 0) {
    return;
  }

  process.stdout.write('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.stdout.write('❌ SYSTEM FAILURES\n');
  process.stdout.write('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  printFailureEntries('TEST FAILURES', diagnostics.testFailures);
  printFailureEntries('SNAPSHOT FAILURES', diagnostics.snapshotFailures);
  printFailureEntries('VALIDATION FAILURES', diagnostics.validationFailures);
}

function buildActionCommands(report, diagnostics) {
  const commands = [];

  for (const entry of diagnostics.testFailures) {
    commands.push(entry.fixSuggestion);
  }

  for (const entry of diagnostics.snapshotFailures) {
    commands.push(entry.fixSuggestion);
  }

  for (const entry of diagnostics.validationFailures) {
    commands.push(entry.fixSuggestion);
  }

  if (report.status === 'PASS') {
    commands.push('npm run build');
  } else {
    commands.push('npm run system:full');
  }

  return uniqueStrings(commands);
}

function printActionSection(report, diagnostics) {
  const commands = buildActionCommands(report, diagnostics);
  const hasFailures =
    diagnostics.testFailures.length > 0 ||
    diagnostics.snapshotFailures.length > 0 ||
    diagnostics.validationFailures.length > 0;

  process.stdout.write('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.stdout.write('🧠 WHAT YOU SHOULD DO\n');
  process.stdout.write('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  if (!hasFailures) {
    process.stdout.write('- No blocking issues detected.\n');
    process.stdout.write('- Next step: continue with your normal workflow or rerun the build if you need a fresh production artifact.\n');
  } else {
    process.stdout.write('- Run the targeted command(s) below in order.\n');
    process.stdout.write('- Re-run system:full after the targeted fix so validators, tests, and reports stay in sync.\n');
  }

  for (const command of commands) {
    process.stdout.write(`- command: ${command}\n`);
  }

  if (report.reports.stale.length > 0 || report.reports.missing.length > 0) {
    process.stdout.write('- Warning: report outputs are out of sync; refresh the affected generators before trusting downstream dashboards.\n');
  }

  if (hasFailures && isGitWorkspaceDirty()) {
    process.stdout.write('- Warning: the workspace is dirty; confirm generated report or snapshot changes are intentional before committing them.\n');
  }
}

function scanSmartCtaUsage() {
  const srcRoot = path.join(root, 'src');
  const violationsPath = path.join(reportsDir, 'cta-violation-scan.json');
  const conversionReportPath = path.join(reportsDir, 'conversion-contract-report.json');
  const ctaViolationReport = readJsonFile(violationsPath) ?? [];
  const ctaViolations = Array.isArray(ctaViolationReport)
    ? ctaViolationReport
    : Array.isArray(ctaViolationReport?.issues)
      ? ctaViolationReport.issues
      : [];
  const conversionReport = unwrapReportData(readJsonFile(conversionReportPath)) ?? {};
  const files = [];

  function visit(directoryPath) {
    for (const entry of fs.readdirSync(directoryPath, { withFileTypes: true })) {
      const absolutePath = path.join(directoryPath, entry.name);

      if (entry.isDirectory()) {
        visit(absolutePath);
        continue;
      }

      if (!entry.name.endsWith('.tsx')) {
        continue;
      }

      const relativePath = normalizePath(path.relative(root, absolutePath));
      if (
        relativePath === 'src/components/system/SmartCTA.tsx' ||
        relativePath.startsWith('src/components/')
      ) {
        continue;
      }

      files.push(absolutePath);
    }
  }

  if (fs.existsSync(srcRoot)) {
    visit(srcRoot);
  }

  const total = files.reduce((count, filePath) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const matches = content.match(/<SmartCTA\b[\s\S]*?\/>/g) ?? [];
    return count + matches.length;
  }, 0);

  const duplicateIntents = ctaViolations.reduce((count, entry) => {
    const violations = Array.isArray(entry?.violations) ? entry.violations : [];
    return (
      count + violations.filter(violation => /conversion CTAs/i.test(String(violation))).length
    );
  }, 0);

  const conversionIssues = Array.isArray(conversionReport?.issues) ? conversionReport.issues : [];
  const missingSource = conversionIssues.filter(issue => {
    const code = typeof issue?.code === 'string' ? issue.code : '';
    return code.includes('source') || code.includes('contact_source');
  }).length;

  const issues = [
    ...ctaViolations.flatMap(entry => {
      const page = typeof entry?.page === 'string' ? entry.page : 'unknown';
      const violations = Array.isArray(entry?.violations) ? entry.violations : [];
      return violations.map(violation => `${page}: ${violation}`);
    }),
    ...conversionIssues
      .filter(issue => {
        const code = typeof issue?.code === 'string' ? issue.code : '';
        return code.includes('source') || code.includes('contact_source');
      })
      .map(issue => {
        const file = typeof issue?.file === 'string' ? issue.file : 'unknown';
        const message =
          typeof issue?.message === 'string' ? issue.message : 'Missing CTA source context.';
        return `${file}: ${message}`;
      }),
  ];

  return {
    status: duplicateIntents === 0 && missingSource === 0 ? 'OK' : 'ISSUES',
    total,
    duplicateIntents,
    missingSource,
    issues,
  };
}

function getNodeSlug(node) {
  if (typeof node?.slug === 'string' && node.slug.length > 0) {
    return node.slug;
  }

  if (typeof node?.path === 'string') {
    const segments = node.path.split('/').filter(Boolean);
    return segments[segments.length - 1] ?? null;
  }

  return null;
}

function buildRouteIndex() {
  const authorityMap = readReportJson(root, 'authority-map.json') ?? {};
  const nodes = Array.isArray(authorityMap?.nodes) ? authorityMap.nodes : [];

  return nodes
    .filter(node => typeof node?.path === 'string' && node.path.startsWith('/'))
    .map(node => ({
      id: typeof node?.id === 'string' ? node.id : '',
      route: node.path,
      slug: getNodeSlug(node) ?? '',
      type: typeof node?.type === 'string' ? node.type : 'unknown',
      conversionPriority:
        typeof node?.conversionPriority === 'number' ? node.conversionPriority : 0,
      title: typeof node?.title === 'string' ? node.title : node.path,
    }));
}

function normalizePageType(value) {
  if (value === 'caseStudies') return 'case-study';
  if (value === 'caseStudiesPage') return 'case-study';
  return typeof value === 'string' ? value : 'unknown';
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function findMatchingRoute(text, routeIndex) {
  if (typeof text !== 'string' || text.trim().length === 0) {
    return null;
  }

  const candidates = routeIndex.filter(node => {
    const routePattern = new RegExp(escapeRegExp(node.route), 'i');
    const slugPattern = node.slug
      ? new RegExp(`(^|[^a-z0-9-])${escapeRegExp(node.slug)}([^a-z0-9-]|$)`, 'i')
      : null;
    const idPattern = node.id ? new RegExp(escapeRegExp(node.id), 'i') : null;

    return (
      routePattern.test(text) ||
      (slugPattern ? slugPattern.test(text) : false) ||
      (idPattern ? idPattern.test(text) : false)
    );
  });

  if (candidates.length === 0) {
    return null;
  }

  candidates.sort((left, right) => {
    if (right.route.length !== left.route.length) {
      return right.route.length - left.route.length;
    }

    return right.conversionPriority - left.conversionPriority;
  });

  return candidates[0].route;
}

function cleanIssueMessage(message) {
  if (typeof message !== 'string') {
    return 'System issue detected.';
  }

  return message.replace(/\s+/g, ' ').trim();
}

function classifyPriorityType(source, message) {
  const haystack = `${source} ${message}`.toLowerCase();

  if (haystack.includes('conversion')) return 'conversion';
  if (haystack.includes('cta')) return 'cta';
  if (
    haystack.includes('lint') ||
    haystack.includes('prettier') ||
    haystack.includes('react-hooks')
  )
    return 'lint';
  if (haystack.includes('contract') || haystack.includes('domain-structure')) return 'contract';
  return 'content';
}

function classifyPriorityLevel(type) {
  if (type === 'conversion' || type === 'cta' || type === 'contract') {
    return 'HIGH';
  }

  if (type === 'content') {
    return 'MEDIUM';
  }

  return 'LOW';
}

function buildPriorityAction(type, message) {
  if (type === 'conversion') {
    return 'Improve lead capture flow and contact-path setup on the affected page.';
  }

  if (type === 'cta') {
    return 'Correct CTA placement or source context so visitors can convert cleanly.';
  }

  if (type === 'contract') {
    return 'Restore the required page structure and metadata contract.';
  }

  if (type === 'content') {
    return /graph|orphan/i.test(message)
      ? 'Restore internal page relationships so discovery and visibility stay intact.'
      : 'Improve missing or weak page content so the page can support conversion.';
  }

  return 'Resolve low-priority implementation cleanup surfaced by the pipeline.';
}

function addPriority(priorities, routeIndex, raw) {
  const type = raw.type ?? classifyPriorityType(raw.source ?? '', raw.message ?? '');
  const level = raw.level ?? classifyPriorityLevel(type);
  const route =
    raw.route ?? findMatchingRoute(`${raw.message ?? ''} ${raw.context ?? ''}`, routeIndex);
  const message = cleanIssueMessage(raw.message);
  const priority = {
    level,
    type,
    message,
    route,
    source: raw.source ?? 'system',
    action: raw.action ?? buildPriorityAction(type, message),
  };
  const key = `${priority.level}:${priority.type}:${priority.route ?? 'system'}:${priority.message}`;

  if (
    !priorities.some(
      item => `${item.level}:${item.type}:${item.route ?? 'system'}:${item.message}` === key
    )
  ) {
    priorities.push(priority);
  }
}

function buildPriorities(validate) {
  const routeIndex = buildRouteIndex();
  const priorities = [];
  const domainStructureReport =
    unwrapReportData(readReportJson(root, 'domain-structure-report.json')) ?? {};
  const conversionReport =
    unwrapReportData(readReportJson(root, 'conversion-contract-report.json')) ?? {};
  const contentContractReport =
    unwrapReportData(readReportJson(root, 'content-contract-report.json')) ?? {};
  const contentQualityReport =
    unwrapReportData(readReportJson(root, 'content-quality-report.json')) ?? {};
  const graphReport = unwrapReportData(readReportJson(root, 'graph-report.json')) ?? {};
  const contentGapsReport = unwrapReportData(readReportJson(root, 'content-gaps.json')) ?? {};
  const ctaViolationReport = readReportJson(root, 'cta-violation-scan.json') ?? [];
  const ctaViolations = Array.isArray(ctaViolationReport)
    ? ctaViolationReport
    : Array.isArray(ctaViolationReport?.issues)
      ? ctaViolationReport.issues
      : [];

  for (const issue of domainStructureReport?.issues ?? []) {
    addPriority(priorities, routeIndex, {
      type: 'contract',
      level: 'HIGH',
      message: issue?.message ?? 'Page contract issue detected.',
      context: issue?.file,
      source: 'validate-domain-structure',
    });
  }

  for (const issue of conversionReport?.issues ?? []) {
    addPriority(priorities, routeIndex, {
      type: 'conversion',
      level: 'HIGH',
      message: issue?.message ?? 'Conversion issue detected.',
      context: issue?.file,
      source: 'validate-conversion-contract',
    });
  }

  for (const issue of contentContractReport?.issues ?? []) {
    addPriority(priorities, routeIndex, {
      type: 'contract',
      level: 'HIGH',
      message: issue?.message ?? 'Content contract issue detected.',
      context: issue?.file,
      source: 'validate-content-contract',
    });
  }

  for (const issue of contentQualityReport?.issues ?? []) {
    addPriority(priorities, routeIndex, {
      type: 'content',
      level: 'MEDIUM',
      message: issue?.message ?? 'Content quality issue detected.',
      context: issue?.file,
      source: 'validate-content-quality',
    });
  }

  for (const entry of ctaViolations) {
    for (const violation of entry?.violations ?? []) {
      addPriority(priorities, routeIndex, {
        type: 'cta',
        level: 'HIGH',
        message: violation,
        context: entry?.page,
        source: 'validate-cta-violations',
      });
    }
  }

  for (const issue of graphReport?.issues ?? []) {
    addPriority(priorities, routeIndex, {
      type: 'content',
      level: 'MEDIUM',
      message: typeof issue === 'string' ? issue : (issue?.message ?? 'Graph issue detected.'),
      context: issue?.file,
      source: 'validate-graph',
    });
  }

  if ((graphReport?.summary?.orphanNodes ?? 0) > 0) {
    addPriority(priorities, routeIndex, {
      type: 'content',
      level: 'MEDIUM',
      message: `${graphReport.summary.orphanNodes} orphan graph nodes need attention.`,
      source: 'validate-graph',
    });
  }

  if ((contentGapsReport?.stats?.orphanTopics ?? 0) > 0) {
    addPriority(priorities, routeIndex, {
      type: 'content',
      level: 'MEDIUM',
      message: `${contentGapsReport.stats.orphanTopics} uncovered topic areas need supporting content.`,
      source: 'content-gaps',
    });
  }

  for (const validator of validate.validators ?? []) {
    if (validator.status !== 'FAIL') {
      continue;
    }

    const detailMessage =
      validator.errors[0] ?? validator.warnings[0] ?? `${validator.name} reported issues.`;
    addPriority(priorities, routeIndex, {
      message: detailMessage,
      source: validator.name,
    });
  }

  const levelOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
  priorities.sort((left, right) => {
    if (levelOrder[left.level] !== levelOrder[right.level]) {
      return levelOrder[left.level] - levelOrder[right.level];
    }

    if (left.type !== right.type) {
      return left.type.localeCompare(right.type);
    }

    return (left.route ?? '').localeCompare(right.route ?? '');
  });

  return priorities;
}

function buildPages(priorities) {
  const routeIndex = buildRouteIndex();

  const pages = routeIndex.map(node => {
    const pagePriorities = priorities.filter(priority => priority.route === node.route);
    const ctaIssues = pagePriorities.filter(
      priority => priority.type === 'cta' || priority.type === 'conversion'
    );
    const contentIssues = pagePriorities.filter(priority => priority.type === 'content');
    const highIssues = pagePriorities.filter(priority => priority.level === 'HIGH');
    const mediumIssues = pagePriorities.filter(priority => priority.level === 'MEDIUM');
    const lowIssues = pagePriorities.filter(priority => priority.level === 'LOW');

    return {
      route: node.route,
      type: normalizePageType(node.type),
      status:
        highIssues.length > 0
          ? 'FAIL'
          : mediumIssues.length > 0 || lowIssues.length > 0
            ? 'WARNING'
            : 'OK',
      conversionPriority: node.conversionPriority,
      cta: {
        status: ctaIssues.some(issue => issue.level === 'HIGH')
          ? 'FAIL'
          : ctaIssues.length > 0
            ? 'WARNING'
            : 'OK',
        issues: ctaIssues.length,
      },
      content: {
        status: contentIssues.some(issue => issue.level === 'HIGH')
          ? 'FAIL'
          : contentIssues.length > 0
            ? 'WARNING'
            : 'OK',
      },
      issues: pagePriorities.map(priority => priority.message),
    };
  });

  const statusOrder = { FAIL: 0, WARNING: 1, OK: 2 };
  pages.sort((left, right) => {
    if (statusOrder[left.status] !== statusOrder[right.status]) {
      return statusOrder[left.status] - statusOrder[right.status];
    }

    if (right.conversionPriority !== left.conversionPriority) {
      return right.conversionPriority - left.conversionPriority;
    }

    return left.route.localeCompare(right.route);
  });

  return pages;
}

function buildChanges(previousReport, priorities, pages) {
  const previousPriorities = Array.isArray(previousReport?.priorities)
    ? previousReport.priorities
    : [];
  const previousPages = Array.isArray(previousReport?.pages) ? previousReport.pages : [];
  const currentPriorityMap = new Map(
    priorities.map(priority => [
      `${priority.type}:${priority.route ?? 'system'}:${priority.message}`,
      priority,
    ])
  );
  const previousPriorityMap = new Map(
    previousPriorities.map(priority => [
      `${priority.type}:${priority.route ?? 'system'}:${priority.message}`,
      priority,
    ])
  );

  const newIssues = [...currentPriorityMap.entries()]
    .filter(([key]) => !previousPriorityMap.has(key))
    .map(([, priority]) => priority);
  const resolvedIssues = [...previousPriorityMap.entries()]
    .filter(([key]) => !currentPriorityMap.has(key))
    .map(([, priority]) => priority);

  const previousPageStatusByRoute = new Map(previousPages.map(page => [page.route, page.status]));
  const statusChanged = pages
    .filter(
      page =>
        previousPageStatusByRoute.has(page.route) &&
        previousPageStatusByRoute.get(page.route) !== page.status
    )
    .map(page => ({
      route: page.route,
      previousStatus: previousPageStatusByRoute.get(page.route),
      nextStatus: page.status,
    }));

  return {
    newIssues,
    resolvedIssues,
    statusChanged,
  };
}

function mapPriorityImpact(priority) {
  if (priority.type === 'conversion' || priority.type === 'cta') {
    return 'Leads';
  }

  if (priority.type === 'content') {
    return /graph|link|visibility|topic/i.test(priority.message) ? 'Visibility' : 'Content';
  }

  return 'Performance';
}

function buildClientPriorityMessage(impact, count) {
  if (impact === 'Leads') {
    return `Improve lead capture on ${count} page${count === 1 ? '' : 's'}`;
  }

  if (impact === 'Visibility') {
    return `Strengthen visibility signals on ${count} page${count === 1 ? '' : 's'}`;
  }

  if (impact === 'Content') {
    return `Add missing content to strengthen ${count} page${count === 1 ? '' : 's'}`;
  }

  return `Improve overall site performance on ${count} priority area${count === 1 ? '' : 's'}`;
}

function getClientPageStatus(page, changes) {
  const changed = changes.statusChanged.find(item => item.route === page.route);

  if (changed && changed.previousStatus !== 'OK' && changed.nextStatus === 'OK') {
    return 'Improving';
  }

  return page.status === 'OK' ? 'Healthy' : 'Needs Improvement';
}

function buildClientPageInsight(page, changes) {
  const status = getClientPageStatus(page, changes);

  if (status === 'Improving') {
    return 'This page is moving in the right direction and recent issues have been reduced.';
  }

  if (page.status === 'OK') {
    return 'This page is performing well with strong conversion setup.';
  }

  if (page.cta.issues > 0) {
    return 'This page needs stronger lead-capture setup to turn visitors into enquiries.';
  }

  if (page.content.status !== 'OK') {
    return 'This page is missing content that helps build trust and support conversion.';
  }

  return 'This page needs optimization to improve visibility and performance.';
}

function buildClientDashboard(report) {
  const priorities = Array.isArray(report.priorities) ? report.priorities : [];
  const pages = Array.isArray(report.pages) ? report.pages : [];
  const changes = report.changes ?? { newIssues: [], resolvedIssues: [], statusChanged: [] };
  const clientPriorities = priorities.filter(priority => priority.type !== 'lint');
  const criticalIssues = clientPriorities.filter(priority => priority.level === 'HIGH').length;
  const groupedPriorities = new Map();

  for (const priority of clientPriorities) {
    const impact = mapPriorityImpact(priority);
    const existing = groupedPriorities.get(impact) ?? { impact, count: 0, routes: new Set() };
    existing.count += 1;
    if (priority.route) {
      existing.routes.add(priority.route);
    }
    groupedPriorities.set(impact, existing);
  }

  const priorityActions = [...groupedPriorities.values()]
    .sort((left, right) => right.count - left.count)
    .slice(0, 5)
    .map(group => ({
      impact: group.impact,
      message: buildClientPriorityMessage(group.impact, group.routes.size || group.count),
      routes: [...group.routes].sort(),
      count: group.count,
    }));

  const pagesOptimized = pages.filter(page => page.status === 'OK').length;
  const improvementsMade =
    (changes.resolvedIssues?.length ?? 0) +
    (changes.statusChanged?.filter(item => item.nextStatus === 'OK').length ?? 0);
  const status =
    criticalIssues === 0 && clientPriorities.length === 0
      ? 'healthy'
      : (changes.resolvedIssues?.length ?? 0) > (changes.newIssues?.length ?? 0)
        ? 'improving'
        : 'needs attention';

  return {
    generatedAt: report.timestamp,
    sourceCommand,
    status,
    summary: {
      systemHealth:
        status === 'healthy' ? 'Healthy' : status === 'improving' ? 'Improving' : 'Needs Attention',
      issues: clientPriorities.length,
      criticalIssues,
      pagesOptimized,
      improvementsMade,
    },
    priorities: priorityActions,
    pages: pages.map(page => ({
      route: page.route,
      status: getClientPageStatus(page, changes),
      insight: buildClientPageInsight(page, changes),
    })),
    impacts: [...groupedPriorities.values()].map(group => ({
      impact: group.impact,
      issues: group.count,
    })),
    changes: {
      newIssues: (changes.newIssues ?? []).map(priority =>
        buildClientPriorityMessage(mapPriorityImpact(priority), 1)
      ),
      resolvedIssues: (changes.resolvedIssues ?? []).map(priority =>
        buildClientPriorityMessage(mapPriorityImpact(priority), 1)
      ),
      pagesImproved: (changes.statusChanged ?? []).filter(item => item.nextStatus === 'OK').length,
    },
  };
}

function summarizeVitestReport(report, fallbackDuration) {
  const passed = report?.numPassedTests ?? 0;
  const failed = report?.numFailedTests ?? 0;
  const skipped = (report?.numPendingTests ?? 0) + (report?.numTodoTests ?? 0);
  const total = report?.numTotalTests ?? passed + failed + skipped;
  const duration = report?.testResults?.reduce?.((sum, item) => {
    if (typeof item?.startTime === 'number' && typeof item?.endTime === 'number') {
      return sum + Math.max(0, item.endTime - item.startTime);
    }

    return sum;
  }, 0);
  const files = (report?.testResults ?? [])
    .map(item => {
      const assertions = Array.isArray(item?.assertionResults) ? item.assertionResults : [];
      const passedCount = assertions.filter(assertion => assertion?.status === 'passed').length;
      const failedCount = assertions.filter(assertion => assertion?.status === 'failed').length;
      const skippedCount = assertions.filter(assertion => assertion?.status === 'pending').length;
      const file = extractRelativePath(item?.name) ?? 'unknown';
      const durationMs =
        typeof item?.startTime === 'number' && typeof item?.endTime === 'number'
          ? Math.max(0, item.endTime - item.startTime)
          : Math.round(
            assertions.reduce((sum, assertion) => {
              return sum + (typeof assertion?.duration === 'number' ? assertion.duration : 0);
            }, 0)
          );

      return {
        file,
        status: item?.status === 'failed' || failedCount > 0 ? 'FAIL' : 'PASS',
        tests: assertions.length,
        durationMs,
        passed: passedCount,
        failed: failedCount,
        skipped: skippedCount,
        failedTests: assertions
          .filter(assertion => assertion?.status === 'failed')
          .map(assertion => assertion?.fullName ?? assertion?.title ?? 'Unnamed test')
          .filter(Boolean)
          .sort((left, right) => left.localeCompare(right)),
      };
    })
    .sort((left, right) => left.file.localeCompare(right.file));

  const failedFiles = uniqueStrings(
    files.filter(file => file.status === 'FAIL').map(file => file.file)
  );
  return {
    total,
    passed,
    failed,
    skipped,
    files,
    failedFiles,
    durationMs: typeof duration === 'number' && duration > 0 ? duration : fallbackDuration,
  };
}

function buildValidationSection(result, validationReport) {
  const validationData = unwrapReportData(validationReport);
  const validators = validationData?.validators ?? [];
  const total = validationData?.total ?? {};
  const failuresByValidator = new Map(
    (validationData?.errors ?? [])
      .filter(error => error && typeof error.validator === 'string')
      .map(error => [error.validator, error])
  );
  const blockingFailures = validators.filter(
    validator => validator.status === 'fail' && validator.blocking
  );
  const advisoryFailures = validators.filter(
    validator => validator.status === 'fail' && !validator.blocking
  );

  const errors = blockingFailures.map(validator => {
    const failure = failuresByValidator.get(validator.name);
    return failure?.output
      ? `${validator.name}: ${excerptOutput(failure.output)}`
      : `${validator.name} failed.`;
  });
  const warnings = advisoryFailures.map(validator => {
    const failure = failuresByValidator.get(validator.name);
    return failure?.output
      ? `${validator.name}: ${excerptOutput(failure.output)}`
      : `${validator.name} failed (advisory).`;
  });
  const blockingFailed = total.blockingFailed ?? blockingFailures.length;
  const advisoryFailed = total.advisoryFailed ?? advisoryFailures.length;
  const validatorDetails = validators.map(validator => {
    const output = findValidatorFailure(failuresByValidator, validator.name);
    const lines = collectOutputLines(output, 16);
    const normalizedStatus = normalizeStatus(validator.status);
    const isWarning = normalizedStatus === 'FAIL' && !validator.blocking;

    return {
      name: validator.name,
      status: normalizedStatus,
      blocking: Boolean(validator.blocking),
      durationMs: validator.duration ?? 0,
      warnings: isWarning ? lines : [],
      errors: isWarning ? [] : normalizedStatus === 'FAIL' ? lines : [],
    };
  });

  return {
    status: blockingFailed === 0 ? 'PASS' : 'FAIL',
    command: 'node scripts/core/validate-all.mjs --report-json',
    durationMs: result.durationMs,
    total: total.total ?? validators.length,
    errors,
    warnings,
    warningCount: advisoryFailed,
    validatorCount: validators.length,
    passed: total.passed ?? 0,
    failed: total.failed ?? 0,
    blockingFailed,
    advisoryFailed,
    validators: validatorDetails,
  };
}

function buildTypecheckSection(validate) {
  const typecheckValidator = validate.validators.find(validator => validator.name === 'typecheck');
  const errors = typecheckValidator?.errors ?? [];

  return {
    status: typecheckValidator?.status ?? 'FAIL',
    command: 'npm run typecheck',
    durationMs: typecheckValidator?.durationMs ?? 0,
    errors,
    errorCount: errors.length,
  };
}

function buildTestsSection(result, vitestReport) {
  const summary = summarizeVitestReport(vitestReport, result.durationMs);
  const output = combineOutput(result);
  const errors = result.exitCode === 0 ? [] : [excerptOutput(output) || 'Vitest run failed.'];

  return {
    status: result.exitCode === 0 && summary.failed === 0 ? 'PASS' : 'FAIL',
    command: 'npm run test -- --run',
    durationMs: result.durationMs,
    total: summary.total,
    passed: summary.passed,
    failed: summary.failed,
    skipped: summary.skipped,
    files: summary.files,
    failedFiles: summary.failedFiles,
    errors,
  };
}

function walkPlaywrightSuites(suites, summary) {
  for (const suite of suites ?? []) {
    for (const spec of suite.specs ?? []) {
      const filePath = spec.file
        ? spec.file.startsWith(root)
          ? normalizePath(path.relative(root, spec.file))
          : normalizePath(spec.file)
        : null;

      for (const test of spec.tests ?? []) {
        const statuses = new Set((test.results ?? []).map(result => result.status));

        if (statuses.has('failed') || statuses.has('timedOut') || statuses.has('interrupted')) {
          summary.failed += 1;
          if (filePath) {
            summary.failedFiles.add(filePath);
          }
        } else if (statuses.has('skipped')) {
          summary.skipped += 1;
        } else if (statuses.has('passed')) {
          summary.passed += 1;
        }
      }
    }

    walkPlaywrightSuites(suite.suites, summary);
  }
}

function buildE2ESection(result, report) {
  if (!report) {
    const output = combineOutput(result);
    return {
      status: result.exitCode === 0 ? 'PASS' : 'FAIL',
      command: 'npx playwright test --reporter=json',
      durationMs: result.durationMs,
      skipped: false,
      total: 0,
      passed: 0,
      failed: result.exitCode === 0 ? 0 : 1,
      skippedCount: 0,
      failedFiles: [],
      errors: result.exitCode === 0 ? [] : [excerptOutput(output) || 'Playwright run failed.'],
    };
  }

  const summary = {
    passed: 0,
    failed: 0,
    skipped: 0,
    failedFiles: new Set(),
  };
  walkPlaywrightSuites(report.suites ?? [], summary);

  return {
    status: result.exitCode === 0 && summary.failed === 0 ? 'PASS' : 'FAIL',
    command: 'npx playwright test --reporter=json',
    durationMs: report?.stats?.duration ?? result.durationMs,
    skipped: false,
    total: summary.passed + summary.failed + summary.skipped,
    passed: summary.passed,
    failed: summary.failed,
    skippedCount: summary.skipped,
    failedFiles: [...summary.failedFiles.values()],
    errors:
      result.exitCode === 0 && summary.failed === 0
        ? []
        : [excerptOutput(combineOutput(result)) || 'Playwright run failed.'],
  };
}

function buildSkippedE2ESection() {
  return {
    status: 'SKIPPED',
    command: null,
    durationMs: 0,
    skipped: true,
    total: 0,
    passed: 0,
    failed: 0,
    skippedCount: 0,
    failedFiles: [],
    errors: [],
  };
}

function listReportFiles(directoryPath, basePath = directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  const files = [];

  for (const entry of fs.readdirSync(directoryPath, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') {
      continue;
    }

    const absolutePath = path.join(directoryPath, entry.name);
    if (absolutePath.startsWith(tempDir)) {
      continue;
    }

    if (entry.isDirectory()) {
      files.push(...listReportFiles(absolutePath, basePath));
      continue;
    }

    files.push(absolutePath);
  }

  return files;
}

function inferSourceCommand(fileName, fallbackSource) {
  return reportSourceByFile.get(fileName) ?? fallbackSource;
}

function normalizeReportFile(absolutePath, timestamp, fallbackSource) {
  const fileName = path.basename(absolutePath);
  const relativePath = normalizePath(path.relative(root, absolutePath));
  const statsBefore = fs.statSync(absolutePath);
  let generatedAt = statsBefore.mtime.toISOString();
  const inferredSourceCommand = inferSourceCommand(fileName, fallbackSource);
  let fileSourceCommand = inferredSourceCommand;

  if (fileName.endsWith('.json')) {
    const report = readJsonFile(absolutePath);

    if (report !== null) {
      const nextReport = normalizeRawReport({
        name: fileName.replace(/\.json$/i, ''),
        payload: report,
        sourceCommand: inferredSourceCommand,
        generatedAt: typeof report?.generatedAt === 'string' ? report.generatedAt : timestamp,
      });

      nextReport.meta.source = inferredSourceCommand;
      nextReport.sourceCommand = inferredSourceCommand;

      generatedAt = nextReport.generatedAt;
      fileSourceCommand = nextReport.sourceCommand;
      writeJson(absolutePath, nextReport);
      validateReportFile(absolutePath, relativePath);
    }
  }

  return {
    name: fileName,
    path: relativePath,
    generatedAt,
    sourceCommand: fileSourceCommand,
  };
}

function buildReportsSection(result, runStartedAt, timestamp) {
  const allFiles = listReportFiles(reportsDir)
    .map(filePath => {
      const file = normalizeReportFile(filePath, timestamp, sourceCommand);

      return {
        file,
        ageMs: Math.max(0, parseTimestamp(timestamp) - fs.statSync(filePath).mtimeMs),
      };
    })
    .sort((left, right) => left.file.path.localeCompare(right.file.path));
  const trackedFiles = allFiles.filter(entry => {
    const relativeReportPath = path.relative(reportsDir, path.join(root, entry.file.path)).replaceAll('\\', '/');
    return requiredReportFiles.has(relativeReportPath);
  });

  const availableFileNames = new Set(
    trackedFiles.map(entry => path.relative(reportsDir, path.join(root, entry.file.path)).replaceAll('\\', '/'))
  );
  const missing = [...requiredReportFiles].filter(fileName => !availableFileNames.has(fileName));
  const stale = trackedFiles
    .filter(entry => {
      if (entry.ageMs <= reportStaleThresholdMs) {
        return false;
      }

      const relativeReportPath = path
        .relative(reportsDir, path.join(root, entry.file.path))
        .replaceAll('\\', '/');
      const inputPaths = reportInputPathsByFile.get(entry.file.name) ?? reportInputPathsByFile.get(relativeReportPath);
      if (!inputPaths) {
        return true;
      }

      return !isExecutionCacheValid({
        inputPaths: inputPaths.map(relativePath => path.join(root, relativePath)),
        outputPaths: [path.join(reportsDir, entry.file.name)],
      }).valid;
    })
    .map(entry => path.relative(reportsDir, path.join(root, entry.file.path)).replaceAll('\\', '/'))
    .sort((left, right) => left.localeCompare(right));

  return {
    status:
      result.exitCode === 0 && trackedFiles.length > 0 && missing.length === 0 && stale.length === 0
        ? 'PASS'
        : 'FAIL',
    command: 'node --import tsx/esm scripts/analyzers/export-reports.mjs',
    durationMs: result.durationMs,
    generatedAt: timestamp,
    fileCount: trackedFiles.length,
    files: trackedFiles.map(entry => entry.file),
    missing,
    stale,
    errors:
      result.exitCode === 0
        ? []
        : [excerptOutput(combineOutput(result)) || 'Report export failed.'],
  };
}

function buildSystemSection() {
  const domainStructureReport =
    unwrapReportData(readReportJson(root, 'domain-structure-report.json')) ?? {};
  const graphReport = unwrapReportData(readReportJson(root, 'graph-report.json')) ?? {};
  const authorityMap = unwrapReportData(readReportJson(root, 'authority-map.json')) ?? {};
  const domainIssues = Array.isArray(domainStructureReport?.issues)
    ? domainStructureReport.issues
    : [];
  const featureIssues = domainIssues
    .filter(issue => issue?.type === 'feature')
    .map(issue => issue?.message ?? 'Feature contract issue.');
  const serviceIssues = domainIssues
    .filter(issue => issue?.type === 'service')
    .map(issue => issue?.message ?? 'Service contract issue.');
  const cta = scanSmartCtaUsage();
  const graphErrors = Array.isArray(graphReport?.errors) ? graphReport.errors : [];
  const graphWarnings = Array.isArray(graphReport?.warnings) ? graphReport.warnings : [];

  return {
    contracts: {
      features: featureIssues.length === 0 ? 'OK' : 'ISSUES',
      services: serviceIssues.length === 0 ? 'OK' : 'ISSUES',
      featureIssues,
      serviceIssues,
      scanned: domainStructureReport?.scannedByType ?? {},
    },
    graph: {
      status:
        (graphReport?.errorCount ?? graphErrors.length) === 0 &&
          (graphReport?.summary?.orphanNodes ?? 0) === 0
          ? 'OK'
          : 'ISSUES',
      nodes: Array.isArray(authorityMap?.nodes) ? authorityMap.nodes.length : 0,
      orphanNodes: graphReport?.summary?.orphanNodes ?? 0,
      invalidEdges: graphReport?.summary?.invalidEdges ?? 0,
      issues: [...graphErrors, ...graphWarnings],
    },
    cta,
  };
}

function buildOverallStatus(report) {
  const requiredSteps = [report.validate.status, report.typecheck.status, report.reports.status];

  if (report.tests.status !== 'SKIPPED') {
    requiredSteps.push(report.tests.status);
  }

  if (report.e2e.status === 'FAIL') {
    requiredSteps.push('FAIL');
  }

  return requiredSteps.every(status => status === 'PASS') ? 'PASS' : 'FAIL';
}

function main() {
  assertLockedExecution();

  const runStartedAt = Date.now();
  const timestamp = new Date().toISOString();
  ensureDir(reportsDir);
  ensureDir(tempDir);
  ensureDir(snapshotDir);

  const preservedQuickReports = skipTests ? preserveReportFiles(quickPreservedReportFiles) : null;

  if (process.env.SUPPRESS_DIRTY_WORKSPACE_WARNING !== '1' && isGitWorkspaceDirty()) {
    logger.warn('running on dirty workspace');
  }

  const validateResult = runCommand(binaries.node, [
    'scripts/core/validate-all.mjs',
    '--report-json',
  ]);
  const validationReport = readReportJson(root, 'validation-results.json');
  const validate = buildValidationSection(validateResult, validationReport);

  const typecheck = buildTypecheckSection(validate);

  const vitestOutputPath = path.join(tempDir, 'vitest-all.json');
  const tests = skipTests
    ? buildSkippedTestsSection()
    : (() => {
      const testsResult = runCommand(binaries.npm, [
        'run',
        'test',
        '--',
        '--run',
        '--reporter=json',
        `--outputFile=${vitestOutputPath}`,
      ]);
      const vitestReport = readJsonFile(vitestOutputPath);
      return buildTestsSection(testsResult, vitestReport);
    })();
  const vitestReport = skipTests ? null : readJsonFile(vitestOutputPath);

  const e2eResult = includeE2E
    ? runCommand(binaries.npx, ['playwright', 'test', '--reporter=json'])
    : null;
  const e2e = includeE2E
    ? buildE2ESection(e2eResult, parseJsonText(e2eResult.stdout))
    : buildSkippedE2ESection();

  const reportsResult = runCommand(binaries.node, [
    '--import',
    'tsx/esm',
    'scripts/analyzers/export-reports.mjs',
    `--mode=${loggingMode}`,
  ]);
  const reports = buildReportsSection(reportsResult, runStartedAt, timestamp);
  const system = buildSystemSection();
  const priorities = buildPriorities(validate);
  const pages = buildPages(priorities);
  const changes = buildChanges(null, priorities, pages);

  const report = {
    status: 'FAIL',
    timestamp,
    sourceCommand,
    durationMs: Date.now() - runStartedAt,
    validate,
    typecheck,
    tests,
    e2e,
    reports,
    system,
    priorities,
    pages,
    changes,
  };

  report.status = buildOverallStatus(report);
  const stabilizedReport = stabilizeRuntimeMetrics(report);
  const clientDashboard = buildClientDashboard(stabilizedReport);

  if (skipTests) {
    const pipelineReport = readReportJson(root, 'pipeline-report.json');
    const performanceSummary = buildPerformanceSummary(stabilizedReport, pipelineReport);
    const shouldFail = stabilizedReport.status === 'FAIL';

    if (preservedQuickReports) {
      restoreReportFiles(preservedQuickReports);
    }

    const diagnostics = buildRuntimeFailureDiagnostics(stabilizedReport, vitestReport);
    printStructuredSystemSummary(stabilizedReport, performanceSummary);
    printSystemFailures(diagnostics);
    if (outputMode === 'full') {
      printStructuredSystemDetails(stabilizedReport, performanceSummary);
    }
    if (stabilizedReport.status === 'FAIL' || outputMode === 'full') {
      printActionSection(stabilizedReport, diagnostics);
    }

    logger.printSummary('quick mode -> preserved system:full source-of-truth reports');
    process.exitCode = shouldFail ? 1 : 0;
    return;
  }

  stabilizedReport.reports.files.push({
    name: 'system-health.json',
    path: 'reports/system-health.json',
    generatedAt: 'stable',
    sourceCommand,
  });
  stabilizedReport.reports.files.push({
    name: 'system-report.json',
    path: 'reports/system-report.json',
    generatedAt: 'stable',
    sourceCommand,
  });
  stabilizedReport.reports.files.push({
    name: 'client-dashboard.json',
    path: 'reports/client-dashboard.json',
    generatedAt: 'stable',
    sourceCommand,
  });
  stabilizedReport.reports.missing = stabilizedReport.reports.missing.filter(
    fileName => fileName !== 'system-health.json'
  );
  stabilizedReport.reports.missing = stabilizedReport.reports.missing.filter(
    fileName => fileName !== 'system-report.json'
  );
  stabilizedReport.reports.missing = stabilizedReport.reports.missing.filter(
    fileName => fileName !== 'client-dashboard.json'
  );
  stabilizedReport.reports.fileCount = stabilizedReport.reports.files.length;
  stabilizedReport.reports.status =
    stabilizedReport.reports.errors.length === 0 &&
      stabilizedReport.reports.files.length > 0 &&
      stabilizedReport.reports.missing.length === 0 &&
      stabilizedReport.reports.stale.length === 0
      ? 'PASS'
      : 'FAIL';
  stabilizedReport.status = buildOverallStatus(stabilizedReport);

  const validatedOutputs = validateFrozenOutputs(stabilizedReport, clientDashboard);
  const pipelineReport = readReportJson(root, 'pipeline-report.json');
  const performanceSummary = buildPerformanceSummary(validatedOutputs.report, pipelineReport);
  const systemHealthReport = buildSystemHealthReport(validatedOutputs.report, pipelineReport);
  const systemHealthPath = path.join(reportsDir, 'system-health.json');
  writeJson(systemHealthPath, systemHealthReport);
  writeJson(clientDashboardPath, validatedOutputs.clientDashboard);
  writeJson(reportPath, validatedOutputs.report);

  const dashboardResult = buildAndValidateDashboardData(root, sourceCommand);
  const dashboardFiles = dashboardResult.files.map(fileName => ({
    name: fileName,
    path: `reports/dashboard/${fileName}`,
    generatedAt: 'stable',
    sourceCommand,
  }));

  for (const dashboardFile of dashboardFiles) {
    validatedOutputs.report.reports.files.push(dashboardFile);
  }

  validatedOutputs.report.reports.fileCount = validatedOutputs.report.reports.files.length;
  validatedOutputs.report.reports.missing = validatedOutputs.report.reports.missing.filter(
    fileName => !dashboardResult.files.includes(fileName)
  );
  validatedOutputs.report.reports.status =
    validatedOutputs.report.reports.errors.length === 0 &&
      validatedOutputs.report.reports.files.length > 0 &&
      validatedOutputs.report.reports.missing.length === 0 &&
      validatedOutputs.report.reports.stale.length === 0
      ? 'PASS'
      : 'FAIL';
  validatedOutputs.report.status = buildOverallStatus(validatedOutputs.report);

  writeJson(clientDashboardPath, validatedOutputs.clientDashboard);
  writeJson(reportPath, validatedOutputs.report);
  writeSnapshotArtifacts(validatedOutputs.report);

  const shouldFail = validatedOutputs.report.status === 'FAIL';
  const diagnostics = buildRuntimeFailureDiagnostics(validatedOutputs.report, vitestReport);
  printStructuredSystemSummary(validatedOutputs.report, performanceSummary);
  printSystemFailures(diagnostics);
  if (outputMode === 'full') {
    printStructuredSystemDetails(validatedOutputs.report, performanceSummary);
  }
  if (validatedOutputs.report.status === 'FAIL' || outputMode === 'full') {
    printActionSection(validatedOutputs.report, diagnostics);
  }
  logger.printSummary(`system report -> ${logger.relativePath(reportPath)}`);
  logger.printSummary(`client dashboard -> ${logger.relativePath(clientDashboardPath)}`);
  logger.printErrors(validatedOutputs.report.validate.errors, 'validator errors', 5);
  logger.printErrors(validatedOutputs.report.reports.errors, 'report errors', 5);
  process.exitCode = shouldFail ? 1 : 0;
}

try {
  main();
} catch (error) {
  const message = error instanceof Error ? error.message : 'Unknown system:full failure.';
  process.stderr.write(`[system:full] ${message}\n`);
  process.exit(1);
}
