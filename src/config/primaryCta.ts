import { CTA_CONFIG } from '@/config/ctaConfig';
import { buildGlobalContactHref } from '@/lib/contact/contactHref';

export type PrimaryCtaType = 'internal' | 'external' | 'chat';

export const primaryCta = {
  label: CTA_CONFIG.primary.label,
  type: 'internal' as PrimaryCtaType,
  href: buildGlobalContactHref(),
};
