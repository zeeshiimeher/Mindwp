import type { IndustryDetailPageData } from '@/domains/industries/types';

export const HearingAidClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Hearing Aid Clinics Website Systems',
    description: 'Hearing aid clinic website systems reset base.',
    canonical: '/industries/healthcare-practices/hearing-aid-clinics',
    openGraph: {
      title: 'Hearing Aid Clinics Website Systems',
      description: 'Hearing aid clinic website systems reset base.',
    },
  },
  slug: 'hearing-aid-clinics',
  type: 'detail',
  parentSlug: 'healthcare-practices',
  hero: {
    eyebrow: 'Hearing Aid Clinics',
    title: 'Hearing Aid Clinics Page Is on a Clean Rebuild Base.',
  },
  industries: ['hearing-aids'],
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
      title: 'Review the hearing aid clinics website and handling path.',
      description:
        'This reset page is ready for a future rebuild around the approved industry, enquiry or booking path, trust signals, follow-up, reviews, and proof.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: '/contact?system=smart-website-systems&source=industry%2Fhearing-aid-clinics',
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
