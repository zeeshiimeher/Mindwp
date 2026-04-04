import { Inbox as InboxIcon, Mail, MessageSquare } from 'lucide-react';

import {
  FeatureBenefitsSection,
  FeatureCTASection,
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
import { Card } from '@/components/ui/card';
import {
  FeatureImplementationServicesSection,
  FeatureSupportingFrameworksSection,
} from '@/domains/features/components/FeatureRelatedSections';
import { inboxData } from '@/domains/features/data/inbox';

export default function InboxRenderer() {
  const { hero, sections, cta } = inboxData;
  const { process, benefits, useCases, faq } = sections;
  const channels = sections.channels;
  const painPoints = sections.painPoints;

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
            primaryAction={hero.primaryAction}
            visualContent={
              <Card className='p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200'>
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

          <FeatureIconCardsSection
            badge={channels.badge}
            title={channels.title}
            description={channels.description}
            items={channels.items}
            backgroundColor='bg-section-surface'
            cssPrefix='channels-section'
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            columns={4}
            backgroundColor='bg-section-muted'
            cssPrefix='inbox-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            backgroundColor='bg-section-surface'
            cssPrefix='inbox-benefits'
          />

          <FeaturePainPointsSection
            badge={painPoints.badge}
            title={painPoints.title}
            painPoints={painPoints.items}
            backgroundColor='bg-section-muted'
            cssPrefix='inbox-pain-points'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            useCases={useCases.items}
            backgroundColor='bg-section-surface'
            cssPrefix='inbox-use-cases'
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            backgroundColor='bg-section-surface'
            cssPrefix='inbox-faq'
          />

          <FeatureSupportingFrameworksSection
            featureSlug={inboxData.slug}
            cssPrefix='inbox-explore'
          />

          <FeatureCTASection
            title={cta.title}
            description={cta.description}
            primaryAction={{
              variant: 'white',
              label: cta.primaryAction.label,
              href: cta.primaryAction.href,
            }}
          />

          <FeatureImplementationServicesSection
            featureSlug={inboxData.slug}
            cssPrefix='inbox-explore'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
