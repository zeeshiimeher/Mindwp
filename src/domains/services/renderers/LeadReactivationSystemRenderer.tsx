import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ProcessStepsSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { IconListCard, ScenarioSolutionCard, SectionIntro } from '@/components/reusable/single';
import { AuditChecklistCard } from '@/components/reusable/single/AuditChecklistCard';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { SmartCTA } from '@/components/system/SmartCTA';
import { leadReactivationSystemPage } from '@/domains/services/data/lead-reactivation-system';
import { SERVICE_RENDERER_DEFAULTS } from '@/domains/services/rendererDefaults';
import { renderAlternatingSection } from '@/domains/services/renderers/renderAlternatingSection';

interface LeadReactivationSystemRendererProps {
  data: typeof leadReactivationSystemPage;
  slug: string;
}

export function LeadReactivationSystemRenderer({
  data,
  slug,
}: LeadReactivationSystemRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    reactivationScenarios,
    auditAreas,
    processSection,
    entryPoints,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta?.title ?? SERVICE_RENDERER_DEFAULTS.ctaTitle;
  const ctaDescription = cta?.description ?? SERVICE_RENDERER_DEFAULTS.ctaDescription;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            smartCta={{
              system: data.systems?.[0] ?? 'smart-website-systems',
              pageType: 'service',
              slug,
              primaryActionVariant: 'primary',
            }}
            list={hero.list}
            cssPrefix={hero.cssPrefix}
            backgroundColor={hero.backgroundColor}
          />

          <ProblemCardsSection
            badge={foundation.badge}
            title={foundation.title}
            description={foundation.description}
            painPoints={foundation.painPoints}
            cssPrefix='lead-reactivation-foundation'
          />

          {renderAlternatingSection(
            {
              badge: reactivationScenarios.badge,
              title: reactivationScenarios.title,
              description: reactivationScenarios.description,
              alternatingItems: reactivationScenarios.alternatingItems,
              cssPrefix: 'lead-reactivation-scenarios',
              backgroundColor: 'bg-base',
            },
            <SectionWrapper className='lead-reactivation-scenarios' background='bg-base'>
              <SectionIntro
                badge={reactivationScenarios.badge}
                title={reactivationScenarios.title}
                description={reactivationScenarios.description}
                cssPrefix='lead-reactivation-scenarios-header'
              />
              <div className='l-grid l-gap-6 md:l-grid-3'>
                {reactivationScenarios.items.map((item, index) => (
                  <ScenarioSolutionCard
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    scenario={item.scenario}
                    solution={item.solution}
                    result={item.result}
                    scenarioLabel={reactivationScenarios.scenarioLabel}
                    solutionLabel={reactivationScenarios.solutionLabel}
                    cssPrefix='lead-reactivation-scenario'
                  />
                ))}
              </div>
            </SectionWrapper>,
          )}

          <SectionWrapper className='lead-reactivation-audit'>
            <SectionIntro
              badge={auditAreas.badge}
              title={auditAreas.title}
              description={auditAreas.description}
              cssPrefix='lead-reactivation-audit-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {auditAreas.items.map((item, index) => (
                <AuditChecklistCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  checks={item.checks}
                  iconType={item.iconType}
                  cssPrefix='lead-reactivation-audit-card'
                />
              ))}
            </div>
          </SectionWrapper>

          <ProcessStepsSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            columns={4}
            cssPrefix='lead-reactivation-process'
            backgroundColor='bg-alt'
          />

          <SectionWrapper className='lead-reactivation-entry-points'>
            <SectionIntro
              badge={entryPoints.badge}
              title={entryPoints.title}
              description={entryPoints.description}
              cssPrefix='lead-reactivation-entry-points-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-3'>
              {entryPoints.columns.map((column, index) => (
                <IconListCard
                  key={index}
                  title={column.title}
                  icon={column.icon}
                  features={column.features}
                  cssPrefix='lead-reactivation-entry-point'
                />
              ))}
            </div>
          </SectionWrapper>

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
            cssPrefix='lead-reactivation-qualification'
            backgroundColor='bg-base'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <SmartCTA
            system={data.systems?.[0] ?? 'smart-website-systems'}
            slug={slug}
            pageType='service'
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
