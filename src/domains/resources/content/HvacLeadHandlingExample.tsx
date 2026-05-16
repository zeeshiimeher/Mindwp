import { Clock, PhoneIncoming, Zap } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'hvac-lead-handling-example';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'HVAC leads are among the most time-sensitive in home services. When a heating system fails in winter or air conditioning breaks in summer, homeowners call the first company they find — and hire whoever answers. The HVAC company that responds in minutes wins the job. The one that calls back hours later finds the customer already booked. Automated lead handling ensures every HVAC inquiry gets an immediate, professional response.',
  problem:
    'Your HVAC company misses leads during peak season because your team is on jobs, leaving voicemails and online inquiries unanswered for hours while homeowners call your competitors',
  promise:
    'You will see how HVAC companies implement automated lead handling that responds to every inquiry within minutes, qualifies urgency automatically, and routes emergency calls to the right technician — even during the busiest seasons',
};

const takeaways = [
  'HVAC leads have the shortest viable response window of any home service — minutes, not hours',
  'Seasonal demand spikes (heatwaves, cold snaps) create lead surges that overwhelm manual processes',
  'Urgency qualification (no heat in winter vs. routine maintenance) should determine routing priority',
  'After-hours HVAC calls represent premium-rate emergency work that most companies lose to voicemail',
];

const problem = {
  description: [
    'HVAC is uniquely seasonal and urgency-driven. A homeowner whose boiler fails on a January evening is not comparison shopping — they are calling companies until someone answers. The winner is not the cheapest or the best-rated; it is the first to pick up. During peak demand periods, HVAC companies receive 3-5x their normal lead volume, and teams are fully deployed on jobs.',
    'This creates a paradox: the busiest, most profitable times are exactly when lead handling is worst. Technicians cannot answer phones from a crawl space. Office staff are overwhelmed. Online form submissions sit unread. Each missed or delayed response is a lost job worth £200-2,000+ depending on the service required. Over a peak season, this easily totals tens of thousands in lost revenue.',
  ],
  causes: [
    'Technicians on jobs cannot answer phones or respond to inquiries',
    'Seasonal demand spikes overwhelm office staff capacity',
    'No system to distinguish emergency calls from routine maintenance requests',
    'After-hours calls go to voicemail while competitors answer',
    'Online form submissions not checked during busy periods',
    'No automated response to acknowledge inquiries and set expectations',
  ],
};

const caseExample = {
  businessType: 'HVAC Company (Birmingham area)',
  problem:
    'An HVAC company with 6 technicians handled leads well in spring and autumn but lost control during peak seasons. During a February cold snap, they received 45 leads in one week — double their normal volume. With all technicians on emergency calls and one office administrator, 18 leads received no response within 4 hours. Post-season analysis showed 12 of those converted with competitors. At an average emergency call value of £350, that was £4,200 lost in a single week.',
  solution:
    'We implemented automated lead handling: every phone call, web form, and message received an instant acknowledgement. AI qualification assessed urgency (emergency vs. routine vs. maintenance contract). Emergency calls were routed to the on-call technician immediately. Routine requests received a booking link for the next available slot. After-hours calls received an automated response with emergency options and next-day booking.',
  result:
    'Response time dropped from an average of 2.3 hours to under 3 minutes. During the next peak season (similar call volume), zero leads went unresponded. Emergency job capture increased 34%. After-hours bookings — previously zero — accounted for 15% of weekly revenue. Annual revenue increased by an estimated £38,000 from recovered leads alone.',
  stat: 'Response time reduced from 2.3 hours to under 3 minutes with 34% more emergency jobs captured',
};

const solutions = [
  {
    title: 'Instant Lead Acknowledgement',
    description:
      'Every HVAC inquiry — phone, web form, Google Business message — receives an immediate automated response. For phone calls: "Thanks for calling [Company]. We have received your request and a team member will contact you within 15 minutes. If this is an emergency with no heat/cooling, press 1 for priority dispatch." For web forms: instant SMS confirmation with expected callback time.',
    icon: PhoneIncoming,
  },
  {
    title: 'Urgency-Based Routing',
    description:
      'Not all HVAC calls are equal. An automated qualification system categorises leads: Emergency (no heat in winter, no cooling in extreme heat, gas smell) → immediate dispatch to on-call technician. Urgent (reduced function, unusual noise) → same-day callback priority. Routine (maintenance, filter changes, efficiency concerns) → next available booking slot. This ensures emergency revenue is never lost to a queue.',
    icon: Zap,
  },
  {
    title: 'Peak Season Capacity Management',
    description:
      'During seasonal surges, the system adapts: increased automation handles higher volume without additional staff. When appointment slots fill, customers are offered waitlist positions with automated updates. Overflow leads receive honest timeframe estimates rather than silence. This transparency retains customers who would otherwise call competitors — they would rather wait with a confirmed time than start searching again.',
    icon: Clock,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Set Up Instant Acknowledgements',
      action:
        'Configure your phone system and web forms to send immediate automated responses. For missed calls: auto-SMS within 60 seconds saying "We received your call and will ring back within 15 minutes." For web forms: instant email/SMS confirmation. For Google Business messages: auto-reply enabled. The goal is that no HVAC inquiry waits more than 1 minute for acknowledgement.',
      expectedResult:
        'Every lead source has an instant automated acknowledgement that confirms receipt and sets a callback expectation.',
    },
    {
      step: 2,
      title: 'Create Urgency Qualification',
      action:
        'Build a simple qualification flow. For phone: IVR option "Press 1 for emergency, 2 for routine service." For web forms: add a field "Is this an emergency?" with options: No heat/cooling (emergency), Reduced performance (urgent), General inquiry (routine). Route emergencies to the on-call technician mobile directly. Route urgent to same-day callback list. Route routine to next-available booking.',
      expectedResult:
        'Leads are automatically categorised by urgency and routed to the appropriate response path without manual sorting.',
    },
    {
      step: 3,
      title: 'Build After-Hours Handling',
      action:
        'Set up after-hours call routing: Emergency calls → forward to on-call technician with premium rate notification. Non-emergency calls → automated message with next-day booking link. Track after-hours lead volume for one month to understand the revenue opportunity. Many HVAC companies discover 20-30% of their calls come outside business hours.',
      expectedResult:
        'After-hours emergency calls reach a technician, and non-emergency callers can self-book for the next day instead of calling a competitor.',
    },
  ],
};

const finalCta = {
  title: 'Automate Lead Handling for Your HVAC Business',
  description:
    'Our Lead Response & Handling systems ensure every HVAC inquiry gets an instant response, emergency calls reach technicians immediately, and no lead is lost during peak season — even after hours.',
};

export const hvacLeadHandlingExample: ResourceData = {
  slug,
  seo: {
    title: 'HVAC Lead Handling Example',
    description:
      'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
    canonical,
  },
  title: 'HVAC Lead Handling Example',
  description:
    'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
  category: 'lead-response',
  publishedAt: '2026-01-17',
  primarySystem: 'lead-response-handling',
  industries: ['hvac'],
  topics: ['lead-management'],
  primaryService: 'lead-response-handling',
  sections: [
    {
      type: 'hero',
      heading: 'HVAC Lead Handling Example',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for HVAC lead handling:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why HVAC Companies Lose Their Most Valuable Leads',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common HVAC Lead Handling Failures:',
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ['How automated lead handling transformed peak season performance:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up HVAC Lead Handling',
      content: ['Steps specific to HVAC businesses:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC Lead Handling Architecture',
      content: [
        'Automated Lead Handling for HVAC Companies',
        'A lead handling system designed for HVAC urgency and seasonality:',
      ],
      benefit:
        'When every HVAC inquiry receives an instant response with urgency-based routing, you capture emergency revenue, survive peak season surges, and never lose a job to a voicemail again.',
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
