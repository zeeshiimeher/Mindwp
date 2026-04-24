import { CONTACT_PATH, type ContactSourceType } from '@/lib/contact/contactHref';
import {
  type CTAIntent,
  inferPageIntent,
  type PageType,
} from '@/lib/page/pageIdentity';

export type CtaTone = 'short' | 'descriptive';

type ResolveCtaLabelOptions = {
  system: string;
  pageType: PageType;
  intent?: CTAIntent;
  tone?: CtaTone;
};

type ResolveCtaLabelOverrides = Omit<ResolveCtaLabelOptions, 'system'>;

export const DEFAULT_TIER_CARD_CTA_LABEL = 'Start a Conversation';

export const DEFAULT_CTA_LABEL = 'Start a Conversation';
export const SECONDARY_CTA_LABEL = 'Discuss Your Project';

export const APPROVED_CTA_LABELS = ['Start a Conversation', 'Discuss Your Project'] as const;

export function isApprovedCtaLabel(label: string): boolean {
  return (APPROVED_CTA_LABELS as readonly string[]).includes(label.trim());
}

export function inferIntent(pageType: PageType): CTAIntent {
  return inferPageIntent(pageType);
}

export function resolveCtaLabel(
  input: string | ResolveCtaLabelOptions,
  overrides?: ResolveCtaLabelOverrides
) {
  const options: ResolveCtaLabelOptions =
    typeof input === 'string'
      ? {
        system: input,
        pageType: overrides?.pageType ?? 'service',
        intent: overrides?.intent,
        tone: overrides?.tone,
      }
      : input;

  const { pageType, intent, tone = 'descriptive' } = options;
  const resolvedIntent = intent ?? inferIntent(pageType);
  if (tone === 'short') {
    return DEFAULT_CTA_LABEL;
  }

  return resolvedIntent === 'entry' || resolvedIntent === 'conversion'
    ? DEFAULT_CTA_LABEL
    : SECONDARY_CTA_LABEL;
}

export function resolveTierCardCtaLabel(buttonHref?: string, buttonText?: string): string {
  if (buttonHref && !buttonHref.startsWith(CONTACT_PATH)) {
    return buttonText?.trim() || DEFAULT_TIER_CARD_CTA_LABEL;
  }

  return DEFAULT_TIER_CARD_CTA_LABEL;
}
