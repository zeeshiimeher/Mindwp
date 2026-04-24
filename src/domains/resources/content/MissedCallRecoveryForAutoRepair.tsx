import { MessageSquare, PhoneMissed, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'missed-call-recovery-for-auto-repair';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Auto repair shops are noisy, busy environments where phones ring constantly but answering is impractical when you are under a vehicle, talking to a customer at the counter, or running diagnostics. Every missed call is a potential brake job, service, or MOT that drives to the garage that answers. Missed call recovery sends an instant text response and booking link, keeping the lead warm while your team finishes what they are doing.',
  problem:
    'Your garage misses calls throughout the day because mechanics and advisors are occupied, and customers with vehicle problems call the next shop within minutes',
  promise:
    'You will see how auto repair shops recover missed calls with instant text responses, self-service booking links, and urgency-based routing — converting unanswered calls into confirmed bookings',
};

const takeaways = [
  'Auto repair shops miss 25-35% of incoming calls during service hours',
  'A booking link in the missed call text converts routine service inquiries without requiring a callback',
  'Urgency classification (breakdown vs. routine) in the auto-text prevents urgent situations from being delayed',
  'Pre-workshop hours (7-9am) and lunchtime generate the highest missed call rates when staffing is minimal',
];

const problem = {
  description: [
    'A typical auto repair shop receives 20-40 calls per day. The service advisor is the primary phone handler, but they are also greeting walk-ins, explaining repair quotes, processing payments, and coordinating with mechanics. During peak hours — Monday mornings, pre-MOT deadline periods, seasonal rushes — the advisor simply cannot answer every call. Mechanics do not answer phones. The result: 6-12 missed calls per day.',
    'The compounding loss is what makes this problem severe. A missed call for a £40 MOT seems minor. But that MOT customer discovers their car needs £300 in brake work and later needs a £600 clutch replacement. The £40 missed call was actually a £940 customer relationship lost. Across 6-12 missed calls daily, even at conservative conversion rates, this represents £1,500-3,000 in weekly revenue driving to competitors.',
  ],
  causes: [
    'Single service advisor handling phone, walk-ins, and checkouts simultaneously',
    'No automated response for missed calls',
    'Mechanics unable to answer phones from under vehicles',
    'Pre-opening and lunch periods with zero phone coverage',
    'No self-service booking option for routine services',
    'Callbacks attempted 1-3 hours later when the customer has already called another garage',
  ],
};

const caseExample = {
  businessType: 'Independent Garage (Kent, 3 mechanics + 1 service advisor)',
  problem:
    'A 3-bay garage tracked missed calls for one month: 189 total — an average of 8 per working day. Peak missed calls were Monday 8-10am (averaging 5 missed in 2 hours) and lunch 12-1pm (averaging 3 missed). Of those, only 12% left voicemails. When called back (average 2 hours later), 55% had already booked elsewhere. The owner calculated £6,200/month in estimated lost revenue based on their average job value of £210.',
  solution:
    'We set up missed call recovery: every unanswered call received a text within 45 seconds: "Hi from [Garage]. Sorry we missed your call — we are in the workshop. Need us urgently? Reply URGENT. Book an MOT or service online: [link]. Or we will call you back within 30 minutes." URGENT replies triggered an immediate alert to the advisor mobile. The booking link offered MOT, servicing, and tyre fitting. All missed calls were logged in the CRM for callback.',
  result:
    'Of missed calls, 58% engaged with the text. 35% used the online booking link directly. 12% replied URGENT and received callbacks within 10 minutes. 11% replied with questions that led to bookings after advisor follow-up. Total missed call recovery rate: 41%. Monthly recovered revenue: approximately £3,800. The shop also found that customers who booked online were 25% more likely to approve recommended additional work during the service.',
  stat: '41% of missed calls recovered via instant text, generating £3,800/month in previously lost revenue',
};

const solutions = [
  {
    title: 'Instant Text with Booking Link',
    description:
      'Within 45 seconds of a missed call, the customer receives a text with urgency options and a direct booking link. Routine services (MOT, servicing, tyres) can be booked immediately without waiting for a callback. This is faster and more convenient than a phone call — and it happens while the customer still needs your help, before they call the next garage.',
    icon: PhoneMissed,
  },
  {
    title: 'Urgency Classification',
    description:
      'The auto-text gives customers a way to flag urgency: "Reply URGENT for breakdown or safety concern." This simple keyword triggers an immediate alert — the advisor phone buzzes with the customer details, prioritising the callback above routine work. Non-urgent callers get the booking link and a callback promise. This prevents genuine emergencies (brake failure, warning lights, breakdowns) from waiting in a callback queue.',
    icon: MessageSquare,
  },
  {
    title: 'CRM Logging and Revenue Tracking',
    description:
      'Every missed call is logged in the CRM: time, customer number, whether they engaged with the text, whether they booked, and the eventual job value. This creates data: which times have the most missed calls (informing staffing), what percentage of recovered calls convert (proving ROI), and total monthly revenue recovered. The data often justifies hiring a part-time receptionist for peak hours or extending the system to after-hours.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Measure Your Missed Call Problem',
      action:
        'Check your phone system or get a call tracking number for 2 weeks. Log every missed call with the time of day. Calculate your daily average. Identify peak missed call windows — these are your biggest revenue leaks. Most garages discover that 30%+ of weekday calls go unanswered, with Monday mornings and lunchtimes being the worst.',
      expectedResult:
        'Data showing exactly how many calls you miss per day, when you miss them, and the estimated revenue impact based on your average job value.',
    },
    {
      step: 2,
      title: 'Set Up Auto-Text for Missed Calls',
      action:
        'Configure your phone system to send an automatic text for every missed call. Message: "Hi from [Garage]. We are in the workshop and could not answer. If this is urgent (breakdown, warning light, safety issue), reply URGENT and we will call back in 10 minutes. For MOT or service booking: [link]. For other inquiries, we will call you back within 30 minutes." Test it during a busy period.',
      expectedResult:
        'Every missed call receives an automatic text within 60 seconds with urgency routing and a booking link for routine services.',
    },
    {
      step: 3,
      title: 'Track Recovery and Optimise',
      action:
        'Monitor for 4 weeks: text delivery rate, engagement rate (clicks or replies), bookings from the link, URGENT callbacks completed on time, and total recovered revenue. Compare recovered revenue to the cost of the system. Optimise: if your callback promise is "30 minutes" but your average is 45, adjust the promise. If booking link usage is low, test a different service offering or add a first-time discount.',
      expectedResult: 'Measurable missed call recovery data showing ROI and areas for improvement.',
    },
  ],
};

const finalCta = {
  title: 'Recover Missed Calls for Your Auto Repair Shop',
  description:
    'Our AI Lead Handling systems send instant text responses to every missed call, route urgent mechanical issues for immediate callback, and provide self-service booking for routine work — capturing revenue that currently drives to competitors.',
};

export const missedCallRecoveryForAutoRepair: ResourceData = {
    slug,
    seo: {
    title: 'Missed Call Recovery for Auto Repair',
    description:
      'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
    canonical,
  },
    title: 'Missed Call Recovery for Auto Repair',
    description:
    'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
    category: 'ai-lead-handling',
    publishedAt: '2026-02-09',
    systems: ['ai-lead-handling'],
    industries: ['automotive'],
    topics: ['missed-calls'],
    primaryService: 'ai-lead-handling',
    sections: [
    {
      type: 'hero',
      heading: 'Missed Call Recovery for Auto Repair',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for auto repair missed call recovery:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Garages Lose Revenue to Unanswered Calls',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Auto Repair Missed Call Problems:',
    },
    {
      type: 'case',
      heading: 'Real-World Auto Repair Example',
      content: ['How missed call recovery transformed garage bookings:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Auto Repair Missed Call Recovery',
      content: ['Steps specific to auto repair missed call handling:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Auto Repair Missed Call Recovery Architecture',
      content: [
        'Automated Missed Call Recovery for Garages',
        'A recovery system designed for the demand patterns of auto repair:',
      ],
      benefit:
        'When every missed garage call triggers an instant text with urgency routing and a booking link, you recover 35-45% of calls that would otherwise drive to the next shop.',
      solutions,
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
  ]
};
