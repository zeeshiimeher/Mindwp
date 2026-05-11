import type { IndustryDetailPageData } from '@/domains/industries/types';

export const nailSalonsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Nail Salons — Walk-in, Booking, and Repeat-Visit Systems',
    description:
      'How nail salons hold inbound bookings, manage walk-in flow, and keep regulars on a steady visit rhythm.',
    canonical: '/industries/beauty-personal-care/nail-salons',
    openGraph: {
      title: 'Nail Salons — Walk-in, Booking, and Repeat-Visit Systems',
      description: 'Bookings, walk-ins, and repeat-visit rhythm on one operating board.',
    },
  },
  slug: 'nail-salons',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Nail Salons',
    title: 'A walk-in at the door. [[muted:And no answer to "how long?"]]',
    description:
      'Nail salons run on flow — a steady mix of bookings and walk-ins. The leak is the moment a walk-in turns away because the desk could not give a clear answer.',
    list: [
      'Bookings confirmed instantly, day or night',
      'Walk-in capacity visible at the desk',
      'Regulars reminded at the right interval',
    ],
  },
  industries: ['nail-salon'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'reputation-review',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places nail-salon enquiries usually slip',
      description: 'Most nail salons will see at least two of these.',
    },
    leaks: [
      {
        id: 'walkin-noanswer',
        leak: 'Walk-ins ask "how long?" — desk doesn’t know',
        state: 'risk',
        observed: 'A walk-in arrives. The desk shrugs or guesses. They walk back out.',
      },
      {
        id: 'phone-busy',
        leak: 'Phone rings while every tech is hands-on',
        state: 'silent',
        observed: 'Nobody is at the desk. Voicemail catches it. The next salon picks up.',
      },
      {
        id: 'regular-drift',
        leak: 'Regulars drift past their normal interval',
        state: 'lost',
        observed:
          'A monthly client misses one cycle. They drift out without anything reminding them.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical Friday',
      title: 'How a nail-salon Friday moves',
      description: 'Bookings and walk-ins overlap most of the day.',
    },
    timeline: [
      {
        id: 'open',
        time: '10:00',
        event: 'Doors open — bookings start',
        leakRisk: 'low',
        owner: 'Desk',
      },
      {
        id: 'walkin-rush',
        time: '11:30 — 14:00',
        event: 'Walk-ins overlap with bookings',
        leakRisk: 'high',
        owner: 'Desk / lead tech',
        detail: 'The desk needs a clear answer about the next available slot.',
      },
      {
        id: 'phone',
        time: '14:00 — 16:00',
        event: 'Phone rings while every tech is busy',
        leakRisk: 'high',
        owner: 'Whoever is closest',
      },
      {
        id: 'evening',
        time: '17:00 — 19:00',
        event: 'Evening rush — regulars and after-work walk-ins',
        leakRisk: 'medium',
        owner: 'Desk',
      },
      {
        id: 'close',
        time: '19:00',
        event: 'Pickups, payment, no rebook prompt',
        leakRisk: 'medium',
        owner: 'Desk',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The desk, before and after',
      description: 'Same techs. Same flow. A different layer behind the front desk.',
    },
    before: {
      label: 'Before',
      items: [
        'Walk-ins answered with a guess',
        'Phone hits voicemail when techs are busy',
        'No-shows take chair time without warning',
        'Regulars drift between visits',
        'Reviews depend on memory',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Walk-ins offered the next real slot from a board',
        'Missed calls get an instant text-back with a booking link',
        'Two-step reminders reduce no-show drift',
        'Repeat-visit reminders go out at the right interval',
        'Reviews triggered automatically post-visit',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold the day together',
      description: 'What is in place, what is planned, and what is optional.',
    },
    workbench: [
      {
        id: 'capacity',
        piece: 'Live capacity board',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'callback',
        piece: 'Missed-call text-back',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      {
        id: 'reminders',
        piece: 'Two-step reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'rebook',
        piece: 'Repeat-visit reminders',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'reviews',
        piece: 'Post-visit review trigger',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'service-area',
        piece: 'Service-area visibility',
        state: 'optional',
        owner: 'Local SEO Authority',
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
        id: 'walkin',
        fix: 'Get a live capacity board at the desk',
        signalIfYou: 'lose walk-ins because the desk cannot give a clean answer',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'phone',
        fix: 'Catch calls when every tech is hands-on',
        signalIfYou: 'see calls coming in faster than the desk can answer',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'rebook',
        fix: 'Run repeat-visit reminders at the right interval',
        signalIfYou: 'see regulars drift between visits',
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
        id: 'walkin',
        trigger: 'Walk-in arrives',
        action: 'Desk sees live capacity on a single screen',
        owner: 'CRM & Automation',
        channel: 'Internal',
      },
      {
        id: 'missed-call',
        trigger: 'Inbound call missed',
        action: 'Text within 60s with booking link',
        owner: 'AI Lead Handling',
        channel: 'SMS',
      },
      {
        id: 'reminder',
        trigger: '24h before appointment',
        action: 'Confirmation reminder',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Service marked complete',
        action: 'Review request within 30 minutes',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'rebook',
        trigger: '3 weeks since last visit',
        action: 'Reminder with rebook link',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most nail salons start with capacity visibility and phone cover.',
    },
    systems: [
      'crm-automation',
      'ai-lead-handling',
      'reputation-review',
      'smart-website-systems',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Capacity, reminders, and rebook intervals on one board.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches inbound calls when the desk is at a chair.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger reliably the moment the client leaves.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Booking page feeds straight into the operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when local discovery is the bottleneck.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A Friday with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A six-tech nail salon runs a full Friday. Walk-ins are answered with the next real slot from a desk board. Calls during busy hours get text-backs offering a booking link. Regulars past their three-week interval got a reminder earlier in the week. Reviews trigger on sign-off.',
      observedChange:
        'Before, the same Friday would have lost three walk-ins, two voicemails to chase, and a half-empty evening from drifting regulars. With the layer in place, the desk is calmer and the chairs stay busier.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What nail-salon owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We already use a booking app. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'walkins',
        question: 'Does this work if most of our business is walk-ins?',
        answer:
          'Yes — the capacity board is built for that. The booking layer simply fills in around it.',
      },
      {
        id: 'reminders',
        question: 'Will text reminders feel pushy?',
        answer: 'Set at the right cadence, no. We tune the rhythm to your service mix.',
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
      title: 'Show us where the desk actually leaks',
      description:
        'Tell us about a typical Friday. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where walk-ins and bookings sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working nail salon with steady walk-in flow.',
    },
  },
};
