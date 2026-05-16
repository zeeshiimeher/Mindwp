import type { BlogPostData } from '@/domains/blog/types';

export const BLOG_POSTS: Record<string, BlogPostData> = {
  'why-service-business-websites-fail-to-convert': {
    seo: {
      title: 'Why Service Business Websites Fail to Convert',
      description:
        'Why service business websites lose enquiries when the offer is unclear and the next step is weak.',
      canonical: '/blog/why-service-business-websites-fail-to-convert',
    },
    slug: 'why-service-business-websites-fail-to-convert',
    title: 'Why Service Business Websites Fail to Convert',
    publishDate: '2026-01-10',
    authorKey: 'EDITORIAL',
    category: 'website-clarity',
    industries: [],
    primarySystem: 'smart-website-systems',
    topics: ['service-page-architecture', 'lead-capture'],
    tags: ['Website Clarity', 'Service Pages', 'Enquiry Flow'],
    sections: [
      {
        type: 'introduction',
        content: [
          'A service business can have a decent-looking website and still lose good enquiries.',
          'The problem usually appears after the visitor arrives: unclear service pages, weak proof, vague next steps, and forms that do not feel worth filling in.',
        ],
      },
      {
        type: 'content',
        heading: 'The website has to carry the handoff',
        content:
          'The page should help the visitor understand the service, trust the business, and know what happens after they make contact. If that path is weak, the enquiry never reaches the team.',
      },
      {
        type: 'takeaways',
        heading: 'What to check first',
        items: [
          'Can a visitor tell what service fits their problem?',
          'Does the page show enough trust before asking for action?',
          'Does the enquiry land somewhere useful?',
        ],
      },
      {
        type: 'cta',
        heading: 'Review the page before rebuilding it',
        content:
          'If the website gets visits but not enough useful enquiries, start by reviewing the offer clarity and enquiry path.',
      },
    ],
  },
  'authority-signals-for-local-search': {
    seo: {
      title: 'Authority Signals for Local Search',
      description:
        'How local trust signals help nearby customers find and verify a service business.',
      canonical: '/blog/authority-signals-for-local-search',
    },
    slug: 'authority-signals-for-local-search',
    title: 'Authority Signals for Local Search',
    publishDate: '2026-01-12',
    authorKey: 'EDITORIAL',
    category: 'local-visibility',
    industries: [],
    primarySystem: 'local-seo-authority',
    supportingSystems: ['reputation-review-systems'],
    topics: ['local-authority', 'authority-signals'],
    tags: ['Local Visibility', 'Trust Signals', 'Reviews'],
    sections: [
      {
        type: 'introduction',
        content: [
          'Nearby customers do not only need to find the business. They need to believe it is the right one to call.',
          'Local trust is built from details that add up: profile accuracy, service-area clarity, reviews, useful pages, and proof that matches the work.',
        ],
      },
      {
        type: 'content',
        heading: 'Local visibility is a trust problem too',
        content:
          'A business can appear in local search and still lose the enquiry if the profile, website, and reviews do not support each other.',
      },
      {
        type: 'cta',
        heading: 'Check the local trust path',
        content:
          'Review what a nearby customer sees before they decide whether to call, message, or keep looking.',
      },
    ],
  },
  'lead-response-time-for-service-businesses': {
    seo: {
      title: 'Lead Response Time for Service Businesses',
      description:
        'Why calls, forms, and messages need a clear response path before enquiries go cold.',
      canonical: '/blog/lead-response-time-for-service-businesses',
    },
    slug: 'lead-response-time-for-service-businesses',
    title: 'Lead Response Time for Service Businesses',
    publishDate: '2026-01-14',
    authorKey: 'EDITORIAL',
    category: 'lead-response',
    industries: [],
    primarySystem: 'lead-response-handling',
    topics: ['lead-response-time', 'missed-calls'],
    tags: ['Lead Response', 'Missed Calls', 'Enquiry Routing'],
    sections: [
      {
        type: 'introduction',
        content: [
          'When someone reaches out to a service business, they are usually trying to solve a real problem.',
          'A slow reply gives that enquiry time to cool down, repeat the search, or call the next business.',
        ],
      },
      {
        type: 'content',
        heading: 'Fast response starts with routing',
        content:
          'The important question is not whether someone can answer every call. It is whether calls, forms, and messages move into a response path instead of disappearing.',
      },
      {
        type: 'cta',
        heading: 'Check the response path',
        content:
          'Look at what happens after a missed call, form, or message arrives. That is usually where the delay starts.',
      },
    ],
  },
  'roofing-estimate-follow-up-delays': {
    seo: {
      title: 'Roofing Estimate Follow-Up Delays',
      description:
        'Why roofing quotes go quiet when follow-up depends on memory and busy weeks.',
      canonical: '/blog/roofing-estimate-follow-up-delays',
    },
    slug: 'roofing-estimate-follow-up-delays',
    title: 'Roofing Estimate Follow-Up Delays',
    publishDate: '2026-01-16',
    authorKey: 'INDUSTRY',
    category: 'industry-examples',
    industries: ['roofing'],
    primarySystem: 'follow-up-crm',
    supportingSystems: ['lead-response-handling'],
    topics: ['follow-up', 'crm-visibility'],
    tags: ['Roofing', 'Quote Follow-Up', 'Enquiry Ownership'],
    sections: [
      {
        type: 'introduction',
        content: [
          'Roofing quotes often go quiet after the site visit.',
          'The estimate was sent. The team moved onto the next job. Nobody knows whether the homeowner read it, had a question, or chose someone else.',
        ],
      },
      {
        type: 'content',
        heading: 'The quote needs an owner',
        content:
          'Follow-up works better when every estimate has a status, an owner, and a next step. Otherwise the owner is left remembering which conversations matter.',
      },
      {
        type: 'cta',
        heading: 'Map the quote follow-up gap',
        content:
          'Review where roofing estimates sit after they are sent and what should happen before they go cold.',
      },
    ],
  },
  'customer-feedback-loop-framework-for-service-businesses': {
    seo: {
      title: 'Customer Feedback Loop for Service Businesses',
      description:
        'How feedback and review timing help good work become visible proof without fake claims.',
      canonical: '/blog/customer-feedback-loop-framework-for-service-businesses',
    },
    slug: 'customer-feedback-loop-framework-for-service-businesses',
    title: 'Customer Feedback Loop for Service Businesses',
    publishDate: '2026-01-18',
    authorKey: 'EDITORIAL',
    category: 'reviews-proof',
    industries: [],
    primarySystem: 'reputation-review-systems',
    topics: ['feedback-loops', 'review-generation'],
    tags: ['Reviews', 'Feedback', 'Proof'],
    sections: [
      {
        type: 'introduction',
        content: [
          'Good work does not always become public proof.',
          'The job finishes, the customer is happy, and then the moment passes before anyone asks for feedback or a review.',
        ],
      },
      {
        type: 'content',
        heading: 'Timing makes the difference',
        content:
          'A feedback loop works when the request happens close to the completed work and the team can see whether the customer was happy, unsure, or frustrated.',
      },
      {
        type: 'cta',
        heading: 'Review the proof path',
        content:
          'Look at what happens after completed work and whether happy customers are being asked at the right time.',
      },
    ],
  },
  'service-page-architecture-for-service-businesses': {
    seo: {
      title: 'Service Page Architecture for Service Businesses',
      description:
        'How service pages help visitors understand the offer, trust the business, and take the next step.',
      canonical: '/blog/service-page-architecture-for-service-businesses',
    },
    slug: 'service-page-architecture-for-service-businesses',
    title: 'Service Page Architecture for Service Businesses',
    publishDate: '2026-01-20',
    authorKey: 'EDITORIAL',
    category: 'website-clarity',
    industries: [],
    primarySystem: 'smart-website-systems',
    topics: ['service-page-architecture', 'service-pages'],
    tags: ['Service Pages', 'Website Clarity', 'Enquiry Capture'],
    sections: [
      {
        type: 'introduction',
        content: [
          'A service page has one practical job: help the right visitor decide whether to enquire.',
          'That means clarity, proof, fit, and a next step. It does not mean stuffing every service detail onto one page.',
        ],
      },
      {
        type: 'content',
        heading: 'A strong service page narrows the decision',
        content:
          'The visitor should know what the service covers, who it fits, what will happen next, and why the business can be trusted.',
      },
      {
        type: 'cta',
        heading: 'Check the service-page path',
        content:
          'Review whether each important service page helps the visitor move from recognition to enquiry.',
      },
    ],
  },
};

export const blogPosts = Object.values(BLOG_POSTS);
