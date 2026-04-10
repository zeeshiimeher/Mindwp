/**
 * Homepage composition guardrails:
 * - Systems-first narrative
 * - Smart Website remains primary gravity
 * - Calm consultative tone
 */

import React, { Suspense } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ArrowRight, Check, CheckCircle2, Layers } from 'lucide-react';

import { IconBenefitCardsSection, ProcessStepsSection } from '@/components/reusable/sections';
import {
  Badge,
  Button,
  CaseStudyCard,
  ChecklistRow,
  DetailedStepCard,
  ErrorBoundary,
  FAQSection,
  FeatureChecklistCard,
  IconBenefitCard,
  ProblemSolutionSplitCard,
  SectionIntro,
} from '@/components/reusable/single';
import { SmartCTA } from '@/components/system/SmartCTA';
import { homepageData } from '@/domains/home/data/homepage';
import { getVariantStyles } from '@/lib/ui/variantStyles';
import { PortfolioSection as ImplementationExamplesSection } from '@/screens/home/sections/PortfolioSection';

const HOMEPAGE_FOUNDATION_BUTTON = {
  label: 'See how Smart Websites work',
  href: '/services/smart-website-systems',
} as const;

const HOMEPAGE_CASE_STUDIES_BUTTON = {
  label: 'View All Case Studies',
  href: '/case-studies',
} as const;

type HomepageCaseStudy = {
  slug: string;
  industryLabel: string;
  client: string;
  location: string;
  metaDescription: string;
  publishDate: string;
};

export default function Homepage({
  featuredCaseStudies,
}: {
  featuredCaseStudies: HomepageCaseStudy[];
}) {
  const implementationSectionData = homepageData.implementationSection;
  const faqData = homepageData.faq;

  return (
    <ErrorBoundary>
      <div className='home-page'>
        <main>
          <section id='hero' className='hero-section hero-section--homepage l-section'>
            <HeroSection />
          </section>

          <section
            id='infrastructure-gaps'
            className='infrastructure-gaps infrastructure-gaps--surface-default l-section bg-alt'
          >
            <InfrastructureGapsSection />
          </section>

          <section id='smart-website-framework' className='framework-section l-section bg-base'>
            <SmartWebsiteFrameworkSection />
          </section>
          <section id='implementation-principles'>
            <ProcessStepsSection
              title={implementationSectionData.title}
              description={implementationSectionData.description}
              steps={implementationSectionData.steps}
              columns={4}
              cssPrefix='implementation-principles'
              backgroundColor='bg-alt'
            />
          </section>
          <Suspense fallback={<SectionSuspenseFallback />}>
            <TrustFoundationsSection />
          </Suspense>

          <Suspense fallback={<SectionSuspenseFallback />}>
            <section id='client-journey' className='how-it-works-section l-section bg-alt'>
              <ClientJourneySection />
            </section>
            <SystemCapabilitiesSection />

            <section id='infrastructure-layers' className='infrastructure-layers l-section bg-alt'>
              <InfrastructureLayersSection />
            </section>
            <IndustriesSection />
            <section
              id='visibility-alignment'
              className='visibility-alignment-section visibility-alignment-section--surface-default l-section bg-base'
            >
              <VisibilityAlignmentSection />
            </section>
            <section id='case-studies' className='implementation-results l-section bg-alt'>
              <CaseStudiesSection featuredCaseStudies={featuredCaseStudies} />
            </section>

            <ImplementationExamplesSection />

            <FAQSection
              title={faqData.title}
              faqs={faqData.items}
              cssPrefix='faq-section'
              backgroundColor='bg-base'
            />
          </Suspense>
        </main>
        <FooterCTASection />
      </div>
    </ErrorBoundary>
  );
}

function SectionSuspenseFallback() {
  return <div className='l-section' aria-hidden='true' />;
}

function HeroSection() {
  const heroData = homepageData.hero;

  return (
    <div>
      <div className='hero-section-bg-pattern'>
        <div className='hero-section-bg-orb hero-section-bg-orb--primary'></div>
        <div className='hero-section-bg-orb hero-section-bg-orb--teal'></div>
      </div>

      <div className='hero-section-container-1 l-container'>
        <div className='hero-section-content'>
          <Badge variant='secondary'>
            <Layers className='badge__icon' />
            {heroData.badge}
          </Badge>

          <div className='hero-section-heading-wrapper'>
            <h1 className='hero-section-heading-1'>{heroData.title}</h1>
            <p className='hero-section-text-1 l-container'>{heroData.description}</p>
          </div>

          <div className='hero-section-cta'>
            <SmartCTA
              system='smart-website-systems'
              pageType='page'
              slug='home'
              mode='actions-only'
              primaryActionVariant='white'
              tone='short'
            />
          </div>

          <div className='hero-section-value-props'>
            <div className='hero-section-value-props-grid'>
              <div className='hero-section-value-prop'>
                <CheckCircle2 className='hero-section-value-prop-icon icon-text-accent' />
                <span>{heroData.valueProps[0]}</span>
              </div>
              <div className='hero-section-value-prop'>
                <CheckCircle2 className='hero-section-value-prop-icon icon-text-accent' />
                <span>{heroData.valueProps[1]}</span>
              </div>
              <div className='hero-section-value-prop'>
                <CheckCircle2 className='hero-section-value-prop-icon icon-text-accent' />
                <span>{heroData.valueProps[2]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfrastructureGapsSection() {
  const infrastructureGapsData = homepageData.infrastructureGaps;

  return (
    <div className='infrastructure-gaps-container-1 l-container'>
      <SectionIntro
        badge={infrastructureGapsData.badge}
        title={infrastructureGapsData.title}
        description={infrastructureGapsData.description}
        cssPrefix='infrastructure-gaps'
      />

      {/* Problems Grid */}
      <div className='infrastructure-gaps-grid'>
        {infrastructureGapsData.problems.map((problem, index) => (
          <ProblemSolutionSplitCard
            key={index}
            icon={problem.icon}
            badge={problem.impact}
            title={problem.title}
            description={problem.description}
            solution={problem.solution}
            cssPrefix='infrastructure-gaps'
          />
        ))}
      </div>
    </div>
                  <SmartCTA
                    system='smart-website-systems'
                    pageType='page'
                    slug='home'
                    mode='actions-only'
                    primaryActionVariant='primary'
  const smartWebsiteFrameworkData = homepageData.smartWebsiteFramework;

  return (
    <div className='framework-section-container-1 l-container'>
      <SectionIntro
        badge={smartWebsiteFrameworkData.badge}
        title={smartWebsiteFrameworkData.title}
        description={smartWebsiteFrameworkData.description}
        cssPrefix='framework-section'
      />

      {/* Split Layout */}
      <div className='framework-section-split'>
        {/* Left: System Principles */}
        <div className='framework-section-features-wrapper'>
          <div className='framework-section-features-list'>
            {smartWebsiteFrameworkData.principles.map((item, index) => (
              <IconBenefitCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant='left'
                cssPrefix='framework-section'
                iconType='primary'
                headingLevel='h4'
                descriptionSize='sm'
                borderRadius='xl'
              />
            ))}
          </div>
        </div>

        {/* Right: Customer Journey */}
        <div className='framework-section-journey-wrapper'>
          <div className='framework-section-journey-card'>
            <h3 className='framework-section-journey-title'>
              {smartWebsiteFrameworkData.journeyTitle}
            </h3>

            <div className='framework-section-journey-steps'>
              {smartWebsiteFrameworkData.journeySteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className='framework-section-journey-step'>
                    <div className='framework-section-journey-step-row'>
                      <div className='framework-section-journey-step-index'>
                        <span className='framework-section-journey-step-index-text'>
                          {index + 1}
                        </span>
                      </div>

                      <div className='framework-section-journey-step-card'>
                        <div className='framework-section-journey-step-content'>
                          <div
                            className={`framework-section-journey-step-icon ${
                              getVariantStyles(step.iconType).icon.combined
                            }`}
                          >
                            <Icon className='framework-section-journey-step-icon-svg' />
                          </div>
                          <div className='framework-section-journey-step-copy'>
                            <div className='framework-section-journey-step-title'>{step.title}</div>
                            <div className='framework-section-journey-step-subtitle'>
                              {step.subtitle}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className='framework-section-journey-note'>
              <Check className='framework-section-journey-note-icon' />
              <span className='framework-section-journey-note-text'>
                {smartWebsiteFrameworkData.journeyNote}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='cta-container'>
        <SmartCTA
          system='smart-website-systems'
          pageType='page'
          slug='home'
          title={smartWebsiteFrameworkData.cta.title}
          description={smartWebsiteFrameworkData.cta.description}
          headingLevel='h3'
          primaryActionVariant='white'
          backgroundColor='bg-gradient-primary'
          wrapper='none'
          includeContainer={false}
        />
      </div>
    </div>
  );
}

function ClientJourneySection() {
  const clientJourneyData = homepageData.clientJourney;

  return (
    <div className='l-container'>
      <div className='how-it-works-section-bg-pattern'>
        <div className='how-it-works-section-bg-blur-1'></div>
        <div className='how-it-works-section-bg-blur-2'></div>
      </div>

      <div className='how-it-works-section-container-1'>
        <SectionIntro
          badge={clientJourneyData.badge}
          title={clientJourneyData.title}
          description={clientJourneyData.description}
          cssPrefix='how-it-works-section'
        />

        <div className='how-it-works-section-steps'>
          <div className='how-it-works-section-grid'>
            {clientJourneyData.steps.map((step, index) => {
              return (
                <DetailedStepCard
                  key={index}
                  number={step.number}
                  icon={step.icon}
                  iconType={step.iconType}
                  title={step.title}
                  subtitle={step.subtitle}
                  description={step.description}
                  highlights={step.highlights}
                  cssPrefix={`how-it-works-section-step-${index + 1}`}
                />
              );
            })}
          </div>
        </div>

        <div className='cta-container'>
          <SmartCTA
            system='smart-website-systems'
            pageType='page'
            slug='home'
            title={clientJourneyData.cta.title}
            description={clientJourneyData.cta.description}
            headingLevel='h3'
            primaryActionVariant='white'
            backgroundColor='cta--primary bg-gradient-primary'
            wrapper='none'
            includeContainer={false}
          />
        </div>
      </div>
    </div>
  );
}

function TrustFoundationsSection() {
  const infrastructureLayersData = homepageData.infrastructureLayers;

  const trustFoundationsData = infrastructureLayersData.trustFoundations;

  return (
    <section id='trust-foundations' className='trust-section l-section bg-alt'>
      <div className='trust-section__container l-container'>
        <SectionIntro
          title={trustFoundationsData.title}
          description={trustFoundationsData.description}
          cssPrefix='trust-section'
        />

        <div className='trust-section__cards'>
          <div className='trust-section__card'>
            <div className='trust-section__card-header'>
              <Badge variant='primary'>{trustFoundationsData.strongFitBadge}</Badge>
              <h3 className='trust-section__card-title'>{trustFoundationsData.strongFitTitle}</h3>
            </div>

            <ul className='trust-section__list'>
              {trustFoundationsData.strongFitItems.map((item, index) => (
                <li key={index} className='trust-section__list-item'>
                  <div className='trust-section__item-title'>{item.title}</div>
                  <div className='trust-section__item-description'>{item.description}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className='trust-section__card'>
            <div className='trust-section__card-header'>
              <Badge variant='secondary'>{trustFoundationsData.notDesignedBadge}</Badge>
              <h3 className='trust-section__card-title'>{trustFoundationsData.notDesignedTitle}</h3>
            </div>

            <ul className='trust-section__list'>
              {trustFoundationsData.notDesignedItems.map((item, index) => (
                <li key={index} className='trust-section__list-item'>
                  <div className='trust-section__item-title'>{item.title}</div>
                  <div className='trust-section__item-description'>{item.description}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemCapabilitiesSection() {
  const BLOCK = 'c-system-capabilities';
  const systemCapabilitiesData = homepageData.systemCapabilities;

  const StaticFeatureVisual = ({
    icon: Icon,
    title,
    stats,
    variant,
  }: {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    stats: { label: string; value: string }[];
    variant: string;
  }) => {
    return (
      <div className={`${BLOCK}__visual ${BLOCK}__visual--${variant}`}>
        <div className={`${BLOCK}__visual-head`}>
          <div className={`${BLOCK}__visual-title`}>{title}</div>
          <div className={`${BLOCK}__visual-icon-wrap`}>
            <Icon className={`${BLOCK}__visual-icon`} />
          </div>
        </div>

        <div className={`${BLOCK}__visual-grid`}>
          {stats.map((s, idx) => (
            <div key={idx} className={`${BLOCK}__visual-stat`}>
              <div className={`${BLOCK}__visual-stat-value`}>{s.value}</div>
              <div className={`${BLOCK}__visual-stat-label`}>{s.label}</div>
            </div>
          ))}
        </div>

        <div className={`${BLOCK}__visual-meta`}>{systemCapabilitiesData.visualMetaLabel}</div>
      </div>
    );
  };

  return (
    <section id='system-capabilities' className={`${BLOCK} bg-base`}>
      <div className={`${BLOCK}__inner`}>
        <div className={`${BLOCK}__header`}>
          <SectionIntro
            title={systemCapabilitiesData.title}
            description={systemCapabilitiesData.description}
            cssPrefix='features-section'
          />
        </div>

        <TabsPrimitive.Root
          className={`${BLOCK}__tabs`}
          defaultValue={systemCapabilitiesData.defaultComponentId}
        >
          <TabsPrimitive.List
            className={`${BLOCK}__tabs-list`}
            aria-label={systemCapabilitiesData.tabsAriaLabel}
          >
            {systemCapabilitiesData.components.map(component => {
              const Icon = component.icon;
              return (
                <TabsPrimitive.Trigger
                  key={component.id}
                  value={component.id}
                  className={`${BLOCK}__tab`}
                >
                  <Icon className={`${BLOCK}__tab-icon`} />
                  <span className={`${BLOCK}__tab-label`}>{component.title}</span>
                </TabsPrimitive.Trigger>
              );
            })}
          </TabsPrimitive.List>

          {systemCapabilitiesData.components.map(component => {
            const Icon = component.icon;
            return (
              <TabsPrimitive.Content
                key={component.id}
                value={component.id}
                className={`${BLOCK}__panel`}
              >
                <div className={`${BLOCK}__content-grid`}>
                  <div className={`${BLOCK}__content`}>
                    <div className={`${BLOCK}__feature-icon`}>
                      <Icon className={`${BLOCK}__feature-icon-svg`} />
                    </div>

                    <h3 className={`${BLOCK}__title`}>{component.title}</h3>

                    {component.subline && (
                      <div className={`${BLOCK}__subline`}>{component.subline}</div>
                    )}

                    <div className={`${BLOCK}__divider`} />

                    <p className={`${BLOCK}__description`}>{component.description}</p>

                    <ul className={`${BLOCK}__benefits`}>
                      {component.benefits.map((benefit, i) => (
                        <li key={i} className={`${BLOCK}__benefit`}>
                          <span className={`${BLOCK}__benefit-icon`} aria-hidden='true'>
                            ✓
                          </span>
                          <span className={`${BLOCK}__benefit-text`}>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {component.outcome && (
                      <p className={`${BLOCK}__outcome`}>{component.outcome}</p>
                    )}
                  </div>

                  <StaticFeatureVisual
                    icon={component.icon}
                    title={component.title}
                    stats={component.visual.stats}
                    variant={component.id}
                  />
                </div>
              </TabsPrimitive.Content>
            );
          })}
        </TabsPrimitive.Root>
      </div>
    </section>
  );
}

function InfrastructureLayersSection() {
  const infrastructureLayersData = homepageData.infrastructureLayers;

  return (
    <div className='l-container'>
      <SectionIntro
        title={infrastructureLayersData.title}
        description={infrastructureLayersData.description}
        cssPrefix='infrastructure-layers'
      />

      <div className='infrastructure-layers-grid'>
        {/* FOUNDATION: Smart Website */}
        <div className='infrastructure-layers-foundation-card'>
          <SectionIntro
            badge={
              <Badge variant='primary' cssPrefix='inline-block'>
                {infrastructureLayersData.foundation.badge}
              </Badge>
            }
            title={infrastructureLayersData.foundation.title}
            headingLevel='h3'
            description={infrastructureLayersData.foundation.description}
            alignment='left'
            marginBottom={false}
            descriptionClassName='infrastructure-layers-foundation-header-description'
            cssPrefix='infrastructure-layers-foundation-header'
            className='infrastructure-layers-foundation-header-space'
          />

          <ul className='infrastructure-layers-foundation-list'>
            {infrastructureLayersData.foundation.checklist.map((item, index) => (
              <ChecklistRow key={index}>{item}</ChecklistRow>
            ))}
          </ul>

          <Button
            href={HOMEPAGE_FOUNDATION_BUTTON.href}
            variant='primary'
            label={HOMEPAGE_FOUNDATION_BUTTON.label}
          />
        </div>

        {/* LAYERS: Operational Infrastructure */}
        <div className='infrastructure-layers-stack'>
          {infrastructureLayersData.layers.map((layer, index) => (
            <IconBenefitCard
              key={layer.title}
              title={layer.title}
              description={layer.description}
              headingLevel='h4'
              descriptionSize='sm'
              variant='left'
              borderRadius='xl'
              cssPrefix={`infrastructure-layers-layer-${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustriesSection() {
  const industriesData = homepageData.industries;

  return (
    <IconBenefitCardsSection
      id='industries'
      className='industry-section'
      title={industriesData.title}
      description={industriesData.description}
      benefits={industriesData.items.map(industry => ({
        icon: industry.icon,
        title: industry.title,
        description: industry.description,
        iconType: 'secondary' as const,
      }))}
      cssPrefix='industry-section'
      columns={4}
      backgroundColor='bg-base'
      footer={
        <div className='industry-section-cta'>
          <SmartCTA
            system='smart-website-systems'
            pageType='page'
            slug='home'
            mode='actions-only'
            primaryActionVariant='primary'
          />
        </div>
      }
    />
  );
}

function CaseStudiesSection({ featuredCaseStudies }: { featuredCaseStudies: HomepageCaseStudy[] }) {
  const caseStudiesData = homepageData.caseStudies;

  return (
    <div className='implementation-results-container-1 l-container'>
      <SectionIntro
        title={caseStudiesData.title}
        description={caseStudiesData.description}
        cssPrefix='implementation-results'
      />
      <div className='implementation-results-grid'>
        {featuredCaseStudies.map((study, index) => {
          return (
            <CaseStudyCard
              key={study.slug}
              variant='compact'
              slug={study.slug}
              industry={study.industryLabel}
              title={study.client}
              location={study.location}
              description={study.metaDescription}
              publishDate={study.publishDate}
              buttonVariant='outline'
              className={`implementation-results-card-${index + 1}`}
            />
          );
        })}
      </div>

      <div className='implementation-results-quote'>
        <div className='implementation-results-quote-content l-container l-container--narrow'>
          <svg
            className='implementation-results-quote-icon'
            fill='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
          </svg>
          <blockquote className='implementation-results-quote-text'>
            &ldquo;{caseStudiesData.quote}&rdquo;
          </blockquote>
          <p className='implementation-results-quote-author'>{caseStudiesData.quoteAuthor}</p>
        </div>
      </div>

      <div className='implementation-results-cta'>
        <Button
          href={HOMEPAGE_CASE_STUDIES_BUTTON.href}
          variant='primary'
          label={HOMEPAGE_CASE_STUDIES_BUTTON.label}
          icon={ArrowRight}
          showDefaultIcon
        />
      </div>
    </div>
  );
}

function VisibilityAlignmentSection() {
  const visibilityTimelineData = homepageData.visibilityTimeline;

  return (
    <div className='l-container'>
      <SectionIntro
        badge={visibilityTimelineData.badge}
        title={visibilityTimelineData.title}
        description={visibilityTimelineData.description}
        cssPrefix='seo-growth-timeline'
      />

      <div className='seo-growth-timeline-grid'>
        {visibilityTimelineData.items.map((phase, index) => (
          <FeatureChecklistCard
            key={`${phase.title}-${index}`}
            title={phase.title}
            icon={phase.icon}
            features={phase.items}
            label={phase.phase}
            variant='stacked'
            align='left'
            cssPrefix='seo-growth-phase'
            iconContainerShape='circle'
          />
        ))}
      </div>

      <div className='seo-growth-timeline-note'>
        <p className='seo-growth-timeline-note-text'>{visibilityTimelineData.note}</p>
      </div>
    </div>
  );
}

function FooterCTASection() {
  const ctaData = homepageData.cta;

  return (
    <SmartCTA
      system='smart-website-systems'
      pageType='page'
      slug='home'
      title={ctaData.footer.title}
      description={ctaData.footer.description}
      primaryActionVariant='white'
      metaItems={ctaData.footer.metaItems}
      cssPrefix='footer-cta'
      backgroundColor='bg-gradient-primary'
    />
  );
}
