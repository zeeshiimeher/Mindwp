/**
 * Dev-only graph inspection tools.
 * Gated behind NODE_ENV === 'development' — zero production impact.
 */

import { getInitMetrics } from '@/domains/init/metrics';
import { computeAuthorityScores } from '@/lib/authority/authorityScore';
import {
  getContentGraph,
  getNodeBySlug,
  getStructuredContentGraph,
} from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';

const isDev = process.env.NODE_ENV === 'development';

function guardDev(label: string): boolean {
  if (!isDev) {
    // eslint-disable-next-line no-console
    console.warn(`[graph-inspector] ${label} is dev-only. Skipping.`);
    return false;
  }
  return true;
}

// ─── Graph Inspector ─────────────────────────────────────────────────────────

export function inspectGraph(): void {
  if (!guardDev('inspectGraph')) return;

  const graph = getStructuredContentGraph();
  const flat = getContentGraph();
  const nodes = graph.nodes;

  const typeCounts: Record<string, number> = {};
  let totalEdges = 0;
  const orphans: string[] = [];

  for (const node of nodes) {
    typeCounts[node.type] = (typeCounts[node.type] ?? 0) + 1;

    const edgeCount =
      (node.relatesTo?.length ?? 0) + (node.supports?.length ?? 0) + (node.validates?.length ?? 0);

    totalEdges += edgeCount;

    if (edgeCount === 0) {
      orphans.push(`${node.type}:${node.slug}`);
    }
  }

  const scores = computeAuthorityScores();
  const topAuthority = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)
    .map(([slug, score]) => {
      const node = flat[slug] ?? nodes.find(n => n.slug === slug);
      return { slug, type: node?.type ?? 'unknown', score: Math.round(score * 100) / 100 };
    });

  const initMetrics = getInitMetrics();

  // eslint-disable-next-line no-console
  console.log('\n╔══════════════════════════════════════════════╗');
  // eslint-disable-next-line no-console
  console.log('║          GRAPH INSPECTOR REPORT              ║');
  // eslint-disable-next-line no-console
  console.log('╠══════════════════════════════════════════════╣');
  // eslint-disable-next-line no-console
  console.log(`║ Total nodes:  ${String(nodes.length).padStart(6)}`);
  // eslint-disable-next-line no-console
  console.log(`║ Total edges:  ${String(totalEdges).padStart(6)}`);
  // eslint-disable-next-line no-console
  console.log(`║ Orphan nodes: ${String(orphans.length).padStart(6)}`);
  // eslint-disable-next-line no-console
  console.log('║');
  // eslint-disable-next-line no-console
  console.log('║ By type:');
  for (const [type, count] of Object.entries(typeCounts).sort()) {
    // eslint-disable-next-line no-console
    console.log(`║   ${type.padEnd(20)} ${String(count).padStart(4)}`);
  }
  // eslint-disable-next-line no-console
  console.log('║');
  // eslint-disable-next-line no-console
  console.log('║ Top 10 authority nodes:');
  for (const entry of topAuthority) {
    // eslint-disable-next-line no-console
    console.log(`║   ${entry.slug.padEnd(35)} ${String(entry.score).padStart(8)}  (${entry.type})`);
  }

  if (initMetrics) {
    // eslint-disable-next-line no-console
    console.log('║');
    // eslint-disable-next-line no-console
    console.log('║ Init timing:');
    // eslint-disable-next-line no-console
    console.log(`║   Content graph:    ${initMetrics.contentGraphTime.toFixed(2)} ms`);
    // eslint-disable-next-line no-console
    console.log(`║   Resolver indexes: ${initMetrics.resolverIndexesTime.toFixed(2)} ms`);
    // eslint-disable-next-line no-console
    console.log(`║   Resolver creation:${initMetrics.resolverCreationTime.toFixed(2)} ms`);
    // eslint-disable-next-line no-console
    console.log(`║   Total:            ${initMetrics.totalTime.toFixed(2)} ms`);
  }

  if (orphans.length > 0) {
    // eslint-disable-next-line no-console
    console.log('║');
    // eslint-disable-next-line no-console
    console.log('║ Orphans (no edges):');
    for (const o of orphans.slice(0, 20)) {
      // eslint-disable-next-line no-console
      console.log(`║   ${o}`);
    }
    if (orphans.length > 20) {
      // eslint-disable-next-line no-console
      console.log(`║   ... and ${orphans.length - 20} more`);
    }
  }

  // eslint-disable-next-line no-console
  console.log('╚══════════════════════════════════════════════╝\n');
}

// ─── Node Explorer ───────────────────────────────────────────────────────────

export interface NodeInspection {
  slug: string;
  type: ContentNodeType;
  path: string;
  industries: string[];
  systems: string[];
  topics: string[];
  relatesTo: string[];
  supports: string[];
  validates: string[];
  authorityScore: number;
}

export function inspectNode(slug: string): NodeInspection | null {
  if (!guardDev('inspectNode')) return null;

  const node = getNodeBySlug(slug);
  if (!node) return null;

  const scores = computeAuthorityScores();

  return {
    slug: node.slug,
    type: node.type,
    path: node.path,
    industries: node.industries ?? [],
    systems: node.systems ?? [],
    topics: node.topics ?? [],
    relatesTo: (node.relatesTo ?? []).map(e => e.id),
    supports: (node.supports ?? []).map(e => e.id),
    validates: (node.validates ?? []).map(e => e.id),
    authorityScore: scores[node.slug] ?? 0,
  };
}

// ─── Relationship Visualizer ─────────────────────────────────────────────────

export function visualizeRelationships(slug: string): void {
  if (!guardDev('visualizeRelationships')) return;

  const inspection = inspectNode(slug);
  if (!inspection) {
    // eslint-disable-next-line no-console
    console.log(`[graph-inspector] Node not found: ${slug}`);
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`\n── ${inspection.type}: ${inspection.slug} ──`);
  // eslint-disable-next-line no-console
  console.log(`   Path:      ${inspection.path}`);
  // eslint-disable-next-line no-console
  console.log(`   Authority: ${Math.round(inspection.authorityScore * 100) / 100}`);
  // eslint-disable-next-line no-console
  console.log(`   Industries: ${inspection.industries.join(', ') || '(none)'}`);
  // eslint-disable-next-line no-console
  console.log(`   Systems:    ${inspection.systems.join(', ') || '(none)'}`);
  // eslint-disable-next-line no-console
  console.log(`   Topics:     ${inspection.topics.join(', ') || '(none)'}`);

  if (inspection.relatesTo.length > 0) {
    // eslint-disable-next-line no-console
    console.log(`   relatesTo → ${inspection.relatesTo.join(', ')}`);
  }
  if (inspection.supports.length > 0) {
    // eslint-disable-next-line no-console
    console.log(`   supports  → ${inspection.supports.join(', ')}`);
  }
  if (inspection.validates.length > 0) {
    // eslint-disable-next-line no-console
    console.log(`   validates → ${inspection.validates.join(', ')}`);
  }
  // eslint-disable-next-line no-console
  console.log('');
}
