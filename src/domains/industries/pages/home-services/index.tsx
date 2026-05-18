import type { IndustryCategoryPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const homeServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Home Services Industry Pages Rebuild Base',
    description: 'Home services category page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/home-services',
    openGraph: {
      title: 'Home Services Industry Pages Rebuild Base',
      description: 'Home services category page reset to a clean rebuild base.',
    },
  },
  slug: 'home-services',
  type: 'category',
  category: 'home-services',
  hero: {
    eyebrow: 'Industries · Home Services',
    title: 'Home Services Pages Are Back on a Clean Rebuild Base.',
  },
  industries: ['roofing', 'hvac', 'plumbing'],
  primarySystem: 'lead-response-handling',
  supportingSystems: [
    'follow-up-crm',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the home services rebuild shaped properly?',
      description:
        'We can use this reset base to rebuild the category around the real field-service pressure.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'lead-response-handling',
          slug: 'home-services',
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
