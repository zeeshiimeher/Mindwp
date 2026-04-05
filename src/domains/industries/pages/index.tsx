import { ArrowRight } from 'lucide-react';

import { CTASection } from '@/components/reusable/single';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { Card } from '@/components/ui/card';
import { getCategoryIndexIndustries } from '@/domains/industries/catalog';
import { getVariantStyles } from '@/lib/ui/variantStyles';

export default function IndustriesLanding() {
  const categoryPages = getCategoryIndexIndustries();
  const primaryCategories = categoryPages.filter(industry => industry.priority === 'primary');
  const expansionCategories = categoryPages.filter(industry => industry.priority === 'expansion');
  const coverageCategories = categoryPages.filter(industry => industry.priority === 'coverage');

  const renderCategoryCard = (industry: (typeof categoryPages)[number]) => {
    const Icon = industry.icon;
    const isCoverageLane = industry.priority === 'coverage';
    const buttonLabel =
      industry.priority === 'primary'
        ? 'See Primary Category'
        : industry.priority === 'expansion'
          ? 'See Expansion Category'
          : industry.priority === 'coverage'
            ? 'View Coverage Category'
            : (industry.ctaLabel ?? (industry.isLive ? `Explore ${industry.name}` : 'Discuss Fit'));

    return (
      <Card
        key={industry.slug}
        id={`industry-${industry.slug}`}
        className='p-8 border-2 hover:border-foreground/20 hover:shadow-xl transition-all'
      >
        <div className='l-stack l-stack--loose'>
          <div className='l-row l-items-start l-justify-between l-gap-4'>
            <div className={`icon-container-lg ${getVariantStyles('primary').icon.bg}`}>
              <Icon className={getVariantStyles('primary').icon.text} />
            </div>
            {industry.prioritySignal && (
              <Badge variant='secondary'>{industry.prioritySignal}</Badge>
            )}
          </div>
          <div>
            <h2 className='mb-2'>{industry.name}</h2>
            {!isCoverageLane && industry.landingSubtitle && (
              <p className='text-sm font-medium mb-1'>{industry.landingSubtitle}</p>
            )}
            <p className='text-sm text-muted-foreground'>{industry.description}</p>
          </div>
          <Button
            href={industry.href}
            variant={industry.isLive ? 'outline' : 'secondary'}
            label={buttonLabel}
            icon={ArrowRight}
            cssPrefix='btn-block'
            showDefaultIcon
          />
        </div>
      </Card>
    );
  };

  return (
    <div className='min-h-screen'>
      <main>
        {/* Hero */}
        <section className='l-section bg-gradient-to-b from-muted/50 to-background'>
          <div className='l-container'>
            <div className='text-center l-stack l-stack--loose'>
              <Badge variant='secondary' context='section'>
                Industry Navigation
              </Badge>
              <h1>Who This System Is Built For</h1>
              <p className='text-muted-foreground text-lg l-max-w-3xl l-mx-auto'>
                Home Services is the primary front-door lane, Beauty & Personal Care is the active
                secondary lane, and the remaining approved categories stay visible as coverage lanes
                without equal promotional weight.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className='l-section bg-background'>
          <div className='l-container '>
            <div className='l-stack l-stack--loose'>
              <section aria-labelledby='industry-primary'>
                <div className='mb-6 l-stack'>
                  <Badge variant='secondary'>Primary Lane</Badge>
                  <h2 id='industry-primary'>Primary Front-Door Categories</h2>
                  <p className='text-muted-foreground'>
                    These categories carry the deepest current buildout and the strongest
                    promotional emphasis.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    The main lane where Smart Website Systems are most actively demonstrated.
                  </p>
                </div>
                <div className='l-stack l-gap-8'>{primaryCategories.map(renderCategoryCard)}</div>
              </section>

              <section aria-labelledby='industry-expansion'>
                <div className='mb-6 l-stack'>
                  <Badge variant='secondary'>Expansion Lane</Badge>
                  <h2 id='industry-expansion'>Secondary Expansion Lane</h2>
                  <p className='text-muted-foreground'>
                    These categories are live and credible, but carry lighter front-door emphasis.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Actively promoted, but secondary to the primary lane.
                  </p>
                </div>
                <div className='l-stack l-gap-8'>{expansionCategories.map(renderCategoryCard)}</div>
              </section>

              <section aria-labelledby='industry-coverage'>
                <div className='mb-6 l-stack'>
                  <Badge variant='secondary'>Coverage Lane</Badge>
                  <h2 id='industry-coverage'>Coverage Lane Categories</h2>
                  <p className='text-muted-foreground'>
                    These categories are live as part of the approved model, but carry lighter
                    promotional weight.
                  </p>
                  <p className='text-sm text-muted-foreground'>
                    Kept intentionally lighter so the page preserves clear priority between lanes.
                  </p>
                </div>
                <div className='l-grid md:grid-cols-2 l-gap-8'>
                  {coverageCategories.map(renderCategoryCard)}
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Not Listed? */}
        <section>
          <div className='l-container'>
            <Card className='p-8 md:p-12 text-center'>
              <h2 className='mb-4'>How Industry Pages Connect Upward</h2>
              <p className='text-muted-foreground text-lg mb-8'>
                Industry pages route into Smart Website Systems first, then into the most relevant
                supporting service pages and authority content for that operating environment.
              </p>
              <Button
                href='/services/smart-website-systems'
                variant='outline'
                label='See Smart Website Systems'
                icon={ArrowRight}
                showDefaultIcon
              />
            </Card>
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title='Not sure where your business fits?'
          description='If you want to discuss your industry needs or understand which lane applies, we can help clarify the right approach.'
          primaryAction={{
            variant: 'white',
            label: 'Start a Conversation',
            href: '/contact',
            icon: ArrowRight,
          }}
          cssPrefix='footer-cta'
          backgroundColor='bg-gradient-primary'
        />
      </main>
    </div>
  );
}
