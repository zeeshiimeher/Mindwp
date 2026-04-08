import { buildGlobalContactHref } from '@/lib/contact/contactHref';

export type PrimaryCtaType = 'internal' | 'external' | 'chat';

export const primaryCta = {
  label: 'Start a Conversation',
  type: 'internal' as PrimaryCtaType,
  href: buildGlobalContactHref(),
};
