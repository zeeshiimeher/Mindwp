import { createElement } from 'react';
import { ImageResponse } from 'next/og';

import { OG_CANVAS } from '@/lib/seo/og/components/OGContainer';
import type { OGInput } from '@/lib/seo/og/contract';
import { getOGLayout } from '@/lib/seo/og/contract';
import { IndustryOGLayout } from '@/lib/seo/og/layouts/industry';
import { ServiceOGLayout } from '@/lib/seo/og/layouts/service';
import { StandardOGLayout } from '@/lib/seo/og/layouts/standard';

export function generateOGImage(input: OGInput): ImageResponse {
  const layout = getOGLayout(input.type);
  const element =
    layout === 'service-system'
      ? createElement(ServiceOGLayout, { input })
      : layout === 'industry-local'
        ? createElement(IndustryOGLayout, { input })
        : createElement(StandardOGLayout, { input });

  return new ImageResponse(element, {
    width: OG_CANVAS.width,
    height: OG_CANVAS.height,
  });
}
