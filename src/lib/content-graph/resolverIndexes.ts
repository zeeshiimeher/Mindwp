import type {
  ContentGraph,
  ContentGraphNode,
  ContentNodeType,
  IndexableBlogPost,
  IndexableResource,
  ResolverIndexes,
} from '@/lib/content-graph/types';

const normalizeKey = (value: string) => value.trim().toLowerCase();

const addToListIndex = <T>(index: Map<string, T[]>, key: string, value: T) => {
  const normalizedKey = normalizeKey(key);
  const existing = index.get(normalizedKey);

  if (existing) {
    existing.push(value);
    return;
  }

  index.set(normalizedKey, [value]);
};

const addNodeToTypeBucket = (
  index: Map<ContentNodeType, ContentGraphNode[]>,
  key: ContentNodeType,
  value: ContentGraphNode
) => {
  const existing = index.get(key);

  if (existing) {
    existing.push(value);
    return;
  }

  index.set(key, [value]);
};

const addNodeToTypeSlugIndex = (
  index: Map<ContentNodeType, Map<string, ContentGraphNode>>,
  type: ContentNodeType,
  slug: string,
  node: ContentGraphNode
) => {
  const normalizedSlug = normalizeKey(slug);
  const existingTypeIndex = index.get(type);

  if (existingTypeIndex) {
    const existingNode = existingTypeIndex.get(normalizedSlug);
    if (existingNode) {
      throw new Error(
        `Resolver index collision for ${type}:${normalizedSlug}. Existing ${existingNode.id}, incoming ${node.id}.`
      );
    }

    existingTypeIndex.set(normalizedSlug, node);
    return;
  }

  index.set(type, new Map([[normalizedSlug, node]]));
};

const addNodeToReverseRelationIndex = (
  index: Map<string, ContentGraphNode[]>,
  relationValue: string,
  node: ContentGraphNode
) => {
  const normalizedKey = normalizeKey(relationValue);
  const existing = index.get(normalizedKey);

  if (existing) {
    existing.push(node);
    return;
  }

  index.set(normalizedKey, [node]);
};

const splitTokens = (value: string): string[] => {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .map(normalizeKey)
    .filter(token => token.length > 1);
};

export function buildResolverIndexes(
  graph: ContentGraph,
  blogPosts: Record<string, IndexableBlogPost>,
  resources: Record<string, IndexableResource>
): ResolverIndexes {
  const blogPostsList: IndexableBlogPost[] = Object.values(blogPosts);
  const resourceList: IndexableResource[] = Object.values(resources);
  const graphNodes: ContentGraphNode[] = graph.nodes;

  const blogSlugIndex = new Map<string, IndexableBlogPost>(
    blogPostsList.map(post => [normalizeKey(post.slug), post])
  );
  const blogTopicIndex = new Map<string, IndexableBlogPost[]>();
  const blogSystemIndex = new Map<string, IndexableBlogPost[]>();
  const blogIndustryIndex = new Map<string, IndexableBlogPost[]>();

  for (const post of blogPostsList) {
    for (const topic of post.topics) addToListIndex(blogTopicIndex, topic, post);
    for (const system of post.systems) addToListIndex(blogSystemIndex, system, post);
    for (const industry of post.industries) addToListIndex(blogIndustryIndex, industry, post);
  }

  const resourceSlugIndex = new Map<string, IndexableResource>(
    resourceList.map(resource => [normalizeKey(resource.slug), resource])
  );
  const resourceTopicIndex = new Map<string, IndexableResource[]>();
  const resourceSystemIndex = new Map<string, IndexableResource[]>();
  const resourceIndustryIndex = new Map<string, IndexableResource[]>();
  const resourceUrlIndex = new Map<string, IndexableResource>();
  const resourceCategoryIndex = new Map<string, IndexableResource[]>();

  for (const resource of resourceList) {
    resourceUrlIndex.set(resource.seo.canonical, resource);
    addToListIndex(resourceCategoryIndex, resource.category, resource);

    for (const topic of resource.topics ?? []) addToListIndex(resourceTopicIndex, topic, resource);
    for (const system of resource.systems ?? [])
      addToListIndex(resourceSystemIndex, system, resource);
    for (const industry of resource.industries ?? []) {
      addToListIndex(resourceIndustryIndex, industry, resource);
    }
  }

  const nodeSlugIndex = new Map<string, ContentGraphNode>();
  const nodeIdIndex = new Map<string, ContentGraphNode>();
  const nodeTypeBuckets = new Map<ContentNodeType, ContentGraphNode[]>();
  const nodeTypeSlugIndex = new Map<ContentNodeType, Map<string, ContentGraphNode>>();
  const reverseRelationIndex = new Map<string, ContentGraphNode[]>();
  const nodeTokenIndex = new Map<string, Set<string>>();
  const nodeOrderIndex = new Map<string, number>();

  for (const [index, node] of graphNodes.entries()) {
    const normalizedSlug = normalizeKey(node.slug);

    if (!nodeSlugIndex.has(normalizedSlug)) {
      nodeSlugIndex.set(normalizedSlug, node);
    }

    nodeIdIndex.set(normalizeKey(node.id), node);
    nodeOrderIndex.set(node.id, index);
    addNodeToTypeBucket(nodeTypeBuckets, node.type, node);
    addNodeToTypeSlugIndex(nodeTypeSlugIndex, node.type, node.slug, node);
    nodeTokenIndex.set(node.id, new Set([...splitTokens(node.slug), ...splitTokens(node.path)]));

    for (const edge of [
      ...(node.relatesTo ?? []),
      ...(node.supports ?? []),
      ...(node.validates ?? []),
    ]) {
      addNodeToReverseRelationIndex(reverseRelationIndex, edge.id, node);
    }
  }

  return {
    blogPostsList,
    resourceList,
    graphNodes,
    blogSlugIndex,
    blogTopicIndex,
    blogSystemIndex,
    blogIndustryIndex,
    resourceSlugIndex,
    resourceTopicIndex,
    resourceSystemIndex,
    resourceIndustryIndex,
    resourceUrlIndex,
    resourceCategoryIndex,
    nodeSlugIndex,
    nodeIdIndex,
    nodeTypeBuckets,
    nodeTypeSlugIndex,
    reverseRelationIndex,
    nodeTokenIndex,
    nodeOrderIndex,
  };
}

// ─── State Management ────────────────────────────────────────────────────────

let _indexes: ResolverIndexes | null = null;

export function initResolverIndexes(
  graph: ContentGraph,
  blogPosts: Record<string, IndexableBlogPost>,
  resources: Record<string, IndexableResource>
): void {
  if (_indexes)
    throw new Error(
      'Resolver indexes already initialized. Do not call initResolverIndexes() twice.'
    );
  _indexes = buildResolverIndexes(graph, blogPosts, resources);
}

export function getResolverIndexes(): ResolverIndexes {
  if (!_indexes)
    throw new Error('Resolver indexes not initialized. Call ensureGraphInitialized() first.');
  return _indexes;
}
