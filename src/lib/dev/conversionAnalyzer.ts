/**
 * Conversion Analyzer (Graph-Based)
 *
 * Scores pages on conversion strength using graph data.
 * Replaces the deprecated internal-linking-engine-based analyzer.
 *
 * Scoring: presence of CTA, service links, and related content.
 */

import { CTA_CONFIG } from '@/config/ui-intelligence';
import { buildGlobalContactHref } from '@/lib/contact/contactHref';
import { getContentGraph } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { getRelatedContent } from '@/lib/graph/query';

export interface ConversionScore {
  slug: string;
  type: ContentNodeType;
  path: string;
  totalScore: number;
  ctaScore: number;
  serviceLinkScore: number;
  relatedScore: number;
  authorityScore: number;
  conversionPriority: number;
  status: 'high' | 'medium' | 'low';
  conversionGoal: string;
}

export interface ConversionSummary {
  total: number;
  high: number;
  medium: number;
  low: number;
  avgScore: number;
  pagesWithoutServiceLink: number;
  pagesWithoutRelatedContent: number;
}

export function calculateConversionScore(slug: string, type: ContentNodeType): ConversionScore {
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
  const totalScore = ctaScore + serviceLinkScore + relatedScore + authorityScore;

  const status: ConversionScore['status'] =
    totalScore >= 70 ? 'high' : totalScore >= 50 ? 'medium' : 'low';

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
    totalScore,
    ctaScore,
    serviceLinkScore,
    relatedScore,
    authorityScore,
    conversionPriority: 100 - totalScore,
    status,
    conversionGoal: buildGlobalContactHref(),
  };
}

export function analyzeAllConversions(): ConversionScore[] {
  const graph = getContentGraph();
  return Object.values(graph).map(node => calculateConversionScore(node.slug, node.type));
}

export function getConversionSummary(): ConversionSummary {
  const scores = analyzeAllConversions();
  const total = scores.length;
  const high = scores.filter(s => s.status === 'high').length;
  const medium = scores.filter(s => s.status === 'medium').length;
  const low = scores.filter(s => s.status === 'low').length;
  const avgScore = total > 0 ? scores.reduce((sum, s) => sum + s.totalScore, 0) / total : 0;
  const pagesWithoutServiceLink = scores.filter(s => s.serviceLinkScore === 0).length;
  const pagesWithoutRelatedContent = scores.filter(s => s.relatedScore === 0).length;

  return {
    total,
    high,
    medium,
    low,
    avgScore,
    pagesWithoutServiceLink,
    pagesWithoutRelatedContent,
  };
}
