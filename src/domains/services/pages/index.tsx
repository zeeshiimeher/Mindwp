import {
  ArrowRight,
  BarChart3,
  Bot,
  Inbox,
  Phone,
  RefreshCcw,
  Search,
  Sparkles,
  Star,
} from 'lucide-react';

import { SectionWrapper } from '@/components/reusable/primitives';
import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { PrimaryCTASection } from '@/components/system/PrimaryCTASection';
import { Card } from '@/components/ui/card';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import { getVariantStyles } from '@/lib/ui/variantStyles';

const FEATURED_SERVICE_SLUG = 'smart-website-systems' as const;

const SUPPORTING_SYSTEM_SLUGS = [
  'local-seo-authority',
  'ai-lead-handling',
  'reputation-review-systems',
] as const;

const OPERATIONAL_MODULE_SLUGS = [
  'missed-call-recovery-system',
  'lead-reactivation-system',
  'conversion-layer',
  'unified-communication-system',
] as const;

type VisibleServiceSlug =
  | typeof FEATURED_SERVICE_SLUG
  | (typeof SUPPORTING_SYSTEM_SLUGS)[number]
  | (typeof OPERATIONAL_MODULE_SLUGS)[number];

const SERVICE_META: Record<
  VisibleServiceSlug,
  {
    icon: typeof Sparkles;
    title: string;
    description: string;
  }
> = {
  'smart-website-systems': {
    icon: Sparkles,
    title: 'Smart Website Systems',
    description:
      'Websites and landing pages with integrated automation and CRM. Structured digital foundation.',
  },
  'conversion-layer': {
    icon: BarChart3,
    title: 'Conversion Layer',
    description:
      'A focused conversion system for stronger page flow, tighter offer pages, cleaner CTA logic, and clearer enquiry handoff.',
  },
  'lead-reactivation-system': {
    icon: RefreshCcw,
    title: 'Lead Reactivation System',
    description:
      'A focused recovery workflow for old enquiries, dormant quotes, and past-customer follow-up that has gone quiet.',
  },
  'missed-call-recovery-system': {
    icon: Phone,
    title: 'Missed Call Recovery System',
    description:
      'A focused lead-protection workflow for missed calls, text-back response, and cleaner follow-up handoff.',
  },
  'unified-communication-system': {
    icon: Inbox,
    title: 'Unified Communication System',
    description:
      'A focused routing layer for calls, forms, chat, and inbox messages so ownership and next steps stay clear.',
  },
  'local-seo-authority': {
    icon: Search,
    title: 'Local Authority & SEO Systems',
    description: 'Managed local SEO and authority systems for consistent discovery and trust.',
  },
  'reputation-review-systems': {
    icon: Star,
    title: 'Reputation & Review Systems',
    description:
      'Structured review request, response, escalation, and monitoring workflows to strengthen trust signals.',
  },
  'ai-lead-handling': {
    icon: Bot,
    title: 'AI Lead Handling Systems',
    description: 'AI chat and voice assistants for enquiry handling, routing, and support.',
  },
};

const PRIMARY_AND_SECONDARY_SERVICE_SLUGS = [
  FEATURED_SERVICE_SLUG,
  ...SUPPORTING_SYSTEM_SLUGS,
  ...OPERATIONAL_MODULE_SLUGS,
] as const;

type ServiceCardData = {
  slug: VisibleServiceSlug;
  icon: typeof Sparkles;
  title: string;
  description: string;
  href: string;
};

function getServiceCard(slug: VisibleServiceSlug): ServiceCardData | null {
  const service = SERVICE_REGISTRY[slug];
  if (!service) return null;

  const meta = SERVICE_META[slug];
  return {
    slug,
    icon: meta.icon,
    title: meta.title,
    description: meta.description,
    href: service.path,
  };
}

function renderServiceCard(service: ServiceCardData) {
  const Icon = service.icon;

  return (
    <Card key={service.slug} className='service-lnd__card'>
      <a href={service.href} className='link-primary service-lnd__link'>
        <div
          className={`service-lnd__icon icon-container-md ${getVariantStyles('primary').icon.bg}`}
        >
          <Icon className={`${getVariantStyles('primary').icon.text}`} aria-hidden='true' />
        </div>
        <div className='service-lnd__body'>
          <h3 className='service-lnd__cardTitle'>{service.title}</h3>
          <p className='service-lnd__cardText text-sm text-muted-foreground'>
            {service.description}
          </p>
        </div>
        <div className='service-lnd__cta l-row l-items-center text-primary text-sm'>
          See the service path <ArrowRight className='service-lnd__ctaIcon' aria-hidden='true' />
        </div>
      </a>
    </Card>
  );
}

function renderServiceSection(
  title: string,
  description: string,
  slugs: readonly VisibleServiceSlug[],
  columnsClassName = 'md:l-grid-2 lg:l-grid-3'
) {
  const services = slugs
    .map(getServiceCard)
    .filter((service): service is ServiceCardData => Boolean(service));

  return (
    <section className='l-stack l-stack--loose'>
      <div className='l-stack'>
        <h2>{title}</h2>
        <p className='text-muted-foreground'>{description}</p>
      </div>
      <div className={`service-lnd__grid l-grid l-gap-6 ${columnsClassName}`}>
        {services.map(renderServiceCard)}
      </div>
    </section>
  );
}

// Services overview landing
export function ServicesLanding() {
  const featuredService = getServiceCard(FEATURED_SERVICE_SLUG);

  return (
    <>
      <ErrorBoundary
        fallback={
          <div className='svc-err l-row l-items-center l-row-center'>
            <div className='svc-err__inner'>
              <h1 className='svc-err__title'>Services Temporarily Unavailable</h1>
              <p className='svc-err__text'>
                We&apos;re working to restore this page. Please try again later.
              </p>
              <Button href='/' label='Return Home' />
            </div>
          </div>
        }
      >
        <CTARegistryProvider pageId='page:services' pageType='page'>
          <main role='main'>
            {/* Hero Section */}
            <SectionWrapper
              className='service-lnd service-lnd__hero'
              background='bg-gradient-surface-muted'
            >
              <div className='service-lnd__heroContent l-mx-auto text-center l-stack l-stack--loose'>
                <Badge variant='primary'>Services Architecture</Badge>
                <h1 className='service-lnd__title'>The Main Service Paths We Build First</h1>
                <p className='service-lnd__subtitle text-muted-foreground text-lg'>
                  These are the live Tier 1 and Tier 2 service pages: the core front-door website
                  layer plus the operating systems that strengthen visibility, lead handling,
                  follow-up, and conversion once the structure is in place.
                </p>
              </div>
            </SectionWrapper>

            {/* Structured Services Sections */}
            <SectionWrapper className='service-lnd service-lnd__gridSec' background='bg-white'>
              <div className='l-stack l-stack--loose'>
                {featuredService && (
                  <section className='l-stack l-stack--loose'>
                    <div className='l-stack'>
                      <h2>Smart Website Systems</h2>
                      <p className='text-muted-foreground'>
                        The structural flagship of the services architecture. This is the featured
                        front-door system that frames the broader website, enquiry, follow-up, and
                        revenue chain.
                      </p>
                    </div>
                    <Card className='border-2 shadow-xl bg-gradient-surface-muted'>
                      <div className='p-8 md:p-10 l-grid l-gap-8 lg:l-grid-2 l-items-center'>
                        <div className='l-stack l-stack--loose'>
                          <div className='l-row l-items-center l-gap-3'>
                            <div
                              className={`service-lnd__icon icon-container-md ${getVariantStyles('primary').icon.bg}`}
                            >
                              <Sparkles
                                className={getVariantStyles('primary').icon.text}
                                aria-hidden='true'
                              />
                            </div>
                            <Badge variant='secondary'>Featured Framework</Badge>
                          </div>
                          <div className='l-stack'>
                            <h3 className='service-lnd__cardTitle'>{featuredService.title}</h3>
                            <p className='text-muted-foreground text-lg'>
                              {featuredService.description}
                            </p>
                          </div>
                          <p className='text-sm text-muted-foreground'>
                            Start here when the website itself has to operate as the commercial
                            control layer for visibility, response speed, booking, follow-up, and
                            revenue movement.
                          </p>
                          <div>
                            <Button
                              href={featuredService.href}
                              label='Explore Smart Website Systems'
                              icon={ArrowRight}
                              showDefaultIcon
                            />
                          </div>
                        </div>
                        <div className='l-stack l-gap-4'>
                          <Card className='p-5'>
                            <h4 className='mb-2'>Why it leads</h4>
                            <p className='text-sm text-muted-foreground'>
                              Supporting systems perform better when the website layer already has
                              clearer service structure, enquiry capture, routing, and conversion
                              readiness.
                            </p>
                          </Card>
                          <Card className='p-5'>
                            <h4 className='mb-2'>What sits beneath it</h4>
                            <p className='text-sm text-muted-foreground'>
                              Supporting systems address visibility, AI lead handling, reputation,
                              and revenue improvement. Modules and implementation pages support
                              narrower workflow or delivery needs within that same structure.
                            </p>
                          </Card>
                        </div>
                      </div>
                    </Card>
                  </section>
                )}

                {renderServiceSection(
                  'Core Service Pages',
                  'This combined listing keeps the main front-door service and the active supporting system pages in one place, without mixing in implementation-only support pages.',
                  PRIMARY_AND_SECONDARY_SERVICE_SLUGS
                )}
              </div>
            </SectionWrapper>
          </main>

          {/* Footer CTA Section */}
          <div className='text-sm text-muted-foreground text-center l-max-w-2xl l-mx-auto pt-6 pb-3'>
            If one of these service paths already matches the bottleneck you are seeing, the next
            step is to pressure-test that diagnosis before you invest in the wrong build.
          </div>
          <PrimaryCTASection
            title='Need help identifying the right system build first?'
            description='Tell us which part of the revenue path is failing first, and we will map that breakdown to the service system that should be fixed before anything else.'
            primaryActionVariant='white'
            cssPrefix='footer-cta'
            backgroundColor='bg-gradient-primary'
          />
        </CTARegistryProvider>
      </ErrorBoundary>
    </>
  );
}
