import { Suspense } from 'react';

import { BlogLanding } from '@/domains/blog/ui/BlogLanding';
import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { resolveSEO } from '@/lib/seo/seoResolver';

export const dynamic = 'force-static';
export const revalidate = false;

export async function generateMetadata() {
  return resolveSEO({ path: '/blog', type: 'blog-index', slug: 'blog' });
}

export default async function BlogPage() {
  await ensureGraphInitialized();

  return (
    <Suspense fallback={<div className='l-section' aria-hidden='true' />}>
      <BlogLanding />
    </Suspense>
  );
}
