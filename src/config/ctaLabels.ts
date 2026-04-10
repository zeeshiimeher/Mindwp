import type { ContactSourceType } from '@/lib/contact/contactHref';

export type CtaIntent = 'explore' | 'consider' | 'ready';
export type CtaTone = 'short' | 'descriptive';

type ResolveCtaLabelOptions = {
  system: string;
  pageType: ContactSourceType;
  intent?: CtaIntent;
  tone?: CtaTone;
};

const CTA_LABEL_RULES: Record<ContactSourceType, readonly string[]> = {
  blog: ['See How It Works', 'Understand the System'],
  'case-study': ['See How It Works', 'Understand the System'],
  feature: ['See How This Works', 'Explore the System'],
  global: ['See How It Works', 'Understand the System'],
  industry: ['See How This Applies to Your Business'],
  page: ['See How It Works', 'Understand the System'],
  resource: ['See How It Works', 'Understand the System'],
  service: ['Start a Conversation', 'Get Your System Built'],
};

const SHORT_CTA_LABEL_RULES: Record<ContactSourceType, readonly string[]> = {
  blog: ['Learn More'],
  'case-study': ['See Results'],
  feature: ['See How', 'Explore'],
  global: ['Learn More'],
  industry: ['See Solution'],
  page: ['Learn More'],
  resource: ['Learn More'],
  service: ['Get Started', 'Start Now'],
};

const INTENT_DEFAULTS: Partial<Record<ContactSourceType, CtaIntent>> = {
  blog: 'explore',
  feature: 'consider',
  industry: 'consider',
  resource: 'explore',
  service: 'ready',
};

const INTENT_INDEX: Record<CtaIntent, number> = {
  explore: 0,
  consider: 0,
  ready: 0,
};

export const DEFAULT_CTA_LABEL = CTA_LABEL_RULES.service[0];

export function inferIntent(pageType: ContactSourceType): CtaIntent {
  switch (pageType) {
    case 'blog':
    case 'resource':
      return 'explore';
    case 'feature':
    case 'industry':
      return 'consider';
    case 'service':
      return 'ready';
    default:
      return INTENT_DEFAULTS[pageType] ?? 'explore';
  }
}

export function resolveCtaLabel({
  system: _system,
  pageType,
  intent,
  tone = 'descriptive',
}: ResolveCtaLabelOptions) {
  const resolvedIntent = intent ?? inferIntent(pageType);
  const labelRules = tone === 'short' ? SHORT_CTA_LABEL_RULES : CTA_LABEL_RULES;
  const labels = labelRules[pageType] ?? labelRules.service;
  const index = Math.min(INTENT_INDEX[resolvedIntent] ?? 0, labels.length - 1);

  return labels[index] ?? DEFAULT_CTA_LABEL;
}
