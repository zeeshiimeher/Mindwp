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
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface MissedCallRecoverySystemRendererProps {
  data: ServicePageDataBySlug['missed-call-recovery-system'];
  slug: string;
}

export function MissedCallRecoverySystemRenderer({
  data,
  slug: _slug,
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
  if (!inlineCta) {
    throw new Error('MissedCallRecoverySystemRenderer requires inlineCta content.');
  }

  const ctaTitle = cta.title;
  const ctaDescription = cta.description;
  const inlineCtaTitle = inlineCta.title;
  const inlineCtaDescription = inlineCta.description;

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
              {signalCards.map(card => (
                <IconTextCard
                  key={card.title}
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
              {workflowExamples.items.map(workflow => (
                <WorkflowStepCard
                  key={workflow.trigger}
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
