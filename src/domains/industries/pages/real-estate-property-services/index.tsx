import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const realEstatePropertyServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Real Estate & Property Services — Lead, Application, and Pipeline Systems',
    description:
      'How realtors, brokers, property managers, and inspectors hold inbound leads, manage transactional pipelines, and stay top-of-mind for repeat work.',
    canonical: '/industries/real-estate-property-services',
    openGraph: {
      title: 'Real Estate & Property Services — Lead, Application, and Pipeline Systems',
      description: 'Where the property pipeline leaks and what holds it across four shapes.',
    },
  },
  slug: 'real-estate-property-services',
  type: 'category',
  category: 'real-estate-property-services',
  hero: {
    badge: 'Industries · Property Services',
    title: 'A spike on Saturday. [[muted:And a long quiet stretch until close.]]',
    description:
      'Property work runs on spikes and long timelines. Most leakage is the long quiet stretch between contact and close.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Pipeline nurture runs for buyers, sellers, and applicants',
      'Past-client and past-agent cadences run automatically',
    ],
  },
  industries: ['realtor', 'mortgage-broker', 'property-management', 'home-inspection'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What property operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'fit',
        question: 'Is this the same build for every property business?',
        answer:
          'No. The shape is similar. The lead system differs by transaction or service shape.',
      },
      {
        id: 'starting',
        question: 'Where do most operators actually start?',
        answer: 'Where the leak hurts most. For most, that is first-touch and nurture.',
      },
      {
        id: 'tools',
        question: 'We already use a property CRM. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a build is not the right move yet.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the pipeline actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where leads, pipeline, and past-clients sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working property operator.',
    },
  },
};
