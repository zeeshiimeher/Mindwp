import { createLogger } from '../../lib/logger/index.mjs';

function coerceSummary(summary) {
  if (!summary || typeof summary !== 'object' || Array.isArray(summary)) {
    return {};
  }

  return {
    ...(typeof summary.total === 'number' ? { total: summary.total } : {}),
    ...(typeof summary.passed === 'number' ? { passed: summary.passed } : {}),
    ...(typeof summary.failed === 'number' ? { failed: summary.failed } : {}),
    ...(typeof summary.warnings === 'number' ? { warnings: summary.warnings } : {}),
  };
}

function normalizeStatusString(status) {
  if (typeof status !== 'string') {
    return null;
  }

  const normalized = status.trim().toUpperCase();

  if (normalized === 'PASS' || normalized === 'PASSED' || normalized === 'CLEAN' || normalized === 'OK') {
    return 'PASS';
  }

  if (normalized === 'FAIL' || normalized === 'FAILED' || normalized === 'ERROR') {
    return 'FAIL';
  }

  if (normalized === 'WARN' || normalized === 'WARNING' || normalized === 'SKIPPED') {
    return 'WARN';
  }

  return null;
}

export function inferReportStatus(summary = {}) {
  if ((summary.failed ?? 0) > 0) {
    return 'FAIL';
  }

  if ((summary.warnings ?? 0) > 0) {
    return 'WARN';
  }

  return 'PASS';
}

export function summarizeIssues(issues = [], warningCount = 0) {
  const failed = Array.isArray(issues) ? issues.length : 0;

  return {
    total: failed + warningCount,
    passed: failed === 0 ? 1 : 0,
    failed,
    warnings: warningCount,
  };
}

export function createReportSchema({
  name,
  status,
  summary,
  issues,
  data,
  generatedAt,
  sourceCommand,
}) {
  return {
    name,
    status,
    summary: coerceSummary(summary),
    ...(Array.isArray(issues) && issues.length > 0 ? { issues } : {}),
    ...(data !== undefined ? { data } : {}),
    generatedAt: typeof generatedAt === 'string' ? generatedAt : new Date().toISOString(),
    sourceCommand,
  };
}

/**
 * @param {{
 *   name: string,
 *   payload?: any,
 *   sourceCommand: string,
 *   summary?: any,
 *   status?: string,
 *   issues?: any[],
 *   data?: any,
 *   generatedAt?: string,
 * }} options
 */
export function normalizeRawReport({
  name,
  payload,
  sourceCommand,
  summary,
  status,
  issues,
  data,
  generatedAt,
}) {
  const normalizedIssues = Array.isArray(issues)
    ? issues
    : Array.isArray(payload)
      ? payload
      : Array.isArray(payload?.issues)
        ? payload.issues
        : [];
  const normalizedData = data !== undefined
    ? data
    : Array.isArray(payload)
      ? undefined
      : payload?.data !== undefined
        ? payload.data
        : payload;
  const normalizedSummary = coerceSummary(summary ?? payload?.summary ?? summarizeIssues(normalizedIssues));
  const normalizedStatus = normalizeStatusString(status) ?? normalizeStatusString(payload?.status) ?? inferReportStatus(normalizedSummary);

  return createReportSchema({
    name,
    status: normalizedStatus,
    summary: normalizedSummary,
    issues: normalizedIssues,
    data: normalizedData,
    generatedAt: typeof generatedAt === 'string' ? generatedAt : payload?.generatedAt,
    sourceCommand,
  });
}

export function unwrapReportData(report) {
  if (!report || typeof report !== 'object' || Array.isArray(report)) {
    return report;
  }

  if (
    typeof report.name === 'string' &&
    typeof report.status === 'string' &&
    report.summary &&
    typeof report.generatedAt === 'string' &&
    typeof report.sourceCommand === 'string'
  ) {
    return report.data ?? {};
  }

  return report;
}

export function createReportLogger({ label, mode, rootDir }) {
  return createLogger({ label, mode, rootDir });
}