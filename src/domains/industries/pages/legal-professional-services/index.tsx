import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const legalProfessionalServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Legal & Professional Services — Intake, Engagement, and Status Systems',
    description:
      'How law firms, accounting firms, and consultants hold considered enquiries, manage engagements, and stay top-of-mind for repeat work.',
    canonical: '/industries/legal-professional-services',
    openGraph: {
      title: 'Legal & Professional Services — Intake, Engagement, and Status Systems',
      description: 'Where the engagement leaks and what holds it across three professional shapes.',
    },
  },
  slug: 'legal-professional-services',
  type: 'category',
  category: 'legal-professional-services',
  hero: {
    badge: 'Industries · Professional Services',
    title: 'A serious enquiry. [[muted:And the wrong moment to drop the ball.]]',
    description:
      'Professional services run on considered enquiries and long engagements. Slow first reply or quiet status updates cost the matter — and the next one.',
    list: [
      'Considered enquiries acknowledged with a clear intake step',
      'Engagement, document, and status cadences run on schedule',
      'Past-client touchpoints keep the relationship warm',
    ],
  },
  industries: ['law-firm', 'accounting', 'consulting'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  categoryLeaks: {
    header: {
      kicker: 'Where it leaks',
      title: 'Four places professional engagements usually slip',
      description: 'Most firms see at least three of these.',
    },
    leaks: [
      {
        id: 'first-touch',
        leak: 'Slow first reply costs the matter',
        state: 'silent',
        observed: 'A serious enquiry waits 24h. They go elsewhere.',
      },
      {
        id: 'docs',
        leak: 'Document collection stalls',
        state: 'risk',
        observed: 'A request waits a week. The engagement waits with it.',
      },
      {
        id: 'status',
        leak: 'Clients chase status updates',
        state: 'attention',
        observed: 'A client emails for an update. The reply takes a day.',
      },
      {
        id: 'past-clients',
        leak: 'Past clients aren’t a referral source',
        state: 'lost',
        observed: 'A great engagement ends. Nothing keeps you top-of-mind.',
      },
    ],
  },
  sharedPattern: {
    header: {
      kicker: 'How the engagement usually moves',
      title: 'Intake → engagement → past-client',
      description: 'The shape every professional firm works around.',
    },
    timeline: [
      {
        id: 'intake',
        time: 'Intake',
        event: 'Enquiry, conflict / fit check, engagement letter',
        leakRisk: 'high',
        detail: 'First-touch speed and intake clarity matter most.',
      },
      {
        id: 'engagement',
        time: 'Engagement',
        event: 'Documents, work, milestones, billing',
        leakRisk: 'medium',
        detail: 'Document and status leaks live here.',
      },
      {
        id: 'past',
        time: 'Past-client',
        event: 'Touchpoints + recall',
        leakRisk: 'medium',
        detail: 'Most repeat work lives here. Most leakage too.',
      },
    ],
  },
  breakpoints: {
    header: {
      kicker: 'Moments that need an owner',
      title: 'Where the professional week actually breaks',
      description: 'These are the points the system has to hold automatically.',
    },
    items: [
      'After-hours considered enquiry',
      'Conflict / fit check between intake and engagement',
      'Document request that needs follow-through',
      'Engagement milestone or status change',
      'Engagement complete → review prompt',
      'Past-client cadence to keep relationship warm',
    ],
  },
  operatingModels: {
    header: {
      kicker: 'How firms differ',
      title: 'Two operating shapes inside the same category',
      description: 'Most firms tilt toward one of these two.',
    },
    models: [
      {
        id: 'matter-led',
        label: 'Matter-led',
        traits: [
          'Discrete matters with clear close points',
          'Conflict checks and engagement letters matter',
          'Status updates required',
          'Examples: small law firms, consultants on engagements',
        ],
        differentiator: 'Lead system is AI Lead Handling for intake and CRM for matter status.',
      },
      {
        id: 'cycle-led',
        label: 'Cycle-led',
        traits: [
          'Continuous service across the year',
          'Year-end and quarterly cycles strain capacity',
          'Document collection is the operational core',
          'Example: accounting firms',
        ],
        differentiator: 'Lead system is CRM with year-end cadences.',
      },
    ],
  },
  pathwayMap: {
    header: {
      kicker: 'Choose the closest shape',
      title: 'Three recognition routes',
      description: 'Each route opens a detail page tuned to that operating reality.',
    },
    branches: [
      {
        id: 'law',
        segment: 'Small law firm',
        recognition: 'Considered enquiries, conflict checks, matter status.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/legal-professional-services/small-law-firms',
        detailLabel: 'Small Law Firms detail',
      },
      {
        id: 'accounting',
        segment: 'Accounting firm',
        recognition: 'Document collection, year-end cadence.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/legal-professional-services/accounting-firms',
        detailLabel: 'Accounting Firms detail',
      },
      {
        id: 'consultants',
        segment: 'Consultant',
        recognition: 'Discovery, proposals, past-client.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/legal-professional-services/consultants',
        detailLabel: 'Consultants detail',
      },
    ],
  },
  startingSystems: {
    header: {
      kicker: 'Which systems start where',
      title: 'How the six systems show up across professional services',
      description: 'Lead first. Support next. Later as the firm steadies.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    matrix: [
      {
        systemId: 'aih',
        systemName: 'AI Lead Handling',
        status: 'lead',
        whyNow: 'Considered enquiries need a calm, clear first reply.',
      },
      {
        systemId: 'crm',
        systemName: 'CRM & Automation',
        status: 'lead',
        whyNow: 'Holds documents, status, and past-client cadence.',
      },
      {
        systemId: 'rep',
        systemName: 'Reputation & Reviews',
        status: 'support',
        whyNow: 'Reviews trigger after engagement.',
      },
      {
        systemId: 'sws',
        systemName: 'Smart Website Systems',
        status: 'support',
        whyNow: 'Practice / service pages feed the same operating board.',
      },
      {
        systemId: 'lsa',
        systemName: 'Local SEO Authority',
        status: 'later',
        whyNow: 'Useful for niche-specific authority.',
      },
      {
        systemId: 'rg',
        systemName: 'Revenue Growth',
        status: 'later',
        whyNow: 'Repeat work and referral economics, once steady.',
      },
    ],
  },
  detailRoutes: {
    header: {
      kicker: 'Detail pages',
      title: 'Choose the closest firm type',
      description: 'Each route opens a page tuned to the way that work moves.',
    },
    routeEntries: [
      {
        detailHref: '/industries/legal-professional-services/small-law-firms',
        label: 'Small Law Firms',
        oneLine: 'Intake, conflict checks, matter status.',
        leadingSystem: 'AI Lead Handling',
        state: 'slow',
      },
      {
        detailHref: '/industries/legal-professional-services/accounting-firms',
        label: 'Accounting Firms',
        oneLine: 'Document collection, year-end cadence.',
        leadingSystem: 'CRM & Automation',
        state: 'risk',
      },
      {
        detailHref: '/industries/legal-professional-services/consultants',
        label: 'Consultants',
        oneLine: 'Discovery, proposals, past-client cadence.',
        leadingSystem: 'CRM & Automation',
        state: 'attention',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'When the layer holds',
      title: 'What the engagement looks like once the gaps are owned',
      description: 'Same firm. Same hours. Less manual chasing.',
    },
    handled: [
      {
        id: 'intake',
        label: 'Intake',
        state: 'after',
        note: 'Enquiries acknowledged with a structured intake step.',
      },
      {
        id: 'docs',
        label: 'Documents',
        state: 'after',
        note: 'Request + reminder runs to completion.',
      },
      { id: 'status', label: 'Status', state: 'after', note: 'Status updates run on milestones.' },
      { id: 'past', label: 'Past-client', state: 'after', note: 'Touchpoints run on cadence.' },
    ],
  },
  scenarioStrip: {
    header: {
      kicker: 'A category scenario',
      title: 'How a busy month changes',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A small professional firm runs a normal month. Considered enquiries get a calm reply with intake. Documents collected with reminders. Status updates fire on milestones. Past-client cadence runs alongside.',
      observedChange:
        'Before, the same month would have produced two slow triages and a quiet review queue. With the layer in place, the firm spends less time on admin.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What firm partners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'fit',
        question: 'Is this the same build for every professional firm?',
        answer: 'No. The shape is similar. The lead system differs by matter or cycle shape.',
      },
      {
        id: 'starting',
        question: 'Where do most firms actually start?',
        answer:
          'Where the leak hurts most. For most, that is intake speed and document collection.',
      },
      {
        id: 'tools',
        question: 'We use case- or practice-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the engagement actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where intake, documents, and status sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working professional firm.',
    },
  },
};
