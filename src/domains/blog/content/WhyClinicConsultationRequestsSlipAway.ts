import type { BlogPostData } from '@/domains/blog/types';

export const whyClinicConsultationRequestsSlipAway: BlogPostData = {
  seo: {
    title: 'Why Clinic Consultation Requests Slip Away After the Website Visit',
    description:
      'How clinic consultation requests can stall when response, follow-up, and the next step are not clearly owned.',
    canonical: '/blog/why-clinic-consultation-requests-slip-away',
  },
  slug: 'why-clinic-consultation-requests-slip-away',
  title: 'Why Clinic Consultation Requests Slip Away After the Website Visit',
  publishDate: '2026-01-24',
  authorKey: 'INDUSTRY',
  category: 'healthcare-practice-examples',
  industries: [],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm', 'smart-website-systems'],
  topics: ['lead-response-time', 'booking-systems', 'follow-up'],
  tags: ['Healthcare Practices', 'Consultation Requests', 'Lead Response'],
  sections: [
    {
      type: 'introduction',
      content: [
        'A patient may understand the clinic page and still fail to become a handled enquiry.',
        'The consultation request can sit between the website, inbox, phone, and team without a clear owner.',
      ],
    },
    {
      type: 'content',
      heading: 'The request needs a visible next step',
      content:
        'A form or booking request should not become a loose message. Someone needs to know it arrived, what the patient asked for, and what should happen next.',
    },
    {
      type: 'takeaways',
      heading: 'Where requests often stall',
      items: [
        'The request arrives without enough service or treatment context.',
        'Nobody can quickly see who owns the response.',
        'Follow-up after the first reply depends on memory.',
      ],
    },
    {
      type: 'cta',
      heading: 'Check the consultation response path',
      content:
        'Review what happens from the website visit to the first response and the follow-up after that.',
    },
  ],
};
