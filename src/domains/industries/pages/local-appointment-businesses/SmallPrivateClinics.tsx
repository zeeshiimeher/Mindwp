import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallPrivateClinicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Private Clinics Systems',
    description:
      'Holding structure for small private clinics: enquiry capture, fast response, follow-up ownership, and local trust.',
    canonical: '/industries/local-appointment-businesses/small-private-clinics',
    openGraph: {
      title: 'Small Private Clinics Systems',
      description: 'Enquiry handling, follow-up, and trust structure for small private clinics.',
    },
  },
  slug: 'small-private-clinics',
  type: 'detail',
  parentSlug: 'local-appointment-businesses',
  hero: {
    badge: 'Private Clinics',
    title: 'Small Private Clinics [[muted:systems that keep enquiries moving]]',
    description:
      'Show where enquiries arrive, where they stall, and which system needs an owner first.',
    list: [
      'Missed calls are recovered',
      'Enquiries are sorted by intent',
      'Follow-up has a visible owner',
    ],
  },
  industries: ['private-clinic'],
  systems: [
    'smart-website-systems',
    'ai-lead-handling',
    'crm-automation',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['follow-up', 'review-generation', 'booking-systems'],
  industryPattern: {
    header: {
      kicker: 'Leak Pattern',
      title: 'Small Private Clinics leak pattern',
      description:
        'Show the exact points where small private clinics lose enquiries, bookings, quotes, or trust.',
    },
    items: ['First reply', 'Qualification', 'Follow-up'],
  },
  leakTimeline: {
    header: {
      kicker: 'Timeline',
      title: 'Where the working day loses momentum',
      description:
        'Map the moments from first contact through booking, handoff, follow-up, and review request.',
    },
  },
  beforeAfter: {
    header: {
      kicker: 'Operating State',
      title: 'Before and after the system is owned',
      description:
        'Contrast the current drift with a clearer state where enquiries have a next action.',
    },
  },
  workbench: {
    header: {
      kicker: 'Workbench',
      title: 'What gets put in place',
      description:
        'List the practical pieces to show: capture, response, routing, follow-up, and proof.',
    },
  },
  startingPoints: {
    header: {
      kicker: 'Starting Points',
      title: 'Where to start first',
      description:
        'Help the reader choose the first fix without turning the page into a service menu.',
    },
  },
  workflowExamples: {
    header: {
      kicker: 'Examples',
      title: 'Trigger, action, owner examples',
      description:
        'Show a small board of events, next actions, and responsibility for this business type.',
    },
  },
  relevantSystems: {
    header: {
      kicker: 'Relevant Systems',
      title: 'Systems most likely to matter',
      description: 'Connect the page to the systems that solve this specific leak pattern.',
    },
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
  },
  scenario: {
    header: {
      kicker: 'Scenario',
      title: 'A plain scenario for this business type',
      description:
        'Use one realistic operational example without implying fake client proof or guaranteed results.',
    },
  },
  faq: {
    header: {
      kicker: 'FAQ',
      title: 'Questions about small private clinics systems',
      description:
        'Use answers to clarify fit, starting point, and what changes after the first build.',
    },
    items: [
      {
        id: 'first-fix',
        question: 'What should this page help decide?',
        answer:
          'It should help the reader identify where enquiries are being lost and which system should be fixed first.',
      },
      {
        id: 'proof',
        question: 'Can this page use results or proof?',
        answer:
          'Only when the proof is real. Scenario examples must stay clearly illustrative and honest.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Show us where small private clinics enquiries slip',
      description:
        'Tell us what happens between first contact and booked work. We will map the weak points before recommending a build.',
    },
    expectations: [
      { num: '1', text: 'A short read of the current contact paths' },
      { num: '2', text: 'The system most likely to fix the first leak' },
      { num: '3', text: 'A clear next move if the fit is right' },
    ],
    reassurance: {
      noSell: 'No generic pitch. Just the parts that need a clearer owner.',
      tone: 'Quiet, direct, and specific to how the business runs.',
    },
  },
};
