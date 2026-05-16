import type { IndustryDetailPageData } from '@/domains/industries/types';

export const nailSalonsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Nail Salons — Walk-in, Booking, and Repeat-Visit Systems',
    description:
      'How nail salons hold inbound bookings, manage walk-in flow, and keep regulars on a steady visit rhythm.',
    canonical: '/industries/beauty-personal-care/nail-salons',
    openGraph: {
      title: 'Nail Salons — Walk-in, Booking, and Repeat-Visit Systems',
      description: 'Bookings, walk-ins, and repeat-visit rhythm on one operating board.',
    },
  },
  slug: 'nail-salons',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Nail Salons',
    title: 'A walk-in at the door. [[muted:And no answer to "how long?"]]',
    description:
      'Nail salons run on flow — a steady mix of bookings and walk-ins. The leak is the moment a walk-in turns away because the desk could not give a clear answer.',
    list: [
      'Bookings confirmed instantly, day or night',
      'Walk-in capacity visible at the desk',
      'Regulars reminded at the right interval',
    ],
  },
  industries: ['nail-salon'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'lead-response-handling',
    'reputation-review-systems',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What nail-salon owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We already use a booking app. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'walkins',
        question: 'Does this work if most of our business is walk-ins?',
        answer:
          'Yes — the capacity board is built for that. The booking layer simply fills in around it.',
      },
      {
        id: 'reminders',
        question: 'Will text reminders feel pushy?',
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
      eyebrow: 'Next step',
      title: 'Show us where the desk actually leaks',
      description:
        'Tell us about a typical Friday. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where walk-ins and bookings sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working nail salon with steady walk-in flow.',
    },
  },
};
