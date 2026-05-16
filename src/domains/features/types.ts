import type { ActiveSystem } from '@/lib/content-graph/canonical';

export interface FAQItem {
  question: string;
  answer: string;
}

export type CTAConfig = {
  eyebrow?: string;
  heading: {
    id?: string;
    title: string;
    description: string;
    muted?: string;
    subtitle?: string;
  };
  actions: Array<{
    label: string;
    href: string;
    primary?: boolean;
    variant?: string;
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

export interface FeaturePageData {
  slug: string;
  eyebrow: string;
  category: string;
  primarySystem: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  topics: string[];
  industries?: string[];
  features?: string[];

  seo: import('@/domains/shared/seo').SharedSeoData;

  hero: {
    eyebrow?: string;
    title: string;
    description: string;
    list?: string[];
    visual?: unknown;
  };

  faq?: {
    header?: {
      eyebrow?: string;
      title: string;
      description?: string;
    };
    items: FAQItem[];
  };

  cta: CTAConfig;
}
