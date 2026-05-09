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

type WebsiteCRMDecisionSections = {
  decisionProblem: HeaderOnlySection;
  comparison: HeaderOnlySection;
  chooseCRM: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'website-crm-integration-vs-manual-lead-handling';
const system = 'crm-automation';
const contactHref = buildServiceContactHref({ system, slug });

export const websiteCrmIntegrationVsManualLeadHandlingPage: ServicePageData<WebsiteCRMDecisionSections> =
  {
    seo: buildServiceSeo({
      slug,
      title: 'Website CRM Integration vs Manual Lead Handling',
      description:
        'A focused comparison for deciding when manual lead handling is no longer enough.',
    }),
    slug,
    badge: 'CRM Decision',
    category: 'Decision Support',
    systems: [system],
    topics: ['crm-pipeline', 'crm-integration', 'lead-qualification', 'pipeline-architecture'],
    hero: {
      badge: 'CRM Decision',
      title: 'Manual Handling Works. [[muted:Until It Does Not.]]',
      description:
        'At first, leads can be handled from memory, email, and quick replies. As volume grows, the question becomes whether every enquiry still has an owner and next step.',
      list: ['Manual handling', 'CRM ownership', 'Follow-up'],
    },
    sections: {
      decisionProblem: {
        header: {
          kicker: 'Decision Problem',
          title: 'The issue is not tools. It is whether leads stay owned.',
          description:
            'The decision starts when manual handling stops giving the business a clear view of lead ownership.',
        },
      },
      comparison: {
        header: {
          kicker: 'Comparison',
          title: 'Manual handling and CRM ownership fail in different places.',
          description: 'The comparison is between memory-led handling and visible lead ownership.',
        },
      },
      chooseCRM: {
        header: {
          kicker: 'Choose',
          title: 'CRM becomes useful when follow-up needs a visible state.',
          description:
            'Structured ownership becomes useful when another inbox habit will not make follow-up clearer.',
        },
      },
      boundaries: {
        header: {
          kicker: 'Boundaries',
          title: 'This page supports the CRM decision only.',
          description:
            'Keep it narrow. Do not absorb website strategy, first response, or review work.',
        },
      },
      nextStep: {
        header: {
          kicker: 'Next Step',
          title: 'The next move is to find where manual handling breaks.',
          description: 'When ownership is the issue, the next step belongs with CRM & Automation.',
        },
      },
    },
    cta: {
      heading: {
        kicker: 'Next Step',
        title: 'Check whether manual handling is still enough.',
        description:
          'Tell us how leads are handled today. We will look for the point where ownership, follow-up, or visibility breaks.',
      },
      actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
      expectations: [
        { num: '01', text: 'We map the current manual path.' },
        { num: '02', text: 'We identify where ownership breaks.' },
        { num: '03', text: 'We explain whether CRM is needed yet.' },
      ],
    },
  };
