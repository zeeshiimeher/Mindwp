// ─── Visual Debug System ────────────────────────────────────────────
// Analyzes generated images, detects issues, and recommends fixes.
// Does NOT change the pipeline — only diagnoses and returns fix suggestions.

import type { DebugFixAction, DebugInput, DebugResult } from '../types';

// ─── Detection Thresholds ───────────────────────────────────────────

const THRESHOLDS = {
  textTooSmallWidth: 600,
  leftHeavyPercent: 0.35,
  overflowMarginPx: 40,
  lowContrast: 6,
  busyLeftDensity: 0.6,
  subjectCompetingPercent: 0.5,
  minTitleLines: 2,
  weakCtrFontSize: 36,
} as const;

// ─── Scoring Weights ────────────────────────────────────────────────

const SCORE_WEIGHTS = {
  textDominance: 2.5,
  composition: 2.0,
  contrast: 2.5,
  intentMatch: 1.5,
  ctrImpact: 1.5,
} as const;

// ─── Issue Detection ────────────────────────────────────────────────

function detectIssues(input: DebugInput): { issues: string[]; fixes: DebugFixAction[] } {
  const issues: string[] = [];
  const fixes: DebugFixAction[] = [];

  // ISSUE 1 — Text too small
  if (input.textBlockWidth < THRESHOLDS.textTooSmallWidth || input.titleLines < 2) {
    issues.push('text too small');
    fixes.push('increaseText');
    if (input.maxTextWidth < 800) fixes.push('increaseWidth');
  }

  // ISSUE 2 — Left-heavy layout
  if (input.textBlockXPercent < THRESHOLDS.leftHeavyPercent) {
    issues.push('left heavy layout');
    fixes.push('shiftRight');
    if (input.maxTextWidth < 800) fixes.push('increaseWidth');
  }

  // ISSUE 3 — Text overflow / cut
  if (input.textX + input.textBlockWidth > input.imageWidth - THRESHOLDS.overflowMarginPx) {
    issues.push('text overflow');
    fixes.push('decreaseWidth');
    fixes.push('shiftLeft');
  }

  // ISSUE 4 — Low contrast
  if (input.contrast < THRESHOLDS.lowContrast) {
    issues.push('low contrast');
    fixes.push('increaseContrast');
  }

  // ISSUE 5 — Background too busy (left zone)
  if (input.edgeDensityLeft > THRESHOLDS.busyLeftDensity) {
    issues.push('busy background');
    fixes.push('increaseBlur');
    fixes.push('increaseContrast');
  }

  // ISSUE 6 — Subject competing with text (subject on left)
  if (input.subjectRegion === 'left') {
    issues.push('subject competing with text');
    fixes.push('retryImage');
    fixes.push('increaseContrast');
  }

  // ISSUE 8 — Weak CTR impact
  if (input.fontSize < THRESHOLDS.weakCtrFontSize) {
    issues.push('weak CTR impact');
    fixes.push('increaseText');
  }

  // Deduplicate fixes, keep priority order
  const uniqueFixes = [...new Set(fixes)];

  return { issues, fixes: uniqueFixes };
}

// ─── Scoring ────────────────────────────────────────────────────────

function calculateScore(input: DebugInput, issues: string[]): number {
  // Start at 10, deduct per issue category

  // Text dominance: title visible, proper size, good width
  let textDominance = 10;
  if (input.textBlockWidth < 600) textDominance -= 3;
  if (input.fontSize < 36) textDominance -= 2;
  if (input.titleLines < 1) textDominance -= 3;

  // Composition: position, balance, no overflow
  let composition = 10;
  if (input.textBlockXPercent < 0.35) composition -= 2;
  if (input.textX + input.textBlockWidth > input.imageWidth - 40) composition -= 3;
  if (input.subjectRegion === 'left') composition -= 2;

  // Contrast: overlay strength for readability
  let contrast = 10;
  if (input.contrast < 4.5) contrast -= 5;
  else if (input.contrast < 6) contrast -= 2;
  else if (input.contrast < 7) contrast -= 1;

  // Intent match: subject on right, clean left zone
  let intentMatch = 10;
  if (input.edgeDensityLeft > 0.6) intentMatch -= 3;
  if (input.subjectRegion !== 'right') intentMatch -= 2;

  // CTR impact: large text, tight spacing, strong visual hierarchy
  let ctrImpact = 10;
  if (input.fontSize < 36) ctrImpact -= 3;
  if (input.textBlockWidth < 600) ctrImpact -= 2;

  const weighted =
    (Math.max(0, textDominance) * SCORE_WEIGHTS.textDominance +
      Math.max(0, composition) * SCORE_WEIGHTS.composition +
      Math.max(0, contrast) * SCORE_WEIGHTS.contrast +
      Math.max(0, intentMatch) * SCORE_WEIGHTS.intentMatch +
      Math.max(0, ctrImpact) * SCORE_WEIGHTS.ctrImpact) /
    (SCORE_WEIGHTS.textDominance +
      SCORE_WEIGHTS.composition +
      SCORE_WEIGHTS.contrast +
      SCORE_WEIGHTS.intentMatch +
      SCORE_WEIGHTS.ctrImpact);

  return Math.round(weighted * 10) / 10;
}

// ─── Confidence ─────────────────────────────────────────────────────

function determineConfidence(issues: string[], score: number): 'high' | 'medium' | 'low' {
  if (issues.length === 0 && score >= 8) return 'high';
  if (issues.length <= 2 && score >= 6) return 'medium';
  return 'low';
}

// ─── Main Debug Function ────────────────────────────────────────────

export function debugImage(input: DebugInput): DebugResult {
  const { issues, fixes } = detectIssues(input);
  const score = calculateScore(input, issues);
  const confidence = determineConfidence(issues, score);

  // Return only top 2 fixes (highest priority)
  const priorityFixes = fixes.slice(0, 2);

  return {
    score,
    issues,
    fixes: priorityFixes,
    confidence,
    details: {
      textBlockWidth: input.textBlockWidth,
      textX: input.textX,
      contrast: input.contrast,
      brightness: input.brightness,
      fontSize: input.fontSize,
      edgeDensityLeft: input.edgeDensityLeft,
      subjectRegion: input.subjectRegion,
      layout: input.layout,
    },
  };
}
