import type { IndustryDetailPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const plumbingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Plumbing Companies Industry Page Rebuild Base',
    description:
      'Plumbing companies industry page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/home-services/plumbing-companies',
    openGraph: {
      title: 'Plumbing Companies Industry Page Rebuild Base',
      description: 'Plumbing companies industry page reset to a clean rebuild base.',
    },
  },
  slug: 'plumbing-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    eyebrow: 'Home Services · Plumbing',
    title: 'Plumbing Companies Are Back on a Clean Rebuild Base.',
  },
  industries: ['plumbing'],
  primarySystem: 'lead-response-handling',
  supportingSystems: [
    'follow-up-crm',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'emergency-handling', 'review-generation'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the plumbing page rebuilt from this base?',
      description:
        'We can rebuild it around the real after-hours and quote-follow-up pressure instead of legacy sections.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'lead-response-handling',
          slug: 'plumbing-companies',
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
