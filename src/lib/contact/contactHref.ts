import { CANONICAL_SYSTEMS } from '@/lib/content-graph/canonical';

export const CONTACT_PATH = '/contact';

const canonicalSystemSet = new Set<string>(CANONICAL_SYSTEMS);
const CONTACT_SOURCE_TYPES = [
  'blog',
  'case-study',
  'feature',
  'global',
  'industry',
  'page',
  'resource',
  'service',
] as const;
const sourcePattern = /^[a-z-]+\/[a-z0-9-]+$/;

const contactSourceTypeSet = new Set<string>(CONTACT_SOURCE_TYPES);

export type ContactSourceType = (typeof CONTACT_SOURCE_TYPES)[number];

export type ContactContext = {
  system: string;
  source: string;
};

export type BuildContactHrefOptions = {
  baseHref?: string;
  system: string;
  source?: string;
  sourceType?: ContactSourceType;
  slug?: string;
};

type BuildScopedContactHrefOptions = {
  baseHref?: string;
  system: string;
  slug: string;
};

type NormalizedContactOptions = {
  baseHref: string;
  system: string;
  source: string;
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

export function parseContactSource(
  source: string
): { sourceType: ContactSourceType; slug: string } | null {
  if (!isValidContactSource(source)) {
    return null;
  }

  const [sourceType, slug] = source.split('/');

  if (!sourceType || !slug || !contactSourceTypeSet.has(sourceType)) {
    return null;
  }

  return {
    sourceType: sourceType as ContactSourceType,
    slug,
  };
}

function normalizeOptions(
  baseHrefOrOptions: string | BuildContactHrefOptions,
  maybeOptions?: BuildContactHrefOptions
): NormalizedContactOptions {
  if (typeof baseHrefOrOptions === 'string') {
    if (!maybeOptions) {
      throw new Error('buildContactHref requires contact options when a baseHref is provided.');
    }
    if (!maybeOptions.source && (!maybeOptions.sourceType || !maybeOptions.slug)) {
      throw new Error('buildContactHref requires either source or sourceType plus slug.');
    }

    const source = maybeOptions.source ?? `${maybeOptions.sourceType}/${maybeOptions.slug}`;

    return {
      baseHref: baseHrefOrOptions,
      system: maybeOptions.system,
      source,
    };
  }

  if (!baseHrefOrOptions.source && (!baseHrefOrOptions.sourceType || !baseHrefOrOptions.slug)) {
    throw new Error('buildContactHref requires either source or sourceType plus slug.');
  }

  const source =
    baseHrefOrOptions.source ?? `${baseHrefOrOptions.sourceType}/${baseHrefOrOptions.slug}`;

  return {
    baseHref: baseHrefOrOptions.baseHref ?? CONTACT_PATH,
    system: baseHrefOrOptions.system,
    source,
  };
}

export function buildContactHref(
  baseHrefOrOptions: string | BuildContactHrefOptions,
  maybeOptions?: BuildContactHrefOptions
) {
  const { baseHref, system, source } = normalizeOptions(baseHrefOrOptions, maybeOptions);

  if (!baseHref.startsWith(CONTACT_PATH)) {
    return baseHref;
  }

  if (!isValidContactContext(system, source)) {
    throw new Error(`Invalid contact context: system="${system}" source="${source}"`);
  }

  const url = new URL(baseHref, 'https://mindwp.local');
  url.searchParams.set('system', system);
  url.searchParams.set('source', source);

  const search = url.searchParams.toString();
  return search ? `${url.pathname}?${search}` : url.pathname;
}

function buildScopedContactHref(
  sourceType: ContactSourceType,
  { baseHref, system, slug }: BuildScopedContactHrefOptions
) {
  return buildContactHref({
    baseHref,
    system,
    sourceType,
    slug,
  });
}

export function buildServiceContactHref(options: BuildScopedContactHrefOptions) {
  return buildScopedContactHref('service', options);
}

export function buildFeatureContactHref(options: BuildScopedContactHrefOptions) {
  return buildScopedContactHref('feature', options);
}

export function buildIndustryContactHref(options: BuildScopedContactHrefOptions) {
  return buildScopedContactHref('industry', options);
}

export function buildBlogContactHref(options: BuildScopedContactHrefOptions) {
  return buildScopedContactHref('blog', options);
}

export function buildResourceContactHref(options: BuildScopedContactHrefOptions) {
  return buildScopedContactHref('resource', options);
}

export function buildCaseStudyContactHref(options: BuildScopedContactHrefOptions) {
  return buildScopedContactHref('case-study', options);
}

export function buildGlobalContactHref(baseHref = CONTACT_PATH) {
  return buildContactHref(baseHref, {
    system: 'smart-website-systems',
    sourceType: 'global',
    slug: 'navigation',
  });
}
