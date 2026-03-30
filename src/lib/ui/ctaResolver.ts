/**
 * CTA Resolver
 *
 * Resolves CTA intensity and copy based on page intent.
 * Intent comes from the internal linking system or falls back
 * to page type mapping.
 *
 * Intensity levels:
 * - soft: learn intent (exploring, not ready)
 * - mid: compare intent (evaluating options)
 * - strong: buy intent (ready to act)
 */

import type { ContentNodeType, ConversionGoal } from '@/lib/content-graph/types';
import type { LinkIntent } from '@/lib/internal-linking/types';

export type CTALevel = 'soft' | 'mid' | 'strong';

export interface ResolvedCTA {
  level: CTALevel;
  label: string;
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

// --- CTA labels by level ---

const CTA_LABELS: Record<CTALevel, string> = {
  soft: 'Explore related insights',
  mid: 'See real-world results',
  strong: 'Start your project',
};

// --- Conversion-goal-specific CTA labels ---

const GOAL_CTA_LABELS: Record<ConversionGoal, string> = {
  consultation: 'Book a Free Consultation',
  demo: 'See How It Works',
  lead: 'Get a Custom Strategy',
  'email-capture': 'Get Free Resources',
  none: 'Learn More',
};

// --- Resolver ---

export function resolveCTA({
  pageType,
  intent,
  conversionGoal,
}: {
  pageType: ContentNodeType;
  intent?: LinkIntent;
  conversionGoal?: ConversionGoal;
}): ResolvedCTA {
  const resolvedIntent = intent ?? TYPE_FALLBACK[pageType] ?? 'learn';
  const level = INTENT_TO_LEVEL[resolvedIntent];

  // Conversion-goal-specific label takes precedence at mid/strong levels
  const label =
    conversionGoal && conversionGoal !== 'none' && level !== 'soft'
      ? GOAL_CTA_LABELS[conversionGoal]
      : CTA_LABELS[level];

  return { level, label };
}
