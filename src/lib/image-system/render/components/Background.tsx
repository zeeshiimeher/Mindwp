import type { BrightnessResult, OverlayDesignContext } from '../../types';
import { gradients } from '../design-system/gradients';

export function Background({
  width,
  height,
  design,
  brightness,
}: {
  width: number;
  height: number;
  design: OverlayDesignContext;
  brightness: BrightnessResult;
}) {
  void width;
  void height;
  void brightness;
  const showImageOverlay = design.visualMode === 'real';

  return (
    <>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradients.base,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradients.glowPrimary,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: gradients.glowSecondary,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: showImageOverlay
            ? 'linear-gradient(90deg, rgba(2,6,23,0.86) 0%, rgba(2,6,23,0.66) 42%, rgba(2,6,23,0.38) 100%)'
            : 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.18) 100%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          right: 84,
          top: 54,
          width: 340,
          height: 340,
          borderRadius: 999,
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, rgba(59,130,246,0.08) 42%, transparent 72%)',
          transform: 'translateY(-10px)',
        }}
      />
    </>
  );
}