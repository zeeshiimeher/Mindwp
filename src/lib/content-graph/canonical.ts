export const CANONICAL_SYSTEMS = [
  'smart-website-systems',
  'local-seo-authority',
  'ai-lead-handling',
  'crm-automation',
  'reputation-review',
  'revenue-growth',
] as const;

export type CanonicalSystem = (typeof CANONICAL_SYSTEMS)[number];

/**
 * Authority role each canonical system plays in the conversion engine.
 *
 * - core      Smart Website Systems is the gravity hub. May connect to all.
 * - entry     Local SEO Authority is the entry lane. Connects core + trust.
 * - operation CRM Automation is the operating layer. Connects core + response.
 * - trust     Reputation/Review is the trust layer. Connects core + entry.
 * - response  AI Lead Handling is the response layer. Connects core + operation.
 * - growth    Revenue Growth is the upsell/recovery layer. Connects core + operation.
 *
 * Used by graph relationship and scoring helpers.
 */
export const SYSTEM_TYPES: Record<
  CanonicalSystem,
  'core' | 'entry' | 'operation' | 'trust' | 'response' | 'growth'
> = {
  'smart-website-systems': 'core',
  'local-seo-authority': 'entry',
  'crm-automation': 'operation',
  'reputation-review': 'trust',
  'ai-lead-handling': 'response',
  'revenue-growth': 'growth',
};

export const CANONICAL_INDUSTRIES = [
  'accounting',
  'aesthetic-clinic',
  'automotive',
  'auto-repair',
  'body-shop',
  'car-detailing',
  'consulting',
  'dental-clinic',
  'driving-school',
  'electrical',
  'hair-salon',
  'home-inspection',
  'hvac',
  'landscaping',
  'law-firm',
  'lash-extensions',
  'med-spa',
  'mobile-mechanic',
  'mortgage-broker',
  'nail-salon',
  'plumbing',
  'private-clinic',
  'property-management',
  'realtor',
  'repair-shop',
  'roofing',
  'salon',
  'tattoo-studio',
] as const;

export const CANONICAL_TOPICS = [
  'authority-signals',
  'lead-management',
  'missed-calls',
  'lead-response-time',
  'review-generation',
  'booking-automation',
  'conversion-optimization',
  'crm-visibility',
  'follow-up',
  'lead-capture',
  'lead-routing',
  'lead-qualification',
  'website-infrastructure',
  'systems-first-websites',
  'crm-integration',
  'crm-enabled-websites',
  'service-page-architecture',
  'conversion-tracking',
  'booking-systems',
  'review-automation',
  'feedback-loops',
  'negative-review-response',
  'reputation-monitoring',
  'local-seo',
  'local-visibility',
  'google-business-profile',
  'local-service-pages',
  'local-authority',
  'revenue-visibility',
  'crm-pipeline',
  'client-reactivation',
  'customer-feedback',
  'customer-lifetime-value',
  'emergency-handling',
  'lifetime-value',
  'negative-reviews',
  'no-show-reduction',
  'pipeline-architecture',
  'pipeline-visibility',
  'revenue-tracking',
  'service-pages',
  'service-reminders',
] as const;
