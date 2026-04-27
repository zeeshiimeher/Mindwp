import type { LucideIcon } from 'lucide-react';

import { BeforeAfterSystemPanel } from './BeforeAfterSystemPanel';
import { DiagnosticLeakageSection } from './DiagnosticLeakageSection';
import { FitCheckPanel, type FitItem } from './FitCheckPanel';
import { type FlowStep, OperationalFlowTimeline } from './OperationalFlowTimeline';
import type { OperationalRow } from './OperationalStatusMockup';
import { type ProofCard, ProofNarrativePanel } from './ProofNarrativePanel';
import { PrototypeCTA } from './PrototypeCTA';
import { type FaqItem, PrototypeFAQ } from './PrototypeFAQ';
import { ServiceHeroOperational } from './ServiceHeroOperational';
import { type SystemLayer, SystemLayerStack } from './SystemLayerStack';

import '@/styles/redesign/framework.css';
import '@/styles/redesign/smart-website.css';

export interface SmartWebsitePrototypeData {
  hero: {
    badge: string;
    title: string;
    description: string;
    chips: readonly string[];
    mockup: {
      title: string;
      subtitle: string;
      brand: string;
      footerPrimary: string;
      footerSecondary: string;
    };
  };
  diagnostic: {
    eyebrow: string;
    title: string;
    description: string;
    items: ReadonlyArray<{ icon: LucideIcon; title: string; description: string }>;
  };
  comparison: {
    eyebrow: string;
    title: string;
    description: string;
    beforeLabel: string;
    beforeTitle: string;
    beforeItems: readonly string[];
    afterLabel: string;
    afterTitle: string;
    afterItems: readonly string[];
  };
  layerStack: {
    eyebrow: string;
    title: string;
    description: string;
    layers: readonly SystemLayer[];
  };
  flow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly FlowStep[];
  };
  proof: {
    eyebrow: string;
    title: string;
    description: string;
    cards: readonly ProofCard[];
  };
  fit: {
    eyebrow: string;
    title: string;
    description: string;
    goodLabel: string;
    goodTitle: string;
    goodItems: readonly FitItem[];
    notLabel: string;
    notTitle: string;
    notItems: readonly FitItem[];
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly FaqItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    panelTitle: string;
    panelItems: readonly string[];
  };
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  heroMockupRows: readonly OperationalRow[];
}

interface SmartWebsitePrototypePageProps {
  data: SmartWebsitePrototypeData;
}

export function SmartWebsitePrototypePage({ data }: SmartWebsitePrototypePageProps) {
  return (
    <div className='rd-shell rd-sws'>
      <div className='rd-sws-banner' role='note'>
        <span>● PROTOTYPE</span>
        <span>/dev/redesign/smart-website-systems · not production</span>
      </div>

      <main role='main'>
        <ServiceHeroOperational
          badge={data.hero.badge}
          title={data.hero.title}
          description={data.hero.description}
          chips={data.hero.chips}
          primaryCtaLabel={data.primaryCtaLabel}
          primaryCtaHref={data.primaryCtaHref}
          secondaryCtaLabel={data.secondaryCtaLabel}
          secondaryCtaHref={data.secondaryCtaHref}
          mockupRows={data.heroMockupRows}
          mockupTitle={data.hero.mockup.title}
          mockupSubtitle={data.hero.mockup.subtitle}
          mockupBrand={data.hero.mockup.brand}
          mockupFooterPrimary={data.hero.mockup.footerPrimary}
          mockupFooterSecondary={data.hero.mockup.footerSecondary}
        />

        <DiagnosticLeakageSection
          eyebrow={data.diagnostic.eyebrow}
          title={data.diagnostic.title}
          description={data.diagnostic.description}
          items={data.diagnostic.items}
        />

        <BeforeAfterSystemPanel
          eyebrow={data.comparison.eyebrow}
          title={data.comparison.title}
          description={data.comparison.description}
          beforeLabel={data.comparison.beforeLabel}
          beforeTitle={data.comparison.beforeTitle}
          beforeItems={data.comparison.beforeItems}
          afterLabel={data.comparison.afterLabel}
          afterTitle={data.comparison.afterTitle}
          afterItems={data.comparison.afterItems}
        />

        <SystemLayerStack
          eyebrow={data.layerStack.eyebrow}
          title={data.layerStack.title}
          description={data.layerStack.description}
          layers={data.layerStack.layers}
        />

        <OperationalFlowTimeline
          eyebrow={data.flow.eyebrow}
          title={data.flow.title}
          description={data.flow.description}
          steps={data.flow.steps}
        />

        <ProofNarrativePanel
          eyebrow={data.proof.eyebrow}
          title={data.proof.title}
          description={data.proof.description}
          cards={data.proof.cards}
        />

        <FitCheckPanel
          eyebrow={data.fit.eyebrow}
          title={data.fit.title}
          description={data.fit.description}
          goodLabel={data.fit.goodLabel}
          goodTitle={data.fit.goodTitle}
          goodItems={data.fit.goodItems}
          notLabel={data.fit.notLabel}
          notTitle={data.fit.notTitle}
          notItems={data.fit.notItems}
        />

        <PrototypeFAQ
          eyebrow={data.faq.eyebrow}
          title={data.faq.title}
          description={data.faq.description}
          items={data.faq.items}
        />

        <PrototypeCTA
          eyebrow={data.cta.eyebrow}
          title={data.cta.title}
          description={data.cta.description}
          primaryLabel={data.primaryCtaLabel}
          primaryHref={data.primaryCtaHref}
          secondaryLabel={data.secondaryCtaLabel}
          secondaryHref={data.secondaryCtaHref}
          panelTitle={data.cta.panelTitle}
          panelItems={data.cta.panelItems}
        />
      </main>
    </div>
  );
}
