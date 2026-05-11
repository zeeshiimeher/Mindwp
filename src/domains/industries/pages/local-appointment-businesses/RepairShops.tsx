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
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places repair-shop work usually slips',
      description: 'Most shops see at least two of these.',
    },
    leaks: [
      {
        id: 'quote-wait',
        leak: 'Customer waits for a quote that never goes out',
        state: 'silent',
        observed: 'A repair is diagnosed. The quote sits in the tech’s head. The customer drifts.',
      },
      {
        id: 'ready-silent',
        leak: 'Ready for pickup — no one tells the customer',
        state: 'attention',
        observed: 'A device sits on the shelf for days. The customer assumes it isn’t done.',
      },
      {
        id: 'no-review',
        leak: 'Pickup happens — no review prompt',
        state: 'lost',
        observed: 'A satisfied customer leaves. Nothing prompts a review.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a repair-shop day moves',
      description: 'Walk-ins, bench work, phone calls.',
    },
    timeline: [
      {
        id: 'open',
        time: '9:00',
        event: 'Doors open — first drop-offs',
        leakRisk: 'low',
        owner: 'Counter',
      },
      {
        id: 'morning',
        time: '10:00 — 12:00',
        event: 'Bench work and walk-ins compete',
        leakRisk: 'high',
        owner: 'Tech',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Quotes go out — when there is time',
        leakRisk: 'high',
        owner: 'Tech',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Pickups, more drop-offs',
        leakRisk: 'medium',
        owner: 'Counter',
      },
      {
        id: 'close',
        time: '17:30',
        event: 'Close out — done jobs not always notified',
        leakRisk: 'high',
        owner: 'Counter',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The shop, before and after',
      description: 'Same bench. A different layer behind the counter.',
    },
    before: {
      label: 'Before',
      items: [
        'Quotes wait until the tech finds time',
        'Ready-for-pickup sits silent',
        'Customers chase status',
        'Reviews depend on the customer remembering',
        'Repeat work is opportunistic',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Quote prompts the customer with one tap to approve',
        'Ready-for-pickup sends instantly with location and hours',
        'Status visible on the operating board',
        'Review prompt runs after pickup',
        'Repeat-customer reminders run at the right interval',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a shop together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      { id: 'intake', piece: 'Drop-off intake', state: 'in-place', owner: 'CRM & Automation' },
      { id: 'quote', piece: 'Quote send + approve', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'ready',
        piece: 'Ready-for-pickup notification',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review',
        piece: 'Post-pickup review prompt',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'rebook',
        piece: 'Repeat-service reminder',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'textback',
        piece: 'Missed-call text-back',
        state: 'optional',
        owner: 'AI Lead Handling',
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
        id: 'quote',
        fix: 'Send and approve quotes faster',
        signalIfYou: 'see customers drift between diagnosis and approval',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'ready',
        fix: 'Notify the customer the moment a job is done',
        signalIfYou: 'see devices sit on the shelf',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'review',
        fix: 'Run review prompts after pickup',
        signalIfYou: 'have a quiet review queue',
        leadingSystem: 'Reputation & Reviews',
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
        trigger: 'Drop-off logged',
        action: 'SMS confirmation with ticket number',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'quote',
        trigger: 'Quote ready',
        action: 'SMS with approve / decline link',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'ready',
        trigger: 'Marked ready for pickup',
        action: 'SMS with pickup hours and location',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Pickup marked complete',
        action: 'Review prompt the next morning',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'missed',
        trigger: 'Missed call',
        action: 'Text-back within 2 minutes',
        owner: 'AI Lead Handling',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most shops start with quote and ready-for-pickup.',
    },
    systems: ['crm-automation', 'reputation-review', 'ai-lead-handling', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds drop-off, quote, and ready-for-pickup status.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'lead',
        why: 'Reviews trigger after pickup.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'support',
        why: 'Catches missed calls when the bench is busy.',
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
        why: 'Useful for local discovery when needed.',
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
      body: 'A repair shop runs a normal week. Drop-offs get a confirmation SMS. Quotes go out the moment they’re ready. Ready-for-pickup notifications fire on status change. Reviews trigger after pickup.',
      observedChange:
        'Before, the same week would have had a shelf of done devices waiting for the customer to remember and a quiet review queue. With the layer in place, pickups happen sooner and reviews keep coming.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
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
      kicker: 'Next step',
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
