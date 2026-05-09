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

type WebsiteRedesignSections = {
  decisionProblem: HeaderOnlySection;
  comparison: HeaderOnlySection;
  rebuildTriggers: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'website-redesign-system-rebuild';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const websiteRedesignSystemRebuildPage: ServicePageData<WebsiteRedesignSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Website Redesign vs System Rebuild',
    description:
      'A focused decision page for separating surface redesign from rebuilding the website path behind enquiries.',
  }),
  slug,
  badge: 'Redesign Decision',
  category: 'Decision Support',
  systems: [system],
  topics: ['website-infrastructure', 'service-page-architecture'],
  hero: {
    badge: 'Redesign Decision',
    title: 'A New Look May Not Fix The Leak.',
    description:
      'Sometimes the site looks dated. Sometimes the deeper problem is that enquiries, service paths, and next steps are unclear. Those are different decisions.',
    list: ['Redesign', 'Rebuild', 'Enquiry path'],
  },
  sections: {
    decisionProblem: {
      header: {
        kicker: 'Decision Problem',
        title: 'The first question is what is actually broken.',
        description:
          'A dated look and a handling failure are different problems, even when they appear on the same website.',
      },
    },
    comparison: {
      header: {
        kicker: 'Comparison',
        title: 'A redesign changes the surface. A rebuild changes the path.',
        description:
          'The comparison is between a visual refresh and a structural rebuild that changes how the site handles enquiries.',
      },
    },
    rebuildTriggers: {
      header: {
        kicker: 'Triggers',
        title: 'Rebuild when the site cannot handle the work coming in.',
        description:
          'Structural work becomes necessary when forms, pages, service paths, or handoffs are part of the failure.',
      },
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'This page supports the redesign decision only.',
        description:
          'Keep it narrow and route to Smart Website Systems when the whole site path needs rebuilding.',
      },
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'The next move is to identify what the site fails to handle.',
        description:
          'The next step is to decide whether the issue is surface presentation, handling structure, or both.',
      },
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether this is a redesign or rebuild.',
      description:
        'Tell us what feels broken about the current site. We will help separate visual issues from structural handling problems.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at what is visibly wrong.' },
      { num: '02', text: 'We check whether enquiry handling is also broken.' },
      { num: '03', text: 'We explain whether redesign or rebuild fits.' },
    ],
  },
};
