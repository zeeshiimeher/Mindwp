import type { Metadata } from 'next';

import { getMetadataBase, normalizePath, toAbsoluteUrl } from '@/lib/seo/config';

export type SEOInput = {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  includeBrand?: boolean;
  titleVariant?: 'default' | 'short' | 'long';
};

export const SEO_CONFIG = {
  siteName: 'MindWP',
  separator: ' | ',
  baseUrl: 'https://mindwp.com',
  tagline: 'Systems That Generate Revenue',
  templates: {
    default: '{title} | {site}',
    short: '{title}',
    long: '{title} — {tagline} | {site}',
  },
  defaultOG: '/og/default.png',
} as const;

function interpolateTemplate(
  template: string,
  values: { title: string; site: string; tagline: string }
): string {
  return template
    .replace('{title}', values.title)
    .replace('{site}', values.site)
    .replace('{tagline}', values.tagline);
}

function sanitizeTitle(title: string): string {
  return title
    .trim()
    .replace(/\s+\|\s+MindWP$/i, '')
    .replace(/^MindWP\s*[|:-]\s*/i, '')
    .trim();
}

function resolveTitle(input: SEOInput): string {
  const title = sanitizeTitle(input.title);

  if (input.includeBrand === false) {
    return title;
  }

  const variant = input.titleVariant ?? 'default';
  const template = SEO_CONFIG.templates[variant];
  return interpolateTemplate(template, {
    title,
    site: SEO_CONFIG.siteName,
    tagline: SEO_CONFIG.tagline,
  });
}

function resolveRobots(noIndex: boolean | undefined): Metadata['robots'] {
  if (noIndex) {
    return {
      index: false,
      follow: false,
    };
  }

  return {
    index: true,
    follow: true,
  };
}

export function buildSEO(input: SEOInput, routePath: string): Metadata {
  const canonicalPath = normalizePath(input.canonical ?? routePath);
  const title = resolveTitle(input);
  const description = input.description;
  const ogTitle = input.ogTitle ?? title;
  const ogDescription = input.ogDescription ?? description;
  const image = input.image ?? SEO_CONFIG.defaultOG;
  const robots = resolveRobots(input.noIndex);

  return {
    metadataBase: getMetadataBase(),
    title: canonicalPath === '/' ? { absolute: title } : title,
    description,
    alternates: {
      canonical: toAbsoluteUrl(canonicalPath),
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: toAbsoluteUrl(canonicalPath),
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [image],
    },
    robots,
  };
}