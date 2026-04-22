// ─── Image Optimizer ────────────────────────────────────────────────
// Processes images with Sharp for web optimization

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

import { IMAGE_SIZES } from '../config';
import type { ImageType } from '../types';

function getSizeKey(imageType: ImageType): keyof typeof IMAGE_SIZES {
  return imageType === 'content' ? 'content' : 'featured';
}

/** Optimize an image buffer to WebP at the correct dimensions */
export async function optimizeImage(imageBuffer: Buffer, imageType: ImageType): Promise<Buffer> {
  const size = IMAGE_SIZES[getSizeKey(imageType)];

  return sharp(imageBuffer)
    .resize(size.width, size.height, {
      fit: 'cover',
      position: 'centre',
    })
    .webp({ quality: 85 })
    .toBuffer();
}

/** Save an optimized image to disk */
export async function saveImage(imageBuffer: Buffer, outputPath: string): Promise<void> {
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(outputPath, imageBuffer);
}

/** Resize image buffer to specific dimensions */
export async function resizeImage(
  imageBuffer: Buffer,
  width: number,
  height: number
): Promise<Buffer> {
  return sharp(imageBuffer).resize(width, height, { fit: 'cover', position: 'centre' }).toBuffer();
}
