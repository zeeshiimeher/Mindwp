// ─── Auto-Tune System ───────────────────────────────────────────────
// Applies debug-recommended fixes to pipeline parameters and retries.
// Max 2 iterations. Returns the best result.

import type { DebugFixAction, TuneOverrides } from '../types';

// ─── Fix Application ────────────────────────────────────────────────

/** Apply debug fixes to tune overrides — each fix adjusts a single lever */
export function applyFixes(current: TuneOverrides, fixes: DebugFixAction[]): TuneOverrides {
  const next = { ...current };

  for (const fix of fixes) {
    switch (fix) {
      case 'increaseText':
        next.titleScale = (next.titleScale ?? 1.0) + 0.15;
        break;
      case 'decreaseText':
        next.titleScale = (next.titleScale ?? 1.0) - 0.1;
        break;
      case 'increaseContrast':
        next.gradientStrength = (next.gradientStrength ?? 1.0) + 0.15;
        next.vignetteStrength = (next.vignetteStrength ?? 1.0) + 0.15;
        next.brightnessMultiplier = (next.brightnessMultiplier ?? 1.0) * 0.92;
        break;
      case 'increaseWidth':
        next.maxTextWidth = (next.maxTextWidth ?? 780) + 80;
        break;
      case 'decreaseWidth':
        next.maxTextWidth = (next.maxTextWidth ?? 780) - 60;
        break;
      case 'shiftRight':
        next.textBlockXPercent = (next.textBlockXPercent ?? 0.4) + 0.04;
        break;
      case 'shiftLeft':
        next.textBlockXPercent = (next.textBlockXPercent ?? 0.4) - 0.03;
        break;
      case 'increaseBlur':
        next.blurSigma = (next.blurSigma ?? 6) + 3;
        break;
      case 'retryImage':
        // Handled externally — signals the pipeline to try a different image
        break;
    }
  }

  return next;
}

/** Clamp tune overrides to safe ranges */
export function clampOverrides(overrides: TuneOverrides): TuneOverrides {
  return {
    titleScale: overrides.titleScale
      ? Math.max(0.8, Math.min(2.2, overrides.titleScale))
      : undefined,
    maxTextWidth: overrides.maxTextWidth
      ? Math.max(500, Math.min(1100, overrides.maxTextWidth))
      : undefined,
    gradientStrength: overrides.gradientStrength
      ? Math.max(0.8, Math.min(1.6, overrides.gradientStrength))
      : undefined,
    vignetteStrength: overrides.vignetteStrength
      ? Math.max(0.8, Math.min(2.0, overrides.vignetteStrength))
      : undefined,
    textBlockXPercent: overrides.textBlockXPercent
      ? Math.max(0.28, Math.min(0.52, overrides.textBlockXPercent))
      : undefined,
    blurSigma: overrides.blurSigma
      ? Math.max(3, Math.min(14, overrides.blurSigma))
      : undefined,
    brightnessMultiplier: overrides.brightnessMultiplier
      ? Math.max(0.65, Math.min(1.0, overrides.brightnessMultiplier))
      : undefined,
  };
}
