import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type StallPoint = {
  id: string;
  stage: string;
  title: string;
  detail: string;
  loss: 'soft' | 'medium' | 'hard';
};

type DecisionQuestion = {
  id: string;
  num: string;
  question: string;
  detail: string;
};

type FixPoint = {
  id: string;
  area: string;
  before: string;
  after: string;
};

type BridgePoint = {
  id: string;
  belongsTo: 'conversion' | 'revenue-growth';
  point: string;
};

type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type ConversionLayerSections = {
  leakagePattern: {
    header: SectionHeader;
    label: string;
    stalls: StallPoint[];
    closing: string;
  };
  decisionSurface: {
    header: SectionHeader;
    questions: DecisionQuestion[];
    closing: string;
  };
  improvementPath: {
    header: SectionHeader;
    label: string;
    fixes: FixPoint[];
    closing: string;
  };
  parentHandoff: {
    header: SectionHeader;
    rows: BridgePoint[];
    rule: string;
  };
  fitBoundaries: {
    header: SectionHeader;
    columns: FitColumn[];
    closing: string;
  };
  faq: {
    header: SectionHeader;
    items: Array<{ id: string; question: string; answer: string }>;
  };
};

const slug = 'conversion-layer';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const conversionLayerPage: ServicePageData<ConversionLayerSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Conversion Layer for Service Businesses',
    description:
      'A focused service page for finding where warm enquiries stall after interest already exists.',
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
      'People click, call, compare and ask questions. The conversion layer looks at what happens after interest appears and where the next step quietly loses momentum.',
    list: ['Enquiry friction', 'Decision clarity', 'Next step'],
  },
  sections: {
    leakagePattern: {
      header: {
        kicker: 'Leak Pattern',
        title: 'The losses happen after the lead is already warm.',
        description:
          'Interest turns into delay when the next step is unclear, slow or too easy to avoid.',
      },
      label: 'Where warm leads tend to stall',
      stalls: [
        {
          id: 's-01',
          stage: 'On the page',
          title: 'Reader cannot see what to do next.',
          detail: 'The page reads, but the action is buried, vague or competing with other links.',
          loss: 'medium',
        },
        {
          id: 's-02',
          stage: 'In the form',
          title: 'Form asks for too much, too early.',
          detail:
            'Five fields and a "tell us about your project" prompt scare off a quick enquiry.',
          loss: 'hard',
        },
        {
          id: 's-03',
          stage: 'After submit',
          title: 'No clear sense of what happens next.',
          detail: 'Generic "thanks" page. No timeframe. No reassurance. Doubt sets in.',
          loss: 'medium',
        },
        {
          id: 's-04',
          stage: 'During wait',
          title: 'Reply takes longer than the buyer\u2019s decision window.',
          detail: 'By the time a quote arrives, the customer has called somebody else.',
          loss: 'hard',
        },
        {
          id: 's-05',
          stage: 'After quote',
          title: 'Quote sent. No follow-up. No reminder.',
          detail: 'Silence is read as disinterest. The lead cools without anybody noticing.',
          loss: 'soft',
        },
      ],
      closing:
        'Five small leaks rarely show up in any single report. Together they cost more than missing traffic does.',
    },
    decisionSurface: {
      header: {
        kicker: 'Decision Surface',
        title: 'The next decision should be easy to make.',
        description:
          'A few practical questions decide whether the page surface helps or hinders the buyer.',
      },
      questions: [
        {
          id: 'd-01',
          num: '01',
          question: 'Is the next step obvious within seven seconds?',
          detail: 'The reader should not have to scan the whole page to find what to do.',
        },
        {
          id: 'd-02',
          num: '02',
          question: 'Does the page answer the buyer\u2019s real first question?',
          detail: 'Usually: do you handle this kind of work, in this area, in this timeframe.',
        },
        {
          id: 'd-03',
          num: '03',
          question: 'Is the smallest useful action available?',
          detail: 'Call, message, short form — not a six-field commitment to a stranger.',
        },
        {
          id: 'd-04',
          num: '04',
          question: 'Is there a reason to act now rather than later?',
          detail: 'Real availability, current capacity, or clear next-step expectations.',
        },
        {
          id: 'd-05',
          num: '05',
          question: 'Does the page treat the buyer like a person?',
          detail: 'Operational, plain language. Not jargon. Not pitch theatre.',
        },
      ],
      closing:
        'No tricks. No fake urgency. The decision surface helps the buyer move forward without pressure.',
    },
    improvementPath: {
      header: {
        kicker: 'Improvement Path',
        title: 'Tighten the handling points the buyer actually touches.',
        description:
          'Small, specific changes tied to real moments — not generic landing-page rewrites.',
      },
      label: 'Common before / after at each handling point',
      fixes: [
        {
          id: 'f-01',
          area: 'Primary action',
          before: 'Three competing buttons. Reader pauses.',
          after: 'One clear next step on every page that matters.',
        },
        {
          id: 'f-02',
          area: 'Form length',
          before: 'Six required fields including project budget.',
          after: 'Two fields and a sentence. Detail asked for after first reply.',
        },
        {
          id: 'f-03',
          area: 'Confirmation',
          before: 'Generic thank-you with no timing.',
          after: 'Page that explains the next step and when to expect it.',
        },
        {
          id: 'f-04',
          area: 'Reply window',
          before: 'Several hours to a working day.',
          after: 'Acknowledgement quickly. Real response inside the buyer\u2019s window.',
        },
        {
          id: 'f-05',
          area: 'Quote follow-up',
          before: 'Quote sent. No further contact.',
          after: 'A short, polite follow-up if no reply within a sensible window.',
        },
      ],
      closing: 'No grand redesign required. Each fix is small. The benefit is cumulative.',
    },
    parentHandoff: {
      header: {
        kicker: 'System Bridge',
        title: 'Conversion layer feeds Revenue Growth without becoming it.',
        description:
          'This page handles the page-side and reply-side conversion friction. Revenue Growth owns lifecycle and recovery work that sits beyond.',
      },
      rows: [
        {
          id: 'b-01',
          belongsTo: 'conversion',
          point: 'Page clarity, primary action and form length.',
        },
        {
          id: 'b-02',
          belongsTo: 'conversion',
          point: 'Confirmation messaging and first-reply timing.',
        },
        {
          id: 'b-03',
          belongsTo: 'conversion',
          point: 'Quote-stage friction and gentle follow-up.',
        },
        {
          id: 'b-04',
          belongsTo: 'revenue-growth',
          point: 'Lifecycle improvements after the first job.',
        },
        {
          id: 'b-05',
          belongsTo: 'revenue-growth',
          point: 'Win-back work for customers who went quiet long ago.',
        },
        {
          id: 'b-06',
          belongsTo: 'revenue-growth',
          point: 'Pricing, packaging and offer refinement.',
        },
      ],
      rule: 'Conversion layer fixes the live edge. Revenue Growth owns what comes after the first decision.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when interest exists and decisions stall.',
        description:
          'This is a focused improvement path for existing interest, not a promise of more traffic.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Real enquiries arrive. Conversion is the bottleneck.',
          signals: [
            'The site already gets visitors and the phone already rings.',
            'Quotes go out, but a known share never converts.',
            'Forms get half-filled and abandoned.',
            'Replies feel slow even when the team is doing their best.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit yet',
          title: 'No interest to convert.',
          signals: [
            'No reliable enquiry volume yet.',
            'The website does not show up at all locally.',
            'Service offer is still being defined.',
            'Looking for traffic, not friction-removal.',
          ],
        },
      ],
      closing:
        'When interest already exists, conversion is the cheapest place to find growth. When it does not, traffic and visibility come first.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about the conversion layer.',
        description: 'Short answers about scope, proof and how this differs from traffic work.',
      },
      items: [
        {
          id: 'cvl-faq-traffic',
          question: 'Is this about getting more traffic?',
          answer:
            'No. This page focuses on what happens after interest already exists. Local visibility and acquisition belong with Local SEO Authority.',
        },
        {
          id: 'cvl-faq-proof',
          question: 'Will this guarantee more sales?',
          answer:
            'No. The work finds and fixes handling points. Any number used later must be sourced, illustrative or genuinely measured.',
        },
        {
          id: 'cvl-faq-redesign',
          question: 'Does this mean redesigning the website?',
          answer:
            'Usually no. Most fixes are small and specific. A full redesign is a different conversation.',
        },
        {
          id: 'cvl-faq-revenue-growth',
          question: 'How does this fit with Revenue Growth?',
          answer:
            'Conversion layer handles the live edge — page, form, reply, quote. Revenue Growth handles lifecycle and recovery beyond that.',
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
      { num: '01', text: 'We map where interest currently arrives.' },
      { num: '02', text: 'We identify the highest-cost stall points.' },
      { num: '03', text: 'We outline the smallest useful fix path.' },
    ],
  },
};
