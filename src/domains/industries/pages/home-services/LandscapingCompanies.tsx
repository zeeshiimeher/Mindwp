import type { IndustryDetailPageData } from '@/domains/industries/types';

export const landscapingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Landscaping Companies — Enquiry & Follow-up Systems',
    description:
      'How landscaping companies hold quote enquiries, site-visit bookings, and seasonal follow-up without losing them between calls and crews.',
    canonical: '/industries/home-services/landscaping-companies',
    openGraph: {
      title: 'Landscaping Companies — Enquiry & Follow-up Systems',
      description:
        'Where quote requests slip, why callbacks miss, and what changes when the working day has clear ownership.',
    },
  },
  slug: 'landscaping-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Landscaping',
    title: 'The phone rings between hedge cuts. [[muted:Most callbacks never go out.]]',
    description:
      'A quote request lands while the crew is at a job. By the time the truck is back on the road, the enquiry is two missed calls and a website form nobody opened.',
    list: [
      'Quote requests held the moment they land',
      'Site-visit bookings written into the day',
      'Seasonal follow-up that does not depend on memory',
    ],
  },
  industries: ['landscaping'],
  systems: [
    'smart-website-systems',
    'ai-lead-handling',
    'crm-automation',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'client-reactivation', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where the day loses enquiries',
      title: 'Three quiet ways a busy landscaping week leaks money',
      description:
        'These are the moments most established crews recognise on sight. Each one is the reason a real homeowner went with someone else last week.',
    },
    leaks: [
      {
        id: 'midday-call',
        leak: 'Mid-job calls go to voicemail',
        state: 'silent',
        observed:
          'A homeowner rings while the crew is on site. Voicemail picks up. The message gets heard at the end of the day, behind ten others.',
      },
      {
        id: 'quote-form',
        leak: 'Website quote forms sit unopened',
        state: 'slow',
        observed:
          'A form arrives at 11am. It lands in the inbox alongside supplier emails. By the time someone reads it, the homeowner has booked another crew.',
      },
      {
        id: 'season-followup',
        leak: 'Last season’s clients never hear back',
        state: 'lost',
        observed:
          'Spring tidy-ups, hedge trims, and seasonal jobs from last year sit in a notebook. No one is owning the next conversation.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A real Tuesday on the road',
      title: 'How the day actually moves — and where it slips',
      description:
        'One day in a small landscaping crew. By 6pm, six callers had a question and only two of them got a person.',
    },
    timeline: [
      {
        id: 'morning',
        time: '07:40',
        event: 'Crew leaves the yard',
        leakRisk: 'low',
        owner: 'Foreman',
        detail: 'Phones go in pockets. Office line forwards to whoever has a quiet moment.',
      },
      {
        id: 'first-call',
        time: '09:15',
        event: 'First quote call comes in',
        leakRisk: 'high',
        owner: 'Voicemail',
        detail: 'The mower is running. Three rings. Caller hangs up before voicemail finishes.',
      },
      {
        id: 'form-arrives',
        time: '11:02',
        event: 'Website form lands',
        leakRisk: 'medium',
        owner: 'Inbox',
        detail: 'Notification on the office laptop. Office is empty until 4pm.',
      },
      {
        id: 'lunch',
        time: '12:30',
        event: 'Two callbacks attempted on the lunch break',
        leakRisk: 'medium',
        owner: 'Foreman',
        detail: 'One picks up. One does not. The unanswered name will not be tried again today.',
      },
      {
        id: 'evening',
        time: '17:50',
        event: 'Office reviews missed contacts',
        leakRisk: 'high',
        owner: 'Owner',
        detail:
          'Six missed calls. Two forms. One review request never sent. Tomorrow the list grows.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'Same crew, same season — a different week',
      description:
        'No new headcount. The week stops depending on who happens to be near the phone.',
    },
    before: {
      label: 'Before',
      items: [
        'Callbacks depend on whoever remembers',
        'Quote requests live in inbox plus notebook',
        'Last year’s clients are out of contact',
        'Reviews are asked for sporadically',
        'No clear view of where this week’s enquiries are',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Every call is logged and acknowledged within minutes',
        'Quote requests have a single owner and a next action',
        'Seasonal contact goes out without anyone planning it',
        'Review requests follow finished work automatically',
        'Owner can see open enquiries without opening five tabs',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What gets put in place',
      title: 'The pieces that make the day hold together',
      description: 'A short, honest inventory. Some are usually already there. Some need building.',
    },
    workbench: [
      {
        id: 'capture',
        piece: 'Site quote form, phone, missed-call recovery',
        state: 'in-place',
        owner: 'Smart Website',
        note: 'Usually exists in some form. Often unowned.',
      },
      {
        id: 'first-touch',
        piece: 'Instant acknowledgement on call or form',
        state: 'planned',
        owner: 'AI Lead Handling',
        note: 'Replies inside minutes, books a slot for a real callback.',
      },
      {
        id: 'enquiry-board',
        piece: 'Single board of open enquiries',
        state: 'planned',
        owner: 'CRM',
        note: 'Replaces the inbox-plus-notebook pattern. Owner is visible per row.',
      },
      {
        id: 'site-visit',
        piece: 'Site visit and quote sequence',
        state: 'planned',
        owner: 'CRM',
        note: 'Triggers reminders for the crew, the office, and the customer.',
      },
      {
        id: 'review',
        piece: 'Review request after job sign-off',
        state: 'planned',
        owner: 'Reputation',
        note: 'Goes out automatically when work is marked complete.',
      },
      {
        id: 'seasonal',
        piece: 'Seasonal re-contact for past clients',
        state: 'optional',
        owner: 'CRM',
        note: 'Quiet, low-volume. Triggered by job type and date.',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start first',
      title: 'You probably only need to fix one thing first',
      description:
        'Three honest starting points. Most landscaping operators only need one of these in phase one.',
    },
    startingPoints: [
      {
        id: 'missed-calls',
        signalIfYou: 'Most days end with three or more missed calls.',
        fix: 'Recover the call, acknowledge in minutes, book the callback for the same day.',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'lost-quotes',
        signalIfYou: 'Quote requests come in but quotes don’t go out.',
        fix: 'A single board for open enquiries with a visible next action and owner.',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'no-reviews',
        signalIfYou: 'Reviews trickle in only when you remember to ask.',
        fix: 'Sign-off triggers the request. The crew finishes; the message goes out.',
        leadingSystem: 'Reputation & Reviews',
      },
    ],
  },
  workflowExamples: {
    header: {
      kicker: 'Triggers in plain language',
      title: 'A small board of triggers, actions, and owners',
      description:
        'Examples are illustrative. Final shape depends on the operator’s tools and people.',
    },
    workflow: [
      {
        id: 'missed-call',
        trigger: 'Missed call during a job',
        channel: 'Phone',
        action: 'SMS goes back inside two minutes with two callback windows',
        owner: 'AI Lead Handling',
      },
      {
        id: 'quote-form',
        trigger: 'Quote form submitted',
        channel: 'Web',
        action: 'Acknowledgement email + enquiry card with owner assigned',
        owner: 'CRM',
      },
      {
        id: 'site-visit-confirmed',
        trigger: 'Site visit confirmed',
        channel: 'CRM',
        action: 'Reminder to crew + reminder to homeowner the morning of',
        owner: 'CRM',
      },
      {
        id: 'job-complete',
        trigger: 'Job marked complete',
        channel: 'CRM',
        action: 'Review request goes out the same evening',
        owner: 'Reputation',
      },
      {
        id: 'season-trigger',
        trigger: '11 months since last hedge cut',
        channel: 'CRM',
        action: 'Quiet check-in message with a seasonal slot offer',
        owner: 'CRM',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'What holds the phone, the quote, and the season',
      title: 'The pieces that matter first — and the ones that wait',
      description: 'Lead first. Support next. The rest only when the day is steady.',
    },
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Closes the gap between a missed call mid-job and a callback that actually happens.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds open quotes, site visits, and seasonal follow-up so nothing depends on memory.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Quote form, service-area pages, and capture all flow into the same board.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Review requests trigger from completed jobs, not from anyone remembering.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Helpful when service-area visibility is the real bottleneck. Often a later phase.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic Tuesday',
      title: 'One call, two minutes, before the foreman finishes the row',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A homeowner calls at 9:15 about a hedge that needs reshaping before the weekend. The crew is on a job. The call is recovered, an SMS goes back inside two minutes offering a callback window between 12 and 1, and a card is opened in the enquiry board with the foreman as owner.',
      observedChange:
        'The same enquiry, before, would have left voicemail and joined the evening pile. Now it is acknowledged before the foreman has finished the row of hedges.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What landscaping operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'where-to-start',
        question: 'We are busy in season. Can this even start in spring?',
        answer:
          'Yes. The first phase is the missed-call recovery and acknowledgement layer. It needs almost nothing from the crew and runs in the background while you keep working.',
      },
      {
        id: 'crm',
        question: 'We already use a CRM that we half-fill in. Does this replace it?',
        answer:
          'Often it replaces it. Sometimes the existing tool stays and the work is rebuilt around it. The decision happens after we look at what the crew actually does.',
      },
      {
        id: 'reviews',
        question: 'We don’t want to spam clients with review requests.',
        answer:
          'Neither do we. The request triggers once, after sign-off, in a quiet form. If they don’t respond, no chase.',
      },
      {
        id: 'seasonal',
        question: 'Will old clients feel marketed at?',
        answer:
          'Only if the message is wrong. The seasonal re-contact is a single, plainly written message — no offers, no buttons, no countdowns. It either lands or it doesn’t.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where landscaping enquiries actually slip',
      description:
        'Tell us what happens between the call coming in and the quote going out. We will read it back to you and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and forms land today' },
      { num: '2', text: 'The single system most likely to fix the first leak' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Quiet, direct, specific to how the season runs for your crew.',
    },
  },
};

// ---------------------------------------------------------------------------
// Page-specific extras (renderer reads these for landscaping-specific visuals).
// Rebuilt: buyer-facing copy + signature visual (year arc + quote kanban).
// ---------------------------------------------------------------------------

export type LandscapingKanbanCard = {
  id: string;
  homeowner: string;
  job: string;
  age: string;
  next: string;
};

export type LandscapingArcMonth = {
  short: string;
  load: number;
  cue?: string;
};

export type LandscapingChangeRow = {
  id: string;
  before: string;
  after: string;
};

export const landscapingExtras = {
  recognition: {
    eyebrow: 'Recognition',
    title: 'A landscaping week loses work in three quiet places',
    description: 'Most established crews recognise these on sight.',
    items: [
      {
        id: 'mid-job',
        title: 'The mid-job phone',
        body: 'A homeowner rings while the mower is running. Three rings, voicemail, and the next listing gets the call.',
      },
      {
        id: 'quote-visit',
        title: 'The quote visit with no next step',
        body: 'The site walk happens. The number gets written on a notepad. Nobody owns the follow-up after Friday.',
      },
      {
        id: 'past-clients',
        title: 'Last year’s clients',
        body: 'Spring tidy-ups and hedge cuts from last season sit in a notebook. Eleven months pass and someone else gets the call.',
      },
    ],
  },
  kanban: {
    eyebrow: 'Open right now',
    title: 'The quote board that should exist before the truck gets back',
    description:
      'Five real-feeling enquiries, three columns, one view. Not an inbox, not a notebook, not a memory test.',
    asOf: 'Tuesday, 14:20',
    columns: [
      {
        id: 'new',
        label: 'Just landed',
        cards: [
          {
            id: 'c1',
            homeowner: 'M. Olsson',
            job: 'Hedge reshape + tidy',
            age: '2h 40m',
            next: 'Acknowledge + offer slot',
          },
          {
            id: 'c2',
            homeowner: 'J. Reed',
            job: 'Front bed clearance',
            age: '40m',
            next: 'SMS: callback at 17:30',
          },
        ] as LandscapingKanbanCard[],
      },
      {
        id: 'open',
        label: 'Site visit / quote out',
        cards: [
          {
            id: 'c3',
            homeowner: 'D. Kapoor',
            job: 'Front lawn re-turf',
            age: '1d',
            next: 'Visit Thu 10:00',
          },
          {
            id: 'c4',
            homeowner: 'R. Walker',
            job: 'Garden clearance',
            age: '3d',
            next: '+2d follow-up due',
          },
        ] as LandscapingKanbanCard[],
      },
      {
        id: 'won',
        label: 'Booked',
        cards: [
          {
            id: 'c5',
            homeowner: 'S. Verity',
            job: 'Seasonal hedge package',
            age: '6d',
            next: 'Schedule first cut',
          },
        ] as LandscapingKanbanCard[],
      },
    ],
  },
  yearArc: {
    eyebrow: 'A landscaping year, not a flat calendar',
    title: 'Spring calls, summer maintenance, autumn cuts, winter quiet',
    description:
      'The work changes shape with the season. Follow-up has to change with it. The system has to know what month it is.',
    months: [
      { short: 'Jan', load: 18, cue: 'Reactivate last year' },
      { short: 'Feb', load: 32 },
      { short: 'Mar', load: 58, cue: 'Spring tidy-ups start' },
      { short: 'Apr', load: 86 },
      { short: 'May', load: 92, cue: 'Peak first half' },
      { short: 'Jun', load: 88 },
      { short: 'Jul', load: 84 },
      { short: 'Aug', load: 80, cue: 'Push reviews' },
      { short: 'Sep', load: 70 },
      { short: 'Oct', load: 50, cue: 'Winter prep slot' },
      { short: 'Nov', load: 28 },
      { short: 'Dec', load: 16, cue: 'Quote next spring' },
    ] as LandscapingArcMonth[],
    bands: [
      { id: 'spring', label: 'Spring tidy-ups', start: 2, end: 4 },
      { id: 'summer', label: 'Summer maintenance', start: 4, end: 8 },
      { id: 'autumn', label: 'Autumn cuts', start: 8, end: 10 },
      { id: 'winter', label: 'Winter quiet — quoting begins', start: 10, end: 12 },
    ],
  },
  reactivation: {
    eyebrow: 'Past clients should not disappear after one job',
    title: 'How last year’s hedge cut becomes this year’s booking',
    steps: [
      { id: 'r1', label: 'Sign-off', detail: 'Crew finishes. The job tags the season.' },
      { id: 'r2', label: 'Quiet review', detail: 'One short message the same evening.' },
      { id: 'r3', label: 'Off-season pause', detail: 'No noise through the quiet months.' },
      { id: 'r4', label: 'Pre-season note', detail: '11 months later, one plain slot offer.' },
      { id: 'r5', label: 'Booked again', detail: 'New job, owner already assigned.' },
    ],
  },
  whatChanges: {
    eyebrow: 'What changes when the day is held',
    title: 'Same crew, same season — a different week',
    description:
      'No new headcount. The week stops depending on whoever happens to be near the phone.',
    rows: [
      {
        id: 'calls',
        before: 'Six missed calls by 6pm. Two get tried tomorrow.',
        after: 'Every inbound call acknowledged inside two minutes, day or night.',
      },
      {
        id: 'quotes',
        before: 'Quotes live in inboxes and notebooks. Follow-up depends on memory.',
        after: 'One open-quote board. Each card has an owner and a next move.',
      },
      {
        id: 'season',
        before: 'Last year’s clients are out of contact by spring.',
        after: 'A pre-season note goes out without anyone planning it.',
      },
      {
        id: 'reviews',
        before: 'Reviews trickle in only when someone remembers to ask.',
        after: 'Sign-off triggers the request. The queue stays current.',
      },
    ] as LandscapingChangeRow[],
  },
  systemPath: {
    eyebrow: 'Which system starts first',
    title: 'Lead first. Support next. The rest only when the day is steady.',
    leading: {
      name: 'AI Lead Handling',
      why: 'Catches the call mid-job before voicemail wins. The first phase usually starts here.',
    },
    chain: [
      {
        name: 'CRM & Automation',
        why: 'Holds the open quote board and the seasonal follow-up.',
      },
      { name: 'Reputation & Reviews', why: 'Triggers a quiet review the evening of sign-off.' },
      {
        name: 'Smart Website Systems',
        why: 'Quote forms and service-area pages feed the same board.',
      },
      {
        name: 'Local SEO Authority',
        why: 'A later phase — only when service-area visibility is the bottleneck.',
      },
    ],
  },
  scenario: {
    eyebrow: 'A realistic Tuesday',
    title: 'One call, two minutes, before the foreman finishes the row',
    body: 'A homeowner calls at 9:15 about a hedge that needs reshaping before the weekend. The crew is on a job. The call is recovered, an SMS goes back inside two minutes offering a callback window between 12 and 1, and a card is opened on the quote board with the foreman as owner.',
    change:
      'The same enquiry, before, would have left voicemail and joined the evening pile. Now it is acknowledged before the foreman has finished the row of hedges.',
  },
};
