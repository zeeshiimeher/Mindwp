import { scoreRelationship } from '../content-graph/scoring';
import type {
  AttributedEdge,
  ContentGraphNode,
  ContentNodeType,
  ResolverDependencies,
  ResolverIndexes,
} from '../content-graph/types';

// ─── Types ───────────────────────────────────────────────────────────────────

export type AuthorityItem = {
  title: string;
  description: string;
  slug: string;
  path: string;
  nodeType: ContentNodeType;
};

type ResolverSlotResult = Record<string, AuthorityItem[]>;

// ─── Constants ───────────────────────────────────────────────────────────────

const SLOT_LIMIT = 3;

const MANUAL_WEIGHT = 0.8;
const MANUAL_NO_OVERLAP_WEIGHT = 0.5;

const RELATION_PRIORITY = {
  relatesTo: 300,
  supports: 200,
  validates: 100,
  reverseRelatesTo: 90,
  reverseSupports: 80,
  reverseValidates: 70,
} as const;

const FALLBACK_DESCRIPTION: Record<ContentNodeType, string> = {
  service:
    'Explore how this related service supports your wider system structure and growth goals.',
  'industry-category':
    'See how this industry context aligns with service structure, visibility, and enquiry handling.',
  'industry-detail':
    'See how this industry context aligns with service structure, visibility, and enquiry handling.',
  feature:
    'Review this related feature to understand how it supports your workflow and operational clarity.',
  blog: 'Read this related insight for practical guidance and system-focused implementation ideas.',
  resource:
    'Use this related resource to plan and apply the next implementation step with confidence.',
  'case-study':
    'Review this related case study to see how these systems perform in real business scenarios.',
};

// ─── Internal Helpers ────────────────────────────────────────────────────────

const normalize = (v: string) => v.trim().toLowerCase();

const titleFromSlug = (slug: string) =>
  slug
    .replace(/[-/]+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase());

const resolverCache = new Map<string, ResolverSlotResult>();

export function clearResolverCache(): void {
  resolverCache.clear();
}

export function resolverCacheSize(): number {
  return resolverCache.size;
}

// ─── Factory ─────────────────────────────────────────────────────────────────

export function createResolver(deps: ResolverDependencies, indexes: ResolverIndexes) {
  const {
    nodeTypeSlugIndex,
    nodeTypeBuckets,
    nodeIdIndex,
    reverseRelationIndex,
    blogSlugIndex,
    resourceSlugIndex,
  } = indexes;

  const getNodeBySlug = (slug: string, ...types: ContentNodeType[]) => {
    const key = normalize(slug);
    for (const type of types) {
      const node = nodeTypeSlugIndex.get(type)?.get(key);
      if (node) return node;
    }
    return undefined;
  };

  const getNodesByType = (...types: ContentNodeType[]) =>
    types.flatMap(t => nodeTypeBuckets.get(t) ?? []);

  const resolveNodeCopy = (node: ContentGraphNode) => {
    const derivedTitle = titleFromSlug(node.slug);
    const defaultDescription = FALLBACK_DESCRIPTION[node.type];

    if (node.type === 'service') {
      const s = deps.getServiceBySlug(node.slug);
      return {
        title: node.title ?? s?.badge ?? s?.title ?? derivedTitle,
        description: node.description ?? s?.description ?? defaultDescription,
      };
    }
    if (node.type === 'feature') {
      const f = deps.features.find(x => x.slug === node.slug);
      return {
        title: node.title ?? f?.title ?? derivedTitle,
        description: node.description ?? f?.description ?? defaultDescription,
      };
    }
    if (node.type === 'industry-category' || node.type === 'industry-detail') {
      const key =
        node.type === 'industry-detail' && node.parent ? `${node.parent}/${node.slug}` : node.slug;
      const i = deps.industries[key];
      return {
        title: node.title ?? i?.hero?.title ?? derivedTitle,
        description:
          node.description ?? i?.seo?.description ?? i?.hero?.description ?? defaultDescription,
      };
    }
    if (node.type === 'blog') {
      const b = blogSlugIndex.get(normalize(node.slug));
      return {
        title: node.title ?? b?.title ?? derivedTitle,
        description: node.description ?? b?.seo.description ?? defaultDescription,
      };
    }
    if (node.type === 'resource') {
      const r = resourceSlugIndex.get(normalize(node.slug));
      return {
        title: node.title ?? r?.title ?? derivedTitle,
        description:
          node.description ?? r?.description ?? r?.seo?.description ?? defaultDescription,
      };
    }
    if (node.type === 'case-study') {
      const c = deps.caseStudies[node.slug];
      return {
        title: node.title ?? c?.title ?? derivedTitle,
        description: node.description ?? c?.seo?.description ?? defaultDescription,
      };
    }
    return {
      title: node.title ?? derivedTitle,
      description: node.description ?? defaultDescription,
    };
  };

  const toAuthorityItem = (node: ContentGraphNode): AuthorityItem => {
    const copy = resolveNodeCopy(node);
    return {
      title: copy.title,
      description: copy.description,
      slug: node.slug,
      path: node.path,
      nodeType: node.type,
    };
  };

  // ─── Core Resolution ───────────────────────────────────────────────────────

  type ScoredCandidate = { node: ContentGraphNode; score: number };

  function resolveSlot(
    sourceSlug: string,
    sourceTypes: ContentNodeType[],
    targetTypes: ContentNodeType[],
    limit: number = SLOT_LIMIT
  ): AuthorityItem[] {
    const sourceNode = getNodeBySlug(sourceSlug, ...sourceTypes);
    if (!sourceNode) return [];

    const targetSet = new Set(targetTypes);
    const candidates = new Map<string, ScoredCandidate>();

    const upsert = (node: ContentGraphNode, score: number) => {
      const existing = candidates.get(node.slug);
      if (!existing || score > existing.score) {
        candidates.set(node.slug, { node, score });
      }
    };

    const sourceWeight = (edge: AttributedEdge, baseScore: number) =>
      edge.source === 'derived' ? 1.0 : baseScore > 0 ? MANUAL_WEIGHT : MANUAL_NO_OVERLAP_WEIGHT;

    // Forward edges
    const processForward = (edges: AttributedEdge[] | undefined, priority: number) => {
      if (!edges) return;
      for (const edge of edges) {
        const target = nodeIdIndex.get(normalize(edge.id));
        if (!target || !targetSet.has(target.type)) continue;
        if (target.slug === sourceNode.slug) continue;
        const base = scoreRelationship(sourceNode, target);
        upsert(target, (base + priority) * sourceWeight(edge, base));
      }
    };

    processForward(sourceNode.relatesTo, RELATION_PRIORITY.relatesTo);
    processForward(sourceNode.supports, RELATION_PRIORITY.supports);
    processForward(sourceNode.validates, RELATION_PRIORITY.validates);

    // Reverse edges
    const sourceId = normalize(sourceNode.id);
    const reverseNodes = reverseRelationIndex.get(sourceId) ?? [];

    for (const revNode of reverseNodes) {
      if (!targetSet.has(revNode.type)) continue;
      if (revNode.slug === sourceNode.slug) continue;

      const processReverse = (edges: AttributedEdge[] | undefined, priority: number) => {
        if (!edges) return;
        for (const edge of edges) {
          if (normalize(edge.id) !== sourceId) continue;
          const base = scoreRelationship(sourceNode, revNode);
          upsert(revNode, (base + priority) * sourceWeight(edge, base));
        }
      };

      processReverse(revNode.relatesTo, RELATION_PRIORITY.reverseRelatesTo);
      processReverse(revNode.supports, RELATION_PRIORITY.reverseSupports);
      processReverse(revNode.validates, RELATION_PRIORITY.reverseValidates);
    }

    return Array.from(candidates.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(({ node }) => toAuthorityItem(node));
  }

  // ─── Slot Functions ────────────────────────────────────────────────────────

  function getServiceSlots(slug: string) {
    const key = `service:${slug}`;
    const cached = resolverCache.get(key);
    if (cached) return cached;
    const result = {
      services: resolveSlot(slug, ['service'], ['service']),
    };
    resolverCache.set(key, result);
    return result;
  }

  function getFeatureSlots(slug: string) {
    const key = `feature:${slug}`;
    const cached = resolverCache.get(key);
    if (cached) return cached;
    const result = {
      services: resolveSlot(slug, ['feature'], ['service']),
    };
    resolverCache.set(key, result);
    return result;
  }

  function getBlogSlots(slug: string) {
    const key = `blog:${slug}`;
    const cached = resolverCache.get(key);
    if (cached) return cached;
    const result = {
      resources: resolveSlot(slug, ['blog'], ['resource']),
      industries: resolveSlot(slug, ['blog'], ['industry-detail']),
    };
    resolverCache.set(key, result);
    return result;
  }

  function getResourceSlots(slug: string) {
    const key = `resource:${slug}`;
    const cached = resolverCache.get(key);
    if (cached) return cached;
    const result = {
      services: resolveSlot(slug, ['resource'], ['service']),
      industries: resolveSlot(slug, ['resource'], ['industry-detail']),
    };
    resolverCache.set(key, result);
    return result;
  }

  function getCaseStudySlots(slug: string) {
    const key = `case-study:${slug}`;
    const cached = resolverCache.get(key);
    if (cached) return cached;
    const result = {
      industries: resolveSlot(slug, ['case-study'], ['industry-detail']),
      resources: resolveSlot(slug, ['case-study'], ['resource']),
    };
    resolverCache.set(key, result);
    return result;
  }

  function getIndustrySlots(slug: string) {
    const key = `industry:${slug}`;
    const cached = resolverCache.get(key);
    if (cached) return cached;
    const result = {
      services: resolveSlot(slug, ['industry-detail', 'industry-category'], ['service']),
      caseStudies: resolveSlot(slug, ['industry-detail', 'industry-category'], ['case-study']),
      resources: resolveSlot(slug, ['industry-detail', 'industry-category'], ['resource']),
    };
    resolverCache.set(key, result);
    return result;
  }

  // ─── Route Slugs ──────────────────────────────────────────────────────────

  function getAllRouteSlugs() {
    return {
      services: getNodesByType('service').map(n => n.slug),
      features: getNodesByType('feature').map(n => n.slug),
      industries: getNodesByType('industry-category', 'industry-detail').map(n => n.slug),
      caseStudies: getNodesByType('case-study').map(n => n.slug),
      blogPosts: getNodesByType('blog').map(n => n.slug),
      resources: getNodesByType('resource').map(n => n.slug),
    };
  }

  return {
    getServiceSlots,
    getFeatureSlots,
    getBlogSlots,
    getResourceSlots,
    getCaseStudySlots,
    getIndustrySlots,
    getAllRouteSlugs,
  };
}
