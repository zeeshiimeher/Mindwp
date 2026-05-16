import type { IndustryDetailPageData } from '@/domains/industries/types';

export const electricalCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Electrical Companies — Emergency & Project Pipeline Systems',
    description:
      'How electrical operators hold the after-hours fault call, keep planned project quotes moving, and maintain compliance documentation without the office drowning in it.',
    canonical: '/industries/home-services/electrical-companies',
    openGraph: {
      title: 'Electrical Companies — Emergency & Project Pipeline Systems',
      description:
        'After-hours faults, project quotes, and compliance handled through one operating layer.',
    },
  },
  slug: 'electrical-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Electrical',
    title: 'Power’s out at 11pm. [[muted:The next click is who’s open right now.]]',
    description:
      'Electrical demand splits in two: faults that need a tech now, and projects that need quote, schedule, and compliance to line up. The office that holds both is the one that books the work.',
    list: [
      'Fault calls answered the moment they land',
      'Project quotes that don’t go cold',
      'Compliance documentation tied to the job, not chased after',
    ],
  },
  industries: ['electrical'],
  primarySystem: 'lead-response-handling',
  supportingSystems: [
    'follow-up-crm',
    'smart-website-systems',
    'reputation-review-systems',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'emergency-handling', 'review-generation'],
  faq: {
    header: {
      eyebrow: 'Honest questions',
      title: 'What electrical operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'on-call',
        question: 'We already have an on-call tech. What changes?',
        answer:
          'The on-call tech stays. What changes is the layer in front of them: every inbound is acknowledged within minutes so the customer stops calling other electricians while they wait.',
      },
      {
        id: 'compliance',
        question: 'Compliance certs are a manual process. Can this really help?',
        answer:
          'It does not change the cert itself. It changes where the cert lives. A photo on site attaches to the job card so the office never has to chase it down later.',
      },
      {
        id: 'projects',
        question: 'Project quote follow-up feels pushy.',
        answer:
          'It is one short message at +2 days and one at +6, written plainly, with an off switch. If the customer says no, no chase.',
      },
      {
        id: 'reviews',
        question: 'We don’t want to ask for reviews on every fault call.',
        answer:
          'You don’t have to. The trigger is configurable per job type. Fault calls can be excluded entirely.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where electrical work slips between fault and project',
      description:
        'Tell us what happens between the after-hours call and the project quote. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and quotes land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to an electrical operator with mixed fault and project work.',
    },
  },
};
