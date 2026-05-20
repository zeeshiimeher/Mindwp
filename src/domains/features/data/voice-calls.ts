import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// Voice Calls — page
// =============================================================================

export const voiceCallsData = {
  seo: buildFeatureSeo({
    slug: 'voice-calls',
    title: 'Voice Call Response Paths for Service Businesses',
    description:
      'Call and missed-call response paths that help enquiries land somewhere useful without AI receptionist positioning.',
  }),
  slug: 'voice-calls',
  primarySystem: 'lead-response-handling',
  topics: ['missed-calls', 'lead-response-time', 'emergency-handling', 'lead-routing'],
  eyebrow: 'Voice calls',
  category: 'Response path',
  hero: {
    eyebrow: 'Voice calls',
    title: 'The Phone Rings. [[muted:The Response Path Decides What Happens Next.]]',
    description:
      'Calls and missed calls need a practical path for response, routing, and handoff while the team is busy.',
    list: ['Missed call visible', 'Response path clear', 'Handoff recorded'],
    visual: {
      title: 'Call response path',
      subtitle: 'Missed call · reply · handoff',
      rows: [
        { label: 'Missed call', value: 'Needs response', status: 'leaking' as const },
        { label: 'Caller context', value: 'Captured', status: 'handled' as const },
        { label: 'Reply owner', value: 'Unclear', status: 'unowned' as const },
        { label: 'Next step', value: 'Recorded', status: 'handled' as const },
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
      title: 'Review the call response path.',
      muted: 'Find where missed calls stall.',
      description:
        'We can review what happens when calls are missed, answered, or handed to the next person.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'lead-response-handling',
          sourceType: 'feature',
          slug: 'voice-calls',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'What happens when calls are missed' },
      { num: '02', text: 'Who owns the first response' },
      { num: '03', text: 'Where the handoff should be visible' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
