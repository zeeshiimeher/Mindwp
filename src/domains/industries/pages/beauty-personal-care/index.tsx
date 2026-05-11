import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const beautyPersonalCareIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Beauty & Personal Care — Booking, Cycle, and Recall Systems',
    description:
      'How beauty and personal-care operators — salons, lash, nails, med spas, aesthetic clinics — hold bookings, manage visit cycles, and bring clients back at the right interval.',
    canonical: '/industries/beauty-personal-care',
    openGraph: {
      title: 'Beauty & Personal Care — Booking, Cycle, and Recall Systems',
      description: 'Where the beauty day leaks and what holds it across five operating shapes.',
    },
  },
  slug: 'beauty-personal-care',
  type: 'category',
  category: 'beauty-personal-care',
  hero: {
    badge: 'Industries · Beauty Care',
    title: 'A chair that runs on cycles. [[muted:And a desk that can’t catch every call.]]',
    description:
      'Beauty operators share one tension: the chair is full, the phone keeps ringing, and the next booking depends on the client coming back at the right interval. The leak is between visit and rebook.',
    list: [
      'The chair, the basin, and the phone all want the same person',
      'Cycle and rebook intervals carry most of the year’s revenue',
      'Reviews are short windows that rarely get caught manually',
    ],
  },
  industries: ['hair-salon', 'nail-salon', 'lash-extensions', 'med-spa', 'aesthetic-clinic'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'reputation-review',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What beauty operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this the same build for every beauty trade?',
        answer:
          'No. The shape is similar — booking, service, cycle. The lead system differs based on whether the work is flow-led or considered-led.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most beauty operators that is the busy-desk call layer plus rebook reminders.',
      },
      {
        id: 'tools',
        question: 'We already use a salon or clinic booking app. Do we drop it?',
        answer: 'Usually not. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'We don’t price by feature. The build follows the leaks. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the beauty day actually leaks',
      description:
        'Tell us what happens between the call and the chair. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, cycles, and reviews sit today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a beauty operator with a real working week.',
    },
  },
};
