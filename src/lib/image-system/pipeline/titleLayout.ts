// ─── Title Layout Engine ────────────────────────────────────────────
// Dynamically fits article titles into 1-3 lines on featured images

import { TITLE_LAYOUT } from '../config';
import type { TitleLayoutResult } from '../types';

/** Estimate text width based on character count and font size (approximation) */
function estimateTextWidth(text: string, fontSize: number): number {
  // Use a conservative width estimate so rendered lines do not overflow after fitting.
  return text.length * fontSize * 0.68;
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

function findThreeLineBreaks(
  title: string,
  maxWidthPx: number,
  fontSize: number
): [string, string, string] | null {
  const words = title.split(' ');
  if (words.length <= 4) return null;

  let best: [string, string, string] | null = null;
  let bestScore = Infinity;

  for (let firstBreak = 1; firstBreak < words.length - 2; firstBreak++) {
    for (let secondBreak = firstBreak + 1; secondBreak < words.length - 1; secondBreak++) {
      const line1 = words.slice(0, firstBreak).join(' ');
      const line2 = words.slice(firstBreak, secondBreak).join(' ');
      const line3 = words.slice(secondBreak).join(' ');

      const widths = [line1, line2, line3].map((line) => estimateTextWidth(line, fontSize));
      if (widths.some((width) => width > maxWidthPx)) continue;

      const lengths = [line1.length, line2.length, line3.length];
      const balancePenalty = Math.max(...widths) - Math.min(...widths);
      const lengthPenalty = Math.max(...lengths) - Math.min(...lengths);
      const score = balancePenalty + lengthPenalty * fontSize * 0.18;

      if (score < bestScore) {
        bestScore = score;
        best = [line1, line2, line3];
      }
    }
  }

  return best;
}

/** Calculate the title layout: font size, lines, and positioning */
export function calculateTitleLayout(title: string, imageWidth: number, maxTextWidthOverride?: number): TitleLayoutResult {
  // Use override if provided, otherwise derive from config
  const percentWidth = imageWidth * TITLE_LAYOUT.textWidthPercent;
  const paddedWidth = imageWidth - TITLE_LAYOUT.horizontalPaddingPx * 2;
  const maxTextWidth = maxTextWidthOverride ?? Math.min(percentWidth, paddedWidth, TITLE_LAYOUT.maxTextWidthPx);

  let fontSize = TITLE_LAYOUT.maxFontSize;
  const wordCount = title.split(' ').length;
  const shouldPreferMultiline = title.length > 28 || wordCount >= 5;
  const shouldPreferThreeLines = title.length > 46 || title.split(' ').length >= 8;

  // Try to fit in one line first
  if (!shouldPreferMultiline) {
    while (fontSize >= TITLE_LAYOUT.minFontSize) {
      const w = estimateTextWidth(title, fontSize);
      if (w <= maxTextWidth) {
        const lineHeight = fontSize * 1.1;
        return {
          lines: [title],
          lineWidths: [w],
          fontSize,
          lineHeight,
          totalHeight: lineHeight,
        };
      }
      fontSize -= 2;
    }
  }

  const tryThreeLineLayout = (): TitleLayoutResult | null => {
    fontSize = TITLE_LAYOUT.maxFontSize;

    while (fontSize >= TITLE_LAYOUT.minFontSize) {
      const lines = findThreeLineBreaks(title, maxTextWidth, fontSize);
      if (lines) {
        const lineHeight = fontSize * 1.08;
        return {
          lines,
          lineWidths: lines.map((line) => estimateTextWidth(line, fontSize)),
          fontSize,
          lineHeight,
          totalHeight: lineHeight * lines.length,
        };
      }
      fontSize -= 2;
    }

    return null;
  };

  const tryTwoLineLayout = (): TitleLayoutResult | null => {
    fontSize = TITLE_LAYOUT.maxFontSize;

    while (fontSize >= TITLE_LAYOUT.minFontSize) {
      const breakPoint = findBreakPoint(title, maxTextWidth, fontSize);
      if (breakPoint > 0) {
        const line1 = title.slice(0, breakPoint).trim();
        const line2 = title.slice(breakPoint + 1).trim();
        const lineHeight = fontSize * 1.1;
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

    return null;
  };

  const preferredLayout = shouldPreferThreeLines ? tryThreeLineLayout() : tryTwoLineLayout();
  if (preferredLayout) return preferredLayout;

  const secondaryLayout = shouldPreferThreeLines ? tryTwoLineLayout() : tryThreeLineLayout();
  if (secondaryLayout) return secondaryLayout;

  // Fallback: split into three balanced lines with minimum font when possible.
  const fallbackThree = findThreeLineBreaks(title, maxTextWidth, TITLE_LAYOUT.minFontSize);
  const minFs = TITLE_LAYOUT.minFontSize;
  const lineHeight = minFs * 1.08;

  if (fallbackThree) {
    return {
      lines: fallbackThree,
      lineWidths: fallbackThree.map((line) => estimateTextWidth(line, minFs)),
      fontSize: minFs,
      lineHeight,
      totalHeight: lineHeight * fallbackThree.length,
    };
  }

  const mid = Math.floor(title.length / 2);
  const spaceAfterMid = title.indexOf(' ', mid);
  const splitAt = spaceAfterMid > 0 ? spaceAfterMid : mid;
  const line1 = title.slice(0, splitAt).trim();
  const line2 = title.slice(splitAt).trim();

  return {
    lines: [line1, line2],
    lineWidths: [estimateTextWidth(line1, minFs), estimateTextWidth(line2, minFs)],
    fontSize: minFs,
    lineHeight,
    totalHeight: lineHeight * 2,
  };
}
