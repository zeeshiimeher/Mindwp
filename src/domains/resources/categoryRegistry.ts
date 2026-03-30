export const RESOURCE_CATEGORY_REGISTRY = {
  'crm-automation': { label: 'CRM Automation' },
  'smart-website-systems': { label: 'Smart Website Systems' },
  'ai-lead-handling': { label: 'AI Lead Handling' },
  'local-seo-authority': { label: 'Local Authority & SEO' },
  'reputation-review': { label: 'Reputation & Reviews' },
  'revenue-growth': { label: 'Revenue Growth' },
} as const;

export type ResourceCategory = keyof typeof RESOURCE_CATEGORY_REGISTRY;
