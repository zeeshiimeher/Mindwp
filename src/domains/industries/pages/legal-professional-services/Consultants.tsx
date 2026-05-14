import type { IndustryDetailPageData } from '@/domains/industries/types';

export const consultantsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Consultants — Discovery, Proposal, and Engagement Systems',
    description:
      'How independent consultants and small firms hold inbound enquiries, manage discovery and proposals, and stay top-of-mind for repeat work.',
    canonical: '/industries/legal-professional-services/consultants',
    openGraph: {
      title: 'Consultants — Discovery, Proposal, and Engagement Systems',
      description: 'Discovery, proposals, and engagements on one operating layer.',
    },
  },
  slug: 'consultants',
  type: 'detail',
  parentSlug: 'legal-professional-services',
  hero: {
    badge: 'Professional · Consultants',
    title: 'A warm intro. [[muted:And a proposal that took two weeks to draft.]]',
    description:
      'Consulting work runs on relationships. The leak is between discovery and proposal — and between engagements when nothing keeps the relationship warm.',
    list: [
      'Inbound enquiries acknowledged with discovery options',
      'Proposal drafts move on cadence',
      'Past-client cadence keeps the relationship warm',
    ],
  },
  industries: ['consulting'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What consultants usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'tools',
        question: 'We use a CRM and proposal tool. Do we drop them?',
        answer: 'No. The operating layer sits beside them.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the consultant?',
        answer: 'Yes — written in your voice and reviewed before launch.',
      },
      {
        id: 'fit',
        question: 'Does this work for niche consulting?',
        answer: 'Yes. The shape adapts to the niche.',
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
      title: 'Show us where the proposal cycle actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where enquiries, proposals, and past-clients sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working consultant.',
    },
  },
};
