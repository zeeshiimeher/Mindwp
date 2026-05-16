import { Layers, Search, TrendingUp } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'local-visibility-framework';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'A local visibility framework is a structured approach to maximising how often and where your business appears when local customers search for your services. It coordinates five visibility channels — local pack, organic results, paid ads, directory listings, and social presence — into a unified strategy rather than treating each as an independent effort.',
  problem:
    'Your local marketing efforts are fragmented across disconnected channels with no framework to coordinate them, resulting in inconsistent visibility and wasted spend',
  promise:
    'You will learn how to build a local visibility framework that coordinates all your online presence channels into a unified system that maximises the number of times potential customers see your business',
};

const takeaways = [
  'Local visibility is the sum of all channels where your business appears — not just one ranking',
  'Coordinated channels create compound visibility: the same prospect sees you in multiple places',
  'NAP consistency across channels is the foundation — inconsistency undermines everything',
  'Measure total visibility impressions, not just ranking position in one channel',
];

const problem = {
  description: [
    'Service businesses typically approach local visibility one channel at a time: they optimise their website, then forget about directories. They start a review campaign, then let it lapse. They invest in Google Ads, then wonder why organic rankings are not improving. Each channel gets attention in isolation, creating gaps that competitors fill.',
    'The compound effect of multi-channel visibility is significant. When a prospect sees your business in the local pack, then again in organic results, then again on a directory — that repetition builds trust and recognition. When you only appear in one place, prospects often click on competitors who appear in multiple.',
  ],
  causes: [
    'Marketing efforts focus on one channel at a time',
    'No coordinated strategy across local pack, organic, directories, and social',
    'NAP information inconsistent across platforms',
    'No measurement of total visibility across all channels',
    'Directory listings created once and never maintained',
    'Social presence disconnected from SEO and website strategy',
  ],
};

const comparison = {
  before: {
    title: 'Fragmented Local Presence',
    items: [
      'Each channel managed independently with different priorities',
      'NAP inconsistencies across directories confuse Google',
      'Visibility spikes and drops unpredictably',
      'No way to measure total local visibility',
      'Gap between channels allows competitors to fill space',
      'Marketing spend scattered without clear ROI per channel',
    ],
  },
  after: {
    title: 'Coordinated Visibility Framework',
    items: [
      'All channels coordinated with shared strategy and messaging',
      'NAP consistency maintained automatically across all platforms',
      'Steady visibility growth across all channels simultaneously',
      'Total visibility measured as aggregate impressions and appearances',
      'Multi-channel presence makes competitors less visible by comparison',
      'Spend allocated based on performance data per channel',
    ],
  },
};

const solutions = [
  {
    title: 'Foundation Layer: NAP and Listing Consistency',
    description:
      'The base layer ensures your business name, address, and phone number are consistent across every platform: Google Business Profile, website, directories, social media, and any third-party listings. Inconsistencies confuse Google and reduce trust in your business data. Automated listing management tools maintain consistency as you update information.',
    icon: Layers,
  },
  {
    title: 'Discovery Layer: Search and Directory Visibility',
    description:
      'The discovery layer maximises appearances in search results and directories: Google Business Profile optimisation for local pack, website SEO for organic results, and active listings on the top 15-20 directories for your industry and location. Each channel reinforces the others — directory citations strengthen GBP authority, which improves local pack ranking.',
    icon: Search,
  },
  {
    title: 'Authority Layer: Reviews and Content',
    description:
      'The authority layer builds trust signals: automated review generation for consistent review velocity, review responses demonstrating engagement, and content creation that positions your business as the local expert. Blog posts, case studies, and location-specific pages create content that ranks for long-tail local searches and demonstrates expertise.',
    icon: TrendingUp,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Your Current Visibility Across All Channels',
      action:
        'Search for your top 3 services + your city. For each search, note where your business appears: local pack position, organic position, which directory listings appear, and whether competitors show in places you do not. Check your GBP, top 5 directories, Facebook, and website. Score each channel as active, incomplete, or missing.',
      expectedResult:
        'A visibility map showing exactly where you appear and where you have gaps across all local channels.',
    },
    {
      step: 2,
      title: 'Fix NAP Consistency First',
      action:
        'List your business name, address, and phone number exactly as they should appear. Check this against your website, GBP, Facebook, and the top 10 directories in your industry. Fix every inconsistency: abbreviations (St vs Street), phone format, suite numbers. This is the foundation everything else depends on.',
      expectedResult:
        'Consistent NAP across all platforms, eliminating the confusion that undermines local ranking signals.',
    },
    {
      step: 3,
      title: 'Activate Your Weakest Channel',
      action:
        'From your visibility audit, identify the channel with the biggest gap (likely directories or GBP completeness). Spend one focused week fully optimising that channel: complete every field, add photos, write descriptions, ensure categories match your services. Then move to the next weakest channel.',
      expectedResult:
        'One previously underperforming channel brought to full optimisation, adding a new source of visibility.',
    },
  ],
};

const caseExample = {
  businessType: 'Cleaning Company (Edinburgh)',
  problem:
    'A cleaning company had a decent website (page 1 for 3 keywords) but poor local pack visibility and minimal directory presence. They appeared in only 4 of the top 20 relevant directories, their GBP was incomplete, and their review count was 34 while the top competitor had 190. Total local visibility was estimated at 30% of potential.',
  solution:
    'We implemented a local visibility framework: GBP fully optimised with all services and attributes, listings created and maintained across 18 directories with consistent NAP, automated review generation targeting 8 reviews per week, and 6 location-specific service pages added to the website.',
  result:
    'Within 5 months, they appeared in the local pack for 12 target keywords (up from 2). Directory impressions increased 340%. Review count grew from 34 to 112. Total estimated visibility increased from 30% to 78% of potential. Inbound leads increased 85%.',
  stat: '85% increase in inbound leads after coordinated visibility framework implementation',
};

const faqs = [
  {
    question: 'Which channel should I prioritise first?',
    answer:
      'Start with NAP consistency — this is the foundation. Then optimise Google Business Profile (highest impact for local pack). Then build review velocity (strengthens both GBP and overall authority). Then expand directory listings. Website SEO should run alongside these but yields slower local results on its own.',
  },
  {
    question: 'How many directories do I need to be listed in?',
    answer:
      'For most service businesses, 15-20 quality directories is sufficient. Focus on: Google, Facebook, Yelp, your top 3-5 industry-specific directories (Checkatrade, Bark, HomeAdvisor, etc.), and the top 5-10 general local directories. Quality and consistency matter more than quantity.',
  },
  {
    question: 'How do I measure total local visibility?',
    answer:
      'Track impressions across channels monthly: GBP impressions (available in GBP insights), organic search impressions (Google Search Console), directory profile views (where available), and social reach. Sum these for total visibility. Track month-over-month growth in total and per-channel to identify which investments are driving results.',
  },
];

const finalCta = {
  title: 'Build a Local Visibility Framework That Leads Your Market',
  description:
    'Our Local SEO & Authority systems coordinate your presence across all channels — search, directories, reviews, and content — into a unified visibility strategy.',
};

export const localVisibilityFramework: ResourceData = {
  slug,
  seo: {
    title: 'Local Visibility Framework',
    description:
      'Build a local visibility framework that coordinates search, directories, reviews, and content into a unified strategy that maximises how often customers find your business.',
    canonical,
  },
  title: 'Local Visibility Framework',
  description:
    'Build a local visibility framework that coordinates search, directories, reviews, and content into a unified strategy that maximises how often customers find your business.',
  category: 'local-visibility',
  publishedAt: '2025-12-15',
  primarySystem: 'local-seo-authority',
  industries: [],
  topics: ['local-visibility'],
  primaryService: 'local-seo-authority',
  sections: [
    {
      type: 'hero',
      heading: 'Local Visibility Framework',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of local visibility:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Fragmented Local Marketing Underperforms',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your Local Visibility Is Fragmented:',
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How a coordinated visibility framework transformed local lead generation:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Framework',
      resultHeading: 'The Outcome',
    },
    {
      type: 'solution-cards',
      heading: 'The Visibility Framework Architecture',
      content: [
        'Three-Layer Visibility System',
        'A coordinated framework that builds visibility systematically from foundation to authority:',
      ],
      benefit:
        'When all visibility channels work together, your business appears multiple times for every local search — building trust through repetition and leaving less space for competitors.',
      solutions,
    },
    {
      type: 'comparison',
      heading: 'Fragmented vs Coordinated Visibility',
      content: ['The difference between scattered efforts and a unified framework:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'diy',
      heading: 'Start Building Your Visibility Framework',
      content: ['Steps to coordinate your local presence:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about local visibility:'],
      items: faqs,
    },
    {
      type: 'cta',
      heading: finalCta.title,
      content: [finalCta.description],
    },
    {
      type: 'related-resources',
      heading: getRelatedResourcesHeading('local-visibility'),
      content: getRelatedResourcesContent('local-visibility'),
      resources: getRelatedResources('local-visibility', canonical),
    },
  ],
};
