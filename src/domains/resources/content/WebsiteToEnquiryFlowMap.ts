import type { ResourceData } from '@/domains/resources/types';

export const websiteToEnquiryFlowMap: ResourceData = {
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
    description: 'Check whether service pages create clarity, trust, and a useful enquiry handoff.',
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
};
