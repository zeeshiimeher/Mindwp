import { existsSync } from 'node:fs';
import { join } from 'node:path';

import imageIndex from '@/lib/image-system/data/imageIndex.json';
import { DEFAULT_OG_IMAGE_PATH } from '@/lib/seo/metadata';

type ImageType = 'featured-clean' | 'featured-overlay' | 'inline-1';

type ImageIndexEntry = {
  file?: string;
};

type ImageIndexRecord = Record<
  string,
  Partial<Record<'featured-clean' | 'featured-overlay' | 'content', ImageIndexEntry>>
>;

const runtimeImageIndex = imageIndex as ImageIndexRecord;
const isDevelopmentRuntime =
  process.env.NODE_ENV === 'development' && process.env.VITEST !== 'true';

function toWebPath(filePath: string) {
  const normalized = filePath.replace(/^public\//, '');
  return normalized.startsWith('/') ? normalized : `/${normalized}`;
}

function resolveIndexedImage(slug: string, type: ImageType) {
  const imageType = type === 'inline-1' ? 'content' : type;
  const entry = runtimeImageIndex[slug]?.[imageType];
  return entry?.file ? toWebPath(entry.file) : null;
}

function resolveFileBackedImage(webPath: string) {
  const diskPath = join(process.cwd(), 'public', webPath.replace(/^\//, ''));
  return existsSync(diskPath) ? webPath : null;
}

function handleMissingImage(slug: string, domain: string, type: ImageType) {
  const message = `[image-system] Missing ${type} image for ${domain}/${slug}.`;

  if (isDevelopmentRuntime && domain === 'case-studies') {
    throw new Error(message);
  }

  // eslint-disable-next-line no-console
  console.warn(`${message} Falling back to ${DEFAULT_OG_IMAGE_PATH}.`);

  return DEFAULT_OG_IMAGE_PATH;
}

/**
 * Resolve an image path for a given content slug.
 * Returns the web-accessible path if the file exists on disk, or the default image.
 *
 * Image roles:
 *  - featured-clean   → hero background (no text overlay)
 *  - featured-overlay  → cards + OG sharing (with text overlay)
 *  - inline-1          → in-content image (blogs/resources only)
 */
export function getImage(slug: string, domain: string, type: ImageType): string | null {
  const indexedPath = resolveIndexedImage(slug, type);
  if (indexedPath) {
    const indexedFile = resolveFileBackedImage(indexedPath);
    if (indexedFile) {
      return indexedFile;
    }
  }

  // Flat domain folder: {slug}.webp (overlay), {slug}-raw.webp (clean)
  const fileName =
    type === 'featured-overlay'
      ? `${slug}.webp`
      : type === 'featured-clean'
        ? `${slug}-raw.webp`
        : `${slug}-content.webp`;
  const webPath = `/images/${domain}/${fileName}`;
  if (resolveFileBackedImage(webPath)) {
    return webPath;
  }

  return handleMissingImage(slug, domain, type);
}
