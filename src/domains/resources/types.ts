/* eslint-disable @typescript-eslint/no-explicit-any */
import type { OpenGraphData, SharedSeoData } from '@/domains/shared/seo';

import type { ResourcePageTemplateSection } from './templates/types';

export type { ResourceCategory } from './categoryRegistry';
export { RESOURCE_CATEGORY_REGISTRY } from './categoryRegistry';

import type { ResourceCategory } from './categoryRegistry';

export type DesignModeValue = any;

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
  seo: SharedSeoData & {
    openGraph?: OpenGraphData;
  };
  sections: ResourceSection[];
  [key: string]: DesignModeValue;
}
