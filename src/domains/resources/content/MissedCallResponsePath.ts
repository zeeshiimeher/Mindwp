import type { ResourceData } from '@/domains/resources/types';

export const missedCallResponsePath: ResourceData = {
  slug: 'missed-call-response-path',
  title: 'Missed Call Response Path',
  description:
    'A framework for checking what happens when a service business cannot answer the phone.',
  category: 'lead-response',
  publishedAt: '2026-01-14',
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm'],
  topics: ['missed-calls', 'lead-response-time'],
  primaryService: 'lead-response-handling',
  seo: {
    title: 'Missed Call Response Path',
    description: 'Review what happens after missed calls, forms, and messages arrive.',
    canonical: '/resources/missed-call-response-path',
  },
  sections: [
    {
      type: 'framework',
      heading: 'The call still needs a next step',
      content:
        'A missed call should create a visible callback task, not disappear into a phone log.',
    },
    {
      type: 'steps',
      heading: 'Simple response path',
      steps: [
        {
          label: 'Acknowledge',
          description: 'Confirm the business saw the enquiry.',
        },
        {
          label: 'Route',
          description: 'Send it to the person who owns the next step.',
        },
        {
          label: 'Track',
          description: 'Keep the status visible until the call is handled.',
        },
      ],
    },
  ],
};
