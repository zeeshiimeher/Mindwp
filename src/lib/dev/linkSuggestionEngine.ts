/**
 * Link Suggestion Engine
 *
 * Suggests missing internal links for a given page based on
 * graph relationships: shared industry, topic, system, and
 * edge-type authority.
 *
 * Returns suggestions only — does NOT auto-inject links.
 */

import { getContentGraph, getNodeBySlug } from '@/lib/content-graph/registry';
import type { ContentGraphNode, ContentNodeType } from '@/lib/content-graph/types';
import { generateInternalLinks } from '@/lib/internal-linking/engine';

// --- Types ---

export interface LinkSuggestion {
  targetSlug: string;
  targetPath: string;
  targetType: ContentNodeType;
  reason: string;
  score: number;
  expectedImprovement: number;
  autoFixCandidate: boolean;
}

export interface PageSuggestions {
  sourceSlug: string;
  sourceType: ContentNodeType;
  suggestedLinks: LinkSuggestion[];
}

// --- Scoring constants ---

const RELATES_TO_SCORE = 300;
const SUPPORTS_SCORE = 200;
const INDUSTRY_MATCH_SCORE = 60;
const TOPIC_MATCH_SCORE = 30;
const SYSTEM_MATCH_SCORE = 40;
const MIN_SUGGESTION_SCORE = 200;

// --- Compute overlap count ---

function overlapCount(a?: string[], b?: string[]): number {
  if (!a || !b) return 0;
  return a.filter(v => b.includes(v)).length;
}

// --- Generate suggestions for a page ---

export function suggestLinksForPage(slug: string, type: ContentNodeType): PageSuggestions {
  const sourceNode = getNodeBySlug(slug);
  if (!sourceNode) return { sourceSlug: slug, sourceType: type, suggestedLinks: [] };

  // Get currently linked slugs to exclude them
  const existingLinks = generateInternalLinks(slug, type);
  const linkedSlugs = new Set(existingLinks.map(l => l.targetSlug));
  linkedSlugs.add(slug); // exclude self

  const graph = getContentGraph();
  const candidates: LinkSuggestion[] = [];

  for (const node of Object.values(graph)) {
    if (linkedSlugs.has(node.slug)) continue;

    const suggestion = scoreCandidate(sourceNode, node);
    if (suggestion && suggestion.score >= MIN_SUGGESTION_SCORE) {
      candidates.push(suggestion);
    }
  }

  // Sort by score descending, limit to top 5
  candidates.sort((a, b) => b.score - a.score);

  return {
    sourceSlug: slug,
    sourceType: type,
    suggestedLinks: candidates.slice(0, 5),
  };
}

// --- Score a candidate node ---

function scoreCandidate(source: ContentGraphNode, target: ContentGraphNode): LinkSuggestion | null {
  let score = 0;
  const reasons: string[] = [];

  // Edge-type authority: check if source has a direct edge to target
  if (source.relatesTo?.some(e => e.id.includes(target.slug))) {
    score += RELATES_TO_SCORE;
    reasons.push('relatesTo edge');
  } else if (source.supports?.some(e => e.id.includes(target.slug))) {
    score += SUPPORTS_SCORE;
    reasons.push('supports edge');
  }

  // Industry overlap
  const indOverlap = overlapCount(source.industries, target.industries);
  if (indOverlap > 0) {
    score += INDUSTRY_MATCH_SCORE * indOverlap;
    reasons.push(`industry match (${indOverlap})`);
  }

  // Topic overlap
  const topicOverlap = overlapCount(source.topics, target.topics);
  if (topicOverlap > 0) {
    score += TOPIC_MATCH_SCORE * topicOverlap;
    reasons.push(`topic match (${topicOverlap})`);
  }

  // System overlap
  const sysOverlap = overlapCount(source.systems, target.systems);
  if (sysOverlap > 0) {
    score += SYSTEM_MATCH_SCORE * sysOverlap;
    reasons.push(`system match (${sysOverlap})`);
  }

  if (score === 0) return null;

  // Auto-fix: candidates with a direct edge and score >= 300 are safe auto-fixes
  const autoFixCandidate = score >= 300 && reasons.some(r => r.includes('edge'));

  // Expected score improvement: estimate based on adding this link
  const expectedImprovement = Math.round(score * 0.3);

  return {
    targetSlug: target.slug,
    targetPath: target.path,
    targetType: target.type,
    reason: reasons.join(', '),
    score,
    expectedImprovement,
    autoFixCandidate,
  };
}

// --- Suggest links for all weak pages ---

export function suggestLinksForWeakPages(): PageSuggestions[] {
  const graph = getContentGraph();
  const results: PageSuggestions[] = [];

  for (const node of Object.values(graph)) {
    const links = generateInternalLinks(node.slug, node.type);
    // Only suggest for pages with <2 links or low avg score
    const avgScore = links.length > 0 ? links.reduce((s, l) => s + l.score, 0) / links.length : 0;

    if (links.length < 2 || avgScore < 180) {
      const suggestions = suggestLinksForPage(node.slug, node.type);
      if (suggestions.suggestedLinks.length > 0) {
        results.push(suggestions);
      }
    }
  }

  return results;
}
