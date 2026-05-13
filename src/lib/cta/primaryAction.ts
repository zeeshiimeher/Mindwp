import { buildContactHref, type ContactSourceType } from '../contact/contactHref.ts';

export const PRIMARY_CTA_LABEL = 'Start a Conversation';
export const SECONDARY_CTA_LABEL = 'Discuss Your Project';
export const APPROVED_CTA_LABELS = [PRIMARY_CTA_LABEL, SECONDARY_CTA_LABEL] as const;

type PrimaryCtaActionOptions = {
  system: string;
  slug: string;
  sourceType: ContactSourceType;
  baseHref?: string;
};

export type PrimaryCtaAction = {
  label: string;
  href: string;
  sourceType: ContactSourceType;
};

type GlobalPrimaryCtaOptions = {
  baseHref?: string;
};

const GLOBAL_PRIMARY_CTA_DEFAULTS: Required<
  Pick<PrimaryCtaActionOptions, 'system' | 'sourceType' | 'slug'>
> = {
  system: 'smart-website-systems',
  sourceType: 'global',
  slug: 'navigation',
};

export function getPrimaryCTA() {
  return PRIMARY_CTA_LABEL;
}

export function getSecondaryCTA(allow?: boolean) {
  if (!allow) {
    return undefined;
  }

  return SECONDARY_CTA_LABEL;
}

export function isApprovedCtaLabel(label: string): boolean {
  return label.trim().length > 0;
}

export function buildPrimaryCtaAction(options: PrimaryCtaActionOptions): PrimaryCtaAction {
  return {
    label: getPrimaryCTA(),
    href: buildContactHref({
      system: options.system.trim() || GLOBAL_PRIMARY_CTA_DEFAULTS.system,
      sourceType: options.sourceType,
      slug: options.slug.trim() || GLOBAL_PRIMARY_CTA_DEFAULTS.slug,
      baseHref: options.baseHref,
    }),
    sourceType: options.sourceType,
  };
}

export function buildGlobalPrimaryCtaAction(
  options: GlobalPrimaryCtaOptions = {}
): PrimaryCtaAction {
  return buildPrimaryCtaAction({
    ...GLOBAL_PRIMARY_CTA_DEFAULTS,
    ...options,
  });
}

export function buildGlobalPrimaryCtaLinks(options: GlobalPrimaryCtaOptions = {}) {
  const resolvedOptions = {
    ...GLOBAL_PRIMARY_CTA_DEFAULTS,
    ...options,
  };

  return {
    contactHref: buildContactHref(resolvedOptions),
    primaryAction: buildPrimaryCtaAction(resolvedOptions),
  };
}
