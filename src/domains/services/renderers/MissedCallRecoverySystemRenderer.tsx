import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  FeatureChecklistCardsSection,
  ProblemCardsSection,
  ProcessStepsSection,
  ServiceSpectrumCardsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { IconTextCard, SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { missedCallRecoverySystemPage } from '@/domains/services/data/missed-call-recovery-system';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface MissedCallRecoverySystemRendererProps {
  data: typeof missedCallRecoverySystemPage;
  slug: string;
}

export function MissedCallRecoverySystemRenderer({
  data,
  slug,
}: MissedCallRecoverySystemRendererProps) {
  const { hero, sections, cta, inlineCta } = data;
  const {
    foundation,
    signalSection,
    signalCards,
    workflowExamples,
    processSection,
    recoveryLayer,
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
            cssPrefix='missed-call-recovery-foundation'
          />

          <SectionWrapper className='missed-call-recovery-signals' background='bg-base'>
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
          </SectionWrapper>

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='missed-call-recovery-comparison'
              backgroundColor='bg-alt'
            />
          )}

          {proof &&
            (proof.cards.every(card => card.points?.length) ? (
              <FeatureChecklistCardsSection
                badge='Proof'
                title={proof.header.title}
                description={proof.header.description}
                featureCategories={proof.cards.map(card => ({
                  title: card.title,
                  description: card.description,
                  features: card.points,
                }))}
                columns={3}
                cssPrefix='missed-call-recovery-proof'
                backgroundColor='bg-base'
              />
            ) : (
              <ServiceSpectrumCardsSection
                badge='Proof'
                title={proof.header.title}
                description={proof.header.description}
                cards={proof.cards}
                cssPrefix='missed-call-recovery-proof'
                backgroundColor='bg-base'
              />
            ))}

          <SectionWrapper className='missed-call-recovery-workflows'>
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
          </SectionWrapper>

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            cta={{
              system: data.systems?.[0] ?? 'smart-website-systems',
              slug,
              pageType: 'service',
              intent: 'diagnostic',
              position: 'mid',
              title: inlineCtaTitle,
              description: inlineCtaDescription,
              primaryActionVariant: 'primary',
            }}
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

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            intent='conversion'
            position='footer'
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
