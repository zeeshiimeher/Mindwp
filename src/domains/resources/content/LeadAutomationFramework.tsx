import { GitBranch, MessageSquare, Zap } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'lead-automation-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A lead automation framework is the structural design of how leads are captured, routed, qualified, and followed up without manual intervention. It is the operating system behind lead handling — defining what happens to every enquiry from the moment it arrives until it becomes a booked job or is disqualified.',
  problem:
    'Your lead handling depends on manual steps — someone checks email, decides what to do, and responds when they have time, creating inconsistent and slow experiences',
  promise:
    'You will understand the architecture of a lead automation framework and how each component — capture, routing, qualification, and follow-up — works together to handle leads systematically',
};

const takeaways = [
  'Lead automation is a framework with four layers: capture, routing, qualification, and follow-up',
  'Each layer must connect to CRM with structured data, not just notifications',
  'Automation does not replace personal interaction — it eliminates the gaps between interactions',
  'A complete framework reduces response time from hours to seconds',
];

const problem = {
  description: [
    'Most service businesses handle leads manually. An enquiry arrives as an email notification. Someone reads it, decides who should respond, and eventually contacts the lead. If they are busy, the lead waits. If they forget, the lead is lost. The process depends entirely on human availability and memory.',
    'The cost compounds. Slow responses lose leads to competitors. Inconsistent follow-up means some leads get 5 touchpoints and others get none. No qualification means sales time is spent equally on high-value prospects and tyre kickers. Without a framework, lead handling is reactive rather than systematic.',
  ],
  causes: [
    'Enquiries arrive as email notifications without CRM routing',
    'No automatic acknowledgement when a lead makes contact',
    'Lead routing depends on whoever sees the email first',
    'No qualification step before allocating sales time',
    'Follow-up is manual and inconsistent across the team',
    'No visibility into where leads are in the handling process',
  ],
};

const comparison = {
  before: {
    title: 'Manual Lead Handling',
    items: [
      'Enquiry arrives as email notification',
      'Response depends on who checks email first',
      'No instant acknowledgement to the lead',
      'Qualification happens during the first call',
      'Follow-up relies on team memory',
      'No pipeline visibility — leads exist in email threads',
    ],
  },
  after: {
    title: 'Automated Lead Framework',
    items: [
      'Enquiry creates CRM record with service type and source',
      'Routing rules assign lead to the right team member instantly',
      'Automatic acknowledgement sent within 60 seconds',
      'Qualification questions captured before human interaction',
      'Follow-up sequences trigger automatically based on pipeline stage',
      'Full pipeline visibility shows every lead and its current status',
    ],
  },
};

const solutions = [
  {
    title: 'Multi-Channel Lead Capture',
    description:
      'Phone calls, web forms, chat messages, and social enquiries all route to a single CRM pipeline. Each capture point collects: contact details, service type, source, and timestamp. No lead enters the system without context.',
    icon: MessageSquare,
  },
  {
    title: 'Intelligent Lead Routing',
    description:
      'Routing rules assign leads based on service type, location, urgency, and team capacity. Emergency requests go to the on-call team. Quote requests go to sales. Information requests go to a nurture sequence. The right person handles the right lead without manual sorting.',
    icon: GitBranch,
  },
  {
    title: 'Automated Follow-Up Sequences',
    description:
      'Follow-up is not one message — it is a sequence triggered by pipeline stage. New leads get immediate acknowledgement, 1-hour value message, and 24-hour CTA. Quoted leads get a 48-hour check-in. Booked leads get confirmation and reminders. Each stage has its own automation.',
    icon: Zap,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Current Lead Flow',
      action:
        'Document what happens to a lead from the moment it arrives: where does the notification go, who responds, how long does it take, what information is captured, and what follow-up happens. Be honest about the gaps — most businesses discover leads that receive zero follow-up.',
      expectedResult:
        'A realistic picture of your current lead handling showing exactly where manual steps create delays and where leads fall through cracks.',
    },
    {
      step: 2,
      title: 'Set Up Instant Acknowledgement',
      action:
        'Configure an automated response that sends within 60 seconds of any enquiry. The message should confirm receipt, set expectations for next steps, and provide immediate value (a helpful link, pricing guide, or booking option). Use SMS for phone leads, email for form leads.',
      expectedResult:
        'Every lead receives instant confirmation that their enquiry was received, preventing them from contacting competitors while waiting.',
    },
    {
      step: 3,
      title: 'Create Basic Routing Rules',
      action:
        'In your CRM, set up simple routing rules based on service type. Emergency requests notify the on-call team immediately via SMS. Quote requests assign to sales. General enquiries enter a nurture sequence. Start with 2-3 rules and expand as you see patterns.',
      expectedResult:
        'Leads reach the right handler without manual sorting, reducing response time and ensuring no lead waits in a shared inbox.',
    },
  ],
};

const caseExample = {
  businessType: 'Landscaping Company (Kent)',
  problem:
    'A landscaping company received 60 enquiries per week across phone, web form, and social media. All went to a shared email inbox. Average response time was 6 hours. 40% of leads received no follow-up beyond the initial response. The owner had no visibility into how many leads were in progress.',
  solution:
    'We built a lead automation framework: all channels routed to CRM with auto-tagging, instant SMS acknowledgement on every enquiry, routing rules based on service type (garden design → sales, maintenance → operations, emergency → on-call), and staged follow-up sequences for each pipeline stage.',
  result:
    'Response time dropped from 6 hours to 45 seconds. Follow-up completion went from 60% to 100% — every lead received the full sequence. Conversion rate increased from 22% to 41%. The owner could see every active lead and its status at any time.',
  stat: '86% improvement in lead conversion with automated framework',
};

const faqs = [
  {
    question: 'Will automation make my business feel impersonal?',
    answer:
      'Automation handles the process — acknowledgement, routing, reminders. Personal interaction still happens for conversations, quotes, and relationship building. The framework ensures no lead waits for the personal touch by filling gaps with systematic responses.',
  },
  {
    question: 'How complex does the automation need to be to start?',
    answer:
      'Start with three components: instant acknowledgement, basic routing (2-3 rules), and a simple follow-up sequence (3 messages over 3 days). This covers the biggest gaps in most service businesses. Add complexity as you see results.',
  },
  {
    question: 'What CRM features do I need for lead automation?',
    answer:
      'At minimum: pipeline stages, automation workflows triggered by stage changes, SMS and email sending capability, and tagging. Most modern CRM platforms include these features. The key is configuring them around your specific lead handling workflow.',
  },
  {
    question: 'Which channel should I automate first?',
    answer:
      'Start with the channel producing the most leads or the worst delays. For many service businesses, that is web forms or missed calls because they create immediate response gaps. You do not need every channel automated on day one — but the first channel should eliminate your most expensive lead-handling bottleneck.',
  },
  {
    question: 'What should happen when a lead replies to an automated message?',
    answer:
      'The system should recognise the reply as a transition point and either pause the sequence or route the lead to the right human immediately. Automation should not continue pushing generic follow-up once a real conversation has started. Good lead automation speeds up handoff; it does not talk over the customer.',
  },
];

const finalCta = {
  title: 'Build Your Lead Automation Framework',
  description:
    'Our AI Lead Handling system includes multi-channel capture, intelligent routing, qualification, and automated follow-up sequences. Every lead is handled systematically from first contact to booked job.',
};

export const leadAutomationFramework: ResourceData = {
  slug,
  title: 'Lead Automation Framework Guide',
  description:
    'Understand the four-layer lead automation framework — capture, routing, qualification, and follow-up — that handles leads systematically and converts more enquiries into booked jobs.',
  category: 'ai-lead-handling',
  publishedAt: '2025-12-01',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['lead-management'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Lead Automation Framework Guide',
    description:
      'Understand the four-layer lead automation framework — capture, routing, qualification, and follow-up — that handles leads systematically and converts more enquiries into booked jobs.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Lead Automation Framework for Service Businesses',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'The Cost of Manual Lead Handling',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Where Manual Processes Break Down:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The core components of a lead automation framework:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Manual vs Automated Lead Handling',
      content: ['How each approach handles the same incoming lead:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Lead Automation Architecture',
      content: [
        'Four-Layer Framework',
        'A complete lead automation framework connects capture, routing, qualification, and follow-up into one system:',
      ],
      benefit:
        'When all four layers work together, every lead receives consistent, fast, and contextual handling regardless of when they contact you or how busy your team is.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How a lead automation framework transformed a landscaping company:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Framework',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Start Building Your Framework',
      content: ['Begin with these foundational steps:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about lead automation frameworks:'],
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
