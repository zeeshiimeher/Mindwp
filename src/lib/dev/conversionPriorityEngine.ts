/**
 * Conversion Priority Engine
 *
 * Produces a ranked priority queue of pages needing conversion fixes.
 * Uses AuthorityMap directly (not authorityAnalyzer) for connection richness.
 * Combines: conversion score, link health, authority connections.
 */

import { AUTHORITY_MAP } from '@/lib/authority/generated/authorityMap';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { analyzeAllConversions, type ConversionScore } from '@/lib/dev/conversionAnalyzer';
import { getFixPerformance } from '@/lib/dev/fixLearningEngine';
import { analyzeAllPages, type LinkHealthResult } from '@/lib/dev/linkHealthAnalyzer';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PriorityEntry {
  slug: string;
  type: ContentNodeType;
  path: string;
  /** 0-100, higher = more urgent */
  priorityScore: number;
  conversionScore: number;
  linkHealthStatus: string;
  authorityConnections: number;
  issues: string[];
  category: 'critical' | 'high' | 'medium' | 'low';
}

export interface PriorityQueue {
  entries: PriorityEntry[];
  totalPages: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

// ─── Authority connection count ──────────────────────────────────────────────

const TYPE_TO_MAP_KEY: Partial<Record<ContentNodeType, keyof typeof AUTHORITY_MAP>> = {
  service: 'service',
  feature: 'feature',
  'industry-category': 'industry',
  'industry-detail': 'industry',
  blog: 'blog',
  resource: 'resource',
  'case-study': 'caseStudy',
};

function countAuthorityConnections(slug: string, type: ContentNodeType): number {
  const mapKey = TYPE_TO_MAP_KEY[type];
  if (!mapKey) return 0;

  const slots = AUTHORITY_MAP[mapKey][slug];
  if (!slots) return 0;

  let count = 0;
  for (const arr of Object.values(slots)) {
    if (Array.isArray(arr)) count += arr.length;
  }
  return count;
}

// ─── Priority score calculation ──────────────────────────────────────────────

function calculatePriority(
  conversion: ConversionScore,
  health: LinkHealthResult | undefined,
  authorityConnections: number
): { score: number; issues: string[] } {
  const issues: string[] = [];
  let score = 0;

  // Inverse conversion score (low conversion = high priority): 0-40 points
  const conversionGap = 100 - conversion.totalScore;
  score += Math.round(conversionGap * 0.4);

  // Type-based priority weight: 0-20 points
  score += Math.round(conversion.conversionPriority * 0.2);

  // Link health penalty: 0-20 points
  if (health) {
    if (health.status === 'critical') {
      score += 20;
      issues.push('Critical link health');
    } else if (health.status === 'weak') {
      score += 10;
      issues.push('Weak link health');
    }
  }

  // Authority connections boost (more connections = more impact if fixed): 0-10 points
  score += Math.min(10, authorityConnections * 2);

  // Specific issue flags: 0-10 points
  if (conversion.serviceLinkScore === 0) {
    score += 4;
    issues.push('Missing service link');
  }
  if (conversion.journeyScore === 0) {
    score += 3;
    issues.push('Missing journey link');
  }
  if (conversion.ctaScore === 0) {
    score += 3;
    issues.push('Missing CTA');
  }

  // Learning boost: if fix history shows high-impact fixes exist, boost priority
  try {
    const performance = getFixPerformance();
    const hasHighImpactFix = performance.some(p => p.avgImpact > 25);
    if (hasHighImpactFix && issues.length > 0) {
      score += 10;
    }
  } catch {
    // Graceful fallback — no boost if fix-log unavailable
  }

  return { score: Math.min(100, score), issues };
}

function categorize(score: number): PriorityEntry['category'] {
  if (score >= 75) return 'critical';
  if (score >= 50) return 'high';
  if (score >= 30) return 'medium';
  return 'low';
}

// ─── Public API ──────────────────────────────────────────────────────────────

export function getPriorityQueue(): PriorityQueue {
  const allConversions = analyzeAllConversions();
  const allHealth = analyzeAllPages();

  // Index health by slug for fast lookup
  const healthBySlug = new Map<string, LinkHealthResult>();
  for (const h of allHealth) {
    healthBySlug.set(h.slug, h);
  }

  const entries: PriorityEntry[] = allConversions.map(conversion => {
    const health = healthBySlug.get(conversion.slug);
    const authorityConnections = countAuthorityConnections(conversion.slug, conversion.type);
    const { score, issues } = calculatePriority(conversion, health, authorityConnections);

    return {
      slug: conversion.slug,
      type: conversion.type,
      path: conversion.path,
      priorityScore: score,
      conversionScore: conversion.totalScore,
      linkHealthStatus: health?.status ?? 'unknown',
      authorityConnections,
      issues,
      category: categorize(score),
    };
  });

  // Sort: highest priority first
  entries.sort((a, b) => b.priorityScore - a.priorityScore);

  return {
    entries,
    totalPages: entries.length,
    criticalCount: entries.filter(e => e.category === 'critical').length,
    highCount: entries.filter(e => e.category === 'high').length,
    mediumCount: entries.filter(e => e.category === 'medium').length,
    lowCount: entries.filter(e => e.category === 'low').length,
  };
}
