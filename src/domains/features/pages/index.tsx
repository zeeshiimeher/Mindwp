import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { Card } from '@/components/ui/card';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { buildContactHref } from '@/lib/contact/contactHref';
import { getVariantStyles } from '@/lib/ui/variantStyles';

function PageSection({
  background,
  className,
  children,
}: {
  background?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={[background, 'py-16', className].filter(Boolean).join(' ')}>
      <div className='mw-container'>{children}</div>
    </section>
  );
}

// Features overview landing
export function FeaturesLanding() {
  const features = FEATURE_REGISTRY;

  return (
    <div className='feature-lnd min-h-screen'>
      <CTARegistryProvider
        pageId='page:features'
        pageType='page'
        primarySystem='smart-website-systems'
      >
        <main>
          {/* Hero Section */}
          <PageSection
            className='feature-lnd feature-lnd__hero'
            background='bg-gradient-surface-muted'
          >
            <div className='feature-lnd__heroContent l-stack l-stack--loose'>
              <span className='mw-text-eyebrow mw-text-signal-cyan'>Features Index</span>
              <h1>Feature Layers That Support The Main Build</h1>
              <p className='mw-text-secondary text-lg'>
                These feature pages break down the capability layers that support routing,
                communication, booking, reputation, CRM visibility, and follow-up once the core
                website system is in place.
              </p>
            </div>
          </PageSection>

          {/* All Features Grid */}
          <PageSection className='feature-lnd feature-lnd__gridSec' background='bg-white'>
            <div className='feature-lnd__grid l-grid l-gap-6 md:l-grid-2 lg:l-grid-3'>
              {features.map(feature => {
                const Icon = feature.icon;
                return (
                  <Card key={feature.slug} className='feature-lnd__card'>
                    <a href={feature.path} className='link-primary feature-lnd__link'>
                      <div
                        className={`feature-lnd__icon icon-container-md ${getVariantStyles('primary').icon.bg}`}
                      >
                        <Icon
                          className={getVariantStyles('primary').icon.text}
                          aria-hidden='true'
                        />
                      </div>
                      <div className='feature-lnd__body'>
                        <h3 className='feature-lnd__cardTitle'>{feature.title}</h3>
                        <p className='feature-lnd__cardText text-sm mw-text-secondary'>
                          {feature.description}
                        </p>
                      </div>
                      <div className='feature-lnd__cta l-row l-items-center text-primary text-sm'>
                        Learn More
                        <ArrowRight className='feature-lnd__ctaIcon' aria-hidden='true' />
                      </div>
                    </a>
                  </Card>
                );
              })}
            </div>
          </PageSection>

          {/* CTA Section */}
          <DecisionPanel
            heading={{
              title: 'Need help matching the right feature to the real problem?',
              description:
                'Tell us where the friction is showing up today, and we will point you to the feature layer that supports the wider system instead of sending you through the wrong page.',
            }}
            actions={[
              {
                label: 'Get Started',
                href: buildContactHref({
                  system: 'smart-website-systems',
                  sourceType: 'feature',
                  slug: 'feature-help',
                }),
                variant: 'primary',
              },
            ]}
          />
        </main>
      </CTARegistryProvider>
    </div>
  );
}
