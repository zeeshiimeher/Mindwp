export const RESOURCE_CATEGORY_REGISTRY = {
  'website-clarity': { label: 'Website Clarity' },
  'local-visibility': { label: 'Local Visibility' },
  'lead-response': { label: 'Lead Response' },
  'follow-up-crm': { label: 'Follow-Up & CRM' },
  'reviews-proof': { label: 'Reviews & Proof' },
  'implementation-services': { label: 'Implementation Services' },
  'industry-examples': { label: 'Industry Examples' },
  frameworks: { label: 'Frameworks' },
} as const;

export type ResourceCategory = keyof typeof RESOURCE_CATEGORY_REGISTRY;
