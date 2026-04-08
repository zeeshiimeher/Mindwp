import { Calendar, TrendingUp, Wrench } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'automotive-service-reminder-automation';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Vehicles need regular maintenance — annual services, MOTs, tyre changes, brake checks. Most garages rely on customers remembering when their service is due or when their MOT expires. But customers forget. They drive past the date, book with whoever appears first in a Google search, or simply neglect the maintenance until something breaks. Automated service reminders based on CRM vehicle data bring customers back proactively — turning your existing customer database into a predictable, zero-acquisition-cost revenue stream.',
  problem:
    'Your garage has thousands of customer records but most previous customers never return because they forget about scheduled maintenance, and you have no system to remind them',
  promise:
    'You will see how auto repair shops implement automated service reminders using CRM vehicle data — MOT reminders before expiry, service interval alerts, and seasonal campaigns — that reactivate existing customers and generate predictable recurring revenue without spending on new customer acquisition',
};

const takeaways = [
  'MOT reminders sent 28 days before expiry convert at 40-45% because the customer needs the work done and you are making it easy to book',
  'Service reminders at 11 months (not 12) catch customers before they forget or book elsewhere',
  'Seasonal campaigns (winter checks, AC re-gas) create additional revenue touchpoints beyond mandatory maintenance',
  'Every reactivated customer represents zero-acquisition-cost revenue — dramatically more profitable than new customer marketing',
];

const problem = {
  description: [
    'The average independent garage has 1,500-3,000 customer records accumulated over years of trading. These records contain vehicle details, service history, and MOT dates — but most garages do nothing with this data. The result is predictable: only 30-40% of previous customers return annually. The rest forget, move to a more convenient garage, or simply never think about maintenance until a warning light appears.',
    'This represents an enormous revenue leak. A customer who had their car serviced last year is the easiest, most profitable type of customer to win. They already trust you, they know where you are, and their vehicle needs attention. The only reason they are not booking is that nobody reminded them. Meanwhile, the garage spends money on Google Ads and leaflets trying to attract brand-new customers — who are far more expensive to convert and less likely to become loyal.',
  ],
  causes: [
    'Customer records stored but never used for proactive outreach',
    'No automated system to track MOT due dates across the customer base',
    'Service intervals tracked manually or not at all',
    'Seasonal maintenance opportunities missed entirely',
    'Reliance on customers remembering to book their own maintenance',
    'Marketing budget spent on new customer acquisition instead of retention',
  ],
};

const caseExample = {
  businessType: 'Independent Garage (Midlands, 4 mechanics)',
  problem:
    'An independent garage with 2,400 customer records was seeing only 35% of previous customers return annually. The owner had attempted manual reminder calls but abandoned the effort after two weeks — it was too time-consuming and inconsistent. MOT reminders were sent sporadically when the receptionist remembered. There was no system for service interval tracking or seasonal campaigns. The garage was spending £1,200/month on Google Ads for new customers while sitting on a database of 2,400 people who already trusted them.',
  solution:
    'We built an automated reminder system using the garage CRM. MOT reminders were sent 28 days before expiry via SMS with an online booking link. Service reminders were triggered at 11 months from the last service date. Seasonal campaigns were scheduled: winter health checks in October, AC re-gas in April, pre-holiday checks in June. Each message included one-tap booking and the customer vehicle details to show personalisation. Customers who did not respond to the first message received a follow-up 7 days later.',
  result:
    'Customer return rate increased from 35% to 58% within 6 months. MOT reminders converted at 42% — the highest of any message type. Service reminders converted at 28%. Seasonal campaigns generated an additional 15-20 bookings per campaign. Total reactivated revenue averaged £4,200 per month. The garage reduced Google Ads spend by 40% while increasing total revenue, because reactivated customers were dramatically cheaper to convert than new ones. Customer lifetime value increased as return frequency improved.',
  stat: 'Customer return rate increased from 35% to 58%, generating £4,200/month in reactivated revenue with 42% MOT reminder conversion',
};

const solutions = [
  {
    title: 'MOT Due Date Reminders',
    description:
      'MOT reminders are the highest-converting automated message for any garage. The MOT is a legal requirement with a fixed deadline — customers cannot ignore it indefinitely. By sending a reminder 28 days before expiry, you reach customers at the exact moment the task becomes urgent but before they have booked elsewhere. The message includes the vehicle registration, MOT expiry date, and a one-tap booking link. A follow-up 7 days later catches those who intended to book but forgot.',
    icon: Calendar,
  },
  {
    title: 'Service Interval Tracking',
    description:
      'Unlike MOTs, service intervals are not legally mandated — which means customers are more likely to delay or skip them entirely. Automated service reminders at 11 months from the last service (not 12) reach customers before the anniversary passes and they forget. The reminder includes the last service date, current estimated mileage, and recommended service type. For customers with warranty requirements, the message emphasises maintaining the service schedule to protect their warranty.',
    icon: Wrench,
  },
  {
    title: 'Seasonal Campaign Automation',
    description:
      'Beyond mandatory maintenance, vehicles have seasonal needs that create natural booking opportunities. Winter health checks (October–November) cover battery, coolant, tyres, and lights. AC re-gas campaigns run in April–May before summer. Pre-holiday vehicle checks target June–July. Each campaign is automated: the CRM selects eligible customers (those who have not had the relevant service recently), sends the campaign message, and tracks bookings. These campaigns generate incremental revenue from customers who would not otherwise have visited.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Build Your Vehicle Database with MOT Dates and Service History',
      action:
        'Start with your existing customer records. For each customer, you need: name, phone number, vehicle registration, last service date, and MOT expiry date. MOT expiry dates can be looked up free via the DVSA MOT history service using vehicle registration numbers. If your records are incomplete, capture this information at every customer interaction going forward. Even starting with your 100 most recent customers is enough to prove the system works before expanding to the full database.',
      expectedResult:
        'A structured database of customers with vehicle details, MOT expiry dates, and service history — the foundation for all automated reminders.',
    },
    {
      step: 2,
      title: 'Set Up Automated MOT Reminders 28 Days Before Expiry',
      action:
        'Configure your first automation: an SMS sent 28 days before each customer\'s MOT expiry date. The message should include their vehicle registration, the expiry date, and a booking link or phone number. Example: "Hi [Name], your [Vehicle] MOT expires on [Date]. Book your MOT at [Garage]: [Booking Link]. We have slots available this week." Set a follow-up reminder 7 days later for customers who have not booked. Track the conversion rate from the first month to establish your baseline.',
      expectedResult:
        'Automated MOT reminders running consistently, with expected conversion rates of 35-45% and immediate revenue from customers who would otherwise have booked elsewhere.',
    },
    {
      step: 3,
      title: 'Add Service Interval and Seasonal Reminders',
      action:
        'Once MOT reminders are working, add two more automation layers. First, service reminders: trigger at 11 months from the last service with a message about maintaining vehicle health and warranty compliance. Second, seasonal campaigns: schedule winter checks (October), AC campaigns (April), and pre-holiday checks (June). Each campaign targets customers who have not had the relevant work done recently. Start with one seasonal campaign to test response rates before deploying the full calendar.',
      expectedResult:
        'A complete automated reminder calendar covering MOTs, routine services, and seasonal campaigns — generating multiple revenue touchpoints per customer per year at zero acquisition cost.',
    },
  ],
};

const finalCta = {
  title: 'Automate Service Reminders for Your Garage',
  description:
    'Our CRM and automation systems turn your existing customer database into a predictable revenue stream — with MOT reminders, service interval tracking, and seasonal campaigns that bring customers back without spending on new acquisition.',
};

export const automotiveServiceReminderAutomation: ResourceData = {
  slug,
  title: 'Automotive Service Reminder Automation Framework',
  description:
    'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
  category: 'crm-automation',
  publishedAt: '2026-02-23',
  systems: ['crm-automation'],
  industries: ['automotive'],
  topics: ['service-reminders'],
  primaryService: 'crm-automation',
  seo: {
    title: 'Automotive Service Reminder Automation Framework',
    description:
      'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Automotive Service Reminder Automation',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for automotive service reminder automation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Garages Lose Revenue from Customers Who Already Trust Them',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Service Reminder Failures in Auto Repair:',
    },
    {
      type: 'case',
      heading: 'Real-World Service Reminder Example',
      content: ['How automated reminders reactivated a garage customer base:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Service Reminders for Your Garage',
      content: ['Steps specific to automotive service reminder automation:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Automotive Service Reminder Architecture',
      content: [
        'Automated Service Reminders for Auto Repair',
        'A system that turns your customer database into predictable recurring revenue:',
      ],
      benefit:
        'When your CRM automatically reminds customers about MOTs, services, and seasonal maintenance at the right time, you convert existing relationships into recurring revenue without spending on new customer acquisition.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/crm-infrastructure-implementation',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('crm-automation'),
      content: getRelatedResourcesContent('crm-automation'),
      resources: getRelatedResources('crm-automation', canonical),
    },
  ],
};
