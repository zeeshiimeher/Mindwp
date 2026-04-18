import fs from 'node:fs/promises';
import path from 'node:path';

import { BLOG_POSTS } from '@/domains/blog/registry';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/generatedRegistry';
import { SERVICE_ENTRY_BY_SLUG_WITH_ALIASES } from '@/domains/services/config';

type ProofCoverageEntry = {
  page: string;
  hasProof: boolean;
  reason: string;
};

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
  const hasMetric = /\b\d+(?:\.\d+)?\s?(?:%|x|hours?|days?|minutes?|seconds?|weeks?|months?|calls?|leads?|bookings?|jobs?)\b/i.test(
    text
  );
  const hasProofLanguage = /(result|results|reduced|increased|improved|dropped|grew|lifted|cut|faster|slower)/i.test(
    text
  );

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

const datasets: Array<{ page: string; data: unknown }> = [
  ...Object.values(SERVICE_ENTRY_BY_SLUG_WITH_ALIASES).map(entry => ({
    page: entry.data.seo.canonical,
    data: entry.data,
  })),
  ...Object.values(BLOG_POSTS).map(post => ({ page: `/blog/${post.slug}`, data: post })),
  ...Object.values(RESOURCE_REGISTRY).map(resource => ({ page: resource.seo.canonical, data: resource })),
  ...Object.values(CASE_STUDY_REGISTRY).map(caseStudy => ({ page: caseStudy.seo.canonical, data: caseStudy })),
  ...Object.entries(INDUSTRY_REGISTRY).map(([, industry]) => ({ page: industry.seo.canonical, data: industry })),
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

const reportPath = path.join(process.cwd(), 'reports', 'proof-coverage.json');
await fs.writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');

console.log(`Generated proof coverage report: ${reportPath}`);