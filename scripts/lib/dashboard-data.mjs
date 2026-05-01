import fs from 'node:fs';
import path from 'node:path';

import { getDashboardReportFiles, getReportFiles } from '../core/system-manifest.mjs';

import { attachGeneratedJsonMetadata } from './generated-file-metadata.mjs';
import { readJsonFile } from './report-json.mjs';
import { createReportSchema, unwrapReportData } from './report-schema.mjs';

export const DASHBOARD_REPORT_FILES = getDashboardReportFiles().map(fileName =>
  fileName.replace(/^dashboard\//, '')
);

function readReport(root, fileName) {
  return readJsonFile(path.join(root, 'reports', fileName));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const payload =
    filePath.endsWith('.json') && !data?._generated
      ? attachGeneratedJsonMetadata(data, {
        source: 'dashboard-data',
        type: 'dashboard',
      })
      : data;
  fs.writeFileSync(filePath, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
}

function toUpperStatus(value, fallback = 'PASS') {
  const status = typeof value === 'string' ? value.toUpperCase() : fallback;
  return ['PASS', 'FAIL', 'WARN', 'SKIPPED'].includes(status) ? status : fallback;
}

function toPercent(value, total) {
  if (!Number.isFinite(total) || total <= 0) {
    return 0;
  }

  return Math.round((value / total) * 100);
}

function summarizeValidatorReport(report) {
  if (!report || typeof report !== 'object') {
    return null;
  }

  return {
    name: typeof report.name === 'string' ? report.name : null,
    status: toUpperStatus(report.status, 'PASS'),
    generatedAt: typeof report.generatedAt === 'string' ? report.generatedAt : null,
    summary: report.summary ?? null,
    issuesCount: Array.isArray(report.issues) ? report.issues.length : 0,
  };
}

function summarizeValidatorEntry(validator) {
  return {
    name: validator?.name ?? null,
    status: toUpperStatus(validator?.status, 'PASS'),
    blocking: validator?.blocking === true,
    reportFile: validator?.reportFile ?? null,
    reportStatus: toUpperStatus(validator?.reportStatus, 'PASS'),
    cached: validator?.cached === true,
    stale: validator?.stale === true,
    duration: Number.isFinite(validator?.duration) ? validator.duration : 0,
  };
}

function summarizeValidationError(error) {
  const output =
    typeof error?.output === 'string'
      ? error.output
        .split('\n')
        .map(line => line.trim())
        .filter(Boolean)
        .slice(0, 3)
        .join(' | ')
      : null;

  return {
    validator: error?.validator ?? null,
    reportFile: error?.reportFile ?? null,
    blocking: error?.blocking === true,
    output,
  };
}

function summarizeIssue(issue) {
  if (!issue || typeof issue !== 'object') {
    return issue ?? null;
  }

  return {
    code: issue.code ?? null,
    message: issue.message ?? null,
    file: issue.file ?? null,
    validator: issue.validator ?? null,
  };
}

function resolveGeneratedTimestamp(report, _filePath) {
  if (typeof report?._generated?.hash === 'string') {
    return report._generated.hash;
  }

  if (typeof report?.meta?._generated?.hash === 'string') {
    return report.meta._generated.hash;
  }

  if (typeof report?.generatedAt === 'string') {
    return report.generatedAt;
  }

  return null;
}

function buildValidationSnapshot(validationResults) {
  const validationData = unwrapReportData(validationResults) ?? {};

  return {
    meta: validationResults?.meta ?? null,
    summary: validationResults?.summary ?? null,
    data: {
      total: validationData?.total ?? null,
      validators: Array.isArray(validationData.validators)
        ? validationData.validators.map(summarizeValidatorEntry)
        : [],
      errors: Array.isArray(validationData.errors)
        ? validationData.errors.slice(0, 12).map(summarizeValidationError)
        : [],
      reportSize: validationData?.reportSize ?? null,
      latestRun: validationData?.latestRun ?? null,
      cacheHits: validationData?.cacheHits ?? 0,
      staleReports: Array.isArray(validationData?.staleReports) ? validationData.staleReports : [],
    },
    issues: Array.isArray(validationResults?.issues)
      ? validationResults.issues.slice(0, 12).map(summarizeIssue)
      : [],
  };
}

export function buildDashboardData(root, sourceCommand = 'npm run system:full') {
  const dashboardDir = path.join(root, 'reports', 'dashboard');
  fs.mkdirSync(dashboardDir, { recursive: true });

  const systemReport = readReport(root, 'system-report.json') ?? {};
  const systemHealth = readReport(root, 'system-health.json') ?? {};
  const systemHealthData = unwrapReportData(systemHealth) ?? {};
  const validationResults = readReport(root, 'validation-results.json') ?? {};
  const validationData = unwrapReportData(validationResults) ?? {};
  const pipelineReport = readReport(root, 'pipeline-report.json') ?? {};
  const pipelineData = unwrapReportData(pipelineReport) ?? {};
  const envValidationReport = readReport(root, 'env-validation-report.json') ?? {};
  const envValidationData = unwrapReportData(envValidationReport) ?? {};
  const snapshotPayload =
    readJsonFile(path.join(root, 'reports', '.system-full', 'system-snapshot.json')) ?? {};
  const snapshotSummary =
    readJsonFile(path.join(root, 'reports', 'system-snapshots', 'latest-summary.json')) ?? {};
  const validationSnapshot = buildValidationSnapshot(validationResults);

  const validators = Array.isArray(validationData.validators) ? validationData.validators : [];
  const validatorPassCount = validators.filter(
    validator => String(validator.status).toLowerCase() === 'pass'
  ).length;
  const validatorFailCount = validators.filter(
    validator => String(validator.status).toLowerCase() === 'fail'
  ).length;
  const validatorWarningCount = validators.filter(
    validator => String(validator.status).toLowerCase() !== 'pass' && !validator.blocking
  ).length;
  const validatorReports = validators.map(validator => ({
    name: validator.name,
    status: toUpperStatus(validator.status, 'PASS'),
    blocking: validator.blocking === true,
    reportFile: validator.reportFile,
    report: summarizeValidatorReport(
      validator.reportFile ? readReport(root, validator.reportFile) : null
    ),
  }));
  const validatorGroups = {
    failed: validatorReports.filter(
      item => String(item.report?.status ?? '').toUpperCase() === 'FAIL'
    ),
    warnings: validatorReports.filter(
      item => String(item.report?.status ?? '').toUpperCase() === 'WARN'
    ),
    passed: validatorReports.filter(
      item => String(item.report?.status ?? '').toUpperCase() === 'PASS'
    ),
  };
  const failureDrilldown = {
    failures: validatorReports
      .filter(
        item => item.status === 'FAIL' || toUpperStatus(item.report?.status, 'PASS') === 'FAIL'
      )
      .map(item => ({
        name: item.name,
        status: item.status,
        reportFile: item.reportFile,
        reportStatus: toUpperStatus(item.report?.status, 'PASS'),
        blocking: item.blocking,
      })),
    warnings: validatorReports
      .filter(
        item => item.status === 'WARN' || toUpperStatus(item.report?.status, 'PASS') === 'WARN'
      )
      .map(item => ({
        name: item.name,
        status: item.status,
        reportFile: item.reportFile,
        reportStatus: toUpperStatus(item.report?.status, 'PASS'),
        blocking: item.blocking,
      })),
  };
  const pipelineSteps = Array.isArray(pipelineData.steps) ? pipelineData.steps : [];
  const analyzerCoverage = Array.isArray(pipelineData.analyzers)
    ? pipelineData.analyzers.map(analyzer => ({
      name: analyzer.name,
      status: toUpperStatus(analyzer.status, 'PASS'),
      outputs: analyzer.outputs ?? [],
      skipped: analyzer.skipped === true,
      durationMs: analyzer.durationMs ?? 0,
    }))
    : [];
  const integrityStrip = {
    reportsStatus: toUpperStatus(systemReport?.reports?.status ?? systemHealth?.status, 'PASS'),
    validatorCoveragePct: toPercent(validatorPassCount, validators.length),
    analyzerCoveragePct: toPercent(analyzerCoverage.length, analyzerCoverage.length || 1),
    drift: systemHealthData?.drift === true,
  };
  const lastRunSummary = {
    durationMs: systemReport?.durationMs ?? 0,
    totalReports: systemReport?.reports?.fileCount ?? 0,
    passed: validationData?.total?.passed ?? 0,
    failed: validationData?.total?.failed ?? 0,
    warnings:
      (validationData?.total?.advisoryFailed ?? 0) + (pipelineReport?.summary?.warnings ?? 0),
  };
  const lastRunDetails = {
    time: systemReport?.timestamp ?? systemReport?.generatedAt ?? 'n/a',
    durationMs: systemReport?.durationMs ?? 0,
    status: toUpperStatus(systemReport?.status, 'PASS'),
    cacheHits: validationData?.cacheHits ?? 0,
  };
  const durableReports = getReportFiles().map(fileName => {
    const absolutePath = path.join(root, 'reports', fileName);
    const report = readJsonFile(absolutePath);
    const staleEntries = Array.isArray(systemReport?.reports?.stale)
      ? systemReport.reports.stale
      : [];
    const missingEntries = Array.isArray(systemReport?.reports?.missing)
      ? systemReport.reports.missing
      : [];

    return {
      fileName,
      status: missingEntries.includes(fileName)
        ? 'missing'
        : staleEntries.includes(fileName)
          ? 'stale'
          : 'fresh',
      exists: fs.existsSync(absolutePath),
      lastGenerated: resolveGeneratedTimestamp(report, absolutePath),
    };
  });
  const snapshotInfo = {
    hash: snapshotPayload?._generated?.hash ?? null,
    lastBuilt: snapshotPayload?._generated?.hash ?? snapshotPayload?.generatedAt ?? null,
    sourceConsistency:
      Boolean(snapshotPayload?.graph) &&
      Boolean(snapshotPayload?.routeInventory) &&
      systemHealthData?.drift !== true,
    latestSummary: snapshotSummary?.currentSnapshot ?? null,
  };
  const envStatus = {
    status: toUpperStatus(envValidationReport?.status, 'PASS'),
    missingKeys: Array.isArray(envValidationData?.missingKeys) ? envValidationData.missingKeys : [],
    generatedAt: resolveGeneratedTimestamp(
      envValidationReport,
      path.join(root, 'reports', 'env-validation-report.json')
    ),
  };
  const systemStatus = {
    status: toUpperStatus(systemReport?.status, 'PASS'),
    validators: `${validatorPassCount}/${validators.length}`,
    tests: systemReport?.tests?.status ?? 'UNKNOWN',
    warnings: lastRunSummary.warnings,
  };

  const graphReport = readReport(root, 'graph-report.json') ?? {};
  const graphDerivedSummary = readReport(root, 'graph-derived-summary.json') ?? {};
  const authorityMap = readReport(root, 'authority-map.json') ?? {};
  const topicScores = readReport(root, 'topic-authority-scores.json') ?? {};
  const topicInsights = readReport(root, 'topic-insights.json') ?? {};
  const contentGaps = readReport(root, 'content-gaps.json') ?? {};
  const contentQuality = readReport(root, 'content-quality-report.json') ?? {};
  const contentScore = readReport(root, 'content-score.json') ?? {};
  const contentConsistency = readReport(root, 'content-consistency-audit.json') ?? {};
  const contentIntelligence = readReport(root, 'content-intelligence.json') ?? {};
  const slowestSteps = [...pipelineSteps]
    .sort((left, right) => (right.durationMs ?? 0) - (left.durationMs ?? 0))
    .slice(0, 5)
    .map(step => ({
      name: step.name,
      status: toUpperStatus(step.status, 'PASS'),
      durationMs: step.durationMs ?? 0,
      outputs: Array.isArray(step.outputs) ? step.outputs : [],
      skipped: step.skipped === true,
      reason: step.reason,
    }));
  const warningSource = pipelineData.warnings ?? {};
  const warningsPanel = {
    validators: Array.isArray(warningSource.validators)
      ? warningSource.validators.map(item => ({
        name: item.name,
        detail: item.reportFile ?? 'validator warning',
        status: toUpperStatus(item.status, 'WARN'),
      }))
      : [],
    skippedAnalyzers: Array.isArray(warningSource.skippedAnalyzers)
      ? warningSource.skippedAnalyzers.map(item => ({
        name: item.name,
        detail: item.reason ?? (item.cached ? 'cached output reused' : 'skipped'),
        status: 'SKIPPED',
      }))
      : [],
    sizeWarnings: Array.isArray(warningSource.sizeWarnings)
      ? warningSource.sizeWarnings.map(item => ({
        name: item.label,
        detail: `${item.size} / ${item.warnAt} bytes`,
        status: 'WARN',
      }))
      : [],
    staleReports: Array.isArray(warningSource.staleReports)
      ? warningSource.staleReports.map(item => ({
        name: item.name,
        detail: item.reportFile ?? 'stale report reused',
        status: 'WARN',
      }))
      : [],
  };

  const files = [
    {
      fileName: 'system.json',
      report: createReportSchema({
        name: 'dashboard-system',
        status: systemReport?.status === 'FAIL' ? 'FAIL' : 'PASS',
        summary: {
          total: 1,
          passed: systemReport?.status === 'FAIL' ? 0 : 1,
          failed: systemReport?.status === 'FAIL' ? 1 : 0,
          warnings: 0,
        },
        data: {
          ...systemReport,
          systemHealth,
          systemStatus,
          integrityStrip,
          lastRunSummary,
          lastRunDetails,
          envStatus,
          snapshotInfo,
          durableReports,
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'validators.json',
      report: createReportSchema({
        name: 'dashboard-validators',
        status: validators.some(validator => String(validator.status).toUpperCase() === 'FAIL')
          ? 'FAIL'
          : 'PASS',
        summary: {
          total: validatorReports.length,
          passed: validatorPassCount,
          failed: validatorFailCount,
          warnings: validatorWarningCount,
        },
        issues: validatorReports.filter(item => !item.report),
        data: {
          validationResults: validationSnapshot,
          reports: validatorReports,
          groups: validatorGroups,
          failureDrilldown,
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'graph.json',
      report: createReportSchema({
        name: 'dashboard-graph',
        status:
          graphReport?.status === 'FAIL'
            ? 'FAIL'
            : graphDerivedSummary?.status === 'WARN'
              ? 'WARN'
              : 'PASS',
        summary: {
          total: 3,
          passed: [authorityMap, graphReport, graphDerivedSummary].filter(Boolean).length,
          failed: 0,
          warnings: graphDerivedSummary?.status === 'WARN' ? 1 : 0,
        },
        data: {
          authorityMap,
          graphReport,
          graphDerivedSummary,
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'topics.json',
      report: createReportSchema({
        name: 'dashboard-topics',
        status: topicInsights?.status === 'WARN' ? 'WARN' : 'PASS',
        summary: {
          total: 2,
          passed: [topicScores, topicInsights].filter(Boolean).length,
          failed: 0,
          warnings: topicInsights?.status === 'WARN' ? 1 : 0,
        },
        data: {
          scores: topicScores,
          insights: topicInsights,
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'content.json',
      report: createReportSchema({
        name: 'dashboard-content',
        status:
          contentGaps?.status === 'FAIL' || contentQuality?.status === 'FAIL'
            ? 'FAIL'
            : contentIntelligence?.status === 'WARN' || contentScore?.status === 'WARN'
              ? 'WARN'
              : 'PASS',
        summary: {
          total: 5,
          passed: [
            contentGaps,
            contentQuality,
            contentScore,
            contentConsistency,
            contentIntelligence,
          ].filter(Boolean).length,
          failed: 0,
          warnings: [contentScore, contentConsistency, contentIntelligence].filter(
            report => report?.status === 'WARN'
          ).length,
        },
        data: {
          gaps: summarizeValidatorReport(contentGaps),
          quality: summarizeValidatorReport(contentQuality),
          score: summarizeValidatorReport(contentScore),
          consistency: summarizeValidatorReport(contentConsistency),
          intelligence: summarizeValidatorReport(contentIntelligence),
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'pipeline.json',
      report: createReportSchema({
        name: 'dashboard-pipeline',
        status:
          pipelineReport?.status === 'FAIL'
            ? 'FAIL'
            : pipelineReport?.status === 'WARN'
              ? 'WARN'
              : 'PASS',
        summary: {
          total: pipelineReport?.summary?.total ?? 0,
          passed: pipelineReport?.summary?.passed ?? 0,
          failed: pipelineReport?.summary?.failed ?? 0,
          warnings: pipelineReport?.summary?.warnings ?? 0,
        },
        data: {
          pipeline: pipelineReport,
          coverage: pipelineData,
          timelineSteps: pipelineSteps.map(step => ({
            name: step.name,
            status: toUpperStatus(step.status, 'PASS'),
            durationMs: step.durationMs ?? 0,
            outputs: Array.isArray(step.outputs) ? step.outputs : [],
            skipped: step.skipped === true,
            reason: step.reason,
          })),
          analyzerCoverage,
          slowestSteps,
          warningsPanel,
        },
        sourceCommand,
      }),
    },
  ];

  for (const entry of files) {
    writeJson(path.join(dashboardDir, entry.fileName), entry.report);
  }

  return files.map(entry => entry.fileName);
}
