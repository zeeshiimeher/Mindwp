import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type HeaderOnlySection = {
  header: {
    kicker: string;
    title: string;
    description: string;
  };
};

type ServicePagesDecisionSections = {
  decisionProblem: HeaderOnlySection;
  comparison: HeaderOnlySection;
  chooseServicePages: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'service-pages-vs-one-generic-services-page';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const servicePagesVsOneGenericServicesPage: ServicePageData<ServicePagesDecisionSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Service Pages vs One Generic Services Page',
    description:
      'A focused comparison for deciding when one services page is hiding the buyer intent your website needs to handle.',
  }),
  slug,
  badge: 'Service Page Decision',
  category: 'Decision Support',
  systems: [system],
  topics: [
    'website-infrastructure',
    'lead-capture',
    'conversion-optimization',
    'crm-enabled-websites',
    'service-pages',
  ],
  hero: {
    badge: 'Service Page Decision',
    title: 'One Services Page Can Hide Intent.',
    description:
      'A generic services page can look tidy while every buyer lands in the same place. Separate service paths help when intent needs a clearer route.',
    list: ['Buyer intent', 'Service clarity', 'Next step'],
  },
  sections: {
    decisionProblem: {
      header: {
        kicker: 'Decision Problem',
        title: 'The question is whether different buyers need different paths.',
        description:
          'The choice starts with whether one broad page can answer the buyer clearly enough.',
      },
    },
    comparison: {
      header: {
        kicker: 'Comparison',
        title: 'A generic page and service-specific paths do different jobs.',
        description:
          'The comparison is between one broad page and focused service pages that match different buyer intents.',
      },
    },
    chooseServicePages: {
      header: {
        kicker: 'Choose',
        title: 'Separate service pages help when intent is specific.',
        description:
          'Service-specific paths help when the next step changes by service, urgency, or buyer situation.',
      },
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'This page supports a structure decision only.',
        description:
          'It should route to Smart Website Systems when the wider website path needs rebuilding.',
      },
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'The next move is to map what buyers are trying to choose.',
        description:
          'When the page structure is the real issue, the next step belongs with Smart Website Systems.',
      },
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether one page is hiding the work.',
      description:
        'Tell us what services you sell and how people currently choose between them. We will look at whether the page structure is helping or blurring the decision.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We map the current service choices.' },
      { num: '02', text: 'We identify where buyer intent gets blurred.' },
      { num: '03', text: 'We explain whether separate service pages are needed.' },
    ],
  },
};
