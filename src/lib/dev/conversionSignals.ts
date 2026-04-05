/**
 * Conversion Signals (Graph-Based)
 *
 * Detects conversion readiness signals per page using the content graph.
 * Replaces the deprecated internal-linking-based detection.
 *
 * Signals:
 * - hasCTA: page type has a CTA config entry
 * - hasServiceLink: page has related services via SmartRelatedSection
 * - hasRelatedContent: page has any related content via SmartRelatedSection
 */

import { CTA_CONFIG } from '@/config/ui-intelligence';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { getRelatedContent } from '@/lib/graph/query';

export interface ConversionSignals {
  hasCTA: boolean;
  hasServiceLink: boolean;
  hasRelatedContent: boolean;
}

export function getConversionSignals(slug: string, type: ContentNodeType): ConversionSignals {
  const hasCTA = type in CTA_CONFIG;
  const related = getRelatedContent(slug, type);
  const hasServiceLink = related.services.length > 0;
  const totalRelated =
    related.services.length +
    related.resources.length +
    related.blog.length +
    related.caseStudies.length +
    related.industries.length;

  return {
    hasCTA,
    hasServiceLink,
    hasRelatedContent: totalRelated > 0,
  };
}
