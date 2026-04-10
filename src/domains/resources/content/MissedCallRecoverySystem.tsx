
import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'missed-call-recovery-system';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Missed call recovery is an automated system that detects unanswered phone calls and immediately follows up with the caller via SMS or callback scheduling. For service businesses where 30-50% of calls go unanswered during busy hours, this system recovers revenue that would otherwise disappear.',
  problem:
    'Missed calls go unrecovered because most service businesses have no automated system to follow up with callers who did not get through',
  promise:
    'You will understand how to build a missed call recovery workflow that automatically contacts every unanswered caller within seconds and routes them back into your pipeline',
};

const takeaways = [
  'Service businesses miss 30-50% of calls during peak hours and after hours',
  'A missed call with no follow-up is a lost customer — they call the next company immediately',
  'Automated SMS within 30 seconds of a missed call recaptures the majority of these leads',
  'Recovery systems turn missed calls from lost revenue into pipeline opportunities',
];

const problem = {
  description: [
    'Phone calls remain the highest-intent lead channel for service businesses. When someone calls, they want to book now. But service businesses miss 30-50% of calls because teams are on job sites, with other customers, or the call comes after hours. Each missed call represents a customer who is likely calling the next company on the list.',
    'The gap is not the missed call itself — it is the absence of follow-up. A missed call with an immediate SMS saying "Sorry we missed your call — we will call you back within 15 minutes" recovers the majority of these leads. Without this system, the lead is permanently lost to a competitor who answered.',
  ],
  causes: [
    'Team members on job sites or with customers cannot answer every call',
    'After-hours calls go to voicemail with no automated follow-up',
    'No system detects missed calls and triggers immediate response',
    'Voicemails are checked hours later when the caller has already booked elsewhere',
    'No callback scheduling offered to missed callers',
    'Missed call volume is not measured or reported',
  ],
};

const businessCosts = [
  'Immediate revenue loss: Each missed call is a potential job worth hundreds or thousands of pounds',
  'Competitor capture: Callers who do not reach you immediately call the next search result',
  'Invisible loss: Most businesses do not track missed call volume, so the revenue loss is hidden',
  'After-hours gap: 40% of service enquiry calls happen outside business hours with zero follow-up',
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Measure Your Missed Call Rate',
      action:
        'Check your phone system for missed call data over the last 30 days. Count total incoming calls vs answered calls. Calculate the percentage of missed calls. Check the timing — what hours have the highest missed call rates. Most businesses are surprised by the volume.',
      expectedResult:
        'A clear picture of how many calls you miss, when you miss them, and the potential revenue each represents.',
    },
    {
      step: 2,
      title: 'Set Up Instant Missed Call SMS',
      action:
        'Configure your phone system or CRM to send an automatic SMS within 30 seconds of a missed call. Message template: "Hi, sorry we missed your call. We are with a customer right now. Can we call you back in [timeframe]? Or you can book a time here: [booking link]. — [Your Business Name]"',
      expectedResult:
        'Every missed caller receives immediate acknowledgement and a path back to your business before they call a competitor.',
    },
    {
      step: 3,
      title: 'Create a Callback Queue',
      action:
        'Set up a CRM task or pipeline stage for missed call callbacks. When a call is missed, the system creates a callback task assigned to the next available team member. Include the caller number, time of call, and any voicemail transcript. Set a priority based on time of day.',
      expectedResult:
        'Missed calls become tracked pipeline items with assigned owners and deadlines instead of forgotten voicemails.',
    },
    {
      step: 4,
      title: 'Configure After-Hours Recovery',
      action:
        'Set up a specific after-hours SMS response that acknowledges the call and offers a booking link for the next business day. "Hi, thanks for calling [Business]. We are currently closed but will call you back first thing at [time]. Need it sooner? Book a callback here: [link]."',
      expectedResult:
        'After-hours calls are no longer black holes — every caller gets a response and a path to connect with your team.',
    },
  ],
};

const checklist = [
  'Missed call detection active on all business phone lines',
  'Automatic SMS sends within 30 seconds of missed call',
  'SMS includes business name, callback timeframe, and booking link',
  'After-hours version of missed call SMS configured',
  'Callback tasks created automatically in CRM for every missed call',
  'Callback queue visible on team dashboard with priority ranking',
  'Missed call volume tracked and reported weekly',
  'Voicemail transcription connected to CRM records',
  'Escalation trigger if callback not completed within 30 minutes',
  'Monthly review of missed call rate and recovery conversion rate',
];

const faqs = [
  {
    question: 'What phone systems support automatic missed call detection?',
    answer:
      'Most VoIP systems and modern CRM phone integrations support missed call triggers. Traditional landlines may need a call tracking layer added. The key requirement is that the system can detect an unanswered call and trigger an action — either natively or through webhook integration.',
  },
  {
    question: 'How effective is SMS follow-up compared to calling back immediately?',
    answer:
      'SMS follow-up within 30 seconds is more effective than calling back in 30 minutes. The SMS serves as immediate acknowledgement — the caller knows you are aware they called and will follow up. This prevents them from calling competitors while they wait for your callback.',
  },
  {
    question: 'Should I try to resolve the enquiry via SMS or just schedule a callback?',
    answer:
      'Offer both options. Some callers prefer to text their question. Others want a callback. Your SMS should include a brief message option and a callback scheduling link. Let the caller choose their preferred next step.',
  },
  {
    question: 'How long should a callback task stay open before escalation?',
    answer:
      'Set the threshold based on urgency, but for most service businesses a missed-call task should escalate if no action happens within 15-30 minutes during business hours. After-hours tasks can roll to the next operational window with a different SLA. The point is that missed-call recovery only works if the callback queue has enforced time limits, not just good intentions.',
  },
];

const finalCta = {
  title: 'Recover Every Missed Call Automatically',
  description:
    'Our AI Lead Handling system detects missed calls instantly, sends automated SMS follow-up within seconds, creates CRM callback tasks, and tracks recovery rates. No missed call goes unrecovered.',
};

export const missedCallRecoverySystem: ResourceData = {
  slug,
  title: 'Missed Call Recovery System for Service Businesses',
  description:
    'Learn how to build a missed call recovery system that automatically follows up with every unanswered caller via SMS and callback scheduling to recapture lost revenue.',
  category: 'ai-lead-handling',
  publishedAt: '2025-11-26',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['missed-calls'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Missed Call Recovery System for Service Businesses',
    description:
      'Learn how to build a missed call recovery system that automatically follows up with every unanswered caller via SMS and callback scheduling to recapture lost revenue.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Missed Call Recovery System for Service Businesses',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Why missed call recovery matters for service businesses:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'The Hidden Revenue Lost to Missed Calls',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Why Calls Go Unanswered:',
    },
    {
      type: 'business-costs',
      heading: 'What Missed Calls Cost Your Business',
      content: ['The financial impact of unanswered calls:'],
      items: businessCosts,
    },
    {
      type: 'diy',
      heading: 'Build Your Missed Call Recovery System',
      content: ['Follow these steps to start recovering missed call revenue:'],
      steps: diy.steps,
    },
    {
      type: 'checklist',
      heading: 'Missed Call Recovery Readiness Checklist',
      content: ['Verify your system covers all recovery components:'],
      items: checklist,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about missed call recovery:'],
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
