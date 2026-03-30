/**
 * Session Tracker
 *
 * Reads session-log.json to provide session history for the dashboard.
 * Entries are added manually via scripts/dev/add-session-entry.mjs.
 * Does NOT write to the log — read-only in the app context.
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SessionEntry {
  date: string;
  action: string;
  slugsAffected: string[];
  scoresBefore: Record<string, number>;
  scoresAfter: Record<string, number>;
  notes?: string;
}

export interface SessionSummary {
  totalSessions: number;
  totalSlugsFixed: number;
  avgImprovement: number;
  recentSessions: SessionEntry[];
  topImprovedSlugs: { slug: string; improvement: number }[];
}

// ─── Read session log ────────────────────────────────────────────────────────

function readSessionLog(): SessionEntry[] {
  try {
    const filePath = resolve(process.cwd(), 'reports/session-log.json');
    const raw = readFileSync(filePath, 'utf-8');
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as SessionEntry[];
  } catch {
    return [];
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function getSessionEntries(): SessionEntry[] {
  return readSessionLog();
}

export function getSessionSummary(): SessionSummary {
  const entries = readSessionLog();

  if (entries.length === 0) {
    return {
      totalSessions: 0,
      totalSlugsFixed: 0,
      avgImprovement: 0,
      recentSessions: [],
      topImprovedSlugs: [],
    };
  }

  // Count unique slugs
  const allSlugs = new Set<string>();
  const slugImprovements = new Map<string, number>();

  for (const entry of entries) {
    for (const slug of entry.slugsAffected) {
      allSlugs.add(slug);
      const before = entry.scoresBefore[slug] ?? 0;
      const after = entry.scoresAfter[slug] ?? 0;
      const improvement = after - before;
      if (improvement > 0) {
        slugImprovements.set(slug, (slugImprovements.get(slug) ?? 0) + improvement);
      }
    }
  }

  // Average improvement across all slug entries
  let totalImprovement = 0;
  let improvementCount = 0;
  for (const entry of entries) {
    for (const slug of entry.slugsAffected) {
      const before = entry.scoresBefore[slug] ?? 0;
      const after = entry.scoresAfter[slug] ?? 0;
      if (after > before) {
        totalImprovement += after - before;
        improvementCount++;
      }
    }
  }

  const topImprovedSlugs = Array.from(slugImprovements.entries())
    .map(([slug, improvement]) => ({ slug, improvement }))
    .sort((a, b) => b.improvement - a.improvement)
    .slice(0, 10);

  return {
    totalSessions: entries.length,
    totalSlugsFixed: allSlugs.size,
    avgImprovement: improvementCount > 0 ? Math.round(totalImprovement / improvementCount) : 0,
    recentSessions: entries.slice(-5).reverse(),
    topImprovedSlugs,
  };
}
