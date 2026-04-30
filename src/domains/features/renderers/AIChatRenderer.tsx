import { CheckCircle2, MessageSquare, Users } from 'lucide-react';

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
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { Card } from '@/components/ui/card';
import type { FeaturePageData } from '@/domains/features/types';

const ChatDemo = () => (
  <Card
    className='p-8 bg-white/80 backdrop-blur shadow-xl'
    role='region'
    aria-label='Chat interface demonstration'
  >
    <div className='l-stack' role='log' aria-label='Chat conversation'>
      {/* Simulated chat interface */}
      <div className='l-row l-items-start l-gap-3' role='article' aria-label='AI assistant message'>
        <div
          className='w-10 h-10 bg-primary rounded-full l-row l-items-center l-row-center flex-shrink-0'
          aria-hidden='true'
        >
          <MessageSquare className='w-5 h-5 text-white' aria-hidden='true' />
        </div>
        <div className='bg-blue-50 rounded-lg rounded-tl-none p-3 l-max-w-80p'>
          <p className='text-sm text-foreground'>
            Hi! I'm here to help. What are you looking for today?
          </p>
        </div>
      </div>
      <div
        className='l-row l-items-start l-justify-end l-gap-3'
        role='article'
        aria-label='User message'
      >
        <div className='bg-slate-100 rounded-lg rounded-tr-none p-3 l-max-w-80p'>
          <p className='text-sm text-foreground'>I need to book an appointment</p>
        </div>
        <div
          className='w-10 h-10 bg-slate-300 rounded-full l-row l-items-center l-row-center flex-shrink-0'
          aria-hidden='true'
        >
          <Users className='w-5 h-5 text-slate-600' aria-hidden='true' />
        </div>
      </div>

      <div className='l-row l-items-start l-gap-3' role='article' aria-label='AI assistant message'>
        <div
          className='w-10 h-10 bg-primary rounded-full l-row l-items-center l-row-center flex-shrink-0'
          aria-hidden='true'
        >
          <MessageSquare className='w-5 h-5 text-white' aria-hidden='true' />
        </div>
        <div className='bg-blue-50 rounded-lg rounded-tl-none p-3 l-max-w-80p'>
          <p className='text-sm text-foreground'>
            Great! I have availability on Tuesday at 2pm or Wednesday at 10am. Which works better?
          </p>
        </div>
      </div>

      <div
        className='l-row l-items-start l-justify-end l-gap-3'
        role='article'
        aria-label='User message'
      >
        <div className='bg-slate-100 rounded-lg rounded-tr-none p-3 l-max-w-80p'>
          <p className='text-sm text-foreground'>Tuesday at 2pm please</p>
        </div>
        <div
          className='w-10 h-10 bg-slate-300 rounded-full l-row l-items-center l-row-center flex-shrink-0'
          aria-hidden='true'
        >
          <Users className='w-5 h-5 text-slate-600' aria-hidden='true' />
        </div>
      </div>

      <div
        className='l-row l-items-center l-gap-2 p-3 bg-green-50 border-2 border-green-200 rounded-lg'
        role='status'
        aria-live='polite'
        aria-label='Booking confirmation'
      >
        <CheckCircle2 className='w-5 h-5 text-green-600' aria-hidden='true' />
        <span className='text-sm text-green-900'>Appointment booked! Confirmation sent.</span>
      </div>
    </div>
  </Card>
);

interface AIChatRendererProps {
  data: FeaturePageData;
}

export default function AIChatRenderer({ data }: AIChatRendererProps) {
  const { hero, sections, cta } = data;
  const { process, benefits, useCases, capabilities, faq, explore } = sections;
  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <FeatureHeroSection
            badge={hero.badge}
            badgeIcon={MessageSquare}
            title={hero.title}
            description={hero.description}
            stats={hero.stats}
            heroActions={{
              primaryActionVariant: 'primary',
              primaryButtonCssPrefix: 'feature-hero__primary-cta',
            }}
            visualContent={<ChatDemo />}
            cssPrefix='ai-chat-hero'
            backgroundColor='bg-gradient-surface-soft'
            decorations={[
              { position: 'top-right', color: 'bg-blue-200', size: 'lg' },
              { position: 'bottom-left', color: 'bg-purple-200', size: 'lg' },
            ]}
          />

          {/* How It Works */}
          <FeatureProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            cssPrefix='ai-chat-process'
          />

          {/* Benefits */}
          <FeatureBenefitsSection
            badge={benefits.badge}
            title={benefits.title}
            description={benefits.description}
            benefits={benefits.items}
            cssPrefix='ai-chat-benefits'
            backgroundColor='bg-base'
          />

          {/* Real-World Use Cases */}
          <FeatureUseCasesSection
            badge={useCases.badge}
            title={useCases.title}
            description={useCases.description}
            useCases={useCases.items}
            cssPrefix='ai-chat-use-cases'
            scenarioLabel={useCases.scenarioLabel}
            solutionLabel={useCases.solutionLabel}
          />

          {/* Features Breakdown */}
          <FeatureCapabilitiesSection
            badge={capabilities.badge}
            title={capabilities.title}
            description={capabilities.description}
            featureCategories={capabilities.featureCategories}
            cssPrefix='ai-chat-features'
            backgroundColor='bg-alt'
          />

          {/* FAQ */}
          <FAQSection
            badge={faq.badge}
            title={faq.title}
            description={faq.description}
            faqs={faq.items}
            cssPrefix='ai-chat-faq'
          />

          <ExploreCardsSection
            badge={explore.badge}
            title={explore.title}
            description={explore.description}
            cards={explore.cards}
            cssPrefix='ai-chat-explore'
            backgroundColor='bg-base'
          />

          <PrimaryCTASection
            title={cta.title}
            description={cta.description}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
