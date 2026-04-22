/**
 * Derived Relationship Engine
 *
 * Derives relationships for ALL node types from metadata overlap.
 * Uses the canonical scoring function from ./scoring.
 * No limits at the graph layer — limits exist only at the resolver layer.
 */

import { env } from '@/env';

import { resolveLoggingMode } from '../../../config/loggingConfig.mjs';
import { createLogger } from '../../../lib/logger/index.mjs';

import { hasOverlap, scoreRelationship } from './scoring';
import type { AttributedEdge, ContentGraphNode, ContentNodeType } from './types';

const logger = createLogger({
  label: 'derived-relationships',
  mode: resolveLoggingMode(process.argv.slice(2), env),
  rootDir: process.cwd(),
});

// ─── Types ───────────────────────────────────────────────────────────────────

export interface DerivedRelationships {
  relatesTo: string[];
  supports: string[];
  validates: string[];
}

interface ScoredEdge {
  id: string;
  score: number;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Extract plain IDs from attributed edges. */
export function edgeIds(edges: AttributedEdge[] | undefined): string[] {
  return (edges ?? []).map(e => e.id);
}

// ─── Edge Type Rules ─────────────────────────────────────────────────────────

type EdgeType = 'relatesTo' | 'supports' | 'validates';

/**
 * Relationship rules: source type → target type → edge type.
 * If a pair is not in this map, no edge is created.
 */
const EDGE_RULES: Partial<Record<`${ContentNodeType}→${ContentNodeType}`, EdgeType>> = {
  'service→service': 'relatesTo',
  'service→resource': 'supports',
  'service→feature': 'supports',
  'service→industry-detail': 'supports',
  'service→industry-category': 'supports',

  'resource→resource': 'relatesTo',
  'resource→service': 'validates',
  'resource→feature': 'validates',
  'resource→industry-detail': 'supports',
  'resource→industry-category': 'supports',

  'blog→blog': 'relatesTo',
  'blog→service': 'validates',
  'blog→feature': 'validates',
  'blog→resource': 'supports',
  'blog→industry-detail': 'supports',
  'blog→industry-category': 'supports',

  'case-study→case-study': 'relatesTo',
  'case-study→service': 'validates',
  'case-study→feature': 'validates',
  'case-study→industry-detail': 'supports',
  'case-study→industry-category': 'supports',
  'case-study→resource': 'supports',

  'feature→service': 'supports',
};

function getEdgeType(sourceType: ContentNodeType, targetType: ContentNodeType): EdgeType | null {
  return EDGE_RULES[`${sourceType}→${targetType}`] ?? null;
}

// ─── Core Derivation ─────────────────────────────────────────────────────────

/**
 * Derive relationships for any node based on metadata overlap
 * with all other nodes in the graph.
 *
 * Edge gate: only create an edge if system overlap ≥ 1.
 * No limits — all qualifying edges are returned, sorted by score.
 */
export function deriveRelationships(
  sourceNode: ContentGraphNode,
  allNodes: ContentGraphNode[]
): DerivedRelationships {
  const relatesToEdges: ScoredEdge[] = [];
  const supportsEdges: ScoredEdge[] = [];
  const validatesEdges: ScoredEdge[] = [];

  for (const targetNode of allNodes) {
    if (targetNode.id === sourceNode.id) continue;

    // Edge gate: must share at least one system
    if (!hasOverlap(sourceNode.systems, targetNode.systems)) continue;

    const edgeType = getEdgeType(sourceNode.type, targetNode.type);
    if (!edgeType) continue;

    // Validation edges are proof links. Same-system overlap is not enough;
    // the source content must also validate the target through a shared topic.
    if (edgeType === 'validates' && !hasOverlap(sourceNode.topics, targetNode.topics)) continue;

    const score = scoreRelationship(sourceNode, targetNode);
    if (score === 0) continue;

    const edge: ScoredEdge = { id: targetNode.id, score };

    switch (edgeType) {
      case 'relatesTo':
        relatesToEdges.push(edge);
        break;
      case 'supports':
        supportsEdges.push(edge);
        break;
      case 'validates':
        validatesEdges.push(edge);
        break;
    }
  }

  return {
    relatesTo: sortedUniqueIds(relatesToEdges),
    supports: sortedUniqueIds(supportsEdges),
    validates: sortedUniqueIds(validatesEdges),
  };
}

/** Deduplicate and sort edges by score descending, return IDs. */
function sortedUniqueIds(edges: ScoredEdge[]): string[] {
  const seen = new Set<string>();
  const unique: ScoredEdge[] = [];
  for (const edge of edges) {
    if (!seen.has(edge.id)) {
      seen.add(edge.id);
      unique.push(edge);
    }
  }
  return unique.sort((a, b) => b.score - a.score).map(e => e.id);
}

// ─── Apply ───────────────────────────────────────────────────────────────────

/**
 * Apply derived relationships to a node.
 * All edges are attributed as { id, source: 'derived' }.
 */
export function applyDerivedRelationships(
  node: ContentGraphNode,
  derived: DerivedRelationships
): ContentGraphNode {
  if (derived.relatesTo.length > 0) {
    node.relatesTo = derived.relatesTo.map(id => ({ id, source: 'derived' as const }));
  }
  if (derived.supports.length > 0) {
    node.supports = derived.supports.map(id => ({ id, source: 'derived' as const }));
  }
  if (derived.validates.length > 0) {
    node.validates = derived.validates.map(id => ({ id, source: 'derived' as const }));
  }
  return node;
}

// ─── Debug Logging ───────────────────────────────────────────────────────────

export interface DerivedEdgeSummary {
  nodeId: string;
  slug: string;
  type: ContentNodeType;
  relatesTo: number;
  supports: number;
  validates: number;
  total: number;
}

/**
 * Log derived edge counts for all nodes in the graph.
 */
export function logDerivedEdgeSummary(allNodes: ContentGraphNode[]): DerivedEdgeSummary[] {
  const summaries: DerivedEdgeSummary[] = [];

  for (const node of allNodes) {
    const derived = deriveRelationships(node, allNodes);
    const total = derived.relatesTo.length + derived.supports.length + derived.validates.length;

    if (total === 0) continue;

    summaries.push({
      nodeId: node.id,
      slug: node.slug,
      type: node.type,
      relatesTo: derived.relatesTo.length,
      supports: derived.supports.length,
      validates: derived.validates.length,
      total,
    });
  }

  const totalAll = summaries.reduce((sum, s) => sum + s.total, 0);
  const nodesWithEdges = summaries.length;

  if (!logger.isDebug()) {
    return summaries;
  }

  logger.printTotals({ nodesWithEdges, totalEdges: totalAll });

  for (const summary of summaries) {
    logger.printNodeLine({
      scope: summary.type,
      slug: summary.slug,
      relates: summary.relatesTo,
      supports: summary.supports,
      validates: summary.validates,
      total: summary.total,
    });
  }

  return summaries;
}
