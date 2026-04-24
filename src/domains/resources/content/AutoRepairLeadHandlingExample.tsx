import { Clock, PhoneIncoming, Wrench } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'auto-repair-lead-handling-example';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Auto repair leads come in waves — Monday mornings after weekend breakdowns, rainy days with accident damage, and seasonal surges for MOTs and pre-winter checks. When the shop is full and every mechanic is under a car, the phone rings unanswered. The customer with a warning light on calls the next garage. Automated lead handling ensures every auto repair inquiry gets an instant response with booking options, even when the workshop is at full capacity.',
  problem:
    'Your auto repair shop misses calls and inquiries when the workshop is busy, losing customers who need immediate answers about availability and pricing',
  promise:
    'You will see how auto repair shops implement automated lead handling that responds to every inquiry instantly, offers online booking for routine services, and prioritises urgent mechanical issues — capturing revenue that would otherwise drive to the next garage',
};

const takeaways = [
  'Auto repair leads are high-intent: a customer calling about a warning light or breakdown needs help now, not tomorrow',
  'Online booking for routine services (MOTs, servicing, tyres) eliminates 50-60% of booking phone calls',
  'Urgency detection separates breakdowns (immediate response needed) from planned services (booking link sufficient)',
  'Monday and Tuesday mornings generate 30-40% of weekly inquiries when shops are also at peak workshop load',
];

const problem = {
  description: [
    'Auto repair shops face a structural lead handling problem: the people who know enough to answer customer questions (mechanics and service advisors) are the ones working on vehicles. A customer calling to ask if you can diagnose a warning light, quote a brake job, or fit them in for an MOT needs someone knowledgeable to answer. When the phone goes to voicemail, they call the shop down the road.',
    'The financial impact is significant because auto repair has high customer lifetime value. A customer who comes in for a brake pad replacement may need annual servicing, MOTs, tyre replacements, and eventually larger jobs. Losing a £200 brake job actually loses the £1,000-3,000 that customer would spend over the following 3-5 years. And the customer rarely calls back — they found a shop that answered.',
  ],
  causes: [
    'Service advisors handling walk-ins and cannot answer every call',
    'Mechanics under vehicles and unable to take calls',
    'No automated response system for phone or web inquiries',
    'Monday morning surge overwhelms phone capacity',
    'No way for customers to self-book routine services online',
    'After-hours inquiries from customers who discover problems in the evening or weekend',
  ],
};

const caseExample = {
  businessType: 'Independent Auto Repair Garage (Surrey, 4 mechanics)',
  problem:
    'A 4-bay garage with one service advisor received 15-20 calls per day. During peak periods (Monday mornings, MOT season), the advisor was also processing walk-ins and handling customer pickups. Call tracking showed 35% of calls went unanswered — approximately 7 per day. The owner estimated that even at a conservative 40% conversion rate, they were losing 3 jobs daily at an average value of £180, totalling approximately £2,700 per week.',
  solution:
    'We implemented multi-channel lead handling: missed calls triggered an instant SMS with two options — "Reply URGENT for immediate callback about a breakdown or warning light" or "Book a service online: [link]." The online booking link offered MOTs, interim services, full services, and tyre fitting with real-time availability. Web form submissions and Google Business messages received the same instant treatment. Urgent replies triggered an alert on the service advisor phone.',
  result:
    'Online booking handled 55% of routine service inquiries without a phone call — freeing the advisor for walk-ins and complex inquiries. Missed call recovery converted 42% of previously lost calls into bookings. Monthly bookings increased by 38 jobs. At an average value of £195, this represented £7,410 in monthly revenue from leads that were previously lost. The owner also noted that online bookers tended to approve recommended additional work at a higher rate, suggesting pre-booked customers are more trusting.',
  stat: 'Monthly bookings increased by 38 jobs (£7,410/month) through automated inquiry handling and online booking',
};

const solutions = [
  {
    title: 'Instant Response with Urgency Detection',
    description:
      'Every inquiry receives an immediate automated response. The system detects urgency: breakdown, warning light, or safety concern → priority callback within 15 minutes. Routine service request → booking link with available slots. Quote request → automated questionnaire to gather vehicle details before the advisor calls back. This ensures urgent issues get fast human attention while routine bookings are handled automatically.',
    icon: PhoneIncoming,
  },
  {
    title: 'Self-Service Booking for Routine Work',
    description:
      'Routine services — MOTs, interim and full services, tyre replacement, brake inspections — follow predictable patterns and can be booked online without a phone call. The booking system shows available time slots, collects vehicle registration (for automatic MOT due date lookup), and confirms instantly. This removes 50-60% of booking calls, freeing staff for complex inquiries and in-person service.',
    icon: Clock,
  },
  {
    title: 'Vehicle History and Lifecycle Marketing',
    description:
      'Every customer interaction is logged in the CRM with vehicle details, service history, and MOT dates. This enables lifecycle marketing: automatic MOT reminders 4 weeks before expiry, service due alerts based on mileage or time, and seasonal campaigns (winter checks, AC re-gas in spring). Each reminder represents a booking opportunity that requires zero acquisition cost — the customer is already yours.',
    icon: Wrench,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Track Your Missed Calls and Inquiry Sources',
      action:
        'For 2 weeks, track every incoming inquiry: phone calls (answered and missed), web forms, Google messages, walk-ins. Note the time, inquiry type (routine booking, quote request, urgent/breakdown), and outcome. Most garages discover their missed call problem is larger than expected and that Monday mornings account for disproportionate volume.',
      expectedResult:
        'A clear picture of inquiry volume, missed calls by time of day, and the split between urgent and routine inquiries.',
    },
    {
      step: 2,
      title: 'Set Up Online Booking for Routine Services',
      action:
        'Implement an online booking system for your most common services: MOT, interim service, full service, tyre fitting, brake inspection. The system needs: real-time availability, vehicle registration input, automatic service recommendations based on vehicle type, and instant confirmation. Put the booking link on your website, Google Business Profile, and in all automated responses. This handles the highest volume of inquiries automatically.',
      expectedResult:
        'Customers can self-book routine services 24/7 without calling, reducing phone volume by 50-60% for bookable services.',
    },
    {
      step: 3,
      title: 'Configure Missed Call Recovery',
      action:
        'Set up automatic SMS for missed calls: "Thanks for calling [Garage Name]. We are in the workshop right now. For breakdown or urgent issues, reply URGENT. For routine booking (MOT, service, tyres), book online: [link]. We will call you back within [timeframe] for all other inquiries." Track the recovery rate and compare to your pre-automation baseline.',
      expectedResult:
        'Every missed call receives an instant automated response with urgency routing and self-service booking, recovering 30-45% of previously lost inquiries.',
    },
  ],
};

const finalCta = {
  title: 'Automate Lead Handling for Your Auto Repair Shop',
  description:
    'Our AI Lead Handling and Smart Website Systems ensure every inquiry gets an instant response, routine services are bookable online 24/7, and urgent mechanical issues reach your team immediately.',
};

export const autoRepairLeadHandlingExample: ResourceData = {
    slug,
    seo: {
    title: 'Auto Repair Lead Handling Example',
    description:
      'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
    canonical,
  },
    title: 'Auto Repair Lead Handling Example',
    description:
    'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
    category: 'ai-lead-handling',
    publishedAt: '2026-01-14',
    systems: ['ai-lead-handling', 'smart-website-systems'],
    industries: ['automotive'],
    topics: ['lead-management'],
    primaryService: 'ai-lead-handling',
    sections: [
    {
      type: 'hero',
      heading: 'Auto Repair Lead Handling Example',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for auto repair lead handling:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Busy Garages Lose Customers to Missed Calls',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Auto Repair Lead Handling Failures:',
    },
    {
      type: 'case',
      heading: 'Real-World Auto Repair Example',
      content: ['How automated lead handling transformed garage bookings:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Auto Repair Lead Handling',
      content: ['Steps specific to auto repair businesses:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Auto Repair Lead Handling Architecture',
      content: [
        'Automated Lead Handling for Auto Repair',
        'A system designed for the urgency and volume of garage inquiries:',
      ],
      benefit:
        'When every auto repair inquiry receives an instant response with urgency detection and self-service booking for routine work, you capture revenue that currently drives to the next garage down the road.',
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
