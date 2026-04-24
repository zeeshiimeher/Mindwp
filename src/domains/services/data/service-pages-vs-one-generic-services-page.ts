import { buildServiceSeo } from '../seo';

import { smartWebsiteSystemsPage } from './smart-website-systems';

const slug = 'service-pages-vs-one-generic-services-page';

export const servicePagesVsOneGenericServicesPage = {
  ...smartWebsiteSystemsPage,
  slug,
  badge: 'Smart Websites',
  category: smartWebsiteSystemsPage.category,
  seo: buildServiceSeo({
    slug,
    title: 'Service Pages vs One Generic Services Page | MindWP',
    description:
      'A BOFU service page for businesses deciding whether a single generic services page is enough or whether dedicated service pages are required for visibility and conversion.',
  }),
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
    value: {
      ...smartWebsiteSystemsPage.sections.value,
      header: {
        ...smartWebsiteSystemsPage.sections.value.header,
        title: 'What one generic services page keeps hiding',
        description:
          'A broad page can mention everything you do without helping Google rank it or helping visitors identify the one service they actually need.',
      },
    },
    types: smartWebsiteSystemsPage.sections.types,
    comparison: {
      ...smartWebsiteSystemsPage.sections.comparison,
      header: {
        ...smartWebsiteSystemsPage.sections.comparison.header,
        title: 'One generic services page vs dedicated service pages',
        description:
          'This is the structural difference between saying you offer everything and giving each service its own page, proof, and next step.',
      },
      items: [
        {
          type: 'before',
          title: 'One generic services page',
          items: [
            'Every service shares the same headline, same supporting copy, and same CTA, so relevance stays vague for both search engines and buyers.',
            'Someone looking for one specific service has to scan a long mixed page before deciding whether you even do what they need.',
            'Traffic lands, but attribution stays muddy because no page clearly owns that service intent or conversion path.',
          ],
        },
        {
          type: 'after',
          title: 'Dedicated service pages',
          items: [
            'Each service owns its own search intent, commercial framing, proof, and CTA, so relevance is obvious without extra interpretation.',
            'Visitors land on a page that matches the job they were already searching for, which reduces hesitation and speeds up contact.',
            'The business can see which service pages drive enquiries, which offers convert, and where to strengthen proof next.',
          ],
        },
      ],
    },
    included: {
      ...smartWebsiteSystemsPage.sections.included,
      header: {
        ...smartWebsiteSystemsPage.sections.included.header,
        title: 'What a real service-page rebuild includes',
      },
    },
    coreLayer: smartWebsiteSystemsPage.sections.coreLayer,
    process: {
      ...smartWebsiteSystemsPage.sections.process,
      header: {
        ...smartWebsiteSystemsPage.sections.process.header,
        title: 'How the rebuild turns one broad page into a service system',
      },
    },
    visibilityFoundations: smartWebsiteSystemsPage.sections.visibilityFoundations,
    qualification: {
      ...smartWebsiteSystemsPage.sections.qualification,
      header: {
        ...smartWebsiteSystemsPage.sections.qualification.header,
        title: 'Decision section: when a generic services page is no longer enough',
      },
    },
    faq: smartWebsiteSystemsPage.sections.faq,
  },
  cta: {
    title: 'See which service pages carry the highest commercial risk first',
    description:
      'We will map the services currently buried on one generic page, show which ones need their own search and conversion path, and scope the rebuild around that priority.',
  },
  inlineCta: {
    title: 'Compare where generic page structure hides demand',
    description:
      'See what changes when each service gets its own intent, proof, and next step instead of competing inside one mixed page.',
  },
} satisfies typeof smartWebsiteSystemsPage;
