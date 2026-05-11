import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const beautyPersonalCareIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Beauty & Personal Care — Booking, Cycle, and Recall Systems',
    description:
      'How beauty and personal-care operators — salons, lash, nails, med spas, aesthetic clinics — hold bookings, manage visit cycles, and bring clients back at the right interval.',
    canonical: '/industries/beauty-personal-care',
    openGraph: {
      title: 'Beauty & Personal Care — Booking, Cycle, and Recall Systems',
      description: 'Where the beauty day leaks and what holds it across five operating shapes.',
    },
  },
  slug: 'beauty-personal-care',
  type: 'category',
  category: 'beauty-personal-care',
  hero: {
    badge: 'Industries · Beauty Care',
    title: 'A chair that runs on cycles. [[muted:And a desk that can’t catch every call.]]',
    description:
      'Beauty operators share one tension: the chair is full, the phone keeps ringing, and the next booking depends on the client coming back at the right interval. The leak is between visit and rebook.',
    list: [
      'The chair, the basin, and the phone all want the same person',
      'Cycle and rebook intervals carry most of the year’s revenue',
      'Reviews are short windows that rarely get caught manually',
    ],
  },
  industries: ['hair-salon', 'nail-salon', 'lash-extensions', 'med-spa', 'aesthetic-clinic'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'reputation-review',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  categoryLeaks: {
    header: {
      kicker: 'Where it leaks',
      title: 'Four places the beauty day usually slips',
      description: 'These show up across most established beauty and personal-care operators.',
    },
    leaks: [
      {
        id: 'desk-busy',
        leak: 'Desk is at the basin and the phone rings out',
        state: 'silent',
        observed:
          'A new booking calls during a busy hour. Voicemail catches it. They book elsewhere.',
      },
      {
        id: 'noshow',
        leak: 'No-shows quietly cost chair time',
        state: 'risk',
        observed:
          'A booked client doesn’t arrive. The chair sits empty. No reminder went out the day before.',
      },
      {
        id: 'no-rebook',
        leak: 'Clients drift past their interval',
        state: 'lost',
        observed: 'A regular misses one cycle. They drift out without anything reminding them.',
      },
      {
        id: 'silent-reviews',
        leak: 'Reviews depend on the client remembering',
        state: 'attention',
        observed: 'Beautiful work goes silent online. Reviews trickle in at random.',
      },
    ],
  },
  sharedPattern: {
    header: {
      kicker: 'How the day usually moves',
      title: 'Booking → service → cycle',
      description: 'The shape every beauty operator works around.',
    },
    timeline: [
      {
        id: 'booking',
        time: 'Booking',
        event: 'Call, form, DM, or walk-in lands',
        leakRisk: 'high',
        detail: 'Desk is often hands-on. First-touch speed matters.',
      },
      {
        id: 'service',
        time: 'Service',
        event: 'Treatment or service runs',
        leakRisk: 'low',
        detail: 'The work itself usually goes well. The gaps live around it.',
      },
      {
        id: 'cycle',
        time: 'Cycle',
        event: 'Review, rebook, recall',
        leakRisk: 'medium',
        detail: 'Most revenue lives here. Most leaks live here too.',
      },
    ],
  },
  breakpoints: {
    header: {
      kicker: 'Moments that need an owner',
      title: 'Where the beauty day actually breaks',
      description: 'These are the points the system has to hold automatically.',
    },
    items: [
      'Inbound call when reception is at a chair',
      'After-hours DM or booking enquiry',
      'Day-before reminder for the appointment',
      'Walk-in asking about same-day capacity',
      'Service complete → review request',
      'Past client → rebook reminder at the right interval',
    ],
  },
  operatingModels: {
    header: {
      kicker: 'How operators differ',
      title: 'Two operating shapes inside the same category',
      description: 'Most beauty operators tilt toward one of these two. The lead system follows.',
    },
    models: [
      {
        id: 'flow-led',
        label: 'Flow-led',
        traits: [
          'High walk-in and booking volume mixed together',
          'Day-of capacity is the conversion lever',
          'Cycle is short — weekly or fortnightly',
          'Examples: nail salons, lash artists, hair salons',
        ],
        differentiator:
          'Lead systems are CRM (capacity board, reminders, rebooks) and AI Lead Handling for after-hours capture.',
      },
      {
        id: 'considered-led',
        label: 'Considered-led',
        traits: [
          'Enquiries are long-form, comparing clinics',
          'Consultations precede bookings',
          'Cycle is longer — monthly or quarterly recall',
          'Examples: med spas, aesthetic clinics',
        ],
        differentiator:
          'Lead systems are AI Lead Handling (first-touch + qualification) and CRM (reminders + recall).',
      },
    ],
  },
  pathwayMap: {
    header: {
      kicker: 'Choose the closest shape',
      title: 'Five recognition routes',
      description: 'Each route opens a detail page tuned to that operating reality.',
    },
    branches: [
      {
        id: 'hair',
        segment: 'Hair salon',
        recognition: 'Chairs, a busy desk, and a six-week colour cycle.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/beauty-personal-care/hair-salons',
        detailLabel: 'Hair Salons detail',
      },
      {
        id: 'nails',
        segment: 'Nail salon',
        recognition: 'Walk-in flow, fast turn, and steady regulars.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/beauty-personal-care/nail-salons',
        detailLabel: 'Nail Salons detail',
      },
      {
        id: 'lash',
        segment: 'Lash & brow operator',
        recognition: 'Two-week fill cycles and tight retention windows.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/beauty-personal-care/lash-lift-and-extensions',
        detailLabel: 'Lash detail',
      },
      {
        id: 'medspa',
        segment: 'Small med spa',
        recognition: 'Considered enquiries and treatment-specific recall.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/beauty-personal-care/small-med-spas',
        detailLabel: 'Med Spa detail',
      },
      {
        id: 'aesthetic',
        segment: 'Aesthetic / cosmetic clinic',
        recognition: 'Long-form enquiries, structured qualification, treatment recall.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        detailLabel: 'Aesthetic Clinic detail',
      },
    ],
  },
  startingSystems: {
    header: {
      kicker: 'Which systems start where',
      title: 'How the six systems show up across beauty',
      description: 'Lead first. Support next. Later as the operation steadies.',
    },
    systems: [
      'crm-automation',
      'ai-lead-handling',
      'reputation-review',
      'smart-website-systems',
      'local-seo-authority',
    ],
    matrix: [
      {
        systemId: 'crm',
        systemName: 'CRM & Automation',
        status: 'lead',
        whyNow: 'Capacity, reminders, and rebook intervals on one board.',
      },
      {
        systemId: 'aih',
        systemName: 'AI Lead Handling',
        status: 'lead',
        whyNow: 'Catches calls and DMs while the desk is at a chair or after hours.',
      },
      {
        systemId: 'rep',
        systemName: 'Reputation & Reviews',
        status: 'support',
        whyNow: 'Reviews trigger from sign-off when the work is freshest.',
      },
      {
        systemId: 'sws',
        systemName: 'Smart Website Systems',
        status: 'support',
        whyNow: 'Booking and gallery pages feed the same operating board.',
      },
      {
        systemId: 'lsa',
        systemName: 'Local SEO Authority',
        status: 'later',
        whyNow: 'Useful when local discovery is the bottleneck. Often a later phase.',
      },
      {
        systemId: 'rg',
        systemName: 'Revenue Growth',
        status: 'later',
        whyNow: 'Repeat work and recall come into play once the daily layer is steady.',
      },
    ],
  },
  detailRoutes: {
    header: {
      kicker: 'Detail pages',
      title: 'Choose the closest business type',
      description: 'Each route opens a page tuned to the way that work is booked and handled.',
    },
    routeEntries: [
      {
        detailHref: '/industries/beauty-personal-care/hair-salons',
        label: 'Hair Salons',
        oneLine: 'Bookings, capacity, and rebook intervals.',
        leadingSystem: 'CRM & Automation',
        state: 'lost',
      },
      {
        detailHref: '/industries/beauty-personal-care/nail-salons',
        label: 'Nail Salons',
        oneLine: 'Walk-ins, bookings, and repeat-visit rhythm.',
        leadingSystem: 'CRM & Automation',
        state: 'risk',
      },
      {
        detailHref: '/industries/beauty-personal-care/lash-lift-and-extensions',
        label: 'Lash & Brow',
        oneLine: 'Fill cycles and retention rhythm.',
        leadingSystem: 'CRM & Automation',
        state: 'silent',
      },
      {
        detailHref: '/industries/beauty-personal-care/small-med-spas',
        label: 'Small Med Spas',
        oneLine: 'Enquiries, consultations, and recall.',
        leadingSystem: 'AI Lead Handling',
        state: 'slow',
      },
      {
        detailHref: '/industries/beauty-personal-care/aesthetic-cosmetic-clinics',
        label: 'Aesthetic Clinics',
        oneLine: 'Long-form enquiries and treatment recall.',
        leadingSystem: 'AI Lead Handling',
        state: 'slow',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'When the layer holds',
      title: 'What the day looks like once the gaps are owned',
      description: 'Same chairs. Same hours. The desk is doing less manual chasing.',
    },
    handled: [
      {
        id: 'calls',
        label: 'Calls',
        state: 'after',
        note: 'Every inbound is acknowledged inside two minutes.',
      },
      {
        id: 'reminders',
        label: 'Reminders',
        state: 'after',
        note: 'Two-step reminders reduce no-show drift.',
      },
      {
        id: 'rebooks',
        label: 'Rebooks',
        state: 'after',
        note: 'Reminders go out at the right interval per service.',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        state: 'after',
        note: 'Reviews trigger at sign-off; queue stays current.',
      },
    ],
  },
  scenarioStrip: {
    header: {
      kicker: 'A category scenario',
      title: 'How a busy week changes',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A multi-discipline studio runs hair, nails, lash, and a small clinic in the same building. Calls during busy hours get text-backs. Two-step reminders reduce no-show drift. Cycle and recall reminders run per service. Reviews trigger on sign-off.',
      observedChange:
        'Before, the same week would have produced six voicemails to chase, two no-shows, and clients past their cycle. With the layer in place, the desk is calmer and the chairs stay busier.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What beauty operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this the same build for every beauty trade?',
        answer:
          'No. The shape is similar — booking, service, cycle. The lead system differs based on whether the work is flow-led or considered-led.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most beauty operators that is the busy-desk call layer plus rebook reminders.',
      },
      {
        id: 'tools',
        question: 'We already use a salon or clinic booking app. Do we drop it?',
        answer: 'Usually not. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'We don’t price by feature. The build follows the leaks. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the beauty day actually leaks',
      description:
        'Tell us what happens between the call and the chair. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, cycles, and reviews sit today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a beauty operator with a real working week.',
    },
  },
};
