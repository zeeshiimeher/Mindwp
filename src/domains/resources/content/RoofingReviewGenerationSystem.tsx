import { MessageSquare, Star, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'roofing-review-generation-system';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Roofing is a high-trust, high-value purchase where reviews carry exceptional weight. Homeowners cannot evaluate roofing quality themselves — they rely on reviews as their primary trust signal. A roofing review generation system automates the process of collecting reviews after every completed job, building the social proof that drives local rankings and customer confidence.',
  problem:
    'Your roofing company does excellent work but your review count does not reflect it, which means homeowners choosing between roofers pick competitors with more social proof',
  promise:
    'You will see how roofing companies implement automated review generation that collects reviews from every satisfied customer, builds local search authority, and creates the social proof homeowners need to choose you over competitors',
};

const takeaways = [
  'Roofing reviews carry more weight than most trades because customers cannot visually verify quality themselves',
  'Photo-rich reviews showing completed work are uniquely powerful for roofing businesses',
  'Timing is critical: ask within 24 hours of job completion when the customer is most satisfied',
  'Reviews mentioning specific services ("flat roof repair", "slate replacement") boost local SEO relevance',
];

const problem = {
  description: [
    'A new roof or major repair is a significant investment — often £3,000-15,000. At these price points, homeowners research extensively before choosing. Reviews are the primary trust factor: a roofer with 150 reviews at 4.8 stars wins business over a roofer with 20 reviews at 5 stars. Volume signals reliability, and recency signals active business.',
    'Most roofing companies complete 100+ jobs per year but collect fewer than 20 reviews. The gap exists because review requests depend on crew leaders remembering to ask — and they are already off to the next job. Without automation, the vast majority of satisfied customers never leave a review because no one asked them in a convenient way.',
  ],
  causes: [
    'Crew leaders too focused on the next job to request reviews',
    'No automated system triggered by job completion',
    'Homeowners asked verbally but not provided a direct link',
    'No follow-up if the initial request is ignored',
    'Review requests sent days or weeks after completion — too late',
    'No process for requesting photo reviews showing the completed work',
  ],
};

const caseExample = {
  businessType: 'Roofing Contractor (Greater Manchester)',
  problem:
    'A roofing contractor completed an average of 12 jobs per month but received only 2 reviews per month. Their main competitor had 230 reviews; they had 64. Despite equal work quality, the competitor ranked first in the local pack and won the majority of comparison shoppers. The owner asked customers verbally but had no follow-up system.',
  solution:
    'We implemented an automated system: when the CRM job status changed to "completed," an SMS was sent within 4 hours with a satisfaction check. Positive responses received a direct Google review link with a prompt: "If you have a moment, photos of the completed work help other homeowners." A follow-up sent at 48 hours to non-respondents.',
  result:
    'Review rate increased from 2/month to 9/month. Within 8 months, total reviews grew from 64 to 136. Local pack ranking improved from 5th to 2nd for target keywords. 35% of reviews included photos, creating a visual portfolio on their Google listing. Inbound quote requests increased 40%.',
  stat: 'Reviews increased 350% (from 2/month to 9/month) with automated generation',
};

const solutions = [
  {
    title: 'CRM-Triggered Review Requests',
    description:
      'When a roofing job is marked complete in the CRM, an automated sequence starts: satisfaction check sent within 4 hours via SMS. Positive responses receive the Google review link with roofing-specific prompts. The timing is critical — homeowners are most appreciative (and most likely to review) in the first 24 hours after seeing their new or repaired roof.',
    icon: Star,
  },
  {
    title: 'Photo Review Encouragement',
    description:
      'Roofing reviews with photos are uniquely valuable — they show the quality of work that homeowners cannot evaluate from the ground. The review request prompts customers to include a photo: "Before/after photos of your roof help other homeowners see the quality of work." Photo reviews stand out in Google listings and provide visual social proof that text alone cannot match.',
    icon: MessageSquare,
  },
  {
    title: 'Local Authority Compounding',
    description:
      'Consistent review velocity from automated generation compounds into local search authority. Each month of 8-12 new reviews strengthens your Google Business Profile signal. Over 6-12 months, this creates a review count and velocity that competitors cannot match without the same systematic approach — an increasingly durable competitive advantage.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Get Your Direct Google Review Link',
      action:
        'In Google Business Profile, go to "Get more reviews" to find your direct review link. Shorten it using a URL shortener for SMS. Test it on mobile — most homeowners will click from their phone. This link skips the search step and takes the customer directly to the review submission form.',
      expectedResult:
        'A short, mobile-friendly link that takes customers directly to your Google review form in one tap.',
    },
    {
      step: 2,
      title: 'Create a Roofing-Specific Review Request',
      action:
        'Write an SMS template: "Hi [Name], thanks for trusting us with your [job type]. If you are happy with the work, would you leave us a quick review? It helps other homeowners find reliable roofers. If you can include a photo of the finished roof, even better! [link]" Keep it under 160 characters or split into 2 messages.',
      expectedResult:
        'A review request message that feels personal, is relevant to roofing, and encourages photo reviews.',
    },
    {
      step: 3,
      title: 'Automate the Trigger',
      action:
        'In your CRM, create an automation: when job status changes to "completed" → wait 4 hours → send review request SMS. If no review within 48 hours → send follow-up: "Just a gentle reminder — your review really helps us. [link]" Stop after 2 attempts. Train your team to update job status on the day of completion.',
      expectedResult:
        'A fully automated system where every completed job generates a review request without anyone needing to remember.',
    },
  ],
};

const finalCta = {
  title: 'Automate Review Generation for Your Roofing Business',
  description:
    'Our Reputation & Review Systems connect to your CRM and automatically collect reviews from every satisfied roofing customer — with photo prompts that build visual social proof.',
};

export const roofingReviewGenerationSystem: ResourceData = {
  slug,
  seo: {
    title: 'Roofing Review Generation System',
    description:
      'See how roofing companies automate review collection after every job, build photo-rich Google reviews, and create the social proof homeowners need to choose their business.',
    canonical,
  },
  title: 'Roofing Review Generation System',
  description:
    'See how roofing companies automate review collection after every job, build photo-rich Google reviews, and create the social proof homeowners need to choose their business.',
  category: 'reviews-proof',
  publishedAt: '2026-02-04',
  primarySystem: 'reputation-review-systems',
  industries: ['roofing'],
  topics: ['review-generation'],
  primaryService: 'reputation-review-systems',
  sections: [
    {
      type: 'hero',
      heading: 'Roofing Review Generation System',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for roofing review generation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Great Roofing Work Does Not Automatically Produce Great Reviews',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Roofing Review Gaps:',
    },
    {
      type: 'case',
      heading: 'Real-World Roofing Example',
      content: ['How automated review generation transformed a roofing company social proof:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Roofing Review Generation',
      content: ['Steps specific to roofing businesses:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Roofing Review System Architecture',
      content: [
        'Automated Review Collection for Roofers',
        'A review system designed for the unique advantages of roofing businesses:',
      ],
      benefit:
        'When every completed roofing job automatically generates a review request with photo prompts, you build social proof and local authority that competitors with manual processes cannot match.',
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
