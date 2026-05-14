import type { IndustryDetailPageData } from '@/domains/industries/types';

export const autoRepairIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Auto Repair Shops — Bay-to-Office Systems',
    description:
      'How established auto repair shops hold inbound calls, manage estimate approvals, and keep returning customers on a service rhythm.',
    canonical: '/industries/automotive-services/auto-repair',
    openGraph: {
      title: 'Auto Repair Shops — Bay-to-Office Systems',
      description: 'Calls, estimates, approvals, and follow-up across the service counter.',
    },
  },
  slug: 'auto-repair',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Auto Repair',
    title: 'Three rings. Voicemail. [[muted:Nobody hears the message until the bay is clear.]]',
    description:
      'A working shop runs on movement. The phone rings while the writer is under a hood with a customer, and the next caller is already pulling up a competitor on their map.',
    list: [
      'Inbound calls covered when the service writer is busy',
      'Estimate approvals tracked on one board, not in text threads',
      'Returning customers reminded before the next service falls due',
    ],
  },
  industries: ['auto-repair'],
  systems: [
    'ai-lead-handling',
    'crm-automation',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What auto-repair operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'replace-tools',
        question: 'Do we have to replace our shop-management software?',
        answer:
          'Usually no. The operating layer sits beside it and handles the call, approval, and follow-up gaps it does not cover.',
      },
      {
        id: 'small-shop',
        question: 'We are a single-bay shop. Is this overkill?',
        answer:
          'Often a smaller build is the right move. The system follows the leaks. Sometimes only the missed-call layer is worth installing first.',
      },
      {
        id: 'review-volume',
        question: 'Will reviews actually go up?',
        answer:
          'The request goes out reliably at the right moment. Whether they leave one is up to them — but the queue is no longer relying on memory.',
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
      eyebrow: 'Next step',
      title: 'Show us where the counter actually leaks',
      description:
        'Tell us about a typical Tuesday. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and approvals sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working shop with a real Tuesday rush.',
    },
  },
};
