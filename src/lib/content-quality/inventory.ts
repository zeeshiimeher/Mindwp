import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';

import { getallTopicSlugs, getTopicBySlug } from '@/domains/blog/api';
import { BLOG_CATEGORY_REGISTRY } from '@/domains/blog/categoryRegistry';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { RESOURCE_CATEGORY_REGISTRY } from '@/domains/resources/categoryRegistry';
import { CANONICAL_SYSTEMS, CANONICAL_TOPICS } from '@/lib/content-graph/canonical';
import { getStructuredContentGraph } from '@/lib/content-graph/registry';
import type { ContentGraphNode, ContentNodeType } from '@/lib/content-graph/types';
import { normalizePath } from '@/lib/seo/config';
import { getMetadataBase, SITE_NAME, toAbsoluteUrl } from '@/lib/seo/config';
import { DEFAULT_OG_IMAGE, DEFAULT_OG_IMAGE_PATH } from '@/lib/seo/metadata';

type InventoryKind =
  | ContentNodeType
  | 'static'
  | 'blog-category'
  | 'resource-category'
  | 'blog-topic'
  | 'topic-hub'
  | 'system-hub';

export interface RouteInventoryEntry {
  key: string;
  kind: InventoryKind;
  path: string;
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
  systems: string[];
  industries: string[];
}

const routeInventoryPromise = new Map<string, Promise<RouteInventoryEntry[]>>();
const workspaceRoot = process.cwd();

type StaticRouteSeed = {
  key: string;
  path: string;
  title: string;
  description: string;
  indexable?: boolean;
  follow?: boolean;
};

const STATIC_ROUTE_SEEDS: StaticRouteSeed[] = [
  {
    key: 'static:home',
    path: '/',
    title: 'MindWP',
    description:
      'Systems-first digital infrastructure for service businesses that need websites, CRM, automation, and authority to work together.',
  },
  {
    key: 'static:about',
    path: '/about',
    title: 'About MindWP',
    description:
      'Learn how MindWP designs systems-first digital infrastructure for service businesses.',
  },
  {
    key: 'static:blog',
    path: '/blog',
    title: 'MindWP Blog',
    description:
      'Technical insights on websites, CRM automation, local authority, and revenue systems for service businesses.',
  },
  {
    key: 'static:case-studies',
    path: '/case-studies',
    title: 'MindWP Case Studies',
    description:
      'Proof-of-results case studies showing how service businesses improve visibility, lead handling, and revenue systems.',
  },
  {
    key: 'static:contact',
    path: '/contact',
    title: 'Contact MindWP',
    description:
      'Start a systems-first conversation about websites, automation, CRM, and authority infrastructure.',
  },
  {
    key: 'static:conversation',
    path: '/conversation',
    title: 'Start a Conversation',
    description:
      'Redirect entrypoint into the canonical MindWP contact flow with preserved system and source context.',
    indexable: false,
  },
  {
    key: 'static:cookies',
    path: '/cookies',
    title: 'Cookie Policy',
    description: 'Read the MindWP cookie policy and understand how site data is used.',
  },
  {
    key: 'static:faq',
    path: '/faq',
    title: 'MindWP FAQ',
    description:
      'Answers to common questions about systems-first websites, CRM automation, and implementation.',
  },
  {
    key: 'static:features',
    path: '/features',
    title: 'MindWP Features',
    description:
      'Explore the structured feature layers that support lead handling, CRM, booking, and reputation systems.',
  },
  {
    key: 'static:industries',
    path: '/industries',
    title: 'MindWP Industries',
    description:
      'Industry-specific infrastructure for roofing, HVAC, salons, clinics, legal, automotive, and more.',
  },
  {
    key: 'static:privacy',
    path: '/privacy',
    title: 'Privacy Policy',
    description: 'Read the MindWP privacy policy and data handling commitments.',
  },
  {
    key: 'static:resources',
    path: '/resources',
    title: 'MindWP Resources',
    description:
      'Guides and frameworks for websites, CRM automation, revenue visibility, and local authority systems.',
  },
  {
    key: 'static:services',
    path: '/services',
    title: 'MindWP Services',
    description:
      'Structured services for smart websites, automation, CRM, reputation, and growth systems.',
  },
  {
    key: 'static:terms',
    path: '/terms',
    title: 'Terms of Service',
    description: 'Read the MindWP terms of service and engagement expectations.',
  },
  {
    key: 'static:components',
    path: '/components',
    title: 'Components Reference',
    description: 'Internal component reference for the production design system.',
    indexable: false,
  },
  {
    key: 'static:system-dashboard',
    path: '/dev/system-dashboard',
    title: 'System Dashboard',
    description:
      'Unified internal control plane for system health, issue diagnostics, topic authority, and inventory visibility.',
    indexable: false,
  },
  {
    key: 'static:client-dashboard',
    path: '/dashboard',
    title: 'Performance Dashboard',
    description:
      'Client-facing performance dashboard showing system health, prioritized improvements, and page-level progress in business language.',
    indexable: false,
  },
  {
    key: 'static:authority-dashboard',
    path: '/dev/authority-dashboard',
    title: 'Authority Dashboard Redirect',
    description:
      'Legacy internal authority dashboard route that redirects to the system dashboard control plane.',
    indexable: false,
  },
  {
    key: 'static:cta-label-contract',
    path: '/dev/cta-label-contract',
    title: 'CTA Label Contract',
    description: 'Internal SmartCTA contract surface for deterministic label and href validation.',
    indexable: false,
  },
  {
    key: 'static:image-dashboard',
    path: '/image-dashboard',
    title: 'Image Dashboard',
    description:
      'Internal image-system dashboard for generation scores, operational issues, and image learning memory.',
    indexable: false,
  },
];

function slugTitle(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function normalizeRobots(
  robots: unknown,
  defaultIndex = true,
  defaultFollow = true
): { index: boolean; follow: boolean } {
  if (robots && typeof robots === 'object') {
    const value = robots as {
      index?: boolean;
      follow?: boolean;
      noindex?: boolean;
      nofollow?: boolean;
    };

    return {
      index: value.index ?? (value.noindex != null ? !value.noindex : defaultIndex),
      follow: value.follow ?? (value.nofollow != null ? !value.nofollow : defaultFollow),
    };
  }

  return { index: defaultIndex, follow: defaultFollow };
}

function resolveInventoryOpenGraphImages(canonical: string): string[] {
  const segments = normalizePath(canonical).split('/').filter(Boolean);
  if (segments.length < 2) {
    return [DEFAULT_OG_IMAGE_PATH];
  }

  const [rootSegment] = segments;
  const assetDirectoryByRouteRoot: Partial<Record<string, string>> = {
    blog: 'blog',
    'case-study': 'case-studies',
    features: 'features',
    industries: 'industries',
    resources: 'resources',
    services: 'services',
  };

  const assetDirectory = rootSegment ? assetDirectoryByRouteRoot[rootSegment] : null;
  const assetSlug = segments.at(-1);
  if (!assetDirectory || !assetSlug) {
    return [DEFAULT_OG_IMAGE_PATH];
  }

  const candidatePath = `/images/${assetDirectory}/${assetSlug}.webp`;
  const candidateFilePath = path.join(workspaceRoot, 'public', candidatePath.replace(/^\//, ''));

  return fs.existsSync(candidateFilePath) ? [candidatePath] : [DEFAULT_OG_IMAGE_PATH];
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

  const explicitImages =
    value.images && value.images.length > 0 ? value.images : value.image ? [value.image] : [];
  const inferredImages = resolveInventoryOpenGraphImages(canonical);
  const onlyUsesDefaultImage =
    explicitImages.length > 0 && explicitImages.every(image => image === DEFAULT_OG_IMAGE_PATH);

  return {
    title: value.title ?? title,
    description: value.description ?? description,
    url: normalizePath(value.url ?? canonical),
    images:
      explicitImages.length === 0 ||
      (onlyUsesDefaultImage && inferredImages[0] !== DEFAULT_OG_IMAGE_PATH)
        ? inferredImages
        : explicitImages,
  };
}

function createEntry(seed: {
  key: string;
  kind: InventoryKind;
  path: string;
  title: string;
  description: string;
  openGraph?: unknown;
  robots?: unknown;
  indexable?: boolean;
  follow?: boolean;
  topics?: string[];
  systems?: string[];
  industries?: string[];
}): RouteInventoryEntry {
  const path = normalizePath(seed.path);
  const robots = normalizeRobots(seed.robots, seed.indexable ?? true, seed.follow ?? true);

  return {
    key: seed.key,
    kind: seed.kind,
    path,
    title: seed.title.trim(),
    description: seed.description.trim(),
    canonical: path,
    openGraph: normalizeOpenGraph(seed.openGraph, seed.title.trim(), seed.description.trim(), path),
    robots,
    indexable: robots.index,
    topics: seed.topics ?? [],
    systems: seed.systems ?? [],
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
    robots: node.robots,
    topics: node.topics ?? [],
    systems: node.systems ?? [],
    industries: node.industries ?? [],
  });
}

function createStaticEntries(): RouteInventoryEntry[] {
  return STATIC_ROUTE_SEEDS.map(seed => createEntry({ ...seed, kind: 'static' }));
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

function createSystemHubEntries(): RouteInventoryEntry[] {
  return CANONICAL_SYSTEMS.map(system =>
    createEntry({
      key: `system-hub:${system}`,
      kind: 'system-hub',
      path: `/systems/${system}`,
      title: `${slugTitle(system)} — System Hub`,
      description: `Everything about ${slugTitle(system)}: services, insights, case studies, and resources.`,
      systems: [system],
    })
  );
}

export async function buildRouteInventory(): Promise<RouteInventoryEntry[]> {
  await ensureGraphInitialized();

  const graphEntries = getStructuredContentGraph().nodes.map(createEntryFromNode);
  const deduped = new Map<string, RouteInventoryEntry>();

  for (const entry of [
    ...createStaticEntries(),
    ...createBlogCategoryEntries(),
    ...createResourceCategoryEntries(),
    ...createBlogTopicEntries(),
    ...createTopicHubEntries(),
    ...createSystemHubEntries(),
    ...graphEntries,
  ]) {
    deduped.set(entry.path, entry);
  }

  return Array.from(deduped.values()).sort((left, right) => left.path.localeCompare(right.path));
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
  const title = entry.path === '/' ? { absolute: entry.title } : entry.title;
  const openGraphImages = entry.openGraph.images.map(image => ({
    ...DEFAULT_OG_IMAGE,
    url: image,
  }));

  return {
    metadataBase: getMetadataBase(),
    title,
    description: entry.description,
    alternates: {
      canonical: entry.canonical,
    },
    openGraph: {
      title: entry.openGraph.title,
      description: entry.openGraph.description,
      url: toAbsoluteUrl(entry.openGraph.url),
      siteName: SITE_NAME,
      images: openGraphImages,
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.openGraph.title,
      description: entry.openGraph.description,
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
