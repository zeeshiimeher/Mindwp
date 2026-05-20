import type { ContentNodeType } from '@/lib/content-graph/types';
import { normalizePath } from '@/lib/seo/config';

import { getContentPolicy } from './contentPolicy';

export type IndexingPolicyKind = ContentNodeType | 'static' | 'blog-category' | 'resource-category';

export type IndexingClassification =
  | 'marketing'
  | 'blog'
  | 'resources'
  | 'services'
  | 'features'
  | 'industries'
  | 'caseStudies'
  | 'utility'
  | 'dev';

export type IndexingPolicySource = 'explicit' | 'fallback';

export type ResolvedIndexingPolicy = {
  classification: IndexingClassification;
  source: IndexingPolicySource;
  index: boolean;
  follow: boolean;
  disallow: boolean;
};

const INDEXABLE_CLASSIFICATIONS = new Set<IndexingClassification>([
  'marketing',
  'blog',
  'resources',
  'services',
  'features',
  'industries',
  'caseStudies',
]);

const MARKETING_PATHS = new Set(['/', '/about', '/contact', '/cookies', '/privacy', '/terms']);

const CLASSIFIED_STATIC_PATHS = new Map<string, IndexingClassification>([
  ['/blog', 'blog'],
  ['/case-studies', 'caseStudies'],
  ['/features', 'features'],
  ['/industries', 'industries'],
  ['/resources', 'resources'],
  ['/services', 'services'],
  ['/components', 'dev'],
]);

const CONTENT_NODE_TYPES: ContentNodeType[] = [
  'service',
  'feature',
  'industry-category',
  'industry-detail',
  'case-study',
  'blog',
  'resource',
];

const CONTENT_NODE_TYPE_SET = new Set<IndexingPolicyKind>(CONTENT_NODE_TYPES);

function buildPolicy(
  classification: IndexingClassification,
  source: IndexingPolicySource,
  overrides: Partial<Pick<ResolvedIndexingPolicy, 'index' | 'follow' | 'disallow'>> = {}
): ResolvedIndexingPolicy {
  const index = INDEXABLE_CLASSIFICATIONS.has(classification);

  return {
    classification,
    source,
    index: overrides.index ?? index,
    follow: overrides.follow ?? index,
    disallow: overrides.disallow ?? !index,
  };
}

function resolveStaticClassification(path: string): ResolvedIndexingPolicy {
  if (MARKETING_PATHS.has(path)) {
    return buildPolicy('marketing', 'explicit');
  }

  if (path.startsWith('/dev/')) {
    return buildPolicy('dev', 'explicit');
  }

  const mapped = CLASSIFIED_STATIC_PATHS.get(path);
  if (mapped) {
    return buildPolicy(mapped, 'explicit');
  }

  return buildPolicy('utility', 'fallback');
}

function resolveKindClassification(kind: IndexingPolicyKind): ResolvedIndexingPolicy | null {
  if (CONTENT_NODE_TYPE_SET.has(kind)) {
    return buildPolicy(
      getContentPolicy(kind as ContentNodeType).indexingClassification,
      'explicit'
    );
  }

  switch (kind) {
    case 'blog-category':
      return buildPolicy('blog', 'explicit');
    case 'resource-category':
      return buildPolicy('resources', 'explicit');
    default:
      return null;
  }
}

export function resolveIndexingPolicy(
  kind: IndexingPolicyKind,
  routePath: string
): ResolvedIndexingPolicy {
  const path = normalizePath(routePath);

  if (kind === 'static') {
    return resolveStaticClassification(path);
  }

  return (
    resolveKindClassification(kind) ??
    buildPolicy('utility', 'fallback', {
      index: false,
      follow: false,
      disallow: true,
    })
  );
}

export function isIndexablePolicy(policy: ResolvedIndexingPolicy): boolean {
  return policy.index;
}
