/**
 * System Monitor — Live data computation for the Authority Dashboard.
 *
 * Computes graph health, CTA health, content health, and validator status
 * from live registries and the precomputed authority map.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

import { BLOG_POSTS } from '@/domains/blog/registry';
import { CASE_STUDY_REGISTRY } from '@/domains/case-studies/registry';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { INDUSTRY_REGISTRY } from '@/domains/industries/registry';
import { RESOURCE_REGISTRY } from '@/domains/resources/generatedRegistry';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { getRelatedContent } from '@/lib/graph/query';
import { getCTAConfig } from '@/lib/ui/ctaEngine';

// ─── Graph Health ────────────────────────────────────────────────────────────

export interface GraphHealthData {
  totalNodes: number;
  emptyNodes: number;
  weakNodes: number;
  avgRelated: number;
  byType: { type: string; total: number; empty: number; weak: number }[];
}

interface NodeRelated {
  slug: string;
  type: ContentNodeType;
  count: number;
}

function collectNodeRelatedCounts(): NodeRelated[] {
  const nodes: NodeRelated[] = [];

  for (const [slug] of Object.entries(BLOG_POSTS)) {
    const r = getRelatedContent(slug, 'blog');
    nodes.push({ slug, type: 'blog', count: Object.values(r).flat().length });
  }
  for (const [slug] of Object.entries(RESOURCE_REGISTRY)) {
    const r = getRelatedContent(slug, 'resource');
    nodes.push({ slug, type: 'resource', count: Object.values(r).flat().length });
  }
  for (const [slug] of Object.entries(CASE_STUDY_REGISTRY)) {
    const r = getRelatedContent(slug, 'case-study');
    nodes.push({ slug, type: 'case-study', count: Object.values(r).flat().length });
  }
  for (const [slug] of Object.entries(SERVICE_REGISTRY)) {
    const r = getRelatedContent(slug, 'service');
    nodes.push({ slug, type: 'service', count: Object.values(r).flat().length });
  }
  for (const feat of FEATURE_REGISTRY) {
    const r = getRelatedContent(feat.slug, 'feature');
    nodes.push({ slug: feat.slug, type: 'feature', count: Object.values(r).flat().length });
  }
  for (const [, ind] of Object.entries(INDUSTRY_REGISTRY)) {
    const type: ContentNodeType = ind.type === 'detail' ? 'industry-detail' : 'industry-category';
    const r = getRelatedContent(ind.slug, type);
    nodes.push({ slug: ind.slug, type, count: Object.values(r).flat().length });
  }

  return nodes;
}

export function getGraphHealth(): GraphHealthData {
  const nodes = collectNodeRelatedCounts();
  const total = nodes.length;
  const empty = nodes.filter(n => n.count === 0).length;
  const weak = nodes.filter(n => n.count > 0 && n.count < 2).length;
  const avg = total > 0 ? nodes.reduce((s, n) => s + n.count, 0) / total : 0;

  const typeMap = new Map<string, { total: number; empty: number; weak: number }>();
  for (const n of nodes) {
    const entry = typeMap.get(n.type) ?? { total: 0, empty: 0, weak: 0 };
    entry.total++;
    if (n.count === 0) entry.empty++;
    else if (n.count < 2) entry.weak++;
    typeMap.set(n.type, entry);
  }

  return {
    totalNodes: total,
    emptyNodes: empty,
    weakNodes: weak,
    avgRelated: Math.round(avg * 10) / 10,
    byType: Array.from(typeMap.entries()).map(([type, data]) => ({ type, ...data })),
  };
}

// ─── CTA Health ──────────────────────────────────────────────────────────────

export interface CTAHealthData {
  totalPages: number;
  withIntent: number;
  withoutIntent: number;
  intentDistribution: { intent: string; count: number }[];
  routingBreakdown: { targetType: string; count: number }[];
}

export function getCTAHealth(): CTAHealthData {
  const intents = new Map<string, number>();
  const routing = new Map<string, number>();
  let withIntent = 0;
  let withoutIntent = 0;
  let totalPages = 0;

  // Blogs
  for (const post of Object.values(BLOG_POSTS)) {
    totalPages++;
    const intent = post.intent;
    if (intent) {
      withIntent++;
      intents.set(intent, (intents.get(intent) ?? 0) + 1);
      const cta = getCTAConfig('blog', intent);
      routing.set(cta.targetType, (routing.get(cta.targetType) ?? 0) + 1);
    } else {
      withoutIntent++;
      const cta = getCTAConfig('blog');
      routing.set(cta.targetType, (routing.get(cta.targetType) ?? 0) + 1);
    }
  }

  // Resources
  for (const resource of Object.values(RESOURCE_REGISTRY)) {
    totalPages++;
    const intent = resource.intent;
    if (intent) {
      withIntent++;
      intents.set(intent, (intents.get(intent) ?? 0) + 1);
      const cta = getCTAConfig('resource', intent);
      routing.set(cta.targetType, (routing.get(cta.targetType) ?? 0) + 1);
    } else {
      withoutIntent++;
      const cta = getCTAConfig('resource');
      routing.set(cta.targetType, (routing.get(cta.targetType) ?? 0) + 1);
    }
  }

  return {
    totalPages,
    withIntent,
    withoutIntent,
    intentDistribution: Array.from(intents.entries())
      .map(([intent, count]) => ({ intent, count }))
      .sort((a, b) => b.count - a.count),
    routingBreakdown: Array.from(routing.entries())
      .map(([targetType, count]) => ({ targetType, count }))
      .sort((a, b) => b.count - a.count),
  };
}

// ─── Content Health ──────────────────────────────────────────────────────────

export interface ContentHealthData {
  totalContent: number;
  missingSystems: { slug: string; type: string }[];
  missingTopics: { slug: string; type: string }[];
  missingIndustries: { slug: string; type: string }[];
}

export function getContentHealth(): ContentHealthData {
  const missingSystems: { slug: string; type: string }[] = [];
  const missingTopics: { slug: string; type: string }[] = [];
  const missingIndustries: { slug: string; type: string }[] = [];
  let totalContent = 0;

  const check = (
    slug: string,
    type: string,
    systems?: string[],
    topics?: string[],
    industries?: string[]
  ) => {
    totalContent++;
    if (!systems || systems.length === 0) missingSystems.push({ slug, type });
    if (!topics || topics.length === 0) missingTopics.push({ slug, type });
    if (!industries || industries.length === 0) missingIndustries.push({ slug, type });
  };

  for (const [slug, post] of Object.entries(BLOG_POSTS)) {
    check(slug, 'blog', post.systems, post.topics, post.industries);
  }
  for (const [slug, r] of Object.entries(RESOURCE_REGISTRY)) {
    check(slug, 'resource', r.systems, r.topics, r.industries);
  }
  for (const [slug, cs] of Object.entries(CASE_STUDY_REGISTRY)) {
    check(
      slug,
      'case-study',
      cs.systems,
      (cs as unknown as { topics?: string[] }).topics,
      cs.industries
    );
  }
  for (const [, ind] of Object.entries(INDUSTRY_REGISTRY)) {
    check(
      ind.slug,
      ind.type === 'detail' ? 'industry-detail' : 'industry-category',
      ind.systems,
      ind.topics,
      ind.industries
    );
  }

  return { totalContent, missingSystems, missingTopics, missingIndustries };
}

// ─── Validator Status ────────────────────────────────────────────────────────

export interface ValidatorResult {
  name: string;
  status: 'pass' | 'fail';
  duration: number;
  blocking: boolean;
}

export interface ValidatorStatusData {
  generatedAt: string;
  passed: number;
  failed: number;
  blockingFailed: number;
  total: number;
  validators: ValidatorResult[];
}

export function getValidatorStatus(): ValidatorStatusData | null {
  try {
    const raw = readFileSync(join(process.cwd(), 'reports/validation-results.json'), 'utf-8');
    const data = JSON.parse(raw);
    return {
      generatedAt: data.generatedAt,
      passed: data.total.passed,
      failed: data.total.failed,
      blockingFailed: data.total.blockingFailed,
      total: data.total.total,
      validators: data.validators,
    };
  } catch {
    return null;
  }
}
