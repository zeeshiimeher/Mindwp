/**
 * Conversion Analyzer
 *
 * Calculates per-page conversion scores based on:
 * - CTA presence and intensity
 * - Service link density (links pointing to high-conversion pages)
 * - Funnel depth (position in journey progression)
 * - Authority weight (topic authority contribution)
 *
 * Used by the dashboard and report generator to surface
 * revenue opportunities and low-conversion pages.
 */

import { resolveConversionGoal } from '@/lib/content-graph/conversionGoals';
import { getContentGraph, getNodeBySlug } from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';
import { generateInternalLinks } from '@/lib/internal-linking/engine';
import { isJourneyNextStep } from '@/lib/internal-linking/journey';
import {
  CONVERSION_THRESHOLDS,
  CTA_TYPE_SCORES,
  SCORING_WEIGHTS,
} from '@/lib/internal-linking/scoringWeights';

// --- Types ---

export type ConversionStatus = 'high' | 'medium' | 'low';

export interface ConversionScore {
  slug: string;
  type: ContentNodeType;
  path: string;
  conversionGoal: string;
  conversionPriority: number;
  ctaScore: number;
  serviceLinkScore: number;
  journeyScore: number;
  authorityScore: number;
  totalScore: number;
  status: ConversionStatus;
}

// --- Thresholds ---

const HIGH_THRESHOLD = CONVERSION_THRESHOLDS.high;
const MEDIUM_THRESHOLD = CONVERSION_THRESHOLDS.medium;

// --- CTA scoring ---

function scoreCTA(type: ContentNodeType): number {
  // Pages that have CTA sections built into their structure score higher
  return CTA_TYPE_SCORES[type] ?? 0;
}

// --- Service link density ---

function scoreServiceLinks(slug: string, type: ContentNodeType): number {
  const links = generateInternalLinks(slug, type);
  const serviceLinks = links.filter(l => l.targetType === 'service');
  if (serviceLinks.length === 0) return 0;
  // Up to serviceLinkMax points
  return Math.min(
    SCORING_WEIGHTS.serviceLinkMax,
    SCORING_WEIGHTS.firstLinkPoints +
      (serviceLinks.length - 1) * SCORING_WEIGHTS.additionalLinkPoints
  );
}

// --- Journey progression score ---

function scoreJourney(slug: string, type: ContentNodeType): number {
  const links = generateInternalLinks(slug, type);
  let journeyLinks = 0;

  for (const link of links) {
    const targetNode = getNodeBySlug(link.targetSlug);
    if (targetNode && isJourneyNextStep(type, targetNode.type)) {
      journeyLinks++;
    }
  }

  if (journeyLinks === 0) return 0;
  // Up to journeyMax points
  return Math.min(
    SCORING_WEIGHTS.journeyMax,
    SCORING_WEIGHTS.firstLinkPoints + (journeyLinks - 1) * SCORING_WEIGHTS.additionalLinkPoints
  );
}

// --- Authority weight ---

function scoreAuthority(type: ContentNodeType): number {
  const { conversionPriority } = resolveConversionGoal(type);
  return Math.round(conversionPriority / SCORING_WEIGHTS.authorityDivisor);
}

// --- Calculate conversion score for a single page ---

export function calculateConversionScore(slug: string, type: ContentNodeType): ConversionScore {
  const node = getNodeBySlug(slug);
  const path = node?.path ?? `/${slug}`;
  const { conversionGoal, conversionPriority } = resolveConversionGoal(type);

  const ctaScore = scoreCTA(type);
  const serviceLinkScore = scoreServiceLinks(slug, type);
  const journeyScore = scoreJourney(slug, type);
  const authorityScore = scoreAuthority(type);

  const totalScore = ctaScore + serviceLinkScore + journeyScore + authorityScore;

  let status: ConversionStatus = 'low';
  if (totalScore >= HIGH_THRESHOLD) {
    status = 'high';
  } else if (totalScore >= MEDIUM_THRESHOLD) {
    status = 'medium';
  }

  return {
    slug,
    type,
    path,
    conversionGoal,
    conversionPriority,
    ctaScore,
    serviceLinkScore,
    journeyScore,
    authorityScore,
    totalScore,
    status,
  };
}

// --- Analyze all pages ---

export function analyzeAllConversions(): ConversionScore[] {
  const graph = getContentGraph();
  const results: ConversionScore[] = [];

  for (const node of Object.values(graph)) {
    results.push(calculateConversionScore(node.slug, node.type));
  }

  return results.sort((a, b) => b.totalScore - a.totalScore);
}

// --- Summary ---

export function getConversionSummary(): {
  total: number;
  high: number;
  medium: number;
  low: number;
  avgScore: number;
  pagesWithoutServiceLink: number;
  pagesWithoutJourneyLink: number;
} {
  const results = analyzeAllConversions();
  const high = results.filter(r => r.status === 'high').length;
  const medium = results.filter(r => r.status === 'medium').length;
  const low = results.filter(r => r.status === 'low').length;
  const avgScore =
    results.length > 0
      ? Math.round(results.reduce((s, r) => s + r.totalScore, 0) / results.length)
      : 0;
  const pagesWithoutServiceLink = results.filter(r => r.serviceLinkScore === 0).length;
  const pagesWithoutJourneyLink = results.filter(r => r.journeyScore === 0).length;

  return {
    total: results.length,
    high,
    medium,
    low,
    avgScore,
    pagesWithoutServiceLink,
    pagesWithoutJourneyLink,
  };
}
