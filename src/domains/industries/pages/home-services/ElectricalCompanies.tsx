import type { IndustryDetailPageData } from '@/domains/industries/types';

export const electricalCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Electrical Companies — Emergency & Project Pipeline Systems',
    description:
      'How electrical operators hold the after-hours fault call, keep planned project quotes moving, and maintain compliance documentation without the office drowning in it.',
    canonical: '/industries/home-services/electrical-companies',
    openGraph: {
      title: 'Electrical Companies — Emergency & Project Pipeline Systems',
      description:
        'After-hours faults, project quotes, and compliance handled through one operating layer.',
    },
  },
  slug: 'electrical-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Electrical',
    title: 'Power’s out at 11pm. [[muted:The next click is who’s open right now.]]',
    description:
      'Electrical demand splits in two: faults that need a tech now, and projects that need quote, schedule, and compliance to line up. The office that holds both is the one that books the work.',
    list: [
      'Fault calls answered the moment they land',
      'Project quotes that don’t go cold',
      'Compliance documentation tied to the job, not chased after',
    ],
  },
  industries: ['electrical'],
  systems: [
    'ai-lead-handling',
    'crm-automation',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'emergency-handling', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where the day leaks',
      title: 'Three quiet ways an electrical week loses work',
      description:
        'Two paths run through the same office — fault calls and project quotes. Each one slips in a different place.',
    },
    leaks: [
      {
        id: 'after-hours-fault',
        leak: 'After-hours fault calls go unanswered',
        state: 'silent',
        observed:
          'Power outage at 9pm. The on-call line rings out. The customer dials the next listing.',
      },
      {
        id: 'project-cooldown',
        leak: 'Project quotes go cold without follow-up',
        state: 'slow',
        observed:
          'A homeowner asks for a switchboard upgrade quote. It goes out as a PDF. Two weeks later the customer has booked someone else.',
      },
      {
        id: 'compliance-chase',
        leak: 'Compliance certificates get chased weeks later',
        state: 'attention',
        observed:
          'A job is signed off but the certificate is sitting on a tech’s phone. The office finds out only when the customer asks.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A real working week',
      title: 'When the calls land and what catches them',
      description: 'A typical week mixing emergency faults and project work.',
    },
    timeline: [
      {
        id: 'monday-quote',
        time: 'Mon 10:30',
        event: 'Switchboard upgrade quote request',
        leakRisk: 'medium',
        owner: 'Office',
        detail: 'Will need a site visit. Booking goes onto the spreadsheet.',
      },
      {
        id: 'tuesday-fault',
        time: 'Tue 14:15',
        event: 'No-power fault call',
        leakRisk: 'medium',
        owner: 'Dispatcher',
        detail: 'Manual texting to find a tech with a free hour. 25-minute decision.',
      },
      {
        id: 'wednesday-followup',
        time: 'Wed 16:00',
        event: 'Quote follow-up missed',
        leakRisk: 'high',
        owner: 'Office',
        detail: 'Quote went out Monday. No reminder set. Office is busy.',
      },
      {
        id: 'thursday-evening',
        time: 'Thu 19:40',
        event: 'After-hours fault call',
        leakRisk: 'high',
        owner: 'Voicemail',
        detail: 'On-call tech is mid-job. Voicemail catches it. No callback today.',
      },
      {
        id: 'friday-compliance',
        time: 'Fri 11:25',
        event: 'Customer asks for compliance certificate',
        leakRisk: 'medium',
        owner: 'Owner',
        detail: 'Owner has to call the tech to get the photo of the certificate.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'Same techs, two paths — a week the office can hold',
      description:
        'Headcount stays. The change is what fault and project work no longer have to share.',
    },
    before: {
      label: 'Before',
      items: [
        'After-hours fault calls go to voicemail',
        'Dispatch is manual tech-by-tech texting',
        'Project quotes go out and are not chased',
        'Compliance certificates live on tech phones',
        'Owner has no view of open quotes vs open faults',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Every fault call is acknowledged inside two minutes, day or night',
        'Urgent jobs route to the nearest available tech',
        'Project quotes have follow-ups scheduled the moment they go out',
        'Compliance documents attach to the job card on site',
        'Live board shows quotes, faults, and compliance status side by side',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What gets put in place',
      title: 'The pieces that hold a mixed-work operation together',
      description: 'A short, honest inventory of what exists and what gets built.',
    },
    workbench: [
      {
        id: 'on-call-line',
        piece: 'On-call line + after-hours capture',
        state: 'in-place',
        owner: 'Smart Website',
        note: 'Usually exists. Often unanswered after 6pm.',
      },
      {
        id: 'instant-ack',
        piece: 'Instant SMS acknowledgement on inbound calls',
        state: 'planned',
        owner: 'AI Lead Handling',
        note: 'Replies inside two minutes with a callback or dispatch slot.',
      },
      {
        id: 'dispatch-board',
        piece: 'Dispatch board with availability + location',
        state: 'planned',
        owner: 'CRM',
        note: 'Routes urgent jobs without manual tech-by-tech texting.',
      },
      {
        id: 'project-pipeline',
        piece: 'Project quote pipeline with follow-ups',
        state: 'planned',
        owner: 'CRM',
        note: 'Quotes have +2 and +6 day follow-ups built in.',
      },
      {
        id: 'compliance',
        piece: 'Compliance documentation tied to job card',
        state: 'planned',
        owner: 'CRM',
        note: 'Certificates attach on site. Office never has to chase.',
      },
      {
        id: 'review',
        piece: 'Review request after job sign-off',
        state: 'planned',
        owner: 'Reputation',
        note: 'Triggers from sign-off, configurable by job type.',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start first',
      title: 'You probably only need to fix one thing first',
      description: 'Three honest starts. Pick the one that hurts most this month.',
    },
    startingPoints: [
      {
        id: 'after-hours',
        signalIfYou: 'After-hours fault calls go to voicemail.',
        fix: 'A capture + acknowledgement layer that books or routes inside two minutes.',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'projects',
        signalIfYou: 'Project quotes go cold without follow-up.',
        fix: 'A quote pipeline with follow-ups built in.',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'compliance',
        signalIfYou: 'Compliance certificates get chased weeks after sign-off.',
        fix: 'Field-to-job-card upload so certificates attach on site.',
        leadingSystem: 'CRM & Automation',
      },
    ],
  },
  workflowExamples: {
    header: {
      kicker: 'Triggers in plain language',
      title: 'A small board of triggers, actions, and owners',
      description: 'Examples are illustrative. Final shape depends on tools and team.',
    },
    workflow: [
      {
        id: 'fault-call',
        trigger: 'Fault call after 6pm',
        channel: 'Phone',
        action: 'SMS acknowledgement inside two minutes with on-call dispatch slot',
        owner: 'AI Lead Handling',
      },
      {
        id: 'urgent-dispatch',
        trigger: 'Job marked urgent',
        channel: 'CRM',
        action: 'Auto-route to nearest available tech with one-tap accept',
        owner: 'CRM',
      },
      {
        id: 'quote-sent',
        trigger: 'Project quote sent',
        channel: 'CRM',
        action: 'Follow-up scheduled at +2 and +6 days',
        owner: 'CRM',
      },
      {
        id: 'cert-uploaded',
        trigger: 'Compliance cert photographed in the field',
        channel: 'Mobile',
        action: 'Cert attaches to job card; office notified',
        owner: 'CRM',
      },
      {
        id: 'job-complete',
        trigger: 'Tech marks job complete',
        channel: 'Mobile',
        action: 'Review request goes out the same evening (configurable)',
        owner: 'Reputation',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'What holds the fault call and the project quote',
      title: 'The pieces that matter first — and the ones that wait',
      description:
        'AI Lead Handling and CRM lead. Reputation and Smart Website support. SEO is later.',
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
        why: 'Catches the after-hours fault call before it goes to a competitor.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds dispatch, project quotes, and compliance on one surface.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger from sign-off, configurable per job type.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Service-area pages and emergency call paths feed the same board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when emergency-keyword visibility is the bottleneck. Often a later phase.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic Thursday evening',
      title: '7:42pm. The no-power call lands. Ninety seconds matters.',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A no-power call at 7:42pm. The on-call tech is finishing another job. An SMS goes back inside ninety seconds confirming the dispatch and offering an ETA window. The customer stops dialling other electricians.',
      observedChange:
        'Same call, before, would have hit voicemail and gone to the next listing. Now it is acknowledged before the customer has put the phone down.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What electrical operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'on-call',
        question: 'We already have an on-call tech. What changes?',
        answer:
          'The on-call tech stays. What changes is the layer in front of them: every inbound is acknowledged within minutes so the customer stops calling other electricians while they wait.',
      },
      {
        id: 'compliance',
        question: 'Compliance certs are a manual process. Can this really help?',
        answer:
          'It does not change the cert itself. It changes where the cert lives. A photo on site attaches to the job card so the office never has to chase it down later.',
      },
      {
        id: 'projects',
        question: 'Project quote follow-up feels pushy.',
        answer:
          'It is one short message at +2 days and one at +6, written plainly, with an off switch. If the customer says no, no chase.',
      },
      {
        id: 'reviews',
        question: 'We don’t want to ask for reviews on every fault call.',
        answer:
          'You don’t have to. The trigger is configurable per job type. Fault calls can be excluded entirely.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where electrical work slips between fault and project',
      description:
        'Tell us what happens between the after-hours call and the project quote. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and quotes land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an electrical operator with mixed fault and project work.',
    },
  },
};

// ---------------------------------------------------------------------------
// Page-specific extras for Electrical — fault vs project split, quote board,
// safety/trust signals.
// ---------------------------------------------------------------------------

export type ElectricalChannelRow = {
  id: string;
  arrived: string;
  caller: string;
  job: string;
  next: string;
};

export type ElectricalQuoteRow = {
  id: string;
  ref: string;
  customer: string;
  scope: string;
  stage: 'enquiry' | 'site-visit' | 'quoted' | 'follow-up' | 'won';
  amount: string;
};

export type ElectricalTrustCard = {
  id: string;
  label: string;
  detail: string;
};

export const electricalExtras = {
  channels: {
    eyebrow: 'Two paths through one office',
    title: 'Fault calls and project quotes need different paths',
    description:
      'A no-power call needs a tech today. A switchboard upgrade needs a quote and a follow-up. The team has to handle both well, on different clocks, on the same number.',
    asOf: 'Tuesday, 11:18',
    fault: {
      label: 'Faults',
      tag: 'Same-day',
      rows: [
        {
          id: 'f1',
          arrived: '08:14',
          caller: '17 Oak Lane',
          job: 'Half the house out',
          next: 'Tech routed · ETA 09:30',
        },
        {
          id: 'f2',
          arrived: '09:02',
          caller: 'Renton Cafe',
          job: 'Three points dead',
          next: 'Booked, on the way',
        },
        {
          id: 'f3',
          arrived: '10:41',
          caller: '4 Briar Walk',
          job: 'Smoke smell at fuse box',
          next: 'Priority — re-routed',
        },
      ] as ElectricalChannelRow[],
    },
    project: {
      label: 'Projects',
      tag: 'Quote + follow-up',
      rows: [
        {
          id: 'p1',
          arrived: 'Mon',
          caller: 'Hawthorne Ext.',
          job: 'Rewire ground floor',
          next: 'Site visit Wed 14:00',
        },
        {
          id: 'p2',
          arrived: 'Mon',
          caller: 'Maple Cafe',
          job: 'EV charger install',
          next: 'Quote drafted',
        },
        {
          id: 'p3',
          arrived: 'Tue',
          caller: '11 Marble Way',
          job: 'Consumer unit upgrade',
          next: 'Quote sent · follow-up +2d',
        },
      ] as ElectricalChannelRow[],
    },
  },
  quoteBoard: {
    eyebrow: 'Project quote board',
    title: 'A same-day fault should not bury a planned project',
    description:
      'A project quote board. Each row has a clear stage and a clear next step. Follow-up runs whether the office remembers or not.',
    rows: [
      {
        id: 'q1',
        ref: 'Q-118',
        customer: '14 Hawthorne',
        scope: 'Ground-floor rewire',
        stage: 'enquiry',
        amount: '—',
      },
      {
        id: 'q2',
        ref: 'Q-119',
        customer: 'Renton Cafe',
        scope: 'Three-phase upgrade',
        stage: 'site-visit',
        amount: '—',
      },
      {
        id: 'q3',
        ref: 'Q-115',
        customer: '11 Marble Way',
        scope: 'Consumer unit',
        stage: 'quoted',
        amount: '£2,140',
      },
      {
        id: 'q4',
        ref: 'Q-112',
        customer: 'Maple Cafe',
        scope: 'EV charger',
        stage: 'follow-up',
        amount: '£1,860',
      },
      {
        id: 'q5',
        ref: 'Q-110',
        customer: '8 Pine Hollow',
        scope: 'Outdoor lighting',
        stage: 'won',
        amount: '£980',
      },
    ] as ElectricalQuoteRow[],
  },
  trust: {
    eyebrow: 'Trust on the job',
    title: 'Trust proof belongs with the job',
    description:
      'Trust is operational, not decorative. The right paperwork, the right follow-up, on the right job.',
    cards: [
      {
        id: 't1',
        label: 'Compliance docs tied to the job',
        detail:
          'Test certificates and notification copies attach to the job record automatically once the work is signed off.',
      },
      {
        id: 't2',
        label: 'Clear safety check on completion',
        detail:
          'A short safety checklist runs at handover. The homeowner sees what was done, and what to watch.',
      },
      {
        id: 't3',
        label: 'Review request after sign-off',
        detail:
          'A quiet, accurate review request goes out only after a real completed job — not before, not bulk.',
      },
    ] as ElectricalTrustCard[],
  },
  systemPath: {
    eyebrow: 'Which system starts first',
    leading: {
      name: 'AI Lead Handling',
      why: 'The fault call has to be answered before voicemail eats it.',
    },
    chain: [
      {
        name: 'CRM & Automation',
        why: 'Holds the project quote board and the follow-up cadence in one place.',
      },
      {
        name: 'Reputation & Reviews',
        why: 'Sign-off triggers the review request — only on completed work.',
      },
      {
        name: 'Smart Website Systems',
        why: 'Project enquiry forms route into the same quote board.',
      },
      {
        name: 'Local SEO Authority',
        why: 'Earns the searches once the rest of the system is reliable.',
      },
    ],
  },
  scenario: {
    eyebrow: 'A Thursday evening fault',
    title: 'A no-power call lands at 18:42',
    body: 'A homeowner calls at 18:42 with half the house out. The call is acknowledged in writing inside two minutes with a same-evening callback window. The on-call tech is routed through the same dispatch board the office uses by day. Meanwhile, the rewire quote that came in earlier is still on a +2-day follow-up timer — the fault did not bury it.',
    change:
      'The same call, before, would have hit voicemail at 18:42 and a panicked customer would have phoned the next electrician on the list by 18:45.',
  },
};
