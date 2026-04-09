import { OperationalShiftCardsSection } from '@/components/reusable/sections/core/OperationalShiftCardsSection';
import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import {
  IconListCard,
  IconTextCard,
  SectionIntro,
  WorkflowStepCard,
} from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { resolveCtaLabel } from '@/config/cta-labels';
import { crmAutomationPage } from '@/domains/services/data/crm-automation';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { buildContactHref } from '@/lib/contact/contactHref';

interface CRMAutomationRendererProps {
  data: typeof crmAutomationPage;
  slug: string;
}

export function CRMAutomationRenderer({ data, slug }: CRMAutomationRendererProps) {
  const { hero, sections, cta } = data;
  const {
    positioning,
    useCasesSection,
    featuresSection,
    workflowsSection,
    governance,
    qualification,
    connection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const heroPrimaryAction = (hero as { primaryAction?: { label: string; href: string } })
    .primaryAction ?? {
      label: resolveCtaLabel(data.systems?.[0] ?? 'crm-automation'),
      href: buildContactHref({
        system: data.systems?.[0] ?? 'crm-automation',
        sourceType: 'service',
        slug,
      }),
    };

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          {/* Hero */}
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            primaryAction={heroPrimaryAction}
            list={hero.list}
            cssPrefix={hero.cssPrefix}
          />
          <OperationalShiftCardsSection
            badge={positioning.badge}
            title={positioning.title}
            description={positioning.description}
            painPoints={positioning.painPoints}
            currentStateLabel={positioning.currentStateLabel}
            structuredStateLabel={positioning.structuredStateLabel}
            cssPrefix='crm-automation-positioning'
          />
          {/* What You Can Do */}
          <SectionWrapper className='crm-automation-use-cases' background='bg-alt'>
            <div className='crm-automation-use-cases-container-1'>
              <SectionIntro
                badge={useCasesSection.badge}
                title={useCasesSection.title}
                description={useCasesSection.description}
                cssPrefix={useCasesSection.cssPrefix}
              />

              <div className='crm-automation-use-cases-grid l-grid l-gap-6 md:l-grid-2 lg:l-grid-3'>
                {useCasesSection.items.map((useCase, index) => (
                  <IconTextCard
                    key={index}
                    icon={useCase.icon}
                    title={useCase.title}
                    description={useCase.description}
                    iconType={useCase.iconType}
                    cssPrefix='crm-automation-use-case'
                  />
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Complete Feature Categories */}
          <SectionWrapper className='crm-automation-features'>
            <div className='crm-automation-features-container-1 l-max-w-7xl'>
              <SectionIntro
                badge={featuresSection.badge}
                title={featuresSection.title}
                description={featuresSection.description}
                cssPrefix={featuresSection.cssPrefix}
              />

              <div className='crm-automation-features-grid l-grid l-gap-8 lg:l-grid-2'>
                {featuresSection.categories.map((category, catIndex) => (
                  <IconListCard
                    key={catIndex}
                    title={category.title}
                    icon={category.icon}
                    features={category.features}
                    cssPrefix='crm-automation-feature'
                  />
                ))}
              </div>
            </div>
          </SectionWrapper>

          {/* Workflow Examples */}
          <SectionWrapper className='crm-automation-workflows' background='bg-base'>
            <div className='crm-automation-workflows-container-1'>
              <SectionIntro
                badge={workflowsSection.badge}
                title={workflowsSection.title}
                description={workflowsSection.description}
                cssPrefix={workflowsSection.cssPrefix}
              />
              <div className='crm-automation-workflows-grid l-grid l-gap-6 md:l-grid-2'>
                {workflowsSection.items.map((workflow, index) => (
                  <WorkflowStepCard
                    key={index}
                    trigger={workflow.trigger}
                    actions={workflow.actions}
                    cssPrefix='crm-automation-workflow'
                  />
                ))}
              </div>
            </div>
          </SectionWrapper>

          <SectionWrapper className='crm-automation-governance'>
              <SectionIntro
                badge={governance.badge}
                title={governance.title}
                description={governance.description}
                cssPrefix={governance.cssPrefix}
              />
          </SectionWrapper>

          {/* Qualification Section */}
          <SectionWrapper className='crm-automation-qualification' background='bg-alt'>
              <SectionIntro
                title={qualification.title}
                description={qualification.description}
                cssPrefix={qualification.cssPrefix}
              />

              <div className='l-grid l-gap-8 md:l-grid-2'>
                <div>
                  <h3 className='mb-4'>{qualification.strongFitTitle}</h3>
                  <ul className='l-stack'>
                    {qualification.strongFitItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='mb-4'>{qualification.notDesignedTitle}</h3>
                  <ul className='l-stack'>
                    {qualification.notDesignedItems.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
          </SectionWrapper>
          <SectionWrapper className='crm-automation-connection'>
              <SectionIntro
                badge={connection.badge}
                title={connection.title}
                description={connection.description}
                cssPrefix={connection.cssPrefix}
              />
          </SectionWrapper>

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
