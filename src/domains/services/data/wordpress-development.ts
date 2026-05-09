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

type WordPressDevelopmentSections = {
  fitContext: HeaderOnlySection;
  buildPath: HeaderOnlySection;
  operatingBoundaries: HeaderOnlySection;
  handoffIntoSystems: HeaderOnlySection;
  fitBoundaries: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'wordpress-development';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const wordpressDevelopmentPage: ServicePageData<WordPressDevelopmentSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'WordPress Development for Service Businesses',
    description:
      'WordPress implementation for service businesses that need a controlled website path, not a generic agency build.',
  }),
  slug,
  badge: 'WordPress Development',
  category: 'Implementation Pathway',
  systems: [system],
  topics: ['website-infrastructure', 'systems-first-websites'],
  hero: {
    badge: 'WordPress Development',
    title: 'WordPress Is The Tool. [[muted:Handling Is The Job.]]',
    description:
      'A WordPress site can look finished while enquiries still leak. WordPress is an implementation route under Smart Website Systems.',
    list: ['Structured pages', 'Enquiry path', 'Maintainable build'],
  },
  sections: {
    fitContext: {
      header: {
        kicker: 'Fit',
        title: 'WordPress works when the structure underneath is clear.',
        description:
          'The useful question is what business path the site must support, not whether WordPress can publish pages.',
      },
    },
    buildPath: {
      header: {
        kicker: 'Build Path',
        title: 'The site build follows content, capture, and handoff needs.',
        description:
          'Implementation follows the approved page structure, enquiry path, and handoff needs.',
      },
    },
    operatingBoundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'A WordPress build is not the whole offer.',
        description:
          'Keep WordPress in its role as a practical implementation route, not a separate strategic system.',
      },
    },
    handoffIntoSystems: {
      header: {
        kicker: 'Handoff',
        title: 'The build must feed the right next step.',
        description:
          'Bridge to lead handling, CRM, or reviews only as handoff context, then return to website structure.',
      },
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when WordPress is the right base for the site.',
        description:
          'A practical WordPress implementation is different from a full site strategy decision.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about WordPress development.',
        description: 'Short answers about scope, builders, maintenance, and handoff.',
      },
      items: [
        {
          id: 'wp-faq-builder',
          question: 'Is this just a WordPress build?',
          answer:
            'No. WordPress is the implementation route. The page structure, enquiry path, and handoff decide what the build needs to do.',
        },
        {
          id: 'wp-faq-existing-site',
          question: 'Can an existing WordPress site be reused?',
          answer:
            'Sometimes. The first step is checking whether the current setup can support the structure and handling the business needs.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check what WordPress needs to handle.',
      description:
        'Tell us what exists now and what the site needs to do. We will start with structure before build choices.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We check the current WordPress state.' },
      { num: '02', text: 'We identify the page and enquiry path needs.' },
      { num: '03', text: 'We explain the right implementation route.' },
    ],
  },
};
