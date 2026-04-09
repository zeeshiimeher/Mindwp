import { Suspense } from 'react';

import { BlogLanding } from '@/domains/blog/ui/BlogLanding';
import { getInventoryMetadata } from '@/lib/content-quality/inventory';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return getInventoryMetadata('/blog');
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className='l-section' aria-hidden='true' />}>
      <BlogLanding />
    </Suspense>
  );
}
