import type { BlogPostData } from '@/domains/blog/types';

export const howHomeServiceQuotesGoColdAfterTheFirstCall: BlogPostData = {
  seo: {
    title: 'How Home Service Quotes Go Cold After the First Call',
    description:
      'Why home service quotes can go quiet when follow-up depends on memory after the first call.',
    canonical: '/blog/how-home-service-quotes-go-cold-after-the-first-call',
  },
  slug: 'how-home-service-quotes-go-cold-after-the-first-call',
  title: 'How Home Service Quotes Go Cold After the First Call',
  publishDate: '2026-01-26',
  authorKey: 'INDUSTRY',
  category: 'home-services-examples',
  industries: ['hvac', 'plumbing', 'roofing'],
  primarySystem: 'follow-up-crm',
  supportingSystems: ['lead-response-handling', 'smart-website-systems'],
  topics: ['follow-up', 'crm-visibility', 'service-reminders'],
  tags: ['Home Services', 'Quote Follow-Up', 'Enquiry Ownership'],
  sections: [
    {
      type: 'introduction',
      content: [
        'For a home service business, the first call is only part of the path.',
        'The quote may be sent and the customer may still be interested, but the work can slip away when nobody owns the next step.',
      ],
    },
    {
      type: 'content',
      heading: 'The quote needs status, owner, and timing',
      content:
        'Follow-up gets weaker when quotes live in inboxes, notebooks, or memory. A simple status and next-step date make it easier to see which conversations still need attention.',
    },
    {
      type: 'checklist',
      heading: 'What to look for',
      items: [
        'Every quote has an owner after the first call.',
        'The current status is visible without asking around.',
        'The follow-up date is clear before the quote goes cold.',
      ],
    },
    {
      type: 'cta',
      heading: 'Map the quote follow-up gap',
      content:
        'Check where quotes sit after the first call and whether the next step depends on memory.',
    },
  ],
};
