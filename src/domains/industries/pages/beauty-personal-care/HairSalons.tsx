import type { IndustryDetailPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const hairSalonsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Hair Salons Industry Page Rebuild Base',
    description: 'Hair salons industry page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/beauty-personal-care/hair-salons',
    openGraph: {
      title: 'Hair Salons Industry Page Rebuild Base',
      description: 'Hair salons industry page reset to a clean rebuild base.',
    },
  },
  slug: 'hair-salons',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    eyebrow: 'Beauty & Personal Care · Hair Salons',
    title: 'Hair Salons Are Back on a Clean Rebuild Base.',
  },
  industries: ['hair-salon'],
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
      title: 'Want the hair salon page rebuilt from this base?',
      description: 'We can rebuild it around the real booking rhythm instead of inherited long-form sections.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'follow-up-crm',
          slug: 'hair-salons',
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
