import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  FeatureChecklistCardsSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface WordPressDevelopmentRendererProps {
  data: ServicePageDataBySlug['wordpress-development'];
  slug: string;
}

export function WordPressDevelopmentRenderer({
  data,
  slug: _slug,
}: WordPressDevelopmentRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    implementationScope,
    comparison,
    principles,
    processSection,
    capabilitySection,
    proof,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta.title;
  const ctaDescription = cta.description;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            heroActions={{
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
            cssPrefix='wordpress-development-foundation'
          />

          <ServiceSpectrumCardsSection
            badge={implementationScope.badge}
            title={implementationScope.title}
            description={implementationScope.description}
            cards={implementationScope.cards}
            cssPrefix='wordpress-development-scope'
            backgroundColor='bg-alt'
          />

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='wordpress-development-comparison'
            />
          )}

          <StackedFeatureListSection
            badge={principles.badge}
            title={principles.title}
            description={principles.description}
            features={principles.features}
            tagline={principles.tagline}
            narrativeTitle={principles.narrativeTitle}
            narrativeParagraphs={principles.narrativeParagraphs}
            cssPrefix='wordpress-development-principles'
          />

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='wordpress-development-process'
            backgroundColor='bg-base'
          />

          <FeatureChecklistCardsSection
            badge={capabilitySection.badge}
            title={capabilitySection.title}
            description={capabilitySection.description}
            featureCategories={capabilitySection.categories}
            columns={3}
            cssPrefix='wordpress-development-capabilities'
          />

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='wordpress-development-proof'
              backgroundColor='bg-alt'
            />
          )}

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
            cssPrefix='wordpress-development-qualification'
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <PrimaryCTASection
            title={ctaTitle}
            description={ctaDescription}
            actions={[{ label: 'Get Started', href: '/contact' }]}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
