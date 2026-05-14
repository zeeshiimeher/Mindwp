import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const automotiveServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Automotive Services — Counter, Cycle, and Capacity Systems',
    description:
      'How automotive operators — repair shops, body shops, detailers, and mobile mechanics — hold the counter, the cycle, and the day-of capacity board.',
    canonical: '/industries/automotive-services',
    openGraph: {
      title: 'Automotive Services — Counter, Cycle, and Capacity Systems',
      description: 'Where the automotive day leaks and what holds it across four operating shapes.',
    },
  },
  slug: 'automotive-services',
  type: 'category',
  category: 'automotive-services',
  hero: {
    badge: 'Industries · Automotive',
    title: 'A bay full of work. [[muted:And a phone nobody can pick up.]]',
    description:
      'Automotive operators share one tension: hands are busy, the phone keeps ringing, and the next booking is one missed call away. The shape of the leak changes by trade — but the gap between enquiry and confirmation is the same.',
    list: [
      'The counter, the bay, and the phone all want the same person',
      'Cycle work needs visible status — internal and external',
      'Repeat customers carry most of the year’s revenue',
    ],
  },
  industries: ['auto-repair', 'body-shop', 'car-detailing', 'mobile-mechanic'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What automotive operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this the same build for every automotive trade?',
        answer:
          'No. The shape is similar — capture, approval, cycle, sign-off, recall. The lead system differs based on whether the work is counter-led or cycle-led.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most automotive operators that is the busy-counter call layer. CRM follows once that is steady.',
      },
      {
        id: 'tools',
        question: 'We already use a shop-management or estimating tool. Do we drop it?',
        answer: 'Usually not. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'We don’t price by feature. The shape of the build follows the leaks the operator has. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the automotive day actually leaks',
      description:
        'Tell us what happens between the phone ringing and the bay finishing the job. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and cycle status sit today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an automotive operator with a busy counter or a long cycle.',
    },
  },
};
