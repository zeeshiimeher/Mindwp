import { AlertTriangle, Clock, Zap } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'lead-response-optimization-checklist-for-hvac-businesses';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'HVAC enquiries are among the most urgent in service industries. A homeowner with a broken boiler in winter or a failed air conditioning unit in summer contacts multiple providers and books with whoever responds first. Most HVAC businesses respond in hours. The ones that respond in seconds win the job. This checklist provides the exact steps to audit and fix your lead response time using CRM automation.',
  problem:
    'Your HVAC business loses high-value leads because response times are measured in hours while customers are booking with competitors who reply in minutes',
  promise:
    'You will have a step-by-step checklist to measure your current response time, implement instant automated acknowledgement, configure emergency routing, and track improvement — reducing response time from hours to seconds',
};

const takeaways = [
  'HVAC leads contacted within five minutes convert nine times better than those contacted after thirty minutes',
  'Emergency heating and cooling enquiries require immediate escalation — standard response windows are not fast enough',
  'Peak season volume spikes cause the worst response times exactly when leads are most valuable and urgent',
  'Automated acknowledgement buys time for personal follow-up without losing the customer to a faster competitor',
];

const problem = {
  description: [
    'HVAC businesses face a structural response time problem. Technicians are on job sites and cannot reply to enquiries. Office staff manage scheduling, invoicing, and parts ordering simultaneously. During peak seasons, enquiry volume can triple overnight while team capacity stays the same. The result is response times measured in hours — by which time the customer has already booked with a competitor.',
    'This problem is invisible without measurement. The team believes it responds within an hour. The data shows four to six hours on average, with after-hours and weekend enquiries waiting until the next business day. Each lost lead carries significant value — HVAC installation and repair jobs are high-ticket, and satisfied customers return for annual servicing and upgrades.',
  ],
  causes: [
    'Technicians on site cannot check email or respond to web enquiries',
    'Single office staff member handling phone, scheduling, invoicing, and enquiries simultaneously',
    'Peak season volume spikes overwhelm manual response processes',
    'After-hours enquiries sit unacknowledged until the next business day',
    'No centralised system — enquiries arrive through website, Google, phone, and social with no aggregation',
    'No measurement of actual response times across the team',
  ],
};

const comparison = {
  before: {
    title: 'Without Response Optimisation',
    items: [
      'Enquiries sit in email until someone checks',
      'Average response time: four to six hours',
      'After-hours leads wait until morning with no acknowledgement',
      'Peak season overwhelms manual response capacity',
      'Emergency and routine enquiries get the same treatment',
      'No visibility into how many leads are lost to slow response',
    ],
  },
  after: {
    title: 'With Response Optimisation',
    items: [
      'Every enquiry triggers instant automated acknowledgement',
      'Effective response time: under sixty seconds',
      'After-hours leads receive automated responses with emergency escalation',
      'Automation handles volume spikes without degrading response times',
      'Emergency heating and cooling failures are escalated immediately',
      'Response time tracked per lead, per channel, and per team member',
    ],
  },
};

const solutions = [
  {
    title: 'Instant Automated Acknowledgement',
    description:
      'Every HVAC enquiry triggers an automated response within sixty seconds. For form submissions: an email confirming receipt with estimated callback time. For phone leads: an SMS acknowledging the missed call with a direct booking link. The message references the service type and provides emergency contact options for heating or cooling failures that cannot wait.',
    icon: Zap,
  },
  {
    title: 'Emergency Escalation Routing',
    description:
      'Not all HVAC leads require the same response speed. A boiler breakdown in winter needs immediate attention. A quote request for a new air conditioning installation can wait an hour. CRM automation scores each lead by urgency and routes accordingly — emergency failures alert the on-call technician immediately while standard enquiries follow the normal response workflow.',
    icon: AlertTriangle,
  },
  {
    title: 'Response Time Tracking and Alerts',
    description:
      'Every lead records the time of arrival and the time of first response — both automated and personal. Dashboard reporting shows average response time by channel, by team member, and by time of day. When any lead exceeds its target response window, an escalation alert fires to prevent it from being forgotten.',
    icon: Clock,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Response Time',
      action:
        'Review your last thirty enquiries across all channels — website forms, phone, Google Business Profile, and social media. For each one, record the time the enquiry arrived and the time of your first response. Include enquiries that were never responded to. Calculate the average. Most HVAC businesses discover their actual response time is three to five times longer than they believed.',
      expectedResult:
        'A baseline response time metric that reveals your actual performance across all channels and identifies the biggest gaps.',
    },
    {
      step: 2,
      title: 'Centralise All Enquiry Channels',
      action:
        'Route every enquiry source into a single CRM pipeline. Website forms, Google Business Profile messages, phone call logs, and social media messages should all create the same type of lead record. This eliminates leads falling between channels and gives the team one place to check for new enquiries instead of five.',
      expectedResult:
        'A single intake pipeline where every new lead is visible regardless of the channel it arrived through.',
    },
    {
      step: 3,
      title: 'Set Up Instant Acknowledgement',
      action:
        'Configure automated responses for each channel: email auto-reply for form submissions, SMS for phone-originated leads. Include the service type mentioned in the enquiry, a realistic callback window, and emergency contact information for urgent heating or cooling failures. Test by submitting a test enquiry on each channel and measuring the time to receive the automated response.',
      expectedResult:
        'Every enquiry receives a professional acknowledgement within sixty seconds, keeping the customer engaged until your team follows up personally.',
    },
    {
      step: 4,
      title: 'Configure Emergency Escalation',
      action:
        'Define which enquiry types constitute emergencies — boiler failures, heating loss, cooling system breakdowns. Create routing rules that send these leads directly to the on-call technician via SMS and phone alert. Standard enquiries follow the normal response workflow. Test the escalation path with a simulated emergency enquiry.',
      expectedResult:
        'Emergency heating and cooling enquiries reach a technician within minutes instead of waiting in the general queue.',
    },
    {
      step: 5,
      title: 'Implement Response Time Tracking',
      action:
        'Enable timestamp tracking on every lead record: time of arrival, time of automated response, and time of personal follow-up. Set up a weekly report showing average response time by channel, by team member, and by time of day. Share the report with the team. Set target response times: sixty seconds for automated acknowledgement, thirty minutes for personal follow-up on urgent leads, one hour for standard enquiries.',
      expectedResult:
        'Visibility into actual response performance with measurable targets and weekly accountability.',
    },
  ],
};

const caseExample = {
  businessType: 'HVAC Company (Manchester, 6 technicians)',
  problem:
    'A six-technician HVAC company received forty to fifty enquiries per week through website, Google, and phone. The single office administrator managed intake alongside scheduling and invoicing. Average response time was five hours. After-hours enquiries — nearly forty percent of total volume — waited until the next morning. During a winter cold snap, response times stretched to eight hours and the company estimated it lost fifteen to twenty leads in a single week.',
  solution:
    'We implemented the lead response optimisation checklist: centralised all channels into one CRM pipeline, configured instant SMS and email acknowledgements, set up emergency escalation for heating failures (direct alert to on-call technician), and enabled response time tracking with weekly reporting. The administrator now focused on personal follow-up rather than triage.',
  result:
    'Automated response time dropped to forty-five seconds. Personal follow-up time improved from five hours to thirty-five minutes. After-hours leads that previously waited until morning now received instant acknowledgement with emergency escalation available. During the next volume spike, response times held steady because automation handled the first touch. Enquiry-to-booking conversion improved from twenty-two percent to thirty-eight percent.',
  stat: '73% improvement in lead conversion after implementing response time optimisation',
};

const faqs = [
  {
    question: 'Does automated acknowledgement feel impersonal to HVAC customers?',
    answer:
      'Not when it is done well. The automated message references their specific service need, provides a realistic callback window, and includes emergency contact options. Customers prefer an instant professional response over silence followed by a personal call hours later.',
  },
  {
    question: 'How do we handle emergency escalation outside business hours?',
    answer:
      'Configure an on-call rotation in the CRM. Emergency leads trigger an SMS and phone alert to the technician on call. The technician can respond directly or update the lead status. Non-emergency after-hours enquiries receive an automated acknowledgement with a guaranteed callback time the next morning.',
  },
  {
    question: 'What response time target should we set?',
    answer:
      'Sixty seconds for automated acknowledgement, fifteen minutes for emergency personal follow-up, thirty minutes for urgent enquiries, and one hour for standard requests. These targets ensure every lead receives attention before they contact a competitor.',
  },
];

const finalCta = {
  title: 'Fix Your HVAC Lead Response Time',
  description:
    'Our CRM Automation services implement the full response optimisation checklist — instant acknowledgement, emergency routing, response tracking, and peak season resilience — so your HVAC business captures every lead.',
};

export const leadResponseOptimizationChecklistForHvacBusinesses: ResourceData = {
  slug,
  title: 'Lead Response Optimization Checklist for HVAC Businesses',
  description:
    'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
  intent: 'ACTIONABLE',
  category: 'crm-automation',
  publishedAt: '2026-04-06',
  systems: ['crm-automation'],
  industries: ['hvac'],
  topics: ['lead-response-time'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Lead Response Optimization Checklist for HVAC Businesses',
    description:
      'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Lead Response Optimization Checklist for HVAC Businesses',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why HVAC Businesses Lose Leads to Slow Response',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Slow HVAC Lead Response:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The response time facts every HVAC business needs to know:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Response Optimisation',
      content: ['The operational difference when HVAC lead response is systematised:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC Response Optimisation Architecture',
      content: [
        'Speed Through Systems',
        'Fast lead response for HVAC businesses requires automation that handles the first touch and routes urgency intelligently:',
      ],
      benefit:
        'When instant acknowledgement is automated and emergency routing is configured, your team focuses on high-value personal interactions while every lead receives immediate attention.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ['How response optimisation transformed an HVAC company:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The HVAC Lead Response Checklist',
      content: ['Follow these steps to audit and fix your response time:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about HVAC lead response optimisation:'],
      items: faqs,
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
