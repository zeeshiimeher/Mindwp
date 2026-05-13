/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IndustryCategory } from '@/domains/industries/catalog';

export type DesignModeValue = any;

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
  badge?: string;
  title: string;
  description: string;
  list?: string[];
  [key: string]: DesignModeValue;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type CTAConfig = {
  heading: {
    kicker?: string;
    title: string;
    description: string;
  };
  actions?: Array<{
    label: string;
    href: string;
    primary?: boolean;
    variant?: string;
  }>;
  [key: string]: DesignModeValue;
};

export type IndustryPageDataBase = {
  seo: IndustrySeoData;
  slug: string;
  type: 'category' | 'detail';
  category?: IndustryCategory;
  parentSlug?: IndustryCategory;
  hero: IndustryHeroData;
  systems: string[];
  industries?: string[];
  topics?: string[];
  faq: {
    header: {
      kicker?: string;
      title: string;
      description?: string;
    };
    items: FAQItem[];
  };
  cta: CTAConfig;
  [key: string]: DesignModeValue;
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
