import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
  StackedFeatureListSection,
} from '@/components/reusable/sections';
import { ServiceCTASection, ServiceHeroSection } from '@/components/reusable/sections/service';
import { AuditChecklistCard } from '@/components/reusable/single/AuditChecklistCard';
import { ChecklistRow } from '@/components/reusable/single/ChecklistRow';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { IconBenefitCard } from '@/components/reusable/single/IconBenefitCard';
import { RiskListCard } from '@/components/reusable/single/RiskListCard';
import { SectionIntro } from '@/components/reusable/single/SectionIntro';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { ServiceRelatedServicesSection } from '@/domains/services/components/ServiceRelatedServicesSection';
import { growthRevenueSystemsPage } from '@/domains/services/data/growth-revenue-systems';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';

interface GrowthRevenueSystemsRendererProps {
  data: typeof growthRevenueSystemsPage;
  slug: string;
}

export function GrowthRevenueSystemsRenderer({ data, slug }: GrowthRevenueSystemsRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    auditAreas,
    wordpressContext,
    deliverables,
    process,
    bridge,
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
          {/* Hero Section */}
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            primaryAction={hero.primaryAction}
            cssPrefix={hero.cssPrefix}
            list={hero.list}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            backgroundColor='bg-white'
            cssPrefix='technical-audit-foundation'
          />

          {/* What We Audit */}
          <section className='technical-audit-areas l-section bg-white'>
            <div className='l-container'>
              <SectionIntro
                badge={auditAreas.header.badge}
                title={auditAreas.header.title}
                description={auditAreas.header.description}
                cssPrefix={auditAreas.header.cssPrefix}
              />

              <div className='l-grid l-gap-6 md:l-grid-2 lg:l-grid-4'>
                {auditAreas.items.map((area, index) => (
                  <AuditChecklistCard
                    key={index}
                    icon={area.icon}
                    title={area.title}
                    description={area.description}
                    checks={area.checks}
                    iconType={area.iconType}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className='technical-audit-wordpress l-section bg-section-light'>
            <div className='l-container'>
              <SectionIntro
                badge={wordpressContext.header.badge}
                title={wordpressContext.header.title}
                description={wordpressContext.header.description}
                cssPrefix={wordpressContext.header.cssPrefix}
                alignment={wordpressContext.header.alignment}
              />

              <div className='l-grid l-gap-8 l-items-start lg:l-grid-2'>
                <ul className='l-stack'>
                  {wordpressContext.listItems.map((item: string, index: number) => (
                    <ChecklistRow key={index} color='icon-text-accent'>
                      {item}
                    </ChecklistRow>
                  ))}
                </ul>
                <RiskListCard
                  title={wordpressContext.issuesTitle}
                  issues={wordpressContext.issues}
                />
              </div>
            </div>
          </section>

          {/* What You Get */}
          <section className='technical-audit-deliverables l-section bg-white'>
            <div className='l-container'>
              <SectionIntro
                badge={deliverables.header.badge}
                title={deliverables.header.title}
                description={deliverables.header.description}
                cssPrefix={deliverables.header.cssPrefix}
              />

              <div className='l-grid l-gap-6 l-mx-auto md:l-grid-2 lg:l-grid-3'>
                {deliverables.items.map((deliverable, index) => (
                  <IconBenefitCard
                    key={index}
                    icon={deliverable.icon}
                    title={deliverable.title}
                    description={deliverable.description}
                    iconType={deliverable.iconType}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <ProcessStepsSection
            badge={process.badge}
            title={process.title}
            description={process.description}
            steps={process.steps}
            columns={process.columns}
            cssPrefix={process.cssPrefix}
            backgroundColor={process.backgroundColor}
          />

          <StackedFeatureListSection
            badge={bridge.badge}
            title={bridge.title}
            description={bridge.description}
            tagline={bridge.tagline}
            narrativeTitle={bridge.narrativeTitle}
            narrativeParagraphs={bridge.narrativeParagraphs}
            features={bridge.features}
            backgroundColor='bg-section-light'
            cssPrefix='technical-audit-bridge'
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
            cssPrefix='technical-audit-qualification'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix='technical-audit-faq'
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
