import type { IndustryDetailPageData } from '@/domains/industries/types';

export const accountingFirmsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Accounting Firms — Onboarding, Document, and Year-End Systems',
    description:
      'How accounting firms hold inbound enquiries, run document collection, and stay ahead of year-end and compliance deadlines.',
    canonical: '/industries/legal-professional-services/accounting-firms',
    openGraph: {
      title: 'Accounting Firms — Onboarding, Document, and Year-End Systems',
      description: 'Onboarding, documents, and year-end on one operating layer.',
    },
  },
  slug: 'accounting-firms',
  type: 'detail',
  parentSlug: 'legal-professional-services',
  hero: {
    badge: 'Professional · Accounting Firms',
    title: 'Year-end approaching. [[muted:And half the clients haven’t sent their books.]]',
    description:
      'Accounting work runs in cycles. The leak is between request and document arrival.',
    list: [
      'Enquiries acknowledged with a clear next step',
      'Document collection runs with reminders until complete',
      'Year-end and quarterly cadence runs without manual chasing',
    ],
  },
  industries: ['accounting'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What accounting partners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use accounting software and a portal. Do we drop them?',
        answer: 'No. The operating layer sits beside them.',
      },
      {
        id: 'compliance',
        question: 'How does this handle privacy and document security?',
        answer: 'It links to your existing portal — documents stay in your system of record.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the firm?',
        answer: 'Yes — written in the firm’s voice and reviewed before launch.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the firm actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries, documents, and year-end sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working accounting firm.',
    },
  },
};
