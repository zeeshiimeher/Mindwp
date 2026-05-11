import type { IndustryDetailPageData } from '@/domains/industries/types';

export const hvacCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'HVAC Companies — Seasonal Demand & Maintenance Systems',
    description:
      'How HVAC operators hold the heatwave-week call surge, keep maintenance contracts current, and turn a finished install into the next service appointment.',
    canonical: '/industries/home-services/hvac-companies',
    openGraph: {
      title: 'HVAC Companies — Seasonal Demand & Maintenance Systems',
      description:
        'Surge weeks, service contracts, and follow-up loops handled through one operating layer.',
    },
  },
  slug: 'hvac-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · HVAC',
    title:
      'The first 35-degree week breaks the phone. [[muted:Half the calls never get a callback.]]',
    description:
      'HVAC demand is seasonal and uneven. The week the temperature spikes, the office is buried. Then four months later the same customers are not on a service plan.',
    list: [
      'Surge-week calls held without dropping any',
      'Service contracts that renew themselves',
      'Installs that turn into the next appointment, not silence',
    ],
  },
  industries: ['hvac'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'reputation-review',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'client-reactivation', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where the season leaks',
      title: 'Three quiet ways an HVAC year loses work',
      description:
        'These show up across most established HVAC operators with a real seasonal swing.',
    },
    leaks: [
      {
        id: 'surge-week',
        leak: 'Surge-week calls overflow voicemail',
        state: 'silent',
        observed:
          'The first hot week. Phones ring forty times an hour. Voicemail fills. The afternoon is spent guessing which messages still matter.',
      },
      {
        id: 'service-lapse',
        leak: 'Service contracts lapse silently',
        state: 'lost',
        observed:
          'A customer’s annual service was due in March. Nobody noticed. They called a competitor when the unit failed in November.',
      },
      {
        id: 'install-silence',
        leak: 'Finished installs disappear from contact',
        state: 'slow',
        observed:
          'A new system goes in. The customer is happy. They never hear from the company again until something breaks.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A surge week',
      title: 'When the season turns and what catches it',
      description: 'A heatwave Monday. Each row is a moment where a job can hold or vanish.',
    },
    timeline: [
      {
        id: 'monday-am',
        time: '07:00',
        event: 'Phones start ringing as the heat hits',
        leakRisk: 'high',
        owner: 'Office',
        detail: 'Two staff. Twelve calls in the queue by 8am.',
      },
      {
        id: 'midmorning',
        time: '10:30',
        event: 'Voicemail backlog reaches forty messages',
        leakRisk: 'high',
        owner: 'Voicemail',
        detail: 'Office triage starts. Half the messages are already too old to chase.',
      },
      {
        id: 'install-followup',
        time: '13:15',
        event: 'New install completed last week — no follow-up sent',
        leakRisk: 'medium',
        owner: 'Office',
        detail: 'Customer happy but uncontacted. No service plan offered.',
      },
      {
        id: 'service-due',
        time: '15:40',
        event: 'Six annual services overdue this month',
        leakRisk: 'high',
        owner: 'Owner',
        detail: 'No alert. The office spots it only when they audit the spreadsheet.',
      },
      {
        id: 'evening-quote',
        time: '18:20',
        event: 'Surge-week quotes still untyped',
        leakRisk: 'medium',
        owner: 'Owner',
        detail: 'Office shut at 5. Quotes will be done from home tonight or not at all.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'Same techs, same vans — a season the office can hold',
      description:
        'Headcount stays. The change is what the office no longer has to remember on the busiest week.',
    },
    before: {
      label: 'Before',
      items: [
        'Surge weeks bury the office in voicemail',
        'Service plans depend on a spreadsheet someone updates',
        'Installs go silent after sign-off',
        'Quotes get written from home in the evenings',
        'No live view of who is overdue or unresponded-to',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Every inbound is acknowledged inside two minutes, even at peak',
        'Service plans renew on time without manual chasing',
        'Installs trigger a follow-up sequence and a service offer',
        'Quote cards have follow-up scheduled the moment they go out',
        'Live board shows overdue services and open quotes side by side',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What gets put in place',
      title: 'The pieces that hold the season together',
      description: 'A short, honest inventory of what is usually there and what gets built.',
    },
    workbench: [
      {
        id: 'capture',
        piece: 'Phone, web form, and service-area pages',
        state: 'in-place',
        owner: 'Smart Website',
        note: 'Usually exists. Rarely connected to one board.',
      },
      {
        id: 'surge-ack',
        piece: 'Instant SMS acknowledgement on inbound calls',
        state: 'planned',
        owner: 'AI Lead Handling',
        note: 'Holds caller attention through a busy queue.',
      },
      {
        id: 'service-board',
        piece: 'Service-due board with auto-reminders',
        state: 'planned',
        owner: 'CRM',
        note: 'Replaces the spreadsheet. Owner per row.',
      },
      {
        id: 'install-followup',
        piece: 'Install follow-up sequence',
        state: 'planned',
        owner: 'CRM',
        note: 'A short check-in at +14 days and a service-plan offer at +60.',
      },
      {
        id: 'review',
        piece: 'Review request after install or service complete',
        state: 'planned',
        owner: 'Reputation',
        note: 'Triggers from job complete, not from anyone remembering.',
      },
      {
        id: 'lapse-recovery',
        piece: 'Lapsed-customer reactivation',
        state: 'optional',
        owner: 'CRM',
        note: 'Quiet message to past customers whose service is two years overdue.',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start first',
      title: 'You probably only need to fix one thing first',
      description: 'Three honest starts. Pick the one that shows up most this season.',
    },
    startingPoints: [
      {
        id: 'surge',
        signalIfYou: 'Heatwave weeks bury the office in voicemail.',
        fix: 'A capture + acknowledgement layer that holds caller attention even at peak.',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'service-plans',
        signalIfYou: 'Service plans live in a spreadsheet that nobody updates.',
        fix: 'A service-due board that pings when work is overdue, with an owner per row.',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'install-loop',
        signalIfYou: 'Installs go silent after sign-off.',
        fix: 'A short follow-up sequence and a service-plan offer at the right interval.',
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
        id: 'surge-call',
        trigger: 'Inbound call during a busy queue',
        channel: 'Phone',
        action: 'SMS acknowledgement inside two minutes with callback window',
        owner: 'AI Lead Handling',
      },
      {
        id: 'service-due',
        trigger: 'Annual service due in 30 days',
        channel: 'CRM',
        action: 'Renewal message with a one-tap booking link',
        owner: 'CRM',
      },
      {
        id: 'install-complete',
        trigger: 'Install marked complete',
        channel: 'CRM',
        action: 'Check-in at +14 days; service-plan offer at +60',
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
        id: 'lapse',
        trigger: '24 months since last service',
        channel: 'CRM',
        action: 'Quiet check-back with a seasonal slot',
        owner: 'CRM',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'What holds the surge week and the service plan',
      title: 'The pieces that matter first — and the ones that wait',
      description:
        'CRM and AI Lead Handling lead. Reputation and Smart Website support. SEO is later.',
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
        why: 'Holds the service-due cycle, install follow-up, and quote board on one surface.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches the surge-week overflow before voicemail buries it.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger from sign-off so the queue stays current through the season.',
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
        why: 'Useful when seasonal-keyword visibility is the bottleneck. Often a later phase.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic heatwave Monday',
      title: 'Twelve calls land before the office is fully open',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'The first 35-degree day. Twelve calls land before the office is fully open. Each caller gets an SMS within two minutes with a callback window for that day. The office does not lose any of them while triaging the queue.',
      observedChange:
        'Same surge, before, would have left the office answering whichever call rang last. Now the queue is holding itself while the team works through it in order.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What HVAC operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'spreadsheet',
        question: 'We track service plans in a spreadsheet. Do we have to drop it?',
        answer:
          'No. The spreadsheet can stay as the source while the new layer pulls from it. We replace the spreadsheet only when it is actively causing missed renewals.',
      },
      {
        id: 'surge',
        question: 'Will the SMS acknowledgement annoy people who just want to talk?',
        answer:
          'It is one short message. It says “we’ve got your call, here is when we will ring back.” People appreciate knowing the company saw the call.',
      },
      {
        id: 'install',
        question: 'We don’t want to push service plans on people who just bought a system.',
        answer:
          'The follow-up at +14 days is a check-in, not an offer. The service-plan invitation comes at +60 days, plainly written, with an off switch.',
      },
      {
        id: 'reviews',
        question: 'Customers don’t want to be asked for reviews after every visit.',
        answer: 'The request goes once per job, after sign-off. If they don’t respond, no chase.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where HVAC enquiries get lost in the season',
      description:
        'Tell us what happens between a surge-week phone ringing and a quote going out. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and service plans land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a seasonal HVAC operator.',
    },
  },
};

// ---------------------------------------------------------------------------
// Page-specific extras for HVAC — recognition, surge-arc signature,
// repair/replace/install lanes, service-plan loop, system path, scenario.
// ---------------------------------------------------------------------------

export type HvacWeekBar = {
  label: string;
  load: number; // 0-100 illustrative
  state: 'quiet' | 'normal' | 'surge';
  note?: string;
};

export type HvacLane = {
  id: 'repair' | 'replacement' | 'install';
  label: string;
  context: string;
  firstReply: string;
  cadence: string;
  outcome: string;
};

export const hvacExtras = {
  recognition: {
    eyebrow: 'Recognition',
    title: 'An HVAC year breaks discipline in three places',
    description: 'Most established HVAC operators recognise these on sight.',
    items: [
      {
        id: 'first-hot-week',
        title: 'The first hot week',
        body: 'Inbound runs four times deeper. Repair calls bury replacement quotes. Nobody chases the install enquiry that came in on Monday.',
      },
      {
        id: 'three-clocks',
        title: 'Three jobs, three clocks',
        body: 'Repair needs a tech today. Replacement needs a quote in 24h. Install runs over weeks. The office handles them all the same way.',
      },
      {
        id: 'plans-fade',
        title: 'Service plans go quiet',
        body: 'The plan was offered at install. Nobody owns the next visit. The customer hears nothing for a year and assumes the relationship ended.',
      },
    ],
  },
  surge: {
    eyebrow: 'A real HVAC year',
    title: 'The first hot week breaks callback discipline',
    description:
      'Two surge windows. Eight quiet weeks. The office staffs for the average. Follow-up that does not happen on the spike costs work in the quiet weeks that follow.',
    bars: [
      { label: 'Jan', load: 60, state: 'normal' },
      { label: 'Feb', load: 55, state: 'normal' },
      { label: 'Mar', load: 35, state: 'quiet', note: 'Service-plan window' },
      { label: 'Apr', load: 30, state: 'quiet' },
      { label: 'May', load: 45, state: 'normal' },
      { label: 'Jun', load: 78, state: 'surge', note: 'Heatwave' },
      { label: 'Jul', load: 92, state: 'surge', note: 'Peak' },
      { label: 'Aug', load: 70, state: 'surge' },
      { label: 'Sep', load: 38, state: 'quiet', note: 'Service-plan window' },
      { label: 'Oct', load: 42, state: 'normal' },
      { label: 'Nov', load: 65, state: 'normal' },
      { label: 'Dec', load: 80, state: 'surge', note: 'Cold snap' },
    ] as HvacWeekBar[],
    note: 'In a surge week the inbox runs four times deeper. Follow-up does not happen because nobody is free to do it.',
  },
  lanes: {
    eyebrow: 'Three jobs, three clocks',
    title: 'Repair, replacement, and install move on different clocks',
    description:
      'A homeowner with a dead unit, a homeowner getting two quotes, and a builder running a new install do not behave the same. The system has to know which lane each call is in.',
    rows: [
      {
        id: 'repair',
        label: 'Repair',
        context: 'Unit not heating or cooling. Customer wants a tech today.',
        firstReply: 'Inside two minutes',
        cadence: 'Same-day window · short follow-up',
        outcome: 'Booked tech · invoice follows the visit',
      },
      {
        id: 'replacement',
        label: 'Replacement',
        context: 'Old unit failing. Quote needed across two or three options.',
        firstReply: 'Inside the hour',
        cadence: 'Quote in 24h · follow-up at +3 and +10 days',
        outcome: 'Booked install · service plan offered with sign-off',
      },
      {
        id: 'install',
        label: 'New install',
        context: 'New build or extension. Pre-quoted in spec.',
        firstReply: 'Same business day',
        cadence: 'Slow burn · follow-up at +1, +2, +4 weeks',
        outcome: 'Scheduled install · maintenance loop opens after sign-off',
      },
    ] as HvacLane[],
  },
  planLoop: {
    eyebrow: 'Service plans only work when the next visit is already owned',
    title: 'How a finished install becomes the next service appointment',
    steps: [
      {
        id: 'p1',
        label: 'Install sign-off',
        detail: 'Job complete. Plan offered. Terms attached.',
      },
      { id: 'p2', label: 'Plan accepted', detail: 'CRM tags the unit and books the first window.' },
      { id: 'p3', label: 'Six months in', detail: 'Quiet check-in. The unit is running cleanly.' },
      {
        id: 'p4',
        label: 'Service window',
        detail: 'Reminder + slot offer. Visit lands on the same board.',
      },
      {
        id: 'p5',
        label: 'Renewal',
        detail: 'Plan rolls forward. Customer pays nothing to remember.',
      },
    ],
  },
  systemPath: {
    eyebrow: 'Which system starts first',
    title: 'CRM leads. AI Lead Handling carries the surge.',
    leading: {
      name: 'CRM & Automation',
      why: 'Holds the surge week and the year-long service plan on one board.',
    },
    chain: [
      { name: 'AI Lead Handling', why: 'Acknowledges every surge-week call inside two minutes.' },
      {
        name: 'Reputation & Reviews',
        why: 'Reviews trigger from sign-off, not from anyone remembering.',
      },
      {
        name: 'Smart Website Systems',
        why: 'Quote forms and service-area pages funnel into the same board.',
      },
      { name: 'Local SEO Authority', why: 'Useful once capture and follow-up are reliable.' },
    ],
  },
  scenario: {
    eyebrow: 'A heatwave Tuesday',
    title: 'Twelve calls land before the office is fully open',
    body: 'It is 7:55am on a heatwave Tuesday. Twelve calls have already landed. Each one is acknowledged in writing inside two minutes with a same-day repair slot or a 24-hour quote window. The dispatcher works through repairs in geographic order. The two replacement quotes from yesterday get a follow-up the same evening.',
    change:
      'The same morning, before, would have ended with eight voicemails and two replacement quotes never followed up. Now the surge week clears itself.',
  },
};
