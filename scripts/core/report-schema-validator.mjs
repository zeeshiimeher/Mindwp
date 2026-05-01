import fs from 'node:fs';
import { z } from 'zod';

import { createGeneratedJsonMetadata } from '../lib/generated-file-metadata.mjs';

export const REPORT_SCHEMA_VERSION = '1.0';
export const MAX_REPORT_SIZE = 2_000_000;
export const MAX_REPORT_ARRAY_ITEMS = 100;
export const MAX_REPORT_OBJECT_KEYS = 40;
export const MAX_REPORT_STRING_LENGTH = 4_000;
export const MAX_REPORT_DEPTH = 8;
export const REPORT_SIZE_WARNING_RATIO = 0.8;
export const REPORT_SIZE_LIMITS = {
  'authority-map.json': 2_600_000,
  'content-gaps.json': 4_000_000,
  'dashboard/content.json': 2_700_000,
  'dashboard/graph.json': 300_000,
  'dashboard/pipeline.json': 150_000,
  'dashboard/system.json': 120_000,
  'dashboard/validators.json': 150_000,
  'pipeline-report.json': 200_000,
  'system-report.json': 120_000,
  'validation-report.json': 120_000,
  'validation-results.json': 120_000,
};

const reportStatusSchema = z.enum(['PASS', 'FAIL', 'WARN']);
const generatedFileSchema = z.object({
  source: z.string().min(1),
  type: z.string().min(1),
  hash: z.string().min(1),
});

export const ReportSchema = z
  .object({
    meta: z.object({
      name: z.string().min(1),
      source: z.string().min(1),
      generatedAt: z.string().min(1),
      status: reportStatusSchema,
      version: z.string().min(1).default(REPORT_SCHEMA_VERSION),
      _generated: generatedFileSchema,
    }),
    summary: z.record(z.string(), z.any()),
    data: z.any(),
    issues: z.array(z.any()),
    name: z.string().min(1),
    status: reportStatusSchema,
    generatedAt: z.string().min(1),
    sourceCommand: z.string().min(1),
    _generated: generatedFileSchema.optional(),
  })
  .strict();

function isRecord(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function sanitizeString(value) {
  if (value.length <= MAX_REPORT_STRING_LENGTH) {
    return value;
  }

  return `${value.slice(0, MAX_REPORT_STRING_LENGTH - 14)}...[truncated]`;
}

function sanitizeArray(value, depth) {
  return value.slice(0, MAX_REPORT_ARRAY_ITEMS).map(item => sanitizeReportValue(item, depth + 1));
}

function isEmptyStructure(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return isRecord(value) && Object.keys(value).length === 0;
}

function sanitizeObject(value, depth) {
  const output = {};

  for (const [key, entry] of Object.entries(value).slice(0, MAX_REPORT_OBJECT_KEYS)) {
    const sanitizedEntry = sanitizeReportValue(entry, depth + 1);

    if (key === 'errors' && (isEmptyStructure(sanitizedEntry) || Object.hasOwn(value, 'issues'))) {
      continue;
    }

    if (isRecord(sanitizedEntry) && Object.keys(sanitizedEntry).length === 0) {
      continue;
    }

    output[key] = sanitizedEntry;
  }

  return output;
}

export function sanitizeReportValue(value, depth = 0) {
  if (depth >= MAX_REPORT_DEPTH) {
    return '[truncated: max depth reached]';
  }

  if (Array.isArray(value)) {
    return sanitizeArray(value, depth);
  }

  if (typeof value === 'string') {
    return sanitizeString(value);
  }

  if (isRecord(value)) {
    return sanitizeObject(value, depth);
  }

  return value ?? null;
}

function coerceMeta(candidate) {
  const meta = isRecord(candidate?.meta) ? candidate.meta : {};
  const source = typeof meta.source === 'string' ? meta.source : candidate?.sourceCommand;
  const generatedMetadata = isRecord(meta._generated)
    ? meta._generated
    : isRecord(candidate?._generated)
      ? candidate._generated
      : createGeneratedJsonMetadata({
          payload: candidate,
          source,
          type: 'report',
        });
  const generatedAt = generatedMetadata.hash;

  return {
    name: typeof meta.name === 'string' ? meta.name : candidate?.name,
    source,
    generatedAt,
    status: typeof meta.status === 'string' ? meta.status : candidate?.status,
    version:
      typeof meta.version === 'string' && meta.version.trim().length > 0
        ? meta.version
        : REPORT_SCHEMA_VERSION,
    _generated: generatedMetadata,
  };
}

function toCanonicalReport(candidate) {
  const meta = coerceMeta(candidate);
  const issues = Array.isArray(candidate?.issues) ? sanitizeArray(candidate.issues, 0) : [];

  return {
    meta,
    summary: isRecord(candidate?.summary) ? sanitizeObject(candidate.summary, 0) : {},
    data: sanitizeReportValue(candidate?.data),
    issues,
    name: meta.name,
    status: meta.status,
    generatedAt: meta.generatedAt,
    sourceCommand: meta.source,
    _generated: isRecord(candidate?._generated) ? candidate._generated : meta._generated,
  };
}

function formatIssues(issues) {
  return issues
    .slice(0, 5)
    .map(issue => {
      const path = issue.path?.length ? issue.path.join('.') : 'report';
      return `${path}: ${issue.message}`;
    })
    .join(' | ');
}

function normalizeReportLabel(label) {
  return String(label ?? '')
    .replace(/^reports\//, '')
    .replace(/^\.\//, '');
}

export function evaluateReportSize(label, size) {
  const normalizedLabel = normalizeReportLabel(label);
  const failAt = REPORT_SIZE_LIMITS[normalizedLabel] ?? MAX_REPORT_SIZE;
  const warnAt = Math.floor(failAt * REPORT_SIZE_WARNING_RATIO);

  return {
    label: normalizedLabel,
    size,
    warnAt,
    failAt,
    status: size > failAt ? 'FAIL' : size >= warnAt ? 'WARN' : 'PASS',
  };
}

export function getReportSize(report) {
  return Buffer.byteLength(JSON.stringify(report), 'utf8');
}

export function validateReportEnvelope(report, label = 'report') {
  const candidate = toCanonicalReport(report);
  const parsed = ReportSchema.safeParse(candidate);

  if (!parsed.success) {
    throw new Error(`Invalid report schema for ${label}: ${formatIssues(parsed.error.issues)}`);
  }

  const size = getReportSize(parsed.data);
  const sizeCheck = evaluateReportSize(label, size);
  if (sizeCheck.status === 'FAIL') {
    throw new Error(`Report too large for ${label}: ${size} bytes exceeds ${sizeCheck.failAt}`);
  }

  return parsed.data;
}

export function buildValidatedReport({
  name,
  sourceCommand,
  generatedAt,
  status,
  summary,
  data,
  issues,
}) {
  const baseReport = {
    meta: {
      name,
      source: sourceCommand,
      generatedAt: typeof generatedAt === 'string' ? generatedAt : 'pending-hash',
      status,
      version: REPORT_SCHEMA_VERSION,
    },
    summary,
    data: data ?? null,
    issues: Array.isArray(issues) ? issues : [],
    name,
    status,
    generatedAt: typeof generatedAt === 'string' ? generatedAt : 'pending-hash',
    sourceCommand,
  };

  const canonicalReport = toCanonicalReport(baseReport);
  const generatedMetadata = createGeneratedJsonMetadata({
    payload: canonicalReport,
    source: sourceCommand,
    type: 'report',
  });

  return validateReportEnvelope(
    {
      ...canonicalReport,
      generatedAt: generatedMetadata.hash,
      _generated: generatedMetadata,
      meta: {
        ...canonicalReport.meta,
        generatedAt: generatedMetadata.hash,
        _generated: generatedMetadata,
      },
    },
    name
  );
}

export function validateReportFile(filePath, label = filePath) {
  const payload = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return validateReportEnvelope(payload, normalizeReportLabel(label));
}
