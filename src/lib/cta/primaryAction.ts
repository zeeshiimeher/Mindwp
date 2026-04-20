import {
  CTA_LABEL_MAP,
  type CtaTone,
  DEFAULT_CTA_LABEL,
  resolveCtaLabel,
} from '@/config/ctaLabels';
import { buildContactHref, type ContactSourceType } from '@/lib/contact/contactHref';
import { type CTAIntent, type PageType, toContactSourceType } from '@/lib/page/pageIdentity';

type ResolvePrimaryCtaActionOptions = {
  system: string;
  slug: string;
  pageType?: PageType;
  sourceType?: ContactSourceType;
  intent?: CTAIntent;
  tone?: CtaTone;
  baseHref?: string;
};

export type PrimaryCtaAction = {
  label: string;
  href: string;
  sourceType: ContactSourceType;
};

type ResolveGlobalPrimaryCtaOptions = Partial<
  Omit<ResolvePrimaryCtaActionOptions, 'system' | 'sourceType'>
>;

const GLOBAL_PRIMARY_CTA_DEFAULTS = {
  system: 'smart-website-systems',
  sourceType: 'global',
  slug: 'navigation',
} as const satisfies Pick<ResolvePrimaryCtaActionOptions, 'system' | 'sourceType' | 'slug'>;

function resolvePrimaryCtaLabel({
  system,
  pageType,
  sourceType,
  intent,
  tone = 'descriptive',
}: ResolvePrimaryCtaActionOptions): string {
  const resolvedSourceType = sourceType ?? (pageType ? toContactSourceType(pageType) : undefined);

  if (!resolvedSourceType) {
    throw new Error('resolvePrimaryCtaAction requires pageType or sourceType.');
  }

  if (resolvedSourceType === 'global') {
    return CTA_LABEL_MAP[system] ?? DEFAULT_CTA_LABEL;
  }

  if (!pageType) {
    throw new Error('resolvePrimaryCtaAction requires pageType for non-global CTA labels.');
  }

  return resolveCtaLabel({
    system,
    pageType,
    intent,
    tone,
  });
}

export function resolvePrimaryCtaAction(options: ResolvePrimaryCtaActionOptions): PrimaryCtaAction {
  const sourceType =
    options.sourceType ?? (options.pageType ? toContactSourceType(options.pageType) : undefined);

  if (!sourceType) {
    throw new Error('resolvePrimaryCtaAction requires pageType or sourceType.');
  }

  return {
    label: resolvePrimaryCtaLabel(options),
    href: buildContactHref({
      baseHref: options.baseHref,
      system: options.system,
      sourceType,
      slug: options.slug,
    }),
    sourceType,
  };
}

export function resolveGlobalPrimaryCtaAction(
  options: ResolveGlobalPrimaryCtaOptions = {}
): PrimaryCtaAction {
  return resolvePrimaryCtaAction({
    ...GLOBAL_PRIMARY_CTA_DEFAULTS,
    ...options,
  });
}

export function resolveGlobalPrimaryCtaLinks(options: ResolveGlobalPrimaryCtaOptions = {}) {
  const resolvedOptions = {
    ...GLOBAL_PRIMARY_CTA_DEFAULTS,
    ...options,
  };

  return {
    contactHref: buildContactHref(resolvedOptions),
    primaryAction: resolvePrimaryCtaAction(resolvedOptions),
  };
}
