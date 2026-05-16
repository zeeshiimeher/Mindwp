import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'responding-to-negative-reviews-systematically';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Systematic negative review response is a structured process for handling critical reviews using predefined templates, escalation paths, and resolution timelines. Instead of reacting emotionally or ignoring the review, a systematic approach ensures every negative review receives a professional, timely response that demonstrates accountability and offers resolution.',
  problem:
    'Negative reviews sit unanswered for days or receive defensive responses that make the situation worse because you have no standard process for handling them',
  promise:
    'You will learn how to build a systematic response process that handles every negative review professionally, resolves underlying issues, and demonstrates to future customers that you take service quality seriously',
};

const takeaways = [
  'The audience for your response is not the reviewer — it is every future customer reading that review',
  'Response time matters: reviews answered within 24 hours show active management to prospects',
  'A standard response framework prevents emotional reactions while still feeling personal',
  'Resolution follow-up can convert negative reviews into updated positive ones',
];

const problem = {
  description: [
    'Negative reviews damage trust in two ways. First, the review itself describes a bad experience. Second, no response — or a defensive one — tells future customers that the business does not care or cannot accept criticism. Both signals drive prospects to competitors.',
    'Most service businesses handle negative reviews reactively: the owner sees a bad review, feels frustrated, and either ignores it or writes a defensive response. Neither approach is strategic. Both leave money on the table because future customers reading that review will form their impression based on how you responded, not just what was said.',
  ],
  causes: [
    'No notification system when negative reviews appear',
    'Reviews discovered days or weeks after posting',
    'Responses written in frustration without review or template',
    'No escalation path from review response to customer resolution',
    'Defensive tone that validates the reviewer complaints',
    'No follow-up after resolution to request review update',
  ],
};

const businessCosts = [
  'An unanswered negative review signals to every future prospect that you do not monitor or care about customer feedback. Studies show 45% of consumers are more likely to visit a business that responds to negative reviews. Silence costs you nearly half your potential conversions from review readers.',
  'A defensive response is worse than silence. It confirms the reviewer perception and tells future customers they can expect the same treatment. One defensive reply can neutralise the trust built by dozens of positive reviews.',
  'Without a resolution follow-up, resolved issues remain as negative reviews permanently. 33% of customers who receive a satisfactory resolution will update or remove their negative review — but only if asked.',
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Set Up Instant Review Notifications',
      action:
        'Configure alerts for new Google reviews. Google Business Profile sends email notifications by default — ensure they go to someone who checks daily. For faster response, use a review monitoring tool that sends SMS or Slack alerts for any review below 4 stars. Your target: awareness within 1 hour of posting.',
      expectedResult:
        'Immediate awareness of every new negative review, enabling response within a few hours instead of days.',
    },
    {
      step: 2,
      title: 'Create a Response Template Framework',
      action:
        'Build 3 response templates: (1) Legitimate complaint — acknowledge, apologise, offer resolution contact. (2) Misunderstanding — clarify politely, offer to discuss. (3) Unreasonable/fake — brief professional acknowledgement. Each template follows: Thank → Acknowledge → Take Responsibility → Offer Resolution → Move Offline. Personalise each response with specific details from the review.',
      expectedResult:
        'A framework that ensures consistent, professional responses while preventing emotional reactions.',
    },
    {
      step: 3,
      title: 'Implement Resolution Follow-Up',
      action:
        'After resolving the underlying issue with the customer (phone call, re-service, partial refund), wait 48 hours then send a personal message: "I hope we have resolved the issue to your satisfaction. If so, we would appreciate if you considered updating your review to reflect your complete experience." Do not pressure — request politely once.',
      expectedResult:
        'A percentage of resolved negative reviews updated to reflect the resolution, improving your overall rating.',
    },
  ],
};

const checklist = [
  'Review monitoring notifications configured (< 1 hour awareness)',
  'Response templates created for 3 scenarios (legitimate, misunderstanding, unreasonable)',
  'Response framework defined: Thank → Acknowledge → Responsibility → Resolution → Offline',
  'Response time target set: within 24 hours, ideally same day',
  'Designated responder assigned with backup',
  'Escalation path defined for serious complaints',
  'Resolution process documented with follow-up timeline',
  'Review update request template prepared for resolved issues',
  'Monthly analysis of negative review themes for pattern detection',
  'Team trained on the response process and escalation triggers',
];

const faqs = [
  {
    question: 'Should I respond to obviously fake reviews?',
    answer:
      'Yes, respond briefly and professionally: "We do not have a record of this service. We would appreciate the opportunity to look into this — please contact us at [phone/email] with your booking details." This signals to future readers that the review may be inaccurate. Also flag the review through the platform reporting mechanism.',
  },
  {
    question: 'How long should my responses be?',
    answer:
      '3-5 sentences is ideal. Long responses look defensive. Short responses look dismissive. Aim for: acknowledgement, brief accountability, and an offer to resolve offline. The goal is to demonstrate professionalism to future readers, not to win an argument with the reviewer.',
  },
  {
    question: 'Should I offer compensation publicly in responses?',
    answer:
      'Never mention specific compensation in a public response. This incentivises others to leave negative reviews expecting the same. Instead, say "We would like to make this right — please contact us directly at [phone]." Handle the specifics of resolution privately.',
  },
];

const finalCta = {
  title: 'Systematise Your Review Response Process',
  description:
    'Our Reputation & Review Systems monitor every review, alert your team to negatives instantly, and provide frameworks for professional responses that protect your reputation.',
};

export const respondingToNegativeReviewsSystematically: ResourceData = {
  slug,
  seo: {
    title: 'Responding to Negative Reviews Systematically Guide',
    description:
      'Build a systematic process for handling negative reviews with professional templates, fast response times, and resolution follow-up that protects your reputation.',
    canonical,
  },
  title: 'Responding to Negative Reviews Systematically Guide',
  description:
    'Build a systematic process for handling negative reviews with professional templates, fast response times, and resolution follow-up that protects your reputation.',
  category: 'reviews-proof',
  publishedAt: '2026-01-05',
  primarySystem: 'reputation-review-systems',
  industries: [],
  topics: ['negative-reviews', 'negative-review-response'],
  primaryService: 'reputation-review-systems',
  sections: [
    {
      type: 'hero',
      heading: 'Responding to Negative Reviews Systematically',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of negative review management:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Negative Reviews Do More Damage Than You Think',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Review Response Process Is Broken:',
    },
    {
      type: 'business-costs',
      heading: 'The Real Cost of Poor Review Response',
      content: ['What unanswered or poorly answered negative reviews cost your business:'],
      items: businessCosts,
    },
    {
      type: 'diy',
      heading: 'Build Your Negative Review Response System',
      content: ['Steps to systematise your response process:'],
      steps: diy.steps,
    },
    {
      type: 'checklist',
      heading: 'Negative Review Response Checklist',
      content: ['Ensure your response system is complete:'],
      items: checklist,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about handling negative reviews:'],
      items: faqs,
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
