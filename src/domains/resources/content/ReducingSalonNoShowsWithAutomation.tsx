import { CalendarX, MessageSquare, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'reducing-salon-no-shows-with-automation';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'No-shows cost salons thousands in lost revenue every month. An empty chair during a busy day cannot be recovered — that revenue is gone permanently. Automated no-show reduction uses confirmation reminders, deposit systems, and waitlist management to dramatically reduce missed appointments while maintaining the personal, welcoming client experience that defines great salons.',
  problem:
    'Your salon loses 8-15% of booked appointments to no-shows and last-minute cancellations, leaving chairs empty during peak hours when you could have filled them with other clients',
  promise:
    'You will see how salons use automated reminders, confirmation workflows, and waitlist systems to cut no-show rates by 60-80%, recovering thousands in monthly revenue from empty chairs',
};

const takeaways = [
  'The average salon no-show rate of 10-15% translates to 1-2 lost appointments per stylist per week',
  'Two-stage confirmation (48 hours + 2 hours before) reduces no-shows more effectively than a single reminder',
  'Unconfirmed appointments opened to a waitlist recover 40-60% of the potential lost revenue',
  'Deposit requirements for new clients and high-value services reduce no-shows without alienating loyal clients',
];

const problem = {
  description: [
    'A salon chair represents fixed-cost capacity: rent, utilities, and stylist wages are paid whether the chair is occupied or not. When a client does not show up, the salon absorbs the full cost of that time slot with zero revenue. For a stylist charging £60/hour, a single no-show costs £60. At 2 no-shows per stylist per week across 6 stylists, that is £720/week — over £37,000 per year in lost revenue.',
    'The problem is amplified by the ripple effect. The empty slot could have been filled by another client if the salon had known in advance. Last-minute cancellations (within 2 hours) are nearly impossible to fill. And the most frustrating part: many no-shows are not malicious — clients simply forgot. Their intention was to come, but without a reminder system, life got in the way. This is a solvable problem with automation.',
  ],
  causes: [
    'No automated appointment reminders sent to clients',
    'Reminders sent too early (48+ hours) without a same-day follow-up',
    'No confirmation requirement — bookings assumed to be confirmed',
    'No waitlist system to fill cancelled slots',
    'Same policy for all clients regardless of no-show risk',
    'No deposit or cancellation fee structure for high-value bookings',
  ],
};

const caseExample = {
  businessType: 'Hair Salon (Glasgow, 7 stylists)',
  problem:
    'A 7-stylist salon tracked a 14% no-show rate over 3 months — approximately 45 no-shows per month. At an average appointment value of £58, that represented £2,610 per month in lost revenue. The salon sent manual text reminders inconsistently (the receptionist remembered for about half of appointments). Even with reminders, clients would confirm and then not show up. Walk-ins could not fill the gaps because they did not arrive at the right times.',
  solution:
    'We implemented a three-layer no-show reduction system. Layer 1: Automated reminders at 48 hours and 2 hours before, with one-tap confirmation. Layer 2: Unconfirmed appointments at 24 hours were flagged and opened to the waitlist. Waitlisted clients received an instant "An opening just became available" text. Layer 3: New clients and services over £100 required a 20% deposit at booking. Repeat no-show clients (2+ in 6 months) were moved to deposit-required status.',
  result:
    'No-show rate dropped from 14% to 3.5% within 2 months. Monthly no-shows decreased from 45 to approximately 11. The waitlist filled 65% of cancelled slots that would have remained empty. Deposit requirements eliminated new client no-shows almost entirely. Monthly recovered revenue: approximately £1,900. The salon also noticed fewer late arrivals — the 2-hour reminder acted as a departure prompt. Client satisfaction was unaffected; surveys showed clients appreciated the reminders.',
  stat: 'No-show rate reduced from 14% to 3.5%, recovering approximately £1,900/month in previously lost revenue',
};

const solutions = [
  {
    title: 'Two-Stage Confirmation Reminders',
    description:
      'A two-step reminder system: 48 hours before — SMS with appointment details and one-tap confirm/reschedule options. 2 hours before — final reminder for confirmed clients, escalation for unconfirmed. This two-stage approach catches forgetful clients early (at 48 hours, there is time to reschedule or fill the slot) and provides a final nudge on the day. Confirmation is tracked — unconfirmed appointments are flagged for action.',
    icon: MessageSquare,
  },
  {
    title: 'Automated Waitlist Management',
    description:
      'When a client cancels or does not confirm, the system automatically notifies waitlisted clients: "Great news! A [duration] slot just opened at [time] with [stylist]. Book instantly: [link]." The waitlist is prioritised by booking preference match (stylist, service type, time preference). This turns cancellations from pure loss into filled appointments — recovering 40-60% of would-be empty slots.',
    icon: CalendarX,
  },
  {
    title: 'Risk-Based Deposit System',
    description:
      'Not all bookings carry equal no-show risk. New clients, high-value services (colour, extensions, bridal), and clients with a no-show history are flagged for deposit requirements. The deposit (typically 20-30% of service value) is taken at booking and applied to the final bill. This eliminates casual bookings without commitment. Loyal, punctual clients are not affected — preserving the relationship while protecting revenue.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Measure Your Current No-Show Rate',
      action:
        'Track no-shows and late cancellations (less than 24 hours notice) for 4 weeks. Record: date, stylist, service booked, appointment value, and whether a reminder was sent. Calculate your no-show rate (no-shows / total appointments) and the total revenue impact. This baseline proves the cost of inaction and measures improvement after implementing your system.',
      expectedResult:
        'A clear no-show rate percentage and monthly revenue impact figure that establishes your baseline and business case.',
    },
    {
      step: 2,
      title: 'Set Up Two-Stage Automated Reminders',
      action:
        'Configure your booking system to send automated reminders. 48 hours before: "Hi [Name], reminder of your [service] with [Stylist] on [date] at [time]. Reply YES to confirm or CHANGE to reschedule." 2 hours before (confirmed clients only): "See you at [time] today! If anything has changed, let us know: [phone]." Track confirmation rates — aim for 85%+ confirmations at the 48-hour mark.',
      expectedResult:
        'Automated two-stage reminders that give clients time to confirm, reschedule, or cancel with enough notice to fill the slot.',
    },
    {
      step: 3,
      title: 'Build a Waitlist and Deposit Policy',
      action:
        'Enable waitlist functionality in your booking system. When a client cancels, automatically notify the first matched waitlist client via text with a booking link. For deposits: start with new clients only — require 20% at booking for services over £50. Expand to repeat no-show clients after the system is established. Communicate the policy clearly at booking: "A small deposit secures your appointment and is applied to your final bill."',
      expectedResult:
        'A waitlist that automatically fills cancelled slots and a deposit policy that eliminates the highest-risk no-shows.',
    },
  ],
};

const finalCta = {
  title: 'Reduce No-Shows for Your Salon',
  description:
    'Our CRM and AI Lead Handling systems automate appointment confirmations, manage waitlists, and implement deposit policies — cutting no-show rates by 60-80% and recovering thousands in monthly revenue.',
};

export const reducingSalonNoShowsWithAutomation: ResourceData = {
  slug,
  title: 'Reducing Salon No-Shows with Automation',
  description:
    'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
  category: 'crm-automation',
  publishedAt: '2026-02-25',
  systems: ['crm-automation', 'ai-lead-handling'],
  industries: ['salon'],
  topics: ['no-show-reduction'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Reducing Salon No-Shows with Automation',
    description:
      'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Reducing Salon No-Shows with Automation',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for salon no-show reduction:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why No-Shows Cost Salons More Than They Realise',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Salon No-Show Causes:',
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ['How automated no-show reduction recovered significant revenue:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Salon No-Show Reduction',
      content: ['Steps specific to reducing salon no-shows:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon No-Show Reduction Architecture',
      content: [
        'Automated No-Show Prevention for Salons',
        'A system that reduces empty chairs without alienating clients:',
      ],
      benefit:
        'When automated reminders, waitlist management, and risk-based deposits work together, your salon fills chairs that would otherwise sit empty — recovering revenue without compromising client experience.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
  ],
};
