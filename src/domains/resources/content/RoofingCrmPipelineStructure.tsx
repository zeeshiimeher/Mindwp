import { BarChart3, Database, Users } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'roofing-crm-pipeline-structure';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Roofing businesses have unique pipeline needs: high-value jobs, long decision cycles, weather-dependent scheduling, and multiple job types ranging from emergency repairs to full replacements. A CRM pipeline built specifically for roofing organises these complexities into a clear, trackable process — from first inquiry through job completion and review collection.',
  problem:
    'Your roofing business relies on memory and spreadsheets to track jobs, which means estimates fall through the cracks, scheduling conflicts happen, and you have no visibility into your revenue pipeline',
  promise:
    'You will see how roofing companies structure their CRM pipeline to track every job from inquiry to completion, maintain scheduling visibility, and build a predictable revenue engine',
};

const takeaways = [
  'Roofing CRM pipelines need stages for inspection, estimate, follow-up, scheduling, and completion — not generic sales stages',
  'Weather-dependent scheduling means your pipeline must track seasonal capacity and job readiness',
  'Separating emergency repair and planned replacement pipelines prevents small urgent jobs from drowning out larger revenue',
  'CRM data from completed jobs feeds review generation, warranty tracking, and re-roofing reminders',
];

const problem = {
  description: [
    'Most roofing companies track jobs in their heads, on whiteboards, or in basic spreadsheets. This works at 5-10 jobs per month. At 20+, it breaks. Estimates get forgotten. Follow-ups slip. Scheduling conflicts arise when two jobs are booked for the same crew on the same day. There is no visibility into how much revenue is in the pipeline, and no data to forecast seasonal demand.',
    'The cost of this disorganisation is not just lost jobs — it is lost margin. Without pipeline visibility, roofers underprice to win work they are not sure will come, or fail to ramp up crews for peak season because they could not see demand building. A structured CRM pipeline transforms roofing from a job-by-job scramble into a predictable business.',
  ],
  causes: [
    'Generic CRM setups that do not match roofing workflow stages',
    'No separation between emergency repairs and planned replacements',
    'Estimates tracked separately from scheduling and completion',
    'No automated handoff between sales and operations stages',
    'Weather and supply delays not tracked in the pipeline',
    'Job data siloed — no connection between pipeline, invoicing, and reviews',
  ],
};

const caseExample = {
  businessType: 'Roofing Contractor (South East England)',
  problem:
    'A roofing company completing 30+ jobs per month tracked everything in a shared spreadsheet. The owner spent 2 hours daily updating it. Estimates were missed — they discovered 8 unresponded-to quote requests in one month alone. Crew scheduling was managed by phone calls, leading to 2-3 conflicts per month. They had no idea what their total pipeline value was at any point.',
  solution:
    'We built a CRM pipeline with roofing-specific stages: Inquiry → Inspection Booked → Inspection Complete → Estimate Sent → Follow-Up → Won → Scheduled → In Progress → Complete. Emergency repairs had a separate fast-track pipeline: Inquiry → Dispatched → Complete. Automations triggered at each stage: estimate sent started follow-up, won triggered scheduling, complete triggered invoicing and review request.',
  result:
    'Zero missed estimates after implementation. Scheduling conflicts eliminated. The owner reclaimed 10 hours per week previously spent on manual tracking. Pipeline visibility revealed £180,000 in pending estimates at any given time — data that informed crew hiring and material ordering. Close rate improved 12% from automated follow-up alone.',
  stat: '10 hours/week reclaimed from manual tracking with zero missed estimates after CRM implementation',
};

const solutions = [
  {
    title: 'Roofing-Specific Pipeline Stages',
    description:
      'Standard CRM pipelines (Lead → Qualified → Proposal → Closed) do not match roofing reality. A roofing pipeline needs: Inquiry → Inspection Booked → Inspection Complete → Estimate Sent → Follow-Up Active → Won → Materials Ordered → Scheduled → In Progress → Complete → Invoiced → Paid. Each stage has its own automations and time-based alerts.',
    icon: Database,
  },
  {
    title: 'Pipeline Analytics and Forecasting',
    description:
      'With every job tracked in the pipeline, you gain real-time visibility: total pipeline value, average time in each stage, conversion rates by job type, seasonal patterns, and crew utilisation. This data transforms decision-making — from guessing whether to hire another crew to knowing exactly when demand will exceed capacity based on historical patterns.',
    icon: BarChart3,
  },
  {
    title: 'Post-Completion Automation Chain',
    description:
      'When a job moves to "Complete," the CRM triggers a chain: send invoice → request review (4-hour delay) → add to warranty tracking → schedule re-roofing reminder (15-25 years). This single status change activates 4 business processes that previously required manual effort or were simply forgotten. The result is faster cash collection, more reviews, and future revenue from maintenance reminders.',
    icon: Users,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Roofing Workflow Stages',
      action:
        'List every stage a roofing job goes through from first contact to final payment. Typical stages: Inquiry Received → Inspection Scheduled → Inspection Done → Estimate Created → Estimate Sent → Follow-Up → Won → Materials Ordered → Crew Scheduled → Job Started → Job Complete → Invoiced → Paid. If you do emergency repairs, create a separate pipeline with fewer stages.',
      expectedResult:
        'A defined set of pipeline stages that match your actual roofing workflow, with clear criteria for when a job moves to the next stage.',
    },
    {
      step: 2,
      title: 'Configure Your CRM Pipeline',
      action:
        'Set up the pipeline in your CRM with custom fields for: job type (repair/replacement/maintenance), roof type, estimated value, inspection date, scheduled start date, crew assigned, and material status. Required fields at each stage prevent incomplete records. Add a dashboard showing total pipeline value, jobs by stage, and average time in each stage.',
      expectedResult:
        'A CRM pipeline that captures all roofing-specific information and gives you an at-a-glance view of your business.',
    },
    {
      step: 3,
      title: 'Add Stage Automations',
      action:
        'For each pipeline stage, define what should happen automatically. Estimate Sent → start follow-up sequence. Won → notify operations for scheduling. Scheduled → send customer confirmation with prep instructions. Complete → trigger invoice, review request, and warranty entry. Set time-based alerts: estimate pending 7+ days → alert owner.',
      expectedResult:
        'Automated actions at each pipeline stage that eliminate manual tasks and ensure nothing falls through the cracks.',
    },
  ],
};

const finalCta = {
  title: 'Build a CRM Pipeline for Your Roofing Business',
  description:
    'Our CRM Infrastructure service builds roofing-specific pipelines that track every job from inquiry to completion — with automations that eliminate manual work and give you complete visibility into your revenue.',
};

export const roofingCrmPipelineStructure: ResourceData = {
  slug,
  title: 'Roofing CRM Pipeline Structure',
  description:
    'See how roofing companies structure their CRM pipeline to track every job from inquiry to completion, eliminate missed estimates, and build predictable revenue visibility.',
  intent: 'ACTIONABLE',
  category: 'crm-automation',
  publishedAt: '2026-01-28',
  systems: ['crm-automation'],
  industries: ['roofing'],
  topics: ['pipeline-architecture'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Roofing CRM Pipeline Structure',
    description:
      'See how roofing companies structure their CRM pipeline to track every job from inquiry to completion, eliminate missed estimates, and build predictable revenue visibility.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Roofing CRM Pipeline Structure',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for roofing CRM pipeline design:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Spreadsheets and Memory Fail Roofing Businesses',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Pipeline Problems in Roofing:',
    },
    {
      type: 'case',
      heading: 'Real-World Roofing Example',
      content: ['How structured CRM pipeline transformed a roofing operation:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up a Roofing CRM Pipeline',
      content: ['Steps specific to roofing pipeline design:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Roofing CRM Pipeline Architecture',
      content: [
        'CRM Pipeline Designed for Roofing Operations',
        'A pipeline structure built around roofing business realities:',
      ],
      benefit:
        'When every roofing job is tracked through purpose-built pipeline stages with automated actions at each transition, you eliminate missed estimates, scheduling conflicts, and revenue blind spots.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/crm-infrastructure-implementation',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
  ],
};
