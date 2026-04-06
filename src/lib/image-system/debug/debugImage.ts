// ─── Visual Debug System ────────────────────────────────────────────
// Analyzes generated images, detects issues, and recommends fixes.
// Does NOT change the pipeline — only diagnoses and returns fix suggestions.

import type { DebugFixAction, DebugInput, DebugResult } from '../types';

// ─── Detection Thresholds ───────────────────────────────────────────

const THRESHOLDS = {
  textTooSmallFont: 48,
  weakTextDominanceRatio: 0.35,
  textTooWideRatio: 0.7,
  leftHeavyPercent: 0.35,
  overflowMarginPx: 40,
  lowContrast: 7,
  criticalContrast: 6,
  busyLeftDensity: 0.6,
  subjectCompetingPercent: 0.5,
} as const;

// ─── Scoring Weights (normalized to 1.0) ────────────────────────────

const SCORE_WEIGHTS = {
  textDominance: 0.30,
  contrast: 0.25,
  composition: 0.20,
  ctrImpact: 0.15,
  intentMatch: 0.10,
} as const;

// ─── Issue Detection (priority ordered) ─────────────────────────────

function detectIssues(input: DebugInput): { issues: string[]; fixes: DebugFixAction[] } {
  const issues: string[] = [];
  const fixes: DebugFixAction[] = [];
  const textAreaRatio = input.textBlockWidth / input.imageWidth;

  // Visual dominance: single-line wide text is visually strong even at smaller fontSize
  const isSingleLine = input.titleLines === 1;
  const visualWidthRatio = textAreaRatio;
  const hasVisualDominance = isSingleLine && visualWidthRatio > 0.45;

  // PRIORITY 1 — Text too small (only when NOT visually dominant)
  if (input.fontSize < THRESHOLDS.textTooSmallFont && !hasVisualDominance) {
    issues.push('text too small');
    fixes.push('increaseText');
    if (input.maxTextWidth < 800) fixes.push('increaseWidth');
  }

  // Visual dominance score — soft penalty for genuinely weak text
  const visualDominanceScore = (input.fontSize / 100) + (visualWidthRatio * 2);
  if (visualDominanceScore < 1.2) {
    issues.push('weak visual weight');
    fixes.push('increaseText');
    fixes.push('increaseWidth');
  }

  // PRIORITY 2 — Low contrast (readability killer)
  if (input.contrast < THRESHOLDS.lowContrast) {
    issues.push('low contrast');
    fixes.push('increaseContrast');
  }

  // PRIORITY 3 — Subject competing with text (subject on left)
  if (input.subjectRegion === 'left') {
    issues.push('subject competing with text');
    fixes.push('retryImage');
    fixes.push('increaseContrast');
  }

  // PRIORITY 4 — Weak text dominance
  if (textAreaRatio < THRESHOLDS.weakTextDominanceRatio) {
    issues.push('weak text dominance');
    fixes.push('increaseWidth');
    fixes.push('increaseText');
  }

  // Text too wide
  if (textAreaRatio > THRESHOLDS.textTooWideRatio) {
    issues.push('text too wide');
    fixes.push('decreaseWidth');
  }

  // Left-heavy layout
  if (input.textBlockXPercent < THRESHOLDS.leftHeavyPercent) {
    issues.push('left heavy layout');
    fixes.push('shiftRight');
  }

  // Text overflow / cut
  if (input.textX + input.textBlockWidth > input.imageWidth - THRESHOLDS.overflowMarginPx) {
    issues.push('text overflow');
    fixes.push('decreaseWidth');
    fixes.push('shiftLeft');
  }

  // Background too busy (left zone)
  if (input.edgeDensityLeft > THRESHOLDS.busyLeftDensity) {
    issues.push('busy background');
    fixes.push('increaseBlur');
    fixes.push('increaseContrast');
  }

  // Deduplicate fixes, keep priority order
  const uniqueFixes = [...new Set(fixes)];

  return { issues, fixes: uniqueFixes };
}

// ─── Scoring ────────────────────────────────────────────────────────

function calculateScore(input: DebugInput, issues: string[]): number {
  const textAreaRatio = input.textBlockWidth / input.imageWidth;

  // ── Factor scores (each 0–10) ──

  // Visual dominance awareness
  const isSingleLine = input.titleLines === 1;
  const visualWidthRatio = textAreaRatio;
  const hasVisualDominance = isSingleLine && visualWidthRatio > 0.45;

  // Text dominance: fontSize is the primary driver, but visual dominance can compensate
  let textDominance = 10;
  if (input.fontSize < 40) textDominance -= hasVisualDominance ? 2 : 4;
  else if (input.fontSize < 48) textDominance -= hasVisualDominance ? 0.5 : 2.5;
  else if (input.fontSize < 56) textDominance -= 1;
  if (textAreaRatio < 0.35) textDominance -= 2;
  if (textAreaRatio > 0.7) textDominance -= 1.5;

  // Contrast: overlay strength for readability
  let contrast = 10;
  if (input.contrast < 4.5) contrast -= 6;
  else if (input.contrast < 6) contrast -= 4;
  else if (input.contrast < 7) contrast -= 2;
  else if (input.contrast < 8) contrast -= 1;

  // Composition: position, balance, no overflow
  let composition = 10;
  if (input.textBlockXPercent < 0.35) composition -= 2;
  if (input.textX + input.textBlockWidth > input.imageWidth - 40) composition -= 3;
  if (input.subjectRegion === 'left') composition -= 3;
  if (textAreaRatio > 0.75) composition -= 1;

  // CTR impact: large text = higher click-through (visual dominance compensates)
  let ctrImpact = 10;
  if (input.fontSize < 40) ctrImpact -= hasVisualDominance ? 1.5 : 4;
  else if (input.fontSize < 48) ctrImpact -= hasVisualDominance ? 0.5 : 2;
  if (textAreaRatio < 0.35) ctrImpact -= 2;

  // Intent match: subject on right, clean left zone
  let intentMatch = 10;
  if (input.edgeDensityLeft > 0.6) intentMatch -= 3;
  if (input.subjectRegion !== 'right') intentMatch -= 2;

  // ── Weighted combination ──
  const weighted =
    Math.max(0, textDominance) * SCORE_WEIGHTS.textDominance +
    Math.max(0, contrast) * SCORE_WEIGHTS.contrast +
    Math.max(0, composition) * SCORE_WEIGHTS.composition +
    Math.max(0, ctrImpact) * SCORE_WEIGHTS.ctrImpact +
    Math.max(0, intentMatch) * SCORE_WEIGHTS.intentMatch;

  let score = weighted;

  // ── Hard penalties (stack on top of weighted score) ──
  if (input.contrast < THRESHOLDS.criticalContrast) score -= 1.5;
  else if (input.contrast < THRESHOLDS.lowContrast) score -= 1.2;
  if (input.subjectRegion === 'left') score -= 1.5;
  if (input.fontSize < THRESHOLDS.textTooSmallFont && !hasVisualDominance) score -= 1.5;
  if (textAreaRatio < THRESHOLDS.weakTextDominanceRatio) score -= 1.2;

  return Math.round(Math.max(0, Math.min(10, score)) * 10) / 10;
}

// ─── Confidence ─────────────────────────────────────────────────────

function determineConfidence(issues: string[], score: number): 'high' | 'medium' | 'low' {
  if (issues.length === 0 && score >= 9) return 'high';
  if (issues.length <= 1 && score >= 7.5) return 'medium';
  return 'low';
}

// ─── CTR Score (0–3) ────────────────────────────────────────────────
// Predicts click-through readiness from visual signals

function calculateCtrScore(input: DebugInput): number {
  let ctr = 0;
  const textAreaRatio = input.textBlockWidth / input.imageWidth;

  // Text dominance → strong visual hierarchy
  if (textAreaRatio > 0.4) ctr += 1;
  // Large font → attention grab
  if (input.fontSize > 55) ctr += 0.5;
  // Subject on right → clean text zone, human visible
  if (input.subjectRegion === 'right') ctr += 0.5;
  // Strong contrast → readable
  if (input.contrast > 7.5) ctr += 0.5;
  // Clean left zone → no distraction
  if (input.edgeDensityLeft < 0.3) ctr += 0.5;

  return Math.min(3, ctr);
}

// ─── Synergy Score (0–2) ────────────────────────────────────────────
// Measures headline-image alignment: composition + intent match

function calculateSynergyScore(input: DebugInput): number {
  let synergy = 0;

  // Text-left subject-right = canonical editorial composition
  if (input.subjectRegion === 'right' && input.textBlockXPercent < 0.5) synergy += 1;
  // Strong contrast = headline reads clearly over image
  if (input.contrast > 6) synergy += 0.5;
  // Clean left zone = text zone isn't fighting the image
  if (input.edgeDensityLeft < 0.4) synergy += 0.5;

  return Math.min(2, synergy);
}

// ─── Conversion Score (0–3) ─────────────────────────────────────────
// Trust, clarity, relatability, action signals

function calculateConversionScore(input: DebugInput): number {
  let conv = 0;

  // Trust — subject present (not empty or abstract)
  if (input.subjectRegion !== 'center' || input.edgeDensityLeft < 0.5) conv += 1;
  // Clarity — text is readable (good contrast)
  if (input.contrast > 6) conv += 0.5;
  // Relatability — human-centric composition (subject right, not competing)
  if (input.subjectRegion === 'right') conv += 0.5;
  // Action — strong visual presence (large text, wide coverage)
  const textAreaRatio = input.textBlockWidth / input.imageWidth;
  if (input.fontSize > 45 && textAreaRatio > 0.35) conv += 1;

  return Math.min(3, conv);
}

// ─── Main Debug Function ────────────────────────────────────────────

export function debugImage(input: DebugInput): DebugResult {
  const { issues, fixes } = detectIssues(input);
  const baseScore = calculateScore(input, issues);
  const ctrScore = calculateCtrScore(input);
  const synergyScore = calculateSynergyScore(input);
  const conversionScore = calculateConversionScore(input);

  // Final score: base (0-10) + sub-score bonus scaled to complement
  // Sub-scores can boost a good image but won't rescue a bad one
  const bonus = (ctrScore + synergyScore + conversionScore) / 8; // max bonus = 1.0
  const score = Math.round(Math.max(0, Math.min(10, baseScore + bonus)) * 10) / 10;

  const confidence = determineConfidence(issues, score);

  // Return only top 2 fixes (highest priority)
  const priorityFixes = fixes.slice(0, 2);

  return {
    score,
    issues,
    fixes: priorityFixes,
    confidence,
    ctrScore: Math.round(ctrScore * 10) / 10,
    synergyScore: Math.round(synergyScore * 10) / 10,
    conversionScore: Math.round(conversionScore * 10) / 10,
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
