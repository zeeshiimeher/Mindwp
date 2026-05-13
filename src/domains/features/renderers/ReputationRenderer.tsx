import { Star, TrendingUp } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import { ExploreCardsSection } from '@/components/reusable/sections/core';
import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { Badge } from '@/components/reusable/single/Badge';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { TestimonialCard } from '@/components/reusable/single/TestimonialCard';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';
import { getVariantStyles } from '@/lib/ui/variantStyles';

const ReviewsVisual = () => (
  <Card className='p-8 bg-white/80 backdrop-blur shadow-xl'>
    <div className='l-stack'>
      <div className='text-center pb-4 border-b'>
        <h4 className='text-sm mb-3'>Recent Reviews</h4>
        <div className='l-row l-row-center l-gap-2 mb-2'>
          {Array.from({ length: 5 }, (_, starValue) => starValue + 1).map(starValue => (
            <Star
              key={`review-summary-star-${starValue}`}
              className='w-6 h-6 fill-yellow-400 text-yellow-400'
            />
          ))}
        </div>
        <div className='text-2xl text-primary'>4.9</div>
        <div className='text-xs text-muted-foreground'>Based on 127 reviews</div>
      </div>

      <div className='l-stack'>
        {[
          {
            name: 'Sarah M.',
            stars: 5,
            text: 'Excellent service! Highly recommend...',
          },
          {
            name: 'John D.',
            stars: 5,
            text: "Best experience I've had. Professional...",
          },
          {
            name: 'Emma L.',
            stars: 5,
            text: 'Amazing quality and great communication...',
          },
        ].map(review => (
          <div key={review.name} className='p-3 bg-slate-50 rounded-lg'>
            <div className='l-row l-items-center l-row-between mb-2'>
              <div className='text-sm'>{review.name}</div>
              <div className='l-row l-gap-2'>
                {Array.from({ length: review.stars }, (_, starValue) => starValue + 1).map(
                  starValue => (
                    <Star
                      key={`${review.name}-star-${starValue}`}
                      className={`${getVariantStyles('warning').icon.text} fill-current`}
                    />
                  )
                )}
              </div>
            </div>
            <p className='text-xs text-muted-foreground'>{review.text}</p>
          </div>
        ))}
      </div>

      <div className='pt-4 border-t text-center'>
        <div className='text-xs text-green-600 l-row l-items-center l-row-center l-gap-2'>
          <TrendingUp className={getVariantStyles('success').icon.text} />
          +15 new reviews this month
        </div>
      </div>
    </div>
  </Card>
);

interface ReputationRendererProps {
  data: FeaturePageData;
}

export default function ReputationRenderer({ data }: ReputationRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, capabilities, faq, explore } = sections;
  const testimonials = sections.testimonials;

  if (!testimonials) {
    throw new Error('Missing section data');
  }

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={Star}
            title={hero.title}
            description={hero.description}
            stats={hero.stats}
            heroActions={{
              primaryActionVariant: 'primary',
              primaryButtonCssPrefix: 'feature-hero__primary-cta',
            }}
            visualContent={<ReviewsVisual />}
            cssPrefix='reputation-hero'
            decorations={[
              { position: 'top-right', color: 'bg-yellow-200', size: 'lg' },
              { position: 'bottom-left', color: 'bg-orange-200', size: 'lg' },
            ]}
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            cssPrefix='reputation-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='reputation-benefits'
            backgroundColor='bg-base'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            cssPrefix='reputation-use-cases'
            solutionLabel={useCases.solutionLabel}
            iconBackground='icon-bg-gradient-accent'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            description={capabilities.description}
            featureCategories={capabilities.featureCategories}
            cssPrefix='reputation-features'
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            cssPrefix='reputation-faq'
          />

          <ExploreCardsSection
            badge={explore.badge}
            title={explore.title}
            description={explore.description}
            cards={explore.cards}
            cssPrefix='reputation-explore'
            backgroundColor='bg-alt'
          />

          <SectionWrapper>
            <div className='text-center mb-12'>
              <Badge variant='primary' cssPrefix='mb-4'>
                {testimonials.badge}
              </Badge>
              <h2 className='text-3xl font-bold mb-4'>{testimonials.title}</h2>
              <p className='text-muted-foreground l-max-w-2xl l-mx-auto'>
                {testimonials.description}
              </p>
            </div>
            <div className='l-grid l-gap-8 md:l-grid-2 lg:l-grid-3'>
              {testimonials.items.map(
                (testimonial: {
                  quote: string;
                  author: string;
                  business: string;
                  rating?: number;
                }) => (
                  <TestimonialCard
                    key={`${testimonial.author}-${testimonial.business}`}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    business={testimonial.business}
                    rating={testimonial.rating}
                  />
                )
              )}
            </div>
          </SectionWrapper>

          <PrimaryCTASection heading={cta.heading} actions={cta.actions} />
        </main>
      </ErrorBoundary>
    </>
  );
}
