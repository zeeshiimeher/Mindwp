import type { IndustryDetailPageData } from '@/domains/industries/types';

export const hvacCompaniesIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'HVAC Companies — Seasonal Demand & Maintenance Systems',
    description:
      'How HVAC operators hold the heatwave-week call surge, keep maintenance contracts current, and turn a finished install into the next service appointment.',
    canonical: '/industries/home-services/hvac-companies',
    openGraph: {
      title: 'HVAC Companies — Seasonal Demand & Maintenance Systems',
      description:
        'Surge weeks, service contracts, and follow-up loops handled through one operating layer.',
    },
  },
  slug: 'hvac-companies',
  type: 'detail',
  parentSlug: 'home-services',
  hero: {
    badge: 'Home Services · HVAC',
    title:
      'The first 35-degree week breaks the phone. [[muted:Half the calls never get a callback.]]',
    description:
      'HVAC demand is seasonal and uneven. The week the temperature spikes, the office is buried. Then four months later the same customers are not on a service plan.',
    list: [
      'Surge-week calls held without dropping any',
      'Service contracts that renew themselves',
      'Installs that turn into the next appointment, not silence',
    ],
  },
  industries: ['hvac'],
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
      title: 'What HVAC operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'spreadsheet',
        question: 'We track service plans in a spreadsheet. Do we have to drop it?',
        answer:
          'No. The spreadsheet can stay as the source while the new layer pulls from it. We replace the spreadsheet only when it is actively causing missed renewals.',
      },
      {
        id: 'surge',
        question: 'Will the SMS acknowledgement annoy people who just want to talk?',
        answer:
          'It is one short message. It says “we’ve got your call, here is when we will ring back.” People appreciate knowing the company saw the call.',
      },
      {
        id: 'install',
        question: 'We don’t want to push service plans on people who just bought a system.',
        answer:
          'The follow-up at +14 days is a check-in, not an offer. The service-plan invitation comes at +60 days, plainly written, with an off switch.',
      },
      {
        id: 'reviews',
        question: 'Customers don’t want to be asked for reviews after every visit.',
        answer: 'The request goes once per job, after sign-off. If they don’t respond, no chase.',
      },
    ],
  },
  cta: {
    heading: {
      eyebrow: 'Next step',
      title: 'Show us where HVAC enquiries get lost in the season',
      description:
        'Tell us what happens between a surge-week phone ringing and a quote going out. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where calls and service plans land today' },
      { num: '2', text: 'The system most likely to fix the worst leak first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a seasonal HVAC operator.',
    },
  },
};
