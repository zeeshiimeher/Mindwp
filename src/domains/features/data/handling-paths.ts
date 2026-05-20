import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// Handling Paths — page
// =============================================================================

export const handlingPathsData = {
  seo: buildFeatureSeo({
    slug: 'handling-paths',
    title: 'Handling Paths for Follow-Up and CRM Visibility',
    description:
      'Handling paths that make ownership, status, and next steps visible after enquiries, quotes, bookings, or consultation requests arrive.',
  }),
  slug: 'handling-paths',
  primarySystem: 'follow-up-crm',
  supportingSystems: ['lead-response-handling'],
  topics: ['follow-up', 'crm-visibility', 'lead-routing', 'pipeline-visibility'],
  eyebrow: 'Handling paths',
  category: 'Follow-up visibility',
  hero: {
    eyebrow: 'Handling paths',
    title: 'The Enquiry Arrives. [[muted:The Next Step Still Needs An Owner.]]',
    description:
      'Handling paths show what should happen after a call, form, booking, quote, or consultation request so follow-up does not depend on memory.',
    list: ['Owner visible', 'Status clear', 'Next step tracked'],
    visual: {
      title: 'Handling path',
      subtitle: 'Arrived · assigned · followed up',
      rows: [
        { label: 'Quote sent', value: 'Needs next step', status: 'unowned' as const },
        { label: 'Owner assigned', value: 'Visible', status: 'handled' as const },
        { label: 'No reminder set', value: 'At risk', status: 'leaking' as const },
        { label: 'Follow-up due', value: 'Tracked', status: 'handled' as const },
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
      title: 'Review the handling path.',
      muted: 'Find where follow-up loses ownership.',
      description:
        'We can review what happens after enquiries arrive and where ownership, status, or next steps become unclear.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'follow-up-crm',
          sourceType: 'feature',
          slug: 'handling-paths',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where ownership becomes unclear' },
      { num: '02', text: 'Which next steps depend on memory' },
      { num: '03', text: 'Where response should hand off to follow-up' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
