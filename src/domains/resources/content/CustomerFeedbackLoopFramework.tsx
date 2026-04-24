import { BarChart3, MessageCircle, RotateCcw } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'customer-feedback-loop-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A customer feedback loop is a structured system that collects customer input after service delivery, analyses it for patterns, and routes it to the appropriate action — whether that is a public review, a private resolution, or a process improvement. Unlike one-off surveys, a feedback loop is continuous, automated, and connected to your operations.',
  problem:
    'You occasionally hear from unhappy customers after they post a negative review, but you have no system to consistently capture feedback and act on it before problems become public',
  promise:
    'You will learn how to build a feedback loop that captures customer sentiment after every job, routes positive experiences to reviews, negative experiences to resolution, and patterns to operational improvement',
};

const takeaways = [
  'A feedback loop captures sentiment from every customer, not just the vocal minority',
  'Satisfaction gates route happy customers to reviews and unhappy customers to private resolution',
  'Pattern analysis identifies recurring issues before they become systemic problems',
  'Closed-loop feedback improves service quality, review scores, and customer retention simultaneously',
];

const problem = {
  description: [
    'Most service businesses only hear feedback at the extremes — glowing praise or angry complaints. The majority of customers, including those who were mildly dissatisfied, say nothing. This creates a blind spot where service issues persist undetected until they cause enough frustration to generate a negative review.',
    'Without a structured loop, feedback is anecdotal. A technician might mention that a customer seemed unhappy, but there is no record, no analysis, and no systematic response. Issues that affect 10-15% of customers go unaddressed because no one aggregates the data to see the pattern.',
  ],
  causes: [
    'No systematic feedback collection after every job',
    'Feedback only surfaces at extremes — praise or complaints',
    'No satisfaction check before routing to public review platforms',
    'Negative experiences become public reviews instead of private resolutions',
    'No pattern analysis across feedback to identify recurring issues',
    'Team unaware of service quality trends until negative reviews appear',
  ],
};

const comparison = {
  before: {
    title: 'No Feedback System',
    items: [
      'Feedback is anecdotal and inconsistent',
      'Team hears from extremes only — praise or complaints',
      'Unhappy customers go straight to public platforms',
      'Recurring issues go undetected for months',
      'No data to identify service quality trends',
      'Improvements are reactive — only after obvious problems',
    ],
  },
  after: {
    title: 'Structured Feedback Loop',
    items: [
      'Every customer provides feedback after service',
      'Sentiment captured across the full spectrum',
      'Unhappy customers routed to private resolution first',
      'Patterns identified early from aggregated data',
      'Weekly quality trends visible in CRM dashboard',
      'Improvements are proactive — addressing issues before they escalate',
    ],
  },
};

const solutions = [
  {
    title: 'Automated Post-Service Feedback Collection',
    description:
      'A CRM-triggered message goes to every customer within hours of service completion. A simple satisfaction question (thumbs up/down or 1-5 rating) captures baseline sentiment. High scores trigger a review request. Low scores trigger a private feedback form and team alert. Every customer is heard — not just the loud ones.',
    icon: MessageCircle,
  },
  {
    title: 'Closed-Loop Resolution Process',
    description:
      'When a customer reports dissatisfaction, the system creates a resolution task assigned to the service manager. The manager contacts the customer, resolves the issue, and marks the task complete. If resolved positively, the customer receives a follow-up review request. This converts potential negative reviews into recovery stories.',
    icon: RotateCcw,
  },
  {
    title: 'Pattern Analysis and Operational Improvement',
    description:
      'Aggregated feedback data reveals patterns: specific service types with lower satisfaction, individual technicians receiving consistent complaints, time-of-day issues, or communication gaps. Monthly analysis converts this data into specific operational improvements that prevent future dissatisfaction at the source.',
    icon: BarChart3,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Add a Post-Service Satisfaction Check',
      action:
        'Set up an automated SMS sent 2-3 hours after job completion: "Hi [Name], how was your experience with [Business Name] today? Reply 1-5 (1 = poor, 5 = excellent)." Alternatively, use a simple landing page with thumbs up/down. The goal is one-touch feedback — make it as easy as possible.',
      expectedResult:
        'Baseline satisfaction data from a significant percentage of customers, giving you visibility into service quality.',
    },
    {
      step: 2,
      title: 'Route Based on Satisfaction Score',
      action:
        'Build two paths: scores of 4-5 receive a follow-up with your Google review link. Scores of 1-3 receive a private feedback form asking what went wrong, plus a team notification. The routing should be automatic — no manual sorting required.',
      expectedResult:
        'Happy customers directed to public reviews. Unhappy customers directed to private resolution before they post publicly.',
    },
    {
      step: 3,
      title: 'Review Patterns Monthly',
      action:
        'At the end of each month, export your satisfaction data. Calculate: average score, score distribution (what percentage 1-2, 3, 4-5), any patterns by service type, technician, or day of week. Identify the top 2 issues causing low scores and assign specific improvements.',
      expectedResult:
        'Data-driven insights that identify your biggest service quality opportunities and track improvement over time.',
    },
  ],
};

const caseExample = {
  businessType: 'Electrical Contractor (Leeds)',
  problem:
    'An electrical contractor had a 4.2-star Google rating and was receiving 1-2 negative reviews per month. They did not know why — the team reported no complaints. The negative reviews mentioned poor communication about appointment timing and mess left after installations.',
  solution:
    'We implemented a feedback loop: every customer received a satisfaction check after job completion. Low scores triggered a private feedback form and manager alert. Monthly pattern analysis was introduced. Within weeks, two issues emerged: appointment windows not communicated clearly, and a specific team not following clean-up procedures.',
  result:
    'After addressing the two issues, satisfaction scores improved from 4.2 to 4.7 average. Negative reviews dropped from 1-2 per month to zero for 4 consecutive months. Positive review volume increased 40% because happy customers were systematically asked.',
  stat: 'Rating improved from 4.2 to 4.7 stars; negative reviews dropped to zero for 4 months',
};

const faqs = [
  {
    question: 'What response rate should I expect from post-service feedback requests?',
    answer:
      'SMS-based satisfaction checks typically get 30-50% response rates when sent within 2-4 hours of service completion. Keep the response mechanism as simple as possible — a single number reply or one-tap rating. Longer surveys drop response rates significantly.',
  },
  {
    question: 'Is this review gating? Is it allowed?',
    answer:
      'Asking all customers for feedback and only sending the review link to satisfied ones could be considered review gating, which Google discourages. The recommended approach: ask everyone for feedback, then ask everyone for a review. The satisfaction check routes unhappy customers to resolution first, but they can still leave a public review. The goal is resolution, not suppression.',
  },
  {
    question: 'How quickly should I respond to negative feedback?',
    answer:
      'Within 4 hours during business hours. Speed is critical for two reasons: the customer is still thinking about the experience and is more receptive to resolution, and a fast response prevents the frustration from escalating to a public review. Set up instant notifications for low satisfaction scores.',
  },
];

const finalCta = {
  title: 'Implement a Customer Feedback Loop That Protects Your Reputation',
  description:
    'Our Reputation & Review Systems capture feedback from every customer, resolve issues privately, and route satisfied customers to public reviews automatically.',
};

export const customerFeedbackLoopFramework: ResourceData = {
    slug,
    seo: {
    title: 'Customer Feedback Loop Framework',
    description:
      'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
    canonical,
  },
    title: 'Customer Feedback Loop Framework',
    description:
    'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
    category: 'reputation-review',
    publishedAt: '2025-12-13',
    systems: ['reputation-review'],
    industries: [],
    topics: ['customer-feedback', 'feedback-loops'],
    primaryService: 'reputation-review',
    sections: [
    {
      type: 'hero',
      heading: 'Customer Feedback Loop Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'The Invisible Service Quality Problem',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Have a Feedback Blind Spot:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of customer feedback loops:'],
      items: takeaways,
    },
    {
      type: 'solution-cards',
      heading: 'The Feedback Loop Architecture',
      content: [
        'Continuous Quality Intelligence',
        'A feedback loop that captures, routes, and learns from every customer interaction:',
      ],
      benefit:
        'When feedback is collected systematically, you identify and fix service issues before they become reputation problems, while simultaneously generating more positive reviews from satisfied customers.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'Reactive vs Proactive Feedback',
      content: ['The difference between hearing feedback and having a feedback system:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How a feedback loop revealed hidden service issues:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Build Your Feedback Loop',
      content: ['Steps to implement systematic feedback collection:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about customer feedback loops:'],
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
  ]
};
