import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// Calendars — page
// =============================================================================

export const calendarsData = {
  seo: buildFeatureSeo({
    slug: 'calendars',
    title: 'Booking and Appointment Visibility for Service Businesses',
    description:
      'Booking and appointment visibility that keeps next steps clear without turning the page into scheduling software.',
  }),
  slug: 'calendars',
  primarySystem: 'follow-up-crm',
  topics: ['booking-systems', 'booking-automation', 'no-show-reduction', 'follow-up'],
  eyebrow: 'Booking visibility',
  category: 'Next-step visibility',
  hero: {
    eyebrow: 'Booking visibility',
    title: 'The Booking Is Requested. [[muted:The Next Step Needs To Stay Visible.]]',
    description:
      'Calendars help when appointment requests, consultation bookings, confirmations, and follow-up are visible in one practical path.',
    list: ['Booking visible', 'Confirmation clear', 'Next step tracked'],
    visual: {
      title: 'Booking path',
      subtitle: 'Requested · confirmed · followed up',
      rows: [
        { label: 'Booking requested', value: 'Captured', status: 'handled' as const },
        { label: 'Confirmation missing', value: 'At risk', status: 'leaking' as const },
        { label: 'Owner unclear', value: 'Unowned', status: 'unowned' as const },
        { label: 'Next step due', value: 'Tracked', status: 'handled' as const },
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
      title: 'Review the booking path.',
      muted: 'Find where appointments lose visibility.',
      description:
        'We can review how booking requests, confirmations, reminders, and next steps stay visible.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'follow-up-crm',
          sourceType: 'feature',
          slug: 'calendars',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where booking requests arrive' },
      { num: '02', text: 'Which confirmations or reminders are unclear' },
      { num: '03', text: 'Where follow-up should be visible' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
