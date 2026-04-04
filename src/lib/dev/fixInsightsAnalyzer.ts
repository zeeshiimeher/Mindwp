/**
 * Fix Insights Analyzer
 *
 * Reads fix-log.json and derives lightweight dashboard insights:
 * counts by component, type, impact, average improvement,
 * most-fixed pages, and recent activity.
 * Handles empty log gracefully.
 */

import { readFileSync } from 'node:fs';
import { join } from 'node:path';

// ─── Types ───────────────────────────────────────────────────────────────────

type FixType = 'ui' | 'bug' | 'refactor' | 'unknown';
export type FixImpact = 'high' | 'medium' | 'low';

export interface FixLogEntry {
  id?: string;
  timestamp: string;
  date: string;
  slug: string;
  fixType: string;
  scoreBefore: number;
  scoreAfter: number;
  title: string;
  component: string;
  type: FixType;
  impact: FixImpact;
  status: string;
  notes?: string;
}

interface FixCountByType {
  type: string;
  count: number;
}

interface FixCountByImpact {
  impact: FixImpact;
  count: number;
}

interface FixCountByComponent {
  component: string;
  count: number;
}

export interface FixInsights {
  totalFixes: number;
  avgImprovement: number;
  fixesByType: FixCountByType[];
  byType: FixCountByType[];
  byImpact: FixCountByImpact[];
  byComponent: FixCountByComponent[];
  recentFixes: FixLogEntry[];
  topFixedPages: { slug: string; fixCount: number }[];
  mostAffectedComponents: FixCountByComponent[];
}

interface RawFixLogEntry {
  id?: unknown;
  timestamp?: unknown;
  date?: unknown;
  slug?: unknown;
  fixType?: unknown;
  scoreBefore?: unknown;
  scoreAfter?: unknown;
  title?: unknown;
  component?: unknown;
  type?: unknown;
  impact?: unknown;
  status?: unknown;
  notes?: unknown;
}

// ─── Load fix log ────────────────────────────────────────────────────────────

function inferImpact(improvement: number): FixImpact {
  if (improvement >= 20) return 'high';
  if (improvement >= 10) return 'medium';
  return 'low';
}

function normalizeType(value: unknown, fallback: unknown): FixType {
  const candidate = typeof value === 'string' && value.length > 0 ? value : fallback;
  if (candidate === 'ui' || candidate === 'bug' || candidate === 'refactor') {
    return candidate;
  }
  return 'unknown';
}

function normalizeImpact(value: unknown, improvement: number): FixImpact {
  if (value === 'high' || value === 'medium' || value === 'low') {
    return value;
  }
  return inferImpact(improvement);
}

function normalizeString(value: unknown, fallback: string): string {
  return typeof value === 'string' && value.trim().length > 0 ? value.trim() : fallback;
}

function normalizeNumber(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : 0;
}

function normalizeEntry(entry: RawFixLogEntry): FixLogEntry {
  const scoreBefore = normalizeNumber(entry.scoreBefore);
  const scoreAfter = normalizeNumber(entry.scoreAfter);
  const improvement = scoreAfter - scoreBefore;
  const timestamp = normalizeString(entry.timestamp ?? entry.date, '');
  const date = normalizeString(entry.date ?? entry.timestamp, timestamp);
  const fixType = normalizeString(entry.fixType, 'unknown');
  const type = normalizeType(entry.type, entry.fixType);

  return {
    id: typeof entry.id === 'string' && entry.id.length > 0 ? entry.id : undefined,
    timestamp,
    date,
    slug: normalizeString(entry.slug, 'unknown'),
    fixType,
    scoreBefore,
    scoreAfter,
    title: normalizeString(entry.title, normalizeString(entry.notes, `${fixType} fix`)),
    component: normalizeString(entry.component, 'Unspecified'),
    type,
    impact: normalizeImpact(entry.impact, improvement),
    status: normalizeString(entry.status, 'completed'),
    notes:
      typeof entry.notes === 'string' && entry.notes.trim().length > 0 ? entry.notes : undefined,
  };
}

function loadFixLog(): FixLogEntry[] {
  try {
    const raw = readFileSync(join(process.cwd(), 'reports/fix-log.json'), 'utf-8');
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map(entry => normalizeEntry(entry as RawFixLogEntry));
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
      byType: [],
      byImpact: [],
      byComponent: [],
      recentFixes: [],
      topFixedPages: [],
      mostAffectedComponents: [],
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

  const impactCounts = new Map<FixImpact, number>();
  for (const entry of entries) {
    impactCounts.set(entry.impact, (impactCounts.get(entry.impact) ?? 0) + 1);
  }
  const byImpact = (
    [
      { impact: 'high', count: impactCounts.get('high') ?? 0 },
      { impact: 'medium', count: impactCounts.get('medium') ?? 0 },
      { impact: 'low', count: impactCounts.get('low') ?? 0 },
    ] satisfies FixCountByImpact[]
  ).filter(item => item.count > 0);

  const componentCounts = new Map<string, number>();
  for (const entry of entries) {
    componentCounts.set(entry.component, (componentCounts.get(entry.component) ?? 0) + 1);
  }
  const byComponent = [...componentCounts.entries()]
    .map(([component, count]) => ({ component, count }))
    .sort((a, b) => b.count - a.count || a.component.localeCompare(b.component));

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
  const recentFixes = [...entries]
    .sort((a, b) => (b.timestamp || b.date).localeCompare(a.timestamp || a.date))
    .slice(0, 10);

  return {
    totalFixes: entries.length,
    avgImprovement,
    fixesByType,
    byType: fixesByType,
    byImpact,
    byComponent,
    recentFixes,
    topFixedPages,
    mostAffectedComponents: byComponent.slice(0, 5),
  };
}
