import { Suspense } from 'react';

import { RESOURCE_HUB_DATA } from '@/domains/resources/api';
import { ResourcesHub } from '@/domains/resources/pages/ResourcesHub';
import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata({
  title: RESOURCE_HUB_DATA.seo.title,
  description: RESOURCE_HUB_DATA.seo.description,
  path: RESOURCE_HUB_DATA.seo.canonical,
});

export default function Page() {
  return (
    <Suspense fallback={<div className='l-section' aria-hidden='true' />}>
      <ResourcesHub />
    </Suspense>
  );
}
