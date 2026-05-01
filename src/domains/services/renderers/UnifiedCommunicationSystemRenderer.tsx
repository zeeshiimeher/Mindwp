import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ServiceSpectrumCardsSection,
  StepCardsSplitSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import {
  IconListCard,
  IconTextCard,
  SectionIntro,
  WorkflowStepCard,
} from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { RiskListCard } from '@/components/reusable/single/RiskListCard';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface UnifiedCommunicationSystemRendererProps {
  data: ServicePageDataBySlug['unified-communication-system'];
  slug: string;
}

export function UnifiedCommunicationSystemRenderer({
  data,
  slug: _slug,
}: UnifiedCommunicationSystemRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    channelSignals,
    ownershipRisks,
    workflowExamples,
    operatingLayers,
    qualification,
    faqSection,
    comparison,
    proof,
  } = sections;
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
            cssPrefix='unified-communication-foundation'
          />

          <SectionWrapper className='unified-communication-channels' background='bg-alt'>
            <SectionIntro
              badge={channelSignals.badge}
              title={channelSignals.title}
              description={channelSignals.description}
              cssPrefix='unified-communication-channels-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-4'>
              {channelSignals.items.map(item => (
                <IconTextCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  iconType={item.iconType}
                  cssPrefix='unified-communication-channel'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='unified-communication-risks'>
            <SectionIntro
              badge={ownershipRisks.badge}
              title={ownershipRisks.title}
              description={ownershipRisks.description}
              cssPrefix='unified-communication-risks-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2'>
              {ownershipRisks.lists.map(list => (
                <RiskListCard
                  key={list.title}
                  title={list.title}
                  issues={list.issues}
                  cssPrefix='unified-communication-risk-card'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='unified-communication-workflows' background='bg-base'>
            <SectionIntro
              badge={workflowExamples.badge}
              title={workflowExamples.title}
              description={workflowExamples.description}
              cssPrefix='unified-communication-workflows-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {workflowExamples.items.map(workflow => (
                <WorkflowStepCard
                  key={workflow.trigger}
                  trigger={workflow.trigger}
                  actions={workflow.actions}
                  cssPrefix='unified-communication-workflow'
                />
              ))}
            </div>
          </SectionWrapper>

          <StepCardsSplitSection
            badge={operatingLayers.badge}
            title={operatingLayers.title}
            description={operatingLayers.description}
            steps={[
              {
                number: '1',
                title: 'Collect the conversations',
                description:
                  'Bring the important incoming channels into a clearer shared operating view.',
              },
              {
                number: '2',
                title: 'Define routing and ownership',
                description:
                  'Decide who should handle what, how priority works, and where each conversation should go next.',
              },
              {
                number: '3',
                title: 'Carry context across handoffs',
                description:
                  'Make sure the conversation history stays useful when the next person or system takes over.',
              },
              {
                number: '4',
                title: 'Reduce silent drop-off',
                description:
                  'Improve visibility so important conversations do not stall simply because nobody owned them clearly.',
              },
            ]}
            cssPrefix='unified-communication-process'
          />

          <SectionWrapper className='unified-communication-layers' background='bg-base'>
            <SectionIntro
              badge={operatingLayers.introBadge}
              title={operatingLayers.introTitle}
              description={operatingLayers.introDescription}
              cssPrefix='unified-communication-layers-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {operatingLayers.columns.map(column => (
                <IconListCard
                  key={column.title}
                  title={column.title}
                  icon={column.icon}
                  features={column.features}
                  cssPrefix='unified-communication-layer'
                />
              ))}
            </div>
          </SectionWrapper>

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='unified-communication-comparison'
            />
          )}

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='unified-communication-proof'
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
            cssPrefix='unified-communication-qualification'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
            backgroundColor='bg-alt'
          />

          <PrimaryCTASection heading={cta.heading} actions={cta.actions} />
        </main>
      </ErrorBoundary>
    </>
  );
}
