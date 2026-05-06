import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import {
  AccordionFAQSection,
  BeforeAfterSection,
  CompoundingSignalsSection,
  GridCardsSection,
  HeroSplitSection,
  LayerStackSection,
  LeakBoardSection,
  OperatingBuildSection,
  PrimaryCTASection,
  ProofStorySection,
  QualificationSection,
  ScopeSection,
  type SectionIconKey,
  ServiceBridgeSection,
} from '@/components/sections';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface Props {
  data: ServicePageDataBySlug[
  | 'smart-website-systems'
  | 'service-pages-vs-one-generic-services-page'];
  slug: string;
}

const PROOF_ICON_KEYS: readonly SectionIconKey[] = ['minus', 'sparkles', 'check'];

const LAYER_ICON_KEYS: readonly SectionIconKey[] = ['target', 'search', 'route', 'repeat'];

const TYPE_ICON_KEYS: readonly SectionIconKey[] = ['building', 'database', 'clock', 'target'];

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionsAny = sections as Record<string, any>;
  const { comparison, types, coreLayer, proof, qualification, faq } = sections;
  const {
    leakBoard,
    serviceBridge,
    scopeGroups,
    scopeGroupsHeading,
    compoundingSignals,
    operatingBuild,
  } = sectionsAny;

  const contactHref = buildContactHref({
    system: slug,
    sourceType: 'page',
    slug,
  });

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          {/* 1. Hero */}
          <HeroSplitSection
            visualType='system-feed'
            kicker={hero.badge}
            heading={{ title: hero.title, description: hero.description }}
            chips={hero.list}
            actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
            visual={hero.visual}
          />

          {/* 2. Where enquiries leak — diagnostic board */}
          {leakBoard && (
            <LeakBoardSection
              tone='soft'
              heading={{
                kicker: leakBoard.header.kicker,
                title: leakBoard.header.title,
                description: requireHeadingDescription(
                  leakBoard.header.description,
                  'leak board section'
                ),
              }}
              primaryLeak={leakBoard.primaryLeak}
              leaks={leakBoard.leaks}
              summary={leakBoard.summary}
            />
          )}

          {/* 3. Before / After comparison */}
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

          {/* 4. Service bridge — what the site hands off */}
          {serviceBridge && (
            <ServiceBridgeSection
              tone='light'
              heading={{
                kicker: serviceBridge.header.kicker,
                title: serviceBridge.header.title,
                description: requireHeadingDescription(
                  serviceBridge.header.description,
                  'service bridge section'
                ),
              }}
              bridges={serviceBridge.bridges}
            />
          )}

          {/* 5. Scope — what is built */}
          {scopeGroups && scopeGroups.length > 0 && (
            <ScopeSection
              variant='grouped-scope'
              tone='soft'
              heading={{
                kicker: scopeGroupsHeading?.kicker,
                title: requireNonEmptyValue(scopeGroupsHeading?.title, 'scope groups section'),
                description: requireHeadingDescription(
                  scopeGroupsHeading?.description,
                  'scope groups section'
                ),
              }}
              groups={scopeGroups.map(
                (group: {
                  label: string;
                  description?: string;
                  iconKey?: string;
                  items: readonly string[];
                }) => ({
                  label: group.label,
                  description: group.description,
                  iconKey: group.iconKey,
                  items: group.items as string[],
                })
              )}
            />
          )}

          {/* 6. Implementation types — feature-grid with numbered cards */}
          {types && (
            <GridCardsSection
              variant='feature-grid'
              tone='light'
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
                bullets: (type as { points?: readonly string[] }).points,
              }))}
            />
          )}

          {/* 7. System layers — vertical pipeline */}
          {coreLayer && (
            <LayerStackSection
              variant='stack'
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
                bullets: (card as { points?: readonly string[] }).points,
              }))}
            />
          )}

          {/* 8. Proof story — before / change / after */}
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
                    bullets: (before as { points?: readonly string[] }).points,
                  }}
                  change={{
                    label: proof.changeLabel,
                    title: change.title,
                    body: change.description,
                    iconKey: PROOF_ICON_KEYS[1],
                    bullets: (change as { points?: readonly string[] }).points,
                  }}
                  after={{
                    label: proof.afterLabel,
                    title: after.title,
                    body: after.description,
                    iconKey: PROOF_ICON_KEYS[2],
                    bullets: (after as { points?: readonly string[] }).points,
                  }}
                />
              );
            })()}

          {/* 9. Compounding signals — what changes when the site works */}
          {compoundingSignals && (
            <CompoundingSignalsSection
              tone='light'
              heading={{
                kicker: compoundingSignals.header.kicker,
                title: compoundingSignals.header.title,
                description: requireHeadingDescription(
                  compoundingSignals.header.description,
                  'compounding signals section'
                ),
              }}
              liveSignal={compoundingSignals.liveSignal}
              signals={compoundingSignals.signals}
              summary={compoundingSignals.summary}
            />
          )}

          {/* 10. Operating build — workbench layout */}
          {operatingBuild && (
            <OperatingBuildSection
              tone='soft'
              heading={{
                kicker: operatingBuild.header.kicker,
                title: operatingBuild.header.title,
                description: requireHeadingDescription(
                  operatingBuild.header.description,
                  'operating build section'
                ),
              }}
              inputs={operatingBuild.inputs}
              stages={operatingBuild.stages}
              finalState={operatingBuild.finalState}
            />
          )}

          {/* 11. Qualification — fit check */}
          {qualification && (
            <QualificationSection
              variant='fit-filter'
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

          {/* 12. FAQ */}
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

          {/* 13. CTA */}
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
