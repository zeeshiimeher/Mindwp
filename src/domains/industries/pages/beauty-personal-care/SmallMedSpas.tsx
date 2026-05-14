import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallMedSpasIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Med Spas — Consultation, Booking, and Recall Systems',
    description:
      'How small med spas hold inbound enquiries, manage consultations, and keep treatment recalls on a steady rhythm.',
    canonical: '/industries/beauty-personal-care/small-med-spas',
    openGraph: {
      title: 'Small Med Spas — Consultation, Booking, and Recall Systems',
      description: 'Enquiries, consultations, and recall rhythm on one operating layer.',
    },
  },
  slug: 'small-med-spas',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Med Spa',
    title: 'A consultation enquiry. [[muted:And a question about whether they’re a fit.]]',
    description:
      'Med spa work is considered. Clients ask before they book. The leak is the gap between a question and a clear, qualified next step.',
    list: [
      'Enquiries acknowledged with a clear next step',
      'Consultations booked into a single calendar',
      'Recalls run at the right interval per treatment',
    ],
  },
  industries: ['med-spa'],
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
      eyebrow: 'Honest questions',
      title: 'What med-spa owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'compliance',
        question: 'How does this work alongside our compliance and consent processes?',
        answer:
          'It does not replace your compliance tools. It links to your existing record system so the operating board can see status without duplicating data.',
      },
      {
        id: 'tools',
        question: 'We use a clinic-management platform. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'tone',
        question: 'Will the messaging match our brand tone?',
        answer: 'Yes. Templates are written in your voice, not generic.',
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
      title: 'Show us where the clinic actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries and recalls sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a small med-spa operator with considered enquiries.',
    },
  },
};
