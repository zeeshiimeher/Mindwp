import { Clock, Layers, Zap } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'crm-pipeline-automation';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    "Most leads don't say no — they drift. A simple CRM pipeline with automation makes your next step obvious and your follow-up consistent.",
  problem:
    'Leads come in, you reply once, then the conversation stalls and you forget to follow up at the right time.',
  promise:
    'You will set up a 5-stage pipeline with automated reminders and templates so every lead is progressed or closed — no guesswork.',
};

const takeaways = [
  'Use 5 stages max so the pipeline stays usable.',
  'Every lead must have a next step date/time (no exceptions).',
  'Templates keep follow-up fast and consistent.',
  'Automation should surface stalled deals automatically.',
];

const problem = {
  description: [
    'When your CRM has no pipeline, every lead looks the same — so follow-up depends on memory. A pipeline turns follow-up into a system: each stage has a next action and a time limit.',
    'Automation then enforces the system: it creates tasks, sends nudges, and tags stalled deals so nothing silently dies.',
  ],
  causes: [
    'No defined stages, so leads are not triaged (new vs quoted vs waiting).',
    'No next-action date, so follow-up happens too late.',
    'No templates, so messaging is inconsistent and slow.',
    'No visibility into stalled deals, so opportunities rot quietly.',
  ],
};

const businessCosts = [
  'Lower conversion rate: leads that needed one more touch disappear.',
  'Slow response: time spent rewriting messages delays your follow-up.',
  'Unreliable forecasting: you cannot see what is actually in progress.',
  'Team confusion: if more than one person handles leads, ownership is unclear.',
];

const diy = {
  timeToComplete: '45–60 minutes (pipeline + basic automation)',
  steps: [
    {
      step: 1,
      title: 'Create 5 pipeline stages (10 mins)',
      action:
        'Use: New Lead → Contacted → Qualified → Proposal Sent → Won/Lost. Keep it boring and consistent. Every lead must live in exactly one stage.',
      expectedResult: 'You can instantly see what needs follow-up right now.',
    },
    {
      step: 2,
      title: 'Add a “next step date” rule (10 mins)',
      action:
        'For every deal, set a next-action date/time (call, quote, reminder). If a lead has no next step, it is considered “broken” and must be fixed the same day.',
      expectedResult: 'No lead sits idle without an explicit next move.',
    },
    {
      step: 3,
      title: 'Install 3 templates (10 mins)',
      action:
        'Write: (1) First response, (2) Quote follow-up, (3) “Any questions?” nudge. Keep each under 300 characters and personalize with name + service.',
      expectedResult: 'Follow-up becomes fast and consistent.',
    },
    {
      step: 4,
      title: 'Automate “stalled deal” reminders (15 mins)',
      action:
        'If a deal stays in Contacted/Qualified/Proposal Sent for 48–72 hours with no next step, create a task and tag it “stalled”. Optional: send a soft nudge message.',
      expectedResult: 'Stalled opportunities surface automatically.',
    },
  ],
  proTip:
    'Your pipeline is only useful if it is updated daily. Automation helps, but you still need the habit: no next step = fix it now.',
};

const beforeAfter = {
  before: {
    title: 'Before (No Pipeline System)',
    items: [
      'Leads sit in one list with no priority.',
      'Follow-up depends on memory.',
      'Replies are inconsistent and slow.',
      'Stalled opportunities rot quietly.',
    ],
  },
  after: {
    title: 'After (Pipeline + Automation)',
    items: [
      'Every lead is in a stage with a clear next action.',
      'Reminders/tasks trigger when deals stall.',
      'Templates reduce time-to-follow-up.',
      'Pipeline health is visible at a glance.',
    ],
  },
};

const templates = [
  {
    title: 'First Response (under 60 seconds)',
    description: 'Use this immediately after a new enquiry comes in.',
    template:
      'Hi {name} — thanks for reaching out about {service}. Quick question so I can help: what’s the best time to call today?\n\nIf it’s easier, you can reply with: (1) a time, and (2) your postcode.',
  },
  {
    title: 'Quote Follow-Up (48–72 hours)',
    description: 'Use when a quote was sent but the lead has gone quiet.',
    template:
      'Hi {name} — just checking in on the {service} quote I sent over.\n\nDo you want me to: (A) book you in, (B) tweak the quote, or (C) close this off for now?',
  },
  {
    title: 'Any Questions? (soft nudge)',
    description: 'Use as a polite reminder without sounding pushy.',
    template:
      'Hi {name} — quick one: is there anything stopping you moving forward with {service}? Happy to answer questions or suggest the simplest next step.',
  },
];

const implementationChecklist = [
  'Create 5 stages and make them visible to the team.',
  'Add a required “next step date/time” field or rule.',
  'Write 3 templates (first reply, quote follow-up, nudge).',
  'Set a stalled-deal automation (48–72 hours).',
  'Add a daily pipeline review habit (10 minutes).',
  'Track 2 metrics: response time and stage-to-stage conversion.',
];

const automation = {
  benefit: 'A pipeline with automation turns follow-up into a repeatable conversion system.',
  solutions: [
    {
      title: 'Auto-stage on form submit',
      description:
        'New leads automatically enter “New Lead” with source tags and contact details captured cleanly.',
      icon: Zap,
    },
    {
      title: 'Next-step reminders',
      description:
        'Automations create tasks and reminders so follow-up happens on time — not when you remember.',
      icon: Clock,
    },
    {
      title: 'One-click templates',
      description:
        'Pre-written templates keep messaging consistent and reduce time-to-follow-up for every enquiry.',
      icon: Layers,
    },
  ],
};

const caseExample = {
  businessType: 'Local service business',
  problem:
    'Leads were quoted but not followed up consistently, causing a lot of “ghosting” and lost jobs.',
  solution:
    'Implemented a 5-stage pipeline, required next-step dates, and automated “stalled deal” tasks after 72 hours.',
  result:
    'More follow-ups sent on time, higher quote-to-booking conversion, and clear visibility into pipeline health.',
};

const faqs = [
  {
    question: 'Do I need a complex CRM to do this?',
    answer:
      'No. You just need stages, a next-step date, and a way to create reminders/tasks. Complexity is optional; consistency is not.',
  },
  {
    question: 'How many stages should I have?',
    answer:
      'Start with 5. If you have more than 7, people stop using it. Add stages only when you have a clear, repeated reason.',
  },
  {
    question: 'What is the most important rule?',
    answer: 'Every lead must have a next step. If you enforce only one rule, enforce that one.',
  },
];

const finalCta = {
  title: 'Want This Built for You?',
  description:
    'MindWP sets up your CRM pipeline, automations, and templates so leads are followed up consistently and bookings increase without more admin.',
};

export const crmPipelineAutomation: ResourceData = {
  slug,
  title: 'CRM Pipeline Automation: Stop Losing Leads (Stages + Follow-Up Templates)',
  description:
    'A practical CRM pipeline you can set up in under an hour: stages, automation triggers, and follow-up templates so every lead gets a next step.',
  intent: 'ACTIONABLE',
  category: 'crm-automation',
  publishedAt: '2026-02-05',
  systems: ['crm-automation'],
  topics: ['lead-management'],
  seo: {
    title: 'CRM Pipeline Automation: Stop Losing Leads (Stages + Follow-Up Templates)',
    description:
      'A practical CRM pipeline you can set up in under an hour: stages, automation triggers, and follow-up templates so every lead gets a next step.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'CRM Pipeline Automation: Never Drop a Lead Again',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['If you implement only four things, implement these:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Leads Go Cold',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Root Causes:',
    },
    {
      type: 'business-costs',
      heading: 'What This Costs You',
      content: ['When follow-up is random, revenue becomes random too.'],
      items: businessCosts,
    },
    {
      type: 'diy',
      heading: 'DIY Setup (Do This First)',
      content: [
        'If you can build the habit, this alone improves results.',
        'Then automation keeps it consistent.',
      ],
      timeToComplete: diy.timeToComplete,
      steps: diy.steps,
      proTipHeading: 'Pro Tip:',
    },
    {
      type: 'templates',
      heading: 'Copy & Paste Templates',
      content: [
        'Templates make follow-up faster and more consistent.',
        'Keep each one short. Personalize with name + service.',
      ],
      items: templates,
    },
    {
      type: 'comparison',
      heading: 'Before vs After',
      content: ['This is what changes when you make follow-up a system.'],
      before: beforeAfter.before,
      after: beforeAfter.after,
    },
    {
      type: 'checklist',
      heading: 'Implementation Checklist',
      content: ['Use this to confirm your setup is complete.'],
      items: implementationChecklist,
      columns: 2,
    },
    {
      type: 'solution-cards',
      heading: 'Automate the Follow-Up (So It Stays Done)',
      content: [
        'Once the pipeline is defined, automation enforces it.',
        'This is how you stop leads drifting through cracks.',
      ],
      benefit: automation.benefit,
      solutions: automation.solutions,
    },
    {
      type: 'case',
      heading: 'Example Outcome',
      content: ['A pipeline improves follow-up behavior fast.'],
      caseExample,
      challengeHeading: 'Challenge',
      solutionHeading: 'Solution',
      resultHeading: 'Result',
    },
    {
      type: 'faq',
      heading: 'FAQ',
      content: ['Quick answers before you implement this.'],
      items: faqs,
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      features: [
        { text: 'Pipeline stages + next-step rules', icon: 'check' },
        { text: 'Follow-up templates + automations', icon: 'check' },
        { text: 'Reporting so you can track wins', icon: 'check' },
      ],
      button: { text: primaryCta.label, url: '/services/crm-infrastructure-implementation' },
    },
    {
      type: 'sidebar-cta',
      heading: 'Get a Follow-Up System That Runs Itself',
      content: [
        'If you want this implemented end-to-end, we can build it inside your MindWP setup.',
      ],
      features: [
        { text: 'Fast setup', icon: 'star' },
        { text: 'Consistent follow-up', icon: 'check' },
        { text: 'No lead left behind', icon: 'heart' },
      ],
    },
  ],
};
