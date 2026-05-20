import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// CRM — page
// =============================================================================

export const crmData = {
  seo: buildFeatureSeo({
    slug: 'crm',
    title: 'Follow-Up and CRM Visibility for Service Businesses',
    description:
      'CRM visibility framed around owner, status, and next step rather than platform setup.',
  }),
  slug: 'crm',
  primarySystem: 'follow-up-crm',
  topics: ['crm-visibility', 'crm-pipeline', 'pipeline-visibility', 'follow-up'],
  eyebrow: 'CRM visibility',
  category: 'Follow-up visibility',
  hero: {
    eyebrow: 'CRM visibility',
    title: 'The Enquiry Exists. [[muted:Owner, Status, And Next Step Need To Be Visible.]]',
    description:
      'CRM support matters when it shows who owns each enquiry, where it stands, and what should happen next.',
    list: ['Owner visible', 'Status clear', 'Next step tracked'],
    visual: {
      title: 'Follow-up view',
      subtitle: 'Owner · status · next step',
      rows: [
        { label: 'New enquiry', value: 'Captured', status: 'handled' as const },
        { label: 'Owner missing', value: 'Unowned', status: 'unowned' as const },
        { label: 'Quote sent', value: 'Needs follow-up', status: 'leaking' as const },
        { label: 'Next step', value: 'Tracked', status: 'handled' as const },
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
      title: 'Review follow-up visibility.',
      muted: 'Find where owner, status, or next step disappears.',
      description:
        'We can review how enquiries, quotes, and bookings stay owned after the first response.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'follow-up-crm',
          sourceType: 'feature',
          slug: 'crm',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where ownership becomes unclear' },
      { num: '02', text: 'Which statuses are missing' },
      { num: '03', text: 'Which next steps depend on memory' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
