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
  // Flat domain folder: {slug}.webp (overlay), {slug}-raw.webp (clean)
  const fileName =
    type === 'featured-overlay'
      ? `${slug}.webp`
      : type === 'featured-clean'
        ? `${slug}-raw.webp`
        : `${slug}-content.webp`;
  const webPath = `/images/${domain}/${fileName}`;
  const diskPath = join(process.cwd(), 'public', webPath);

  if (existsSync(diskPath)) {
    return webPath;
  }

  return null;
}
