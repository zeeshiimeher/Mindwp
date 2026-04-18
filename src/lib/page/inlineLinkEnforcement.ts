import type { PageIdentity, PageType } from '@/lib/page/pageIdentity';

const INLINE_LINK_PAGE_TYPES = new Set<PageType>(['blog', 'resource']);

export function enforceInlineLinkUsage(pageIdentity: PageIdentity, sourcePageType: PageType) {
  if (
    !INLINE_LINK_PAGE_TYPES.has(sourcePageType) ||
    !INLINE_LINK_PAGE_TYPES.has(pageIdentity.pageType) ||
    pageIdentity.pageType !== sourcePageType
  ) {
    throw new Error(
      `Inline links are only allowed on blog/resource pages (pageId="${pageIdentity.pageId}", pageType="${pageIdentity.pageType}", attempted="${sourcePageType}")`
    );
  }
}
