import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { createLogger } from '../../lib/logger/index.mjs';
import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';

import {
  getContentGraph,
  getStructuredContentGraph,
} from '../../src/lib/content-graph/registry';
import { overlapCount, scoreRelationship } from '../../src/lib/content-graph/scoring';
import type { ContentGraphNode } from '../../src/lib/content-graph/types';
import { createSystemIssue } from '../lib/system-issues.mjs';

/**
 * SR5 — ContentNodeType is the ONLY allowed type system.
 * Every node.type MUST be one of these values. No exceptions.
 */
const VALID_CONTENT_NODE_TYPES: ReadonlySet<string> = new Set([
  'service',
  'industry-category',
  'industry-detail',
  'feature',
  'blog',
  'resource',
  'case-study',
]);

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const logger = createLogger({
  label: 'validate-graph',
  mode: resolveLoggingMode(process.argv.slice(2), process.env),
  rootDir: process.cwd(),
});

await ensureGraphInitialized();

// Canonical identifier ownership lives in validate-content-contract and the
// graph initialization path. By the time validate-graph runs, canonical data
// should already be guaranteed so this validator can focus on graph shape.
const nodes = getStructuredContentGraph().nodes;
const normalize = (value: string) => value.trim().toLowerCase();


const errors: string[] = [];
const warnings: string[] = [];

const uniqueValues = (values: string[] | undefined) =>
  Array.from(new Set((values ?? []).map(normalize).filter(value => value.length > 0)));

const describeNode = (node: ContentGraphNode) => `${node.type}: ${node.slug}`;

const orphanNodeSet = new Set<string>();

function buildGraphIssueFromMessage(message: string, severity: 'critical' | 'warning') {
  const normalizedMessage = message.trim();
  const nodePrefixMatch = normalizedMessage.match(/^([a-z-]+):\s([^\s]+)\s(.+)$/i);

  if (nodePrefixMatch) {
    const [, entityType, slug, remainder] = nodePrefixMatch;
    const isOrphan = remainder.startsWith('has no matching');
    const code = isOrphan
      ? 'orphan_node'
      : remainder.startsWith('missing ')
        ? `graph_${remainder.replace(/\s+/g, '_')}`
        : remainder.startsWith('invalid ')
          ? `graph_${remainder.replace(/\s+/g, '_').replace(/:/g, '')}`
          : 'graph_node_issue';

    return createSystemIssue({
      source: 'validate-graph',
      code,
      severity,
      category: 'authority',
      entityType,
      slug,
      title: isOrphan ? 'Orphan graph node' : 'Graph node integrity issue',
      description: normalizedMessage,
      impact: isOrphan
        ? 'The node is disconnected from the authority layer and loses meaningful support relationships.'
        : 'The node drifts from the deterministic graph contract and weakens report reliability.',
      fix: isOrphan
        ? `Retag or connect ${entityType}/${slug} so it overlaps with the required canonical metadata.`
        : `Correct the graph metadata on ${entityType}/${slug} so it satisfies the canonical graph contract.`,
      autoFixable: false,
    });
  }

  if (normalizedMessage.startsWith('edge ')) {
    return createSystemIssue({
      source: 'validate-graph',
      code: 'invalid_edge',
      severity,
      category: 'authority',
      entityType: 'graph-edge',
      slug: normalizedMessage.replace(/\s+/g, '-').toLowerCase(),
      title: 'Invalid graph edge',
      description: normalizedMessage,
      impact: 'Derived relationships no longer explain authority transfer correctly.',
      fix: 'Repair the source or target metadata so the derived edge satisfies graph overlap rules.',
      autoFixable: false,
    });
  }

  if (normalizedMessage.startsWith('duplicate edge:')) {
    return createSystemIssue({
      source: 'validate-graph',
      code: 'duplicate_edge',
      severity,
      category: 'authority',
      entityType: 'graph-edge',
      slug: normalizedMessage.replace(/\s+/g, '-').toLowerCase(),
      title: 'Duplicate graph edge',
      description: normalizedMessage,
      impact: 'Relationship output becomes noisy and less deterministic.',
      fix: 'Remove the duplicate derived edge source or reconcile duplicate metadata overlap.',
      autoFixable: false,
    });
  }

  if (normalizedMessage.startsWith('missing required cross-type edge coverage:')) {
    return createSystemIssue({
      source: 'validate-graph',
      code: 'missing_cross_type_coverage',
      severity,
      category: 'authority',
      entityType: 'graph-coverage',
      slug: normalizedMessage.split(':').slice(1).join(':').trim().replace(/\s+/g, '-').toLowerCase(),
      title: 'Missing cross-type coverage',
      description: normalizedMessage,
      impact: 'The graph stops proving the required relationship coverage across content layers.',
      fix: 'Ensure the required cross-type pair shares canonical metadata so derived edges are created.',
      autoFixable: false,
    });
  }

  if (normalizedMessage.startsWith('SR5 violation')) {
    return createSystemIssue({
      source: 'validate-graph',
      code: 'invalid_node_type',
      severity,
      category: 'authority',
      entityType: 'graph-node',
      slug: 'content-graph',
      title: 'Invalid graph node type',
      description: normalizedMessage,
      impact: 'The graph leaves the locked content node type system and report integrity degrades.',
      fix: 'Restore the node to one of the canonical ContentNodeType values.',
      autoFixable: false,
    });
  }

  return createSystemIssue({
    source: 'validate-graph',
    code: 'graph_issue',
    severity,
    category: 'authority',
    entityType: 'graph',
    slug: 'content-graph',
    title: 'Graph validation issue',
    description: normalizedMessage,
    impact: 'Authority graph integrity is reduced.',
    fix: 'Review the graph validation output and correct the referenced metadata or derived relationship rule.',
    autoFixable: false,
  });
}

const countOverlap = (left: string[] | undefined, right: string[] | undefined) => {
  const leftSet = new Set(uniqueValues(left));
  const rightSet = new Set(uniqueValues(right));
  let count = 0;

  for (const value of leftSet) {
    if (rightSet.has(value)) {
      count += 1;
    }
  }

  return count;
};

const metadataOverlapScore = (left: ContentGraphNode, right: ContentGraphNode) => {
  const industries = countOverlap(left.industries, right.industries);
  const systems = countOverlap(left.systems, right.systems);
  const topics = countOverlap(left.topics, right.topics);

  return industries * 4 + systems * 3 + topics * 2;
};

const hasOverlapWithAny = (source: ContentGraphNode, candidates: ContentGraphNode[]) =>
  candidates.some(candidate => metadataOverlapScore(source, candidate) > 0);

const printMessages = (label: string, items: string[]) => {
  logger.printErrors(items.map(item => `${label}: ${item}`), label.toLowerCase(), logger.isVerbose() ? 20 : 5);
};

for (const node of nodes) {
  // SR5 — Type integrity: every node.type MUST be in ContentNodeType
  if (!VALID_CONTENT_NODE_TYPES.has(node.type)) {
    errors.push(`SR5 violation: ${describeNode(node)} has invalid type "${node.type}" (not in ContentNodeType)`);
  }

  if (node.type === 'blog') {
    if (uniqueValues(node.topics).length === 0) {
      errors.push(`${describeNode(node)} missing topics`);
    }
  }

  if (node.type === 'resource') {
    if (uniqueValues(node.systems).length === 0) {
      errors.push(`${describeNode(node)} missing systems`);
    }

    if (uniqueValues(node.topics).length === 0) {
      errors.push(`${describeNode(node)} missing topics`);
    }
  }

  if (node.type === 'case-study') {
    if (uniqueValues(node.industries).length === 0) {
      errors.push(`${describeNode(node)} missing industries`);
    }

    if (uniqueValues(node.systems).length === 0) {
      errors.push(`${describeNode(node)} missing systems`);
    }
  }

  if (node.type === 'feature' && uniqueValues(node.systems).length === 0) {
    errors.push(`${describeNode(node)} missing systems`);
  }

  if (node.type === 'industry-detail' && uniqueValues(node.industries).length === 0) {
    errors.push(`${describeNode(node)} missing industries`);
  }

  if (node.type === 'service' && uniqueValues(node.industries).length > 0) {
    errors.push(`${describeNode(node)} must not declare industry metadata`);
  }
}

const blogNodes = nodes.filter(node => node.type === 'blog');
const resourceNodes = nodes.filter(node => node.type === 'resource');
const caseStudyNodes = nodes.filter(node => node.type === 'case-study');
const serviceNodes = nodes.filter(node => node.type === 'service');

for (const node of blogNodes) {
  if (!hasOverlapWithAny(node, resourceNodes)) {
    orphanNodeSet.add(`${node.type}/${node.slug}`);
    errors.push(`${describeNode(node)} has no matching resource`);
  }
}

for (const node of resourceNodes) {
  const hasIndustry = uniqueValues(node.industries).length > 0;
  const hasSystem = uniqueValues(node.systems).length > 0;

  if (!hasIndustry && !hasSystem) {
    orphanNodeSet.add(`${node.type}/${node.slug}`);
    errors.push(`${describeNode(node)} has no matching system or industry`);
  }
}

for (const node of caseStudyNodes) {
  if (!hasOverlapWithAny(node, serviceNodes)) {
    orphanNodeSet.add(`${node.type}/${node.slug}`);
    errors.push(`${describeNode(node)} has no matching system`);
  }
}

// --- Derived-edge audit (merged from audit-graph.ts) ---

interface EdgeRecord {
  sourceId: string;
  targetId: string;
  type: string;
}

const flatNodes = Object.values(getContentGraph());
const nodeIndex = new Map<string, ContentGraphNode>();
for (const n of flatNodes) {
  nodeIndex.set(n.id, n);
}

let relatesToCount = 0;
let supportsCount = 0;
let validatesCount = 0;
const allEdges: EdgeRecord[] = [];

for (const n of flatNodes) {
  for (const edge of n.relatesTo ?? []) {
    if (edge.source === 'derived') {
      relatesToCount++;
      allEdges.push({ sourceId: n.id, targetId: edge.id, type: 'relatesTo' });
    }
  }
  for (const edge of n.supports ?? []) {
    if (edge.source === 'derived') {
      supportsCount++;
      allEdges.push({ sourceId: n.id, targetId: edge.id, type: 'supports' });
    }
  }
  for (const edge of n.validates ?? []) {
    if (edge.source === 'derived') {
      validatesCount++;
      allEdges.push({ sourceId: n.id, targetId: edge.id, type: 'validates' });
    }
  }
}

// Rule: System Overlap Gate
for (const e of allEdges) {
  const source = nodeIndex.get(e.sourceId);
  const target = nodeIndex.get(e.targetId);
  if (!source || !target) {
    errors.push(`edge ${e.sourceId} -> ${e.targetId} references missing node`);
    continue;
  }
  if (overlapCount(source.systems, target.systems) < 1) {
    errors.push(`edge ${e.sourceId} -> ${e.targetId} has no system overlap`);
  }
}

// Rule: No Zero-Score Edges
for (const e of allEdges) {
  const source = nodeIndex.get(e.sourceId);
  const target = nodeIndex.get(e.targetId);
  if (!source || !target) continue;
  if (scoreRelationship(source, target) === 0) {
    errors.push(`edge ${e.sourceId} -> ${e.targetId} has zero relationship score`);
  }
}

// Rule: No Self-References
for (const e of allEdges) {
  if (e.sourceId === e.targetId) {
    errors.push(`edge self-reference: ${e.sourceId}`);
  }
}

// Rule: No Duplicate Edges
const edgeKeys = new Set<string>();
for (const e of allEdges) {
  const key = `${e.sourceId}|${e.targetId}|${e.type}`;
  if (edgeKeys.has(key)) {
    errors.push(`duplicate edge: ${key}`);
  }
  edgeKeys.add(key);
}

// Rule: Cross-Type Coverage
const crossTypePairs = new Set<string>();
for (const e of allEdges) {
  const source = nodeIndex.get(e.sourceId);
  const target = nodeIndex.get(e.targetId);
  if (source && target) {
    crossTypePairs.add(`${source.type} -> ${target.type}`);
  }
}

const requiredCrossTypePairs = [
  'blog -> resource',
  'resource -> industry-detail',
  'case-study -> resource',
];
for (const pair of requiredCrossTypePairs) {
  if (!crossTypePairs.has(pair)) {
    errors.push(`missing required cross-type edge coverage: ${pair}`);
  }
}

// SR5 — Static check: authority-map.json type integrity
const authorityMapPath = path.join(process.cwd(), 'reports', 'authority-map.json');
if (fs.existsSync(authorityMapPath)) {
  const authorityMap = JSON.parse(fs.readFileSync(authorityMapPath, 'utf8'));
  if (Array.isArray(authorityMap.nodes)) {
    for (const mapNode of authorityMap.nodes) {
      if (mapNode.type && !VALID_CONTENT_NODE_TYPES.has(mapNode.type)) {
        errors.push(`SR5 violation (authority-map.json): node "${mapNode.id}" has invalid type "${mapNode.type}" (not in ContentNodeType)`);
      }
    }
  }
}

if (errors.length > 0) {
  printMessages('Errors', errors);
}

if (warnings.length > 0) {
  printMessages('Warnings', warnings);
}

logger.printTotals({
  derivedEdges: allEdges.length,
  relatesTo: relatesToCount,
  supports: supportsCount,
  validates: validatesCount,
  crossTypePairs: [...crossTypePairs].sort().join(', '),
});

if (errors.length === 0 && warnings.length === 0) {
  logger.printSummary('graph metadata validation passed');
}

if (shouldReportJson) {
  const issueObjects = errors.map(error => buildGraphIssueFromMessage(error, 'critical'));
  const warningObjects = warnings.map(warning => buildGraphIssueFromMessage(warning, 'warning'));
  const reportPath = path.join(process.cwd(), 'reports', 'graph-report.json');
  logger.writeReport(reportPath, {
    generatedAt: new Date().toISOString(),
    passed: errors.length === 0,
    errorCount: errors.length,
    warningCount: warnings.length,
    summary: {
      invalidEdges: errors.filter(error => error.startsWith('edge ') || error.startsWith('duplicate edge:') || error.startsWith('missing required cross-type edge coverage:')).length,
      orphanNodes: orphanNodeSet.size,
    },
    errors,
    warnings,
    issues: issueObjects,
    advisory: warningObjects,
    derivedEdgeCount: allEdges.length,
  });
  logger.printSummary(`report -> ${logger.relativePath(reportPath)}`);
}

if (errors.length > 0) {
  process.exitCode = 1;
}