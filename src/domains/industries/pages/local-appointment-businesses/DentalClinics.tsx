import type { IndustryDetailPageData } from '@/domains/industries/types';

export const dentalClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Dental Clinics — Booking, Recall, and No-Show Systems',
    description:
      'How dental clinics hold inbound bookings, manage hygiene recalls, and reduce no-show drift across the chair.',
    canonical: '/industries/local-appointment-businesses/dental-clinics',
    openGraph: {
      title: 'Dental Clinics — Booking, Recall, and No-Show Systems',
      description: 'Bookings, recalls, and reminders on one operating layer.',
    },
  },
  slug: 'dental-clinics',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Dental',
    title: 'A six-month recall. [[muted:And nothing reminding the patient until next year.]]',
    description:
      'Dental work runs on recall. The chair stays full when the recall rhythm runs cleanly — and goes quiet when it doesn’t.',
    list: [
      'Bookings confirmed reliably day or night',
      'Hygiene recalls run at the right interval',
      'Two-step reminders reduce no-show drift',
    ],
  },
  industries: ['dental-clinic'],
  systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What clinic owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a clinic-management platform. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'compliance',
        question: 'How does this work with our compliance and consent processes?',
        answer:
          'It does not replace your compliance tools. It links to your existing record system so the operating board can see status without duplicating data.',
      },
      {
        id: 'reminders',
        question: 'Will reminders feel pushy to patients?',
        answer: 'Set at the right cadence, no. We tune the rhythm to your service mix.',
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
      kicker: 'Next step',
      title: 'Show us where the chair actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, recalls, and no-shows sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working clinic with a real recall rhythm.',
    },
  },
};
