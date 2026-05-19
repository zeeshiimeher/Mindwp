/* Blog-post UI template.
  Renders from provided props only; routing, slug lookup, and registries stay outside this file. */
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { SectionShell } from '@/components/layout/SectionShell';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { type Author, BLOG_AUTHORS, getCategoryMetadata } from '@/domains/blog/api';
import type { BlogCategory, BlogPostSection } from '@/domains/blog/types';
import { BlogPostShareIsland } from '@/domains/blog/ui/BlogPostShareIsland';
import { buildContactHref } from '@/lib/contact/contactHref';
import type { ActiveSystem } from '@/lib/content-graph/canonical';
import { buildFaqSchema } from '@/lib/schema/buildFaqSchema';

export interface BlogPostTemplateProps {
  pageId: string;
  title: string;
  slug: string;
  category: BlogCategory;
  publishDate: string;
  readTime?: string;
  author?: {
    name: string;
    role: string;
    initials: string;
  };
  sections: BlogPostSection[];
  tags?: string[];
  primarySystem?: ActiveSystem;
  supportingSystems?: ActiveSystem[];
  featuredImage?: string | null;
}

type AuthorInfo = NonNullable<BlogPostTemplateProps['author']>;

const RENDERABLE_BLOG_SECTION_TYPES = new Set<BlogPostSection['type']>([
  'introduction',
  'content',
  'cta',
  'callout',
  'takeaways',
  'quote',
  'steps',
  'checklist',
  'image',
  'faq',
]);

const AUTHOR_KEYS_BY_CATEGORY: Record<BlogCategory, Array<keyof typeof BLOG_AUTHORS>> = {
  'website-clarity': ['TECHNICAL'],
  'lead-response': ['TECHNICAL'],
  'local-visibility': ['EDITORIAL'],
  'follow-up-crm': ['TECHNICAL'],
  'reviews-proof': ['EDITORIAL'],
  'implementation-services': ['TECHNICAL'],
  'home-services-examples': ['INDUSTRY'],
  'healthcare-practice-examples': ['INDUSTRY'],
  frameworks: ['EDITORIAL'],
};

function getAuthorForCategory(category: BlogCategory): AuthorInfo | undefined {
  const candidateKeys = AUTHOR_KEYS_BY_CATEGORY[category];
  const firstKey = candidateKeys?.[0];
  const selected: Author | undefined = firstKey ? BLOG_AUTHORS[firstKey] : undefined;

  if (!selected) return undefined;

  return {
    name: selected.name,
    role: selected.role,
    initials: selected.initials,
  };
}

function normalizeCalloutText(text: string): string {
  return text
    .replace(/^\s*💡\s*/u, '')
    .replace(/^\s*pro\s*tip\s*:\s*/i, '')
    .trim();
}

function estimateReadTimeFromContent(sections: BlogPostSection[]): string {
  const wordsFromText = (text: string) => (text.match(/[\p{L}\p{N}']+/gu) ?? []).length;

  let text = '';

  sections.forEach(section => {
    switch (section.type) {
      case 'introduction':
        text += (section.content ?? []).join(' ') + ' ';
        break;

      case 'content': {
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        if (section.list) text += section.list.join(' ') + ' ';
        if (section.callout) text += section.callout + ' ';
        break;
      }

      case 'takeaways': {
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        text += (section.items ?? []).join(' ') + ' ';
        break;
      }

      case 'quote':
        text += section.quote + ' ';
        if (section.attribution) text += section.attribution + ' ';
        break;

      case 'steps':
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        text +=
          (section.steps ?? []).map(step => `${step.label} ${step.description ?? ''}`).join(' ') +
          ' ';
        break;

      case 'checklist':
        if (typeof section.content === 'string') text += section.content + ' ';
        if (Array.isArray(section.content)) text += section.content.join(' ') + ' ';
        text += (section.items ?? []).join(' ') + ' ';
        break;

      case 'image':
        if (section.caption) text += section.caption + ' ';
        break;

      case 'faq':
        text += (section.items ?? []).map(item => `${item.question} ${item.answer}`).join(' ');
        text += ' ';
        break;

      case 'callout':
        text += section.callout + ' ';
        break;

      case 'cta':
      default:
        break;
    }
  });

  const totalWords = wordsFromText(text);
  const minutes = Math.max(1, Math.round(totalWords / 200));
  return `${minutes} min read`;
}

export function validateRenderableBlogSection(section: BlogPostSection) {
  if (!RENDERABLE_BLOG_SECTION_TYPES.has(section.type)) return false;

  switch (section.type) {
    case 'introduction':
      return Array.isArray(section.content) && section.content.length > 0;
    case 'content':
      return Boolean(
        section.heading &&
        (typeof section.content === 'string' ||
          (Array.isArray(section.content) && section.content.length > 0))
      );
    case 'callout':
      return Boolean(section.callout);
    case 'takeaways':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'quote':
      return Boolean(section.quote);
    case 'steps':
      return Array.isArray(section.steps) && section.steps.length > 0;
    case 'checklist':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'image':
      return Boolean(section.src && section.alt);
    case 'faq':
      return Array.isArray(section.items) && section.items.length > 0;
    case 'cta':
      return Boolean(section.heading && section.content);
    default:
      return false;
  }
}

export function getBlogRenderedSectionTypes(sections: BlogPostSection[]) {
  return sections.filter(validateRenderableBlogSection).map(section => section.type);
}

export function BlogPostTemplate({
  pageId,
  title,
  slug,
  category,
  publishDate,
  readTime,
  author,
  sections,
  tags = [],
  primarySystem,
}: BlogPostTemplateProps) {
  const effectiveReadTime = readTime || estimateReadTimeFromContent(sections);
  const effectiveAuthor = author || getAuthorForCategory(category);
  const categoryMeta = getCategoryMetadata(category);
  const categoryLabel = categoryMeta?.name ?? category;
  const resolvedPrimarySystem = primarySystem ?? 'smart-website-systems';
  const articleSections = sections.filter(validateRenderableBlogSection);
  const faqItems = sections.flatMap(section => (section.type === 'faq' ? section.items : []));
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <CTARegistryProvider pageId={pageId} pageType='blog' primarySystem={resolvedPrimarySystem}>
      <main>
        <SectionShell
          ariaLabel={title}
          tone='mist'
          heading={{
            eyebrow: categoryLabel,
            title,
            description:
              'A practical breakdown for service businesses building clearer systems around visibility, enquiries, follow-up, and proof.',
          }}
        >
          <div className='flex flex-wrap items-center gap-3'>
            <a className='mw-btn mw-btn--secondary' href='/blog'>
              <ArrowLeft size={14} aria-hidden='true' />
              <span>Back to Blog</span>
            </a>
            <span className='inline-flex items-center gap-2 rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
              <Calendar size={14} aria-hidden='true' />
              <span>{publishDate}</span>
            </span>
            {effectiveReadTime ? (
              <span className='inline-flex items-center gap-2 rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                <Clock size={14} aria-hidden='true' />
                <span>{effectiveReadTime}</span>
              </span>
            ) : null}
            {effectiveAuthor ? (
              <span className='inline-flex items-center gap-2 rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                <User size={14} aria-hidden='true' />
                <span>{effectiveAuthor.name}</span>
              </span>
            ) : null}
          </div>
        </SectionShell>

        <SectionShell
          ariaLabel='Article content'
          tone='white'
          heading={{
            eyebrow: 'Article',
            title: 'Read the breakdown',
            description:
              'This clean blog renderer keeps the content visible while the final blog design system is rebuilt.',
          }}
        >
          <div className='grid gap-5'>
            {articleSections.map((section, index) => (
              <BlogArticleSection
                key={`${section.type}-${index}`}
                section={section}
                index={index}
              />
            ))}
          </div>

          {tags.length > 0 ? (
            <div className='mt-8 flex flex-wrap gap-2'>
              {tags.map(tag => (
                <span
                  key={tag}
                  className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          <div className='mt-8'>
            <BlogPostShareIsland title={title} />
          </div>
        </SectionShell>

        <DecisionPanel
          heading={{
            eyebrow: 'Next step',
            title: 'Turn the article into a clear first move.',
            description:
              'If this article named a real bottleneck, the next step is to decide what should be fixed first.',
          }}
          actions={[
            {
              label: 'Request a System Review',
              href: buildContactHref({
                system: resolvedPrimarySystem,
                sourceType: 'blog',
                slug,
              }),
            },
          ]}
          expectations={[
            { num: '01', text: 'What problem the article points to' },
            { num: '02', text: 'Where the leak appears in your business' },
            { num: '03', text: 'What to fix first' },
          ]}
          reassurance={{ noSell: 'No hard sell.', tone: 'Practical conversation' }}
        />

        {faqSchema ? (
          <script
            id='faq-jsonld'
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        ) : null}
      </main>
    </CTARegistryProvider>
  );
}

function BlogArticleSection({ section, index }: { section: BlogPostSection; index: number }) {
  switch (section.type) {
    case 'introduction':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Introduction</p>
          <h3>Context</h3>
          <div className='grid gap-3'>
            {section.content.map((paragraph, paragraphIndex) => (
              <p key={`intro-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
        </article>
      );

    case 'content':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Section {index + 1}</p>
          <h3>{section.heading}</h3>
          {renderContentValue(section.content)}
          {section.list && section.list.length > 0 ? (
            <ul className='mt-4 grid gap-3'>
              {section.list.map(item => (
                <li key={item} className='mw-surface-panel p-4'>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          {section.callout ? <CalloutBlock text={section.callout} /> : null}
        </article>
      );

    case 'callout':
      return <CalloutBlock text={section.callout} />;

    case 'takeaways':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Takeaways</p>
          <h3>{section.heading ?? 'Key takeaways'}</h3>
          {renderContentValue(section.content)}
          <ul className='mt-4 grid gap-3'>
            {section.items.map(item => (
              <li key={item} className='mw-surface-panel p-4'>
                {item}
              </li>
            ))}
          </ul>
        </article>
      );

    case 'quote':
      return (
        <blockquote className='mw-surface-card-soft p-6'>
          {section.heading ? (
            <p className='mw-text-eyebrow mw-text-signal-cyan'>{section.heading}</p>
          ) : null}
          <p>{section.quote}</p>
          {section.attribution ? (
            <footer className='mw-text-secondary'>— {section.attribution}</footer>
          ) : null}
        </blockquote>
      );

    case 'steps':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Steps</p>
          <h3>{section.heading ?? 'Steps'}</h3>
          {renderContentValue(section.content)}
          <ol className='mt-4 grid gap-3'>
            {section.steps.map(step => (
              <li key={step.label} className='mw-surface-panel p-4'>
                <strong>{step.label}</strong>
                {step.description ? <p>{step.description}</p> : null}
              </li>
            ))}
          </ol>
        </article>
      );

    case 'checklist':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Checklist</p>
          <h3>{section.heading ?? 'Checklist'}</h3>
          {renderContentValue(section.content)}
          <ul className='mt-4 grid gap-3'>
            {section.items.map(item => (
              <li key={item} className='mw-surface-panel p-4'>
                {item}
              </li>
            ))}
          </ul>
        </article>
      );

    case 'image':
      return (
        <figure className='mw-surface-card p-6'>
          {section.heading ? (
            <p className='mw-text-eyebrow mw-text-signal-cyan'>{section.heading}</p>
          ) : null}
          <img
            src={section.src}
            alt={section.alt}
            className='w-full rounded-[var(--mw-radius-lg)]'
          />
          {section.caption ? (
            <figcaption className='mt-3 mw-text-body-sm mw-text-secondary'>
              {section.caption}
            </figcaption>
          ) : null}
        </figure>
      );

    case 'faq':
      return (
        <article className='mw-surface-card p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>FAQ</p>
          <h3>Frequently Asked Questions</h3>
          <dl className='grid gap-4'>
            {section.items.map(item => (
              <div key={item.question}>
                <dt>
                  <strong>{item.question}</strong>
                </dt>
                <dd>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </article>
      );

    case 'cta':
      return (
        <article className='mw-surface-card-soft p-6'>
          <p className='mw-text-eyebrow mw-text-signal-cyan'>Next step</p>
          <h3>{section.heading}</h3>
          <p>{section.content}</p>
        </article>
      );

    default:
      return null;
  }
}

function renderContentValue(content: string | string[] | undefined) {
  if (!content) return null;

  if (typeof content === 'string') return <p>{content}</p>;

  return (
    <div className='grid gap-3'>
      {content.map((paragraph, index) => (
        <p key={`paragraph-${index}`}>{paragraph}</p>
      ))}
    </div>
  );
}

function CalloutBlock({ text }: { text: string }) {
  return (
    <aside className='mw-surface-card-soft p-6'>
      <p className='mw-text-eyebrow mw-text-signal-cyan'>Note</p>
      <p>{normalizeCalloutText(text)}</p>
    </aside>
  );
}
