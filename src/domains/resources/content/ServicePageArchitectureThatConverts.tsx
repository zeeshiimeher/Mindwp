import { FileText, Layers, Search } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'service-page-architecture-that-converts';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Service pages are where most conversions happen on a service business website. Their architecture — the structure, content flow, and system connections — determines whether visitors take action or leave. Most service pages are designed as information pages, not conversion pages.',
  problem:
    'Your service pages describe what you do but are not structured to guide visitors through a decision and into your booking or enquiry pipeline',
  promise:
    'You will understand how to architect service pages that combine search visibility, decision-path content, and system connections to convert visitors into booked customers',
};

const takeaways = [
  'Service pages should follow a decision-path structure, not an information-dump layout',
  'Each service page needs its own CRM-connected form with service-type context',
  'Page architecture must support both search intent and conversion workflow',
  'Social proof and objection handling should precede every call-to-action',
];

const problem = {
  description: [
    'Most service pages follow a template: service name, description paragraph, list of what is included, maybe a photo gallery, and a generic contact form at the bottom. This structure informs visitors but does not guide them toward action. The page treats every visitor the same regardless of their intent.',
    'The structural problems go deeper. Generic contact forms strip away service context — the CRM does not know which service the lead needs. No social proof appears before the CTA. Objections are unaddressed. Urgent visitors cannot find a phone number. Non-urgent visitors have no lower-commitment option than filling out a full contact form.',
  ],
  causes: [
    'Same page template used for every service regardless of buyer behaviour',
    'Content structured around service features instead of customer problems',
    'Single generic CTA at the bottom of the page',
    'No social proof or trust signals before the ask',
    'Contact form sends to email without service type or page context',
    'No urgency path for time-sensitive service needs',
  ],
};

const comparison = {
  before: {
    title: 'Information-Focused Service Page',
    items: [
      'Service name and description at top',
      'Features list and photo gallery',
      'Generic contact form at bottom',
      'No problem framing before CTA',
      'Same structure for emergency and routine services',
      'Form collects name and message only',
    ],
  },
  after: {
    title: 'Conversion-Architected Service Page',
    items: [
      'Problem statement and search intent match at top',
      'Solution explanation with social proof',
      'Multiple CTAs matched to intent stage',
      'Objection handling before every conversion point',
      'Emergency path with click-to-call prominence',
      'Form includes service type with CRM pipeline routing',
    ],
  },
};

const solutions = [
  {
    title: 'Search-Intent Page Hierarchy',
    description:
      'The page opens with the problem the searcher is trying to solve, not the service name. This matches search intent and immediately validates that the visitor is in the right place. Solution content follows, building toward the first conversion point.',
    icon: Search,
  },
  {
    title: 'Multi-Path Conversion Structure',
    description:
      'Different visitors need different conversion paths. Emergency visitors get a prominent click-to-call. Quote seekers get a service-specific form. Information gatherers get a downloadable resource. Each path routes to the appropriate CRM pipeline with full context.',
    icon: Layers,
  },
  {
    title: 'CRM-Connected Service Context',
    description:
      'Every service page passes its service type to the CRM. When a visitor submits a form on the boiler repair page, the CRM record is tagged with boiler repair, the page URL, and the visitor source. Pipeline routing happens automatically based on service type.',
    icon: FileText,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Restructure Your Top Service Page Around the Problem',
      action:
        'Take your highest-traffic service page and rewrite the opening section. Instead of starting with your service name and description, start with the problem your customer is trying to solve. Follow it with how you solve it, then social proof. Move the first CTA to appear after the solution explanation.',
      expectedResult:
        'A page that matches search intent immediately and guides visitors through problem → solution → proof → action instead of features → description → contact form.',
    },
    {
      step: 2,
      title: 'Add Service-Type Context to Your Form',
      action:
        'Replace the generic contact form with one that includes a service-type dropdown or hidden field set to the current page service. Ensure the form submission passes this data to your CRM or email inbox so you know what service the lead needs without reading their message.',
      expectedResult:
        'Every lead from a service page arrives with service context, enabling faster response and automatic CRM routing.',
    },
    {
      step: 3,
      title: 'Add a Phone CTA for Urgent Services',
      action:
        'If your service includes emergency or urgent requests, add a prominent click-to-call button in the top section of the page. Make it visible on mobile without scrolling. Track phone calls using a dedicated tracking number for that service page.',
      expectedResult:
        'Urgent visitors can take immediate action without navigating to a contact page or filling out a form, reducing lost emergency leads.',
    },
  ],
};

const caseExample = {
  businessType: 'Plumbing Company (Bristol)',
  problem:
    'A plumbing company had service pages for 12 different services, all using the same template: title, description, features list, generic form. The emergency plumbing page and the bathroom renovation page had identical structures despite completely different buyer intents. Conversion rate across all service pages was 1.4%.',
  solution:
    'We created two architecture patterns: emergency service pages with prominent click-to-call, minimal content, and instant-action CTAs; and project service pages with detailed problem framing, gallery, reviews, and progressive conversion points. All forms included service-type tagging and CRM routing.',
  result:
    'Emergency service page conversion jumped to 8.2%. Project service page conversion increased to 3.8%. Overall service page conversion went from 1.4% to 4.1%. The CRM received properly tagged leads, enabling automatic pipeline routing and service-specific follow-up.',
  stat: '193% overall conversion increase through differentiated service page architecture',
};

const faqs = [
  {
    question: 'Should every service have its own page?',
    answer:
      'Yes, if the service has distinct search intent. People search for "emergency boiler repair" differently than "annual boiler service." Separate pages allow you to match search intent, optimise for specific keywords, and route leads to the correct CRM pipeline.',
  },
  {
    question: 'How long should a service page be?',
    answer:
      'Length should match search complexity. Emergency services need short, action-focused pages. Complex services like renovations or installations need longer pages that address multiple decision factors. The content should be as long as needed to handle objections and build confidence before the CTA.',
  },
  {
    question: 'Should I include pricing on service pages?',
    answer:
      'Include pricing context appropriate to your industry. Some businesses benefit from "starting from" pricing. Others benefit from a pricing guide CTA. The key is addressing the pricing question before visitors leave to compare competitors. How you address it depends on your market.',
  },
  {
    question: 'What is the biggest service-page conversion mistake?',
    answer:
      'Treating every visitor as if they want the same next step. Some are ready to call, some want a quote, and some still need reassurance. Pages that force one generic CTA ignore those decision stages and lose people who might have converted through a better-matched action.',
  },
];

const finalCta = {
  title: 'Build Service Pages That Convert Visitors Into Customers',
  description:
    'Our Smart Website Systems create service pages architected for conversion — search-intent matching, multi-path CTAs, CRM-connected forms, and automated follow-up built into every page.',
};

export const servicePageArchitectureThatConverts: ResourceData = {
  slug,
  title: 'Service Page Architecture That Converts',
  description:
    'Learn how to architect service pages that guide visitors through decision paths with search-intent matching, multi-path CTAs, and CRM-connected forms.',
  category: 'smart-website-systems',
  publishedAt: '2025-11-08',
  systems: ['smart-website-systems'],
  industries: [],
  topics: ['service-page-architecture'],
  primaryService: 'smart-website-systems',
  seo: {
    title: 'Service Page Architecture That Converts',
    description:
      'Learn how to architect service pages that guide visitors through decision paths with search-intent matching, multi-path CTAs, and CRM-connected forms.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Service Page Architecture That Converts',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Principles of high-converting service page architecture:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Most Service Pages Fail to Convert',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Service Page Architecture Problems:',
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How differentiated service page architecture transformed a plumbing company:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'solution-cards',
      heading: 'Service Page Architecture Framework',
      content: [
        'Conversion Infrastructure',
        'High-converting service pages combine search intent matching with system-connected conversion paths:',
      ],
      benefit:
        'When each service page is purpose-built for its specific buyer intent, conversion rates improve across your entire website without changing traffic volume.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'Information-Focused vs Conversion-Architected Service Pages',
      content: ['The structural difference that determines conversion performance:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'diy',
      heading: 'Improve Your Service Page Architecture Today',
      content: ['Apply these changes to your highest-traffic service page first:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about service page architecture:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('smart-website-systems'),
      content: getRelatedResourcesContent('smart-website-systems'),
      resources: getRelatedResources('smart-website-systems', canonical),
    },
  ],
};
