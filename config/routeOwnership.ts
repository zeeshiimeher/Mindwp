import { STATIC_ROUTE_DEFINITIONS } from '@/lib/site/staticPages';

import type { IndexingPolicyKind } from './indexingPolicy';

export type RouteOwner =
  | 'static-routes'
  | 'content-graph'
  | 'blog-category-registry'
  | 'resource-category-registry'
  | 'blog-topic-registry'
  | 'topic-hub-registry';

export type RouteOwnershipRule = {
  owner: RouteOwner;
  kind: IndexingPolicyKind;
  exact?: string;
  prefix?: string;
  aliasOf?: string;
};

export type RouteOwnershipEntry = {
  path: string;
  kind: IndexingPolicyKind;
  owner: RouteOwner;
};

const STATIC_ROUTE_RULES: RouteOwnershipRule[] = STATIC_ROUTE_DEFINITIONS.map(route => ({
  owner: 'static-routes',
  kind: 'static',
  exact: route.path,
}));

export const ROUTE_OWNERSHIP_RULES: RouteOwnershipRule[] = [
  ...STATIC_ROUTE_RULES,
  {
    owner: 'blog-category-registry',
    kind: 'blog-category',
    prefix: '/blog/category/',
  },
  {
    owner: 'resource-category-registry',
    kind: 'resource-category',
    prefix: '/resources/category/',
  },
  {
    owner: 'blog-topic-registry',
    kind: 'blog-topic',
    prefix: '/blog/topic/',
  },
  {
    owner: 'topic-hub-registry',
    kind: 'topic-hub',
    prefix: '/topics/',
  },
  {
    owner: 'content-graph',
    kind: 'blog',
    prefix: '/blog/',
  },
  {
    owner: 'content-graph',
    kind: 'case-study',
    prefix: '/case-studies/',
  },
  {
    owner: 'content-graph',
    kind: 'feature',
    prefix: '/features/',
  },
  {
    owner: 'content-graph',
    kind: 'industry-category',
    prefix: '/industries/',
  },
  {
    owner: 'content-graph',
    kind: 'industry-detail',
    prefix: '/industries/',
  },
  {
    owner: 'content-graph',
    kind: 'resource',
    prefix: '/resources/',
  },
  {
    owner: 'content-graph',
    kind: 'service',
    prefix: '/services/',
  },
];

export function resolveRouteOwnership(
  path: string,
  kind: IndexingPolicyKind
): RouteOwnershipRule | null {
  for (const rule of ROUTE_OWNERSHIP_RULES) {
    if (rule.kind !== kind) {
      continue;
    }

    if (rule.exact && rule.exact === path) {
      return rule;
    }

    if (rule.prefix && path.startsWith(rule.prefix)) {
      return rule;
    }
  }

  return null;
}

export function assertRouteOwnershipEntries(
  entries: Array<{ path: string; kind: IndexingPolicyKind }>
) {
  const seenPaths = new Map<string, RouteOwnershipEntry>();

  for (const entry of entries) {
    const rule = resolveRouteOwnership(entry.path, entry.kind);
    if (!rule) {
      throw new Error(`Missing route ownership rule for ${entry.kind}:${entry.path}`);
    }

    const ownedEntry: RouteOwnershipEntry = {
      path: entry.path,
      kind: entry.kind,
      owner: rule.owner,
    };

    const existing = seenPaths.get(entry.path);
    if (existing) {
      throw new Error(
        `Duplicate route ownership for ${entry.path}: ${existing.owner}:${existing.kind} conflicts with ${ownedEntry.owner}:${ownedEntry.kind}`
      );
    }

    seenPaths.set(entry.path, ownedEntry);
  }

  return seenPaths;
}
