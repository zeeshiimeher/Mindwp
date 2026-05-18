import type { IndustryDetailPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const roofingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Roofing Companies Industry Page Rebuild Base',
    description: 'Roofing companies industry page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/home-services/roofing-companies',
    openGraph: {
      title: 'Roofing Companies Industry Page Rebuild Base',
      description: 'Roofing companies industry page reset to a clean rebuild base.',
    },
  },
  slug: 'roofing-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    eyebrow: 'Home Services · Roofing',
    title: 'Roofing Companies Are Back on a Clean Rebuild Base.',
  },
  industries: ['roofing'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'lead-response-handling',
    'reputation-review-systems',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'client-reactivation', 'review-generation'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the roofing page rebuilt from this base?',
      description:
        'We can rebuild it around the real inspection and storm-response pressure instead of legacy sections.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'follow-up-crm',
          slug: 'roofing-companies',
        }),
        variant: 'primary',
      },
    ],
    expectations: [
      { num: '1', text: 'A focused rebuild direction for this page' },
      { num: '2', text: 'A sharper buyer-recognition structure' },
      { num: '3', text: 'A simpler next pass built from clean JSX' },
    ],
    footer: {
      noSell: 'No filler sections. No inherited page drag.',
      tone: 'Clean rebuild base',
    },
  },
};
