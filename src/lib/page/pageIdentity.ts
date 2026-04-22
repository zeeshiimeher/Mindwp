import type { ContactSourceType } from '@/lib/contact/contactHref';

export type PageType =
  | 'service'
  | 'feature'
  | 'blog'
  | 'resource'
  | 'case-study'
  | 'industry-detail'
  | 'industry-category'
  | 'page';

export type CTAIntent = 'entry' | 'diagnostic' | 'comparison' | 'conversion';

export type CTAPosition = 'hero' | 'pre-mid' | 'mid' | 'sidebar' | 'footer';

export type PageIdentity = {
  pageId: string;
  pageType: PageType;
};

export function buildPageId(pageType: PageType, slug: string) {
  return `${pageType}:${slug}`;
}

export function toContactSourceType(pageType: PageType): ContactSourceType {
  switch (pageType) {
    case 'industry-detail':
    case 'industry-category':
      return 'industry';
    default:
      return pageType;
  }
}

export function inferPageIntent(pageType: PageType): CTAIntent {
  switch (pageType) {
    case 'service':
      return 'conversion';
    case 'feature':
    case 'industry-detail':
    case 'industry-category':
      return 'comparison';
    case 'case-study':
      return 'diagnostic';
    case 'blog':
    case 'resource':
    case 'page':
    default:
      return 'entry';
  }
}

export function isHomepage(pageId: string) {
  return pageId === 'page:home';
}

export function isIndustryPageType(pageType: PageType) {
  return pageType === 'industry-detail' || pageType === 'industry-category';
}
