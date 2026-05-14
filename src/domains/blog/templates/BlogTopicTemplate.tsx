/* Topic hub template.
   Groups posts matching a canonical topic into structured sections. */

import { ArrowRight, Calendar } from 'lucide-react';

import { SectionFrame } from '@/components/layout/SectionFrame';
import { getCategoryMetadata, type TopicHubSectionData } from '@/domains/blog/api';
import type { TopicMetadata } from '@/domains/blog/topicRegistry';

export type BlogTopicTemplateProps = {
  topic: TopicMetadata;
  sections: TopicHubSectionData[];
  totalPosts: number;
};

export function BlogTopicTemplate({ topic, sections, totalPosts }: BlogTopicTemplateProps) {
  return (
    <main>
      <SectionFrame
        ariaLabel={`${topic.name} topic hub`}
        tone='mist'
        heading={{
          eyebrow: `${totalPosts} ${totalPosts === 1 ? 'article' : 'articles'}`,
          title: topic.name,
          description: topic.description,
        }}
      >
        <a className='mw-btn mw-btn--secondary' href='/blog'>
          View all articles
        </a>
      </SectionFrame>

      {sections.length === 0 ? (
        <SectionFrame
          ariaLabel='No topic articles'
          tone='white'
          heading={{
            eyebrow: 'Articles',
            title: 'No articles published for this topic yet.',
            description: 'This topic will be filled as the blog library grows.',
          }}
        >
          <a className='mw-btn mw-btn--secondary' href='/blog'>
            Browse the blog
          </a>
        </SectionFrame>
      ) : (
        sections.map(section => (
          <SectionFrame
            key={section.key}
            ariaLabel={section.label}
            tone='white'
            heading={{
              eyebrow: 'Topic section',
              title: section.label,
              description: 'Related articles grouped by the same operating problem.',
            }}
          >
            <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
              {section.posts.map(post => {
                const catMeta = getCategoryMetadata(post.category);

                return (
                  <article
                    key={post.slug}
                    className='flex h-full flex-col rounded-[var(--mw-radius-xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-sm)]'
                  >
                    <p className='mw-text-eyebrow mw-text-signal-cyan'>
                      {catMeta?.name ?? post.category}
                    </p>

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
                );
              })}
            </div>
          </SectionFrame>
        ))
      )}
    </main>
  );
}
