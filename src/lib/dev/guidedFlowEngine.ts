/**
 * Guided Flow Engine
 *
 * Generates step-by-step optimization guides for improving a page's
 * conversion score. Orders steps by impact (highest improvement first).
 */

import type { ContentNodeType } from '@/lib/content-graph/types';

import {
  type SimulatedFix,
  simulateFixesForPage,
  type SimulationResult,
} from './fixSimulationEngine';

export interface GuidedStep {
  stepNumber: number;
  fixType: string;
  label: string;
  currentScore: number;
  projectedScore: number;
  improvement: number;
  cumulativeTotal: number;
  instructions: string;
}

export interface GuidedFlow {
  slug: string;
  type: ContentNodeType;
  path: string;
  currentTotal: number;
  maxPossibleScore: number;
  steps: GuidedStep[];
  projectedTotal: number;
}

// ─── Step instructions ───────────────────────────────────────────────────────

const FIX_INSTRUCTIONS: Record<string, string> = {
  'add-cta':
    'Add a primary call-to-action section. For service/feature pages, include a "Get Started" or "Book a Consultation" button. For blog/resource pages, add an inline CTA linking to a relevant service.',
  'add-service-link':
    'Add a contextual link to a relevant service page. Place it naturally within the content body or in a "Related Services" sidebar/section.',
  'add-related-content':
    'Add a link to the next logical step in the content graph. Examples: blog → resource, resource → service, service → case-study, case-study → consultation.',
};

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Generate a step-by-step optimization guide for a page.
 * Steps are ordered by impact — the highest-improvement fix comes first.
 */
export function generateGuidedFlow(slug: string, type: ContentNodeType): GuidedFlow {
  const simulation: SimulationResult = simulateFixesForPage(slug, type);

  let cumulativeTotal = simulation.currentTotal;
  const steps: GuidedStep[] = simulation.fixes.map((fix: SimulatedFix, idx: number) => {
    cumulativeTotal += fix.improvement;
    return {
      stepNumber: idx + 1,
      fixType: fix.fixType,
      label: fix.label,
      currentScore: fix.currentScore,
      projectedScore: fix.simulatedScore,
      improvement: fix.improvement,
      cumulativeTotal,
      instructions: FIX_INSTRUCTIONS[fix.fixType] ?? 'Apply the recommended fix.',
    };
  });

  return {
    slug: simulation.slug,
    type: simulation.type,
    path: simulation.path,
    currentTotal: simulation.currentTotal,
    maxPossibleScore: simulation.maxPossibleScore,
    steps,
    projectedTotal: cumulativeTotal,
  };
}
