import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'review-generation-system';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A review generation system is an automated workflow that requests customer reviews after service completion. It uses timed triggers, personalised messages, and direct platform links to make leaving a review effortless — turning satisfied customers into a consistent stream of public social proof.',
  problem:
    'You deliver excellent work but your review count does not reflect it because requesting reviews depends on team memory and manual effort',
  promise:
    'You will learn how to build an automated review generation system that asks every satisfied customer for a review at the right time through the right channel without relying on your team to remember',
};

const takeaways = [
  'Automated review requests eliminate reliance on team memory — every customer gets asked',
  'Timing is critical: the best window is 1-4 hours after service completion',
  'Direct links to your Google Business Profile remove friction and increase completion rates',
  'A satisfaction gate routes unhappy customers to private feedback instead of public reviews',
];

const problem = {
  description: [
    'Most service businesses rely on team members to ask for reviews verbally or remember to send a link after the job. This approach fails because technicians and staff are busy, the request happens inconsistently, and there is no follow-up if the customer forgets.',
    'The result is a review count that does not match your actual service quality. Competitors with worse service but better systems collect more reviews, which means they rank higher in local search and win the prospects who are comparing businesses before making a decision.',
  ],
  causes: [
    'Review requests depend on individual team members remembering',
    'No automated trigger tied to job completion in the CRM',
    'Customers receive a verbal request but no link, making it hard to follow through',
    'No follow-up if the initial request is ignored',
    'No satisfaction check before routing customers to public platforms',
    'Inconsistent timing — some customers asked immediately, others days later, many never',
  ],
};

const businessCosts = [
  'A service business with 200 completed jobs per month averaging 2 reviews has a 1% request-to-review rate. Competitors with automated systems achieve 15-25%. At 20%, that same 200 jobs produces 40 reviews per month — a 20x difference in review velocity.',
  'Each missing review costs local search visibility. Google factors review count and recency into local rankings. Falling behind by 30+ reviews per month compounds into significant ranking loss within one quarter.',
  'Without a satisfaction gate, unhappy customers leave negative public reviews that could have been resolved privately. One negative review can neutralise the trust built by 10 positive ones.',
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Create a Review Request Template',
      action:
        'Write a short, personal SMS or email template: "Hi [First Name], thanks for choosing [Business Name] for your [service type] today. If you were happy with the work, would you leave us a quick review? It takes 30 seconds: [direct Google review link]." Keep it under 3 sentences. Include the direct review link — not your homepage or Google Maps listing, but the direct review submission URL.',
      expectedResult:
        'A review request message that is personal, brief, and includes a friction-free direct link.',
    },
    {
      step: 2,
      title: 'Set Up an Automated Trigger',
      action:
        'In your CRM, create an automation that fires when a job status changes to "completed." Add a 2-hour delay, then send the review request via SMS (preferred for speed and open rates) or email. If no response after 48 hours, send one follow-up with slightly different wording.',
      expectedResult:
        'Every completed job automatically generates a review request without any team member needing to remember.',
    },
    {
      step: 3,
      title: 'Add a Satisfaction Gate',
      action:
        'Before the review link, add a quick satisfaction check: "How was your experience? 👍 Great / 👎 Could be better." The positive response routes to the Google review link. The negative response routes to a private feedback form that notifies you to resolve the issue. This prevents negative experiences from becoming public reviews.',
      expectedResult:
        'Happy customers go to Google. Unhappy customers go to private feedback where you can resolve issues before they become public.',
    },
  ],
};

const checklist = [
  'Direct Google review link generated and tested',
  'Review request SMS/email template written and personalised',
  'CRM automation triggers on job completion status change',
  'Time delay configured (1-4 hours post-completion)',
  'Follow-up message scheduled for non-respondents (48–72 hours)',
  'Satisfaction gate separates happy and unhappy customers',
  'Negative feedback routed to private form with team notification',
  'Review count tracked weekly to measure system performance',
  'Template tested on mobile to ensure link works on all devices',
  'Team trained to mark jobs as completed promptly in CRM',
];

const faqs = [
  {
    question: 'Is it acceptable to ask customers for reviews?',
    answer:
      'Absolutely. Google explicitly encourages businesses to ask customers for reviews. What is not allowed is incentivising reviews (offering discounts or rewards), review gating (only asking customers you know are happy), or posting fake reviews. A simple, honest request after service completion is best practice.',
  },
  {
    question: 'Should I use SMS or email for review requests?',
    answer:
      'SMS consistently outperforms email for review requests. Open rates for SMS are 90%+ compared to 20-30% for email. The review request is short and time-sensitive, which suits SMS perfectly. Use email as a backup channel if you do not have the customer mobile number.',
  },
  {
    question: 'How many reviews should I aim for per month?',
    answer:
      'A healthy target is 15-25% of completed jobs resulting in reviews. For a business completing 100 jobs per month, that means 15-25 new reviews monthly. This maintains high review velocity which Google rewards with improved local search visibility.',
  },
  {
    question: 'How soon after service completion should the review request be sent?',
    answer:
      'Usually within a few hours while the experience is still fresh, but the exact timing depends on the service. Immediate requests work well for simple completed jobs. More emotionally charged or high-ticket services may perform better after the customer has seen the result settle in. The right timing is the point of peak satisfaction, not just the moment the invoice is closed.',
  },
  {
    question: 'What if a customer ignores the first review request?',
    answer:
      'Send one or two polite follow-ups, then stop. Many reviews come from the second request simply because the first arrived when the customer was busy. Beyond that, repeated reminders start to feel pushy and produce diminishing returns. A clean sequence beats nagging.',
  },
];

const finalCta = {
  title: 'Automate Your Review Generation System',
  description:
    'Our Reputation & Review Systems connect to your CRM and automatically request reviews from every satisfied customer at the right time through the right channel.',
};

export const reviewGenerationSystem: ResourceData = {
  slug,
  title: 'Review Generation System',
  description:
    'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
  category: 'reputation-review',
  publishedAt: '2025-11-24',
  systems: ['reputation-review'],
  industries: [],
  topics: ['review-generation'],
  primaryService: 'reputation-review',
  seo: {
    title: 'Review Generation System',
    description:
      'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Review Generation System',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of automated review generation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Most Service Businesses Have Fewer Reviews Than They Deserve',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Review Generation Is Broken:',
    },
    {
      type: 'business-costs',
      heading: 'The Cost of Manual Review Requests',
      content: ['What inconsistent review generation costs your business:'],
      items: businessCosts,
    },
    {
      type: 'diy',
      heading: 'Build Your Review Generation System',
      content: ['Steps to automate review collection:'],
      steps: diy.steps,
    },
    {
      type: 'checklist',
      heading: 'Review Generation System Checklist',
      content: ['Verify every component is in place:'],
      items: checklist,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about review generation:'],
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
