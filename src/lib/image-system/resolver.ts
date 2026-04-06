import { existsSync } from 'node:fs';
import { join } from 'node:path';

type ImageType = 'featured-clean' | 'featured-overlay' | 'inline-1';

/**
 * Resolve an image path for a given content slug.
 * Returns the web-accessible path if the file exists on disk, or null.
 *
 * Image roles:
 *  - featured-clean   → hero background (no text overlay)
 *  - featured-overlay  → cards + OG sharing (with text overlay)
 *  - inline-1          → in-content image (blogs/resources only)
 */
export function getImage(slug: string, domain: string, type: ImageType): string | null {
  const webPath = `/images/${domain}/${slug}/${type}.webp`;
  const diskPath = join(process.cwd(), 'public', webPath);

  if (existsSync(diskPath)) {
    return webPath;
  }

  return null;
}
