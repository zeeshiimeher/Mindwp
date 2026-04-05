import { Workflow } from 'lucide-react';

import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureCTASection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { Card } from '@/components/ui/card';
import {
  FeatureImplementationServicesSection,
  FeatureSupportingFrameworksSection,
} from '@/domains/features/components/FeatureRelatedSections';
import { workflowsData } from '@/domains/features/data/workflows';

const WorkflowVisual = () => {
  const flow = workflowsData.sections.visualFlow;
  if (!flow) return null;
  const TriggerIcon = flow.triggerIcon;
  const ConnectorIcon = flow.connectorIcon;
  const actionRowClasses = ['bg-purple-50', 'bg-green-50', 'bg-orange-50'];
  const actionIconClasses = ['bg-purple-500', 'bg-green-500', 'bg-orange-500'];

  return (
    <Card className='p-8 bg-white/80 backdrop-blur shadow-xl'>
      <div className='l-stack'>
        <div className='text-center pb-4 border-b'>
          <h4 className='text-sm'>{flow.title}</h4>
        </div>

        <div className='l-stack'>
          <div className='l-row l-items-center l-gap-3 p-3 bg-blue-50 rounded-lg border-2 border-blue-300'>
            <div className='icon-container-sm bg-blue-500 rounded-full'>
              <TriggerIcon className='text-white' />
            </div>
            <div className='text-sm'>
              <div className='text-blue-900'>{flow.triggerTitle}</div>
              <div className='text-xs text-blue-600'>{flow.triggerSubtitle}</div>
            </div>
          </div>

          {flow.actions.map((action, index) => {
            const ActionIcon = action.icon;
            return (
              <div key={index} className='l-stack l-stack--tight'>
                <div className='l-row l-row-center'>
                  <ConnectorIcon className='text-muted-foreground rotate-90' />
                </div>
                <div
                  className={`l-row l-items-center l-gap-3 p-3 rounded-lg ${actionRowClasses[index]}`}
                >
                  <div
                    className={`icon-container-sm rounded-full ${actionIconClasses[index]}`}
                  >
                    <ActionIcon className='text-white' />
                  </div>
                  <div className='text-sm'>
                    <div>{action.title}</div>
                    <div className='text-xs text-muted-foreground'>{action.subtitle}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};

export default function WorkflowsRenderer() {
  const { hero, sections, cta } = workflowsData;
  const { process, benefits, useCases, capabilities, faq } = sections;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={Workflow}
            title={hero.title}
            description={hero.description}
            stats={hero.stats}
            primaryAction={hero.primaryAction}
            visualContent={<WorkflowVisual />}
            cssPrefix='workflows-hero'
            backgroundColor='bg-gradient-to-br from-purple-50 via-white to-blue-50'
            decorations={[
              { position: 'top-right', color: 'bg-purple-200', size: 'lg' },
              { position: 'bottom-left', color: 'bg-blue-200', size: 'lg' },
            ]}
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            backgroundColor='bg-section-surface'
            cssPrefix='workflows-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            backgroundColor='bg-section-muted'
            cssPrefix='workflows-benefits'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            backgroundColor='bg-section-surface'
            cssPrefix='workflows-use-cases'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            featureCategories={capabilities.featureCategories}
            backgroundColor='bg-section-muted'
            cssPrefix='workflows-features'
            columns={capabilities.columns}
            variant={capabilities.variant}
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            faqs={faq.items}
            backgroundColor='bg-section-surface'
            cssPrefix='workflows-faq'
          />

          <FeatureSupportingFrameworksSection
            featureSlug={workflowsData.slug}
            cssPrefix='workflows-explore'
          />

          <FeatureCTASection
            title={cta.title}
            description={cta.description}
            primaryAction={{
              variant: 'white',
              label: cta.primaryAction.label,
              href: cta.primaryAction.href,
            }}
            cssPrefix='workflows-cta'
            backgroundColor='bg-gradient-secondary'
          />

          <FeatureImplementationServicesSection
            featureSlug={workflowsData.slug}
            cssPrefix='workflows-explore'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
