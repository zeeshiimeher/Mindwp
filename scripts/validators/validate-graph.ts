import fs from 'node:fs';
import path from 'node:path';

import { ensureGraphInitialized } from '../../src/domains/init/ensureGraphInitialized';

import {
  CANONICAL_INDUSTRIES,
  CANONICAL_SYSTEMS,
  CANONICAL_TOPICS,
} from '../../src/lib/content-graph/canonical';
import {
  getContentGraph,
  getStructuredContentGraph,
} from '../../src/lib/content-graph/registry';
import { overlapCount, scoreRelationship } from '../../src/lib/content-graph/scoring';
import type { ContentGraphNode } from '../../src/lib/content-graph/types';

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

await ensureGraphInitialized();

const nodes = getStructuredContentGraph().nodes;
const normalize = (value: string) => value.trim().toLowerCase();

const canonicalIndustrySet: Set<string> = new Set(CANONICAL_INDUSTRIES);
const canonicalSystemSet: Set<string> = new Set(CANONICAL_SYSTEMS);
const canonicalTopicSet: Set<string> = new Set(CANONICAL_TOPICS);

const errors: string[] = [];
const warnings: string[] = [];

const uniqueValues = (values: string[] | undefined) =>
  Array.from(new Set((values ?? []).map(normalize).filter(value => value.length > 0)));

const describeNode = (node: ContentGraphNode) => `${node.type}: ${node.slug}`;

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
  console.log(`${label}:`);

  for (const item of items) {
    console.log(`- ${item}`);
  }

  console.log('');
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

  for (const industry of uniqueValues(node.industries)) {
    if (node.type !== 'industry-detail' && !canonicalIndustrySet.has(industry)) {
      errors.push(`${describeNode(node)} invalid industry identifier: ${industry}`);
    }
  }

  for (const system of uniqueValues(node.systems)) {
    if (!canonicalSystemSet.has(system)) {
      errors.push(`${describeNode(node)} invalid system identifier: ${system}`);
    }
  }

  for (const topic of uniqueValues(node.topics)) {
    if (!canonicalTopicSet.has(topic)) {
      errors.push(`${describeNode(node)} invalid topic identifier: ${topic}`);
    }
  }
}

const blogNodes = nodes.filter(node => node.type === 'blog');
const resourceNodes = nodes.filter(node => node.type === 'resource');
const caseStudyNodes = nodes.filter(node => node.type === 'case-study');
const serviceNodes = nodes.filter(node => node.type === 'service');

for (const node of blogNodes) {
  if (!hasOverlapWithAny(node, resourceNodes)) {
    warnings.push(`${describeNode(node)} has no matching resource`);
  }
}

for (const node of resourceNodes) {
  const hasIndustry = uniqueValues(node.industries).some(industry => canonicalIndustrySet.has(industry));
  const hasSystem = uniqueValues(node.systems).some(system => canonicalSystemSet.has(system));

  if (!hasIndustry && !hasSystem) {
    warnings.push(`${describeNode(node)} has no matching system or industry`);
  }
}

for (const node of caseStudyNodes) {
  if (!hasOverlapWithAny(node, serviceNodes)) {
    warnings.push(`${describeNode(node)} has no matching system`);
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

console.log('GRAPH VALIDATION RESULTS');
console.log('');

if (errors.length > 0) {
  printMessages('Errors', errors);
}

if (warnings.length > 0) {
  printMessages('Warnings', warnings);
}

console.log('Derived Edge Audit');
console.log('');
console.log(`Total derived edges: ${allEdges.length}`);
console.log(`  relatesTo: ${relatesToCount}`);
console.log(`  supports: ${supportsCount}`);
console.log(`  validates: ${validatesCount}`);
console.log(`Cross-type pairs: ${[...crossTypePairs].sort().join(', ')}`);
console.log('');

if (errors.length === 0 && warnings.length === 0) {
  console.log('Graph metadata validation passed.');
}

if (shouldReportJson) {
  const reportPath = path.join(process.cwd(), 'reports', 'graph-report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(
    reportPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        passed: errors.length === 0,
        errorCount: errors.length,
        warningCount: warnings.length,
        errors,
        warnings,
        derivedEdgeCount: allEdges.length,
      },
      null,
      2
    )
  );
}

if (errors.length > 0) {
  process.exitCode = 1;
}