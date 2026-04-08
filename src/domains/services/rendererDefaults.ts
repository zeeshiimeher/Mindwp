import { buildGlobalContactHref } from '@/lib/contact/contactHref';

export const SERVICE_RENDERER_DEFAULTS = {
  relatedTitle: 'Related Insights',
  relatedDescription: 'Explore related systems, industries, and case studies.',
  ctaTitle: 'Ready to move forward?',
  ctaDescription: 'Let’s discuss your system structure.',
  ctaButtonText: 'Start a Conversation',
  ctaButtonHref: buildGlobalContactHref(),
} as const;
