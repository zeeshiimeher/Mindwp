import { BrainCircuit, CheckCircle2, Phone, PhoneCall } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { ExploreCardsSection } from '@/components/reusable/sections/core';
import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { TestimonialCard } from '@/components/reusable/single/TestimonialCard';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';
import { getVariantStyles } from '@/lib/ui/variantStyles';

interface VoiceCallsRendererProps {
  data: FeaturePageData;
}

export default function VoiceCallsRenderer({ data }: VoiceCallsRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, capabilities, faq, explore } = sections;
  const testimonial = sections.testimonial;

  if (!testimonial) {
    throw new Error('Missing section data');
  }

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={Phone}
            title={hero.title}
            description={hero.description}
            stats={hero.stats}
            heroActions={{
              primaryActionVariant: 'primary',
              primaryButtonCssPrefix: 'feature-hero__primary-cta',
            }}
            visualContent={
              <Card className='p-8 bg-white/80 backdrop-blur shadow-xl'>
                <div className='l-stack l-stack--loose'>
                  <div className='l-row l-items-center l-gap-4 p-4 bg-green-50 border-2 border-green-200 rounded-lg'>
                    <div className='w-12 h-12 bg-green-500 rounded-full l-row l-items-center l-row-center animate-pulse'>
                      <PhoneCall className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='text-sm text-green-900'>Incoming Call</div>
                      <div className='text-xs text-green-700'>
                        Customer: &ldquo;I need an appointment&rdquo;
                      </div>
                    </div>
                  </div>

                  <div className='l-row l-items-center l-gap-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg'>
                    <div className='w-12 h-12 bg-blue-500 rounded-full l-row l-items-center l-row-center'>
                      <BrainCircuit className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='text-sm text-blue-900'>AI Assistant</div>
                      <div className='text-xs text-blue-700'>
                        &ldquo;I&apos;d be happy to book that for you...&rdquo;
                      </div>
                    </div>
                  </div>

                  <div className='l-row l-items-center l-gap-4 p-4 bg-purple-50 border-2 border-purple-200 rounded-lg'>
                    <div className='w-12 h-12 bg-purple-500 rounded-full l-row l-items-center l-row-center'>
                      <CheckCircle2 className='w-6 h-6 text-white' />
                    </div>
                    <div>
                      <div className='text-sm text-purple-900'>Booked</div>
                      <div className='text-xs text-purple-700'>Tuesday 2pm - Added to calendar</div>
                    </div>
                  </div>

                  <div className='text-center pt-4 border-t'>
                    <div className='l-row l-items-center l-row-center l-gap-2 text-sm text-muted-foreground'>
                      <CheckCircle2 className={getVariantStyles('success').icon.text} />
                      Call completed in 45 seconds
                    </div>
                  </div>
                </div>
              </Card>
            }
            cssPrefix='voice-ai-hero'
            backgroundColor='bg-gradient-surface-soft'
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
            cssPrefix='voice-ai-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='voice-ai-benefits'
            backgroundColor='bg-alt'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            cssPrefix='voice-ai-use-cases'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            featureCategories={capabilities.featureCategories}
            cssPrefix='voice-ai-features'
            columns={capabilities.columns}
            variant={capabilities.variant}
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            cssPrefix='voice-ai-faq'
          />

          <ExploreCardsSection
            badge={explore.badge}
            title={explore.title}
            description={explore.description}
            cards={explore.cards}
            cssPrefix='voice-ai-explore'
            backgroundColor='bg-base'
          />

          <SectionWrapper className='voice-ai-testimonial' background='bg-gradient-surface-muted'>
            <TestimonialCard
              title={testimonial.title}
              quote={testimonial.quote}
              author={testimonial.author}
              business={testimonial.business}
              rating={testimonial.rating}
              className='bg-white/80 backdrop-blur shadow-xl'
            />
          </SectionWrapper>

          <PrimaryCTASection heading={cta.heading} actions={cta.actions} />
        </main>
      </ErrorBoundary>
    </>
  );
}
