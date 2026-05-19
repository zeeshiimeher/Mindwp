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
      'How trust indicators, reviews, and local presence help customers or patients verify the business.',
  },
  'lead-management': {
    name: 'Lead Management',
    description: 'How enquiries are captured, routed, qualified, and followed up.',
  },
  'missed-calls': {
    name: 'Missed Calls',
    description: 'What happens when calls are unanswered and how the response path can recover.',
  },
  'lead-response-time': {
    name: 'Lead Response Time',
    description: 'Why response speed matters when calls, forms, and messages arrive.',
  },
  'review-generation': {
    name: 'Review Generation',
    description: 'How completed work becomes reviews and visible proof at the right time.',
  },
  'booking-automation': {
    name: 'Booking Support',
    description: 'Booking paths that make the next step easier for customers and teams.',
  },
  'conversion-optimization': {
    name: 'Enquiry Conversion',
    description: 'Helping visitors understand, trust, and take the right next step.',
  },
  'crm-visibility': {
    name: 'Follow-Up Visibility',
    description: 'Seeing who owns each enquiry, what its status is, and what should happen next.',
  },
  'follow-up': {
    name: 'Follow-Up',
    description: 'Follow-up ownership, reminders, and next steps that do not depend on memory.',
  },
  'lead-capture': {
    name: 'Lead Capture',
    description: 'Calls, forms, and messages landing somewhere useful.',
  },
  'lead-routing': {
    name: 'Lead Routing',
    description: 'Getting each enquiry to the person or place that owns the next step.',
  },
  'lead-qualification': {
    name: 'Lead Qualification',
    description:
      'Fit and priority signals that help the right enquiries move to the right next step.',
  },
  'website-infrastructure': {
    name: 'Website Foundation',
    description:
      'Website clarity, performance, trust, and enquiry readiness before deeper optimization.',
  },
  'systems-first-websites': {
    name: 'Systems-First Websites',
    description: 'Building websites around operational systems rather than aesthetics alone.',
  },
  'crm-integration': {
    name: 'Website to Follow-Up Handoff',
    description: 'Connecting website enquiries to visible ownership and follow-up.',
  },
  'crm-enabled-websites': {
    name: 'Follow-Up Ready Websites',
    description: 'Websites that send enquiry context into the next step.',
  },
  'service-page-architecture': {
    name: 'Service Page Architecture',
    description:
      'Structuring service, treatment, or procedure pages so visitors can understand, trust, and enquire.',
  },
  'conversion-tracking': {
    name: 'Conversion Tracking',
    description:
      'Understanding which calls, forms, bookings, and enquiries came from the website path.',
  },
  'booking-systems': {
    name: 'Booking Paths',
    description:
      'Booking and consultation paths that make the next step clear after the website visit.',
  },
  'review-automation': {
    name: 'Review Request Timing',
    description: 'Review requests that happen close to completed work.',
  },
  'feedback-loops': {
    name: 'Feedback Loops',
    description:
      'Closed-loop systems that capture client feedback and route it into operational improvements.',
  },
  'negative-review-response': {
    name: 'Negative Review Response',
    description:
      'Calm response guidance for negative reviews without turning the issue into public friction.',
  },
  'reputation-monitoring': {
    name: 'Reputation Awareness',
    description:
      'Keeping review signals and public proof visible enough for the team to respond at the right time.',
  },
  'local-seo': {
    name: 'Local Discovery',
    description:
      'Helping nearby customers or patients find, check, and verify the business or practice.',
  },
  'local-visibility': {
    name: 'Local Visibility',
    description:
      'Being findable and trustworthy when nearby customers or patients compare local options.',
  },
  'google-business-profile': {
    name: 'Google Business Profile',
    description: 'Keeping the public profile accurate, useful, and connected to the website path.',
  },
  'local-service-pages': {
    name: 'Local Service Pages',
    description: 'Local service pages that help nearby customers understand and verify the offer.',
  },
  'local-authority': {
    name: 'Local Authority',
    description:
      'Building local trust through useful pages, reviews, proof, and consistent public signals.',
  },
  'revenue-visibility': {
    name: 'Value Visibility',
    description:
      'Seeing where enquiries, quotes, reviews, and repeat work are still leaking value.',
  },
  'crm-pipeline': {
    name: 'Enquiry Status',
    description: 'Clear stages that show where each enquiry or quote stands.',
  },
  'client-reactivation': {
    name: 'Client Reactivation',
    description: 'Follow-up paths for customers who should hear from the business again.',
  },
  'customer-feedback': {
    name: 'Customer Feedback',
    description:
      'Collecting feedback at the right moment so the team can learn before asking for public proof.',
  },
  'customer-lifetime-value': {
    name: 'Customer Lifetime Value',
    description: 'Understanding repeat value without turning it into a broad growth promise.',
  },
  'emergency-handling': {
    name: 'After-Hours Handling',
    description:
      'Calm after-hours response paths for enquiries that arrive when the team is busy or unavailable.',
  },
  'lifetime-value': {
    name: 'Lifetime Value',
    description: 'Repeat and referral value that becomes easier to see and handle.',
  },
  'negative-reviews': {
    name: 'Negative Reviews',
    description:
      'Understanding negative feedback and responding without overpromising or escalating publicly.',
  },
  'no-show-reduction': {
    name: 'No-Show Reduction',
    description: 'Reminder and confirmation paths that reduce missed appointments.',
  },
  'pipeline-architecture': {
    name: 'Status Architecture',
    description: 'Status stages that match how enquiries and quotes actually move.',
  },
  'pipeline-visibility': {
    name: 'Status Visibility',
    description: 'Seeing bottlenecks before follow-up slips.',
  },
  'revenue-tracking': {
    name: 'Value Tracking',
    description: 'Understanding which enquiries and follow-up paths create real work.',
  },
  'service-pages': {
    name: 'Service Pages',
    description:
      'Service, treatment, or procedure pages that make the offer clear enough to enquire.',
  },
  'service-reminders': {
    name: 'Service Reminders',
    description: 'Reminder paths for appointments, follow-ups, and repeat service moments.',
  },
};

/** Maps blog category → topic hub section for grouping posts. */
const CATEGORY_TO_SECTION: Record<string, TopicHubSection> = {
  'website-clarity': 'foundations',
  'local-visibility': 'foundations',
  'lead-response': 'operational-systems',
  'follow-up-crm': 'operational-systems',
  'reviews-proof': 'operational-systems',
  'implementation-services': 'frameworks',
  'home-services-examples': 'industry-implementations',
  'healthcare-practice-examples': 'industry-implementations',
  frameworks: 'frameworks',
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
