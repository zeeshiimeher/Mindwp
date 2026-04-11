import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { CenteredFeatureCard } from '@/components/reusable/single/CenteredFeatureCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { HighlightCard } from '@/components/reusable/single/HighlightCard';
import { ScenarioSolutionCard } from '@/components/reusable/single/ScenarioSolutionCard';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { websiteRedesignSystemRebuildPage } from '@/domains/services/data/website-redesign-system-rebuild';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface WebsiteRedesignSystemRebuildRendererProps {
  data: typeof websiteRedesignSystemRebuildPage;
  slug: string;
}

export function WebsiteRedesignSystemRebuildRenderer({
  data,
  slug,
}: WebsiteRedesignSystemRebuildRendererProps) {
  const { hero, sections, cta, inlineCta } = data;
  const {
    foundation,
    structuralSignals,
    rebuildScenarios,
    processSection,
    implementationLayers,
    qualification,
    faqSection,
    comparison,
    proof,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const inlineCtaTitle = inlineCta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const inlineCtaDescription = inlineCta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            smartCta={{
              system: data.systems?.[0] ?? 'smart-website-systems',
              pageType: 'service',
              slug,
              primaryActionVariant: 'primary',
            }}
            list={hero.list}
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            currentStateLabel={foundation.currentStateLabel}
            structuredStateLabel={foundation.structuredStateLabel}
            cssPrefix='website-redesign-rebuild-foundation'
          />

          <SectionWrapper className='website-redesign-rebuild-signals' background='bg-base'>
            <SectionIntro
              badge={structuralSignals.badge}
              title={structuralSignals.title}
              description={structuralSignals.description}
              cssPrefix='website-redesign-rebuild-signals-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2'>
              {structuralSignals.items.map((item, index) => (
                <HighlightCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  className='website-redesign-rebuild-signal'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='website-redesign-rebuild-scenarios'>
            <SectionIntro
              badge={rebuildScenarios.badge}
              title={rebuildScenarios.title}
              description={rebuildScenarios.description}
              cssPrefix='website-redesign-rebuild-scenarios-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {rebuildScenarios.items.map((item, index) => (
                <ScenarioSolutionCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  scenario={item.scenario}
                  solution={item.solution}
                  result={item.result}
                  scenarioLabel={rebuildScenarios.scenarioLabel}
                  solutionLabel={rebuildScenarios.solutionLabel}
                  cssPrefix='website-redesign-rebuild-scenario'
                />
              ))}
            </div>
          </SectionWrapper>

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='website-redesign-rebuild-process'
            backgroundColor='bg-alt'
          />

          <SectionWrapper className='website-redesign-rebuild-layers'>
            <SectionIntro
              badge={implementationLayers.badge}
              title={implementationLayers.title}
              description={implementationLayers.description}
              cssPrefix='website-redesign-rebuild-layers-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-4'>
              {implementationLayers.items.map((item, index) => (
                <CenteredFeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  cssPrefix='website-redesign-rebuild-layer'
                />
              ))}
            </div>
          </SectionWrapper>

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='website-redesign-rebuild-comparison'
            />
          )}

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='website-redesign-rebuild-proof'
            />
          )}

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            title={inlineCtaTitle}
            description={inlineCtaDescription}
            primaryActionVariant='primary'
          />

          <DualToneChecklistComparisonSection
            title={qualification.title}
            description={qualification.description}
            leftColumn={{
              title: qualification.strongFitTitle,
              items: qualification.strongFitItems,
            }}
            rightColumn={{
              title: qualification.notDesignedTitle,
              items: qualification.notDesignedItems,
            }}
            cssPrefix='website-redesign-rebuild-qualification'
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
