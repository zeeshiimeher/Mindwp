import { CheckSquare, Star, TrendingUp } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'review-automation-setup-guide-for-roofing-companies';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Roofing companies complete high-value projects that generate strong customer satisfaction — but most of that satisfaction never becomes a published review. Without a system to request reviews at the right time through the right channel, the company loses social proof, local rankings, and the enquiries that come with both. This guide provides the exact steps to build a review automation system for a roofing business.',
  problem:
    'Your roofing company completes excellent work but has far fewer reviews than competitors because there is no system to request reviews after every completed job',
  promise:
    'You will have a step-by-step guide to automate review requests after every roofing job, time them for maximum response, and monitor review growth with reporting',
};

const takeaways = [
  'Roofing companies that automate review requests after every job generate three to five times more reviews than those relying on manual follow-up',
  'Review requests sent within twenty-four hours of job completion convert at the highest rate because customer satisfaction is freshest',
  'A direct Google review link in an SMS removes the friction that prevents most satisfied customers from completing a review',
  'Consistent review velocity — new reviews every week — improves local search rankings more than a high total count alone',
];

const problem = {
  description: [
    'Most roofing companies have a review problem they do not realise. They complete dozens of jobs per month, customers express satisfaction, but the Google review profile grows slowly or not at all. The company checks competitors and finds roofers with fewer years of experience but three times the review count winning the local search results.',
    "The root cause is not customer dissatisfaction. It is the absence of a system. Without automated review requests, every review depends on the customer remembering, finding the business on Google, and composing a response. Fewer than ten percent of satisfied customers complete this process without prompting. The result is a review profile that drastically understates the quality of the company's work.",
  ],
  causes: [
    'No automated review request after job completion — reviews depend entirely on customer initiative',
    'Manual follow-up is inconsistent and drops off during busy roofing seasons',
    'Review requests sent days or weeks after completion when customer motivation has faded',
    'No direct review link — customers must search for the business and navigate to the review form',
    'No tracking of which completed jobs have received review requests and which have not',
    'No visibility into review velocity, response rate, or competitive review gap',
  ],
};

const comparison = {
  before: {
    title: 'Without Review Automation',
    items: [
      'Reviews depend on customers remembering to post unprompted',
      'No consistent review request after completed jobs',
      'Busy seasons produce the most work but the fewest review requests',
      'No direct review link — customers must find the business on Google',
      'No tracking of review request coverage or response rates',
      'Competitor with fewer skills but more reviews wins local search',
    ],
  },
  after: {
    title: 'With Review Automation',
    items: [
      'Every completed job triggers an automated review request within twenty-four hours',
      'SMS with direct Google review link removes all friction for the customer',
      'Busy seasons generate proportionally more reviews as volume drives automation',
      'One-tap review link takes the customer directly to the review form',
      'Dashboard tracks review requests sent, reviews received, and response rate',
      'Consistent review velocity strengthens local rankings month over month',
    ],
  },
};

const solutions = [
  {
    title: 'Automated Post-Job Review Requests',
    description:
      'When a roofing job is marked as completed in the CRM, the system waits twenty-four hours and sends an SMS to the customer with a personalised message referencing the project type and a direct Google review link. The timing is calibrated to catch the customer while satisfaction is high but the immediate post-project activity has settled. A follow-up reminder fires at seventy-two hours if no review has been posted.',
    icon: Star,
  },
  {
    title: 'Friction-Free Review Links',
    description:
      'The review request includes a short URL that takes the customer directly to the Google review form for the business — no searching, no navigating. On mobile devices, the link opens the Google Maps app with the review form ready. This removes every step that causes drop-off between intention and action, typically doubling or tripling the review completion rate.',
    icon: CheckSquare,
  },
  {
    title: 'Review Velocity Tracking',
    description:
      'A dashboard tracks the number of review requests sent, reviews received, response rate, and average star rating over time. Weekly reports show review velocity compared to competitors. The team can see exactly which completed jobs resulted in reviews and which did not, enabling targeted manual follow-up for high-value projects that did not generate a review through the automated sequence.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Review Profile',
      action:
        'Check your Google Business Profile. Count your total reviews, calculate the average rating, and note the date of your most recent review. Then check your top three local competitors. Compare total reviews, average rating, and review recency. Most roofing companies discover a gap of fifty to two hundred reviews against their most visible competitor.',
      expectedResult:
        'A baseline review count and a competitive benchmark showing exactly how large the review gap is.',
    },
    {
      step: 2,
      title: 'Create a Direct Google Review Link',
      action:
        'Generate a direct review link for your Google Business Profile. Search for your business on Google, click "Write a review," and copy the URL. Alternatively, use Google\'s Place ID tool to generate a direct link. Shorten the URL for SMS use. Test by opening the link on a mobile device — it should go directly to the review form with the star rating selector visible.',
      expectedResult:
        'A short, tested URL that takes any customer directly to your Google review form in one tap.',
    },
    {
      step: 3,
      title: 'Set Up Post-Job Review Triggers',
      action:
        'In your CRM, create an automation that triggers when a job status changes to "Completed." The automation waits twenty-four hours, then sends an SMS with the customer\'s name, a reference to the project type, a thank-you message, and the direct review link. Configure a second reminder at seventy-two hours for customers who have not yet posted a review.',
      expectedResult:
        'Every completed roofing job automatically triggers a two-step review request sequence without any manual action required.',
    },
    {
      step: 4,
      title: 'Personalise the Review Request',
      action:
        'Customise the review request message to reference the specific project: "Hi [Name], thanks for choosing us for your [roof replacement / repair / inspection] at [Address]. If you were happy with the work, a quick Google review helps other homeowners find us: [Link]." Personalisation increases response rates because the message feels genuine rather than mass-produced.',
      expectedResult:
        'A personalised review request template that uses CRM data to reference the specific job, increasing the response rate.',
    },
    {
      step: 5,
      title: 'Track and Report Review Velocity',
      action:
        'Set up a weekly report showing: review requests sent, reviews received, response rate, average star rating, and total review count growth. Compare review velocity week over week and against competitors. Set a target: if you complete twenty jobs per month, aim for eight to twelve new reviews per month based on a forty to sixty percent response rate.',
      expectedResult:
        'Weekly visibility into review generation with measurable targets and competitive tracking.',
    },
  ],
};

const caseExample = {
  businessType: 'Roofing Company (Birmingham, 8-person crew)',
  problem:
    'An eight-person roofing company completed twenty to twenty-five jobs per month but had only thirty-four Google reviews accumulated over four years. Their top local competitor had one hundred and eighty-seven reviews. The company appeared on the second page of local search results despite having more experience and better quality work. They estimated losing eight to twelve enquiries per month to competitors with stronger review profiles.',
  solution:
    'We implemented post-job review automation: every completed job triggered a twenty-four-hour SMS with a personalised message and direct Google review link, followed by a seventy-two-hour reminder. The CRM tracked review request coverage. Weekly reporting showed review velocity and competitive positioning.',
  result:
    'Review count grew from thirty-four to eighty-nine within four months. The response rate stabilised at forty-five percent — nearly half of all completed jobs generated a review. The company moved from page two to the local map pack for their primary service area. Organic enquiries increased by thirty-five percent within three months of reaching critical review mass.',
  stat: '162% review growth in four months after implementing post-job review automation',
};

const faqs = [
  {
    question: 'Is it appropriate to ask every roofing customer for a review?',
    answer:
      'Yes. The review request is a polite, optional ask — customers are free to ignore it. Most customers appreciate the reminder because they intended to leave a review but forgot. The key is timing and tone: a genuine thank-you with an easy link, not a pressured demand.',
  },
  {
    question: 'What if a customer leaves a negative review?',
    answer:
      'Negative reviews are valuable feedback. The automation does not filter who receives requests — this is important for authenticity. When a negative review arrives, respond publicly with professionalism, acknowledge the concern, and offer to resolve it. A business that responds well to criticism builds more trust than one with only five-star reviews.',
  },
  {
    question: 'How quickly will review automation show results?',
    answer:
      'The first new reviews typically appear within the first week. Meaningful improvement in local search rankings requires consistent review velocity over two to three months. Most roofing companies see a noticeable increase in organic enquiries once they exceed their primary competitors in recent review count.',
  },
];

const finalCta = {
  title: 'Build Your Roofing Review Automation System',
  description:
    'Our Reputation Automation services implement the full review system — post-job triggers, direct review links, personalised messaging, and velocity tracking — so your roofing company builds the review profile its work deserves.',
};

export const reviewAutomationSetupGuideForRoofingCompanies: ResourceData = {
  slug,
  title: 'Review Automation Setup Guide for Roofing Companies',
  description:
    'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
  intent: 'ACTIONABLE',
  category: 'reputation-review',
  publishedAt: '2026-04-06',
  systems: ['reputation-review'],
  industries: ['roofing'],
  topics: ['review-automation'],
  primaryService: 'reputation-review',
  seo: {
    title: 'Review Automation Setup Guide for Roofing Companies',
    description:
      'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Review Automation Setup Guide for Roofing Companies',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Roofing Companies Struggle with Reviews',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Low Review Counts for Roofers:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The review facts every roofing company needs to know:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Review Automation',
      content: [
        'The operational difference when review requests are automated after every roofing job:',
      ],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Roofing Review Automation Architecture',
      content: [
        'Reviews Through Systems',
        'Effective review automation for roofers combines post-job triggers, frictionless links, and velocity tracking:',
      ],
      benefit:
        'When every completed job triggers a review request automatically, your review profile grows in proportion to your actual work volume rather than customer memory.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Roofing Example',
      content: ["How review automation transformed a roofing company's online presence:"],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The Roofing Review Automation Setup Checklist',
      content: ['Follow these steps to build your review automation system:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about review automation for roofing companies:'],
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
