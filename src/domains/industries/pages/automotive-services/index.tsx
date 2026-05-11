import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const automotiveServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Automotive Services — Counter, Cycle, and Capacity Systems',
    description:
      'How automotive operators — repair shops, body shops, detailers, and mobile mechanics — hold the counter, the cycle, and the day-of capacity board.',
    canonical: '/industries/automotive-services',
    openGraph: {
      title: 'Automotive Services — Counter, Cycle, and Capacity Systems',
      description: 'Where the automotive day leaks and what holds it across four operating shapes.',
    },
  },
  slug: 'automotive-services',
  type: 'category',
  category: 'automotive-services',
  hero: {
    badge: 'Industries · Automotive',
    title: 'A bay full of work. [[muted:And a phone nobody can pick up.]]',
    description:
      'Automotive operators share one tension: hands are busy, the phone keeps ringing, and the next booking is one missed call away. The shape of the leak changes by trade — but the gap between enquiry and confirmation is the same.',
    list: [
      'The counter, the bay, and the phone all want the same person',
      'Cycle work needs visible status — internal and external',
      'Repeat customers carry most of the year’s revenue',
    ],
  },
  industries: ['auto-repair', 'body-shop', 'car-detailing', 'mobile-mechanic'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  categoryLeaks: {
    header: {
      kicker: 'Where it leaks',
      title: 'Four places the automotive day usually slips',
      description: 'These show up across most established automotive operators.',
    },
    leaks: [
      {
        id: 'busy-counter',
        leak: 'Counter calls hit voicemail',
        state: 'silent',
        observed:
          'The writer is with a customer or the bay is loud. Three rings, voicemail. The caller has already moved on.',
      },
      {
        id: 'approval-stall',
        leak: 'Estimates and approvals stall',
        state: 'slow',
        observed:
          'Diagnoses and quotes go out. Customers are at work. Decisions slide into tomorrow.',
      },
      {
        id: 'cycle-silence',
        leak: 'Customers go silent during long cycle work',
        state: 'attention',
        observed:
          'Cars sit waiting on parts or insurer responses. Nobody updates the customer until they call.',
      },
      {
        id: 'no-recall',
        leak: 'Past customers fade between visits',
        state: 'lost',
        observed:
          'A service or detail done twelve months ago. Nothing reminds the customer it’s due. They book elsewhere.',
      },
    ],
  },
  sharedPattern: {
    header: {
      kicker: 'How the day usually moves',
      title: 'Counter → cycle → close',
      description:
        'The shape every automotive operator works around — whether the bay is fixed or mobile.',
    },
    timeline: [
      {
        id: 'counter',
        time: 'Counter',
        event: 'Call, walk-in, or photo enquiry lands',
        leakRisk: 'high',
        detail:
          'Hands are usually full. First-touch speed sets whether the job stays in the funnel.',
      },
      {
        id: 'cycle',
        time: 'Cycle',
        event: 'Estimate, approval, parts, work, sign-off',
        leakRisk: 'medium',
        detail: 'Long threads. Many handoffs. Status is whatever the writer remembers.',
      },
      {
        id: 'close',
        time: 'Close',
        event: 'Pickup, payment, review, recall',
        leakRisk: 'medium',
        detail:
          'Reviews and service-due reminders depend on memory unless something automates them.',
      },
    ],
  },
  breakpoints: {
    header: {
      kicker: 'Moments that need an owner',
      title: 'Where the automotive day actually breaks',
      description: 'These are the points the system has to hold automatically.',
    },
    items: [
      'Inbound call when the counter is busy',
      'Photo or after-hours quote enquiry',
      'Estimate sent → approval delayed',
      'Parts-on-order → customer waiting in silence',
      'Job complete → review request',
      'Past customer → service or detail interval',
    ],
  },
  operatingModels: {
    header: {
      kicker: 'How operators differ',
      title: 'Two operating shapes inside the same category',
      description:
        'Most automotive operators tilt toward one of these two. The lead system follows.',
    },
    models: [
      {
        id: 'counter-led',
        label: 'Counter-led',
        traits: [
          'Inbound calls and walk-ins are the main demand channel',
          'Same-day or next-day turn dominates the calendar',
          'Front-of-house capacity is the conversion lever',
          'Examples: auto repair, detailing, mobile mechanics',
        ],
        differentiator:
          'Lead system is AI Lead Handling. CRM holds the calendar and follow-up behind it.',
      },
      {
        id: 'cycle-led',
        label: 'Cycle-led',
        traits: [
          'Long threads with insurer, supplier, and customer touchpoints',
          'Estimates can sit for days before approval',
          'Cycle visibility is the conversion and retention lever',
          'Examples: body shops, complex collision work',
        ],
        differentiator:
          'Lead system is CRM & Automation. AI Lead Handling supports first-touch on photo enquiries.',
      },
    ],
  },
  pathwayMap: {
    header: {
      kicker: 'Choose the closest shape',
      title: 'Four recognition routes',
      description: 'Each route opens a detail page tuned to that operating reality.',
    },
    branches: [
      {
        id: 'auto-repair',
        segment: 'Auto repair shop',
        recognition: 'Bays, a service writer, and a phone that rings while the counter is busy.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/automotive-services/auto-repair',
        detailLabel: 'Auto Repair detail',
      },
      {
        id: 'body-shops',
        segment: 'Body shop',
        recognition: 'Long-cycle collision work with insurance threads and customer status calls.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/automotive-services/body-shops',
        detailLabel: 'Body Shops detail',
      },
      {
        id: 'detailing',
        segment: 'Car detailing operator',
        recognition: 'Bursty bookings, day-of capacity, and seasonal repeat-visit cycles.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/automotive-services/car-detailing',
        detailLabel: 'Car Detailing detail',
      },
      {
        id: 'mobile',
        segment: 'Mobile mechanic',
        recognition: 'Solo or two-person van operation with no front desk to cover the phone.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/automotive-services/mobile-mechanics',
        detailLabel: 'Mobile Mechanics detail',
      },
    ],
  },
  startingSystems: {
    header: {
      kicker: 'Which systems start where',
      title: 'How the six systems show up across automotive',
      description: 'Lead first. Support next. Later as the operation steadies.',
    },
    systems: [
      'crm-automation',
      'ai-lead-handling',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    matrix: [
      {
        systemId: 'aih',
        systemName: 'AI Lead Handling',
        status: 'lead',
        whyNow:
          'The busy counter and the after-hours photo enquiry are where most automotive operators leak first.',
      },
      {
        systemId: 'crm',
        systemName: 'CRM & Automation',
        status: 'lead',
        whyNow: 'Holds approvals, cycle status, and service recalls on one board.',
      },
      {
        systemId: 'sws',
        systemName: 'Smart Website Systems',
        status: 'support',
        whyNow: 'Booking and quote forms feed the same operating board.',
      },
      {
        systemId: 'rep',
        systemName: 'Reputation & Reviews',
        status: 'support',
        whyNow: 'Reviews trigger from sign-off so the queue stays current.',
      },
      {
        systemId: 'lsa',
        systemName: 'Local SEO Authority',
        status: 'later',
        whyNow: 'Useful when service-area visibility is the bottleneck. Often a later phase.',
      },
      {
        systemId: 'rg',
        systemName: 'Revenue Growth',
        status: 'later',
        whyNow: 'Repeat work and seasonal recall come into play once the daily layer is steady.',
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
        detailHref: '/industries/automotive-services/auto-repair',
        label: 'Auto Repair Shops',
        oneLine: 'Counter coverage, approval boards, and service recalls.',
        leadingSystem: 'AI Lead Handling',
        state: 'silent',
      },
      {
        detailHref: '/industries/automotive-services/body-shops',
        label: 'Body Shops',
        oneLine: 'Estimates, insurance threads, and stage-based cycle updates.',
        leadingSystem: 'CRM & Automation',
        state: 'attention',
      },
      {
        detailHref: '/industries/automotive-services/car-detailing',
        label: 'Car Detailing',
        oneLine: 'Bookings, capacity, and repeat-visit reminders.',
        leadingSystem: 'CRM & Automation',
        state: 'slow',
      },
      {
        detailHref: '/industries/automotive-services/mobile-mechanics',
        label: 'Mobile Mechanics',
        oneLine: 'Phone cover, route-aware bookings, and end-of-day admin.',
        leadingSystem: 'AI Lead Handling',
        state: 'silent',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'When the layer holds',
      title: 'What the day looks like once the gaps are owned',
      description: 'Same crew. Same volume. The office is doing less manual chasing.',
    },
    handled: [
      {
        id: 'calls',
        label: 'Calls',
        state: 'after',
        note: 'Every inbound is acknowledged inside two minutes.',
      },
      {
        id: 'approvals',
        label: 'Approvals',
        state: 'after',
        note: 'Open approvals sit on one board with reminders set automatically.',
      },
      {
        id: 'cycle',
        label: 'Cycle',
        state: 'after',
        note: 'Customers get stage-based status updates; fewer "where is my car?" calls.',
      },
      {
        id: 'reviews',
        label: 'Reviews',
        state: 'after',
        note: 'Sign-off triggers the request; queue stays current.',
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
      body: 'A two-bay shop with one writer, two detailing bays at the back, and a mobile tech in a van runs a busy week together. Counter calls get text-backs. Approvals sit on a board. Detailing slots auto-confirm overnight. The mobile tech’s phone is covered while he is hands-on.',
      observedChange:
        'Before, the same week would have produced six voicemails to chase, three customer status calls, and a missed detailing booking. With the layer in place, the day is calmer and fewer threads drop.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What automotive operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this the same build for every automotive trade?',
        answer:
          'No. The shape is similar — capture, approval, cycle, sign-off, recall. The lead system differs based on whether the work is counter-led or cycle-led.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most automotive operators that is the busy-counter call layer. CRM follows once that is steady.',
      },
      {
        id: 'tools',
        question: 'We already use a shop-management or estimating tool. Do we drop it?',
        answer: 'Usually not. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'We don’t price by feature. The shape of the build follows the leaks the operator has. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the automotive day actually leaks',
      description:
        'Tell us what happens between the phone ringing and the bay finishing the job. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and cycle status sit today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an automotive operator with a busy counter or a long cycle.',
    },
  },
};
