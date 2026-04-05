/**
 * Link Health Analyzer (Graph-Based)
 *
 * Assesses link health per page based on SmartRelatedSection output.
 * Replaces the deprecated internal-linking-engine-based analyzer.
 */

import { getContentGraph } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import { getRelatedContent } from '@/lib/graph/query';

export interface LinkHealthResult {
  slug: string;
  type: ContentNodeType;
  path: string;
  status: 'healthy' | 'weak' | 'critical';
  totalLinks: number;
  avgScore: number;
  issues: string[];
  suggestions: string[];
  impact: 'high' | 'medium' | 'low';
  links: Array<{ targetSlug: string }>;
}

export interface LinkSuggestion {
  targetSlug: string;
  targetPath: string;
  reason: string;
  score: number;
  expectedImprovement: number;
  autoFixCandidate: boolean;
}

export interface HealthSummary {
  total: number;
  healthy: number;
  weak: number;
  critical: number;
  avgScore: number;
}

export function analyzePageHealth(
  slug: string,
  type: ContentNodeType,
): LinkHealthResult {
  const related = getRelatedContent(slug, type);
  const labels = RELATED_SECTION_LABELS[type] ?? {};
  const expectedSlots = Object.keys(labels).length;

  const allItems = [
    ...related.services,
    ...related.resources,
    ...related.blog,
    ...related.caseStudies,
    ...related.industries,
  ];
  const totalLinks = allItems.length;

  const filledSlots = [
    related.services.length > 0,
    related.resources.length > 0,
    related.blog.length > 0,
    related.caseStudies.length > 0,
    related.industries.length > 0,
  ].filter(Boolean).length;

  const issues: string[] = [];
  const suggestions: string[] = [];

  if (totalLinks === 0) {
    issues.push('No related content found via graph');
    suggestions.push('Add graph metadata (systems, topics, industries) to this page');
  } else if (filledSlots < expectedSlots) {
    issues.push(`Only ${filledSlots}/${expectedSlots} expected content slots filled`);
    suggestions.push('Add more matching content to fill empty slots');
  }

  if (related.services.length === 0 && type !== 'service') {
    suggestions.push('No service link found — check graph edges');
  }

  const avgScore = totalLinks > 0 ? Math.min(totalLinks * 15, 100) : 0;
  const status: LinkHealthResult['status'] =
    totalLinks >= 3 ? 'healthy' : totalLinks >= 1 ? 'weak' : 'critical';
  const impact: LinkHealthResult['impact'] =
    status === 'critical' ? 'high' : status === 'weak' ? 'medium' : 'low';

  const pathMap: Partial<Record<ContentNodeType, string>> = {
    blog: `/blog/${slug}`,
    resource: `/resources/${slug}`,
    'case-study': `/case-studies/${slug}`,
    service: `/services/${slug}`,
    feature: `/features/${slug}`,
    'industry-detail': `/industries/${slug}`,
    'industry-category': `/industries/${slug}`,
  };

  return {
    slug,
    type,
    path: pathMap[type] ?? `/${slug}`,
    status,
    totalLinks,
    avgScore,
    issues,
    suggestions,
    impact,
    links: allItems.map(item => ({ targetSlug: item.slug })),
  };
}

export function analyzeAllPages(): LinkHealthResult[] {
  const graph = getContentGraph();
  return Object.values(graph).map(node =>
    analyzePageHealth(node.slug, node.type),
  );
}

export function getHealthSummary(): HealthSummary {
  const results = analyzeAllPages();
  const total = results.length;
  const healthy = results.filter(r => r.status === 'healthy').length;
  const weak = results.filter(r => r.status === 'weak').length;
  const critical = results.filter(r => r.status === 'critical').length;
  const avgScore = total > 0 ? results.reduce((sum, r) => sum + r.avgScore, 0) / total : 0;

  return { total, healthy, weak, critical, avgScore };
}
