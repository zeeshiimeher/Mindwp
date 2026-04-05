/**
 * Auto Fix Recommendation Engine
 *
 * Suggests fixes based on past fix history (learning-based).
 * Falls back to default rules when fix-log is empty.
 * Never auto-applies fixes — suggestions only.
 */

import type { FixLogEntry } from './fixInsightsAnalyzer';
import { getBestFixForIssue, getFixPerformance } from './fixLearningEngine';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface AutoFixRecommendation {
  issue: string;
  recommendedFix: string;
  confidence: number;
  reason: string;
}

// ─── Default fallback rules ──────────────────────────────────────────────────

const DEFAULT_FIXES: Record<string, string> = {
  'Missing CTA': 'add-cta',
  'Missing service link': 'add-service-link',
  'Missing journey link': 'add-journey-link',
  'Critical link health': 'add-links',
  'Weak link health': 'improve-links',
  no_cta: 'add-cta',
  no_service_link: 'add-service-link',
  no_related_content: 'add-related-content',
};

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * Generate fix recommendations for a set of issues.
 * Uses fix-log history when available, defaults otherwise.
 */
export function getAutoFixRecommendations(
  issues: string[],
  entries?: FixLogEntry[]
): AutoFixRecommendation[] {
  const recommendations: AutoFixRecommendation[] = [];
  const performance = getFixPerformance(entries);

  // Index performance by fix name for fast lookup
  const performanceMap = new Map(performance.map(p => [p.fix, p]));

  for (const issue of issues) {
    const best = getBestFixForIssue(issue, entries);
    let { confidence } = best;

    // Boost confidence if fix has high historical impact
    const perf = performanceMap.get(best.fix);
    if (perf && perf.avgImpact > 25) {
      confidence = Math.min(100, confidence + 20);
    }

    recommendations.push({
      issue,
      recommendedFix: best.fix,
      confidence,
      reason: best.reason,
    });
  }

  // Sort by confidence (highest first)
  recommendations.sort((a, b) => b.confidence - a.confidence);

  return recommendations;
}

/**
 * Get a single fix recommendation for an issue.
 * Convenience wrapper around getAutoFixRecommendations.
 */
export function getRecommendation(issue: string, entries?: FixLogEntry[]): AutoFixRecommendation {
  const results = getAutoFixRecommendations([issue], entries);
  return (
    results[0] ?? {
      issue,
      recommendedFix: DEFAULT_FIXES[issue] ?? 'manual-review',
      confidence: 30,
      reason: 'Default rule-based suggestion',
    }
  );
}
