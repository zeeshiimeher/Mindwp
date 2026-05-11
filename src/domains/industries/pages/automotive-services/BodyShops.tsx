import type { IndustryDetailPageData } from '@/domains/industries/types';

export const bodyShopsIndustryPageData: IndustryDetailPageData = {
  seo: {
    title: 'Body Shops — Estimate, Insurance, and Cycle-Time Systems',
    description:
      'How collision and body shops hold inbound enquiries, manage insurance threads, and keep cycle time visible across estimates, parts, and pickup.',
    canonical: '/industries/automotive-services/body-shops',
    openGraph: {
      title: 'Body Shops — Estimate, Insurance, and Cycle-Time Systems',
      description: 'Estimates, insurance follow-up, and cycle visibility on one operating board.',
    },
  },
  slug: 'body-shops',
  type: 'detail',
  parentSlug: 'automotive-services',
  hero: {
    badge: 'Automotive · Body Shops',
    title: 'A photo of bumper damage. [[muted:Then a week of silence.]]',
    description:
      'Collision work moves on long threads — estimates, insurance, parts, paint, pickup. The leaks live between them. Most are quiet, and most cost a job.',
    list: [
      'Estimate enquiries acknowledged the moment the photos land',
      'Insurance threads tracked on one board, not in inboxes',
      'Cycle status visible to the customer without a phone call',
    ],
  },
  industries: ['body-shop'],
  systems: [
    'crm-automation',
    'ai-lead-handling',
    'smart-website-systems',
    'reputation-review',
    'local-seo-authority',
  ],
  topics: ['lead-management', 'follow-up', 'review-generation'],
  industryPattern: {
    header: {
      kicker: 'Where it leaks',
      title: 'Three places body-shop enquiries usually slip',
      description: 'Long-cycle work creates long-cycle leaks. These are the common ones.',
    },
    leaks: [
      {
        id: 'photo-quote',
        leak: 'Photo quote requests sit unanswered',
        state: 'slow',
        observed:
          'A customer sends three photos through the website. They land in a shared inbox. They get looked at the next morning, by which time the customer has booked another shop.',
      },
      {
        id: 'insurance-thread',
        leak: 'Insurance correspondence gets buried in email',
        state: 'risk',
        observed:
          'The adjuster, the customer, and the office are all on different threads. Status is whatever the writer remembers.',
      },
      {
        id: 'silent-cycle',
        leak: 'Customer goes silent during the build',
        state: 'attention',
        observed:
          'The car is in week two. Nobody told the customer the parts were back-ordered. They call asking — irritated.',
      },
    ],
  },
  leakTimeline: {
    header: {
      kicker: 'The cycle from enquiry to pickup',
      title: 'How the body-shop thread usually moves',
      description: 'Long cycle. Many handoffs. The leaks live in the gaps.',
    },
    timeline: [
      {
        id: 'enquiry',
        time: 'Day 0',
        event: 'Photo enquiry or call lands',
        leakRisk: 'high',
        owner: 'Office / writer',
        detail: 'First-touch speed sets whether the job stays in the funnel.',
      },
      {
        id: 'estimate',
        time: 'Day 1 — 3',
        event: 'Estimate prepared and sent',
        leakRisk: 'medium',
        owner: 'Estimator',
        detail: 'Approval depends on insurance pacing.',
      },
      {
        id: 'insurance',
        time: 'Day 3 — 7',
        event: 'Insurance correspondence and approvals',
        leakRisk: 'high',
        owner: 'Office',
        detail: 'Threads sprawl across email and phone.',
      },
      {
        id: 'in-shop',
        time: 'Day 7 — 14',
        event: 'Vehicle in shop — parts, paint, build',
        leakRisk: 'medium',
        owner: 'Shop floor',
        detail: 'Customer wants visibility into status.',
      },
      {
        id: 'pickup',
        time: 'Day 14 — 16',
        event: 'Pickup, payment, and review',
        leakRisk: 'medium',
        owner: 'Office',
        detail: 'Reviews almost never asked for at sign-off.',
      },
    ],
  },
  beforeAfter: {
    header: {
      kicker: 'What changes',
      title: 'The thread, before and after',
      description: 'Same job. Same insurer. Different operating layer behind it.',
    },
    before: {
      label: 'Before',
      items: [
        'Photo quotes acknowledged the next day at best',
        'Insurance correspondence scattered across inboxes',
        'Customer chases status by phone',
        'Pickup-ready messages relayed by the writer when remembered',
        'Reviews left only by the most enthusiastic customers',
      ],
    },
    after: {
      label: 'After',
      items: [
        'Photo quotes acknowledged inside two minutes with a status reply',
        'Insurance threads visible on one board with last-touch timestamps',
        'Customer receives proactive status messages at key build stages',
        'Pickup-ready notification sent automatically once cleared',
        'Reviews triggered at sign-off; queue stays current',
      ],
    },
  },
  workbench: {
    header: {
      kicker: 'What sits on the workbench',
      title: 'The pieces that hold the cycle together',
      description: 'What is in place, what is planned, and what is optional.',
    },
    workbench: [
      {
        id: 'first-touch',
        piece: 'Photo-quote first-touch reply',
        state: 'in-place',
        owner: 'AI Lead Handling',
        note: 'Acknowledges the request and sets next-step expectations.',
      },
      {
        id: 'thread-board',
        piece: 'Insurance thread board',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'cycle-updates',
        piece: 'Stage-based status messages',
        state: 'planned',
        owner: 'CRM & Automation',
      },
      {
        id: 'pickup-ready',
        piece: 'Pickup-ready notification',
        state: 'in-place',
        owner: 'CRM & Automation',
      },
      {
        id: 'review-trigger',
        piece: 'Sign-off review trigger',
        state: 'in-place',
        owner: 'Reputation & Reviews',
      },
      {
        id: 'service-area',
        piece: 'Service-area visibility',
        state: 'optional',
        owner: 'Local SEO Authority',
      },
    ],
  },
  startingPoints: {
    header: {
      kicker: 'Where to start',
      title: 'Three signals, three different first systems',
      description: 'The leak you actually have decides the first move.',
    },
    startingPoints: [
      {
        id: 'first-touch',
        fix: 'Acknowledge every photo quote within minutes',
        signalIfYou: 'see new enquiries land overnight and go cold by morning',
        leadingSystem: 'AI Lead Handling',
      },
      {
        id: 'insurance-board',
        fix: 'Get insurance threads on one board',
        signalIfYou: 'lose track of where each open job stands',
        leadingSystem: 'CRM & Automation',
      },
      {
        id: 'cycle-visibility',
        fix: 'Send stage-based updates to the customer',
        signalIfYou: 'field calls every week from customers asking where their car is',
        leadingSystem: 'CRM & Automation',
      },
    ],
  },
  workflowExamples: {
    header: {
      kicker: 'How a few moments are handled',
      title: 'The work the system does without anyone watching',
      description: 'Plain triggers, plain actions, named owners.',
    },
    workflow: [
      {
        id: 'photo-quote',
        trigger: 'Photo quote form submitted',
        action: 'Acknowledge within 60s with expected next step',
        owner: 'AI Lead Handling',
        channel: 'SMS / email',
      },
      {
        id: 'insurance-stale',
        trigger: 'Insurance thread silent for 48h',
        action: 'Internal flag and follow-up suggestion',
        owner: 'CRM & Automation',
        channel: 'Internal',
      },
      {
        id: 'parts-arrived',
        trigger: 'Parts marked received',
        action: 'Customer message: build starts tomorrow',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'pickup-ready',
        trigger: 'Job marked complete and signed off',
        action: 'Pickup-ready notification with collection window',
        owner: 'CRM & Automation',
        channel: 'SMS',
      },
      {
        id: 'review',
        trigger: 'Invoice paid',
        action: 'Review request within 30 minutes',
        owner: 'Reputation & Reviews',
        channel: 'SMS',
      },
    ],
  },
  relevantSystems: {
    header: {
      kicker: 'How the systems sit',
      title: 'Lead, support, optional',
      description:
        'A body shop usually leans on CRM first. AI capture supports the front of the funnel.',
    },
    systems: [
      'crm-automation',
      'ai-lead-handling',
      'smart-website-systems',
      'reputation-review',
      'local-seo-authority',
    ],
    relevantSystems: [
      {
        id: 'crm',
        name: 'CRM & Automation',
        role: 'lead',
        why: 'Holds the long thread that runs from estimate to pickup.',
      },
      {
        id: 'aih',
        name: 'AI Lead Handling',
        role: 'lead',
        why: 'Acknowledges photo quotes and after-hours enquiries the moment they land.',
      },
      {
        id: 'rep',
        name: 'Reputation & Reviews',
        role: 'support',
        why: 'Trigger reviews at sign-off when the experience is freshest.',
      },
      {
        id: 'sws',
        name: 'Smart Website Systems',
        role: 'support',
        why: 'Capture photo quotes and route them into the operating board.',
      },
      {
        id: 'lsa',
        name: 'Local SEO Authority',
        role: 'optional',
        why: 'Useful when service-area discovery is the bottleneck.',
      },
    ],
  },
  scenario: {
    header: {
      kicker: 'A realistic scenario',
      title: 'A two-week cycle with the layer in place',
      description: 'Illustrative. No fabricated client. No promised result.',
    },
    scenario: {
      kind: 'scenario',
      label: 'Illustrative scenario',
      body: 'A mid-size collision shop runs five jobs through a fortnight. Photo enquiries acknowledged on landing. Insurance threads tracked on one board with timestamps. Customers receive stage-based updates. Pickup-ready messages go out the moment the job is signed off.',
      observedChange:
        'Before, the same fortnight would have produced four "where is my car?" calls and a missed photo enquiry. With the layer in place, the office spends less time chasing and more time finishing.',
    },
  },
  faq: {
    header: {
      kicker: 'Honest questions',
      title: 'What body-shop operators usually ask first',
      description: 'Direct answers. No hedging.',
    },
    items: [
      {
        id: 'insurer',
        question: 'Will this integrate with our insurer portals?',
        answer:
          'It does not replace insurer portals. It holds the customer-facing thread and the internal board so nothing inside the shop slips while the insurer side moves at its own pace.',
      },
      {
        id: 'tools',
        question: 'We already use a body-shop estimating tool. Do we drop it?',
        answer:
          'Usually not. The operating layer sits beside it and covers the gaps it does not — first-touch reply, internal status board, customer cycle updates.',
      },
      {
        id: 'cycle',
        question: 'Will this shorten cycle time?',
        answer:
          'It removes some of the chase that adds to cycle time. It will not change parts availability or paint cure times.',
      },
      {
        id: 'price',
        question: 'How is this priced?',
        answer:
          'Per build, not per feature. We tell you when a smaller build (or none yet) is the right move.',
      },
    ],
  },
  cta: {
    heading: {
      kicker: 'Next step',
      title: 'Show us where the body-shop thread actually leaks',
      description:
        'Tell us about a typical job from photo enquiry to pickup. We will read it back and name the first system to fix.',
    },
    expectations: [
      { num: '1', text: 'A short read of where the cycle slips today' },
      { num: '2', text: 'The system most likely to hold the worst gap first' },
      { num: '3', text: 'A clear next move if the fit is right — or none if it isn’t' },
    ],
    reassurance: {
      noSell: 'No pitch. No package. We will tell you if a build is not the right move yet.',
      tone: 'Direct, specific to a shop running long-cycle insurance work.',
    },
  },
};
