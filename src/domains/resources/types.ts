import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';

import type { ResourcePageTemplateSection } from './templates/types';

export type { ResourceCategory } from './categoryRegistry';
export { RESOURCE_CATEGORY_REGISTRY } from './categoryRegistry';

import type { ResourceCategory } from './categoryRegistry';

export type ResourceCategoryMetadata = {
  id: ResourceCategory;
  label: string;
  description: string;
  slug: string;
  colors: {
    badgeClass: string;
  };
  icon?: string;
};

export type ResourceSection = ResourcePageTemplateSection;

export interface ResourceData {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  publishedAt: string;
  updatedAt?: string;
  industries?: string[];
  systems: string[];
  topics: string[];
  primaryService?: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
    openGraph?: OpenGraphData;
  } & SharedSeoData;
  schema?: {
    type: 'Article' | 'Guide' | 'HowTo';
    headline?: string;
    description?: string;
  };
  sections: ResourceSection[];
}
