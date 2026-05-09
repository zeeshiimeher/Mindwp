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

type ReputationReviewSections = {
  trustGap: HeaderOnlySection;
  reviewTiming: HeaderOnlySection;
  feedbackRoute: HeaderOnlySection;
  monitoringBoard: HeaderOnlySection;
  localTrustHandoff: HeaderOnlySection;
  fitFilter: HeaderOnlySection;
  faq: FAQSectionData;
};

const slug = 'reputation-review-systems';
const system = 'reputation-review';
const contactHref = buildServiceContactHref({ system, slug });

export const reputationReviewSystemsPage: ServicePageData<ReputationReviewSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Reputation and Review Systems for Service Businesses',
    description:
      'Review request timing, feedback routing, and trust signal monitoring for service businesses that do good work but do not capture enough proof.',
  }),
  slug,
  badge: 'Reputation & Reviews',
  category: 'Trust Signals',
  systems: [system],
  topics: [
    'review-generation',
    'review-automation',
    'reputation-monitoring',
    'customer-feedback',
    'negative-reviews',
    'feedback-loops',
    'negative-review-response',
  ],
  hero: {
    badge: 'Reputation & Reviews',
    title: 'Good Work Happens. [[muted:The Proof Does Not.]]',
    description:
      'Jobs finish, customers are happy, and the team moves on. Reviews are asked for late, not at all, or only when someone remembers. Reputation & Review Systems make the ask and feedback route part of the job path.',
    list: ['Review timing', 'Feedback routing', 'Trust signals'],
  },
  sections: {
    trustGap: {
      header: {
        kicker: 'Trust Gap',
        title: 'The business may be trusted offline but quiet online.',
        description:
          'Good completed work does not always become visible proof. The gap appears when nobody asks at the right moment.',
      },
    },
    reviewTiming: {
      header: {
        kicker: 'Review Timing',
        title: 'The right moment to ask is usually after the job is done well.',
        description:
          'Review requests work best when timing and handoff are clear, without pressure or fake reputation work.',
      },
    },
    feedbackRoute: {
      header: {
        kicker: 'Feedback Route',
        title: 'Sensitive feedback needs a route before it becomes public damage.',
        description:
          'A useful review system separates public review requests from private feedback that needs attention first.',
      },
    },
    monitoringBoard: {
      header: {
        kicker: 'Monitoring',
        title: 'Review signals should be visible, not checked by habit.',
        description:
          'Review status, new feedback, follow-up needed, and unresolved risk all need a visible place to land.',
      },
    },
    localTrustHandoff: {
      header: {
        kicker: 'Local Trust',
        title: 'Reviews support local trust, but they are not Local SEO itself.',
        description:
          'This page can bridge to Local SEO Authority while keeping review generation and feedback routing as the owning job.',
      },
    },
    fitFilter: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when good jobs happen and proof is inconsistent.',
        description:
          'The page should qualify buyers who already deliver real service, not businesses looking for shortcuts or fake reviews.',
      },
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about reputation and reviews.',
        description:
          'Short answers for buyers who want review growth without crossing ethical or platform boundaries.',
      },
      items: [
        {
          id: 'rep-faq-fake-reviews',
          question: 'Do you create reviews for us?',
          answer:
            'No. The system helps ask real customers at the right time and route feedback properly. It does not create fake reviews.',
        },
        {
          id: 'rep-faq-negative-feedback',
          question: 'What happens with negative feedback?',
          answer:
            'The aim is to route sensitive feedback to the business quickly so it can be handled properly before it becomes a public surprise.',
        },
        {
          id: 'rep-faq-local-seo',
          question: 'Is this the same as Local SEO?',
          answer:
            'No. Reviews can support local trust, but Local SEO Authority owns visibility and authority signals. This page owns review request timing and feedback routing.',
        },
      ],
    },
  },
  cta: {
    heading: {
      kicker: 'Next Step',
      title: 'Find where proof is slipping.',
      description:
        'Tell us how jobs finish, when customers are asked, and what happens with feedback now. We will look for the simplest review route to put in place.',
    },
    actions: [{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }],
    expectations: [
      { num: '01', text: 'We look at when good jobs currently finish.' },
      { num: '02', text: 'We identify where review requests or feedback stall.' },
      { num: '03', text: 'We outline the review route that fits the business.' },
    ],
  },
};
