import type { IndustryDetailPageData } from '@/domains/industries/types';

export const plumbingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Plumbing Companies — Emergency Capture & Dispatch Systems',
    description:
      'How plumbing operators hold after-hours calls, route urgent jobs to the nearest tech, and keep planned work moving through the same system.',
    canonical: '/industries/home-services/plumbing-companies',
    openGraph: {
      title: 'Plumbing Companies — Emergency Capture & Dispatch Systems',
      description:
        'After-hours leaks, weekend bursts, and routine jobs handled through one operating layer.',
    },
  },
  slug: 'plumbing-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Plumbing',
    title: 'A burst pipe at 9pm. [[muted:Whoever picks up wins the job.]]',
    description:
      'Plumbing demand arrives in spikes — after hours, on weekends, mid-storm. The first operator who answers, books, and sends a tech is the one who gets paid.',
    list: [
      'Emergency calls answered the moment they land',
      'Urgent jobs dispatched to the nearest tech',
      'Routine work held in the same board, not a paper diary',
    ],
  },
  industries: ['plumbing'],
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
      kicker: 'Where it leaks',
      title: 'Three places plumbing enquiries usually slip',
      description: 'These show up across most established plumbing operators with field teams.',
    },
    leaks: [
      {
        id: 'after-hours',
        leak: 'After-hours calls go straight to voicemail',
        state: 'silent',
        observed:
          'Calls land between 6pm and midnight. The diverted line rings out. The caller dials the next plumber on the search results.',
      },
      {
        id: 'dispatch-gap',
        leak: 'Urgent jobs wait for a manual dispatch decision',
        state: 'slow',
        observed:
          'A burst-pipe call comes in. The dispatcher has to text three techs to find out who can take it. Twenty minutes pass.',
      },
      {
        id: 'no-followup',
        leak: 'Quoted-but-not-booked jobs disappear',
        state: 'lost',
        observed:
          'A homeowner gets a quote for a hot-water unit. They want to think. Nobody follows up. The job goes to whoever calls them first.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A real working week',
      title: 'When the phone rings, and what catches it',
      description: 'Five moments across one week where an enquiry can hold or vanish.',
    },
    timeline: [
      {
        id: 'monday-morning',
        time: 'Mon 07:30',
        event: 'Office opens, weekend voicemails reviewed',
        leakRisk: 'high',
        owner: 'Office',
        detail: 'Three weekend messages. Two have already booked elsewhere. One is still open.',
      },
      {
        id: 'tuesday-burst',
        time: 'Tue 10:14',
        event: 'Burst pipe call comes in',
        leakRisk: 'medium',
        owner: 'Dispatcher',
        detail: 'Manual texts to three techs to find availability. Job booked 22 minutes later.',
      },
      {
        id: 'wednesday-quote',
        time: 'Wed 15:40',
        event: 'Hot-water quote sent',
        leakRisk: 'medium',
        owner: 'Office',
        detail: 'Quote goes out as a PDF email. No follow-up scheduled.',
      },
      {
        id: 'friday-evening',
        time: 'Fri 19:22',
        event: 'After-hours leak call',
        leakRisk: 'high',
        owner: 'Voicemail',
        detail: 'On-call tech is mid-job. Voicemail catches it. Caller does not leave a message.',
      },
      {
        id: 'sunday',
        time: 'Sun 09:05',
        event: 'Weekend emergency call',
        leakRisk: 'high',
        owner: 'Voicemail',
        detail: 'Forwarded line is busy. Customer dials the second result on Google.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'Same trucks, same techs — a different first ten minutes',
      description:
        'Headcount stays. The change is who answers the phone, how fast a job is placed, and who chases the quote.',
    },
    before: {
      label: 'Before',
      items: [
        'After-hours calls go to voicemail',
        'Dispatcher does manual tech-by-tech texting',
        'Quoted jobs sit unfollowed-up',
        'Reviews depend on the customer thinking to leave one',
        'Owner has no live view of the day’s open jobs',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Every after-hours call is acknowledged inside two minutes',
        'Urgent jobs route to the nearest available tech automatically',
        'Open quotes have a follow-up scheduled the moment they go out',
        'Sign-off triggers a quiet review request',
        'Live board shows open jobs, owners, and next actions',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What gets put in place',
      title: 'The pieces that hold a plumbing operation together',
      description: 'Honest list of what is usually already there and what gets built.',
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
        id: 'quote-followup',
        piece: 'Quote follow-up sequence',
        state: 'planned',
        owner: 'CRM',
        note: 'A short, plain check-in 2 and 6 days after a quote goes out.',
      },
      {
        id: 'review-trigger',
        piece: 'Review request after job sign-off',
        state: 'planned',
        owner: 'Reputation',
        note: 'Triggers from job complete, not from the office remembering.',
      },
      {
        id: 'maintenance-recall',
        piece: 'Annual maintenance check-back for hot water units',
        state: 'optional',
        owner: 'CRM',
        note: 'Quiet message to past customers with a service window.',
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
        signalIfYou: 'After-hours and weekend calls are going to voicemail.',
        fix: 'A capture + acknowledgement layer that books or routes inside two minutes.',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'dispatch',
        signalIfYou: 'Urgent jobs sit waiting for a dispatch decision.',
        fix: 'A board that shows tech availability and routes jobs by proximity.',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'quote-followup',
        signalIfYou: 'Quoted hot-water and bathroom jobs disappear.',
        fix: 'A short follow-up sequence that goes out automatically.',
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
        id: 'after-hours-call',
        trigger: 'Call after 6pm',
        channel: 'Phone',
        action: 'SMS acknowledgement inside two minutes with on-call dispatch slot',
        owner: 'AI Lead Handling',
      },
      {
        id: 'urgent-job',
        trigger: 'Job marked urgent',
        channel: 'CRM',
        action: 'Auto-route to nearest available tech with one-tap accept',
        owner: 'CRM',
      },
      {
        id: 'quote-sent',
        trigger: 'Quote PDF sent',
        channel: 'CRM',
        action: 'Follow-up scheduled at +2 and +6 days',
        owner: 'CRM',
      },
      {
        id: 'job-complete',
        trigger: 'Tech marks job complete',
        channel: 'Mobile',
        action: 'Review request goes out the same evening',
        owner: 'Reputation',
      },
      {
        id: 'hwu-anniversary',
        trigger: '10 years since hot-water unit install',
        channel: 'CRM',
        action: 'Quiet check-back message with a service window',
        owner: 'CRM',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'What holds the call, the dispatch, and the quote',
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
        why: 'Catches the after-hours and mid-job calls that voicemail loses.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds dispatch, quotes, and follow-up on one board with clear ownership.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger from sign-off so the queue stays current.',
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
      kicker: 'A realistic Friday night',
      title: '7:42pm. The leak call comes in. Ninety seconds matters.',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A leak call comes in at 7:42pm. The on-call tech is finishing another job. An SMS goes back inside ninety seconds confirming a tech is on the way and offering an ETA window. The customer stops calling other plumbers.',
      observedChange:
        'The same call, before, would have hit voicemail and gone to the next listing. Now it is acknowledged before the customer has put the phone down.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What plumbing operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'on-call',
        question: 'We already have an on-call tech. What changes?',
        answer:
          'The on-call tech stays. What changes is the layer in front of them: every inbound call is acknowledged in writing within minutes so the customer stops calling other operators while they wait.',
      },
      {
        id: 'dispatch',
        question: 'Our dispatcher knows the team. Won’t auto-routing get it wrong?',
        answer:
          'Auto-routing is a default, not a lock. The dispatcher overrides any decision in one tap. The system carries the load on the obvious cases so the dispatcher can focus on the hard ones.',
      },
      {
        id: 'quotes',
        question: 'Quote follow-up feels pushy.',
        answer:
          'It is one short message at +2 days and one at +6, written in plain language, with an off switch. If the customer says no, no chase.',
      },
      {
        id: 'reviews',
        question: 'Will customers feel asked-at?',
        answer:
          'The request goes once, at sign-off, in a quiet form. If they don’t respond, no follow-up.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where plumbing calls slip after hours',
      description:
        'Tell us what happens between the phone ringing and the truck arriving. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and quotes land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a plumbing operator with a real on-call cycle.',
    },
  },
};

// ---------------------------------------------------------------------------
// Page-specific extras for plumbing — first-five-minutes route diagram,
// after-hours hours strip, dispatch pick.
// ---------------------------------------------------------------------------

export type PlumbingRouteNode = {
  id: string;
  label: string;
  detail: string;
  time?: string;
};

export type PlumbingHourCell = 'office' | 'oncall' | 'voicemail';

export type PlumbingDayCover = {
  day: string;
  cells: PlumbingHourCell[];
};

export type PlumbingTech = {
  id: string;
  tech: string;
  status: 'on-job' | 'travelling' | 'free';
  area: string;
  detail: string;
};

export const plumbingExtras = {
  recognition: {
    eyebrow: 'Recognition',
    title: 'A plumbing week is won or lost in three places',
    description: 'Most established plumbing operators recognise these on sight.',
    items: [
      {
        id: 'after-hours',
        title: 'The after-hours phone',
        body: 'Calls land between 6pm and midnight. The diverted line rings out. The caller dials the next plumber in the search results.',
      },
      {
        id: 'mid-job',
        title: 'The call mid-job',
        body: 'Tech is under a sink. The office phone rings to nobody. Voicemail catches it. Twenty minutes later the customer has booked elsewhere.',
      },
      {
        id: 'dispatch-wait',
        title: 'The dispatch wait',
        body: 'Burst pipe. Three texts to three techs to find availability. The customer sits with water on the floor.',
      },
    ],
  },
  route: {
    eyebrow: 'The first five minutes',
    title: 'The first five minutes decide the job',
    description:
      'Five steps between the phone ringing and a tech on the way. Each one has to happen without a person remembering.',
    nodes: [
      {
        id: 'call',
        label: 'Call lands',
        time: '00:00',
        detail: 'A homeowner dials. Office line, after-hours line, mobile divert — same path.',
      },
      {
        id: 'triage',
        label: 'Triage',
        time: '+30s',
        detail: 'Urgent or standard. The signal sets the next move.',
      },
      {
        id: 'dispatch',
        label: 'Dispatch',
        time: '+90s',
        detail: 'Nearest free tech is auto-picked. Dispatcher overrides in one tap.',
      },
      {
        id: 'window',
        label: 'Arrival window',
        time: '+2m',
        detail: 'SMS confirms ETA back to the customer. The dialling stops.',
      },
      {
        id: 'note',
        label: 'Job note',
        time: 'after',
        detail: 'Sign-off triggers the review request. Quote follow-up scheduled.',
      },
    ] as PlumbingRouteNode[],
    branches: [
      { from: 'triage', label: 'Standard', detail: 'Booked into next available slot' },
      { from: 'triage', label: 'Urgent', detail: 'Auto-routed to nearest free tech' },
    ],
  },
  hours: {
    eyebrow: 'When the calls actually land',
    title: 'After-hours calls need a route before the office opens',
    description:
      'Plumbing demand sits in the hours nobody is at the desk. The capture layer turns every silent hour into an acknowledged enquiry.',
    cols: ['07–12', '12–17', '17–22', '22–07'],
    rows: [
      { day: 'Mon', cells: ['office', 'office', 'voicemail', 'voicemail'] },
      { day: 'Tue', cells: ['office', 'office', 'oncall', 'oncall'] },
      { day: 'Wed', cells: ['office', 'office', 'voicemail', 'voicemail'] },
      { day: 'Thu', cells: ['office', 'office', 'voicemail', 'voicemail'] },
      { day: 'Fri', cells: ['office', 'office', 'oncall', 'oncall'] },
      { day: 'Sat', cells: ['office', 'voicemail', 'voicemail', 'voicemail'] },
      { day: 'Sun', cells: ['voicemail', 'voicemail', 'voicemail', 'voicemail'] },
    ] as PlumbingDayCover[],
    legend: [
      { id: 'office', label: 'Office answers' },
      { id: 'oncall', label: 'On-call tech' },
      { id: 'voicemail', label: 'Voicemail today — captured tomorrow' },
    ],
    note: 'Every "voicemail" cell becomes an acknowledged enquiry inside two minutes once capture is in place. The on-call rota stays the same.',
  },
  dispatch: {
    eyebrow: 'Dispatch should not depend on whoever checks the phone first',
    title: 'The board picks the nearest free hand. The dispatcher confirms in one tap.',
    description:
      'Three techs, three live states, one auto-suggestion. The decision moves from a memory test to a signal.',
    asOf: '15:46',
    techs: [
      {
        id: 'd1',
        tech: 'Sam',
        status: 'on-job',
        area: 'North · Riverside',
        detail: 'Wraps ~16:30',
      },
      {
        id: 'd2',
        tech: 'Alex',
        status: 'travelling',
        area: 'East · Hillgate',
        detail: 'Café drain · ETA 16:04',
      },
      {
        id: 'd3',
        tech: 'Mike',
        status: 'free',
        area: 'South · Bryce St area',
        detail: 'Available now · 12 min away',
      },
    ] as PlumbingTech[],
    pick: {
      tech: 'Mike',
      reason: 'Closest to the burst-line call. Auto-picked. One tap to send.',
    },
  },
  systemPath: {
    eyebrow: 'Which system starts first',
    title: 'Lead first. Support next. The rest only when the day is steady.',
    leading: {
      name: 'AI Lead Handling',
      why: 'Catches every after-hours and mid-job call before voicemail wins it.',
    },
    chain: [
      { name: 'CRM & Automation', why: 'Holds dispatch, quotes, and follow-up on one board.' },
      {
        name: 'Reputation & Reviews',
        why: 'Reviews trigger from sign-off, not from anyone remembering.',
      },
      {
        name: 'Smart Website Systems',
        why: 'On-call line, service-area pages, and capture all flow into the same board.',
      },
      {
        name: 'Local SEO Authority',
        why: 'Becomes useful once capture and dispatch are reliable.',
      },
    ],
  },
  scenario: {
    eyebrow: 'A realistic Friday night',
    title: '7:42pm. The leak call comes in. Ninety seconds matters.',
    body: 'A leak call comes in at 7:42pm. The on-call tech is finishing another job. An SMS goes back inside ninety seconds confirming a tech is on the way and offering an ETA window. The customer stops calling other plumbers.',
    change:
      'The same call, before, would have hit voicemail and gone to the next listing. Now it is acknowledged before the customer has put the phone down.',
  },
};
