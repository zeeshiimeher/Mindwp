import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'service-business-follow-up-automation-guide';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Follow-up automation replaces manual check-ins with systematic message sequences triggered by pipeline stages. Instead of remembering to call back, your CRM sends the right follow-up at the right time based on where each lead is in the process.',
  problem:
    'Your follow-up is inconsistent — some leads get multiple touches, others get forgotten, and the process depends entirely on team memory and availability',
  promise:
    'You will understand how to build automated follow-up sequences that ensure every lead receives consistent, timely communication from first enquiry through booked job',
};

const takeaways = [
  'Follow-up should be triggered by pipeline stages, not manual reminders',
  'Each stage needs its own sequence — new leads, quoted leads, and booked leads need different messages',
  'Multi-channel follow-up (SMS + email) outperforms single-channel by 3-5x',
  'Automation fills the gaps between personal interactions, not replacing them',
];

const problem = {
  description: [
    'Follow-up is the most common failure point in service business lead handling. Research consistently shows that 80% of sales require 5+ follow-up touches, but most service businesses stop after 1-2 contacts. The leads are not lost to competitors — they are lost to silence.',
    'The problem is not laziness. Service business owners are busy working. They mean to follow up but get pulled into jobs, phone calls, and daily operations. By the time they remember, the lead has moved on. Manual follow-up cannot compete with the volume and timing requirements of consistent lead nurturing.',
  ],
  causes: [
    'Follow-up relies on team memory rather than automated triggers',
    'No distinction between follow-up for new leads vs quoted leads vs cold leads',
    'Single-channel follow-up (email only) when SMS has 98% open rates',
    'No escalation when initial follow-up gets no response',
    'Follow-up stops after 1-2 attempts instead of the 5+ needed',
    'No pipeline visibility showing which leads need follow-up attention',
  ],
};

const businessCosts = [
  'Lost revenue: 80% of unconverted leads are lost to insufficient follow-up, not competitor pricing',
  'Wasted acquisition cost: Every uncontacted lead represents marketing spend with zero return',
  'Inconsistent experience: Some customers get excellent communication while others hear nothing',
  'Team frustration: Salespeople spend time on administrative follow-up instead of relationship building',
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Follow-Up Stages',
      action:
        'Define the key stages in your lead pipeline: New Lead, Contacted, Quoted, Follow-Up Needed, Booked, Lost. For each stage, document what follow-up should happen and when. Example: New Lead → instant acknowledgement + 1-hour value message + 24-hour CTA.',
      expectedResult:
        'A stage-based follow-up plan that defines exactly what communication happens at each point in the customer journey.',
    },
    {
      step: 2,
      title: 'Build Your First Automated Sequence',
      action:
        'In your CRM, create a 3-message automation for new leads. Message 1: instant acknowledgement via SMS (within 60 seconds). Message 2: value email with helpful content at 1 hour. Message 3: direct CTA with booking link at 24 hours. Set the automation to trigger when a contact enters the New Lead stage.',
      expectedResult:
        'Every new lead receives 3 follow-up touches in 24 hours without anyone manually sending messages.',
    },
    {
      step: 3,
      title: 'Add a Quote Follow-Up Sequence',
      action:
        'Create a separate sequence for leads who have received a quote but not booked. Message 1: check-in at 48 hours asking if they have questions. Message 2: reminder of key benefits at 5 days. Message 3: expiry nudge at 10 days. Trigger this when a lead moves to the Quoted stage.',
      expectedResult:
        'Quoted leads receive systematic nudges that keep your proposal top-of-mind without requiring manual check-ins.',
    },
    {
      step: 4,
      title: 'Set Up Multi-Channel Delivery',
      action:
        'Configure your sequences to use both SMS and email. Time-sensitive messages (acknowledgements, reminders) should go via SMS. Detailed content (pricing guides, resources) should go via email. If your CRM supports it, add WhatsApp for platforms where your customers are active.',
      expectedResult:
        'Follow-up reaches leads on the channels they actually use, increasing open and response rates significantly.',
    },
  ],
};

const checklist = [
  'Instant acknowledgement automation triggers within 60 seconds',
  'New lead sequence includes at least 3 messages over 24-48 hours',
  'Quote follow-up sequence activates when lead reaches Quoted stage',
  'Both SMS and email channels configured for follow-up',
  'Automation pauses when team member responds personally',
  'Escalation triggers if no response after full sequence completes',
  'Pipeline dashboard shows follow-up status for every active lead',
  'Booking confirmation and reminder sequences set up',
  'Lost lead reactivation sequence created for 30/60/90-day check-ins',
  'All sequences reviewed and updated monthly based on response data',
];

const finalCta = {
  title: 'Automate Your Follow-Up and Never Lose a Lead to Silence',
  description:
    'Our AI Lead Handling system includes stage-based follow-up automation across SMS, email, and WhatsApp. Every lead gets the right message at the right time without manual effort.',
};

export const serviceBusinessFollowUpAutomationGuide: ResourceData = {
  slug,
  seo: {
    title: 'Service Business Follow-Up Automation Guide',
    description:
      'Learn how to build automated follow-up sequences triggered by CRM pipeline stages that ensure every lead receives consistent, timely communication.',
    canonical,
  },
  title: 'Service Business Follow-Up Automation Guide',
  description:
    'Learn how to build automated follow-up sequences triggered by CRM pipeline stages that ensure every lead receives consistent, timely communication.',
  category: 'ai-lead-handling',
  publishedAt: '2025-12-27',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['follow-up'],
  primaryService: 'ai-lead-handling',
  sections: [
    {
      type: 'hero',
      heading: 'Service Business Follow-Up Automation Guide',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of follow-up automation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Follow-Up Fails in Service Businesses',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Where Follow-Up Breaks Down:',
    },
    {
      type: 'business-costs',
      heading: 'The Business Cost of Inconsistent Follow-Up',
      content: ['What poor follow-up actually costs your business:'],
      items: businessCosts,
    },
    {
      type: 'diy',
      heading: 'Build Your Follow-Up Automation System',
      content: ['Follow these steps to create automated follow-up sequences:'],
      steps: diy.steps,
    },
    {
      type: 'checklist',
      heading: 'Follow-Up Automation Readiness Checklist',
      content: ['Verify your follow-up system covers all essential components:'],
      items: checklist,
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
