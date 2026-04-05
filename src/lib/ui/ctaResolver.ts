/**
 * CTA Resolver
 *
 * Resolves CTA intensity based on page intent.
 * Delegates to ctaEngine for intent-classified routing.
 * Falls back to page type mapping when no intent is provided.
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
import { getCTAConfig, type ContentIntent } from '@/lib/ui/ctaEngine';

export type LinkIntent = 'learn' | 'compare' | 'buy';

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

// --- Resolver ---

export function resolveCTA({
  pageType,
  intent,
  contentIntent,
}: {
  pageType: ContentNodeType;
  intent?: LinkIntent;
  contentIntent?: ContentIntent;
}): ResolvedCTA {
  // Content-specific intent takes priority (Phase 10 deterministic routing)
  if (contentIntent) {
    const routing = getCTAConfig(pageType, contentIntent);
    return { level: routing.intensity };
  }

  // Legacy LinkIntent path
  if (intent) {
    return { level: INTENT_TO_LEVEL[intent] };
  }

  // Default: use ctaEngine with no intent
  const routing = getCTAConfig(pageType);
  return { level: routing.intensity };
}
