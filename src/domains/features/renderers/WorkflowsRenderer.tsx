import { Workflow } from 'lucide-react';

import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';

const WorkflowVisual = ({ data }: { data: FeaturePageData }) => {
  const flow = data.sections.visualFlow;
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
                  <div className={`icon-container-sm rounded-full ${actionIconClasses[index]}`}>
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

interface WorkflowsRendererProps {
  data: FeaturePageData;
}

export default function WorkflowsRenderer({ data }: WorkflowsRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, capabilities, faq } = sections;
  const primarySystem = data.systems[0] ?? 'smart-website-systems';

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
            smartCta={{
              system: primarySystem,
              pageType: 'feature',
              slug: data.slug,
              primaryActionVariant: 'primary',
              primaryButtonCssPrefix: 'feature-hero__primary-cta',
            }}
            visualContent={<WorkflowVisual data={data} />}
            cssPrefix='workflows-hero'
            backgroundColor='bg-gradient-surface-soft'
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
            cssPrefix='workflows-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='workflows-benefits'
            backgroundColor='bg-base'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            cssPrefix='workflows-use-cases'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            featureCategories={capabilities.featureCategories}
            cssPrefix='workflows-features'
            columns={capabilities.columns}
            variant={capabilities.variant}
            backgroundColor='bg-alt'
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            faqs={faq.items}
            cssPrefix='workflows-faq'
          />

          <SmartCTA
            system={primarySystem}
            pageType='feature'
              slug={data.slug}
            title={cta.title}
            description={cta.description}
            primaryActionVariant='white'
            cssPrefix='workflows-cta'
            backgroundColor='bg-gradient-secondary'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
