// ─── Image SEO Metadata Generator ──────────────────────────────────
// Generates alt text, title attributes, and EXIF metadata for images.

import type { ContentDomain } from '../types';

const BRAND_NAME = 'MindWP';

export interface ImageSeoMetadata {
  alt: string;
  title: string;
  description: string;
  keywords: string[];
}

/** Generate SEO-optimized alt, title, and description for a featured image */
export function generateImageSeo(
  postTitle: string,
  primaryKeyword: string,
  domain: ContentDomain
): ImageSeoMetadata {
  // Alt: {title} — {keyword} (with fallback when keyword is empty)
  const kw = primaryKeyword?.replace(/-/g, ' ').trim();
  const alt = kw ? `${postTitle} — ${kw}` : `${postTitle} illustration`;

  // Title: {title} | Brand
  const title = `${postTitle} | ${BRAND_NAME}`;

  // Description: short contextual sentence
  const description = `Featured image for ${postTitle} — a ${domain} article about ${primaryKeyword.replace(/-/g, ' ')}`;

  // Keywords: primary keyword + domain + extracted words
  const keywords = [
    primaryKeyword.replace(/-/g, ' '),
    domain,
    ...postTitle
      .toLowerCase()
      .split(/\s+/)
      .filter(w => w.length > 3)
      .slice(0, 5),
  ];

  return { alt, title, description, keywords: [...new Set(keywords)] };
}

/** Build EXIF-compatible metadata object for Sharp's withMetadata() */
export function buildExifMetadata(seo: ImageSeoMetadata): {
  exif: { IFD0: Record<string, string> };
} {
  return {
    exif: {
      IFD0: {
        ImageDescription: seo.alt,
        DocumentName: seo.title,
        Artist: 'MindWP',
        Copyright: `© ${new Date().getFullYear()} MindWP`,
      },
    },
  };
}
