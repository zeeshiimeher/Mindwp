import { MapPin, Star, TrendingUp } from 'lucide-react';

import { primaryCta } from '@/config/primaryCta';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'local-visibility-optimization-guide-for-realtors';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Realtors who rely solely on referrals miss the growing number of buyers and sellers who start their agent search online. Appearing in the local map pack is the most valuable marketing position a realtor can hold — but it requires systematic management of review signals, citation accuracy, and profile authority. This guide walks through every step needed to build local visibility that generates a predictable flow of search-driven leads.',
  problem:
    'Your real estate business does not appear in local search results when buyers and sellers search for agents in your area, sending every search-driven lead to visible competitors',
  promise:
    'You will have a step-by-step guide to audit your local visibility, automate post-transaction review capture, fix citation issues, and track ranking improvement against competitors',
};

const takeaways = [
  'Realtors in the local map pack receive the majority of clicks from buyers and sellers searching for agents in the area',
  'Post-transaction review requests timed five to seven days after completion achieve the highest response rates for real estate',
  'Citation consistency across property portals and directories builds the trust signal Google uses to rank agents locally',
  'Review velocity from consistent automation outperforms total review count as a ranking factor within three to four months',
];

const problem = {
  description: [
    'Most realtors have a Google Business Profile but treat it as a static listing rather than an active marketing channel. The profile was created once, populated with basic details, and forgotten. Reviews come in sporadically — a few per year from clients who remember to post. Meanwhile, competing agents systematically build review profiles, maintain citations, and update their profiles weekly.',
    'The result is a ranking gap that widens every month. The agent with two hundred reviews and weekly updates appears in the map pack. The equally skilled agent with thirty reviews and a dormant profile does not. Every buyer or seller who searches locally and does not find the second agent represents lost commission revenue that will never be recovered — because the opportunity was invisible.',
  ],
  causes: [
    'Google Business Profile created once and never updated with posts, photos, or service descriptions',
    'No post-transaction review request — reviews depend entirely on client initiative',
    'Review requests sent at the wrong time — during the chaotic completion day or weeks later when enthusiasm has faded',
    'Inconsistent profile information across property portals, directories, and social platforms',
    'No service area content linking the agent to specific neighbourhoods and towns served',
    'No tracking of local ranking position or competitive review gap',
  ],
};

const comparison = {
  before: {
    title: 'Without a Visibility System',
    items: [
      'Google profile dormant with outdated photos and no recent posts',
      'Fifteen to thirty reviews accumulated over years with months between new ones',
      'Profile information differs across Rightmove, Zoopla, Google, and social platforms',
      'No geographic content tying the agent to specific areas served',
      'No review automation — post-transaction follow-up is manual and inconsistent',
      'No ranking data — the agent has no idea where they appear in local results',
    ],
  },
  after: {
    title: 'With a Visibility System',
    items: [
      'Google profile updated weekly with market insights, transaction milestones, and photos',
      'Consistent review flow from automated post-transaction requests at optimal timing',
      'Citation audit ensures identical information across all platforms and portals',
      'Area guides and neighbourhood content build geographic authority across the service region',
      'Automated review capture runs after every transaction without manual intervention',
      'Weekly reports track map pack position, review velocity, and competitive gap',
    ],
  },
};

const solutions = [
  {
    title: 'Post-Transaction Review Automation',
    description:
      'After every completed transaction, the system sends a personalised review request five to seven days later — the optimal window when the client has settled but still remembers the experience clearly. The SMS includes a direct Google review link and references the specific property and service. A follow-up fires at fourteen days for clients who have not yet posted.',
    icon: Star,
  },
  {
    title: 'Cross-Platform Citation Management',
    description:
      'A full audit of the agent profile across Google, property portals, trade association directories, local business listings, and social platforms. Every inconsistency in name, contact details, and service description is corrected. New citations are built on relevant platforms. Quarterly re-audits catch drift from platform updates or directory changes.',
    icon: MapPin,
  },
  {
    title: 'Competitive Visibility Tracking',
    description:
      'Weekly reports compare map pack position, review count, review velocity, and average rating against the top three competing agents in each target area. The data shows whether the visibility gap is closing and where additional effort is needed. Any ranking drop triggers an alert for immediate investigation.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Google Business Profile',
      action:
        'Open your Google Business Profile and check every field: business name, address, phone, website, operating hours, service areas, primary and secondary categories, business description, and photos. Select "Real estate agent" as the primary category with additional relevant categories. Add at least ten professional photos. Write a business description that mentions the specific areas you serve.',
      expectedResult:
        'A fully completed Google Business Profile with accurate categories, service areas, and professional presentation.',
    },
    {
      step: 2,
      title: 'Run a Cross-Platform Citation Audit',
      action:
        'Search for your name and business on Google. Check every listing that appears: property portals, trade directories, local business listings, and social profiles. Compare the name, phone number, address, and website on each listing against your Google Business Profile. Record and correct every inconsistency. Pay special attention to property portals where clients may first discover you.',
      expectedResult:
        'Consistent agent information across all platforms, strengthening the trust signal Google uses for local rankings.',
    },
    {
      step: 3,
      title: 'Set Up Post-Transaction Review Automation',
      action:
        'Configure your CRM to trigger a review request when a transaction status changes to "Completed." Set a five-to-seven-day delay to hit the optimal post-completion window. Send an SMS with the client name, property reference, a thank-you message, and a direct Google review link. Add a second reminder at fourteen days. Test the sequence with a simulated transaction.',
      expectedResult:
        'Every completed transaction automatically triggers a two-step review request at the optimal time, capturing reviews that would otherwise be lost.',
    },
    {
      step: 4,
      title: 'Create Area-Specific Content',
      action:
        'Identify the top five to eight neighbourhoods or towns where you handle the most transactions. For each area, create content covering local property market trends, neighbourhood character, school proximity, transport links, and buyer or seller advice specific to that location. Publish this on your website and share relevant insights as Google Business Profile posts.',
      expectedResult:
        'Geographic authority signals that extend your local visibility across every area you serve, not just your office location.',
    },
    {
      step: 5,
      title: 'Implement Weekly Visibility Tracking',
      action:
        'Track your map pack position for key searches like "estate agent [area]" and "realtor [area]" across each target neighbourhood. Record review count, new reviews this week, and average rating. Compare against the top three competing agents. Review this data weekly and adjust effort based on where the gap is widest.',
      expectedResult:
        'Weekly visibility into ranking performance with competitive benchmarking and actionable priorities.',
    },
  ],
};

const caseExample = {
  businessType: 'Independent Estate Agent (Manchester, 2 negotiators)',
  problem:
    'A two-negotiator independent estate agency had been trading for eight years with strong referral business but zero search-driven leads. They had nineteen Google reviews. Their three nearest competitors had seventy-eight, one hundred and twelve, and one hundred and forty-one reviews respectively. The agency did not appear in the map pack for any local search term. Their Google Business Profile was missing service area definitions and had not been updated in two years.',
  solution:
    'We optimised the Google Business Profile with correct categories and service areas, corrected citations across eighteen platforms including Rightmove and Zoopla, implemented post-transaction review automation timed at seven days after completion, and created neighbourhood guides for their six primary areas.',
  result:
    'Review count grew from nineteen to fifty-eight within four months. The agency entered the map pack for their primary town within eight weeks and for two adjacent areas within fourteen weeks. Search-driven enquiries — previously zero — reached six to eight per month within three months. The agency won two instructions directly from Google search leads within the first quarter.',
  stat: '205% review growth in four months with post-transaction automation, reaching map pack for three target areas',
};

const faqs = [
  {
    question: 'Is five to seven days really the best time to request a review?',
    answer:
      'For real estate, yes. Completion day is chaotic — keys, moving, unpacking. The first two to three days involve settling in. By day five to seven, the client has adjusted enough to reflect positively on the experience but the transaction is still fresh. Requests sent earlier get ignored in the chaos; requests sent later arrive after the emotional connection has faded.',
  },
  {
    question: 'How do we compete with agents who have many more reviews?',
    answer:
      'Focus on review velocity rather than total count. Google weights recent review activity heavily. An agent gaining two to three reviews per month consistently will outrank an agent with more total reviews but no recent activity within three to four months. Consistency matters more than catching up in absolute numbers.',
  },
  {
    question: 'Do area guides really help with local rankings?',
    answer:
      'Yes. Google associates businesses with locations mentioned in their content. A realtor with detailed Didsbury, Chorlton, and Altrincham guides builds geographic relevance for searches in those areas. Without this content, Google only associates the agent with their office postcode, limiting visibility to a narrow radius.',
  },
];

const finalCta = {
  title: 'Build Your Realtor Local Visibility System',
  description:
    'Our Reputation Automation services implement the full visibility system — post-transaction review capture, citation management, profile optimisation, and competitive tracking — so your real estate business appears when buyers and sellers search locally.',
};

export const localVisibilityOptimizationGuideForRealtors: ResourceData = {
  slug,
  title: 'Local Visibility Optimization Guide for Realtors',
  description:
    'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
  category: 'reputation-review',
  publishedAt: '2026-04-06',
  systems: ['reputation-review'],
  industries: ['realtor'],
  topics: ['local-visibility'],
  primaryService: 'reputation-review',
  seo: {
    title: 'Local Visibility Optimization Guide for Realtors',
    description:
      'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Local Visibility Optimization Guide for Realtors',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Realtors Lose Search-Driven Leads',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'What Causes Low Realtor Local Visibility:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['The local visibility facts every realtor needs to understand:'],
      items: takeaways,
    },
    {
      type: 'comparison',
      heading: 'Before and After Visibility Optimisation',
      content: [
        'The operational difference when realtor local visibility is managed systematically:',
      ],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Realtor Local Visibility Architecture',
      content: [
        'Visibility Through Systems',
        'Effective local visibility for realtors combines review automation, citation management, and competitive tracking:',
      ],
      benefit:
        'When review capture, citation accuracy, and ranking monitoring are automated, your real estate business maintains strong local visibility that generates leads continuously.',
      solutions,
    },
    {
      type: 'case',
      heading: 'Real-World Realtor Example',
      content: ["How a visibility system transformed an estate agent's local presence:"],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'The Realtor Local Visibility Optimisation Checklist',
      content: ['Follow these steps to improve your local search visibility:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about local visibility for realtors:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
      button: {
        text: primaryCta.label,
        url: '/services/reputation-review-systems',
      },
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('reputation-review'),
      content: getRelatedResourcesContent('reputation-review'),
      resources: getRelatedResources('reputation-review', canonical),
    },
  ],
};
