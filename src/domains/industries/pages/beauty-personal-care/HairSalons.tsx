import type { IndustryDetailPageData } from '@/domains/industries/types';

export const hairSalonsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Hair Salons — Booking, Stylist Capacity, and Rebook Systems',
    description:
      'How established hair salons hold inbound bookings, manage stylist capacity, and bring clients back at the right interval.',
    canonical: '/industries/beauty-personal-care/hair-salons',
    openGraph: {
      title: 'Hair Salons — Booking, Stylist Capacity, and Rebook Systems',
      description: 'Bookings, capacity, and rebook intervals on one operating board.',
    },
  },
  slug: 'hair-salons',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Hair Salons',
    title: 'Two stylists fully booked. [[muted:And a phone ringing through to nobody.]]',
    description:
      'Salons live or die on rebook intervals. The leak between a finished cut and the next one — six weeks later — is where most revenue gets quietly lost.',
    list: [
      'Inbound bookings handled even when reception is at the wash basin',
      'Stylist capacity visible without a clipboard',
      'Rebook reminders go out at the right interval automatically',
    ],
  },
  industries: ['hair-salon'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'reputation-review',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What salon owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We already use a salon booking system. Do we drop it?',
        answer:
          'Usually no. The operating layer sits beside it and covers the call, no-show, and rebook gaps it does not.',
      },
      {
        id: 'feel',
        question: 'Will reminders feel pushy to clients?',
        answer:
          'Done at the right interval, they read as helpful. Done too often, they don’t. We tune the cadence to your service mix.',
      },
      {
        id: 'small',
        question: 'We are a single chair operator. Is this overkill?',
        answer:
          'Often a smaller build is exactly right — usually phone cover plus rebook reminders.',
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
        'Tell us about a typical Saturday. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings and rebooks sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working salon with a real Saturday rush.',
    },
  },
};
