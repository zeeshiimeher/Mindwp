import type { OverlayDesignContext } from '../../types';

function illustrationScene(design: OverlayDesignContext) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: -40,
          top: 40,
          width: 760,
          height: 760,
          borderRadius: 999,
          background: `radial-gradient(circle, ${design.palette.accent}24 0%, rgba(255, 255, 255, 0.06) 34%, rgba(255, 255, 255, 0.01) 68%, rgba(255, 255, 255, 0) 100%)`,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 120,
          top: 84,
          width: 440,
          height: 560,
          borderRadius: 40,
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.03) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 88,
          top: 112,
          width: 560,
          height: 340,
          borderRadius: 28,
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.08) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 28px 60px rgba(0, 0, 0, 0.28)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 124,
          top: 144,
          width: 484,
          height: 58,
          borderRadius: 18,
          background: 'rgba(255, 255, 255, 0.2)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 144,
          top: 230,
          width: 198,
          height: 164,
          borderRadius: 20,
          background: 'rgba(255, 255, 255, 0.18)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 360,
          top: 226,
          width: 208,
          height: 86,
          borderRadius: 18,
          background: `${design.palette.accent}aa`,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 360,
          top: 332,
          width: 208,
          height: 62,
          borderRadius: 18,
          background: 'rgba(255, 255, 255, 0.16)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 174,
          top: 432,
          width: 356,
          height: 22,
          borderRadius: 999,
          background: `${design.palette.accent}66`,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 186,
          top: 430,
          width: 320,
          height: 18,
          borderRadius: 999,
          background: 'rgba(255, 255, 255, 0.14)',
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 230,
          top: 468,
          width: 148,
          height: 148,
          borderRadius: 999,
          background: `radial-gradient(circle, ${design.palette.accent}bb 0%, rgba(255, 255, 255, 0.12) 58%, rgba(255, 255, 255, 0.03) 100%)`,
        }}
      />
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          right: 412,
          top: 494,
          width: 142,
          height: 92,
          borderRadius: 24,
          background: 'rgba(255, 255, 255, 0.14)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
        }}
      />
      {design.treatment === 'highlight' ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: 108,
            top: 124,
            width: 510,
            height: 308,
            borderRadius: 24,
            border: `2px solid ${design.palette.accent}66`,
          }}
        />
      ) : null}
    </>
  );
}

export function ImageLayer({
  imageSrc,
  design,
}: {
  imageSrc: string | null;
  design: OverlayDesignContext;
}) {
  if (design.visualMode === 'illustration') {
    return illustrationScene(design);
  }

  if (!imageSrc) return null;

  return (
    <>
      <img
        src={imageSrc}
        alt=""
        width={1600}
        height={900}
        style={{
          position: 'absolute',
          inset: 0,
          objectFit: 'cover',
        }}
      />
      {design.treatment === 'highlight' ? (
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: 88,
            top: 96,
            width: 440,
            height: 708,
            borderRadius: 28,
            border: `2px solid ${design.palette.accent}55`,
            boxShadow: `0 0 0 1px ${design.palette.accent}22 inset`,
          }}
        />
      ) : null}
    </>
  );
}