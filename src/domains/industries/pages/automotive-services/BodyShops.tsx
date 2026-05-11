import type { IndustryDetailPageData } from '@/domains/industries/types';

export const bodyShopsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Body Shops — Estimate, Insurance, and Cycle-Time Systems',
    description:
      'How collision and body shops hold inbound enquiries, manage insurance threads, and keep cycle time visible across estimates, parts, and pickup.',
    canonical: '/industries/automotive-services/body-shops',
    openGraph: {
      title: 'Body Shops — Estimate, Insurance, and Cycle-Time Systems',
      description: 'Estimates, insurance follow-up, and cycle visibility on one operating board.',
    },
  },
  slug: 'body-shops',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Body Shops',
    title: 'A photo of bumper damage. [[muted:Then a week of silence.]]',
    description:
      'Collision work moves on long threads — estimates, insurance, parts, paint, pickup. The leaks live between them. Most are quiet, and most cost a job.',
    list: [
      'Estimate enquiries acknowledged the moment the photos land',
      'Insurance threads tracked on one board, not in inboxes',
      'Cycle status visible to the customer without a phone call',
    ],
  },
  industries: ['body-shop'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What body-shop operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'insurer',
        question: 'Will this integrate with our insurer portals?',
        answer:
          'It does not replace insurer portals. It holds the customer-facing thread and the internal board so nothing inside the shop slips while the insurer side moves at its own pace.',
      },
      {
        id: 'tools',
        question: 'We already use a body-shop estimating tool. Do we drop it?',
        answer:
          'Usually not. The operating layer sits beside it and covers the gaps it does not — first-touch reply, internal status board, customer cycle updates.',
      },
      {
        id: 'cycle',
        question: 'Will this shorten cycle time?',
        answer:
          'It removes some of the chase that adds to cycle time. It will not change parts availability or paint cure times.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'Per build, not per feature. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the body-shop thread actually leaks',
      description:
        'Tell us about a typical job from photo enquiry to pickup. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where the cycle slips today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a shop running long-cycle insurance work.',
    },
  },
};
