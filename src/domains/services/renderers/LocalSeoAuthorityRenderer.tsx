import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import {
  AccordionFAQSection,
  BeforeAfterSection,
  FitCheckSection,
  GridCardsSection,
  type HeroSplitMetric,
  HeroSplitSection,
  LayerStackSection,
  PrimaryCTASection,
  ProcessStepsSection,
  ProofStorySection,
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

const HERO_VISIBILITY_ROWS: readonly HeroSplitMetric[] = [
  { label: 'Map pack · "near me"', value: 'Visible', status: 'good', iconKey: 'map-pin' },
  { label: 'Service: emergency', value: 'Indexed', status: 'good', iconKey: 'search' },
  { label: 'Citations match', value: '12 / 12', status: 'good', iconKey: 'shield' },
  { label: 'Reviews this month', value: '+8', status: 'good', iconKey: 'sparkles' },
];

const MISCONCEPTION_ICON_KEYS: readonly SectionIconKey[] = ['alert', 'eye', 'clock'];

const APPROACH_ICON_KEYS: readonly SectionIconKey[] = ['workflow', 'map-pin', 'repeat', 'shield'];

const INTEGRATION_ICON_KEYS: readonly SectionIconKey[] = ['search', 'shield', 'route'];

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

export function LocalSeoAuthorityRenderer({ data, slug }: LocalSeoAuthorityRendererProps) {
  const { hero, sections } = data;
  const {
    misconceptions,
    why,
    comparison,
    integrations,
    processSection,
    scopeSection,
    proof,
    qualification,
    faqSection,
  } = sections;

  const contactHref = buildContactHref({
    system: slug,
    sourceType: 'page',
    slug,
  });

  return (
    <ErrorBoundary fallback={<GenericErrorFallback />}>
      <main role='main'>
        {/* Hero — visibility variant */}
        <HeroSplitSection
          variant='visibility'
          kicker={hero.badge}
          heading={{ title: hero.title, description: hero.description }}
          chips={hero.list}
          actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, primary: true }]}
          visual={{
            brand: 'mindwp · local visibility',
            title: 'Search presence snapshot',
            subtitle: 'Last 30 days · postcode area',
            rows: HERO_VISIBILITY_ROWS,
            footerPrimary: 'citations match · profile live',
            footerSecondary: 'rank stable',
          }}
        />

        {/* Three assumptions — signal-board grid */}
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

        {/* We start with your website — layer-stack signal-map */}
        {why && (
          <LayerStackSection
            variant='signal-map'
            heading={{
              kicker: why.badge,
              title: why.title,
              description: requireHeadingDescription(why.description, 'why section'),
            }}
            layers={why.features.map((feature, index) => ({
              key: `approach-${index}`,
              index: String(index + 1).padStart(2, '0'),
              iconKey: APPROACH_ICON_KEYS[index % APPROACH_ICON_KEYS.length],
              title: feature.title,
              meta: why.tagline,
              summary: feature.description,
            }))}
          />
        )}

        {/* Off-the-shelf SEO comparison — scorecard before/after */}
        {comparison &&
          (() => {
            const before = comparison.items.find(item => item.type === 'before');
            const after = comparison.items.find(item => item.type === 'after');
            if (!before || !after) {
              throw new Error('[comparison section] Invalid data');
            }

            return (
              <BeforeAfterSection
                variant='scorecard'
                heading={{
                  kicker: 'Scorecard',
                  title: comparison.header.title,
                  description: requireHeadingDescription(
                    comparison.header.description,
                    'comparison section'
                  ),
                }}
                before={{
                  label: 'Off-the-shelf SEO',
                  title: before.title,
                  items: before.items,
                }}
                after={{
                  label: 'Structured local',
                  title: after.title,
                  items: after.items,
                }}
              />
            );
          })()}

        {/* What changes when SEO works — layer-stack signal-map */}
        {integrations && (
          <LayerStackSection
            variant='signal-map'
            heading={{
              kicker: integrations.badge,
              title: integrations.title,
              description: requireHeadingDescription(
                integrations.description,
                'integrations section'
              ),
            }}
            layers={integrations.cards.map((card, index) => ({
              key: `integration-${index}`,
              index: String(index + 1).padStart(2, '0'),
              iconKey: INTEGRATION_ICON_KEYS[index % INTEGRATION_ICON_KEYS.length],
              title: card.title,
              summary: card.description,
              bullets: card.points,
            }))}
          />
        )}

        {/* What happens after we start — process steps */}
        {processSection && (
          <ProcessStepsSection
            variant='timeline'
            tone='light'
            heading={{
              kicker: processSection.badge ?? 'How we work',
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

        {/* What we handle — grid cards (scope) */}
        {scopeSection && (
          <GridCardsSection
            variant='feature-grid'
            tone='soft'
            columns={3}
            heading={{
              kicker: scopeSection.badge,
              title: scopeSection.title,
              description: requireHeadingDescription(scopeSection.description, 'scope section'),
            }}
            items={scopeSection.services.map((service, index) => ({
              id: `scope-${index}`,
              iconKey: SCOPE_ICON_KEYS[index % SCOPE_ICON_KEYS.length],
              title: service.title,
              description: service.items.slice(0, 2).join(' · '),
            }))}
          />
        )}

        {/* Real business proof */}
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
                  kicker: 'Real outcome',
                  title: proof.header.title,
                  description: requireHeadingDescription(proof.header.description, 'proof section'),
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

        {/* Qualification — fit check decision cards */}
        {qualification && (
          <FitCheckSection
            variant='two-column'
            tone='soft'
            heading={{
              kicker: 'Fit check',
              title: qualification.title,
              description: requireHeadingDescription(
                qualification.description,
                'qualification section'
              ),
            }}
            good={{
              label: 'Strong fit',
              title: qualification.strongFitTitle,
              items: qualification.strongFitItems.map(item => ({
                text: item.title,
                note: item.description,
              })),
            }}
            not={{
              label: 'Probably not the right fit',
              title: qualification.notDesignedTitle,
              items: qualification.notDesignedItems.map(item => ({
                text: item.title,
                note: item.description,
              })),
            }}
          />
        )}

        {/* FAQ */}
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
