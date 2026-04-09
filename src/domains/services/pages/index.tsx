import {
  ArrowRight,
  BarChart3,
  Bell,
  Blocks,
  Bot,
  Boxes,
  Calendar,
  FileSearch,
  Inbox,
  LayoutTemplate,
  Mail,
  Phone,
  RefreshCcw,
  RefreshCcwDot,
  Search,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  Workflow,
} from 'lucide-react';

import { Badge } from '@/components/reusable/single/Badge';
import { Button } from '@/components/reusable/single/Button';
import { ErrorBoundary } from '@/components/reusable/single/ErrorBoundary';
import { SectionWrapper } from '@/components/reusable/primitives';
import { SmartCTA } from '@/components/system/SmartCTA';
import { Card } from '@/components/ui/card';
import { primaryCta } from '@/config/primaryCta';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import { getVariantStyles } from '@/lib/ui/variantStyles';

const FEATURED_SERVICE_SLUG = 'smart-website-systems' as const;

const SUPPORTING_SYSTEM_SLUGS = [
  'local-seo-authority',
  'ai-lead-handling',
  'reputation-review-systems',
  'growth-revenue-systems',
] as const;

const OPERATIONAL_MODULE_SLUGS = [
  'booking-scheduling-system',
  'missed-call-recovery-system',
  'review-automation-system',
  'lead-reactivation-system',
  'conversion-funnel-system',
  'unified-communication-system',
] as const;

const IMPLEMENTATION_SUPPORT_SLUGS = [
  'wordpress-development',
  'website-redesign-system-rebuild',
  'crm-infrastructure-implementation',
  'marketing-automation-setup',
  'funnel-landing-page-development',
  'system-migration-platform-consolidation',
  'ecommerce',
  'elementor',
  'bricks-builder',
  'divi5',
] as const;

const SERVICES_PAGE_SMART_CTA_CONTEXT = {
  system: 'smart-website-systems',
  sourceType: 'page' as const,
  slug: 'services',
};

type VisibleServiceSlug =
  | typeof FEATURED_SERVICE_SLUG
  | (typeof SUPPORTING_SYSTEM_SLUGS)[number]
  | (typeof OPERATIONAL_MODULE_SLUGS)[number]
  | (typeof IMPLEMENTATION_SUPPORT_SLUGS)[number];

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
  'booking-scheduling-system': {
    icon: Calendar,
    title: 'Booking & Scheduling System',
    description:
      'A focused appointment-flow system for cleaner booking, confirmation, reminders, and reduced scheduling friction.',
  },
  'conversion-funnel-system': {
    icon: BarChart3,
    title: 'Conversion Funnel System',
    description:
      'A focused conversion-clarity system for better page flow, stronger offer structure, and cleaner handoff into enquiry action.',
  },
  'funnel-landing-page-development': {
    icon: Target,
    title: 'Funnel & Landing Page Development',
    description:
      'A focused implementation pathway for landing pages, offer pages, and campaign journeys that need a tighter conversion asset.',
  },
  'marketing-automation-setup': {
    icon: Mail,
    title: 'Marketing Automation Setup',
    description:
      'A structured automation implementation pathway for follow-up, reminders, reactivation, and lifecycle messaging.',
  },
  'system-migration-platform-consolidation': {
    icon: Boxes,
    title: 'System Migration & Platform Consolidation',
    description:
      'A migration pathway for moving away from fragmented tools, outdated platforms, and disconnected website systems.',
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
      'Structured review request, response, and escalation workflows to strengthen trust signals.',
  },
  'review-automation-system': {
    icon: Bell,
    title: 'Review Automation System',
    description:
      'A focused workflow for review requests, feedback routing, and stronger review velocity without manual chasing.',
  },
  'ai-lead-handling': {
    icon: Bot,
    title: 'AI Lead Handling Systems',
    description: 'AI chat and voice assistants for enquiry handling, routing, and support.',
  },
  'growth-revenue-systems': {
    icon: FileSearch,
    title: 'Revenue Growth Systems',
    description:
      'Technical and growth system reviews that improve revenue pathways, performance, and clarity.',
  },
  'crm-infrastructure-implementation': {
    icon: Workflow,
    title: 'CRM Infrastructure Implementation',
    description:
      'Structured CRM setup for lead routing, follow-up ownership, and cleaner pipeline management.',
  },
  'wordpress-development': {
    icon: LayoutTemplate,
    title: 'WordPress Website Development',
    description:
      'Structured WordPress implementation for service businesses that need a clear, maintainable website foundation.',
  },
  'website-redesign-system-rebuild': {
    icon: RefreshCcwDot,
    title: 'Website Redesign & System Rebuild',
    description:
      'A structural realignment service for outdated or cluttered websites that need a cleaner rebuild, not just a visual refresh.',
  },
  ecommerce: {
    icon: ShoppingCart,
    title: 'E-commerce Implementation',
    description:
      'Commerce implementation on WordPress with structured catalog, checkout, and fulfilment foundations.',
  },
  elementor: {
    icon: Blocks,
    title: 'Elementor Implementation',
    description:
      'Support-tier implementation page for structured WordPress delivery using Elementor.',
  },
  'bricks-builder': {
    icon: Blocks,
    title: 'Bricks Implementation',
    description:
      'Support-tier implementation page for performance-conscious WordPress delivery using Bricks.',
  },
  divi5: {
    icon: Blocks,
    title: 'Divi Implementation',
    description: 'Support-tier implementation page for structured WordPress delivery using Divi.',
  },
};

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
          Learn More <ArrowRight className='service-lnd__ctaIcon' aria-hidden='true' />
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
        <main role='main'>
          {/* Hero Section */}
          <SectionWrapper className='service-lnd service-lnd__hero' background='bg-gradient-surface-muted'>
            <div className='service-lnd__heroContent l-mx-auto text-center l-stack l-stack--loose'>
              <Badge variant='primary'>Services Architecture</Badge>
              <h1 className='service-lnd__title'>System Services for WordPress Businesses</h1>
              <p className='service-lnd__subtitle text-muted-foreground text-lg'>
                Smart Website Systems leads the structure. Supporting systems, operational
                modules, and implementation support pages sit beneath it in a controlled
                hierarchy.
              </p>
              <div className='service-lnd__actions l-row l-row-wrap l-gap-4 l-row-center'>
                <Button
                  {...(primaryCta.type !== 'chat' ? { href: primaryCta.href } : {})}
                  label={primaryCta.label}
                  icon={ArrowRight}
                  showDefaultIcon
                  {...(primaryCta.type === 'external'
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  {...(primaryCta.type === 'chat' ? { onClick: () => {} } : {})}
                />
              </div>
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
                            Start here when the website itself needs to operate as the core layer
                            that supports visibility, lead handling, booking, follow-up, and revenue
                            growth.
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
                  'Supporting Systems',
                  'These Tier 1 systems support the flagship Smart Website framework without competing with it as parallel pillars.',
                  SUPPORTING_SYSTEM_SLUGS
                )}

                {renderServiceSection(
                  'Operational Modules',
                  'These Tier 2 pages focus on narrower operating problems and connect upward into the broader system architecture.',
                  OPERATIONAL_MODULE_SLUGS
                )}

                {renderServiceSection(
                  'Implementation & Platform Support',
                  'These Tier 3 implementation pathways and builder support pages help deliver or extend the system without being positioned as strategic services.',
                  IMPLEMENTATION_SUPPORT_SLUGS
                )}
              </div>
          </SectionWrapper>
        </main>

        {/* Footer CTA Section */}
        <SmartCTA
          {...SERVICES_PAGE_SMART_CTA_CONTEXT}
          title='Ready to transform your WordPress business?'
          description='Discover how our integrated systems can streamline your operations and boost your growth.'
          primaryActionVariant='white'
          cssPrefix='footer-cta'
          backgroundColor='bg-gradient-primary'
        />
      </ErrorBoundary>
    </>
  );
}
