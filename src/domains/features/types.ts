/* eslint-disable @typescript-eslint/no-explicit-any */
import type { SharedSeoData } from '@/domains/shared/seo';

export type DesignModeValue = any;

export type FAQItem = {
  question: string;
  answer: string;
};

export type CTAConfig = {
  heading: {
    title: string;
    description: string;
    kicker?: string;
  };
  actions: [
    {
      label: string;
      href: string;
      primary: true;
      variant?: string;
    },
  ];
  [key: string]: DesignModeValue;
};

export type FeaturePageData = {
  slug: string;
  badge?: string;
  category?: string;
  systems: string[];
  topics?: string[];
  seo: SharedSeoData;
  hero: {
    badge: string;
    title: string;
    description: string;
    [key: string]: DesignModeValue;
  };
  sections: Record<string, DesignModeValue>;
  cta: CTAConfig;
};
