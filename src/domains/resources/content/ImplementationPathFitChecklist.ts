import type { ResourceData } from '@/domains/resources/types';

export const implementationPathFitChecklist: ResourceData = {
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
};
