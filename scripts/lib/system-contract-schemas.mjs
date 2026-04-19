import { z } from 'zod';

const unifiedStepStatusSchema = z.enum(['PASS', 'FAIL', 'SKIPPED']);
const unifiedHealthStatusSchema = z.enum(['OK', 'ISSUES']);
const priorityLevelSchema = z.enum(['HIGH', 'MEDIUM', 'LOW']);
const priorityTypeSchema = z.enum(['conversion', 'cta', 'contract', 'content', 'lint']);
const pageStatusSchema = z.enum(['OK', 'WARNING', 'FAIL']);

const unifiedStepReportSchema = z
  .object({
    status: unifiedStepStatusSchema,
    command: z.string().nullable(),
    durationMs: z.number(),
    errors: z.array(z.string()),
  })
  .strict();

const validationDetailReportSchema = z
  .object({
    name: z.string(),
    status: unifiedStepStatusSchema,
    blocking: z.boolean(),
    durationMs: z.number(),
    warnings: z.array(z.string()),
    errors: z.array(z.string()),
  })
  .strict();

const validationStepReportSchema = unifiedStepReportSchema
  .extend({
    total: z.number(),
    warnings: z.array(z.string()),
    warningCount: z.number(),
    validatorCount: z.number(),
    passed: z.number(),
    failed: z.number(),
    blockingFailed: z.number(),
    advisoryFailed: z.number(),
    validators: z.array(validationDetailReportSchema),
  })
  .strict();

const typecheckStepReportSchema = unifiedStepReportSchema
  .extend({
    errorCount: z.number(),
  })
  .strict();

const testFileReportSchema = z
  .object({
    file: z.string(),
    status: unifiedStepStatusSchema,
    tests: z.number(),
    durationMs: z.number(),
    passed: z.number(),
    failed: z.number(),
    skipped: z.number(),
    failedTests: z.array(z.string()),
  })
  .strict();

const slowTestReportSchema = z
  .object({
    name: z.string(),
    file: z.string(),
    durationMs: z.number(),
    status: unifiedStepStatusSchema,
  })
  .strict();

const testStepReportSchema = unifiedStepReportSchema
  .extend({
    total: z.number(),
    passed: z.number(),
    failed: z.number(),
    skipped: z.number(),
    files: z.array(testFileReportSchema),
    slowTests: z.array(slowTestReportSchema),
    failedFiles: z.array(z.string()),
  })
  .strict();

const e2eStepReportSchema = unifiedStepReportSchema
  .extend({
    skipped: z.boolean(),
    total: z.number(),
    passed: z.number(),
    failed: z.number(),
    skippedCount: z.number(),
    failedFiles: z.array(z.string()),
  })
  .strict();

const unifiedReportFileSchema = z
  .object({
    name: z.string(),
    path: z.string(),
    generatedAt: z.string(),
    sourceCommand: z.string(),
    updatedAt: z.string(),
    ageMs: z.number(),
  })
  .strict();

const reportsStepReportSchema = unifiedStepReportSchema
  .extend({
    generatedAt: z.string(),
    fileCount: z.number(),
    freshestGeneratedAt: z.string().nullable(),
    stalestGeneratedAt: z.string().nullable(),
    files: z.array(unifiedReportFileSchema),
    missing: z.array(z.string()),
    stale: z.array(z.string()),
  })
  .strict();

const contractIntegrityReportSchema = z
  .object({
    features: unifiedHealthStatusSchema,
    services: unifiedHealthStatusSchema,
    featureIssues: z.array(z.string()),
    serviceIssues: z.array(z.string()),
    scanned: z.record(z.string(), z.number()),
  })
  .strict();

const graphHealthReportSchema = z
  .object({
    status: unifiedHealthStatusSchema,
    nodes: z.number(),
    orphanNodes: z.number(),
    invalidEdges: z.number(),
    issues: z.array(z.string()),
  })
  .strict();

const ctaHealthReportSchema = z
  .object({
    status: unifiedHealthStatusSchema,
    total: z.number(),
    duplicateIntents: z.number(),
    missingSource: z.number(),
    issues: z.array(z.string()),
  })
  .strict();

const unifiedSystemIntelligenceSchema = z
  .object({
    contracts: contractIntegrityReportSchema,
    graph: graphHealthReportSchema,
    cta: ctaHealthReportSchema,
  })
  .strict();

const priorityItemSchema = z
  .object({
    level: priorityLevelSchema,
    type: priorityTypeSchema,
    message: z.string(),
    route: z.string().nullable(),
    source: z.string(),
    action: z.string(),
  })
  .strict();

const pageIntelligenceStatusSchema = z
  .object({
    status: pageStatusSchema.or(z.literal('OK')).or(z.literal('WARNING')),
    issues: z.number(),
  })
  .strict();

const pageIntelligenceItemSchema = z
  .object({
    route: z.string(),
    type: z.string(),
    status: pageStatusSchema,
    conversionPriority: z.number(),
    cta: pageIntelligenceStatusSchema,
    content: z
      .object({
        status: pageStatusSchema.or(z.literal('OK')).or(z.literal('WARNING')),
      })
      .strict(),
    issues: z.array(z.string()),
  })
  .strict();

const statusChangeItemSchema = z
  .object({
    route: z.string(),
    previousStatus: pageStatusSchema,
    nextStatus: pageStatusSchema,
  })
  .strict();

const reportChangesSchema = z
  .object({
    newIssues: z.array(priorityItemSchema),
    resolvedIssues: z.array(priorityItemSchema),
    statusChanged: z.array(statusChangeItemSchema),
  })
  .strict();

export const systemReportSchema = z
  .object({
    status: z.enum(['PASS', 'FAIL']),
    timestamp: z.string(),
    sourceCommand: z.string(),
    durationMs: z.number(),
    validate: validationStepReportSchema,
    typecheck: typecheckStepReportSchema,
    types: typecheckStepReportSchema.optional(),
    tests: testStepReportSchema,
    e2e: e2eStepReportSchema,
    reports: reportsStepReportSchema,
    system: unifiedSystemIntelligenceSchema,
    priorities: z.array(priorityItemSchema),
    pages: z.array(pageIntelligenceItemSchema),
    changes: reportChangesSchema,
  })
  .strict();

const clientDashboardStatusSchema = z.enum(['healthy', 'needs attention', 'improving']);
const clientPageStatusSchema = z.enum(['Healthy', 'Needs Improvement', 'Improving']);

const clientDashboardSummarySchema = z
  .object({
    systemHealth: z.enum(['Healthy', 'Needs Attention', 'Improving']),
    issues: z.number(),
    criticalIssues: z.number(),
    pagesOptimized: z.number(),
    improvementsMade: z.number(),
  })
  .strict();

const clientPriorityActionSchema = z
  .object({
    impact: z.enum(['Leads', 'Visibility', 'Content', 'Performance']),
    message: z.string(),
    routes: z.array(z.string()),
    count: z.number(),
  })
  .strict();

const clientPageInsightSchema = z
  .object({
    route: z.string(),
    status: clientPageStatusSchema,
    insight: z.string(),
  })
  .strict();

const clientImpactGroupSchema = z
  .object({
    impact: z.enum(['Leads', 'Visibility', 'Content', 'Performance']),
    issues: z.number(),
  })
  .strict();

const clientDashboardChangesSchema = z
  .object({
    newIssues: z.array(z.string()),
    resolvedIssues: z.array(z.string()),
    pagesImproved: z.number(),
  })
  .strict();

export const clientDashboardSchema = z
  .object({
    generatedAt: z.string(),
    sourceCommand: z.string(),
    status: clientDashboardStatusSchema,
    summary: clientDashboardSummarySchema,
    priorities: z.array(clientPriorityActionSchema),
    pages: z.array(clientPageInsightSchema),
    impacts: z.array(clientImpactGroupSchema),
    changes: clientDashboardChangesSchema,
  })
  .strict();

const forbiddenClientPatterns = [
  /\bvalidator(s)?\b/i,
  /\bcontract(s)?\b/i,
  /\blint\b/i,
  /\btypecheck\b/i,
  /\bplaywright\b/i,
  /\bvitest\b/i,
  /validation-results\.json/i,
  /system-report\.json/i,
  /scripts\//i,
  /\/Users\//i,
];

function collectClientSafetyViolations(value, path = 'root', violations = []) {
  if (typeof value === 'string') {
    for (const pattern of forbiddenClientPatterns) {
      if (pattern.test(value)) {
        violations.push(`${path}: ${value}`);
        break;
      }
    }
    return violations;
  }

  if (Array.isArray(value)) {
    value.forEach((entry, index) => collectClientSafetyViolations(entry, `${path}[${index}]`, violations));
    return violations;
  }

  if (value && typeof value === 'object') {
    for (const [key, entry] of Object.entries(value)) {
      collectClientSafetyViolations(entry, `${path}.${key}`, violations);
    }
  }

  return violations;
}

export function parseSystemReportContract(value) {
  return systemReportSchema.parse(value);
}

export function parseClientDashboardContract(value) {
  const parsed = clientDashboardSchema.parse(value);
  const violations = collectClientSafetyViolations(parsed);

  if (violations.length > 0) {
    throw new Error(
      `client-dashboard.json contains client-unsafe content: ${violations.slice(0, 5).join(' | ')}`
    );
  }

  return parsed;
}