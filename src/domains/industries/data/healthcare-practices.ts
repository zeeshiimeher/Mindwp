import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const HealthcarePracticesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Healthcare Practice Website Systems',
    description:
      'Approved specialist clinic and private practice lane for service, treatment, or procedure clarity, booking and consultation requests, follow-up, reviews, and proof.',
    canonical: '/industries/healthcare-practices',
    openGraph: {
      title: 'Healthcare Practice Website Systems',
      description:
        'Approved specialist clinic and private practice lane for service, treatment, or procedure clarity, booking and consultation requests, follow-up, reviews, and proof.',
    },
  },
  slug: 'healthcare-practices',
  type: 'category',
  category: 'healthcare-practices',
  hero: {
    eyebrow: 'Industries · Healthcare Practices',
    title: 'Healthcare Practices Pages Are on a Clean Rebuild Base.',
  },
  industries: [
    'dental-implants',
    'orthodontics',
    'oral-surgery',
    'dermatology',
    'ent-sinus',
    'podiatry',
    'hearing-aids',
    'physiotherapy',
    'optometry',
    'orthopedics',
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
      title: 'Review the healthcare practices website and handling path.',
      description:
        'This reset page is ready for a future rebuild around the approved industry lane, buyer reality, and connected handling path.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: '/contact?system=smart-website-systems&source=industry%2Fhealthcare-practices',
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
