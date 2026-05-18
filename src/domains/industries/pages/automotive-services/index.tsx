import type { IndustryCategoryPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const automotiveServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Automotive Services Industry Pages Rebuild Base',
    description: 'Automotive services category page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/automotive-services',
    openGraph: {
      title: 'Automotive Services Industry Pages Rebuild Base',
      description: 'Automotive services category page reset to a clean rebuild base.',
    },
  },
  slug: 'automotive-services',
  type: 'category',
  category: 'automotive-services',
  hero: {
    eyebrow: 'Industries · Automotive',
    title: 'Automotive Services Pages Are Back on a Clean Rebuild Base.',
  },
  industries: ['auto-repair'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'lead-response-handling',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the automotive rebuild shaped properly?',
      description: 'We can use this reset base to rebuild the category around the actual operating pressure.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'follow-up-crm',
          slug: 'automotive-services',
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
