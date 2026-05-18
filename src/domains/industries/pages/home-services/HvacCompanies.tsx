import type { IndustryDetailPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const hvacCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'HVAC Companies Industry Page Rebuild Base',
    description: 'HVAC companies industry page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/home-services/hvac-companies',
    openGraph: {
      title: 'HVAC Companies Industry Page Rebuild Base',
      description: 'HVAC companies industry page reset to a clean rebuild base.',
    },
  },
  slug: 'hvac-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    eyebrow: 'Home Services · HVAC',
    title: 'HVAC Companies Are Back on a Clean Rebuild Base.',
  },
  industries: ['hvac'],
  primarySystem: 'lead-response-handling',
  supportingSystems: [
    'follow-up-crm',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the HVAC page rebuilt from this base?',
      description: 'We can rebuild it around the real service-call pressure instead of inherited long-form sections.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'lead-response-handling',
          slug: 'hvac-companies',
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
