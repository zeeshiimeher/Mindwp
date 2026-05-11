import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallLawFirmsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Law Firms — Intake, Conflict-Check, and Matter Systems',
    description:
      'How small law firms hold considered enquiries, run conflict checks, and manage matter status without losing the moment.',
    canonical: '/industries/legal-professional-services/small-law-firms',
    openGraph: {
      title: 'Small Law Firms — Intake, Conflict-Check, and Matter Systems',
      description: 'Considered intake, conflict checks, and matters on one operating layer.',
    },
  },
  slug: 'small-law-firms',
  type: 'detail',
  parentSlug: 'legal-professional-services',
  hero: {
    badge: 'Professional · Law Firms',
    title: 'A serious enquiry. [[muted:And no one to triage it before tomorrow.]]',
    description:
      'Most legal enquiries arrive once. Slow first reply or no clear next step costs the matter. The leak lives between intake and engagement.',
    list: [
      'Considered enquiries acknowledged with a clear intake step',
      'Conflict checks routed without manual handoff',
      'Matter status and engagement letters move on cadence',
    ],
  },
  industries: ['law-firm'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places legal intake usually slips',
      description: 'Most firms see at least two of these.',
    },
    leaks: [
      {
        id: 'slow-triage',
        leak: 'Considered enquiries wait for triage',
        state: 'silent',
        observed: 'A serious matter enquiry lands at 6pm. Triage happens the next afternoon.',
      },
      {
        id: 'conflict',
        leak: 'Conflict checks slow the handoff',
        state: 'risk',
        observed: 'A check sits with one partner for two days.',
      },
      {
        id: 'status-quiet',
        leak: 'Clients chase status updates',
        state: 'attention',
        observed: 'A client emails for an update. The reply takes a day.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical week',
      title: 'How a small-firm week moves',
      description: 'Considered enquiries land continuously. Matters take time.',
    },
    timeline: [
      {
        id: 'mon',
        time: 'Mon',
        event: 'Weekend enquiry triage',
        leakRisk: 'high',
        owner: 'Intake',
      },
      {
        id: 'tue',
        time: 'Tue — Wed',
        event: 'Conflict checks, engagement letters',
        leakRisk: 'medium',
        owner: 'Partner / Admin',
      },
      {
        id: 'thu',
        time: 'Thu',
        event: 'Matter work and client updates',
        leakRisk: 'medium',
        owner: 'Lawyer',
      },
      {
        id: 'fri',
        time: 'Fri',
        event: 'Billing, status, week wrap',
        leakRisk: 'medium',
        owner: 'Admin',
      },
      {
        id: 'wkd',
        time: 'Sat — Sun',
        event: 'After-hours enquiries land',
        leakRisk: 'high',
        owner: 'Inbox',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The intake, before and after',
      description: 'Same lawyers. A different layer behind reception.',
    },
    before: {
      label: 'Before',
      items: [
        'Considered enquiries wait for triage',
        'Conflict checks slow the handoff',
        'Engagement letters drift',
        'Status updates sporadic',
        'Reviews depend on the client remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Enquiries acknowledged with a structured intake step',
        'Conflict checks routed automatically',
        'Engagement letter prompts run on cadence',
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
        piece: 'Enquiry acknowledgment + intake',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      {
        id: 'conflict',
        piece: 'Conflict-check routing',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'engagement',
        piece: 'Engagement letter cadence',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'status',
        piece: 'Matter status updates',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review',
        piece: 'Post-matter review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'sws',
        piece: 'Practice-area pages',
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
        id: 'intake',
        fix: 'Acknowledge enquiries with a structured intake step',
        signalIfYou: 'see serious enquiries delay 24h before triage',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'conflict',
        fix: 'Route conflict checks without manual handoff',
        signalIfYou: 'see checks stuck on a partner’s inbox',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'status',
        fix: 'Run matter status updates on cadence',
        signalIfYou: 'see clients chasing for status',
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
        id: 'intake',
        trigger: 'Enquiry submitted',
        action: 'Acknowledgment + structured intake form',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'conflict',
        trigger: 'Intake complete',
        action: 'Conflict-check routed to right partner with deadline',
        owner: 'CRM & Automation',
        channel: 'Internal',
      },
      {
        id: 'engagement',
        trigger: 'Conflict cleared',
        action: 'Engagement letter sent',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'status',
        trigger: 'Matter milestone reached',
        action: 'Status update to client',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'review',
        trigger: 'Matter closed',
        action: 'Review prompt at appropriate interval',
        owner: 'Reputation & Reviews',
        channel: 'Email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most firms start with intake and status.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Considered enquiries need a calm, clear first reply.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds intake, conflict, and matter status.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after matter close.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Practice-area pages feed the same operating board.',
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
      body: 'A four-lawyer firm runs a normal week. Considered enquiries get a calm reply with intake. Conflict checks route automatically. Engagement letters send on clearance. Status updates run on milestones.',
      observedChange:
        'Before, the same week would have produced two slow triages and three status-chase emails. With the layer in place, the firm spends less time on intake admin and more on matters.',
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
        id: 'tools',
        question: 'We use case-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'compliance',
        question: 'How does this handle privilege and confidentiality?',
        answer:
          'It does not replace your case-management tools. It links to them so the operating board sees status without duplicating data.',
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
      title: 'Show us where the intake actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where intake, conflict checks, and status sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working law firm.',
    },
  },
};
