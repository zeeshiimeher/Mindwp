import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const HomeServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Home Services Website Systems',
    description:
      'Approved home services industry lane for website clarity, local trust, enquiry handling, follow-up, reviews, and proof.',
    canonical: '/industries/home-services',
    openGraph: {
      title: 'Home Services Website Systems',
      description:
        'Approved home services industry lane for website clarity, local trust, enquiry handling, follow-up, reviews, and proof.',
    },
  },
  slug: 'home-services',
  type: 'category',
  category: 'home-services',
  hero: {
    eyebrow: 'Industries · Home Services',
    title: 'Home Services Pages Are on a Clean Rebuild Base.',
  },
  industries: [
    'hvac',
    'plumbing',
    'roofing',
    'foundation-repair',
    'septic-services',
    'tree-service',
  ],
  primarySystem: 'smart-website-systems',
  supportingSystems: [
    'smart-website-systems',
    'local-seo-authority',
    'lead-response-handling',
    'follow-up-crm',
    'reputation-review-systems',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'local-visibility'],
  decisionPanel: {
    heading: {
      eyebrow: 'Next step',
      title: 'Review the home services website and handling path.',
      description:
        'This reset page is ready for a future rebuild around the approved industry lane, buyer reality, and connected handling path.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: '/contact?system=smart-website-systems&source=industry%2Fhome-services',
        variant: 'primary',
      },
    ],
    expectations: [
      {
        num: '1',
        text: 'The current website, trust, and enquiry path',
      },
      {
        num: '2',
        text: 'Where response, follow-up, reviews, or proof are weak',
      },
      {
        num: '3',
        text: 'The first system that should be reviewed',
      },
    ],
    footer: {
      noSell: 'Reset inventory page. Not final copy.',
      tone: 'Clean rebuild base',
    },
  },
};
