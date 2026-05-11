import type { IndustryDetailPageData } from '@/domains/industries/types';

export const carDetailingIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Car Detailing — Booking, Capacity, and Repeat-Visit Systems',
    description:
      'How detailing operators hold inbound bookings, manage day-of capacity, and bring past customers back without paid acquisition.',
    canonical: '/industries/automotive-services/car-detailing',
    openGraph: {
      title: 'Car Detailing — Booking, Capacity, and Repeat-Visit Systems',
      description: 'Bookings, capacity, and repeat-visit reminders on one operating board.',
    },
  },
  slug: 'car-detailing',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Detailing',
    title: 'A booking landed at 11pm. [[muted:By morning the slot was already gone.]]',
    description:
      'Detailing demand is bursty and visual. Bookings come from Instagram, Google, and word of mouth — all on the customer’s schedule, not yours. The leaks live in the gap between enquiry and confirmation.',
    list: [
      'Instant booking confirmation, day or night',
      'Day-of capacity visible to whoever is taking calls',
      'Past customers reminded at the right interval',
    ],
  },
  industries: ['car-detailing'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places detailing enquiries usually slip',
      description: 'Most detailing operators will see at least two of these.',
    },
    leaks: [
      {
        id: 'after-hours',
        leak: 'After-hours bookings sit until morning',
        state: 'silent',
        observed:
          'A request comes in at 9pm via Instagram or the booking form. By 8am the customer has booked the next-best detailer.',
      },
      {
        id: 'capacity',
        leak: 'Day-of capacity lives in someone’s head',
        state: 'risk',
        observed:
          'A walk-in arrives. The owner has to call the lead detailer to find out if there is room. Two minutes pass.',
      },
      {
        id: 'repeat',
        leak: 'Past customers drift away quietly',
        state: 'lost',
        observed:
          'A full detail done six months ago. Nothing reminds the customer it’s due again. The car gets washed at home — or the next package goes to a competitor.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical Saturday',
      title: 'How a detailing day moves',
      description: 'Capacity, weather, and walk-ins shape every hour.',
    },
    timeline: [
      {
        id: 'open',
        time: '8:00',
        event: 'Day opens — bays prepped',
        leakRisk: 'low',
        owner: 'Lead detailer',
      },
      {
        id: 'morning',
        time: '8:30 — 11:00',
        event: 'First slots run; phone starts ringing',
        leakRisk: 'high',
        owner: 'Owner / front of house',
        detail: 'Calls land while the team is hands-on with vehicles.',
      },
      {
        id: 'walkins',
        time: '11:00 — 14:00',
        event: 'Walk-ins arrive asking about same-day slots',
        leakRisk: 'high',
        owner: 'Whoever is closest',
        detail: 'Capacity decisions slow the floor down.',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Afternoon slots run; quotes go out for next week',
        leakRisk: 'medium',
        owner: 'Owner',
      },
      {
        id: 'closeout',
        time: '17:00 — 18:00',
        event: 'Pickups, payment, and review request',
        leakRisk: 'medium',
        owner: 'Owner',
        detail: 'Reviews not asked for unless the customer brings it up.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The booking flow, before and after',
      description: 'Same crew. Same bays. A different layer between the customer and the calendar.',
    },
    before: {
      label: 'Before',
      items: [
        'After-hours requests sit until morning',
        'Capacity questions need a phone call to the lead detailer',
        'Walk-ins decided ad-hoc on the floor',
        'Reviews depend on the customer remembering',
        'Past customers leave quietly when their interval passes',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Bookings confirmed instantly with the next available slot',
        'Day-of capacity visible to whoever is at the front',
        'Walk-ins offered the next real slot, not a guess',
        'Reviews triggered automatically on sign-off',
        'Repeat-visit reminders go out at the right interval',
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
        id: 'instant-book',
        piece: 'Instant booking confirmation',
        state: 'in-place',
        owner: 'AI Lead Handling',
        note: 'Acknowledges the slot and offers the nearest available time.',
      },
      {
        id: 'capacity-board',
        piece: 'Day-of capacity board',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'repeat-reminders',
        piece: 'Repeat-visit reminders',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'review-trigger',
        piece: 'Sign-off review trigger',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'showcase',
        piece: 'Before/after gallery hooks',
        state: 'optional',
        owner: 'Smart Website Systems',
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
        id: 'after-hours',
        fix: 'Acknowledge after-hours bookings instantly',
        signalIfYou: 'lose more than a few bookings a week to next-morning silence',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'capacity',
        fix: 'Get day-of capacity onto a single board',
        signalIfYou: 'spend half your day answering "can you fit me in?" calls',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'repeat',
        fix: 'Run repeat-visit reminders at the right interval',
        signalIfYou: 'know your repeat customers but the rhythm depends on memory',
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
        id: 'after-hours-book',
        trigger: 'Booking form submitted outside hours',
        action: 'Confirm slot or offer next available within 60s',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'walk-in',
        trigger: 'Walk-in arrives',
        action: 'Front-of-house sees live bay capacity on one screen',
        owner: 'CRM & Automation',
        channel: 'Internal',
      },
      {
        id: 'pickup-ready',
        trigger: 'Vehicle marked complete',
        action: 'Pickup-ready notification with collection window',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Invoice paid',
        action: 'Review request within 30 minutes',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'repeat',
        trigger: '5 months since last full detail',
        action: 'Reminder with rebook link',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Detailing typically leans on CRM for cycle and AI for after-hours capture.',
    },
    systems: [
      'crm-automation',
      'ai-lead-handling',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds capacity, repeat-visit reminders, and pickup notifications.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Answers after-hours bookings while the bays are closed.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger reliably at sign-off — the moment the car looks its best.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Booking and gallery pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when service-area discovery is the bottleneck.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A Saturday with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A two-bay detailer runs a full Saturday. Booking requests landed overnight have already been confirmed automatically with the nearest slot. Walk-ins are offered real available times from a board, not a guess. Reviews trigger on sign-off. Five-month repeat reminders went out earlier in the week.',
      observedChange:
        'Before, the same Saturday would have lost two overnight bookings and had three walk-ins turned away with a maybe. With the layer in place, the bays stay full and the front of house is calmer.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What detailing operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'small',
        question: 'We are a one-bay mobile operator. Is this overkill?',
        answer:
          'Often a smaller build is the right move. The system follows the leak. Sometimes only the booking-confirmation layer is worth installing first.',
      },
      {
        id: 'walkins',
        question: 'Will this stop walk-ins from clogging the day?',
        answer:
          'It makes capacity visible at the front so the right answer is in front of whoever is taking the question. It does not replace floor judgement.',
      },
      {
        id: 'social',
        question: 'Most of our enquiries come from Instagram. Does that get caught?',
        answer:
          'Yes — DMs and form-fills can both land in the same operating board so nothing sits in a silo overnight.',
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
      title: 'Show us where the booking flow actually leaks',
      description:
        'Tell us about a busy Saturday and how bookings reach you today. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings and walk-ins sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a small detailing operator with a real Saturday rush.',
    },
  },
};
