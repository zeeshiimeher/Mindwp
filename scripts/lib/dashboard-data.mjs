import fs from 'node:fs';
import path from 'node:path';

import { createReportSchema, unwrapReportData } from './report-schema.mjs';
import { readJsonFile } from './report-json.mjs';

export const DASHBOARD_REPORT_FILES = [
  'system.json',
  'validators.json',
  'graph.json',
  'topics.json',
  'content.json',
  'pipeline.json',
];

function readReport(root, fileName) {
  return readJsonFile(path.join(root, 'reports', fileName));
}

function writeJson(filePath, data) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(data, null, 2)}\n`, 'utf8');
}

export function buildDashboardData(root, sourceCommand = 'npm run system:full') {
  const dashboardDir = path.join(root, 'reports', 'dashboard');
  fs.mkdirSync(dashboardDir, { recursive: true });

  const systemReport = readReport(root, 'system-report.json') ?? {};
  const validationResults = readReport(root, 'validation-results.json') ?? {};
  const validationData = unwrapReportData(validationResults) ?? {};
  const pipelineReport = readReport(root, 'pipeline-report.json') ?? {};
  const pipelineData = unwrapReportData(pipelineReport) ?? {};

  const validators = Array.isArray(validationData.validators) ? validationData.validators : [];
  const validatorPassCount = validators.filter(validator => String(validator.status).toLowerCase() === 'pass').length;
  const validatorFailCount = validators.filter(validator => String(validator.status).toLowerCase() === 'fail').length;
  const validatorWarningCount = validators.filter(
    validator => String(validator.status).toLowerCase() !== 'pass' && !validator.blocking
  ).length;
  const validatorReports = validators.map(validator => ({
    name: validator.name,
    reportFile: validator.reportFile,
    report: validator.reportFile ? readReport(root, validator.reportFile) : null,
  }));

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
        data: systemReport,
        sourceCommand,
      }),
    },
    {
      fileName: 'validators.json',
      report: createReportSchema({
        name: 'dashboard-validators',
        status: validators.some(validator => String(validator.status).toUpperCase() === 'FAIL') ? 'FAIL' : 'PASS',
        summary: {
          total: validatorReports.length,
          passed: validatorPassCount,
          failed: validatorFailCount,
          warnings: validatorWarningCount,
        },
        issues: validatorReports.filter(item => !item.report),
        data: {
          validationResults,
          reports: validatorReports,
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'graph.json',
      report: createReportSchema({
        name: 'dashboard-graph',
        status: graphReport?.status === 'FAIL' ? 'FAIL' : graphDerivedSummary?.status === 'WARN' ? 'WARN' : 'PASS',
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
          passed: [contentGaps, contentQuality, contentScore, contentConsistency, contentIntelligence].filter(Boolean).length,
          failed: 0,
          warnings: [contentScore, contentConsistency, contentIntelligence].filter(report => report?.status === 'WARN').length,
        },
        data: {
          gaps: contentGaps,
          quality: contentQuality,
          score: contentScore,
          consistency: contentConsistency,
          intelligence: contentIntelligence,
        },
        sourceCommand,
      }),
    },
    {
      fileName: 'pipeline.json',
      report: createReportSchema({
        name: 'dashboard-pipeline',
        status: pipelineReport?.status === 'FAIL' ? 'FAIL' : pipelineReport?.status === 'WARN' ? 'WARN' : 'PASS',
        summary: {
          total: pipelineReport?.summary?.total ?? 0,
          passed: pipelineReport?.summary?.passed ?? 0,
          failed: pipelineReport?.summary?.failed ?? 0,
          warnings: pipelineReport?.summary?.warnings ?? 0,
        },
        data: {
          pipeline: pipelineReport,
          coverage: pipelineData,
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