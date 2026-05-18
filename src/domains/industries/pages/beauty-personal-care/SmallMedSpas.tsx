import type { IndustryDetailPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const smallMedSpasIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Med Spas Industry Page Rebuild Base',
    description: 'Small med spas industry page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/beauty-personal-care/small-med-spas',
    openGraph: {
      title: 'Small Med Spas Industry Page Rebuild Base',
      description: 'Small med spas industry page reset to a clean rebuild base.',
    },
  },
  slug: 'small-med-spas',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    eyebrow: 'Beauty & Personal Care · Small Med Spas',
    title: 'Small Med Spas Are Back on a Clean Rebuild Base.',
  },
  industries: ['med-spa'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
    'lead-response-handling',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Want the small med spa page rebuilt from this base?',
      description:
        'We can rebuild it around the real consultation and follow-up pressure instead of legacy sections.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'follow-up-crm',
          slug: 'small-med-spas',
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
