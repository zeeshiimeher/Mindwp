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

type EcommerceSections = {
  commerceFit: HeaderOnlySection;
  buyingPath: HeaderOnlySection;
  operationalHandoff: HeaderOnlySection;
  platformBoundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'ecommerce';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const woocommercePage: ServicePageData<EcommerceSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Ecommerce Website Systems for Service Businesses',
    description:
      'A practical commerce pathway for service businesses that need product, order, or payment handling connected to the wider website path.',
  }),
  slug,
  badge: 'Ecommerce',
  category: 'Commerce Pathway',
  systems: [system],
  topics: ['website-infrastructure'],
  hero: {
    badge: 'Ecommerce',
    title: 'Buying Online Still Needs Handling.',
    description:
      'Products, payments, deposits, and enquiries can sit beside service work. The page should keep commerce practical and tied to the business path.',
    list: ['Buying path', 'Order handoff', 'Service fit'],
  },
  sections: {
    commerceFit: {
      header: {
        kicker: 'Fit',
        title: 'Commerce only helps when the buying path is clear.',
        description:
          'Ecommerce belongs on the site when buying, deposit, booking, or order handling genuinely needs it.',
      },
    },
    buyingPath: {
      header: {
        kicker: 'Buying Path',
        title: 'The customer still needs a clear next step.',
        description:
          'Products, deposits, bookings, and quote requests are different paths, not one generic shop pattern.',
      },
    },
    operationalHandoff: {
      header: {
        kicker: 'Handoff',
        title: 'Orders and enquiries must land somewhere useful.',
        description:
          'Bridge to CRM or lead handling only when it clarifies what happens after purchase or enquiry.',
      },
    },
    platformBoundaries: {
      header: {
        kicker: 'Boundaries',
        title: 'The platform is not the strategy.',
        description:
          'Keep this page practical. Avoid generic ecommerce feature lists and unsupported revenue claims.',
      },
    },
    nextStep: {
      header: {
        kicker: 'Next Step',
        title: 'The first decision is whether ecommerce belongs here.',
        description:
          'The first decision is whether commerce helps the customer take the next step or adds friction.',
      },
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether commerce fits the site.',
      description:
        'Tell us what needs to be sold, booked, paid for, or requested. We will check whether ecommerce is the right route.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at the buying or booking path.' },
      { num: '02', text: 'We identify what must happen after purchase or enquiry.' },
      { num: '03', text: 'We explain the simplest commerce route.' },
    ],
  },
};
