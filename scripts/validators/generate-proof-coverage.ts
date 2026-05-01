import fs from 'node:fs/promises';
import path from 'node:path';

import { BLOG_POSTS } from '../../src/domains/blog/registry.ts';
import { CASE_STUDY_REGISTRY } from '../../src/domains/case-studies/registry.ts';
import { FEATURE_REGISTRY } from '../../src/domains/features/registry.ts';
import { INDUSTRY_REGISTRY } from '../../src/domains/industries/registry.ts';
import { RESOURCE_REGISTRY } from '../../src/domains/resources/generatedRegistry.ts';
import { SERVICE_ENTRY_BY_SLUG_WITH_ALIASES } from '../../src/domains/services/config.tsx';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { createReportSchema } from '../../lib/reports/reportSchema';

type ProofCoverageEntry = {
  page: string;
  hasProof: boolean;
  reason: string;
};

type ProofCoverageServiceSource = {
  data: {
    seo: {
      canonical: string;
    };
  };
};

const root = process.cwd();
const reportPath = path.join(root, 'reports', 'proof-coverage.json');
const sourceCommand = 'npx tsx scripts/validators/generate-proof-coverage.ts';
const logger = createLogger({
  label: 'generate-proof-coverage',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});

function collectText(value: unknown, parts: string[] = []): string[] {
  if (typeof value === 'string') {
    parts.push(value);
    return parts;
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectText(item, parts);
    }
    return parts;
  }

  if (value && typeof value === 'object') {
    for (const nestedValue of Object.values(value)) {
      collectText(nestedValue, parts);
    }
  }

  return parts;
}

function detectProofSignals(text: string) {
  const normalized = text.toLowerCase();
  const hasBeforeAfter =
    (/\bbefore\b/.test(normalized) && /\bafter\b/.test(normalized)) ||
    /\bfrom\b.+\bto\b/.test(normalized);
  const hasMetric =
    /\b\d+(?:\.\d+)?\s?(?:%|x|hours?|days?|minutes?|seconds?|weeks?|months?|calls?|leads?|bookings?|jobs?)\b/i.test(
      text
    );
  const hasProofLanguage =
    /(result|results|reduced|increased|improved|dropped|grew|lifted|cut|faster|slower)/i.test(text);

  if (hasBeforeAfter && hasMetric) {
    return { hasProof: true, reason: 'before/after and measurable metric detected' };
  }

  if (hasBeforeAfter) {
    return { hasProof: true, reason: 'before/after proof detected' };
  }

  if (hasMetric && hasProofLanguage) {
    return { hasProof: true, reason: 'metric-based proof language detected' };
  }

  if (hasMetric) {
    return { hasProof: false, reason: 'numbers detected without clear proof framing' };
  }

  return { hasProof: false, reason: 'no proof signals detected' };
}

const serviceEntries = Object.values(
  SERVICE_ENTRY_BY_SLUG_WITH_ALIASES as Record<string, ProofCoverageServiceSource>
);

const datasets: Array<{ page: string; data: unknown }> = [
  ...serviceEntries.map(entry => ({
    page: entry.data.seo.canonical,
    data: entry.data,
  })),
  ...Object.values(BLOG_POSTS).map(post => ({ page: `/blog/${post.slug}`, data: post })),
  ...Object.values(RESOURCE_REGISTRY).map(resource => ({
    page: resource.seo.canonical,
    data: resource,
  })),
  ...Object.values(CASE_STUDY_REGISTRY).map(caseStudy => ({
    page: caseStudy.seo.canonical,
    data: caseStudy,
  })),
  ...Object.entries(INDUSTRY_REGISTRY).map(([, industry]) => ({
    page: industry.seo.canonical,
    data: industry,
  })),
  ...FEATURE_REGISTRY.map(feature => ({ page: feature.path, data: feature })),
];

const report: ProofCoverageEntry[] = datasets.map(entry => {
  const text = collectText(entry.data).join(' ');
  const proof = detectProofSignals(text);

  return {
    page: entry.page,
    hasProof: proof.hasProof,
    reason: proof.reason,
  };
});

const missingProof = report.filter(entry => !entry.hasProof);
const normalizedReport = createReportSchema({
  name: 'proof-coverage',
  status: missingProof.length > 0 ? 'WARN' : 'PASS',
  summary: {
    total: report.length,
    passed: report.length - missingProof.length,
    failed: 0,
    warnings: missingProof.length,
  },
  issues: missingProof,
  data: {
    coverage: report,
  },
  sourceCommand,
});

await fs.mkdir(path.dirname(reportPath), { recursive: true });
await fs.writeFile(reportPath, `${JSON.stringify(normalizedReport, null, 2)}\n`, 'utf8');

logger.printTotals(normalizedReport.summary);
logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
