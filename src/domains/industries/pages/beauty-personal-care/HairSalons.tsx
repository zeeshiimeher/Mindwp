import type { IndustryDetailPageData } from '@/domains/industries/types';

export const hairSalonsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Hair Salons — Booking, Stylist Capacity, and Rebook Systems',
    description:
      'How established hair salons hold inbound bookings, manage stylist capacity, and bring clients back at the right interval.',
    canonical: '/industries/beauty-personal-care/hair-salons',
    openGraph: {
      title: 'Hair Salons — Booking, Stylist Capacity, and Rebook Systems',
      description: 'Bookings, capacity, and rebook intervals on one operating board.',
    },
  },
  slug: 'hair-salons',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Hair Salons',
    title: 'Two stylists fully booked. [[muted:And a phone ringing through to nobody.]]',
    description:
      'Salons live or die on rebook intervals. The leak between a finished cut and the next one — six weeks later — is where most revenue gets quietly lost.',
    list: [
      'Inbound bookings handled even when reception is at the wash basin',
      'Stylist capacity visible without a clipboard',
      'Rebook reminders go out at the right interval automatically',
    ],
  },
  industries: ['hair-salon'],
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
      title: 'Three places hair-salon enquiries usually slip',
      description: 'Most salons will see at least two of these.',
    },
    leaks: [
      {
        id: 'reception',
        leak: 'Reception is at the basin and the phone rings out',
        state: 'silent',
        observed:
          'A new client calls during a busy hour. Voicemail catches it. They book the next salon on their list.',
      },
      {
        id: 'no-show',
        leak: 'No-shows quietly cost a chair an hour',
        state: 'risk',
        observed:
          'A client doesn’t arrive. The reminder went out two days ago. The chair sits empty for an hour.',
      },
      {
        id: 'no-rebook',
        leak: 'Clients don’t rebook before they leave',
        state: 'lost',
        observed:
          'They leave intending to. They never do. Six weeks pass. They book the salon down the road.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical Saturday',
      title: 'How a salon Saturday moves',
      description: 'Reception is the busiest seat in the building.',
    },
    timeline: [
      {
        id: 'open',
        time: '9:00',
        event: 'Doors open — first clients in',
        leakRisk: 'low',
        owner: 'Reception',
      },
      {
        id: 'morning',
        time: '10:00 — 12:00',
        event: 'Calls land while reception is colour-mixing',
        leakRisk: 'high',
        owner: 'Reception',
        detail: 'The chair won the day’s priority; the phone didn’t.',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Walk-ins ask about same-day slots',
        leakRisk: 'medium',
        owner: 'Reception',
      },
      {
        id: 'afternoon',
        time: '14:00 — 17:00',
        event: 'Bookings stack up; rebooks not asked at the desk',
        leakRisk: 'high',
        owner: 'Reception / stylist',
      },
      {
        id: 'closeout',
        time: '17:00 — 18:00',
        event: 'Pickups, payment, no rebook prompt',
        leakRisk: 'medium',
        owner: 'Reception',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The chair, before and after',
      description:
        'Same stylists. Same product. A different layer between the desk and the calendar.',
    },
    before: {
      label: 'Before',
      items: [
        'Calls hit voicemail when reception is at the basin',
        'No-shows reduce chair revenue without warning',
        'Walk-ins answered with a guess',
        'Rebook only happens when the client asks',
        'Reviews depend on the client remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'New bookings confirmed instantly with the next available slot',
        'Two-step reminders reduce no-show drift',
        'Walk-ins offered the next real slot from a board',
        'Rebook reminders go out at the right interval per service',
        'Review request triggered automatically post-visit',
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
      },
      {
        id: 'capacity',
        piece: 'Stylist capacity board',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'no-show',
        piece: 'Two-step reminders',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'rebook',
        piece: 'Service-aware rebook reminders',
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
        id: 'phone-overflow',
        fix: 'Catch calls when reception is at the basin',
        signalIfYou: 'lose more than a few new-client calls a week',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'rebook',
        fix: 'Run service-aware rebook reminders',
        signalIfYou: 'see clients drift past their normal interval',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'noshow',
        fix: 'Reduce no-show drift with two-step reminders',
        signalIfYou: 'lose chair time most weeks to no-shows',
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
        id: 'missed-call',
        trigger: 'Inbound call missed',
        action: 'Text within 60s with booking link',
        owner: 'AI Lead Handling',
        channel: 'SMS',
      },
      {
        id: 'reminder',
        trigger: '48h before appointment',
        action: 'Confirmation reminder with reschedule option',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'reminder-day',
        trigger: 'Day of appointment',
        action: 'Same-day reminder',
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
        trigger: '5 weeks since last colour service',
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
      description: 'A salon usually leans on CRM for cycle, AI for after-hours capture.',
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
        why: 'Holds capacity, reminders, and rebook intervals on one board.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Answers the phone when reception cannot.',
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
        why: 'A booking page that feeds straight into the operating board.',
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
      title: 'A Saturday with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A four-chair salon runs a full Saturday. Calls land during colour mixing — text-backs go out automatically. Two-step reminders the day before reduce no-show drift. Rebook reminders for clients past their interval went out earlier in the week. Reviews trigger on sign-off.',
      observedChange:
        'Before, the same Saturday would have had three voicemails to chase, one no-show that cost an hour, and four clients past their rebook interval. With the layer in place, the chair stays full and the desk is calmer.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What salon owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We already use a salon booking system. Do we drop it?',
        answer:
          'Usually no. The operating layer sits beside it and covers the call, no-show, and rebook gaps it does not.',
      },
      {
        id: 'feel',
        question: 'Will reminders feel pushy to clients?',
        answer:
          'Done at the right interval, they read as helpful. Done too often, they don’t. We tune the cadence to your service mix.',
      },
      {
        id: 'small',
        question: 'We are a single chair operator. Is this overkill?',
        answer:
          'Often a smaller build is exactly right — usually phone cover plus rebook reminders.',
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
      title: 'Show us where the chair actually leaks',
      description:
        'Tell us about a typical Saturday. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings and rebooks sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working salon with a real Saturday rush.',
    },
  },
};
