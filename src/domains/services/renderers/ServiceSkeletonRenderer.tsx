import { ArrowRight } from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame, type HeroFrameChip } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import type { ServicePageData } from '@/domains/services/types';
import { buildServiceContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

type SectionTone = 'mist' | 'white' | 'dark' | 'gradient-dark' | 'gradient-mist' | 'gradient-teal';
type SectionLayout = 'stack' | 'split';
type SectionRatio = '50-50' | '40-60' | '60-40';

type HeaderOnlySection = {
  header: {
    kicker?: string;
    title: string;
    description?: string;
  };
};

type FAQSkeletonItem = {
  id?: string;
  question: string;
  answer: string;
};

type FAQSkeletonSection = HeaderOnlySection & {
  items: FAQSkeletonItem[];
};

type SkeletonSections = Record<string, HeaderOnlySection | FAQSkeletonSection | undefined>;

export type ServiceSkeletonSection = {
  key: string;
  tone?: SectionTone;
  layout?: SectionLayout;
  ratio?: SectionRatio;
  className?: string;
};

type RenderServiceSkeletonPageOptions = {
  data: ServicePageData<Record<string, unknown>>;
  prefix: string;
  sections: readonly ServiceSkeletonSection[];
  faq?: boolean;
  faqTone?: 'mist' | 'white' | 'dark';
  faqVariant?: 'stacked' | 'split';
  heroChipDotVariant?: 'subtle' | 'warn' | 'risk' | 'neutral';
};

function hasFaq(
  section: HeaderOnlySection | FAQSkeletonSection | undefined
): section is FAQSkeletonSection {
  return Boolean(section && 'items' in section && Array.isArray(section.items));
}

function requireSection(
  sections: SkeletonSections,
  key: string,
  slug: string
): HeaderOnlySection | FAQSkeletonSection {
  const section = sections[key];

  if (!section?.header?.title) {
    throw new Error(`[${slug}] Missing skeleton section: ${key}`);
  }

  return section;
}

export function renderServiceSkeletonPage({
  data,
  prefix,
  sections: sectionOrder,
  faq = false,
  faqTone = 'white',
  faqVariant = 'stacked',
  heroChipDotVariant = 'subtle',
}: RenderServiceSkeletonPageOptions) {
  const primarySystem = data.systems[0];

  if (!primarySystem) {
    throw new Error(`[${data.slug}] Missing service system`);
  }

  const contactHref = buildServiceContactHref({ system: primarySystem, slug: data.slug });
  const sections = data.sections as SkeletonSections;
  const faqSection = sections.faq;

  return (
    <div className={`${prefix}-page`}>
      <HeroFrame
        className={`${prefix}-hero`}
        ariaLabel={data.hero.title}
        badge={data.hero.badge}
        title={data.hero.title}
        description={data.hero.description}
        actions={[
          {
            label: PRIMARY_CTA_LABEL,
            href: contactHref,
            variant: 'white',
            icon: <ArrowRight size={16} aria-hidden='true' />,
          },
        ]}
        chips={data.hero.list as readonly HeroFrameChip[] | undefined}
        chipDotVariant={heroChipDotVariant}
      />

      {sectionOrder.map(entry => {
        const section = requireSection(sections, entry.key, data.slug);

        return (
          <SectionFrame
            key={entry.key}
            heading={section.header}
            tone={entry.tone ?? 'white'}
            layout={entry.layout}
            ratio={entry.ratio}
            className={entry.className ?? `${prefix}-${entry.key}`}
            ariaLabel={section.header.title}
          >
            {/* Opus rebuild placeholder: design this section from approved services-plan.md. */}
          </SectionFrame>
        );
      })}

      {faq && hasFaq(faqSection) && (
        <FAQSection
          eyebrow={faqSection.header.kicker}
          title={faqSection.header.title}
          description={faqSection.header.description}
          items={faqSection.items.map((item, index) => ({
            id: item.id ?? `${data.slug}-faq-${index}`,
            question: item.question,
            answer: item.answer,
          }))}
          tone={faqTone}
          variant={faqVariant}
          className={`${prefix}-faq`}
          ariaLabel={faqSection.header.title}
        />
      )}

      <DecisionPanel
        className={`${prefix}-cta`}
        heading={data.cta.heading}
        actions={data.cta.actions}
        expectations={data.cta.expectations}
        reassurance={data.cta.footer}
      />
    </div>
  );
}
