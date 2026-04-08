const DEFAULT_CTA_LABEL = 'Start a Conversation';

export const CTA_LABEL_MAP = {
  'smart-website-systems': 'Build Your Smart Website System',
  'crm-automation': 'Set Up Your CRM Pipeline',
  'lead-capture': 'Capture More Leads',
  'reputation-management': 'Get More Reviews Consistently',
  'ai-lead-handling': 'Automate Your Lead Handling',
  'reputation-review': 'Get More Reviews Consistently',
} as const;

export function resolveCtaLabel(system: string): string {
  return CTA_LABEL_MAP[system as keyof typeof CTA_LABEL_MAP] ?? DEFAULT_CTA_LABEL;
}
