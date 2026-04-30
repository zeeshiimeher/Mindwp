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
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface ReputationReviewSystemsRendererProps {
  data: ServicePageDataBySlug['reputation-review-systems'];
  slug: string;
}

export function ReputationReviewSystemsRenderer({
  data,
  slug: _slug,
}: ReputationReviewSystemsRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    reviewSystem,
    comparison,
    positioning,
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
            cssPrefix='reputation-review-foundation'
          />

          <ServiceSpectrumCardsSection
            badge={reviewSystem.badge}
            title={reviewSystem.title}
            description={reviewSystem.description}
            cards={reviewSystem.cards}
            cssPrefix='reputation-review-system'
            backgroundColor='bg-base'
          />

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='reputation-review-comparison'
            />
          )}

          <StackedFeatureListSection
            badge={positioning.badge}
            title={positioning.title}
            description={positioning.description}
            features={positioning.features}
            tagline={positioning.tagline}
            narrativeTitle={positioning.narrativeTitle}
            narrativeParagraphs={positioning.narrativeParagraphs}
            cssPrefix='reputation-review-positioning'
          />

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='reputation-review-process'
            backgroundColor='bg-base'
          />

          <FeatureChecklistCardsSection
            badge={capabilitySection.badge}
            title={capabilitySection.title}
            description={capabilitySection.description}
            featureCategories={capabilitySection.services.map(service => ({
              title: service.title,
              icon: service.icon,
              features: service.items,
            }))}
            columns={3}
            cssPrefix='reputation-review-capabilities'
          />

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='reputation-review-proof'
              backgroundColor='bg-base'
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
            cssPrefix='reputation-review-qualification'
            backgroundColor='bg-alt'
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
