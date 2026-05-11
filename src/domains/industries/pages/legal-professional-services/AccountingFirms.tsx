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
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places accounting work usually slips',
      description: 'Most firms see at least two of these.',
    },
    leaks: [
      {
        id: 'docs',
        leak: 'Documents arrive late or never',
        state: 'risk',
        observed: 'A client said they’d send books last week. They didn’t.',
      },
      {
        id: 'first-touch',
        leak: 'Slow first reply on enquiries',
        state: 'silent',
        observed: 'A new business owner enquires. Reply takes a day. They go elsewhere.',
      },
      {
        id: 'year-end',
        leak: 'Year-end deadlines crowd everyone at once',
        state: 'attention',
        observed: 'Three clients send year-end docs in the same week. Capacity strains.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical month',
      title: 'How an accounting month moves',
      description: 'Document chasing is the constant. Year-end and quarter-end peak everything.',
    },
    timeline: [
      {
        id: 'week1',
        time: 'Week 1',
        event: 'Reconciliations and document chasing',
        leakRisk: 'high',
        owner: 'Bookkeeper',
      },
      {
        id: 'week2',
        time: 'Week 2',
        event: 'Reports and partner reviews',
        leakRisk: 'medium',
        owner: 'Accountant',
      },
      {
        id: 'week3',
        time: 'Week 3',
        event: 'Client meetings and advisory',
        leakRisk: 'medium',
        owner: 'Partner',
      },
      {
        id: 'week4',
        time: 'Week 4',
        event: 'Compliance filings, tax prep',
        leakRisk: 'high',
        owner: 'Accountant',
      },
      {
        id: 'eom',
        time: 'Month-end / Year-end',
        event: 'Spike in document requests',
        leakRisk: 'high',
        owner: 'Whole team',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The firm, before and after',
      description: 'Same accountants. A different layer behind document collection.',
    },
    before: {
      label: 'Before',
      items: [
        'Documents arrive late',
        'Slow first replies on enquiries',
        'Year-end strains capacity',
        'Status updates batched at month-end',
        'Reviews depend on the client remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Document checklist with reminders until complete',
        'Enquiries acknowledged in minutes',
        'Year-end cadence starts months ahead',
        'Status updates run automatically',
        'Review prompt at appropriate moment',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a firm together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      {
        id: 'first-touch',
        piece: 'Enquiry acknowledgment',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      {
        id: 'docs',
        piece: 'Document checklist + reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      { id: 'year-end', piece: 'Year-end cadence', state: 'in-place', owner: 'CRM & Automation' },
      { id: 'status', piece: 'Status updates', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'review',
        piece: 'Post-filing review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'sws',
        piece: 'Service-page integration',
        state: 'optional',
        owner: 'Smart Website Systems',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start',
      title: 'Three signals, three different first systems',
      description: 'The leak you actually have decides the first move.',
    },
    startingPoints: [
      {
        id: 'docs',
        fix: 'Run document collection with reminders',
        signalIfYou: 'see year-end strained by missing docs',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'first',
        fix: 'Acknowledge enquiries instantly',
        signalIfYou: 'lose enquiries to slow first reply',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'year-end',
        fix: 'Start year-end cadence months ahead',
        signalIfYou: 'feel the year-end pile-up every year',
        leadingSystem: 'CRM & Automation',
      },
    ],
  },
  workflowExamples: {
    header: {
      kicker: 'How a few moments are handled',
      title: 'The work the system does without anyone watching',
      description: 'Plain triggers, plain actions, named owners.',
    },
    workflow: [
      {
        id: 'inquiry',
        trigger: 'New enquiry submitted',
        action: 'Acknowledgment with intake link',
        owner: 'AI Lead Handling',
        channel: 'Email + SMS',
      },
      {
        id: 'docs',
        trigger: 'Engagement signed',
        action: 'Document checklist + daily reminders until complete',
        owner: 'CRM & Automation',
        channel: 'Email + SMS',
      },
      {
        id: 'year-end',
        trigger: '90 days before year-end',
        action: 'Cadence start: prep, docs, review',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'status',
        trigger: 'Filing milestone',
        action: 'Status update to client',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'review',
        trigger: 'Filing complete',
        action: 'Review prompt',
        owner: 'Reputation & Reviews',
        channel: 'Email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most firms start with documents and year-end cadence.',
    },
    systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds documents, year-end cadence, and status.',
      },
      { id: 'aih', name: 'AI Lead Handling', role: 'lead', why: 'Catches enquiries fast.' },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after filing.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Service pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful for area-specific authority.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A quarter with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A small accounting firm runs a normal quarter. Document checklists run with reminders. Year-end cadence starts 90 days ahead. Status updates fire on milestones. Reviews trigger after filing.',
      observedChange:
        'Before, the same quarter would have ended with three clients sending docs at the last minute. With the layer in place, the year-end pile-up is smaller.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
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
      kicker: 'Next step',
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
