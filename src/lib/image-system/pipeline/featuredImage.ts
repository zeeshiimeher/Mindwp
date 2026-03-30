// ─── Featured Image Generator ───────────────────────────────────────
// Creates featured images with smart overlay and title text

import sharp from 'sharp';

import { IMAGE_SIZES, OVERLAY_CONFIG, TITLE_LAYOUT } from '../config';
import type { BrightnessResult, FeaturedImageOptions, OverlayType } from '../types';

import { calculateTitleLayout } from './titleLayout';

/** Calculate adaptive overlay opacity based on image brightness */
export function calculateOverlayOpacity(brightness: BrightnessResult): number {
  const avg = brightness.average;

  if (avg >= OVERLAY_CONFIG.brightThreshold) {
    // Bright image: needs heavy overlay
    return OVERLAY_CONFIG.maxOverlayOpacity;
  }

  if (avg <= OVERLAY_CONFIG.darkThreshold) {
    // Dark image: needs light overlay (image already provides contrast)
    return OVERLAY_CONFIG.minOverlayOpacity;
  }

  // Mid-range: scale linearly between min and max
  const range = OVERLAY_CONFIG.brightThreshold - OVERLAY_CONFIG.darkThreshold;
  const t = (avg - OVERLAY_CONFIG.darkThreshold) / range;
  return (
    OVERLAY_CONFIG.minOverlayOpacity +
    t * (OVERLAY_CONFIG.maxOverlayOpacity - OVERLAY_CONFIG.minOverlayOpacity)
  );
}

/** Generate SVG overlay with uniform dark layer + centered title */
function generateOverlaySvg(title: string, opacity: number, width: number, height: number): string {
  const layout = calculateTitleLayout(title, width);
  const textColor = '#ffffff';

  const centerY = height / 2;
  const textStartY = centerY - layout.totalHeight / 2;

  // Enforce horizontal padding: text must not go beyond padding area
  const maxTextX = width - TITLE_LAYOUT.horizontalPaddingPx;
  const minTextX = TITLE_LAYOUT.horizontalPaddingPx;
  const textCenterX = width / 2;

  const textLines = layout.lines
    .map((line, i) => {
      const y = textStartY + i * layout.lineHeight + layout.fontSize;
      const safeLine = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
      return `<text x="${textCenterX}" y="${y}" text-anchor="middle" fill="${textColor}" font-size="${layout.fontSize}" font-weight="700" font-family="${TITLE_LAYOUT.fontFamily}" textLength="${Math.min(layout.lineWidths[i], width - TITLE_LAYOUT.horizontalPaddingPx * 2)}" lengthAdjust="spacingAndGlyphs">${safeLine}</text>`;
    })
    .join('\n    ');

  // Drop shadow for extra readability on all backgrounds
  const shadowLines = layout.lines
    .map((line, i) => {
      const y = textStartY + i * layout.lineHeight + layout.fontSize + 2;
      const safeLine = line
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
      return `<text x="${textCenterX + 1}" y="${y}" text-anchor="middle" fill="rgba(0,0,0,0.5)" font-size="${layout.fontSize}" font-weight="700" font-family="${TITLE_LAYOUT.fontFamily}" textLength="${Math.min(layout.lineWidths[i], width - TITLE_LAYOUT.horizontalPaddingPx * 2)}" lengthAdjust="spacingAndGlyphs">${safeLine}</text>`;
    })
    .join('\n    ');

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="rgba(0,0,0,${opacity.toFixed(2)})" />
  ${shadowLines}
  ${textLines}
</svg>`;
}

/** Generate a complete featured image with overlay and title */
export async function generateFeaturedImage(
  imageBuffer: Buffer,
  options: FeaturedImageOptions
): Promise<Buffer> {
  const { title, brightness, outputWidth, outputHeight } = options;
  const opacity = calculateOverlayOpacity(brightness);

  console.log(
    `[overlay] Brightness: ${brightness.average.toFixed(1)}, Overlay opacity: ${(opacity * 100).toFixed(0)}%`
  );

  // Resize base image to target dimensions
  const resized = await sharp(imageBuffer)
    .resize(outputWidth, outputHeight, { fit: 'cover', position: 'centre' })
    .toBuffer();

  // Generate SVG overlay with title
  const overlaySvg = generateOverlaySvg(title, opacity, outputWidth, outputHeight);
  const overlayBuffer = Buffer.from(overlaySvg);

  // Composite overlay onto base image
  const result = await sharp(resized)
    .composite([{ input: overlayBuffer, top: 0, left: 0 }])
    .webp({ quality: 90 })
    .toBuffer();

  return result;
}

/** Generate featured image at standard dimensions */
export async function generateStandardFeaturedImage(
  imageBuffer: Buffer,
  title: string,
  brightness: BrightnessResult
): Promise<Buffer> {
  return generateFeaturedImage(imageBuffer, {
    title,
    brightness,
    outputWidth: IMAGE_SIZES.featured.width,
    outputHeight: IMAGE_SIZES.featured.height,
  });
}
