import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const automotiveServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Automotive Services Systems',
    description:
      'Holding structure for automotive service teams: enquiry capture, fast response, follow-up ownership, and local trust.',
    canonical: '/industries/automotive-services',
    openGraph: {
      title: 'Automotive Services Systems',
      description: 'Enquiry handling, follow-up, and trust structure for automotive service teams.',
    },
  },
  slug: 'automotive-services',
  type: 'category',
  category: 'automotive-services',
  hero: {
    badge: 'Automotive Services',
    title: 'Automotive Services [[muted:systems that keep enquiries moving]]',
    description:
      'Show where enquiries arrive, where they stall, and which system needs an owner first.',
    list: [
      'Calls, forms, and messages land with an owner',
      'Follow-up is visible before the next busy spell',
      'Reviews and local proof support the next enquiry',
    ],
  },
  industries: ['auto-repair', 'body-shop', 'car-detailing', 'mobile-mechanic'],
  systems: [
    'smart-website-systems',
    'ai-lead-handling',
    'crm-automation',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'missed-calls', 'review-generation', 'booking-systems'],
  categoryLeaks: {
    header: {
      kicker: 'Leak Map',
      title: 'Where automotive services enquiries slip',
      description:
        'Name the contact paths, handoffs, and follow-up points that commonly go quiet across automotive service teams.',
    },
    items: ['Missed calls', 'Slow reply', 'Unowned follow-up'],
  },
  sharedPattern: {
    header: {
      kicker: 'Shared Pattern',
      title: 'How automotive services work usually moves',
      description:
        'Show the common route from first enquiry to booked work, quote, or appointment.',
    },
  },
  breakpoints: {
    header: {
      kicker: 'Breakpoints',
      title: 'Moments that need a clearer owner',
      description:
        'Separate the points that need instant response, human decision, or later follow-up.',
    },
  },
  operatingModels: {
    header: {
      kicker: 'Operating Models',
      title: 'Different ways automotive service teams receive demand',
      description:
        'Compare urgent calls, planned bookings, quote requests, and review-led trust signals.',
    },
  },
  pathwayMap: {
    header: {
      kicker: 'Pathway Map',
      title: 'How a visitor chooses the closest route',
      description:
        'Make the category page help people recognise the business type they actually run.',
    },
  },
  startingSystems: {
    header: {
      kicker: 'Starting Systems',
      title: 'The first systems to inspect',
      description:
        'Use the page to decide whether the leak begins with visibility, response, follow-up, reviews, or repeat work.',
    },
    systems: [
      'smart-website-systems',
      'ai-lead-handling',
      'crm-automation',
      'reputation-review',
      'local-seo-authority',
    ],
  },
  detailRoutes: {
    header: {
      kicker: 'Industry Routes',
      title: 'Choose the closest business type',
      description:
        'Route visitors into the detail page that matches the way work is booked and handled.',
    },
    routes: [
      {
        title: 'Auto Repair',
        href: '/industries/automotive-services/auto-repair',
        description: 'Diagnostics, estimates, and booking handoff.',
      },
      {
        title: 'Body Shops',
        href: '/industries/automotive-services/body-shops',
        description: 'Assessment requests, photos, estimates, and follow-up.',
      },
      {
        title: 'Car Detailing',
        href: '/industries/automotive-services/car-detailing',
        description: 'Package clarity, booking flow, and repeat visits.',
      },
      {
        title: 'Mobile Mechanics',
        href: '/industries/automotive-services/mobile-mechanics',
        description: 'Service-area fit, call recovery, and booking handoff.',
      },
    ],
  },
  handledState: {
    header: {
      kicker: 'Handled State',
      title: 'What changes when the gaps are owned',
      description:
        'Describe the calmer state: enquiries are seen, assigned, followed up, and supported by trust signals.',
    },
  },
  scenarioStrip: {
    header: {
      kicker: 'Scenario',
      title: 'A plain example for this category',
      description:
        'Use one honest category scenario to show the system working without fake results or guarantee claims.',
    },
  },
  faq: {
    header: {
      kicker: 'FAQ',
      title: 'Questions about automotive services systems',
      description: 'Use answers to qualify fit and point visitors toward the right detail page.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this for every business in the category?',
        answer:
          'No. The final page should help visitors find the closest business type before they ask for help.',
      },
      {
        id: 'starting-point',
        question: 'Which system usually comes first?',
        answer:
          'The first system depends on where enquiries are being lost: visibility, response, follow-up, reviews, or repeat work.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Show us where automotive services enquiries slip',
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
