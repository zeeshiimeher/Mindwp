import { CalendarClock, TrendingUp, Users } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'crm-pipeline-setup-guide-for-salons';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Salons depend on repeat clients, yet most have no system for tracking who is rebooking, who is overdue, and who has quietly lapsed. Client relationships are managed through memory, sticky notes, and hope. This guide provides the exact steps to build a CRM pipeline that tracks every salon client from first enquiry through ongoing retention and lapse prevention.',
  problem:
    'Your salon loses clients because there is no system tracking visit frequency, triggering rebooking reminders, or flagging at-risk clients before they leave',
  promise:
    'You will have a step-by-step guide to build a salon CRM pipeline that automates rebooking reminders, flags lapsing clients, and gives your team data on retention by stylist and service type',
};

const takeaways = [
  'Salons with structured CRM pipelines retain twenty to thirty-five percent more clients than those relying on manual rebooking',
  'Personalised rebooking reminders timed to individual visit cycles convert at twice the rate of generic monthly messages',
  'At-risk client detection — flagging clients who exceed their typical interval — prevents lapse before it becomes permanent',
  'Retention data by stylist and service type reveals the patterns that drive long-term client value',
];

const problem = {
  description: [
    'Most salons track bookings but not client relationships. The booking system shows who is coming in today. It does not show who visited six weeks ago and has not rebooked, who enquired on Instagram and never converted, or which stylist has the highest client retention. Without this data, the salon cannot manage retention — it can only react when a client fails to show up.',
    'This gap is expensive. Acquiring a new salon client costs five to seven times more than retaining an existing one. A client who visits every five weeks for two years represents over two thousand pounds in revenue. Losing that client to invisible attrition — because no system flagged the gap — is a significant financial loss that accumulates silently.',
  ],
  causes: [
    'Booking systems track appointments but not client lifecycle stages or visit frequency trends',
    'No central tracking for enquiries across Instagram, website, phone, and walk-in channels',
    'Rebooking depends on receptionist memory during busy check-out moments',
    'No automated follow-up after first visits to encourage second bookings',
    'Lapsing clients are invisible until they have been gone for months',
    'No data on retention rates by stylist, service type, or acquisition channel',
  ],
};

const comparison = {
  before: {
    title: 'Without a Client Pipeline',
    items: [
      'No visibility into which clients are overdue for a visit',
      'Rebooking reminders are generic monthly messages sent to everyone',
      'First-visit clients receive no follow-up to encourage a second booking',
      'At-risk clients are not flagged until they have been gone for months',
      'No retention data by stylist or service type',
      'Client attrition is invisible and discovered only when revenue drops',
    ],
  },
  after: {
    title: 'With a Client Pipeline',
    items: [
      'Dashboard shows overdue clients with days since last visit and expected return date',
      "Rebooking reminders personalised to each client's visit cycle and preferred stylist",
      'First-visit clients receive automated thank-you and rebooking encouragement',
      'At-risk clients flagged the moment they exceed their normal visit interval',
      'Weekly retention reports by stylist, service type, and client segment',
      'Client attrition measured in real time with automated win-back sequences active',
    ],
  },
};

const solutions = [
  {
    title: 'Client Lifecycle Pipeline',
    description:
      'The salon CRM pipeline tracks clients through stages: New Enquiry, First Booking, First Visit Completed, Returning Client, Loyal Client, At-Risk, and Lapsed. Each stage triggers specific actions. First-visit clients get a thank-you and feedback request. Returning clients get cycle-timed rebooking reminders. At-risk clients trigger a stylist notification for personal outreach.',
    icon: Users,
  },
  {
    title: 'Cycle-Timed Rebooking Automation',
    description:
      "Instead of generic monthly reminders, the CRM calculates each client's personal visit cycle — a five-week cut client gets reminded at week four, a six-week colour client at week five. The reminder includes their usual service, preferred stylist availability, and a one-tap booking link. This personalised timing consistently doubles rebooking response rates compared to generic schedules.",
    icon: CalendarClock,
  },
  {
    title: 'Retention Tracking and Reporting',
    description:
      'Weekly reports show retention rate by stylist, by service type, and by client segment. The salon can see which stylists have the highest rebooking rates, which services generate the most long-term value, and which acquisition channels bring clients who stay the longest. This data drives decisions on training, promotion, and marketing investment.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Retention',
      action:
        'Export your booking data for the last twelve months. Identify every client who visited at least twice, then check how many have not visited in the last twelve weeks. Calculate your retention rate: active clients (visited in the last three months) divided by total clients who visited in the past year. Most salons are shocked by this number — typical retention rates without a system are forty to sixty percent.',
      expectedResult:
        'A baseline retention rate and a list of lapsed clients, giving you the data to justify building a structured pipeline.',
    },
    {
      step: 2,
      title: 'Define Client Lifecycle Stages',
      action:
        "Create stages that match your salon's client journey: New Enquiry, First Booking, First Visit Completed, Returning Client (two or more visits), Loyal Client (six or more visits), At-Risk (exceeded visit interval by fifty percent), and Lapsed (no visit in twelve weeks). Assign each stage a colour in the CRM for quick visual identification.",
      expectedResult:
        'A clear pipeline structure where every client is categorised and every stage triggers relevant actions.',
    },
    {
      step: 3,
      title: 'Set Up First-Visit Follow-Up',
      action:
        "Configure an automated sequence triggered after a client's first appointment: a thank-you message sent two hours after checkout, a feedback request at twenty-four hours, and a rebooking reminder at the optimal time for their service type. First-visit to second-visit conversion is the most important metric for long-term retention.",
      expectedResult:
        'Every first-visit client receives consistent follow-up that encourages a second booking — the critical step in building a repeat relationship.',
    },
    {
      step: 4,
      title: 'Configure Cycle-Timed Rebooking Reminders',
      action:
        "For each service type, set the expected visit cycle — cuts every four to six weeks, colour every six to eight weeks, treatments every eight to twelve weeks. Configure the CRM to send a personalised rebooking reminder one week before each client's expected return date based on their personal history. Include their preferred stylist, usual service, and a direct booking link.",
      expectedResult:
        'Personalised rebooking reminders that reach clients at the right time, replacing generic messages with relevant outreach.',
    },
    {
      step: 5,
      title: 'Activate At-Risk Detection and Win-Back',
      action:
        'Set up at-risk flagging: when a client exceeds their typical visit interval by fifty percent, move them to the At-Risk stage and notify their stylist. If no rebooking occurs within two weeks, start a win-back sequence: a personal message from the stylist, followed by a rebooking incentive. Track how many at-risk clients are recovered versus how many lapse permanently.',
      expectedResult:
        'Early warning for client attrition with automated follow-up, recovering clients before they leave permanently.',
    },
  ],
};

const caseExample = {
  businessType: 'Hair Salon (Bristol, 5 stylists)',
  problem:
    'A five-stylist salon had four hundred clients in their booking system but only two hundred and twenty had visited in the last three months — a fifty-five percent retention rate. The salon had no rebooking system beyond the receptionist asking at checkout. During busy Saturdays, rebooking conversations were skipped entirely. First-visit to second-visit conversion was estimated at forty percent. Instagram enquiries were answered by whoever noticed them, with no tracking of conversion.',
  solution:
    'We built a CRM pipeline with client lifecycle stages, configured cycle-timed rebooking reminders for each service type, set up first-visit follow-up automation, activated at-risk detection with stylist notifications, and centralised all enquiry channels. The receptionist was freed from manual follow-up tasks.',
  result:
    'First-visit to second-visit conversion improved from forty percent to sixty-two percent within six weeks. Overall retention rate increased from fifty-five percent to seventy-one percent over three months. The automated rebooking reminders generated an average of thirty-five additional bookings per month. At-risk detection recovered eighteen lapsing clients in the first month who would otherwise have been lost without notice.',
  stat: '29% improvement in client retention rate after implementing CRM pipeline tracking and automated rebooking',
};

const faqs = [
  {
    question: 'Does this replace our existing booking system?',
    answer:
      'No. The CRM pipeline works alongside your booking system. Your booking system handles appointment scheduling. The CRM pipeline handles everything around the booking: tracking client lifecycle stage, triggering follow-up, flagging at-risk clients, and reporting retention metrics. Many CRM tools integrate directly with popular salon booking systems.',
  },
  {
    question: 'Will clients find automated messages from a salon impersonal?',
    answer:
      'Not when they reference the specific service, preferred stylist, and personal visit history. An automated message saying "Hi Sarah, your stylist Emma has availability next Thursday for your usual colour appointment" feels personal because it uses real data. It is more personal than silence followed by a generic promotional blast.',
  },
  {
    question: 'How quickly will we see results?',
    answer:
      'First-visit follow-up automation shows results within two to three weeks as new clients begin receiving rebooking encouragement. At-risk detection begins flagging clients immediately based on historical data. Full retention improvement typically becomes visible after two to three months as cycle-timed reminders take effect across the client base.',
  },
];

const finalCta = {
  title: 'Build Your Salon Client Retention Pipeline',
  description:
    'Our CRM Automation services build the complete salon pipeline — client lifecycle stages, cycle-timed rebooking, at-risk detection, and retention reporting — so your salon keeps more clients and grows recurring revenue.',
};

export const crmPipelineSetupGuideForSalons: ResourceData = {
  slug,
  title: 'CRM Pipeline Setup Guide for Salons',
  description:
    'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
  intent: 'ACTIONABLE',
  category: 'crm-automation',
  publishedAt: '2026-04-06',
  systems: ['crm-automation'],
  industries: ['salon'],
  topics: ['crm-pipeline'],
  primaryService: 'crm-automation',
  seo: {
    title: 'CRM Pipeline Setup Guide for Salons',
    description:
      'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'CRM Pipeline Setup Guide for Salons',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Salons Lose Clients Without a Pipeline',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Client Attrition in Salons:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The retention facts every salon needs to understand:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Pipeline Implementation',
      content: [
        'The operational difference when salon client relationships are tracked systematically:',
      ],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon Retention Architecture',
      content: [
        'Retention Through Structure',
        'An effective salon CRM pipeline combines lifecycle tracking, personalised reminders, and retention analytics:',
      ],
      benefit:
        'When every client relationship is tracked and nurtured automatically, your stylists focus on their craft while the system ensures no client is forgotten.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ["How a CRM pipeline transformed a salon's retention:"],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The Salon CRM Pipeline Setup Checklist',
      content: ['Follow these steps to build your retention pipeline:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about CRM pipelines for salons:'],
      items: faqs,
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
