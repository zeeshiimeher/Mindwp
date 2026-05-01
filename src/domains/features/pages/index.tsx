import { ArrowRight } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { Card } from '@/components/ui/card';
import { FEATURE_REGISTRY } from '@/domains/features/registry';
import { buildContactHref } from '@/lib/contact/contactHref';
import { getVariantStyles } from '@/lib/ui/variantStyles';

// Features overview landing
export function FeaturesLanding() {
  const features = FEATURE_REGISTRY;

  return (
    <div className='feature-lnd min-h-screen'>
      <ErrorBoundary
        fallback={
          <div className='feature-err l-row l-items-center l-row-center'>
            <div className='feature-err__inner'>
              <h1 className='feature-err__title'>Features Temporarily Unavailable</h1>
              <p className='feature-err__text'>
                We&apos;re working to restore this page. Please try again later.
              </p>
              <Button href='/' label='Return Home' />
            </div>
          </div>
        }
      >
        <CTARegistryProvider
          pageId='page:features'
          pageType='page'
          primarySystem='smart-website-systems'
        >
          <main>
            {/* Hero Section */}
            <SectionWrapper
              className='feature-lnd feature-lnd__hero'
              background='bg-gradient-surface-muted'
            >
              <div className='feature-lnd__heroContent l-stack l-stack--loose'>
                <Badge variant='secondary' context='section'>
                  Features Index
                </Badge>
                <h1>Feature Layers That Support The Main Build</h1>
                <p className='text-muted-foreground text-lg'>
                  These feature pages break down the capability layers that support routing,
                  communication, booking, reputation, CRM visibility, and follow-up once the core
                  website system is in place.
                </p>
              </div>
            </SectionWrapper>

            {/* All Features Grid */}
            <SectionWrapper className='feature-lnd feature-lnd__gridSec' background='bg-white'>
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
                          <p className='feature-lnd__cardText text-sm text-muted-foreground'>
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
            </SectionWrapper>

            {/* CTA Section */}
            <PrimaryCTASection
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
                  primary: true,
                },
              ]}
            />
          </main>
        </CTARegistryProvider>
      </ErrorBoundary>
    </div>
  );
}
