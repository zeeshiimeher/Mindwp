/**
 * CTA Resolver
 *
 * Resolves CTA intensity based on page intent.
 * Intent comes from the internal linking system or falls back
 * to page type mapping.
 *
 * Intensity levels:
 * - soft: learn intent (exploring, not ready)
 * - mid: compare intent (evaluating options)
 * - strong: buy intent (ready to act)
 *
 * Labels come ONLY from CTA_CONFIG (ui-intelligence.ts) or page data files.
 * This resolver handles intensity level only — not labels.
 */

import type { ContentNodeType } from '@/lib/content-graph/types';
import type { LinkIntent } from '@/lib/internal-linking/types';

export type CTALevel = 'soft' | 'mid' | 'strong';

export interface ResolvedCTA {
  level: CTALevel;
}

// --- Intent → CTA level ---

const INTENT_TO_LEVEL: Record<LinkIntent, CTALevel> = {
  learn: 'soft',
  compare: 'mid',
  buy: 'strong',
};

// --- Fallback: page type → intent ---

const TYPE_FALLBACK: Partial<Record<ContentNodeType, LinkIntent>> = {
  blog: 'learn',
  resource: 'learn',
  'case-study': 'compare',
  service: 'buy',
  feature: 'buy',
  'industry-detail': 'compare',
  'industry-category': 'compare',
};

// --- Resolver ---

export function resolveCTA({
  pageType,
  intent,
}: {
  pageType: ContentNodeType;
  intent?: LinkIntent;
}): ResolvedCTA {
  const resolvedIntent = intent ?? TYPE_FALLBACK[pageType] ?? 'learn';
  const level = INTENT_TO_LEVEL[resolvedIntent];

  return { level };
}
