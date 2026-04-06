// ─── Image Deduplication System ─────────────────────────────────────
// Manages the image index to prevent duplicate usage across posts

import fs from 'fs';
import path from 'path';

import { DATA_FILES } from '../config';
import { isTooSimilar } from '../intelligence/similarity';
import type { ImageIndex, ImageIndexEntry, ImageType, ProviderName } from '../types';

/** Load image index from disk */
export function loadImageIndex(): ImageIndex {
  const filePath = path.resolve(DATA_FILES.imageIndex);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as ImageIndex;
  }
  return {};
}

/** Save image index to disk */
export function saveImageIndex(index: ImageIndex): void {
  const filePath = path.resolve(DATA_FILES.imageIndex);
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(index, null, 2));
}

/** Check if an image ID is already used */
export function isImageUsed(imageId: string, provider: ProviderName): boolean {
  const index = loadImageIndex();
  for (const entry of Object.values(index)) {
    for (const key of ['featured', 'featured-clean', 'featured-overlay', 'content'] as const) {
      const data = entry[key];
      if (data?.imageId === imageId && data?.provider === provider) return true;
    }
  }
  return false;
}

/** Check if an image hash is too similar to existing images */
export function isHashTooSimilar(hash: string): boolean {
  const index = loadImageIndex();
  const existingHashes: string[] = [];

  for (const entry of Object.values(index)) {
    for (const key of ['featured', 'featured-clean', 'featured-overlay', 'content'] as const) {
      if (entry[key]?.hash) existingHashes.push(entry[key]!.hash);
    }
  }

  return isTooSimilar(hash, existingHashes);
}

/** Register a new image in the index */
export function registerImage(
  slug: string,
  imageType: ImageType,
  data: {
    file: string;
    hash: string;
    provider: ProviderName;
    imageId: string;
  }
): void {
  const index = loadImageIndex();

  if (!index[slug]) {
    index[slug] = {};
  }

  index[slug][imageType] = {
    ...data,
    generatedAt: new Date().toISOString(),
  };

  saveImageIndex(index);
}

/** Check if a post already has a specific image type generated */
export function hasImage(slug: string, imageType: ImageType): boolean {
  const index = loadImageIndex();
  return !!index[slug]?.[imageType];
}

/** Get an existing image entry (before removing it) */
export function getImageEntry(
  slug: string,
  imageType: ImageType
): {
  file: string;
  hash: string;
  provider: ProviderName;
  imageId: string;
  generatedAt: string;
} | null {
  const index = loadImageIndex();
  return index[slug]?.[imageType] ?? null;
}

/** Remove an image entry from the index */
export function removeImage(slug: string, imageType: ImageType): void {
  const index = loadImageIndex();
  if (index[slug]?.[imageType]) {
    delete index[slug][imageType];
    if (Object.keys(index[slug]).length === 0) {
      delete index[slug];
    }
    saveImageIndex(index);
  }
}

/** Get all registered hashes for similarity checks */
export function getAllHashes(): string[] {
  const index = loadImageIndex();
  const hashes: string[] = [];

  for (const entry of Object.values(index)) {
    for (const key of ['featured', 'featured-clean', 'featured-overlay', 'content'] as const) {
      if (entry[key]?.hash) hashes.push(entry[key]!.hash);
    }
  }

  return hashes;
}
