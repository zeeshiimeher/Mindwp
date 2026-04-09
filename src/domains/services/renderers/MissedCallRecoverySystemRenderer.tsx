import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { IconTextCard, SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { missedCallRecoverySystemPage } from '@/domains/services/data/missed-call-recovery-system';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildContactHref } from '@/lib/contact/contactHref';

interface MissedCallRecoverySystemRendererProps {
  data: typeof missedCallRecoverySystemPage;
  slug: string;
}

export function MissedCallRecoverySystemRenderer({
  data,
  slug,
}: MissedCallRecoverySystemRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    signalSection,
    signalCards,
    workflowExamples,
    processSection,
    recoveryLayer,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            primaryAction={hero.primaryAction}
            list={hero.list}
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            cssPrefix='missed-call-recovery-foundation'
          />

          <section className='missed-call-recovery-signals l-section bg-base'>
            <div className='l-container'>
              <SectionIntro
                badge={signalSection.badge}
                title={signalSection.title}
                description={signalSection.description}
                cssPrefix='missed-call-recovery-signals-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-3'>
                {signalCards.map((card, index) => (
                  <IconTextCard
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    iconType={card.iconType}
                    cssPrefix='missed-call-recovery-signal'
                  />
                ))}
              </div>
            </div>
          </section>

          <section className='missed-call-recovery-workflows l-section'>
            <div className='l-container'>
              <SectionIntro
                badge={workflowExamples.badge}
                title={workflowExamples.title}
                description={workflowExamples.description}
                cssPrefix='missed-call-recovery-workflows-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-3'>
                {workflowExamples.items.map((workflow, index) => (
                  <WorkflowStepCard
                    key={index}
                    trigger={workflow.trigger}
                    actions={workflow.actions}
                    cssPrefix='missed-call-recovery-workflow'
                  />
                ))}
              </div>
            </div>
          </section>

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='missed-call-recovery-process'
            backgroundColor='bg-alt'
          />

          <ServiceSpectrumCardsSection
            badge={recoveryLayer.badge}
            title={recoveryLayer.title}
            description={recoveryLayer.description}
            cards={recoveryLayer.cards}
            cssPrefix='missed-call-recovery-layer'
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
            cssPrefix='missed-call-recovery-qualification'
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{ href: buildContactHref({ system: data.systems?.[0] ?? 'smart-website-systems', sourceType: 'service', slug }), variant: 'white' }}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
