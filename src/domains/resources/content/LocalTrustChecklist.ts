import type { ResourceData } from '@/domains/resources/types';

export const localTrustChecklist: ResourceData = {
  slug: 'local-trust-checklist',
  title: 'Local Trust Checklist',
  description: 'A practical checklist for the signals nearby customers use before they enquire.',
  category: 'local-visibility',
  publishedAt: '2026-01-12',
  primarySystem: 'local-seo-authority',
  supportingSystems: ['reputation-review-systems', 'smart-website-systems'],
  topics: ['local-authority', 'authority-signals'],
  primaryService: 'local-seo-authority',
  seo: {
    title: 'Local Trust Checklist',
    description: 'Review profile accuracy, service-area clarity, reviews, and website proof.',
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
};
