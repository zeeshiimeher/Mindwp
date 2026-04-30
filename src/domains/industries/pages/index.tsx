import { ArrowRight } from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { PrimaryCTASection } from '@/components/sections/PrimaryCTASection';
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
    <CTARegistryProvider
      pageId='page:industries'
      pageType='page'
      primarySystem='smart-website-systems'
    >
      <div className='min-h-screen'>
        <main>
          {/* Hero */}
          <SectionWrapper background='bg-gradient-to-b from-muted/50 to-background'>
            <div className='text-center l-stack l-stack--loose'>
              <Badge variant='secondary' context='section'>
                Industry authority
              </Badge>
              <h1>The same enquiries get lost. The same revenue leaks. By industry.</h1>
              <p className='text-muted-foreground text-lg l-max-w-3xl l-mx-auto'>
                Missed calls in HVAC, dead web enquiries in roofing, no-show salon clients, stalled
                legal proposals, untracked real estate referrals. Every category below is organised
                around the operating moments where service businesses lose money and trust, and the
                system pattern that closes them.
              </p>
            </div>
          </SectionWrapper>

          {/* Industries Grid */}
          <SectionWrapper background='bg-background'>
            <div className='l-stack l-stack--loose'>
              <div className='l-stack'>
                <h2>Find your operating reality</h2>
                <p className='text-muted-foreground'>
                  Each category opens with the live failures that category sees every week, the
                  active sub-industries, and the supporting system patterns that close those
                  failures.
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
          <PrimaryCTASection
            title='Need help identifying which operating-system fix matters most for your industry?'
            description='Tell us where the handoff breaks across enquiries, follow-up, or delivery, and we will show you which service path fits your operating model, what it should fix first, and where not to overbuild.'
            actions={[{ label: 'Get Started', href: '/contact' }]}
          />
        </main>
      </div>
    </CTARegistryProvider>
  );
}
