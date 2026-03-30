import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';

export type { BlogCategory } from './categoryRegistry';
export { BLOG_CATEGORY_REGISTRY } from './categoryRegistry';

import type { BlogCategory } from './categoryRegistry';

export type BlogPostSection =
  | {
      type: 'introduction';
      content: string[];
    }
  | {
      type: 'content';
      heading: string;
      content: string | string[];
      list?: string[];
      callout?: string;
    }
  | {
      type: 'cta';
      heading: string;
      content: string;
      buttonText: string;
      buttonUrl: string;
    }
  | {
      type: 'callout';
      callout: string;
    }
  | {
      type: 'takeaways';
      heading?: string;
      content?: string | string[];
      items: string[];
    }
  | {
      type: 'quote';
      heading?: string;
      quote: string;
      attribution?: string;
    }
  | {
      type: 'steps';
      heading?: string;
      content?: string | string[];
      steps: Array<{ label: string; description?: string }>;
    }
  | {
      type: 'checklist';
      heading?: string;
      content?: string | string[];
      items: string[];
      columns?: 1 | 2;
    }
  | {
      type: 'image';
      heading?: string;
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      type: 'faq';
      items: Array<{
        question: string;
        answer: string;
      }>;
    };

export interface BlogPostData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  seo: SharedSeoData & {
    title: string;
    description: string;
    canonical: string;
    openGraph?: OpenGraphData;
  };
  publishDate: string;
  authorKey: string;
  category: BlogCategory;
  industries: string[];
  systems: string[];
  topics: string[];
  relatedServices?: string[];
  layoutType?: string;
  sections: BlogPostSection[];
  primaryKeyword: string;
  supportingKeywords: string[];
  tags: string[];
}
