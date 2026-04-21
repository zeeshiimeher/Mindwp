import { getContentPolicy } from '../../../config/contentPolicy';
import { getResolverIndexes } from '../content-graph/resolverIndexes';
import { scoreRelationship } from '../content-graph/scoring';
import type { ContentGraphNode } from '../content-graph/types';

// ─── Helpers ─────────────────────────────────────────────────────────────────

const normalize = (v: string) => v.trim().toLowerCase();

function countDerivedEdges(node: ContentGraphNode): number {
  let count = 0;
  for (const edge of node.relatesTo ?? []) {
    if (edge.source === 'derived') count++;
  }
  for (const edge of node.supports ?? []) {
    if (edge.source === 'derived') count++;
  }
  for (const edge of node.validates ?? []) {
    if (edge.source === 'derived') count++;
  }
  return count;
}

function resolveTargets(
  node: ContentGraphNode,
  nodeIdIndex: Map<string, ContentGraphNode>
): ContentGraphNode[] {
  const targets: ContentGraphNode[] = [];
  const seen = new Set<string>();

  const collect = (edges: { id: string }[] | undefined) => {
    if (!edges) return;
    for (const edge of edges) {
      const target = nodeIdIndex.get(normalize(edge.id));
      if (target && !seen.has(target.slug)) {
        seen.add(target.slug);
        targets.push(target);
      }
    }
  };

  collect(node.relatesTo);
  collect(node.supports);
  collect(node.validates);
  return targets;
}

// ─── Core ────────────────────────────────────────────────────────────────────

let _cache: Record<string, number> | null = null;

export function computeAuthorityScores(): Record<string, number> {
  if (_cache) return _cache;

  const { graphNodes, nodeIdIndex, reverseRelationIndex } = getResolverIndexes();
  const scores: Record<string, number> = {};

  for (const node of graphNodes) {
    // 1. Base score = count of valid derived edges
    const baseScore = countDerivedEdges(node);

    // 2. Incoming authority = sum of scores from nodes linking TO this node
    let incomingAuthority = 0;
    const incomingNodes = reverseRelationIndex.get(normalize(node.id)) ?? [];
    for (const source of incomingNodes) {
      if (source.slug === node.slug) continue;
      incomingAuthority += scoreRelationship(source, node);
    }

    // 3. Outgoing strength = sum of scores to targets this node links to
    let outgoingStrength = 0;
    const targets = resolveTargets(node, nodeIdIndex);
    for (const target of targets) {
      if (target.slug === node.slug) continue;
      outgoingStrength += scoreRelationship(node, target);
    }

    // 4. Context boost based on node type
    const contextBoost = getContentPolicy(node.type).authorityWeight;

    // Final formula
    scores[node.slug] = baseScore + incomingAuthority * 1.5 + outgoingStrength + contextBoost;
  }

  _cache = scores;

  return scores;
}

// ─── Sort Helper ─────────────────────────────────────────────────────────────

export function sortByAuthority<T extends { slug: string }>(items: T[]): T[] {
  const scores = computeAuthorityScores();
  return [...items].sort((a, b) => (scores[b.slug] ?? 0) - (scores[a.slug] ?? 0));
}
