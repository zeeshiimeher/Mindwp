export const BLOG_CATEGORY_REGISTRY = {
  'website-clarity': {
    id: 'website-clarity',
    label: 'Website Clarity',
    slug: 'website-clarity',
    description: 'Articles about clearer service pages, enquiry paths, and website trust.',
  },
  'local-visibility': {
    id: 'local-visibility',
    label: 'Local Visibility',
    slug: 'local-visibility',
    description: 'Articles about nearby customers finding, checking, and trusting a business.',
  },
  'lead-response': {
    id: 'lead-response',
    label: 'Lead Response',
    slug: 'lead-response',
    description: 'Articles about calls, forms, messages, response paths, and enquiry routing.',
  },
  'follow-up-crm': {
    id: 'follow-up-crm',
    label: 'Follow-Up & CRM',
    slug: 'follow-up-crm',
    description:
      'Articles about enquiry ownership, next steps, quote follow-up, and visible status.',
  },
  'reviews-proof': {
    id: 'reviews-proof',
    label: 'Reviews & Proof',
    slug: 'reviews-proof',
    description:
      'Articles about review timing, feedback routing, trust signals, and proof capture.',
  },
  'implementation-services': {
    id: 'implementation-services',
    label: 'Implementation Services',
    slug: 'implementation-services',
    description:
      'Articles about practical website implementation paths under Smart Website Systems.',
  },
  'industry-examples': {
    id: 'industry-examples',
    label: 'Industry Examples',
    slug: 'industry-examples',
    description: 'Industry-specific examples for service businesses.',
  },
  frameworks: {
    id: 'frameworks',
    label: 'Frameworks',
    slug: 'frameworks',
    description: 'Frameworks and decision guides for improving website and enquiry handling.',
  },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORY_REGISTRY;
