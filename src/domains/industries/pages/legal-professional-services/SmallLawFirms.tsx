import type { IndustryDetailPageData } from '@/domains/industries/types';

export const smallLawFirmsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Small Law Firms — Intake, Conflict-Check, and Matter Systems',
    description:
      'How small law firms hold considered enquiries, run conflict checks, and manage matter status without losing the moment.',
    canonical: '/industries/legal-professional-services/small-law-firms',
    openGraph: {
      title: 'Small Law Firms — Intake, Conflict-Check, and Matter Systems',
      description: 'Considered intake, conflict checks, and matters on one operating layer.',
    },
  },
  slug: 'small-law-firms',
  type: 'detail',
  parentSlug: 'legal-professional-services',
  hero: {
    badge: 'Professional · Law Firms',
    title: 'A serious enquiry. [[muted:And no one to triage it before tomorrow.]]',
    description:
      'Most legal enquiries arrive once. Slow first reply or no clear next step costs the matter. The leak lives between intake and engagement.',
    list: [
      'Considered enquiries acknowledged with a clear intake step',
      'Conflict checks routed without manual handoff',
      'Matter status and engagement letters move on cadence',
    ],
  },
  industries: ['law-firm'],
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
        id: 'tools',
        question: 'We use case-management software. Do we drop it?',
        answer: 'No. The operating layer sits beside it.',
      },
      {
        id: 'compliance',
        question: 'How does this handle privilege and confidentiality?',
        answer:
          'It does not replace your case-management tools. It links to them so the operating board sees status without duplicating data.',
      },
      {
        id: 'voice',
        question: 'Will replies sound like the firm?',
        answer: 'Yes — written in the firm’s voice and reviewed before launch.',
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
      title: 'Show us where the intake actually leaks',
      description:
        'Tell us about a typical week. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where intake, conflict checks, and status sit today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a working law firm.',
    },
  },
};
