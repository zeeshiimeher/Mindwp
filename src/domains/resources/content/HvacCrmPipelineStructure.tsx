import { BarChart3, Database, Wrench } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'hvac-crm-pipeline-structure';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'HVAC businesses juggle emergency repairs, scheduled maintenance, installations, and service contracts simultaneously. Without a CRM pipeline built for these realities, jobs overlap, maintenance schedules slip, and revenue from service contracts goes untracked. An HVAC-specific CRM pipeline organises every job type into trackable stages with automations that ensure nothing falls through the cracks.',
  problem:
    'Your HVAC business tracks jobs across whiteboards, spreadsheets, and memory, which means maintenance contracts are forgotten, installation follow-ups slip, and you have no visibility into your revenue pipeline',
  promise:
    'You will see how HVAC companies structure their CRM pipeline to manage emergency, installation, and maintenance work streams simultaneously — with automations that drive revenue from each',
};

const takeaways = [
  'HVAC businesses need separate pipeline tracks for emergency, installation, and maintenance contract work',
  'Maintenance contract renewals are a recurring revenue stream that requires CRM tracking to avoid silent churn',
  'Installation pipelines have longer sales cycles requiring estimate follow-up automation',
  'Seasonal capacity planning depends on pipeline data that most HVAC companies do not track',
];

const problem = {
  description: [
    'HVAC operations are complex: emergency work is unpredictable and urgent, installations are high-value but slow-moving, and maintenance contracts need consistent scheduling across hundreds of customers. Most HVAC companies handle all three in the same disorganised way — a mix of whiteboards, memory, phone notes, and maybe a basic spreadsheet.',
    'The consequences multiply with scale. At 5 jobs per week, memory works. At 20+, it fails. Maintenance contracts quietly lapse because no one tracked the renewal date. Installation estimates go unfollowed because the estimator moved on to emergency calls. Emergency capacity is unknowable because there is no data on average emergency volume by season. The business grows, but operational control decreases — and margin erodes from missed revenue and reactive scheduling.',
  ],
  causes: [
    'Single pipeline trying to handle fundamentally different job types',
    'No tracking of maintenance contract renewal dates and churn',
    'Installation estimates not separated from service dispatch workflow',
    'Emergency work disrupting planned maintenance schedules',
    'No data on seasonal patterns to inform hiring and scheduling',
    'Technician scheduling managed by phone and memory instead of pipeline visibility',
  ],
};

const caseExample = {
  businessType: 'HVAC Installation and Service Company (Bristol area)',
  problem:
    'A growing HVAC company with 10 technicians ran three revenue streams: emergency repairs (40% of revenue), installations (35%), and maintenance contracts (25%). They used one spreadsheet for everything. In a single quarter: 23 maintenance contracts lapsed without renewal attempts, 11 installation estimates were never followed up, and scheduling conflicts caused 8 double-bookings. The owner estimated total lost revenue at £45,000+ for the quarter.',
  solution:
    'We built three CRM pipelines: Emergency (Dispatch → In Progress → Complete → Invoiced), Installation (Inquiry → Survey → Estimate → Follow-Up → Won → Scheduled → Installed → Commissioned → Invoiced), and Maintenance (Active Contract → Service Due → Scheduled → Complete → Next Service Set). Automations: maintenance due dates triggered scheduling 2 weeks before. Installation estimates triggered follow-up sequences. Emergency completions triggered review requests. Contract renewals triggered 60-day-before reminders.',
  result:
    'Maintenance contract retention improved from 72% to 91% — recovering £28,000 in annual recurring revenue. Installation close rate improved 15% from automated follow-up. Scheduling conflicts dropped to near-zero. The owner gained a real-time dashboard showing total pipeline value across all three streams for the first time. Seasonal hiring decisions became data-driven rather than reactive.',
  stat: 'Maintenance contract retention improved from 72% to 91% with zero scheduling conflicts after CRM implementation',
};

const solutions = [
  {
    title: 'Multi-Track Pipeline Architecture',
    description:
      'Instead of forcing all HVAC work into one pipeline, separate tracks for each revenue stream. Emergency: fast, 3-4 stages, moves in hours. Installation: sales-focused, 8-10 stages, moves over weeks. Maintenance: recurring, calendar-driven, moves on schedule. Each track has its own dashboard, automations, and metrics. A unified view shows total business health across all three.',
    icon: Database,
  },
  {
    title: 'Maintenance Contract Lifecycle Management',
    description:
      'Maintenance contracts are recurring revenue — the most valuable revenue type in HVAC. The CRM tracks every contract: start date, service schedule, renewal date, and customer contact. Sixty days before renewal, an automated sequence begins. Service due dates trigger scheduling. Missed services trigger alerts. This turns passive contract management into active revenue retention that pushes contract retention above 90%.',
    icon: Wrench,
  },
  {
    title: 'Capacity and Revenue Forecasting',
    description:
      'With all work tracked in the CRM, forecasting becomes possible. Historical data shows emergency call volume by month, installation demand by season, and maintenance scheduling density by week. This drives business decisions: when to hire seasonal technicians, when to run installation promotions, and how much capacity to reserve for emergency work. The pipeline converts from a tracking tool into a strategic planning tool.',
    icon: BarChart3,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Define Your HVAC Pipeline Tracks',
      action:
        'Map each revenue stream to a pipeline. Emergency Repair: Call Received → Dispatched → In Progress → Complete → Invoiced → Paid. Installation: Inquiry → Site Survey Booked → Survey Done → Estimate Sent → Follow-Up → Won/Lost → Scheduled → Installed → Commissioned → Invoiced. Maintenance: Contract Active → Service Due (triggered by calendar) → Scheduled → Complete → Next Service Date Set. Add custom fields: equipment type, contract number, warranty status.',
      expectedResult:
        'Three distinct pipeline definitions that match how HVAC work actually flows, with clear stage criteria and custom fields.',
    },
    {
      step: 2,
      title: 'Configure Pipeline Automations',
      action:
        'For each pipeline, define stage-change automations. Maintenance: Service Due → auto-send scheduling link to customer. Installation: Estimate Sent → start follow-up sequence. Emergency: Complete → trigger review request and invoice. Contract: 60 days before renewal → start retention sequence. All pipelines: if a job is stuck in a stage beyond the expected time, alert the responsible team member.',
      expectedResult:
        'Automated actions at every pipeline stage that eliminate manual tracking and ensure timely follow-through.',
    },
    {
      step: 3,
      title: 'Build Your HVAC Dashboard',
      action:
        'Create a dashboard showing: total pipeline value (all tracks), jobs by stage (per track), maintenance contracts due this month, installation estimates pending, and emergency job volume trend. Add a weekly revenue forecast based on scheduled work. Review this dashboard daily as your operational command centre. Share relevant views with technician leads for scheduling context.',
      expectedResult:
        'A single-screen view of your entire HVAC operation showing pipeline health, scheduled work, and revenue across all three tracks.',
    },
  ],
};

const finalCta = {
  title: 'Build a CRM Pipeline for Your HVAC Business',
  description:
    'Our CRM Infrastructure service builds HVAC-specific multi-track pipelines that manage emergency, installation, and maintenance work simultaneously — with automations that protect recurring revenue and give you complete operational visibility.',
};

export const hvacCrmPipelineStructure: ResourceData = {
  slug,
  seo: {
    title: 'HVAC CRM Pipeline Structure',
    description:
      'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
    canonical,
  },
  title: 'HVAC CRM Pipeline Structure',
  description:
    'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
  category: 'follow-up-crm',
  publishedAt: '2026-01-26',
  primarySystem: 'follow-up-crm',
  industries: ['hvac'],
  topics: ['pipeline-architecture'],
  primaryService: 'follow-up-crm',
  sections: [
    {
      type: 'hero',
      heading: 'HVAC CRM Pipeline Structure',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for HVAC CRM pipeline design:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Growing HVAC Businesses Lose Control Without Pipeline Structure',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common HVAC Pipeline Problems:',
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ['How structured CRM pipelines transformed HVAC business operations:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up an HVAC CRM Pipeline',
      content: ['Steps specific to HVAC pipeline architecture:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC CRM Pipeline Architecture',
      content: [
        'Multi-Track CRM for HVAC Operations',
        'A pipeline structure built for the complexity of HVAC businesses:',
      ],
      benefit:
        'When emergency, installation, and maintenance work each have dedicated pipeline tracks with tailored automations, you eliminate scheduling chaos, protect recurring revenue, and gain the visibility to make strategic decisions.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('follow-up-crm'),
      content: getRelatedResourcesContent('follow-up-crm'),
      resources: getRelatedResources('follow-up-crm', canonical),
    },
  ],
};
