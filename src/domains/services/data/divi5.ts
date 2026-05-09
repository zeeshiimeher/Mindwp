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

type Divi5Sections = {
  capabilityFit: HeaderOnlySection;
  deliveryPath: HeaderOnlySection;
  proofContext: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'divi5';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const divi5Page: ServicePageData<Divi5Sections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Divi 5 Website Implementation',
    description:
      'Practical Divi 5 implementation for service businesses that need a controlled website build or rebuild.',
  }),
  slug,
  badge: 'Divi 5',
  category: 'Builder Implementation',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Divi 5',
    title: 'Divi Can Stay. [[muted:The Structure Still Matters.]]',
    description:
      'If Divi is already part of the site, the question is not whether the builder exists. The question is whether the pages, enquiry paths, and handoff are doing their job.',
    list: ['Existing sites', 'Controlled rebuilds', 'Practical handoff'],
  },
  sections: {
    capabilityFit: {
      header: {
        kicker: 'Fit',
        title: 'Use Divi when the existing setup makes sense to keep.',
        description:
          'Divi is practical when the build constraint is clear and the wider site structure remains the main decision.',
      },
    },
    deliveryPath: {
      header: {
        kicker: 'Delivery',
        title: 'The rebuild still starts with the page path.',
        description:
          'Structure, content, and contact handling guide the build choices before theme preference does.',
      },
    },
    proofContext: {
      header: {
        kicker: 'Context',
        title: 'The result is judged by handling, not builder preference.',
        description: 'Keep this practical. Avoid feature lists about the builder itself.',
      },
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'Divi is a build method, not the business system.',
        description:
          'Divi belongs inside Smart Website Systems as an implementation choice, not as a separate offer.',
      },
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'The first decision is whether Divi is helping or holding back.',
        description:
          'When the site path is unclear, the next step is a Smart Website Systems conversation rather than a builder-only choice.',
      },
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether Divi should stay.',
      description:
        'Tell us what is already built, what needs to change, and whether keeping Divi is a constraint or a preference.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current Divi setup.' },
      { num: '02', text: 'We identify whether the structure can be fixed inside it.' },
      { num: '03', text: 'We explain the right rebuild path.' },
    ],
  },
};
