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
  IconRow,
  ProblemSolutionSplitCard,
  SectionIntro,
} from '@/components/reusable/single';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
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

const BLOCK = 'c-system-capabilities';

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
      <CTARegistryProvider pageId='page:home' pageType='page'>
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

              <section
                id='infrastructure-layers'
                className='infrastructure-layers l-section bg-alt'
              >
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
      </CTARegistryProvider>
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
              intent='entry'
              position='hero'
              mode='actions-only'
              primaryActionVariant='white'
              tone='short'
            />
          </div>

          <div className='hero-section-value-props'>
            <div className='hero-section-value-props-grid'>
              {heroData.valueProps.map(valueProp => (
                <IconRow
                  key={valueProp}
                  icon={CheckCircle2}
                  className='hero-section-value-prop'
                  iconClassName='hero-section-value-prop-icon icon-text-accent'
                >
                  {valueProp}
                </IconRow>
              ))}
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
  );
}

function SmartWebsiteFrameworkSection() {
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
          intent='diagnostic'
          position='pre-mid'
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
            intent='comparison'
            position='mid'
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

function CallsVisual({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className='c-system-capabilities__visual c-system-capabilities__visual--calls'>
      <svg viewBox='0 0 320 180' className='c-system-capabilities__visual-svg' aria-hidden='true'>
        <rect x='20' y='18' width='126' height='138' rx='24' fill='rgba(255,255,255,0.78)' />
        <rect x='174' y='32' width='126' height='112' rx='24' fill='rgba(255,255,255,0.68)' />
        <text x='38' y='42' fontSize='12' fill='currentColor' opacity='0.45'>
          Incoming calls
        </text>
        <text x='192' y='56' fontSize='12' fill='currentColor' opacity='0.45'>
          Callback queue
        </text>
        {[0, 1, 2].map(index => (
          <g key={index} transform={`translate(34 ${52 + index * 28})`}>
            <rect width='98' height='18' rx='9' fill='rgba(255,255,255,0.88)' />
            <circle cx='14' cy='9' r='4' fill='currentColor' opacity={0.35 + index * 0.12}>
              <animate
                attributeName='r'
                values='4;6;4'
                dur={`${1.5 + index * 0.3}s`}
                repeatCount='indefinite'
              />
            </circle>
            <rect x='26' y='6' width='40' height='5' rx='2.5' fill='currentColor' opacity='0.18' />
            <rect x='72' y='4' width='16' height='9' rx='4.5' fill='rgba(255,255,255,0.95)' />
          </g>
        ))}
        {[0, 1, 2].map(index => (
          <g key={`callback-${index}`} transform={`translate(188 ${66 + index * 22})`}>
            <rect width='98' height='14' rx='7' fill='rgba(255,255,255,0.86)' />
            <rect x='10' y='4' width='46' height='5' rx='2.5' fill='currentColor' opacity='0.16' />
            <rect
              x='66'
              y='3'
              width='22'
              height='8'
              rx='4'
              fill='currentColor'
              opacity={0.28 + index * 0.08}
            >
              <animate
                attributeName='opacity'
                values='0.24;0.62;0.24'
                dur={`${1.8 + index * 0.2}s`}
                repeatCount='indefinite'
              />
            </rect>
          </g>
        ))}
        <path
          d='M142 70 C164 70 170 72 188 84'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
          opacity='0.28'
        >
          <animate
            attributeName='stroke-dasharray'
            values='0 120;52 68;0 120'
            dur='2.8s'
            repeatCount='indefinite'
          />
        </path>
        <path
          d='M142 100 C168 100 170 102 188 108'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
          opacity='0.22'
        >
          <animate
            attributeName='stroke-dasharray'
            values='0 120;48 72;0 120'
            dur='3.1s'
            repeatCount='indefinite'
          />
        </path>
      </svg>
      <div className='c-system-capabilities__visual-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='c-system-capabilities__visual-stat'>
            <div className='c-system-capabilities__visual-stat-value'>{stat.value}</div>
            <div className='c-system-capabilities__visual-stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
      <div className='c-system-capabilities__visual-meta'>
        {homepageData.systemCapabilities.visualMetaLabel}
      </div>
    </div>
  );
}

function LeadsVisual({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className='c-system-capabilities__visual c-system-capabilities__visual--leads'>
      <svg viewBox='0 0 320 180' className='c-system-capabilities__visual-svg' aria-hidden='true'>
        <rect x='24' y='18' width='272' height='140' rx='24' fill='rgba(255,255,255,0.76)' />
        <text x='42' y='42' fontSize='12' fill='currentColor' opacity='0.45'>
          Dormant lead list
        </text>
        <rect x='40' y='54' width='240' height='18' rx='9' fill='rgba(255,255,255,0.86)' />
        <rect x='52' y='60' width='52' height='6' rx='3' fill='currentColor' opacity='0.14' />
        <rect x='118' y='60' width='56' height='6' rx='3' fill='currentColor' opacity='0.14' />
        <rect x='200' y='57' width='58' height='12' rx='6' fill='currentColor' opacity='0.24' />
        {[0, 1, 2, 3].map(index => (
          <g key={index} transform={`translate(40 ${78 + index * 20})`}>
            <rect
              width='240'
              height='14'
              rx='7'
              fill={index === 1 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.8)'}
            />
            <rect x='12' y='4' width='48' height='5' rx='2.5' fill='currentColor' opacity='0.14' />
            <rect x='76' y='4' width='80' height='5' rx='2.5' fill='currentColor' opacity='0.12' />
            <rect
              x='176'
              y='3'
              width='50'
              height='8'
              rx='4'
              fill={index === 1 ? 'currentColor' : 'rgba(255,255,255,0.96)'}
              opacity={index === 1 ? 0.32 : 1}
            >
              {index === 1 ? (
                <animate
                  attributeName='opacity'
                  values='0.24;0.72;0.24'
                  dur='2.1s'
                  repeatCount='indefinite'
                />
              ) : null}
            </rect>
          </g>
        ))}
        <path
          d='M206 106 l12 12 l26 -30'
          stroke='currentColor'
          strokeWidth='5'
          fill='none'
          opacity='0.34'
        >
          <animate
            attributeName='opacity'
            values='0.2;0.8;0.2'
            dur='2.4s'
            repeatCount='indefinite'
          />
        </path>
      </svg>
      <div className='c-system-capabilities__visual-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='c-system-capabilities__visual-stat'>
            <div className='c-system-capabilities__visual-stat-value'>{stat.value}</div>
            <div className='c-system-capabilities__visual-stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
      <div className='c-system-capabilities__visual-meta'>
        {homepageData.systemCapabilities.visualMetaLabel}
      </div>
    </div>
  );
}

function VisibilityVisual({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className='c-system-capabilities__visual c-system-capabilities__visual--visibility'>
      <svg viewBox='0 0 320 180' className='c-system-capabilities__visual-svg' aria-hidden='true'>
        <rect x='26' y='20' width='268' height='136' rx='24' fill='rgba(255,255,255,0.74)' />
        <rect x='44' y='36' width='232' height='28' rx='14' fill='rgba(255,255,255,0.9)' />
        <circle cx='64' cy='50' r='8' fill='currentColor' opacity='0.18' />
        <rect x='80' y='46' width='82' height='7' rx='3.5' fill='currentColor' opacity='0.16' />
        <rect x='178' y='44' width='56' height='11' rx='5.5' fill='rgba(255,255,255,0.96)' />
        <g transform='translate(50 86)'>
          <path
            d='M0 28 C28 0 64 0 92 28 C92 56 64 82 46 98 C28 82 0 56 0 28Z'
            fill='rgba(255,255,255,0.92)'
          />
          <circle cx='46' cy='30' r='14' fill='none' stroke='currentColor' strokeWidth='5'>
            <animate attributeName='r' values='14;18;14' dur='2.6s' repeatCount='indefinite' />
          </circle>
        </g>
        {[0, 1, 2].map(index => (
          <g key={index} transform={`translate(172 ${84 + index * 20})`}>
            <rect width='84' height='12' rx='6' fill='rgba(255,255,255,0.88)' />
            <rect
              x='10'
              y='4'
              width={index === 0 ? 56 : index === 1 ? 42 : 32}
              height='4'
              rx='2'
              fill='currentColor'
              opacity='0.16'
            />
          </g>
        ))}
        <path
          d='M124 116 C156 112 174 102 192 90'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
          opacity='0.24'
        >
          <animate
            attributeName='stroke-dasharray'
            values='0 140;54 86;0 140'
            dur='2.7s'
            repeatCount='indefinite'
          />
        </path>
      </svg>
      <div className='c-system-capabilities__visual-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='c-system-capabilities__visual-stat'>
            <div className='c-system-capabilities__visual-stat-value'>{stat.value}</div>
            <div className='c-system-capabilities__visual-stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
      <div className='c-system-capabilities__visual-meta'>
        {homepageData.systemCapabilities.visualMetaLabel}
      </div>
    </div>
  );
}

function RepliesVisual({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className='c-system-capabilities__visual c-system-capabilities__visual--replies'>
      <svg viewBox='0 0 320 180' className='c-system-capabilities__visual-svg' aria-hidden='true'>
        <rect x='26' y='24' width='148' height='124' rx='24' fill='rgba(255,255,255,0.78)' />
        <rect x='194' y='42' width='100' height='88' rx='22' fill='rgba(255,255,255,0.7)' />
        <text x='44' y='48' fontSize='12' fill='currentColor' opacity='0.45'>
          Incoming enquiry
        </text>
        <rect x='44' y='58' width='112' height='24' rx='12' fill='rgba(255,255,255,0.92)' />
        <rect x='44' y='92' width='96' height='20' rx='10' fill='rgba(255,255,255,0.88)' />
        <circle cx='244' cy='76' r='22' fill='rgba(255,255,255,0.94)' />
        <path
          d='M244 62 v18 l12 8'
          stroke='currentColor'
          strokeWidth='5'
          fill='none'
          strokeLinecap='round'
        >
          <animateTransform
            attributeName='transform'
            type='rotate'
            values='0 244 76;20 244 76;0 244 76'
            dur='2.8s'
            repeatCount='indefinite'
          />
        </path>
        <rect x='214' y='104' width='60' height='12' rx='6' fill='currentColor' opacity='0.16' />
        <path
          d='M156 74 C184 74 198 76 214 84'
          stroke='currentColor'
          strokeWidth='4'
          fill='none'
          opacity='0.28'
        >
          <animate
            attributeName='stroke-dasharray'
            values='0 120;44 76;0 120'
            dur='2.2s'
            repeatCount='indefinite'
          />
        </path>
        <circle cx='172' cy='74' r='6' fill='currentColor' opacity='0.28'>
          <animate
            attributeName='opacity'
            values='0.22;0.7;0.22'
            dur='1.6s'
            repeatCount='indefinite'
          />
        </circle>
      </svg>
      <div className='c-system-capabilities__visual-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='c-system-capabilities__visual-stat'>
            <div className='c-system-capabilities__visual-stat-value'>{stat.value}</div>
            <div className='c-system-capabilities__visual-stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
      <div className='c-system-capabilities__visual-meta'>
        {homepageData.systemCapabilities.visualMetaLabel}
      </div>
    </div>
  );
}

function ProofVisual({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <div className='c-system-capabilities__visual c-system-capabilities__visual--proof'>
      <svg viewBox='0 0 320 180' className='c-system-capabilities__visual-svg' aria-hidden='true'>
        <rect x='30' y='22' width='260' height='132' rx='26' fill='rgba(255,255,255,0.74)' />
        {[0, 1, 2].map(index => (
          <g key={index} transform={`translate(48 ${42 + index * 30})`}>
            <rect width='224' height='22' rx='11' fill='rgba(255,255,255,0.9)' />
            {[0, 1, 2, 3, 4].map(star => (
              <path
                key={star}
                d={`M${18 + star * 18} 5 l3.4 7 l7.6 1.1 l-5.5 5.4 l1.2 7.3 l-6.7 -3.5 l-6.7 3.5 l1.2 -7.3 l-5.5 -5.4 l7.6 -1.1 z`}
                fill='currentColor'
                opacity={0.18 + index * 0.08 + star * 0.02}
              >
                <animate
                  attributeName='opacity'
                  values='0.16;0.52;0.16'
                  dur={`${1.9 + star * 0.2}s`}
                  repeatCount='indefinite'
                />
              </path>
            ))}
            <rect x='122' y='8' width='72' height='6' rx='3' fill='currentColor' opacity='0.12' />
          </g>
        ))}
        <path
          d='M64 138 H256'
          stroke='currentColor'
          strokeWidth='8'
          strokeLinecap='round'
          opacity='0.14'
        />
      </svg>
      <div className='c-system-capabilities__visual-grid'>
        {stats.map((stat, index) => (
          <div key={index} className='c-system-capabilities__visual-stat'>
            <div className='c-system-capabilities__visual-stat-value'>{stat.value}</div>
            <div className='c-system-capabilities__visual-stat-label'>{stat.label}</div>
          </div>
        ))}
      </div>
      <div className='c-system-capabilities__visual-meta'>
        {homepageData.systemCapabilities.visualMetaLabel}
      </div>
    </div>
  );
}

function SystemCapabilitiesSection() {
  const systemCapabilitiesData = homepageData.systemCapabilities;
  const VISUAL_MAP = {
    calls: CallsVisual,
    leads: LeadsVisual,
    visibility: VisibilityVisual,
    replies: RepliesVisual,
    proof: ProofVisual,
  } as const;

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
            const VisualComponent = VISUAL_MAP[component.visualId as keyof typeof VISUAL_MAP];

            if (!VisualComponent) {
              throw new Error(
                `Homepage system-capability visual is missing for visualId "${component.visualId}".`
              );
            }

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

                  <VisualComponent stats={component.visual.stats} />
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
        href: industry.href,
        buttonText: 'View Industry',
      }))}
      cssPrefix='industry-section'
      columns={4}
      backgroundColor='bg-base'
      footer={undefined}
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
      intent='conversion'
      position='footer'
      title={ctaData.footer.title}
      description={ctaData.footer.description}
      primaryActionVariant='white'
      metaItems={ctaData.footer.metaItems}
      cssPrefix='footer-cta'
      backgroundColor='bg-gradient-primary'
    />
  );
}
