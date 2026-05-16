import { MessageSquare, PhoneMissed, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'missed-call-recovery-for-hvac';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'HVAC technicians work in attics, basements, and crawl spaces — places where answering a phone is impossible. Meanwhile, homeowners with broken heating or cooling are calling every company they can find. A missed HVAC call is not just a missed conversation; it is a job worth £150-2,000 that goes directly to whoever picks up next. Missed call recovery automation ensures every unanswered call gets an instant text response and systematic follow-up.',
  problem:
    'Your HVAC technicians miss calls while on jobs, and by the time someone calls back, the homeowner has already booked with a competitor who answered first',
  promise:
    'You will see how HVAC companies implement missed call recovery that sends instant text responses, qualifies urgency, and books callbacks — keeping leads warm even when every technician is deployed',
};

const takeaways = [
  'HVAC companies miss 30-50% of incoming calls during peak season when all technicians are on jobs',
  'An instant text response to missed calls keeps the lead warm for 15-30 minutes — long enough to call back',
  'Emergency missed calls (no heat/no cooling) need a different recovery path than routine service requests',
  'After-hours missed calls represent the highest-margin work most HVAC companies lose entirely',
];

const problem = {
  description: [
    'An HVAC business is fundamentally a mobile operation. Technicians are the primary revenue generators, but they are also often the ones who should be answering leads — especially in smaller companies where the owner is also the lead technician. When you are installing a furnace or diagnosing an AC unit, you cannot take a call. The phone rings, goes to voicemail, and the customer hangs up and calls the next number.',
    'The financial impact is severe during peak seasons. A 6-technician HVAC company receiving 25 calls per day during a heatwave might miss 10-12 of them. If even half of those are viable jobs at an average of £300, that is £1,500 per day in lost revenue — £7,500 per week, £30,000 per month. This is not theoretical loss; these are real customers who needed HVAC service and hired someone else because no one answered.',
  ],
  causes: [
    'All technicians on jobs during peak demand periods',
    'No automated response system for missed calls',
    'Voicemail as the only missed call handling — most customers do not leave one',
    'No urgency detection for emergency situations like no heat or gas issues',
    'Callbacks attempted hours later when the customer has already booked elsewhere',
    'After-hours calls with no recovery system at all',
  ],
};

const caseExample = {
  businessType: 'HVAC Service Company (Leeds area)',
  problem:
    'A 5-technician HVAC company tracked their missed calls for one month. Result: 147 missed calls in 30 days — an average of 5 per day. Of those, only 23 left voicemails. The remaining 124 were untraceable. The owner estimated that even at a conservative 30% conversion rate, they were losing 37 potential jobs per month. At an average ticket of £280, that represented over £10,000 in monthly lost revenue.',
  solution:
    'We implemented automatic missed call recovery: every unanswered call triggered an instant SMS within 30 seconds: "Hi, this is [Company] HVAC. Sorry we missed your call. Are you experiencing an emergency? Reply URGENT for immediate callback, or BOOK to schedule service." URGENT replies triggered an alert to the on-call technician phone. BOOK replies received a scheduling link. All missed calls were logged in the CRM for same-day callback.',
  result:
    'Of the missed calls, 62% engaged with the text response. 8% flagged as emergency and received callbacks within 10 minutes. 31% used the booking link. 23% replied with questions that led to bookings. Monthly recovered revenue from the missed call system averaged £4,800 — jobs that would have gone to competitors. Customer feedback consistently mentioned the fast text response as professional.',
  stat: '62% of missed calls recovered via instant text response, averaging £4,800/month in recovered revenue',
};

const solutions = [
  {
    title: 'Instant Missed Call Text Response',
    description:
      'Within 30 seconds of a missed call, the system sends a text: "Sorry we missed your call. We are on a job right now. Are you experiencing a heating/cooling emergency? Reply URGENT for immediate callback, or reply BOOK to schedule." This single text accomplishes three things: acknowledges the call, qualifies urgency, and provides a self-service option — all before the customer has time to call a competitor.',
    icon: PhoneMissed,
  },
  {
    title: 'Emergency Escalation Path',
    description:
      'When a missed call is flagged as emergency (customer replies URGENT or the AI detects urgency indicators), the system bypasses the normal queue. An alert goes directly to the on-call technician phone with the customer details. For life-safety situations (gas smell, CO alarm), the system also provides emergency service numbers. This ensures the highest-value, most time-sensitive calls are never lost.',
    icon: MessageSquare,
  },
  {
    title: 'CRM Integration and Revenue Tracking',
    description:
      'Every missed call and its recovery outcome is logged in the CRM. This creates data: missed call volume by time of day, recovery rate, revenue recovered, and lost opportunities. This data drives business decisions — if 30% of missed calls happen between 5-8pm, that justifies after-hours coverage. If Monday mornings spike, that justifies a dedicated phone handler for that period.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Track Your Missed Calls for One Week',
      action:
        'Before building a recovery system, understand the problem. Check your phone system logs or call tracking for missed calls over the past week. Count total missed calls, time of day patterns, and how many resulted in voicemails. Most HVAC companies are shocked by the actual volume. This data justifies the investment and establishes your baseline.',
      expectedResult:
        'A clear picture of how many calls you miss, when you miss them, and the estimated revenue impact.',
    },
    {
      step: 2,
      title: 'Set Up Instant Text Response',
      action:
        'Configure your phone system or use a missed call text-back service. The text should send within 60 seconds of a missed call. Content: "Hi, this is [Company]. Sorry we missed your call. If this is an emergency, reply URGENT and we will call you back immediately. Otherwise, reply BOOK to schedule or we will call you within [timeframe]." Test it by calling your own number and letting it ring.',
      expectedResult:
        'Every missed call receives an automatic text within 60 seconds that qualifies urgency and provides booking options.',
    },
    {
      step: 3,
      title: 'Build the Callback Priority Queue',
      action:
        'Create a system where missed calls are prioritised for callback. URGENT replies: callback within 10 minutes (alert on-call technician). BOOK replies: confirm the booking automatically. No reply: add to the callback list with a 2-hour target. Train one team member to work through the callback list between jobs. Track the conversion rate of callbacks to justify the time investment.',
      expectedResult:
        'A prioritised callback system where emergencies are handled immediately and routine missed calls receive same-day follow-up.',
    },
  ],
};

const finalCta = {
  title: 'Recover Missed Calls for Your HVAC Business',
  description:
    'Our Lead Response & Handling systems send instant text responses to every missed call, qualify emergencies for immediate callback, and recover the revenue your HVAC business currently loses to voicemail.',
};

export const missedCallRecoveryForHvac: ResourceData = {
  slug,
  seo: {
    title: 'Missed Call Recovery for HVAC',
    description:
      'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
    canonical,
  },
  title: 'Missed Call Recovery for HVAC',
  description:
    'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
  category: 'lead-response',
  publishedAt: '2026-02-11',
  primarySystem: 'lead-response-handling',
  industries: ['hvac'],
  topics: ['missed-calls'],
  primaryService: 'lead-response-handling',
  sections: [
    {
      type: 'hero',
      heading: 'Missed Call Recovery for HVAC',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for HVAC missed call recovery:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why HVAC Companies Lose Thousands to Missed Calls',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common HVAC Missed Call Problems:',
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ['How missed call recovery transformed lead capture:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up HVAC Missed Call Recovery',
      content: ['Steps specific to HVAC missed call handling:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC Missed Call Recovery Architecture',
      content: [
        'Automated Missed Call Recovery for HVAC',
        'A recovery system designed for HVAC urgency and mobile operations:',
      ],
      benefit:
        'When every missed HVAC call triggers an instant text response with urgency detection, you recover 50-65% of leads that would otherwise call a competitor within minutes.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('lead-response'),
      content: getRelatedResourcesContent('lead-response'),
      resources: getRelatedResources('lead-response', canonical),
    },
  ],
};
