import { GitBranch, Layers, Settings } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'crm-pipeline-architecture';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'CRM pipeline architecture is the structured design of your sales pipeline stages, automations, and rules within your CRM system. A well-architected pipeline mirrors your actual sales process, automates routine follow-ups, enforces data quality, and provides accurate forecasting. It turns your CRM from a contact list into a revenue management system.',
  problem:
    'Your CRM pipeline has default stages that do not match your sales process, no automations, inconsistent data entry, and provides no useful forecast — it is a database, not a system',
  promise:
    'You will learn how to architect a CRM pipeline that mirrors your actual sales process, automates follow-up at each stage, and provides accurate revenue forecasting and performance visibility',
};

const takeaways = [
  'Pipeline stages must mirror your actual sales process — not the CRM default stages',
  'Each stage transition should have a clear definition and required actions',
  'Automation at each stage eliminates manual follow-up and reduces deal stalling',
  'A properly architected pipeline provides accurate revenue forecasts — not just a deal list',
];

const problem = {
  description: [
    'Most CRM pipelines use out-of-the-box stages like "Lead" → "Qualified" → "Proposal" → "Closed." These generic stages rarely match how a service business actually sells. The result is that team members either skip stages, use them inconsistently, or abandon the pipeline entirely because it does not reflect their workflow.',
    'Without proper architecture, the pipeline cannot provide useful data. Deals sit in wrong stages. No one knows which deals need attention. Follow-ups are manual and often missed. The forecast is unreliable because the data underneath is inconsistent. The CRM becomes overhead instead of an asset.',
  ],
  causes: [
    'Using default CRM stages instead of customising to your sales process',
    'No clear definition of what qualifies a deal for each stage',
    'No automation — all follow-up is manual and inconsistent',
    'Deal values not entered or not updated as scope changes',
    'No required fields or data quality enforcement',
    'Pipeline viewed as admin overhead rather than a management tool',
  ],
};

const comparison = {
  before: {
    title: 'Default CRM Pipeline',
    items: [
      'Generic stages that do not match your process',
      'Team uses pipeline inconsistently or not at all',
      'All follow-up manual — missed regularly',
      'Deal values missing or outdated',
      'Forecast unreliable — just a list of deals',
      'CRM seen as admin burden, not business tool',
    ],
  },
  after: {
    title: 'Architected Pipeline',
    items: [
      'Stages mirror your exact sales process',
      'Clear criteria for each stage transition',
      'Automated follow-up at every stage',
      'Deal values required and tracked through lifecycle',
      'Forecast accurate because data is consistent and current',
      'CRM drives daily decisions and growth strategy',
    ],
  },
};

const solutions = [
  {
    title: 'Custom Stage Design',
    description:
      'Map your actual sales process step by step: from first contact to signed contract. For a typical service business: New Enquiry → Initial Contact Made → Site Visit Scheduled → Quote Sent → Quote Follow-Up → Negotiation → Won/Lost. Each stage has a clear entry criteria, required actions, and expected duration. The pipeline matches what your team actually does.',
    icon: GitBranch,
  },
  {
    title: 'Stage Automation Rules',
    description:
      'Each stage transition triggers automated actions: moving to "Quote Sent" triggers a 3-day follow-up reminder. A deal sitting in "Quote Follow-Up" for 7 days triggers an escalation alert to the manager. "Won" triggers an onboarding sequence and review request scheduling. These automations ensure no deal falls through the cracks and reduce manual work.',
    icon: Settings,
  },
  {
    title: 'Pipeline Forecasting Layer',
    description:
      'When stages have consistent definitions and deal values are tracked, the pipeline becomes a forecasting tool. Expected revenue = deal value × probability at each stage. If your "Quote Sent" stage has a historical 35% close rate, £100,000 in that stage represents £35,000 expected revenue. This enables accurate monthly forecasting and resource planning.',
    icon: Layers,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Actual Sales Process',
      action:
        'Write down every step from when a lead first contacts you to when the job is signed. Be specific — include steps like "site visit completed" or "quote revised" if those happen regularly. Aim for 5-8 stages. For each stage, define: what must happen before a deal enters this stage, what the team should do while a deal is in this stage, and how long a deal should typically stay here.',
      expectedResult:
        'A documented sales process with 5-8 stages that reflect how your business actually sells, with clear entry criteria and expected durations.',
    },
    {
      step: 2,
      title: 'Configure Stages and Required Fields',
      action:
        'In your CRM, replace default stages with your mapped stages. For each stage, set required fields: deal value (required at entry), expected close date, and any stage-specific fields (e.g., "site visit date" for the site visit stage). This ensures data quality and makes the pipeline useful for forecasting.',
      expectedResult:
        'A CRM pipeline with stages matching your process and required fields that enforce data quality.',
    },
    {
      step: 3,
      title: 'Add Stage-Based Automations',
      action:
        'For each stage, create at least one automation: Quote Sent → send follow-up email after 3 days. Deal stalled (no activity for 7 days) → alert assigned team member. Won → trigger onboarding sequence. Lost → add to nurture sequence. Start simple — even basic automations prevent deals from stalling.',
      expectedResult:
        'Automated follow-up and alerts at every pipeline stage, ensuring no deal stalls without someone being notified.',
    },
  ],
};

const caseExample = {
  businessType: 'Bathroom Renovation Company (Manchester)',
  problem:
    'A bathroom renovation company used their CRM with default stages. Deals were scattered across random stages with no consistency. The sales team did not trust the pipeline data. Follow-ups were manual, and approximately 30% of quotes received no follow-up at all. The pipeline showed £400,000 in deals but the owner had no idea how much would actually close.',
  solution:
    'We architected a custom pipeline: New Enquiry → Discovery Call → Site Survey → Quote Presented → Quote Follow-Up → Negotiation → Deposit Received → Won/Lost. Each stage had clear criteria and required fields. Automations triggered follow-ups 3 days after quote presentation, 7-day stall alerts, and lost-deal feedback requests.',
  result:
    'Quote follow-up rate went from 70% to 100% (automation handle the initial follow-up). Close rate improved from 22% to 31% because no quotes were forgotten. Pipeline forecast accuracy improved from "useless" to within 10% of actual monthly revenue. The team started using the pipeline daily because it actually helped them sell.',
  stat: '31% close rate (up from 22%), 100% quote follow-up rate',
};

const faqs = [
  {
    question: 'How many pipeline stages should I have?',
    answer:
      'Between 5 and 8 is typical for service businesses. Fewer than 5 does not give enough granularity for tracking and automation. More than 8 creates friction and reduces team compliance. Each stage should represent a meaningful step where something changes in the deal status — not just a minor action.',
  },
  {
    question: 'Should I have separate pipelines for different services?',
    answer:
      'Only if the sales processes are genuinely different. A company that does both emergency repairs (fast turnaround, no quote stage) and major renovations (multiple visits, detailed quotes) should have two pipelines because the stages are different. If all services follow the same process, one pipeline with the service type tagged on the deal is simpler.',
  },
  {
    question: 'How do I get my team to actually use the pipeline?',
    answer:
      'Make it useful, not just admin. If the pipeline provides value to the salesperson (automated follow-ups they do not have to remember, clear next actions, no deals falling through cracks), they will use it. Start with automations that save them time. Then add required fields gradually. Review pipeline data in weekly team meetings to make it central to operations.',
  },
  {
    question: 'Should closed-lost deals stay in the pipeline?',
    answer:
      'They should stay in your CRM history but not clutter the active working stages. Closed-lost data is valuable for win/loss analysis, reactivation, and forecasting accuracy, so archive it in a final stage or closed view rather than deleting it. Clean active views improve day-to-day usability without losing strategic insight.',
  },
  {
    question: 'When should I apply forecast probabilities to deals?',
    answer:
      'Only after your stages reflect real behaviour and you have enough historical data to support them. Early on, use simple stage-based probabilities as directional guidance, not hard truth. Over time, adjust those percentages based on actual close rates by stage so the forecast becomes a useful management tool rather than a guess dressed up as data.',
  },
];

const finalCta = {
  title: 'Get a Pipeline Architecture That Actually Drives Revenue',
  description:
    'Our CRM Infrastructure team architects custom pipelines that mirror your sales process, automate follow-up, and provide accurate revenue forecasting.',
};

export const crmPipelineArchitecture: ResourceData = {
    slug,
    seo: {
    title: 'CRM Pipeline Architecture',
    description:
      'Learn how to architect a CRM pipeline with custom stages, automated follow-up, and accurate forecasting that mirrors your actual sales process.',
    canonical,
  },
    title: 'CRM Pipeline Architecture',
    description:
    'Learn how to architect a CRM pipeline with custom stages, automated follow-up, and accurate forecasting that mirrors your actual sales process.',
    category: 'revenue-growth',
    publishedAt: '2025-11-22',
    systems: ['crm-automation'],
    industries: [],
    topics: ['pipeline-architecture', 'crm-visibility'],
    primaryService: 'crm-automation',
    sections: [
    {
      type: 'hero',
      heading: 'CRM Pipeline Architecture',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of pipeline architecture:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Default CRM Pipelines Fail Service Businesses',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Pipeline Needs Architecture:',
    },
    {
      type: 'comparison',
      heading: 'Default vs Architected Pipeline',
      content: ['The difference between a default CRM and a properly designed pipeline:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Pipeline Architecture',
      content: [
        'Revenue Management System',
        'A pipeline designed to manage deals, automate follow-up, and forecast accurately:',
      ],
      benefit:
        'When your pipeline mirrors your actual sales process with automation at every stage, deals stop falling through cracks, follow-up becomes consistent, and forecasting becomes reliable.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Architect Your Pipeline',
      content: ['Steps to build a custom CRM pipeline:'],
      steps: diy.steps,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How pipeline architecture transformed a renovation company sales process:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Architecture',
      resultHeading: 'The Outcome',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about CRM pipeline architecture:'],
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
