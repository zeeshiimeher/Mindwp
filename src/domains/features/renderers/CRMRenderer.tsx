import { Inbox, Mail, MessageSquare, Phone, Users } from 'lucide-react';

import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';
import { getVariantStyles } from '@/lib/ui/variantStyles';

interface CRMRendererProps {
  data: FeaturePageData;
}

export default function CRMRenderer({ data }: CRMRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, capabilities, faq } = sections;
  const primarySystem = data.systems[0] ?? 'smart-website-systems';

  const heroVisual = (
    <Card className='p-8 bg-white/80 backdrop-blur shadow-xl'>
      <div className='l-stack'>
        <div className='l-row l-items-center l-row-between pb-4 border-b'>
          <h4 className='text-sm'>Contact Details</h4>
          <Badge variant='outline' size='sm' context='meta'>
            Lead
          </Badge>
        </div>

        <div className='l-stack'>
          <div className='l-row l-items-center l-gap-3'>
            <div className={`icon-container-xs ${getVariantStyles('secondary').icon.bg}`}>
              <Users className={getVariantStyles('secondary').icon.text} />
            </div>
            <div className='text-sm'>Sarah Johnson</div>
          </div>
          <div className='l-row l-items-center l-gap-3'>
            <div className={`icon-container-xs ${getVariantStyles('accent').icon.bg}`}>
              <Mail className={getVariantStyles('accent').icon.text} />
            </div>
            <div className='text-sm text-muted-foreground'>sarah@example.com</div>
          </div>
          <div className='l-row l-items-center l-gap-3'>
            <div className={`icon-container-xs ${getVariantStyles('success').icon.bg}`}>
              <Phone className={getVariantStyles('success').icon.text} />
            </div>
            <div className='text-sm text-muted-foreground'>(555) 123-4567</div>
          </div>
        </div>

        <div className='pt-4 border-t'>
          <div className='text-xs text-muted-foreground mb-3'>Recent Activity</div>
          <div className='l-stack l-stack--tight'>
            <div className='l-row l-items-start l-gap-2 text-xs bg-blue-50 p-2 rounded'>
              <Mail className={getVariantStyles('secondary').icon.text} />
              <div>
                <div className='text-blue-900'>Email sent: Follow-up #2</div>
                <div className='text-blue-600'>2 hours ago</div>
              </div>
            </div>
            <div className='l-row l-items-start l-gap-2 text-xs bg-green-50 p-2 rounded'>
              <MessageSquare className={getVariantStyles('success').icon.text} />
              <div>
                <div className='text-green-900'>Chat: Asked about pricing</div>
                <div className='text-green-600'>Yesterday</div>
              </div>
            </div>
          </div>
        </div>

        <div className='l-row l-gap-2 pt-4'>
          <div className='flex-1'>
            <Button variant='outline' cssPrefix='btn-block'>
              Send Email
            </Button>
          </div>
          <div className='flex-1'>
            <Button variant='outline' cssPrefix='btn-block'>
              Add Note
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={Inbox}
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
            visualContent={heroVisual}
            cssPrefix='crm-hero'
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            cssPrefix='crm-how-it-works'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='crm-benefits'
            backgroundColor='bg-alt'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            cssPrefix='crm-use-cases'
            solutionLabel={useCases.solutionLabel}
            iconBackground='icon-bg-gradient-primary'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            featureCategories={capabilities.featureCategories}
            cssPrefix='crm-features'
            backgroundColor='bg-base'
          />

          <FAQSection badge={faq.badge} title={faq.title} faqs={faq.items} cssPrefix='crm-faq' />

          <SmartCTA
            system={primarySystem}
            pageType='feature'
            slug={data.slug}
            title={cta.title}
            description={cta.description}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
