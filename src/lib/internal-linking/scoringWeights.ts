/**
 * Scoring Weights — Centralized
 *
 * Single source of truth for conversion scoring weights.
 * Used by conversionAnalyzer (live scoring) and fixSimulationEngine (what-if).
 */

export const SCORING_WEIGHTS = {
  /** Maximum CTA score */
  ctaMax: 25,
  /** Maximum service link score */
  serviceLinkMax: 25,
  /** Points for first service/journey link */
  firstLinkPoints: 15,
  /** Points for each additional service/journey link */
  additionalLinkPoints: 5,
  /** Maximum journey score */
  journeyMax: 25,
  /** Authority divisor: conversionPriority / divisor = authorityScore */
  authorityDivisor: 4,
  /** Maximum authority score */
  authorityMax: 25,
} as const;

export const CONVERSION_THRESHOLDS = {
  high: 70,
  medium: 40,
} as const;

/** CTA type scores — pages with structural CTAs score higher */
export const CTA_TYPE_SCORES: Partial<Record<string, number>> = {
  service: 25,
  feature: 25,
  'industry-detail': 20,
  'case-study': 15,
  'industry-category': 15,
  resource: 10,
  blog: 5,
};
