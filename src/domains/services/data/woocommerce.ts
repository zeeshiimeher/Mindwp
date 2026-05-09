import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };
type FitRow = {
  id: string;
  origin: string;
  ageBand: string;
  signal: string;
  state: 'workable' | 'caution' | 'leave';
};
type SequenceStep = { id: string; num: string; timing: string; title: string; detail: string };
type RuleRow = { id: string; criterion: string; good: string; bad: string };
type BridgeRow = { id: string; belongsTo: 'ecom' | 'parent'; point: string };
type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type EcomSections = {
  commerceFit: { header: SectionHeader; label: string; sources: FitRow[]; closing: string };
  buyingPath: { header: SectionHeader; steps: SequenceStep[]; closing: string };
  platformBoundaries: { header: SectionHeader; rows: RuleRow[]; closing: string };
  operationalHandoff: { header: SectionHeader; rows: BridgeRow[]; rule: string };
  fitBoundaries: { header: SectionHeader; columns: FitColumn[]; closing: string };
  faq: { header: SectionHeader; items: Array<{ id: string; question: string; answer: string }> };
};

const slug = 'ecommerce';
const system = 'smart-website-systems';
const contactHref = buildServiceContactHref({ system, slug });

export const woocommercePage: ServicePageData<EcomSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Ecommerce Website Systems for Service Businesses',
    description:
      'A practical commerce route for service businesses that need product, order or payment handling tied into the wider site.',
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
      'Products, payments, deposits and enquiries can sit beside service work. The page keeps commerce practical and tied to the business path.',
    list: ['Buying path', 'Order handoff', 'Service fit'],
  },
  sections: {
    commerceFit: {
      header: {
        kicker: 'When Commerce Fits',
        title: 'Ecommerce belongs only when the buying path is clear.',
        description:
          'For service businesses, the question is rarely "do we sell online" — it is "what should be transactional and what should stay enquiry-led".',
      },
      label: 'Where commerce usually shows up alongside services',
      sources: [
        {
          id: 'e-01',
          origin: 'Productised packages',
          ageBand: 'Defined',
          signal: 'Fixed-price packages with no quoting work — clean to sell online.',
          state: 'workable',
        },
        {
          id: 'e-02',
          origin: 'Booking deposits',
          ageBand: 'Live',
          signal: 'Deposit at booking simplifies scheduling and reduces no-shows.',
          state: 'workable',
        },
        {
          id: 'e-03',
          origin: 'Physical products beside services',
          ageBand: 'Active',
          signal: 'Maintenance kits, parts, accessories — clear catalogue.',
          state: 'workable',
        },
        {
          id: 'e-04',
          origin: 'Bespoke services with quoting',
          ageBand: 'Mixed',
          signal: 'Better as enquiry-led. Avoid forcing into a checkout.',
          state: 'caution',
        },
        {
          id: 'e-05',
          origin: 'Pure marketplace ambitions',
          ageBand: 'Wrong scope',
          signal: 'Different problem entirely. Not service-business commerce.',
          state: 'leave',
        },
      ],
      closing:
        'Commerce is added where it helps the customer act, not for the sake of having a shop.',
    },
    buyingPath: {
      header: {
        kicker: 'Buying Path',
        title: 'A clean buying path is shorter than most teams expect.',
        description:
          'Customers need to find the thing, understand it, and complete the action. That is most of the job.',
      },
      steps: [
        {
          id: 'bp-01',
          num: '01',
          timing: 'See',
          title: 'A product or package page that answers the obvious questions.',
          detail: 'Price, what is included, what happens after — visible in seconds.',
        },
        {
          id: 'bp-02',
          num: '02',
          timing: 'Decide',
          title: 'A clear primary action.',
          detail: 'Buy, book, pay deposit, or request quote — not all four on the same page.',
        },
        {
          id: 'bp-03',
          num: '03',
          timing: 'Pay',
          title: 'Checkout that does not get in the way.',
          detail: 'Few fields, trusted payment, mobile-friendly. The boring details done well.',
        },
        {
          id: 'bp-04',
          num: '04',
          timing: 'After',
          title: 'A confirmation that explains what happens next.',
          detail:
            'When the work starts. Who will be in touch. Where the customer is in the process.',
        },
      ],
      closing: 'The path ends when the customer knows what is happening — not when payment lands.',
    },
    platformBoundaries: {
      header: {
        kicker: 'Platform Rules',
        title: 'The platform should match the volume and the team.',
        description:
          'Sensible platform choices keep maintenance reasonable and let the team run the shop without engineering on call.',
      },
      rows: [
        {
          id: 'pb-01',
          criterion: 'Catalogue size',
          good: 'Platform handles current and likely-near-future scale.',
          bad: 'Optimised for a marketplace the team will never run.',
        },
        {
          id: 'pb-02',
          criterion: 'Payment integration',
          good: 'Trusted gateways with clean reconciliation.',
          bad: 'Multiple half-wired payment routes nobody owns.',
        },
        {
          id: 'pb-03',
          criterion: 'Inventory and fulfilment',
          good: 'Honest about real fulfilment workflow — manual or automated.',
          bad: 'Pretends to be automated. Falls back on staff to fix.',
        },
        {
          id: 'pb-04',
          criterion: 'Tax and shipping rules',
          good: 'Configured once, owned by a named person.',
          bad: 'Edge cases discovered at the till by the customer.',
        },
      ],
      closing: 'The platform is a means. The buying experience is the point.',
    },
    operationalHandoff: {
      header: {
        kicker: 'System Bridge',
        title: 'Ecommerce takes the order. The wider system runs what follows.',
        description:
          'Commerce hands off to scheduling, CRM and customer communication. The buying surface is one piece of a larger flow.',
      },
      rows: [
        { id: 'eb-01', belongsTo: 'ecom', point: 'Building the product or package pages.' },
        { id: 'eb-02', belongsTo: 'ecom', point: 'Wiring checkout, payment and confirmation.' },
        { id: 'eb-03', belongsTo: 'ecom', point: 'Defining the buying path inside the site.' },
        {
          id: 'eb-04',
          belongsTo: 'parent',
          point: 'Holding scheduling, fulfilment and team workflow.',
        },
        {
          id: 'eb-05',
          belongsTo: 'parent',
          point: 'Owning the customer relationship after the sale.',
        },
        {
          id: 'eb-06',
          belongsTo: 'parent',
          point: 'Carrying the wider site framework around the shop.',
        },
      ],
      rule: 'Commerce sells the thing. The wider system delivers it.',
    },
    fitBoundaries: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when commerce supports the business — not when it replaces enquiries.',
        description:
          'For most service businesses, commerce is a focused part of the site, not the whole reason for it.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Service business with productised offers or deposits.',
          signals: [
            'Fixed-price packages already in use.',
            'Booking deposits would reduce no-shows.',
            'Physical products sit beside the services.',
            'Team can handle order workflow.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'Quote-led work or no real catalogue.',
          signals: [
            'Every job is bespoke and quoted.',
            'No clear products or packages to sell.',
            'No internal capacity to run a shop.',
            'Commerce would distract from the core enquiry path.',
          ],
        },
      ],
      closing:
        'When commerce does not fit, the site stays enquiry-led. That is often the right answer.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about ecommerce on a service site.',
        description: 'Short answers about platform, scope and operational handoff.',
      },
      items: [
        {
          id: 'ecom-faq-platform',
          question: 'Which platform do you use?',
          answer:
            'The right platform depends on volume, team and integration needs. WooCommerce is common for service-business commerce that lives alongside content pages.',
        },
        {
          id: 'ecom-faq-volume',
          question: 'Is this for high-volume retail?',
          answer:
            'No. The work is for service businesses that need a focused commerce route — not for marketplace or large-catalogue retail.',
        },
        {
          id: 'ecom-faq-quote',
          question: 'Should every service be sold online?',
          answer:
            'No. Bespoke services usually stay enquiry-led. Productised offers and deposits are the usual commerce candidates.',
        },
        {
          id: 'ecom-faq-after',
          question: 'What happens after purchase?',
          answer:
            'Order handoff goes into scheduling and customer communication. Commerce takes the order; the wider system runs the work.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Check whether commerce belongs here.',
      description:
        'Tell us what needs to be sold, booked or paid for. We will look at whether ecommerce is the right route, and where the buying path should sit alongside enquiries.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at what is buyable today.' },
      { num: '02', text: 'We separate commerce candidates from enquiries.' },
      { num: '03', text: 'We outline the simplest buying path that fits.' },
    ],
  },
};
