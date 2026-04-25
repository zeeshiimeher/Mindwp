import { Calendar, MessageSquare, PhoneMissed } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'missed-call-recovery-for-salons';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Salon phones ring during the busiest moments — when every stylist has a client in the chair and the receptionist is processing a checkout. Clients calling to book expect availability information immediately. When the call goes to voicemail, most do not leave a message — they search for and call the next salon. Missed call recovery for salons sends an instant text with a booking link, turning a missed call into a confirmed appointment without anyone needing to pick up the phone.',
  problem:
    'Your salon misses calls during peak hours and clients book elsewhere because they want an answer now, not a callback later',
  promise:
    'You will see how salons recover missed calls with instant booking links, converting unanswered phone calls into confirmed appointments automatically',
};

const takeaways = [
  'Salons miss 25-40% of calls during peak service hours when all staff are occupied',
  'A booking link in the missed call text converts more than a callback promise because clients want to see availability instantly',
  'Missed call texts that mention available same-week slots create urgency and faster booking',
  'Saturday missed calls are the highest-value leads — clients calling on Saturday are ready to book immediately',
];

const problem = {
  description: [
    'Salon operations create a predictable missed call pattern: call volume peaks on Thursday through Saturday (when clients are booking for the current or next week), and staff availability to answer phones is lowest during these same periods because everyone is servicing clients. A 6-chair salon on a busy Saturday might miss 15-20 calls in a single day.',
    'Unlike emergency services where a callback within an hour is acceptable, salon clients typically call 2-3 salons looking for availability. If the first salon does not answer, they call the second. If the second answers or they can book online, they are gone. The window to recover a missed salon call is 5-10 minutes — after that, the client has booked elsewhere. Traditional voicemail is almost useless; fewer than 10% of salon callers leave messages.',
  ],
  causes: [
    'All stylists occupied with clients during peak booking hours',
    'Reception desk handling walk-ins and checkouts simultaneously',
    'No automated response system for missed calls',
    'Callbacks attempted 1-2 hours later — too late for clients who are comparison calling',
    'Voicemail as the only fallback for unanswered calls',
    'No self-service booking option offered to missed callers',
  ],
};

const caseExample = {
  businessType: 'Hair and Beauty Salon (Edinburgh, 8 stylists)',
  problem:
    'An 8-chair salon with one receptionist tracked missed calls for two weeks. Result: 87 missed calls in 14 days — an average of 6 per day, spiking to 12+ on Saturdays. Of those, 7 left voicemails. When the receptionist called back (usually within 1-2 hours), only 40% still needed to book — the rest had found another salon. The owner estimated 3-4 lost new clients per week at an average first-visit value of £65.',
  solution:
    'We implemented instant missed call recovery: every unanswered call received a text within 30 seconds: "Hi from [Salon Name]! Sorry we could not answer — our stylists are all with clients right now. Book your appointment instantly here: [booking link]. New to us? Mention this text for 15% off your first visit." The booking link showed real-time availability with stylist selection. A follow-up at 2 hours for non-bookers: "Still looking for an appointment? We have slots available this week: [link]."',
  result:
    'Of missed calls receiving the text, 45% clicked the booking link within 10 minutes. 28% completed a booking directly. The 2-hour follow-up converted an additional 8%. Total missed call recovery rate: 36%. New client bookings increased by 11 per week. Saturday missed call bookings alone added approximately £700/week in revenue. The salon also noticed that clients who booked via the missed call link left more reviews — they appreciated the fast, modern experience.',
  stat: '36% of missed calls recovered via instant booking link, adding 11 new client bookings per week',
};

const solutions = [
  {
    title: 'Instant Booking Link Text',
    description:
      'Within 30 seconds of a missed call, the client receives a text with a direct booking link. The link opens their scheduling system showing real-time availability, filtered to relevant services. No back-and-forth needed — the client can see openings, pick their preferred stylist, and confirm in under a minute. This is faster and more convenient than actually speaking to a receptionist, which is why conversion rates are high.',
    icon: PhoneMissed,
  },
  {
    title: 'New Client Welcome Offer',
    description:
      'The missed call text includes a new client incentive: "New to us? Mention this text for [offer]." This serves two purposes: it creates urgency to book now rather than continue comparison calling, and it identifies new clients for the retention system. The offer is only triggered for numbers not already in the salon CRM — existing clients get a different message acknowledging their loyalty.',
    icon: MessageSquare,
  },
  {
    title: 'Timed Follow-Up Sequence',
    description:
      'If the client does not book within 2 hours of the initial text, a follow-up is sent: "Still looking for an appointment? We have openings [this week/tomorrow/today]." For clients who clicked the link but did not complete the booking, a different message: "We noticed you were checking availability — can we help you find the right time?" This recovers an additional 8-12% of missed calls beyond the initial text.',
    icon: Calendar,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Set Up Online Booking If You Have Not Already',
      action:
        'Missed call recovery requires a booking link. If you do not have online booking, implement one first — this is the foundation. The system must show real-time availability, allow service and stylist selection, and send confirmation. Most salon software (Fresha, Treatwell, Booksy, Timely) includes online booking. Get the direct booking link ready before setting up the missed call system.',
      expectedResult:
        'A functional online booking link that clients can use to self-book with real-time availability.',
    },
    {
      step: 2,
      title: 'Configure Missed Call Auto-Text',
      action:
        'Set up your phone system to detect missed calls and trigger an immediate text. The message should be warm and salon-appropriate: "Hi from [Salon Name]! Sorry we missed your call — we are all with clients right now. Book instantly here: [link]. New clients get [offer]!" Keep it under 160 characters if possible. Test it by calling your salon number and letting it ring during a busy period.',
      expectedResult:
        'Every missed call triggers an automatic text within 30-60 seconds with your booking link and new client offer.',
    },
    {
      step: 3,
      title: 'Add Follow-Up and Track Results',
      action:
        'Set a follow-up text at 2 hours for non-bookers. Then track for 4 weeks: total missed calls, text delivery rate, booking link click rate, completed bookings from missed calls. Calculate your recovery rate and revenue recovered. Most salons see 25-40% recovery rates. Use this data to justify the system cost and optimise the messaging.',
      expectedResult:
        'A complete missed call recovery funnel with data showing how many missed calls convert to bookings and the revenue impact.',
    },
  ],
};

const finalCta = {
  title: 'Recover Missed Calls for Your Salon',
  description:
    'Our AI Lead Handling systems send instant booking links to every missed call, differentiate new and existing clients, and recover the appointments your salon loses during busy hours.',
};

export const missedCallRecoveryForSalons: ResourceData = {
  slug,
  seo: {
    title: 'Missed Call Recovery for Salons',
    description:
      'See how salons recover missed calls with instant booking link texts, converting unanswered phone calls into confirmed appointments even during the busiest service hours.',
    canonical,
  },
  title: 'Missed Call Recovery for Salons',
  description:
    'See how salons recover missed calls with instant booking link texts, converting unanswered phone calls into confirmed appointments even during the busiest service hours.',
  category: 'ai-lead-handling',
  publishedAt: '2026-02-16',
  systems: ['ai-lead-handling'],
  industries: ['salon'],
  topics: ['missed-calls'],
  primaryService: 'ai-lead-handling',
  sections: [
    {
      type: 'hero',
      heading: 'Missed Call Recovery for Salons',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for salon missed call recovery:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Busy Salons Lose Clients to Missed Calls',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Salon Missed Call Problems:',
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ['How missed call recovery transformed booking conversion:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Salon Missed Call Recovery',
      content: ['Steps specific to salon missed call handling:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon Missed Call Recovery Architecture',
      content: [
        'Automated Missed Call Recovery for Salons',
        'A recovery system designed for high-volume salon operations:',
      ],
      benefit:
        'When every missed salon call triggers an instant booking link text, you recover 25-40% of callers who would otherwise book with a competitor — without anyone needing to answer the phone.',
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
  ],
};
