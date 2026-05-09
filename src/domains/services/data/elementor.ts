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

type ElementorSections = {
  capabilityFit: HeaderOnlySection;
  deliveryPath: HeaderOnlySection;
  proofContext: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'elementor';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const elementorPage: ServicePageData<ElementorSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Elementor Website Implementation',
    description:
      'Practical Elementor implementation for service businesses that need a controlled website build inside a wider handling setup.',
  }),
  slug,
  badge: 'Elementor',
  category: 'Builder Implementation',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Elementor',
    title: 'Elementor Can Work. [[muted:If The Structure Does.]]',
    description:
      'Elementor is a build method, not the offer. It can fit when delivery stays controlled and the site structure already has a clear job.',
    list: ['Builder fit', 'Controlled build', 'Clear handoff'],
  },
  sections: {
    capabilityFit: {
      header: {
        kicker: 'Fit',
        title: 'Use Elementor when the build method fits the job.',
        description:
          'Elementor is practical when the build constraint is real and the wider site path is already clear.',
      },
    },
    deliveryPath: {
      header: {
        kicker: 'Delivery',
        title: 'The page build still follows the service structure.',
        description:
          'Content, page flow, and enquiry paths guide the implementation before builder preferences do.',
      },
    },
    proofContext: {
      header: {
        kicker: 'Context',
        title: 'The useful proof is whether the site handles enquiries.',
        description:
          'Keep examples practical. Avoid portfolio language or visual-design positioning.',
      },
    },
    boundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'Elementor is not the system.',
        description:
          'The builder is only one implementation layer. The service path and enquiry handling still decide the shape of the work.',
      },
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'The first question is whether the site path is clear.',
        description:
          'When structure is the real issue, the next step belongs with Smart Website Systems rather than a builder-only discussion.',
      },
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether Elementor fits the job.',
      description:
        'Tell us what already exists, what needs changing, and whether Elementor is fixed or optional. We will start with the site path, not the builder preference.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current site and build constraint.' },
      { num: '02', text: 'We identify whether Elementor is the right route.' },
      { num: '03', text: 'We explain the simplest next step.' },
    ],
  },
};
