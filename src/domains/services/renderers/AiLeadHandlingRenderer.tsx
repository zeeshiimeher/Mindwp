import {
  ChecklistCardsSection,
  DualToneChecklistComparisonSection,
  FeatureChecklistCardsSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { aiLeadHandlingPage } from '@/domains/services/data/ai-lead-handling';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface AiLeadHandlingRendererProps {
  data: typeof aiLeadHandlingPage;
  slug: string;
}

export function AiLeadHandlingRenderer({ data, slug }: AiLeadHandlingRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    featureCategoriesSection,
    processSection,
    workflowExamples,
    useCasesSection,
    positioning,
    checklistSection,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const ctaButtonText = cta?.buttonText ?? SERVICE_RENDERER_DEFAULTS.ctaButtonText;
  const ctaButtonHref = cta?.buttonHref ?? SERVICE_RENDERER_DEFAULTS.ctaButtonHref;
  const heroCssPrefix = (hero as { cssPrefix?: string }).cssPrefix;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge ?? data.badge}
            title={hero.title}
            description={hero.description}
            primaryAction={hero.primaryAction}
            list={hero.list}
            cssPrefix={heroCssPrefix}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            backgroundColor='bg-section-surface'
            cssPrefix='ai-response-foundation'
          />

          <FeatureChecklistCardsSection
            badge={featureCategoriesSection.badge}
            title={featureCategoriesSection.title}
            description={featureCategoriesSection.description}
            featureCategories={featureCategoriesSection.items}
            columns={featureCategoriesSection.columns}
            variant={featureCategoriesSection.variant}
            backgroundColor='bg-section-muted'
            cssPrefix='ai-response-features'
          />

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            backgroundColor='bg-section-surface'
            cssPrefix='ai-response-process'
          />

          <section className='ai-response-workflows l-section bg-background'>
            <div className='l-container'>
              <SectionIntro
                badge={workflowExamples.badge}
                title={workflowExamples.title}
                description={workflowExamples.description}
                cssPrefix='ai-response-workflows-header'
              />

              <div className='l-grid l-gap-6 md:l-grid-2'>
                {workflowExamples.items.map((workflow, index) => (
                  <WorkflowStepCard
                    key={index}
                    trigger={workflow.trigger}
                    actions={workflow.actions}
                    cssPrefix='ai-response-workflow'
                  />
                ))}
              </div>
            </div>
          </section>

          <ServiceSpectrumCardsSection
            badge={useCasesSection.badge}
            title={useCasesSection.title}
            description={useCasesSection.description}
            cards={useCasesSection.cards}
            backgroundColor='bg-section-muted'
            cssPrefix='ai-response-use-cases'
          />

          <StackedFeatureListSection
            badge={positioning.badge}
            title={positioning.title}
            description={positioning.description}
            tagline={positioning.tagline}
            narrativeTitle={positioning.narrativeTitle}
            narrativeParagraphs={positioning.narrativeParagraphs}
            features={positioning.features}
            backgroundColor='bg-section-surface'
            cssPrefix='ai-response-positioning'
          />

          <ChecklistCardsSection
            badge={checklistSection.badge}
            title={checklistSection.title}
            description={checklistSection.description}
            items={checklistSection.items}
            columns={checklistSection.columns}
            cssPrefix='ai-response-included'
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
            backgroundColor='bg-section-surface'
            cssPrefix='ai-response-qualification'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix='ai-response-faq'
          />
          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{ label: ctaButtonText, href: ctaButtonHref, variant: 'white' }}
          />
          <ServiceRelatedServicesSection serviceSlug={slug} />
        </main>
      </ErrorBoundary>
    </>
  );
}
