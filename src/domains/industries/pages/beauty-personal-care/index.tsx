import type { IndustryCategoryPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const beautyPersonalCareIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Beauty and Personal Care Industry Pages Rebuild Base',
    description:
      'Beauty and personal care category page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/beauty-personal-care',
    openGraph: {
      title: 'Beauty and Personal Care Industry Pages Rebuild Base',
      description: 'Beauty and personal care category page reset to a clean rebuild base.',
    },
  },
  slug: 'beauty-personal-care',
  type: 'category',
  category: 'beauty-personal-care',
  hero: {
    eyebrow: 'Industries · Beauty & Personal Care',
    title: 'Beauty and Personal Care Pages Are Back on a Clean Rebuild Base.',
  },
  industries: ['hair-salon', 'med-spa'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
    'lead-response-handling',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the beauty category rebuilt from this base?',
      description:
        'We can shape the next pass around booking rhythm, follow-up pressure, and buyer trust.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'follow-up-crm',
          slug: 'beauty-personal-care',
        }),
        variant: 'primary',
      },
    ],
    expectations: [
      { num: '1', text: 'A clean rebuild direction for the category page' },
      { num: '2', text: 'A tighter story around the real buyer situation' },
      { num: '3', text: 'A simpler next pass without legacy sections in the way' },
    ],
    footer: {
      noSell: 'No filler sections. No inherited page drag.',
      tone: 'Clean rebuild base',
    },
  },
};
