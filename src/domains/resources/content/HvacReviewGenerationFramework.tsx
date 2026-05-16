import { BarChart3, MessageSquare, Star } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'hvac-review-generation-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'HVAC service is invisible when it works — homeowners only notice heating and cooling when it fails. This makes reviews critically important: they are the only way potential customers can evaluate your quality before hiring. An HVAC review generation framework automates review collection after every service, maintenance visit, and installation, building the social proof that drives local rankings and customer trust.',
  problem:
    'Your HVAC company does quality work but your review profile is thin because technicians forget to ask and customers do not think to review a service they cannot see',
  promise:
    'You will see how HVAC companies implement automated review generation that collects feedback after every job type — from routine maintenance to emergency repairs — building a review profile that leads in local search results',
};

const takeaways = [
  'HVAC review timing varies by job type: emergency repairs within 4 hours, installations at 1 week, maintenance at 24 hours',
  'Reviews mentioning specific HVAC services improve local search relevance for those service queries',
  'Maintenance contract customers provide steady year-round reviews that smooth out seasonal review patterns',
  'Emergency repair reviews are the most emotionally compelling and highest-converting social proof',
];

const problem = {
  description: [
    'HVAC work has a unique review challenge: when the system works, it is invisible. No one thinks about their heating until it breaks. This means customers rarely think to leave a review for successful maintenance or a well-running system. They also cannot take impressive photos of internal ductwork or a properly calibrated furnace. Without active review generation, HVAC companies rely on the small percentage of customers who spontaneously review.',
    'The result is that HVAC companies with excellent service records often have mediocre review profiles. A company completing 50+ jobs per month might get 2-3 organic reviews. Meanwhile, competitors using automated review systems collect 10-15 per month and steadily build the review volume and freshness that Google rewards with higher local rankings.',
  ],
  causes: [
    'Technicians focus on the next job rather than asking for reviews',
    'Customers do not think to review invisible services like heating maintenance',
    'No automated review request tied to job completion in the CRM',
    'Same review approach used for all job types regardless of timing needs',
    'No method to capture reviews from maintenance contract customers',
    'Seasonal work creates feast-or-famine review patterns',
  ],
};

const caseExample = {
  businessType: 'HVAC Service Company (West Midlands)',
  problem:
    'An established HVAC company with 8 technicians completed over 600 jobs per year but had only 87 Google reviews — accumulated over 5 years. Their primary competitor, a newer company, had 210 reviews. Despite the older company having better trained technicians and higher customer satisfaction (CSAT surveys showed 4.7/5), the competitor ranked higher in local search and won more comparison shoppers.',
  solution:
    'We implemented job-type-specific review generation: Emergency repairs → satisfaction check 4 hours after resolution, with review link for positive responses. Installations → review request at 1 week (after the customer has experienced the new system). Maintenance → review request 24 hours after the visit. Requests were personalised: "Thanks for choosing us for your [specific service]. How was the experience?" Maintenance contract customers received a review request once per year with their annual service.',
  result:
    'Review volume increased from 1.5/month to 11/month average. Within 12 months, total reviews grew from 87 to 219 — surpassing the competitor. Emergency repair reviews were particularly powerful: emotional, detailed, and highly convincing. Local pack ranking improved from 4th to 1st for "HVAC service [city]." Inbound leads increased 28% year-over-year.',
  stat: 'Review volume increased 7x (from 1.5 to 11 per month), reaching 219 total in 12 months',
};

const solutions = [
  {
    title: 'Job-Type Review Timing',
    description:
      'Different HVAC jobs need different review timing. Emergency repairs: customer is most grateful (and most likely to write an emotional review) within hours of resolution — request quickly. New installations: wait 5-7 days for the customer to experience the comfort difference before asking. Routine maintenance: 24 hours after, while the visit is fresh. This tailored timing maximises response rates for each job type.',
    icon: Star,
  },
  {
    title: 'Service-Specific Review Prompts',
    description:
      'Generic "please review us" requests generate generic reviews. HVAC-specific prompts generate valuable content: "Would you mention what service we performed and how it improved your comfort?" This yields reviews containing service keywords ("boiler installation", "AC repair", "annual maintenance") that improve local SEO relevance for those searches. Each review becomes a keyword-rich piece of content on your Google listing.',
    icon: MessageSquare,
  },
  {
    title: 'Year-Round Review Velocity',
    description:
      'HVAC work is seasonal, but review generation does not have to be. Maintenance contract customers provide review opportunities all year. Summer AC maintenance generates reviews during the heating off-season, and winter heating checks generate reviews during the cooling off-season. This consistent review velocity signals active, reliable business to Google throughout the year — not just during peak seasons.',
    icon: BarChart3,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Review Timing to Job Types',
      action:
        'List every HVAC job type you perform: emergency repair, scheduled repair, new installation, replacement, annual maintenance, one-off tune-up, duct cleaning, etc. For each, determine the optimal review request timing. Emergency: 4 hours post-resolution. Installation: 5-7 days. Maintenance: 24 hours. Repair: 24 hours. This mapping becomes your review automation rules.',
      expectedResult:
        'A review timing schedule that matches each HVAC job type to the moment when customers are most likely to respond positively.',
    },
    {
      step: 2,
      title: 'Create Service-Specific Messages',
      action:
        'Write a review request template for each job category. Emergency: "Thank you for trusting us with your [heating/cooling] emergency. We are glad we could help quickly. If you have a moment, a review helps other homeowners find reliable emergency HVAC help: [link]." Installation: "Now that you have had a week with your new [system type], we would love to hear about the difference. A quick review helps us and helps other homeowners: [link]."',
      expectedResult:
        'Personalised review request messages for each HVAC job type that feel relevant and prompt service-specific review content.',
    },
    {
      step: 3,
      title: 'Automate from CRM Job Completion',
      action:
        'In your CRM, create automations triggered by job status changes. When a job moves to "complete," the system checks the job type, waits the appropriate time, sends the matching review request template. Include a satisfaction gate: send a quick "How was our service?" check first. Only send the review link to satisfied customers. Unsatisfied customers are routed to your operations manager for resolution.',
      expectedResult:
        'A fully automated system where every completed HVAC job generates the right review request at the right time, with dissatisfied customers handled privately.',
    },
  ],
};

const finalCta = {
  title: 'Automate Review Generation for Your HVAC Business',
  description:
    'Our Reputation & Review Systems connect to your CRM and automatically collect reviews after every HVAC job — with timing and messaging tailored to emergency repairs, installations, and maintenance.',
};

export const hvacReviewGenerationFramework: ResourceData = {
  slug,
  seo: {
    title: 'HVAC Review Generation Framework',
    description:
      'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
    canonical,
  },
  title: 'HVAC Review Generation Framework',
  description:
    'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
  category: 'reviews-proof',
  publishedAt: '2026-02-02',
  primarySystem: 'reputation-review-systems',
  industries: ['hvac'],
  topics: ['review-generation'],
  primaryService: 'reputation-review-systems',
  sections: [
    {
      type: 'hero',
      heading: 'HVAC Review Generation Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for HVAC review generation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Quality HVAC Work Does Not Automatically Earn Reviews',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common HVAC Review Gaps:',
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ['How systematic review generation transformed an HVAC company review profile:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up HVAC Review Generation',
      content: ['Steps specific to HVAC review collection:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC Review Generation Architecture',
      content: [
        'Automated Review Collection for HVAC',
        'A review system designed for HVAC service patterns:',
      ],
      benefit:
        'When every HVAC job automatically generates a timed, service-specific review request, you build the review volume and freshness that Google rewards — while competitors rely on spontaneous reviews.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('reviews-proof'),
      content: getRelatedResourcesContent('reviews-proof'),
      resources: getRelatedResources('reviews-proof', canonical),
    },
  ],
};
