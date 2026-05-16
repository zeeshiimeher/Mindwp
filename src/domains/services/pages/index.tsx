import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { SERVICE_REGISTRY } from '@/domains/services/registry';
import { buildContactHref } from '@/lib/contact/contactHref';
import { PRIMARY_CTA_LABEL } from '@/lib/cta/primaryAction';

// =============================================================================
// ServicesLanding — services index page
// Sections: hero · primarySystems · implementationPaths · revenueRecovery · faq · cta
// New-system components only. Shared .services-lnd CSS lives in services.css.
// =============================================================================

const ARIA_HERO = 'Services -- index hero';
const ARIA_PRIMARY = 'Primary systems';
const ARIA_RECOVERY = 'Revenue recovery layer';
const ARIA_PATHS = 'Implementation paths';
const ARIA_FAQ = 'Frequently asked questions';

const ROLE_DOT = 'Role';
const TIER_DOT = 'Service path';

type SystemCardSpec = {
  slug: string;
  role: string;
  summary: string;
};

type PathCardSpec = {
  slug: string;
  summary: string;
};

const PRIMARY_SYSTEMS: readonly SystemCardSpec[] = [
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
    slug: 'lead-response-handling',
    role: 'Response path',
    summary:
      'Picks up missed calls, qualifies new enquiries and books in real time so the slow window stops costing work.',
  },
  {
    slug: 'follow-up-crm',
    role: 'Follow-up ownership',
    summary:
      'Where conversations land, who owns them and how follow-up actually happens. The ledger behind the system.',
  },
  {
    slug: 'reputation-review-systems',
    role: 'Reviews and proof',
    summary:
      'Steady review generation, calm response and quiet monitoring so reputation reflects the work that has been done.',
  },
];

const IMPLEMENTATION_PATHS: readonly PathCardSpec[] = [
  {
    slug: 'implementation/wordpress-development',
    summary:
      'WordPress as the build surface when the connected system needs flexibility and ownership.',
  },
  {
    slug: 'implementation/elementor',
    summary: 'Elementor when an existing team needs broad editorial flexibility.',
  },
  {
    slug: 'implementation/bricks-builder',
    summary: 'Bricks Builder when performance and developer-led control are the deciding factors.',
  },
  {
    slug: 'implementation/divi5',
    summary: 'Divi when the team already works comfortably inside that editing surface.',
  },
  {
    slug: 'implementation/woocommerce',
    summary: 'Connected ecommerce on WooCommerce when product, fulfilment and CRM need to talk.',
  },
  {
    slug: 'implementation/website-redesign-system-rebuild',
    summary: 'A redesign that doubles as a website-system rebuild, not a visual refresh.',
  },
];

const FAQ_ITEMS = [
  {
    id: 'svc-faq-where-to-start',
    question: 'Where should we start if we are not sure which system we need?',
    answer:
      'Start with the weak point that is currently easiest to see. Smart Website Systems is often the clearest entry point, but response, follow-up, local visibility, and review gaps can lead too.',
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

function PathCard({ spec }: { spec: PathCardSpec }) {
  const reg = getRegistryEntry(spec.slug);
  if (!reg) return null;
  return (
    <a className='svc-lnd__card svc-lnd__card--path' href={reg.path}>
      <header className='svc-lnd__cardHead'>
        <span className='svc-lnd__pill'>{TIER_DOT}</span>
        <span className='svc-lnd__role'>Smart Website Systems</span>
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
          eyebrow='Services'
          title='Website and Handling Systems. [[muted:Built Around Where Work Slips.]]'
          description='Each service protects a different part of the path: being found, being trusted, making contact, getting a response, staying followed up, and turning good work into proof.'
          actions={[{ label: PRIMARY_CTA_LABEL, href: contactHref, variant: 'white' }]}
          chips={['Visibility', 'Response', 'Follow-up', 'Trust', 'Recovery']}
          chipDotVariant='subtle'
        />

        <SectionShell
          heading={{
            eyebrow: 'Primary Systems',
            title: 'These are the working parts. Each one has a job.',
            description:
              'Five primary systems cover website clarity, local visibility, response, follow-up, and reviews. Most teams start with the system carrying the clearest leak.',
          }}
          tone='white'
          className='svc-lnd-section'
          ariaLabel={ARIA_PRIMARY}
        >
          <div className='svc-lnd__grid svc-lnd__grid--three'>
            {PRIMARY_SYSTEMS.map(spec => (
              <SystemCard key={spec.slug} spec={spec} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          heading={{
            eyebrow: 'Implementation Services',
            title: 'Practical website implementation paths under Smart Website Systems.',
            description:
              'These are active delivery paths for the website system. They are not separate strategic pillars.',
          }}
          tone='mist'
          className='svc-lnd-section'
          ariaLabel={ARIA_PATHS}
        >
          <div className='svc-lnd__grid svc-lnd__grid--three'>
            {IMPLEMENTATION_PATHS.map(spec => (
              <PathCard key={spec.slug} spec={spec} />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          heading={{
            eyebrow: 'Revenue Recovery Layer',
            title: 'A cross-system improvement layer, not a sixth service.',
            description:
              'Once activity is visible, Revenue Recovery helps find where value is still leaking across enquiries, follow-up, reviews, and repeat work.',
          }}
          tone='white'
          className='svc-lnd-section'
          ariaLabel={ARIA_RECOVERY}
        >
          <p className='svc-lnd__cardSummary'>
            It can inform the review, but it does not have its own service route or sit beside the
            five primary systems.
          </p>
        </SectionShell>

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
            eyebrow: 'Next Step',
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
