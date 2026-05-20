import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// Website Chat — page
// =============================================================================

export const websiteChatData = {
  seo: buildFeatureSeo({
    slug: 'website-chat',
    title: 'Website Chat Response Path for Service Businesses',
    description:
      'Website chat and contact messages that move into a response path without turning the offer into an AI chatbot product.',
  }),
  slug: 'website-chat',
  primarySystem: 'lead-response-handling',
  topics: ['lead-capture', 'lead-routing', 'lead-response-time', 'website-infrastructure'],
  eyebrow: 'Website chat',
  category: 'Response path',
  hero: {
    eyebrow: 'Website chat',
    title: 'The Message Starts On The Website. [[muted:The Response Still Needs A Path.]]',
    description:
      'Website chat is useful only when the question, contact details, and next step land somewhere the team can actually handle.',
    list: ['Question captured', 'Response path visible', 'Next step owned'],
    visual: {
      title: 'Website chat path',
      subtitle: 'Question captured · response visible',
      rows: [
        { label: 'Website chat opened', value: 'Question visible', status: 'unowned' as const },
        { label: 'Contact details shared', value: 'Captured', status: 'handled' as const },
        { label: 'No reply owner', value: 'Needs response', status: 'leaking' as const },
        { label: 'Next step assigned', value: 'Owned', status: 'handled' as const },
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
      title: 'Review the website chat response path.',
      muted: 'Find where messages stall.',
      description:
        'We can review how website messages arrive, who sees them, and what happens next.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'lead-response-handling',
          sourceType: 'feature',
          slug: 'website-chat',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where chat and contact messages arrive' },
      { num: '02', text: 'Who owns the first response' },
      { num: '03', text: 'What gets lost before follow-up' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
