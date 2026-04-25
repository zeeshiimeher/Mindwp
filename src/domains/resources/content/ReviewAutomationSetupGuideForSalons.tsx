import { MessageSquare, Star, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'review-automation-setup-guide-for-salons';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Salons see dozens of satisfied clients every week, but fewer than five percent leave a review without being asked. The salon with the most reviews in the area dominates local search and attracts the most new clients — regardless of whether it offers the best service. This guide provides the exact steps to build a review automation system that turns every happy salon visit into a published review.',
  problem:
    'Your salon does excellent work but has fewer reviews than competitors because there is no system to request reviews after appointments',
  promise:
    'You will have a step-by-step guide to automate review requests after every salon visit, time them for maximum response, and track review growth against competitors',
};

const takeaways = [
  'Salons that automate review requests generate four to six times more reviews than those relying on clients to post voluntarily',
  'A review request sent two hours after checkout captures the client while they still feel great about their new look',
  'SMS review requests with a direct Google link convert at three to four times the rate of email requests',
  'Consistent weekly review flow improves local search rankings more than total count alone',
];

const problem = {
  description: [
    'Most salons have a handful of reviews that trickle in occasionally. A client leaves a review after an especially good experience or when a stylist asks directly. But this is unpredictable and unscalable. The salon sees thirty to fifty clients per week; if even half left reviews, the profile would grow by sixty to one hundred reviews per month. Instead, it grows by two or three.',
    'The competitive impact is severe. In any local area, one or two salons have hundreds of reviews with consistent five-star ratings. These salons appear first in local search, attract the most new clients, and build a reputation advantage that compounds monthly. Every salon without a review system falls further behind — not because the work is worse, but because the proof is invisible.',
  ],
  causes: [
    'No automated review request after appointments — reviews depend entirely on client initiative',
    'Stylists are uncomfortable asking for reviews face-to-face during checkout',
    'Receptionists skip review conversations during busy checkout periods',
    'Review requests sent by email days later when the post-appointment glow has faded',
    'No direct review link — clients must find the salon on Google and navigate to the form',
    'No tracking of how many clients were asked, how many responded, and which stylists generate the most reviews',
  ],
};

const comparison = {
  before: {
    title: 'Without Review Automation',
    items: [
      'Reviews depend on clients remembering to post after they leave',
      'Two to three new reviews per month despite thirty or more weekly clients',
      'Busy checkout periods mean review conversations are skipped entirely',
      'No direct review link — clients must search for the salon on Google',
      'No tracking of review requests or response rates by stylist',
      'Competitors with more reviews dominate local search and attract new clients',
    ],
  },
  after: {
    title: 'With Review Automation',
    items: [
      'Every completed appointment triggers an automated review request',
      'Ten to twenty new reviews per month with consistent automation',
      'Checkout is frictionless — the review request arrives by SMS two hours later',
      'One-tap review link opens the Google review form directly on mobile',
      'Dashboard tracks requests sent, reviews received, and response rate by stylist',
      'Consistent review velocity closes the gap with better-reviewed competitors',
    ],
  },
};

const solutions = [
  {
    title: 'Post-Appointment Review Requests',
    description:
      'When a salon appointment is marked as completed, the system waits two hours and sends an SMS to the client. The message thanks them for their visit, references their service and stylist, and includes a direct Google review link. The two-hour delay is intentional — the client has had time to see the final result, take a selfie, and receive compliments, making the review request feel timely rather than rushed.',
    icon: Star,
  },
  {
    title: 'Personalised SMS with Direct Link',
    description:
      'The review request references the specific appointment: "Hi [Name], we hope you love your new [colour / cut / treatment] with [Stylist]. If you have a moment, a quick Google review helps us enormously: [Link]." The direct link opens the Google review form in one tap on mobile. This personalisation and friction removal typically achieves a thirty to forty percent response rate.',
    icon: MessageSquare,
  },
  {
    title: 'Review Growth Tracking',
    description:
      'A dashboard shows total reviews, new reviews this week, average rating, and response rate by stylist. Weekly reports compare review velocity against local competitors. The salon can see which stylists generate the most reviews, which appointment types produce the highest satisfaction, and whether the review gap with competitors is closing.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Review Profile',
      action:
        'Check your Google Business Profile. Count total reviews, note the average rating, and check the date of the most recent review. Then check the top three competing salons in your area. Compare all three metrics. Most salons discover they have one quarter to one third the reviews of their top competitor.',
      expectedResult:
        'A baseline review count and competitive benchmark that quantifies the review gap.',
    },
    {
      step: 2,
      title: 'Create a Direct Google Review Link',
      action:
        'Generate a direct link to your Google review form. Search for your salon on Google, click "Write a review" and copy the URL. Shorten it for SMS use. Test the link on a mobile device — it should open the Google Maps app or browser directly to the review form with the star selector visible and ready.',
      expectedResult:
        'A short, tested URL that any client can use to leave a review in one tap from their phone.',
    },
    {
      step: 3,
      title: 'Configure Post-Appointment Triggers',
      action:
        'In your booking system or CRM, create an automation triggered when an appointment is marked as completed. Set a two-hour delay, then send an SMS with the client name, service type, stylist name, a thank-you message, and the direct review link. Test by completing a test appointment and verifying the SMS arrives correctly.',
      expectedResult:
        'Every completed appointment automatically triggers a personalised review request two hours later.',
    },
    {
      step: 4,
      title: 'Add a Follow-Up Reminder',
      action:
        'Configure a second message sent forty-eight hours after the initial request for clients who have not posted a review. Keep it brief and low-pressure: "Just a gentle reminder — if you have a moment to share your experience, here is the link: [URL]. No pressure at all." This second touchpoint typically captures an additional ten to fifteen percent of reviews.',
      expectedResult: 'A two-step sequence that maximises review capture without feeling pushy.',
    },
    {
      step: 5,
      title: 'Set Up Review Tracking and Reporting',
      action:
        'Create a weekly report showing: review requests sent, reviews received, response rate, average star rating, and total review count growth. Break down by stylist to see who generates the most reviews. Compare your weekly review velocity against your top competitors. Set a monthly target based on appointment volume.',
      expectedResult:
        'Weekly visibility into review generation with stylist-level insights and competitive tracking.',
    },
  ],
};

const caseExample = {
  businessType: 'Hair and Beauty Salon (Manchester, 6 stylists)',
  problem:
    'A six-stylist salon saw two hundred clients per month but gained only three to four new Google reviews. Their total stood at forty-seven after three years. Two nearby competitors had one hundred and ninety and two hundred and thirty reviews respectively, dominating the local search results. The salon spent over one thousand pounds per month on paid advertising to compensate for low organic visibility.',
  solution:
    'We implemented post-appointment review automation: every completed visit triggered a two-hour delayed SMS with a personalised message and direct Google review link, followed by a forty-eight-hour reminder. Weekly reporting tracked review velocity by stylist. The team focused on service quality while the system handled review generation.',
  result:
    'New reviews increased from three to four per month to eighteen to twenty-two per month. Total review count grew from forty-seven to one hundred and forty within five months. The salon entered the local map pack for "hair salon" and "salon near me" searches. Organic enquiries increased to the point where paid advertising spend was reduced by forty percent while total new client volume remained stable.',
  stat: '198% review growth in five months with post-appointment automation',
};

const faqs = [
  {
    question: 'Will clients find automated review requests from a salon annoying?',
    answer:
      'Not when the message is personalised, well-timed, and low-pressure. A thank-you message two hours after an appointment — referencing the specific service and stylist — feels like a natural extension of the service. Clients who do not want to review simply ignore the message. In practice, the most common response is clients saying they meant to leave a review and appreciated the reminder.',
  },
  {
    question: 'Should we ask every client or only those we think had a great experience?',
    answer:
      'Ask every client. Selective asking introduces bias and misses the majority of potential reviews. You cannot reliably predict who will leave a positive review. Clients who seem neutral during checkout often leave enthusiastic reviews once they see the final result at home. The system should be universal and consistent.',
  },
  {
    question: 'How long before we see a difference in local search rankings?',
    answer:
      'New reviews begin appearing within the first week. Google treats review velocity as a ranking signal, so consistent weekly reviews start influencing rankings within four to six weeks. Meaningful ranking improvement — such as entering the local map pack — typically requires two to three months of sustained review growth.',
  },
];

const finalCta = {
  title: 'Build Your Salon Review Automation System',
  description:
    'Our Reputation Automation services implement the full review system — post-appointment triggers, personalised SMS, direct review links, and velocity tracking — so your salon builds the review profile its work deserves.',
};

export const reviewAutomationSetupGuideForSalons: ResourceData = {
  slug,
  seo: {
    title: 'Review Automation Setup Guide for Salons',
    description:
      'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
    canonical,
  },
  title: 'Review Automation Setup Guide for Salons',
  description:
    'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
  category: 'reputation-review',
  publishedAt: '2026-04-06',
  systems: ['reputation-review'],
  industries: ['salon'],
  topics: ['review-automation'],
  primaryService: 'reputation-review',
  sections: [
    {
      type: 'hero',
      heading: 'Review Automation Setup Guide for Salons',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Salons Struggle with Review Volume',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Low Review Counts for Salons:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The review facts every salon needs to understand:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Review Automation',
      content: [
        'The operational difference when review requests are automated after every salon appointment:',
      ],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon Review Automation Architecture',
      content: [
        'Reviews Through Systems',
        'Effective salon review automation combines post-appointment triggers, personalised messaging, and growth tracking:',
      ],
      benefit:
        'When every completed appointment triggers a personalised review request, your review profile grows in proportion to your client volume rather than client memory.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ["How review automation transformed a salon's online presence:"],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The Salon Review Automation Setup Checklist',
      content: ['Follow these steps to build your review automation system:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about review automation for salons:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('reputation-review'),
      content: getRelatedResourcesContent('reputation-review'),
      resources: getRelatedResources('reputation-review', canonical),
    },
  ],
};
