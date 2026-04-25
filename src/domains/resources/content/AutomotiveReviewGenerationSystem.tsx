import { MessageSquare, Star, Wrench } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'automotive-review-generation-system';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Auto repair shops face a unique trust challenge. Customers fear being overcharged or having unnecessary work recommended. The most converting reviews contain trust signals — words like "honest", "transparent pricing", and "showed me the old parts." A review generation system designed for automotive businesses captures these trust-building reviews at the right moment: after vehicle collection, not at the point of invoice. Timing matters because the customer\'s satisfaction peaks when they drive away in a working vehicle, not when they are handing over money.',
  problem:
    'Your garage has loyal customers who trust your work but never leave reviews, while a newer competitor with aggressive review tactics ranks above you in local search results',
  promise:
    'You will see how auto repair shops implement review generation systems that capture trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and include satisfaction gates that protect your reputation — building the online trust that converts searchers into customers',
};

const takeaways = [
  'Trust-signal reviews ("honest", "transparent pricing", "showed me the old parts") convert searchers at significantly higher rates than generic star ratings',
  'Review requests sent 3 hours after vehicle collection — not at job completion — capture peak customer satisfaction and generate more detailed responses',
  'MOT passes are easy review wins: the customer is relieved and happy, making them highly likely to leave a positive review when prompted',
  'Service-type segmentation tailors review prompts to the work performed, encouraging specific trust-building language in each review',
];

const problem = {
  description: [
    'Most auto repair shops rely on organic reviews — the occasional customer who spontaneously posts on Google. This creates two problems. First, volume is low: even excellent garages with decades of loyal customers may have fewer than 100 reviews. Second, the reviews that do appear tend to be generic ("great service, would recommend") rather than containing the trust signals that overcome the fundamental fear of auto repair: being overcharged for unnecessary work.',
    "The competitive implication is severe. A newer, less experienced garage that actively generates reviews will outrank an established, trusted shop in local search. Google's algorithm weights review volume and recency heavily. A garage with 240 reviews at 4.7 stars will appear above a garage with 78 reviews at 4.9 stars. The established garage loses not because of quality, but because of visibility.",
  ],
  causes: [
    'No systematic review request process — relying on customers to remember',
    'Review requests at the wrong moment (invoicing rather than collection)',
    'Generic prompts that generate generic reviews without trust signals',
    'No segmentation by service type for tailored review prompts',
    'No satisfaction gate to catch unhappy customers before they post publicly',
    'Fear of asking for reviews after expensive or unexpected repair bills',
  ],
};

const caseExample = {
  businessType: 'Established Independent Garage (Hertfordshire, 3 mechanics)',
  problem:
    'An established garage with 15 years of loyal customers had 78 Google reviews. A newer competitor 2 miles away, open only 3 years, had 240 reviews and consistently appeared above them in local search results. The established garage was generating approximately 2 new reviews per month organically. Despite superior technical ability and a loyal customer base, they were losing new customer inquiries to the more visible competitor.',
  solution:
    'We implemented a collection-triggered review system. When the service advisor marked a job as "collected" in the CRM, the customer received an SMS 3 hours later. The message was segmented by service type: MOT passes received "Great news on passing your MOT — would you share your experience?" Service customers received prompts mentioning transparency and trust. A satisfaction gate asked customers to rate 1-5 first; scores below 4 triggered a private feedback form instead of a Google review link. Trust-focused prompts encouraged specific language about honesty, pricing transparency, and communication.',
  result:
    'Monthly review generation increased from 2 to 14 reviews. Over 9 months, total reviews grew from 78 to 204. The content of reviews shifted dramatically — 68% now contained trust signals like "honest", "explained everything", "fair price", and "showed me the parts." The garage moved into the local pack first position. Website inquiries increased by 32%. The satisfaction gate caught 11 unhappy customers who received direct manager follow-up, preventing negative public reviews and recovering 8 of those relationships.',
  stat: 'Reviews grew from 78 to 204 in 9 months with 68% containing trust signals, achieving local pack 1st position and 32% more inquiries',
};

const solutions = [
  {
    title: 'Collection-Triggered Review Requests',
    description:
      'Review requests are triggered automatically when a vehicle is marked as collected in the CRM — not when the invoice is raised. A 3-hour delay ensures the customer has driven home, confirmed the repair is satisfactory, and is in a positive mindset. This timing consistently outperforms immediate post-service requests. The system handles the entire flow: trigger detection, delay, SMS delivery, and response tracking.',
    icon: Star,
  },
  {
    title: 'Trust-Focused Review Prompts',
    description:
      'Generic review requests generate generic reviews. Service-specific prompts guide customers toward mentioning the trust signals that matter most for auto repair: pricing transparency, honest diagnosis, communication quality, and showing old parts. MOT prompts focus on efficiency and pass rates. Service prompts focus on thoroughness and transparency. Repair prompts focus on diagnosis accuracy and fair pricing. Each prompt type generates reviews that address the specific fears of potential customers searching for that service.',
    icon: MessageSquare,
  },
  {
    title: 'Service-Type Review Segmentation',
    description:
      'Different service types warrant different review approaches. MOT passes are easy wins — the customer is relieved and happy. Routine servicing reviews build trust around thoroughness and transparency. Major repair reviews are the most valuable but require careful timing, especially if the bill was higher than quoted. The system segments review requests by service type, adjusting timing, prompt language, and follow-up sequences to maximise response rates while protecting against negative reviews from billing-sensitive situations.',
    icon: Wrench,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Get Your Review Link and Write Service-Specific Messages',
      action:
        'Get your Google Business Profile short review link. Write three review request messages segmented by service type: one for MOT passes ("Great news on your MOT pass — would you share your experience?"), one for routine servicing ("We hope your vehicle is running smoothly after its service. If you felt our pricing and communication were transparent, a review helps other customers find a garage they can trust."), and one for repairs ("We\'re glad we could diagnose and fix [issue]. If you felt the process was honest and the pricing fair, a review would mean a lot."). Test each message with a few trusted customers first.',
      expectedResult:
        'Three tailored review request messages ready to send, each designed to prompt trust-signal language specific to the service type performed.',
    },
    {
      step: 2,
      title: 'Trigger Review Requests from Vehicle Collection',
      action:
        'Set up your review request to send 3 hours after the customer collects their vehicle — not when the job is completed or invoiced. If using a CRM, create an automation triggered by the "collected" status. If manual, set a daily reminder to send messages to customers who collected that morning. The 3-hour delay is critical: it allows the customer to drive home, confirm the vehicle is working properly, and settle into a positive frame of mind before receiving the request.',
      expectedResult:
        'Review requests consistently sent at peak satisfaction timing, leading to higher response rates and more detailed, positive reviews.',
    },
    {
      step: 3,
      title: 'Add a Satisfaction Gate and Follow-Up',
      action:
        'Before sending customers directly to Google, ask them to rate their experience 1-5. Scores of 4-5 receive the Google review link. Scores of 1-3 receive a private feedback form that goes directly to the manager. This satisfaction gate prevents unhappy customers from posting negative public reviews while giving you the opportunity to resolve issues privately. Follow up personally with every low score within 24 hours — this recovery process often converts unhappy customers into loyal ones.',
      expectedResult:
        'Negative experiences are caught privately and resolved before reaching Google, while happy customers are directed to leave trust-building public reviews.',
    },
  ],
};

const finalCta = {
  title: 'Build a Review Generation System for Your Garage',
  description:
    'Our Reputation & Review Systems capture trust-building reviews timed to vehicle collection, segment prompts by service type, and protect your reputation with satisfaction gates — building the online authority that converts searchers into customers.',
};

export const automotiveReviewGenerationSystem: ResourceData = {
  slug,
  seo: {
    title: 'Automotive Review Generation System',
    description:
      'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
    canonical,
  },
  title: 'Automotive Review Generation System',
  description:
    'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
  category: 'reputation-review',
  publishedAt: '2026-01-31',
  systems: ['reputation-review'],
  industries: ['automotive'],
  topics: ['review-generation'],
  primaryService: 'reputation-review',
  sections: [
    {
      type: 'hero',
      heading: 'Automotive Review Generation System',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Key lessons for automotive review generation:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Established Garages Lose Visibility to Newer Competitors',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Review Generation Failures in Auto Repair:',
    },
    {
      type: 'case',
      heading: 'Real-World Automotive Review Example',
      content: ['How a trust-focused review system transformed garage visibility:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Set Up Review Generation for Your Garage',
      content: ['Steps specific to auto repair review generation:'],
      steps: diy.steps,
    },
    {
      type: 'solution-cards',
      heading: 'The Automotive Review Generation Architecture',
      content: [
        'Trust-Focused Review Generation for Auto Repair',
        'A system designed to capture the reviews that overcome auto repair trust barriers:',
      ],
      benefit:
        'When your review system captures trust-signal reviews timed to vehicle collection and segmented by service type, you build the online reputation that makes searchers choose your garage over competitors with more generic reviews.',
      solutions,
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
