import { Camera, MessageSquare, Star } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'salon-review-generation-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Salons are visual, emotional businesses where reviews directly drive bookings. A potential client choosing between two salons will almost always pick the one with more reviews, better photos, and recent positive feedback. Salon review generation automates the collection of reviews after every appointment, building a Google profile rich with photos, stylist mentions, and service details that attracts new clients and improves local search rankings.',
  problem:
    'Your salon produces stunning results but your Google reviews do not reflect it because stylists are too busy to ask and clients forget to review after they leave',
  promise:
    'You will see how salons implement automated review generation that collects photo-rich, stylist-specific reviews after every appointment, building the social proof that drives booking decisions',
};

const takeaways = [
  'Salon reviews with photos are 3-5x more influential than text-only reviews for booking decisions',
  'Reviews mentioning specific stylists build individual reputations that retain clients',
  'The optimal review request timing for salons is 2-4 hours after the appointment — when clients are showing off their new look',
  'Consistent weekly review velocity matters more than total review count for local search ranking',
];

const problem = {
  description: [
    'Salon work is inherently shareable — clients love showing off a great haircut, colour, or treatment. Yet this natural enthusiasm rarely translates into Google reviews without a system. The gap is timing and friction: clients feel great when they leave the salon, but by the time they get home, the impulse to review has passed. The next day, it is forgotten entirely.',
    'This review gap costs salons in two ways. First, in local search: Google ranks businesses with fresh, relevant reviews higher in local results. A salon adding 2 reviews per month will be outranked by a competitor adding 10. Second, in conversion: 85%+ of salon bookings involve checking reviews first. A salon with 50 reviews loses bookings to a competitor with 200 — even if the work quality is identical.',
  ],
  causes: [
    'Stylists occupied with the next client and cannot ask for reviews at checkout',
    'No automated review request tied to appointment completion',
    'Clients enthusiastic at checkout but forget to review by the time they get home',
    'No photo prompts — despite salon work being highly visual',
    'Review requests not personalised to stylist or service type',
    'No follow-up for clients who did not respond to the first request',
  ],
};

const caseExample = {
  businessType: 'Hair and Beauty Salon (Sheffield, 10 stylists)',
  problem:
    'A well-established salon with 10 stylists had 134 Google reviews — accumulated over 7 years. Their monthly review rate was 1-2 reviews, almost all from clients who spontaneously reviewed. A newer salon 2 miles away had 280 reviews and was ranking above them for "hair salon [area]." Despite higher prices and longer wait times, the newer salon was winning comparison shoppers purely on social proof.',
  solution:
    'We implemented automated review generation: 2 hours after each appointment (when clients are styling and photographing their new look), an SMS was sent: "Loving your new [service type]? A photo review helps other clients find their perfect stylist! [link]." The message was personalised with the stylist name and service. For colour services — the most visual — a second prompt at 24 hours: "How are you enjoying your new colour today? [link]." A satisfaction gate filtered unhappy clients to private feedback.',
  result:
    'Monthly reviews increased from 1.5 to 18. Photo reviews — previously rare — accounted for 42% of new reviews. Within 6 months, total reviews grew from 134 to 242, surpassing the competitor. Reviews mentioning specific stylists became a booking driver: "I want the stylist from the reviews." Local pack ranking improved from 3rd to 1st. The salon noticed a measurable increase in first-time bookings requesting specific stylists by name.',
  stat: 'Monthly reviews increased 12x (from 1.5 to 18) with 42% including photos',
};

const solutions = [
  {
    title: 'Post-Appointment Review Timing',
    description:
      'The review request sends 2-4 hours after the appointment — the sweet spot when clients are most excited about their new look and most likely to have taken photos. This timing catches the moment when they are showing friends or posting on social media. The request links directly to the Google review form, removing friction. For colour and major transformations, a second prompt at 24 hours catches clients who want to see the colour settle first.',
    icon: Star,
  },
  {
    title: 'Photo Review Encouragement',
    description:
      'Salon work is visual — and photo reviews are dramatically more persuasive than text. The review prompt specifically asks for photos: "If you have a moment to include a photo, it helps other clients see what we can do!" Google review listings with photos receive significantly more views and clicks. For salons, each photo review is essentially free marketing that lives permanently on your Google profile.',
    icon: Camera,
  },
  {
    title: 'Stylist-Specific Review Building',
    description:
      'Review requests are personalised: "Thanks for visiting [Stylist Name] today for your [service]." This prompts reviews that mention the stylist by name — building individual reputations. These stylist-specific reviews become a retention and acquisition tool: new clients book specific stylists based on their reviews, and existing clients feel connected to their stylist publicly. It also creates healthy competition among your team.',
    icon: MessageSquare,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Get Your Google Review Link and Test It',
      action:
        'From Google Business Profile, get your direct review link. Shorten it for SMS. Test it on mobile — this is how most clients will use it. The link should open the Google review form directly, with your business pre-selected, requiring the client only to tap stars, type, and optionally add a photo. Remove any friction in this path.',
      expectedResult:
        'A short, mobile-optimised link that takes clients directly to your Google review form in one tap.',
    },
    {
      step: 2,
      title: 'Create Service-Specific Review Messages',
      action:
        'Write SMS templates for your main service categories. Cut/style: "Thanks for visiting [Stylist] today! Loving your new look? A quick review (with photo!) helps others find their perfect stylist: [link]." Colour: "How is your new colour looking? If you are happy, a photo review helps us show what we do: [link]." Treatment: "We hope you are feeling refreshed. A quick review helps us help more clients: [link]." Personalise with the stylist name from the booking system.',
      expectedResult:
        'Review request templates tailored to each service type that prompt relevant, detailed reviews with photos.',
    },
    {
      step: 3,
      title: 'Automate and Add Satisfaction Gate',
      action:
        'Connect to your booking system: when an appointment is marked complete, wait 2 hours, then send the matching review message. Before the review link, add a quick satisfaction check: "How was your experience today? Reply 1-5." Clients rating 4-5 get the review link. Clients rating 1-3 get a private feedback message routed to the salon manager. This protects your public profile while catching service issues.',
      expectedResult:
        'A fully automated system where every completed appointment generates a timed, personalised review request with unsatisfied clients handled privately.',
    },
  ],
};

const finalCta = {
  title: 'Automate Review Generation for Your Salon',
  description:
    'Our Reputation & Review Systems connect to your booking platform and automatically collect photo-rich, stylist-specific reviews after every appointment — building the social proof that drives bookings.',
};

export const salonReviewGenerationFramework: ResourceData = {
  slug,
  title: 'Salon Review Generation Framework',
  description:
    'See how salons automate review collection with photo prompts, stylist-specific personalisation, and post-appointment timing to build the Google review profile that drives booking decisions.',
  category: 'reputation-review',
  publishedAt: '2026-02-07',
  systems: ['reputation-review'],
  industries: ['salon'],
  topics: ['review-generation'],
  primaryService: 'reputation-review',
  seo: {
    title: 'Salon Review Generation Framework',
    description:
      'See how salons automate review collection with photo prompts, stylist-specific personalisation, and post-appointment timing to build the Google review profile that drives booking decisions.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Salon Review Generation Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for salon review generation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Great Salon Work Does Not Automatically Earn Great Reviews',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Salon Review Gaps:',
    },
    {
      type: 'case',
      heading: 'Real-World Salon Example',
      content: ['How systematic review generation transformed a salon review profile:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Salon Review Generation',
      content: ['Steps specific to salon review collection:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Salon Review Generation Architecture',
      content: [
        'Automated Review Collection for Salons',
        'A review system designed for visual, stylist-driven businesses:',
      ],
      benefit:
        'When every salon appointment automatically generates a timed, personalised review request with photo prompts, you build the visual social proof that clients use to choose their next salon.',
      solutions,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: primaryCta.href,
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
