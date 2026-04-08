import { BarChart3, MousePointerClick, Target } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'conversion-architecture-for-service-websites';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Conversion architecture is the structural design of a website that turns visitors into leads and leads into booked jobs. It is not about button colours or headline copy — it is about how pages, forms, and systems work together to move people through a decision path.',
  problem:
    'Your website generates traffic but converts poorly because pages are structured for information display, not for guiding visitors toward action',
  promise:
    'You will understand how conversion architecture connects page structure, form placement, and system integration to increase the percentage of visitors who become booked customers',
};

const takeaways = [
  'Conversion architecture is structural, not cosmetic — it is about page and system design',
  'Every service page needs a clear decision path from problem to action',
  'Forms, booking widgets, and CTAs must connect to CRM and follow-up systems',
  'Conversion tracking must measure business outcomes, not just clicks',
];

const problem = {
  description: [
    'Most service business websites have conversion rates between 1-3%. The pages provide information but do not guide visitors through a decision process. Call-to-action buttons exist, but they are placed based on design convention rather than visitor intent.',
    'The deeper issue is that conversion is treated as a design problem — change the button colour, rewrite the headline. Real conversion improvements come from structural changes: how pages connect to each other, where forms appear relative to decision points, and whether the system follows up after initial contact.',
  ],
  causes: [
    'Pages structured as information dumps instead of decision paths',
    'Call-to-action placement based on design templates rather than visitor behaviour',
    'Forms collect contact details but do not route to CRM with context',
    'No systematic follow-up after a visitor shows interest but does not convert',
    'Conversion measured by form submissions instead of booked appointments',
    'Service pages do not address specific objections before asking for action',
  ],
};

const comparison = {
  before: {
    title: 'Information-First Pages',
    items: [
      'Service description followed by generic contact form',
      'Single CTA at the bottom of the page',
      'No objection handling before the ask',
      'Form goes to email — no follow-up automation',
      'Success measured by page views and form fills',
      'Same page structure for every service type',
    ],
  },
  after: {
    title: 'Conversion-Architected Pages',
    items: [
      'Problem-solution narrative leading to contextual CTA',
      'Multiple conversion points matched to visitor intent stage',
      'Social proof and objection handling precede every action point',
      'Form connects to CRM with tagging, routing, and follow-up',
      'Success measured by booked jobs and pipeline value',
      'Page structure adapted to service complexity and buyer journey',
    ],
  },
};

const solutions = [
  {
    title: 'Decision-Path Page Structure',
    description:
      'Each service page follows a structured flow: problem identification, solution explanation, social proof, objection handling, and contextual call-to-action. The sequence mirrors how buyers make decisions, not how businesses want to present information.',
    icon: Target,
  },
  {
    title: 'Intent-Matched Conversion Points',
    description:
      'Different visitors arrive at different stages of readiness. Conversion architecture places appropriate actions at each stage: information requests for early-stage visitors, booking widgets for ready-to-act visitors, and phone CTAs for urgent needs.',
    icon: MousePointerClick,
  },
  {
    title: 'Revenue-Connected Tracking',
    description:
      'Conversion tracking extends beyond form submissions to measure pipeline value and booked revenue. You know which pages generate the most valuable leads, not just the most clicks. This data drives architecture improvements.',
    icon: BarChart3,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Page Decision Paths',
      action:
        'Visit your top 3 service pages as if you were a potential customer. For each page, document: what problem does it address first, where is the first CTA, what objections are handled before the CTA, and what happens after form submission. Note where the path breaks down.',
      expectedResult:
        'A clear picture of where your current pages lose visitors due to structural problems rather than content problems.',
    },
    {
      step: 2,
      title: 'Add Contextual CTAs to Decision Points',
      action:
        'On your highest-traffic service page, add a conversion point after each major section: after the problem description (soft CTA like "Get a quote"), after social proof (booking CTA), and at the bottom (phone CTA for urgency). Match the action to the visitor intent at that scroll position.',
      expectedResult:
        'Multiple conversion opportunities that match visitor readiness at different points in the page, increasing overall conversion rate.',
    },
    {
      step: 3,
      title: 'Connect Form Submissions to Pipeline Tracking',
      action:
        'Set up your main contact form to send submissions to your CRM with page source, service type, and timestamp. Track each submission through your pipeline to see which pages produce leads that actually book appointments, not just which pages get the most form fills.',
      expectedResult:
        'Revenue-level conversion data that shows which pages and conversion points drive actual business, informing architecture decisions.',
    },
  ],
};

const caseExample = {
  businessType: 'Roofing Company (Birmingham)',
  problem:
    'A roofing company website had 2,000 monthly visitors but only a 1.8% conversion rate. Service pages listed services and had a contact form at the bottom. No follow-up automation existed. The company could not tell which pages produced paying customers.',
  solution:
    'We restructured each service page with conversion architecture: problem-first narrative, social proof placed before CTAs, multiple intent-matched conversion points (quote request, booking, phone), and CRM-connected forms with service-type tagging and automated follow-up.',
  result:
    'Conversion rate increased from 1.8% to 4.6%. More importantly, the company could now see that emergency roof repair pages produced 3x the revenue per lead compared to general roofing pages — allowing them to focus marketing investment.',
  stat: '156% conversion rate increase through structural page architecture changes',
};

const faqs = [
  {
    question: 'Is conversion architecture the same as conversion rate optimisation?',
    answer:
      'CRO typically focuses on testing individual elements — button colours, headlines, form fields. Conversion architecture is structural — it designs the entire page flow and system connections. Architecture changes produce larger and more sustainable improvements than element-level testing.',
  },
  {
    question: 'How many CTAs should a service page have?',
    answer:
      'There is no fixed number. The principle is that every decision point on the page should have an appropriate action available. A long service page might have 3-4 contextual CTAs. A simple page might have 2. The key is matching each CTA to visitor intent at that point in the page.',
  },
  {
    question: 'Does conversion architecture work for all service industries?',
    answer:
      'The principles apply universally but the implementation varies. Emergency services need prominent phone CTAs. High-consideration services like renovations need more content before the ask. The architecture adapts to how your specific customers make decisions.',
  },
  {
    question: 'Can one page be optimised for both SEO and conversions?',
    answer:
      'Yes, if the page is structured around intent instead of stuffing in every keyword or every CTA. SEO brings the right visitor to the page; conversion architecture helps that visitor take the right next step. Problems only arise when pages are written for algorithms first and users second, or when conversion elements interrupt rather than support the decision flow.',
  },
];

const finalCta = {
  title: 'Build Conversion Architecture Into Your Website',
  description:
    'Our Smart Website Systems design every page around decision paths, not templates. Connected to CRM, booking, and follow-up automation so conversions flow into your pipeline automatically.',
};

export const conversionArchitectureForServiceWebsites: ResourceData = {
  slug,
  title: 'Conversion Architecture for Service Websites',
  description:
    'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
  category: 'smart-website-systems',
  publishedAt: '2025-11-05',
  systems: ['smart-website-systems'],
  industries: [],
  topics: ['conversion-optimization'],
  primaryService: 'smart-website-systems',
  seo: {
    title: 'Conversion Architecture for Service Websites',
    description:
      'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Conversion Architecture for Service Websites',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of conversion architecture:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Service Websites Convert Poorly',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Structural Problems That Kill Conversion:',
    },
    {
      type: 'comparison',
      heading: 'Information-First vs Conversion-Architected Pages',
      content: ['The structural difference between pages that inform and pages that convert:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Conversion Architecture Framework',
      content: [
        'Structural Conversion Design',
        'Conversion architecture treats every page as a system component that guides visitors toward action:',
      ],
      benefit:
        'When conversion is built into page architecture rather than bolted on with button tweaks, improvements are larger and more durable across your entire website.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Improve Your Conversion Architecture Today',
      content: ['Start with these structural improvements on your highest-traffic pages:'],
      steps: diy.steps,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How conversion architecture transformed a roofing company website:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about conversion architecture:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/smart-website-systems',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('smart-website-systems'),
      content: getRelatedResourcesContent('smart-website-systems'),
      resources: getRelatedResources('smart-website-systems', canonical),
    },
  ],
};
