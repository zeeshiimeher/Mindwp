import { ArrowRight } from 'lucide-react';

import { CTASection } from '@/components/reusable/single';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { Card } from '@/components/ui/card';
import { FEATURE_REGISTRY } from '@/domains/features/registry';

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
        <main>
          {/* Hero Section */}
          <section className='feature-lnd feature-lnd__hero l-section bg-gradient-light'>
            <div className='l-container'>
              <div className='feature-lnd__heroContent l-stack l-stack--loose'>
                <Badge variant='secondary' context='section'>
                  Features Index
                </Badge>
                <h1>Platform Features Overview</h1>
                <p className='text-muted-foreground text-lg'>
                  This page lists all core features available in your platform. Each feature is a
                  distinct capability, organized for visibility and control. Use this index to
                  navigate and review every function included in your system.
                </p>
              </div>
            </div>
          </section>

          {/* All Features Grid */}
          <section className='feature-lnd feature-lnd__gridSec l-section bg-white'>
            <div className='l-container'>
              <div className='feature-lnd__grid l-grid l-gap-6 md:l-grid-2 lg:l-grid-3 xl:l-grid-4'>
                {features.map(feature => {
                  const Icon = feature.icon;
                  return (
                    <Card key={feature.slug} className='feature-lnd__card'>
                      <a href={feature.path} className='link-primary feature-lnd__link'>
                        <div className='feature-lnd__icon icon-container-md icon-bg-primary'>
                          <Icon
                            className='icon-text-primary'
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
            </div>
          </section>

          {/* CTA Section */}
          <CTASection
            title='Need More Information?'
            description='For details or clarification about any feature, contact support or review the documentation. Navigation is provided for reference only.'
            primaryAction={{
              label: 'Contact Support',
              href: '/contact',
              icon: ArrowRight,
            }}
            cssPrefix='footer-cta'
            backgroundColor='gradient-cta-1'
          />
        </main>
      </ErrorBoundary>
    </div>
  );
}
