import { RELATED_SECTION_META } from '@/config/ui-intelligence';
import {
  type ContentNodeType,
  getRelatedContent,
  type RelatedContent,
  type RelatedContentItem,
} from '@/lib/graph/query';
import type { PageType } from '@/lib/page/pageIdentity';

export type RelatedContentGroup = {
  label: string;
  description?: string;
  items: Array<{
    title: string;
    href: string;
    description?: string;
  }>;
};

export type RelatedContentOutput = {
  groups: RelatedContentGroup[];
  emptyState?: {
    title: string;
    description: string;
  };
};

export type BuildRelatedContentOptions = {
  pageId: string;
  pageType: PageType;
  slug?: string;
  nodeType?: ContentNodeType;
};

const MAX_ITEMS = 3;

function extractSlugFromPageId(pageId: string) {
  const parts = pageId.split(':');
  return parts.length > 1 ? parts.slice(1).join(':') : undefined;
}

function resolveNodeType(pageType: PageType, nodeType?: ContentNodeType): ContentNodeType | null {
  if (nodeType) {
    return nodeType;
  }

  if (pageType === 'page') {
    return null;
  }

  return pageType;
}

function appendUniqueItems(
  selected: RelatedContentItem[],
  candidates: RelatedContentItem[],
  count: number,
  options?: { filter?: (item: RelatedContentItem) => boolean }
) {
  if (count <= 0) {
    return;
  }

  const seenPaths = new Set(selected.map(item => item.path));

  for (const item of candidates) {
    if (selected.length >= MAX_ITEMS || count <= 0) {
      break;
    }

    if (seenPaths.has(item.path)) {
      continue;
    }

    if (options?.filter && !options.filter(item)) {
      continue;
    }

    selected.push(item);
    seenPaths.add(item.path);
    count -= 1;
  }
}

function buildMixedItems(nodeType: ContentNodeType, related: RelatedContent) {
  const selected: RelatedContentItem[] = [];
  const services = related.services;
  const resources = related.resources;
  const caseStudies = related.caseStudies;
  const industries = related.industries;

  switch (nodeType) {
    case 'service':
      appendUniqueItems(selected, services, 1);
      appendUniqueItems(selected, resources, 1);
      appendUniqueItems(selected, industries, MAX_ITEMS - selected.length);
      appendUniqueItems(selected, services, MAX_ITEMS - selected.length);
      break;
    case 'feature':
      appendUniqueItems(selected, services, 1);
      appendUniqueItems(selected, services, MAX_ITEMS - selected.length);
      break;
    case 'blog':
      appendUniqueItems(selected, resources, 2);
      appendUniqueItems(selected, industries, 1);
      appendUniqueItems(selected, resources, MAX_ITEMS - selected.length);
      break;
    case 'resource':
      appendUniqueItems(selected, services, 2);
      appendUniqueItems(selected, industries, 1);
      appendUniqueItems(selected, services, MAX_ITEMS - selected.length);
      break;
    case 'industry-category':
      appendUniqueItems(selected, industries, 2);
      appendUniqueItems(selected, services, 1);
      appendUniqueItems(selected, services, MAX_ITEMS - selected.length);
      break;
    case 'industry-detail':
      appendUniqueItems(selected, services, 2);
      appendUniqueItems(selected, caseStudies, 1);
      appendUniqueItems(selected, services, MAX_ITEMS - selected.length);
      break;
    case 'case-study':
      appendUniqueItems(selected, services, 1);
      appendUniqueItems(selected, resources, 2);
      appendUniqueItems(selected, industries, MAX_ITEMS - selected.length);
      break;
  }

  return selected.slice(0, MAX_ITEMS);
}

export function buildRelatedContent(options: BuildRelatedContentOptions): RelatedContentOutput {
  const nodeType = resolveNodeType(options.pageType, options.nodeType);
  const slug = options.slug ?? extractSlugFromPageId(options.pageId);

  if (!nodeType || !slug || options.pageType === 'page') {
    return {
      groups: [],
      emptyState: {
        title: 'No related content configured',
        description: 'This page does not participate in the shared related-content system.',
      },
    };
  }

  const related = getRelatedContent(slug, nodeType);
  const items = buildMixedItems(nodeType, related);
  const meta = RELATED_SECTION_META[nodeType];

  if (meta && items.length > 0) {
    return {
      groups: [
        {
          label: meta.title,
          description: meta.description,
          items: items.map(item => ({
            title: item.title,
            href: item.path,
            description: item.description,
          })),
        },
      ],
    };
  }

  return {
    groups: [],
    emptyState: {
      title: 'No related content available',
      description: 'This page is eligible for related content, but no qualifying items were found.',
    },
  };
}
