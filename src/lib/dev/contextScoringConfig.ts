/**
 * Context-Aware Scoring Config
 *
 * Per-page-type weights for conversion scoring context.
 * Used by uiSuggestionsEngine for context-aware suggestions.
 * Does NOT replace conversionAnalyzer scoring — extends suggestion intelligence.
 */

import type { ContentNodeType } from '@/lib/content-graph/types';

// ─── Context Scoring Weights (per page type) ────────────────────────────────

export interface ContextWeights {
  CTA: number;
  SERVICE_LINK: number;
  RELATED: number;
  PROOF: number;
}

export const CONTEXT_SCORING: Record<string, ContextWeights> = {
  blog: { CTA: 20, SERVICE_LINK: 25, RELATED: 30, PROOF: 5 },
  resource: { CTA: 15, SERVICE_LINK: 20, RELATED: 35, PROOF: 10 },
  'case-study': { CTA: 25, SERVICE_LINK: 25, RELATED: 20, PROOF: 20 },
  service: { CTA: 40, SERVICE_LINK: 20, RELATED: 10, PROOF: 30 },
  feature: { CTA: 40, SERVICE_LINK: 20, RELATED: 10, PROOF: 30 },
  'industry-category': { CTA: 25, SERVICE_LINK: 25, RELATED: 25, PROOF: 15 },
  'industry-detail': { CTA: 25, SERVICE_LINK: 25, RELATED: 25, PROOF: 15 },
};

/**
 * Get context weights for a page type.
 * Falls back to blog weights for unknown types.
 */
export function getContextWeights(type: ContentNodeType): ContextWeights {
  return CONTEXT_SCORING[type] ?? CONTEXT_SCORING.blog;
}

// ─── Priority Weight Map ─────────────────────────────────────────────────────

export const PRIORITY_WEIGHT: Record<string, number> = {
  critical: 100,
  high: 70,
  medium: 40,
  low: 20,
};

// ─── Context Penalties ───────────────────────────────────────────────────────

export interface ContextPenalty {
  type: string;
  condition: string;
  severity: 'critical' | 'high' | 'medium';
}

export const CONTEXT_PENALTIES: ContextPenalty[] = [
  { type: 'service', condition: 'no CTA', severity: 'critical' },
  { type: 'service', condition: 'no proof', severity: 'high' },
  { type: 'feature', condition: 'no CTA', severity: 'critical' },
  { type: 'blog', condition: 'no service link', severity: 'high' },
  { type: 'blog', condition: 'no related content', severity: 'medium' },
  { type: 'resource', condition: 'no related content', severity: 'high' },
  { type: 'case-study', condition: 'no CTA', severity: 'high' },
  { type: 'case-study', condition: 'no service link', severity: 'high' },
];

/**
 * Get penalties applicable for a given page type.
 */
export function getPenaltiesForType(type: ContentNodeType): ContextPenalty[] {
  return CONTEXT_PENALTIES.filter(p => p.type === type);
}
