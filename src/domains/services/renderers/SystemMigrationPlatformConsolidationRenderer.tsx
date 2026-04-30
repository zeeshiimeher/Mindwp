import { SectionWrapper } from '@/components/reusable/primitives/SectionWrapper';
import {
  ComparisonSection,
  DualToneChecklistComparisonSection,
  ProblemCardsSection,
  ServiceSpectrumCardsSection,
  StepCardsSplitSection,
} from '@/components/reusable/sections';
import { ServiceHeroSection } from '@/components/reusable/sections/service';
import { IconTextCard, LinkCard, SectionIntro } from '@/components/reusable/single';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { FAQSection } from '@/components/reusable/single/FAQSection';
import { RiskListCard } from '@/components/reusable/single/RiskListCard';
import { GenericErrorFallback } from '@/components/system/GenericErrorFallback';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import type { ServicePageDataBySlug } from '@/domains/services/pageData';

interface SystemMigrationPlatformConsolidationRendererProps {
  data: ServicePageDataBySlug['system-migration-platform-consolidation'];
  slug: string;
}

export function SystemMigrationPlatformConsolidationRenderer({
  data,
  slug: _slug,
}: SystemMigrationPlatformConsolidationRendererProps) {
  const { hero, sections, cta } = data;
  const {
    foundation,
    migrationSignals,
    comparison,
    riskAreas,
    consolidationTargets,
    processSection,
    proof,
    qualification,
    faqSection,
  } = sections;
  const ctaTitle = cta.title;
  const ctaDescription = cta.description;

  return (
    <>
      <ErrorBoundary fallback={<GenericErrorFallback />}>
        <main role='main'>
          <ServiceHeroSection
            badge={hero.badge}
            title={hero.title}
            description={hero.description}
            heroActions={{
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
            cssPrefix='system-migration-foundation'
          />

          <SectionWrapper className='system-migration-signals' background='bg-base'>
            <SectionIntro
              badge={migrationSignals.badge}
              title={migrationSignals.title}
              description={migrationSignals.description}
              cssPrefix='system-migration-signals-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2 xl:l-grid-4'>
              {migrationSignals.items.map(item => (
                <IconTextCard
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  iconType={item.iconType}
                  cssPrefix='system-migration-signal'
                />
              ))}
            </div>
          </SectionWrapper>

          {comparison && (
            <ComparisonSection
              title={comparison.header.title}
              description={comparison.header.description}
              comparisons={comparison.items}
              cssPrefix='system-migration-comparison'
            />
          )}

          <SectionWrapper className='system-migration-risks'>
            <SectionIntro
              badge={riskAreas.badge}
              title={riskAreas.title}
              description={riskAreas.description}
              cssPrefix='system-migration-risks-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2'>
              {riskAreas.lists.map(list => (
                <RiskListCard
                  key={list.title}
                  title={list.title}
                  issues={list.issues}
                  cssPrefix='system-migration-risk-card'
                />
              ))}
            </div>
          </SectionWrapper>

          <SectionWrapper className='system-migration-targets' background='bg-base'>
            <SectionIntro
              badge={consolidationTargets.badge}
              title={consolidationTargets.title}
              description={consolidationTargets.description}
              cssPrefix='system-migration-targets-header'
            />
            <div className='l-grid l-gap-6 md:l-grid-2'>
              {consolidationTargets.items.map(item => (
                <LinkCard
                  key={item.title}
                  title={item.title}
                  desc={item.desc}
                  showArrow={false}
                  cssPrefix='system-migration-target'
                />
              ))}
            </div>
          </SectionWrapper>

          <StepCardsSplitSection
            badge={processSection.badge}
            title={processSection.title}
            description={processSection.description}
            steps={processSection.steps}
            cssPrefix='system-migration-process'
          />

          {proof && (
            <ServiceSpectrumCardsSection
              title={proof.header.title}
              description={proof.header.description}
              cards={proof.cards}
              cssPrefix='system-migration-proof'
              backgroundColor='bg-base'
            />
          )}

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
            cssPrefix='system-migration-qualification'
            backgroundColor='bg-alt'
          />

          <FAQSection
            badge={faqSection.badge}
            title={faqSection.title}
            description={faqSection.description}
            faqs={faqSection.faqs}
            cssPrefix={faqSection.cssPrefix}
          />

          <PrimaryCTASection
            title={ctaTitle}
            description={ctaDescription}
            primaryActionVariant='white'
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
