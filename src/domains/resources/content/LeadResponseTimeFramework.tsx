import { AlertTriangle, Clock, Zap } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'lead-response-time-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Lead response time is the interval between a prospect making contact and your business responding. Research shows that responding within 5 minutes makes you 9x more likely to convert the lead. Most service businesses respond in 4-6 hours — by which time the prospect has already contacted competitors.',
  problem:
    'Slow lead response causes lost opportunities because prospects move to competitors within minutes of sending an enquiry',
  promise:
    'You will understand the response time framework — why speed matters, what causes delays, and how to build systems that respond in seconds instead of hours',
};

const takeaways = [
  'Leads contacted within 5 minutes convert 9x better than those contacted at 30 minutes',
  'Average service business response time is 4-6 hours — competitors respond faster',
  'Response time is a system problem, not a discipline problem — automation solves it',
  'Instant acknowledgement buys time for personal follow-up without losing the lead',
];

const problem = {
  description: [
    'The data on response time is clear: leads contacted within 5 minutes are 9x more likely to convert than leads contacted after 30 minutes. After 1 hour, the probability of conversion drops by over 10x. By 24 hours, the lead is effectively cold. Yet the average service business response time is measured in hours, not minutes.',
    'This is not a motivation problem. Service business owners are busy doing work — on job sites, with customers, managing operations. They cannot physically check email and respond to every enquiry within 5 minutes. The solution is not working harder. The solution is building a system that responds instantly and buys time for personal follow-up.',
  ],
  causes: [
    'Enquiries arrive as email notifications checked periodically, not in real time',
    'No automated acknowledgement to bridge the gap until personal response',
    'Team members are on job sites or with customers and cannot respond immediately',
    'No prioritisation system — urgent leads wait alongside general enquiries',
    'After-hours enquiries sit until the next business day with no response',
    'No measurement or accountability for response time across the team',
  ],
};

const comparison = {
  before: {
    title: 'Slow Response Pattern',
    items: [
      'Enquiry stays in email until someone checks',
      'Average response time: 4-6 hours',
      'No acknowledgement while lead waits',
      'After-hours enquiries wait until morning',
      'All enquiries treated with same priority',
      'Response time not measured or reported',
    ],
  },
  after: {
    title: 'Fast Response Framework',
    items: [
      'Automated acknowledgement within 60 seconds',
      'Effective response time: under 1 minute',
      'Lead receives value message while team is notified',
      'After-hours automation handles initial contact',
      'Urgent enquiries escalated to on-call team',
      'Response time tracked per lead and per team member',
    ],
  },
};

const solutions = [
  {
    title: 'Instant Automated Acknowledgement',
    description:
      'Every enquiry triggers an automatic response within 60 seconds — via SMS for phone leads, email for form leads. The message confirms receipt, provides immediate value, and sets expectations. This is not a cold auto-reply — it includes personalised elements based on the service requested.',
    icon: Zap,
  },
  {
    title: 'Priority-Based Routing',
    description:
      'Not all leads need the same response speed. Emergency requests get immediate SMS alerts to the on-call team. High-value enquiries get personal outreach within 15 minutes. General enquiries receive the automated sequence while the team responds within the hour. Routing rules handle prioritisation automatically.',
    icon: AlertTriangle,
  },
  {
    title: 'Response Time Tracking',
    description:
      'Every lead records when it arrived and when it received a first response — both automated and personal. CRM dashboards show average response time by team member, by channel, and by time of day. This data identifies bottlenecks and measures improvement.',
    icon: Clock,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Measure Your Current Response Time',
      action:
        'Review your last 20 enquiries. For each one, note the time the enquiry arrived and the time of your first response. Calculate the average. Be honest — include enquiries that were never responded to. Most businesses are surprised by their actual response time.',
      expectedResult:
        'A baseline response time metric that shows your real performance, providing a clear starting point for improvement.',
    },
    {
      step: 2,
      title: 'Set Up a 60-Second Auto-Response',
      action:
        'Configure an automated SMS or email that triggers within 60 seconds of any enquiry. Keep it helpful: "Hi [Name], thanks for contacting [Business]. We received your enquiry about [service]. We will follow up within [timeframe]. In the meantime, here is [helpful resource]." Personalise using form data.',
      expectedResult:
        'Every lead receives instant acknowledgement, effectively reducing your perceived response time to under 1 minute regardless of team availability.',
    },
    {
      step: 3,
      title: 'Create After-Hours Automation',
      action:
        'Set up a different automated sequence for enquiries that arrive outside business hours. The message should acknowledge the enquiry, explain that you will respond at [next working time], and provide an emergency contact option if the need is urgent.',
      expectedResult:
        'After-hours leads no longer wait in silence until morning. They receive immediate acknowledgement and a clear path forward.',
    },
  ],
};

const caseExample = {
  businessType: 'Auto Repair Shop (Liverpool)',
  problem:
    'An auto repair shop received 35 enquiries per week through phone and web form. Average response time was 5.5 hours. After-hours enquiries (40% of total) waited until the next morning. The shop converted 18% of enquiries to booked jobs.',
  solution:
    'We implemented a response time framework: instant SMS acknowledgement on all enquiries, priority routing for emergency breakdown requests (immediate call from on-call mechanic), after-hours automation with next-day callback scheduling, and response time tracking in CRM for the entire team.',
  result:
    'Automated response time dropped to 30 seconds. Personal response time improved from 5.5 hours to 45 minutes. After-hours leads that previously converted at 8% now converted at 22% with automation. Overall conversion rate went from 18% to 34%.',
  stat: '89% improvement in lead conversion through response time framework',
};

const faqs = [
  {
    question: 'Is an auto-reply really as effective as a personal response?',
    answer:
      'An auto-reply is not a substitute for personal interaction. It is a bridge. The data shows that instant acknowledgement keeps leads engaged until your personal response arrives. A lead who receives immediate confirmation is far more likely to still be interested when you call an hour later than one who heard nothing.',
  },
  {
    question: 'What is an acceptable personal response time?',
    answer:
      'With instant automation handling the first touch, your personal response window extends to 30-60 minutes for most enquiries. Emergency requests should still receive personal contact within 15 minutes. The automation buys you time by keeping the lead engaged.',
  },
  {
    question: 'Should I track response time for my team?',
    answer:
      'Yes. Response time is one of the most important operational metrics for lead handling. Track it per team member, per channel, and per time of day. Share the data transparently. Most teams improve simply because the metric is visible.',
  },
  {
    question: 'Should response time targets vary by channel?',
    answer:
      'Yes, but only within sensible limits. Phone and live chat require near-immediate acknowledgement, while form submissions can tolerate a slightly longer personal response if an instant automated confirmation is sent. Channel-specific targets help operational planning, but every channel still needs a fast first touch to protect conversion.',
  },
];

const finalCta = {
  title: 'Fix Your Response Time With Automated Lead Handling',
  description:
    'Our AI Lead Handling system responds to every enquiry within seconds, routes urgent requests to the right team, and tracks response time across your entire operation.',
};

export const leadResponseTimeFramework: ResourceData = {
  slug,
  seo: {
    title: 'Lead Response Time Framework',
    description:
      'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
    canonical,
  },
  title: 'Lead Response Time Framework',
  description:
    'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
  category: 'ai-lead-handling',
  publishedAt: '2025-12-06',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['lead-response-time'],
  primaryService: 'ai-lead-handling',
  sections: [
    {
      type: 'hero',
      heading: 'Lead Response Time Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Service Businesses Respond Too Slowly',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Slow Response:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The response time facts every service business needs to know:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Slow Response vs Fast Response Framework',
      content: ['The operational difference between reactive and systematic response:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Response Time Architecture',
      content: [
        'Speed Through Systems',
        'Fast response is not about working harder — it is about building systems that handle the first touch automatically:',
      ],
      benefit:
        'When instant acknowledgement is automated, your team focuses on high-value personal interactions while every lead receives immediate attention.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How a response time framework transformed an auto repair shop:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Framework',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Fix Your Response Time Today',
      content: ['Start improving your response time with these steps:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about lead response time:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('ai-lead-handling'),
      content: getRelatedResourcesContent('ai-lead-handling'),
      resources: getRelatedResources('ai-lead-handling', canonical),
    },
  ],
};
