import type { IndustryDetailPageData } from '@/domains/industries/types';

export const roofingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Roofing Companies — Storm Surge & Inspection Systems',
    description:
      'How roofing operators hold the storm-event call surge, keep inspection-quote conversions on track, and stay in front of insurance work without losing the trail.',
    canonical: '/industries/home-services/roofing-companies',
    openGraph: {
      title: 'Roofing Companies — Storm Surge & Inspection Systems',
      description:
        'Storm weeks, inspection quotes, and insurance handoffs handled through one operating layer.',
    },
  },
  slug: 'roofing-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Roofing',
    title: 'A storm rolls through. [[muted:By morning the inbox is unsortable.]]',
    description:
      'Roofing demand spikes around weather events. The week after a storm, the office is buried in inspection requests, half-completed insurance jobs, and quotes that nobody has chased.',
    list: [
      'Post-storm calls held without dropping any',
      'Inspection-to-quote conversions tracked end to end',
      'Insurance jobs visible without spreadsheet archaeology',
    ],
  },
  industries: ['roofing'],
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
      kicker: 'Where the storm week leaks',
      title: 'Three quiet ways post-storm work walks out the door',
      description: 'These show up across most established roofing operators with field crews.',
    },
    leaks: [
      {
        id: 'storm-surge',
        leak: 'Post-storm calls overwhelm the office',
        state: 'silent',
        observed:
          'Sixty inspection requests in three days. Voicemails stack up. The office is two days behind by Wednesday.',
      },
      {
        id: 'inspection-to-quote',
        leak: 'Inspections happen but quotes never follow',
        state: 'slow',
        observed:
          'A tech goes up the ladder, takes photos, says “we’ll send a quote.” The quote sits in someone’s phone for a week.',
      },
      {
        id: 'insurance-trail',
        leak: 'Insurance jobs lose paper trail',
        state: 'lost',
        observed:
          'The customer wants a quote, the assessor needs a report, the insurer wants documentation. Nobody owns the thread.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A post-storm week',
      title: 'When the calls land and what catches them',
      description: 'A Tuesday after a Sunday storm. Each row is a moment a job can hold or vanish.',
    },
    timeline: [
      {
        id: 'monday-morning',
        time: 'Mon 07:30',
        event: 'Office opens, weekend voicemails reviewed',
        leakRisk: 'high',
        owner: 'Office',
        detail: 'Forty-two messages. Half from neighbouring streets after the same storm.',
      },
      {
        id: 'inspection-bookings',
        time: 'Mon 11:00',
        event: 'Inspection bookings going out by phone',
        leakRisk: 'medium',
        owner: 'Office',
        detail: 'Manual call-back loop. Some customers already booked another roofer.',
      },
      {
        id: 'tech-onsite',
        time: 'Tue 14:20',
        event: 'Tech finishes inspection, photos in phone',
        leakRisk: 'high',
        owner: 'Tech',
        detail: 'No structured handoff. Photos sit until office hours.',
      },
      {
        id: 'quote-sent',
        time: 'Thu 16:50',
        event: 'Quote written and sent',
        leakRisk: 'medium',
        owner: 'Office',
        detail: 'Three-day lag. No follow-up scheduled.',
      },
      {
        id: 'insurance-paperwork',
        time: 'Fri 10:15',
        event: 'Insurer requests documentation',
        leakRisk: 'high',
        owner: 'Owner',
        detail: 'Owner digs through email and phone storage to assemble the file.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'Same crews, same ladders — a storm week that holds together',
      description:
        'Headcount stays. The change is what no longer sits in a phone gallery, an inbox, or a head.',
    },
    before: {
      label: 'Before',
      items: [
        'Storm-week voicemails outpace the office',
        'Inspection photos live in phone galleries',
        'Quotes go out three to five days after inspection',
        'Insurance jobs sit half-documented across email and phone',
        'Owner has no view of where each job sits',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Every storm-week inbound is acknowledged inside two minutes',
        'Inspection photos attach to a job card in the field',
        'Quotes go out same day with a follow-up scheduled',
        'Insurance documentation lives on one job thread',
        'Live board shows inspection → quote → install → close at a glance',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What gets put in place',
      title: 'The pieces that hold the storm week together',
      description: 'A short, honest inventory of what exists and what gets built.',
    },
    workbench: [
      {
        id: 'capture',
        piece: 'Phone, inspection-request form, and storm landing pages',
        state: 'in-place',
        owner: 'Smart Website',
        note: 'Usually exists. Rarely connected to one board.',
      },
      {
        id: 'storm-ack',
        piece: 'Instant SMS acknowledgement on inbound calls',
        state: 'planned',
        owner: 'AI Lead Handling',
        note: 'Holds caller attention through a backed-up queue.',
      },
      {
        id: 'job-board',
        piece: 'Inspection-to-quote job board with field handoff',
        state: 'planned',
        owner: 'CRM',
        note: 'Photos and notes attach to the card on site.',
      },
      {
        id: 'quote-followup',
        piece: 'Quote follow-up sequence',
        state: 'planned',
        owner: 'CRM',
        note: 'Plain message at +2 and +6 days.',
      },
      {
        id: 'insurance-thread',
        piece: 'Insurance documentation thread per job',
        state: 'planned',
        owner: 'CRM',
        note: 'One place for photos, reports, assessor notes, and customer comms.',
      },
      {
        id: 'review-trigger',
        piece: 'Review request after install complete',
        state: 'planned',
        owner: 'Reputation',
        note: 'Triggers from sign-off, not from anyone remembering.',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start first',
      title: 'You probably only need to fix one thing first',
      description: 'Three honest starts. Pick the one that hurts most this season.',
    },
    startingPoints: [
      {
        id: 'storm',
        signalIfYou: 'Post-storm voicemails outpace the office.',
        fix: 'A capture + acknowledgement layer that holds caller attention even at peak.',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'inspection-quote',
        signalIfYou: 'Inspections happen but quotes follow days later.',
        fix: 'Field-to-office job board with photos and notes attached on site.',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'insurance',
        signalIfYou: 'Insurance jobs lose their paper trail.',
        fix: 'One thread per job that holds all documentation in one place.',
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
        id: 'storm-call',
        trigger: 'Inbound call within a storm window',
        channel: 'Phone',
        action: 'SMS acknowledgement inside two minutes with inspection booking link',
        owner: 'AI Lead Handling',
      },
      {
        id: 'inspection-complete',
        trigger: 'Tech marks inspection complete',
        channel: 'Mobile',
        action: 'Quote draft prefilled with photos and notes; office notified',
        owner: 'CRM',
      },
      {
        id: 'quote-sent',
        trigger: 'Quote sent',
        channel: 'CRM',
        action: 'Follow-up scheduled at +2 and +6 days',
        owner: 'CRM',
      },
      {
        id: 'insurer-request',
        trigger: 'Insurer requests documentation',
        channel: 'Email',
        action: 'One-click bundle from job thread (photos, report, comms)',
        owner: 'CRM',
      },
      {
        id: 'install-complete',
        trigger: 'Install marked complete',
        channel: 'Mobile',
        action: 'Review request goes out the same evening',
        owner: 'Reputation',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'What holds the storm intake and the project thread',
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
        why: 'Holds inspection → quote → install → insurance on one thread per job.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches storm-week overflow before voicemail buries it.',
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
        why: 'Inspection forms and storm landing pages feed the same board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when storm-keyword visibility is the bottleneck. Often a later phase.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic Monday after a storm',
      title: 'Forty calls before the first coffee. None of them sit.',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A Sunday storm. By Monday morning forty calls have landed. Each one gets an SMS within two minutes confirming the inspection request and offering a window. The office triages without losing any of them.',
      observedChange:
        'The same week, before, would have ended with a third of those inspections booked elsewhere. Now the queue is holding itself while the team works through it in order.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What roofing operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'photos',
        question: 'Our techs take photos in their phones. Do we change that?',
        answer:
          'Same camera. Different home. Photos attach to the job card on the spot, so the office doesn’t have to chase them later.',
      },
      {
        id: 'insurance',
        question: 'We deal with insurers. Will this make that easier or harder?',
        answer:
          'Easier. Every job gets one thread that holds the photos, the report, the assessor notes, and the customer comms. The insurer’s request is a one-click bundle.',
      },
      {
        id: 'storm-sms',
        question: 'People in panic don’t want a robotic SMS.',
        answer:
          'It is one short message: “we’ve got your call about the storm damage, here is when we’ll ring you.” People appreciate knowing someone saw the call.',
      },
      {
        id: 'reviews',
        question: 'We don’t want to ask for reviews on insurance jobs.',
        answer:
          'You don’t have to. The trigger is configurable per job type. Insurance jobs can be opted out of the review request entirely.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where roofing enquiries get lost after a storm',
      description:
        'Tell us what happens between an inspection request and an install start. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and inspections land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a roofing operator with field crews and insurance work.',
    },
  },
};

// ---------------------------------------------------------------------------
// Page-specific extras for Roofing — storm intake, funnel, project stages.
// ---------------------------------------------------------------------------

export type RoofingIntakeRow = {
  id: string;
  arrived: string;
  caller: string;
  address: string;
  reason: string;
  state: 'logged' | 'inspection-booked' | 'site-visited' | 'quoted';
};

export type RoofingFunnelStage = {
  id: string;
  label: string;
  count: number;
  detail: string;
};

export type RoofingProjectStage = {
  id: string;
  label: string;
  jobs: { ref: string; address: string; note: string }[];
};

export const roofingExtras = {
  scenario: {
    eyebrow: 'A Monday after a storm',
    title: 'Eight inspection requests, one quiet office',
    body: 'It is 7:15am on the Monday after a heavy weekend storm. Eight inspection requests have come in overnight — voicemail, web form, missed call. Each one was acknowledged in writing within ten minutes, with a tentative inspection slot. The dispatcher walks in, sees an ordered intake board, and confirms the slots in priority of leak severity. By lunchtime four inspections are done and three quotes are out.',
    change:
      'The same morning, before, would have started with the office triaging voicemails and losing two enquiries to a competitor that picked up first.',
  },
  stormIntake: {
    eyebrow: 'Storm intake',
    title: 'The storm intake that has to be sorted before lunch',
    description:
      'Illustrative intake from the morning after a heavy storm. Every row is a roof a homeowner is worried about. Every row needs an inspection slot before the next leak.',
    asOf: 'Wednesday, 09:12 — two days after storm front',
    rows: [
      {
        id: 'r1',
        arrived: 'Mon 21:40',
        caller: 'Hawthorne Cres',
        address: '14 Hawthorne Cres',
        reason: 'Tile down on driveway',
        state: 'inspection-booked',
      },
      {
        id: 'r2',
        arrived: 'Mon 22:05',
        caller: 'Lewis',
        address: '8 Pine Hollow',
        reason: 'Water stain on ceiling',
        state: 'inspection-booked',
      },
      {
        id: 'r3',
        arrived: 'Tue 06:18',
        caller: 'Dunmore Estate',
        address: '22 Dunmore Rd',
        reason: 'Ridge cap visible from street',
        state: 'site-visited',
      },
      {
        id: 'r4',
        arrived: 'Tue 07:55',
        caller: 'Patel',
        address: '5 Marble Way',
        reason: 'Gutter detached',
        state: 'site-visited',
      },
      {
        id: 'r5',
        arrived: 'Tue 09:20',
        caller: 'Kane',
        address: '17 Field End',
        reason: 'Active drip in attic',
        state: 'quoted',
      },
      {
        id: 'r6',
        arrived: 'Tue 11:40',
        caller: "O'Connor",
        address: '3 Briar Close',
        reason: 'Tarp request — last storm',
        state: 'quoted',
      },
      {
        id: 'r7',
        arrived: 'Tue 14:02',
        caller: 'Mehta',
        address: '11 Oakridge',
        reason: 'Insurance assessor referral',
        state: 'logged',
      },
      {
        id: 'r8',
        arrived: 'Wed 08:45',
        caller: 'Briarwood HOA',
        address: 'Block A, Briarwood',
        reason: 'Three units affected',
        state: 'logged',
      },
    ] as RoofingIntakeRow[],
  },
  funnel: {
    eyebrow: 'Inspection → quote → approval → crew',
    title: 'Where the storm-week work actually is',
    description:
      'A real four-stage view of the post-storm pipeline. The office and the field both see the same numbers.',
    stages: [
      {
        id: 'inspections',
        label: 'Inspections booked',
        count: 18,
        detail: 'On the calendar, dispatched.',
      },
      { id: 'quotes', label: 'Quotes drafted', count: 12, detail: 'Photos and scope attached.' },
      {
        id: 'approvals',
        label: 'Awaiting approval',
        count: 7,
        detail: 'Following up at +2 and +5 days.',
      },
      {
        id: 'won',
        label: 'Approved this week',
        count: 4,
        detail: 'Materials ordered, slot booked.',
      },
    ] as RoofingFunnelStage[],
  },
  projectStages: {
    eyebrow: 'Project board',
    title: 'Five jobs, five stages',
    description:
      'Each job has a clear stage and a clear next step. Nothing sits without an owner. Nothing depends on anyone remembering.',
    stages: [
      {
        id: 'scheduled',
        label: 'Scheduled',
        jobs: [
          { ref: 'J-218', address: '14 Hawthorne Cres', note: 'Crew booked Mon 07:30' },
          { ref: 'J-221', address: '8 Pine Hollow', note: 'Materials confirmed' },
        ],
      },
      {
        id: 'materials',
        label: 'Materials in',
        jobs: [{ ref: 'J-214', address: '22 Dunmore Rd', note: 'Ridge cap, underlay' }],
      },
      {
        id: 'on-roof',
        label: 'On roof today',
        jobs: [{ ref: 'J-209', address: '5 Marble Way', note: 'Gutter + flashing repair' }],
      },
      {
        id: 'cleanup',
        label: 'Cleanup',
        jobs: [{ ref: 'J-205', address: '17 Field End', note: 'Skip pickup booked' }],
      },
      {
        id: 'signed-off',
        label: 'Signed off',
        jobs: [{ ref: 'J-201', address: '3 Briar Close', note: 'Review request queued' }],
      },
    ] as RoofingProjectStage[],
  },
  systemPath: {
    eyebrow: 'Lead first, support next',
    leading: {
      name: 'CRM & Automation',
      why: 'Holds the storm-week intake and the project board on the same surface.',
    },
    chain: [
      {
        name: 'AI Lead Handling',
        why: 'Catches storm-night calls and books inspections without anyone in the office.',
      },
      { name: 'Reputation & Reviews', why: 'Sign-off triggers the review request the same day.' },
      {
        name: 'Smart Website Systems',
        why: 'Inspection request forms route into the same intake board.',
      },
      {
        name: 'Local SEO Authority',
        why: 'Earns the storm-week searches once the rest is reliable.',
      },
    ],
  },
};
