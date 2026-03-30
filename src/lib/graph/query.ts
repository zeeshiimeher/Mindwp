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
 * - Returns safe empty defaults when no data exists
 *
 * Consumers: SmartRelatedSection, JourneyNavigator, GraphAwareSidebar,
 *            Internal Linking Engine, ClusterPageLayout
 */

// Re-export for consumers (single import point)
export type { AuthorityMapItem } from '../authority/generated/authorityMap';
export type { ContentGraphNode, ContentNodeType } from '../content-graph/types';

// --- Types ---──

export interface RelatedContent {
  services: AuthorityMapItem[];
  resources: AuthorityMapItem[];
  blog: AuthorityMapItem[];
  caseStudies: AuthorityMapItem[];
  industries: AuthorityMapItem[];
}

export interface ClusterResult {
  key: string;
  nodes: ContentGraphNode[];
}

// --- Safe Defaults ---──

function emptyRelated(): RelatedContent {
  return {
    services: [],
    resources: [],
    blog: [],
    caseStudies: [],
    industries: [],
  };
}

function emptyCluster(key: string): ClusterResult {
  return { key, nodes: [] };
}

// --- Authority Map Lookup (precomputed at build time) ---

function fromAuthorityMap(slug: string, type: ContentNodeType): Partial<RelatedContent> | null {
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
  const mapResult = fromAuthorityMap(slug, type);
  if (!mapResult) return emptyRelated();

  return {
    ...emptyRelated(),
    ...mapResult,
  };
}

/**
 * Get all content nodes matching a given topic.
 */
export function getTopicCluster(topic: string): ClusterResult {
  const normalized = topic.trim().toLowerCase();
  const graph = getContentGraph();
  const nodes = Object.values(graph).filter(node =>
    node.topics?.some(t => t.trim().toLowerCase() === normalized)
  );

  return nodes.length > 0 ? { key: topic, nodes } : emptyCluster(topic);
}

/**
 * Get all content nodes matching a given system.
 */
export function getSystemCluster(system: string): ClusterResult {
  const normalized = system.trim().toLowerCase();
  const graph = getContentGraph();
  const nodes = Object.values(graph).filter(node =>
    node.systems?.some(s => s.trim().toLowerCase() === normalized)
  );

  return nodes.length > 0 ? { key: system, nodes } : emptyCluster(system);
}

/**
 * Get all content nodes matching a given industry.
 */
export function getContentByIndustry(industry: string): ClusterResult {
  const normalized = industry.trim().toLowerCase();
  const graph = getContentGraph();
  const nodes = Object.values(graph).filter(node =>
    node.industries?.some(i => i.trim().toLowerCase() === normalized)
  );

  return nodes.length > 0 ? { key: industry, nodes } : emptyCluster(industry);
}
