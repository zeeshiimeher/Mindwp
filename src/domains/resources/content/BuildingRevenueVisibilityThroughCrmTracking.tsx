import { BarChart3, DollarSign, Eye } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'building-revenue-visibility-through-crm-tracking';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Revenue visibility is the ability to see exactly where your revenue comes from, which leads are converting, how long the sales cycle takes, and where money is being lost in the pipeline. CRM tracking provides this visibility by connecting every lead, quote, and closed job to its source, value, and timeline. Without it, revenue growth is based on gut feeling instead of data.',
  problem:
    'You know your total revenue but cannot see which marketing channels, services, or team members are driving it — making it impossible to invest intelligently or identify where revenue is leaking',
  promise:
    'You will learn how to build CRM-based revenue tracking that gives you complete visibility into where revenue comes from, where it is lost, and where the biggest growth opportunities exist',
};

const takeaways = [
  'Revenue visibility starts with tracking the source, value, and outcome of every lead in your CRM',
  'Most service businesses cannot answer "which marketing channel produces the most profit" — CRM tracking solves this',
  'Pipeline stage tracking reveals where deals stall, showing you the exact bottleneck in your sales process',
  'Revenue attribution enables data-driven marketing spend decisions instead of guesswork',
];

const problem = {
  description: [
    'Most service businesses know their total revenue but cannot break it down: How much came from Google Ads vs organic search vs referrals? Which service type has the highest close rate? Which team member converts the most quotes? How long does it take from first contact to signed contract? Without answers, every growth decision is a guess.',
    'The consequence is invisible revenue leakage. Leads fall out of the pipeline at specific stages but no one notices because there is no tracking. Marketing spend goes to channels that generate leads but not conversions. High-value services are underpriced because there is no data on their true demand. Money is left on the table every month.',
  ],
  causes: [
    'No lead source tracking — cannot attribute revenue to marketing channels',
    'Pipeline stages not defined or not tracked consistently',
    'Quote values and outcomes not recorded in CRM',
    'No visibility into sales cycle length or conversion rate by stage',
    'Marketing spend not correlated with revenue generated',
    'No data on which services or team members produce the most revenue',
  ],
};

const comparison = {
  before: {
    title: 'No Revenue Visibility',
    items: [
      'Total revenue known, source breakdown unknown',
      'Marketing spend based on intuition, not attribution',
      'Pipeline leakage invisible — leads disappear without explanation',
      'Sales cycle length unmeasured',
      'No data on revenue per service type or team member',
      'Growth decisions based on gut feeling',
    ],
  },
  after: {
    title: 'CRM Revenue Tracking',
    items: [
      'Every pound attributed to its source, service, and team member',
      'Marketing spend allocated to highest-ROI channels',
      'Pipeline stages tracked — leakage points identified and addressed',
      'Sales cycle measured and optimised',
      'Revenue per service type and team member clearly visible',
      'Growth decisions backed by data',
    ],
  },
};

const solutions = [
  {
    title: 'Lead Source Attribution',
    description:
      'Every lead entering your CRM is tagged with its source: Google Ads, organic search, referral, social media, or direct. When that lead converts to a customer, the revenue is attributed back to the source. This creates a clear picture of which channels produce revenue (not just leads) and enables ROI calculation per channel.',
    icon: Eye,
  },
  {
    title: 'Pipeline Stage Revenue Tracking',
    description:
      'Defining pipeline stages (new lead, contacted, quoted, negotiation, won, lost) and tracking the value at each stage reveals exactly where deals stall or drop off. If 40% of quotes never convert, you know to improve your quoting process. If leads stall at "contacted," your follow-up needs work. Every stage becomes a measurable conversion point.',
    icon: BarChart3,
  },
  {
    title: 'Revenue Performance Dashboards',
    description:
      'A CRM dashboard that shows real-time revenue metrics: total pipeline value, conversion rate by stage, average deal value, sales cycle length, revenue by source, and revenue by service type. This dashboard becomes the decision-making tool for the business — revealing where to invest, where to cut, and where the biggest growth opportunities exist.',
    icon: DollarSign,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Set Up Lead Source Tracking',
      action:
        'In your CRM, create a required "lead source" field with standardised options: Google Ads, Organic Search, Referral, Social Media, Direct, Other. For website leads, use UTM parameters or hidden form fields to capture the source automatically. For phone leads, ask "How did you hear about us?" and record it. Ensure every lead has a source tag.',
      expectedResult:
        'Every lead in your CRM has a source tag, enabling you to trace revenue back to the channel that generated it.',
    },
    {
      step: 2,
      title: 'Define and Track Pipeline Stages',
      action:
        'Create 5-7 pipeline stages that match your actual sales process: New Lead → Contacted → Quote Sent → Quote Followed Up → Won → Lost. Assign a value to every deal when it enters the pipeline (estimated job value). Ensure your team updates the stage as deals progress. Track how long deals spend in each stage.',
      expectedResult:
        'A pipeline where every deal has a value, stage, and timeline — revealing exactly where deals stall and where revenue is lost.',
    },
    {
      step: 3,
      title: 'Build a Weekly Revenue Report',
      action:
        'Create a weekly report that answers: How much pipeline value was added this week? How much revenue was closed? What is the conversion rate from quote to close? Which lead source produced the most closed revenue? How many deals are stalled in each stage? Review this report every Monday to guide the week priorities.',
      expectedResult:
        'A data-driven weekly rhythm where growth decisions are based on actual revenue metrics instead of anecdote.',
    },
  ],
};

const caseExample = {
  businessType: 'Window Installation Company (Nottingham)',
  problem:
    'A window installation company spent £3,500/month across Google Ads, Facebook, and a local directory listing. They generated approximately 60 leads per month and closed about 15. They could not tell which source produced the profitable jobs. Gut feeling said Google Ads was best, so they kept increasing that spend.',
  solution:
    'We implemented CRM revenue tracking: every lead tagged with source, pipeline stages with values, and a weekly revenue dashboard. After 3 months of data, the results were contrary to expectations: referrals had a 45% close rate vs 18% for Google Ads, Facebook leads had the highest average job value, and the local directory produced almost zero conversions.',
  result:
    'They reallocated £1,200/month from the directory to a referral programme and increased Facebook spend. Within 2 months, close rate improved from 25% to 33%, average deal value increased 20%, and monthly revenue grew 28% on the same total marketing spend.',
  stat: '28% revenue growth by reallocating spend based on CRM attribution data',
};

const finalCta = {
  title: 'Build Revenue Visibility That Drives Smarter Growth',
  description:
    'Our CRM Infrastructure systems implement complete revenue tracking — source attribution, pipeline analytics, and performance dashboards — so every growth decision is backed by data.',
};

export const buildingRevenueVisibilityThroughCrmTracking: ResourceData = {
  slug,
  title: 'Building Revenue Visibility Through CRM Tracking Guide',
  description:
    'Learn how to build CRM-based revenue tracking that shows exactly where your revenue comes from, where it leaks, and where the biggest growth opportunities exist.',
  category: 'revenue-growth',
  publishedAt: '2025-12-31',
  systems: ['crm-automation'],
  industries: [],
  topics: ['revenue-tracking', 'revenue-visibility'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Building Revenue Visibility Through CRM Tracking Guide',
    description:
      'Learn how to build CRM-based revenue tracking that shows exactly where your revenue comes from, where it leaks, and where the biggest growth opportunities exist.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Building Revenue Visibility Through CRM Tracking',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'The Hidden Cost of Flying Blind on Revenue',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Lack Revenue Visibility:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of revenue visibility:'],
      items: takeaways,
    },
    {
      type: 'solution-cards',
      heading: 'The Revenue Visibility Architecture',
      content: [
        'Data-Driven Revenue Intelligence',
        'CRM tracking that connects every lead to its revenue impact:',
      ],
      benefit:
        'When every lead, quote, and closed deal is tracked to its source and value, you can invest confidently in what works and stop spending on what does not.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'No Tracking vs Full Revenue Visibility',
      content: ['The difference in decision-making with and without revenue tracking:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How revenue tracking revealed the true performance of marketing channels:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Start Building Revenue Visibility',
      content: ['Steps to implement CRM-based revenue tracking:'],
      steps: diy.steps,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('revenue-growth'),
      content: getRelatedResourcesContent('revenue-growth'),
      resources: getRelatedResources('revenue-growth', canonical),
    },
  ],
};
