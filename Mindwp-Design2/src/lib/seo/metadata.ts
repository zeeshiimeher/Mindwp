import type { Metadata } from 'next';

import { SITE } from '@/config/site';

/** Per-page SEO input. Keep small — title + description + route path. */
export type SEOInput = {
  title: string;
  description: string;
  /** Path beginning with '/'. Used for canonical + OpenGraph url. */
  path: string;
  /** Optional override for the OG/social image (absolute or root-relative). */
  image?: string;
  /** Set true to keep a page out of search indexes. */
  noindex?: boolean;
};

/** Normalize a path to a leading-slash, no-trailing-slash form. */
function normalizePath(path: string): string {
  if (!path || path === '/') return '/';
  const withLeading = path.startsWith('/') ? path : `/${path}`;
  return withLeading.replace(/\/+$/, '');
}

/** Build an absolute URL from a route path. */
export function toAbsoluteUrl(path: string): string {
  const normalized = normalizePath(path);
  return normalized === '/' ? `${SITE.origin}/` : `${SITE.origin}${normalized}`;
}

/** The metadataBase used by the root layout. */
export function getMetadataBase(): URL {
  return new URL(SITE.origin);
}

const DEFAULT_OG_IMAGE = '/og-default.png';

/**
 * Build a Next.js Metadata object from a light SEOInput.
 * Sets title template, description, canonical, OpenGraph, Twitter, robots.
 */
export function buildMetadata(input: SEOInput): Metadata {
  const canonical = toAbsoluteUrl(input.path);
  const image = input.image ?? DEFAULT_OG_IMAGE;

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical,
    },
    robots: input.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: input.title,
      description: input.description,
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
