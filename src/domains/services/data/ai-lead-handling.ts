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

type AiLeadHandlingSections = {
  responseGap: HeaderOnlySection;
  channelSurface: HeaderOnlySection;
  handledPath: HeaderOnlySection;
  aiBoundary: HeaderOnlySection;
  scenarioReadiness: HeaderOnlySection;
  fitFilter: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'ai-lead-handling';
const system = 'ai-lead-handling';
const contactHref = buildServiceContactHref({ system, slug });

export const aiLeadHandlingPage: ServicePageData<AiLeadHandlingSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'AI Lead Handling for Service Businesses',
    description:
      'Fast response and routing for calls, forms, DMs, and missed enquiries before good work slips away.',
  }),
  slug,
  badge: 'AI Lead Handling',
  category: 'Lead Handling',
  systems: [system],
  topics: ['lead-response-time', 'missed-calls', 'lead-capture'],
  hero: {
    badge: 'AI Lead Handling',
    title: 'Calls Come In. [[muted:Replies Lag Behind.]]',
    description:
      'Someone calls, fills in a form, or sends a message while the team is busy. AI Lead Handling gives that first contact a fast response and a clear handoff instead of leaving it to memory.',
    list: ['Missed calls', 'Form replies', 'Booking handoff'],
  },
  sections: {
    responseGap: {
      header: {
        kicker: 'Response Gap',
        title: 'The first reply is where good enquiries go cold.',
        description:
          'The business may be busy, but the customer only sees silence. The gap is the time between contact arriving and someone taking ownership.',
      },
    },
    channelSurface: {
      header: {
        kicker: 'Channel Surface',
        title: 'Calls, forms, and messages need one handling view.',
        description:
          'Scattered contact routes need one visible surface, so the business can see what is unhandled and what gets covered.',
      },
    },
    handledPath: {
      header: {
        kicker: 'Handled Path',
        title: 'A first response should move the enquiry somewhere useful.',
        description:
          'A useful first reply moves the enquiry toward qualification, routing, booking context, or a human handoff.',
      },
    },
    aiBoundary: {
      header: {
        kicker: 'AI Boundary',
        title: 'AI covers the first gap. It does not replace the business.',
        description:
          'This section must make the human boundary clear. AI handles response and routing, while the business still owns judgement, service delivery, and final decisions.',
      },
    },
    scenarioReadiness: {
      header: {
        kicker: 'Readiness',
        title: 'The right setup depends on where contact is slipping now.',
        description:
          'Different situations need different response rules, depending on channel, urgency, and what the team can safely hand over.',
      },
    },
    fitFilter: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when demand exists and response is the weak point.',
        description:
          'Best fit starts with real enquiries already arriving and a first-response gap that needs clearer handling.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about AI lead handling.',
        description:
          'Short answers for buyers who need to understand response boundaries, human handoff, and fit.',
      },
      items: [
        {
          id: 'ai-faq-human-handoff',
          question: 'Does AI replace our team?',
          answer:
            'No. It handles the first response and routing gap. Your team still owns judgement, pricing, service delivery, and final decisions.',
        },
        {
          id: 'ai-faq-channels',
          question: 'Can it cover more than missed calls?',
          answer:
            'Yes. The setup can cover calls, forms, DMs, and other contact routes when those routes are part of the approved implementation.',
        },
        {
          id: 'ai-faq-fit',
          question: 'When is this worth setting up?',
          answer:
            'It is most useful when real enquiries already arrive, but first response is slow, inconsistent, or dependent on one person noticing in time.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find the first-contact gap.',
      description:
        'Tell us where enquiries arrive and what usually happens next. We will look for the part that needs a faster response or clearer handoff.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We trace the contact routes that matter.' },
      { num: '02', text: 'We identify where response currently breaks.' },
      { num: '03', text: 'We explain what should be handled first.' },
    ],
  },
};
