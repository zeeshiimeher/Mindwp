export const CTA_LABELS = {
  PRIMARY: 'Start a Conversation',
  BOOK_CALL: 'Book a Call',
  DEMO: 'See How It Works',
  REVIEW_BOOKING: 'Review How Booking Automation Works',
  SMART_WEBSITE_CONVERSION: 'Understand What Makes Websites Convert',
  AI_LEAD_HANDLING: 'Find Out How AI Lead Handling Works',
  REVENUE_AUDIT: 'Check Where Revenue Slows Down',
  REVIEW_SYSTEMS: 'Review How Review Systems Work',
  LOCAL_AUTHORITY: 'Understand What Builds Local Authority',
} as const;

export const DEFAULT_CTA_LABEL = CTA_LABELS.PRIMARY;

export const CTA_LABEL_MAP = {
  'smart-website-systems': CTA_LABELS.SMART_WEBSITE_CONVERSION,
  'crm-automation': 'Set Up Your CRM Pipeline',
  'local-seo-authority': CTA_LABELS.LOCAL_AUTHORITY,
  'lead-capture': 'Capture More Leads',
  'reputation-management': 'Get More Reviews Consistently',
  'ai-lead-handling': 'Automate Your Lead Handling',
  'reputation-review': 'Get More Reviews Consistently',
  'revenue-growth': 'Improve Your Revenue System',
} as const;

export function resolveCtaLabel(system: string): string {
  return CTA_LABEL_MAP[system as keyof typeof CTA_LABEL_MAP] ?? DEFAULT_CTA_LABEL;
}
