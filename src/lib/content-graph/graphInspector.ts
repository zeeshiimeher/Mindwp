/**
 * Dev-only graph inspection tools.
 * Gated behind NODE_ENV === 'development' — zero production impact.
 */

/* eslint-disable no-console */

import { getInitMetrics } from '@/domains/init/metrics';
import { env } from '@/env';
import { computeAuthorityScores } from '@/lib/authority/authorityScore';
import {
  getContentGraph,
  getNodeBySlug,
  getStructuredContentGraph,
} from '@/lib/content-graph/registry';
import type { ContentNodeType } from '@/lib/content-graph/types';

const isDev = env.NODE_ENV === 'development';

function guardDev(label: string): boolean {
  if (!isDev) {
    console.warn(`[graph-inspector] ${label} is dev-only. Skipping.`);
    return false;
  }
  return true;
}

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

  console.log('\n╔══════════════════════════════════════════════╗');
  console.log('║          GRAPH INSPECTOR REPORT              ║');
  console.log('╠══════════════════════════════════════════════╣');
  console.log(`║ Total nodes:  ${String(nodes.length).padStart(6)}`);
  console.log(`║ Total edges:  ${String(totalEdges).padStart(6)}`);
  console.log(`║ Orphan nodes: ${String(orphans.length).padStart(6)}`);
  console.log('║');
  console.log('║ By type:');
  for (const [type, count] of Object.entries(typeCounts).sort()) {
    console.log(`║   ${type.padEnd(20)} ${String(count).padStart(4)}`);
  }
  console.log('║');
  console.log('║ Top 10 authority nodes:');
  for (const entry of topAuthority) {
    console.log(`║   ${entry.slug.padEnd(35)} ${String(entry.score).padStart(8)}  (${entry.type})`);
  }

  if (initMetrics) {
    console.log('║');
    console.log('║ Init timing:');
    console.log(`║   Content graph:    ${initMetrics.contentGraphTime.toFixed(2)} ms`);
    console.log(`║   Resolver indexes: ${initMetrics.resolverIndexesTime.toFixed(2)} ms`);
    console.log(`║   Resolver creation:${initMetrics.resolverCreationTime.toFixed(2)} ms`);
    console.log(`║   Total:            ${initMetrics.totalTime.toFixed(2)} ms`);
  }

  if (orphans.length > 0) {
    console.log('║');
    console.log('║ Orphans (no edges):');
    for (const orphan of orphans.slice(0, 20)) {
      console.log(`║   ${orphan}`);
    }
    if (orphans.length > 20) {
      console.log(`║   ... and ${orphans.length - 20} more`);
    }
  }

  console.log('╚══════════════════════════════════════════════╝\n');
}

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
    relatesTo: (node.relatesTo ?? []).map(edge => edge.id),
    supports: (node.supports ?? []).map(edge => edge.id),
    validates: (node.validates ?? []).map(edge => edge.id),
    authorityScore: scores[node.slug] ?? 0,
  };
}

export function visualizeRelationships(slug: string): void {
  if (!guardDev('visualizeRelationships')) return;

  const inspection = inspectNode(slug);
  if (!inspection) {
    console.log(`[graph-inspector] Node not found: ${slug}`);
    return;
  }

  console.log(`\n── ${inspection.type}: ${inspection.slug} ──`);
  console.log(`   Path:      ${inspection.path}`);
  console.log(`   Authority: ${Math.round(inspection.authorityScore * 100) / 100}`);
  console.log(`   Industries: ${inspection.industries.join(', ') || '(none)'}`);
  console.log(`   Systems:    ${inspection.systems.join(', ') || '(none)'}`);
  console.log(`   Topics:     ${inspection.topics.join(', ') || '(none)'}`);

  if (inspection.relatesTo.length > 0) {
    console.log(`   relatesTo → ${inspection.relatesTo.join(', ')}`);
  }
  if (inspection.supports.length > 0) {
    console.log(`   supports  → ${inspection.supports.join(', ')}`);
  }
  if (inspection.validates.length > 0) {
    console.log(`   validates → ${inspection.validates.join(', ')}`);
  }
  console.log('');
}
