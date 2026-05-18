import type { IndustryCategory } from '@/domains/industries/catalog';
import type { ActiveSystem } from '@/lib/content-graph/canonical';

export type IndustrySeoData = {
  title: string;
  description: string;
  canonical: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: string[];
  };
};

export type IndustryHeroData = {
  eyebrow?: string;
  title: string;
};

export type IndustryDecisionPanelData = {
  heading: {
    eyebrow?: string;
    title: string;
    description: string;
    subtitle?: string;
  };
  actions: Array<{
    label: string;
    href: string;
    primary?: boolean;
    variant?: 'white' | 'primary' | 'ghost';
  }>;
  expectations?: Array<{
    num?: string;
    text: string;
  }>;
  footer?: {
    noSell?: string;
    tone?: string;
  };
};

export type IndustryPageDataBase = {
  seo: IndustrySeoData;
  slug: string;
  type: 'category' | 'detail';
  category?: IndustryCategory;
  parentSlug?: IndustryCategory;
  hero: IndustryHeroData;
  primarySystem: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  industries?: string[];
  topics?: string[];
  decisionPanel: IndustryDecisionPanelData;
};

export type IndustryCategoryPageData = IndustryPageDataBase & {
  type: 'category';
  category: IndustryCategory;
};

export type IndustryDetailPageData = IndustryPageDataBase & {
  type: 'detail';
  parentSlug: IndustryCategory;
};

export type IndustryCategoryRendererProps = {
  data: IndustryCategoryPageData;
  slug: string;
};

export type IndustryDetailRendererProps = {
  data: IndustryDetailPageData;
  slug: string;
};

export type IndustryPageData = IndustryCategoryPageData | IndustryDetailPageData;
