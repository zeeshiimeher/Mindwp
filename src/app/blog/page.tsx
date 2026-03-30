import { Suspense } from 'react';

import { BLOG_LANDING_SEO } from '@/domains/blog/config';
import { BlogLanding } from '@/domains/blog/ui/BlogLanding';
import { buildMetadata } from '@/lib/seo/metadata';

export const dynamic = 'force-static';
export const revalidate = false;

export const metadata = buildMetadata(BLOG_LANDING_SEO);

export default function BlogPage() {
  return (
    <Suspense fallback={<div className='l-section' aria-hidden='true' />}>
      <BlogLanding />
    </Suspense>
  );
}
