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
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_ORIGIN ??
    process.env.NEXT_PUBLIC_APP_URL ??
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

export const toAbsoluteUrl = (path: string): string => {
  const normalizedPath = normalizePath(path);
  return new URL(normalizedPath, SITE_ORIGIN).toString();
};
