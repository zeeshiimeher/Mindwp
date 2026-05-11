import type { IndustryDetailPageData } from '@/domains/industries/types';

export const lashExtensionsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Lash Lift & Extensions — Booking, Fill Cycle, and Retention Systems',
    description:
      'How lash and brow operators hold inbound bookings, manage fill cycles, and keep clients on a steady visit rhythm.',
    canonical: '/industries/beauty-personal-care/lash-lift-and-extensions',
    openGraph: {
      title: 'Lash Lift & Extensions — Booking, Fill Cycle, and Retention Systems',
      description: 'Bookings, fill-cycle reminders, and retention rhythm in one operating layer.',
    },
  },
  slug: 'lash-lift-and-extensions',
  type: 'detail',
  parentSlug: 'beauty-personal-care',
  hero: {
    badge: 'Beauty · Lash & Brow',
    title: 'A lash artist mid-set. [[muted:And a fill enquiry that landed at midnight.]]',
    description:
      'Lash work runs on tight cycles — a fill every two or three weeks. Miss the cycle and the client moves to a competitor. Catch it and the chair stays full.',
    list: [
      'Fill bookings confirmed instantly, day or night',
      'Cycle reminders go out at the right interval per client',
      'Reviews triggered the moment the client leaves',
    ],
  },
  industries: ['lash-extensions'],
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
      title: 'Three places lash bookings usually slip',
      description: 'Most lash operators will see at least two of these.',
    },
    leaks: [
      {
        id: 'after-hours',
        leak: 'After-hours fill enquiries sit until morning',
        state: 'silent',
        observed:
          'A client realises late at night that they need a fill. The DM or form sits. By morning they’ve booked the next artist.',
      },
      {
        id: 'cycle-miss',
        leak: 'Fill cycle drifts past two weeks',
        state: 'risk',
        observed:
          'The cycle slips. The set falls below the fill threshold. The client books a full set elsewhere.',
      },
      {
        id: 'no-review',
        leak: 'Reviews depend on the client remembering',
        state: 'attention',
        observed: 'Beautiful work goes silent online. Reviews trickle in at random.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical week',
      title: 'How a lash artist’s week moves',
      description: 'Tight cycles. Quiet appointments. Most communication is async.',
    },
    timeline: [
      {
        id: 'monday',
        time: 'Mon',
        event: 'Booking enquiries from the weekend',
        leakRisk: 'medium',
        owner: 'Artist / desk',
      },
      {
        id: 'mid-week',
        time: 'Tue — Thu',
        event: 'Fill appointments stack up',
        leakRisk: 'low',
        owner: 'Artist',
      },
      {
        id: 'friday',
        time: 'Fri',
        event: 'New full sets and weekend enquiries',
        leakRisk: 'high',
        owner: 'Artist',
      },
      {
        id: 'saturday',
        time: 'Sat',
        event: 'Walk-in interest from foot traffic',
        leakRisk: 'medium',
        owner: 'Desk',
      },
      {
        id: 'sunday',
        time: 'Sun',
        event: 'Closed — DMs and bookings still arrive',
        leakRisk: 'high',
        owner: 'Nobody',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The cycle, before and after',
      description: 'Same artist. Same set. A different layer between the client and the calendar.',
    },
    before: {
      label: 'Before',
      items: [
        'After-hours enquiries sit unanswered',
        'Fill cycles drift past the threshold',
        'No-shows take chair time without warning',
        'Reviews depend on the client remembering',
        'Rebook only happens when the client asks',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Bookings confirmed instantly with the next available slot',
        'Cycle reminders go out at the right interval per client',
        'Two-step reminders reduce no-show drift',
        'Review request triggered automatically post-visit',
        'Rebook prompt offered alongside the review',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold the week together',
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
        id: 'cycle',
        piece: 'Fill-cycle reminders',
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
        id: 'reviews',
        piece: 'Post-visit review trigger',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'rebook-prompt',
        piece: 'Rebook prompt with review',
        state: 'planned',
        owner: 'CRM & Automation',
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
        fix: 'Acknowledge after-hours enquiries instantly',
        signalIfYou: 'lose bookings to next-morning silence',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'cycle',
        fix: 'Run fill-cycle reminders per client',
        signalIfYou: 'see clients drift past their cycle',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'reviews',
        fix: 'Trigger reviews automatically post-visit',
        signalIfYou: 'do beautiful work that goes quiet online',
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
        id: 'booking',
        trigger: 'Booking form or DM submitted',
        action: 'Confirm slot or offer next available within 60s',
        owner: 'AI Lead Handling',
        channel: 'SMS / DM',
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
        id: 'cycle',
        trigger: '12 days since last fill',
        action: 'Cycle reminder with rebook link',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'lapsed',
        trigger: '6 weeks since last visit',
        action: 'Soft re-engagement message',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'A lash artist usually starts with phone cover and cycle reminders.',
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
        why: 'Holds fill cycles and rebook reminders on one board.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches DM and form bookings outside hours.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger the moment the set looks its best.',
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
        why: 'Useful when local discovery is the bottleneck.',
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
      body: 'A solo lash artist runs five fills a day across a week. Sunday DMs are confirmed automatically. Cycle reminders go out at day twelve. Two-step reminders reduce no-show drift. Reviews trigger after each set.',
      observedChange:
        'Before, the same week would have lost three Sunday DMs and two clients past their fill threshold. With the layer in place, the calendar fills itself and the queue stays current.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What lash artists usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'solo',
        question: 'I’m solo. Is this overkill?',
        answer:
          'Often a smaller build is exactly right. The leakiest gap when you’re solo is usually the after-hours DM. We start there.',
      },
      {
        id: 'tools',
        question: 'I already use a booking app. Do I drop it?',
        answer:
          'Usually no. The operating layer sits beside it and covers the cycle and review gaps it does not.',
      },
      {
        id: 'feel',
        question: 'Will the cycle reminders feel pushy?',
        answer: 'Set at the right cadence, no. Most clients want the nudge.',
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
      title: 'Show us where the cycle actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings and cycles sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working lash artist with a real cycle rhythm.',
    },
  },
};
