import { CONTACT_PATH, type ContactSourceType } from '@/lib/contact/contactHref';
import {
  type CTAIntent,
  inferPageIntent,
  type PageType,
  toContactSourceType,
} from '@/lib/page/pageIdentity';

export type CtaTone = 'short' | 'descriptive';

export type SecondaryCtaAction = {
  label: string;
  href: string;
};

type ResolveCtaLabelOptions = {
  system: string;
  pageType: PageType;
  intent?: CTAIntent;
  tone?: CtaTone;
};

type ResolveCtaLabelOverrides = Omit<ResolveCtaLabelOptions, 'system'>;

export const CTA_LABEL_MAP: Record<string, string> = {
  'smart-website-systems': 'Start a Conversation',
  'local-seo-authority': 'Start a Conversation',
  'ai-lead-handling': 'Start a Conversation',
  'crm-automation': 'Start a Conversation',
  'reputation-review': 'Start a Conversation',
  'revenue-growth': 'Start a Conversation',
};

const CTA_LABEL_RULES: Record<ContactSourceType, readonly string[]> = {
  blog: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  'case-study': ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  feature: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  global: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  industry: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  page: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  resource: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  service: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
};

const SHORT_CTA_LABEL_RULES: Record<ContactSourceType, readonly string[]> = {
  blog: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  'case-study': ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  feature: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  global: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  industry: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  page: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  resource: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
  service: ['Start a Conversation', 'Discuss Your Project', 'Discuss Your Project', 'Start a Conversation'],
};

const SECONDARY_CTA_RULES: Partial<
  Record<ContactSourceType, { label: string; href: (slug: string) => string }>
> = {
  feature: {
    label: 'See How It Works',
    href: slug => `/features/${slug}`,
  },
  industry: {
    label: 'See How This Applies to Your Business',
    href: slug => `/industries/${slug}`,
  },
};

export const DEFAULT_TIER_CARD_CTA_LABEL = 'Start a Conversation';

const INTENT_INDEX: Record<CTAIntent, number> = {
  entry: 0,
  diagnostic: 1,
  comparison: 2,
  conversion: 3,
};

export const DEFAULT_CTA_LABEL = 'Start a Conversation';

export const APPROVED_CTA_LABELS = [
  ...new Set([
    ...Object.values(CTA_LABEL_MAP),
    ...Object.values(CTA_LABEL_RULES).flat(),
    ...Object.values(SHORT_CTA_LABEL_RULES).flat(),
    ...Object.values(SECONDARY_CTA_RULES).map(rule => rule.label),
    DEFAULT_TIER_CARD_CTA_LABEL,
  ]),
];

export function isApprovedCtaLabel(label: string): boolean {
  return APPROVED_CTA_LABELS.includes(label.trim());
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

  const { system, pageType, intent, tone = 'descriptive' } = options;

  const ruleKey = toContactSourceType(pageType);
  const resolvedIntent = intent ?? inferIntent(pageType);
  const labelRules = tone === 'short' ? SHORT_CTA_LABEL_RULES : CTA_LABEL_RULES;
  const labels = labelRules[ruleKey] ?? labelRules.service;
  const index = Math.min(INTENT_INDEX[resolvedIntent] ?? 0, labels.length - 1);

  return labels[index] ?? CTA_LABEL_MAP[system] ?? DEFAULT_CTA_LABEL;
}

export function resolveSecondaryCta(
  pageType: ContactSourceType,
  slug: string
): SecondaryCtaAction | undefined {
  const config = SECONDARY_CTA_RULES[pageType];

  if (!config) {
    return undefined;
  }

  return {
    label: config.label,
    href: config.href(slug),
  };
}

export function resolveTierCardCtaLabel(buttonHref?: string, buttonText?: string): string {
  if (buttonHref && !buttonHref.startsWith(CONTACT_PATH)) {
    return buttonText?.trim() || DEFAULT_TIER_CARD_CTA_LABEL;
  }

  return DEFAULT_TIER_CARD_CTA_LABEL;
}
