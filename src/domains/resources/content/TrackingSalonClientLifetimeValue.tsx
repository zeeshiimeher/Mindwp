import { BarChart3, TrendingUp, Users } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'tracking-salon-client-lifetime-value';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Salon revenue is built on repeat visits. A single haircut is worth £45, but a loyal client visiting every 5 weeks for 3 years is worth £1,400+. Yet most salons make no distinction between acquiring a one-time visitor and nurturing a lifetime client. Tracking client lifetime value (CLV) through your CRM reveals which services, stylists, and acquisition channels produce the most valuable long-term clients — transforming how you invest in marketing, retention, and team development.',
  problem:
    'Your salon treats every client the same regardless of their long-term value, which means you overspend on acquiring low-value clients and underinvest in retaining your most profitable ones',
  promise:
    'You will see how salons track client lifetime value to make smarter marketing, retention, and staffing decisions — shifting from revenue-per-visit thinking to relationship-value thinking',
};

const takeaways = [
  'A loyal salon client visiting every 5 weeks is worth 25-50x more than a one-time visitor over their lifetime',
  'CLV varies dramatically by service type: colour clients typically have 2-3x the lifetime value of cut-only clients',
  'Retention rate is the single biggest driver of CLV — a 5% improvement in retention can increase CLV by 25-50%',
  'Referral tracking reveals which clients generate the most valuable new client relationships',
];

const problem = {
  description: [
    'Most salons measure success by daily or weekly revenue — how much came in today. This metric tells you nothing about the health of your business. A salon can have a great revenue week fuelled entirely by new client promotions while quietly losing its most valuable long-term clients. Without CLV tracking, you cannot distinguish between a £40 first-visit that becomes a £2,000 relationship and a £40 first-visit that never returns.',
    'This blind spot leads to poor decisions. Marketing budgets are allocated to channels that produce volume (lots of first visits) rather than channels that produce value (loyal, repeat clients). Stylist performance is measured by revenue per day rather than client retention rate. Pricing decisions are made without understanding which services create sticky, long-term relationships. The salon grows tactically but lacks strategic direction.',
  ],
  causes: [
    'No CRM tracking of individual client visit frequency and spend history',
    'Marketing measured by new client acquisition count, not client quality',
    'No visibility into client retention rates by stylist or service type',
    'Pricing based on cost-plus rather than lifetime value analysis',
    'No segmentation between high-value and low-value client behaviours',
    'Referral sources untracked — no way to identify which clients generate new business',
  ],
};

const caseExample = {
  businessType: 'Hair and Beauty Salon (Oxford, 8 stylists)',
  problem:
    'An 8-stylist salon spent £2,500/month on advertising across Google, Instagram, and local print. They measured success by new clients per month (averaging 40-50). But when we analysed their booking data, only 35% of new clients returned for a second visit. Of those who returned, colour clients had an average CLV of £1,800 over 3 years while cut-only clients averaged £520. Their Instagram ads drove mostly cut-only first visits; their Google ads drove more colour inquiries. They were allocating budget equally.',
  solution:
    'We implemented CLV tracking in their CRM. Every client was scored: visit frequency, average spend, total lifetime spend, services used, stylist, acquisition source, and number of referrals generated. Monthly reports showed: CLV by acquisition channel, retention rate by stylist, service mix of highest-value clients, and at-risk clients (decreasing visit frequency). Marketing budget was reallocated based on which channels produced the highest CLV, not just the most new clients.',
  result:
    'Marketing was shifted: 60% of budget to Google (higher CLV acquisitions) vs. 25% Instagram (lower CLV but good for brand), with 15% to referral incentives. Average new client CLV increased 40% because higher-CLV channels received more investment. Retention-focused initiatives (rebooking prompts, loyalty programme) improved 2nd-visit return rate from 35% to 52%. At-risk client alerts helped stylists reach out before clients churned. Revenue per client increased 28% year-over-year.',
  stat: 'Average new client CLV increased 40% by shifting marketing to highest-value acquisition channels',
};

const solutions = [
  {
    title: 'Client Value Scoring',
    description:
      'Every client in the CRM receives a value score based on: visit frequency, average spend per visit, total lifetime spend, service mix (colour clients are typically more valuable), and tenure. This score updates automatically with each visit. Segment clients into tiers: VIP (top 20% by value), Regular (middle 60%), and At-Risk (declining frequency or spend). Each tier receives different retention treatment.',
    icon: Users,
  },
  {
    title: 'Retention and At-Risk Alerts',
    description:
      'The CRM monitors client behaviour for retention signals. If a client who normally visits every 5 weeks has not booked by week 7, an at-risk alert fires. The assigned stylist receives a prompt: "Client [Name] is overdue for a visit." An automated "We miss you" message can be sent with a rebooking link. This proactive approach catches clients before they silently churn — the most common and costly form of salon client loss.',
    icon: TrendingUp,
  },
  {
    title: 'Acquisition Channel Value Analysis',
    description:
      'By tracking which acquisition source (Google, Instagram, referral, walk-in, etc.) each client came from, and their subsequent CLV, you can calculate the true ROI of each marketing channel. A channel that produces 10 new clients at £800 CLV (£8,000 total value) outperforms a channel that produces 30 new clients at £200 CLV (£6,000 total value) — even though it looks worse by volume. This data transforms marketing from guessing to investing.',
    icon: BarChart3,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Export and Analyse Your Client Data',
      action:
        'Export 12-24 months of client booking data from your salon software. For each client, calculate: total visits, total spend, average visit frequency, services used, and first visit date. Rank clients by total spend. You will likely find that 20% of clients generate 60-70% of revenue. Identify what these top clients have in common: service types, stylists, how they found you.',
      expectedResult:
        'A ranked list of clients by lifetime value with patterns identified: which services, stylists, and acquisition channels produce your most valuable clients.',
    },
    {
      step: 2,
      title: 'Set Up CRM Client Segments',
      action:
        'Create client segments in your CRM: VIP (top 20% by annual spend), Core (regular visitors, middle 60%), New (fewer than 3 visits), and At-Risk (visit frequency declining or no visit in 2x their average interval). Tag each client. Set up automated alerts: when a client moves from Core to At-Risk, notify their stylist. When a new client completes their 3rd visit, move them to Core and send a loyalty welcome.',
      expectedResult:
        'Dynamic client segments that update automatically with each visit, enabling targeted retention actions for each group.',
    },
    {
      step: 3,
      title: 'Track Acquisition Channel CLV',
      action:
        'For every new client, record how they found you: Google, Instagram, referral (from whom), walk-in, or other. After 6 months, compare CLV by acquisition channel. Which channel produces clients who return most? Which services do they book? Use this to reallocate your marketing budget toward channels that produce higher-CLV clients, not just more first visits.',
      expectedResult:
        'Data showing the true value of each marketing channel, enabling evidence-based budget allocation.',
    },
  ],
};

const finalCta = {
  title: 'Track Client Lifetime Value for Your Salon',
  description:
    'Our CRM Infrastructure services set up client value scoring, retention alerts, and acquisition channel analysis — giving your salon the data to invest in relationships that grow revenue year over year.',
};

export const trackingSalonClientLifetimeValue: ResourceData = {
  slug,
  title: 'Tracking Salon Client Lifetime Value',
  description:
    'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
  category: 'revenue-growth',
  publishedAt: '2026-02-28',
  systems: ['crm-automation', 'revenue-growth'],
  industries: ['salon'],
  topics: ['lifetime-value'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Tracking Salon Client Lifetime Value',
    description:
      'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Tracking Salon Client Lifetime Value',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for tracking salon client lifetime value:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Revenue-Per-Visit Thinking Limits Salon Growth',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common CLV Blind Spots in Salons:',
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ['How CLV tracking transformed marketing and retention decisions:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Salon CLV Tracking',
      content: ['Steps specific to tracking salon client value:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon CLV Tracking Architecture',
      content: [
        'Client Lifetime Value Tracking for Salons',
        'A system that reveals which clients, services, and channels drive long-term revenue:',
      ],
      benefit:
        'When you track client lifetime value across segments and acquisition channels, every marketing pound, retention effort, and pricing decision is informed by data instead of instinct.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: primaryCta.href,
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('revenue-growth'),
      content: getRelatedResourcesContent('revenue-growth'),
      resources: getRelatedResources('revenue-growth', canonical),
    },
  ],
};
