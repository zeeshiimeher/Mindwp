import type { IndustryDetailPageData } from '@/domains/industries/types';

export const roofingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Roofing Companies — Storm Surge & Inspection Systems',
    description:
      'How roofing operators hold the storm-event call surge, keep inspection-quote conversions on track, and stay in front of insurance work without losing the trail.',
    canonical: '/industries/home-services/roofing-companies',
    openGraph: {
      title: 'Roofing Companies — Storm Surge & Inspection Systems',
      description:
        'Storm weeks, inspection quotes, and insurance handoffs handled through one operating layer.',
    },
  },
  slug: 'roofing-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Roofing',
    title: 'A storm rolls through. [[muted:By morning the inbox is unsortable.]]',
    description:
      'Roofing demand spikes around weather events. The week after a storm, the office is buried in inspection requests, half-completed insurance jobs, and quotes that nobody has chased.',
    list: [
      'Post-storm calls held without dropping any',
      'Inspection-to-quote conversions tracked end to end',
      'Insurance jobs visible without spreadsheet archaeology',
    ],
  },
  industries: ['roofing'],
  primarySystem: 'follow-up-crm',
  supportingSystems: [
    'lead-response-handling',
    'reputation-review-systems',
    'smart-website-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'client-reactivation', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What roofing operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'photos',
        question: 'Our techs take photos in their phones. Do we change that?',
        answer:
          'Same camera. Different home. Photos attach to the job card on the spot, so the office doesn’t have to chase them later.',
      },
      {
        id: 'insurance',
        question: 'We deal with insurers. Will this make that easier or harder?',
        answer:
          'Easier. Every job gets one thread that holds the photos, the report, the assessor notes, and the customer comms. The insurer’s request is a one-click bundle.',
      },
      {
        id: 'storm-sms',
        question: 'People in panic don’t want a robotic SMS.',
        answer:
          'It is one short message: “we’ve got your call about the storm damage, here is when we’ll ring you.” People appreciate knowing someone saw the call.',
      },
      {
        id: 'reviews',
        question: 'We don’t want to ask for reviews on insurance jobs.',
        answer:
          'You don’t have to. The trigger is configurable per job type. Insurance jobs can be opted out of the review request entirely.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where roofing enquiries get lost after a storm',
      description:
        'Tell us what happens between an inspection request and an install start. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and inspections land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a roofing operator with field crews and insurance work.',
    },
  },
};
