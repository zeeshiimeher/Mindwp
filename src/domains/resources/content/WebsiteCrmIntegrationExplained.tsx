
import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'website-crm-integration-explained';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Website and CRM integration means your website sends lead data directly into your CRM with context — service type, source, page visited, and timestamp. It eliminates the gap between a visitor filling out a form and your team acting on that enquiry.',
  problem:
    'Your website and CRM are disconnected — form submissions go to email, and someone manually enters data into the CRM hours later, losing context and speed',
  promise:
    'You will understand how website-CRM integration works, what data should flow between systems, and how to implement it without custom development',
};

const takeaways = [
  'Integration connects website forms directly to CRM pipelines with full context',
  'Every enquiry should carry source, service type, and page data into CRM',
  'Automated follow-up triggers immediately on CRM entry, not manual review',
  'Integration eliminates manual data entry and reduces response time to seconds',
];

const problem = {
  description: [
    'In most service businesses, the website and CRM exist as separate systems. A visitor fills out a contact form, the submission goes to email, and sometime later a team member manually creates a CRM record. By then, the context is lost — which page they visited, what service they need, and when they submitted are not captured in the CRM.',
    'This gap creates three cascading problems: slow response time because the CRM record does not exist until someone manually creates it, lost context because email submissions strip away behavioral data, and inconsistent follow-up because automated CRM workflows cannot trigger on data that does not arrive.',
  ],
  causes: [
    'Contact forms configured to send email notifications instead of CRM submissions',
    'No data mapping between website form fields and CRM contact fields',
    'Booking systems and CRM running on separate platforms with no sync',
    'Page visit data and source tracking not passed to CRM records',
    'Manual data entry creating delays between enquiry and CRM pipeline entry',
    'No webhook or API connection between website platform and CRM',
  ],
};

const caseExampleTechnical = {
  businessType: 'Integration Architecture Overview',
  problem:
    'A typical service business website has 3-5 contact points: main contact form, service page forms, booking widget, phone number, and chat. Each one generates leads, but only some route to CRM. The result is fragmented lead data split across email, booking platforms, and CRM.',
  solution:
    'Website-CRM integration creates a single data layer. Every contact point routes to the CRM through webhooks or native integration. Each submission carries: contact details, service type, source page URL, UTM parameters, timestamp, and device type. CRM workflows trigger immediately on entry.',
  result:
    'All leads appear in one pipeline with full context. Response time drops to seconds because automation triggers on CRM entry. No leads are lost in email inboxes or booking platform silos.',
  stat: 'Single data layer connecting all website touchpoints to CRM pipeline',
};

const diy = {
  steps: [
    {
      step: 1,
      title: 'Map Your Website Contact Points to CRM Fields',
      action:
        'List every way a visitor can contact you through your website (forms, booking, chat, phone). For each contact point, document what data it collects. Then map each piece of data to a specific CRM field. Common mappings: name → contact name, email → contact email, service selected → pipeline tag, page URL → source field.',
      expectedResult:
        'A data mapping document that defines exactly what information flows from each website contact point into which CRM fields.',
    },
    {
      step: 2,
      title: 'Set Up Your Primary Form Webhook',
      action:
        'Connect your highest-traffic contact form to your CRM using a webhook. Most form builders support webhook integrations. Configure the webhook to send: name, email, phone, service type, page URL, and submission timestamp. Test with a submission and verify the CRM record appears with all fields populated.',
      expectedResult:
        'Form submissions create CRM records automatically with full context, eliminating email notification dependency for your primary contact form.',
    },
    {
      step: 3,
      title: 'Configure CRM Automation on Entry',
      action:
        'In your CRM, create an automation workflow that triggers when a new contact is created via website integration. The workflow should: assign the contact to the correct pipeline stage, send an immediate acknowledgement email or SMS, notify the relevant team member, and set a follow-up task for 1 hour if no response occurs.',
      expectedResult:
        'Every website enquiry triggers immediate automated response and team notification, reducing response time from hours to minutes.',
    },
    {
      step: 4,
      title: 'Add Source Tracking to CRM Records',
      action:
        'Ensure your integration passes UTM parameters and page URL to CRM. This allows you to track which marketing channels and which website pages produce leads that convert to paying customers. Most CRM platforms support custom fields for source tracking.',
      expectedResult:
        'CRM records include source data that lets you measure which website pages and marketing channels produce the most valuable leads.',
    },
  ],
};

const templates = [
  {
    title: 'Webhook Data Payload Structure',
    description: 'Standard data structure for website-to-CRM webhook integration',
    template:
      'contact_name: [First Name] [Last Name]\ncontact_email: [Email Address]\ncontact_phone: [Phone Number]\nservice_type: [Selected Service from Form]\nsource_page: [URL of Page Where Form Was Submitted]\nutm_source: [Marketing Source Parameter]\nutm_medium: [Marketing Medium Parameter]\nsubmission_timestamp: [ISO 8601 DateTime]\ndevice_type: [Desktop/Mobile/Tablet]',
  },
  {
    title: 'CRM Pipeline Stage Mapping',
    description: 'Map website actions to initial CRM pipeline stages',
    template:
      'Contact form submission → New Lead stage\nBooking request → Appointment Scheduled stage\nQuote request → Quote Pending stage\nPhone call (tracked) → Active Enquiry stage\nChat conversation → New Lead stage',
  },
  {
    title: 'Integration Test Checklist',
    description: 'Verify each integration point works correctly',
    template:
      '1. Submit test form → CRM record created with all fields? [Y/N]\n2. Source page URL captured in CRM? [Y/N]\n3. Automated acknowledgement sent within 60 seconds? [Y/N]\n4. Team notification triggered? [Y/N]\n5. Pipeline stage correctly assigned? [Y/N]\n6. UTM parameters captured in CRM? [Y/N]\n7. Duplicate detection working? [Y/N]',
  },
];

const finalCta = {
  title: 'Connect Your Website to Your CRM Infrastructure',
  description:
    'Our Smart Website Systems include native CRM integration — every form, booking widget, and contact point routes data to your pipeline with full context. No manual data entry. No lost leads.',
};

export const websiteCrmIntegrationExplained: ResourceData = {
  slug,
  title: 'Website + CRM Integration Explained',
  description:
    'Understand how website-CRM integration connects form submissions, booking data, and visitor behaviour directly to your CRM pipeline for faster response and better tracking.',
  category: 'smart-website-systems',
  publishedAt: '2025-11-15',
  systems: ['smart-website-systems'],
  industries: [],
  topics: ['crm-integration'],
  primaryService: 'smart-website-systems',
  seo: {
    title: 'Website + CRM Integration Explained',
    description:
      'Understand how website-CRM integration connects form submissions, booking data, and visitor behaviour directly to your CRM pipeline for faster response and better tracking.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Website + CRM Integration Explained',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Essential principles of website-CRM integration:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'The Cost of Disconnected Website and CRM Systems',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Integration Gaps:',
    },
    {
      type: 'case',
      heading: 'How Integration Architecture Works',
      content: ['Understanding the data flow between website and CRM:'],
      caseExample: caseExampleTechnical,
      challengeHeading: 'The Current State',
      solutionHeading: 'The Integration Layer',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Implement Website-CRM Integration Step by Step',
      content: ['Follow these steps to connect your website to your CRM:'],
      steps: diy.steps,
    },
    {
      type: 'templates',
      heading: 'Integration Templates and References',
      content: ['Use these templates to plan and verify your integration:'],
      items: templates,
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
