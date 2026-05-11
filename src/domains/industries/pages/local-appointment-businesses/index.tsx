import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const localAppointmentBusinessesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Local Appointment Businesses — Booking, Reminder, and Recall Systems',
    description:
      'How appointment-based local businesses — clinics, schools, repair shops, studios — hold bookings, reduce no-shows, and bring customers back at the right interval.',
    canonical: '/industries/local-appointment-businesses',
    openGraph: {
      title: 'Local Appointment Businesses — Booking, Reminder, and Recall Systems',
      description:
        'Where the appointment day leaks and what holds it across five operating shapes.',
    },
  },
  slug: 'local-appointment-businesses',
  type: 'category',
  category: 'local-appointment-businesses',
  hero: {
    badge: 'Industries · Appointment Businesses',
    title: 'A diary that fills itself. [[muted:And a phone that doesn’t answer itself.]]',
    description:
      'Appointment-based businesses share one shape: the diary fills, runs, and turns over. The leaks live around the diary — calls, reminders, recalls, reviews.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Two-step reminders reduce no-show drift',
      'Recall and review rhythms run on cadence',
    ],
  },
  industries: ['dental-clinic', 'driving-school', 'repair-shop', 'private-clinic', 'tattoo-studio'],
  systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  categoryLeaks: {
    header: {
      kicker: 'Where it leaks',
      title: 'Four places the appointment day usually slips',
      description: 'Most operators see at least three of these.',
    },
    leaks: [
      {
        id: 'calls',
        leak: 'Phone rings while the practitioner is working',
        state: 'silent',
        observed: 'A new customer calls during a consult or session. Voicemail catches it.',
      },
      {
        id: 'noshow',
        leak: 'No-shows take chair or session time',
        state: 'risk',
        observed: 'A booked customer doesn’t arrive. The reminder went out three days ago.',
      },
      {
        id: 'recall',
        leak: 'Customers drift past the right interval',
        state: 'lost',
        observed: 'A regular misses one cycle. Nothing prompts the next visit.',
      },
      {
        id: 'reviews',
        leak: 'Reviews depend on the customer remembering',
        state: 'attention',
        observed: 'Good work goes silent online.',
      },
    ],
  },
  sharedPattern: {
    header: {
      kicker: 'How the day usually moves',
      title: 'Booking → service → recall',
      description: 'The shape every appointment business works around.',
    },
    timeline: [
      {
        id: 'booking',
        time: 'Booking',
        event: 'Call, form, DM, or walk-in lands',
        leakRisk: 'high',
        detail: 'Practitioner often hands-on. First-touch speed matters.',
      },
      {
        id: 'service',
        time: 'Service',
        event: 'Appointment runs',
        leakRisk: 'low',
        detail: 'The work itself usually goes well. The gaps live around it.',
      },
      {
        id: 'recall',
        time: 'Recall',
        event: 'Review, recall, repeat',
        leakRisk: 'medium',
        detail: 'Most repeat revenue lives here. Most leaks live here too.',
      },
    ],
  },
  breakpoints: {
    header: {
      kicker: 'Moments that need an owner',
      title: 'Where the appointment day actually breaks',
      description: 'These are the points the system has to hold automatically.',
    },
    items: [
      'Inbound call when the practitioner is in session',
      'After-hours enquiry',
      'Day-before reminder for the appointment',
      'Quote / consult to booking transition',
      'Service complete → review request',
      'Past customer → recall reminder at the right interval',
    ],
  },
  operatingModels: {
    header: {
      kicker: 'How operators differ',
      title: 'Two operating shapes inside the same category',
      description: 'Most operators tilt toward one of these two.',
    },
    models: [
      {
        id: 'flow-led',
        label: 'Flow-led',
        traits: [
          'Walk-in and quick-turn bookings mix',
          'Day-of capacity is a real lever',
          'Recall is short — weekly or monthly',
          'Examples: repair shops, driving schools, tattoo studios',
        ],
        differentiator: 'Lead systems are AI Lead Handling for first touch and CRM for reminders.',
      },
      {
        id: 'considered-led',
        label: 'Considered-led',
        traits: [
          'Enquiries compare clinics or providers',
          'Consults precede bookings',
          'Recall is longer — quarterly or biannual',
          'Examples: dental clinics, small private clinics',
        ],
        differentiator:
          'Lead systems are AI Lead Handling (calm first reply) and CRM (recall and reminders).',
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
        id: 'dental',
        segment: 'Dental clinic',
        recognition: 'Six-month recall and chair-time pressure.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/local-appointment-businesses/dental-clinics',
        detailLabel: 'Dental Clinics detail',
      },
      {
        id: 'driving',
        segment: 'Driving school',
        recognition: 'Instructors out, phones unattended.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/local-appointment-businesses/driving-schools',
        detailLabel: 'Driving Schools detail',
      },
      {
        id: 'repair',
        segment: 'Repair shop',
        recognition: 'Bench full, customers waiting on status.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/local-appointment-businesses/repair-shops',
        detailLabel: 'Repair Shops detail',
      },
      {
        id: 'clinic',
        segment: 'Small private clinic',
        recognition: 'Considered enquiries, treatment-plan rhythm.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/local-appointment-businesses/small-private-clinics',
        detailLabel: 'Small Private Clinics detail',
      },
      {
        id: 'tattoo',
        segment: 'Tattoo studio',
        recognition: 'DM pile, deposit and session rhythm.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/local-appointment-businesses/tattoo-studios',
        detailLabel: 'Tattoo Studios detail',
      },
    ],
  },
  startingSystems: {
    header: {
      kicker: 'Which systems start where',
      title: 'How the six systems show up across appointments',
      description: 'Lead first. Support next. Later as the operation steadies.',
    },
    systems: ['crm-automation', 'ai-lead-handling', 'reputation-review', 'smart-website-systems'],
    matrix: [
      {
        systemId: 'crm',
        systemName: 'CRM & Automation',
        status: 'lead',
        whyNow: 'Reminders, recall, and the operating board.',
      },
      {
        systemId: 'aih',
        systemName: 'AI Lead Handling',
        status: 'lead',
        whyNow: 'Catches calls and DMs while the practitioner works.',
      },
      {
        systemId: 'rep',
        systemName: 'Reputation & Reviews',
        status: 'support',
        whyNow: 'Reviews trigger when work is freshest.',
      },
      {
        systemId: 'sws',
        systemName: 'Smart Website Systems',
        status: 'support',
        whyNow: 'Booking pages feed the same operating board.',
      },
      {
        systemId: 'lsa',
        systemName: 'Local SEO Authority',
        status: 'later',
        whyNow: 'Useful when local discovery is the bottleneck.',
      },
      {
        systemId: 'rg',
        systemName: 'Revenue Growth',
        status: 'later',
        whyNow: 'Repeat work and recall economics, once steady.',
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
        detailHref: '/industries/local-appointment-businesses/dental-clinics',
        label: 'Dental Clinics',
        oneLine: 'Recalls, reminders, no-show drift.',
        leadingSystem: 'CRM & Automation',
        state: 'lost',
      },
      {
        detailHref: '/industries/local-appointment-businesses/driving-schools',
        label: 'Driving Schools',
        oneLine: 'Calls during lessons, block-end rebooks.',
        leadingSystem: 'AI Lead Handling',
        state: 'silent',
      },
      {
        detailHref: '/industries/local-appointment-businesses/repair-shops',
        label: 'Repair Shops',
        oneLine: 'Drop-offs, quotes, ready-for-pickup.',
        leadingSystem: 'CRM & Automation',
        state: 'attention',
      },
      {
        detailHref: '/industries/local-appointment-businesses/small-private-clinics',
        label: 'Small Private Clinics',
        oneLine: 'Considered enquiries, plans, recall.',
        leadingSystem: 'AI Lead Handling',
        state: 'slow',
      },
      {
        detailHref: '/industries/local-appointment-businesses/tattoo-studios',
        label: 'Tattoo Studios',
        oneLine: 'DM pile, deposits, session rebook.',
        leadingSystem: 'AI Lead Handling',
        state: 'risk',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'When the layer holds',
      title: 'What the day looks like once the gaps are owned',
      description: 'Same diary. Same hours. Less manual chasing.',
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
        id: 'recall',
        label: 'Recall',
        state: 'after',
        note: 'Recalls go out at the right interval.',
      },
      { id: 'reviews', label: 'Reviews', state: 'after', note: 'Reviews trigger after service.' },
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
      body: 'A multi-room operator runs a normal week. Calls during sessions get text-backs. Two-step reminders go before each appointment. Recalls run on cadence. Reviews trigger after service.',
      observedChange:
        'Before, the same week would have produced six voicemails to chase, two no-shows, and several customers past recall. With the layer in place, the diary holds and the desk has fewer threads to follow.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What appointment operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'fit',
        question: 'Is this the same build for every appointment business?',
        answer:
          'No. The shape is similar — booking, service, recall. The lead system differs by operating shape.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most, that is busy-desk call coverage plus reminders.',
      },
      {
        id: 'tools',
        question: 'We already use a booking tool. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the diary actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, recalls, and reviews sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an appointment-based operator with a real working week.',
    },
  },
};
