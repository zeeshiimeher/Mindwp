import { Globe, Layers, Settings } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'how-smart-website-systems-work';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Most service business websites are digital brochures. Smart website systems operate as infrastructure — connecting lead capture, CRM, booking, and follow-up into a single operational layer.',
  problem:
    'Your website looks professional but operates as a disconnected marketing page with no integration into your actual business systems',
  promise:
    'You will understand how smart website systems connect every customer touchpoint into one automated infrastructure that runs your front office',
};

const takeaways = [
  'Smart websites are operational infrastructure, not marketing brochures',
  'Every page connects to CRM, booking, and follow-up systems',
  'The architecture eliminates manual handoffs between website and business tools',
  'Service businesses need systems-first design, not template-first design',
];

const problem = {
  description: [
    'Service business websites typically exist in isolation. A visitor fills out a form, and someone manually checks email to respond. Booking happens through a separate tool. Follow-up relies on memory. The website does not participate in the business workflow.',
    'This disconnection creates operational gaps. Leads fall through cracks between the website and CRM. Response times depend on how often someone checks notifications. There is no systematic path from first visit to booked appointment.',
  ],
  causes: [
    'Website built as a standalone marketing page with no system connections',
    'Form submissions go to email inboxes instead of CRM pipelines',
    'Booking systems exist on separate platforms with no data flow back to the website',
    'No automated follow-up triggered by website interactions',
    'Analytics track page views but not operational outcomes like booked jobs',
    'Each business tool operates independently with manual data transfer between them',
  ],
};

const comparison = {
  before: {
    title: 'Traditional Website',
    items: [
      'Static brochure pages with contact form',
      'Form submissions go to email inbox',
      'Booking handled on separate platform',
      'No automated follow-up after enquiry',
      'Analytics limited to traffic and bounce rate',
      'Manual data entry between website and CRM',
    ],
  },
  after: {
    title: 'Smart Website System',
    items: [
      'Operational pages connected to CRM pipeline',
      'Enquiries route directly into CRM with tagging',
      'Booking embedded with calendar sync and confirmation',
      'Automated SMS and email sequences triggered on enquiry',
      'Conversion tracking tied to revenue outcomes',
      'Single data layer connecting all business systems',
    ],
  },
};

const solutions = [
  {
    title: 'CRM-Connected Page Architecture',
    description:
      'Every service page connects directly to your CRM pipeline. Enquiries are tagged by service type, source, and page visited. No manual sorting required — the system routes each lead to the correct pipeline stage automatically.',
    icon: Layers,
  },
  {
    title: 'Integrated Booking Infrastructure',
    description:
      'Booking calendars are embedded directly into service pages with real-time availability. Confirmations, reminders, and follow-ups trigger automatically. The booking data flows into CRM for pipeline tracking.',
    icon: Settings,
  },
  {
    title: 'Automated Conversion Layer',
    description:
      'Website interactions trigger operational workflows. A form submission starts a follow-up sequence. A booking confirmation updates the pipeline. Every visitor action connects to a business outcome without manual intervention.',
    icon: Globe,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Website Connections',
      action:
        'List every form, booking widget, and contact method on your website. For each one, document where the data goes after submission. Identify which ones route to email only versus a CRM or system.',
      expectedResult:
        'A clear map of which website touchpoints connect to business systems and which create manual work.',
    },
    {
      step: 2,
      title: 'Connect Your Primary Form to CRM',
      action:
        'Take your highest-traffic contact form and connect it to your CRM using a webhook or native integration. Ensure submissions create a contact record with source tracking and service type tagging.',
      expectedResult:
        'New enquiries appear in your CRM automatically with context about what service they need and where they came from.',
    },
    {
      step: 3,
      title: 'Add Booking to Your Top Service Page',
      action:
        'Embed a booking calendar on your most popular service page. Connect it to your CRM so booked appointments create pipeline entries. Set up automatic confirmation via SMS or email.',
      expectedResult:
        'Visitors can book directly from the service page, and the booking flows into your CRM pipeline without manual data entry.',
    },
  ],
};

const caseExample = {
  businessType: 'Plumbing Company (London)',
  problem:
    'A plumbing company had a professional website generating 50 enquiries per week, but forms went to a shared email inbox. Response times averaged 4 hours. Bookings required phone calls. The owner manually entered data into a spreadsheet for tracking.',
  solution:
    'We rebuilt the website as a smart system: forms connected to CRM with auto-tagging, booking calendars embedded on each service page, and automated follow-up sequences triggered on every enquiry. All data flowed into a single pipeline.',
  result:
    'Response time dropped from 4 hours to under 2 minutes. Booking conversion increased by 45%. The owner stopped spending 6 hours per week on manual data entry.',
  stat: '45% increase in booking conversion with integrated website systems',
};

const faqs = [
  {
    question: 'Do I need to rebuild my entire website to make it smart?',
    answer:
      'Not necessarily. Many service businesses start by connecting their existing forms to a CRM and adding booking widgets. A full rebuild is only needed when the architecture fundamentally cannot support system connections.',
  },
  {
    question: 'What is the difference between a smart website and a regular website with plugins?',
    answer:
      'Plugins add features in isolation. A smart website system ensures every component shares data through a single operational layer. The difference is whether your tools talk to each other or just coexist on the same domain.',
  },
  {
    question: 'How long does it take to implement a smart website system?',
    answer:
      'Core infrastructure — CRM connection, booking integration, and automated follow-up — typically takes 2-4 weeks. Full system buildout with conversion tracking and pipeline automation takes 6-8 weeks depending on complexity.',
  },
  {
    question: 'What is the first system connection most businesses should add?',
    answer:
      'Usually the first priority is connecting lead capture to CRM so every enquiry becomes a tracked record instead of an email notification. That single connection creates the foundation for response-time automation, follow-up, attribution, and pipeline visibility. Once the CRM layer is live, other systems like booking and reminders become much easier to connect sensibly.',
  },
];

const finalCta = {
  title: 'Where this gets built and owned',
  description:
    'Reading about it is one thing. The Smart Website Systems service is the commercial scope where forms, CRM, booking, and follow-up are wired together as one running system, with one team responsible for it. See what is in scope and what is not before you decide.',
};

export const howSmartWebsiteSystemsWork: ResourceData = {
  slug,
  seo: {
    title: 'How Smart Website Systems Work',
    description:
      'Learn how smart website systems connect lead capture, CRM, booking, and follow-up into one operational infrastructure for service businesses.',
    canonical,
  },
  title: 'How Smart Website Systems Work',
  description:
    'Learn how smart website systems connect lead capture, CRM, booking, and follow-up into one operational infrastructure for service businesses.',
  category: 'website-clarity',
  publishedAt: '2025-11-03',
  primarySystem: 'smart-website-systems',
  industries: [],
  topics: ['website-infrastructure'],
  primaryService: 'smart-website-systems',
  sections: [
    {
      type: 'hero',
      heading: 'How Smart Website Systems Work',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['What you need to know about smart website infrastructure:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Most Service Business Websites Fail Operationally',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Disconnection Points:',
    },
    {
      type: 'comparison',
      heading: 'Traditional Website vs Smart Website System',
      content: ['See the operational difference between a brochure site and an integrated system:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Smart Website Architecture',
      content: [
        'System-Level Infrastructure',
        'A smart website system connects every customer-facing page to your operational backend. Here is how each layer works:',
      ],
      benefit:
        'Instead of managing disconnected tools, your website becomes the central operating layer for lead capture, booking, follow-up, and pipeline tracking.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Start Connecting Your Website Today',
      content: ['These steps move your website from brochure to operational system:'],
      steps: diy.steps,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: [
        'How one service business transformed their website into operational infrastructure:',
      ],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about smart website systems:'],
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
