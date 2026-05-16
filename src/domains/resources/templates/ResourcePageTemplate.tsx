import { ArrowRight } from 'lucide-react';

import { SectionShell } from '@/components/layout/SectionShell';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { categories } from '@/domains/resources/api';
import type { ResourceCategory } from '@/domains/resources/types';
import { formatIsoDate, isRecentIsoDate } from '@/domains/resources/utils/dates';
import { buildContactHref } from '@/lib/contact/contactHref';

import type { ResourcePageTemplateSection } from './types';
export type { ResourcePageTemplateSection } from './types';

export type ResourcePageTemplateProps = {
  pageId: string;
  url: string;
  title: string;
  description: string;
  category: ResourceCategory;
  publishedAt: string;
  updatedAt?: string;
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    noindex?: boolean;
    nofollow?: boolean;
    twitterCard?: string;
    twitterTitle?: string;
    twitterDescription?: string;
    twitterImage?: string;
  };
  openGraph?: {
    type?: string;
    title?: string;
    description?: string;
    image?: string;
  };
  featuredImage?: string | null;
  schema?: {
    type: 'Article' | 'Guide' | 'HowTo';
    headline?: string;
    description?: string;
  };
  sections: ResourcePageTemplateSection[];
  systems?: string[];
  currentSlug: string;
};

export function validateRenderableResourceSection(section: ResourcePageTemplateSection) {
  if (section.type === 'hero' || section.type === 'sidebar-cta') return false;

  return true;
}

export function getResourceRenderedSectionTypes(sections: ResourcePageTemplateSection[]) {
  const hasHero = sections.some(section => section.type === 'hero');
  const rendered = sections.filter(validateRenderableResourceSection).map(section => section.type);

  return hasHero ? ['hero', ...rendered] : rendered;
}

export default function ResourcePageTemplate(props: ResourcePageTemplateProps) {
  const categoryMeta = categories.find(cat => cat.id === props.category);
  const categoryLabel = categoryMeta?.label || props.category;
  const categorySlug = categoryMeta?.slug || String(props.category);
  const lastChanged = props.updatedAt ?? props.publishedAt;
  const freshnessBadge = isRecentIsoDate(lastChanged, 60)
    ? props.updatedAt
      ? 'Updated'
      : 'New'
    : null;
  const dateLabel = props.updatedAt ? 'Updated' : 'Published';
  const primarySystem = props.systems?.[0] ?? 'smart-website-systems';
  const mainSections = props.sections.filter(validateRenderableResourceSection);

  return (
    <CTARegistryProvider pageId={props.pageId} pageType='resource' primarySystem={primarySystem}>
      <main>
        <SectionShell
          ariaLabel={props.title}
          tone='mist'
          heading={{
            eyebrow: categoryLabel,
            title: props.title,
            description: props.description,
          }}
        >
          <div className='flex flex-wrap items-center gap-3'>
            <a className='mw-btn mw-btn--secondary' href='/resources'>
              Resources
            </a>
            <a className='mw-btn mw-btn--secondary' href={`/resources/category/${categorySlug}`}>
              {categoryLabel}
            </a>
            <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
              {dateLabel}: {formatIsoDate(lastChanged)}
            </span>
            {freshnessBadge ? (
              <span className='rounded-full border border-[var(--mw-border-light)] px-3 py-1 mw-text-body-sm'>
                {freshnessBadge}
              </span>
            ) : null}
          </div>
        </SectionShell>

        {mainSections.length > 0 ? (
          <SectionShell
            ariaLabel='Resource guide content'
            tone='white'
            heading={{
              eyebrow: 'Guide',
              title: 'Read the practical breakdown',
              description:
                'This is a clean base resource renderer. Full resource layouts can be rebuilt later without depending on the old reusable section system.',
            }}
          >
            <div className='grid gap-5'>
              {mainSections.map((section, index) => (
                <GenericResourceSection
                  key={`${section.type}-${index}`}
                  section={section}
                  index={index}
                />
              ))}
            </div>
          </SectionShell>
        ) : null}

        <SectionShell
          ariaLabel='Resource next step'
          tone='mist'
          heading={{
            eyebrow: 'Next step',
            title: 'Turn the resource into a clear first move.',
            description:
              'If this guide named a real leak in the business, the next step is to decide what should be fixed first.',
          }}
        >
          <a
            className='mw-btn mw-btn--primary'
            href={buildContactHref({
              system: primarySystem,
              sourceType: 'resource',
              slug: props.currentSlug,
            })}
          >
            <span>Start a Conversation</span>
            <ArrowRight size={14} aria-hidden='true' />
          </a>
        </SectionShell>
      </main>
    </CTARegistryProvider>
  );
}

function GenericResourceSection({
  section,
  index,
}: {
  section: ResourcePageTemplateSection;
  index: number;
}) {
  const heading = getSectionHeading(section, index);
  const description = getSectionDescription(section);
  const paragraphs = getSectionParagraphs(section);
  const items = getSectionItems(section);

  return (
    <article className='mw-surface-card p-6'>
      <p className='mw-text-eyebrow mw-text-signal-cyan'>{formatSectionType(section.type)}</p>
      <h3>{heading}</h3>
      {description ? <p>{description}</p> : null}

      {paragraphs.length > 0 ? (
        <div className='grid gap-3'>
          {paragraphs.map((paragraph, paragraphIndex) => (
            <p key={`${section.type}-paragraph-${paragraphIndex}`}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {items.length > 0 ? (
        <ul className='mt-4 grid gap-3'>
          {items.map((item, itemIndex) => (
            <li
              key={`${section.type}-item-${itemIndex}`}
              className='rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] p-4'
            >
              {renderResourceItem(item)}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

function getSectionHeading(section: ResourcePageTemplateSection, index: number) {
  if (typeof section.heading === 'string') return section.heading;
  if (typeof section.title === 'string') return section.title;
  if (typeof section.question === 'string') return section.question;

  return `Section ${index + 1}`;
}

function getSectionDescription(section: ResourcePageTemplateSection) {
  if (typeof section.description === 'string') return section.description;
  if (typeof section.subheading === 'string') return section.subheading;
  if (typeof section.content === 'string') return section.content;

  return undefined;
}

function getSectionParagraphs(section: ResourcePageTemplateSection) {
  const paragraphs: string[] = [];

  for (const key of ['content', 'description', 'paragraphs', 'body']) {
    const value = section[key];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (typeof item === 'string') paragraphs.push(item);
      }
    }
  }

  return paragraphs;
}

function getSectionItems(section: ResourcePageTemplateSection) {
  for (const key of ['items', 'steps', 'solutions', 'resources']) {
    const value = section[key];
    if (Array.isArray(value)) return value;
  }

  return [];
}

function renderResourceItem(item: unknown) {
  if (typeof item === 'string') return <span>{item}</span>;

  if (item && typeof item === 'object') {
    const record = item as Record<string, unknown>;
    const title =
      getString(record.title) ??
      getString(record.heading) ??
      getString(record.question) ??
      getString(record.label);
    const text =
      getString(record.description) ??
      getString(record.content) ??
      getString(record.answer) ??
      getString(record.text);
    const href = getString(record.href) ?? getString(record.url);

    return (
      <div>
        {title ? <strong>{title}</strong> : null}
        {text ? <p>{text}</p> : null}
        {href ? (
          <a className='link-primary' href={href}>
            Read more
          </a>
        ) : null}
      </div>
    );
  }

  return <span>{String(item)}</span>;
}

function getString(value: unknown) {
  return typeof value === 'string' ? value : undefined;
}

function formatSectionType(type: string) {
  return type.replaceAll('-', ' ');
}
