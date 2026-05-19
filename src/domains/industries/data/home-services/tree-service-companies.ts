import type { IndustryDetailPageData } from '@/domains/industries/types';

export const TreeServiceCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Tree Service Companies Website Systems',
    description: 'Tree service company website systems reset base.',
    canonical: '/industries/home-services/tree-service-companies',
    openGraph: {
      title: 'Tree Service Companies Website Systems',
      description: 'Tree service company website systems reset base.',
    },
  },
  slug: 'tree-service-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    eyebrow: 'Tree Service Companies',
    title: 'Tree Service Companies Page Is on a Clean Rebuild Base.',
  },
  industries: ['tree-service'],
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
      title: 'Review the tree service companies website and handling path.',
      description:
        'This reset page is ready for a future rebuild around the approved industry, enquiry or booking path, trust signals, follow-up, reviews, and proof.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: '/contact?system=smart-website-systems&source=industry%2Ftree-service-companies',
        variant: 'primary',
      },
    ],
    expectations: [
      {
        num: '1',
        text: 'The current service, treatment, or procedure clarity',
      },
      {
        num: '2',
        text: 'Where enquiries, bookings, consultation requests, or quote follow-up slip',
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
