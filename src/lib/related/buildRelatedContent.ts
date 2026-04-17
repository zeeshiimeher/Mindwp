import { RELATED_SECTION_LABELS } from '@/config/ui-intelligence';
import { getRelatedContent, type ContentNodeType, type RelatedContent } from '@/lib/graph/query';
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
  categorySlug?: string;
  systems?: string[];
  industries?: string[];
  isIndustryPage?: boolean;
  includeCaseStudies?: boolean;
  includeServices?: boolean;
};

const MAX_GROUPS_BY_PAGE_TYPE: Record<PageType, number> = {
  service: 1,
  feature: 1,
  blog: 1,
  resource: 2,
  'case-study': 1,
  'industry-detail': 1,
  'industry-category': 2,
  page: 0,
};

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

function toRelatedItemDescription(itemType: keyof RelatedContent) {
  switch (itemType) {
    case 'services':
      return 'Explore the related service.';
    case 'resources':
      return 'Go deeper with a related resource.';
    case 'blog':
      return 'Read the related article.';
    case 'caseStudies':
      return 'See the related implementation outcome.';
    case 'industries':
      return 'See where this applies in practice.';
  }
}

function shouldIncludeSlot(
  slot: keyof RelatedContent,
  options: Pick<BuildRelatedContentOptions, 'includeCaseStudies' | 'includeServices'>
) {
  if (slot === 'caseStudies' && options.includeCaseStudies === false) {
    return false;
  }

  if (slot === 'services' && options.includeServices === false) {
    return false;
  }

  return true;
}

export function buildRelatedContent(options: BuildRelatedContentOptions): RelatedContentOutput {
  const nodeType = resolveNodeType(options.pageType, options.nodeType);
  const slug = options.slug ?? options.categorySlug ?? extractSlugFromPageId(options.pageId);
  const maxGroups = MAX_GROUPS_BY_PAGE_TYPE[options.pageType];

  if (!nodeType || !slug || maxGroups === 0) {
    return {
      groups: [],
      emptyState: {
        title: 'No related content configured',
        description: 'This page does not participate in the shared related-content system.',
      },
    };
  }

  const related = getRelatedContent(slug, nodeType);
  const labels = RELATED_SECTION_LABELS[nodeType] ?? {};
  const slotKeys = Object.keys(labels) as Array<keyof RelatedContent>;
  const groups: RelatedContentGroup[] = [];

  for (const slot of slotKeys) {
    if (!shouldIncludeSlot(slot, options)) {
      continue;
    }

    const label = labels[slot];
    const items = related[slot];
    if (!label || !items || items.length === 0) {
      continue;
    }

    groups.push({
      label: label.title,
      description: label.description,
      items: items.slice(0, 3).map(item => ({
        title: item.title,
        href: item.path,
        description: item.description || toRelatedItemDescription(slot),
      })),
    });

    if (groups.length >= maxGroups) {
      break;
    }
  }

  if (groups.length > 0) {
    return { groups };
  }

  return {
    groups: [],
    emptyState: {
      title: 'No related content available',
      description: 'This page is eligible for related content, but no qualifying items were found.',
    },
  };
}