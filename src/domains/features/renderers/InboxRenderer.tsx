import { Inbox as InboxIcon, Mail, MessageSquare } from 'lucide-react';

import { ExploreCardsSection } from '@/components/reusable/sections/core';
import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureHeroSection,
  FeatureIconCardsSection,
  FeaturePainPointsSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { Badge } from '@/components/reusable/single/Badge';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';

interface InboxRendererProps {
  data: FeaturePageData;
}

export default function InboxRenderer({ data }: InboxRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, faq, explore, capabilities } = sections;
  const channels = sections.channels;
  const painPoints = sections.painPoints;
  const primarySystem = data.systems[0] ?? 'smart-website-systems';

  if (!channels || !painPoints) {
    return null;
  }

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={InboxIcon}
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
            visualContent={
              <Card className='p-8 bg-gradient-surface-muted'>
                <div className='l-stack'>
                  <div className='l-row l-items-center l-gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200'>
                    <Mail className='h-6 w-6 text-blue-600' />
                    <div className='flex-1'>
                      <p className='text-sm'>New email from John Smith</p>
                      <p className='text-xs text-muted-foreground'>2 minutes ago</p>
                    </div>
                    <Badge variant='outline' size='sm' context='meta'>
                      Email
                    </Badge>
                  </div>
                  <div className='l-row l-items-center l-gap-3 p-3 bg-white rounded-lg shadow-sm border border-gray-200'>
                    <MessageSquare className='h-6 w-6 text-green-600' />
                    <div className='flex-1'>
                      <p className='text-sm'>SMS from Sarah Johnson</p>
                      <p className='text-xs text-muted-foreground'>5 minutes ago</p>
                    </div>
                    <Badge variant='outline' size='sm' context='meta'>
                      SMS
                    </Badge>
                  </div>
                  <div className='text-center pt-2'>
                    <p className='text-sm text-muted-foreground'>
                      All in one inbox. No app switching. ✨
                    </p>
                  </div>
                </div>
              </Card>
            }
            cssPrefix='inbox-hero'
            backgroundColor='bg-gradient-to-b from-muted/50 to-background'
            decorations={[
              { position: 'top-right', color: 'bg-blue-200', size: 'lg' },
              { position: 'bottom-left', color: 'bg-purple-200', size: 'lg' },
            ]}
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            columns={4}
            cssPrefix='inbox-process'
            backgroundColor='bg-base'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='inbox-benefits'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            useCases={useCases.items}
            cssPrefix='inbox-use-cases'
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            cssPrefix='inbox-faq'
            backgroundColor='bg-base'
          />

          <ExploreCardsSection
            badge={explore.badge}
            title={explore.title}
            description={explore.description}
            cards={explore.cards}
            cssPrefix='inbox-explore'
            backgroundColor='bg-alt'
          />

          <FeatureIconCardsSection
            badge={channels.badge}
            title={channels.title}
            description={channels.description}
            items={channels.items}
            cssPrefix='channels-section'
          />

          <FeaturePainPointsSection
            badge={painPoints.badge}
            title={painPoints.title}
            painPoints={painPoints.items}
            cssPrefix='inbox-pain-points'
            backgroundColor='bg-alt'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            description={capabilities.description}
            featureCategories={capabilities.featureCategories}
            cssPrefix='inbox-capabilities'
            columns={capabilities.columns}
            variant={capabilities.variant}
            backgroundColor='bg-base'
          />

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
