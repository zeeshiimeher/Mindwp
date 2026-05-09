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

type ConversionFunnelDecisionSections = {
  decisionProblem: HeaderOnlySection;
  comparison: HeaderOnlySection;
  chooseStructured: HeaderOnlySection;
  boundaries: HeaderOnlySection;
  nextStep: HeaderOnlySection;
};

const slug = 'conversion-funnel-system-vs-landing-page-development';
const system = 'revenue-growth';
const contactHref = buildServiceContactHref({ system, slug });

export const conversionFunnelSystemVsLandingPageDevelopmentPage: ServicePageData<ConversionFunnelDecisionSections> =
  {
    seo: buildServiceSeo({
      slug,
      title: 'Conversion Funnel System vs Landing Page Development',
      description:
        'A focused comparison for deciding between a one-off landing page and a connected conversion path.',
    }),
    slug,
    badge: 'Funnel Decision',
    category: 'Decision Support',
    systems: [system],
    topics: ['conversion-optimization', 'lead-capture', 'service-page-architecture'],
    hero: {
      badge: 'Funnel Decision',
      title: 'A Landing Page May Not Be Enough.',
      description:
        'A page can collect clicks and still fail to move the buyer forward. This decision page should compare a one-off landing page with a connected path that handles the next step.',
      list: ['Decision support', 'Page path', 'Next step'],
    },
    sections: {
      decisionProblem: {
        header: {
          kicker: 'Decision Problem',
          title: 'The question is what happens after the click.',
          description:
            'The choice starts with whether the business needs one focused page or a connected path that handles the next step.',
        },
      },
      comparison: {
        header: {
          kicker: 'Comparison',
          title: 'A single page and a connected path solve different problems.',
          description:
            'A focused comparison can show the trade-off without fabricated metrics or broad claims.',
        },
      },
      chooseStructured: {
        header: {
          kicker: 'Choose',
          title: 'Choose the route that matches the business problem.',
          description:
            'A lighter page is enough in some cases. A fuller path is needed when enquiry handling depends on more than one click.',
        },
      },
      boundaries: {
        header: {
          kicker: 'Boundaries',
          title: 'This page supports a decision. It is not the full Revenue Growth route.',
          description:
            'Revenue Growth remains canonical-only. This page stays narrow and routes to the right next step.',
        },
      },
      nextStep: {
        header: {
          kicker: 'Next Step',
          title: 'The next move depends on where the buyer stalls.',
          description:
            'The next step should point toward the right service context rather than forcing every buyer into the same page type.',
        },
      },
    },
    cta: {
      heading: {
        kicker: 'Next Step',
        title: 'Decide what the page needs to handle.',
        description:
          'Tell us what the landing page is meant to do and what happens after someone responds. We will help identify the right route.',
      },
      actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
      expectations: [
        { num: '01', text: 'We clarify the business decision.' },
        { num: '02', text: 'We identify whether a single page is enough.' },
        { num: '03', text: 'We route the next step clearly.' },
      ],
    },
  };
