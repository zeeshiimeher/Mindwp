// ─── Visual Similarity Detection ────────────────────────────────────
// Perceptual hashing to detect visually similar images across posts

import sharp from 'sharp';

import { INTELLIGENCE_THRESHOLDS } from '../config';
import type { ImageHash } from '../types';

/** Generate a perceptual hash (dHash) from an image buffer */
export async function generatePerceptualHash(imageBuffer: Buffer): Promise<ImageHash> {
  const hashSize = 8;
  const { data, info } = await sharp(imageBuffer)
    .resize(hashSize + 1, hashSize, { fit: 'fill' })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let hash = '';
  for (let y = 0; y < hashSize; y++) {
    for (let x = 0; x < hashSize; x++) {
      const idx = y * info.width + x;
      hash += data[idx] < data[idx + 1] ? '1' : '0';
    }
  }

  // Convert binary string to hex
  const hexHash = parseInt(hash, 2).toString(16).padStart(16, '0');

  const metadata = await sharp(imageBuffer).metadata();

  return {
    hash: hexHash,
    width: metadata.width ?? 0,
    height: metadata.height ?? 0,
  };
}

/** Calculate Hamming distance between two hashes */
export function hammingDistance(hash1: string, hash2: string): number {
  const bin1 = BigInt('0x' + hash1);
  const bin2 = BigInt('0x' + hash2);
  let xor = bin1 ^ bin2;
  let distance = 0;

  while (xor > BigInt(0)) {
    distance += Number(xor & BigInt(1));
    xor >>= BigInt(1);
  }

  return distance;
}

/** Check if an image hash is too similar to any existing hash */
export function isTooSimilar(
  newHash: string,
  existingHashes: string[],
  maxDistance = INTELLIGENCE_THRESHOLDS.maxSimilarityDistance
): boolean {
  for (const existing of existingHashes) {
    if (hammingDistance(newHash, existing) <= maxDistance) {
      return true;
    }
  }
  return false;
}
