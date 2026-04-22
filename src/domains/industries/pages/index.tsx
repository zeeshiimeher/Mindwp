import { ArrowRight } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import { getCategoryIndexIndustries } from '@/domains/industries/catalog';
import { getVariantStyles } from '@/lib/ui/variantStyles';

export default function IndustriesLanding() {
  const categoryPages = getCategoryIndexIndustries();

  const priorityLabels = {
    primary: 'Primary Focus',
    expansion: 'Expansion Category',
    coverage: 'Coverage Category',
  } as const;

  const renderCategoryCard = (industry: (typeof categoryPages)[number]) => {
    const Icon = industry.icon;
    const priorityLabel = priorityLabels[industry.priority ?? 'coverage'];

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
            <Badge variant='secondary'>{priorityLabel}</Badge>
          </div>
          <div>
            <h2 className='mb-2'>{industry.name}</h2>
            {industry.landingSubtitle && (
              <p className='text-sm font-medium mb-1'>{industry.landingSubtitle}</p>
            )}
            <p className='text-sm text-muted-foreground'>{industry.description}</p>
          </div>
          <a
            href={industry.href}
            className='link-primary l-row l-items-center l-gap-2 text-primary text-sm'
          >
            See the operating model
            <ArrowRight aria-hidden='true' />
          </a>
        </div>
      </Card>
    );
  };

  return (
    <CTARegistryProvider pageId='page:industries' pageType='page'>
      <div className='min-h-screen'>
        <main>
          {/* Hero */}
          <SectionWrapper background='bg-gradient-to-b from-muted/50 to-background'>
            <div className='text-center l-stack l-stack--loose'>
              <Badge variant='secondary' context='section'>
                Industry Navigation
              </Badge>
              <h1>Industry Systems Built Around How The Work Actually Runs</h1>
              <p className='text-muted-foreground text-lg l-max-w-3xl l-mx-auto'>
                Explore the live industry categories where MindWP has mapped the website, lead
                handling, follow-up, and proof system into a clearer operating model. Each route
                leads into category-specific detail pages instead of generic service summaries.
              </p>
            </div>
          </SectionWrapper>

          {/* Industries Grid */}
          <SectionWrapper background='bg-background'>
            <div className='l-stack l-stack--loose'>
              <div className='l-stack'>
                <h2>Browse The Current Industry Front Doors</h2>
                <p className='text-muted-foreground'>
                  Each category groups the active sub-industries and shows the supporting system
                  patterns that matter most in that operating environment.
                </p>
              </div>
              <div className='l-grid l-gap-8 md:grid-cols-2 xl:grid-cols-2'>
                {categoryPages.map(renderCategoryCard)}
              </div>
            </div>
          </SectionWrapper>

          {/* CTA */}
          <div className='text-sm text-muted-foreground text-center l-max-w-2xl l-mx-auto pt-6 pb-3'>
            If one of these categories matches how the business actually runs, the next step is to
            map that operating model to the service system that removes the real bottleneck.
          </div>
          <SmartCTA
            system='smart-website-systems'
            pageType='page'
            slug='industries'
            intent='conversion'
            position='footer'
            title='Need help identifying which operating-system fix matters most for your industry?'
            description='Tell us where the handoff breaks across enquiries, follow-up, or delivery, and we will show you which service path fits your operating model, what it should fix first, and where not to overbuild.'
            primaryActionVariant='white'
            cssPrefix='footer-cta'
            backgroundColor='bg-gradient-primary'
          />
        </main>
      </div>
    </CTARegistryProvider>
  );
}
