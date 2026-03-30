/**
 * Fix Learning Engine
 *
 * Learns from fix-log.json to identify:
 * - Which fix types produce the best results
 * - Which issues map to which fixes
 * - Best fix recommendation for a given issue
 *
 * Handles empty fix-log gracefully — all functions return safe defaults.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { FixLogEntry } from './fixInsightsAnalyzer';

// ─── Load fix log ────────────────────────────────────────────────────────────

function loadFixLog(): FixLogEntry[] {
  try {
    const raw = readFileSync(join(process.cwd(), 'reports/fix-log.json'), 'utf-8');
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as FixLogEntry[];
  } catch {
    return [];
  }
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FixPerformance {
  fix: string;
  count: number;
  totalImpact: number;
  avgImpact: number;
}

export interface BestFix {
  fix: string;
  confidence: number;
  reason: string;
}

// ─── Fix Performance ─────────────────────────────────────────────────────────

/**
 * Returns performance metrics per fix type.
 * Sorted by average impact (descending).
 */
export function getFixPerformance(entries?: FixLogEntry[]): FixPerformance[] {
  const data = entries ?? loadFixLog();
  if (data.length === 0) return [];

  const map = new Map<string, { count: number; totalImpact: number }>();

  for (const entry of data) {
    const improvement = entry.scoreAfter - entry.scoreBefore;
    const existing = map.get(entry.fixType) ?? { count: 0, totalImpact: 0 };
    existing.count++;
    existing.totalImpact += improvement;
    map.set(entry.fixType, existing);
  }

  return [...map.entries()]
    .map(([fix, d]) => ({
      fix,
      count: d.count,
      totalImpact: d.totalImpact,
      avgImpact: Math.round(d.totalImpact / d.count),
    }))
    .sort((a, b) => b.avgImpact - a.avgImpact);
}

// ─── Issue → Fix Map ─────────────────────────────────────────────────────────

/**
 * Maps issues to the fixes that were applied.
 * Returns: { [issue]: { [fix]: count } }
 */
export function getIssueFixMap(entries?: FixLogEntry[]): Record<string, Record<string, number>> {
  const data = entries ?? loadFixLog();
  const map: Record<string, Record<string, number>> = {};

  for (const entry of data) {
    // Use fixType as both issue identifier and fix identifier
    // since fix-log entries are per-fix-type
    const issue = entry.fixType;
    if (!map[issue]) map[issue] = {};
    map[issue][entry.fixType] = (map[issue][entry.fixType] ?? 0) + 1;
  }

  return map;
}

// ─── Best Fix for Issue ──────────────────────────────────────────────────────

/**
 * Returns the best fix recommendation for a given issue type.
 * Uses fix-log data when available, falls back to defaults.
 */
export function getBestFixForIssue(issue: string, entries?: FixLogEntry[]): BestFix {
  const data = entries ?? loadFixLog();
  const performance = getFixPerformance(data);

  // Try to find a fix for this issue from history
  const matchingFix = performance.find(p => p.fix === issue || p.fix.includes(issue));

  if (matchingFix && matchingFix.count >= 1) {
    const confidence = Math.min(
      100,
      30 + matchingFix.count * 10 + (matchingFix.avgImpact > 25 ? 20 : 0)
    );
    return {
      fix: matchingFix.fix,
      confidence,
      reason: `Based on ${matchingFix.count} past fix(es) with average improvement of ${matchingFix.avgImpact} points`,
    };
  }

  // Default fallback
  const defaults: Record<string, string> = {
    'add-cta': 'add-cta',
    'add-service-link': 'add-service-link',
    'add-journey-link': 'add-journey-link',
    'Missing CTA': 'add-cta',
    'Missing service link': 'add-service-link',
    'Missing journey link': 'add-journey-link',
  };

  return {
    fix: defaults[issue] ?? 'manual-review',
    confidence: 30,
    reason: 'Default rule-based suggestion (no fix history available)',
  };
}
