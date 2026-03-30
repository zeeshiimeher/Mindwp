// ─── Safety & License Verification ──────────────────────────────────
// Validates images are safe to use and license-compliant

import type { ProviderImage, SafetyCheckResult } from '../types';

/** Run safety checks on a candidate image */
export function checkImageSafety(image: ProviderImage): SafetyCheckResult {
  const reasons: string[] = [];

  // License validation
  const licenseValid = !image.isEditorial && image.license !== 'editorial';
  if (!licenseValid) reasons.push('editorial use only');

  // Basic logo/brand detection via tags and description
  const noLogos = !containsBrandKeywords(image);
  if (!noLogos) reasons.push('potential brand/logo content');

  // Content safety via tags and description
  const contentSafe = !containsUnsafeContent(image);
  if (!contentSafe) reasons.push('potentially unsafe content');

  return {
    passed: reasons.length === 0,
    licenseValid,
    noLogos,
    contentSafe,
    reasons,
  };
}

const BRAND_KEYWORDS = [
  'logo',
  'brand',
  'trademark',
  'apple',
  'samsung',
  'google',
  'microsoft',
  'nike',
  'adidas',
  'coca-cola',
  'pepsi',
  'starbucks',
  'amazon',
  'branded',
  'signage',
  'advertisement',
  'commercial',
];

const UNSAFE_KEYWORDS = [
  'political',
  'politician',
  'election',
  'protest',
  'violence',
  'violent',
  'weapon',
  'gun',
  'medical',
  'surgery',
  'blood',
  'injury',
  'nude',
  'explicit',
  'adult',
];

function containsBrandKeywords(image: ProviderImage): boolean {
  const text = [image.description, ...image.tags].join(' ').toLowerCase();
  return BRAND_KEYWORDS.some(kw => text.includes(kw));
}

function containsUnsafeContent(image: ProviderImage): boolean {
  const text = [image.description, ...image.tags].join(' ').toLowerCase();
  return UNSAFE_KEYWORDS.some(kw => text.includes(kw));
}
