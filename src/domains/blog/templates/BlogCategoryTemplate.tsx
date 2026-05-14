import { ArrowRight, Calendar } from 'lucide-react';

import { SectionFrame } from '@/components/layout/SectionFrame';
import type { BlogPostListItem } from '@/domains/blog/api';

export type BlogCategoryTemplateProps = {
  title: string;
  description: string;
  articleCount: number;
  posts: BlogPostListItem[];
};

export function BlogCategoryTemplate({
  title,
  description,
  articleCount,
  posts,
}: BlogCategoryTemplateProps) {
  return (
    <main>
      <SectionFrame
        ariaLabel={`${title} blog category`}
        tone='mist'
        heading={{
          eyebrow: `${articleCount} articles`,
          title,
          description,
        }}
      >
        <a className='mw-btn mw-btn--secondary' href='/blog'>
          View all articles
        </a>
      </SectionFrame>

      <SectionFrame
        ariaLabel='Latest category articles'
        tone='white'
        heading={{
          eyebrow: 'Latest articles',
          title: 'Latest Articles',
          description:
            'Practical writing for service businesses building clearer systems around visibility, enquiries, follow-up, and proof.',
        }}
      >
        {posts.length === 0 ? (
          <p className='text-center mw-text-secondary'>No articles published yet.</p>
        ) : (
          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map(post => (
              <article
                key={post.slug}
                className='flex h-full flex-col rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'
              >
                <h3>{post.title}</h3>
                <p>{post.seo.description}</p>

                <div className='mt-4 flex items-center gap-2 mw-text-body-sm mw-text-secondary'>
                  <Calendar size={14} aria-hidden='true' />
                  <span>{post.publishDate}</span>
                </div>

                <div className='mt-auto pt-5'>
                  <a href={`/blog/${post.slug}`} className='mw-btn mw-btn--secondary'>
                    <span>Read article</span>
                    <ArrowRight size={14} aria-hidden='true' />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </SectionFrame>
    </main>
  );
}
