import { Calculator, Database, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'tracking-customer-lifetime-value-using-crm';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Customer Lifetime Value (CLV) is the total revenue a customer generates over their entire relationship with your business. Tracking CLV using your CRM transforms how you think about acquisition costs, retention investments, and pricing strategy. When you know a customer is worth £5,000 over 5 years, spending £200 to acquire them becomes an obvious investment — not a cost.',
  problem:
    'You measure success by individual job revenue, which makes every acquisition cost feel expensive and prevents you from investing properly in retention because you cannot quantify the long-term value of keeping a customer',
  promise:
    'You will learn how to track Customer Lifetime Value using your CRM, use it to make better acquisition and retention decisions, and identify which customer segments are most valuable to your business',
};

const takeaways = [
  'CLV shifts focus from transactional revenue to relationship revenue — changing every business decision',
  'CRM data provides the input: purchase frequency, average job value, and customer lifespan',
  'CLV justifies higher acquisition spend on customers who have high lifetime potential',
  'Segmenting customers by CLV reveals which segments deserve the most retention investment',
];

const problem = {
  description: [
    'When you measure customers by individual job value, a £300 job looks like it cannot support a £100 acquisition cost. But if that customer returns 3 times per year for 5 years, their lifetime value is £4,500 — and that £100 acquisition cost is a 4,400% return. Without CLV tracking, you underinvest in acquisition and retention because you are measuring the wrong metric.',
    'The same blindness applies to retention. Without knowing CLV, the cost of a free follow-up visit to resolve a complaint feels like lost revenue. Knowing the customer is worth £4,500 over their lifetime, that free visit is a tiny investment to protect a high-value asset. CLV changes how you think about every customer interaction.',
  ],
  causes: [
    'Revenue measured per job, not per customer over time',
    'No CRM data on repeat purchase frequency or customer lifespan',
    'Acquisition cost judged against single transaction revenue',
    'No retention budget because long-term customer value is unknown',
    'Customer segments not analysed by lifetime value',
    'Pricing and service decisions made on transaction economics, not relationship economics',
  ],
};

const comparison = {
  before: {
    title: 'Transaction-Based Thinking',
    items: [
      'Each job evaluated as a standalone transaction',
      'Acquisition costs feel expensive relative to single job revenue',
      'Retention investment seen as a cost, not an investment',
      'All customers treated equally regardless of long-term value',
      'Pricing based on individual job margins only',
      'Marketing budget constrained by per-lead cost calculations',
    ],
  },
  after: {
    title: 'Lifetime Value Thinking',
    items: [
      'Each customer evaluated as a multi-year revenue stream',
      'Acquisition costs justified by total lifetime revenue',
      'Retention investment scaled to customer lifetime value',
      'High-CLV customers identified and treated as VIPs',
      'Pricing considers long-term relationship value',
      'Marketing budget based on return over customer lifetime',
    ],
  },
};

const solutions = [
  {
    title: 'CLV Calculation from CRM Data',
    description:
      'Your CRM holds the three inputs for CLV calculation: average revenue per transaction, purchase frequency (transactions per year), and customer lifespan (average years active). CLV = Average Revenue × Purchase Frequency × Customer Lifespan. For a £300 average job, 2 times per year, over 5 years: CLV = £3,000. This changes every acquisition and retention decision.',
    icon: Calculator,
  },
  {
    title: 'CLV Segmentation',
    description:
      'Not all customers have the same lifetime value. Segment your database by CLV: high-value (top 20%), medium-value (middle 60%), and low-value (bottom 20%). High-value customers deserve premium service, proactive outreach, and higher retention investment. Low-value customers may indicate pricing issues or service misalignment. Segmentation reveals where to focus effort.',
    icon: Database,
  },
  {
    title: 'CLV-Informed Growth Strategy',
    description:
      'CLV data informs three strategic decisions: acceptable acquisition cost (up to 10-20% of CLV is typically profitable), retention investment per customer tier, and which customer segments to target. If commercial customers have 3x the CLV of residential, your marketing should shift accordingly. CLV turns marketing from guesswork into mathematics.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Calculate Your Average CLV',
      action:
        'Pull data from your CRM for customers acquired 3+ years ago. For each, total their revenue. Calculate the average across all customers — this is your approximate CLV. Then calculate separately for different segments (residential vs commercial, service type, acquisition source). The segment differences will be the most revealing insight.',
      expectedResult:
        'A baseline CLV number and segment-level CLV data that shows which customer types are most valuable over time.',
    },
    {
      step: 2,
      title: 'Set Up CLV Tracking in Your CRM',
      action:
        'Create a custom field in your CRM for "total lifetime revenue" that sums all closed deals for each contact. Set up a calculated field or monthly report that computes: average revenue per transaction, average transactions per year, and average customer lifespan. If your CRM does not support calculated fields, build a monthly spreadsheet from export data.',
      expectedResult:
        'Ongoing CLV tracking that updates automatically as customers make new purchases.',
    },
    {
      step: 3,
      title: 'Apply CLV to One Business Decision',
      action:
        'Take your CLV data and apply it to one specific decision. Example: if CLV is £3,000, set your maximum acceptable cost per acquisition at £300-600 (10-20% of CLV). This likely means you can afford to spend more on marketing than you currently do. Or: identify your top 20% CLV customers and create a VIP retention programme for them.',
      expectedResult:
        'One concrete business decision improved by CLV data, demonstrating the practical value of tracking.',
    },
  ],
};

const caseExample = {
  businessType: 'Boiler Service Company (West Yorkshire)',
  problem:
    'A boiler service company was spending £45 per lead on Google Ads and considered it expensive because their average job was £180. They capped their marketing spend at £1,500/month because the per-lead economics seemed tight. They had no idea what a customer was worth over time.',
  solution:
    'We analysed their CRM data going back 5 years. The average customer used the service 1.8 times per year (annual service plus occasional repairs) for an average of 6 years. Average CLV: £180 × 1.8 × 6 = £1,944. At £45 per lead with a 30% conversion rate, acquisition cost was £150 — just 7.7% of CLV.',
  result:
    'With confidence in the CLV data, they tripled their Google Ads budget to £4,500/month. Lead volume increased proportionally. Revenue grew 45% over 12 months. The cost per acquisition that felt expensive was actually a bargain — they had been under-investing in growth for years because they measured per-job instead of per-lifetime.',
  stat: '45% revenue growth after tripling marketing budget, justified by CLV analysis showing £1,944 customer lifetime value',
};

const finalCta = {
  title: 'Start Tracking Customer Lifetime Value in Your CRM',
  description:
    'Our CRM Infrastructure systems set up CLV tracking, segmentation, and reporting so you can make acquisition and retention decisions based on real lifetime data.',
};

export const trackingCustomerLifetimeValueUsingCrm: ResourceData = {
  slug,
  seo: {
    title: 'Tracking Customer Lifetime Value Using CRM Guide',
    description:
      'Learn how to calculate and track Customer Lifetime Value using CRM data to make better acquisition, retention, and pricing decisions for your service business.',
    canonical,
  },
  title: 'Tracking Customer Lifetime Value Using CRM Guide',
  description:
    'Learn how to calculate and track Customer Lifetime Value using CRM data to make better acquisition, retention, and pricing decisions for your service business.',
  category: 'frameworks',
  publishedAt: '2026-01-03',
  primarySystem: 'follow-up-crm',
  industries: [],
  topics: ['customer-lifetime-value'],
  primaryService: 'follow-up-crm',
  sections: [
    {
      type: 'hero',
      heading: 'Tracking Customer Lifetime Value Using CRM',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Per-Job Revenue Is the Wrong Metric',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Need CLV Tracking:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of CLV tracking:'],
      items: takeaways,
    },
    {
      type: 'solution-cards',
      heading: 'The CLV Tracking Architecture',
      content: [
        'Lifetime Revenue Intelligence',
        'CRM-based tracking that reveals the true long-term value of your customers:',
      ],
      benefit:
        'When you know the lifetime value of your customers, every acquisition cost, retention investment, and pricing decision becomes clearer because you are measuring the right timeframe.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'Transaction Thinking vs Lifetime Thinking',
      content: ['How CLV changes every business decision:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How CLV analysis unlocked growth for a boiler service company:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Analysis',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Start Tracking Customer Lifetime Value',
      content: ['Steps to implement CLV tracking:'],
      steps: diy.steps,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('frameworks'),
      content: getRelatedResourcesContent('frameworks'),
      resources: getRelatedResources('frameworks', canonical),
    },
  ],
};
