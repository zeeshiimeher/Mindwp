import type { ResourceData } from '@/domains/resources/types';

export const RESOURCE_REGISTRY: Record<string, ResourceData> = {
  'website-to-enquiry-flow-map': {
    slug: 'website-to-enquiry-flow-map',
    title: 'Website to Enquiry Flow Map',
    description:
      'A simple framework for checking whether the website explains the service and sends enquiries to the right next step.',
    category: 'frameworks',
    publishedAt: '2026-01-10',
    primarySystem: 'smart-website-systems',
    supportingSystems: ['lead-response-handling', 'follow-up-crm'],
    topics: ['service-page-architecture', 'lead-capture'],
    primaryService: 'smart-website-systems',
    seo: {
      title: 'Website to Enquiry Flow Map',
      description:
        'Check whether service pages create clarity, trust, and a useful enquiry handoff.',
      canonical: '/resources/website-to-enquiry-flow-map',
    },
    sections: [
      {
        type: 'framework',
        heading: 'Map the visible path first',
        content: [
          'Start with what a visitor sees: the service page, proof, form, phone number, and confirmation path.',
          'Then check what happens after contact. The enquiry should land somewhere useful with enough context for a fast next step.',
        ],
      },
      {
        type: 'checklist',
        heading: 'What to check',
        items: [
          'The service is clear without a call first.',
          'Proof appears before the strongest CTA.',
          'The form or call path has an owner after submission.',
        ],
      },
    ],
  },
  'local-trust-checklist': {
    slug: 'local-trust-checklist',
    title: 'Local Trust Checklist',
    description:
      'A practical checklist for the signals nearby customers use before they enquire.',
    category: 'local-visibility',
    publishedAt: '2026-01-12',
    primarySystem: 'local-seo-authority',
    supportingSystems: ['reputation-review-systems', 'smart-website-systems'],
    topics: ['local-authority', 'authority-signals'],
    primaryService: 'local-seo-authority',
    seo: {
      title: 'Local Trust Checklist',
      description:
        'Review profile accuracy, service-area clarity, reviews, and website proof.',
      canonical: '/resources/local-trust-checklist',
    },
    sections: [
      {
        type: 'checklist',
        heading: 'Trust signals to inspect',
        items: [
          'Business details match across important public listings.',
          'Service areas and core services are easy to verify.',
          'Reviews and website proof support the same story.',
        ],
      },
    ],
  },
  'missed-call-response-path': {
    slug: 'missed-call-response-path',
    title: 'Missed Call Response Path',
    description:
      'A framework for checking what happens when a service business cannot answer the phone.',
    category: 'lead-response',
    publishedAt: '2026-01-14',
    primarySystem: 'lead-response-handling',
    supportingSystems: ['follow-up-crm'],
    topics: ['missed-calls', 'lead-response-time'],
    primaryService: 'lead-response-handling',
    seo: {
      title: 'Missed Call Response Path',
      description:
        'Review what happens after missed calls, forms, and messages arrive.',
      canonical: '/resources/missed-call-response-path',
    },
    sections: [
      {
        type: 'framework',
        heading: 'The call still needs a next step',
        content:
          'A missed call should create a visible callback task, not disappear into a phone log.',
      },
      {
        type: 'steps',
        heading: 'Simple response path',
        steps: [
          { label: 'Acknowledge', description: 'Confirm the business saw the enquiry.' },
          { label: 'Route', description: 'Send it to the person who owns the next step.' },
          { label: 'Track', description: 'Keep the status visible until the call is handled.' },
        ],
      },
    ],
  },
  'follow-up-ownership-map': {
    slug: 'follow-up-ownership-map',
    title: 'Follow-Up Ownership Map',
    description:
      'A simple way to see whether every enquiry has an owner, status, and next step.',
    category: 'follow-up-crm',
    publishedAt: '2026-01-16',
    primarySystem: 'follow-up-crm',
    topics: ['follow-up', 'crm-visibility'],
    primaryService: 'follow-up-crm',
    seo: {
      title: 'Follow-Up Ownership Map',
      description:
        'Map ownership, status, and next steps for enquiries and quotes.',
      canonical: '/resources/follow-up-ownership-map',
    },
    sections: [
      {
        type: 'checklist',
        heading: 'Ownership questions',
        items: [
          'Who owns this enquiry today?',
          'What is the current status?',
          'What should happen next, and when?',
        ],
      },
    ],
  },
  'review-request-timing-guide': {
    slug: 'review-request-timing-guide',
    title: 'Review Request Timing Guide',
    description:
      'A guide for asking at the right moment so good work has a better chance of becoming visible proof.',
    category: 'reviews-proof',
    publishedAt: '2026-01-18',
    primarySystem: 'reputation-review-systems',
    supportingSystems: ['follow-up-crm', 'local-seo-authority'],
    topics: ['review-generation', 'feedback-loops'],
    primaryService: 'reputation-review-systems',
    seo: {
      title: 'Review Request Timing Guide',
      description:
        'Review when feedback and review requests should happen after completed work.',
      canonical: '/resources/review-request-timing-guide',
    },
    sections: [
      {
        type: 'framework',
        heading: 'Ask while the work is still fresh',
        content:
          'The best review moment is close enough to the completed work that the customer still remembers the experience.',
      },
    ],
  },
  'implementation-path-fit-checklist': {
    slug: 'implementation-path-fit-checklist',
    title: 'Implementation Path Fit Checklist',
    description:
      'A checklist for choosing a website implementation path under Smart Website Systems.',
    category: 'implementation-services',
    publishedAt: '2026-01-20',
    primarySystem: 'smart-website-systems',
    topics: ['systems-first-websites', 'service-page-architecture'],
    primaryService: 'smart-website-systems',
    seo: {
      title: 'Implementation Path Fit Checklist',
      description:
        'Choose a website implementation path based on clarity, editing, performance, and enquiry handoff.',
      canonical: '/resources/implementation-path-fit-checklist',
    },
    sections: [
      {
        type: 'checklist',
        heading: 'Choose by business fit',
        items: [
          'The team can maintain the parts they need to edit.',
          'The build supports clear service pages and proof.',
          'The enquiry handoff is planned before launch.',
        ],
      },
    ],
  },
};

export const resources = Object.values(RESOURCE_REGISTRY);
