import { Award, ExternalLink, FileCheck } from 'lucide-react';


import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'authority-signals-for-local-search';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Authority signals are the factors Google uses to determine how trustworthy and prominent your business is compared to competitors. For local search, authority signals include review volume and velocity, citation consistency, backlink quality, website content depth, business age, and engagement metrics. Businesses with stronger authority signals rank higher in local results.',
  problem:
    'Your business is legitimate and well-established but Google does not rank you as an authority because you have not systematically built the signals Google uses to measure local business prominence',
  promise:
    'You will understand the specific signals Google uses to evaluate local business authority and learn how to systematically build each one to improve your local search ranking',
};

const takeaways = [
  'Authority is measured by signals — not by how good your service is or how long you have been in business',
  'The five authority pillars: reviews, citations, backlinks, content, and engagement',
  'Each signal reinforces the others — a complete authority strategy compounds faster than isolated efforts',
  'Authority is relative — you do not need perfect signals, you need stronger signals than competitors',
];

const problem = {
  description: [
    'Google cannot visit your business, watch you work, or talk to your customers. It evaluates authority through measurable signals: how many customers have reviewed you (and how recently), how consistently your business information appears across the web, how many authoritative websites link to yours, how deep your website content is, and how engaged visitors are with your profile and site.',
    'Many service businesses have been operating for years with excellent reputations in their community but weak authority signals online. A 2-year-old competitor with better signals will outrank a 20-year-old business with poor online authority. The market has shifted to digital authority, and offline reputation no longer translates automatically.',
  ],
  causes: [
    'Relying on word-of-mouth reputation instead of building online authority signals',
    'Low review count despite years of service and hundreds of satisfied customers',
    'Inconsistent business information across web directories',
    'No backlink strategy — no local PR, partnerships, or sponsorships creating links',
    'Thin website content that does not demonstrate expertise',
    'GBP profile with low engagement (few posts, no Q&A, no photo updates)',
  ],
};

const comparison = {
  before: {
    title: 'Weak Authority Signals',
    items: [
      'Low review count with inconsistent velocity',
      'Business listed on 5-10 directories with NAP errors',
      'Few or no backlinks from authoritative local sources',
      'Website has basic service descriptions only',
      'GBP profile dormant — no posts, few photos',
      'Ranking below newer competitors with better signals',
    ],
  },
  after: {
    title: 'Strong Authority Signals',
    items: [
      'High review count with consistent weekly velocity',
      'Consistent citations across 20+ quality directories',
      'Backlinks from local organisations, press, and partners',
      'Website demonstrates expertise with in-depth content',
      'GBP profile active with weekly posts and regular photo updates',
      'Ranking above competitors because signals are systematically stronger',
    ],
  },
};

const solutions = [
  {
    title: 'Review Authority',
    description:
      'Reviews are the strongest local authority signal. Volume, velocity, recency, rating, and diversity (across platforms) all contribute. Automated review generation ensures consistent velocity. Responding to all reviews demonstrates engagement. The goal is not just a high rating but sustained flow that signals to Google your business is actively serving customers well.',
    icon: Award,
  },
  {
    title: 'Citation and Backlink Authority',
    description:
      'Citations (directory listings with consistent NAP) establish your business existence across the web. Backlinks from authoritative local sources — local newspaper articles, chamber of commerce, trade associations, sponsorship pages, local partnerships — add authority that citations alone cannot. A combination of 20+ quality citations and 10-15 local backlinks creates strong prominence signals.',
    icon: ExternalLink,
  },
  {
    title: 'Content and Engagement Authority',
    description:
      'Deep website content demonstrates expertise: service pages with detailed information, blog posts answering common customer questions, case studies showing completed work, and resource guides for your industry. Engagement signals — time on site, pages per session, low bounce rate — confirm to Google that visitors find your content valuable, reinforcing authority.',
    icon: FileCheck,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Benchmark Your Authority Against Competitors',
      action:
        'For your top 3 local competitors, record: Google review count, Google rating, number of directory listings (search their business name and count unique listings), and estimate their content depth (how many pages on their website). Then record your own numbers. This gap analysis shows exactly which authority pillars need the most attention.',
      expectedResult:
        'A clear authority gap analysis showing where you are strong, where you are weak, and where competitors have advantages.',
    },
    {
      step: 2,
      title: 'Build Your Citation Foundation',
      action:
        'List your business on the top 20 directories for your industry and location. For every listing, use exactly the same business name, address, and phone number format. Key directories: Google, Facebook, Yelp, Bing Places, Apple Maps, your top 5 industry-specific directories, and your top 10 local/regional directories. Set a calendar reminder to verify these quarterly.',
      expectedResult:
        'Consistent citations across 20+ directories that establish your business presence and reinforce authority signals.',
    },
    {
      step: 3,
      title: 'Start Building Local Backlinks',
      action:
        'Identify 10 local link opportunities: local chamber of commerce membership (usually includes a website link), trade association memberships, sponsorship of local events or charities (sponsor page links), local business partnerships (mutual website links), and guest articles for local news sites or blogs. Pursue 2-3 per month.',
      expectedResult:
        'A growing portfolio of local backlinks from authoritative sources that strengthen your business prominence.',
    },
  ],
};

const caseExample = {
  businessType: 'Landscaping Business (Sheffield)',
  problem:
    'A landscaping business with 15 years of experience ranked 7th in the local pack. Their 2-year-old competitor ranked 1st. The competitor had 210 Google reviews (vs 45), consistent listings across 25 directories (vs 8), 15 local backlinks (vs 0), and a content-rich website with 30 pages (vs 5). Authority signals told the complete story.',
  solution:
    'We built authority systematically: automated review generation (target 10/week), citation cleanup and expansion to 22 directories, 8 local backlinks secured within 3 months (chamber of commerce, 2 trade associations, 3 local sponsorships, 2 partnership links), and 12 new content pages added to the website.',
  result:
    'Review count reached 145 in 5 months. Citation consistency achieved 95% accuracy. Within 6 months they climbed from 7th to 2nd in the local pack. Organic traffic increased 120%. Monthly leads from search increased from 15 to 38. The 15-year reputation was finally reflected in online authority.',
  stat: 'Climbed from 7th to 2nd in local pack within 6 months of systematic authority building',
};

const faqs = [
  {
    question: 'How long does it take to build local authority?',
    answer:
      'Initial improvements from GBP optimisation and citation work can appear in 4-8 weeks. Meaningful authority building from sustained review velocity and backlink acquisition typically takes 3-6 months. Significant competitive advantage from comprehensive authority signals develops at the 6-12 month mark. Authority compounds over time.',
  },
  {
    question: 'Can I buy authority signals?',
    answer:
      'Fake reviews, paid links, and spammy citations can result in penalties from Google, including suspension of your GBP. Build authority through legitimate means: asking real customers for reviews, earning links through genuine relationships and memberships, and creating valuable content. Shortcuts risk your entire online presence.',
  },
  {
    question: 'Do I need all five authority pillars?',
    answer:
      'You need to be competitive in each, but you do not need to be perfect in all five. Focus on closing the biggest gaps first. If your review count is far below competitors, that is your priority. If you have zero backlinks while competitors have many, that is a quick win. Authority is relative — you need to be stronger than your specific competitors.',
  },
  {
    question: 'Which authority signal usually moves rankings fastest?',
    answer:
      'For most local service businesses, review velocity and Google Business Profile completeness create the fastest visible movement because they directly affect local pack trust and relevance. Backlinks and content authority usually take longer to compound, but they create the strongest long-term moat. The best short-term gains come from fixing the weakest obvious pillar first.',
  },
];

const finalCta = {
  title: 'Build the Authority Signals That Drive Local Rankings',
  description:
    'Our Local SEO & Authority systems build every authority pillar — reviews, citations, backlinks, content, and engagement — into a coordinated strategy that compounds over time.',
};

export const authoritySignalsForLocalSearch: ResourceData = {
  slug,
  title: 'Authority Signals for Local Search',
  description:
    'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
  category: 'local-seo-authority',
  publishedAt: '2026-01-07',
  systems: ['local-seo-authority'],
  industries: [],
  topics: ['authority-signals'],
  primaryService: 'local-seo-authority',
  seo: {
    title: 'Authority Signals for Local Search',
    description:
      'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Authority Signals for Local Search',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: "Why Offline Reputation Doesn't Translate to Online Rankings",
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Authority Signals Are Weak:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core authority signal principles:'],
      items: takeaways,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How systematic authority building closed a 15-year experience gap:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Strategy',
      resultHeading: 'The Outcome',
    },
    {
      type: 'comparison',
      heading: 'Weak vs Strong Authority Signals',
      content: ['The difference in local ranking when authority signals are systematic:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Five Authority Pillars',
      content: [
        'Systematic Authority Building',
        'The signals Google uses to determine local business prominence and trustworthiness:',
      ],
      benefit:
        'When all five authority pillars are systematically strengthened, your local ranking improves predictably because you are giving Google exactly the signals it uses to evaluate local business prominence.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Start Building Authority Signals',
      content: ['Steps to strengthen your local authority systematically:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about local authority signals:'],
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
  ],
};
