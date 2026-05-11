import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const homeServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Home Services — Field Operator Systems',
    description:
      'How home service operators with field crews hold inbound calls, dispatch, quotes, and follow-up — across roofing, plumbing, HVAC, electrical, and landscaping.',
    canonical: '/industries/home-services',
    openGraph: {
      title: 'Home Services — Field Operator Systems',
      description:
        'Across plumbing, roofing, HVAC, electrical, and landscaping: where the day leaks and what holds it.',
    },
  },
  slug: 'home-services',
  type: 'category',
  category: 'home-services',
  hero: {
    badge: 'Industries · Home Services',
    title: 'A field crew on the road. [[muted:An office line that no one is at.]]',
    description:
      'Home services share one shape: demand arrives by phone, the team is somewhere else, and the office is one or two people deep. The leaks are predictable. The fix is a layer between the call and the crew.',
    list: [
      'Field-out-of-office is the default operating mode',
      'Demand spikes around weather, season, or emergency',
      'Reviews and local trust drive the next enquiry',
    ],
  },
  industries: ['roofing', 'hvac', 'plumbing', 'electrical', 'landscaping'],
  systems: [
    'ai-lead-handling',
    'crm-automation',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  categoryLeaks: {
    header: {
      kicker: 'Where the day actually slips',
      title: 'Four real moments where home-services work walks out the door',
      description:
        'Not generic problems. Specific moments most field-crew operators recognise on sight.',
    },
    leaks: [
      {
        id: 'midjob-call',
        leak: 'Mid-job calls hit voicemail',
        state: 'silent',
        observed:
          'The crew is on site. The phone diverts. Voicemail catches it. The customer dials the next listing.',
      },
      {
        id: 'after-hours',
        leak: 'After-hours calls go unanswered',
        state: 'silent',
        observed:
          'Faults, leaks, and emergencies happen at 9pm. Whoever picks up first gets the job.',
      },
      {
        id: 'quote-cool',
        leak: 'Quotes go out and go cold',
        state: 'slow',
        observed:
          'A site visit happens. A PDF goes out. Nobody follows up. Two weeks later the customer has booked elsewhere.',
      },
      {
        id: 'review-silence',
        leak: 'Reviews depend on the customer remembering',
        state: 'attention',
        observed:
          'Finished jobs go silent. Reviews trickle in only when the customer thinks to leave one.',
      },
    ],
  },
  sharedPattern: {
    header: {
      kicker: 'How the day usually moves',
      title: 'Arrival → handling → result',
      description:
        'The shape every home-services operator works around. The leaks live between these three moments.',
    },
    timeline: [
      {
        id: 'arrival',
        time: 'Arrival',
        event: 'Call, form, or message lands',
        leakRisk: 'high',
        detail: 'Most often by phone. The office is busy or the line is diverted.',
      },
      {
        id: 'handling',
        time: 'Handling',
        event: 'Office or dispatcher decides what happens next',
        leakRisk: 'medium',
        detail: 'Tech availability is checked. Quote is drafted. Booking is offered.',
      },
      {
        id: 'result',
        time: 'Result',
        event: 'Booking, quote, or follow-up goes out',
        leakRisk: 'medium',
        detail:
          'The customer either books, decides later, or goes elsewhere. The follow-up is the gap.',
      },
    ],
  },
  breakpoints: {
    header: {
      kicker: 'Moments that need an owner',
      title: 'Where the day actually breaks',
      description: 'These are the points the system has to hold automatically.',
    },
    items: [
      'Inbound call when the crew is mid-job',
      'After-hours emergency call',
      'Site visit → quote handoff',
      'Quote sent → no reply',
      'Job complete → review request',
      'Past customer → seasonal contact',
    ],
  },
  operatingModels: {
    header: {
      kicker: 'Two ways the work arrives',
      title: 'Emergency-led or project-led — the office should not handle them the same way',
      description:
        'Most home-services operators tilt toward one of these two shapes. The first system to fix follows from that.',
    },
    models: [
      {
        id: 'emergency-led',
        label: 'Emergency-led',
        traits: [
          'Demand spikes around faults, leaks, storms, or after-hours events',
          'Speed of first response is the conversion lever',
          'Dispatch decisions matter more than quote follow-up',
          'Examples: plumbing, electrical, roofing in storm season',
        ],
        differentiator: 'Lead system is AI Lead Handling. CRM holds the dispatch board behind it.',
      },
      {
        id: 'project-led',
        label: 'Project-led',
        traits: [
          'Demand is steadier; quotes precede bookings by days or weeks',
          'Quote follow-up is the conversion lever',
          'Service plans and seasonal recall matter for repeat work',
          'Examples: HVAC, landscaping, large electrical projects',
        ],
        differentiator: 'Lead system is CRM & Automation. AI Lead Handling supports surge weeks.',
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
        id: 'plumbing',
        segment: 'Plumbing operator',
        recognition:
          'On-call cycles, after-hours faults, and dispatch decisions are the daily geometry.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/home-services/plumbing-companies',
        detailLabel: 'Plumbing detail',
      },
      {
        id: 'electrical',
        segment: 'Electrical operator',
        recognition: 'Emergency faults plus planned project quotes; compliance lives in the field.',
        leadingSystem: 'AI Lead Handling',
        detailHref: '/industries/home-services/electrical-companies',
        detailLabel: 'Electrical detail',
      },
      {
        id: 'hvac',
        segment: 'HVAC operator',
        recognition: 'Seasonal surges, service plans, and install-to-maintenance follow-up.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/home-services/hvac-companies',
        detailLabel: 'HVAC detail',
      },
      {
        id: 'roofing',
        segment: 'Roofing operator',
        recognition: 'Storm-event surges, inspection-to-quote handoffs, and insurance threads.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/home-services/roofing-companies',
        detailLabel: 'Roofing detail',
      },
      {
        id: 'landscaping',
        segment: 'Landscaping operator',
        recognition: 'Seasonal cycles, mid-job calls, and quote-board hygiene.',
        leadingSystem: 'CRM & Automation',
        detailHref: '/industries/home-services/landscaping-companies',
        detailLabel: 'Landscaping detail',
      },
    ],
  },
  startingSystems: {
    header: {
      kicker: 'Which systems start where',
      title: 'How the six systems show up across home services',
      description: 'Lead first. Support next. Later as the operation steadies.',
    },
    systems: [
      'ai-lead-handling',
      'crm-automation',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    matrix: [
      {
        systemId: 'aih',
        systemName: 'AI Lead Handling',
        status: 'lead',
        whyNow: 'The mid-job and after-hours call is where most field operators leak first.',
      },
      {
        systemId: 'crm',
        systemName: 'CRM & Automation',
        status: 'lead',
        whyNow: 'Holds dispatch, quotes, and follow-up on one board with a visible owner.',
      },
      {
        systemId: 'sws',
        systemName: 'Smart Website Systems',
        status: 'support',
        whyNow: 'Service-area pages and capture forms feed the same operating board.',
      },
      {
        systemId: 'rep',
        systemName: 'Reputation & Reviews',
        status: 'support',
        whyNow: 'Reviews trigger from job sign-off so the queue stays current.',
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
        detailHref: '/industries/home-services/plumbing-companies',
        label: 'Plumbing Companies',
        oneLine: 'After-hours faults, dispatch routing, and quote follow-up.',
        leadingSystem: 'AI Lead Handling',
        state: 'silent',
      },
      {
        detailHref: '/industries/home-services/electrical-companies',
        label: 'Electrical Companies',
        oneLine: 'Faults plus project quotes plus compliance, on one thread.',
        leadingSystem: 'AI Lead Handling',
        state: 'silent',
      },
      {
        detailHref: '/industries/home-services/hvac-companies',
        label: 'HVAC Companies',
        oneLine: 'Seasonal surges, service plans, and install follow-up.',
        leadingSystem: 'CRM & Automation',
        state: 'attention',
      },
      {
        detailHref: '/industries/home-services/roofing-companies',
        label: 'Roofing Companies',
        oneLine: 'Storm surges, inspection-to-quote, and insurance threads.',
        leadingSystem: 'CRM & Automation',
        state: 'attention',
      },
      {
        detailHref: '/industries/home-services/landscaping-companies',
        label: 'Landscaping Companies',
        oneLine: 'Seasonal cycles, mid-job calls, and quote-board hygiene.',
        leadingSystem: 'CRM & Automation',
        state: 'slow',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'What changes',
      title: 'What the day holds once the gaps are owned',
      description: 'Same crew. Same season. The office stops chasing what the system can carry.',
    },
    handled: [
      {
        id: 'calls',
        label: 'Calls',
        state: 'after',
        note: 'Every inbound is acknowledged inside two minutes, day or night.',
      },
      {
        id: 'dispatch',
        label: 'Dispatch',
        state: 'after',
        note: 'Urgent jobs route to the nearest available tech automatically; dispatcher overrides in one tap.',
      },
      {
        id: 'quotes',
        label: 'Quotes',
        state: 'after',
        note: 'Open quotes have follow-ups scheduled the moment they go out.',
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
      kicker: 'A realistic busy week',
      title: 'A heatwave (or a storm). The queue holds itself.',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A field-crew operator with two office staff goes through a heatwave week (or a storm week). Inbound calls land in spikes. Each one is acknowledged in writing within minutes. Dispatch routes urgent jobs without manual texting. Quotes go out same day with follow-up scheduled. Sign-off triggers the review request.',
      observedChange:
        'The same week, before, would have ended with overflowing voicemail, half-written quotes, and reviews never asked for. Now the office is working through a queue that is holding itself.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What home-services operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this the same build for every home-services trade?',
        answer:
          'No. The shape is similar — capture, dispatch, quote, follow-up, review. The lead system differs based on whether the work is emergency-led or project-led. Each detail page covers the specifics.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most field operators that is the mid-job and after-hours call layer. CRM follows once that is steady.',
      },
      {
        id: 'tools',
        question: 'We already have a CRM and a job-management tool. Do we have to drop them?',
        answer:
          'Often we keep them. The decision happens after we look at what the office and crew actually do day to day.',
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
      title: 'Show us where home-services enquiries actually slip',
      description:
        'Tell us what happens between the phone ringing and the crew on the road. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and quotes land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a field-crew operator with a real on-call cycle.',
    },
  },
};

// ---------------------------------------------------------------------------
// Page-specific extras for the Home Services category page —
// field-out-of-office daily strip and operator-shape board.
// ---------------------------------------------------------------------------

export type HomeServicesDayMoment = {
  id: string;
  time: string;
  scene: string;
  field: 'on-site' | 'travel' | 'office' | 'on-call';
  risk: 'high' | 'medium' | 'low';
};

export type HomeServicesShape = {
  id: string;
  trade: string;
  shape: string;
  cue: string;
  signal: 'emergency' | 'storm' | 'surge' | 'fault-project' | 'seasonal';
  detailHref: string;
};

export const homeServicesExtras = {
  dayStrip: {
    eyebrow: 'A regular Tuesday',
    title: 'The field is working. The office line is exposed.',
    description:
      'A working day in a small home-services operation. Six moments where the gap between the crew and the office decides whether the next enquiry is captured or dropped.',
    moments: [
      {
        id: 'm1',
        time: '07:30',
        scene: 'Two crews on the road. Office not yet open.',
        field: 'travel',
        risk: 'medium',
      },
      {
        id: 'm2',
        time: '09:15',
        scene: 'Crew on roof. Phone diverts. New caller leaves no message.',
        field: 'on-site',
        risk: 'high',
      },
      {
        id: 'm3',
        time: '11:40',
        scene: 'Quote drafted at desk. Site visit pending.',
        field: 'office',
        risk: 'low',
      },
      {
        id: 'm4',
        time: '14:20',
        scene: 'Tech mid-job. Two enquiries hit voicemail in ten minutes.',
        field: 'on-site',
        risk: 'high',
      },
      {
        id: 'm5',
        time: '17:50',
        scene: 'Office shuts. Calls forward to one phone.',
        field: 'office',
        risk: 'medium',
      },
      {
        id: 'm6',
        time: '21:10',
        scene: 'Emergency call. Whoever picks up first wins the job.',
        field: 'on-call',
        risk: 'high',
      },
    ] as HomeServicesDayMoment[],
  },
  shapes: {
    eyebrow: 'Which one looks most like your week?',
    title: 'Five operator shapes — each detail page is built for that shape, not the average',
    description:
      'The category groups five distinct daily geometries. Pick the one closest to how your work actually arrives.',
    rows: [
      {
        id: 'plumbing',
        trade: 'Plumbing',
        shape: 'On-call cycle. After-hours faults. Dispatch decides everything.',
        cue: 'Speed of pickup is the conversion lever',
        signal: 'emergency',
        detailHref: '/industries/home-services/plumbing-companies',
      },
      {
        id: 'electrical',
        trade: 'Electrical',
        shape: 'Faults today. Project quotes this week. Compliance attaches to the job.',
        cue: 'Same number, two follow-up rhythms',
        signal: 'fault-project',
        detailHref: '/industries/home-services/electrical-companies',
      },
      {
        id: 'hvac',
        trade: 'HVAC',
        shape: 'Quiet months, surge weeks, service-plan renewals across the year.',
        cue: 'Plan loop turns installs into next visits',
        signal: 'surge',
        detailHref: '/industries/home-services/hvac-companies',
      },
      {
        id: 'roofing',
        trade: 'Roofing',
        shape: 'Storm-event surges. Inspection-to-quote. Insurance threads in parallel.',
        cue: 'Intake board has to clear the storm week',
        signal: 'storm',
        detailHref: '/industries/home-services/roofing-companies',
      },
      {
        id: 'landscaping',
        trade: 'Landscaping',
        shape: 'Seasonal cycles. Quote-board hygiene. Past customers waiting to be reactivated.',
        cue: 'Reactivation loop is the quiet revenue',
        signal: 'seasonal',
        detailHref: '/industries/home-services/landscaping-companies',
      },
    ] as HomeServicesShape[],
  },
};
