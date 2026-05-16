/* Resource utility helpers (related resources, metadata-driven fallbacks). */

import type { ResourceCategory } from '@/domains/resources/types';

export type RelatedResource = {
  title: string;
  description: string;
  url: string;
  categoryLabel: string;
  featured?: boolean;
  featuredBadge?: string;
};

type ResourceIndexItem = {
  title: string;
  description: string;
  category: ResourceCategory;
  seo: {
    canonical: string;
  };
  publishedAt: string;
  updatedAt?: string;
};

const RESOURCE_CATEGORY_LABEL_BY_ID = new Map<ResourceCategory, string>([
  ['follow-up-crm', 'Follow-Up & CRM'],
  ['website-clarity', 'Website Clarity'],
  ['lead-response', 'Lead Response'],
  ['local-visibility', 'Local Visibility'],
  ['reviews-proof', 'Reviews & Proof'],
  ['frameworks', 'Frameworks'],
]);

const RESOURCE_INDEX: ResourceIndexItem[] = [
  {
    title: 'CRM Pipeline Setup Guide for Plumbing Businesses',
    description:
      'A step-by-step guide to building a CRM pipeline for plumbing businesses — covering pipeline stages, automated quote follow-up, and conversion reporting.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/crm-pipeline-setup-guide-for-plumbing-businesses' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'CRM Pipeline Setup Guide for Salons',
    description:
      'A step-by-step guide to building a salon CRM pipeline for client retention — covering lifecycle stages, rebooking automation, at-risk detection, and retention reporting.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/crm-pipeline-setup-guide-for-salons' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'Lead Response Optimization Checklist for HVAC Businesses',
    description:
      'A step-by-step checklist to audit and fix HVAC lead response time using CRM automation — covering instant acknowledgement, emergency routing, and response tracking.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/lead-response-optimization-checklist-for-hvac-businesses' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'Local Visibility Optimization Guide for HVAC Companies',
    description:
      'A step-by-step guide to improving HVAC local visibility — covering Google Business Profile optimisation, citation audit, review automation, and ranking tracking.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/local-visibility-optimization-guide-for-hvac-companies' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'Local Visibility Optimization Guide for Realtors',
    description:
      'A step-by-step guide to improving realtor local visibility — covering post-transaction review automation, citation management, and competitive ranking tracking.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/local-visibility-optimization-guide-for-realtors' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'Review Automation Setup Guide for Roofing Companies',
    description:
      'A step-by-step guide to building review automation for roofing companies — covering post-job triggers, direct review links, and review velocity tracking.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/review-automation-setup-guide-for-roofing-companies' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'Review Automation Setup Guide for Salons',
    description:
      'A step-by-step guide to building review automation for salons — covering post-appointment triggers, personalised SMS requests, and review velocity tracking.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/review-automation-setup-guide-for-salons' },
    publishedAt: '2026-04-06',
  },
  {
    title: 'Tracking Salon Client Lifetime Value',
    description:
      'See how salons use CRM data to track client lifetime value, identify their most profitable client segments, and shift marketing investment toward channels that produce long-term relationships.',
    category: 'frameworks',
    seo: { canonical: '/resources/tracking-salon-client-lifetime-value' },
    publishedAt: '2026-02-28',
  },
  {
    title: 'Reducing Salon No-Shows with Automation',
    description:
      'See how salons use automated reminders, waitlist management, and smart deposit policies to cut no-show rates by 60-80% and recover thousands in monthly lost revenue.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/reducing-salon-no-shows-with-automation' },
    publishedAt: '2026-02-25',
  },
  {
    title: 'Automotive Service Reminder Automation',
    description:
      'See how auto repair shops use automated MOT reminders, service interval tracking, and seasonal campaigns to reactivate existing customers and generate predictable recurring revenue.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/automotive-service-reminder-automation' },
    publishedAt: '2026-02-23',
  },
  {
    title: 'Roofing Estimate Follow-Up Workflow',
    description:
      'See how roofing companies use automated estimate follow-up to stay top of mind during homeowner decision cycles, improving close rates and recovering jobs that would otherwise go silent.',
    category: 'lead-response',
    seo: { canonical: '/resources/roofing-estimate-follow-up-workflow' },
    publishedAt: '2026-02-21',
  },
  {
    title: 'HVAC Emergency Call Handling System',
    description:
      'See how HVAC companies implement dedicated emergency call handling with tiered triage, automated dispatch, and premium pricing to capture high-value work around the clock.',
    category: 'lead-response',
    seo: { canonical: '/resources/hvac-emergency-call-handling-system' },
    publishedAt: '2026-02-18',
  },
  {
    title: 'Missed Call Recovery for Salons',
    description:
      'See how salons recover missed calls with instant booking link texts, converting unanswered phone calls into confirmed appointments even during the busiest service hours.',
    category: 'lead-response',
    seo: { canonical: '/resources/missed-call-recovery-for-salons' },
    publishedAt: '2026-02-16',
  },
  {
    title: 'Missed Call Recovery for Roofing',
    description:
      'See how roofing companies recover missed calls with automated SMS responses that capture lead details and convert unanswered calls into booked appointments.',
    category: 'lead-response',
    seo: { canonical: '/resources/missed-call-recovery-for-roofing' },
    publishedAt: '2026-02-14',
  },
  {
    title: 'Missed Call Recovery for HVAC',
    description:
      'See how HVAC companies recover missed calls with instant text responses, emergency escalation, and automated booking — capturing revenue that would otherwise go to competitors.',
    category: 'lead-response',
    seo: { canonical: '/resources/missed-call-recovery-for-hvac' },
    publishedAt: '2026-02-11',
  },
  {
    title: 'Missed Call Recovery for Auto Repair',
    description:
      'See how auto repair shops recover missed calls with instant text responses and booking links, converting unanswered calls into confirmed MOTs, services, and repair bookings.',
    category: 'lead-response',
    seo: { canonical: '/resources/missed-call-recovery-for-auto-repair' },
    publishedAt: '2026-02-09',
  },
  {
    title: 'Salon Review Generation Framework',
    description:
      'See how salons automate review collection with photo prompts, stylist-specific personalisation, and post-appointment timing to build the Google review profile that drives booking decisions.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/salon-review-generation-framework' },
    publishedAt: '2026-02-07',
  },
  {
    title: 'CRM Pipeline Automation: Stop Losing Leads (Stages + Follow-Up Templates)',
    description:
      'A practical CRM pipeline you can set up in under an hour: stages, automation triggers, and follow-up templates so every lead gets a next step.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/crm-pipeline-automation' },
    publishedAt: '2026-02-05',
  },
  {
    title: 'Roofing Review Generation System',
    description:
      'See how roofing companies automate review collection after every job, build photo-rich Google reviews, and create the social proof homeowners need to choose their business.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/roofing-review-generation-system' },
    publishedAt: '2026-02-04',
  },
  {
    title: 'HVAC Review Generation Framework',
    description:
      'See how HVAC companies automate review collection with job-type-specific timing, build year-round review velocity from maintenance visits, and create the social proof that leads in local search.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/hvac-review-generation-framework' },
    publishedAt: '2026-02-02',
  },
  {
    title: 'Automotive Review Generation System',
    description:
      'See how auto repair shops generate trust-focused reviews timed to vehicle collection, use service-type segmentation for prompts, and build the online reputation that converts local searchers into customers.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/automotive-review-generation-system' },
    publishedAt: '2026-01-31',
  },
  {
    title: 'Build a 5-Minute Auto-Reply Funnel (SMS + Email Template)',
    description:
      'Set up automatic replies for enquiries in 5 minutes. Get more bookings with instant SMS and email responses that feel personal but run on autopilot.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/auto-reply-funnel' },
    publishedAt: '2026-01-28',
  },
  {
    title: 'Roofing CRM Pipeline Structure',
    description:
      'See how roofing companies structure their CRM pipeline to track every job from inquiry to completion, eliminate missed estimates, and build predictable revenue visibility.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/roofing-crm-pipeline-structure' },
    publishedAt: '2026-01-28',
  },
  {
    title: 'HVAC CRM Pipeline Structure',
    description:
      'See how HVAC companies structure multi-track CRM pipelines for emergency, installation, and maintenance work — with automations that protect recurring revenue and enable capacity planning.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/hvac-crm-pipeline-structure' },
    publishedAt: '2026-01-26',
  },
  {
    title: 'Automotive CRM Pipeline for Repair Jobs',
    description:
      'See how auto repair shops implement CRM pipelines with workshop-specific stages that automate quote follow-ups, trigger parts ordering, and chain post-collection lifecycle automation for reviews and future bookings.',
    category: 'follow-up-crm',
    seo: { canonical: '/resources/automotive-crm-pipeline-for-repair-jobs' },
    publishedAt: '2026-01-24',
  },
  {
    title: 'Salon Lead Handling Example',
    description:
      'See how salons use automated lead handling to respond instantly across Instagram, phone, and web, convert inquiries into self-service bookings, and grow new client acquisition by 50%.',
    category: 'lead-response',
    seo: { canonical: '/resources/salon-lead-handling-example' },
    publishedAt: '2026-01-21',
  },
  {
    title: 'Roofing Lead Handling Example',
    description:
      'See how roofing companies implement AI-assisted lead handling systems that respond instantly, qualify by job type, and route emergency and quote leads to the right team members.',
    category: 'lead-response',
    seo: { canonical: '/resources/roofing-lead-handling-example' },
    publishedAt: '2026-01-19',
  },
  {
    title: 'HVAC Lead Handling Example',
    description:
      'See how HVAC companies use automated lead handling to respond to every inquiry within minutes, route emergency calls instantly, and capture peak-season revenue that manual processes miss.',
    category: 'lead-response',
    seo: { canonical: '/resources/hvac-lead-handling-example' },
    publishedAt: '2026-01-17',
  },
  {
    title: 'Auto Repair Lead Handling Example',
    description:
      'See how auto repair shops use automated lead handling and online booking to capture every inquiry, reduce phone volume for routine services, and recover revenue lost to missed calls.',
    category: 'lead-response',
    seo: { canonical: '/resources/auto-repair-lead-handling-example' },
    publishedAt: '2026-01-14',
  },
  {
    title: 'Local SEO vs Website Optimisation',
    description:
      'Understand the difference between local SEO and website optimisation, learn where each applies, and know which investments drive the most visibility for service businesses.',
    category: 'local-visibility',
    seo: { canonical: '/resources/local-seo-vs-website-optimization' },
    publishedAt: '2026-01-12',
  },
  {
    title: 'Reputation Monitoring Systems',
    description:
      'Build a reputation monitoring system that tracks reviews, listings, and competitor benchmarks across all platforms with real-time alerts and trend analysis.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/reputation-monitoring-systems' },
    publishedAt: '2026-01-10',
  },
  {
    title: 'Authority Signals for Local Search',
    description:
      'Understand the five authority pillars Google uses to rank local businesses and learn how to systematically build each one to improve your local search visibility.',
    category: 'local-visibility',
    seo: { canonical: '/resources/authority-signals-for-local-search' },
    publishedAt: '2026-01-07',
  },
  {
    title: 'Responding to Negative Reviews Systematically',
    description:
      'Build a systematic process for handling negative reviews with professional templates, fast response times, and resolution follow-up that protects your reputation.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/responding-to-negative-reviews-systematically' },
    publishedAt: '2026-01-05',
  },
  {
    title: 'Tracking Customer Lifetime Value Using CRM',
    description:
      'Learn how to calculate and track Customer Lifetime Value using CRM data to make better acquisition, retention, and pricing decisions for your service business.',
    category: 'frameworks',
    seo: { canonical: '/resources/tracking-customer-lifetime-value-using-crm' },
    publishedAt: '2026-01-03',
  },
  {
    title: 'Building Revenue Visibility Through CRM Tracking',
    description:
      'Learn how to build CRM-based revenue tracking that shows exactly where your revenue comes from, where it leaks, and where the biggest growth opportunities exist.',
    category: 'frameworks',
    seo: { canonical: '/resources/building-revenue-visibility-through-crm-tracking' },
    publishedAt: '2025-12-31',
  },
  {
    title: 'Conversion Tracking for Service Businesses',
    description:
      'Learn how to set up conversion tracking that connects website activity to CRM pipeline outcomes and measures which pages and channels produce paying customers.',
    category: 'website-clarity',
    seo: { canonical: '/resources/conversion-tracking-for-service-businesses' },
    publishedAt: '2025-12-29',
  },
  {
    title: 'Service Business Follow-Up Automation Guide',
    description:
      'Learn how to build automated follow-up sequences triggered by CRM pipeline stages that ensure every lead receives consistent, timely communication.',
    category: 'lead-response',
    seo: { canonical: '/resources/service-business-follow-up-automation-guide' },
    publishedAt: '2025-12-27',
  },
  {
    title: 'Multi-Channel Lead Capture Systems',
    description:
      'Learn how to build a multi-channel lead capture system that routes phone, web, chat, and social leads to one CRM pipeline with consistent tracking and follow-up.',
    category: 'lead-response',
    seo: { canonical: '/resources/multi-channel-lead-capture-systems' },
    publishedAt: '2025-12-20',
  },
  {
    title: 'How Review Automation Improves Local Authority',
    description:
      'Understand the connection between automated review collection and local search authority, and how consistent review velocity compounds into ranking improvements.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/how-review-automation-improves-local-authority' },
    publishedAt: '2025-12-17',
  },
  {
    title: 'Local Visibility Framework',
    description:
      'Build a local visibility framework that coordinates search, directories, reviews, and content into a unified strategy that maximises how often customers find your business.',
    category: 'local-visibility',
    seo: { canonical: '/resources/local-visibility-framework' },
    publishedAt: '2025-12-15',
  },
  {
    title: 'Customer Feedback Loop Framework',
    description:
      'Build a structured feedback loop that captures customer sentiment after every job, routes issues to private resolution, and drives continuous service improvement.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/customer-feedback-loop-framework' },
    publishedAt: '2025-12-13',
  },
  {
    title: 'Sales Pipeline Visibility Framework',
    description:
      'Build a pipeline visibility framework that shows real-time deal health, flags stalled deals, and provides accurate revenue forecasting for your service business.',
    category: 'frameworks',
    seo: { canonical: '/resources/sales-pipeline-visibility-framework' },
    publishedAt: '2025-12-10',
  },
  {
    title: 'Lead Routing Models for Service Companies',
    description:
      'Understand the four lead routing models — round-robin, skill-based, territory-based, and priority-based — and how to implement the right model for your service business.',
    category: 'lead-response',
    seo: { canonical: '/resources/lead-routing-models-for-service-companies' },
    publishedAt: '2025-12-08',
  },
  {
    title: 'Lead Response Time Framework',
    description:
      'Understand why lead response time determines conversion rates and how to build systems that respond in seconds instead of hours using automation and priority routing.',
    category: 'lead-response',
    seo: { canonical: '/resources/lead-response-time-framework' },
    publishedAt: '2025-12-06',
  },
  {
    title: 'Lead Qualification Framework',
    description:
      'Learn how to build a lead qualification framework that scores and prioritises leads automatically so your team focuses on the highest-value opportunities.',
    category: 'lead-response',
    seo: { canonical: '/resources/lead-qualification-framework' },
    publishedAt: '2025-12-03',
  },
  {
    title: 'Lead Automation Framework for Service Businesses',
    description:
      'Understand the four-layer lead automation framework — capture, routing, qualification, and follow-up — that handles leads systematically and converts more enquiries into booked jobs.',
    category: 'lead-response',
    seo: { canonical: '/resources/lead-automation-framework' },
    publishedAt: '2025-12-01',
  },
  {
    title: 'Client Reactivation Systems',
    description:
      'Build an automated reactivation system that identifies lapsed customers, sends targeted re-engagement campaigns, and recovers revenue from your existing customer base.',
    category: 'frameworks',
    seo: { canonical: '/resources/client-reactivation-systems' },
    publishedAt: '2025-11-29',
  },
  {
    title: 'Missed Call Recovery System for Service Businesses',
    description:
      'Learn how to build a missed call recovery system that automatically follows up with every unanswered caller via SMS and callback scheduling to recapture lost revenue.',
    category: 'lead-response',
    seo: { canonical: '/resources/missed-call-recovery-system' },
    publishedAt: '2025-11-26',
  },
  {
    title: 'Review Generation System',
    description:
      'Learn how to build an automated review generation system that requests reviews from every customer after service completion without relying on team memory.',
    category: 'reviews-proof',
    seo: { canonical: '/resources/review-generation-system' },
    publishedAt: '2025-11-24',
  },
  {
    title: 'CRM Pipeline Architecture',
    description:
      'Learn how to architect a CRM pipeline with custom stages, automated follow-up, and accurate forecasting that mirrors your actual sales process.',
    category: 'frameworks',
    seo: { canonical: '/resources/crm-pipeline-architecture' },
    publishedAt: '2025-11-22',
  },
  {
    title: 'Google Business Profile System Architecture',
    description:
      'Learn how to fully architect your Google Business Profile with complete categories, descriptions, photos, and activity to maximise local search visibility.',
    category: 'local-visibility',
    seo: { canonical: '/resources/google-business-profile-system-architecture' },
    publishedAt: '2025-11-19',
  },
  {
    title: 'Booking Systems Inside Website Infrastructure',
    description:
      'Learn how to integrate booking systems into your website architecture so appointments flow directly into CRM with automated confirmations, reminders, and pipeline tracking.',
    category: 'website-clarity',
    seo: { canonical: '/resources/booking-systems-inside-website-infrastructure' },
    publishedAt: '2025-11-17',
  },
  {
    title: 'Website + CRM Integration Explained',
    description:
      'Understand how website-CRM integration connects form submissions, booking data, and visitor behaviour directly to your CRM pipeline for faster response and better tracking.',
    category: 'website-clarity',
    seo: { canonical: '/resources/website-crm-integration-explained' },
    publishedAt: '2025-11-15',
  },
  {
    title: 'Designing Websites That Support CRM Systems',
    description:
      'Learn how to design service business websites that natively support CRM integration with proper form architecture, data mapping, and pipeline-aligned page structure.',
    category: 'website-clarity',
    seo: { canonical: '/resources/designing-websites-that-support-crm-systems' },
    publishedAt: '2025-11-12',
  },
  {
    title: 'Local Service Page Architecture',
    description:
      'Learn how to architect dedicated service + location pages that target the specific local searches your customers use and give Google the relevance signals needed to rank.',
    category: 'local-visibility',
    seo: { canonical: '/resources/local-service-page-architecture' },
    publishedAt: '2025-11-10',
  },
  {
    title: 'Service Page Architecture That Converts',
    description:
      'Learn how to architect service pages that guide visitors through decision paths with search-intent matching, multi-path CTAs, and CRM-connected forms.',
    category: 'website-clarity',
    seo: { canonical: '/resources/service-page-architecture-that-converts' },
    publishedAt: '2025-11-08',
  },
  {
    title: 'Conversion Architecture for Service Websites',
    description:
      'Learn how conversion architecture structures service business websites to turn visitors into booked customers through decision-path design and system integration.',
    category: 'website-clarity',
    seo: { canonical: '/resources/conversion-architecture-for-service-websites' },
    publishedAt: '2025-11-05',
  },
  {
    title: 'How Smart Website Systems Work',
    description:
      'Learn how smart website systems connect lead capture, CRM, booking, and follow-up into one operational infrastructure for service businesses.',
    category: 'website-clarity',
    seo: { canonical: '/resources/how-smart-website-systems-work' },
    publishedAt: '2025-11-03',
  },
  {
    title: 'What Is a Systems-First Website?',
    description:
      'Understand the systems-first website approach — designing around operational workflows instead of templates to build websites that run your business.',
    category: 'website-clarity',
    seo: { canonical: '/resources/what-is-a-systems-first-website' },
    publishedAt: '2025-11-01',
  },
];

/**
 * Generates related resources for a given resource category
 */
export function getRelatedResources(
  category: ResourceCategory,
  currentUrl: string,
  limit = 3
): RelatedResource[] {
  const categoryLabelById = RESOURCE_CATEGORY_LABEL_BY_ID;
  const getCanonical = (resource: ResourceIndexItem) => resource.seo.canonical;

  const sortByNewest = (a: ResourceIndexItem, b: ResourceIndexItem) => {
    const aDate = Date.parse(`${a.updatedAt ?? a.publishedAt}T00:00:00Z`);
    const bDate = Date.parse(`${b.updatedAt ?? b.publishedAt}T00:00:00Z`);
    return bDate - aDate;
  };

  const guideCandidates = RESOURCE_INDEX.filter(r => getCanonical(r) !== currentUrl)
    .slice()
    .sort(sortByNewest);

  const sameCategoryGuides = guideCandidates
    .filter(r => r.category === category)
    .slice(0, limit)
    .map(r => ({
      title: r.title,
      description: r.description,
      url: getCanonical(r),
      categoryLabel: categoryLabelById.get(r.category) ?? 'Resources',
    }));

  if (sameCategoryGuides.length) return sameCategoryGuides;

  const otherGuides = guideCandidates.slice(0, limit).map(r => ({
    title: r.title,
    description: r.description,
    url: getCanonical(r),
    categoryLabel: categoryLabelById.get(r.category) ?? 'Resources',
  }));

  if (otherGuides.length) return otherGuides;

  const curatedFallbackByCategory: Partial<Record<ResourceCategory, RelatedResource[]>> = {
    ['follow-up-crm']: [
      {
        title: 'CRM Infrastructure: Turn Leads Into Customers',
        description:
          'Set up automated workflows that nurture leads and close deals without manual follow-up.',
        url: '/services/follow-up-crm',
        categoryLabel: 'CRM Infrastructure',
        featured: true,
        featuredBadge: 'Most Popular',
      },
      {
        title: 'Workflow Automation: Streamline Your Business',
        description:
          'Create automated processes that handle repetitive tasks and improve efficiency.',
        url: '/features/workflows',
        categoryLabel: 'Automation',
      },
      {
        title: 'Smart CRM: Intelligent Customer Management',
        description:
          'Follow-up and ownership system that understands your customers and predicts their needs.',
        url: '/features/crm',
        categoryLabel: 'CRM',
      },
    ],
  };

  return curatedFallbackByCategory[category] || [];
}

/**
 * Generates related resources content for a given resource category
 */
export function getRelatedResourcesContent(category: ResourceCategory): string[] {
  const categoryLabel = RESOURCE_CATEGORY_LABEL_BY_ID.get(category) ?? 'Resources';

  return [
    `More in ${categoryLabel}`,
    'Keep going with these guides in the same category.',
    'Read Guide',
  ];
}

/**
 * Generates related resources heading for a given resource category
 */
export function getRelatedResourcesHeading(category: ResourceCategory): string {
  const categoryLabel = RESOURCE_CATEGORY_LABEL_BY_ID.get(category) ?? 'Resources';

  return `More ${categoryLabel} Guides`;
}
