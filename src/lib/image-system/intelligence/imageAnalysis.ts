// ─── Image Intelligence Layer ───────────────────────────────────────
// Analyzes downloaded images for quality, composition, and suitability

import sharp from 'sharp';

import { INTELLIGENCE_THRESHOLDS, OVERLAY_CONFIG } from '../config';
import type {
  BrightnessResult,
  ContrastResult,
  ImageIntelligenceResult,
  OrientationResult,
  SubjectPositionResult,
  TextDetectionResult,
} from '../types';

/** Detect image brightness using average pixel luminance */
export async function detectBrightness(imageBuffer: Buffer): Promise<BrightnessResult> {
  const { data, info } = await sharp(imageBuffer)
    .resize(100, 100, { fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  let totalLuma = 0;
  const pixelCount = info.width * info.height;
  const channels = info.channels;

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    totalLuma += 0.299 * r + 0.587 * g + 0.114 * b;
  }

  const average = totalLuma / pixelCount;

  return {
    average,
    isDark: average < OVERLAY_CONFIG.darkThreshold,
    isBright: average > OVERLAY_CONFIG.brightThreshold,
  };
}

/** Validate image contrast using standard deviation of luminance */
export async function validateContrast(imageBuffer: Buffer): Promise<ContrastResult> {
  const { data, info } = await sharp(imageBuffer)
    .resize(100, 100, { fit: 'cover' })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const channels = info.channels;
  const pixelCount = info.width * info.height;

  let totalLuma = 0;
  const lumaValues: number[] = [];

  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const luma = 0.299 * r + 0.587 * g + 0.114 * b;
    lumaValues.push(luma);
    totalLuma += luma;
  }

  const mean = totalLuma / pixelCount;
  let variance = 0;
  for (const luma of lumaValues) {
    variance += (luma - mean) ** 2;
  }
  const stdDev = Math.sqrt(variance / pixelCount);

  return {
    score: stdDev,
    isLowContrast: stdDev < INTELLIGENCE_THRESHOLDS.minContrast,
  };
}

/** Check image orientation */
export async function checkOrientation(imageBuffer: Buffer): Promise<OrientationResult> {
  const metadata = await sharp(imageBuffer).metadata();
  const width = metadata.width ?? 0;
  const height = metadata.height ?? 0;

  return {
    width,
    height,
    isLandscape: width > height,
    isPortrait: height > width,
    isSquare: width === height,
  };
}

/** Detect if main subject is centered (bad for title overlays) */
export async function detectSubjectPosition(imageBuffer: Buffer): Promise<SubjectPositionResult> {
  const size = 100;
  const { data, info } = await sharp(imageBuffer)
    .resize(size, size, { fit: 'cover' })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  // Use edge detection (Sobel-like) to find high-activity areas
  const thirdWidth = Math.floor(size / 3);
  let leftEnergy = 0;
  let centerEnergy = 0;
  let rightEnergy = 0;

  for (let y = 1; y < info.height - 1; y++) {
    for (let x = 1; x < info.width - 1; x++) {
      const idx = y * info.width + x;
      const gx = Math.abs(data[idx + 1] - data[idx - 1]);
      const gy = Math.abs(data[idx + info.width] - data[idx - info.width]);
      const energy = gx + gy;

      if (x < thirdWidth) leftEnergy += energy;
      else if (x < thirdWidth * 2) centerEnergy += energy;
      else rightEnergy += energy;
    }
  }

  const total = leftEnergy + centerEnergy + rightEnergy || 1;
  const centerRatio = centerEnergy / total;

  let region: 'left' | 'center' | 'right' = 'center';
  if (leftEnergy > centerEnergy && leftEnergy > rightEnergy) region = 'left';
  else if (rightEnergy > centerEnergy && rightEnergy > leftEnergy) region = 'right';

  return {
    isCentered: centerRatio > 0.5, // Only flag if center has dominant activity >50%
    region,
    edgeDensityCenter: centerRatio,
    edgeDensityLeft: leftEnergy / total,
    edgeDensityRight: rightEnergy / total,
  };
}

/** Basic text detection using high-frequency edge density analysis */
export async function detectText(imageBuffer: Buffer): Promise<TextDetectionResult> {
  const size = 200;
  const { data, info } = await sharp(imageBuffer)
    .resize(size, size, { fit: 'cover' })
    .greyscale()
    .raw()
    .toBuffer({ resolveWithObject: true });

  let highEdgeCount = 0;
  const totalPixels = (info.width - 2) * (info.height - 2);

  for (let y = 1; y < info.height - 1; y++) {
    for (let x = 1; x < info.width - 1; x++) {
      const idx = y * info.width + x;
      const gx = Math.abs(data[idx + 1] - data[idx - 1]);
      const gy = Math.abs(data[idx + info.width] - data[idx - info.width]);
      if (gx + gy > 80) highEdgeCount++;
    }
  }

  const edgeDensity = highEdgeCount / totalPixels;

  return {
    hasText: edgeDensity > INTELLIGENCE_THRESHOLDS.maxEdgeDensityForText,
    edgeDensity,
  };
}

/** Run full intelligence analysis on an image buffer */
export async function analyzeImage(imageBuffer: Buffer): Promise<ImageIntelligenceResult> {
  const [brightness, contrast, orientation, subjectPosition, textDetection] = await Promise.all([
    detectBrightness(imageBuffer),
    validateContrast(imageBuffer),
    checkOrientation(imageBuffer),
    detectSubjectPosition(imageBuffer),
    detectText(imageBuffer),
  ]);

  const rejectionReasons: string[] = [];

  if (contrast.isLowContrast) rejectionReasons.push('low contrast');
  if (textDetection.hasText) rejectionReasons.push('text detected');
  if (subjectPosition.isCentered) rejectionReasons.push('subject centered');
  if (!orientation.isLandscape) rejectionReasons.push('not landscape');

  return {
    brightness,
    contrast,
    orientation,
    subjectPosition,
    textDetection,
    passed: rejectionReasons.length === 0,
    rejectionReasons,
  };
}
