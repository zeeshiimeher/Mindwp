import { CANONICAL_INDUSTRIES, CANONICAL_SYSTEMS, CANONICAL_TOPICS } from './canonical';
import {
  applyDerivedRelationships,
  deriveRelationships,
  logDerivedEdgeSummary,
} from './derivedRelationships';
import type {
  ContentGraph,
  ContentGraphIndexes,
  ContentGraphNode,
  GraphRegistryInput,
  MetadataCarrier,
} from './types';

const BUILDER_SERVICE_SLUGS = new Set(['']);

const canonicalIndustries = new Set<string>(CANONICAL_INDUSTRIES);
const canonicalSystems = new Set<string>(CANONICAL_SYSTEMS);
const canonicalTopics = new Set<string>(CANONICAL_TOPICS);

function validateIdentifiers(nodeId: string, carrier: MetadataCarrier): void {
  for (const industry of carrier.industries ?? []) {
    if (!canonicalIndustries.has(industry)) {
      throw new Error(
        `Non-canonical industry identifier "${industry}" on node "${nodeId}". ` +
          `Allowed: ${[...canonicalIndustries].join(', ')}`
      );
    }
  }
  for (const system of carrier.systems ?? []) {
    if (!canonicalSystems.has(system)) {
      throw new Error(
        `Non-canonical system identifier "${system}" on node "${nodeId}". ` +
          `Allowed: ${[...canonicalSystems].join(', ')}`
      );
    }
  }
  for (const topic of carrier.topics ?? []) {
    if (!canonicalTopics.has(topic)) {
      throw new Error(
        `Non-canonical topic identifier "${topic}" on node "${nodeId}". ` +
          `Allowed: ${[...canonicalTopics].join(', ')}`
      );
    }
  }
}

const getNodeMetadata = (carrier: MetadataCarrier) => ({
  ...(carrier.industries ? { industries: carrier.industries } : {}),
  ...(carrier.systems ? { systems: carrier.systems } : {}),
  ...(carrier.topics ? { topics: carrier.topics } : {}),
});

const appendToIndex = (
  index: Map<string, ContentGraphNode[]>,
  key: string,
  node: ContentGraphNode
) => {
  const current = index.get(key);
  if (current) {
    current.push(node);
    return;
  }

  index.set(key, [node]);
};

export function buildGraphIndexes(nodes: ContentGraphNode[]): ContentGraphIndexes {
  const industries = new Map<string, ContentGraphNode[]>();
  const systems = new Map<string, ContentGraphNode[]>();
  const topics = new Map<string, ContentGraphNode[]>();
  const slugIndex: Record<string, ContentGraphNode> = {};

  for (const node of nodes) {
    slugIndex[node.slug] = node;

    for (const industry of node.industries ?? []) {
      appendToIndex(industries, industry, node);
    }

    for (const system of node.systems ?? []) {
      appendToIndex(systems, system, node);
    }

    for (const topic of node.topics ?? []) {
      appendToIndex(topics, topic, node);
    }
  }

  return {
    industries,
    systems,
    topics,
    slugIndex,
  };
}

export function buildContentGraph(
  registries: GraphRegistryInput
): Record<string, ContentGraphNode> {
  const graph: Record<string, ContentGraphNode> = {};
  const featureSlugs = new Set(registries.features.map(f => f.slug));

  for (const service of Object.values(registries.services)) {
    if (BUILDER_SERVICE_SLUGS.has(service.slug) || featureSlugs.has(service.slug)) {
      continue;
    }

    const id = `service:${service.slug}`;
    graph[id] = {
      id,
      slug: service.slug,
      type: 'service',
      path: service.path,
      systems: [service.slug],
      ...getNodeMetadata({ systems: service.systems, topics: service.topics }),
    };
  }

  for (const industry of Object.values(registries.industries)) {
    if (industry.type === 'category') {
      const id = `industry-category:${industry.slug}`;
      graph[id] = {
        id,
        slug: industry.slug,
        type: 'industry-category',
        path: `/industries/${industry.slug}`,
      };
      continue;
    }

    const id = `industry-detail:${industry.slug}`;
    graph[id] = {
      id,
      slug: industry.slug,
      type: 'industry-detail',
      path: `/industries/${industry.parentSlug}/${industry.slug}`,
      parent: industry.parentSlug,
      ...getNodeMetadata(industry),
    };
  }

  for (const feature of registries.features) {
    const id = `feature:${feature.slug}`;
    graph[id] = {
      id,
      slug: feature.slug,
      type: 'feature',
      path: `/features/${feature.slug}`,
      ...getNodeMetadata(feature),
    };
  }

  for (const post of Object.values(registries.blogPosts)) {
    const id = `blog:${post.slug}`;
    graph[id] = {
      id,
      slug: post.slug,
      type: 'blog',
      path: `/blog/${post.slug}`,
      ...getNodeMetadata(post),
    };
  }

  for (const resource of Object.values(registries.resources)) {
    const id = `resource:${resource.slug}`;
    graph[id] = {
      id,
      slug: resource.slug,
      type: 'resource',
      path: `/resources/${resource.slug}`,
      ...getNodeMetadata(resource as MetadataCarrier),
    };
  }

  for (const caseStudy of Object.values(registries.caseStudies)) {
    const id = `case-study:${caseStudy.slug}`;
    graph[id] = {
      id,
      slug: caseStudy.slug,
      type: 'case-study',
      path: `/case-study/${caseStudy.slug}`,
      ...getNodeMetadata(caseStudy),
    };
  }

  // -- Canonical Identifier Enforcement -------------------------------------------
  // Validate all node metadata against canonical identifier sets.
  // Throws on first non-canonical identifier found.
  for (const node of Object.values(graph)) {
    validateIdentifiers(node.id, {
      industries: node.industries,
      systems: node.systems,
      topics: node.topics,
    });
  }

  // -- Derived Relationship Engine -----------------------------------------------
  // Derives relationships from metadata overlap for ALL node types.
  const allNodes = Object.values(graph);

  // Debug log (dev only)
  if (process.env.NODE_ENV !== 'production') {
    logDerivedEdgeSummary(allNodes);
  }

  // Apply derived edges to all nodes
  for (const node of allNodes) {
    const derived = deriveRelationships(node, allNodes);
    applyDerivedRelationships(node, derived);
  }

  return graph;
}

export function buildStructuredContentGraph(
  graphRecord: Record<string, ContentGraphNode>
): ContentGraph {
  const nodes = Object.values(graphRecord);

  return {
    nodes,
    indexes: buildGraphIndexes(nodes),
  };
}

// ─── State Management ────────────────────────────────────────────────────────

let _contentGraph: Record<string, ContentGraphNode> | null = null;
let _structuredContentGraph: ContentGraph | null = null;

export function initContentGraph(registries: GraphRegistryInput): void {
  if (_contentGraph)
    throw new Error('Content graph already initialized. Do not call initContentGraph() twice.');
  _contentGraph = buildContentGraph(registries);
  _structuredContentGraph = buildStructuredContentGraph(_contentGraph);
}

export function getContentGraph(): Record<string, ContentGraphNode> {
  if (!_contentGraph)
    throw new Error('Graph not initialized. Call ensureGraphInitialized() first.');
  return _contentGraph;
}

export function getStructuredContentGraph(): ContentGraph {
  if (!_structuredContentGraph)
    throw new Error('Graph not initialized. Call ensureGraphInitialized() first.');
  return _structuredContentGraph;
}

export function getNodeBySlug(slug: string): ContentGraphNode | undefined {
  const graph = getStructuredContentGraph();
  return graph.indexes?.slugIndex[slug];
}
