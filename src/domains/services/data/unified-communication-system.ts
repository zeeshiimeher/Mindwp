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

type UnifiedCommunicationSections = {
  channelScatter: HeaderOnlySection;
  ownershipSurface: HeaderOnlySection;
  routingPath: HeaderOnlySection;
  handoffRules: HeaderOnlySection;
  fitBoundaries: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'unified-communication-system';
const system = 'ai-lead-handling';
const contactHref = buildServiceContactHref({ system, slug });

export const unifiedCommunicationSystemPage: ServicePageData<UnifiedCommunicationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Unified Communication System for Service Businesses',
    description:
      'A focused route for bringing calls, forms, and messages into clearer ownership and response handling.',
  }),
  slug,
  badge: 'Unified Communication',
  category: 'Lead Response',
  systems: [system],
  topics: ['lead-routing', 'lead-management'],
  hero: {
    badge: 'Unified Communication',
    title: 'Messages Arrive Everywhere.',
    description:
      'Calls, forms, email, and social messages can all hold real enquiries. Unified Communication gives scattered contact routes a clearer place to land and a visible owner.',
    list: ['Channel scatter', 'Routing', 'Ownership'],
  },
  sections: {
    channelScatter: {
      header: {
        kicker: 'Channel Scatter',
        title: 'The problem is not only volume. It is where messages land.',
        description:
          'Scattered contact routes create missed context, especially when every channel is handled differently.',
      },
    },
    ownershipSurface: {
      header: {
        kicker: 'Ownership',
        title: 'Every enquiry route needs a visible owner.',
        description:
          'Each channel needs a visible state, owner, and next action before messages can be trusted.',
      },
    },
    routingPath: {
      header: {
        kicker: 'Routing',
        title: 'Messages should move to the right person or next step.',
        description:
          'This page stays focused on communication handling, not the full CRM follow-up path.',
      },
    },
    handoffRules: {
      header: {
        kicker: 'Rules',
        title: 'Some messages need response. Some need escalation.',
        description:
          'The later visual should distinguish simple replies from urgent or sensitive handoffs.',
      },
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit',
        title: 'Useful when contact routes are scattered and ownership is unclear.',
        description:
          'Keep this narrower than AI Lead Handling and CRM. It is about communication routes and ownership.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about unified communication.',
        description: 'Short answers about channels, routing, and what happens after handoff.',
      },
      items: [
        {
          id: 'unified-faq-channels',
          question: 'Does every channel need to be connected?',
          answer:
            'No. The right setup starts with the contact routes that actually carry real enquiries or operational risk.',
        },
        {
          id: 'unified-faq-crm',
          question: 'Is this the same as CRM?',
          answer:
            'No. This page focuses on where messages land and who owns them. CRM owns the longer follow-up path after the enquiry is captured.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find where messages scatter.',
      description:
        'Tell us which contact routes matter and where messages get missed. We will look for the clearest ownership path.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We identify the channels that carry real enquiries.' },
      { num: '02', text: 'We map who should own each route.' },
      { num: '03', text: 'We explain what needs response, routing, or CRM handoff.' },
    ],
  },
};
