import { Clock, Database, Users } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'automotive-crm-pipeline-for-repair-jobs';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    "Auto repair shops handle multiple job types simultaneously — MOTs, routine servicing, diagnostics, major repairs, tyres — each with different workflows, timelines, and customer communication needs. Without a CRM pipeline, jobs are tracked on whiteboards, in the mechanic's memory, or on scattered paper job cards. Quotes get sent but never followed up. Parts ordering is delayed because nobody flagged approved jobs. A purpose-built CRM pipeline for auto repair tracks every job from booking through to collection and beyond, ensuring nothing falls through the cracks.",
  problem:
    'Your garage loses revenue from missed quote follow-ups, delayed parts ordering, and no visibility into how many jobs are in progress, waiting for approval, or ready for collection',
  promise:
    'You will see how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering on approval, notify customers at collection, and chain post-collection automation for reviews and future service reminders',
};

const takeaways = [
  'Auto repair pipelines need two tracks: a fast track for MOTs and routine services (same-day) and a repair track for diagnostics and major work (multi-day, requires approval)',
  'Quote approval follow-up automation eliminates the most common revenue leak — quotes sent but never chased',
  'Parts ordering triggered automatically on job approval reduces delays and gets vehicles back to customers faster',
  'Post-collection automation chains review requests and next-service reminders to every completed job',
];

const problem = {
  description: [
    'Most garages track jobs using whiteboards, paper job cards, or at best a basic spreadsheet. This works when the shop is small and quiet, but breaks down as volume increases. The whiteboard does not send follow-up messages when a quote goes unanswered for 3 days. The paper job card does not alert the parts department when a repair is approved. The spreadsheet does not notify the customer that their vehicle is ready for collection.',
    'The revenue impact is concentrated in two areas. First, missed quote follow-ups: a garage sending 10 diagnostic quotes per week and following up on only half is losing 2-3 approved jobs weekly. At an average repair value of £400-800, that is £1,000-2,400 in weekly revenue that simply falls through the cracks. Second, workflow inefficiency: when job status is tracked manually, mechanics wait for parts that were never ordered, customers are not notified their vehicle is ready, and the owner has no visibility into total pipeline value or bottlenecks.',
  ],
  causes: [
    'Job tracking on whiteboards or paper with no automated follow-up',
    'No system to flag quotes awaiting customer approval',
    'Parts ordering delayed because approved jobs are not automatically flagged',
    'Customer collection notifications handled manually and often forgotten',
    'No separation between fast-track (MOT/service) and repair-track workflows',
    'Zero visibility into total pipeline value and workshop capacity',
  ],
};

const caseExample = {
  businessType: 'Independent Garage (Essex, 6 bays, 5 mechanics)',
  problem:
    'A busy 6-bay garage tracked all jobs on a large whiteboard in the reception area. The service advisor wrote job details in marker, erased them when complete, and relied on memory for follow-ups. Analysis revealed they were missing 3-4 customer approvals per week — quotes sent by email or text but never followed up. Parts ordering was delayed because the parts manager had no system to identify which jobs had been approved. Customers frequently called to check if their car was ready because no one had notified them. The owner had no idea of the total value of work in progress at any given time.',
  solution:
    'We implemented a CRM pipeline with auto-repair-specific stages: Booked → Checked In → Diagnosis → Quote Sent → Approved → Parts Ordered → In Progress → Complete → Ready for Collection → Collected → Invoiced. MOTs and routine services used a fast track (Booked → Checked In → In Progress → Complete → Ready for Collection → Collected). Stage automations handled the critical transitions: Quote Sent triggered a 48-hour follow-up if no response. Approved triggered a parts order alert. Complete triggered a customer SMS notification. Collected triggered a review request (3 hours later) and scheduled the next service reminder.',
  result:
    'Quote follow-up became automatic — zero missed approvals in the first month. Parts ordering moved to same-day on approval, reducing average job completion time by 1.2 days. Customer collection notifications eliminated "is my car ready?" calls entirely. The owner gained real-time pipeline visibility showing £65,000 in active pipeline value at any given time, enabling better capacity planning and cash flow forecasting. The team reclaimed 8 hours per week previously spent on manual coordination. Post-collection automation generated 12 new reviews in the first month and booked 8 return services.',
  stat: 'Zero missed quote approvals, 1.2-day faster job completion, £65k pipeline visibility, and 8 hours/week reclaimed from manual coordination',
};

const solutions = [
  {
    title: 'Auto-Repair-Specific Pipeline Stages',
    description:
      'Generic CRM pipelines do not fit garage workflows. Auto repair needs stages that reflect how work actually moves through a workshop: Booked, Checked In, Diagnosis, Quote Sent, Approved, Parts Ordered, In Progress, Complete, Ready for Collection, Collected, and Invoiced. MOTs and routine services skip the diagnosis and quote stages, moving on a fast track. Major repairs follow the full pipeline. Each stage captures the information needed for the next: diagnosis notes feed into the quote, approval triggers parts ordering, completion triggers customer notification.',
    icon: Database,
  },
  {
    title: 'Quote Approval Follow-Up Automation',
    description:
      'The most expensive gap in most garage workflows is the space between sending a quote and receiving approval. Customers intend to respond but forget, get busy, or want to "think about it" and never come back. Automated follow-up sends a reminder 48 hours after the quote is sent, then again at 5 days with a message emphasising the diagnostic findings and repair urgency. The service advisor receives an alert for quotes unanswered after 7 days for a personal call. This systematic approach recovers 60-70% of quotes that would otherwise be lost.',
    icon: Clock,
  },
  {
    title: 'Post-Collection Lifecycle Chain',
    description:
      "A completed job is the beginning of a customer relationship, not the end. When a vehicle is marked as collected, the CRM triggers a lifecycle chain: a review request 3 hours after collection, a satisfaction check at 7 days, a next-service reminder calculated from service type and mileage, and an MOT reminder linked to the vehicle's expiry date. Every job feeds the next booking opportunity. This post-collection automation turns one-time repairs into ongoing customer relationships with predictable return revenue.",
    icon: Users,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Garage Workflow Stages',
      action:
        'Before configuring any software, map how jobs actually move through your workshop. Follow 10 different jobs from initial booking to collection and write down every status change. You will likely identify: Booked, Checked In, Diagnosis/Inspection, Quote Sent (for non-routine work), Awaiting Approval, Parts Ordered, In Progress, Complete, Ready for Collection, and Collected. Note which stages apply to all jobs and which only apply to certain types. MOTs and routine services probably skip diagnosis and quoting. This map becomes your pipeline configuration.',
      expectedResult:
        'A documented workflow map showing every stage a job passes through, with separate tracks for routine and repair work.',
    },
    {
      step: 2,
      title: 'Configure Your CRM with Auto Repair Fields and Stages',
      action:
        'Set up your CRM pipeline with the stages identified in step 1. Add auto-repair-specific fields to each job record: vehicle registration, make/model/year, mileage, MOT expiry date, service history, and job type (MOT, service, diagnostic, repair, tyres). Configure the fast track for routine work and the full pipeline for repairs. Ensure every team member understands when to move a job to the next stage — this is critical because automations depend on accurate stage transitions.',
      expectedResult:
        'A CRM pipeline configured for auto repair workflows with appropriate fields, stages, and clear team procedures for stage transitions.',
    },
    {
      step: 3,
      title: 'Add Stage Automations for Critical Transitions',
      action:
        'Configure automations for the transitions that currently cause problems. Start with the three highest-impact automations: (1) Quote Sent → automatic follow-up at 48 hours and 5 days if not approved, (2) Complete → automatic customer SMS notification that their vehicle is ready for collection, (3) Collected → review request after 3 hours and next-service reminder scheduled. Add parts ordering alerts when a job moves to Approved. Once these core automations are working reliably, add capacity reporting and pipeline value dashboards.',
      expectedResult:
        'Automated follow-ups, notifications, and lifecycle triggers that eliminate manual coordination and ensure no job falls through the cracks.',
    },
  ],
};

const finalCta = {
  title: 'Build a CRM Pipeline for Your Garage',
  description:
    'Our CRM Infrastructure systems create auto-repair-specific pipelines that automate quote follow-ups, trigger parts ordering on approval, notify customers at collection, and chain post-collection lifecycle automation — giving you complete visibility and control over every job in your workshop.',
};

export const automotiveCrmPipelineForRepairJobs: ResourceData = {
  slug,
  title: 'Automotive CRM Pipeline for Repair Jobs',
  description:
    'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
  category: 'crm-automation',
  publishedAt: '2026-01-24',
  systems: ['crm-automation'],
  industries: ['automotive'],
  topics: ['pipeline-architecture'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Automotive CRM Pipeline for Repair Jobs',
    description:
      'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Automotive CRM Pipeline for Repair Jobs',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for auto repair CRM pipeline architecture:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Whiteboards and Paper Job Cards Cost Garages Revenue',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Pipeline Failures in Auto Repair:',
    },
    {
      type: 'case',
      heading: 'Real-World Auto Repair Pipeline Example',
      content: ['How a CRM pipeline transformed garage workflow and revenue visibility:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up a CRM Pipeline for Your Garage',
      content: ['Steps specific to auto repair CRM pipeline implementation:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Auto Repair CRM Pipeline Architecture',
      content: [
        'CRM Pipeline for Auto Repair Workshops',
        'A system that tracks every job from booking to collection and beyond:',
      ],
      benefit:
        'When every job moves through a structured pipeline with automated follow-ups, parts ordering triggers, and post-collection lifecycle chains, you eliminate missed approvals, reduce delays, and turn every completed job into the start of an ongoing customer relationship.',
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
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
  ],
};
