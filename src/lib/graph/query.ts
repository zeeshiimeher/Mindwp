import type { AuthorityMapItem } from '../authority/generated/authorityMap';
import { AUTHORITY_MAP } from '../authority/generated/authorityMap';
import { getContentGraph } from '../content-graph/registry';
import type { ContentGraphNode, ContentNodeType } from '../content-graph/types';

/**
 * GRAPH QUERY API
 *
 * Purpose:
 * Single access point for all graph-derived content relationships.
 * Every UI component and system module reads graph data through
 * these functions — never directly from the authority map or graph.
 *
 * Rules:
 * - All lookups use the precomputed authority map (zero runtime cost)
 * - Cluster queries scan the full graph by metadata field
 * - Throws when required graph data is missing
 *
 * Consumers: RelatedSection, GraphAwareSidebar, ClusterPageLayout
 */

// Re-export for consumers (single import point)
export type { AuthorityMapItem } from '../authority/generated/authorityMap';
export type { ContentGraphNode, ContentNodeType } from '../content-graph/types';

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

type RelatedAuthoritySlots = Partial<{
  services: AuthorityMapItem[];
  resources: AuthorityMapItem[];
  blog: AuthorityMapItem[];
  caseStudies: AuthorityMapItem[];
  industries: AuthorityMapItem[];
}>;

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

function resolveNodeFromAuthorityItem(item: AuthorityMapItem) {
  const graph = getContentGraphStrict();

  return (
    Object.values(graph).find(node => node.path === item.path || node.slug === item.slug) ?? null
  );
}

function toRelatedItem(
  sourceNode: ContentGraphNode,
  candidateNode: ContentGraphNode
): RelatedContentItem {
  if (!candidateNode.title || !candidateNode.path || !candidateNode.description) {
    throw new Error(
      `Related content candidate is missing required fields for ${candidateNode.id}.`
    );
  }

  const score = scoreCandidate(sourceNode, candidateNode);
  if (score <= 0) {
    throw new Error(
      `Related content candidate ${candidateNode.id} has no qualifying relationship.`
    );
  }

  return {
    title: candidateNode.title,
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
  authorityItems: AuthorityMapItem[] | undefined,
  allowedTypes: ContentNodeType[],
  candidateFilter?: (node: ContentGraphNode) => boolean
) {
  const graph = getContentGraphStrict();

  const graphNodes = Object.values(graph);
  const candidateNodes: ContentGraphNode[] = [];
  const seenPaths = new Set<string>();

  for (const item of authorityItems ?? []) {
    const node = resolveNodeFromAuthorityItem(item);
    if (!node || seenPaths.has(node.path)) {
      continue;
    }

    seenPaths.add(node.path);
    candidateNodes.push(node);
  }

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

// --- Authority Map Lookup (precomputed at build time) ---

function fromAuthorityMap(slug: string, type: ContentNodeType): RelatedAuthoritySlots | null {
  switch (type) {
    case 'service': {
      const entry = AUTHORITY_MAP.service[slug];
      return entry ? { services: entry.services } : null;
    }
    case 'feature': {
      const entry = AUTHORITY_MAP.feature[slug];
      return entry ? { services: entry.services } : null;
    }
    case 'industry-category':
    case 'industry-detail': {
      const entry = AUTHORITY_MAP.industry[slug];
      return entry
        ? { services: entry.services, caseStudies: entry.caseStudies, resources: entry.resources }
        : null;
    }
    case 'blog': {
      const entry = AUTHORITY_MAP.blog[slug];
      return entry ? { resources: entry.resources, industries: entry.industries } : null;
    }
    case 'resource': {
      const entry = AUTHORITY_MAP.resource[slug];
      return entry ? { services: entry.services, industries: entry.industries } : null;
    }
    case 'case-study': {
      const entry = AUTHORITY_MAP.caseStudy[slug];
      return entry ? { industries: entry.industries, resources: entry.resources } : null;
    }
  }
}

// --- Query Functions ---

/**
 * Get all related content for a given node.
 * Uses the precomputed authority map (zero runtime cost).
 */
export function getRelatedContent(slug: string, type: ContentNodeType): RelatedContent {
  const sourceNode = resolveSourceNode(slug, type);
  if (!sourceNode) {
    throw new Error(`Missing graph source node for ${type}:${slug}.`);
  }

  const mapResult = fromAuthorityMap(slug, type) ?? {};

  switch (type) {
    case 'service':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, mapResult.services, ['service']),
        resources: buildRelatedSlot(sourceNode, mapResult.resources, ['resource']),
        industries: buildRelatedSlot(sourceNode, mapResult.industries, ['industry-detail']),
      };
    case 'feature':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, mapResult.services, ['service']),
      };
    case 'blog':
      return {
        ...emptyRelated(),
        resources: buildRelatedSlot(sourceNode, mapResult.resources, ['resource']),
        industries: buildRelatedSlot(sourceNode, mapResult.industries, ['industry-detail']),
      };
    case 'resource':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, mapResult.services, ['service']),
        industries: buildRelatedSlot(sourceNode, mapResult.industries, ['industry-detail']),
      };
    case 'industry-category':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, mapResult.services, ['service']),
        industries: buildRelatedSlot(
          sourceNode,
          [],
          ['industry-detail'],
          node => node.parent === slug
        ),
      };
    case 'industry-detail':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, mapResult.services, ['service']),
        caseStudies: buildRelatedSlot(sourceNode, mapResult.caseStudies, ['case-study']),
        resources: buildRelatedSlot(sourceNode, mapResult.resources, ['resource']),
      };
    case 'case-study':
      return {
        ...emptyRelated(),
        services: buildRelatedSlot(sourceNode, [], ['service']),
        resources: buildRelatedSlot(sourceNode, mapResult.resources, ['resource']),
        industries: buildRelatedSlot(sourceNode, mapResult.industries, ['industry-detail']),
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
    throw new Error('getTopicCluster requires a topic slug.');
  }

  const nodes = Object.values(graph).filter(node =>
    node.topics?.some(t => t.trim().toLowerCase() === normalized)
  );

  if (nodes.length === 0) {
    throw new Error(`No topic cluster content found for ${topic}.`);
  }

  return { key: topic, nodes };
}

/**
 * Get all content nodes matching a given system.
 */
export function getSystemCluster(system: string): ClusterResult {
  const normalized = system.trim().toLowerCase();
  const graph = getContentGraphStrict();
  if (normalized.length === 0) {
    throw new Error('getSystemCluster requires a system slug.');
  }

  const nodes = Object.values(graph).filter(node =>
    node.systems?.some(s => s.trim().toLowerCase() === normalized)
  );

  if (nodes.length === 0) {
    throw new Error(`No system cluster content found for ${system}.`);
  }

  return { key: system, nodes };
}

/**
 * Get all content nodes matching a given industry.
 */
export function getContentByIndustry(industry: string): ClusterResult {
  const normalized = industry.trim().toLowerCase();
  const graph = getContentGraphStrict();
  if (normalized.length === 0) {
    throw new Error('getContentByIndustry requires an industry slug.');
  }

  const nodes = Object.values(graph).filter(node =>
    node.industries?.some(i => i.trim().toLowerCase() === normalized)
  );

  if (nodes.length === 0) {
    throw new Error(`No industry cluster content found for ${industry}.`);
  }

  return { key: industry, nodes };
}
