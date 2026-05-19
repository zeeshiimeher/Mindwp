import type { BlogPostData } from '@/domains/blog/types';

export const leadResponseTimeForServiceBusinesses: BlogPostData = {
  seo: {
    title: 'Lead Response Time for Service Businesses',
    description:
      'Why calls, forms, and messages need a clear response path before enquiries go cold.',
    canonical: '/blog/lead-response-time-for-service-businesses',
  },
  slug: 'lead-response-time-for-service-businesses',
  title: 'Lead Response Time for Service Businesses',
  publishDate: '2026-01-14',
  authorKey: 'EDITORIAL',
  category: 'lead-response',
  industries: [],
  primarySystem: 'lead-response-handling',
  topics: ['lead-response-time', 'missed-calls'],
  tags: ['Lead Response', 'Missed Calls', 'Enquiry Routing'],
  sections: [
    {
      type: 'introduction',
      content: [
        'When someone reaches out to a service business, they are usually trying to solve a real problem.',
        'A slow reply gives that enquiry time to cool down, repeat the search, or call the next business.',
      ],
    },
    {
      type: 'content',
      heading: 'Fast response starts with routing',
      content:
        'The important question is not whether someone can answer every call. It is whether calls, forms, and messages move into a response path instead of disappearing.',
    },
    {
      type: 'cta',
      heading: 'Check the response path',
      content:
        'Look at what happens after a missed call, form, or message arrives. That is usually where the delay starts.',
    },
  ],
};
