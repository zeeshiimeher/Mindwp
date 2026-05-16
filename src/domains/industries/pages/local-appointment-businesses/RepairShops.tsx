import type { IndustryDetailPageData } from '@/domains/industries/types';

export const repairShopsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Repair Shops — Drop-Off, Quote, and Pickup Systems',
    description:
      'How phone, electronics, and appliance repair shops hold drop-offs, send status updates, and bring customers back for pickup.',
    canonical: '/industries/local-appointment-businesses/repair-shops',
    openGraph: {
      title: 'Repair Shops — Drop-Off, Quote, and Pickup Systems',
      description: 'Drop-offs, status updates, and pickups on one operating layer.',
    },
  },
  slug: 'repair-shops',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Repair Shops',
    title: 'A bench full of jobs. [[muted:And no one telling the customer it’s ready.]]',
    description:
      'Repairs queue up on the bench. The customer wonders. Pickups drift. Reviews go silent.',
    list: [
      'Drop-offs logged with a clear next step',
      'Quote and ready-for-pickup updates go automatically',
      'Reviews and rebook prompts run after pickup',
    ],
  },
  industries: ['repair-shop'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm', 'reputation-review-systems', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What shop owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a POS or ticketing tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'sms',
        question: 'Will customers feel spammed?',
        answer: 'Not at the cadence we set. Each message has a clear job.',
      },
      {
        id: 'walk-ins',
        question: 'Can walk-ins still drop in without booking?',
        answer: 'Yes. The board respects walk-in flow.',
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
      title: 'Show us where the bench actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where quotes, pickups, and reviews sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working repair shop.',
    },
  },
};
