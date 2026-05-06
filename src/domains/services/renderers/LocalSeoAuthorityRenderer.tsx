import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import {
  AccordionFAQSection,
  AuthoritySignalMapSection,
  BeforeAfterSection,
  CriteriaComparisonSection,
  GridCardsSection,
  HeroSplitSection,
  PrimaryCTASection,
  ProcessStepsSection,
  ProofStorySection,
  QualificationSection,
  ScopeSection,
  type SectionIconKey,
} from '@/components/sections';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

interface LocalSeoAuthorityRendererProps {
  data: ServicePageDataBySlug['local-seo-authority'];
  slug: string;
}

const MISCONCEPTION_ICON_KEYS: readonly SectionIconKey[] = ['alert', 'eye', 'clock'];

const PROCESS_ICON_KEYS: readonly SectionIconKey[] = ['eye', 'map-pin', 'repeat', 'trending'];

const SCOPE_ICON_KEYS: readonly SectionIconKey[] = [
  'database',
  'clipboard',
  'shield',
  'route',
  'line-chart',
  'workflow',
];

const PROOF_ICON_KEYS: readonly SectionIconKey[] = ['minus', 'sparkles', 'check'];

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

export function LocalSeoAuthorityRenderer({ data, slug }: LocalSeoAuthorityRendererProps) {
  const { hero, sections } = data;
  const {
    comparisonCriteria,
    authoritySignalFamilies,
    misconceptions,
    comparison,
    processSection,
    scopeSection,
    proof,
    qualification,
    faqSection,
  } = sections;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sectionsExtra = sections as Record<string, any>;
  const { comparisonCriteriaHeader, authoritySignalFamiliesHeader } = sectionsExtra;

  const contactHref = buildContactHref({
    system: slug,
    sourceType: 'page',
    slug,
  });

  return (
    <ErrorBoundary fallback={<GenericErrorFallback />}>
      <main role='main'>
        {/* 1. Hero — signal-grid visual */}
        <HeroSplitSection
          visualType='signal-grid'
          kicker={hero.badge}
          heading={{ title: hero.title, description: hero.description }}
          chips={hero.list}
          actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
          visual={hero.visual}
        />

        {/* 2. Criteria comparison — package thinking vs system approach */}
        {comparisonCriteria && comparisonCriteria.length >= 3 && (
          <CriteriaComparisonSection
            tone='light'
            heading={{
              kicker: comparisonCriteriaHeader?.kicker,
              title: requireNonEmptyValue(
                comparisonCriteriaHeader?.title,
                'criteria comparison section'
              ),
              description: requireHeadingDescription(
                comparisonCriteriaHeader?.description,
                'criteria comparison section'
              ),
            }}
            criteria={comparisonCriteria}
            leftLabel={comparisonCriteriaHeader?.leftLabel}
            rightLabel={comparisonCriteriaHeader?.rightLabel}
          />
        )}

        {/* 3. Authority signal map — 4 signal families with state */}
        {authoritySignalFamilies && authoritySignalFamilies.length >= 2 && (
          <AuthoritySignalMapSection
            tone='soft'
            heading={{
              kicker: authoritySignalFamiliesHeader?.kicker,
              title: requireNonEmptyValue(
                authoritySignalFamiliesHeader?.title,
                'authority signal families section'
              ),
              description: requireHeadingDescription(
                authoritySignalFamiliesHeader?.description,
                'authority signal families section'
              ),
            }}
            families={authoritySignalFamilies}
          />
        )}

        {/* 4. Before / after — off-the-shelf SEO vs structured local */}
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

        {/* 5. Three assumptions — signal-board grid */}
        {misconceptions && (
          <GridCardsSection
            variant='signal-board'
            tone='soft'
            columns={3}
            heading={{
              kicker: misconceptions.badge,
              title: misconceptions.title,
              description: requireHeadingDescription(
                misconceptions.description,
                'misconceptions section'
              ),
            }}
            items={misconceptions.painPoints.map((point, index) => ({
              id: `misconception-${index}`,
              iconKey: MISCONCEPTION_ICON_KEYS[index % MISCONCEPTION_ICON_KEYS.length],
              badge: misconceptions.currentStateLabel,
              title: point.before,
              description: point.after,
              status: 'risk' as const,
            }))}
          />
        )}

        {/* 6. Scope — service map (what we handle) */}
        {scopeSection && (
          <ScopeSection
            variant='service-map'
            tone='light'
            heading={{
              kicker: scopeSection.badge,
              title: scopeSection.title,
              description: requireHeadingDescription(scopeSection.description, 'scope section'),
            }}
            groups={scopeSection.services.map((service, index) => ({
              label: service.title,
              description: service.summary,
              iconKey: SCOPE_ICON_KEYS[index % SCOPE_ICON_KEYS.length],
              items: service.items ?? [],
            }))}
          />
        )}

        {/* 7. Process — what happens after we start */}
        {processSection && (
          <ProcessStepsSection
            variant='timeline'
            tone='soft'
            heading={{
              kicker: processSection.badge,
              title: processSection.title,
              description: requireHeadingDescription(processSection.description, 'process section'),
            }}
            steps={processSection.steps.map((step, index) => ({
              index: step.number,
              title: step.title,
              description: step.description,
              iconKey: PROCESS_ICON_KEYS[index % PROCESS_ICON_KEYS.length],
            }))}
          />
        )}

        {/* 8. Proof story — before / change / after with evidence points */}
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
                tone='light'
                heading={{
                  kicker: proof.header.badge,
                  title: proof.header.title,
                  description: requireHeadingDescription(proof.header.description, 'proof section'),
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

        {/* 9. Qualification — fit check */}
        {qualification && (
          <QualificationSection
            variant='fit-filter'
            tone='soft'
            heading={{
              kicker: qualification.badge,
              title: qualification.title,
              description: requireHeadingDescription(
                qualification.description,
                'qualification section'
              ),
            }}
            good={{
              label: qualification.strongFitLabel,
              title: qualification.strongFitTitle,
              items: qualification.strongFitItems.map(item => ({
                text: item.title,
                note: item.description,
              })),
            }}
            not={{
              label: qualification.notDesignedLabel,
              title: qualification.notDesignedTitle,
              items: qualification.notDesignedItems.map(item => ({
                text: item.title,
                note: item.description,
              })),
            }}
          />
        )}

        {/* 10. FAQ */}
        {faqSection && (
          <AccordionFAQSection
            variant='single-column'
            tone='light'
            heading={{
              kicker: faqSection.badge,
              title: faqSection.title,
              description: requireHeadingDescription(faqSection.description, 'faq section'),
            }}
            items={faqSection.faqs.map((faq, index) => ({
              id: `local-seo-faq-${index}`,
              question: faq.question,
              answer: faq.answer,
            }))}
          />
        )}

        {/* 11. CTA */}
        <PrimaryCTASection
          variant='soft-panel'
          heading={data.cta.heading}
          actions={data.cta.actions}
        />
      </main>
    </ErrorBoundary>
  );
}

export default LocalSeoAuthorityRenderer;
