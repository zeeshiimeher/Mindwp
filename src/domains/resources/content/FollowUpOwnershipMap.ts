import type { ResourceData } from '@/domains/resources/types';

export const followUpOwnershipMap: ResourceData = {
  slug: 'follow-up-ownership-map',
  title: 'Follow-Up Ownership Map',
  description: 'A simple way to see whether every enquiry has an owner, status, and next step.',
  category: 'follow-up-crm',
  publishedAt: '2026-01-16',
  primarySystem: 'follow-up-crm',
  topics: ['follow-up', 'crm-visibility'],
  primaryService: 'follow-up-crm',
  seo: {
    title: 'Follow-Up Ownership Map',
    description: 'Map ownership, status, and next steps for enquiries and quotes.',
    canonical: '/resources/follow-up-ownership-map',
  },
  sections: [
    {
      type: 'checklist',
      heading: 'Ownership questions',
      items: [
        'Who owns this enquiry today?',
        'What is the current status?',
        'What should happen next, and when?',
      ],
    },
  ],
};
