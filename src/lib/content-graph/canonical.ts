export const CANONICAL_SYSTEMS = [
  'smart-website-systems',
  'local-seo-authority',
  'lead-response-handling',
  'follow-up-crm',
  'reputation-review-systems',
] as const;

export type CanonicalSystem = (typeof CANONICAL_SYSTEMS)[number];
export const ACTIVE_SYSTEMS = CANONICAL_SYSTEMS;
export type ActiveSystem = CanonicalSystem;

export const getNodeSystems = (node: {
  primarySystem?: ActiveSystem;
  supportingSystems?: ActiveSystem[];
}) => {
  return [node.primarySystem, ...(node.supportingSystems ?? [])].filter(Boolean) as ActiveSystem[];
};

/**
 * Authority role each canonical system plays in the conversion engine.
 *
 * - core      Smart Website Systems is the gravity hub. May connect to all.
 * - entry     Local SEO Authority is the entry lane. Connects core + trust.
 * - operation Follow-Up & CRM is the ownership layer. Connects core + response.
 * - trust     Reputation & Review is the trust layer. Connects core + entry.
 * - response  Lead Response & Handling is the response layer. Connects core + operation.
 *
 * Used by graph relationship and scoring helpers.
 */
export const SYSTEM_TYPES: Record<
  CanonicalSystem,
  'core' | 'entry' | 'operation' | 'trust' | 'response'
> = {
  'smart-website-systems': 'core',
  'local-seo-authority': 'entry',
  'follow-up-crm': 'operation',
  'reputation-review-systems': 'trust',
  'lead-response-handling': 'response',
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
