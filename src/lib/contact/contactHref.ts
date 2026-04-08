import { CANONICAL_SYSTEMS } from '@/lib/content-graph/canonical';

export const CONTACT_PATH = '/contact';

const canonicalSystemSet = new Set<string>(CANONICAL_SYSTEMS);
const sourcePattern = /^[a-z-]+\/[a-z0-9-]+$/;

export type ContactSourceType =
  | 'blog'
  | 'case-study'
  | 'feature'
  | 'global'
  | 'industry'
  | 'page'
  | 'resource'
  | 'service';

export type ContactContext = {
  system: string;
  source: string;
};

export type BuildContactHrefOptions = {
  baseHref?: string;
  system: string;
  sourceType: ContactSourceType;
  slug: string;
};

export function isGlobalNavigationContactContext(system: string, source: string) {
  return system === 'smart-website-systems' && source === 'global/navigation';
}

export function isValidContactContext(system: string, source: string) {
  if (!system || !source) {
    return false;
  }

  return canonicalSystemSet.has(system) && sourcePattern.test(source);
}

export function isCanonicalContactSystem(system: string) {
  return canonicalSystemSet.has(system);
}

export function isValidContactSource(source: string) {
  return sourcePattern.test(source);
}

function normalizeOptions(
  baseHrefOrOptions: string | BuildContactHrefOptions,
  maybeOptions?: BuildContactHrefOptions
) {
  if (typeof baseHrefOrOptions === 'string') {
    if (!maybeOptions) {
      throw new Error('buildContactHref requires contact options when a baseHref is provided.');
    }

    return {
      baseHref: baseHrefOrOptions,
      system: maybeOptions.system,
      sourceType: maybeOptions.sourceType,
      slug: maybeOptions.slug,
    };
  }

  return {
    baseHref: baseHrefOrOptions.baseHref ?? CONTACT_PATH,
    system: baseHrefOrOptions.system,
    sourceType: baseHrefOrOptions.sourceType,
    slug: baseHrefOrOptions.slug,
  };
}

export function buildContactHref(
  baseHrefOrOptions: string | BuildContactHrefOptions,
  maybeOptions?: BuildContactHrefOptions
) {
  const { baseHref, system, sourceType, slug } = normalizeOptions(baseHrefOrOptions, maybeOptions);

  if (!baseHref.startsWith(CONTACT_PATH)) {
    return baseHref;
  }

  const source = `${sourceType}/${slug}`;

  if (!isValidContactContext(system, source)) {
    throw new Error(`Invalid contact context: system="${system}" source="${source}"`);
  }

  const url = new URL(baseHref, 'https://mindwp.local');
  url.searchParams.set('system', system);
  url.searchParams.set('source', source);

  const search = url.searchParams.toString();
  return search ? `${url.pathname}?${search}` : url.pathname;
}

export function buildGlobalContactHref(baseHref = CONTACT_PATH) {
  return buildContactHref(baseHref, {
    system: 'smart-website-systems',
    sourceType: 'global',
    slug: 'navigation',
  });
}
