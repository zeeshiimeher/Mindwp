import type { IndustryDetailPageData } from '@/domains/industries/types';

export const carDetailingIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Car Detailing — Booking, Capacity, and Repeat-Visit Systems',
    description:
      'How detailing operators hold inbound bookings, manage day-of capacity, and bring past customers back without paid acquisition.',
    canonical: '/industries/automotive-services/car-detailing',
    openGraph: {
      title: 'Car Detailing — Booking, Capacity, and Repeat-Visit Systems',
      description: 'Bookings, capacity, and repeat-visit reminders on one operating board.',
    },
  },
  slug: 'car-detailing',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Detailing',
    title: 'A booking landed at 11pm. [[muted:By morning the slot was already gone.]]',
    description:
      'Detailing demand is bursty and visual. Bookings come from Instagram, Google, and word of mouth — all on the customer’s schedule, not yours. The leaks live in the gap between enquiry and confirmation.',
    list: [
      'Instant booking confirmation, day or night',
      'Day-of capacity visible to whoever is taking calls',
      'Past customers reminded at the right interval',
    ],
  },
  industries: ['car-detailing'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What detailing operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'small',
        question: 'We are a one-bay mobile operator. Is this overkill?',
        answer:
          'Often a smaller build is the right move. The system follows the leak. Sometimes only the booking-confirmation layer is worth installing first.',
      },
      {
        id: 'walkins',
        question: 'Will this stop walk-ins from clogging the day?',
        answer:
          'It makes capacity visible at the front so the right answer is in front of whoever is taking the question. It does not replace floor judgement.',
      },
      {
        id: 'social',
        question: 'Most of our enquiries come from Instagram. Does that get caught?',
        answer:
          'Yes — DMs and form-fills can both land in the same operating board so nothing sits in a silo overnight.',
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
      title: 'Show us where the booking flow actually leaks',
      description:
        'Tell us about a busy Saturday and how bookings reach you today. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings and walk-ins sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a small detailing operator with a real Saturday rush.',
    },
  },
};
