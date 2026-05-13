/* eslint-disable @typescript-eslint/no-explicit-any */
export type DesignModeValue = any;

export interface FAQItem {
  question: string;
  answer: string;
}

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

export interface ServicePageData<
  TSections extends Record<string, DesignModeValue> = Record<string, DesignModeValue>,
> {
  slug: string;
  badge: string;
  category: string;
  systems: string[];
  topics: string[];
  industries?: string[];
  features?: string[];

  seo: import('@/domains/shared/seo').SharedSeoData;

  hero: {
    badge?: string;
    title: string;
    description: string;
    list?: string[];
    cssPrefix?: string;
    backgroundColor?: string;
    [key: string]: unknown;
  };

  sections: TSections;

  cta: CTAConfig;
}
