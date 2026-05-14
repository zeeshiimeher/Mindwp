import type { IndustryCategory } from '@/domains/industries/catalog';

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
  [key: string]: unknown;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type CTAConfig = {
  heading: {
    eyebrow?: string;
    title: string;
    description: string;
  };
  actions?: Array<{
    label: string;
    href: string;
    primary?: boolean;
    variant?: string;
  }>;
  expectations?: Array<{
    num?: string;
    text: string;
  }>;
  reassurance?: {
    noSell?: string;
    tone?: string;
  };
  [key: string]: unknown;
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
      eyebrow?: string;
      title: string;
      description?: string;
    };
    items: FAQItem[];
  };
  cta: CTAConfig;
  [key: string]: unknown;
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
