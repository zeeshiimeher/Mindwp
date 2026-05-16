import type { Metadata } from 'next';
import fs from 'node:fs';

import { getallTopicSlugs, getTopicBySlug } from '@/domains/blog/api';
import { BLOG_CATEGORY_REGISTRY } from '@/domains/blog/categoryRegistry';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { RESOURCE_CATEGORY_REGISTRY } from '@/domains/resources/categoryRegistry';
import { CANONICAL_TOPICS, getNodeSystems } from '@/lib/content-graph/canonical';
import { getStructuredContentGraph } from '@/lib/content-graph/registry';
import type { ContentGraphNode } from '@/lib/content-graph/types';
import { normalizePath } from '@/lib/seo/config';
import { DEFAULT_OG_IMAGE } from '@/lib/seo/metadata';
import { resolveOGEntityFromPath, resolveOGImagePathForRoute } from '@/lib/seo/og/contract';
import { buildSEO } from '@/lib/seo/seo';
import { STATIC_ROUTE_DEFINITIONS } from '@/lib/site/staticPages';

import {
  type IndexingClassification,
  type IndexingPolicyKind,
  type IndexingPolicySource,
  resolveIndexingPolicy,
} from '../../../config/indexingPolicy';
import { assertRouteOwnershipEntries } from '../../../config/routeOwnership';

export interface RouteInventoryEntry {
  key: string;
  kind: IndexingPolicyKind;
  path: string;
  classification: IndexingClassification;
  policySource: IndexingPolicySource;
  title: string;
  description: string;
  canonical: string;
  openGraph: {
    title: string;
    description: string;
    url: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
  };
  indexable: boolean;
  topics: string[];
  activeSystems: string[];
  industries: string[];
}

const routeInventoryPromise = new Map<string, Promise<RouteInventoryEntry[]>>();
type SystemSnapshot = {
  routeInventory?: RouteInventoryEntry[];
};

function slugTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function readSnapshotInventory(): RouteInventoryEntry[] | null {
  const snapshotPath = process.env.SYSTEM_SNAPSHOT_PATH;
  if (!snapshotPath) {
    return null;
  }

  try {
    const snapshot = JSON.parse(fs.readFileSync(snapshotPath, 'utf8')) as SystemSnapshot;
    return Array.isArray(snapshot.routeInventory) ? snapshot.routeInventory : null;
  } catch {
    return null;
  }
}

function normalizeOpenGraph(
  openGraph: unknown,
  title: string,
  description: string,
  canonical: string
) {
  const value =
    openGraph && typeof openGraph === 'object'
      ? (openGraph as {
          title?: string;
          description?: string;
          url?: string;
          image?: string;
          images?: string[];
        })
      : {};

  const inferredImages = [resolveOGImagePathForRoute(canonical)];

  return {
    title: value.title ?? title,
    description: value.description ?? description,
    url: normalizePath(value.url ?? canonical),
    images: inferredImages,
  };
}

function createEntry(seed: {
  key: string;
  kind: IndexingPolicyKind;
  path: string;
  title: string;
  description: string;
  openGraph?: unknown;
  topics?: string[];
  activeSystems?: string[];
  industries?: string[];
}): RouteInventoryEntry {
  const path = normalizePath(seed.path);
  const policy = resolveIndexingPolicy(seed.kind, path);

  return {
    key: seed.key,
    kind: seed.kind,
    path,
    classification: policy.classification,
    policySource: policy.source,
    title: seed.title.trim(),
    description: seed.description.trim(),
    canonical: path,
    openGraph: normalizeOpenGraph(seed.openGraph, seed.title.trim(), seed.description.trim(), path),
    robots: {
      index: policy.index,
      follow: policy.follow,
    },
    indexable: policy.index,
    topics: seed.topics ?? [],
    activeSystems: seed.activeSystems ?? [],
    industries: seed.industries ?? [],
  };
}

function createEntryFromNode(node: ContentGraphNode): RouteInventoryEntry {
  return createEntry({
    key: node.id,
    kind: node.type,
    path: node.path,
    title: node.title ?? slugTitle(node.slug),
    description: node.description ?? `${slugTitle(node.slug)} on MindWP.`,
    openGraph: node.openGraph,
    topics: node.topics ?? [],
    activeSystems: getNodeSystems(node),
    industries: node.industries ?? [],
  });
}

function createStaticEntries(): RouteInventoryEntry[] {
  return STATIC_ROUTE_DEFINITIONS.filter(route => route.includeInRouteInventory !== false).map(
    route => createEntry({ ...route, kind: 'static' })
  );
}

function createBlogCategoryEntries(): RouteInventoryEntry[] {
  return Object.values(BLOG_CATEGORY_REGISTRY).map(category =>
    createEntry({
      key: `blog-category:${category.slug}`,
      kind: 'blog-category',
      path: `/blog/category/${category.slug}`,
      title: `${category.label} Articles`,
      description: category.description,
    })
  );
}

function createResourceCategoryEntries(): RouteInventoryEntry[] {
  return Object.entries(RESOURCE_CATEGORY_REGISTRY).map(([slug, category]) =>
    createEntry({
      key: `resource-category:${slug}`,
      kind: 'resource-category',
      path: `/resources/category/${slug}`,
      title: `${category.label} Resources`,
      description: `${category.label} frameworks and implementation guidance for service businesses.`,
    })
  );
}

function createBlogTopicEntries(): RouteInventoryEntry[] {
  return getallTopicSlugs()
    .map(slug => getTopicBySlug(slug))
    .filter((topic): topic is NonNullable<typeof topic> => topic != null)
    .map(topic =>
      createEntry({
        key: `blog-topic:${topic.slug}`,
        kind: 'blog-topic',
        path: `/blog/topic/${topic.slug}`,
        title: `${topic.name} – Expert Insights & Resources`,
        description: topic.description,
        topics: [topic.slug],
      })
    );
}

function createTopicHubEntries(): RouteInventoryEntry[] {
  return CANONICAL_TOPICS.map(topic =>
    createEntry({
      key: `topic-hub:${topic}`,
      kind: 'topic-hub',
      path: `/topics/${topic}`,
      title: `${slugTitle(topic)} — Topic Hub`,
      description: `Everything about ${slugTitle(topic)}: services, insights, case studies, and resources.`,
      topics: [topic],
    })
  );
}

export async function buildRouteInventory(): Promise<RouteInventoryEntry[]> {
  const snapshotInventory = readSnapshotInventory();
  if (snapshotInventory) {
    return [...snapshotInventory].sort((left, right) => left.path.localeCompare(right.path));
  }

  await ensureGraphInitialized();

  const graphEntries = getStructuredContentGraph().nodes.map(createEntryFromNode);
  const entries = [
    ...createStaticEntries(),
    ...createBlogCategoryEntries(),
    ...createResourceCategoryEntries(),
    ...createBlogTopicEntries(),
    ...createTopicHubEntries(),
    ...graphEntries,
  ];

  assertRouteOwnershipEntries(entries.map(entry => ({ path: entry.path, kind: entry.kind })));

  return [...entries].sort((left, right) => left.path.localeCompare(right.path));
}

async function getRouteInventory() {
  const cacheKey = 'default';
  const cached = routeInventoryPromise.get(cacheKey);

  if (cached) {
    return cached;
  }

  const next = buildRouteInventory();
  routeInventoryPromise.set(cacheKey, next);
  return next;
}

export async function getInventoryEntry(path: string) {
  const normalizedPath = normalizePath(path);
  const entries = await getRouteInventory();
  return entries.find(entry => entry.path === normalizedPath) ?? null;
}

export function inventoryEntryToMetadata(entry: RouteInventoryEntry): Metadata {
  const metadata = buildSEO(
    {
      title: entry.title,
      description: entry.description,
      canonical: entry.canonical,
      ogTitle: entry.openGraph.title,
      ogDescription: entry.openGraph.description,
      image: entry.openGraph.images[0] ?? DEFAULT_OG_IMAGE.url,
      ogEntity: resolveOGEntityFromPath(entry.path),
      noIndex: !(entry.robots.index && entry.robots.follow),
    },
    entry.path
  );

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: entry.openGraph.images.map(image => ({
        ...DEFAULT_OG_IMAGE,
        url: image,
      })),
    },
    twitter: {
      ...metadata.twitter,
      images: entry.openGraph.images,
    },
    robots: {
      index: entry.robots.index,
      follow: entry.robots.follow,
    },
  };
}

export async function getInventoryMetadata(path: string): Promise<Metadata> {
  const entry = await getInventoryEntry(path);
  if (!entry) {
    throw new Error(`Missing inventory metadata for path: ${normalizePath(path)}`);
  }

  return inventoryEntryToMetadata(entry);
}

export async function getPrimaryNavigationEntries(paths: readonly string[]) {
  const entries = await Promise.all(paths.map(path => getInventoryEntry(path)));
  return entries.filter((entry): entry is RouteInventoryEntry => entry != null);
}

export async function buildSitemapRoutePaths(): Promise<string[]> {
  const entries = await buildRouteInventory();
  return entries.filter(entry => entry.indexable).map(entry => entry.path);
}
