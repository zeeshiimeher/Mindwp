/**
 * Content Intelligence Engine
 *
 * Deterministic analysis of the content graph to detect:
 * 1. Content gaps (topic, system, industry)
 * 2. Authority weaknesses (low score, no incoming, broken clusters)
 * 3. Content suggestions (based on gaps + authority + clusters)
 * 4. Priority scoring (business impact, SEO impact, system importance)
 *
 * Output: reports/content-intelligence.json
 *
 * Rules:
 * - Fully deterministic — no AI, no heuristics
 * - Based ONLY on graph + metadata
 * - Uses existing scoreRelationship() — no duplicate scoring
 * - Flat, readable, debuggable
 */

import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { createReportSchema } from '../../lib/reports/reportSchema';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';
import { computeAuthorityScores } from '../../src/lib/authority/authorityScore';
import {
  CANONICAL_INDUSTRIES,
  CANONICAL_SYSTEMS,
  CANONICAL_TOPICS,
} from '../../src/lib/content-graph/canonical';
import { buildGraphIndexes, getContentGraph } from '../../src/lib/content-graph/registry';
import { getResolverIndexes } from '../../src/lib/content-graph/resolverIndexes';
import type { ContentGraphNode, ContentNodeType } from '../../src/lib/content-graph/types';

const root = path.resolve(import.meta.dirname, '../..');
const logger = createLogger({
  label: 'content-intelligence',
  mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
  rootDir: root,
});
const sourceCommand = 'node --import tsx/esm scripts/analyzers/generate-content-intelligence.ts';

// ── Thresholds (locked) ──────────────────────────────────────────────

const MIN_BLOGS_PER_TOPIC = 3;
const MIN_RESOURCES_PER_TOPIC = 1;
const MIN_CASE_STUDIES_PER_INDUSTRY = 1;
const MIN_BLOGS_PER_SYSTEM = 5;
const MIN_RESOURCES_PER_SYSTEM = 2;
const MIN_CASE_STUDIES_PER_SYSTEM = 2;
const AUTHORITY_BOTTOM_PERCENTILE = 0.2;
const MIN_CLUSTER_SIZE = 3;

// ── Types ────────────────────────────────────────────────────────────

interface ContentGap {
  id: string;
  type: 'topic' | 'system' | 'industry';
  key: string;
  missingContent: ('blog' | 'resource' | 'case-study')[];
  priority: 'high' | 'medium' | 'low';
}

interface WeakNode {
  slug: string;
  type: ContentNodeType;
  authority: number;
  issue: 'low-authority' | 'no-links';
}

interface ClusterEntry {
  id: string;
  type: 'topic' | 'system' | 'industry';
  nodeCount: number;
  edgeCount: number;
  avgAuthority: number;
  health: 'healthy' | 'weak';
}

interface ContentSuggestion {
  id: string;
  contentType: 'blog' | 'resource' | 'case-study';
  target: {
    topic?: string;
    system?: string;
    industry?: string;
  };
  reason: string;
  priority: 'high' | 'medium' | 'low';
}

interface ContentIntelligenceReport {
  generatedAt: string;
  summary: {
    totalNodes: number;
    totalEdges: number;
    gaps: number;
    weakNodes: number;
    unhealthyClusters: number;
  };
  gaps: ContentGap[];
  weakNodes: WeakNode[];
  clusters: ClusterEntry[];
  suggestions: ContentSuggestion[];
  uiHints: {
    topGaps: string[];
    weakClusters: string[];
    priorityTopics: string[];
  };
}

// Internal intermediate types for analysis (not in output JSON)
interface RawGap {
  gapType: 'topic' | 'system' | 'industry';
  identifier: string;
  missingContentType: 'blog' | 'resource' | 'case-study';
  priority: 'high' | 'medium' | 'low';
  currentCount: number;
  threshold: number;
}

// ── Helpers ──────────────────────────────────────────────────────────

function slugLabel(slug: string): string {
  return slug.replace(/-/g, ' ');
}

function nodesByType(nodes: ContentGraphNode[], type: string): ContentGraphNode[] {
  return nodes.filter(n => n.type === type);
}

function countByMetadataField(
  nodes: ContentGraphNode[],
  field: 'systems' | 'topics' | 'industries'
): [string, number][] {
  const counts = new Map<string, number>();
  for (const node of nodes) {
    for (const val of node[field] ?? []) {
      counts.set(val, (counts.get(val) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries()).sort((a, b) => b[1] - a[1]);
}

function countEdgesWithinCluster(nodes: ContentGraphNode[]): number {
  const nodeIds = new Set(nodes.map(n => n.id.trim().toLowerCase()));
  let count = 0;
  for (const node of nodes) {
    for (const edge of node.relatesTo ?? []) {
      if (nodeIds.has(edge.id.trim().toLowerCase())) count++;
    }
    for (const edge of node.supports ?? []) {
      if (nodeIds.has(edge.id.trim().toLowerCase())) count++;
    }
    for (const edge of node.validates ?? []) {
      if (nodeIds.has(edge.id.trim().toLowerCase())) count++;
    }
  }
  return count;
}

// ── 1. Content Gap Detection ─────────────────────────────────────────

function detectGaps(
  allNodes: ContentGraphNode[],
  indexes: {
    topics: Map<string, ContentGraphNode[]>;
    systems: Map<string, ContentGraphNode[]>;
    industries: Map<string, ContentGraphNode[]>;
  }
): RawGap[] {
  const gaps: RawGap[] = [];

  // Topic gaps
  for (const topic of CANONICAL_TOPICS) {
    const topicNodes = indexes.topics.get(topic) ?? [];
    const blogs = topicNodes.filter(n => n.type === 'blog');
    const resources = topicNodes.filter(n => n.type === 'resource');

    if (blogs.length < MIN_BLOGS_PER_TOPIC) {
      gaps.push({
        gapType: 'topic',
        identifier: topic,
        missingContentType: 'blog',
        priority: blogs.length === 0 ? 'high' : 'medium',
        currentCount: blogs.length,
        threshold: MIN_BLOGS_PER_TOPIC,
      });
    }

    if (resources.length < MIN_RESOURCES_PER_TOPIC) {
      gaps.push({
        gapType: 'topic',
        identifier: topic,
        missingContentType: 'resource',
        priority: 'high',
        currentCount: resources.length,
        threshold: MIN_RESOURCES_PER_TOPIC,
      });
    }
  }

  // System gaps
  for (const system of CANONICAL_SYSTEMS) {
    const systemNodes = indexes.systems.get(system) ?? [];
    const blogs = systemNodes.filter(n => n.type === 'blog');
    const resources = systemNodes.filter(n => n.type === 'resource');
    const caseStudies = systemNodes.filter(n => n.type === 'case-study');

    if (blogs.length < MIN_BLOGS_PER_SYSTEM) {
      gaps.push({
        gapType: 'system',
        identifier: system,
        missingContentType: 'blog',
        priority: blogs.length === 0 ? 'high' : 'medium',
        currentCount: blogs.length,
        threshold: MIN_BLOGS_PER_SYSTEM,
      });
    }

    if (resources.length < MIN_RESOURCES_PER_SYSTEM) {
      gaps.push({
        gapType: 'system',
        identifier: system,
        missingContentType: 'resource',
        priority: resources.length === 0 ? 'high' : 'medium',
        currentCount: resources.length,
        threshold: MIN_RESOURCES_PER_SYSTEM,
      });
    }

    if (caseStudies.length < MIN_CASE_STUDIES_PER_SYSTEM) {
      gaps.push({
        gapType: 'system',
        identifier: system,
        missingContentType: 'case-study',
        priority: 'high',
        currentCount: caseStudies.length,
        threshold: MIN_CASE_STUDIES_PER_SYSTEM,
      });
    }
  }

  // Industry gaps
  for (const industry of CANONICAL_INDUSTRIES) {
    const industryNodes = allNodes.filter(
      n => (n.type === 'industry-category' || n.type === 'industry-detail') && n.slug === industry
    );
    if (industryNodes.length === 0) continue;

    const industryTopics = new Set(industryNodes.flatMap(n => n.topics ?? []));
    const caseStudies = allNodes.filter(
      n =>
        n.type === 'case-study' &&
        ((n.industries ?? []).includes(industry) ||
          (n.topics ?? []).some(t => industryTopics.has(t)))
    );

    if (caseStudies.length < MIN_CASE_STUDIES_PER_INDUSTRY) {
      gaps.push({
        gapType: 'industry',
        identifier: industry,
        missingContentType: 'case-study',
        priority: caseStudies.length === 0 ? 'high' : 'medium',
        currentCount: caseStudies.length,
        threshold: MIN_CASE_STUDIES_PER_INDUSTRY,
      });
    }
  }

  return gaps;
}

// ── 2. Authority Weakness Detection ──────────────────────────────────

function detectAuthorityWeaknesses(
  allNodes: ContentGraphNode[],
  scores: Record<string, number>,
  reverseRelationIndex: Map<string, ContentGraphNode[]>
): WeakNode[] {
  const weaknesses: WeakNode[] = [];

  // Find authority threshold (bottom 20%)
  const allScores = Object.values(scores).sort((a, b) => a - b);
  const thresholdIndex = Math.floor(allScores.length * AUTHORITY_BOTTOM_PERCENTILE);
  const authorityThreshold = allScores[thresholdIndex] ?? 0;

  for (const node of allNodes) {
    const score = scores[node.slug] ?? 0;
    const nodeId = node.id.trim().toLowerCase();
    const incoming = reverseRelationIndex.get(nodeId) ?? [];

    // Low authority
    if (score <= authorityThreshold && score > 0) {
      weaknesses.push({
        slug: node.slug,
        type: node.type,
        authority: Math.round(score * 100) / 100,
        issue: 'low-authority',
      });
    }

    // No incoming edges (orphan nodes)
    if (incoming.length === 0) {
      const existing = weaknesses.find(w => w.slug === node.slug);
      if (!existing) {
        weaknesses.push({
          slug: node.slug,
          type: node.type,
          authority: Math.round(score * 100) / 100,
          issue: 'no-links',
        });
      }
    }
  }

  return weaknesses;
}

// ── 3. Cluster Health ────────────────────────────────────────────────

function analyzeClusterHealth(
  indexes: {
    topics: Map<string, ContentGraphNode[]>;
    systems: Map<string, ContentGraphNode[]>;
    industries: Map<string, ContentGraphNode[]>;
  },
  scores: Record<string, number>
): ClusterEntry[] {
  const clusters: ClusterEntry[] = [];

  const analyzeSet = (
    clusterType: 'topic' | 'system' | 'industry',
    index: Map<string, ContentGraphNode[]>
  ) => {
    for (const [identifier, nodes] of index.entries()) {
      const edgeCount = countEdgesWithinCluster(nodes);
      const nodeScores = nodes.map(n => scores[n.slug] ?? 0);
      const avgAuthority =
        nodeScores.length > 0
          ? Math.round((nodeScores.reduce((a, b) => a + b, 0) / nodeScores.length) * 100) / 100
          : 0;

      const isHealthy =
        nodes.length >= MIN_CLUSTER_SIZE &&
        (edgeCount > 0 || nodes.length <= 1) &&
        avgAuthority > 0;

      clusters.push({
        id: `${clusterType}:${identifier}`,
        type: clusterType,
        nodeCount: nodes.length,
        edgeCount,
        avgAuthority,
        health: isHealthy ? 'healthy' : 'weak',
      });
    }
  };

  analyzeSet('topic', indexes.topics);
  analyzeSet('system', indexes.systems);
  analyzeSet('industry', indexes.industries);

  return clusters;
}

// ── 4. Content Suggestion Engine ─────────────────────────────────────

function generateSuggestions(
  rawGaps: RawGap[],
  allNodes: ContentGraphNode[],
  clusters: ClusterEntry[]
): ContentSuggestion[] {
  const suggestions: ContentSuggestion[] = [];
  let idCounter = 1;

  for (const gap of rawGaps) {
    const { gapType, identifier, missingContentType } = gap;

    const target: ContentSuggestion['target'] = {};
    let reason = '';

    if (gapType === 'topic') {
      target.topic = identifier;
      const topicNodes = allNodes.filter(n => (n.topics ?? []).includes(identifier));
      const systemRanks = countByMetadataField(topicNodes, 'systems');
      if (systemRanks[0]) target.system = systemRanks[0][0];
      const industryRanks = countByMetadataField(topicNodes, 'industries');
      const coveredIndustries = new Set(industryRanks.map(([ind]) => ind));
      const uncoveredIndustry = CANONICAL_INDUSTRIES.find(ind => !coveredIndustries.has(ind));
      if (uncoveredIndustry) target.industry = uncoveredIndustry;
      reason = `Topic "${slugLabel(identifier)}" has ${gap.currentCount} ${missingContentType}s (threshold: ${gap.threshold}).`;
    }

    if (gapType === 'system') {
      target.system = identifier;
      const systemNodes = allNodes.filter(n => (n.systems ?? []).includes(identifier));
      const topicRanks = countByMetadataField(systemNodes, 'topics');
      if (topicRanks[0]) target.topic = topicRanks[0][0];
      reason = `System "${slugLabel(identifier)}" has ${gap.currentCount} ${missingContentType}s (threshold: ${gap.threshold}).`;
    }

    if (gapType === 'industry') {
      target.industry = identifier;
      const industryNodes = allNodes.filter(n => (n.industries ?? []).includes(identifier));
      const systemRanks = countByMetadataField(industryNodes, 'systems');
      if (systemRanks[0]) target.system = systemRanks[0][0];
      reason = `Industry "${slugLabel(identifier)}" has ${gap.currentCount} case studies (threshold: ${gap.threshold}).`;
    }

    // Priority: case-study gaps = high, system gaps = high, zero content = high, rest = medium/low
    const priority: 'high' | 'medium' | 'low' =
      gap.missingContentType === 'case-study' || gap.gapType === 'system' || gap.currentCount === 0
        ? 'high'
        : gap.currentCount < gap.threshold
          ? 'medium'
          : 'low';

    // Boost if cluster is weak
    const cluster = clusters.find(c => c.type === gapType && c.id === `${gapType}:${identifier}`);
    const finalPriority: 'high' | 'medium' | 'low' =
      cluster && cluster.health === 'weak' && priority !== 'high' ? 'high' : priority;

    suggestions.push({
      id: `sug-${String(idCounter++).padStart(3, '0')}`,
      contentType: missingContentType,
      target,
      reason,
      priority: finalPriority,
    });
  }

  // Sort: high first, then medium, then low
  const ORDER: Record<string, number> = { high: 0, medium: 1, low: 2 };
  suggestions.sort((a, b) => (ORDER[a.priority] ?? 2) - (ORDER[b.priority] ?? 2));

  return suggestions;
}

// ── Main ─────────────────────────────────────────────────────────────

async function main() {
  await ensureGraphInitialized();

  const graphRecord = getContentGraph();
  const allNodes = Object.values(graphRecord);
  const indexes = buildGraphIndexes(allNodes);
  const { reverseRelationIndex } = getResolverIndexes();
  const scores = computeAuthorityScores();

  // 1. Detect raw gaps
  const rawGaps = detectGaps(allNodes, indexes);

  // 2. Detect authority weaknesses
  const weakNodes = detectAuthorityWeaknesses(allNodes, scores, reverseRelationIndex);

  // 3. Analyze cluster health
  const clusters = analyzeClusterHealth(indexes, scores);

  // 4. Generate suggestions
  const suggestions = generateSuggestions(rawGaps, allNodes, clusters);

  // 5. Consolidate raw gaps into ContentGap format (group by key)
  const gapMap = new Map<string, ContentGap>();
  let gapIdCounter = 1;
  for (const raw of rawGaps) {
    const mapKey = `${raw.gapType}:${raw.identifier}`;
    const existing = gapMap.get(mapKey);
    if (existing) {
      if (!existing.missingContent.includes(raw.missingContentType)) {
        existing.missingContent.push(raw.missingContentType);
      }
      // Promote priority if any sub-gap is higher
      if (raw.priority === 'high') existing.priority = 'high';
      else if (raw.priority === 'medium' && existing.priority === 'low')
        existing.priority = 'medium';
    } else {
      gapMap.set(mapKey, {
        id: `gap-${String(gapIdCounter++).padStart(3, '0')}`,
        type: raw.gapType,
        key: raw.identifier,
        missingContent: [raw.missingContentType],
        priority: raw.priority,
      });
    }
  }
  const gaps = Array.from(gapMap.values());

  // 6. Count total edges
  let totalEdges = 0;
  for (const node of allNodes) {
    totalEdges += (node.relatesTo ?? []).length;
    totalEdges += (node.supports ?? []).length;
    totalEdges += (node.validates ?? []).length;
  }

  // 7. UI hints
  const topGaps = gaps
    .filter(g => g.priority === 'high')
    .slice(0, 5)
    .map(g => g.key);

  const weakClusters = clusters
    .filter(c => c.health === 'weak')
    .sort((a, b) => a.avgAuthority - b.avgAuthority)
    .slice(0, 5)
    .map(c => c.id);

  // Priority topics: topics with the most missing content types
  const priorityTopics = gaps
    .filter(g => g.type === 'topic')
    .sort((a, b) => b.missingContent.length - a.missingContent.length)
    .slice(0, 5)
    .map(g => g.key);

  const unhealthyClusters = clusters.filter(c => c.health === 'weak').length;

  const reportData: ContentIntelligenceReport = {
    generatedAt: new Date().toISOString().split('T')[0],
    summary: {
      totalNodes: allNodes.length,
      totalEdges,
      gaps: gaps.length,
      weakNodes: weakNodes.length,
      unhealthyClusters,
    },
    gaps,
    weakNodes,
    clusters,
    suggestions,
    uiHints: {
      topGaps,
      weakClusters,
      priorityTopics,
    },
  };

  // Write output
  const reportsDir = path.join(root, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });

  const outPath = path.join(reportsDir, 'content-intelligence.json');
  const report = createReportSchema({
    name: 'content-intelligence',
    status:
      reportData.summary.gaps > 0 ||
      reportData.summary.weakNodes > 0 ||
      reportData.summary.unhealthyClusters > 0
        ? 'WARN'
        : 'PASS',
    summary: {
      total: reportData.summary.totalNodes,
      passed: Math.max(
        reportData.summary.totalNodes - reportData.summary.gaps - reportData.summary.weakNodes,
        0
      ),
      failed: 0,
      warnings:
        reportData.summary.gaps +
        reportData.summary.weakNodes +
        reportData.summary.unhealthyClusters,
    },
    issues: [...reportData.gaps, ...reportData.weakNodes],
    data: reportData,
    sourceCommand,
  });
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n');

  logger.printTotals({
    nodes: reportData.summary.totalNodes,
    edges: reportData.summary.totalEdges,
    gaps: reportData.summary.gaps,
    weakNodes: reportData.summary.weakNodes,
    unhealthyClusters: reportData.summary.unhealthyClusters,
    suggestions: suggestions.length,
  });
  logger.printSummary(`report -> ${logger.relativePath(outPath)}`);
  for (const suggestion of suggestions.slice(0, 10)) {
    logger.printNodeLine({
      scope: suggestion.priority,
      slug: suggestion.contentType,
      label: Object.values(suggestion.target).filter(Boolean).join(' + '),
    });
  }
}

main().catch(err => {
  logger.error(
    `Content intelligence generation failed: ${err instanceof Error ? err.message : String(err)}`
  );
  process.exit(1);
});
