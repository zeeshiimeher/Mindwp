import { buildServiceSeo } from '../seo';
import type { ServicePageData } from '../types';

import { smartWebsiteSystemsPage } from './smart-website-systems';

const slug = 'service-pages-vs-one-generic-services-page';

export const servicePagesVsOneGenericServicesPage = {
  ...smartWebsiteSystemsPage,
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Service Pages vs One Generic Services Page',
    description:
      'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
  }),
  badge: 'Smart Websites',
  category: smartWebsiteSystemsPage.category,
  hero: {
    ...smartWebsiteSystemsPage.hero,
    badge: 'Website Rebuild Decision',
    title: 'Service Pages vs One Generic Services Page',
    description:
      'If every offer sits on one broad services page, Google gets weak signals and buyers get weak answers. This page shows why businesses that want clearer search visibility and clearer conversion control usually need dedicated service pages.',
    list: ['Generic page blur', 'Weak search signals', 'Rebuild decision'],
  },
  sections: {
    ...smartWebsiteSystemsPage.sections,
    // Override comparison with decision-framing for this page
    comparison: {
      ...smartWebsiteSystemsPage.sections.comparison,
      header: {
        ...smartWebsiteSystemsPage.sections.comparison.header,
        title: 'One generic services page vs dedicated service pages',
        description:
          'This is the structural difference between saying you offer everything and giving each service its own page, proof, and next step.',
      },
      leftState: {
        label: 'One generic page',
        title: 'One generic services page',
        groups: [
          {
            label: 'Relevance',
            text: 'Every service shares the same headline, same supporting copy, and same CTA, so relevance stays vague for both search engines and buyers.',
          },
          {
            label: 'Discovery',
            text: 'Someone looking for one specific service has to scan a long mixed page before deciding whether you even do what they need.',
          },
          {
            label: 'Attribution',
            text: 'Traffic lands, but attribution stays muddy because no page clearly owns that service intent or conversion path.',
          },
        ],
      },
      rightState: {
        label: 'Dedicated pages',
        title: 'Dedicated service pages',
        groups: [
          {
            label: 'Relevance',
            text: 'Each service owns its own search intent, commercial framing, proof, and CTA, so relevance is obvious without extra interpretation.',
          },
          {
            label: 'Discovery',
            text: 'Visitors land on a page that matches the job they were already searching for, which reduces hesitation and speeds up contact.',
          },
          {
            label: 'Attribution',
            text: 'The business can see which service pages drive enquiries, which offers convert, and where to strengthen proof next.',
          },
        ],
      },
    },
    // Override fitFilter header for decision context
    fitFilter: {
      ...smartWebsiteSystemsPage.sections.fitFilter,
      header: {
        ...smartWebsiteSystemsPage.sections.fitFilter.header,
        title: 'Decision section: when a generic services page is no longer enough',
      },
    },
  },
  cta: {
    heading: {
      title: 'See which service pages carry the highest commercial risk first',
      description:
        'We will map the services currently buried on one generic page, show which ones need their own search and conversion path, and scope the rebuild around that priority.',
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies ServicePageData;
