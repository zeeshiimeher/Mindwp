import type { ContactSourceType } from '@/lib/contact/contactHref';
import {
  inferPageIntent,
  type CTAIntent,
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
  blog: [
    'See the working system',
    'Diagnose the handoff behind this issue',
    'Compare the next system move',
    'Bring this into your workflow',
  ],
  'case-study': [
    'See the system behind the result',
    'Map the same bottleneck in your business',
    'Compare what this transformation would require',
    'See what this shift would look like for you',
  ],
  feature: [
    'See the capability in context',
    'Diagnose where this feature actually helps',
    'Compare the right feature layer',
    'Connect this feature to the full build',
  ],
  global: [
    'Find the right next path',
    'Diagnose the bottleneck first',
    'Compare the best-fit system path',
    'Map the right system for your business',
  ],
  industry: [
    'See the operating model',
    'Diagnose where the handoff breaks',
    'Compare the best-fit service path',
    'Map the right system for this business',
  ],
  page: [
    'Find the right next path',
    'Diagnose the bottleneck first',
    'Compare the best-fit system path',
    'Map the right system for your business',
  ],
  resource: [
    'See the implementation path',
    'Diagnose the manual gap',
    'Compare the right system response',
    'Turn this into a working system',
  ],
  service: [
    'See the build path',
    'Pressure-test the bottleneck',
    'Compare the right service path',
    'Scope the right system',
  ],
};

const SHORT_CTA_LABEL_RULES: Record<ContactSourceType, readonly string[]> = {
  blog: ['See System', 'Find The Gap', 'Compare Next Step', 'Apply This'],
  'case-study': ['See The Shift', 'Map The Bottleneck', 'Compare The Build', 'Plan Your Version'],
  feature: ['See In Context', 'Find The Gap', 'Compare Layers', 'Connect Feature'],
  global: ['Find Best Path', 'Find The Bottleneck', 'Compare Paths', 'Map The System'],
  industry: ['See Model', 'Find The Break', 'Compare Paths', 'Map The System'],
  page: ['Find Best Path', 'Find The Bottleneck', 'Compare Paths', 'Map The System'],
  resource: ['See Setup', 'Find The Gap', 'Compare Fixes', 'Build The System'],
  service: ['See Build Path', 'Find The Leak', 'Compare Service Paths', 'Scope The Fix'],
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

export const DEFAULT_TIER_CARD_CTA_LABEL = 'Start Conversation';

const INTENT_INDEX: Record<CTAIntent, number> = {
  entry: 0,
  diagnostic: 1,
  comparison: 2,
  conversion: 3,
};

export const DEFAULT_CTA_LABEL = CTA_LABEL_RULES.service[3];

export const APPROVED_CTA_LABELS = [...new Set([
  ...Object.values(CTA_LABEL_MAP),
  ...Object.values(CTA_LABEL_RULES).flat(),
  ...Object.values(SHORT_CTA_LABEL_RULES).flat(),
  ...Object.values(SECONDARY_CTA_RULES).map(rule => rule.label),
  DEFAULT_TIER_CARD_CTA_LABEL,
])];

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
  if (buttonHref && !buttonHref.startsWith('/contact')) {
    return buttonText?.trim() || DEFAULT_TIER_CARD_CTA_LABEL;
  }

  return DEFAULT_TIER_CARD_CTA_LABEL;
}
