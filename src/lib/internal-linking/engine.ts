import { getNodeBySlug } from '@/lib/content-graph/registry';
import type { ContentGraphNode } from '@/lib/content-graph/types';
import type { AuthorityMapItem, ContentNodeType } from '@/lib/graph/query';
import { getRelatedContent } from '@/lib/graph/query';
import { buildAnchor } from '@/lib/internal-linking/anchor';
import { prioritizeLinks } from '@/lib/internal-linking/conversion';
import { isJourneyNextStep } from '@/lib/internal-linking/journey';
import { getLinkCandidates } from '@/lib/internal-linking/rules';

import type { InternalLink, LinkIntent } from './types';

/**
 * INTERNAL LINKING ENGINE
 *
 * Purpose:
 * Generates deterministic internal links for a given page
 * using graph-derived relationships. This is the single
 * entry point for all internal link generation.
 *
 * Rules:
 * - Graph-driven only — no AI, no NLP, no keyword scanning
 * - Max 5 links per page (SEO spam protection)
 * - Authority-first prioritization (services > cluster > journey)
 * - Fallback order: services → resources → blog
 * - No duplicate targets across link set
 *
 * Scoring:
 * - Base weight from edge type (relatesTo/supports/validates)
 * - Context boosts for shared industry, system, topic, parent
 * - Penalty for same-level repetition
 * - Threshold filter: score >= 120 (relaxed when < 2 links)
 */

const MAX_LINKS = 5;
const SCORE_THRESHOLD = 120;
const MIN_LINKS = 2;

// --- Edge base weights ---

const EDGE_BASE: Record<string, number> = {
  relatesTo: 300,
  supports: 200,
  validates: 100,
};
const DEFAULT_BASE = 200;

// --- Context boost values ---

const BOOST_INDUSTRY = 60;
const BOOST_SYSTEM = 40;
const BOOST_TOPIC = 30;
const BOOST_PARENT = 20;
const PENALTY_SAME_LEVEL = -20;
const BOOST_JOURNEY = 50;

// --- Intent mapping ---

const INTENT_MAP: Partial<Record<ContentNodeType, LinkIntent>> = {
  blog: 'learn',
  resource: 'learn',
  'case-study': 'compare',
  service: 'buy',
};

// --- Shared array overlap ---

function hasOverlap(a?: string[], b?: string[]): boolean {
  if (!a || !b) return false;
  return a.some(v => b.includes(v));
}

// --- Score a single candidate against the source node ---

function scoreCandidate(
  sourceNode: ContentGraphNode | undefined,
  targetSlug: string,
  reason: 'authority' | 'cluster' | 'journey' | 'fallback'
): number {
  const targetNode = getNodeBySlug(targetSlug);

  // Base weight: check if source has an edge to target and use its type
  let base = DEFAULT_BASE;
  if (sourceNode) {
    if (sourceNode.relatesTo?.some(e => e.id.includes(targetSlug))) {
      base = EDGE_BASE.relatesTo;
    } else if (sourceNode.supports?.some(e => e.id.includes(targetSlug))) {
      base = EDGE_BASE.supports;
    } else if (sourceNode.validates?.some(e => e.id.includes(targetSlug))) {
      base = EDGE_BASE.validates;
    }
  }

  // Authority links get a fixed bonus to preserve priority order
  if (reason === 'authority') base = Math.max(base, EDGE_BASE.relatesTo);

  let boost = 0;

  if (sourceNode && targetNode) {
    if (hasOverlap(sourceNode.industries, targetNode.industries)) boost += BOOST_INDUSTRY;
    if (hasOverlap(sourceNode.systems, targetNode.systems)) boost += BOOST_SYSTEM;
    if (hasOverlap(sourceNode.topics, targetNode.topics)) boost += BOOST_TOPIC;

    // Parent/child relationship
    if (sourceNode.parent === targetNode.slug || targetNode.parent === sourceNode.slug) {
      boost += BOOST_PARENT;
    }

    // Same-level penalty (same type, same parent, not parent/child)
    if (
      sourceNode.type === targetNode.type &&
      sourceNode.parent === targetNode.parent &&
      sourceNode.parent !== undefined
    ) {
      boost += PENALTY_SAME_LEVEL;
    }

    // Journey progression boost (target is a next-step type for source)
    if (isJourneyNextStep(sourceNode.type, targetNode.type)) {
      boost += BOOST_JOURNEY;
    }
  }

  return base + boost;
}

// --- Resolve intent from target type ---

function resolveIntent(targetType: ContentNodeType): LinkIntent {
  return INTENT_MAP[targetType] ?? 'learn';
}

// --- Score and sort candidates within a bucket ---

function scoredCandidates(
  items: AuthorityMapItem[],
  sourceNode: ContentGraphNode | undefined,
  reason: 'authority' | 'cluster' | 'journey' | 'fallback'
): Array<AuthorityMapItem & { _score: number }> {
  return items
    .map(item => ({ ...item, _score: scoreCandidate(sourceNode, item.slug, reason) }))
    .sort((a, b) => b._score - a._score);
}

export function generateInternalLinks(slug: string, type: ContentNodeType): InternalLink[] {
  const candidates = getLinkCandidates(slug, type);
  const sourceNode = getNodeBySlug(slug);

  const links: InternalLink[] = [];
  const usedSlugs = new Set<string>();

  // Score all candidate buckets
  const scoredAuthority = scoredCandidates(candidates.authority, sourceNode, 'authority');
  const scoredCluster = scoredCandidates(candidates.cluster, sourceNode, 'cluster');
  const scoredJourney = scoredCandidates(candidates.journey, sourceNode, 'journey');

  // --- Authority Link (highest conversion priority) ---
  if (scoredAuthority[0]) {
    links.push({
      sourceSlug: slug,
      targetSlug: scoredAuthority[0].slug,
      targetType: 'service',
      anchor: buildAnchor(scoredAuthority[0].title),
      reason: 'authority',
      priority: 'high',
      score: scoredAuthority[0]._score,
      intent: resolveIntent('service'),
    });
    usedSlugs.add(scoredAuthority[0].slug);
  }

  // --- Cluster Links (topic reinforcement, max 2) ---
  for (const item of scoredCluster) {
    if (links.length >= MAX_LINKS - 1) break; // reserve 1 for journey
    if (usedSlugs.has(item.slug)) continue;
    links.push({
      sourceSlug: slug,
      targetSlug: item.slug,
      targetType: item.nodeType as ContentNodeType,
      anchor: buildAnchor(item.title),
      reason: 'cluster',
      priority: 'medium',
      score: item._score,
      intent: resolveIntent(item.nodeType as ContentNodeType),
    });
    usedSlugs.add(item.slug);
    if (links.filter(l => l.reason === 'cluster').length >= 2) break;
  }

  // --- Journey Link (conversion funnel progression) ---
  for (const item of scoredJourney) {
    if (usedSlugs.has(item.slug)) continue;
    links.push({
      sourceSlug: slug,
      targetSlug: item.slug,
      targetType: item.nodeType as ContentNodeType,
      anchor: buildAnchor(item.title),
      reason: 'journey',
      priority: 'high',
      score: item._score,
      intent: resolveIntent(item.nodeType as ContentNodeType),
    });
    usedSlugs.add(item.slug);
    break;
  }

  // --- Fallback (ensures minimum link density) ---
  if (links.length < MIN_LINKS) {
    const fallback = getRelatedContent(slug, type);
    const extra =
      fallback.services?.slice(0, 1) ??
      fallback.resources?.slice(0, 1) ??
      fallback.blog?.slice(0, 1) ??
      [];
    for (const item of extra) {
      if (usedSlugs.has(item.slug)) continue;
      const fallbackScore = scoreCandidate(sourceNode, item.slug, 'fallback');
      links.push({
        sourceSlug: slug,
        targetSlug: item.slug,
        targetType: item.nodeType as ContentNodeType,
        anchor: buildAnchor(item.title),
        reason: 'fallback',
        priority: 'low',
        score: fallbackScore,
        intent: resolveIntent(item.nodeType as ContentNodeType),
      });
      usedSlugs.add(item.slug);
      break;
    }
  }

  // --- Threshold filter: drop weak links unless below minimum ---
  const strong = links.filter(l => l.score >= SCORE_THRESHOLD);
  const filtered = strong.length >= MIN_LINKS ? strong : links;

  return prioritizeLinks(filtered).slice(0, MAX_LINKS);
}
