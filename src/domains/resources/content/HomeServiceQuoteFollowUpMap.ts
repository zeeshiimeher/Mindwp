import type { ResourceData } from '@/domains/resources/types';

export const homeServiceQuoteFollowUpMap: ResourceData = {
  slug: 'home-service-quote-follow-up-map',
  title: 'Home Service Quote Follow-Up Map',
  description:
    'A framework for checking whether home-service quotes have owner, status, next step, and follow-up timing.',
  category: 'home-services-examples',
  publishedAt: '2026-01-26',
  industries: ['hvac', 'plumbing', 'roofing'],
  primarySystem: 'follow-up-crm',
  supportingSystems: ['lead-response-handling', 'smart-website-systems'],
  topics: ['follow-up', 'crm-visibility', 'service-reminders'],
  primaryService: 'follow-up-crm',
  seo: {
    title: 'Home Service Quote Follow-Up Map',
    description:
      'Check whether home-service quotes have a clear owner, visible status, next step, and follow-up date.',
    canonical: '/resources/home-service-quote-follow-up-map',
  },
  sections: [
    {
      type: 'framework',
      heading: 'Map the quote after the first call',
      content:
        'The quote path should show who owns the conversation, what the current status is, and when the next follow-up should happen.',
    },
    {
      type: 'checklist',
      heading: 'Quote follow-up checks',
      items: [
        'The quote has an owner after the first call or visit.',
        'The current status can be seen without searching messages.',
        'The next follow-up date is set before the conversation goes quiet.',
      ],
    },
  ],
};
