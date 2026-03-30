/**
 * Fix Insights Analyzer
 *
 * Reads fix-log.json and derives insights: fix counts by type,
 * average improvement, most-fixed pages, recent activity.
 * Handles empty log gracefully.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FixLogEntry {
  date: string;
  slug: string;
  fixType: string;
  scoreBefore: number;
  scoreAfter: number;
  notes?: string;
}

export interface FixInsights {
  totalFixes: number;
  avgImprovement: number;
  fixesByType: { type: string; count: number }[];
  recentFixes: FixLogEntry[];
  topFixedPages: { slug: string; fixCount: number }[];
}

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

// ─── Public API ──────────────────────────────────────────────────────────────

export function getFixInsights(): FixInsights {
  const entries = loadFixLog();

  if (entries.length === 0) {
    return {
      totalFixes: 0,
      avgImprovement: 0,
      fixesByType: [],
      recentFixes: [],
      topFixedPages: [],
    };
  }

  // Average improvement
  const totalImprovement = entries.reduce((sum, e) => sum + (e.scoreAfter - e.scoreBefore), 0);
  const avgImprovement = Math.round(totalImprovement / entries.length);

  // Fixes by type
  const typeCounts = new Map<string, number>();
  for (const e of entries) {
    typeCounts.set(e.fixType, (typeCounts.get(e.fixType) ?? 0) + 1);
  }
  const fixesByType = [...typeCounts.entries()]
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count);

  // Top fixed pages
  const pageCounts = new Map<string, number>();
  for (const e of entries) {
    pageCounts.set(e.slug, (pageCounts.get(e.slug) ?? 0) + 1);
  }
  const topFixedPages = [...pageCounts.entries()]
    .map(([slug, fixCount]) => ({ slug, fixCount }))
    .sort((a, b) => b.fixCount - a.fixCount)
    .slice(0, 10);

  // Recent fixes (last 10)
  const recentFixes = [...entries].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10);

  return {
    totalFixes: entries.length,
    avgImprovement,
    fixesByType,
    recentFixes,
    topFixedPages,
  };
}
