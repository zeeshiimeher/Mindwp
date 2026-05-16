import { CANONICAL_TOPICS } from '@/lib/content-graph/canonical';

export type TopicHubSection =
  | 'foundations'
  | 'operational-systems'
  | 'industry-implementations'
  | 'frameworks'
  | 'resources';

export type TopicMetadata = {
  slug: string;
  name: string;
  description: string;
};

/** Human-readable names + descriptions for each canonical topic. */
const TOPIC_METADATA: Record<string, Omit<TopicMetadata, 'slug'>> = {
  'authority-signals': {
    name: 'Authority Signals',
    description:
      'How trust indicators, reviews, and local presence signals build search authority for your business.',
  },
  'lead-management': {
    name: 'Lead Management',
    description:
      'Systems and strategies for capturing, routing, qualifying, and converting inbound leads.',
  },
  'missed-calls': {
    name: 'Missed Calls',
    description:
      'Recovering lost revenue from unanswered calls with automated follow-up and AI-powered response systems.',
  },
  'lead-response-time': {
    name: 'Lead Response Time',
    description:
      'Why speed-to-lead matters and how automation shrinks response windows to seconds.',
  },
  'review-generation': {
    name: 'Review Generation',
    description: 'Automated workflows that turn completed jobs into five-star reviews at scale.',
  },
  'booking-automation': {
    name: 'Booking Automation',
    description:
      'Self-service scheduling systems that reduce friction and eliminate back-and-forth booking.',
  },
  'conversion-optimization': {
    name: 'Conversion Optimization',
    description:
      'Turning more website visitors into leads through structured pages, CTAs, and system-backed funnels.',
  },
  'crm-visibility': {
    name: 'CRM Visibility',
    description:
      'Dashboards, pipelines, and reporting that give you full visibility into every lead and deal.',
  },
  'follow-up': {
    name: 'Follow-Up',
    description:
      'Automated and manual follow-up sequences that keep leads warm and close more deals.',
  },
  'lead-capture': {
    name: 'Lead Capture',
    description:
      'Forms, chat widgets, and call tracking systems that capture leads before they bounce.',
  },
  'lead-routing': {
    name: 'Lead Routing',
    description: 'Intelligent routing rules that send leads to the right person or team instantly.',
  },
  'lead-qualification': {
    name: 'Lead Qualification',
    description:
      'Scoring and filtering systems that separate high-intent prospects from poor-fit enquiries.',
  },
  'website-infrastructure': {
    name: 'Website Infrastructure',
    description:
      'The technical foundation — hosting, performance, security — that underpins every conversion system.',
  },
  'systems-first-websites': {
    name: 'Systems-First Websites',
    description: 'Building websites around operational systems rather than aesthetics alone.',
  },
  'crm-integration': {
    name: 'CRM Integration',
    description:
      'Connecting your website, forms, and communication channels directly into your CRM.',
  },
  'crm-enabled-websites': {
    name: 'CRM-Enabled Websites',
    description: 'Websites that feed data directly into CRM pipelines for full lifecycle tracking.',
  },
  'service-page-architecture': {
    name: 'Service Page Architecture',
    description:
      'Structuring service pages for search visibility, conversion, and local authority.',
  },
  'conversion-tracking': {
    name: 'Conversion Tracking',
    description:
      'Measuring what matters — call tracking, form submissions, and attribution across channels.',
  },
  'booking-systems': {
    name: 'Booking Systems',
    description: 'End-to-end appointment and scheduling infrastructure for service businesses.',
  },
  'review-automation': {
    name: 'Review Automation',
    description:
      'Automated review request workflows triggered by job completion or service delivery.',
  },
  'feedback-loops': {
    name: 'Feedback Loops',
    description:
      'Closed-loop systems that capture client feedback and route it into operational improvements.',
  },
  'negative-review-response': {
    name: 'Negative Review Response',
    description:
      'Frameworks and workflows for responding to negative reviews professionally and quickly.',
  },
  'reputation-monitoring': {
    name: 'Reputation Monitoring',
    description:
      'Tracking your online reputation across Google, Yelp, and industry-specific platforms.',
  },
  'local-seo': {
    name: 'Local SEO',
    description:
      'Ranking in local search results through structured content, citations, and authority building.',
  },
  'local-visibility': {
    name: 'Local Visibility',
    description:
      'Being found when and where local customers search — Maps, organic, and directory presence.',
  },
  'google-business-profile': {
    name: 'Google Business Profile',
    description:
      'Optimizing and managing your Google Business Profile for maximum local visibility.',
  },
  'local-service-pages': {
    name: 'Local Service Pages',
    description: 'City- and service-specific landing pages that rank locally and convert visitors.',
  },
  'local-authority': {
    name: 'Local Authority',
    description:
      'Building topical and geographic authority through content, links, and operational proof.',
  },
  'revenue-visibility': {
    name: 'Revenue Visibility',
    description:
      'Connecting marketing activity to revenue outcomes with end-to-end pipeline tracking.',
  },
  'crm-pipeline': {
    name: 'CRM Pipeline',
    description:
      'Structured deal stages that give your team clarity on every opportunity from lead to close.',
  },
  'client-reactivation': {
    name: 'Client Reactivation',
    description: 'Win-back campaigns and automated sequences that re-engage dormant clients.',
  },
  'customer-feedback': {
    name: 'Customer Feedback',
    description:
      'Collecting and acting on customer feedback to improve service delivery and retention.',
  },
  'customer-lifetime-value': {
    name: 'Customer Lifetime Value',
    description:
      'Strategies and systems that increase the total revenue each customer generates over time.',
  },
  'emergency-handling': {
    name: 'Emergency Handling',
    description:
      "After-hours and emergency call routing systems for service businesses that can't miss urgent requests.",
  },
  'lifetime-value': {
    name: 'Lifetime Value',
    description:
      'Maximizing per-customer revenue through retention, upsells, and operational excellence.',
  },
  'negative-reviews': {
    name: 'Negative Reviews',
    description:
      'Turning negative reviews into opportunities through response frameworks and service recovery.',
  },
  'no-show-reduction': {
    name: 'No-Show Reduction',
    description: 'Automated reminders and confirmation workflows that reduce appointment no-shows.',
  },
  'pipeline-architecture': {
    name: 'Pipeline Architecture',
    description:
      'Designing CRM pipeline stages that mirror your actual sales and service delivery process.',
  },
  'pipeline-visibility': {
    name: 'Pipeline Visibility',
    description: 'Real-time dashboards and alerts that surface pipeline health and bottlenecks.',
  },
  'revenue-tracking': {
    name: 'Revenue Tracking',
    description:
      'Attributing revenue back to marketing channels, campaigns, and individual touchpoints.',
  },
  'service-pages': {
    name: 'Service Pages',
    description:
      'High-converting service pages built for local search and designed to drive action.',
  },
  'service-reminders': {
    name: 'Service Reminders',
    description:
      'Automated reminder sequences for upcoming appointments, follow-ups, and recurring services.',
  },
};

/** Maps blog category → topic hub section for grouping posts. */
const CATEGORY_TO_SECTION: Record<string, TopicHubSection> = {
  'smart-website-systems': 'foundations',
  'local-authority-seo': 'foundations',
  'lead-response-handling': 'operational-systems',
  'follow-up-crm': 'operational-systems',
  'reputation-review-systems': 'operational-systems',
  'home-services-industry': 'industry-implementations',
  'beauty-personal-care-industry': 'industry-implementations',
  'future-local-business-tech': 'frameworks',
};

export const SECTION_LABELS: Record<TopicHubSection, string> = {
  foundations: 'Foundations',
  'operational-systems': 'Operational Systems',
  'industry-implementations': 'Industry Implementations',
  frameworks: 'Frameworks',
  resources: 'Resources',
};

export const SECTION_ORDER: TopicHubSection[] = [
  'foundations',
  'operational-systems',
  'industry-implementations',
  'frameworks',
  'resources',
];

export function getTopicMetadata(slug: string): TopicMetadata | undefined {
  const entry = TOPIC_METADATA[slug];
  if (!entry) return undefined;
  return { slug, ...entry };
}

export function getAllTopicSlugs(): string[] {
  return [...CANONICAL_TOPICS];
}

export function getSectionForCategory(category: string): TopicHubSection {
  return CATEGORY_TO_SECTION[category] ?? 'resources';
}
