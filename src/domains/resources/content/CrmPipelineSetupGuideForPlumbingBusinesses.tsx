import { BarChart3, CheckSquare, GitBranch } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'crm-pipeline-setup-guide-for-plumbing-businesses';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Plumbing businesses juggle emergency call-outs, quoted projects, and recurring maintenance with no system to track which jobs are progressing and which are stalled. Quotes are sent and forgotten. Follow-ups depend on memory. Revenue leaks from every gap. This guide walks through setting up a CRM pipeline that tracks every plumbing job from first enquiry to completion and follow-up.',
  problem:
    'Your plumbing business loses revenue because quoted jobs are forgotten, follow-ups are inconsistent, and there is no system showing which leads are active, stalled, or lost',
  promise:
    'You will have a step-by-step guide to build a CRM pipeline that separates job types, automates follow-up on sent quotes, and gives your team a clear view of every active opportunity',
};

const takeaways = [
  'Plumbing businesses that track quotes in a CRM pipeline recover twenty to thirty percent more revenue from follow-up alone',
  'Separating emergency, quoted, and maintenance work into distinct pipeline stages prevents high-value jobs from being buried',
  'Automated quote follow-up eliminates the single biggest revenue leak — sent quotes that receive no response and no chase',
  'Pipeline reporting reveals which job types convert best and where leads stall, replacing guesswork with operational data',
];

const problem = {
  description: [
    'Most plumbing businesses run on memory and notepads. A plumber visits a property, sends a quote, and moves to the next job. If the customer does not respond, the quote is forgotten. Nobody tracks how many quotes were sent last month, how many converted, or how many simply disappeared. The business has no idea how much revenue it loses to untracked follow-up.',
    'This problem compounds with growth. More plumbers means more quotes, more job types, and more channels. The office becomes a bottleneck, trying to track everything manually while handling scheduling, invoicing, and customer calls. Without a pipeline, the business cannot measure performance, cannot predict revenue, and cannot systematically improve its conversion rate.',
  ],
  causes: [
    'Quotes sent by email with no tracking of customer response or follow-up dates',
    'Emergency and quoted work mixed together with no priority separation',
    'No central system — leads arrive via phone, website, Google, and word of mouth with no aggregation',
    'Follow-up depends entirely on individual plumber memory and motivation',
    'No measurement of quote-to-booking conversion rate by job type or plumber',
    'Recurring maintenance customers receive no proactive outreach for annual servicing',
  ],
};

const comparison = {
  before: {
    title: 'Without a CRM Pipeline',
    items: [
      'Quotes sent and forgotten with no follow-up system',
      'No visibility into how many active leads exist at any time',
      'Emergency and project work compete in the same disorganised queue',
      'Follow-up depends on memory and happens inconsistently',
      'No data on quote conversion rates or revenue per job type',
      'Maintenance customers contacted only when they call with a problem',
    ],
  },
  after: {
    title: 'With a CRM Pipeline',
    items: [
      'Every quote tracked with automated follow-up at three, seven, and fourteen days',
      'Dashboard shows all active leads by stage, value, and age',
      'Emergency, quoted, and maintenance jobs follow separate tracked workflows',
      'Follow-up is automated and consistent regardless of team workload',
      'Weekly reports show conversion rate by job type, source, and team member',
      'Maintenance customers receive proactive annual service reminders automatically',
    ],
  },
};

const solutions = [
  {
    title: 'Pipeline Stage Design',
    description:
      'The plumbing CRM pipeline uses stages that match how work actually moves: New Enquiry, Site Visit Scheduled, Quote Sent, Quote Accepted, Job Scheduled, Job Completed, and Follow-Up. Each stage has a maximum age before escalation. Quoted work that sits without a response for three days triggers the first automated follow-up. Jobs completed without a review request trigger one automatically.',
    icon: GitBranch,
  },
  {
    title: 'Automated Quote Follow-Up',
    description:
      'When a quote enters the "Quote Sent" stage, the CRM starts a follow-up sequence. Day three: a brief check-in asking if there are questions. Day seven: a reminder that the quote is still valid with a direct booking link. Day fourteen: a final message noting that availability may change. Each message is personalised with job details. This sequence alone typically recovers fifteen to twenty-five percent of quotes that would otherwise receive no response.',
    icon: CheckSquare,
  },
  {
    title: 'Pipeline Reporting and Forecasting',
    description:
      'With every lead tracked through stages, the business gains operational data it has never had. Conversion rate by job type shows which services are most profitable. Average time in each stage reveals bottlenecks. Total pipeline value gives a revenue forecast. Weekly reports replace guesswork with evidence for hiring, marketing, and pricing decisions.',
    icon: BarChart3,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Job Types',
      action:
        'List every type of work your plumbing business handles: emergency repairs, bathroom installations, boiler servicing, drain clearance, commercial contracts. For each type, note the typical timeline from enquiry to completion and the average job value. This mapping determines whether you need one pipeline with tags or multiple separate pipelines.',
      expectedResult:
        'A clear list of job types with their timelines and values, ready to be structured into pipeline stages.',
    },
    {
      step: 2,
      title: 'Define Pipeline Stages',
      action:
        'Create stages that match your actual workflow. A typical plumbing pipeline uses: New Enquiry → Qualified → Site Visit Scheduled → Quote Sent → Quote Accepted → Job Scheduled → Job Completed → Follow-Up. Set a maximum time for each stage — for example, quotes should not sit longer than fourteen days without a decision. Configure alerts when a lead exceeds its stage time limit.',
      expectedResult:
        'A pipeline structure with defined stages and time limits that matches how your team actually works.',
    },
    {
      step: 3,
      title: 'Centralise All Lead Sources',
      action:
        'Route every enquiry channel into the CRM pipeline. Website form submissions create a lead automatically. Phone calls log a record with caller details. Google Business Profile messages sync into the same system. Word-of-mouth referrals are entered manually with the referral source tagged. Every new lead starts in the "New Enquiry" stage regardless of channel.',
      expectedResult:
        'A single intake point where every lead is visible, with source tracking that shows which channels generate the most work.',
    },
    {
      step: 4,
      title: 'Set Up Quote Follow-Up Automation',
      action:
        'Configure a three-step follow-up sequence triggered when a lead enters the "Quote Sent" stage. Day three: check-in email or SMS. Day seven: reminder with direct booking link. Day fourteen: final availability notice. Personalise each message with the customer name, property address, and quoted service. Test the sequence by moving a test lead through the stages.',
      expectedResult:
        'Every sent quote receives consistent follow-up without relying on team memory, recovering revenue from customers who would otherwise go silent.',
    },
    {
      step: 5,
      title: 'Enable Reporting and Review',
      action:
        'Set up a weekly pipeline report showing: total active leads by stage, new leads this week, quotes sent versus accepted, average time in each stage, and total pipeline value. Share the report with the team. Review it weekly to identify where leads are stalling and which job types convert best. Use the data to adjust marketing spend and team focus.',
      expectedResult:
        'Weekly visibility into pipeline performance with actionable data for improving conversion and revenue.',
    },
  ],
};

const caseExample = {
  businessType: 'Plumbing Company (Leeds, 4 plumbers)',
  problem:
    'A four-plumber operation sent thirty to forty quotes per month with no tracking system. The owner estimated a fifty percent conversion rate. When we audited the actual numbers using email records and invoices, the true rate was twenty-eight percent. Over forty percent of quotes received no follow-up at all. The business was leaving an estimated twelve to fifteen thousand pounds per month in unrecovered quotes.',
  solution:
    'We built a CRM pipeline with stages matching their workflow, centralised all leads from website, phone, and Google, and configured a three-step automated follow-up sequence for every sent quote. Emergency work was separated into its own fast-track pipeline. Weekly reporting gave the owner visibility into conversion rates for the first time.',
  result:
    'Quote-to-booking conversion improved from twenty-eight percent to forty-four percent within eight weeks. The automated follow-up sequence recovered an average of six additional jobs per month that would previously have been lost to silence. The owner used pipeline data to identify that bathroom installations had the highest margin and shifted marketing accordingly.',
  stat: '57% improvement in quote conversion after implementing CRM pipeline tracking and automated follow-up',
};

const faqs = [
  {
    question: 'Do we need separate pipelines for emergency and quoted work?',
    answer:
      'It depends on volume. If you handle more than ten emergency calls per week, a separate pipeline keeps them from cluttering the quoted work view. For smaller operations, a single pipeline with a "job type" tag and filtered views works well. The key is that emergency work does not push quoted work out of sight.',
  },
  {
    question: 'How do we get plumbers to update the CRM on site?',
    answer:
      'Keep it simple. The plumber only needs to update two things: job status after a site visit and whether a quote was accepted or declined. A mobile CRM app with one-tap status updates makes this practical. Automate everything else — lead creation, follow-up, and reporting should not require manual input from field staff.',
  },
  {
    question: 'What if customers find automated follow-up annoying?',
    answer:
      'The follow-up sequence is three messages over fourteen days — not aggressive. Each message provides value: answering potential questions, confirming quote validity, and noting availability. Customers who have decided against the work can reply to stop the sequence. In practice, most customers appreciate the follow-up because it saves them from having to chase the plumber.',
  },
];

const finalCta = {
  title: 'Build Your Plumbing CRM Pipeline',
  description:
    'Our CRM Automation services build the complete pipeline — stage design, quote follow-up, reporting, and team training — so your plumbing business tracks every opportunity and converts more quotes into booked jobs.',
};

export const crmPipelineSetupGuideForPlumbingBusinesses: ResourceData = {
    slug,
    seo: {
    title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
    description:
      'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
    canonical,
  },
    title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
    description:
    'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
    category: 'crm-automation',
    publishedAt: '2026-04-06',
    systems: ['crm-automation'],
    industries: ['plumbing'],
    topics: ['crm-pipeline'],
    primaryService: 'crm-automation',
    sections: [
    {
      type: 'hero',
      heading: 'CRM Pipeline Setup Guide for Plumbing Businesses',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Plumbing Businesses Lose Revenue Without a Pipeline',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Revenue Leaks in Plumbing:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The pipeline facts every plumbing business needs to understand:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Pipeline Implementation',
      content: ['The operational difference when plumbing jobs are tracked in a CRM pipeline:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Plumbing Pipeline Architecture',
      content: [
        'Structure Through Stages',
        'An effective plumbing CRM pipeline combines stage design, automated follow-up, and reporting:',
      ],
      benefit:
        'When every quote is tracked and followed up automatically, your team focuses on doing the work while the system ensures no opportunity is forgotten.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Plumbing Example',
      content: ['How a CRM pipeline transformed a plumbing company:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The Plumbing CRM Pipeline Setup Checklist',
      content: ['Follow these steps to build your pipeline:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about CRM pipelines for plumbing businesses:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
  ]
};
