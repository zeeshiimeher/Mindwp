import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';
import type { ActiveSystem } from '@/lib/content-graph/canonical';

import type { ResourcePageTemplateSection } from './templates/types';

export type { ResourceCategory } from './categoryRegistry';
export { RESOURCE_CATEGORY_REGISTRY } from './categoryRegistry';

import type { ResourceCategory } from './categoryRegistry';

export type ResourceCategoryMetadata = {
  id: ResourceCategory;
  label: string;
  description: string;
  slug: string;
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
  primarySystem: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  topics: string[];
  primaryService?: string;
  seo: SharedSeoData & {
    openGraph?: OpenGraphData;
  };
  sections: ResourceSection[];
  featuredImage?: string | null;
  schema?: {
    type: 'Article' | 'Guide' | 'HowTo';
    headline?: string;
    description?: string;
  };
}
