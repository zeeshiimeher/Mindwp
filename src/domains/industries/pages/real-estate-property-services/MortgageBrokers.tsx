import type { IndustryDetailPageData } from '@/domains/industries/types';

export const mortgageBrokersIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Mortgage Brokers — Application, Document, and Settlement Systems',
    description:
      'How mortgage brokers hold inbound enquiries, manage document collection, and follow up through settlement.',
    canonical: '/industries/real-estate-property-services/mortgage-brokers',
    openGraph: {
      title: 'Mortgage Brokers — Application, Document, and Settlement Systems',
      description: 'Applications, documents, and settlement on one operating layer.',
    },
  },
  slug: 'mortgage-brokers',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Property · Mortgage Brokers',
    title: 'A pre-approval. [[muted:And a missing payslip stuck for a week.]]',
    description:
      'Most enquiries become real loans only when documents move. The leak lives between request and submission.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Document requests run with reminders until complete',
      'Settlement follow-up runs without manual chasing',
    ],
  },
  industries: ['mortgage-broker'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What brokers usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use loan-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'compliance',
        question: 'How does this handle compliance documentation?',
        answer: 'It does not replace your compliance tools. It links to them.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the broker?',
        answer: 'Yes — written in the broker’s voice and reviewed before launch.',
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
      kicker: 'Next step',
      title: 'Show us where the application actually stalls',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      {
        num: '1',
        text: 'A short read of where enquiries, documents, and status updates sit today',
      },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working brokerage.',
    },
  },
};
