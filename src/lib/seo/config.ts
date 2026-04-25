import { env } from '@/env';

const DEFAULT_SITE_ORIGIN = 'https://mindwp.com';

const normalizeOrigin = (value: string): string => {
  const trimmed = value.trim();
  if (!trimmed) return DEFAULT_SITE_ORIGIN;

  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;

  try {
    const url = new URL(withProtocol);
    const normalizedPath = url.pathname.replace(/\/+$/, '');
    return `${url.protocol}//${url.host}${normalizedPath}`;
  } catch {
    return DEFAULT_SITE_ORIGIN;
  }
};

export const SITE_NAME = 'MindWP';
export const TITLE_TEMPLATE = `%s | ${SITE_NAME}`;
export const SITE_ORIGIN = normalizeOrigin(
  env.NEXT_PUBLIC_SITE_URL ??
    env.NEXT_PUBLIC_SITE_ORIGIN ??
    env.NEXT_PUBLIC_APP_URL ??
    DEFAULT_SITE_ORIGIN
);

export const getMetadataBase = () => new URL(SITE_ORIGIN);

export const normalizePath = (path: string): string => {
  const trimmed = path.trim();
  if (!trimmed || trimmed === '/') return '/';

  const pathOnly = (() => {
    if (/^https?:\/\//i.test(trimmed)) {
      try {
        const url = new URL(trimmed);
        return url.pathname || '/';
      } catch {
        return trimmed;
      }
    }
    return trimmed;
  })();

  const withLeadingSlash = pathOnly.startsWith('/') ? pathOnly : `/${pathOnly}`;
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, '');

  return withoutTrailingSlash || '/';
};

export const buildRoutePathFromSegments = (segments: string[]): string => {
  if (segments.length === 0) {
    return '/';
  }

  return normalizePath(`/${segments.join('/')}`);
};

type NormalizeInternalTargetOptions = {
  baseOrigin: string;
  currentPath?: string;
  includeSearch?: boolean;
};

export const normalizeInternalTarget = (
  href: string,
  { baseOrigin, currentPath = '/', includeSearch = false }: NormalizeInternalTargetOptions
): string | null => {
  const trimmed = href.trim();

  if (!trimmed || /^(mailto:|tel:|javascript:|#)/i.test(trimmed)) {
    throw new Error('Invalid internal URL');
  }

  let url: URL;

  try {
    url = new URL(trimmed, new URL(currentPath, baseOrigin));
  } catch {
    throw new Error('Invalid internal URL');
  }

  if (url.origin !== new URL(baseOrigin).origin) {
    throw new Error('Invalid internal URL');
  }

  const normalizedPath = normalizePath(url.pathname);
  const normalizedSearch = includeSearch ? url.search : '';

  return `${normalizedPath}${normalizedSearch}`;
};

export const toAbsoluteUrl = (path: string): string => {
  const normalizedPath = normalizePath(path);
  return new URL(normalizedPath, SITE_ORIGIN).toString();
};
