import { Star, TrendingUp } from 'lucide-react';

import {
  FeatureBenefitsSection,
  FeatureCapabilitiesSection,
  FeatureCTASection,
  FeatureHeroSection,
  FeatureProcessStepsSection,
  FeatureUseCasesSection,
} from '@/components/reusable/sections/features';
import { Badge } from '@/components/reusable/single/Badge';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { TestimonialCard } from '@/components/reusable/single/TestimonialCard';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { Card } from '@/components/ui/card';
import {
  FeatureImplementationServicesSection,
  FeatureSupportingFrameworksSection,
} from '@/domains/features/components/FeatureRelatedSections';
import { reputationData } from '@/domains/features/data/reputation';

const ReviewsVisual = () => (
  <Card className='p-8 bg-white/80 backdrop-blur shadow-xl'>
    <div className='l-stack'>
      <div className='text-center pb-4 border-b'>
        <h4 className='text-sm mb-3'>Recent Reviews</h4>
        <div className='l-row l-row-center l-gap-2 mb-2'>
          {[...Array(5)].map((_, i) => (
            <Star key={i} className='w-6 h-6 fill-yellow-400 text-yellow-400' />
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
        ].map((review, i) => (
          <div key={i} className='p-3 bg-slate-50 rounded-lg'>
            <div className='l-row l-items-center l-row-between mb-2'>
              <div className='text-sm'>{review.name}</div>
              <div className='l-row l-gap-2'>
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} className='w-3 h-3 fill-yellow-400 text-yellow-400' />
                ))}
              </div>
            </div>
            <p className='text-xs text-muted-foreground'>{review.text}</p>
          </div>
        ))}
      </div>

      <div className='pt-4 border-t text-center'>
        <div className='text-xs text-green-600 l-row l-items-center l-row-center l-gap-2'>
          <TrendingUp className='w-4 h-4' />
          +15 new reviews this month
        </div>
      </div>
    </div>
  </Card>
);

export default function ReputationRenderer() {
  const { hero, sections, cta } = reputationData;
  const { process, benefits, useCases, capabilities, faq } = sections;
  const testimonials = sections.testimonials;

  if (!testimonials) {
    return null;
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
            primaryAction={hero.primaryAction}
            visualContent={<ReviewsVisual />}
            cssPrefix='reputation-hero'
            backgroundColor='bg-gradient-to-br from-yellow-50 via-white to-orange-50'
            decorations={[
              { position: 'top-right', color: 'bg-yellow-200', size: 'w-72 h-72' },
              { position: 'bottom-left', color: 'bg-orange-200', size: 'w-72 h-72' },
            ]}
          />

          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            backgroundColor='bg-section-surface'
            cssPrefix='reputation-process'
          />

          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            backgroundColor='bg-section-muted'
            cssPrefix='reputation-benefits'
          />

          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            backgroundColor='bg-section-surface'
            cssPrefix='reputation-use-cases'
            solutionLabel={useCases.solutionLabel}
            iconBackground='bg-gradient-to-br from-yellow-500 to-orange-500'
          />

          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            description={capabilities.description}
            featureCategories={capabilities.featureCategories}
            backgroundColor='bg-section-muted'
            cssPrefix='reputation-features'
          />

          <section className='l-section bg-white'>
            <div className='l-container'>
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
                {testimonials.items.map((testimonial, index) => (
                  <TestimonialCard
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                    business={testimonial.business}
                    rating={testimonial.rating}
                  />
                ))}
              </div>
            </div>
          </section>

          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            backgroundColor='bg-section-muted'
            cssPrefix='reputation-faq'
          />

          <FeatureSupportingFrameworksSection
            featureSlug={reputationData.slug}
            cssPrefix='reputation-explore'
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
            featureSlug={reputationData.slug}
            cssPrefix='reputation-explore'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
