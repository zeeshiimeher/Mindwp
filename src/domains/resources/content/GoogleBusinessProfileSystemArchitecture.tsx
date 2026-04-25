import type { ResourceData } from '../types';
import {
  getRelatedResources,
  getRelatedResourcesContent,
  getRelatedResourcesHeading,
} from '../utils';

const slug = 'google-business-profile-system-architecture';
const canonical = `/resources/${slug}`;

const hero = {
  subtitle:
    'Google Business Profile (GBP) is the single most important asset for local search visibility. A properly architected GBP uses every available field, feature, and signal to maximise how often and how prominently your business appears in local pack results, Google Maps, and knowledge panels. This guide covers the systematic approach to building a fully optimised GBP.',
  problem:
    'Your Google Business Profile is set up but incomplete — missing categories, sparse descriptions, few photos, and no regular activity — which means Google does not have enough data to rank you above competitors who provide more signals',
  promise:
    'You will learn how to architect your GBP as a complete system that provides Google with maximum signals for matching your business to local searches, improving your local pack ranking and driving more calls and visits',
};

const takeaways = [
  'GBP completeness directly correlates with local pack ranking — every empty field is a missed signal',
  'Primary and secondary categories determine which searches your business is eligible for',
  'Regular GBP activity (posts, photo updates, Q&A) signals to Google that the business is active',
  'GBP insights data reveals which searches trigger your profile and how prospects interact with it',
];

const problem = {
  description: [
    'Most service businesses set up their Google Business Profile once: basic name, address, phone number, and a couple of photos. Then they never touch it again. This minimal profile gives Google very little data to work with when deciding which businesses to show in local search results.',
    'Google uses GBP data as a primary ranking signal for the local pack. Businesses with complete profiles — full category selection, detailed descriptions, dozens of photos, regular posts, active Q&A, and consistent review responses — provide significantly more ranking signals than businesses with bare profiles. A 30-minute investment in completing your GBP can produce more local visibility than months of website SEO.',
  ],
  causes: [
    'GBP set up once and never revisited',
    'Only primary category selected, missing relevant secondary categories',
    'Business description generic or empty',
    'Fewer than 10 photos, none recent',
    'Services section empty or incomplete',
    'No GBP posts, no Q&A, no regular updates',
  ],
};

const diy = {
  steps: [
    {
      step: 1,
      title: 'Complete Every Profile Field',
      action:
        'Go through every field in your GBP and fill it completely. Primary category: your main service. Secondary categories: add up to 9 additional relevant services. Business description: use all 750 characters, naturally including your key services and locations. Hours: include special hours for holidays. Attributes: complete every relevant attribute (payment methods, service options, accessibility features).',
      expectedResult:
        'A 100% complete GBP profile that gives Google maximum data for matching your business to relevant searches.',
    },
    {
      step: 2,
      title: 'Build a Photo and Media Library',
      action:
        'Upload at least 25 photos: exterior (helps Google verify location), interior, team members, equipment, and completed work (before/after). Add 2-3 new photos weekly going forward. Name photo files descriptively before uploading (e.g., "boiler-repair-completion-birmingham.jpg"). Add a virtual tour if available for your service type.',
      expectedResult:
        'A rich visual profile that builds trust with prospects and provides Google with location and service verification signals.',
    },
    {
      step: 3,
      title: 'Establish an Activity Cadence',
      action:
        'Set up a weekly routine: 1 GBP post per week (service highlight, completed job, tip, or seasonal offer). Answer any new Q&A within 24 hours. Respond to all reviews within 48 hours (positive and negative). Update photos weekly. This regular activity signals to Google that your business is active and engaged.',
      expectedResult:
        'An active GBP profile that receives regular engagement signals, improving its ranking in local search over time.',
    },
  ],
  timeToComplete: '2-3 hours for initial setup, then 30 minutes per week for maintenance',
};

const templates = [
  {
    title: 'GBP Audit Checklist',
    description: 'Verify every element of your Google Business Profile is complete and optimised.',
    template:
      '☐ Primary category matches main service\n☐ 5+ secondary categories added\n☐ Business description uses full 750 characters\n☐ All services listed with descriptions\n☐ Service area defined correctly\n☐ All attributes completed\n☐ 25+ photos uploaded\n☐ Opening hours accurate including special hours\n☐ Phone number matches website and directories\n☐ Website URL points to correct landing page\n☐ Q&A section has owner-posted FAQs\n☐ Messaging enabled and monitored',
  },
  {
    title: 'Weekly GBP Activity Template',
    description: 'A weekly maintenance cadence to keep your profile active.',
    template:
      'Monday: Post 1 GBP update (service highlight, job completion, or seasonal tip)\nWednesday: Upload 2-3 new photos from recent jobs\nFriday: Respond to all new reviews (positive and negative)\nDaily: Answer any new Q&A within 24 hours\nMonthly: Review GBP insights, update any changed business information',
  },
  {
    title: 'GBP Post Template',
    description: 'A template for writing effective GBP posts.',
    template:
      'Type: [Update / Offer / Event]\nTitle: [Service or topic — keep under 60 characters]\nBody: [100-300 words. Mention specific service, location, and result. Include a call to action.]\nPhoto: [High-quality image related to the post content]\nButton: [Call now / Learn more / Book online — link to relevant page]\nSchedule: [Weekly, same day each week for consistency]',
  },
];

const faqs = [
  {
    question: 'How many categories should I select?',
    answer:
      'Select your primary category (the one service you want to rank for most) and add every relevant secondary category that accurately describes your services. Most service businesses should have 5-10 categories. Do not add categories for services you do not actually provide — this can result in suspension.',
  },
  {
    question: 'Do GBP posts affect ranking?',
    answer:
      'GBP posts do not directly affect ranking position, but they contribute to the "activity" signal Google uses. More importantly, posts appear in your profile when prospects view it, influencing their decision to contact you. Posts with keywords and service descriptions also help Google understand your relevance to specific searches.',
  },
  {
    question: 'How often should I update my GBP?',
    answer:
      'Weekly at minimum: 1 post, 2-3 new photos, and responses to all reviews and Q&A. Monthly: review insights data and update any business information changes. Quarterly: full audit of all fields, categories, and attributes. The key is consistency — regular activity signals an active business.',
  },
  {
    question: 'Should I populate the GBP Q&A section proactively?',
    answer:
      'Yes. Adding clear, accurate questions and answers about your services, hours, coverage area, and common objections helps both prospects and Google understand your business. It also reduces the risk of random public questions being answered inaccurately by other users before your team notices them.',
  },
];

const caseExample = {
  businessType: 'Locksmith (London)',
  problem:
    'A locksmith had a GBP with basic information: name, phone, address, 1 category, 3 photos, and no posts. They appeared in the local pack for 2 searches. Their top competitor had a fully optimised profile with 9 categories, 45 photos, weekly posts, and 280 reviews. The competitor appeared in the local pack for 18 searches.',
  solution:
    'We fully architected the GBP: 8 relevant categories added, 750-character description written, 35 photos uploaded, all attributes completed, services section filled, Q&A populated with common questions, and a weekly post/photo cadence established. Review generation automated in parallel.',
  result:
    'Within 3 months, local pack appearances increased from 2 to 14 target keywords. GBP impressions increased 420%. Direct calls from GBP increased from 12 to 41 per month. The profile went from basic to the most complete in their local market.',
  stat: '420% increase in GBP impressions after full profile architecture',
};

const finalCta = {
  title: 'Get Your Google Business Profile Fully Architected',
  description:
    'Our Local SEO & Authority team builds and maintains a fully optimised GBP that maximises your local pack visibility and drives more calls from Google.',
};

export const googleBusinessProfileSystemArchitecture: ResourceData = {
  slug,
  seo: {
    title: 'Google Business Profile System Architecture Guide',
    description:
      'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
    canonical,
  },
  title: 'Google Business Profile System Architecture Guide',
  description:
    'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
  category: 'local-seo-authority',
  publishedAt: '2025-11-19',
  systems: ['local-seo-authority'],
  industries: [],
  topics: ['google-business-profile'],
  primaryService: 'local-seo-authority',
  sections: [
    {
      type: 'hero',
      heading: 'Google Business Profile System Architecture',
      content: [hero.subtitle, hero.problem, hero.promise],
    },
    {
      type: 'takeaways',
      heading: 'Key Takeaways',
      content: ['Core principles of GBP architecture:'],
      items: takeaways,
    },
    {
      type: 'problem',
      heading: 'Why Incomplete Profiles Lose to Optimised Ones',
      content: problem.description,
      items: problem.causes,
      causesHeading: 'Signs Your GBP Is Underperforming:',
    },
    {
      type: 'case',
      heading: 'Real-World Example',
      content: ['How full GBP architecture transformed a locksmith local visibility:'],
      caseExample,
      challengeHeading: 'The Problem',
      solutionHeading: 'The System',
      resultHeading: 'The Outcome',
    },
    {
      type: 'diy',
      heading: 'Architect Your Google Business Profile',
      content: ['Steps to build a fully optimised GBP:'],
      steps: diy.steps,
      timeToComplete: diy.timeToComplete,
    },
    {
      type: 'templates',
      heading: 'GBP Management Templates',
      content: ['Tools and checklists for maintaining your optimised profile:'],
      items: templates,
    },
    {
      type: 'faq',
      heading: 'Frequently Asked Questions',
      content: ['Common questions about Google Business Profile optimisation:'],
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
