import type { IndustryDetailPageData } from '@/domains/industries/types';

export const autoRepairIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Auto Repair Shops — Bay-to-Office Systems',
    description:
      'How established auto repair shops hold inbound calls, manage estimate approvals, and keep returning customers on a service rhythm.',
    canonical: '/industries/automotive-services/auto-repair',
    openGraph: {
      title: 'Auto Repair Shops — Bay-to-Office Systems',
      description: 'Calls, estimates, approvals, and follow-up across the service counter.',
    },
  },
  slug: 'auto-repair',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Auto Repair',
    title: 'Three rings. Voicemail. [[muted:Nobody hears the message until the bay is clear.]]',
    description:
      'A working shop runs on movement. The phone rings while the writer is under a hood with a customer, and the next caller is already pulling up a competitor on their map.',
    list: [
      'Inbound calls covered when the service writer is busy',
      'Estimate approvals tracked on one board, not in text threads',
      'Returning customers reminded before the next service falls due',
    ],
  },
  industries: ['auto-repair'],
  systems: [
    'ai-lead-handling',
    'crm-automation',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places repair-shop enquiries usually slip',
      description: 'Recognition first. Most established shops will see at least two of these.',
    },
    leaks: [
      {
        id: 'busy-counter',
        leak: 'Phone rings while the counter is with a customer',
        state: 'silent',
        observed:
          'The writer is mid-conversation about a brake job. Three rings. Voicemail. The caller does not leave one.',
      },
      {
        id: 'approval-stall',
        leak: 'Estimate sent — approval stalls',
        state: 'slow',
        observed:
          'The diagnosis goes out by text or email. The customer is at work. By 5pm the part is ordered for tomorrow or the slot is gone.',
      },
      {
        id: 'service-recall',
        leak: 'Returning customers drift away quietly',
        state: 'lost',
        observed:
          'The car came in twelve months ago for a service. Nothing reminded them. The next service was booked at the dealer down the road.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical Tuesday',
      title: 'How the day moves through the bay',
      description: 'The leaks live in the gaps between these moments.',
    },
    timeline: [
      {
        id: 'morning-rush',
        time: '7:30 — 9:00',
        event: 'Drop-offs and call-ins stack up',
        leakRisk: 'high',
        owner: 'Service writer',
        detail: 'Customers wait at the counter while the phone rings in the background.',
      },
      {
        id: 'diag',
        time: '10:00 — 12:00',
        event: 'Diagnoses go out for approval',
        leakRisk: 'medium',
        owner: 'Service writer / tech',
        detail: 'Texts and calls go out. Some get answered. Some don’t.',
      },
      {
        id: 'lunch-gap',
        time: '12:30 — 13:30',
        event: 'Counter is quieter — calls still come in',
        leakRisk: 'high',
        owner: 'Whoever is closest',
        detail: 'No one is owning the phone. Voicemail catches the rest.',
      },
      {
        id: 'parts',
        time: '14:00 — 16:00',
        event: 'Parts arrive; jobs slot in or move out',
        leakRisk: 'medium',
        owner: 'Service writer',
        detail: 'Pickup times need to be set. The board is on a clipboard.',
      },
      {
        id: 'closeout',
        time: '17:00 — 18:00',
        event: 'Pickups, payment, and tomorrow’s calendar',
        leakRisk: 'medium',
        owner: 'Service writer',
        detail: 'Reviews are not asked for unless the customer brings it up.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The counter, before and after',
      description: 'Same crew. Same volume. Different operating layer behind the phone and bay.',
    },
    before: {
      label: 'Before',
      items: [
        'Calls hit voicemail when the counter is busy',
        'Approvals chased by manual text messages',
        'Pickup times tracked on the clipboard at the counter',
        'Reviews only happen when the customer remembers',
        'Past service customers drift to the dealer or next shop',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Every missed call gets an instant text-back with a slot offer',
        'Approvals routed through one board with a timestamp',
        'Pickups confirmed by automated message before the customer leaves work',
        'Reviews triggered at sign-off; queue stays current',
        'Service recalls land at the right interval automatically',
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
        id: 'call-cover',
        piece: 'Missed-call text-back',
        state: 'in-place',
        owner: 'AI Lead Handling',
        note: 'Catches counter overflow without disrupting the writer.',
      },
      {
        id: 'approval-board',
        piece: 'Approval status board',
        state: 'in-place',
        owner: 'CRM & Automation',
        note: 'Open approvals visible at a glance, with reminders set automatically.',
      },
      {
        id: 'pickup-msg',
        piece: 'Pickup-ready notifications',
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
        id: 'service-recall',
        piece: 'Service-interval reminders',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'service-area',
        piece: 'Service-area visibility',
        state: 'optional',
        owner: 'Local SEO Authority',
        note: 'Useful only when discovery is the bottleneck.',
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
        fix: 'Cover the counter when it is busy',
        signalIfYou: 'lose more than a few calls a day to voicemail',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'approval-loop',
        fix: 'Get a single approval board live',
        signalIfYou: 'spend the afternoon chasing customers about quotes',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'review-cycle',
        fix: 'Trigger reviews on every sign-off',
        signalIfYou: 'know the work is good but the public-review count does not show it',
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
        id: 'missed-call',
        trigger: 'Missed inbound call during business hours',
        action: 'Send text within 60s offering a callback slot',
        owner: 'AI Lead Handling',
        channel: 'SMS',
      },
      {
        id: 'estimate-stall',
        trigger: 'Estimate sent — no response in 4 hours',
        action: 'Soft reminder with same estimate link',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
      {
        id: 'pickup-ready',
        trigger: 'Job marked ready in shop board',
        action: 'Pickup-ready message with collection window',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'signoff',
        trigger: 'Invoice marked paid',
        action: 'Review request sent within 30 minutes',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
      {
        id: 'recall',
        trigger: '11 months since last service',
        action: 'Service-due reminder with booking link',
        owner: 'CRM & Automation',
        channel: 'SMS / email',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'A repair shop usually starts with two and grows the rest as the day steadies.',
    },
    systems: [
      'ai-lead-handling',
      'crm-automation',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Holds the counter when the writer is busy or off the line.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Approvals, pickups, and service recalls live on one board.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Sign-off triggers a review request without anyone remembering.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Booking and capture forms feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when discovery in the service area is the real bottleneck.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A busy Tuesday with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A two-bay shop with one service writer hits a Tuesday surge: drop-offs, walk-ins, three diagnoses to send out. The writer stays at the counter. Missed calls get text-backs offering a callback slot. Approvals sit on the same board, marked open or approved. Pickup-ready messages go out the moment a job is signed off.',
      observedChange:
        'Before, the same Tuesday would have ended with two voicemails never returned and an approval rolling into the next morning. With the layer in place, the writer is doing the same job — but the day has fewer dropped threads.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What auto-repair operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'replace-tools',
        question: 'Do we have to replace our shop-management software?',
        answer:
          'Usually no. The operating layer sits beside it and handles the call, approval, and follow-up gaps it does not cover.',
      },
      {
        id: 'small-shop',
        question: 'We are a single-bay shop. Is this overkill?',
        answer:
          'Often a smaller build is the right move. The system follows the leaks. Sometimes only the missed-call layer is worth installing first.',
      },
      {
        id: 'review-volume',
        question: 'Will reviews actually go up?',
        answer:
          'The request goes out reliably at the right moment. Whether they leave one is up to them — but the queue is no longer relying on memory.',
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
      title: 'Show us where the counter actually leaks',
      description:
        'Tell us about a typical Tuesday. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and approvals sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working shop with a real Tuesday rush.',
    },
  },
};
