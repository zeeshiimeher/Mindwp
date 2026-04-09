import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { SectionIntro, WorkflowStepCard } from '@/components/reusable/single';
import { AuditChecklistCard } from '@/components/reusable/single/AuditChecklistCard';
import { CenteredFeatureCard } from '@/components/reusable/single/CenteredFeatureCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { marketingAutomationSetupPage } from '@/domains/services/data/marketing-automation-setup';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildServiceContactHref } from '@/lib/contact/contactHref';

interface MarketingAutomationSetupRendererProps {
  data: typeof marketingAutomationSetupPage;
  slug: string;
}

export function MarketingAutomationSetupRenderer({
  data,
  slug,
}: MarketingAutomationSetupRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    automationExamples,
    governanceAreas,
    automationLayers,
    processSection,
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
            cssPrefix='marketing-automation-foundation'
          />

          <SectionWrapper className='marketing-automation-examples' background='bg-alt'>
            <SectionIntro
              badge={automationExamples.badge}
              title={automationExamples.title}
              description={automationExamples.description}
              cssPrefix='marketing-automation-examples-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {automationExamples.items.map((workflow, index) => (
                <WorkflowStepCard
                  key={index}
                  trigger={workflow.trigger}
                  actions={workflow.actions}
                  cssPrefix='marketing-automation-example'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='marketing-automation-governance'>
            <SectionIntro
              badge={governanceAreas.badge}
              title={governanceAreas.title}
              description={governanceAreas.description}
              cssPrefix='marketing-automation-governance-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {governanceAreas.items.map((item, index) => (
                <AuditChecklistCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  checks={item.checks}
                  iconType={item.iconType}
                  cssPrefix='marketing-automation-governance-card'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='marketing-automation-layers' background='bg-base'>
            <SectionIntro
              badge={automationLayers.badge}
              title={automationLayers.title}
              description={automationLayers.description}
              cssPrefix='marketing-automation-layers-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-4'>
              {automationLayers.items.map((item, index) => (
                <CenteredFeatureCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  cssPrefix='marketing-automation-layer'
                />
              ))}
            </div>
          </SectionWrapper>

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='marketing-automation-process'
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
            cssPrefix='marketing-automation-qualification'
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
            primaryAction={{
              href: buildServiceContactHref({
                system: data.systems?.[0] ?? 'smart-website-systems',
                slug,
              }),
              variant: 'white',
            }}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
