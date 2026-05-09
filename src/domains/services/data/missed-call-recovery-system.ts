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

type MissedCallRecoverySections = {
  missedCallMoment: HeaderOnlySection;
  recoveryPath: HeaderOnlySection;
  routingBoundary: HeaderOnlySection;
  fitSignals: HeaderOnlySection;
  handoffBack: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'missed-call-recovery-system';
const system = 'ai-lead-handling';
const contactHref = buildServiceContactHref({ system, slug });

export const missedCallRecoverySystemPage: ServicePageData<MissedCallRecoverySections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Missed Call Recovery Service for Service Businesses',
    description:
      'A focused route for recovering missed calls and routing callers to a useful next step.',
  }),
  slug,
  badge: 'Missed Call Recovery',
  category: 'Lead Response',
  systems: [system],
  topics: ['missed-calls', 'lead-response-time'],
  hero: {
    badge: 'Missed Call Recovery',
    title: 'The Phone Rings. [[muted:Work Moves On.]]',
    description:
      'A missed call can be a real job, quote, or booking request. Missed Call Recovery gives unanswered calls a fast reply and a route back to the team.',
    list: ['Unanswered calls', 'Fast reply', 'Team handoff'],
  },
  sections: {
    missedCallMoment: {
      header: {
        kicker: 'Missed Moment',
        title: 'The caller only sees that nobody answered.',
        description:
          'The ordinary risk is simple: the team is busy, the phone rings, and a useful enquiry slips away.',
      },
    },
    recoveryPath: {
      header: {
        kicker: 'Recovery Path',
        title: 'A missed call needs a reply and a next step.',
        description:
          'A recovered call needs a route into message, qualification, booking, or team follow-up.',
      },
    },
    routingBoundary: {
      header: {
        kicker: 'Boundary',
        title: 'This recovers calls. It does not own every channel.',
        description: 'Keep this page narrower than the parent AI Lead Handling page.',
      },
    },
    fitSignals: {
      header: {
        kicker: 'Fit',
        title: 'Useful when calls are real and response is inconsistent.',
        description:
          'The page should qualify call volume, urgency, and whether a useful next step exists.',
      },
    },
    handoffBack: {
      header: {
        kicker: 'Handoff',
        title: 'Recovered calls still need ownership after the reply.',
        description:
          'When a caller needs quoting, booking, or follow-up, the recovery path should hand over to visible ownership.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about missed call recovery.',
        description: 'Short answers about timing, routing, and team handoff.',
      },
      items: [
        {
          id: 'missed-call-faq-speed',
          question: 'How fast should a missed call be followed up?',
          answer:
            'Fast enough that the caller knows the business has seen them. The exact response path depends on call type and team availability.',
        },
        {
          id: 'missed-call-faq-ai',
          question: 'Is this the same as AI Lead Handling?',
          answer:
            'It is a narrower part of AI Lead Handling. This page focuses on unanswered phone calls and the route back to a useful next step.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check what missed calls are costing.',
      description:
        'Tell us when calls are missed and what happens after. We will look at whether recovery should be its own route or part of a wider lead-handling setup.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at when calls are missed.' },
      { num: '02', text: 'We identify the right reply and routing path.' },
      { num: '03', text: 'We explain the handoff needed after recovery.' },
    ],
  },
};
