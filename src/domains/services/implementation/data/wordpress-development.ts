import { buildContactHref } from '@/lib/contact/contactHref';

import { buildServiceSeo } from '../../seo';
import type { ServicePageData } from '../../types';

// =============================================================================
// WordPress Development — page
// =============================================================================

export const wordpressDevelopmentPage = {
  seo: buildServiceSeo({
    slug: 'wordpress-development',
    title: 'Smart Website Systems for Service Businesses',
    description:
      'Websites that capture enquiries, route them with context, and connect the next step clearly. Built for service businesses losing leads between the website and follow-up.',
  }),
  slug: 'wordpress-development',
  primarySystem: 'smart-website-systems',
  topics: [
    'website-infrastructure',
    'lead-capture',
    'conversion-optimization',
    'crm-enabled-websites',
    'service-pages',
  ],
  eyebrow: 'Smart Websites',
  category: 'Website That Works',
  hero: {
    eyebrow: 'Smart Websites',
    title: 'The Website Looks Fine. [[muted:The Enquiry Still Slips.]]',
    description:
      'A smart website is not only a better-looking page. It gives the visitor a clear answer, captures the enquiry with context, and makes the next step visible before the lead goes cold.',
    list: ['Clear service path', 'Captured enquiry', 'Owned follow-up'],
    visual: {
      title: 'Live enquiry feed',
      subtitle: 'Website signals · routed with context',
      rows: [
        { label: 'Service page visit', value: 'Intent visible', status: 'unowned' as const },
        { label: 'Quote form submitted', value: 'Captured', status: 'handled' as const },
        { label: 'Missed call from mobile', value: 'Needs response', status: 'leaking' as const },
        { label: 'Follow-up reminder', value: 'Owned', status: 'handled' as const },
      ],
      footerPrimary: 'Source attached',
      footerSecondary: 'Next step visible',
    },
  },
  faq: {
    header: {
      title: 'What business owners ask before getting started',
      description: 'Direct answers. No jargon.',
    },
    items: [
      {
        question: 'How is this different from getting a new website built?',
        answer:
          'Most builds stop at how the site looks. A Smart Website System focuses on what happens after someone lands on the site: whether they understand the service, make contact, and get handled properly.',
      },
      {
        question: 'Do we have to start from scratch?',
        answer:
          'Not always. If your current site can support the structure, capture points, and handoff layer, we can improve around it. If it cannot, we will say that clearly before recommending a rebuild.',
      },
      {
        question: 'Does this include service pages?',
        answer:
          'Yes. Service pages are part of the foundation. Each important service needs a clear page that answers the right question and gives the enquiry a clear next step.',
      },
      {
        question: 'Does this connect to our CRM or follow-up system?',
        answer:
          'That is the point. The website should not just send a form somewhere. It should pass the right context into the place where the enquiry can be handled.',
      },
      {
        question: 'How long does it usually take?',
        answer:
          'A straightforward build usually takes several weeks. The timeline depends on how many services, locations, forms, handoffs, and content decisions need to be handled.',
      },
    ],
  },
  cta: {
    heading: {
      title: 'Something here hit close.',
      muted: 'Find where it is breaking.',
      description:
        'We can map what needs fixing first — whether you are patching years of workarounds or starting clean.',
    },
    actions: [
      {
        label: 'Request a System Review',
        href: buildContactHref({
          system: 'smart-website-systems',
          sourceType: 'service',
          slug: 'implementation/wordpress-development',
        }),
        primary: true,
      },
    ],
    expectations: [
      { num: '01', text: 'Where your enquiries are coming from' },
      { num: '02', text: 'What the page is failing to capture' },
      { num: '03', text: 'Where visitors drop before contact' },
      { num: '04', text: 'What to fix first' },
    ],
    footer: {
      noSell: 'No commitment needed.',
      tone: 'Direct review',
    },
  },
} satisfies ServicePageData;
