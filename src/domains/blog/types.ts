/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';

export type { BlogCategory } from './categoryRegistry';
export { BLOG_CATEGORY_REGISTRY } from './categoryRegistry';

import type { BlogCategory } from './categoryRegistry';

export type DesignModeValue = any;

export type BlogPostSection = {
  type: string;
  [key: string]: DesignModeValue;
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
  systems: string[];
  topics: string[];
  relatedServices?: string[];
  layoutType?: string;
  sections: BlogPostSection[];
  tags: string[];
}
