import { Search, Star, TrendingUp } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'how-review-automation-improves-local-authority';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Review automation is the use of CRM-triggered workflows to request, collect, and manage customer reviews without manual effort. When combined with consistent delivery, automated review systems build the volume and recency signals that Google uses to determine local search authority — turning customer satisfaction into measurable ranking power.',
  problem:
    'Your service quality is high but your local search authority is low because you lack the review volume and velocity that Google rewards in local rankings',
  promise:
    'You will understand the connection between automated review collection and local search authority, and learn how consistent review velocity compounds into measurable ranking improvements',
};

const takeaways = [
  'Google uses review count, recency, and velocity as ranking signals in local search results',
  'Automated review requests create consistent velocity that manual processes cannot match',
  'Review content containing service keywords and location names improves topical relevance',
  'Authority compounds — businesses with steady review flow outrank those with sporadic bursts',
];

const problem = {
  description: [
    'Local search authority is not built from a single burst of reviews. Google measures review velocity — how consistently new reviews appear over time. A business that receives 5 reviews per week outranks a business that received 50 reviews in one week and then nothing for months.',
    'Without automation, review velocity is erratic. It spikes when someone on the team makes an effort, then drops to zero when they get busy. This inconsistency signals to Google that the business may not be consistently active, which costs local ranking position.',
  ],
  causes: [
    'Review requests are inconsistent — some weeks busy, others zero',
    'No relationship between job completion and review timing',
    'Review count growing slowly while competitors accelerate',
    'No system to maintain review velocity during busy seasons',
    'Local search rankings fluctuate because review signals are unreliable',
    'Team effort on reviews competes with actual service delivery time',
  ],
};

const comparison = {
  before: {
    title: 'Manual Review Management',
    items: [
      'Review count grows sporadically based on team effort',
      'Velocity drops during busy periods when team forgets',
      'No connection between CRM job status and review requests',
      'Review content is random — no service or location signals',
      'Rankings fluctuate as review signals are inconsistent',
      'Authority grows slowly or not at all',
    ],
  },
  after: {
    title: 'Automated Review System',
    items: [
      'Every completed job triggers a review request automatically',
      'Steady velocity maintained regardless of team workload',
      'CRM integration ensures no customer is missed',
      'Templated prompts encourage service and location keywords',
      'Rankings stabilise as review signals become consistent',
      'Authority compounds with every week of steady review flow',
    ],
  },
};

const solutions = [
  {
    title: 'CRM-Triggered Review Velocity',
    description:
      'When a job status changes to "completed" in your CRM, an automated review request fires after a short delay. This ensures every customer gets asked, the timing is optimal (within hours of positive experience), and velocity stays consistent regardless of team workload or season.',
    icon: Star,
  },
  {
    title: 'Review Content Optimisation',
    description:
      'Automated requests include prompts that naturally encourage keyword-rich reviews: "What service did we provide?" and "Where was the job located?" helps customers write reviews containing service types and location names that Google associates with your business profile for relevant local searches.',
    icon: Search,
  },
  {
    title: 'Authority Compounding Effect',
    description:
      'Consistent review velocity creates a compounding effect. Each week of steady reviews strengthens your authority signal. Over 3-6 months, this compounds into dramatic ranking improvements that are very difficult for competitors to replicate without the same systematic approach. The gap widens over time.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Review Velocity',
      action:
        'Check your Google Business Profile for the last 90 days. Count total reviews received and divide by 12 (weeks). This is your current weekly velocity. Compare against your top 3 local competitors. If they are outpacing you, they are building authority faster.',
      expectedResult:
        'A clear picture of your review velocity vs competitors, showing the authority gap you need to close.',
    },
    {
      step: 2,
      title: 'Connect Review Requests to Job Completion',
      action:
        'Set up a CRM automation that sends a review request 2 hours after a job is marked complete. Use SMS as the primary channel. Include your direct Google review link. If your CRM does not support this, use a simple tool like a scheduling app that sends the message based on a manual trigger.',
      expectedResult:
        'Every completed job generates a review request within hours, creating baseline velocity.',
    },
    {
      step: 3,
      title: 'Track Velocity Weekly',
      action:
        'Create a simple spreadsheet or CRM dashboard that tracks: jobs completed this week, review requests sent, reviews received, and conversion rate (reviews ÷ requests). Review this weekly. Your target is 15-25% conversion rate. If lower, test different message copy or timing.',
      expectedResult:
        'A measurable review velocity metric you can track, optimise, and correlate with local ranking changes.',
    },
  ],
};

const caseExample = {
  businessType: 'Plumbing Company (Birmingham)',
  problem:
    'A plumbing company had 87 Google reviews accumulated over 4 years of business. Their main competitor had 340 reviews. Despite stronger service quality and more completed jobs, they ranked 4th in the local pack because their review signals were weak and inconsistent.',
  solution:
    'We implemented automated review requests triggered by CRM job completion. Every customer received an SMS 2 hours after service, with a satisfaction gate and direct Google review link. Follow-up sent at 48 hours for non-respondents.',
  result:
    'Review velocity went from 2 per month to 18 per month. Within 6 months they added 108 new reviews (total 195), climbed from 4th to 2nd in the local pack, and saw a 35% increase in calls from Google Maps.',
  stat: '900% increase in review velocity, from 2/month to 18/month',
};

const faqs = [
  {
    question: 'How long does it take for review velocity to affect local rankings?',
    answer:
      'Google typically reflects review signal changes within 4-8 weeks. However, meaningful ranking improvement from sustained velocity usually becomes visible at the 3-month mark. The effect compounds — 6 months of consistent velocity produces significantly more authority than 3 months.',
  },
  {
    question: 'Does review content matter for local authority?',
    answer:
      'Yes. Reviews that mention specific services (e.g., "boiler repair", "emergency plumbing") and locations (e.g., "our home in Solihull") provide topical and geographic relevance signals. While you cannot dictate what customers write, prompts that ask about the service and location naturally encourage useful content.',
  },
  {
    question: 'Can I lose local authority if review velocity drops?',
    answer:
      'Review recency is a factor. If your velocity drops to zero while competitors maintain theirs, your relative authority will decline over time. This is why automation is important — it maintains velocity regardless of team workload, seasonal changes, or staff turnover.',
  },
];

const finalCta = {
  title: 'Build Automated Review Velocity That Compounds Your Local Authority',
  description:
    'Our Reputation & Review Systems connect to your CRM and generate a steady stream of authentic reviews that strengthen your local search rankings every week.',
};

export const howReviewAutomationImprovesLocalAuthority: ResourceData = {
  slug,
  title: 'How Review Automation Improves Local Authority',
  description:
    'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
  intent: 'ACTIONABLE',
  category: 'reputation-review',
  publishedAt: '2025-12-17',
  systems: ['reputation-review'],
  industries: [],
  topics: ['review-automation'],
  primaryService: 'reputation-review',
  seo: {
    title: 'How Review Automation Improves Local Authority',
    description:
      'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'How Review Automation Improves Local Authority',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Good Service Alone Does Not Build Local Rankings',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Review Velocity Is Costing Authority:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of review-driven local authority:'],
      items: takeaways,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How automated review velocity transformed a plumbing company local rankings:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'comparison',
      heading: 'Manual vs Automated Review Authority',
      content: ['How review approach impacts local search authority over time:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Review Authority Architecture',
      content: [
        'Systematic Authority Building',
        'Automated review systems build the signals Google uses to rank local businesses:',
      ],
      benefit:
        'When review velocity is automated and consistent, local search authority compounds week by week, creating a ranking advantage that is extremely difficult for competitors to overcome.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Start Building Review-Driven Authority',
      content: ['Steps to connect review automation to local rankings:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about review automation and local authority:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/reputation-review-systems',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('reputation-review'),
      content: getRelatedResourcesContent('reputation-review'),
      resources: getRelatedResources('reputation-review', canonical),
    },
  ],
};
