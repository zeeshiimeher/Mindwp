import { MapPin, Star, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'local-visibility-optimization-guide-for-hvac-companies';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'HVAC companies depend on local search for new customer acquisition. When a homeowner needs heating repair or air conditioning installation, they search locally and choose from the top results. If your HVAC business does not appear in the map pack, it does not exist for that customer. This guide provides the exact steps to audit and improve your local visibility using reputation signals, citation management, and review automation.',
  problem:
    'Your HVAC company loses enquiries because it does not appear in the local map pack when homeowners search for heating and cooling services in your area',
  promise:
    'You will have a step-by-step guide to audit your local visibility, fix citation inconsistencies, automate review generation, and track ranking improvement across your service areas',
};

const takeaways = [
  'HVAC companies in the local map pack receive sixty to seventy percent of all clicks for local heating and cooling searches',
  'Review velocity — not just total count — is a primary ranking signal for local search results',
  'Citation inconsistencies across directories actively suppress local rankings by reducing trust signals',
  'Automated review requests after every completed job eliminate the seasonal gaps that weaken HVAC visibility',
];

const problem = {
  description: [
    'Most HVAC companies assume their local visibility is handled because they have a Google Business Profile. They created the listing years ago, added basic information, and never returned to it. Meanwhile, the local search landscape evolved. Competitors built review profiles ten times larger, maintained consistent citations across fifty directories, and posted regular updates to their profiles.',
    'The result is that experienced, reputable HVAC companies rank below newer competitors who invest in visibility signals. The homeowner searching "boiler repair near me" sees the competitor first and never scrolls down to find the better company. Without a systematic approach to local visibility, the HVAC business relies on word of mouth while competitors capture every digital enquiry.',
  ],
  causes: [
    'Google Business Profile created once and never updated or optimised',
    'Inconsistent business name, address, or phone number across online directories',
    'Low review count and no new reviews for months — weak review velocity signal',
    'No review automation — review generation depends on customers remembering',
    'No service area content to build geographic relevance beyond the base location',
    'No monitoring of local rankings, so visibility drops go undetected for months',
  ],
};

const comparison = {
  before: {
    title: 'Without a Visibility System',
    items: [
      'Google Business Profile incomplete with outdated information',
      'Twenty to thirty reviews accumulated over years with long gaps between them',
      'Business listed differently across directories — name and phone variations',
      'No service area content — geographic relevance limited to physical address',
      'No review automation — seasonal workload kills follow-up consistency',
      'No ranking tracking — visibility drops go unnoticed for months',
    ],
  },
  after: {
    title: 'With a Visibility System',
    items: [
      'Google Business Profile fully optimised with regular posts and updates',
      'Consistent review flow of five to ten new reviews per month via automation',
      'Citation audit ensures identical business details across all directories',
      'Service area content builds geographic relevance for surrounding towns',
      'Automated post-job review requests run independently of team workload',
      'Weekly ranking reports catch drops early and measure improvement',
    ],
  },
};

const solutions = [
  {
    title: 'Automated Post-Job Review Requests',
    description:
      'Every completed HVAC job triggers a personalised SMS review request within twenty-four hours. The message references the specific service and includes a direct Google review link. A second reminder fires at seventy-two hours. This maintains steady review velocity through peak seasons when manual follow-up typically stops, ensuring the review profile grows in proportion to actual work volume.',
    icon: Star,
  },
  {
    title: 'Citation Audit and Correction',
    description:
      'A full audit of the business name, address, phone number, and categories across all major directories: Google, Yelp, Checkatrade, Trustpilot, local business listings, and trade platforms. Every inconsistency is corrected. New citations are built on relevant platforms. The audit is repeated quarterly to catch drift from directory updates or platform changes.',
    icon: MapPin,
  },
  {
    title: 'Visibility Tracking and Reporting',
    description:
      'Weekly reports track map pack position for primary keywords across each service area postcode. Review velocity, total count, and average rating are compared against local competitors. Citation accuracy is scored. Any drop in ranking, review flow, or citation consistency triggers an alert so the team can investigate and correct before visibility is lost.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Google Business Profile',
      action:
        'Open your Google Business Profile and check every field: business name, address, phone, website, operating hours, service area definitions, primary and secondary categories, business description, and photos. Complete every empty field. Ensure the categories match your primary services — "HVAC contractor," "heating contractor," and "air conditioning contractor" should all be listed. Add at least ten high-quality photos of completed work.',
      expectedResult:
        'A fully completed Google Business Profile with accurate categories, service areas, and professional photos.',
    },
    {
      step: 2,
      title: 'Run a Citation Audit',
      action:
        'Search for your business name on Google and check every directory listing that appears. Compare the name, address, phone number, and website URL on each listing against your Google Business Profile. Record every inconsistency. Common issues include old phone numbers, abbreviated versus full business names, and outdated addresses from office moves. Correct every inconsistency.',
      expectedResult:
        'A consistent business listing across all directories, strengthening the trust signal Google uses for local rankings.',
    },
    {
      step: 3,
      title: 'Set Up Automated Review Requests',
      action:
        'Configure your CRM to trigger a review request when a job status changes to "Completed." Set a twenty-four-hour delay, then send an SMS with the customer name, job type, a thank-you message, and a direct Google review link. Add a second reminder at seventy-two hours. Test by completing a test job and verifying the sequence fires correctly.',
      expectedResult:
        'Every completed job automatically triggers a two-step review request, maintaining review velocity regardless of team workload.',
    },
    {
      step: 4,
      title: 'Build Service Area Content',
      action:
        'Identify the top five to ten locations outside your base area where you complete the most jobs. For each location, create content that references the specific heating and cooling challenges of that area — building types, climate conditions, common HVAC issues. This is not duplicate content with location names swapped — each piece addresses genuine local differences.',
      expectedResult:
        'Geographic relevance signals that extend local visibility beyond your physical base to the areas you actually serve.',
    },
    {
      step: 5,
      title: 'Set Up Weekly Visibility Tracking',
      action:
        'Track your map pack position for your top five keywords in each service area postcode. Record total review count, new reviews this week, and average rating. Compare against your top three competitors on the same metrics. Review this report weekly and investigate any ranking drops immediately.',
      expectedResult:
        'Weekly visibility into local ranking performance with competitive benchmarking and early warning for drops.',
    },
  ],
};

const caseExample = {
  businessType: 'HVAC Company (Sheffield, 5 engineers)',
  problem:
    'A five-engineer HVAC company had been trading for twelve years but ranked outside the map pack for "heating engineer" and "boiler repair" in their primary service area. They had twenty-eight Google reviews — their top competitor had one hundred and sixty-two. Their Google Business Profile listed incorrect operating hours and was missing three relevant categories. Citations across Checkatrade, Yell, and Thomson had different phone numbers.',
  solution:
    'We completed a full local visibility overhaul: optimised the Google Business Profile with correct categories and service areas, corrected citations across twenty-three directories, implemented post-job automated review requests via SMS, and built service area content for their five primary locations.',
  result:
    'Review count grew from twenty-eight to seventy-four within three months. The business entered the map pack for "boiler repair" within six weeks and "heating engineer" within ten weeks. Organic local enquiries increased by forty-two percent. The company reduced paid advertising spend by thirty percent while maintaining the same enquiry volume.',
  stat: '42% increase in organic local enquiries after implementing a structured visibility system',
};

const faqs = [
  {
    question: 'How long before visibility improvements show in rankings?',
    answer:
      'Citation corrections can show impact within two to four weeks. Review velocity improvements take four to eight weeks to influence rankings. Service area content typically takes six to twelve weeks to index and contribute to geographic relevance. Most HVAC companies see measurable map pack improvement within two to three months of implementing a full visibility system.',
  },
  {
    question: 'Do we need a separate page for every service area?',
    answer:
      'Not necessarily. Focus on the five to ten areas where you complete the most work and where you currently do not appear in local results. Each page should contain genuinely different content — not the same text with location names swapped. Quality and relevance matter more than quantity.',
  },
  {
    question: 'What if our competitors already have many more reviews?',
    answer:
      'Review velocity matters more than total count. A competitor with two hundred reviews but none in the last month sends weaker signals than a business with eighty reviews gaining five per week. Focus on consistent new review generation. The velocity advantage typically shifts rankings within three to four months even against competitors with larger total counts.',
  },
];

const finalCta = {
  title: 'Build Your HVAC Local Visibility System',
  description:
    'Our Reputation Automation services implement the full visibility system — review automation, citation management, profile optimisation, and ranking tracking — so your HVAC business appears when customers search.',
};

export const localVisibilityOptimizationGuideForHvacCompanies: ResourceData = {
  slug,
  seo: {
    title: 'Local Visibility Optimization Guide for HVAC Companies',
    description:
      'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
    canonical,
  },
  title: 'Local Visibility Optimization Guide for HVAC Companies',
  description:
    'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
  category: 'reputation-review',
  publishedAt: '2026-04-06',
  systems: ['reputation-review'],
  industries: ['hvac'],
  topics: ['local-visibility'],
  primaryService: 'reputation-review',
  sections: [
    {
      type: 'hero',
      heading: 'Local Visibility Optimization Guide for HVAC Companies',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why HVAC Companies Lose Local Search Visibility',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Low HVAC Local Visibility:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The local visibility facts every HVAC company needs to know:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Visibility Optimisation',
      content: ['The operational difference when HVAC local visibility is managed systematically:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The HVAC Local Visibility Architecture',
      content: [
        'Visibility Through Systems',
        'Effective local visibility for HVAC companies combines review automation, citation management, and tracking:',
      ],
      benefit:
        'When review generation, citation accuracy, and ranking monitoring are automated, your HVAC business maintains strong local visibility regardless of seasonal workload.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World HVAC Example',
      content: ["How a visibility system transformed an HVAC company's local presence:"],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The HVAC Local Visibility Optimisation Checklist',
      content: ['Follow these steps to improve your local search visibility:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about local visibility for HVAC companies:'],
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
  ],
};
