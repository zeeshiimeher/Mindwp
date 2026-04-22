import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ChecklistCardsSection,
  DualToneChecklistComparisonSection,
  FeatureChecklistCardsSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
  StackedFeatureListSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { renderAlternatingSection } from '@/domains/services/renderers/renderAlternatingSection';

interface AiLeadHandlingRendererProps {
  data: ServicePageDataBySlug['ai-lead-handling'];
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
  const heroCssPrefix = (hero as { cssPrefix?: string }).cssPrefix;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge ?? data.badge}
            title={hero.title}
            description={hero.description}
            smartCta={{
              system: data.systems?.[0] ?? 'smart-website-systems',
              pageType: 'service',
              slug,
              primaryActionVariant: 'primary',
            }}
            list={hero.list}
            cssPrefix={heroCssPrefix}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            cssPrefix='ai-response-foundation'
          />

          <FeatureChecklistCardsSection
            badge={featureCategoriesSection.badge}
            title={featureCategoriesSection.title}
            description={featureCategoriesSection.description}
            featureCategories={featureCategoriesSection.items}
            columns={featureCategoriesSection.columns}
            variant={featureCategoriesSection.variant}
            cssPrefix='ai-response-features'
            backgroundColor='bg-base'
          />

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='ai-response-process'
          />

          {renderAlternatingSection(
            {
              badge: workflowExamples.badge,
              title: workflowExamples.title,
              description: workflowExamples.description,
              alternatingItems: workflowExamples.alternatingItems,
              cssPrefix: 'ai-response-workflows',
              backgroundColor: 'bg-alt',
            },
            <SectionWrapper className='ai-response-workflows' background='bg-alt'>
              <SectionIntro
                badge={workflowExamples.badge}
                title={workflowExamples.title}
                description={workflowExamples.description}
                cssPrefix='ai-response-workflows-header'
              />

              <div className='l-grid l-gap-6 md:l-grid-2'>
                {workflowExamples.items.map(workflow => (
                  <WorkflowStepCard
                    key={workflow.trigger}
                    trigger={workflow.trigger}
                    actions={workflow.actions}
                    cssPrefix='ai-response-workflow'
                  />
                ))}
              </div>
            </SectionWrapper>
          )}

          <ServiceSpectrumCardsSection
            badge={useCasesSection.badge}
            title={useCasesSection.title}
            description={useCasesSection.description}
            cards={useCasesSection.cards}
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
            cssPrefix='ai-response-positioning'
            backgroundColor='bg-base'
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
            cssPrefix='ai-response-qualification'
            backgroundColor='bg-alt'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix='ai-response-faq'
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
