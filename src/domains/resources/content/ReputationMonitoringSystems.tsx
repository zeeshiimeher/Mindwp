import { Bell, Eye, LineChart } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'reputation-monitoring-systems';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A reputation monitoring system is an automated infrastructure that tracks, alerts, and reports on your business reputation across review platforms, social media, and search results. Instead of checking platforms manually, a monitoring system provides real-time visibility into what customers and prospects see when they evaluate your business online.',
  problem:
    'You discover reputation issues — negative reviews, incorrect business information, competitor movement — days or weeks after they appear because you have no monitoring system in place',
  promise:
    'You will understand how to build a reputation monitoring system that gives you real-time visibility across all platforms so you can respond quickly, track trends, and stay ahead of competitors',
};

const takeaways = [
  'Reputation monitoring is not just review tracking — it includes listings, social mentions, and competitor benchmarks',
  'Real-time alerts enable same-day response to negative reviews and listing changes',
  'Trend analysis across months reveals whether your reputation is improving or declining',
  'Competitor benchmarking identifies gaps and opportunities in your local market',
];

const problem = {
  description: [
    'Most service businesses check their Google reviews occasionally — perhaps when a customer mentions a review or when the owner remembers. This means negative reviews can sit unanswered for days. Incorrect business information (wrong hours, old phone number) persists for weeks. Competitor improvements go unnoticed entirely.',
    'Reputation is not just reviews. It is the total picture a prospect sees when they search for your business: review rating, review count, business listing accuracy, photos, social media presence, and how you compare to competitors in the same search results. Monitoring only reviews leaves massive blind spots.',
  ],
  causes: [
    'Reviews checked manually and sporadically',
    'No alerts for new negative reviews or low ratings',
    'Business listing information not monitored for accuracy',
    'No awareness of competitor review counts or rating changes',
    'Social media mentions not tracked',
    'No dashboard showing reputation health across all platforms',
  ],
};

const comparison = {
  before: {
    title: 'No Monitoring System',
    items: [
      'Reviews discovered days or weeks after posting',
      'Business listing errors persist for weeks or months',
      'No visibility into competitor reputation changes',
      'Reputation trends invisible — no historical tracking',
      'Negative reviews sit unanswered, damaging trust',
      'Decisions based on gut feeling, not reputation data',
    ],
  },
  after: {
    title: 'Reputation Monitoring System',
    items: [
      'Real-time alerts for every new review across platforms',
      'Listing accuracy verified weekly with automatic correction',
      'Competitor review velocity and rating tracked monthly',
      'Historical trends visible in a single dashboard',
      'Negative reviews addressed same day',
      'Decisions driven by data — spend, focus, and priority informed by metrics',
    ],
  },
};

const solutions = [
  {
    title: 'Multi-Platform Review Monitoring',
    description:
      'A centralised system that aggregates reviews from Google, Facebook, Yelp, Trustpilot, and industry-specific platforms into a single dashboard. New reviews trigger instant alerts via SMS, email, or Slack. The dashboard shows rating, count, velocity, and sentiment across all platforms in one view.',
    icon: Eye,
  },
  {
    title: 'Real-Time Alert and Response Pipeline',
    description:
      'When a new review arrives, the monitoring system evaluates the rating. Positive reviews (4-5 stars) are logged and optionally auto-thanked. Negative reviews (1-3 stars) trigger an escalation alert to the designated responder with a response template. Target: negative reviews addressed within 4 hours during business hours.',
    icon: Bell,
  },
  {
    title: 'Trend and Competitor Benchmarking',
    description:
      'Monthly reports track your reputation trajectory: average rating trend, review velocity, sentiment distribution, and response rate. Competitor benchmarks show how your metrics compare to the top 3-5 competitors in your local market. This data informs marketing spend, service improvements, and competitive strategy.',
    icon: LineChart,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Set Up Google Review Alerts',
      action:
        'Enable Google Business Profile review notifications in your settings. Ensure they go to an email that is checked multiple times per day. For faster alerting, set up a Google Alert for your business name in quotes. This catches mentions beyond just Google reviews.',
      expectedResult:
        'Awareness of every new Google review within hours of posting, enabling same-day response.',
    },
    {
      step: 2,
      title: 'Audit Your Listings Monthly',
      action:
        'Check your business information on Google, Facebook, Yelp, and your top 3 industry-specific directories. Verify: business name consistency, address, phone number, hours, website URL, and service categories. Correct any errors immediately. Set a monthly calendar reminder.',
      expectedResult:
        'Accurate business information across all platforms, preventing lost leads from incorrect contact details or hours.',
    },
    {
      step: 3,
      title: 'Create a Reputation Scorecard',
      action:
        'Build a simple spreadsheet tracked monthly: Google rating, Google review count, Google review velocity (new reviews this month), response rate to negative reviews, average response time. Add the same metrics for your top 3 competitors. This spreadsheet is your reputation dashboard.',
      expectedResult:
        'A monthly view of your reputation health and competitive position that informs business decisions.',
    },
  ],
};

const caseExample = {
  businessType: 'Property Maintenance Company (Manchester)',
  problem:
    'A property maintenance company had profiles on Google, Checkatrade, and Facebook but monitored none of them systematically. A Google listing error showed the wrong phone number for 3 months, costing an estimated 40+ leads. Three negative Checkatrade reviews went unanswered for 6 weeks.',
  solution:
    'We implemented multi-platform monitoring: real-time alerts for new reviews across all platforms, weekly listing accuracy checks, and a monthly competitor benchmark report. All alerts routed to a designated team member with response templates.',
  result:
    'The listing error was fixed immediately (recovered lead flow within a week). Negative reviews were addressed within 24 hours going forward. Monthly competitor benchmarking revealed they had the lowest review velocity in their market — the subsequent review generation campaign tripled their velocity within 2 months.',
  stat: 'Listing error costing 40+ leads/month fixed within 1 day of monitoring setup',
};

const faqs = [
  {
    question: 'Which platforms should I monitor?',
    answer:
      'At minimum: Google Business Profile (primary for local search), Facebook (social proof), and your most important industry directory (Checkatrade, Trustatrader, Bark, etc.). If you operate in multiple locations, monitor each location listing separately. Start with these and expand if you discover reviews on other platforms.',
  },
  {
    question: 'Do I need a paid monitoring tool?',
    answer:
      'For a single-location business, free tools (Google alerts, manual monthly checks) can work. For multi-location businesses or those competing in dense markets, a paid tool that aggregates reviews and provides competitor data saves significant time and provides better analytics. The ROI is typically clear within 1-2 months.',
  },
  {
    question: 'How often should I check my reputation metrics?',
    answer:
      'Reviews: real-time via alerts (negative reviews need same-day response). Listing accuracy: weekly. Competitor benchmarks and trend analysis: monthly. This cadence balances responsiveness on urgent items with strategic analysis on longer-term trends.',
  },
];

const finalCta = {
  title: 'Deploy a Reputation Monitoring System That Keeps You Ahead',
  description:
    'Our Reputation & Review Systems provide real-time monitoring, instant alerts, competitor benchmarking, and trend analysis so you always know where your reputation stands.',
};

export const reputationMonitoringSystems: ResourceData = {
    slug,
    seo: {
    title: 'Reputation Monitoring Systems',
    description:
      'Build a reputation monitoring system that tracks reviews, listings, and competitor benchmarks across all platforms with real-time alerts and trend analysis.',
    canonical,
  },
    title: 'Reputation Monitoring Systems',
    description:
    'Build a reputation monitoring system that tracks reviews, listings, and competitor benchmarks across all platforms with real-time alerts and trend analysis.',
    category: 'reputation-review',
    publishedAt: '2026-01-10',
    systems: ['reputation-review'],
    industries: [],
    topics: ['reputation-monitoring'],
    primaryService: 'reputation-review',
    sections: [
    {
      type: 'hero',
      heading: 'Reputation Monitoring Systems',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of reputation monitoring:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'The Cost of Not Knowing What Customers See',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Have Monitoring Gaps:',
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How monitoring uncovered hidden reputation problems:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'solution-cards',
      heading: 'The Monitoring System Architecture',
      content: [
        'Complete Reputation Visibility',
        'A monitoring system that covers reviews, listings, and competitive position:',
      ],
      benefit:
        'When you have real-time visibility into your reputation across all platforms, you respond faster, identify trends earlier, and make decisions based on data instead of assumption.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'No Monitoring vs Systematic Monitoring',
      content: ['The difference in reputation management with and without monitoring:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'diy',
      heading: 'Start Monitoring Your Reputation',
      content: ['Steps to build basic reputation monitoring:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about reputation monitoring:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('reputation-review'),
      content: getRelatedResourcesContent('reputation-review'),
      resources: getRelatedResources('reputation-review', canonical),
    },
  ]
};
