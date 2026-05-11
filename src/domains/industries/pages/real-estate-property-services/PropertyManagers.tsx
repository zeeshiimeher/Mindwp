import type { IndustryDetailPageData } from '@/domains/industries/types';

export const propertyManagersIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Property Managers — Tenant, Owner, and Maintenance Systems',
    description:
      'How property managers hold tenant requests, owner reporting, and maintenance dispatch on one operating layer.',
    canonical: '/industries/real-estate-property-services/property-managers',
    openGraph: {
      title: 'Property Managers — Tenant, Owner, and Maintenance Systems',
      description: 'Tenants, owners, and maintenance on one operating layer.',
    },
  },
  slug: 'property-managers',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Property · Manager Firms',
    title: 'A leak at unit 14. [[muted:And no one routed the trade yet.]]',
    description:
      'Property managers hold three audiences: tenants, owners, and trades. The leakage lives between request and resolution.',
    list: [
      'Tenant requests acknowledged with status and ETA',
      'Maintenance dispatched and tracked to completion',
      'Owners receive structured updates without manual prep',
    ],
  },
  industries: ['property-management'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places property management usually slips',
      description: 'Most managers see at least two of these.',
    },
    leaks: [
      {
        id: 'tenant-silent',
        leak: 'Tenant submits a request, hears nothing',
        state: 'silent',
        observed: 'A maintenance request lands. The tenant doesn’t know if it was received.',
      },
      {
        id: 'trade-untracked',
        leak: 'Trade dispatched, no completion confirmation',
        state: 'risk',
        observed: 'A plumber visits. Nobody confirms the fix landed.',
      },
      {
        id: 'owner-quiet',
        leak: 'Owner gets sporadic updates',
        state: 'attention',
        observed: 'An owner messages asking what happened. The reply takes a day.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical week',
      title: 'How a property-manager week moves',
      description: 'Tenant requests, owner queries, trade scheduling, all at once.',
    },
    timeline: [
      {
        id: 'mon',
        time: 'Mon',
        event: 'Weekend backlog: tenant requests',
        leakRisk: 'high',
        owner: 'Manager',
      },
      {
        id: 'tue',
        time: 'Tue — Wed',
        event: 'Trade dispatch and inspections',
        leakRisk: 'medium',
        owner: 'Manager',
      },
      {
        id: 'thu',
        time: 'Thu',
        event: 'Owner reporting prep',
        leakRisk: 'medium',
        owner: 'Manager',
      },
      {
        id: 'fri',
        time: 'Fri',
        event: 'Lease renewals, rent reviews',
        leakRisk: 'medium',
        owner: 'Manager',
      },
      {
        id: 'wkd',
        time: 'Sat — Sun',
        event: 'Inbound tenant urgency',
        leakRisk: 'high',
        owner: 'On-call',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The portfolio, before and after',
      description: 'Same manager. A different layer behind the inbox.',
    },
    before: {
      label: 'Before',
      items: [
        'Tenants don’t know if requests were received',
        'Trades dispatched without completion tracking',
        'Owners get sporadic updates',
        'Reviews are rare and random',
        'Renewals chased manually',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Tenant requests acknowledged with status and ETA',
        'Trades tracked to completion confirmation',
        'Owners receive structured updates on cadence',
        'Review prompt at the right moment',
        'Renewal reminders run on cadence',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a portfolio together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      {
        id: 'tenant-ack',
        piece: 'Tenant request acknowledgment',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      {
        id: 'dispatch',
        piece: 'Trade dispatch + completion tracking',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'owner-update',
        piece: 'Owner status updates',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      { id: 'renewal', piece: 'Renewal reminders', state: 'in-place', owner: 'CRM & Automation' },
      { id: 'review', piece: 'Review prompt', state: 'planned', owner: 'Reputation & Reviews' },
      {
        id: 'sws',
        piece: 'Owner / tenant portal pages',
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
        id: 'tenant',
        fix: 'Acknowledge tenant requests with status',
        signalIfYou: 'see tenant frustration about silence',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'dispatch',
        fix: 'Track trade dispatch to completion',
        signalIfYou: 'see jobs marked “done” without confirmation',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'owner',
        fix: 'Run structured owner updates',
        signalIfYou: 'see owners asking for status weekly',
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
        id: 'request',
        trigger: 'Tenant request submitted',
        action: 'Acknowledgment with ticket number and expected ETA',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'dispatch',
        trigger: 'Trade dispatched',
        action: 'Tenant + owner notified with appointment window',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'complete',
        trigger: 'Job marked complete',
        action: 'Confirmation request to tenant',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'owner',
        trigger: 'End of week',
        action: 'Owner status digest',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'renewal',
        trigger: '60 days before lease end',
        action: 'Renewal prompt to tenant + owner',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most managers start with tenant acknowledgment and dispatch.',
    },
    systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds tenant tickets, dispatch, and owner reporting.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches tenant requests after hours.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Owner reviews trigger after lease renewals.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Tenant / owner portal pages feed the same board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful for owner acquisition in target areas.',
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
      body: 'A property-management firm with 80 doors runs a normal week. Tenant requests get acknowledgment and ETA on landing. Trades dispatched are tracked to completion. Owners get a weekly status digest.',
      observedChange:
        'Before, the same week would have had multiple silent tickets and an owner email backlog. With the layer in place, the manager spends less time on status replies.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What property managers usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use property-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'trade',
        question: 'Can it work with our existing trade list?',
        answer: 'Yes. The board respects your dispatch rules.',
      },
      {
        id: 'owner',
        question: 'Are owner updates automated?',
        answer: 'They are structured digests — generated automatically, sent on schedule.',
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
      title: 'Show us where the portfolio actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      {
        num: '1',
        text: 'A short read of where tenant requests, dispatch, and owner updates sit today',
      },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working property manager.',
    },
  },
};
