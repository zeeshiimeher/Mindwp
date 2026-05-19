import type { BlogPostData } from '@/domains/blog/types';

export const roofingEstimateFollowUpDelays: BlogPostData = {
  seo: {
    title: 'Roofing Estimate Follow-Up Delays',
    description: 'Why roofing quotes go quiet when follow-up depends on memory and busy weeks.',
    canonical: '/blog/roofing-estimate-follow-up-delays',
  },
  slug: 'roofing-estimate-follow-up-delays',
  title: 'Roofing Estimate Follow-Up Delays',
  publishDate: '2026-01-16',
  authorKey: 'INDUSTRY',
  category: 'home-services-examples',
  industries: ['roofing'],
  primarySystem: 'follow-up-crm',
  supportingSystems: ['lead-response-handling'],
  topics: ['follow-up', 'crm-visibility'],
  tags: ['Roofing', 'Quote Follow-Up', 'Enquiry Ownership'],
  sections: [
    {
      type: 'introduction',
      content: [
        'Roofing quotes often go quiet after the site visit.',
        'The estimate was sent. The team moved onto the next job. Nobody knows whether the homeowner read it, had a question, or chose someone else.',
      ],
    },
    {
      type: 'content',
      heading: 'The quote needs an owner',
      content:
        'Follow-up works better when every estimate has a status, an owner, and a next step. Otherwise the owner is left remembering which conversations matter.',
    },
    {
      type: 'cta',
      heading: 'Map the quote follow-up gap',
      content:
        'Review where roofing estimates sit after they are sent and what should happen before they go cold.',
    },
  ],
};
