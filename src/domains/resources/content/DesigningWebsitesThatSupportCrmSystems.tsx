import { Database, Layout, Monitor } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'designing-websites-that-support-crm-systems';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Most service business websites are designed without considering CRM requirements. When CRM integration is added later, the website architecture fights against it — forms lack the right fields, pages do not pass context, and data flows require manual workarounds.',
  problem:
    'Your website was designed without CRM in mind, so every integration is a workaround that creates fragile connections and missing data',
  promise:
    'You will understand how to design website pages that natively support CRM data flows, pipeline tracking, and automated workflows from the start',
};

const takeaways = [
  'Websites designed for CRM include the right form fields, tagging, and data attributes from the start',
  'Page architecture should map to CRM pipeline stages and service categories',
  'Proper CRM-ready design eliminates manual data entry and custom integration workarounds',
  'Every customer touchpoint on the website should feed structured data to CRM',
];

const problem = {
  description: [
    'When a website is designed without CRM consideration, adding integration later creates a cascade of problems. Forms collect name and email but not service type, source, or qualification data. Pages do not pass referral information to the CRM. Booking widgets exist on separate platforms with no data connection.',
    'The result is an integration layer built on workarounds. Zapier connections that break. Manual tagging to compensate for missing form fields. Incomplete CRM records that make automated workflows unreliable. Every new feature requires custom development because the foundation was not designed for data flow.',
  ],
  causes: [
    'Contact forms designed for simplicity rather than CRM data requirements',
    'No service-type field on forms, forcing manual categorisation in CRM',
    'Page structure does not include hidden fields for source tracking',
    'Booking systems selected without evaluating CRM integration capabilities',
    'Multiple form tools across the site with inconsistent data collection',
    'No documentation of what data the CRM needs from website interactions',
  ],
};

const comparison = {
  before: {
    title: 'CRM-Unaware Website',
    items: [
      'Forms collect name, email, message only',
      'No service type selection on enquiry forms',
      'Source tracking absent from form submissions',
      'Booking widget selected for design, not integration',
      'Each page form built independently',
      'CRM integration requires Zapier chains and workarounds',
    ],
  },
  after: {
    title: 'CRM-Ready Website',
    items: [
      'Forms collect all fields CRM pipeline requires',
      'Service type dropdown maps to CRM pipeline categories',
      'Hidden fields capture UTM, page URL, and referral source',
      'Booking platform selected for native CRM data sync',
      'Standardised form architecture across all pages',
      'CRM receives complete structured data via native webhook',
    ],
  },
};

const solutions = [
  {
    title: 'CRM-Mapped Form Architecture',
    description:
      'Every form on the website is designed with CRM field requirements as the starting point. Service type, urgency level, and qualification questions are built into the form structure. Hidden fields capture page URL, UTM parameters, and session data automatically.',
    icon: Database,
  },
  {
    title: 'Pipeline-Aligned Page Structure',
    description:
      'Service pages are structured to match CRM pipeline stages. An emergency service page routes enquiries to a fast-response pipeline. A quote request page routes to a sales pipeline. The page architecture mirrors the business workflow in CRM.',
    icon: Layout,
  },
  {
    title: 'Unified Data Collection Layer',
    description:
      'Instead of different form tools on different pages, a unified data collection layer ensures every customer touchpoint sends consistent, structured data to CRM. Chat, forms, booking, and phone tracking all feed the same pipeline with the same data format.',
    icon: Monitor,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Document Your CRM Data Requirements',
      action:
        'Open your CRM and list every field that matters for lead management: contact info, service type, lead source, urgency, qualification status. For each field, note whether your current website forms collect this data. Highlight every gap.',
      expectedResult:
        'A requirements document that shows exactly what data your website needs to collect for effective CRM pipeline management.',
    },
    {
      step: 2,
      title: 'Add Service Type to Your Primary Contact Form',
      action:
        'Add a service type dropdown to your main contact form that maps directly to your CRM pipeline categories. If your CRM has pipelines for emergency work, scheduled maintenance, and new installations, your form should have matching options.',
      expectedResult:
        'Enquiries arrive in CRM with service type already assigned, eliminating manual categorisation and enabling automatic pipeline routing.',
    },
    {
      step: 3,
      title: 'Add Hidden Fields for Source Tracking',
      action:
        'Add hidden form fields that automatically capture: the page URL where the form was submitted, UTM parameters from the referring campaign, and the timestamp of submission. Most form builders support hidden fields that populate from URL parameters.',
      expectedResult:
        'Every CRM record includes source data that tells you which pages and campaigns produce the best leads.',
    },
  ],
};

const caseExample = {
  businessType: 'HVAC Company (Leeds)',
  problem:
    'An HVAC company had a website with 4 different contact forms across service pages, each collecting different fields. None passed service type to CRM. The team spent 30 minutes per day manually categorising leads. Source tracking was impossible because no form captured page or campaign data.',
  solution:
    'We redesigned the form architecture with CRM requirements first: standardised fields across all forms, added service type dropdowns matching CRM pipelines, included hidden fields for source tracking, and replaced the booking widget with a CRM-integrated calendar. All forms connected via a single webhook endpoint.',
  result:
    'Manual lead categorisation dropped to zero. The CRM received complete records instantly. The company identified that their boiler repair page produced 4x more revenue per lead than their general HVAC page — insights impossible without proper source tracking.',
  stat: 'Zero manual data entry with CRM-designed form architecture',
};

const faqs = [
  {
    question: 'How many form fields are too many for CRM-ready forms?',
    answer:
      'The right number depends on the service. Emergency services should have minimal fields (name, phone, issue type). Quote requests can include more detail. The rule is: only collect what your CRM needs to route and respond to the lead. Extra fields should capture data automatically via hidden fields, not ask the visitor.',
  },
  {
    question: 'Should every page have its own form or one global form?',
    answer:
      'Service pages benefit from contextual forms that pre-select the service type. A global form works for the contact page. The important principle is that all forms feed the same CRM endpoint with consistent data structure, even if they look different on different pages.',
  },
  {
    question: 'What if my CRM does not support webhook integration?',
    answer:
      'Most modern CRMs support webhooks or API integration. If yours does not, consider whether it can receive data via email parsing or Zapier as a bridge. Long term, a CRM that supports native webhook integration will save significant development and maintenance costs.',
  },
  {
    question: 'What hidden form fields matter most for CRM routing?',
    answer:
      'At minimum, capture source, landing page, service context, and campaign data where available. These fields let the CRM route leads correctly, attribute revenue accurately, and trigger the right follow-up sequence without asking the visitor unnecessary questions. Hidden fields should support operational decisions, not exist just because analytics tools make them possible.',
  },
];

const finalCta = {
  title: 'Design Your Website for CRM From Day One',
  description:
    'Our Smart Website Systems are built with CRM integration as a foundation requirement. Every form, page, and touchpoint is designed to feed structured data directly into your business pipeline.',
};

export const designingWebsitesThatSupportCrmSystems: ResourceData = {
  slug,
  seo: {
    title: 'Designing Websites That Support CRM Systems',
    description:
      'Learn how to design service business websites that natively support CRM integration with proper form architecture, data mapping, and pipeline-aligned page structure.',
    canonical,
  },
  title: 'Designing Websites That Support CRM Systems',
  description:
    'Learn how to design service business websites that natively support CRM integration with proper form architecture, data mapping, and pipeline-aligned page structure.',
  category: 'smart-website-systems',
  publishedAt: '2025-11-12',
  systems: ['smart-website-systems'],
  industries: [],
  topics: ['crm-enabled-websites'],
  primaryService: 'smart-website-systems',
  sections: [
    {
      type: 'hero',
      heading: 'Designing Websites That Support CRM Systems',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Principles for CRM-ready website design:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why CRM Integration Fails on Most Websites',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common CRM-Unfriendly Website Patterns:',
    },
    {
      type: 'comparison',
      heading: 'CRM-Unaware vs CRM-Ready Website Design',
      content: ['The difference between retrofitted integration and native CRM support:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'CRM-Ready Website Architecture',
      content: [
        'Design for Data Flow',
        'A CRM-ready website treats data collection and routing as architectural requirements, not afterthoughts:',
      ],
      benefit:
        'When your website is designed for CRM from the start, every new page and form automatically supports your business pipeline without custom integration work.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Make Your Current Website CRM-Ready',
      content: ['Start improving your website CRM compatibility with these steps:'],
      steps: diy.steps,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How CRM-first form design transformed an HVAC company operations:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about CRM-ready website design:'],
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
