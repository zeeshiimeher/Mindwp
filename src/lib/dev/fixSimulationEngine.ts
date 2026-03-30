/**
 * Fix Simulation Engine
 *
 * Predicts conversion score changes for hypothetical fixes.
 * Uses centralized scoring weights so simulations match live scoring.
 */

import { resolveConversionGoal } from '@/lib/content-graph/conversionGoals';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { calculateConversionScore, type ConversionScore } from '@/lib/dev/conversionAnalyzer';
import { CTA_TYPE_SCORES, SCORING_WEIGHTS } from '@/lib/internal-linking/scoringWeights';

// ─── Types ───────────────────────────────────────────────────────────────────

export type FixType = 'add-cta' | 'add-service-link' | 'add-journey-link';

export interface SimulatedFix {
  fixType: FixType;
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
  fixes: SimulatedFix[];
  bestFix: SimulatedFix | null;
  maxPossibleScore: number;
}

// ─── Simulate individual fixes ───────────────────────────────────────────────

function simulateCTAFix(current: ConversionScore): SimulatedFix {
  const maxCTA = CTA_TYPE_SCORES[current.type] ?? SCORING_WEIGHTS.ctaMax;
  const simulated = maxCTA;
  return {
    fixType: 'add-cta',
    label: 'Add CTA section',
    currentScore: current.ctaScore,
    simulatedScore: simulated,
    improvement: simulated - current.ctaScore,
  };
}

function simulateServiceLinkFix(current: ConversionScore): SimulatedFix {
  // Simulate adding one service link
  const simulated =
    current.serviceLinkScore === 0
      ? SCORING_WEIGHTS.firstLinkPoints
      : Math.min(
          SCORING_WEIGHTS.serviceLinkMax,
          current.serviceLinkScore + SCORING_WEIGHTS.additionalLinkPoints
        );
  return {
    fixType: 'add-service-link',
    label: 'Add service link',
    currentScore: current.serviceLinkScore,
    simulatedScore: simulated,
    improvement: simulated - current.serviceLinkScore,
  };
}

function simulateJourneyLinkFix(current: ConversionScore): SimulatedFix {
  // Simulate adding one journey link
  const simulated =
    current.journeyScore === 0
      ? SCORING_WEIGHTS.firstLinkPoints
      : Math.min(
          SCORING_WEIGHTS.journeyMax,
          current.journeyScore + SCORING_WEIGHTS.additionalLinkPoints
        );
  return {
    fixType: 'add-journey-link',
    label: 'Add journey link',
    currentScore: current.journeyScore,
    simulatedScore: simulated,
    improvement: simulated - current.journeyScore,
  };
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Simulate all possible fixes for a page and return projected improvements.
 * Only includes fixes that would actually change the score.
 */
export function simulateFixes(slug: string): SimulationResult | null {
  const current = calculateConversionScore(slug, '' as ContentNodeType);
  // Re-calculate with proper type from the score itself
  const score = calculateConversionScore(current.slug, current.type);

  const allFixes = [
    simulateCTAFix(score),
    simulateServiceLinkFix(score),
    simulateJourneyLinkFix(score),
  ];

  // Only include fixes that would improve the score
  const fixes = allFixes.filter(f => f.improvement > 0);
  fixes.sort((a, b) => b.improvement - a.improvement);

  const { conversionPriority } = resolveConversionGoal(score.type);
  const maxAuthority = Math.round(conversionPriority / SCORING_WEIGHTS.authorityDivisor);
  const maxCTA = CTA_TYPE_SCORES[score.type] ?? SCORING_WEIGHTS.ctaMax;
  const maxPossibleScore =
    maxCTA + SCORING_WEIGHTS.serviceLinkMax + SCORING_WEIGHTS.journeyMax + maxAuthority;

  return {
    slug: score.slug,
    type: score.type,
    path: score.path,
    currentTotal: score.totalScore,
    fixes,
    bestFix: fixes[0] ?? null,
    maxPossibleScore,
  };
}

/**
 * Simulate fixes for a specific page by slug and type.
 */
export function simulateFixesForPage(slug: string, type: ContentNodeType): SimulationResult {
  const score = calculateConversionScore(slug, type);

  const allFixes = [
    simulateCTAFix(score),
    simulateServiceLinkFix(score),
    simulateJourneyLinkFix(score),
  ];

  const fixes = allFixes.filter(f => f.improvement > 0);
  fixes.sort((a, b) => b.improvement - a.improvement);

  const { conversionPriority } = resolveConversionGoal(type);
  const maxAuthority = Math.round(conversionPriority / SCORING_WEIGHTS.authorityDivisor);
  const maxCTA = CTA_TYPE_SCORES[type] ?? SCORING_WEIGHTS.ctaMax;
  const maxPossibleScore =
    maxCTA + SCORING_WEIGHTS.serviceLinkMax + SCORING_WEIGHTS.journeyMax + maxAuthority;

  return {
    slug: score.slug,
    type: score.type,
    path: score.path,
    currentTotal: score.totalScore,
    fixes,
    bestFix: fixes[0] ?? null,
    maxPossibleScore,
  };
}
