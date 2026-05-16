import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const homeServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Home Services — Field Operator Systems',
    description:
      'How home service operators with field crews hold inbound calls, dispatch, quotes, and follow-up — across roofing, plumbing, HVAC, electrical, and landscaping.',
    canonical: '/industries/home-services',
    openGraph: {
      title: 'Home Services — Field Operator Systems',
      description:
        'Across plumbing, roofing, HVAC, electrical, and landscaping: where the day leaks and what holds it.',
    },
  },
  slug: 'home-services',
  type: 'category',
  category: 'home-services',
  hero: {
    badge: 'Industries · Home Services',
    title: 'A field crew on the road. [[muted:An office line that no one is at.]]',
    description:
      'Home services share one shape: demand arrives by phone, the team is somewhere else, and the office is one or two people deep. The leaks are predictable. The fix is a layer between the call and the crew.',
    list: [
      'Field-out-of-office is the default operating mode',
      'Demand spikes around weather, season, or emergency',
      'Reviews and local trust drive the next enquiry',
    ],
  },
  industries: ['roofing', 'hvac', 'plumbing', 'electrical', 'landscaping'],
  primarySystem: 'lead-response-handling',
  supportingSystems: [
    'follow-up-crm',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation', 'missed-calls'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What home-services operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'category-fit',
        question: 'Is this the same build for every home-services trade?',
        answer:
          'No. The shape is similar — capture, dispatch, quote, follow-up, review. The lead system differs based on whether the work is emergency-led or project-led. Each detail page covers the specifics.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer:
          'Where the leak hurts most. For most field operators that is the mid-job and after-hours call layer. CRM follows once that is steady.',
      },
      {
        id: 'tools',
        question: 'We already have a CRM and a job-management tool. Do we have to drop them?',
        answer:
          'Often we keep them. The decision happens after we look at what the office and crew actually do day to day.',
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
      title: 'Show us where home-services enquiries actually slip',
      description:
        'Tell us what happens between the phone ringing and the crew on the road. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and quotes land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a field-crew operator with a real on-call cycle.',
    },
  },
};
