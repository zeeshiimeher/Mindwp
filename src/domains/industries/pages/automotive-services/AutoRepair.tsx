import type { IndustryDetailPageData } from '@/domains/industries/types';
import { buildIndustryContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

export const autoRepairIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Auto Repair Industry Page Rebuild Base',
    description: 'Auto repair industry page reset to a clean rebuild base for the next pass.',
    canonical: '/industries/automotive-services/auto-repair',
    openGraph: {
      title: 'Auto Repair Industry Page Rebuild Base',
      description: 'Auto repair industry page reset to a clean rebuild base.',
    },
  },
  slug: 'auto-repair',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    eyebrow: 'Automotive · Auto Repair',
    title: 'Auto Repair Is Back on a Clean Rebuild Base.',
  },
  industries: ['auto-repair'],
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
      title: 'Want the auto repair page rebuilt from this base?',
      description:
        'We can take this reset page and rebuild the real story from the first visible operating leak.',
    },
    actions: [
      {
        label: PRIMARY_CTA_LABEL,
        href: buildIndustryContactHref({
          system: 'lead-response-handling',
          slug: 'auto-repair',
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
