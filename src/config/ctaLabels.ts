import type { ContactSourceType } from '@/lib/contact/contactHref';
import { type CTAIntent, type PageType, toContactSourceType } from '@/lib/page/pageIdentity';

export type CtaTone = 'short' | 'descriptive';

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

const INTENT_DEFAULTS: Partial<Record<PageType, CTAIntent>> = {
  blog: 'entry',
  feature: 'comparison',
  'industry-detail': 'comparison',
  'industry-category': 'comparison',
  resource: 'entry',
  service: 'conversion',
};

const INTENT_INDEX: Record<CTAIntent, number> = {
  entry: 0,
  diagnostic: 0,
  comparison: 0,
  conversion: 0,
};

export const DEFAULT_CTA_LABEL = CTA_LABEL_RULES.service[0];

export function inferIntent(pageType: PageType): CTAIntent {
  switch (pageType) {
    case 'blog':
    case 'resource':
      return 'entry';
    case 'feature':
    case 'industry-detail':
    case 'industry-category':
      return 'comparison';
    case 'service':
      return 'conversion';
    default:
      return INTENT_DEFAULTS[pageType] ?? 'entry';
  }
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

  if (!system || !(system in CTA_LABEL_MAP)) {
    return DEFAULT_CTA_LABEL;
  }

  const ruleKey = toContactSourceType(pageType);
  const resolvedIntent = intent ?? inferIntent(pageType);
  const labelRules = tone === 'short' ? SHORT_CTA_LABEL_RULES : CTA_LABEL_RULES;
  const labels = labelRules[ruleKey] ?? labelRules.service;
  const index = Math.min(INTENT_INDEX[resolvedIntent] ?? 0, labels.length - 1);

  return labels[index] ?? DEFAULT_CTA_LABEL;
}
