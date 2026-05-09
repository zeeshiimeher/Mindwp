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

type FAQSectionData = HeaderOnlySection & {
  items: Array<{ id: string; question: string; answer: string }>;
};

type ConversionLayerSections = {
  leakagePattern: HeaderOnlySection;
  decisionSurface: HeaderOnlySection;
  improvementPath: HeaderOnlySection;
  parentHandoff: HeaderOnlySection;
  fitBoundaries: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'conversion-layer';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const conversionLayerPage: ServicePageData<ConversionLayerSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Conversion Layer for Service Businesses',
    description:
      'A focused service page for finding where enquiries stall after people have already shown interest.',
  }),
  slug,
  badge: 'Conversion Layer',
  category: 'Revenue Recovery',
  systems: [system],
  topics: ['conversion-optimization', 'lead-capture', 'service-page-architecture'],
  hero: {
    badge: 'Conversion Layer',
    title: 'Interest Arrives. [[muted:Too Much Stalls.]]',
    description:
      'People click, call, compare, and ask questions. The conversion layer looks at what happens after interest appears and where the next step loses momentum.',
    list: ['Enquiry friction', 'Decision clarity', 'Next step'],
  },
  sections: {
    leakagePattern: {
      header: {
        kicker: 'Leak Pattern',
        title: 'Some losses happen after the lead is already warm.',
        description:
          'Interest turns into delay when the next step is unclear, slow, or too easy to avoid.',
      },
    },
    decisionSurface: {
      header: {
        kicker: 'Decision Surface',
        title: 'The next decision should be easier to make.',
        description:
          'The buyer needs to understand what happens next, what matters now, and why taking action is worth it.',
      },
    },
    improvementPath: {
      header: {
        kicker: 'Improvement Path',
        title: 'Small changes should be tied to real handling points.',
        description:
          'Keep this practical. Avoid unsupported metric claims or generic growth language.',
      },
    },
    parentHandoff: {
      header: {
        kicker: 'System Handoff',
        title: 'This supports Revenue Growth without creating a new route.',
        description:
          'Revenue Growth remains canonical-only for now. This page handles one registered part of that system.',
      },
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit',
        title: 'Useful when enquiries exist but decisions stall.',
        description:
          'This is a focused improvement path for existing interest, not a promise of more traffic.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about the conversion layer.',
        description: 'Short answers about scope, proof, and how this differs from traffic work.',
      },
      items: [
        {
          id: 'conversion-faq-traffic',
          question: 'Is this about getting more traffic?',
          answer:
            'No. This page focuses on what happens after interest already exists. Local visibility and acquisition belong elsewhere.',
        },
        {
          id: 'conversion-faq-proof',
          question: 'Will this guarantee more sales?',
          answer:
            'No. The work finds and fixes handling points. Any number used later must be sourced, illustrative, or genuinely measured.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find where interested leads stall.',
      description:
        'Tell us where people show interest and what tends to happen next. We will look for the clearest handling gap.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at the current enquiry path.' },
      { num: '02', text: 'We identify where decisions stall.' },
      { num: '03', text: 'We outline what should be fixed first.' },
    ],
  },
};
