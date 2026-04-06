// ─── Featured Image Generator ───────────────────────────────────────
// Creates featured images with smart overlay and title text

import sharp from 'sharp';

import { IMAGE_SIZES, OVERLAY_CONFIG, TITLE_LAYOUT } from '../config';
import type { BrightnessResult, FeaturedImageOptions, FeaturedImageResult, OverlayType } from '../types';

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

/** Escape text for safe SVG embedding */
function escapeSvg(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Derive a short uppercase label from a primary keyword */
function deriveLabel(keyword: string | undefined): string {
  if (!keyword) return '';
  // Take the first 3 meaningful words, uppercase
  const words = keyword
    .replace(/[-_]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1)
    .slice(0, 3);
  return words.join(' ').toUpperCase();
}

/** Generate SVG overlay with left-to-right gradient + left-aligned title */
function generateOverlaySvg(
  title: string,
  opacity: number,
  width: number,
  height: number,
  label?: string
): string {
  const layout = calculateTitleLayout(title, width);
  const textColor = '#ffffff';
  const leftPad = TITLE_LAYOUT.horizontalPaddingPx;
  const textX = leftPad;

  // Vertical centering for the entire text block (label + title)
  const labelFontSize = 14;
  const labelLineHeight = labelFontSize * 1.6;
  const labelGap = 12; // gap between label and title
  const resolvedLabel = deriveLabel(label);
  const hasLabel = resolvedLabel.length > 0;

  const totalBlockHeight =
    layout.totalHeight + (hasLabel ? labelLineHeight + labelGap : 0);
  const blockStartY = (height - totalBlockHeight) / 2;

  // Scale gradient opacity proportionally to the adaptive overlay opacity
  const strongOpacity = Math.min(opacity * 1.15, 0.85);
  const midOpacity = opacity * 0.65;
  const weakOpacity = opacity * 0.15;

  // Gradient stops: strong left → mid → transparent right
  const gradientId = 'overlayGrad';
  const defs = `<defs>
    <linearGradient id="${gradientId}" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="rgb(0,0,0)" stop-opacity="${strongOpacity.toFixed(2)}" />
      <stop offset="55%" stop-color="rgb(0,0,0)" stop-opacity="${midOpacity.toFixed(2)}" />
      <stop offset="100%" stop-color="rgb(0,0,0)" stop-opacity="${weakOpacity.toFixed(2)}" />
    </linearGradient>
  </defs>`;

  // Label element
  let labelSvg = '';
  let labelShadowSvg = '';
  let currentY = blockStartY;

  if (hasLabel) {
    const labelY = currentY + labelFontSize;
    labelShadowSvg = `<text x="${textX + 1}" y="${labelY + 1}" text-anchor="start" fill="rgba(0,0,0,0.4)" font-size="${labelFontSize}" font-weight="600" font-family="${TITLE_LAYOUT.fontFamily}" letter-spacing="2.5">${escapeSvg(resolvedLabel)}</text>`;
    labelSvg = `<text x="${textX}" y="${labelY}" text-anchor="start" fill="rgba(255,255,255,0.75)" font-size="${labelFontSize}" font-weight="600" font-family="${TITLE_LAYOUT.fontFamily}" letter-spacing="2.5">${escapeSvg(resolvedLabel)}</text>`;
    currentY += labelLineHeight + labelGap;
  }

  // Title lines — left-aligned, no textLength stretching
  const titleLines = layout.lines
    .map((line, i) => {
      const y = currentY + i * layout.lineHeight + layout.fontSize;
      return `<text x="${textX}" y="${y}" text-anchor="start" fill="${textColor}" font-size="${layout.fontSize}" font-weight="800" font-family="${TITLE_LAYOUT.fontFamily}" letter-spacing="-0.5">${escapeSvg(line)}</text>`;
    })
    .join('\n    ');

  // Drop shadow for title readability
  const shadowLines = layout.lines
    .map((line, i) => {
      const y = currentY + i * layout.lineHeight + layout.fontSize + 2;
      return `<text x="${textX + 1}" y="${y}" text-anchor="start" fill="rgba(0,0,0,0.4)" font-size="${layout.fontSize}" font-weight="800" font-family="${TITLE_LAYOUT.fontFamily}" letter-spacing="-0.5">${escapeSvg(line)}</text>`;
    })
    .join('\n    ');

  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${defs}
  <rect width="${width}" height="${height}" fill="url(#${gradientId})" />
  ${labelShadowSvg}
  ${labelSvg}
  ${shadowLines}
  ${titleLines}
</svg>`;
}

/** Generate both clean and overlay featured images from a single source */
export async function generateFeaturedImage(
  imageBuffer: Buffer,
  options: FeaturedImageOptions
): Promise<FeaturedImageResult> {
  const { title, brightness, outputWidth, outputHeight, label } = options;
  const opacity = calculateOverlayOpacity(brightness);

  console.log(
    `[overlay] Brightness: ${brightness.average.toFixed(1)}, Overlay opacity: ${(opacity * 100).toFixed(0)}%`
  );

  // Resize base image to target dimensions
  const resized = await sharp(imageBuffer)
    .resize(outputWidth, outputHeight, { fit: 'cover', position: 'centre' })
    .toBuffer();

  // Clean variant: resized image encoded as WebP (no text, no overlay)
  const clean = await sharp(resized).webp({ quality: 90 }).toBuffer();

  // Generate SVG overlay with title
  const overlaySvg = generateOverlaySvg(title, opacity, outputWidth, outputHeight, label);
  const overlayBuffer = Buffer.from(overlaySvg);

  // Overlay variant: composited with dark layer + title text
  const overlay = await sharp(resized)
    .composite([{ input: overlayBuffer, top: 0, left: 0 }])
    .webp({ quality: 90 })
    .toBuffer();

  return { clean, overlay };
}

/** Generate featured images at standard dimensions */
export async function generateStandardFeaturedImage(
  imageBuffer: Buffer,
  title: string,
  brightness: BrightnessResult,
  label?: string
): Promise<FeaturedImageResult> {
  return generateFeaturedImage(imageBuffer, {
    title,
    brightness,
    outputWidth: IMAGE_SIZES.featured.width,
    outputHeight: IMAGE_SIZES.featured.height,
    label,
  });
}
