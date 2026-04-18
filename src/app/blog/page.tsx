import { Suspense } from 'react';

import { BlogLanding } from '@/domains/blog/ui/BlogLanding';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/blog');
}

export default async function BlogPage() {
  await ensureGraphInitialized();

  return (
    <Suspense fallback={<div className='l-section' aria-hidden='true' />}>
      <BlogLanding />
    </Suspense>
  );
}
