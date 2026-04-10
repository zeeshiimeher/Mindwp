import { Clock, PhoneCall, Zap } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'roofing-lead-handling-example';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Roofing leads are among the most time-sensitive in the service industry. Storm damage enquiries, emergency leak calls, and competitive quote requests all have a narrow response window — often under 30 minutes. This guide examines how roofing companies can implement AI-assisted lead handling systems that respond immediately, qualify automatically, and route high-value jobs to the right team member.',
  problem:
    'Your roofing company loses leads to faster competitors because your team cannot answer every call or respond to every form submission within the critical first minutes',
  promise:
    'You will see how roofing companies implement lead handling systems that respond to every enquiry within minutes, qualify leads by job type and urgency, and route them to the right team member automatically',
};

const takeaways = [
  'Roofing leads have a narrower response window than most service industries — minutes, not hours',
  'Storm damage and emergency leads require immediate routing to available team members',
  'Qualification by job type (repair, replacement, inspection) determines the correct response path',
  'Automated instant acknowledgement keeps the lead warm while your team prepares the full response',
];

const problem = {
  description: [
    'A homeowner with a leaking roof calls three roofers. The first one to answer gets the job 70% of the time. During storm seasons, call volume spikes unpredictably. Roofers are on roofs — they physically cannot answer phones. The office may be handling 5 calls simultaneously. Each missed or slow response is a job that goes to the competitor who answered first.',
    'Beyond emergency work, competitive quotes for larger projects (re-roofing, new build) are also time-sensitive. Homeowners requesting quotes from multiple companies tend to go with the first professional response they receive. A 24-hour delay in getting back to a quote request often means the customer has already committed elsewhere.',
  ],
  causes: [
    'Team on job sites unable to answer phones during working hours',
    'Storm season creates unpredictable call volume spikes',
    'No automated response for website form submissions',
    'All leads treated the same regardless of urgency or job size',
    'Quote requests not followed up within the critical first hour',
    'After-hours emergency calls going to voicemail',
  ],
};

const caseExample = {
  businessType: 'Roofing Contractor (West Midlands)',
  problem:
    'A 12-person roofing company received 35 leads per week during peak season. The office manager handled calls, but during busy periods 30% went to voicemail. Website form responses averaged 4 hours. Emergency storm damage calls after hours went entirely unanswered until the next morning. Estimated monthly revenue loss from slow response: £15,000-20,000.',
  solution:
    'We implemented an AI lead handling system: instant SMS acknowledgement for all web forms, automated qualification by job type (emergency, repair, quote, inspection), emergency leads routed immediately to the on-call roofer via call forwarding, quote requests sent an automated response with availability and next steps, and after-hours emergency calls handled with immediate automated triaging.',
  result:
    'Response time for web forms dropped from 4 hours to under 2 minutes. Emergency leads reached the on-call team within 60 seconds. Voicemail rate dropped from 30% to 5%. Monthly lead-to-appointment conversion improved from 45% to 68%. Estimated recovered revenue: £18,000/month during peak season.',
  stat: 'Lead-to-appointment conversion improved from 45% to 68% with automated lead handling',
};

const solutions = [
  {
    title: 'Instant Lead Acknowledgement',
    description:
      'Every web form submission, missed call, and after-hours enquiry receives an immediate automated response: "Thanks for contacting [Business]. We have received your message about [job type]. A team member will call you within [timeframe]." This keeps the lead warm and signals professionalism. For emergency requests, the message includes the emergency number.',
    icon: Zap,
  },
  {
    title: 'Job-Type Qualification and Routing',
    description:
      'Leads are automatically classified by job type: emergency leak/storm damage (route immediately to on-call), repair quote (route to estimator within 1 hour), full replacement/re-roof (route to senior estimator with priority), and inspection requests (schedule into next available slot). Each type has different urgency levels and routing rules.',
    icon: PhoneCall,
  },
  {
    title: 'Storm Season Surge Handling',
    description:
      'During storm events, lead volume can increase 300-500% in hours. Surge handling activates: expanded auto-response with realistic timeframes, queue management that prioritises by damage severity, overflow routing to additional team members, and automated scheduling for non-emergency assessments. The system scales automatically while maintaining response quality.',
    icon: Clock,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Set Up Instant Form Response',
      action:
        'Configure your website contact form to send an immediate auto-reply SMS and email when submitted. Include: confirmation of receipt, the job type they selected, expected response time, and your emergency number if urgent. Most form platforms support this with basic automation — no advanced CRM required.',
      expectedResult:
        'Every web enquiry receives a professional response within seconds, keeping leads warm until your team can respond personally.',
    },
    {
      step: 2,
      title: 'Create Job-Type Routing Rules',
      action:
        'In your CRM or call management system, create routing rules: emergency calls → forward to on-call mobile. Quote requests → notify estimator via SMS with customer details. Inspection requests → send automated booking link. After-hours → auto-reply with next-day callback commitment plus emergency number.',
      expectedResult:
        'Leads automatically routed to the right person based on job type, with appropriate urgency.',
    },
    {
      step: 3,
      title: 'Implement Missed Call Recovery',
      action:
        'Set up an automated SMS that fires within 60 seconds of any missed call: "Sorry we missed your call. We are currently on a job. Can you briefly describe what you need and we will call you back within [timeframe]?" Include a link to your contact form for details. This recovers leads that would otherwise call your competitor.',
      expectedResult: 'Missed calls converted into active leads instead of lost to competitors.',
    },
  ],
};

const finalCta = {
  title: 'Handle Every Roofing Lead Before Your Competitors Do',
  description:
    'Our AI Lead Handling systems ensure every roofing enquiry — emergency or planned — receives an instant response, gets qualified automatically, and reaches the right team member within minutes.',
};

export const roofingLeadHandlingExample: ResourceData = {
  slug,
  title: 'Roofing Lead Handling Example',
  description:
    'See how roofing companies implement AI-assisted lead handling systems that respond instantly, qualify by job type, and route emergency and quote leads to the right team members.',
  category: 'ai-lead-handling',
  publishedAt: '2026-01-19',
  systems: ['ai-lead-handling'],
  industries: ['roofing'],
  topics: ['lead-management'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Roofing Lead Handling Example',
    description:
      'See how roofing companies implement AI-assisted lead handling systems that respond instantly, qualify by job type, and route emergency and quote leads to the right team members.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Roofing Lead Handling Example',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons from roofing lead handling:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Roofing Companies Lose Leads to Slower Competitors',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Roofing Lead Handling Gaps:',
    },
    {
      type: 'case',
      heading: 'Real-World Roofing Example',
      content: ['How a roofing contractor transformed lead handling during peak season:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Implement Roofing Lead Handling',
      content: ['Steps specific to roofing businesses:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Roofing Lead System Architecture',
      content: [
        'Speed and Qualification for Roofing',
        'A lead handling system designed for the unique demands of roofing businesses:',
      ],
      benefit:
        'When every roofing lead receives an instant response and is routed by urgency and job type, your team handles more leads with less effort while competitors are still checking voicemail.',
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
