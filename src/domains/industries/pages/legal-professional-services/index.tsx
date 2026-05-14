import type { IndustryCategoryPageData } from '@/domains/industries/types';

export const legalProfessionalServicesIndustryPageData: IndustryCategoryPageData = {
  seo: {
    title: 'Legal & Professional Services — Intake, Engagement, and Status Systems',
    description:
      'How law firms, accounting firms, and consultants hold considered enquiries, manage engagements, and stay top-of-mind for repeat work.',
    canonical: '/industries/legal-professional-services',
    openGraph: {
      title: 'Legal & Professional Services — Intake, Engagement, and Status Systems',
      description: 'Where the engagement leaks and what holds it across three professional shapes.',
    },
  },
  slug: 'legal-professional-services',
  type: 'category',
  category: 'legal-professional-services',
  hero: {
    badge: 'Industries · Professional Services',
    title: 'A serious enquiry. [[muted:And the wrong moment to drop the ball.]]',
    description:
      'Professional services run on considered enquiries and long engagements. Slow first reply or quiet status updates cost the matter — and the next one.',
    list: [
      'Considered enquiries acknowledged with a clear intake step',
      'Engagement, document, and status cadences run on schedule',
      'Past-client touchpoints keep the relationship warm',
    ],
  },
  industries: ['law-firm', 'accounting', 'consulting'],
  systems: ['ai-lead-handling', 'crm-automation', 'reputation-review', 'smart-website-systems'],
  topics: ['lead-management', 'follow-up'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What firm partners usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'fit',
        question: 'Is this the same build for every professional firm?',
        answer: 'No. The shape is similar. The lead system differs by matter or cycle shape.',
      },
      {
        id: 'starting',
        question: 'Where do most firms actually start?',
        answer:
          'Where the leak hurts most. For most, that is intake speed and document collection.',
      },
      {
        id: 'tools',
        question: 'We use case- or practice-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
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
      eyebrow: 'Next step',
      title: 'Show us where the engagement actually leaks',
      description:
        'Tell us about a typical month. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where intake, documents, and status sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working professional firm.',
    },
  },
};
