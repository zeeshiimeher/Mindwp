import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'conversion-tracking-for-service-businesses';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Conversion tracking for service businesses means measuring which website pages, marketing channels, and customer touchpoints produce leads that become paying customers. Most service businesses track form submissions — but that tells you almost nothing about what actually drives revenue.',
  problem:
    'You know how many form fills you get but you do not know which pages, channels, or campaigns produce leads that actually book and pay',
  promise:
    'You will understand how to set up conversion tracking that connects website activity to CRM pipeline outcomes so you can measure real business results',
};

const takeaways = [
  'Track conversions at the pipeline level, not just form submissions',
  'Connect website analytics to CRM data to measure revenue per channel',
  'Source tracking on forms tells you which pages produce valuable leads',
  'Conversion tracking should answer "what drives booked jobs" not "what gets clicks"',
];

const problem = {
  description: [
    'Most service businesses have basic analytics installed — they can see page views, traffic sources, and maybe form submission counts. But these metrics do not answer the question that matters: which marketing activities produce paying customers?',
    'A form submission is not a conversion. A booked appointment is closer. A completed job with payment is the real conversion. Without connecting website data to CRM pipeline outcomes, you cannot distinguish between a page that generates 50 tyre-kicker enquiries and a page that generates 10 leads who become high-value customers.',
  ],
  causes: [
    'Analytics tracking ends at form submission instead of following through to booked jobs',
    'No connection between website analytics and CRM pipeline data',
    'UTM parameters and source tracking not passed from website to CRM',
    'Revenue not attributed back to the originating page or marketing channel',
    'Phone call conversions not tracked alongside form submissions',
    'Marketing spend decisions based on traffic and clicks rather than pipeline value',
  ],
};

const caseExampleTechnical = {
  businessType: 'Tracking Architecture Overview',
  problem:
    'A typical service business tracks: page views, form submissions, maybe phone calls. Missing: which forms create CRM records, which CRM records become booked jobs, which booked jobs produce revenue, and which page or channel started the journey.',
  solution:
    'Revenue-connected tracking links each layer: website interaction → CRM record (with source) → pipeline stage progression → booked appointment → completed job → revenue. UTM parameters, page URLs, and form sources persist through the entire journey in CRM.',
  result:
    'You can answer: "Google Ads spent £2,000 and drove 40 form submissions from the boiler repair page, which created 40 CRM records, 28 became booked jobs, producing £18,000 in revenue." This is an entirely different metric than "40 form submissions."',
  stat: 'End-to-end tracking from website visit to revenue attribution',
};

const diy = {
  steps: [
    {
      step: 1,
      title: 'Add Source Tracking to All Website Forms',
      action:
        'Add hidden fields to every form on your website that capture: page URL, UTM source, UTM medium, UTM campaign, and referrer. Configure these fields to auto-populate from URL parameters and browser data. Ensure this data reaches your CRM when the form is submitted.',
      expectedResult:
        'Every lead in your CRM includes the exact page and marketing source that brought them to your website.',
    },
    {
      step: 2,
      title: 'Track Phone Calls by Source Page',
      action:
        'Set up dynamic phone number tracking that swaps your displayed phone number based on traffic source or page. When a visitor from Google Ads calls, the tracking number tells you it came from Google Ads. When someone calls from the emergency plumbing page, the number identifies the source page.',
      expectedResult:
        'Phone call leads receive the same source attribution as form leads, closing the gap in your conversion tracking.',
    },
    {
      step: 3,
      title: 'Connect CRM Pipeline Stages to Source Data',
      action:
        'In your CRM, ensure source data persists through pipeline stages. When a lead moves from New to Booked to Completed, the original source page and marketing channel remain visible. Set up reports that show revenue by source page and revenue by marketing channel.',
      expectedResult:
        'Revenue attribution reports that show exactly which website pages and marketing channels produce paying customers, not just enquiries.',
    },
    {
      step: 4,
      title: 'Build a Monthly Revenue Attribution Report',
      action:
        'Create a CRM report that shows, for each marketing channel and high-traffic page: number of leads generated, number that booked, number completed, and total revenue attributed. Compare this to marketing spend for each channel to calculate true return on investment.',
      expectedResult:
        'A clear picture of which marketing activities produce positive ROI measured by revenue, enabling data-driven investment decisions.',
    },
  ],
};

const templates = [
  {
    title: 'Source Tracking Field Template',
    description: 'Standard hidden fields for website forms',
    template:
      'utm_source: [auto-populated from URL]\nutm_medium: [auto-populated from URL]\nutm_campaign: [auto-populated from URL]\npage_url: [auto-populated from current page]\nreferrer: [auto-populated from browser]\ntimestamp: [auto-populated]\ndevice: [auto-populated from user agent]',
  },
  {
    title: 'Revenue Attribution Report Structure',
    description: 'Monthly report template for marketing ROI',
    template:
      'Channel | Leads | Booked | Completed | Revenue | Spend | ROI\nGoogle Ads | [n] | [n] | [n] | [£] | [£] | [%]\nOrganic Search | [n] | [n] | [n] | [£] | £0 | N/A\nDirect/Referral | [n] | [n] | [n] | [£] | £0 | N/A\nSocial | [n] | [n] | [n] | [£] | [£] | [%]',
  },
];

const finalCta = {
  title: 'Track Conversions From Click to Revenue',
  description:
    'Our Smart Website Systems include end-to-end conversion tracking — from the first website visit through CRM pipeline to completed job revenue. Know exactly what drives your business forward.',
};

export const conversionTrackingForServiceBusinesses: ResourceData = {
    slug,
    seo: {
    title: 'Conversion Tracking for Service Businesses Guide',
    description:
      'Learn how to set up conversion tracking that connects website activity to CRM pipeline outcomes and measures which pages and channels produce paying customers.',
    canonical,
  },
    title: 'Conversion Tracking for Service Businesses Guide',
    description:
    'Learn how to set up conversion tracking that connects website activity to CRM pipeline outcomes and measures which pages and channels produce paying customers.',
    category: 'smart-website-systems',
    publishedAt: '2025-12-29',
    systems: ['smart-website-systems'],
    industries: [],
    topics: ['conversion-tracking'],
    primaryService: 'smart-website-systems',
    sections: [
    {
      type: 'hero',
      heading: 'Conversion Tracking for Service Businesses',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Principles of revenue-connected conversion tracking:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Service Businesses Track the Wrong Things',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Common Tracking Failures:',
    },
    {
      type: 'case',
      heading: 'How Revenue-Connected Tracking Works',
      content: ['Understanding the full tracking architecture:'],
      caseExample: caseExampleTechnical,
      challengeHeading: 'Current Tracking Gaps',
      solutionHeading: 'The Tracking Architecture',
      resultHeading: 'The Result',
    },
    {
      type: 'diy',
      heading: 'Set Up Revenue-Connected Tracking',
      content: [
        'Follow these steps to close the gap between website analytics and business results:',
      ],
      steps: diy.steps,
    },
    {
      type: 'templates',
      heading: 'Tracking Templates',
      content: ['Use these templates to implement source tracking and revenue reporting:'],
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
  ]
};
