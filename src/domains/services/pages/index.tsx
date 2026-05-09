import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionFrame } from '@/components/layout/SectionFrame';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// ServicesLanding — services index page
// Sections: hero · sixSystems · operatingModules · implementationPaths · faq · cta
// New-system components only. Shared .services-lnd CSS lives in services.css.
// =============================================================================

const ARIA_HERO = 'Services -- index hero';
const ARIA_SIX = 'The six connected systems';
const ARIA_MODULES = 'Operating modules';
const ARIA_PATHS = 'Implementation paths';
const ARIA_FAQ = 'Frequently asked questions';

const ROLE_DOT = 'Role';
const PARENT_DOT = 'Parent system';
const TIER_DOT = 'Service path';

type SystemCardSpec = {
  slug: string;
  role: string;
  summary: string;
};

type ModuleCardSpec = {
  slug: string;
  parent: string;
  summary: string;
};

type PathCardSpec = {
  slug: string;
  kind: 'decision' | 'builder';
  summary: string;
};

const SIX_SYSTEMS: readonly SystemCardSpec[] = [
  {
    slug: 'smart-website-systems',
    role: 'Front door',
    summary:
      'The structural layer that captures enquiries, attaches context, and routes the next step. Other systems plug into it.',
  },
  {
    slug: 'local-seo-authority',
    role: 'Local visibility',
    summary:
      'Local discovery, profile authority and service-page presence so the business is found by the right intent in its own area.',
  },
  {
    slug: 'ai-lead-handling',
    role: 'Instant response',
    summary:
      'Picks up missed calls, qualifies new enquiries and books in real time so the slow window stops costing work.',
  },
  {
    slug: 'crm-infrastructure-implementation',
    role: 'Lead ownership',
    summary:
      'Where conversations land, who owns them and how follow-up actually happens. The ledger behind the system.',
  },
  {
    slug: 'reputation-review-systems',
    role: 'Trust signal',
    summary:
      'Steady review generation, calm response and quiet monitoring so reputation reflects the work that has been done.',
  },
  {
    slug: 'revenue-growth',
    role: 'Recovery rhythm',
    summary:
      'Names where revenue is leaking across the connected systems and runs the short, durable rhythm that brings it back.',
  },
];

const OPERATING_MODULES: readonly ModuleCardSpec[] = [
  {
    slug: 'missed-call-recovery-system',
    parent: 'AI Lead Handling',
    summary: 'Closes the gap between a missed call and the first useful reply.',
  },
  {
    slug: 'lead-reactivation-system',
    parent: 'Revenue Growth',
    summary: 'Reopens dormant enquiries and quotes that never had a proper follow-up path.',
  },
  {
    slug: 'unified-communication-system',
    parent: 'CRM & Automation',
    summary: 'Calls, forms, chat and inbox messages routed so ownership stays clear.',
  },
  {
    slug: 'conversion-layer',
    parent: 'Smart Website Systems',
    summary: 'Tighter offer pages, cleaner CTA logic and clearer enquiry handoff.',
  },
  {
    slug: 'system-migration-platform-consolidation',
    parent: 'Smart Website Systems',
    summary: 'Consolidates platforms and migrates connected work without losing history.',
  },
  {
    slug: 'website-redesign-system-rebuild',
    parent: 'Smart Website Systems',
    summary: 'A redesign that doubles as a system rebuild, not a visual refresh.',
  },
];

const IMPLEMENTATION_PATHS: readonly PathCardSpec[] = [
  {
    slug: 'conversion-funnel-system-vs-landing-page-development',
    kind: 'decision',
    summary:
      'When a connected funnel is the right answer and when a single landing page is enough.',
  },
  {
    slug: 'service-pages-vs-one-generic-services-page',
    kind: 'decision',
    summary:
      'Why service-specific pages outperform one all-purpose services page for local intent.',
  },
  {
    slug: 'website-crm-integration-vs-manual-lead-handling',
    kind: 'decision',
    summary: 'The honest comparison between connected CRM handling and manual inbox follow-up.',
  },
  {
    slug: 'wordpress-development',
    kind: 'builder',
    summary:
      'WordPress as the build surface when the connected system needs flexibility and ownership.',
  },
  {
    slug: 'ecommerce',
    kind: 'builder',
    summary: 'Connected ecommerce on WooCommerce when product, fulfilment and CRM need to talk.',
  },
  {
    slug: 'divi5',
    kind: 'builder',
    summary: 'Divi 5 as the build surface for teams already comfortable inside that ecosystem.',
  },
  {
    slug: 'bricks-builder',
    kind: 'builder',
    summary: 'Bricks Builder when performance and developer-led control are the deciding factors.',
  },
  {
    slug: 'elementor',
    kind: 'builder',
    summary: 'Elementor when an existing team needs the broadest editorial flexibility.',
  },
];

const FAQ_ITEMS = [
  {
    id: 'svc-faq-where-to-start',
    question: 'Where should we start if we are not sure which system we need?',
    answer:
      'Start with the leak that is currently costing the most. The Smart Website Systems page is usually the right entry point, since the other systems plug into it.',
  },
  {
    id: 'svc-faq-many-at-once',
    question: 'Do we have to take on several systems at once?',
    answer:
      'No. Each system is built so it can stand on its own and be layered into the others when it earns its place.',
  },
  {
    id: 'svc-faq-platforms',
    question: 'Are we locked into a specific platform?',
    answer:
      'No. The build surface is chosen for the situation. The connected systems run consistently underneath whatever surface is right for the team.',
  },
  {
    id: 'svc-faq-results',
    question: 'Will you guarantee specific results?',
    answer:
      'No. The work is about durable structure and visible ownership. Outcomes depend on the existing situation and the rhythm a team can hold.',
  },
];

function getRegistryEntry(slug: string) {
  return SERVICE_REGISTRY[slug];
}

function SystemCard({ spec }: { spec: SystemCardSpec }) {
  const reg = getRegistryEntry(spec.slug);
  if (!reg) return null;
  return (
    <a className='svc-lnd__card svc-lnd__card--system' href={reg.path}>
      <header className='svc-lnd__cardHead'>
        <span className='svc-lnd__pill'>{ROLE_DOT}</span>
        <span className='svc-lnd__role'>{spec.role}</span>
      </header>
      <h3 className='svc-lnd__cardTitle'>{reg.title}</h3>
      <p className='svc-lnd__cardSummary'>{spec.summary}</p>
      <span className='svc-lnd__cardCta'>See the system</span>
    </a>
  );
}

function ModuleCard({ spec }: { spec: ModuleCardSpec }) {
  const reg = getRegistryEntry(spec.slug);
  if (!reg) return null;
  return (
    <a className='svc-lnd__card svc-lnd__card--module' href={reg.path}>
      <header className='svc-lnd__cardHead'>
        <span className='svc-lnd__pill'>{PARENT_DOT}</span>
        <span className='svc-lnd__role'>{spec.parent}</span>
      </header>
      <h3 className='svc-lnd__cardTitle'>{reg.badge}</h3>
      <p className='svc-lnd__cardSummary'>{spec.summary}</p>
      <span className='svc-lnd__cardCta'>See the module</span>
    </a>
  );
}

function PathCard({ spec }: { spec: PathCardSpec }) {
  const reg = getRegistryEntry(spec.slug);
  if (!reg) return null;
  const kindLabel = spec.kind === 'decision' ? 'Decision support' : 'Build surface';
  return (
    <a className={`svc-lnd__card svc-lnd__card--path svc-lnd__card--${spec.kind}`} href={reg.path}>
      <header className='svc-lnd__cardHead'>
        <span className='svc-lnd__pill'>{TIER_DOT}</span>
        <span className='svc-lnd__role'>{kindLabel}</span>
      </header>
      <h3 className='svc-lnd__cardTitle'>{reg.badge}</h3>
      <p className='svc-lnd__cardSummary'>{spec.summary}</p>
      <span className='svc-lnd__cardCta'>Read the path</span>
    </a>
  );
}

export function ServicesLanding() {
  const contactHref = buildContactHref({
    system: 'smart-website-systems',
    sourceType: 'page',
    slug: 'services',
  });

  return (
    <CTARegistryProvider
      pageId='page:services'
      pageType='page'
      primarySystem='smart-website-systems'
    >
      <div className='svc-lnd-page'>
        <HeroFrame
          ariaLabel={ARIA_HERO}
          className='svc-lnd-hero'
          badge='Services'
          title='Six Connected Systems. [[muted:One Front Door.]]'
          description='Each system stands on its own and works harder when the others are in place. The pages below describe what each one actually does and where it fits.'
          actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
          chips={['Visibility', 'Response', 'Follow-up', 'Trust', 'Recovery']}
          chipDotVariant='subtle'
        />

        <SectionFrame
          heading={{
            kicker: 'The Six Systems',
            title: 'These are the working parts. Each one has a job.',
            description:
              'Six connected systems cover visibility, instant response, ownership, trust and recovery. Most teams start with the system carrying the heaviest leak.',
          }}
          tone='white'
          className='svc-lnd-section'
          ariaLabel={ARIA_SIX}
        >
          <div className='svc-lnd__grid svc-lnd__grid--three'>
            {SIX_SYSTEMS.map(spec => (
              <SystemCard key={spec.slug} spec={spec} />
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          heading={{
            kicker: 'Operating Modules',
            title: 'Focused modules that sit inside the connected systems.',
            description:
              'When the leak is narrower than a whole system, a single module is often the cleaner first step.',
          }}
          tone='mist'
          className='svc-lnd-section'
          ariaLabel={ARIA_MODULES}
        >
          <div className='svc-lnd__grid svc-lnd__grid--three'>
            {OPERATING_MODULES.map(spec => (
              <ModuleCard key={spec.slug} spec={spec} />
            ))}
          </div>
        </SectionFrame>

        <SectionFrame
          heading={{
            kicker: 'Implementation Paths',
            title: 'Decision support and the build surfaces beneath the work.',
            description:
              'Comparison pages for the common forks in the road, plus the platforms used when WordPress is the right base.',
          }}
          tone='white'
          className='svc-lnd-section'
          ariaLabel={ARIA_PATHS}
        >
          <div className='svc-lnd__grid svc-lnd__grid--three'>
            {IMPLEMENTATION_PATHS.map(spec => (
              <PathCard key={spec.slug} spec={spec} />
            ))}
          </div>
        </SectionFrame>

        <FAQSection
          eyebrow='Questions'
          title='Common questions about choosing a service path.'
          description='Short answers about where to start, what to combine and what we will not promise.'
          items={FAQ_ITEMS}
          tone='mist'
          variant='split'
          className='svc-lnd-faq'
          ariaLabel={ARIA_FAQ}
        />

        <DecisionPanel
          className='svc-lnd-cta'
          heading={{
            kicker: 'Next Step',
            title: 'Not sure which path actually fixes the bottleneck?',
            description:
              'Tell us what is breaking — visibility, response speed, follow-up or conversion — and we will point to the path that addresses the first leak without overbuilding.',
          }}
          actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref }]}
          expectations={[
            { num: '01', text: 'We hear what is happening right now.' },
            { num: '02', text: 'We name the first commercial leak honestly.' },
            { num: '03', text: 'We point to the path that fits, not the biggest build.' },
          ]}
        />
      </div>
    </CTARegistryProvider>
  );
}
