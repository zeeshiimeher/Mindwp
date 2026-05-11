import type { IndustryDetailPageData } from '@/domains/industries/types';

export const plumbingCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Plumbing Companies — Emergency Capture & Dispatch Systems',
    description:
      'How plumbing operators hold after-hours calls, route urgent jobs to the nearest tech, and keep planned work moving through the same system.',
    canonical: '/industries/home-services/plumbing-companies',
    openGraph: {
      title: 'Plumbing Companies — Emergency Capture & Dispatch Systems',
      description:
        'After-hours leaks, weekend bursts, and routine jobs handled through one operating layer.',
    },
  },
  slug: 'plumbing-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · Plumbing',
    title: 'A burst pipe at 9pm. [[muted:Whoever picks up wins the job.]]',
    description:
      'Plumbing demand arrives in spikes — after hours, on weekends, mid-storm. The first operator who answers, books, and sends a tech is the one who gets paid.',
    list: [
      'Emergency calls answered the moment they land',
      'Urgent jobs dispatched to the nearest tech',
      'Routine work held in the same board, not a paper diary',
    ],
  },
  industries: ['plumbing'],
  systems: [
    'ai-lead-handling',
    'crm-automation',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'emergency-handling', 'review-generation'],
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What plumbing operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'on-call',
        question: 'We already have an on-call tech. What changes?',
        answer:
          'The on-call tech stays. What changes is the layer in front of them: every inbound call is acknowledged in writing within minutes so the customer stops calling other operators while they wait.',
      },
      {
        id: 'dispatch',
        question: 'Our dispatcher knows the team. Won’t auto-routing get it wrong?',
        answer:
          'Auto-routing is a default, not a lock. The dispatcher overrides any decision in one tap. The system carries the load on the obvious cases so the dispatcher can focus on the hard ones.',
      },
      {
        id: 'quotes',
        question: 'Quote follow-up feels pushy.',
        answer:
          'It is one short message at +2 days and one at +6, written in plain language, with an off switch. If the customer says no, no chase.',
      },
      {
        id: 'reviews',
        question: 'Will customers feel asked-at?',
        answer:
          'The request goes once, at sign-off, in a quiet form. If they don’t respond, no follow-up.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where plumbing calls slip after hours',
      description:
        'Tell us what happens between the phone ringing and the truck arriving. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and quotes land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a plumbing operator with a real on-call cycle.',
    },
  },
};
