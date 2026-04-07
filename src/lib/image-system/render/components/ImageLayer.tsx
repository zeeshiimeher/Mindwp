import type { OverlayDesignContext } from '../../types';

import { getIllustration } from '../illustrations/getIllustration';

export function ImageLayer({
  imageSrc,
  design,
}: {
  imageSrc: string | null;
  design: OverlayDesignContext;
}) {
  if (design.domain === 'case-studies') {
    return null;
  }

  if (design.visualMode === 'illustration') {
    return (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {getIllustration(design.illustration)}
      </div>
    );
  }

  if (!imageSrc) return null;

  return (
    <img
      src={imageSrc}
      alt=""
      width={1200}
      height={630}
      style={{
        position: 'absolute',
        inset: 0,
        objectFit: 'cover',
      }}
    />
  );
}