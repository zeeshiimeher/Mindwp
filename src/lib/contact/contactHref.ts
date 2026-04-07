import { CANONICAL_SYSTEMS } from '@/lib/content-graph/canonical';

export const CONTACT_PATH = '/contact';
export const GLOBAL_CONTACT_SYSTEM = 'unknown';
export const GLOBAL_CONTACT_SOURCE = 'global/navigation';

const canonicalSystemSet = new Set<string>(CANONICAL_SYSTEMS);
const sourcePattern = /^[a-z-]+\/[a-z0-9-]+$/;

export type ContactContext = {
  system: string;
  source: string;
};

export function isGlobalNavigationContactContext(system: string, source: string) {
  return system === GLOBAL_CONTACT_SYSTEM && source === GLOBAL_CONTACT_SOURCE;
}

export function isValidContactContext(system: string, source: string) {
  if (!system || !source) {
    return false;
  }

  if (isGlobalNavigationContactContext(system, source)) {
    return true;
  }

  return canonicalSystemSet.has(system) && sourcePattern.test(source);
}

export function isCanonicalContactSystem(system: string) {
  return canonicalSystemSet.has(system);
}

export function isValidContactSource(source: string) {
  return sourcePattern.test(source);
}

export function buildContactHref(baseHref: string, context: ContactContext) {
  if (!baseHref.startsWith(CONTACT_PATH)) {
    return baseHref;
  }

  if (!isValidContactContext(context.system, context.source)) {
    throw new Error(
      `Invalid contact context: system="${context.system}" source="${context.source}"`
    );
  }

  const url = new URL(baseHref, 'https://mindwp.local');
  url.searchParams.set('system', context.system);
  url.searchParams.set('source', context.source);

  const search = url.searchParams.toString();
  return search ? `${url.pathname}?${search}` : url.pathname;
}

export function buildGlobalContactHref(baseHref = CONTACT_PATH) {
  return buildContactHref(baseHref, {
    system: GLOBAL_CONTACT_SYSTEM,
    source: GLOBAL_CONTACT_SOURCE,
  });
}