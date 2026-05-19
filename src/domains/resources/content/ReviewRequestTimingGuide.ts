import type { ResourceData } from '@/domains/resources/types';

export const reviewRequestTimingGuide: ResourceData = {
  slug: 'review-request-timing-guide',
  title: 'Review Request Timing Guide',
  description:
    'A guide for asking at the right moment so good work has a better chance of becoming visible proof.',
  category: 'reviews-proof',
  publishedAt: '2026-01-18',
  primarySystem: 'reputation-review-systems',
  supportingSystems: ['follow-up-crm', 'local-seo-authority'],
  topics: ['review-generation', 'feedback-loops'],
  primaryService: 'reputation-review-systems',
  seo: {
    title: 'Review Request Timing Guide',
    description: 'Review when feedback and review requests should happen after completed work.',
    canonical: '/resources/review-request-timing-guide',
  },
  sections: [
    {
      type: 'framework',
      heading: 'Ask while the work is still fresh',
      content:
        'The best review moment is close enough to the completed work that the customer still remembers the experience.',
    },
  ],
};
