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

type CRMAutomationSections = {
  ownershipGap: HeaderOnlySection;
  leadOwnershipBoard: HeaderOnlySection;
  followUpPath: HeaderOnlySection;
  statusVisibility: HeaderOnlySection;
  handoffBoundaries: HeaderOnlySection;
  readinessFilter: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'crm-infrastructure-implementation';
const system = 'crm-automation';
const contactHref = buildServiceContactHref({ system, slug });

export const crmAutomationPage: ServicePageData<CRMAutomationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'CRM & Automation for Service Businesses',
    description:
      'CRM setup for service businesses that need every enquiry owned, followed up, and visible after it arrives.',
  }),
  slug,
  badge: 'CRM & Automation',
  category: 'Lead Ownership',
  systems: [system],
  topics: ['crm-pipeline', 'crm-integration', 'lead-qualification', 'pipeline-architecture'],
  hero: {
    badge: 'CRM & Automation',
    title: 'Leads Arrive. [[muted:Ownership Gets Fuzzy.]]',
    description:
      'Someone asks for a quote, calls back, or replies to an email. The first contact happened, but the next step depends on who remembers. CRM & Automation makes ownership, follow-up, and status visible.',
    list: ['Lead ownership', 'Follow-up', 'Status visibility'],
  },
  sections: {
    ownershipGap: {
      header: {
        kicker: 'Ownership Gap',
        title: 'The enquiry is not lost at the form. It is lost after.',
        description:
          'A real lead can arrive without a clear owner or next step. That is where follow-up begins to depend on memory.',
      },
    },
    leadOwnershipBoard: {
      header: {
        kicker: 'Ownership Board',
        title: 'Every lead needs an owner and a visible state.',
        description:
          'A working lead board makes ownership and next steps visible without adding more admin than the team can use.',
      },
    },
    followUpPath: {
      header: {
        kicker: 'Follow-up Path',
        title: 'Follow-up should not depend on one person remembering.',
        description:
          'The route from enquiry to reply, quote, chase, booking, or close should be clear enough for the team to follow.',
      },
    },
    statusVisibility: {
      header: {
        kicker: 'Status Visibility',
        title: 'The owner should be able to see what is still open.',
        description:
          'Useful states make open leads easier to see, whether they are new, assigned, waiting, quoted, won, lost, or need action.',
      },
    },
    handoffBoundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'CRM starts after capture. It does not replace first response.',
        description:
          'This page must keep CRM in its lane: ownership, follow-up, and visibility after enquiries arrive.',
      },
    },
    readinessFilter: {
      header: {
        kicker: 'Readiness',
        title: 'Useful when leads exist and handling is scattered.',
        description:
          'The fit filter should separate businesses that need lead ownership from those that only need a contact form or a one-off cleanup.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about CRM setup.',
        description:
          'Short answers for buyers thinking about existing tools, team adoption, and lead ownership.',
      },
      items: [
        {
          id: 'crm-faq-existing-tools',
          question: 'Can this work with tools we already use?',
          answer:
            'Usually, yes. The first step is to check where enquiries arrive now, what must stay, and what needs to be connected or replaced.',
        },
        {
          id: 'crm-faq-team-use',
          question: 'Will the team need to learn a complicated system?',
          answer:
            'The setup should match how the team actually handles leads. The goal is visible ownership and simpler follow-up, not extra admin.',
        },
        {
          id: 'crm-faq-ai',
          question: 'Is this the same as AI lead handling?',
          answer:
            'No. AI Lead Handling covers the first response and routing gap. CRM & Automation owns what happens after the lead is captured.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find the follow-up gap.',
      description:
        'Tell us where leads arrive, who handles them, and what tends to get missed. We will map the ownership gaps before recommending a setup.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at how leads arrive today.' },
      { num: '02', text: 'We identify the ownership and follow-up gaps.' },
      { num: '03', text: 'We outline the simplest CRM structure needed.' },
    ],
  },
};
