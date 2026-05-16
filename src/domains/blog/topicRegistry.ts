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
      'How enquiries are captured, routed, qualified, and followed up.',
  },
  'missed-calls': {
    name: 'Missed Calls',
    description:
      'What happens when calls are unanswered and how the response path can recover.',
  },
  'lead-response-time': {
    name: 'Lead Response Time',
    description:
      'Why response speed matters when calls, forms, and messages arrive.',
  },
  'review-generation': {
    name: 'Review Generation',
    description: 'How completed work becomes reviews and visible proof at the right time.',
  },
  'booking-automation': {
    name: 'Booking Support',
    description:
      'Booking paths that make the next step easier for customers and teams.',
  },
  'conversion-optimization': {
    name: 'Enquiry Conversion',
    description:
      'Helping visitors understand, trust, and take the right next step.',
  },
  'crm-visibility': {
    name: 'Follow-Up Visibility',
    description:
      'Seeing who owns each enquiry, what its status is, and what should happen next.',
  },
  'follow-up': {
    name: 'Follow-Up',
    description:
      'Follow-up ownership, reminders, and next steps that do not depend on memory.',
  },
  'lead-capture': {
    name: 'Lead Capture',
    description:
      'Calls, forms, and messages landing somewhere useful.',
  },
  'lead-routing': {
    name: 'Lead Routing',
    description: 'Getting each enquiry to the person or place that owns the next step.',
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
    name: 'Website to Follow-Up Handoff',
    description:
      'Connecting website enquiries to visible ownership and follow-up.',
  },
  'crm-enabled-websites': {
    name: 'Follow-Up Ready Websites',
    description: 'Websites that send enquiry context into the next step.',
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
    name: 'Review Request Timing',
    description:
      'Review requests that happen close to completed work.',
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
    description: 'Local service pages that help nearby customers understand and verify the offer.',
  },
  'local-authority': {
    name: 'Local Authority',
    description:
      'Building topical and geographic authority through content, links, and operational proof.',
  },
  'revenue-visibility': {
    name: 'Value Visibility',
    description:
      'Seeing where enquiries, quotes, reviews, and repeat work are still leaking value.',
  },
  'crm-pipeline': {
    name: 'Enquiry Status',
    description:
      'Clear stages that show where each enquiry or quote stands.',
  },
  'client-reactivation': {
    name: 'Client Reactivation',
    description: 'Follow-up paths for customers who should hear from the business again.',
  },
  'customer-feedback': {
    name: 'Customer Feedback',
    description:
      'Collecting and acting on customer feedback to improve service delivery and retention.',
  },
  'customer-lifetime-value': {
    name: 'Customer Lifetime Value',
    description:
      'Understanding repeat value without turning it into a broad growth promise.',
  },
  'emergency-handling': {
    name: 'Emergency Handling',
    description:
      "After-hours and emergency call routing systems for service businesses that can't miss urgent requests.",
  },
  'lifetime-value': {
    name: 'Lifetime Value',
    description:
      'Repeat and referral value that becomes easier to see and handle.',
  },
  'negative-reviews': {
    name: 'Negative Reviews',
    description:
      'Turning negative reviews into opportunities through response frameworks and service recovery.',
  },
  'no-show-reduction': {
    name: 'No-Show Reduction',
    description: 'Reminder and confirmation paths that reduce missed appointments.',
  },
  'pipeline-architecture': {
    name: 'Status Architecture',
    description:
      'Status stages that match how enquiries and quotes actually move.',
  },
  'pipeline-visibility': {
    name: 'Status Visibility',
    description: 'Seeing bottlenecks before follow-up slips.',
  },
  'revenue-tracking': {
    name: 'Value Tracking',
    description:
      'Understanding which enquiries and follow-up paths create real work.',
  },
  'service-pages': {
    name: 'Service Pages',
    description:
      'High-converting service pages built for local search and designed to drive action.',
  },
  'service-reminders': {
    name: 'Service Reminders',
    description:
      'Reminder paths for appointments, follow-ups, and repeat service moments.',
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
