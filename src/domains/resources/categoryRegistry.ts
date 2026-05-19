export const RESOURCE_CATEGORY_REGISTRY = {
  'website-clarity': {
    label: 'Website Clarity',
    description:
      'Articles and guides about clearer service, treatment, or procedure pages, trust signals, enquiry or booking paths, and website front-door clarity.',
  },
  'local-visibility': {
    label: 'Local Visibility',
    description:
      'Articles and guides about nearby customers or patients finding, checking, and trusting a business, clinic, or practice.',
  },
  'lead-response': {
    label: 'Lead Response',
    description:
      'Articles and guides about calls, forms, messages, booking requests, consultation requests, response paths, and enquiry routing.',
  },
  'follow-up-crm': {
    label: 'Follow-Up & CRM',
    description:
      'Articles and guides about ownership, next steps, quote follow-up, consultation follow-up, reminders, and visible status.',
  },
  'reviews-proof': {
    label: 'Reviews & Proof',
    description:
      'Articles and guides about review timing, feedback routing, trust signals, public proof, and completed work or patient experience becoming visible.',
  },
  'implementation-services': {
    label: 'Implementation Services',
    description:
      'Articles and guides about practical website implementation paths under Smart Website Systems.',
  },
  'home-services-examples': {
    label: 'Home Services Examples',
    description:
      'Home-service examples showing how website clarity, local trust, enquiries, quotes, follow-up, reviews, and proof work in real service-business conditions.',
  },
  'healthcare-practice-examples': {
    label: 'Healthcare Practice Examples',
    description:
      'Specialist-clinic and private-practice examples where the website acts as the practice front door for patient trust, service/treatment clarity, booking, consultation follow-up, reviews, and proof.',
  },
  frameworks: {
    label: 'Frameworks',
    description:
      'Frameworks, maps, checklists, and decision guides for understanding what should be fixed first.',
  },
} as const;

export type ResourceCategory = keyof typeof RESOURCE_CATEGORY_REGISTRY;
