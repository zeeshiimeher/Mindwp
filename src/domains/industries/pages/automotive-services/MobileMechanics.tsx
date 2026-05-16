import type { IndustryDetailPageData } from '@/domains/industries/types';

export const mobileMechanicsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Mobile Mechanics — Dispatch, Routing, and Roadside Systems',
    description:
      'How mobile mechanics hold inbound calls, route to the right job, and keep follow-up moving without an office team.',
    canonical: '/industries/automotive-services/mobile-mechanics',
    openGraph: {
      title: 'Mobile Mechanics — Dispatch, Routing, and Roadside Systems',
      description: 'A one-or-two person operation with no front desk needs the layer most.',
    },
  },
  slug: 'mobile-mechanics',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Mobile Mechanics',
    title: 'You’re under a bonnet on a verge. [[muted:The phone is in the van.]]',
    description:
      'There is no front desk. There is no office team. The customer expects an answer; the next job depends on the current one staying on track. The leaks are obvious — and so is the fix.',
    list: [
      'Calls answered while you are hands-on',
      'New jobs slotted by location, not memory',
      'Follow-up that does not depend on remembering',
    ],
  },
  industries: ['mobile-mechanic'],
  primarySystem: 'lead-response-handling',
  supportingSystems: [
    'follow-up-crm',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What mobile mechanics usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'solo',
        question: 'I’m a one-person operation. Will this make sense?',
        answer:
          'Often a smaller build is exactly right. The leakiest gap when you’re solo is usually the call you can’t physically take. We start there.',
      },
      {
        id: 'spam',
        question: 'Will the text-back feel automated to the customer?',
        answer:
          'It’s short and direct. It says you’re under a bonnet and offers a real callback window. Most callers prefer that to voicemail silence.',
      },
      {
        id: 'tools',
        question: 'I already use a job-management app. Do I drop it?',
        answer:
          'Usually not. The operating layer sits beside it and covers the call, follow-up, and reminder gaps it doesn’t.',
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
      title: 'Show us where the day actually leaks',
      description:
        'Tell us about a typical day on the road. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and admin sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a solo operator with a real day on the road.',
    },
  },
};
