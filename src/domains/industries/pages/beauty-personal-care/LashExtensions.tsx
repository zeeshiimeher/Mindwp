import type { IndustryDetailPageData } from '@/domains/industries/types';

export const lashExtensionsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Lash Lift & Extensions — Booking, Fill Cycle, and Retention Systems',
    description:
      'How lash and brow operators hold inbound bookings, manage fill cycles, and keep clients on a steady visit rhythm.',
    canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
    openGraph: {
      title: 'Lash Lift & Extensions — Booking, Fill Cycle, and Retention Systems',
      description: 'Bookings, fill-cycle reminders, and retention rhythm in one operating layer.',
    },
  },
  slug: 'lash-lift-and-extensions',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Lash & Brow',
    title: 'A lash artist mid-set. [[muted:And a fill enquiry that landed at midnight.]]',
    description:
      'Lash work runs on tight cycles — a fill every two or three weeks. Miss the cycle and the client moves to a competitor. Catch it and the chair stays full.',
    list: [
      'Fill bookings confirmed instantly, day or night',
      'Cycle reminders go out at the right interval per client',
      'Reviews triggered the moment the client leaves',
    ],
  },
  industries: ['lash-extensions'],
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
      title: 'What lash artists usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'solo',
        question: 'I’m solo. Is this overkill?',
        answer:
          'Often a smaller build is exactly right. The leakiest gap when you’re solo is usually the after-hours DM. We start there.',
      },
      {
        id: 'tools',
        question: 'I already use a booking app. Do I drop it?',
        answer:
          'Usually no. The operating layer sits beside it and covers the cycle and review gaps it does not.',
      },
      {
        id: 'feel',
        question: 'Will the cycle reminders feel pushy?',
        answer: 'Set at the right cadence, no. Most clients want the nudge.',
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
      title: 'Show us where the cycle actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings and cycles sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working lash artist with a real cycle rhythm.',
    },
  },
};
