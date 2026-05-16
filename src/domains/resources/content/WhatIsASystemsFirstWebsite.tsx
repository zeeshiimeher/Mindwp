import { Layout, Monitor, Workflow } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'what-is-a-systems-first-website';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A systems-first website is designed around operational workflows before visual design. Instead of starting with templates and adding features later, you start with the systems your business needs and build the website to support them.',
  problem:
    'Your website was designed template-first — it looks good but does not connect to CRM, booking, or follow-up systems in any meaningful way',
  promise:
    'You will understand the systems-first approach and why it produces websites that actually run your business operations',
};

const takeaways = [
  'Systems-first means designing around workflows, not templates',
  'Every page exists to support a specific operational function',
  'CRM, booking, and follow-up are architectural requirements, not add-ons',
  'Template-first websites create operational debt that compounds over time',
];

const problem = {
  description: [
    'Most service business websites are built template-first. A designer picks a layout, adds pages, and the business owner fills in content. CRM integration, booking systems, and follow-up automation are treated as optional extras added after launch.',
    'This approach creates a website that looks professional but operates as a disconnected marketing page. Every business system bolted on later requires workarounds, manual data transfer, and custom integrations that break when anything changes.',
  ],
  causes: [
    'Website designed around visual templates instead of operational needs',
    'CRM integration treated as a phase-two add-on instead of a foundation requirement',
    'Pages structured for visual hierarchy instead of conversion workflows',
    'No consideration for data flow between website and business systems during design',
    'Booking and scheduling added as third-party widgets with no backend connection',
    'Follow-up automation impossible because the website has no system layer',
  ],
};

const comparison = {
  before: {
    title: 'Template-First Approach',
    items: [
      'Start with visual template selection',
      'Add pages based on what competitors have',
      'Bolt on CRM integration after launch',
      'Booking widget embedded as third-party iframe',
      'Follow-up requires separate email marketing tool',
      'Every new feature requires custom integration work',
    ],
  },
  after: {
    title: 'Systems-First Approach',
    items: [
      'Start with operational workflow mapping',
      'Pages designed to support specific business functions',
      'CRM connection built into page architecture from day one',
      'Booking infrastructure integrated with calendar and pipeline',
      'Follow-up automation triggered by website interactions natively',
      'New features extend existing system layer without custom work',
    ],
  },
};

const solutions = [
  {
    title: 'Workflow-Driven Page Architecture',
    description:
      'Each page on a systems-first website maps to a specific business workflow. A service page is not just information — it is a lead capture point connected to CRM tagging, pipeline routing, and follow-up sequences specific to that service.',
    icon: Workflow,
  },
  {
    title: 'Native System Integration Layer',
    description:
      'Instead of bolting on integrations later, a systems-first website includes CRM, booking, and automation connections as foundational architecture. Data flows between every component without manual bridges or third-party connectors.',
    icon: Layout,
  },
  {
    title: 'Operational Design System',
    description:
      'Visual design serves operational goals. Call-to-action placement, form design, and page structure are determined by conversion workflows, not aesthetic preferences. The design system supports the business system.',
    icon: Monitor,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Core Business Workflows',
      action:
        'Before touching your website, document the 3-5 most important operational workflows in your business. For each one, note: how do customers enter this workflow, what data do you need, what happens next, and where does it end up in your CRM.',
      expectedResult:
        'A workflow map that defines exactly what your website needs to support operationally, independent of design choices.',
    },
    {
      step: 2,
      title: 'Identify System Requirements Per Page',
      action:
        'For each page on your website, define what system function it must perform. A service page might need: lead capture form connected to CRM, service-specific tagging, booking calendar, and follow-up trigger. Document these as requirements.',
      expectedResult:
        'A page-level specification that treats each page as a system component, not just a content container.',
    },
    {
      step: 3,
      title: 'Audit Current Integration Gaps',
      action:
        'Compare your workflow requirements to your current website. For each gap — forms going to email instead of CRM, booking on separate platforms, no automated follow-up — document the operational cost: time wasted, leads lost, manual work required.',
      expectedResult:
        'A prioritised list of system gaps that shows exactly where your current website creates operational friction.',
    },
  ],
};

const caseExample = {
  businessType: 'Electrical Contractor (Manchester)',
  problem:
    'An electrical contractor had a template-based website with a contact form that went to email. Booking required phone calls. The CRM was a separate system with no connection to the website. Adding each new service page required a developer to build custom form integrations.',
  solution:
    'We rebuilt the website systems-first: mapped the core workflows (emergency calls, scheduled jobs, commercial quotes), designed each page type around those workflows, and built CRM, booking, and follow-up into the page architecture. New service pages automatically inherited all system connections.',
  result:
    'Time to add a new service page dropped from 2 weeks to 2 hours. Lead-to-booking conversion increased 38%. The contractor eliminated 8 hours per week of manual CRM data entry.',
  stat: '38% increase in lead-to-booking conversion after systems-first rebuild',
};

const faqs = [
  {
    question: 'Is systems-first the same as headless or API-first architecture?',
    answer:
      'No. Headless architecture is a technical decision about separating frontend from backend. Systems-first is a design philosophy — it means designing around business workflows first, regardless of the technical stack used to build the website.',
  },
  {
    question: 'Can I retrofit my existing website with a systems-first approach?',
    answer:
      'Partially. You can add CRM connections, booking integrations, and follow-up automation to an existing site. But if the page architecture was not designed to support operational workflows, you will hit limitations that require structural changes.',
  },
  {
    question: 'Does systems-first mean sacrificing visual design quality?',
    answer:
      'Not at all. Systems-first means design serves operational goals. The website still looks professional — but every design decision supports a business workflow rather than existing purely for aesthetics.',
  },
  {
    question: 'What is the first step in designing a systems-first website?',
    answer:
      'Map the workflows before discussing layouts. You need to know how leads enter, how data moves, where bookings happen, what the CRM needs, and what follow-up triggers should fire. Once those workflows are clear, page architecture and design decisions become much more obvious.',
  },
  {
    question: 'How do I tell whether my current site is truly systems-first?',
    answer:
      'Check whether the site can move a visitor from enquiry to structured CRM record, booking flow, follow-up sequence, and reporting without manual workarounds. If the answer depends on inbox monitoring, copy-pasting, or disconnected widgets, the site is not systems-first yet. A systems-first site behaves like infrastructure, not just presentation.',
  },
];

const finalCta = {
  title: 'Where this gets built and owned',
  description:
    'Frameworks help you see the gap. The Smart Website Systems service is where the gap actually gets closed: capture, CRM, booking, and follow-up wired together with one team accountable for the result. See what is in scope before you commit.',
};

export const whatIsASystemsFirstWebsite: ResourceData = {
  slug,
  seo: {
    title: 'What Is a Systems-First Website?',
    description:
      'Understand the systems-first website approach — designing around operational workflows instead of templates to build websites that run your business.',
    canonical,
  },
  title: 'What Is a Systems-First Website?',
  description:
    'Understand the systems-first website approach — designing around operational workflows instead of templates to build websites that run your business.',
  category: 'website-clarity',
  publishedAt: '2025-11-01',
  primarySystem: 'smart-website-systems',
  industries: [],
  topics: ['systems-first-websites'],
  primaryService: 'smart-website-systems',
  sections: [
    {
      type: 'hero',
      heading: 'What Is a Systems-First Website?',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of systems-first website design:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'The Problem With Template-First Websites',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Website Is Template-First:',
    },
    {
      type: 'comparison',
      heading: 'Template-First vs Systems-First',
      content: ['The fundamental difference in how each approach builds a website:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'How Systems-First Architecture Works',
      content: [
        'Operational Foundation',
        'A systems-first website treats every page as a functional component of your business infrastructure:',
      ],
      benefit:
        'When your website is built systems-first, adding new services, markets, or workflows extends the existing infrastructure instead of requiring custom integration work.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Evaluate Your Website With Systems-First Thinking',
      content: [
        'Use these steps to assess whether your website supports your business operations:',
      ],
      steps: diy.steps,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How systems-first design transformed an electrical contractor website:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about systems-first websites:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('website-clarity'),
      content: getRelatedResourcesContent('website-clarity'),
      resources: getRelatedResources('website-clarity', canonical),
    },
  ],
};
