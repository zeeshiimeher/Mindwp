import { buildContactHref } from '@/lib/contact/contactHref';

import { buildFeatureSeo } from '../seo';
import type { FeaturePageData } from '../types';

// =============================================================================
// Reputation — page
// =============================================================================

export const reputationData = {
  seo: buildFeatureSeo({
    slug: 'reputation',
    title: 'Review and Reputation Visibility for Service Businesses',
    description:
      'Review, proof, and feedback visibility that helps completed work become trust without review manipulation.',
  }),
  slug: 'reputation',
  primarySystem: 'reputation-review-systems',
  topics: ['review-generation', 'review-automation', 'feedback-loops', 'reputation-monitoring'],
  eyebrow: 'Reviews and proof',
  category: 'Proof visibility',
  hero: {
    eyebrow: 'Reviews and proof',
    title: 'Good Work Happens. [[muted:Proof Still Depends On Someone Remembering.]]',
    description:
      'Reputation support works when review requests, feedback, and proof have timing and ownership after the work is done.',
    list: ['Review timing clear', 'Feedback routed', 'Proof visible'],
    visual: {
      title: 'Review path',
      subtitle: 'Completed work · feedback · proof',
      rows: [
        { label: 'Job completed', value: 'Ready', status: 'handled' as const },
        { label: 'Review request', value: 'Not sent', status: 'leaking' as const },
        { label: 'Feedback owner', value: 'Unclear', status: 'unowned' as const },
        { label: 'Proof captured', value: 'Visible', status: 'handled' as const },
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
      title: 'Review the review and proof path.',
      muted: 'Find where good work stops becoming visible.',
      description:
        'We can review when review requests happen, where feedback goes, and what proof is missing.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'reputation-review-systems',
          sourceType: 'feature',
          slug: 'reputation',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'When review requests should happen' },
      { num: '02', text: 'Where feedback should route' },
      { num: '03', text: 'Which proof is not becoming visible' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies FeaturePageData;
