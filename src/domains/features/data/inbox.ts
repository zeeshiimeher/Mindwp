import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// Inbox — page
// =============================================================================

export const inboxData = {
  seo: buildFeatureSeo({
    slug: 'inbox',
    title: 'Enquiry Inbox Visibility for Service Businesses',
    description:
      'A practical view of calls, forms, and messages so enquiries do not disappear into scattered inboxes.',
  }),
  slug: 'inbox',
  primarySystem: 'lead-response-handling',
  topics: ['lead-capture', 'lead-routing', 'lead-response-time', 'crm-visibility'],
  eyebrow: 'Enquiry visibility',
  category: 'Message handling',
  hero: {
    eyebrow: 'Enquiry visibility',
    title: 'Messages Arrive. [[muted:Nobody Has A Clear View.]]',
    description:
      'Inbox visibility is useful when calls, forms, and messages land somewhere the team can see, respond to, and hand off.',
    list: ['Messages visible', 'Response owner clear', 'Next step recorded'],
    visual: {
      title: 'Enquiry view',
      subtitle: 'Calls · forms · messages',
      rows: [
        { label: 'Contact form', value: 'Captured', status: 'handled' as const },
        { label: 'Missed call', value: 'Needs response', status: 'leaking' as const },
        { label: 'Email enquiry', value: 'Unowned', status: 'unowned' as const },
        { label: 'Message replied', value: 'Handled', status: 'handled' as const },
      ],
      footerPrimary: 'Source attached',
      footerSecondary: 'Next step visible',
    },
  },
  faq: {
    header: {
      title: 'What business owners ask before getting started',
      description: 'Direct answers. No jargon.',
    },
    items: [
      {
        question: 'How is this different from getting a new website built?',
        answer:
          'Most builds stop at how the site looks. A Smart Website System focuses on what happens after someone lands on the site: whether they understand the service, make contact, and get handled properly.',
      },
      {
        question: 'Do we have to start from scratch?',
        answer:
          'Not always. If your current site can support the structure, capture points, and handoff layer, we can improve around it. If it cannot, we will say that clearly before recommending a rebuild.',
      },
      {
        question: 'Does this include service pages?',
        answer:
          'Yes. Service pages are part of the foundation. Each important service needs a clear page that answers the right question and gives the enquiry a clear next step.',
      },
      {
        question: 'Does this connect to our follow-up process?',
        answer:
          'That is the point. The website should not just send a form somewhere. It should pass the right context into the place where the enquiry can be handled.',
      },
      {
        question: 'How long does it usually take?',
        answer:
          'A straightforward build usually takes several weeks. The timeline depends on how many services, locations, forms, handoffs, and content decisions need to be handled.',
      },
    ],
  },
  cta: {
    heading: {
      title: 'Review where enquiries land.',
      muted: 'Find where messages become invisible.',
      description:
        'We can review how calls, forms, and messages are seen, answered, and handed off.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'lead-response-handling',
          sourceType: 'feature',
          slug: 'inbox',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where calls, forms, and messages land' },
      { num: '02', text: 'Who sees them first' },
      { num: '03', text: 'Which enquiries go unowned' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
