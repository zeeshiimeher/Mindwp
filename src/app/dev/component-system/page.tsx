import { notFound } from 'next/navigation';

import {
  AccordionFAQSection,
  AuthoritySignalMapSection,
  BeforeAfterSection,
  CriteriaComparisonSection,
  GridCardsSection,
  HeroSplitSection,
  ImageStorySection,
  JourneyLeakMapSection,
  LayerStackSection,
  PrimaryCTASection,
  ProcessStepsSection,
  ProofStorySection,
  QualificationSection,
  RelatedContentSection,
  ScopeSection,
  type SectionIconKey,
  ServiceBridgeSection,
} from '@/components/sections';
import { localSeoAuthorityPage } from '@/domains/services/data/local-seo-authority';
import { smartWebsiteSystemsPage } from '@/domains/services/data/smart-website-systems';
import { resolveSEO } from '@/lib/seo/seoResolver';
import { getIsSystemEnabled } from '@/system/isSystemEnabled';


export async function generateMetadata() {
  return resolveSEO({ path: '/dev/component-system', type: 'static', slug: 'component-system' });
}

const SMART_VALUE_ICON_KEYS: readonly SectionIconKey[] = [
  'alert',
  'inbox',
  'phone',
  'clock',
  'message',
  'eye',
];

const LOCAL_MISCONCEPTION_ICON_KEYS: readonly SectionIconKey[] = ['alert', 'eye', 'clock'];
const LAYER_ICON_KEYS: readonly SectionIconKey[] = ['target', 'search', 'route', 'repeat'];
const PROCESS_ICON_KEYS: readonly SectionIconKey[] = [
  'compass',
  'workflow',
  'check-circle',
  'trending',
];
const PROOF_ICON_KEYS: readonly SectionIconKey[] = ['minus', 'sparkles', 'check'];
const SCOPE_ICON_KEYS: readonly SectionIconKey[] = [
  'database',
  'clipboard',
  'shield',
  'route',
  'line-chart',
  'workflow',
];

function label(component: string, variant: string) {
  return `[${component} — ${variant}]`;
}

function requireDescription(description: string | undefined, section: string) {
  if (!description || description.trim().length === 0) {
    throw new Error(`[component visualizer:${section}] Invalid data`);
  }

  return description;
}

function findComparisonItem(
  comparison: typeof smartWebsiteSystemsPage.sections.comparison,
  type: 'before' | 'after'
) {
  const item = comparison.items.find(candidate => candidate.type === type);

  if (!item) {
    throw new Error(`[component visualizer:comparison:${type}] Invalid data`);
  }

  return item;
}

function smartProofColumn(index: 0 | 1 | 2) {
  const card = smartWebsiteSystemsPage.sections.proof.cards[index];

  if (!card) {
    throw new Error('[component visualizer:smart proof] Invalid data');
  }

  return card;
}

function localProofColumn(index: 0 | 1 | 2) {
  const card = localSeoAuthorityPage.sections.proof.cards[index];

  if (!card) {
    throw new Error('[component visualizer:local proof] Invalid data');
  }

  return card;
}

export default function ComponentSystemVisualizerPage() {
  if (!getIsSystemEnabled()) {
    notFound();
  }

  const smart = smartWebsiteSystemsPage;
  const local = localSeoAuthorityPage;
  const smartBefore = findComparisonItem(smart.sections.comparison, 'before');
  const smartAfter = findComparisonItem(smart.sections.comparison, 'after');
  const localBefore = findComparisonItem(local.sections.comparison, 'before');
  const localAfter = findComparisonItem(local.sections.comparison, 'after');

  return (
    <main role='main'>
      <HeroSplitSection
        visualType='system-feed'
        kicker={label('HeroSplitSection', 'system-feed')}
        heading={{ title: smart.hero.title, description: smart.hero.description }}
        chips={smart.hero.list}
        actions={[smart.cta.actions[0]]}
        visual={smart.hero.visual}
      />

      <HeroSplitSection
        visualType='signal-grid'
        kicker={label('HeroSplitSection', 'signal-grid')}
        heading={{ title: local.hero.title, description: local.hero.description }}
        chips={local.hero.list}
        actions={[local.cta.actions[0]]}
        visual={local.hero.visual}
      />

      <GridCardsSection
        variant='diagnostic-grid'
        tone='soft'
        columns={3}
        heading={{
          kicker: label('GridCardsSection', 'diagnostic-grid'),
          title: smart.sections.value.header.title,
          description: requireDescription(smart.sections.value.header.description, 'smart value'),
        }}
        items={smart.sections.value.items.map((item, index) => ({
          id: `smart-value-${index}`,
          iconKey: SMART_VALUE_ICON_KEYS[index % SMART_VALUE_ICON_KEYS.length],
          title: item.title,
          description: item.description,
        }))}
      />

      <GridCardsSection
        variant='signal-board'
        tone='soft'
        columns={3}
        heading={{
          kicker: label('GridCardsSection', 'signal-board'),
          title: local.sections.misconceptions.title,
          description: requireDescription(
            local.sections.misconceptions.description,
            'local misconceptions'
          ),
        }}
        items={local.sections.misconceptions.painPoints.map((point, index) => ({
          id: `local-misconception-${index}`,
          iconKey: LOCAL_MISCONCEPTION_ICON_KEYS[index % LOCAL_MISCONCEPTION_ICON_KEYS.length],
          badge: local.sections.misconceptions.currentStateLabel,
          title: point.before,
          description: point.after,
          status: 'risk' as const,
        }))}
      />

      <GridCardsSection
        variant='feature-grid'
        tone='light'
        columns={2}
        heading={{
          kicker: label('GridCardsSection', 'feature-grid'),
          title: smart.sections.included.header.title,
          description: requireDescription(
            smart.sections.included.header.description,
            'smart included'
          ),
        }}
        items={smart.sections.included.items.map((item, index) => ({
          id: `smart-included-${index}`,
          iconKey: 'check-circle' as const,
          title: item,
          status: 'good' as const,
        }))}
      />

      <BeforeAfterSection
        variant='split-panel'
        heading={{
          kicker: label('BeforeAfterSection', 'split-panel'),
          title: smart.sections.comparison.header.title,
          description: requireDescription(
            smart.sections.comparison.header.description,
            'smart comparison'
          ),
        }}
        before={{
          label: smart.sections.comparison.beforeLabel,
          title: smartBefore.title,
          items: smartBefore.items,
        }}
        after={{
          label: smart.sections.comparison.afterLabel,
          title: smartAfter.title,
          items: smartAfter.items,
        }}
      />

      <LayerStackSection
        variant='stack'
        heading={{
          kicker: label('LayerStackSection', 'stack'),
          title: smart.sections.coreLayer.header.title,
          description: requireDescription(
            smart.sections.coreLayer.header.description,
            'smart core layer'
          ),
        }}
        layers={smart.sections.coreLayer.cards.map((card, index) => ({
          key: `smart-layer-${index}`,
          index: String(index + 1).padStart(2, '0'),
          iconKey: LAYER_ICON_KEYS[index % LAYER_ICON_KEYS.length],
          title: card.title,
          summary: card.description,
          bullets: card.points,
        }))}
      />

      <ProcessStepsSection
        variant='timeline'
        tone='light'
        heading={{
          kicker: label('ProcessStepsSection', 'timeline'),
          title: smart.sections.process.header.title,
          description: requireDescription(
            smart.sections.process.header.description,
            'smart process'
          ),
        }}
        steps={smart.sections.process.steps.map((step, index) => ({
          index: step.number,
          iconKey: PROCESS_ICON_KEYS[index % PROCESS_ICON_KEYS.length],
          title: step.title,
          description: step.description,
        }))}
      />

      <ProofStorySection
        variant='before-change-after'
        tone='soft'
        heading={{
          kicker: label('ProofStorySection', 'before-change-after'),
          title: smart.sections.proof.header.title,
          description: requireDescription(smart.sections.proof.header.description, 'smart proof'),
        }}
        before={{
          label: smart.sections.proof.beforeLabel,
          title: smartProofColumn(0).title,
          body: smartProofColumn(0).description,
          iconKey: PROOF_ICON_KEYS[0],
        }}
        change={{
          label: smart.sections.proof.changeLabel,
          title: smartProofColumn(1).title,
          body: smartProofColumn(1).description,
          iconKey: PROOF_ICON_KEYS[1],
        }}
        after={{
          label: smart.sections.proof.afterLabel,
          title: smartProofColumn(2).title,
          body: smartProofColumn(2).description,
          iconKey: PROOF_ICON_KEYS[2],
        }}
      />

      <ImageStorySection
        variant='evidence-photo'
        tone='light'
        heading={{
          kicker: label('ImageStorySection', 'evidence-photo'),
          title: smart.sections.visibilityFoundations.header.title,
          description: requireDescription(
            smart.sections.visibilityFoundations.header.description,
            'smart visibility foundations'
          ),
        }}
        body={smart.sections.visibilityFoundations.body}
        bullets={smart.sections.visibilityFoundations.bullets}
        highlights={smart.sections.visibilityFoundations.highlights}
        image={smart.sections.visibilityFoundations.image}
        caption={smart.sections.visibilityFoundations.tagline}
      />

      <ImageStorySection
        variant='system-visual'
        tone='soft'
        heading={{
          kicker: label('ImageStorySection', 'system-visual'),
          title: smart.sections.visibilityFoundations.header.title,
          description: requireDescription(
            smart.sections.visibilityFoundations.header.description,
            'smart visibility system-visual'
          ),
        }}
        body={smart.sections.visibilityFoundations.body}
        bullets={smart.sections.visibilityFoundations.bullets}
        highlights={smart.sections.visibilityFoundations.highlights}
        image={smart.sections.visibilityFoundations.image}
        caption={smart.sections.visibilityFoundations.tagline}
      />

      <ScopeSection
        variant='grouped-scope'
        tone='light'
        heading={{
          kicker: label('ScopeSection', 'grouped-scope'),
          title: local.sections.scopeSection.title,
          description: requireDescription(local.sections.scopeSection.description, 'local scope'),
        }}
        groups={local.sections.scopeSection.services.map((service, index) => ({
          label: service.title,
          description: service.summary,
          iconKey: SCOPE_ICON_KEYS[index % SCOPE_ICON_KEYS.length],
          items: service.items,
        }))}
      />

      <ScopeSection
        variant='service-map'
        tone='soft'
        heading={{
          kicker: label('ScopeSection', 'service-map'),
          title: local.sections.scopeSection.title,
          description: requireDescription(
            local.sections.scopeSection.description,
            'local scope map'
          ),
        }}
        groups={local.sections.scopeSection.services.map((service, index) => ({
          label: service.title,
          description: service.summary,
          iconKey: SCOPE_ICON_KEYS[index % SCOPE_ICON_KEYS.length],
          items: service.items,
        }))}
      />

      <QualificationSection
        variant='fit-filter'
        tone='light'
        heading={{
          kicker: label('QualificationSection', 'fit-filter'),
          title: smart.sections.qualification.header.title,
          description: requireDescription(
            smart.sections.qualification.header.description,
            'smart qualification'
          ),
        }}
        good={{
          label: smart.sections.qualification.strongFitLabel,
          title: smart.sections.qualification.strongFitTitle,
          items: smart.sections.qualification.strongFit.map(item => ({
            text: item.title,
            note: item.description,
          })),
        }}
        not={{
          label: smart.sections.qualification.notForLabelText,
          title: smart.sections.qualification.notForTitle,
          items: smart.sections.qualification.notFor.map(item => ({
            text: item.title,
            note: item.description,
          })),
        }}
      />

      <AccordionFAQSection
        variant='single-column'
        tone='soft'
        heading={{
          kicker: label('AccordionFAQSection', 'single-column'),
          title: smart.sections.faq.header.title,
          description: requireDescription(smart.sections.faq.header.description, 'smart faq'),
        }}
        items={smart.sections.faq.items.map((item, index) => ({
          id: `smart-faq-${index}`,
          question: item.question,
          answer: item.answer,
        }))}
      />

      <RelatedContentSection
        variant='progression'
        tone='light'
        heading={{
          kicker: label('RelatedContentSection', 'progression'),
          title: smart.seo.title,
          description: local.seo.description,
        }}
        items={[
          {
            id: smart.slug,
            step: smart.badge,
            iconKey: 'workflow' as const,
            title: smart.seo.title,
            summary: smart.category,
            href: `/services/${smart.slug}`,
            description: smart.seo.description,
            cta: smart.cta.actions[0].label,
          },
          {
            id: local.slug,
            step: local.badge,
            iconKey: 'map-pin' as const,
            title: local.seo.title,
            summary: local.category,
            href: `/services/${local.slug}`,
            description: local.seo.description,
            cta: local.cta.actions[0].label,
          },
        ]}
      />

      <JourneyLeakMapSection
        tone='light'
        heading={{
          kicker: label('JourneyLeakMapSection', 'single pattern'),
          title: smart.sections.journeyLeakMap.header.title,
          description: smart.sections.journeyLeakMap.header.description,
        }}
        stages={smart.sections.journeyLeakMap.stages}
      />

      <ServiceBridgeSection
        tone='soft'
        heading={{
          kicker: label('ServiceBridgeSection', 'single pattern'),
          title: smart.sections.serviceBridge.header.title,
          description: smart.sections.serviceBridge.header.description,
        }}
        bridges={smart.sections.serviceBridge.bridges}
      />

      <CriteriaComparisonSection
        tone='light'
        heading={{
          kicker: label('CriteriaComparisonSection', 'single pattern'),
          title: 'SEO package thinking vs. authority system thinking',
          description:
            'Why the typical SEO approach and the authority system approach are not equivalent — across five decision criteria.',
        }}
        leftLabel='Package approach'
        rightLabel='Authority system'
        criteria={local.sections.comparisonCriteria}
      />

      <AuthoritySignalMapSection
        tone='soft'
        heading={{
          kicker: label('AuthoritySignalMapSection', 'single pattern'),
          title: 'Where the authority signals are weak or missing',
          description:
            'The four signal families that determine local visibility — and the typical state before the system is in place.',
        }}
        families={local.sections.authoritySignalFamilies}
      />

      <PrimaryCTASection
        variant='soft-panel'
        heading={{
          kicker: label('PrimaryCTASection', 'soft-panel'),
          title: smart.cta.heading.title,
          description: smart.cta.heading.description,
        }}
        actions={smart.cta.actions}
        supports={smart.hero.list}
      />

    </main>
  );
}
