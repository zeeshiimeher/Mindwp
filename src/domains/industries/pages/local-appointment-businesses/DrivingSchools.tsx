import type { IndustryDetailPageData } from '@/domains/industries/types';

export const drivingSchoolsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Driving Schools — Booking, Test-Prep, and Lesson-Block Systems',
    description:
      'How driving schools hold inbound bookings across multiple instructors, manage lesson blocks, and follow up around the test.',
    canonical: '/industries/local-appointment-businesses/driving-schools',
    openGraph: {
      title: 'Driving Schools — Booking, Test-Prep, and Lesson-Block Systems',
      description: 'Bookings, blocks, and test-prep prompts on one operating layer.',
    },
  },
  slug: 'driving-schools',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Appointments · Driving Schools',
    title: 'A new learner. [[muted:And no one to answer the phone mid-lesson.]]',
    description:
      'The instructors are out on the road. The phone goes to voicemail. Most enquiries don’t leave one — they call the next school.',
    list: [
      'Calls during lessons get an instant text-back',
      'Lesson blocks are reminded and rebooked',
      'Test-prep follow-ups go out at the right point',
    ],
  },
  industries: ['driving-school'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'missed-calls'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places driving-school enquiries usually slip',
      description: 'Most schools see at least two of these.',
    },
    leaks: [
      {
        id: 'on-road',
        leak: 'Phone rings while the instructor is on the road',
        state: 'silent',
        observed: 'Voicemail catches the call. The learner books elsewhere.',
      },
      {
        id: 'block-end',
        leak: 'Lesson blocks finish without a rebook',
        state: 'lost',
        observed: 'A learner finishes their block. Nothing prompts the next one.',
      },
      {
        id: 'test-followup',
        leak: 'No follow-up after the test',
        state: 'attention',
        observed: 'A learner passes. There is no review prompt and no referral path.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How a driving-school day moves',
      description: 'Instructors out, phones busy, paperwork last.',
    },
    timeline: [
      {
        id: 'open',
        time: '7:30',
        event: 'First lessons start — phones go quiet at the school',
        leakRisk: 'high',
        owner: 'Instructor',
      },
      {
        id: 'morning',
        time: '8:30 — 12:00',
        event: 'Back-to-back lessons',
        leakRisk: 'high',
        owner: 'Instructor',
      },
      {
        id: 'lunch',
        time: '13:00',
        event: 'Quick break — voicemail backlog',
        leakRisk: 'medium',
        owner: 'Instructor',
      },
      {
        id: 'afternoon',
        time: '14:00 — 18:00',
        event: 'School-finish learners',
        leakRisk: 'high',
        owner: 'Instructor',
      },
      {
        id: 'evening',
        time: '19:00',
        event: 'Admin: bookings, blocks, invoices',
        leakRisk: 'medium',
        owner: 'Owner',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The school, before and after',
      description: 'Same instructors. A different layer behind the phone.',
    },
    before: {
      label: 'Before',
      items: [
        'Calls during lessons go to voicemail',
        'Block ends without a rebook prompt',
        'Test-prep follow-ups don’t happen',
        'Reviews depend on the learner remembering',
        'Referrals are word-of-mouth only',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Missed calls get instant text-back with a booking link',
        'Block-end reminders go out at the right point',
        'Test-prep prompts run a week before the test',
        'Review prompt goes out after the pass',
        'Referral prompt with a clear ask',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold a school together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      {
        id: 'textback',
        piece: 'Missed-call text-back',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      { id: 'reminders', piece: 'Lesson reminders', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'block',
        piece: 'Block-end rebook prompts',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      { id: 'test', piece: 'Test-prep prompt', state: 'in-place', owner: 'CRM & Automation' },
      {
        id: 'review',
        piece: 'Post-pass review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      { id: 'referral', piece: 'Referral prompt', state: 'optional', owner: 'CRM & Automation' },
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
        id: 'missed-call',
        fix: 'Catch missed calls instantly',
        signalIfYou: 'lose enquiries during teaching hours',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'block-end',
        fix: 'Run block-end rebook prompts',
        signalIfYou: 'see learners drop after their block',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'test-prep',
        fix: 'Run test-prep prompts',
        signalIfYou: 'see learners go quiet around their test',
        leadingSystem: 'CRM & Automation',
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
        id: 'missed',
        trigger: 'Missed call during lesson',
        action: 'Text-back within 2 minutes with booking link',
        owner: 'AI Lead Handling',
        channel: 'SMS',
      },
      {
        id: 'reminder',
        trigger: '24h before lesson',
        action: 'Reminder with reschedule option',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'block',
        trigger: '2 lessons left in block',
        action: 'Block-end rebook prompt',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'test',
        trigger: '7 days before test',
        action: 'Test-prep tips and confirmation',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Test marked as passed',
        action: 'Review prompt with referral link',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most schools start with text-back and block reminders.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches calls while instructors are on the road.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds the lesson and block reminder rhythm.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after the pass.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Booking pages feed the same board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful where local discovery is the bottleneck.',
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
      body: 'A school with three instructors runs a normal week. Calls during lessons get text-backs. Block-end reminders run automatically. Test-prep prompts go out one week before each test. Reviews trigger on the pass.',
      observedChange:
        'Before, the same week would have produced four voicemails to chase, two block-end drops, and a quiet review queue. With the layer in place, the diary stays full and the desk has fewer threads to follow.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What school owners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a booking app. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'instructors',
        question: 'Does each instructor see only their own learners?',
        answer: 'Yes — the board respects ownership. Owner sees everything.',
      },
      {
        id: 'sms',
        question: 'Will learners feel spammed?',
        answer: 'Not at the cadence we set. We tune the rhythm to your block length.',
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
      title: 'Show us where the diary actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls, blocks, and test follow-ups sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a school with instructors out on the road.',
    },
  },
};
