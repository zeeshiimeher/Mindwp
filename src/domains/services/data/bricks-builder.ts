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

type BricksBuilderSections = {
  capabilityFit: HeaderOnlySection;
  deliveryPath: HeaderOnlySection;
  proofContext: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'bricks-builder';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const bricksBuilderPage: ServicePageData<BricksBuilderSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Bricks Builder Website Implementation',
    description:
      'Practical Bricks Builder implementation for controlled service-business websites and rebuilds.',
  }),
  slug,
  badge: 'Bricks Builder',
  category: 'Builder Implementation',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Bricks Builder',
    title: 'Bricks Is A Build Route. [[muted:Not The Strategy.]]',
    description:
      'Bricks can be a good way to build a controlled site, but the important work is still the service structure, enquiry path, and handoff behind it.',
    list: ['Builder fit', 'Site structure', 'Clean handoff'],
  },
  sections: {
    capabilityFit: {
      header: {
        kicker: 'Fit',
        title: 'Use Bricks when control and structure matter.',
        description:
          'Bricks fits best when the build needs control, clarity, and a site structure that has already been thought through.',
      },
    },
    deliveryPath: {
      header: {
        kicker: 'Delivery',
        title: 'The build still follows the service path.',
        description:
          'Page flow, content, and enquiry handling guide the Bricks implementation before visual preferences do.',
      },
    },
    proofContext: {
      header: {
        kicker: 'Context',
        title: 'The site has to work for the business after launch.',
        description:
          'Keep examples tied to clarity, speed, ownership, and handoff rather than visual build technique alone.',
      },
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'Bricks does not replace the website system.',
        description:
          'The builder remains an implementation choice inside Smart Website Systems, not a separate service pillar.',
      },
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'The first decision is what the site must handle.',
        description:
          'When structure is the real need, the next step is to decide the site path before choosing the build method.',
      },
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether Bricks fits the build.',
      description:
        'Tell us what needs building or rebuilding. We will check whether Bricks is the right implementation route for the job.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current site and build goal.' },
      { num: '02', text: 'We identify whether Bricks is a good fit.' },
      { num: '03', text: 'We explain the simplest implementation route.' },
    ],
  },
};
