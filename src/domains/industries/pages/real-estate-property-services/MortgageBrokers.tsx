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
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places mortgage applications usually slip',
      description: 'Most brokers see at least two of these.',
    },
    leaks: [
      {
        id: 'doc-stall',
        leak: 'Document requests stall',
        state: 'risk',
        observed: 'A client says they’ll send payslips. A week later they haven’t.',
      },
      {
        id: 'first-reply',
        leak: 'Slow first reply costs the lead',
        state: 'silent',
        observed: 'A new enquiry waits an hour. A faster broker replies first.',
      },
      {
        id: 'post-settle',
        leak: 'No post-settlement contact',
        state: 'attention',
        observed:
          'Settlement happens. Nothing keeps the broker top-of-mind for the next refinance.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical week',
      title: 'How a broker week moves',
      description: 'Enquiries land daily. Document chasing is constant.',
    },
    timeline: [
      {
        id: 'mon',
        time: 'Mon',
        event: 'Enquiry triage and pre-approvals',
        leakRisk: 'medium',
        owner: 'Broker',
      },
      {
        id: 'tue',
        time: 'Tue — Wed',
        event: 'Application prep and document chasing',
        leakRisk: 'high',
        owner: 'Broker / Admin',
      },
      { id: 'thu', time: 'Thu', event: 'Lender submissions', leakRisk: 'medium', owner: 'Broker' },
      {
        id: 'fri',
        time: 'Fri',
        event: 'Catch-up and client updates',
        leakRisk: 'high',
        owner: 'Broker',
      },
      {
        id: 'wkd',
        time: 'Sat — Sun',
        event: 'Inbound enquiries from open houses',
        leakRisk: 'high',
        owner: 'Broker',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The pipeline, before and after',
      description: 'Same broker. A different layer behind the application.',
    },
    before: {
      label: 'Before',
      items: [
        'Slow first replies',
        'Document chasing eats time',
        'Status updates batched at week’s end',
        'Post-settlement contact stops',
        'Reviews depend on the client remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged in minutes',
        'Document requests with structured reminders',
        'Status updates run automatically',
        'Refinance reminders run on cadence',
        'Review prompt at the right moment',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a brokerage together',
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
        piece: 'Document request + reminder',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'status',
        piece: 'Application status updates',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review',
        piece: 'Post-settlement review prompt',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      { id: 'refi', piece: 'Refinance reminders', state: 'planned', owner: 'CRM & Automation' },
      {
        id: 'sws',
        piece: 'Loan-page integration',
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
        fix: 'Run document requests with structured reminders',
        signalIfYou: 'see applications stall on missing payslips',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'first',
        fix: 'Reply to enquiries instantly',
        signalIfYou: 'lose enquiries to faster brokers',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'refi',
        fix: 'Run refinance reminders on cadence',
        signalIfYou: 'see past clients refinance elsewhere',
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
        trigger: 'Pre-approval enquiry',
        action: 'Reply within minutes with intake link',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'docs',
        trigger: 'Application opened',
        action: 'Document checklist with daily reminders until complete',
        owner: 'CRM & Automation',
        channel: 'Email + SMS',
      },
      {
        id: 'status',
        trigger: 'Lender status change',
        action: 'Automatic client update',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'settle',
        trigger: 'Settlement complete',
        action: 'Review prompt + post-settle handoff',
        owner: 'Reputation & Reviews',
        channel: 'SMS / email',
      },
      {
        id: 'refi',
        trigger: '12 / 24 months post-settlement',
        action: 'Refinance opportunity prompt',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most brokers start with documents and first reply.',
    },
    systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds applications, documents, and status updates.',
      },
      { id: 'aih', name: 'AI Lead Handling', role: 'lead', why: 'Catches enquiries fast.' },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger at settlement.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Loan pages feed the same operating board.',
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
      title: 'A week with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A two-broker firm runs a normal week. New enquiries get acknowledged in minutes. Document checklists run with reminders. Status updates fire on lender changes. Reviews trigger at settlement.',
      observedChange:
        'Before, the same week would have had three stalled applications and a quiet review queue. With the layer in place, applications keep moving and the broker spends less time chasing.',
    },
  },
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
