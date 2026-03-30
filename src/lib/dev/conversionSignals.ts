/**
 * Conversion Signals
 *
 * Single source of truth for detecting conversion-related signals
 * on any page. All downstream systems (aggregator, inspector,
 * priority engine, suggestions, simulation) import from here.
 *
 * Uses existing analyzers — zero duplication.
 */

import { getNodeBySlug } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { generateInternalLinks } from '@/lib/internal-linking/engine';
import { isJourneyNextStep } from '@/lib/internal-linking/journey';

// --- Types ---

export interface ConversionSignals {
  /** Page has a structural CTA or at least one link to a service page */
  hasCTA: boolean;
  /** Page has at least one internal link targeting a service page */
  hasServiceLink: boolean;
  /** Page has at least one link to the next step in the conversion journey */
  hasJourneyNextStep: boolean;
}

// Pages that structurally include a CTA (built into their template/data)
const TYPES_WITH_STRUCTURAL_CTA = new Set<ContentNodeType>([
  'service',
  'feature',
  'industry-category',
  'industry-detail',
  'case-study',
]);

// --- Main function ---

export function getConversionSignals(slug: string, type: ContentNodeType): ConversionSignals {
  const links = generateInternalLinks(slug, type);

  const hasServiceLink = links.some(l => l.targetType === 'service');

  // CTA: structural pages always have one, others need a service path
  const hasCTA = TYPES_WITH_STRUCTURAL_CTA.has(type) || hasServiceLink;

  const hasJourneyNextStep = links.some(l => {
    const targetNode = getNodeBySlug(l.targetSlug);
    return targetNode != null && isJourneyNextStep(type, targetNode.type);
  });

  return { hasCTA, hasServiceLink, hasJourneyNextStep };
}
