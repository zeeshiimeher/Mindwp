import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import {
  AccordionFAQSection,
  BeforeAfterSection,
  FitCheckSection,
  GridCardsSection,
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

function requireHeadingDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }

  return description;
}

function requireNonEmptyValue(value: string | undefined, section: string) {
  if (!value || value.trim().length === 0) {
    throw new Error(`[${section}] Invalid data`);
  }

  return value;
}

export default function SmartWebsiteSystemsRenderer({ data, slug }: Props) {
  const { hero } = data;
  const sections = data.sections;
  const optionalSections = sections as Partial<ServicePageSections>;
  const { value, comparison, included, types, coreLayer, proof, process, qualification, faq } =
    sections;
  const { visibilityFoundations, businessSizes, concerns, technologies } = optionalSections;

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
            kicker={hero.badge}
            heading={{ title: hero.title, description: hero.description }}
            chips={hero.list}
            actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
            visual={hero.visual}
          />

          {/* Value Blocks */}
          {value && (
            <GridCardsSection
              variant='diagnostic-grid'
              tone='soft'
              columns={3}
              heading={{
                kicker: value.header.badge,
                title: value.header.title,
                description: requireHeadingDescription(value.header.description, 'value section'),
              }}
              items={value.items.map((block, index) => ({
                id: `value-${index}`,
                title: block.title,
                description: block.description,
                iconKey: VALUE_ICON_KEYS[index % VALUE_ICON_KEYS.length],
              }))}
            />
          )}
          {/* Before/After Comparison */}
          {comparison &&
            (() => {
              const before = comparison.items.find(item => item.type === 'before');
              const after = comparison.items.find(item => item.type === 'after');
              if (!before || !after) {
                throw new Error('[comparison section] Invalid data');
              }

              return (
                <BeforeAfterSection
                  variant='split-panel'
                  heading={{
                    kicker: comparison.header.badge,
                    title: comparison.header.title,
                    description: requireHeadingDescription(
                      comparison.header.description,
                      'comparison section'
                    ),
                  }}
                  before={{
                    label: comparison.beforeLabel,
                    title: before.title,
                    items: before.items,
                  }}
                  after={{
                    label: comparison.afterLabel,
                    title: after.title,
                    items: after.items,
                  }}
                />
              );
            })()}
          {/* What's Included */}
          {included && (
            <GridCardsSection
              variant='feature-grid'
              tone='light'
              columns={2}
              heading={{
                kicker: included.header.badge,
                title: included.header.title,
                description: requireHeadingDescription(
                  included.header.description,
                  'included section'
                ),
              }}
              items={included.items.map((item, index) => ({
                id: `included-${index}`,
                iconKey: 'check-circle' as SectionIconKey,
                title: item,
                status: 'good' as const,
              }))}
            />
          )}

          {/* Implementation Types */}
          {types && (
            <GridCardsSection
              variant='signal-board'
              tone='soft'
              columns={4}
              heading={{
                kicker: types.header.badge,
                title: types.header.title,
                description: requireHeadingDescription(types.header.description, 'types section'),
              }}
              items={types.items.map((type, index) => ({
                id: `type-${index}`,
                iconKey: TYPE_ICON_KEYS[index % TYPE_ICON_KEYS.length],
                title: type.title,
                description: type.description,
              }))}
            />
          )}

          {coreLayer && (
            <LayerStackSection
              variant='interactive-stack'
              heading={{
                kicker: coreLayer.header.badge,
                title: coreLayer.header.title,
                description: requireHeadingDescription(
                  coreLayer.header.description,
                  'core layer section'
                ),
              }}
              layers={coreLayer.cards.map((card, index) => ({
                key: `layer-${index}`,
                index: String(index + 1).padStart(2, '0'),
                iconKey: LAYER_ICON_KEYS[index % LAYER_ICON_KEYS.length],
                title: card.title,
                summary: card.description,
                bullets: card.points,
              }))}
            />
          )}

          {proof &&
            (() => {
              const before = proof.cards[0];
              const change = proof.cards[1];
              const after = proof.cards[2];
              if (!before || !change || !after) {
                throw new Error('[proof section] Invalid data');
              }

              return (
                <ProofStorySection
                  variant='before-change-after'
                  tone='soft'
                  heading={{
                    kicker: proof.header.badge,
                    title: proof.header.title,
                    description: requireHeadingDescription(
                      proof.header.description,
                      'proof section'
                    ),
                  }}
                  before={{
                    label: proof.beforeLabel,
                    title: before.title,
                    body: before.description,
                    iconKey: PROOF_ICON_KEYS[0],
                  }}
                  change={{
                    label: proof.changeLabel,
                    title: change.title,
                    body: change.description,
                    iconKey: PROOF_ICON_KEYS[1],
                  }}
                  after={{
                    label: proof.afterLabel,
                    title: after.title,
                    body: after.description,
                    iconKey: PROOF_ICON_KEYS[2],
                  }}
                />
              );
            })()}

          {/* Strategic Bridge */}
          {visibilityFoundations && (
            <ImageStorySection
              variant='operational-photo'
              tone='light'
              heading={{
                kicker: visibilityFoundations.header.badge,
                title: visibilityFoundations.header.title,
                description: requireHeadingDescription(
                  visibilityFoundations.header.description,
                  'visibility foundations section'
                ),
              }}
              body={requireNonEmptyValue(
                visibilityFoundations.body,
                'visibility foundations section'
              )}
              bullets={visibilityFoundations.bullets}
              highlights={visibilityFoundations.highlights}
              image={visibilityFoundations.image}
              caption={visibilityFoundations.tagline}
            />
          )}

          {/* NEW: Benefits by Business Size */}
          {businessSizes && (
            <GridCardsSection
              variant='feature-grid'
              tone='light'
              columns={3}
              heading={{
                kicker: businessSizes.header.badge,
                title: businessSizes.header.title,
                description: requireHeadingDescription(
                  businessSizes.header.description,
                  'business sizes section'
                ),
              }}
              items={businessSizes.items.map((size, index) => ({
                id: `size-${index}`,
                iconKey: SIZE_ICON_KEYS[index % SIZE_ICON_KEYS.length],
                title: size.title,
                description: size.description,
                badge: size.benefit,
              }))}
            />
          )}

          {/* How It Works */}
          {process && (
            <ProcessStepsSection
              variant='timeline'
              tone='light'
              heading={{
                kicker: process.header.badge,
                title: process.header.title,
                description: requireHeadingDescription(
                  process.header.description,
                  'process section'
                ),
              }}
              steps={process.steps.map((step, index) => ({
                index: step.number,
                title: step.title,
                description: step.description,
                iconKey: FLOW_ICON_KEYS[index % FLOW_ICON_KEYS.length],
              }))}
            />
          )}

          {/* NEW: Common Concerns Addressed */}
          {concerns && (
            <GridCardsSection
              variant='diagnostic-grid'
              tone='soft'
              columns={2}
              heading={{
                kicker: concerns.header.badge,
                title: concerns.header.title,
                description: requireHeadingDescription(
                  concerns.header.description,
                  'concerns section'
                ),
              }}
              items={concerns.items.map((item, index) => ({
                id: `concern-${index}`,
                iconKey: CONCERN_ICON_KEYS[index % CONCERN_ICON_KEYS.length],
                title: item.title,
                description: item.description,
              }))}
            />
          )}

          {/* Technologies Used */}
          {technologies && (
            <GridCardsSection
              variant='signal-board'
              tone='light'
              columns={3}
              heading={{
                kicker: technologies.header.badge,
                title: technologies.header.title,
                description: requireHeadingDescription(
                  technologies.header.description,
                  'technologies section'
                ),
              }}
              items={technologies.items.map((tech, index) => ({
                id: `tech-${index}`,
                iconKey: TECH_ICON_KEYS[index % TECH_ICON_KEYS.length],
                title: tech.name,
                description: tech.description,
              }))}
            />
          )}

          {/* Qualification Section */}
          {qualification && (
            <FitCheckSection
              variant='two-column'
              tone='light'
              heading={{
                kicker: qualification.header.badge,
                title: qualification.header.title,
                description: requireHeadingDescription(
                  qualification.header.description,
                  'qualification section'
                ),
              }}
              good={{
                label: qualification.strongFitLabel,
                title: qualification.strongFitTitle,
                items: qualification.strongFit.map(item => ({
                  text: item.title,
                  note: item.description,
                })),
              }}
              not={{
                label: qualification.notForLabelText,
                title: qualification.notForTitle,
                items: qualification.notFor.map(item => ({
                  text: item.title,
                  note: item.description,
                })),
              }}
            />
          )}

          {/* FAQ Section */}
          {faq && (
            <AccordionFAQSection
              variant='single-column'
              tone='soft'
              heading={{
                kicker: faq.header.badge,
                title: faq.header.title,
                description: requireHeadingDescription(faq.header.description, 'faq section'),
              }}
              items={faq.items.map((item, index) => ({
                id: `smart-websites-faq-${index}`,
                question: item.question,
                answer: item.answer,
              }))}
            />
          )}

          <PrimaryCTASection
            variant='soft-panel'
            heading={data.cta.heading}
            actions={data.cta.actions}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
