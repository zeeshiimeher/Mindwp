export const BLOG_CATEGORY_REGISTRY = {
  'website-clarity': {
    id: 'website-clarity',
    label: 'Website Clarity',
    slug: 'website-clarity',
    description:
      'Articles and guides about clearer service, treatment, or procedure pages, trust signals, enquiry or booking paths, and website front-door clarity.',
  },
  'local-visibility': {
    id: 'local-visibility',
    label: 'Local Visibility',
    slug: 'local-visibility',
    description:
      'Articles and guides about nearby customers or patients finding, checking, and trusting a business, clinic, or practice.',
  },
  'lead-response': {
    id: 'lead-response',
    label: 'Lead Response',
    slug: 'lead-response',
    description:
      'Articles and guides about calls, forms, messages, booking requests, consultation requests, response paths, and enquiry routing.',
  },
  'follow-up-crm': {
    id: 'follow-up-crm',
    label: 'Follow-Up & CRM',
    slug: 'follow-up-crm',
    description:
      'Articles and guides about ownership, next steps, quote follow-up, consultation follow-up, reminders, and visible status.',
  },
  'reviews-proof': {
    id: 'reviews-proof',
    label: 'Reviews & Proof',
    slug: 'reviews-proof',
    description:
      'Articles and guides about review timing, feedback routing, trust signals, public proof, and completed work or patient experience becoming visible.',
  },
  'implementation-services': {
    id: 'implementation-services',
    label: 'Implementation Services',
    slug: 'implementation-services',
    description:
      'Articles and guides about practical website implementation paths under Smart Website Systems.',
  },
  'home-services-examples': {
    id: 'home-services-examples',
    label: 'Home Services Examples',
    slug: 'home-services-examples',
    description:
      'Home-service examples showing how website clarity, local trust, enquiries, quotes, follow-up, reviews, and proof work in real service-business conditions.',
  },
  'healthcare-practice-examples': {
    id: 'healthcare-practice-examples',
    label: 'Healthcare Practice Examples',
    slug: 'healthcare-practice-examples',
    description:
      'Specialist-clinic and private-practice examples where the website acts as the practice front door for patient trust, service/treatment clarity, booking, consultation follow-up, reviews, and proof.',
  },
  frameworks: {
    id: 'frameworks',
    label: 'Frameworks',
    slug: 'frameworks',
    description:
      'Frameworks, maps, checklists, and decision guides for understanding what should be fixed first.',
  },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORY_REGISTRY;
