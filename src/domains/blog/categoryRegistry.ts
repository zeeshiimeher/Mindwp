export const BLOG_CATEGORY_REGISTRY = {
  'smart-website-systems': {
    id: 'smart-website-systems',
    label: 'Smart Website Systems',
    slug: 'smart-website-systems',
    description:
      'Articles about system-first website architecture, conversion structure, and infrastructure-led web strategy.',
  },
  'ai-lead-handling': {
    id: 'ai-lead-handling',
    label: 'AI Lead Handling',
    slug: 'ai-lead-handling',
    description:
      'Articles about lead response automation, missed-call recovery, qualification systems, and AI-assisted communication.',
  },
  'local-authority-seo': {
    id: 'local-authority-seo',
    label: 'Local Authority SEO',
    slug: 'local-authority-seo',
    description:
      'Articles about local visibility, authority signals, search positioning, and search ecosystem changes.',
  },
  'crm-automation': {
    id: 'crm-automation',
    label: 'CRM Automation',
    slug: 'crm-automation',
    description:
      'Articles about CRM workflows, automation systems, lifecycle tracking, and operational visibility.',
  },
  'reputation-review': {
    id: 'reputation-review',
    label: 'Reputation Review',
    slug: 'reputation-review',
    description:
      'Articles about review systems, trust signals, reputation workflows, and review-driven authority.',
  },
  'home-services-industry': {
    id: 'home-services-industry',
    label: 'Home Services Industry',
    slug: 'home-services-industry',
    description:
      'Industry-specific blog posts for roofing, HVAC, plumbing, and related home service businesses.',
  },
  'beauty-personal-care-industry': {
    id: 'beauty-personal-care-industry',
    label: 'Beauty Personal Care Industry',
    slug: 'beauty-personal-care-industry',
    description:
      'Industry-specific blog posts for salons, clinics, med spas, and beauty-led appointment businesses.',
  },
  'future-local-business-tech': {
    id: 'future-local-business-tech',
    label: 'Future Local Business Tech',
    slug: 'future-local-business-tech',
    description:
      'Articles about emerging operational technology, AI shifts, and the future infrastructure of local business growth.',
  },
} as const;

export type BlogCategory = keyof typeof BLOG_CATEGORY_REGISTRY;
