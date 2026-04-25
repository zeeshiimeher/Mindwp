import { SmartRelatedSectionClient } from '@/components/system/SmartRelatedSectionClient';
import type { ContentNodeType } from '@/lib/graph/query';
import type { PageType } from '@/lib/page/pageIdentity';
import { buildRelatedContent } from '@/lib/related/buildRelatedContent';

interface SmartRelatedSectionProps {
  pageId?: string;
  pageType?: PageType;
  slug?: string;
  nodeType?: ContentNodeType;
  categorySlug?: string;
  systems?: string[];
  industries?: string[];
  includeCaseStudies?: boolean;
  includeServices?: boolean;
  items?: unknown;
  groups?: unknown;
  manualContent?: unknown;
  manualItems?: unknown;
  manualList?: unknown;
  /** Section type — controls behavior via section-intelligence rules */
  sectionType?: string;
}

const REQUIRED_RELATED_CONTENT_PAGE_TYPES = new Set<PageType>([
  'service',
  'feature',
  'industry-detail',
  'industry-category',
  'case-study',
]);

export function SmartRelatedSection({
  pageId,
  pageType,
  slug,
  nodeType,
  categorySlug: _categorySlug,
  systems: _systems,
  industries: _industries,
  includeCaseStudies: _includeCaseStudies,
  includeServices: _includeServices,
  items: _items,
  groups: _groups,
  manualContent: _manualContent,
  manualItems: _manualItems,
  manualList: _manualList,
  sectionType,
}: SmartRelatedSectionProps) {
  if (!pageId || !pageType) {
    throw new Error('SmartRelatedSection requires explicit pageId and pageType props.');
  }

  const content = buildRelatedContent({
    pageId,
    pageType,
    slug,
    nodeType,
  });

  if (REQUIRED_RELATED_CONTENT_PAGE_TYPES.has(pageType) && content.groups.length === 0) {
    throw new Error('Related content required');
  }

  return (
    <SmartRelatedSectionClient
      pageId={pageId}
      pageType={pageType}
      content={content}
      sectionType={sectionType}
    />
  );
}
