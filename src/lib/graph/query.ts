import { getContentGraph } from '../content-graph/registry';
import type { ContentGraphNode, ContentNodeType } from '../content-graph/types';

/**
 * GRAPH QUERY API
 *
 * Runtime relationship helpers used by related-content surfaces.
 * These helpers should not drive page composition before page intent and
 * section design are clear.
 */

// Re-export for consumers (single import point)
export type { ContentGraphNode, ContentNodeType } from '../content-graph/types';

export type AuthorityMapItem = {
  title: string;
  description?: string;
  slug: string;
  path: string;
  nodeType: ContentNodeType;
};

// --- Types ---──

export type RelatedContentItem = AuthorityMapItem & {
  score: number;
  relationType: 'relatesTo' | 'supports' | 'validates' | 'unscored';
  primarySystemMatch: boolean;
};

export interface RelatedContent {
  services: RelatedContentItem[];
  resources: RelatedContentItem[];
  blog: RelatedContentItem[];
  caseStudies: RelatedContentItem[];
  industries: RelatedContentItem[];
}

export interface ClusterResult {
  key: string;
  nodes: ContentGraphNode[];
}

function emptyRelated(): RelatedContent {
  return {
    services: [],
    resources: [],
    blog: [],
    caseStudies: [],
    industries: [],
  };
}

function getContentGraphStrict() {
  return getContentGraph();
}

const RELATIONSHIP_PRIORITY = {
  relatesTo: 0,
  supports: 1,
  validates: 2,
  unscored: 3,
} as const;

function normalizeTokens(values?: string[]) {
  return new Set((values ?? []).map(value => value.trim().toLowerCase()).filter(Boolean));
}

function countOverlap(left?: string[], right?: string[]) {
  const leftSet = normalizeTokens(left);
  const rightSet = normalizeTokens(right);
  let count = 0;

  for (const value of leftSet) {
    if (rightSet.has(value)) {
      count += 1;
    }
  }

  return count;
}

function scoreCandidate(sourceNode: ContentGraphNode, candidateNode: ContentGraphNode) {
  const systemOverlap = countOverlap(sourceNode.systems, candidateNode.systems);
  const topicOverlap = countOverlap(sourceNode.topics, candidateNode.topics);
  const industryOverlap = countOverlap(sourceNode.industries, candidateNode.industries);

  return systemOverlap * 3 + topicOverlap * 2 + industryOverlap;
}

function resolvePrimarySystem(sourceNode: ContentGraphNode) {
  switch (sourceNode.type) {
    case 'service':
      return sourceNode.slug;
    default:
      return sourceNode.systems?.[0]?.trim().toLowerCase() ?? null;
  }
}

function hasPrimarySystemMatch(sourceNode: ContentGraphNode, candidateNode: ContentGraphNode) {
  const primarySystem = resolvePrimarySystem(sourceNode);
  if (!primarySystem) {
    return false;
  }

  return normalizeTokens(candidateNode.systems).has(primarySystem);
}

function resolveRelationshipType(sourceNode: ContentGraphNode, candidateNode: ContentGraphNode) {
  const sourceId = sourceNode.id;
  const candidateId = candidateNode.id;

  if (
    sourceNode.relatesTo?.some(edge => edge.id === candidateId) ||
    candidateNode.relatesTo?.some(edge => edge.id === sourceId)
  ) {
    return 'relatesTo';
  }

  if (
    sourceNode.supports?.some(edge => edge.id === candidateId) ||
    candidateNode.supports?.some(edge => edge.id === sourceId)
  ) {
    return 'supports';
  }

  if (
    sourceNode.validates?.some(edge => edge.id === candidateId) ||
    candidateNode.validates?.some(edge => edge.id === sourceId)
  ) {
    return 'validates';
  }

  return 'unscored';
}

function compareRelatedItems(left: RelatedContentItem, right: RelatedContentItem) {
  const relationDelta =
    RELATIONSHIP_PRIORITY[left.relationType] - RELATIONSHIP_PRIORITY[right.relationType];
  if (relationDelta !== 0) {
    return relationDelta;
  }

  if (left.primarySystemMatch !== right.primarySystemMatch) {
    return left.primarySystemMatch ? -1 : 1;
  }

  if (left.score !== right.score) {
    return right.score - left.score;
  }

  return left.slug.localeCompare(right.slug);
}

function resolveSourceNode(slug: string, type: ContentNodeType) {
  const graph = getContentGraphStrict();

  return Object.values(graph).find(node => node.slug === slug && node.type === type) ?? null;
}

function toRelatedItem(
  sourceNode: ContentGraphNode,
  candidateNode: ContentGraphNode
): RelatedContentItem {
  const score = scoreCandidate(sourceNode, candidateNode);

  return {
    title: candidateNode.title || candidateNode.slug,
    description: candidateNode.description,
    slug: candidateNode.slug,
    path: candidateNode.path,
    nodeType: candidateNode.type,
    score,
    relationType: resolveRelationshipType(sourceNode, candidateNode),
    primarySystemMatch: hasPrimarySystemMatch(sourceNode, candidateNode),
  };
}

function buildRelatedSlot(
  sourceNode: ContentGraphNode,
  allowedTypes: ContentNodeType[],
  candidateFilter?: (node: ContentGraphNode) => boolean
) {
  const graph = getContentGraphStrict();

  const graphNodes = Object.values(graph);
  const seenPaths = new Set<string>();
  const candidateNodes: ContentGraphNode[] = [];

  for (const node of graphNodes) {
    if (!allowedTypes.includes(node.type)) {
      continue;
    }

    if (candidateFilter && !candidateFilter(node)) {
      continue;
    }

    if (seenPaths.has(node.path)) {
      continue;
    }

    seenPaths.add(node.path);
    candidateNodes.push(node);
  }

  return candidateNodes
    .filter(candidateNode => {
      if (candidateNode.slug === sourceNode.slug || candidateNode.path === sourceNode.path) {
        return false;
      }

      return scoreCandidate(sourceNode, candidateNode) > 0;
    })
    .map(candidateNode => toRelatedItem(sourceNode, candidateNode))
    .sort(compareRelatedItems);
}

// --- Query Functions ---

/**
 * Get all related content for a given node.
 */
export function getRelatedContent(slug: string, type: ContentNodeType): RelatedContent {
  const sourceNode = resolveSourceNode(slug, type);
  if (!sourceNode) {
    return emptyRelated();
  }

  switch (type) {
    case 'service':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, ['service']),
        resources: buildRelatedSlot(sourceNode, ['resource']),
        industries: buildRelatedSlot(sourceNode, ['industry-detail']),
      };
    case 'feature':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, ['service']),
      };
    case 'blog':
      return {
        ...emptyRelated(),
        resources: buildRelatedSlot(sourceNode, ['resource']),
        industries: buildRelatedSlot(sourceNode, ['industry-detail']),
      };
    case 'resource':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, ['service']),
        industries: buildRelatedSlot(sourceNode, ['industry-detail']),
      };
    case 'industry-category':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, ['service']),
        industries: buildRelatedSlot(sourceNode, ['industry-detail'], node => node.parent === slug),
      };
    case 'industry-detail':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, ['service']),
        caseStudies: buildRelatedSlot(sourceNode, ['case-study']),
        resources: buildRelatedSlot(sourceNode, ['resource']),
      };
    case 'case-study':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, ['service']),
        resources: buildRelatedSlot(sourceNode, ['resource']),
        industries: buildRelatedSlot(sourceNode, ['industry-detail']),
      };
  }
}

/**
 * Get all content nodes matching a given topic.
 */
export function getTopicCluster(topic: string): ClusterResult {
  const normalized = topic.trim().toLowerCase();
  const graph = getContentGraphStrict();
  if (normalized.length === 0) {
    return { key: topic, nodes: [] };
  }

  const nodes = Object.values(graph).filter(node =>
    node.topics?.some(t => t.trim().toLowerCase() === normalized)
  );

  return { key: topic, nodes };
}

/**
 * Get all content nodes matching a given system.
 */
export function getSystemCluster(system: string): ClusterResult {
  const normalized = system.trim().toLowerCase();
  const graph = getContentGraphStrict();
  if (normalized.length === 0) {
    return { key: system, nodes: [] };
  }

  const nodes = Object.values(graph).filter(node =>
    node.systems?.some(s => s.trim().toLowerCase() === normalized)
  );

  return { key: system, nodes };
}

/**
 * Get all content nodes matching a given industry.
 */
export function getContentByIndustry(industry: string): ClusterResult {
  const normalized = industry.trim().toLowerCase();
  const graph = getContentGraphStrict();
  if (normalized.length === 0) {
    return { key: industry, nodes: [] };
  }

  const nodes = Object.values(graph).filter(node =>
    node.industries?.some(i => i.trim().toLowerCase() === normalized)
  );

  return { key: industry, nodes };
}
