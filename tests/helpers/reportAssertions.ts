import { expect } from 'vitest';

const allowedStatuses = ['PASS', 'FAIL', 'WARN', 'SKIPPED'] as const;

export type ReportLike = Record<string, any>;

function readStatus(value: unknown) {
  return typeof value === 'string' ? value.toUpperCase() : '';
}

function stripVolatileFields(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map(stripVolatileFields);
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  const record = value as ReportLike;
  const output: ReportLike = {};

  for (const [key, entry] of Object.entries(record)) {
    if (
      key === 'generatedAt' ||
      key === 'timestamp' ||
      key === 'durationMs' ||
      key === 'validateAllMs' ||
      key === 'exportReportsMs' ||
      key === 'totalMs' ||
      key === 'updatedAt' ||
      key === 'count' ||
      key === 'reportCount' ||
      key === 'validatorCount' ||
      key === 'analyzerCount'
    ) {
      continue;
    }

    output[key] = stripVolatileFields(entry);
  }

  return output;
}

export function validateReportShape<TReport extends ReportLike>(report: TReport): TReport {
  expect(report).toBeTruthy();
  expect(report).toHaveProperty('meta');
  expect(report).toHaveProperty('summary');
  expect(report).toHaveProperty('data');
  expect(report).toHaveProperty('issues');
  expect(report.meta).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      source: expect.any(String),
      generatedAt: expect.any(String),
      status: expect.any(String),
      version: expect.any(String),
    })
  );
  expect(report.summary).toEqual(
    expect.objectContaining({
      total: expect.any(Number),
      passed: expect.any(Number),
      failed: expect.any(Number),
      warnings: expect.any(Number),
    })
  );
  expect(Array.isArray(report.issues)).toBe(true);
  expect(allowedStatuses).toContain(readStatus(report.meta.status));
  expect(readStatus(report.meta.status)).toBe(readStatus(report.status));

  return stripVolatileFields(report) as TReport;
}

export function normalizeReportForSnapshot<TReport extends ReportLike>(report: TReport): TReport {
  if (report && typeof report === 'object' && 'meta' in report) {
    return validateReportShape(report);
  }

  return stripVolatileFields(report) as TReport;
}

export function assertDashboardBundle<TReport extends ReportLike>(report: TReport): TReport {
  const normalized = validateReportShape(report);

  expect(normalized.meta.name).toMatch(/^dashboard-/);
  expect(normalized.data).toBeTruthy();
  return normalized;
}

export function assertPipelineCoverage<TReport extends ReportLike>(report: TReport): TReport {
  const normalized = validateReportShape(report);
  const rawSteps = report.data?.steps ?? report.data?.timelineSteps;
  const steps = normalized.data?.steps ?? normalized.data?.timelineSteps;

  expect(Array.isArray(steps)).toBe(true);
  expect(steps.length).toBeGreaterThan(0);
  expect(Array.isArray(rawSteps)).toBe(true);
  expect(rawSteps[0]).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      status: expect.any(String),
      durationMs: expect.any(Number),
      outputs: expect.any(Array),
    })
  );
  expect(steps[0]).toEqual(
    expect.objectContaining({
      name: expect.any(String),
      status: expect.any(String),
      outputs: expect.any(Array),
    })
  );

  const firstStatus = readStatus(steps[0].status);
  expect(allowedStatuses).toContain(firstStatus);

  return normalized;
}
