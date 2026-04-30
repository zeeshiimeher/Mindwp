import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import {
  AccordionFAQSection,
  BeforeAfterSection,
  FitCheckSection,
  GridCardsSection,
  type HeroSplitMetric,
  HeroSplitSection,
  ImageStorySection,
  LayerStackSection,
  PrimaryCTASection,
  ProcessStepsSection,
  ProofStorySection,
  type SectionIconKey,
} from '@/components/sections';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import type { ServicePageSections } from '@/domains/services/types';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug[
    | 'smart-website-systems'
    | 'service-pages-vs-one-generic-services-page'];
  slug: string;
}

const HERO_MOCKUP_ROWS: readonly HeroSplitMetric[] = [
  { label: 'Roof repair · Mark T.', value: 'Assigned', status: 'good' },
  { label: 'Quote request · Sara P.', value: 'Follow-up', status: 'warn' },
  { label: 'Booking · Lina R.', value: 'Confirmed', status: 'good' },
  { label: 'Old enquiry · Tom W.', value: 'Lost', status: 'risk' },
];

const VALUE_ICON_KEYS: readonly SectionIconKey[] = [
  'alert',
  'inbox',
  'phone',
  'clock',
  'message',
  'eye',
];

const PROOF_ICON_KEYS: readonly SectionIconKey[] = ['minus', 'sparkles', 'check'];

const FLOW_ICON_KEYS: readonly SectionIconKey[] = [
  'compass',
  'workflow',
  'check-circle',
  'trending',
];

const LAYER_ICON_KEYS: readonly SectionIconKey[] = ['target', 'search', 'route', 'repeat'];

const TYPE_ICON_KEYS: readonly SectionIconKey[] = ['building', 'database', 'clock', 'target'];

const SIZE_ICON_KEYS: readonly SectionIconKey[] = ['users', 'building', 'trending'];

const CONCERN_ICON_KEYS: readonly SectionIconKey[] = [
  'shield',
  'eye',
  'sparkles',
  'check-circle',
  'message',
];

const TECH_ICON_KEYS: readonly SectionIconKey[] = [
  'database',
  'workflow',
  'shield',
  'line-chart',
  'sparkles',
  'zap',
];

export default function SmartWebsiteSystemsRenderer({ data, slug }: Props) {
  const optionalSections = data.sections as ServicePageSections;

  const ctaKicker = 'kicker' in data.cta ? data.cta.kicker : undefined;
  const ctaTitle = data.cta.title;
  const ctaDescription = data.cta.description;
  const contactHref = buildContactHref({
    system: slug,
    sourceType: 'page',
    slug,
  });

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          {/* Hero Section */}
          <HeroSplitSection
            variant='operations'
            kicker={data.hero.badge}
            heading={{ title: data.hero.title, description: data.hero.description }}
            chips={data.hero.list}
            actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
            visual={{
              brand: 'mindwp · operations',
              title: 'Live enquiry feed',
              subtitle: 'Last 24 hours · auto-routed',
              rows: HERO_MOCKUP_ROWS,
              footerPrimary: 'auto-assigned · CRM logged',
              footerSecondary: 'uptime 99.98%',
            }}
          />

          {/* Value Blocks */}
          {data.sections.value && (
            <GridCardsSection
              variant='diagnostic-grid'
              tone='soft'
              columns={3}
              heading={{
                kicker: 'Where it leaks',
                title: data.sections.value.header.title,
                description: data.sections.value.header.description,
              }}
              items={data.sections.value.items.map((block, index) => ({
                title: block.title,
                description: block.description,
                iconKey: VALUE_ICON_KEYS[index % VALUE_ICON_KEYS.length],
              }))}
            />
          )}
          {/* Before/After Comparison */}
          {data.sections.comparison &&
            (() => {
              const before = data.sections.comparison.items.find(item => item.type === 'before');
              const after = data.sections.comparison.items.find(item => item.type === 'after');
              if (!before || !after) return null;
              return (
                <BeforeAfterSection
                  variant='split-panel'
                  heading={{
                    kicker: 'Broken vs fixed',
                    title: data.sections.comparison.header.title,
                    description: data.sections.comparison.header.description,
                  }}
                  before={{
                    label: 'Today',
                    title: before.title,
                    items: before.items,
                  }}
                  after={{
                    label: 'Connected',
                    title: after.title,
                    items: after.items,
                  }}
                />
              );
            })()}
          {/* What's Included */}
          {data.sections.included && (
            <GridCardsSection
              variant='feature-grid'
              tone='light'
              columns={2}
              heading={{
                kicker: "What's in scope",
                title: data.sections.included.header.title,
                description: data.sections.included.header.description,
              }}
              items={data.sections.included.items.map((item, index) => ({
                id: `included-${index}`,
                iconKey: 'check-circle' as SectionIconKey,
                title: item,
                status: 'good' as const,
              }))}
            />
          )}

          {/* Implementation Types */}
          {data.sections.types && (
            <GridCardsSection
              variant='signal-board'
              tone='soft'
              columns={4}
              heading={{
                kicker: 'Built for',
                title: data.sections.types.header.title,
                description: data.sections.types.header.description,
              }}
              items={data.sections.types.items.map((type, index) => ({
                id: `type-${index}`,
                iconKey: TYPE_ICON_KEYS[index % TYPE_ICON_KEYS.length],
                title: type.title,
                description: type.description,
                badge: Array.isArray(type.points) ? type.points.join(', ') : undefined,
              }))}
            />
          )}

          {data.sections.coreLayer && (
            <LayerStackSection
              variant='interactive-stack'
              heading={{
                kicker: 'System layers',
                title: data.sections.coreLayer.header.title,
                description: data.sections.coreLayer.header.description,
              }}
              layers={data.sections.coreLayer.cards.map((card, index) => ({
                key: `layer-${index}`,
                index: String(index + 1).padStart(2, '0'),
                iconKey: LAYER_ICON_KEYS[index % LAYER_ICON_KEYS.length],
                title: card.title,
                summary: card.description,
                bullets: card.points,
              }))}
            />
          )}

          {data.sections.proof &&
            (() => {
              const before = data.sections.proof.cards[0];
              const change = data.sections.proof.cards[1];
              const after = data.sections.proof.cards[2];
              if (!before || !change || !after) return null;
              return (
                <ProofStorySection
                  variant='before-change-after'
                  tone='soft'
                  heading={{
                    kicker: 'Real outcome',
                    title: data.sections.proof.header.title,
                    description: data.sections.proof.header.description,
                  }}
                  before={{
                    label: 'Before',
                    title: before.title,
                    body: before.description,
                    iconKey: PROOF_ICON_KEYS[0],
                  }}
                  change={{
                    label: 'What changed',
                    title: change.title,
                    body: change.description,
                    iconKey: PROOF_ICON_KEYS[1],
                  }}
                  after={{
                    label: 'After',
                    title: after.title,
                    body: after.description,
                    iconKey: PROOF_ICON_KEYS[2],
                  }}
                />
              );
            })()}

          {/* Strategic Bridge */}
          {data.sections.visibilityFoundations && (
            <ImageStorySection
              variant='operational-photo'
              tone='light'
              heading={{
                kicker: 'Compounding effect',
                title: data.sections.visibilityFoundations.header.title,
                description: data.sections.visibilityFoundations.header.description,
              }}
              body={data.sections.visibilityFoundations.narrativeParagraphs?.[0]}
              bullets={data.sections.visibilityFoundations.items.map(item => item.title)}
              highlights={data.sections.visibilityFoundations.alternatingItems
                .slice(0, 3)
                .map(item => ({
                  label: item.title,
                  value: item.points?.[0] ?? '',
                }))}
              image={{
                src: '/images/services/smart-website-systems.webp',
                alt: 'Operations dashboard view of a smart website system',
                width: 960,
                height: 720,
              }}
              caption={data.sections.visibilityFoundations.tagline}
            />
          )}

          {/* NEW: Benefits by Business Size */}
          {optionalSections.businessSizes && (
            <GridCardsSection
              variant='feature-grid'
              tone='light'
              columns={3}
              heading={{
                kicker: 'By business size',
                title: optionalSections.businessSizes.header.title,
                description: optionalSections.businessSizes.header.description,
              }}
              items={optionalSections.businessSizes.items.map((size, index) => ({
                id: `size-${index}`,
                iconKey: SIZE_ICON_KEYS[index % SIZE_ICON_KEYS.length],
                title: size.title,
                description: size.description,
                badge: size.benefit,
              }))}
            />
          )}

          {/* How It Works */}
          {data.sections.process && (
            <ProcessStepsSection
              variant='timeline'
              tone='light'
              heading={{
                kicker: data.sections.process.header.badge ?? 'How it works',
                title: data.sections.process.header.title,
                description: data.sections.process.header.description,
              }}
              steps={data.sections.process.steps.map((step, index) => ({
                index: step.number,
                title: step.title,
                description: step.description,
                iconKey: FLOW_ICON_KEYS[index % FLOW_ICON_KEYS.length],
              }))}
            />
          )}

          {/* NEW: Common Concerns Addressed */}
          {optionalSections.concerns && (
            <GridCardsSection
              variant='diagnostic-grid'
              tone='soft'
              columns={2}
              heading={{
                kicker: 'Common concerns',
                title: optionalSections.concerns.header.title,
                description: optionalSections.concerns.header.description,
              }}
              items={optionalSections.concerns.items.map((item, index) => ({
                id: `concern-${index}`,
                iconKey: CONCERN_ICON_KEYS[index % CONCERN_ICON_KEYS.length],
                title: item.title,
                description: item.description,
              }))}
            />
          )}

          {/* Technologies Used */}
          {optionalSections.technologies && (
            <GridCardsSection
              variant='signal-board'
              tone='light'
              columns={3}
              heading={{
                kicker: 'Stack',
                title: optionalSections.technologies.header.title,
                description: optionalSections.technologies.header.description,
              }}
              items={optionalSections.technologies.items.map((tech, index) => ({
                id: `tech-${index}`,
                iconKey: TECH_ICON_KEYS[index % TECH_ICON_KEYS.length],
                title: tech.name,
                description: tech.description,
              }))}
            />
          )}

          {/* Qualification Section */}
          {optionalSections.qualification && (
            <FitCheckSection
              variant='two-column'
              tone='light'
              heading={{
                kicker: 'Fit check',
                title: optionalSections.qualification.header.title,
                description: optionalSections.qualification.header.description,
              }}
              good={{
                label: 'Strong fit',
                title: optionalSections.qualification.strongFitTitle,
                items: optionalSections.qualification.strongFit.map(item => ({
                  text: item.title,
                  note: item.description,
                })),
              }}
              not={{
                label: 'Probably not for you',
                title: optionalSections.qualification.notForTitle,
                items: optionalSections.qualification.notFor.map(item => ({
                  text: item.title,
                  note: item.description,
                })),
              }}
            />
          )}

          {/* FAQ Section */}
          {data.sections.faq && (
            <AccordionFAQSection
              variant='single-column'
              tone='soft'
              heading={{
                kicker: 'FAQ',
                title: data.sections.faq.header.title,
                description: data.sections.faq.header.description,
              }}
              items={data.sections.faq.items.map((item, index) => ({
                id: `smart-websites-faq-${index}`,
                question: item.question,
                answer: item.answer,
              }))}
            />
          )}

          <PrimaryCTASection
            variant='soft-panel'
            heading={{
              kicker: ctaKicker,
              title: ctaTitle,
              description: ctaDescription,
            }}
            actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
            ctaList={Array.isArray((data.cta as any)?.ctaList) ? (data.cta as any).ctaList : []}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
