import { Globe, MapPin, Target } from 'lucide-react';

import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'local-seo-vs-website-optimization';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Local SEO and website optimisation are related but distinct disciplines. Website optimisation focuses on site speed, content quality, and technical health. Local SEO focuses on geographic visibility — Google Business Profile, local citations, reviews, and location-specific content. Service businesses need both, but most invest in one while neglecting the other.',
  problem:
    'You have invested in website improvements but your local search visibility has not improved because you are optimising for general search ranking instead of the specific signals Google uses for local results',
  promise:
    'You will understand the difference between local SEO and website optimisation, learn where each applies, and know which investments to prioritise based on how your customers actually search for services',
};

const takeaways = [
  'Local SEO and website optimisation target different ranking systems — local pack vs organic results',
  'Google Business Profile signals carry the most weight in local pack rankings, not traditional website metrics',
  'Reviews, citations, and proximity are local ranking factors that website optimisation cannot influence',
  'Service businesses benefit most from a combined strategy that addresses both systems simultaneously',
];

const problem = {
  description: [
    'When a homeowner searches "plumber near me" or "roof repair [city]," Google shows two types of results: the local pack (map with 3 business listings) and organic results (traditional website links). These two result types use different ranking algorithms. Optimising your website improves organic results. Local SEO improves the local pack. Most service businesses focus on one and wonder why the other is not improving.',
    'The local pack gets 42% of clicks for service-related searches. If your business is not in the top 3 local results, you are invisible to nearly half of all searchers — regardless of how good your website is. Website optimisation alone cannot fix this because local pack ranking depends on signals that exist outside your website.',
  ],
  causes: [
    'Conflating local SEO with general website optimisation',
    'Investing in website speed and content but neglecting Google Business Profile',
    'No local citation strategy or NAP consistency across directories',
    'Review generation not treated as a ranking factor',
    'No location-specific content or service area pages',
    'Measuring success by organic keyword rankings instead of local pack visibility',
  ],
};

const comparison = {
  before: {
    title: 'Website Optimisation Only',
    items: [
      'Site speed, mobile responsiveness, meta tags improved',
      'Content written for keywords but not locations',
      'Google Business Profile basic or incomplete',
      'No systematic review generation',
      'No local citation management',
      'Organic rankings may improve but local pack unchanged',
    ],
  },
  after: {
    title: 'Combined Local SEO + Website Strategy',
    items: [
      'Website technical health maintained as foundation',
      'Content includes location-specific service pages',
      'Google Business Profile fully optimised and maintained',
      'Automated review generation building velocity',
      'Citations consistent across top directories',
      'Both organic rankings and local pack visibility improving',
    ],
  },
};

const solutions = [
  {
    title: 'Local Pack Optimisation',
    description:
      'The local pack uses proximity, relevance, and prominence as ranking factors. Proximity is your distance to the searcher — you cannot change this. Relevance depends on your Google Business Profile categories, description, and attributes matching the search query. Prominence is measured by reviews, citations, and web authority. Focus on relevance and prominence.',
    icon: MapPin,
  },
  {
    title: 'Website Foundation for Local Authority',
    description:
      'Your website supports local SEO by providing signals Google uses to understand your business: service area pages with location-specific content, consistent NAP (name, address, phone) information, structured data markup, and internal linking that reinforces your service and location relevance. A well-structured website amplifies every local SEO signal.',
    icon: Globe,
  },
  {
    title: 'Integrated Measurement Strategy',
    description:
      'Track local and website metrics separately: local pack position (by postcode), GBP impressions and actions, review count and velocity for local SEO. Organic keyword rankings, organic traffic, page speed scores for website optimisation. Combined: total leads from search, cost per lead from each channel, conversion rate by traffic source.',
    icon: Target,
  },
];

const diy = {
  steps: [
    {
      step: 1,
      title: 'Audit Both Channels Separately',
      action:
        'Search for your main service + your city on Google. Note your position in the local pack (map results) and your position in organic results. Do this for 5 different service keywords. You may rank well organically but be missing from the local pack, or vice versa. This shows you where the gap is.',
      expectedResult:
        'A clear picture of where your visibility is strong and where it is weak across both local and organic results.',
    },
    {
      step: 2,
      title: 'Complete Your Google Business Profile',
      action:
        'Fill every field in your GBP: primary and secondary categories matching your services, detailed business description, service list with descriptions, all attributes (payment methods, service options, accessibility), 20+ quality photos, and regular posts. Verify your service area covers all target locations.',
      expectedResult:
        'A complete GBP profile that provides Google with maximum signals for matching your business to local searches.',
    },
    {
      step: 3,
      title: 'Create Location-Specific Service Pages',
      action:
        'For each of your top 3 services and top 3 service areas, create a dedicated page: "[Service] in [Location]." Include location-specific content — not just the city name inserted into generic text, but references to local landmarks, common local issues, and relevant case studies. Link these pages from your main service pages.',
      expectedResult:
        'Website content that supports local ranking for specific service + location combinations.',
    },
  ],
};

const caseExample = {
  businessType: 'Pest Control Company (Bristol)',
  problem:
    'A pest control company invested £2,000/month in website SEO for 12 months. Organic traffic increased 45% but phone calls only increased 8%. They ranked on page 1 for generic keywords but were not in the local pack for "pest control Bristol" — where most calls originate.',
  solution:
    'We maintained the website work but added a local SEO strategy: GBP optimisation, automated review generation (5 reviews/week target), citation cleanup across 30 directories, and 12 location-specific service pages. The website now supported the local signals instead of operating independently.',
  result:
    'Within 4 months they entered the local pack top 3 for 8 service-area keywords. Phone calls increased 67% (vs the prior 8% from website-only optimisation). The combined cost was similar but the ROI was 5x higher because local pack visibility drives direct calls.',
  stat: '67% call increase after adding local SEO to existing website optimisation',
};

const faqs = [
  {
    question: 'Should I prioritise local SEO or website optimisation?',
    answer:
      'For service businesses that rely on local customers, local SEO typically delivers faster ROI. If 80%+ of your customers come from within a 30-mile radius, start with local SEO (GBP, reviews, citations) while maintaining basic website health. Add deeper website optimisation once local fundamentals are in place.',
  },
  {
    question: 'Does my website affect my local pack ranking?',
    answer:
      'Indirectly, yes. Google uses your website to understand your services, service area, and authority. A well-structured website with location-specific content reinforces the signals from your GBP. But website speed or design alone will not move your local pack position — that depends more on GBP completeness, reviews, and citations.',
  },
  {
    question: 'How quickly do local SEO improvements show results?',
    answer:
      'GBP optimisation changes can be reflected in 1-2 weeks. Citation cleanup takes 4-8 weeks to propagate. Review velocity improvements affect rankings at the 4-8 week mark. A comprehensive local SEO strategy typically shows measurable ranking improvement within 2-3 months, with significant gains at 6 months.',
  },
];

const finalCta = {
  title: 'Build a Combined Local SEO and Website Strategy',
  description:
    'Our Local SEO & Authority systems work alongside Smart Website Systems to maximise your visibility in both local pack and organic results where your customers are searching.',
};

export const localSeoVsWebsiteOptimization: ResourceData = {
  slug,
  title: 'Local SEO vs Website Optimisation',
  description:
    'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
  category: 'local-seo-authority',
  publishedAt: '2026-01-12',
  systems: ['local-seo-authority'],
  industries: [],
  topics: ['local-seo'],
  primaryService: 'local-seo-authority',
  seo: {
    title: 'Local SEO vs Website Optimisation',
    description:
      'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
    canonical,
  },
  sections: [
    {
      type: 'hero',
      heading: 'Local SEO vs Website Optimisation',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'problem',
      heading: 'Why Website Improvements Alone Do Not Fix Local Visibility',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs You Are Optimising the Wrong Channel:',
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core distinctions between local SEO and website optimisation:'],
      items: takeaways,
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How combining local SEO with website optimisation transformed results:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The Strategy',
      resultHeading: 'The Outcome',
    },
    {
      type: 'comparison',
      heading: 'Website-Only vs Combined Strategy',
      content: ['The difference between optimising one channel vs both:'],
      before: comparison.before,
      after: comparison.after,
    },
    {
      type: 'solution-cards',
      heading: 'The Combined Visibility Architecture',
      content: [
        'Two Systems Working Together',
        'Local SEO and website optimisation target different ranking systems that work best together:',
      ],
      benefit:
        'When both local and website signals are aligned, your business appears in both the local pack and organic results — capturing the maximum percentage of search traffic for your services.',
      solutions,
    },
    {
      type: 'diy',
      heading: 'Start Building Combined Visibility',
      content: ['Steps to optimise both local and website channels:'],
      steps: diy.steps,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about local SEO vs website optimisation:'],
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
