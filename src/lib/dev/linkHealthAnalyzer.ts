/**
 * Link Health Analyzer
 *
 * Analyzes internal link quality per page and generates
 * actionable fix suggestions. Uses generateInternalLinks
 * from the engine to inspect actual link output.
 */

import { getContentGraph, getNodeBySlug } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { generateInternalLinks } from '@/lib/internal-linking/engine';
import { isJourneyNextStep } from '@/lib/internal-linking/journey';
import type { InternalLink } from '@/lib/internal-linking/types';

// --- Types ---

export type LinkHealthStatus = 'healthy' | 'weak' | 'critical';

export interface LinkHealthResult {
  slug: string;
  type: ContentNodeType;
  path: string;
  totalLinks: number;
  avgScore: number;
  highQualityLinks: number;
  weakLinks: number;
  hasIndustryMatch: boolean;
  hasServiceLink: boolean;
  hasJourneyLink: boolean;
  status: LinkHealthStatus;
  issues: string[];
  suggestions: string[];
  impact: 'high' | 'medium' | 'low';
  links: InternalLink[];
}

// --- Thresholds ---

const HEALTHY_MIN_LINKS = 2;
const HEALTHY_AVG_SCORE = 180;
const HIGH_QUALITY_THRESHOLD = 250;
const WEAK_LINK_THRESHOLD = 150;

// --- Analyze a single page ---

export function analyzePageHealth(slug: string, type: ContentNodeType): LinkHealthResult {
  const node = getNodeBySlug(slug);
  const path = node?.path ?? `/${slug}`;
  const links = generateInternalLinks(slug, type);

  const totalLinks = links.length;
  const avgScore =
    totalLinks > 0 ? Math.round(links.reduce((s, l) => s + l.score, 0) / totalLinks) : 0;
  const highQualityLinks = links.filter(l => l.score >= HIGH_QUALITY_THRESHOLD).length;
  const weakLinks = links.filter(l => l.score < WEAK_LINK_THRESHOLD).length;

  // Check if any link target shares an industry with source
  const sourceNode = getNodeBySlug(slug);
  const sourceIndustries = sourceNode?.industries ?? [];
  const hasIndustryMatch =
    sourceIndustries.length === 0 ||
    links.some(l => {
      const targetNode = getNodeBySlug(l.targetSlug);
      return targetNode?.industries?.some(i => sourceIndustries.includes(i)) ?? false;
    });

  // Check for service links and journey progression links
  const hasServiceLink = links.some(l => l.targetType === 'service');
  const hasJourneyLink = links.some(l => {
    const targetNode = getNodeBySlug(l.targetSlug);
    return targetNode ? isJourneyNextStep(type, targetNode.type) : false;
  });

  // Determine issues
  const issues: string[] = [];
  if (totalLinks < HEALTHY_MIN_LINKS) issues.push('Too few internal links');
  if (avgScore < HEALTHY_AVG_SCORE && totalLinks > 0) issues.push('Low average link score');
  if (highQualityLinks === 0 && totalLinks > 0) issues.push('No high-authority links');
  if (weakLinks > 2) issues.push('Too many weak links');
  if (!hasIndustryMatch && sourceIndustries.length > 0) issues.push('No industry-matched links');
  if (!hasServiceLink && type !== 'service')
    issues.push('No service link — missing conversion path');
  if (!hasJourneyLink && type !== 'service') issues.push('No journey progression link');

  // Determine status
  let status: LinkHealthStatus = 'healthy';
  if (issues.length >= 3 || totalLinks === 0) {
    status = 'critical';
  } else if (issues.length >= 1) {
    status = 'weak';
  }

  // Determine impact rating based on conversion priority
  const impactTypes: ContentNodeType[] = ['service', 'industry-detail', 'feature', 'case-study'];
  const impact: 'high' | 'medium' | 'low' =
    status !== 'healthy' && impactTypes.includes(type)
      ? 'high'
      : status !== 'healthy'
        ? 'medium'
        : 'low';

  // Generate suggestions
  const suggestions = generateSuggestions({
    totalLinks,
    avgScore,
    highQualityLinks,
    weakLinks,
    hasIndustryMatch,
    sourceIndustries,
    hasServiceLink,
    hasJourneyLink,
    pageType: type,
  });

  return {
    slug,
    type,
    path,
    totalLinks,
    avgScore,
    highQualityLinks,
    weakLinks,
    hasIndustryMatch,
    hasServiceLink,
    hasJourneyLink,
    status,
    issues,
    suggestions,
    impact,
    links,
  };
}

// --- Generate fix suggestions ---

function generateSuggestions(ctx: {
  totalLinks: number;
  avgScore: number;
  highQualityLinks: number;
  weakLinks: number;
  hasIndustryMatch: boolean;
  sourceIndustries: string[];
  hasServiceLink: boolean;
  hasJourneyLink: boolean;
  pageType: ContentNodeType;
}): string[] {
  const suggestions: string[] = [];

  if (ctx.totalLinks < HEALTHY_MIN_LINKS) {
    suggestions.push('Add 2\u20133 internal links to improve coverage');
  }

  if (ctx.avgScore < HEALTHY_AVG_SCORE && ctx.totalLinks > 0) {
    suggestions.push('Link to more relevant pages within the same topic or industry');
  }

  if (ctx.highQualityLinks === 0 && ctx.totalLinks > 0) {
    suggestions.push('Add at least 1 high-authority link (service or case study)');
  }

  if (ctx.weakLinks > 2) {
    suggestions.push('Replace weak links with stronger contextual matches');
  }

  if (!ctx.hasIndustryMatch && ctx.sourceIndustries.length > 0) {
    suggestions.push('Add industry-specific links to improve relevance');
  }

  if (!ctx.hasServiceLink && ctx.pageType !== 'service') {
    suggestions.push('Add a service link to create a conversion path');
  }

  if (!ctx.hasJourneyLink && ctx.pageType !== 'service') {
    suggestions.push('Add a journey progression link to guide users forward');
  }

  return suggestions;
}

// --- Analyze all pages ---

export function analyzeAllPages(): LinkHealthResult[] {
  const graph = getContentGraph();
  const results: LinkHealthResult[] = [];

  for (const node of Object.values(graph)) {
    results.push(analyzePageHealth(node.slug, node.type));
  }

  return results.sort((a, b) => a.avgScore - b.avgScore);
}

// --- Summary ---

export function getHealthSummary(): {
  total: number;
  healthy: number;
  weak: number;
  critical: number;
  avgScore: number;
} {
  const results = analyzeAllPages();
  const healthy = results.filter(r => r.status === 'healthy').length;
  const weak = results.filter(r => r.status === 'weak').length;
  const critical = results.filter(r => r.status === 'critical').length;
  const avgScore =
    results.length > 0
      ? Math.round(results.reduce((s, r) => s + r.avgScore, 0) / results.length)
      : 0;

  return { total: results.length, healthy, weak, critical, avgScore };
}
