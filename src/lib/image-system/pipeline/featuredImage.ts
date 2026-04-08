// ─── Featured Image Generator ───────────────────────────────────────
// Cinematic featured image system — depth, composition, contrast, variation

/* eslint-disable no-console */

import sharp from 'sharp';

import { IMAGE_SIZES, OVERLAY_CONFIG, TITLE_LAYOUT } from '../config';
import { resolveRenderCopy } from '../render/renderCopy';
import { renderImage } from '../render/renderer';
import type {
  BrightnessResult,
  DebugInput,
  FeaturedImageOptions,
  FeaturedImageResult,
  LayoutVariant,
  OverlayDesignContext,
  OverlayVariant,
  TuneOverrides,
} from '../types';

import { calculateTitleLayout } from './titleLayout';

/** Calculate adaptive overlay opacity based on image brightness (legacy helper) */
export function calculateOverlayOpacity(brightness: BrightnessResult): number {
  const avg = brightness.average;

  if (avg >= OVERLAY_CONFIG.brightThreshold) {
    return OVERLAY_CONFIG.maxOverlayOpacity;
  }

  if (avg <= OVERLAY_CONFIG.darkThreshold) {
    return OVERLAY_CONFIG.minOverlayOpacity;
  }

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
  const words = keyword
    .replace(/[-_]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1)
    .slice(0, 3);
  return words.join(' ').toUpperCase();
}

/** Determine badge text color based on accent luminance */
function getBadgeTextColor(accent: string): string {
  const r = parseInt(accent.slice(1, 3), 16);
  const g = parseInt(accent.slice(3, 5), 16);
  const b = parseInt(accent.slice(5, 7), 16);
  const luma = 0.299 * r + 0.587 * g + 0.114 * b;
  return luma > 160 ? '#1a1a2e' : '#ffffff';
}

// ─── Layout Variant Parameters ──────────────────────────────────────

/** Mutable layout params — overrides may modify values */
interface LayoutParams {
  /** Text block X as fraction of width (center-left composition) */
  textBlockXPercent: number;
  /** Text block Y as fraction of height (lower-third = higher value) */
  textBlockYPercent: number;
  /** Max text width in px */
  maxTextWidth: number;
  /** Font size multiplier relative to layout engine output */
  fontScale: number;
  /** Title line-height multiplier */
  lineHeight: number;
  /** Title letter-spacing */
  letterSpacing: string;
  /** Label font size */
  labelFontSize: number;
  /** Label opacity */
  labelOpacity: number;
  /** Accent bar width px */
  accentBarWidth: number;
  /** Hard gradient strength multiplier */
  gradientStrength: number;
  /** Title font weight */
  titleWeight: string;
  /** Light beam opacity */
  beamOpacity: number;
  /** Vignette strength multiplier */
  vignetteStrength: number;
  /** Accent bar glow stdDeviation */
  glowRadius: number;
}

function getLayoutParams(layout: LayoutVariant): LayoutParams {
  switch (layout) {
    case 2: // Focused — primary CTR layout (blog, most content)
      return {
        textBlockXPercent: 0.42,
        textBlockYPercent: 0.55,
        maxTextWidth: 820,
        fontScale: 1.56,
        lineHeight: 1.02,
        letterSpacing: '-0.7',
        labelFontSize: 13,
        labelOpacity: 0.55,
        accentBarWidth: 5,
        gradientStrength: 1.15,
        titleWeight: '900',
        beamOpacity: 0.04,
        vignetteStrength: 1.4,
        glowRadius: 10,
      };
    case 3: // Impact — bold, aggressive (case studies, results)
      return {
        textBlockXPercent: 0.35,
        textBlockYPercent: 0.58,
        maxTextWidth: 860,
        fontScale: 1.68,
        lineHeight: 1.0,
        letterSpacing: '-0.8',
        labelFontSize: 14,
        labelOpacity: 0.65,
        accentBarWidth: 7,
        gradientStrength: 1.25,
        titleWeight: '900',
        beamOpacity: 0.06,
        vignetteStrength: 1.55,
        glowRadius: 14,
      };
    case 1: // Editorial — clean, balanced (resources, informational)
    default:
      return {
        textBlockXPercent: 0.38,
        textBlockYPercent: 0.52,
        maxTextWidth: 720,
        fontScale: 1.38,
        lineHeight: 1.05,
        letterSpacing: '-0.6',
        labelFontSize: 13,
        labelOpacity: 0.5,
        accentBarWidth: 5,
        gradientStrength: 1.08,
        titleWeight: '900',
        beamOpacity: 0.03,
        vignetteStrength: 1.25,
        glowRadius: 10,
      };
  }
}

// ─── Variant Shape Layer ────────────────────────────────────────────

function renderVariantShape(variant: OverlayVariant, width: number, height: number): string {
  switch (variant) {
    case 'system':
      return `<g opacity="0.05" stroke="white" stroke-width="0.5" fill="none">
        <line x1="${(width * 0.65).toFixed(0)}" y1="${(height * 0.1).toFixed(0)}" x2="${(width * 0.65).toFixed(0)}" y2="${(height * 0.9).toFixed(0)}" />
        <line x1="${(width * 0.75).toFixed(0)}" y1="${(height * 0.1).toFixed(0)}" x2="${(width * 0.75).toFixed(0)}" y2="${(height * 0.9).toFixed(0)}" />
        <line x1="${(width * 0.85).toFixed(0)}" y1="${(height * 0.1).toFixed(0)}" x2="${(width * 0.85).toFixed(0)}" y2="${(height * 0.9).toFixed(0)}" />
        <line x1="${(width * 0.6).toFixed(0)}" y1="${(height * 0.3).toFixed(0)}" x2="${(width * 0.95).toFixed(0)}" y2="${(height * 0.3).toFixed(0)}" />
        <line x1="${(width * 0.6).toFixed(0)}" y1="${(height * 0.5).toFixed(0)}" x2="${(width * 0.95).toFixed(0)}" y2="${(height * 0.5).toFixed(0)}" />
        <line x1="${(width * 0.6).toFixed(0)}" y1="${(height * 0.7).toFixed(0)}" x2="${(width * 0.95).toFixed(0)}" y2="${(height * 0.7).toFixed(0)}" />
      </g>`;
    case 'analytical':
      return `<g opacity="0.06" fill="white">
        <rect x="${(width * 0.68).toFixed(0)}" y="${(height * 0.55).toFixed(0)}" width="${(width * 0.04).toFixed(0)}" height="${(height * 0.25).toFixed(0)}" rx="2" />
        <rect x="${(width * 0.74).toFixed(0)}" y="${(height * 0.42).toFixed(0)}" width="${(width * 0.04).toFixed(0)}" height="${(height * 0.38).toFixed(0)}" rx="2" />
        <rect x="${(width * 0.8).toFixed(0)}" y="${(height * 0.35).toFixed(0)}" width="${(width * 0.04).toFixed(0)}" height="${(height * 0.45).toFixed(0)}" rx="2" />
        <rect x="${(width * 0.86).toFixed(0)}" y="${(height * 0.48).toFixed(0)}" width="${(width * 0.04).toFixed(0)}" height="${(height * 0.32).toFixed(0)}" rx="2" />
      </g>`;
    case 'results':
      return '';
    case 'local':
      return `<circle cx="${(width * 0.78).toFixed(0)}" cy="${(height * 0.45).toFixed(0)}" r="${(height * 0.32).toFixed(0)}" fill="white" opacity="0.04" />`;
    case 'editorial':
    default:
      return `<circle cx="${(width * 0.82).toFixed(0)}" cy="${(height * 0.4).toFixed(0)}" r="${(height * 0.22).toFixed(0)}" fill="white" opacity="0.06" />`;
  }
}

// ─── Cinematic SVG Overlay ──────────────────────────────────────────

function generateOverlaySvg(
  title: string,
  width: number,
  height: number,
  design: OverlayDesignContext,
  label?: string,
  tuneOverrides?: TuneOverrides
): { svg: string; debugInput: DebugInput } {
  const { variant, layout, icon, badge, palette } = design;
  const lp = getLayoutParams(layout);

  // Apply tune overrides
  if (tuneOverrides?.titleScale) lp.fontScale *= tuneOverrides.titleScale;
  if (tuneOverrides?.maxTextWidth) lp.maxTextWidth = tuneOverrides.maxTextWidth;
  if (tuneOverrides?.gradientStrength) lp.gradientStrength = tuneOverrides.gradientStrength;
  if (tuneOverrides?.vignetteStrength) lp.vignetteStrength = tuneOverrides.vignetteStrength;
  if (tuneOverrides?.textBlockXPercent) lp.textBlockXPercent = tuneOverrides.textBlockXPercent;

  // L1 boost — Editorial layout is visually weak at default scale
  if (layout === 1) {
    lp.fontScale *= 1.15;
    lp.maxTextWidth += 80;
  }

  // Layout engine — pass maxTextWidth DIVIDED by fontScale so that after
  // fontScale multiplication the rendered width stays within bounds.
  // calculateTitleLayout finds fontSize at pre-scale width, then we scale up.
  const preScaleMaxWidth = Math.round(lp.maxTextWidth / lp.fontScale);
  const rawLayout = calculateTitleLayout(title, width, preScaleMaxWidth);
  const fontSize = Math.round(rawLayout.fontSize * lp.fontScale);
  const lineHeight = Math.round(fontSize * lp.lineHeight);
  const titleLines = rawLayout.lines;

  const font = TITLE_LAYOUT.fontFamily;

  // Calculate actual rendered text block width (line widths scale with fontScale)
  const textBlockWidth = Math.max(...rawLayout.lineWidths) * lp.fontScale;

  // ── TEXT BLOCK ORIGIN — center the BLOCK, not the text ──
  // textBlockXPercent marks where the block center should be
  // text renders left-aligned from textX
  const TEXT_BLOCK_X = Math.round(width * lp.textBlockXPercent);
  const TEXT_BLOCK_Y = Math.round(height * lp.textBlockYPercent);

  let textX = Math.round(TEXT_BLOCK_X - textBlockWidth / 2);
  if (textX < 80) textX = 80; // Safety clamp — prevent left overflow
  const accentBarX = textX - 28;

  // ── Label metrics ──
  const labelFontSize = lp.labelFontSize;
  const labelLineHeight = labelFontSize * 1.6;
  const labelGap = 10;
  const resolvedLabel = deriveLabel(label);
  const hasLabel = resolvedLabel.length > 0;
  const hasIcon = hasLabel && icon !== null;
  const iconSize = 16;
  const iconGap = 8;
  const labelTextX = hasIcon ? textX + iconSize + iconGap : textX;

  // ── Badge metrics ──
  const hasBadge = badge !== null;
  const resolvedBadge = badge ?? '';
  const badgeFontSize = 11;
  const badgeHeight = 28;
  const badgePadH = 16;
  const badgeGap = 16;
  const badgeTextWidth = hasBadge ? resolvedBadge.length * badgeFontSize * 0.62 : 0;
  const badgePillWidth = badgeTextWidth + badgePadH * 2;
  const badgeRx = badgeHeight / 2;

  // ── Block layout — positioned from TEXT_BLOCK_Y as title anchor ──
  const titleBlock = lineHeight * titleLines.length;
  const labelBlock = hasLabel ? labelLineHeight + labelGap : 0;
  const badgeBlock = hasBadge ? badgeHeight + badgeGap : 0;

  // Title starts at TEXT_BLOCK_Y; label + badge stack above
  const titleStartY = TEXT_BLOCK_Y;
  const labelStartY = titleStartY - labelBlock;
  const badgeRectY = labelStartY - badgeBlock;

  // ── Y positions ──
  const badgeTextBaselineY = badgeRectY + badgeHeight / 2 + badgeFontSize * 0.35;
  const labelTextBaselineY = labelStartY + labelFontSize - 4;

  // ── Accent bar (spans label+title) ──
  const accentTop = (hasLabel ? labelStartY : titleStartY) - 8;
  const accentBottom = titleStartY + titleBlock + 8;
  const accentHeight = accentBottom - accentTop;

  // ── Hard gradient (brightness-aware) ──
  const overlayS = Math.min(palette.overlayStart * lp.gradientStrength, 0.92);
  const overlayE = Math.min(palette.overlayEnd * lp.gradientStrength, 0.35);

  const s1 = overlayS.toFixed(3);
  const s2 = (overlayS * 0.6 + overlayE * 0.4).toFixed(3);
  const s3 = (overlayS * 0.12 + overlayE * 0.88).toFixed(3);
  const s4 = Math.min(overlayE, 0.02).toFixed(3);

  // Right-side dark gradient (balances empty space)
  const rg = (0.25 * lp.gradientStrength).toFixed(3);

  // Vignette (edge darkening — attention containment)
  const vigBase = lp.vignetteStrength;
  const vigStrength = (vigBase * (0.1 + palette.overlayStart * 0.08)).toFixed(3);
  const vigMid = (vigBase * (0.05 + palette.overlayStart * 0.04)).toFixed(3);

  // Focal dark zone (eye anchor — +10% darkness behind text block)
  const focalDarkCx = ((textX + textBlockWidth * 0.5) / width).toFixed(3);
  const focalDarkCy = ((TEXT_BLOCK_Y + titleBlock * 0.3) / height).toFixed(3);

  const badgeTxtColor = hasBadge ? getBadgeTextColor(palette.accent) : '#ffffff';

  // ── Build SVG ──
  const parts: string[] = [];

  // 1. Defs
  parts.push(`<defs>
    <linearGradient id="hg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#000" stop-opacity="${s1}" />
      <stop offset="25%" stop-color="#000" stop-opacity="${s2}" />
      <stop offset="50%" stop-color="#000" stop-opacity="${s3}" />
      <stop offset="100%" stop-color="#000" stop-opacity="${s4}" />
    </linearGradient>
    <linearGradient id="rg" x1="1" y1="0" x2="0" y2="0">
      <stop offset="0%" stop-color="#000" stop-opacity="${rg}" />
      <stop offset="40%" stop-color="#000" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </linearGradient>
    <radialGradient id="vig" cx="50%" cy="50%" r="70%">
      <stop offset="0%" stop-color="#000" stop-opacity="0" />
      <stop offset="50%" stop-color="#000" stop-opacity="0" />
      <stop offset="78%" stop-color="#000" stop-opacity="${vigMid}" />
      <stop offset="100%" stop-color="#000" stop-opacity="${vigStrength}" />
    </radialGradient>
    <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(120)">
      <stop offset="0%" stop-color="#fff" stop-opacity="0" />
      <stop offset="30%" stop-color="#fff" stop-opacity="${lp.beamOpacity.toFixed(3)}" />
      <stop offset="50%" stop-color="#fff" stop-opacity="${(lp.beamOpacity * 0.5).toFixed(3)}" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </linearGradient>
    <linearGradient id="abg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${palette.accentLight}" />
      <stop offset="100%" stop-color="${palette.accentDark}" />
    </linearGradient>
    <radialGradient id="focalLight" cx="${((textX + textBlockWidth * 0.3) / width).toFixed(3)}" cy="${(TEXT_BLOCK_Y / height).toFixed(3)}" r="${(Math.max(400, textBlockWidth * 0.6) / width).toFixed(3)}">
      <stop offset="0%" stop-color="#fff" stop-opacity="${(0.04 + palette.overlayStart * 0.08).toFixed(3)}" />
      <stop offset="60%" stop-color="#fff" stop-opacity="0.02" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="focalDark" cx="${focalDarkCx}" cy="${focalDarkCy}" r="0.35">
      <stop offset="0%" stop-color="#000" stop-opacity="0.12" />
      <stop offset="55%" stop-color="#000" stop-opacity="0.06" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>
    <filter id="aglow" x="-150%" y="-150%" width="400%" height="400%">
      <feGaussianBlur stdDeviation="${lp.glowRadius}" result="blur" />
      <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <filter id="bshadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.3" />
    </filter>
    <filter id="tshadow">
      <feMorphology operator="dilate" radius="0" in="SourceAlpha" result="s1" />
      <feGaussianBlur in="s1" stdDeviation="3" result="s2" />
      <feOffset in="s2" dx="0" dy="3" result="s3" />
      <feFlood flood-color="#000" flood-opacity="0.45" result="s4" />
      <feComposite in="s4" in2="s3" operator="in" result="shadow" />
      <feMerge><feMergeNode in="shadow" /><feMergeNode in="SourceGraphic" /></feMerge>
    </filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" result="noise" />
      <feColorMatrix in="noise" type="saturate" values="0" />
    </filter>
  </defs>`);

  // 2. Hard gradient overlay (left → right)
  parts.push(`<rect width="${width}" height="${height}" fill="url(#hg)" />`);

  // 3. Right-side dark gradient (right → left, balances composition)
  parts.push(`<rect width="${width}" height="${height}" fill="url(#rg)" />`);

  // 4. Vignette overlay
  parts.push(`<rect width="${width}" height="${height}" fill="url(#vig)" />`);

  // 5. Signature light beam
  parts.push(`<rect width="${width}" height="${height}" fill="url(#beam)" />`);

  // 5b. Focal light zone behind text
  parts.push(`<rect width="${width}" height="${height}" fill="url(#focalLight)" />`);

  // 5c. Focal dark zone — eye anchor behind text (+10% darkness)
  parts.push(`<rect width="${width}" height="${height}" fill="url(#focalDark)" />`);

  // 5d. Film grain — subtle texture (premium feel)
  parts.push(`<rect width="${width}" height="${height}" filter="url(#grain)" opacity="0.03" />`);

  // 6. Variant background shape
  const shape = renderVariantShape(variant, width, height);
  if (shape) parts.push(shape);

  // 7. Accent bar (gradient fill + glow)
  parts.push(
    `<rect x="${accentBarX}" y="${accentTop.toFixed(0)}" width="${lp.accentBarWidth}" height="${accentHeight.toFixed(0)}" rx="3" fill="url(#abg)" opacity="0.92" filter="url(#aglow)" />`
  );

  // 8. Badge
  if (hasBadge) {
    parts.push(
      `<rect x="${textX}" y="${badgeRectY.toFixed(0)}" width="${badgePillWidth.toFixed(0)}" height="${badgeHeight}" rx="${badgeRx.toFixed(0)}" fill="${palette.accent}" opacity="0.80" filter="url(#bshadow)" />`
    );
    const badgeCenterX = textX + badgePillWidth / 2;
    parts.push(
      `<text x="${badgeCenterX.toFixed(0)}" y="${badgeTextBaselineY.toFixed(0)}" fill="${badgeTxtColor}" font-size="${badgeFontSize}" font-weight="700" font-family="${font}" letter-spacing="1" text-anchor="middle">${escapeSvg(resolvedBadge)}</text>`
    );
  }

  // 9. Icon (before label)
  if (hasIcon) {
    const iconY = labelTextBaselineY - iconSize + 2;
    parts.push(
      `<g transform="translate(${textX}, ${iconY.toFixed(0)})" filter="url(#tshadow)"><path d="${icon}" fill="rgba(255,255,255,${(lp.labelOpacity * 0.8).toFixed(2)})" /></g>`
    );
  }

  // 10. Label text
  if (hasLabel) {
    parts.push(
      `<text x="${labelTextX}" y="${labelTextBaselineY.toFixed(0)}" fill="rgba(255,255,255,${lp.labelOpacity.toFixed(2)})" font-size="${labelFontSize}" font-weight="600" font-family="${font}" letter-spacing="2.5" filter="url(#tshadow)">${escapeSvg(resolvedLabel)}</text>`
    );
  }

  // 11. Title lines
  for (let i = 0; i < titleLines.length; i++) {
    const y = titleStartY + i * lineHeight + fontSize;
    parts.push(
      `<text x="${textX}" y="${y.toFixed(0)}" fill="${palette.text}" font-size="${fontSize}" font-weight="${lp.titleWeight}" font-family="${font}" letter-spacing="${lp.letterSpacing}" filter="url(#tshadow)">${escapeSvg(titleLines[i])}</text>`
    );
  }

  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  ${parts.join('\n  ')}
</svg>`;

  const debugInput: DebugInput = {
    layout,
    textBlockWidth,
    textX,
    imageWidth: width,
    imageHeight: height,
    contrast: 0, // Filled by caller after composite
    brightness: 0, // Filled by caller
    titleLines: titleLines.length,
    fontSize,
    edgeDensityLeft: 0, // Filled by caller
    subjectRegion: 'center', // Filled by caller
    gradientStrength: lp.gradientStrength,
    vignetteStrength: lp.vignetteStrength,
    maxTextWidth: lp.maxTextWidth,
    textBlockXPercent: lp.textBlockXPercent,
  };

  return { svg, debugInput };
}

// ─── Image Generation ───────────────────────────────────────────────

/** Result with debug metadata for auto-tune loop */
export interface FeaturedImageWithDebug extends FeaturedImageResult {
  debugInput: DebugInput;
}

/** Generate both clean and overlay featured images from a single source */
export async function generateFeaturedImage(
  imageBuffer: Buffer,
  options: FeaturedImageOptions,
  tuneOverrides?: TuneOverrides
): Promise<FeaturedImageWithDebug> {
  const { title, brightness, outputWidth, outputHeight, label, design } = options;

  console.log(
    `[overlay] Brightness: ${brightness.average.toFixed(1)}, ` +
      `Gradient: ${(design.palette.overlayStart * 100).toFixed(0)}%→${(design.palette.overlayEnd * 100).toFixed(0)}%, ` +
      `Layout: L${design.layout}`
  );

  if (tuneOverrides) {
    const parts: string[] = [];
    if (tuneOverrides.titleScale) parts.push(`titleScale=${tuneOverrides.titleScale.toFixed(2)}`);
    if (tuneOverrides.maxTextWidth) parts.push(`maxTextWidth=${tuneOverrides.maxTextWidth}`);
    if (tuneOverrides.gradientStrength)
      parts.push(`gradient=${tuneOverrides.gradientStrength.toFixed(2)}`);
    if (parts.length) console.log(`[tune] Overrides: ${parts.join(', ')}`);
  }

  // ── Step 1: Resize with attention-aware composition ──
  const resized = await sharp(imageBuffer)
    .resize(outputWidth, outputHeight, { fit: 'cover', position: sharp.strategy.attention })
    .toBuffer();

  // ── Clean variant: mild sharpen for micro-contrast ──
  const clean = await sharp(resized).sharpen({ sigma: 0.5 }).webp({ quality: 90 }).toBuffer();

  // ── Step 2: Background depth layer (adaptive blur + dim + desaturate) ──
  const blurSigma =
    tuneOverrides?.blurSigma ?? Math.max(5, Math.min(8, 6 + (brightness.average - 100) * 0.02));

  // Brightness normalization — ensure consistent visual depth across images
  let brightnessMult = tuneOverrides?.brightnessMultiplier ?? 1.0;
  if (brightness.average > 150) brightnessMult *= 0.9;
  else if (brightness.average < 70) brightnessMult *= 1.05;

  const bgBrightness = 0.78 * brightnessMult;
  const depthBase = await sharp(resized)
    .blur(blurSigma)
    .modulate({ brightness: bgBrightness, saturation: 0.9 })
    .toBuffer();

  let effectiveTuneOverrides = tuneOverrides;
  const renderCopy = resolveRenderCopy(title, design);

  // ── Step 3: Keep current title geometry as the debug contract source ──
  let { debugInput } = generateOverlaySvg(
    renderCopy.title,
    outputWidth,
    outputHeight,
    design,
    label,
    effectiveTuneOverrides
  );

  const weakCtrSignal = debugInput.fontSize < 48 && debugInput.textBlockWidth / outputWidth < 0.35;

  if (weakCtrSignal) {
    effectiveTuneOverrides = {
      ...effectiveTuneOverrides,
      titleScale: (effectiveTuneOverrides?.titleScale ?? 1.0) + 0.15,
      gradientStrength: (effectiveTuneOverrides?.gradientStrength ?? 1.0) + 0.1,
      brightnessMultiplier: (effectiveTuneOverrides?.brightnessMultiplier ?? 1.0) * 0.92,
    };

    ({ debugInput } = generateOverlaySvg(
      renderCopy.title,
      outputWidth,
      outputHeight,
      design,
      label,
      effectiveTuneOverrides
    ));
  }

  // Fill in brightness from the actual source
  debugInput.brightness = brightness.average;

  // ── Step 4: Render → SVG → PNG → WebP ──
  const { overlay } = await renderImage({
    imageBuffer: depthBase,
    title,
    label,
    brightness,
    design,
    outputWidth,
    outputHeight,
    tuneOverrides: effectiveTuneOverrides,
  });

  return { clean, overlay, debugInput };
}

/** Generate featured images at standard dimensions */
export async function generateStandardFeaturedImage(
  imageBuffer: Buffer,
  title: string,
  brightness: BrightnessResult,
  design: OverlayDesignContext,
  label?: string,
  tuneOverrides?: TuneOverrides
): Promise<FeaturedImageWithDebug> {
  return generateFeaturedImage(
    imageBuffer,
    {
      title,
      brightness,
      outputWidth: IMAGE_SIZES.featured.width,
      outputHeight: IMAGE_SIZES.featured.height,
      label,
      design,
    },
    tuneOverrides
  );
}
