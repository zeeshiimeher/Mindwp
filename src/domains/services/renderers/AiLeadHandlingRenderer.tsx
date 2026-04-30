/* eslint-disable @typescript-eslint/no-explicit-any */

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ChecklistCardsSection,
  ComparisonSection,
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
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { renderAlternatingSection } from '@/domains/services/renderers/renderAlternatingSection';
import type { ServicePageData } from '@/domains/services/types';

type AiLeadHandlingSections = {
  foundation: any;
  featureCategoriesSection: any;
  comparison?: any;
  processSection: any;
  workflowExamples: any;
  useCasesSection: any;
  positioning: any;
  proof?: any;
  checklistSection: any;
  qualification: any;
  faqSection: any;
};

interface AiLeadHandlingRendererProps {
  data: ServicePageData;
  slug: string;
}

export function AiLeadHandlingRenderer({ data, slug: _slug }: AiLeadHandlingRendererProps) {
  const { hero, cta } = data;
  const sections = data.sections as AiLeadHandlingSections;
  const {
    foundation,
    featureCategoriesSection,
    comparison,
    processSection,
    workflowExamples,
    useCasesSection,
    positioning,
    proof,
    checklistSection,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta.title;
  const ctaDescription = cta.description;
  const heroCssPrefix = (hero as { cssPrefix?: string }).cssPrefix;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge ?? data.badge}
            title={hero.title}
            description={hero.description}
            heroActions={{
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

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='ai-response-comparison'
            />
          )}

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
                {workflowExamples.items.map((workflow: (typeof workflowExamples.items)[number]) => (
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

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='ai-response-proof'
              backgroundColor='bg-alt'
            />
          )}

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
          <PrimaryCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
