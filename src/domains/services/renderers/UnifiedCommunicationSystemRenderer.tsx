import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import {
  IconListCard,
  IconTextCard,
  SectionIntro,
  WorkflowStepCard,
} from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { RiskListCard } from '@/components/reusable/single/RiskListCard';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { unifiedCommunicationSystemPage } from '@/domains/services/data/unified-communication-system';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface UnifiedCommunicationSystemRendererProps {
  data: typeof unifiedCommunicationSystemPage;
  slug: string;
}

export function UnifiedCommunicationSystemRenderer({
  data,
  slug,
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
              {channelSignals.items.map((item, index) => (
                <IconTextCard
                  key={index}
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
              {ownershipRisks.lists.map((list, index) => (
                <RiskListCard
                  key={index}
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
              {workflowExamples.items.map((workflow, index) => (
                <WorkflowStepCard
                  key={index}
                  trigger={workflow.trigger}
                  actions={workflow.actions}
                  cssPrefix='unified-communication-workflow'
                />
              ))}
            </div>
          </SectionWrapper>

          <ProcessStepsSection
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
            columns={4}
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
              {operatingLayers.columns.map((column, index) => (
                <IconListCard
                  key={index}
                  title={column.title}
                  icon={column.icon}
                  features={column.features}
                  cssPrefix='unified-communication-layer'
                />
              ))}
            </div>
          </SectionWrapper>

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

            <ServiceCTASection
              system={data.systems?.[0] ?? 'smart-website-systems'}
              slug={slug}
              title={ctaTitle}
              description={ctaDescription}
              primaryActionVariant='white'
            />
        </main>
      </ErrorBoundary>
    </>
  );
}
