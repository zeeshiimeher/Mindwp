import { buildServiceSeo } from '../seo';

import { conversionLayerPage } from './conversion-layer';

const slug = 'conversion-funnel-system-vs-landing-page-development';

export const conversionFunnelSystemVsLandingPageDevelopmentPage = {
  ...conversionLayerPage,
  slug,
  seo: buildServiceSeo({
    slug,
    title: 'Conversion Funnel System vs Landing Page Development | MindWP',
    description:
      'A service decision page comparing isolated landing-page development against a full conversion funnel system for service businesses that need stronger movement from attention to action.',
  }),
  category: conversionLayerPage.category,
  badge: 'Conversion Funnel System',
  hero: {
    ...conversionLayerPage.hero,
    badge: 'Conversion Funnel System',
    title: 'Conversion Funnel System vs Landing Page Development',
    description:
      'A landing page can ship without fixing the revenue path around it. This page is for businesses deciding whether they need a single page delivered or the full path from click to follow-up rebuilt as one system.',
    list: ['Single page', 'Broken path', 'System decision'],
  },
  sections: {
    ...conversionLayerPage.sections,
    foundation: {
      ...conversionLayerPage.sections.foundation,
      badge: 'Problem',
      title: 'Landing-page development does not solve a broken conversion path by itself',
      description:
        'A well-designed page still underperforms if the offer, CTA fit, and post-submit follow-up stay disconnected. That is why many businesses rebuild pages repeatedly without improving actual conversion.',
    },
    funnelBreakpoints: conversionLayerPage.sections.funnelBreakpoints,
    comparison: {
      ...conversionLayerPage.sections.comparison,
      header: {
        ...conversionLayerPage.sections.comparison.header,
        title: 'Landing page development vs conversion funnel system',
        description:
          'One approach produces a page. The other defines how relevance, proof, action, and follow-up work together after traffic arrives.',
      },
      items: [
        {
          type: 'before',
          title: 'Landing page development only',
          items: [
            'A new page gets designed and launched, but the wider offer logic, CTA fit, and post-submit experience stay unchanged.',
            'The page may look sharper while the same follow-up delays, unclear next steps, and drop-off points keep conversion flat.',
            'The business ends up judging page design in isolation because there is still no system-wide visibility into where action dies.',
          ],
        },
        {
          type: 'after',
          title: 'Conversion funnel system',
          items: [
            'Traffic source, page message, CTA, and follow-up route are treated as one connected path instead of separate projects.',
            'Each step from arrival to enquiry has a defined role, measurable drop-off points, and a next action that matches buyer intent.',
            'The business learns whether the leak is on-page, after-submit, or earlier in the offer structure, so improvements stop being guesswork.',
          ],
        },
      ],
    },
    comparisonMetrics: {
      ...conversionLayerPage.sections.comparisonMetrics,
      title: 'What a funnel system changes that page-only work usually misses',
      description:
        'The gains are not just visual. They show up in clarity, response continuity, and the number of visitors who can move forward without confusion.',
    },
    processSection: conversionLayerPage.sections.processSection,
    funnelLevers: conversionLayerPage.sections.funnelLevers,
    qualification: {
      ...conversionLayerPage.sections.qualification,
      title: 'Decision section: when funnel work is the right service choice',
      description:
        'Choose the funnel-system route when the business does not just need a page built. It needs the whole path from click to response to work as one system.',
    },
    faqSection: conversionLayerPage.sections.faqSection,
  },
  cta: {
    heading: {
      title: 'See whether the real need is a page build or a full funnel system',
      description:
        'We will map where attention drops, where the next-step mismatch begins, and whether page-only work would leave the commercial leak untouched.',
    },
    actions: [{ label: 'Get Started', href: '/contact', primary: true }],
  },
} satisfies typeof conversionLayerPage;
