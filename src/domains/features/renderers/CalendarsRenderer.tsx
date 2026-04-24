import { Calendar, CheckCircle2 } from 'lucide-react';

import { ExploreCardsSection } from '@/components/reusable/sections/core';
import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { Button } from '@/components/reusable/single/Button';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';

const BookingVisual = () => (
  <Card className='p-8 bg-white/80 backdrop-blur shadow-xl'>
    <div className='l-stack'>
      <div className='text-center pb-4 border-b'>
        <h4 className='text-sm mb-2'>Book an Appointment</h4>
        <div className='l-stack l-stack--tight'>
          <div
            className='p-3 bg-blue-50 rounded-lg border-2 border-blue-300 cursor-pointer hover:bg-blue-100 transition-colors'
            role='button'
            tabIndex={0}
            aria-label='Service selection active - Choose staff and service'
          >
            <div className='text-sm'>Service Selection</div>
            <div className='text-xs text-muted-foreground'>Choose staff & service</div>
          </div>
          <div
            className='p-3 bg-slate-50 rounded-lg border cursor-pointer opacity-60 hover:opacity-80 transition-opacity'
            role='button'
            tabIndex={0}
            aria-label='Time selection inactive - Pick available slot'
          >
            <div className='text-sm'>Time Selection</div>
            <div className='text-xs text-muted-foreground'>Pick available slot</div>
          </div>
        </div>
      </div>

      <div>
        <h4 className='text-sm mb-3'>Available Times</h4>
        <div className='l-grid l-grid-2 sm:l-grid-3 l-gap-2'>
          {['Morning', 'Afternoon', 'Evening'].map(time => (
            <div
              key={time}
              className={`p-2 text-center text-xs rounded-lg border-2 cursor-pointer bg-white border-border hover:border-blue-300 transition-colors`}
              role='button'
              tabIndex={0}
              aria-label={`Select ${time.toLowerCase()} time slot`}
            >
              {time}
            </div>
          ))}
        </div>
      </div>

      <div className='pt-4 border-t'>
        <Button variant='outline' icon={CheckCircle2} showDefaultIcon cssPrefix='btn-block'>
          Confirm Booking
        </Button>
      </div>
    </div>
  </Card>
);

interface CalendarsRendererProps {
  data: FeaturePageData;
}

export default function CalendarsRenderer({ data }: CalendarsRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, capabilities, faq, explore } = sections;
  const primarySystem = data.systems[0] ?? 'smart-website-systems';

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={Calendar}
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
            visualContent={<BookingVisual />}
            cssPrefix='calendars-hero'
            backgroundColor='bg-gradient-surface-soft'
            decorations={[
              { position: 'top-right', color: 'bg-green-200', size: 'lg' },
              { position: 'bottom-left', color: 'bg-blue-200', size: 'lg' },
            ]}
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            cssPrefix='calendars-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='calendars-benefits'
            backgroundColor='bg-base'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            cssPrefix='calendars-use-cases'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            featureCategories={capabilities.featureCategories}
            cssPrefix='calendars-features'
            columns={capabilities.columns}
            variant={capabilities.variant}
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            cssPrefix='calendars-faq'
          />

          <ExploreCardsSection
            badge={explore.badge}
            title={explore.title}
            description={explore.description}
            cards={explore.cards}
            cssPrefix='calendars-explore'
            backgroundColor='bg-alt'
          />

          <SmartCTA
            system={primarySystem}
            pageType='feature'
            slug={data.slug}
            title={cta.title}
            description={cta.description}
            primaryActionVariant='white'
            metaItems={cta.metaItems}
            cssPrefix='calendars-cta'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
