import { FileText, Link, MapPin } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'local-service-page-architecture';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Local service page architecture is the practice of creating dedicated website pages for specific service + location combinations. Instead of a single "Services" page, each core service has a dedicated page for each target area — "Boiler Repair in Birmingham," "Emergency Plumbing in Solihull." These pages provide Google with location-specific relevance signals that generic pages cannot.',
  problem:
    'Your website has one services page that lists everything, which gives Google no location-specific signals and makes it impossible to rank for the local searches your customers actually use',
  promise:
    'You will learn how to architect service pages that target specific service + location combinations, giving Google the relevance signals needed to rank for the local searches that drive calls',
};

const takeaways = [
  'Dedicated service + location pages target the exact queries local customers type',
  'Each page must contain genuinely location-specific content — not just a city name swapped in',
  'Internal linking between service pages and location pages strengthens topical relevance',
  'Structured data markup helps Google understand your service areas and specialisations',
];

const problem = {
  description: [
    'When a customer searches "roof repair Leeds," Google looks for pages that are specifically about roof repair in Leeds — not a generic services page that happens to mention roofing. Businesses with a dedicated page for that exact query have a major relevance advantage over businesses with a single page trying to rank for dozens of service + location combinations.',
    'Many service businesses either have too few pages (one generic services page) or create thin location pages (identical content with only the city name changed). Both approaches fail. The first gives Google no location-specific signals. The second is detected as low-quality duplicate content and can actually harm rankings.',
  ],
  causes: [
    'One services page trying to cover all services and all locations',
    'No dedicated pages for top service + location combinations',
    'Location pages created with templated content (only city name changed)',
    'No location-specific case studies, pricing context, or area information',
    'No structured data markup for local business services',
    'No internal linking strategy connecting service, location, and area pages',
  ],
};

const comparison = {
  before: {
    title: 'Generic Service Pages',
    items: [
      'One services page lists all offerings',
      'No location-specific targeting',
      'Ranks for generic terms but not local queries',
      'No structured data for services or areas',
      'Prospects land on generic page and leave',
      'Google cannot determine relevance to specific locations',
    ],
  },
  after: {
    title: 'Architected Service + Location Pages',
    items: [
      'Dedicated page for each top service + location pair',
      'Each page contains genuinely local content',
      'Ranks for "service + city" queries that drive calls',
      'Structured data tells Google services and areas explicitly',
      'Prospects land on pages relevant to their exact need',
      'Google associates your site with specific services in specific areas',
    ],
  },
};

const solutions = [
  {
    title: 'Service + Location Page Structure',
    description:
      'Each page follows a consistent structure: H1 targeting "Service in Location," opening paragraph addressing the local need, service details specific to that area (common issues, pricing context, response times), a local case study or testimonial, and a clear CTA. The content must be genuinely different for each location — not template-swapped.',
    icon: FileText,
  },
  {
    title: 'Location-Specific Content Strategy',
    description:
      'Each page includes content unique to that location: references to local landmarks or areas, common issues in that area (e.g., Victorian terrace plumbing in older neighbourhoods), local weather impacts on services, area-specific pricing context, and case studies from jobs in that location. This genuine localisation is what separates ranking pages from thin doorway pages.',
    icon: MapPin,
  },
  {
    title: 'Internal Linking Architecture',
    description:
      'Service pages link to location variants. Location pages link to service variants. All pages link to the main service category page. This internal linking structure helps Google crawl and understand the relationships between your services and service areas. It distributes page authority across your local pages and creates clear topical clusters.',
    icon: Link,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Identify Your Top Service + Location Combinations',
      action:
        'List your 3-5 most profitable services. List your 3-5 highest-demand locations (where most customers come from). Create a matrix: each service × each location = a potential page. Prioritise the combinations that generate the most revenue or have the highest search volume. Start with 5-10 priority pages.',
      expectedResult:
        'A prioritised list of service + location pages to create, starting with the highest-value combinations.',
    },
    {
      step: 2,
      title: 'Write Genuinely Local Content',
      action:
        'For each page, write 800-1,200 words of content that is genuinely specific to that service in that location. Include: what makes this service unique in this area, common issues local customers face, how your response time works for this area, a case study from a job in this location, and area-specific pricing context. Do not simply swap city names.',
      expectedResult:
        'Pages with unique, valuable content that demonstrates local expertise and satisfies both Google and reader expectations.',
    },
    {
      step: 3,
      title: 'Build Internal Links',
      action:
        'From your main services page, link to each service + location page. From each location page, link to other services available in that area. From each service page, link to other locations where that service is offered. Add a "service areas" section or widget to key pages. This creates a web of internal links that reinforces your local relevance.',
      expectedResult:
        'An internal linking structure that helps Google understand your service coverage and distributes ranking authority to local pages.',
    },
  ],
};

const caseExample = {
  businessType: 'Roofing Company (West Midlands)',
  problem:
    'A roofing company had one services page listing all their offerings. They ranked on page 2 for "roofing services" but did not appear in results for "roof repair Birmingham," "flat roof replacement Wolverhampton," or any other service + location queries. These hyperlocal queries accounted for 70% of their potential search traffic.',
  solution:
    'We created 15 service + location pages covering their top 5 services across 3 primary service areas. Each page contained genuinely local content: area-specific roofing issues (e.g., Victorian-era slate roof maintenance in Edgbaston), local case studies, and area-specific response times. Internal linking connected all pages in a logical structure.',
  result:
    'Within 4 months, 11 of 15 pages ranked in the top 10 for their target queries. Organic traffic from "service + location" searches increased 280%. Phone calls from organic search increased 52%. The pages that performed best were those with genuine local case studies.',
  stat: '280% increase in organic traffic from service + location search queries',
};

const faqs = [
  {
    question: 'How many service + location pages should I create?',
    answer:
      'Start with your top 3-5 services × top 3-5 locations = 9-25 pages. Only create pages for combinations you actually serve. Do not create pages for locations outside your service area or services you do not provide. Quality over quantity — 10 excellent pages outperform 50 thin ones.',
  },
  {
    question: "Won't this create duplicate content issues?",
    answer:
      'Only if you use the same content with city names swapped. Each page must have genuinely unique content. Different local issues, different case studies, different pricing context, different area descriptions. If you cannot write unique content for a location, you probably do not need a dedicated page for it.',
  },
  {
    question: 'Should I use subfolders or subdomains for location pages?',
    answer:
      'Subfolders (yoursite.com/services/roof-repair-birmingham) are recommended over subdomains. They keep all page authority within your main domain. Use a consistent URL structure: /services/[service-slug]-[location-slug] for all service + location pages.',
  },
];

const finalCta = {
  title: 'Architect Local Service Pages That Rank and Convert',
  description:
    'Our Smart Website Systems and Local SEO teams build service + location page architectures that target the exact searches your customers use to find local services.',
};

export const localServicePageArchitecture: ResourceData = {
    slug,
    seo: {
    title: 'Local Service Page Architecture',
    description:
      'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
    canonical,
  },
    title: 'Local Service Page Architecture',
    description:
    'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
    category: 'local-seo-authority',
    publishedAt: '2025-11-10',
    systems: ['local-seo-authority', 'smart-website-systems'],
    industries: [],
    topics: ['service-pages', 'local-service-pages'],
    primaryService: 'local-seo-authority',
    sections: [
    {
      type: 'hero',
      heading: 'Local Service Page Architecture',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of local service page architecture:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Generic Service Pages Cannot Rank Locally',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Service Pages Need Location Architecture:',
    },
    {
      type: 'comparison',
      heading: 'Generic vs Architected Service Pages',
      content: [
        'The difference between a single services page and a location-specific architecture:',
      ],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Service Page Architecture',
      content: [
        'Location-Targeted Page System',
        'A page architecture that targets the exact searches your local customers use:',
      ],
      benefit:
        'When each service + location combination has a dedicated, content-rich page, your website captures search traffic that generic service pages simply cannot reach.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Build Your Service Page Architecture',
      content: ['Steps to create location-specific service pages:'],
      steps: diy.steps,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How service + location pages unlocked hidden search traffic:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Architecture',
      resultHeading: 'The Outcome',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about local service page architecture:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('local-seo-authority'),
      content: getRelatedResourcesContent('local-seo-authority'),
      resources: getRelatedResources('local-seo-authority', canonical),
    },
  ]
};
