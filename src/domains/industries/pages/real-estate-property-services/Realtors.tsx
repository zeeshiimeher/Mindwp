import type { IndustryDetailPageData } from '@/domains/industries/types';

export const realtorsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Realtors — Lead, Nurture, and Listing Systems',
    description:
      'How realtors hold inbound enquiries, nurture buyers and sellers between transactions, and keep listing momentum.',
    canonical: '/industries/real-estate-property-services/realtors',
    openGraph: {
      title: 'Realtors — Lead, Nurture, and Listing Systems',
      description: 'Inbound enquiries, nurture, and listings on one operating layer.',
    },
  },
  slug: 'realtors',
  type: 'detail',
  parentSlug: 'real-estate-property-services',
  hero: {
    badge: 'Real Estate · Realtors',
    title: 'A Saturday open house. [[muted:And a Tuesday lead that already went cold.]]',
    description:
      'Buyers and sellers move on impulse and on long timelines at the same time. Most leakage lives between the spike and the long nurture.',
    list: [
      'Inbound enquiries acknowledged inside two minutes',
      'Nurture sequences run for buyers and sellers separately',
      'Listing-feedback and post-close prompts run automatically',
    ],
  },
  industries: ['realtor'],
  primarySystem: 'lead-response-handling',
  supportingSystems: ['follow-up-crm', 'reputation-review-systems', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What realtors usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a real-estate CRM. Do we drop it?',
        answer: 'Usually no. The operating layer sits beside it and covers the gaps it does not.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the agent?',
        answer: 'Yes — written in the agent’s voice and reviewed before launch.',
      },
      {
        id: 'mls',
        question: 'Can it work with our MLS feed?',
        answer: 'Yes — listing data feeds nurture and follow-up.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer: 'Per build. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where the lead list actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where leads, nurture, and listings sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working realtor.',
    },
  },
};
