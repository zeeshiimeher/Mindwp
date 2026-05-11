import type { IndustryDetailPageData } from '@/domains/industries/types';

export const consultantsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Consultants — Discovery, Proposal, and Engagement Systems',
    description:
      'How independent consultants and small firms hold inbound enquiries, manage discovery and proposals, and stay top-of-mind for repeat work.',
    canonical: '/industries/legal-professional-services/consultants',
    openGraph: {
      title: 'Consultants — Discovery, Proposal, and Engagement Systems',
      description: 'Discovery, proposals, and engagements on one operating layer.',
    },
  },
  slug: 'consultants',
  type: 'detail',
  parentSlug: 'legal-professional-services',
  hero: {
    badge: 'Professional · Consultants',
    title: 'A warm intro. [[muted:And a proposal that took two weeks to draft.]]',
    description:
      'Consulting work runs on relationships. The leak is between discovery and proposal — and between engagements when nothing keeps the relationship warm.',
    list: [
      'Inbound enquiries acknowledged with discovery options',
      'Proposal drafts move on cadence',
      'Past-client cadence keeps the relationship warm',
    ],
  },
  industries: ['consulting'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places consulting work usually slips',
      description: 'Most consultants see at least two of these.',
    },
    leaks: [
      {
        id: 'proposal-delay',
        leak: 'Proposals take longer than promised',
        state: 'risk',
        observed: 'A proposal slips from two days to two weeks. The window closes.',
      },
      {
        id: 'discovery-quiet',
        leak: 'Discovery calls don’t become proposals',
        state: 'silent',
        observed: 'A great discovery call happens. Nothing prompts the next step.',
      },
      {
        id: 'past-clients',
        leak: 'Past clients aren’t a referral source',
        state: 'attention',
        observed: 'A great engagement ends. Nothing keeps you top-of-mind for the next.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical month',
      title: 'How a consulting month moves',
      description: 'Discovery, proposals, delivery, all at once.',
    },
    timeline: [
      {
        id: 'week1',
        time: 'Week 1',
        event: 'Inbound enquiries + discovery calls',
        leakRisk: 'high',
        owner: 'Consultant',
      },
      {
        id: 'week2',
        time: 'Week 2',
        event: 'Proposal drafting',
        leakRisk: 'high',
        owner: 'Consultant',
      },
      {
        id: 'week3',
        time: 'Week 3',
        event: 'Delivery work',
        leakRisk: 'medium',
        owner: 'Consultant',
      },
      {
        id: 'week4',
        time: 'Week 4',
        event: 'Wrap, billing, retro',
        leakRisk: 'medium',
        owner: 'Consultant',
      },
      {
        id: 'eom',
        time: 'Month-end',
        event: 'Past-client touchpoints (rarely happen)',
        leakRisk: 'high',
        owner: 'Consultant',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The book of business, before and after',
      description: 'Same consultant. A different layer behind the calendar.',
    },
    before: {
      label: 'Before',
      items: [
        'Proposals slip past their window',
        'Discovery calls don’t become next steps',
        'Past clients drift',
        'Status updates ad-hoc',
        'Reviews depend on the client remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Proposal drafts move on cadence with reminders',
        'Discovery calls prompt a clear next step',
        'Past-client cadence runs automatically',
        'Status updates run on milestones',
        'Review prompt at the right moment',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a consulting business together',
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
        id: 'discovery',
        piece: 'Discovery call scheduling',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'proposal',
        piece: 'Proposal cadence + reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'past-client',
        piece: 'Past-client touchpoints',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review',
        piece: 'Post-engagement review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'sws',
        piece: 'Practice-page integration',
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
        id: 'proposal',
        fix: 'Move proposals on cadence',
        signalIfYou: 'see proposals slip past their window',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'discovery',
        fix: 'Convert discovery to next step automatically',
        signalIfYou: 'see good calls die without a clear next step',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'past-client',
        fix: 'Run past-client touchpoints',
        signalIfYou: 'feel relationships fade after delivery',
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
        trigger: 'New enquiry',
        action: 'Acknowledgment + discovery scheduling link',
        owner: 'AI Lead Handling',
        channel: 'Email',
      },
      {
        id: 'discovery',
        trigger: 'Discovery call complete',
        action: 'Summary + clear next-step prompt',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'proposal',
        trigger: 'Proposal in draft > 5 days',
        action: 'Reminder to consultant + status to client',
        owner: 'CRM & Automation',
        channel: 'Internal + email',
      },
      {
        id: 'milestone',
        trigger: 'Engagement milestone',
        action: 'Status update to client',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'past',
        trigger: '90 days post-engagement',
        action: 'Past-client touchpoint',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most consultants start with proposal cadence and past-client.',
    },
    systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds discovery, proposals, and past-client cadence.',
      },
      { id: 'aih', name: 'AI Lead Handling', role: 'lead', why: 'Catches enquiries fast.' },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after engagement.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Practice pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful for niche-specific authority.',
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
      body: 'A solo consultant runs a normal quarter. Inbound enquiries get acknowledgment and a discovery slot. Proposal cadence moves drafts on schedule. Past-client touchpoints run automatically.',
      observedChange:
        'Before, the same quarter would have produced two slipped proposals and a quiet past-client list. With the layer in place, the consultant spends less time on admin.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What consultants usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a CRM and proposal tool. Do we drop them?',
        answer: 'No. The operating layer sits beside them.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the consultant?',
        answer: 'Yes — written in your voice and reviewed before launch.',
      },
      {
        id: 'fit',
        question: 'Does this work for niche consulting?',
        answer: 'Yes. The shape adapts to the niche.',
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
      title: 'Show us where the proposal cycle actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries, proposals, and past-clients sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working consultant.',
    },
  },
};
