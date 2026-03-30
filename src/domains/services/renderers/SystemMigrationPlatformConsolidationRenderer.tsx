import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { IconTextCard, LinkCard, SectionIntro } from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { RiskListCard } from '@/components/reusable/single/RiskListCard';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { systemMigrationPlatformConsolidationPage } from '@/domains/services/data/system-migration-platform-consolidation';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface SystemMigrationPlatformConsolidationRendererProps {
  data: typeof systemMigrationPlatformConsolidationPage;
  slug: string;
}

export function SystemMigrationPlatformConsolidationRenderer({
  data,
  slug,
}: SystemMigrationPlatformConsolidationRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    migrationSignals,
    riskAreas,
    consolidationTargets,
    processSection,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;
  const ctaButtonText = cta?.buttonText ?? SERVICE_RENDERER_DEFAULTS.ctaButtonText;
  const ctaButtonHref = cta?.buttonHref ?? SERVICE_RENDERER_DEFAULTS.ctaButtonHref;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            primaryAction={hero.primaryAction}
            list={hero.list}
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            backgroundColor='bg-white'
            cssPrefix='system-migration-foundation'
          />

          <section className='system-migration-signals l-section bg-background'>
            <div className='l-container'>
              <SectionIntro
                badge={migrationSignals.badge}
                title={migrationSignals.title}
                description={migrationSignals.description}
                cssPrefix='system-migration-signals-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-4'>
                {migrationSignals.items.map((item, index) => (
                  <IconTextCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    iconType={item.iconType}
                    cssPrefix='system-migration-signal'
                  />
                ))}
              </div>
            </div>
          </section>

          <section className='system-migration-risks l-section bg-muted/30'>
            <div className='l-container'>
              <SectionIntro
                badge={riskAreas.badge}
                title={riskAreas.title}
                description={riskAreas.description}
                cssPrefix='system-migration-risks-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-2'>
                {riskAreas.lists.map((list, index) => (
                  <RiskListCard
                    key={index}
                    title={list.title}
                    issues={list.issues}
                    cssPrefix='system-migration-risk-card'
                  />
                ))}
              </div>
            </div>
          </section>

          <section className='system-migration-targets l-section bg-white'>
            <div className='l-container'>
              <SectionIntro
                badge={consolidationTargets.badge}
                title={consolidationTargets.title}
                description={consolidationTargets.description}
                cssPrefix='system-migration-targets-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-2'>
                {consolidationTargets.items.map((item, index) => (
                  <LinkCard
                    key={index}
                    title={item.title}
                    desc={item.desc}
                    showArrow={false}
                    cssPrefix='system-migration-target'
                  />
                ))}
              </div>
            </div>
          </section>

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            backgroundColor='bg-background'
            cssPrefix='system-migration-process'
          />

          <DualToneChecklistComparisonSection
            title={qualification.title}
            description={qualification.description}
            leftColumn={{
              title: qualification.strongFitTitle,
              items: qualification.strongFitItems,
            }}
            rightColumn={{
              title: qualification.notDesignedTitle,
              items: qualification.notDesignedItems,
            }}
            backgroundColor='bg-white'
            cssPrefix='system-migration-qualification'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <ServiceCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryAction={{ label: ctaButtonText, href: ctaButtonHref, variant: 'white' }}
          />
          <ServiceRelatedServicesSection serviceSlug={slug} />
        </main>
      </ErrorBoundary>
    </>
  );
}
