import type { BlogPostData } from '@/domains/blog/types';

export const authoritySignalsForLocalSearch: BlogPostData = {
  seo: {
    title: 'Authority Signals for Local Search',
    description:
      'How local trust signals help nearby customers find and verify a service business.',
    canonical: '/blog/authority-signals-for-local-search',
  },
  slug: 'authority-signals-for-local-search',
  title: 'Authority Signals for Local Search',
  publishDate: '2026-01-12',
  authorKey: 'EDITORIAL',
  category: 'local-visibility',
  industries: [],
  primarySystem: 'local-seo-authority',
  supportingSystems: ['reputation-review-systems'],
  topics: ['local-authority', 'authority-signals'],
  tags: ['Local Visibility', 'Trust Signals', 'Reviews'],
  sections: [
    {
      type: 'introduction',
      content: [
        'Nearby customers do not only need to find the business. They need to believe it is the right one to call.',
        'Local trust is built from details that add up: profile accuracy, service-area clarity, reviews, useful pages, and proof that matches the work.',
      ],
    },
    {
      type: 'content',
      heading: 'Local visibility is a trust problem too',
      content:
        'A business can appear in local search and still lose the enquiry if the profile, website, and reviews do not support each other.',
    },
    {
      type: 'cta',
      heading: 'Check the local trust path',
      content:
        'Review what a nearby customer sees before they decide whether to call, message, or keep looking.',
    },
  ],
};
