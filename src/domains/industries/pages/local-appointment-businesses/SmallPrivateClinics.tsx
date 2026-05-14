import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallPrivateClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Private Clinics — Enquiry, Consult, and Recall Systems',
    description:
      'How small private clinics — physio, allied health, podiatry, chiro — hold considered enquiries, manage consults, and run treatment recall.',
    canonical: '/industries/local-appointment-businesses/small-private-clinics',
    openGraph: {
      title: 'Small Private Clinics — Enquiry, Consult, and Recall Systems',
      description: 'Considered enquiries, consults, and recalls on one operating layer.',
    },
  },
  slug: 'small-private-clinics',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Private Clinics',
    title: 'A long enquiry. [[muted:And a slow reply that decides the booking.]]',
    description:
      'Patients compare clinics quietly. The first clear, calm reply usually wins the consult.',
    list: [
      'Considered enquiries acknowledged with a clear next step',
      'Consult and recall reminders run automatically',
      'Reviews prompt at the right interval for trust-led work',
    ],
  },
  industries: ['private-clinic'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What clinic owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a clinic-management tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'compliance',
        question: 'How does this work with our consent and record-keeping?',
        answer:
          'It does not replace clinical record systems. It links so the operating board sees status without duplicating data.',
      },
      {
        id: 'reminders',
        question: 'Will reminders feel pushy to patients?',
        answer: 'Set at the right cadence, no. We tune to your treatment mix.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'Per build, not per feature. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the diary actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries, consults, and plans sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working private clinic.',
    },
  },
};
