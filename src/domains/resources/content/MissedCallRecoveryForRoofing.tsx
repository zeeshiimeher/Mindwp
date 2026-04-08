import { MessageSquare, PhoneMissed, RotateCcw } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'missed-call-recovery-for-roofing';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Roofing companies miss more calls than most service businesses because their teams work on roofs — physically unable to answer phones during the workday. Each missed call is a potential job worth hundreds or thousands of pounds going to the competitor who answered. This guide shows how roofing businesses implement automated missed call recovery systems that convert unanswered calls into booked appointments.',
  problem:
    'Your roofing team is on job sites all day and cannot answer phones, so missed calls go to voicemail where prospects rarely leave a message — they just call the next roofer on the list',
  promise:
    'You will see how roofing companies recover missed calls within 60 seconds using automated SMS responses that capture lead details and keep prospects engaged until the team can call back',
};

const takeaways = [
  'Roofing businesses miss 25-40% of inbound calls because teams cannot answer while on roofs',
  'An automated SMS within 60 seconds of a missed call recovers a significant percentage of those leads',
  'The SMS should acknowledge the miss, request job details, and provide a realistic callback timeframe',
  'After-hours missed call recovery is equally important — homeowners often call about issues in the evening',
];

const problem = {
  description: [
    'A homeowner discovers a roof leak and calls three roofers. Two go to voicemail. One answers. The one who answered gets the job. The two who missed the call never know the opportunity existed because the homeowner does not leave a voicemail — they have already found someone who picked up.',
    'For roofing companies, this is not a failure of effort — it is a structural problem. Roofers work on roofs. They cannot safely answer phones while working at height. The office may have one person handling calls, but during busy periods or when they step away, calls go unanswered. Without automated recovery, these leads are permanently lost.',
  ],
  causes: [
    'Teams on roofs physically unable to answer phones during working hours',
    'Single office staff member as the only phone coverage',
    'No automated response system for missed calls',
    'Voicemail messages rarely left by prospects — they call the next company',
    'After-hours calls going entirely unaddressed until the next morning',
    'No tracking of how many calls are missed or revenue lost',
  ],
};

const caseExample = {
  businessType: 'Roofing Company (South Yorkshire)',
  problem:
    'A roofing company analysed their phone records and discovered they missed 38% of inbound calls — approximately 15 calls per week. At an average job value of £1,200 and a 35% booking rate from answered calls, estimated monthly revenue loss was £25,000+. The team was on roofs all day and the single office admin could not handle peak call volume.',
  solution:
    'We implemented automated missed call recovery: within 30 seconds of a missed call, an SMS sent to the caller saying "Sorry we missed your call — we are up on a roof! Can you let us know what you need? We will call you back within 2 hours." A link to a quick form captured job type and urgency. Emergency keywords triggered immediate callback routing.',
  result:
    'Of the 15 missed calls per week, 11 responded to the SMS. Of those 11, 7 provided job details via the form. The team called back these leads within 2 hours. Booking rate from recovered calls was 42% — actually higher than live answered calls (35%). Monthly recovered revenue estimated at £14,000.',
  stat: '73% of missed calls engaged with the SMS recovery system',
};

const solutions = [
  {
    title: 'Instant SMS Recovery',
    description:
      'Within 30-60 seconds of any missed call, an automated SMS sends to the caller. The message is written in a roofing-appropriate tone: acknowledging that the team is on a job site (legitimate reason), requesting brief job details, and committing to a specific callback window. This is more effective than voicemail because SMS has 95%+ open rates vs 20% voicemail listen rates.',
    icon: MessageSquare,
  },
  {
    title: 'Emergency Keyword Detection',
    description:
      'When a missed call SMS response contains emergency keywords — "leak," "water coming in," "storm damage," "ceiling wet" — the system escalates immediately: alerting the on-call team member, forwarding the customer details via call or priority notification, and sending a follow-up to the customer confirming someone will contact them urgently.',
    icon: PhoneMissed,
  },
  {
    title: 'Callback Queue Management',
    description:
      'All missed calls enter a prioritised callback queue visible to the office and field team. Emergency leads are flagged red for immediate callback. Standard quote requests are queued for end-of-day callback. The queue tracks: time since missed call, job type, urgency, and whether the prospect has been contacted. Nothing falls through the cracks.',
    icon: RotateCcw,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Measure Your Missed Call Rate',
      action:
        'Check your phone system records for the last 30 days. Count total inbound calls and total missed calls (including those that went to voicemail). Calculate your miss rate. Then estimate: at your average job value and typical booking rate, what revenue are those missed calls potentially worth? This number usually shocks roofing business owners into action.',
      expectedResult:
        'A clear picture of how many calls you miss and the potential revenue those represent.',
    },
    {
      step: 2,
      title: 'Set Up Automated Missed Call SMS',
      action:
        'Use a business phone service or CRM that supports missed call auto-text. Configure a message: "Hi, sorry we missed your call — our team is on a job site. Can you text us what you need? We will call you back by [specific time]. For emergencies, reply URGENT." Keep it short, professional, and specific to roofing.',
      expectedResult:
        'Every missed call receives an automated SMS within 60 seconds, giving the prospect a reason to wait for your callback instead of calling a competitor.',
    },
    {
      step: 3,
      title: 'Create a Callback Priority System',
      action:
        'When SMS responses come in, classify by urgency: URGENT/emergency → callback within 15 minutes. Quote request → callback within 2 hours. General enquiry → callback by end of business day. Assign a team member to check the missed call queue every 2 hours during business hours.',
      expectedResult:
        'A structured callback system that ensures every missed call is followed up with appropriate urgency.',
    },
  ],
};

const finalCta = {
  title: 'Stop Losing Roofing Leads to Missed Calls',
  description:
    'Our AI Lead Handling systems recover missed calls automatically with instant SMS responses, emergency routing, and callback queue management designed for roofing businesses.',
};

export const missedCallRecoveryForRoofing: ResourceData = {
  slug,
  title: 'Missed Call Recovery for Roofing',
  description:
    'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
  category: 'ai-lead-handling',
  publishedAt: '2026-02-14',
  systems: ['ai-lead-handling'],
  industries: ['roofing'],
  topics: ['missed-calls'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Missed Call Recovery for Roofing',
    description:
      'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Missed Call Recovery for Roofing',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for roofing missed call recovery:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Roofing Companies Miss More Calls Than Any Other Trade',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Roofing Missed Call Problems:',
    },
    {
      type: 'case',
      heading: 'Real-World Roofing Example',
      content: ['How a roofing company recovered £14,000/month from missed calls:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Roofing Missed Call Recovery',
      content: ['Steps specific to roofing businesses:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Recovery System Architecture',
      content: [
        'Automated Missed Call Recovery for Roofers',
        'A system that turns missed calls into recovered leads:',
      ],
      benefit:
        'When every missed call triggers an instant SMS recovery sequence, you capture leads that would otherwise go straight to your competitors — without your team needing to be available 24/7.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/ai-lead-handling',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('ai-lead-handling'),
      content: getRelatedResourcesContent('ai-lead-handling'),
      resources: getRelatedResources('ai-lead-handling', canonical),
    },
  ],
};
