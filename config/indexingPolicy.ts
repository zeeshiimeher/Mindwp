import type { ContentNodeType } from '@/lib/content-graph/types';
import { normalizePath } from '@/lib/seo/config';

import { getContentPolicy } from './contentPolicy';

export type IndexingPolicyKind =
  | ContentNodeType
  | 'static'
  | 'blog-category'
  | 'resource-category'
  | 'blog-topic'
  | 'topic-hub'
  | 'system-hub';

export type IndexingClassification =
  | 'marketing'
  | 'blog'
  | 'resources'
  | 'services'
  | 'features'
  | 'industries'
  | 'caseStudies'
  | 'topics'
  | 'system'
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

const APPROVED_PUBLIC_TOPICS = new Set<string>();

const INDEXABLE_CLASSIFICATIONS = new Set<IndexingClassification>([
  'marketing',
  'blog',
  'resources',
  'services',
  'features',
  'industries',
  'caseStudies',
  'topics',
  'system',
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
  ['/image-dashboard', 'dev'],
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

function getTopicSlugFromPath(path: string): string {
  return normalizePath(path).split('/').filter(Boolean).at(-1) ?? '';
}

export function isPublicTopic(slug: string): boolean {
  return APPROVED_PUBLIC_TOPICS.has(slug);
}

export function getApprovedPublicTopics(): string[] {
  return Array.from(APPROVED_PUBLIC_TOPICS).sort((left, right) => left.localeCompare(right));
}

function resolveTopicClassification(
  kind: IndexingPolicyKind,
  path: string
): ResolvedIndexingPolicy {
  const slug = getTopicSlugFromPath(path);

  if (kind === 'blog-topic') {
    return buildPolicy('topics', 'explicit', {
      index: false,
      follow: true,
      disallow: true,
    });
  }

  return buildPolicy('topics', 'explicit', {
    index: isPublicTopic(slug),
    follow: true,
    disallow: !isPublicTopic(slug),
  });
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

function resolveKindClassification(
  kind: IndexingPolicyKind,
  routePathForKind: string
): ResolvedIndexingPolicy | null {
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
    case 'topic-hub':
    case 'blog-topic':
      return resolveTopicClassification(kind, routePathForKind);
    case 'system-hub':
      return buildPolicy('system', 'explicit');
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
    resolveKindClassification(kind, path) ??
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
