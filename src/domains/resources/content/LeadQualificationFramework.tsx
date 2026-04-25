import { CheckCircle, Filter, ListChecks } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'lead-qualification-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Lead qualification is the process of determining whether a lead is a good fit for your business before allocating sales time. A qualification framework uses structured criteria — budget, timeline, service match, and location — to score and prioritise leads so your team spends time on the highest-value opportunities.',
  problem:
    'Your team treats every lead equally, spending the same time on tyre-kickers and premium prospects because there is no system to distinguish between them before the first conversation',
  promise:
    'You will understand how to build a lead qualification framework that automatically scores and prioritises leads so your team focuses on opportunities most likely to convert into profitable jobs',
};

const takeaways = [
  'Qualification separates high-value prospects from tyre-kickers before allocating sales time',
  'Four qualification criteria: budget fit, timeline urgency, service match, and location coverage',
  'Qualification data can be collected via forms and automation before human contact',
  'Proper qualification improves conversion rate and average job value simultaneously',
];

const problem = {
  description: [
    'Without qualification, every lead receives the same treatment. A homeowner wanting a small repair and a property manager needing a fleet of installations get the same response, the same follow-up, and the same amount of sales attention. This wastes time on leads that will never convert at profitable rates.',
    'The deeper problem is that qualification happens too late. Most service businesses qualify leads during the first phone call — after they have already invested time in response, follow-up, and scheduling. By the time they discover the lead is not a fit, they have spent 30-60 minutes of team time that could have gone to a qualified prospect.',
  ],
  causes: [
    'No qualification questions on website forms or in automated sequences',
    'All leads enter the same pipeline stage regardless of potential value',
    'Team evaluates fit during first conversation instead of before it',
    'No scoring system to rank leads by conversion probability',
    'Budget conversations happen late in the process, wasting time on mismatched leads',
    'No data on which lead characteristics predict successful conversions',
  ],
};

const comparison = {
  before: {
    title: 'No Qualification System',
    items: [
      'Every lead gets same response and priority',
      'First call used to determine basic fit',
      'Budget discussed late in sales process',
      'Team time split equally across all leads',
      'No scoring or ranking of pipeline',
      'Conversion rate low because pipeline full of poor fits',
    ],
  },
  after: {
    title: 'Structured Qualification Framework',
    items: [
      'Leads scored on entry based on qualification criteria',
      'High-score leads get immediate personal attention',
      'Budget and scope captured before first conversation',
      'Team time concentrated on highest-probability leads',
      'Pipeline ranked by qualification score',
      'Conversion rate improves because team focuses on fits',
    ],
  },
};

const solutions = [
  {
    title: 'Automated Qualification Data Collection',
    description:
      'Website forms and automated sequences collect qualification data before human contact: project scope, budget range, timeline, and location. This data feeds into CRM scoring automatically. By the time a team member contacts the lead, they know the fit level and can tailor the conversation.',
    icon: ListChecks,
  },
  {
    title: 'Lead Scoring Model',
    description:
      'Each qualification criterion adds points to a lead score. Budget match: +20. Timeline urgency: +15. Service match: +15. Location coverage: +10. Source quality (referral, organic, paid): +10. Leads above threshold get priority routing. Below threshold enter nurture sequence.',
    icon: Filter,
  },
  {
    title: 'Qualification-Based Pipeline Routing',
    description:
      'Qualified leads route to sales team for immediate personal contact. Partially qualified leads enter a nurture sequence that collects remaining information. Disqualified leads receive a polite automated response with alternative resources. Each path is automated — no manual sorting required.',
    icon: CheckCircle,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Define Your Ideal Customer Criteria',
      action:
        'Review your last 20 completed jobs. For the 5 most profitable, document the common characteristics: job type, budget range, location, timeline, and how they found you. These characteristics become your qualification criteria. Be specific — "budget above £2,000" is better than "decent budget."',
      expectedResult:
        'A clear profile of your ideal customer based on actual data from profitable past jobs.',
    },
    {
      step: 2,
      title: 'Add Qualification Questions to Your Forms',
      action:
        'Add 2-3 qualification fields to your main contact form: project type (dropdown matching your services), approximate budget range (dropdown with ranges), and timeline (dropdown: urgent, within 1 month, within 3 months, just researching). Keep it quick — these are dropdowns, not essay questions.',
      expectedResult:
        'Every new lead arrives with basic qualification data that tells you their fit level before you make contact.',
    },
    {
      step: 3,
      title: 'Create a Simple Scoring Rule',
      action:
        'In your CRM, create a basic scoring rule: budget in your sweet spot = +20 points, timeline urgent or within 1 month = +15 points, service type matches your core offering = +15 points. Leads scoring above 30 get priority tagging. Below 30 enter standard sequence.',
      expectedResult:
        'An automated system that identifies your highest-value leads and flags them for immediate personal attention.',
    },
  ],
};

const caseExample = {
  businessType: 'Landscaping Company (Surrey)',
  problem:
    'A landscaping company received 45 leads per week. The sales team spent equal time on every enquiry, from £500 garden tidy-ups to £15,000 full redesigns. Conversion rate was 20%. The team was exhausted from quoting jobs they were never going to win because the customer budget was too low or the location too far.',
  solution:
    'We implemented a qualification framework: forms collected budget range and project type, CRM scoring prioritised leads in the sweet spot (£3,000-£15,000 redesigns within 30-minute drive radius), high-score leads received immediate personal outreach, low-score leads received automated responses with pricing guides.',
  result:
    'The sales team handled 60% fewer leads but closed 30% more revenue. Average job value increased from £2,800 to £4,600 because they focused on qualified prospects. Conversion rate for qualified leads was 52% compared to 20% overall previously.',
  stat: '52% conversion rate on qualified leads vs 20% on unqualified pipeline',
};

const faqs = [
  {
    question: 'Will qualification questions on forms reduce the number of submissions?',
    answer:
      'Adding 2-3 dropdown questions typically reduces form submissions by 5-10% but increases the quality significantly. The leads you lose are usually the lowest-quality ones. A slight reduction in volume with a major improvement in quality is always the better trade.',
  },
  {
    question: 'What about leads that do not meet qualification criteria?',
    answer:
      'Disqualified leads should not be ignored — they should receive a different treatment. An automated response thanking them, providing helpful resources, and suggesting alternatives is professional and maintains your reputation. Some may become qualified later as their needs change.',
  },
  {
    question: 'How often should I update my qualification criteria?',
    answer:
      'Review quarterly. Compare your qualification criteria to actual results — which criteria best predict conversion and profitability. Markets change, and your ideal customer profile may shift. Regular review ensures your scoring model matches current business reality.',
  },
  {
    question: 'Should every lead receive a qualification score?',
    answer:
      'Not necessarily a complex one, but every lead should be assessed consistently. Some businesses use a full numeric score, while others apply simpler bands like hot, qualified, nurture, and disqualified. The method matters less than having a repeatable framework that helps the team prioritise the right conversations.',
  },
];

const finalCta = {
  title: 'Qualify Leads Automatically Before They Reach Your Team',
  description:
    'Our AI Lead Handling system collects qualification data, scores leads on entry, and routes high-value prospects to your team while nurturing the rest automatically.',
};

export const leadQualificationFramework: ResourceData = {
  slug,
  seo: {
    title: 'Lead Qualification Framework',
    description:
      'Learn how to build a lead qualification framework that scores and prioritises leads automatically so your team focuses on the highest-value opportunities.',
    canonical,
  },
  title: 'Lead Qualification Framework',
  description:
    'Learn how to build a lead qualification framework that scores and prioritises leads automatically so your team focuses on the highest-value opportunities.',
  category: 'ai-lead-handling',
  publishedAt: '2025-12-03',
  systems: ['ai-lead-handling'],
  industries: [],
  topics: ['lead-qualification'],
  primaryService: 'ai-lead-handling',
  sections: [
    {
      type: 'hero',
      heading: 'Lead Qualification Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'The Cost of Treating Every Lead the Same',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Need a Qualification Framework:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of lead qualification:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Unqualified vs Qualified Pipeline',
      content: ['The difference in how your team spends time with and without qualification:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Qualification Framework Architecture',
      content: [
        'Systematic Lead Evaluation',
        'A qualification framework scores and routes leads before your team invests sales time:',
      ],
      benefit:
        'When qualification happens automatically, your team speaks only to prospects who match your ideal customer profile, dramatically improving conversion rate and average job value.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How qualification transformed a landscaping company sales process:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Framework',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Build Your Qualification Framework',
      content: ['Start qualifying leads with these steps:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about lead qualification:'],
      items: faqs,
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
