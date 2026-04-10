import { Clock, PhoneCall, TrendingUp } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'roofing-estimate-follow-up-workflow';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Roofing estimates involve large sums and long decision cycles. Homeowners often request multiple quotes and take days or weeks to decide. Without structured follow-up, roofing companies lose jobs they already quoted — not because the price was wrong, but because they failed to stay present during the decision window. An estimate follow-up workflow automates the process of staying in front of prospects until they decide.',
  problem:
    'Your roofing team sends estimates but never follows up systematically, losing jobs to competitors who simply stayed in touch while the homeowner was deciding',
  promise:
    'You will see how roofing companies implement automated estimate follow-up sequences that keep them top of mind during extended homeowner decision cycles, recovering jobs that would otherwise be lost to silence',
};

const takeaways = [
  'Roofing estimates have longer decision cycles than most trades — follow-up must span weeks, not days',
  'The first follow-up after an estimate should happen within 24 hours to reinforce professionalism',
  'Each follow-up should add value (financing info, warranty details, project timeline) rather than just asking if they have decided',
  'Automated follow-up recovers 15-25% of estimates that would otherwise go silent',
];

const problem = {
  description: [
    'A roofing estimate is the beginning of a sales cycle, not the end. Homeowners requesting roof quotes are typically comparing 2-4 roofers and often take 1-3 weeks to decide. During this period, the roofer who stays professionally present — without being pushy — has a significant advantage.',
    'Most roofing companies treat the estimate as the last touchpoint. The estimator visits, sends the quote, and moves on. If the customer does not call back, the lead dies. With average estimate close rates of 25-35% in roofing, this means 65-75% of quoted jobs receive zero follow-up. The lost revenue is substantial when the average roofing job is £5,000-12,000.',
  ],
  causes: [
    'Estimators move to the next appointment instead of following up on previous ones',
    'No tracking of which estimates are pending vs. which are lost',
    'Follow-up perceived as pushy rather than professional',
    'No CRM automation triggered by estimate-sent status',
    'Missing value-add content for follow-up touchpoints',
    'No defined end point — either follow up forever or not at all',
  ],
};

const caseExample = {
  businessType: 'Residential Roofing Company (West Yorkshire)',
  problem:
    'A residential roofing company sent 40-50 estimates per month with a close rate of 28%. No follow-up system existed — the owner occasionally called back if he remembered. Over 70% of unclosed estimates received zero follow-up. When asked why they lost jobs, the team assumed price, but had no data.',
  solution:
    'We connected the CRM to an automated follow-up sequence. When an estimate was marked "sent," the system triggered: Day 1 — thank you SMS with company details; Day 3 — email with financing options and warranty information; Day 7 — SMS checking if they had questions; Day 14 — email with seasonal timing benefits; Day 21 — final availability check. Each touchpoint added value rather than just asking for a decision.',
  result:
    'Close rate improved from 28% to 39% within 3 months. At an average job value of £6,800, the additional 5-6 jobs per month from improved close rate represented £34,000-41,000 in monthly revenue recovered from estimates that would have gone silent. The team reported that many customers said the follow-up made them feel cared for, not pressured.',
  stat: 'Estimate close rate improved from 28% to 39% via automated follow-up sequence',
};

const solutions = [
  {
    title: 'CRM-Triggered Follow-Up Sequences',
    description:
      'When an estimate status changes to "sent" in the CRM, a timed sequence begins automatically. Day 1: thank you with recap. Day 3: financing and warranty details. Day 7: question check-in. Day 14: seasonal or availability prompt. Day 21: final gentle close. If the customer responds or books at any point, the sequence stops automatically.',
    icon: Clock,
  },
  {
    title: 'Value-Add Touchpoints',
    description:
      'Each follow-up in the sequence delivers useful information rather than just asking for a decision. Financing details help budget-conscious homeowners. Warranty comparisons differentiate your offer. Project timeline estimates help homeowners plan. This approach positions your company as helpful and professional, not desperate for the job.',
    icon: PhoneCall,
  },
  {
    title: 'Pipeline Visibility and Revenue Recovery',
    description:
      'Automated follow-up combined with CRM tracking creates visibility into your estimate pipeline. You can see exactly how many estimates are pending, at what stage, and what the total potential revenue is. Lost estimates are tracked with reasons, creating data to improve pricing, timing, and sales process. This turns guesswork into a measurable sales funnel.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Track Every Estimate in Your CRM',
      action:
        'Create a pipeline stage for estimates: Lead → Estimate Scheduled → Estimate Sent → Follow-Up → Won/Lost. Every estimate must be entered with the job value, date sent, and homeowner contact details. If you do not track it, you cannot follow up on it. Train estimators to update the CRM status the same day the estimate is sent.',
      expectedResult:
        'A complete pipeline view showing every pending estimate, its value, and how long it has been waiting for a decision.',
    },
    {
      step: 2,
      title: 'Build a Value-Add Follow-Up Sequence',
      action:
        'Create 4-5 follow-up messages that each add something useful. Day 1: "Thanks for having us out. Here is a summary of what we discussed." Day 3: "We offer financing options — here are the details." Day 7: "Do you have any questions about the estimate? Happy to clarify anything." Day 14: "Just a heads up — our schedule fills quickly in [season]. Let us know if you want to secure a date." Day 21: "We are closing out estimates for the month. Would you like to move forward or would a revised option help?"',
      expectedResult:
        'A 5-touchpoint follow-up sequence where each message provides value and naturally progresses toward a decision.',
    },
    {
      step: 3,
      title: 'Automate and Measure',
      action:
        'Set up CRM automation to trigger the sequence when estimate status changes to "sent." Track response rates at each stage. When a customer responds or the estimate is marked won/lost, stop the sequence. Review monthly: what percentage of followed-up estimates convert vs. baseline? This data proves the value and helps you refine the sequence.',
      expectedResult:
        'An automated system that follows up on every estimate without manual effort and provides data on what is working.',
    },
  ],
};

const finalCta = {
  title: 'Automate Estimate Follow-Up for Your Roofing Business',
  description:
    'Our CRM and AI Lead Handling systems create automated follow-up sequences that keep your roofing company top of mind during homeowner decision cycles — recovering revenue from estimates that would otherwise go silent.',
};

export const roofingEstimateFollowUpWorkflow: ResourceData = {
  slug,
  title: 'Roofing Estimate Follow-Up Workflow',
  description:
    'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
  category: 'ai-lead-handling',
  publishedAt: '2026-02-21',
  systems: ['ai-lead-handling', 'crm-automation'],
  industries: ['roofing'],
  topics: ['follow-up'],
  primaryService: 'ai-lead-handling',
  seo: {
    title: 'Roofing Estimate Follow-Up Workflow',
    description:
      'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Roofing Estimate Follow-Up Workflow',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for roofing estimate follow-up:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Roofing Companies Lose Jobs They Already Quoted',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Estimate Follow-Up Failures:',
    },
    {
      type: 'case',
      heading: 'Real-World Roofing Example',
      content: ['How automated estimate follow-up recovered significant revenue:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Roofing Estimate Follow-Up',
      content: ['Steps specific to roofing estimate management:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Roofing Estimate Follow-Up Architecture',
      content: [
        'Automated Estimate Follow-Up for Roofers',
        'A follow-up system designed for roofing decision cycles:',
      ],
      benefit:
        'When every roofing estimate triggers an automated, value-add follow-up sequence, you recover 15-25% of jobs that would otherwise have been lost to silence.',
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
