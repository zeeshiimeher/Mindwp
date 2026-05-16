import type { IndustryDetailPageData } from '@/domains/industries/types';

export const tattooStudiosIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Tattoo Studios — Enquiry, Deposit, and Session Systems',
    description:
      'How tattoo studios hold artist enquiries, manage deposits, and run multi-session bookings without the front desk drowning in DMs.',
    canonical: '/industries/local-appointment-businesses/tattoo-studios',
    openGraph: {
      title: 'Tattoo Studios — Enquiry, Deposit, and Session Systems',
      description: 'Enquiries, deposits, and sessions on one operating layer.',
    },
  },
  slug: 'tattoo-studios',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Tattoo Studios',
    title: 'A queue of DMs. [[muted:And the artist is mid-line.]]',
    description:
      'The studio runs on artist enquiries, deposits, and multi-session bookings. The desk drowns in DMs. The artist works.',
    list: [
      'Enquiries acknowledged with the artist’s next opening',
      'Deposit and session reminders run automatically',
      'Reviews and rebook prompts run after the heal-check',
    ],
  },
  industries: ['tattoo-studio'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm', 'reputation-review-systems', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What studio owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'artist-control',
        question: 'Does each artist keep control of their bookings?',
        answer: 'Yes. The board respects per-artist ownership.',
      },
      {
        id: 'tools',
        question: 'We use a booking tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the studio?',
        answer: 'Yes — replies are written in the studio’s voice and reviewed before launch.',
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
      title: 'Show us where the calendar actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where DMs, deposits, and sessions sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working tattoo studio.',
    },
  },
};
