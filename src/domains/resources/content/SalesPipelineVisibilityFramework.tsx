import { AlertTriangle, BarChart, Eye } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'sales-pipeline-visibility-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Sales pipeline visibility is the ability to see, in real time, every deal in your pipeline — its value, stage, age, next action, and probability of closing. A visibility framework turns your pipeline from a static list of deals into a dynamic management tool that reveals bottlenecks, identifies at-risk deals, and enables accurate revenue forecasting.',
  problem:
    'You cannot see the health of your pipeline at a glance — deals are scattered across stages, stalled deals go unnoticed, and your revenue forecast is a guess because the underlying data is inconsistent and incomplete',
  promise:
    'You will learn how to build a pipeline visibility framework that shows the real-time health of every deal, highlights deals that need attention, and provides a reliable monthly revenue forecast',
};

const takeaways = [
  'Pipeline visibility is not a report — it is a real-time view of deal health and revenue probability',
  'Three visibility layers: deal-level detail, stage-level health, and pipeline-level forecast',
  'Stale deals (no activity for X days) are the primary pipeline health risk and must be flagged automatically',
  'Visibility drives action — when problems are visible, teams fix them; when hidden, they persist',
];

const problem = {
  description: [
    'Without visibility, pipeline management is reactive. The owner or sales manager checks individual deals when something goes wrong, instead of having a system that surfaces problems proactively. Stale deals sit untouched for weeks. High-value deals miss follow-up windows. The total pipeline value number is meaningless because it includes deals that will never close.',
    'The deeper problem is that invisible pipelines cannot be managed. If you cannot see which deals have stalled, which are at risk, and which need immediate attention, you cannot take action until it is too late. Pipeline visibility is not a nice-to-have — it is the foundation of systematic revenue management.',
  ],
  causes: [
    'No dashboard showing pipeline status at a glance',
    'Stale deals not flagged — no automated alerts for inactivity',
    'Pipeline value includes dead deals that inflate the forecast',
    'No deal aging tracking — unknown how long deals have been in each stage',
    'No weekly review rhythm using pipeline data',
    'Individual deals checked sporadically instead of pipeline managed systematically',
  ],
};

const comparison = {
  before: {
    title: 'Invisible Pipeline',
    items: [
      'Deals checked individually, reactively',
      'Stale deals discovered randomly or not at all',
      'Pipeline value inflated by dead deals',
      'No deal aging or stage duration tracking',
      'Forecast based on total pipeline value — unreliable',
      'Problems only visible after revenue is lost',
    ],
  },
  after: {
    title: 'Visible Pipeline',
    items: [
      'Dashboard shows all deals with status indicators',
      'Stale deals flagged automatically after defined inactivity period',
      'Dead deals cleaned regularly — pipeline value reflects reality',
      'Deal aging visible — overdue deals highlighted',
      'Forecast weighted by stage probability — accurate within 10-15%',
      'Problems visible in real time — addressed before revenue is lost',
    ],
  },
};

const solutions = [
  {
    title: 'Deal-Level Visibility',
    description:
      'Every deal shows: assigned owner, current stage, days in stage, deal value, last activity date, next scheduled action, and a health indicator (green/amber/red based on stage duration and activity). This detail-level view enables managers to spot specific deals that need attention and hold team members accountable for their pipeline.',
    icon: Eye,
  },
  {
    title: 'Stage-Level Health Metrics',
    description:
      'Each pipeline stage shows: number of deals, total value, average time in stage, conversion rate to next stage, and number of stale deals. This reveals bottlenecks: if deals pile up in "Quote Sent" with low conversion, your quoting process needs work. If average time in "Follow-Up" is 14 days, your follow-up cadence is too slow.',
    icon: BarChart,
  },
  {
    title: 'Proactive Alert System',
    description:
      'Automated alerts surface problems before they cost revenue: deal stale for X days (no activity), deal overdue (past expected stage duration), high-value deal without next action scheduled, pipeline value dropping below monthly target. These alerts push information to the right person at the right time instead of waiting for someone to check.',
    icon: AlertTriangle,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Define Deal Health Rules',
      action:
        'For each pipeline stage, define: expected duration (e.g., "Quote Sent" should not exceed 7 days), required activity (at least one follow-up attempt every 3 days), and deal status thresholds: Green = on track, Amber = approaching limit, Red = overdue. These rules become the basis for your visibility indicators.',
      expectedResult:
        'Clear, measurable health criteria for every pipeline stage that can be applied consistently.',
    },
    {
      step: 2,
      title: 'Build a Pipeline Dashboard',
      action:
        'Create a dashboard (CRM built-in or spreadsheet) showing: total pipeline value by stage (bar chart), number of stale deals (deals with no activity in 5+ days), deals by health status (green/amber/red counts), and weighted forecast (deal value × stage probability for each stage, summed). Review this dashboard every morning.',
      expectedResult:
        'A single-view dashboard that shows the health of your entire pipeline and highlights what needs attention today.',
    },
    {
      step: 3,
      title: 'Establish a Weekly Pipeline Review',
      action:
        'Schedule a 30-minute weekly pipeline review. Walk through: new deals added this week, deals that advanced stages, stale deals (why are they stalled?), lost deals (what happened?), and forecast accuracy (compare last week forecast to actual closes). Make specific commitments for action on stalled deals.',
      expectedResult:
        'A rhythmic management practice that uses pipeline visibility data to drive action and accountability every week.',
    },
  ],
};

const caseExample = {
  businessType: 'Kitchen Fitting Company (London)',
  problem:
    'A kitchen fitting company had a CRM with 85 open deals worth £620,000 in total pipeline value. The owner quoted a monthly forecast of £120,000 based on this. Actual monthly closes averaged £65,000. The gap was caused by: 23 deals stalled for 30+ days (effectively dead), 15 deals from 6+ months ago still in pipeline, and no visibility into why deals were not progressing.',
  solution:
    'We implemented a visibility framework: deal health indicators based on stage duration and activity, automated stale deal alerts (7 days for quotes, 14 days for other stages), a pipeline dashboard showing real-time health, and a weekly review cadence. Dead deals were cleaned from the pipeline.',
  result:
    'Active pipeline dropped from 85 to 47 deals — but these were real opportunities. Forecast accuracy improved from 54% to 88%. Close rate on active deals improved from 18% to 29% because stalled deals were addressed quickly. Monthly revenue increased from £65,000 to £89,000 because the team focused on winnable deals.',
  stat: 'Forecast accuracy improved from 54% to 88%; monthly revenue increased 37%',
};

const faqs = [
  {
    question: 'How do I get my team to keep pipeline data current?',
    answer:
      'Make the data useful to them personally (automated follow-ups based on deal stage save them time), review pipeline data in weekly meetings (accountability), and keep the required updates minimal (stage change + next action date). If updating the CRM takes 30 seconds and saves them from forgetting follow-ups, compliance improves naturally.',
  },
  {
    question: 'When should I remove a deal from the pipeline?',
    answer:
      'Any deal with no activity and no response for 30+ days should be moved to "Lost" or "Dormant." Dead deals inflate your pipeline value and distort your forecast. It is better to have an accurate small pipeline than a large pipeline full of dead deals. Lost deals can be reactivated later if the prospect re-engages.',
  },
  {
    question: 'What stage probabilities should I use for forecasting?',
    answer:
      'Use your actual historical data. Look at the last 6-12 months: of deals that reached "Quote Sent," what percentage actually closed? That is your probability for that stage. Typical ranges: New Lead 5-10%, Contacted 10-20%, Quote Sent 25-40%, Negotiation 50-70%, Verbal Agreement 80-90%. Adjust based on your actual numbers.',
  },
];

const finalCta = {
  title: 'Get Complete Pipeline Visibility That Drives Revenue',
  description:
    'Our CRM Infrastructure systems build pipeline dashboards, automated alerts, and forecasting tools that give you real-time visibility into every deal and your revenue trajectory.',
};

export const salesPipelineVisibilityFramework: ResourceData = {
    slug,
    seo: {
    title: 'Sales Pipeline Visibility Framework',
    description:
      'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
    canonical,
  },
    title: 'Sales Pipeline Visibility Framework',
    description:
    'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
    category: 'revenue-growth',
    publishedAt: '2025-12-10',
    systems: ['crm-automation'],
    industries: [],
    topics: ['pipeline-visibility'],
    primaryService: 'crm-automation',
    sections: [
    {
      type: 'hero',
      heading: 'Sales Pipeline Visibility Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Invisible Pipelines Cost Revenue',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Pipeline Lacks Visibility:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core visibility principles:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Invisible vs Visible Pipeline',
      content: [
        'The difference between managing deals reactively and managing pipeline proactively:',
      ],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Visibility Framework Architecture',
      content: [
        'Three-Layer Pipeline Intelligence',
        'A visibility system that surfaces problems before they cost revenue:',
      ],
      benefit:
        'When every deal, stage, and trend is visible in real time, your team can act on problems before revenue is lost — turning pipeline management from reactive to proactive.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How pipeline visibility revealed hidden problems and unlocked revenue:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Framework',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Build Your Visibility Framework',
      content: ['Steps to implement pipeline visibility:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about pipeline visibility:'],
      items: faqs,
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
  ]
};
