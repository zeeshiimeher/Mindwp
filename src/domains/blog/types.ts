import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';
import type { ActiveSystem } from '@/lib/content-graph/canonical';

export type { BlogCategory } from './categoryRegistry';
export { BLOG_CATEGORY_REGISTRY } from './categoryRegistry';

import type { BlogCategory } from './categoryRegistry';

type BlogContentValue = string | string[];

type BlogFaqItem = {
  question: string;
  answer: string;
};

type BlogStepItem = {
  label: string;
  description?: string;
};

export type BlogPostSection =
  | {
      type: 'introduction';
      content: string[];
    }
  | {
      type: 'content';
      heading: string;
      content: BlogContentValue;
      list?: string[];
      callout?: string;
    }
  | {
      type: 'callout';
      callout: string;
    }
  | {
      type: 'takeaways';
      heading?: string;
      content?: BlogContentValue;
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
      content?: BlogContentValue;
      steps: BlogStepItem[];
    }
  | {
      type: 'checklist';
      heading?: string;
      content?: BlogContentValue;
      items: string[];
      columns?: number;
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
      items: BlogFaqItem[];
    }
  | {
      type: 'cta';
      heading: string;
      content: string;
    };

export interface BlogPostData {
  slug: string;
  title: string;
  seo: SharedSeoData & {
    openGraph?: OpenGraphData;
  };
  publishDate: string;
  authorKey: string;
  category: BlogCategory;
  industries: string[];
  primarySystem: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  topics: string[];
  relatedServices?: string[];
  layoutType?: string;
  sections: BlogPostSection[];
  tags: string[];
}
