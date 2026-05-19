import type { IndustryDetailPageData } from '@/domains/industries/types';

export const EntSinusClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'ENT / Sinus Clinics Website Systems',
    description: 'ENT and sinus clinic website systems reset base.',
    canonical: '/industries/healthcare-practices/ent-sinus-clinics',
    openGraph: {
      title: 'ENT / Sinus Clinics Website Systems',
      description: 'ENT and sinus clinic website systems reset base.',
    },
  },
  slug: 'ent-sinus-clinics',
  type: 'detail',
  parentSlug: 'healthcare-practices',
  hero: {
    eyebrow: 'ENT / Sinus Clinics',
    title: 'ENT / Sinus Clinics Page Is on a Clean Rebuild Base.',
  },
  industries: ['ent-sinus'],
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
      title: 'Review the ent / sinus clinics website and handling path.',
      description:
        'This reset page is ready for a future rebuild around the approved industry, enquiry or booking path, trust signals, follow-up, reviews, and proof.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: '/contact?system=smart-website-systems&source=industry%2Fent-sinus-clinics',
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
