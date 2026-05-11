import type { IndustryDetailPageData } from '@/domains/industries/types';

export const homeInspectorsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Home Inspectors — Booking, Report, and Referral Systems',
    description:
      'How home inspectors hold inbound bookings from agents and buyers, deliver reports promptly, and stay top-of-mind for referral.',
    canonical: '/industries/real-estate-property-services/home-inspectors',
    openGraph: {
      title: 'Home Inspectors — Booking, Report, and Referral Systems',
      description: 'Bookings, reports, and referrals on one operating layer.',
    },
  },
  slug: 'home-inspectors',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Property · Home Inspectors',
    title: 'A Tuesday inspection. [[muted:And a phone in the field all morning.]]',
    description:
      'Inspectors are out on site. Bookings come in from agents and buyers, often urgent. The leak is between request and confirmation.',
    list: [
      'Bookings confirmed without phone tag',
      'Reports delivered with a clear next step',
      'Agent and buyer follow-ups run automatically',
    ],
  },
  industries: ['home-inspection'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places inspector bookings usually slip',
      description: 'Most inspectors see at least two of these.',
    },
    leaks: [
      {
        id: 'phone-tag',
        leak: 'Bookings get stuck in phone tag',
        state: 'silent',
        observed: 'An agent calls. The inspector is on a roof. They don’t connect that day.',
      },
      {
        id: 'report-delay',
        leak: 'Reports take longer than promised',
        state: 'risk',
        observed: 'A report is delayed. The agent loses confidence.',
      },
      {
        id: 'no-referral',
        leak: 'No nurture for past agents',
        state: 'attention',
        observed: 'A great inspection happens. Nothing keeps the inspector top-of-mind.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'A typical day',
      title: 'How an inspector day moves',
      description: 'Field work in the morning, reports in the afternoon, calls all day.',
    },
    timeline: [
      {
        id: 'open',
        time: '7:00',
        event: 'First inspection on site',
        leakRisk: 'high',
        owner: 'Inspector',
      },
      {
        id: 'morning',
        time: '8:00 — 12:00',
        event: 'Inspections — phone goes to voicemail',
        leakRisk: 'high',
        owner: 'Inspector',
      },
      {
        id: 'lunch',
        time: '12:00',
        event: 'Catch-up: callbacks',
        leakRisk: 'medium',
        owner: 'Inspector',
      },
      {
        id: 'afternoon',
        time: '13:00 — 17:00',
        event: 'Reports + admin',
        leakRisk: 'medium',
        owner: 'Inspector',
      },
      {
        id: 'evening',
        time: '18:00',
        event: 'Tomorrow’s confirmations',
        leakRisk: 'medium',
        owner: 'Inspector',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The schedule, before and after',
      description: 'Same inspector. A different layer behind the phone.',
    },
    before: {
      label: 'Before',
      items: [
        'Bookings stuck in phone tag',
        'Agents wait for confirmation',
        'Reports delayed without status updates',
        'No referral nurture for past agents',
        'Reviews depend on the agent remembering',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Booking requests acknowledged in minutes',
        'Confirmations sent automatically with calendar invite',
        'Report progress shared on cadence',
        'Past-agent nurture runs automatically',
        'Review prompt at the right moment',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold the schedule together',
      description: 'In place, planned, optional.',
    },
    workbench: [
      {
        id: 'first-touch',
        piece: 'Booking acknowledgment',
        state: 'in-place',
        owner: 'AI Lead Handling',
      },
      {
        id: 'confirm',
        piece: 'Inspection confirmation',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'report',
        piece: 'Report delivery + status',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'agent-nurture',
        piece: 'Past-agent nurture',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review',
        piece: 'Post-report review prompt',
        state: 'planned',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'sws',
        piece: 'Booking-page integration',
        state: 'optional',
        owner: 'Smart Website Systems',
      },
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
        id: 'booking',
        fix: 'Acknowledge booking requests in minutes',
        signalIfYou: 'lose enquiries to faster inspectors',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'report',
        fix: 'Share report status without manual updates',
        signalIfYou: 'see agents asking for ETAs',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'agent',
        fix: 'Nurture past agents on cadence',
        signalIfYou: 'see one-off referrals fail to repeat',
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
        id: 'request',
        trigger: 'Booking request',
        action: 'Reply within minutes with options',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'confirm',
        trigger: 'Booking accepted',
        action: 'Confirmation with calendar invite',
        owner: 'CRM & Automation',
        channel: 'Email + SMS',
      },
      {
        id: 'inspection',
        trigger: 'Inspection complete',
        action: 'Status: report in progress',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'report',
        trigger: 'Report ready',
        action: 'Delivery with next-step summary',
        owner: 'CRM & Automation',
        channel: 'Email',
      },
      {
        id: 'review',
        trigger: 'Report delivered',
        action: 'Review prompt + agent nurture entry',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description: 'Most inspectors start with first-touch and confirmation.',
    },
    systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
    relevantSystems: [
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Catches calls while the inspector is on site.',
      },
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds confirmations, report status, and agent nurture.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Reviews trigger after report delivery.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Booking pages feed the same operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful for area-specific authority.',
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
      body: 'A solo inspector runs a normal week. Booking requests get acknowledged in minutes. Confirmations send automatically. Report status updates run on schedule. Reviews trigger after delivery.',
      observedChange:
        'Before, the same week would have had three missed calls becoming lost bookings. With the layer in place, the inspector spends less time on phone tag.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What inspectors usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use inspection software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'agent',
        question: 'Can agents see report progress directly?',
        answer: 'Yes — they get status updates as the report moves through stages.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the inspector?',
        answer: 'Yes — written in the inspector’s voice and reviewed before launch.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the schedule actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where bookings, reports, and referrals sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working inspector.',
    },
  },
};
