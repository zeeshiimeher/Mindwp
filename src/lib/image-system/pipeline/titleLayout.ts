// ─── Title Layout Engine ────────────────────────────────────────────
// Dynamically fits article titles into 1-2 lines on featured images

import { TITLE_LAYOUT } from '../config';
import type { TitleLayoutResult } from '../types';

/** Estimate text width based on character count and font size (approximation) */
function estimateTextWidth(text: string, fontSize: number): number {
  // Average character width is ~0.55x font size for sans-serif bold
  return text.length * fontSize * 0.55;
}

/** Find a natural break point in the title for two-line layout */
function findBreakPoint(title: string, maxWidthPx: number, fontSize: number): number {
  const words = title.split(' ');
  if (words.length <= 2) return -1;

  const midTarget = title.length / 2;
  let bestBreak = -1;
  let bestDist = Infinity;
  let pos = 0;

  for (let i = 0; i < words.length - 1; i++) {
    pos += words[i].length + 1;
    const dist = Math.abs(pos - midTarget);

    const line1 = title.slice(0, pos - 1);
    const line2 = title.slice(pos);
    const line1Width = estimateTextWidth(line1, fontSize);
    const line2Width = estimateTextWidth(line2, fontSize);

    if (line1Width <= maxWidthPx && line2Width <= maxWidthPx && dist < bestDist) {
      bestDist = dist;
      bestBreak = pos - 1;
    }
  }

  return bestBreak;
}

/** Calculate the title layout: font size, lines, and positioning */
export function calculateTitleLayout(title: string, imageWidth: number): TitleLayoutResult {
  // Respect both percentage and absolute padding (use the stricter one)
  const percentWidth = imageWidth * TITLE_LAYOUT.textWidthPercent;
  const paddedWidth = imageWidth - TITLE_LAYOUT.horizontalPaddingPx * 2;
  const maxTextWidth = Math.min(percentWidth, paddedWidth);

  let fontSize = TITLE_LAYOUT.maxFontSize;

  // Try to fit in one line first
  while (fontSize >= TITLE_LAYOUT.minFontSize) {
    const w = estimateTextWidth(title, fontSize);
    if (w <= maxTextWidth) {
      return {
        lines: [title],
        lineWidths: [w],
        fontSize,
        lineHeight: fontSize * 1.3,
        totalHeight: fontSize * 1.3,
      };
    }
    fontSize -= 2;
  }

  // Reset and try two lines
  fontSize = TITLE_LAYOUT.maxFontSize;

  while (fontSize >= TITLE_LAYOUT.minFontSize) {
    const breakPoint = findBreakPoint(title, maxTextWidth, fontSize);
    if (breakPoint > 0) {
      const line1 = title.slice(0, breakPoint).trim();
      const line2 = title.slice(breakPoint + 1).trim();
      const lineHeight = fontSize * 1.3;
      return {
        lines: [line1, line2],
        lineWidths: [estimateTextWidth(line1, fontSize), estimateTextWidth(line2, fontSize)],
        fontSize,
        lineHeight,
        totalHeight: lineHeight * 2,
      };
    }
    fontSize -= 2;
  }

  // Fallback: split at midpoint with minimum font
  const mid = Math.floor(title.length / 2);
  const spaceAfterMid = title.indexOf(' ', mid);
  const splitAt = spaceAfterMid > 0 ? spaceAfterMid : mid;
  const line1 = title.slice(0, splitAt).trim();
  const line2 = title.slice(splitAt).trim();
  const minFs = TITLE_LAYOUT.minFontSize;

  return {
    lines: [line1, line2],
    lineWidths: [estimateTextWidth(line1, minFs), estimateTextWidth(line2, minFs)],
    fontSize: minFs,
    lineHeight: minFs * 1.3,
    totalHeight: minFs * 1.3 * 2,
  };
}
