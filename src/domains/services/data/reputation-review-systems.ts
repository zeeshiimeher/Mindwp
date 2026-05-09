import { buildServiceSeo } from '@/domains/services/seo';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionHeader = { kicker: string; title: string; description?: string };

type SilentJob = {
  id: string;
  job: string;
  finishedOn: string;
  outcome: string;
  proofState: 'silent' | 'verbal' | 'asked-late' | 'never-asked';
  note: string;
};

type AskMoment = {
  id: string;
  stage: string;
  title: string;
  detail: string;
  fit: 'best' | 'good' | 'avoid';
};

type FeedbackPath = {
  id: string;
  variant: 'public' | 'private';
  label: string;
  title: string;
  trigger: string;
  steps: string[];
  closing: string;
};

type SignalRow = {
  id: string;
  channel: string;
  scope: string;
  recent: string;
  state: 'healthy' | 'attention' | 'gap' | 'risk';
  detail: string;
};

type LSABridgeRow = {
  id: string;
  belongsTo: 'reviews' | 'lsa';
  point: string;
};

type FitColumn = {
  id: string;
  variant: 'fit' | 'not-fit';
  label: string;
  title: string;
  signals: string[];
};

type ReputationReviewSections = {
  trustGap: {
    header: SectionHeader;
    label: string;
    note: string;
    jobs: SilentJob[];
  };
  reviewTiming: {
    header: SectionHeader;
    moments: AskMoment[];
    closing: string;
  };
  feedbackRoute: {
    header: SectionHeader;
    paths: FeedbackPath[];
    rule: string;
  };
  monitoringBoard: {
    header: SectionHeader;
    label: string;
    rows: SignalRow[];
    rule: string;
  };
  localTrustHandoff: {
    header: SectionHeader;
    rows: LSABridgeRow[];
    rule: string;
  };
  fitFilter: {
    header: SectionHeader;
    columns: FitColumn[];
    closing: string;
  };
  faq: {
    header: SectionHeader;
    items: Array<{ id: string; question: string; answer: string }>;
  };
};

const slug = 'reputation-review-systems';
const system = 'reputation-review';
const contactHref = buildServiceContactHref({ system, slug });

export const reputationReviewSystemsPage: ServicePageData<ReputationReviewSections> = {
  seo: buildServiceSeo({
    slug,
    title: 'Reputation and Review Systems for Service Businesses',
    description:
      'Review request timing, feedback routing and trust signal monitoring for service businesses that do good work but do not capture enough proof.',
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
      'Jobs finish, customers are happy, and the team moves on. Reviews are asked for late, not at all, or only when someone remembers. Reputation & Review Systems make the ask and the feedback route part of the job path.',
    list: ['Review timing', 'Feedback routing', 'Trust signals'],
  },
  sections: {
    trustGap: {
      header: {
        kicker: 'Trust Gap',
        title: 'Trusted offline. Quiet online.',
        description:
          'Good completed work does not always become visible proof. The gap appears when nobody asks at the right moment.',
      },
      label: 'Recent jobs — proof status',
      note: 'Sample of how proof tends to look without a review system in place.',
      jobs: [
        {
          id: 'sj-01',
          job: 'Bathroom refurbishment — Walker',
          finishedOn: 'Two weeks ago',
          outcome: 'Customer thanked the team in person.',
          proofState: 'verbal',
          note: 'No public review left.',
        },
        {
          id: 'sj-02',
          job: 'Annual service — Stuart',
          finishedOn: 'Ten days ago',
          outcome: 'Renewed for next year on the spot.',
          proofState: 'never-asked',
          note: 'Loyal customer. Nobody thought to ask.',
        },
        {
          id: 'sj-03',
          job: 'Kitchen install — Patel',
          finishedOn: 'Five days ago',
          outcome: 'Sent a thank-you email afterwards.',
          proofState: 'silent',
          note: 'Strong reply, never reused publicly.',
        },
        {
          id: 'sj-04',
          job: 'Repair callout — Kim',
          finishedOn: 'Yesterday',
          outcome: 'Asked for a review three weeks later.',
          proofState: 'asked-late',
          note: 'Customer had moved on by then.',
        },
      ],
    },
    reviewTiming: {
      header: {
        kicker: 'Review Timing',
        title: 'The right moment to ask is usually right after the job is done well.',
        description:
          'Review requests work when timing and handoff are clear. They stop working when they feel automated and late.',
      },
      moments: [
        {
          id: 'rt-handover',
          stage: 'At handover',
          title: 'Within minutes of the job being signed off.',
          detail: 'Customer is satisfied and present. The ask feels natural and warm.',
          fit: 'best',
        },
        {
          id: 'rt-day-after',
          stage: 'Day after',
          title: 'A short, polite follow-up message.',
          detail: 'Useful for customers who needed a moment to settle in with the result.',
          fit: 'good',
        },
        {
          id: 'rt-week-later',
          stage: 'Week later',
          title: 'Last useful window for most service work.',
          detail: 'Still warm enough. After this, response rate drops sharply.',
          fit: 'good',
        },
        {
          id: 'rt-three-weeks',
          stage: 'Three weeks later',
          title: 'Too late for most jobs.',
          detail: 'Customer has moved on. The ask feels like marketing, not appreciation.',
          fit: 'avoid',
        },
      ],
      closing:
        'Timing is part of the system. Memory and good intentions do not run a review programme.',
    },
    feedbackRoute: {
      header: {
        kicker: 'Feedback Route',
        title: 'Sensitive feedback needs a route before it becomes public damage.',
        description:
          'A useful review system separates public review requests from private feedback that needs attention first.',
      },
      paths: [
        {
          id: 'path-public',
          variant: 'public',
          label: 'Happy outcome',
          title: 'Polite ask routes to a public review.',
          trigger: 'Customer indicates the job went well.',
          steps: [
            'Short message thanking them for the work together.',
            'Direct link to the right review platform.',
            'Optional reminder if no action within a few days.',
          ],
          closing: 'Real reviews from real customers. No incentives. No fakes.',
        },
        {
          id: 'path-private',
          variant: 'private',
          label: 'Concern raised',
          title: 'Private route protects the customer and the business.',
          trigger: 'Customer mentions something that did not go right.',
          steps: [
            'Quiet acknowledgement, not a public form.',
            'Owner or manager is notified within minutes.',
            'A real human follows up before anything becomes public.',
          ],
          closing: 'Sensitive feedback deserves a conversation, not a one-star surprise.',
        },
      ],
      rule: 'Public requests and private concerns travel different paths. Mixing them costs trust.',
    },
    monitoringBoard: {
      header: {
        kicker: 'Monitoring',
        title: 'Review signals should be visible, not checked by habit.',
        description:
          'Review status, new feedback, follow-up needed, and unresolved risk all need a visible place to land.',
      },
      label: 'Trust signal board — sample week',
      rows: [
        {
          id: 'sig-google',
          channel: 'Google reviews',
          scope: 'Service area',
          recent: '4 new this month',
          state: 'healthy',
          detail: 'Steady pace. No flagged content.',
        },
        {
          id: 'sig-fb',
          channel: 'Facebook recommendations',
          scope: 'Local audience',
          recent: '1 new this month',
          state: 'attention',
          detail: 'Slowed. Worth checking the ask flow.',
        },
        {
          id: 'sig-industry',
          channel: 'Industry directory',
          scope: 'Trade-specific',
          recent: 'No new entries in eight weeks',
          state: 'gap',
          detail: 'Could absorb four to six requests per quarter.',
        },
        {
          id: 'sig-private',
          channel: 'Private feedback inbox',
          scope: 'Internal route',
          recent: '1 unresolved issue',
          state: 'risk',
          detail: 'Owner alerted. Follow-up due today.',
        },
      ],
      rule: 'A board the team checks once a day beats five tabs nobody opens.',
    },
    localTrustHandoff: {
      header: {
        kicker: 'Local Trust',
        title: 'Reviews support local trust. They are not Local SEO themselves.',
        description:
          'This page handles review timing and feedback routing. Local SEO Authority owns visibility and authority signals.',
      },
      rows: [
        {
          id: 'b-01',
          belongsTo: 'reviews',
          point: 'Asking the customer at the right moment.',
        },
        {
          id: 'b-02',
          belongsTo: 'reviews',
          point: 'Routing sensitive feedback privately first.',
        },
        {
          id: 'b-03',
          belongsTo: 'reviews',
          point: 'Keeping a real, human reply rhythm on public reviews.',
        },
        {
          id: 'b-04',
          belongsTo: 'lsa',
          point: 'Building local presence across map and search results.',
        },
        {
          id: 'b-05',
          belongsTo: 'lsa',
          point: 'Service-area authority and citation cleanup.',
        },
        {
          id: 'b-06',
          belongsTo: 'lsa',
          point: 'Local content and structured data tied to service pages.',
        },
      ],
      rule: 'Reviews feed local trust. They do not replace the structural work that earns it.',
    },
    fitFilter: {
      header: {
        kicker: 'Fit Filter',
        title: 'Useful when good jobs happen and proof is inconsistent.',
        description:
          'The page qualifies buyers who already deliver real service, not businesses looking for shortcuts.',
      },
      columns: [
        {
          id: 'fit',
          variant: 'fit',
          label: 'Strong fit',
          title: 'Established business with real customers and quiet online presence.',
          signals: [
            'Real jobs finish every week.',
            'Customers are happy in person, but online proof is patchy.',
            'No reliable way to ask, follow up, or route concerns.',
            'A few negative reviews have arrived without warning.',
          ],
        },
        {
          id: 'not-fit',
          variant: 'not-fit',
          label: 'Not a fit',
          title: 'Looking for shortcuts or fake reputation work.',
          signals: [
            'Wants reviews invented or paid for.',
            'No interest in handling concerns properly.',
            'No real volume of completed work yet.',
            'Treats reviews as a numbers game rather than trust signals.',
          ],
        },
      ],
      closing:
        'Real reviews from real customers. The system makes asking and routing easy. It does not invent trust.',
    },
    faq: {
      header: {
        kicker: 'Questions',
        title: 'Common questions about reputation and reviews.',
        description: 'Short answers about ethics, negative feedback, platforms and scope.',
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
            'It routes privately to the business so it can be handled properly before it becomes a public surprise.',
        },
        {
          id: 'rep-faq-local-seo',
          question: 'Is this the same as Local SEO?',
          answer:
            'No. Reviews can support local trust, but Local SEO Authority owns visibility and authority signals. This page owns review timing and feedback routing.',
        },
        {
          id: 'rep-faq-platforms',
          question: 'Which platforms do you cover?',
          answer:
            'Usually Google reviews and one or two channels relevant to the trade. Coverage depends on where the customers actually are.',
        },
        {
          id: 'rep-faq-incentives',
          question: 'Do customers get a reward for leaving a review?',
          answer:
            'No. Incentivised reviews break the trust the system is supposed to build, and most platforms forbid it.',
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
