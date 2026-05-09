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

type LeadReactivationSections = {
  dormantLeadMap: HeaderOnlySection;
  reactivationPath: HeaderOnlySection;
  dataReadiness: HeaderOnlySection;
  handoffBack: HeaderOnlySection;
  fitBoundaries: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'lead-reactivation-system';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const leadReactivationSystemPage: ServicePageData<LeadReactivationSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Lead Reactivation System for Service Businesses',
    description:
      'A focused route for old enquiries, dormant leads, and quotes that need a proper follow-up path.',
  }),
  slug,
  badge: 'Lead Reactivation',
  category: 'Revenue Recovery',
  systems: [system],
  topics: ['client-reactivation', 'follow-up'],
  hero: {
    badge: 'Lead Reactivation',
    title: 'Old Enquiries Still Have Signals.',
    description:
      'Quotes went quiet. People asked and never booked. A lead reactivation system looks at what is already sitting there and creates a clean route back into conversation.',
    list: ['Old quotes', 'Dormant leads', 'Follow-up route'],
  },
  sections: {
    dormantLeadMap: {
      header: {
        kicker: 'Dormant Leads',
        title: 'Some work was not lost. It was never followed up properly.',
        description:
          'Old enquiries, quotes, and half-finished conversations often collect in places nobody checks consistently.',
      },
    },
    reactivationPath: {
      header: {
        kicker: 'Reactivation Path',
        title: 'The route back needs timing, context, and restraint.',
        description:
          'Practical follow-up starts with relevant context, clear timing, and a reason to reopen the conversation.',
      },
    },
    dataReadiness: {
      header: {
        kicker: 'Readiness',
        title: 'The quality of the old list decides what is possible.',
        description:
          'Data condition, consent, and available context decide what can be followed up and what should be left alone.',
      },
    },
    handoffBack: {
      header: {
        kicker: 'Handoff',
        title: 'Warm replies need a visible owner again.',
        description:
          'When someone responds, ownership needs to move back into a visible CRM or follow-up path.',
      },
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit',
        title: 'Useful when old interest exists and follow-up was weak.',
        description:
          'The work is about handling existing opportunities properly, not promising recovered revenue.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about lead reactivation.',
        description: 'Short answers about lists, consent, and what happens when people reply.',
      },
      items: [
        {
          id: 'reactivation-faq-list',
          question: 'Do we need a clean list before starting?',
          answer:
            'You need enough usable context to contact people properly. The first step is checking what data exists and whether it can be used responsibly.',
        },
        {
          id: 'reactivation-faq-crm',
          question: 'What happens when someone replies?',
          answer:
            'Replies need to return to a visible owner and next step. That handoff usually connects back into CRM & Automation.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check what can be reactivated.',
      description:
        'Tell us what old enquiries, quotes, or customer lists exist. We will look at whether there is a responsible route back into conversation.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check what old lead data exists.' },
      { num: '02', text: 'We identify what can be contacted responsibly.' },
      { num: '03', text: 'We map the reply handoff.' },
    ],
  },
};
