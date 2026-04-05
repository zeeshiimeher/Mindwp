/**
 * Fix Simulation Engine (Graph-Based)
 *
 * Simulates the impact of adding missing conversion elements.
 * Simplified from the deprecated internal-linking-engine version.
 */

import type { ContentNodeType } from '@/lib/content-graph/types';
import { CTA_CONFIG } from '@/config/ui-intelligence';
import { getRelatedContent } from '@/lib/graph/query';

export interface SimulatedFix {
  fixType: string;
  label: string;
  currentScore: number;
  simulatedScore: number;
  improvement: number;
}

export interface SimulationResult {
  slug: string;
  type: ContentNodeType;
  path: string;
  currentTotal: number;
  maxPossibleScore: number;
  fixes: SimulatedFix[];
}

export function simulateFixesForPage(
  slug: string,
  type: ContentNodeType,
): SimulationResult {
  const related = getRelatedContent(slug, type);
  const hasCTA = type in CTA_CONFIG;
  const hasServiceLink = related.services.length > 0;
  const totalRelated =
    related.services.length +
    related.resources.length +
    related.blog.length +
    related.caseStudies.length +
    related.industries.length;

  const ctaScore = hasCTA ? 30 : 0;
  const serviceLinkScore = hasServiceLink ? 30 : 0;
  const relatedScore = totalRelated > 0 ? 20 : 0;
  const authorityScore = Math.min(totalRelated * 4, 20);
  const currentTotal = ctaScore + serviceLinkScore + relatedScore + authorityScore;

  const fixes: SimulatedFix[] = [];

  if (!hasCTA) {
    fixes.push({
      fixType: 'add-cta',
      label: 'Add CTA section',
      currentScore: ctaScore,
      simulatedScore: 30,
      improvement: 30,
    });
  }

  if (!hasServiceLink) {
    fixes.push({
      fixType: 'add-service-link',
      label: 'Add service link via graph metadata',
      currentScore: serviceLinkScore,
      simulatedScore: 30,
      improvement: 30,
    });
  }

  if (totalRelated === 0) {
    fixes.push({
      fixType: 'add-related-content',
      label: 'Add related content via SmartRelatedSection metadata',
      currentScore: 0,
      simulatedScore: 40,
      improvement: 40,
    });
  }

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
    currentTotal,
    maxPossibleScore: 100,
    fixes,
  };
}
