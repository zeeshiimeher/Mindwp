import type { BrightnessResult, OverlayDesignContext } from '../../types';

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
  const isIllustration = design.visualMode === 'illustration';
  const accentOpacity = isIllustration ? 0.28 : 0.14;
  const startOpacity = isIllustration
    ? Math.min(design.palette.overlayStart * 0.78, 0.72)
    : Math.min(design.palette.overlayStart * 1.1, 0.94);
  const endOpacity = isIllustration
    ? Math.min(design.palette.overlayEnd * 0.72, 0.18)
    : Math.min(design.palette.overlayEnd * 1.2, 0.32);

  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, rgba(10, 12, 18, ${startOpacity}) 0%, rgba(10, 12, 18, ${endOpacity}) 52%, rgba(10, 12, 18, 0.06) 100%)`,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at 22% 28%, ${design.palette.accent}${Math.round(accentOpacity * 255)
            .toString(16)
            .padStart(2, '0')} 0%, transparent 42%)`,
        }}
      />
      {isIllustration ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 78% 42%, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 24%, rgba(255, 255, 255, 0.01) 52%, transparent 74%)',
          }}
        />
      ) : null}
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.22) 100%)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          inset: 0,
          border: brightness.average > 150 ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(255, 255, 255, 0.04)',
        }}
      />
      {design.treatment === 'frame' ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            inset: 24,
            borderRadius: 24,
            border: '1px solid rgba(255, 255, 255, 0.14)',
          }}
        />
      ) : null}
      {design.treatment === 'depth' ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: width * 0.08,
            top: height * 0.12,
            width: width * 0.26,
            height: width * 0.26,
            borderRadius: width * 0.13,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.02) 68%, transparent 100%)',
          }}
        />
      ) : null}
    </>
  );
}