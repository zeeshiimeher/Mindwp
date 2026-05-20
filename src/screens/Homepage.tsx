/**
 * Homepage — MindWP
 *
 * Long-form homepage for established service businesses and specialist clinics.
 * Opens with recognition that work already comes in, but too much slips away
 * between being found, trusted, contacted, answered, followed up, reviewed,
 * and recovered.
 *
 * Page argument:
 *  - The website is the visible control point for service businesses, and the
 *    practice front door for specialist clinics.
 *  - Connected handling around the website makes sure calls, forms, quotes,
 *    and consultation requests are owned, answered, followed up, and turned
 *    into proof.
 *  - The five active primary systems form one connected operating path with
 *    five named protections — never an equal-tile catalog.
 *
 * Section index:
 *   01  Hero with operating signal surface         (dark, HeroFrame)
 *   02  Leak map                                   (light mist)
 *   03  Website as public control point            (light gradient + dark inner panel)
 *   04  Normal website vs connected system         (white)
 *   05  What conversion-focused actually means     (mist)
 *   06  Connected handling path                    (gradient-teal)
 *   07  Five protections, one connected path       (gradient-dark — single body anchor)
 *   08  What changes when the path is connected    (gradient-mist)
 *   09  How this shows up — service + clinic       (gradient-teal)
 *   10  Selected website-system surfaces           (white + dark inner panels)
 *   11  Fit / not fit                              (mist)
 *   12  Practical delivery, system thinking        (white)
 *   13  FAQ                                        (mist)
 *   14  Final diagnostic CTA                       (light section bg, DecisionPanel container is dark)
 *
 * Data scope:
 *  - homepage.ts holds hero text/chips/actions, FAQ items, DecisionPanel content.
 *  - Everything else (operating maps, leak map, contrast, mechanisms, handling
 *    path, five protections, positive states, scenarios, selected surfaces,
 *    fit filter, credibility) lives in this file as page-owned arrays and JSX.
 *
 * Visual rules:
 *  - Mostly white/mist/light-gradient. One full dark body section (07).
 *  - Strong dark inner panels are allowed inside light sections (03, 10).
 *  - No inline hex values — tokens only via var(--mw-*) or [var(--mw-*)].
 *  - mw-animate-line used at most twice (02 leak rail, 06 handling rail).
 *  - Lucide icons at strokeWidth 1.5; sizes 14–16 in small surfaces, 20 max.
 *  - No fake metrics, screenshots, client names, testimonials, or outcomes.
 *  - "Selected Website-System Surfaces" is proof-supportive, not portfolio.
 *
 * Existing patterns:
 *  - This file replaces the prior Section2–Section7 sketches wholesale.
 *  - No portfolio route or /portfolio navigation exists; nothing here creates one.
 */
import {
  AlertTriangle,
  ArrowRight,
  Check,
  FileText,
  Inbox,
  type LucideIcon,
  PhoneOff,
  Repeat,
  Search,
} from 'lucide-react';

import { FAQSection } from '@/components/content/FAQSection';
import { DecisionPanel } from '@/components/conversion/DecisionPanel';
import { HeroFrame } from '@/components/layout/HeroFrame';
import { SectionShell } from '@/components/layout/SectionShell';
import { StatusBadge } from '@/components/primitives/StatusBadge';
import { CTARegistryProvider } from '@/components/system/PageEnforcement';
import { homepageData } from '@/domains/home/data/homepage';

// =============================================================================
// Page-owned data — kept in JSX so the data file can stay minimal.
// =============================================================================

type SignalStatus = 'leaking' | 'unowned';

const HOME_HERO_SIGNALS: ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  note: string;
  status: SignalStatus;
}> = [
  {
    icon: Search,
    label: 'Local search',
    note: 'Found, but not clearly answered',
    status: 'unowned',
  },
  {
    icon: FileText,
    label: 'Service page visit',
    note: 'Interest without enough direction',
    status: 'unowned',
  },
  { icon: Inbox, label: 'Form enquiry', note: 'Arrives without ownership', status: 'unowned' },
  {
    icon: PhoneOff,
    label: 'Missed call',
    note: 'No response path after the ring',
    status: 'leaking',
  },
  {
    icon: Repeat,
    label: 'Follow-up due',
    note: 'The next step depends on memory',
    status: 'leaking',
  },
];

type LeakState = 'leak' | 'weak' | 'ok';

const HOME_LEAK_STATES: ReadonlyArray<{
  label: string;
  note: string;
  state: LeakState;
  main?: boolean;
}> = [
  { label: 'Discovery', note: 'Searched and found', state: 'ok' },
  { label: 'Capture', note: 'Form or call submitted', state: 'ok' },
  { label: 'Response', note: 'Hours pass before a reply', state: 'leak', main: true },
  { label: 'Follow-up', note: 'Nobody owns the chase', state: 'weak' },
  { label: 'Visibility', note: 'Owner cannot see what happened', state: 'weak' },
];

const HOME_CONTROL_LAYERS: ReadonlyArray<{
  eyebrow: string;
  title: string;
  accent: 'cyan' | 'teal' | 'green';
  points: ReadonlyArray<string>;
}> = [
  {
    eyebrow: 'Visible layer',
    title: 'The website',
    accent: 'cyan',
    points: [
      'Service, treatment, or procedure pages',
      'Trust signals where decisions form',
      'Clear next step for each visitor',
      'Local and practice relevance',
    ],
  },
  {
    eyebrow: 'Handling layer',
    title: 'Around the website',
    accent: 'teal',
    points: [
      'Enquiry routing and source context',
      'Owner and status on every active item',
      'Fast response, even after hours',
      'Follow-up visibility, not memory',
    ],
  },
  {
    eyebrow: 'Improvement layer',
    title: 'Maintained over time',
    accent: 'green',
    points: [
      'Completed work captured as proof',
      'Pages tuned where they leak',
      'Local signals aligned with the website',
      'Reviews requested at the right time',
    ],
  },
];

const HOME_CONTRAST_NORMAL: ReadonlyArray<string> = [
  'Service pages list what you do',
  'Enquiries land in a shared inbox',
  'Whoever sees it first replies — eventually',
  'Quote goes out, then nothing depends on memory',
  'Reviews happen when someone remembers',
  'Owner has no view of what is in motion',
];

const HOME_CONTRAST_CONNECTED: ReadonlyArray<string> = [
  'Pages explain the work and the next step',
  'Enquiries land with context, source, and owner',
  'First response happens fast and is logged',
  'Quote and consultation follow-up runs without anyone chasing',
  'Reviews are requested at the right moment',
  'Owner sees every active enquiry and where it stands',
];

const HOME_CONVERSION_MECHANISMS: ReadonlyArray<{
  num: string;
  label: string;
  note: string;
}> = [
  {
    num: '01',
    label: 'Clarity',
    note: 'Service, treatment, or procedure pages explain the work in plain language',
  },
  { num: '02', label: 'Trust', note: 'Proof and signals appear where hesitation usually happens' },
  {
    num: '03',
    label: 'Intent-matched CTA',
    note: 'The next step matches what the visitor came to do',
  },
  { num: '04', label: 'Handoff', note: 'The enquiry lands with context, source, and owner' },
  { num: '05', label: 'Improvement', note: 'Pages and paths are maintained, not relaunched' },
];

const HOME_HANDLING_STAGES: ReadonlyArray<{
  num: string;
  label: string;
  note: string;
}> = [
  { num: '01', label: 'Enquiry arrives', note: 'Call, form, message, or booking request' },
  { num: '02', label: 'First response', note: 'Fast, even after hours' },
  { num: '03', label: 'Source recorded', note: 'Where it came from and what they wanted' },
  { num: '04', label: 'Owner sees it', note: 'The right person, not a shared inbox' },
  { num: '05', label: 'Follow-up runs', note: 'Quote chased, reminder sent, status updated' },
  { num: '06', label: 'Proof captured', note: 'Review requested when the work is done' },
];

type ProtectionAccent = 'cyan' | 'teal' | 'amber' | 'green' | 'purple';

type ProtectionCardData = {
  slug: string;
  title: string;
  label: string;
  note: string;
};

const HOME_PROTECTION_HUB: ProtectionCardData = {
  slug: 'smart-website-systems',
  title: 'Smart Website Systems',
  label: 'Where decisions form',
  note: 'Service, treatment, and procedure pages carry clarity, trust, and the next step.',
};

const HOME_PROTECTION_OUTER: ReadonlyArray<ProtectionCardData & { accent: ProtectionAccent }> = [
  {
    slug: 'local-seo-authority',
    accent: 'teal',
    title: 'Local SEO Authority',
    label: 'Found and verified',
    note: 'Nearby customers and patients find the business and verify it before they enquire.',
  },
  {
    slug: 'lead-response-handling',
    accent: 'amber',
    title: 'Lead Response & Handling',
    label: 'First response and routing',
    note: 'Calls, forms, and messages reach the right person fast — and do not get lost after hours.',
  },
  {
    slug: 'follow-up-crm',
    accent: 'green',
    title: 'Follow-Up & CRM',
    label: 'Owned next step',
    note: 'Every enquiry has an owner, a status, and a next step that does not depend on memory.',
  },
  {
    slug: 'reputation-review-systems',
    accent: 'purple',
    title: 'Reputation & Review',
    label: 'Work becomes proof',
    note: 'Completed work, appointments, and outcomes turn into visible trust at the right time.',
  },
];

// Static accent class maps so Tailwind JIT detects every literal.
const PROTECTION_ACCENT_EYEBROW: Record<ProtectionAccent, string> = {
  cyan: 'text-[var(--mw-signal-cyan)]',
  teal: 'text-[var(--mw-signal-teal)]',
  amber: 'text-[var(--mw-signal-amber)]',
  green: 'text-[var(--mw-signal-green)]',
  purple: 'text-[var(--mw-signal-purple)]',
};

const PROTECTION_ACCENT_DOT: Record<ProtectionAccent, string> = {
  cyan: 'bg-[var(--mw-signal-cyan)] shadow-[var(--mw-glow-cyan)]',
  teal: 'bg-[var(--mw-signal-teal)] shadow-[var(--mw-glow-teal)]',
  amber: 'bg-[var(--mw-signal-amber)] shadow-[var(--mw-glow-amber)]',
  green: 'bg-[var(--mw-signal-green)] shadow-[var(--mw-glow-green)]',
  purple: 'bg-[var(--mw-signal-purple)] shadow-[var(--mw-glow-purple)]',
};

const CONTROL_LAYER_ACCENT_EYEBROW: Record<'cyan' | 'teal' | 'green', string> = {
  cyan: 'text-[var(--mw-signal-cyan)]',
  teal: 'text-[var(--mw-signal-teal)]',
  green: 'text-[var(--mw-signal-green)]',
};

const CONTROL_LAYER_ACCENT_DOT: Record<'cyan' | 'teal' | 'green', string> = {
  cyan: 'bg-[var(--mw-signal-cyan)]',
  teal: 'bg-[var(--mw-signal-teal)]',
  green: 'bg-[var(--mw-signal-green)]',
};

const HOME_POSITIVE_STATES: ReadonlyArray<string> = [
  'Enquiries land somewhere useful, not in a shared inbox',
  'First response happens fast, even after hours',
  'Every active enquiry has an owner and a status',
  'Quote and consultation follow-up does not depend on memory',
  'Reviews are requested at the right moment, not chased later',
  'Owner sees what came in, what got handled, and what is still moving',
];

const HOME_SCENARIOS: ReadonlyArray<{
  label: string;
  title: string;
  beats: ReadonlyArray<string>;
}> = [
  {
    label: 'Illustrative scenario · Roofing',
    title: 'Storm passes. The phone does not stop.',
    beats: [
      'Search traffic spikes overnight. The website shows the right service area.',
      'Form quotes pile up while crews are still out on jobs.',
      'Missed calls get a fast acknowledgement instead of going cold.',
      'Each quote has an owner, a follow-up reminder, and a visible status.',
      'Once the job is done, a review request goes out at the right moment.',
    ],
  },
  {
    label: 'Illustrative scenario · Specialist clinic',
    title: 'A patient researches their treatment options.',
    beats: [
      'The procedure page explains what the treatment involves and what to expect.',
      'A consultation request lands with practice context, not just a name.',
      'The right team member sees it without it sitting in a shared inbox.',
      'Pre-appointment follow-up does not depend on someone remembering.',
      'After the appointment, the practice front door earns its next review.',
    ],
  },
];

const HOME_SELECTED_FEATURED_PARTS: ReadonlyArray<{ label: string; note: string }> = [
  { label: 'Problem & intent', note: 'What the visitor came to understand' },
  { label: 'Plain-language explanation', note: 'What the service or treatment actually is' },
  { label: 'Proof placement', note: 'Trust signals where hesitation usually happens' },
  { label: 'Intent-matched CTA', note: 'Call, form, booking, or consultation request' },
  { label: 'Handoff', note: 'Context, source, and owner sent with the enquiry' },
];

const HOME_SELECTED_TRUST_LABELS: ReadonlyArray<string> = [
  'Local service area',
  'Verified business or practice',
  'Real recent work',
  'Response within minutes',
];

const HOME_SELECTED_HANDOFF_ROWS: ReadonlyArray<{ field: string; value: string }> = [
  { field: 'Source', value: 'Service page' },
  { field: 'Intent', value: 'Quote request' },
  { field: 'Owner', value: 'Routed' },
  { field: 'Status', value: 'Active' },
];

const HOME_FIT_FOR: ReadonlyArray<string> = [
  'Established service business or specialist clinic',
  'Real enquiries, jobs, appointments, or consultations already exist',
  'Quote, booking, or follow-up handling has visible gaps',
  'Owner wants practical structure, not a prettier website',
  'Long-term stability and compounding trust matter more than a launch event',
];

const HOME_FIT_NOT_FOR: ReadonlyArray<string> = [
  'Cheapest possible website package',
  'Guaranteed rankings or "dominate Google" expectations',
  'AI chatbot framed as the offer instead of practical handling',
  'Looks-only redesign with no business context',
  'Healthcare buyer expecting EMR, compliance, or treatment-outcome claims',
];

// =============================================================================
// Page
// =============================================================================

export default function Homepage() {
  return (
    <CTARegistryProvider pageId='page:home' pageType='page' primarySystem='smart-website-systems'>
      <main>
        <HomeHero />
        <HomeLeakMap />
        <HomeControlPoint />
        <HomeContrast />
        <HomeConversionMeans />
        <HomeConnectedHandling />
        <HomeFiveProtections />
        <HomeWhatChanges />
        <HomeScenarios />
        <HomeSelectedSurfaces />
        <HomeFit />
        <HomeCredibility />
        <HomeFAQ />
        <HomeCTA />
      </main>
    </CTARegistryProvider>
  );
}

// =============================================================================
// 01 · Hero
// =============================================================================

function HomeHero() {
  const { hero } = homepageData;

  return (
    <HeroFrame
      ariaLabel='Homepage hero'
      eyebrow={hero.eyebrow}
      title={hero.heading}
      description={hero.description}
      actions={[
        {
          label: hero.primaryAction.label,
          href: hero.primaryAction.href,
          variant: 'white',
          icon: <ArrowRight size={16} strokeWidth={1.5} aria-hidden='true' />,
        },
        {
          label: hero.secondaryAction.label,
          href: hero.secondaryAction.href,
          variant: 'ghost',
          icon: <ArrowRight size={14} strokeWidth={1.5} aria-hidden='true' />,
        },
      ]}
      chips={hero.chips.map(chip => ({ label: chip.label, accent: chip.accent }))}
      visual={<HomeHeroSignalSurface />}
    />
  );
}

function HomeHeroSignalSurface() {
  const leakingCount = HOME_HERO_SIGNALS.filter(signal => signal.status === 'leaking').length;
  const unownedCount = HOME_HERO_SIGNALS.filter(signal => signal.status === 'unowned').length;

  return (
    <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-white-12)] bg-[var(--mw-white-06)] p-5 shadow-[var(--mw-shadow-dark-lg)] mw-animate-up'>
      <div className='mb-5 flex items-start justify-between gap-4 border-b border-[var(--mw-white-10)] pb-4'>
        <div>
          <p className='mw-text-eyebrow text-[var(--mw-signal-cyan)]'>Signal surface</p>
          <p className='mt-1 text-sm text-[var(--mw-text-on-dark-muted)]'>
            What your business looks like today
          </p>
        </div>
        <div className='rounded-[var(--mw-radius-lg)] border border-[var(--mw-white-12)] bg-[var(--mw-white-08)] px-3 py-2 text-right'>
          <p className='mw-text-eyebrow text-[var(--mw-text-on-dark-muted)]'>Signals</p>
          <strong className='block text-lg leading-tight tabular-nums text-[var(--mw-text-on-dark-strong)]'>
            {String(HOME_HERO_SIGNALS.length).padStart(2, '0')}
          </strong>
        </div>
      </div>

      <ul className='mw-animate-stagger grid gap-3'>
        {HOME_HERO_SIGNALS.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <li
              key={signal.label}
              className='grid grid-cols-[auto_auto_1fr_auto] items-center gap-3 rounded-[var(--mw-radius-lg)] border border-[var(--mw-white-08)] bg-[var(--mw-white-04)] px-3 py-3'
            >
              <span className='tabular-nums text-xs text-[var(--mw-text-on-dark-muted)]'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className='grid size-8 place-items-center rounded-full border border-[var(--mw-white-12)] bg-[var(--mw-white-08)] text-[var(--mw-signal-cyan)]'>
                <Icon size={15} strokeWidth={1.5} aria-hidden='true' />
              </span>
              <span className='min-w-0'>
                <strong className='block text-sm font-medium text-[var(--mw-text-on-dark-strong)]'>
                  {signal.label}
                </strong>
                <span className='block text-xs text-[var(--mw-text-on-dark-muted)]'>
                  {signal.note}
                </span>
              </span>
              <StatusBadge
                variant={signal.status}
                label={signal.status === 'leaking' ? 'Leaking' : 'Unowned'}
              />
            </li>
          );
        })}
      </ul>

      <div className='mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--mw-white-10)] pt-4'>
        <div className='flex items-center gap-2'>
          <StatusBadge variant='leaking' label={`${leakingCount} leaking`} />
          <StatusBadge variant='unowned' label={`${unownedCount} unowned`} />
        </div>
        <span className='text-xs text-[var(--mw-text-on-dark-muted)]'>Ready to be handled</span>
      </div>
    </div>
  );
}

// =============================================================================
// 02 · Leak Map
// =============================================================================

function HomeLeakMap() {
  return (
    <SectionShell
      id='recognition'
      ariaLabel='Where work usually slips'
      tone='mist'
      heading={{
        eyebrow: 'Where work usually slips',
        title: 'The business is working. [[muted:The system around it is leaking.]]',
        description:
          'Not one dramatic failure. A steady drip across the path from search to job done or appointment kept. Each step works on its own. The handoffs between them do not.',
      }}
    >
      <div className='relative overflow-hidden rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-soft)] lg:p-10 mw-animate-up'>
        <svg
          className='mw-animate-line pointer-events-none absolute inset-x-10 top-[7rem] hidden lg:block'
          viewBox='0 0 100 1'
          preserveAspectRatio='none'
          style={{ height: '2px' }}
          aria-hidden='true'
        >
          <line x1='2' y1='0.5' x2='98' y2='0.5' stroke='var(--mw-border-light)' strokeWidth='1' />
        </svg>

        <ol className='relative grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-3'>
          {HOME_LEAK_STATES.map((step, index) => {
            const isMain = !!step.main;
            const stateClass =
              step.state === 'leak'
                ? 'border-[var(--mw-signal-red-30)] bg-[var(--mw-signal-red-10)]'
                : step.state === 'weak'
                  ? 'border-[var(--mw-signal-amber-25)] bg-[var(--mw-bg-mist)]'
                  : 'border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)]';
            const dotClass =
              step.state === 'leak'
                ? 'bg-[var(--mw-signal-red)] shadow-[var(--mw-glow-red)]'
                : step.state === 'weak'
                  ? 'bg-[var(--mw-signal-amber)]'
                  : 'bg-[var(--mw-signal-green)]';
            return (
              <li
                key={step.label}
                className={`relative rounded-[var(--mw-radius-lg)] border p-5 ${stateClass} ${
                  isMain ? 'shadow-[var(--mw-shadow-card)]' : ''
                }`}
              >
                <div className='mb-3 flex items-center justify-between'>
                  <span className='mw-text-eyebrow tabular-nums text-[var(--mw-text-subtle)]'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className={`size-2 rounded-full ${dotClass}`} aria-hidden='true' />
                </div>
                <div
                  className={`font-semibold text-[var(--mw-text-primary)] ${
                    isMain ? 'text-xl' : 'text-base'
                  }`}
                >
                  {step.label}
                </div>
                <div
                  className={`mt-2 ${
                    isMain
                      ? 'text-sm text-[var(--mw-text-primary)]'
                      : 'text-xs text-[var(--mw-text-subtle)]'
                  }`}
                >
                  {step.note}
                </div>
                {isMain && (
                  <div className='mw-text-eyebrow mt-5 flex items-center gap-2 border-t border-[var(--mw-signal-red-30)] pt-4 text-[var(--mw-signal-red)]'>
                    <AlertTriangle size={12} strokeWidth={1.5} aria-hidden='true' />
                    Main leak
                  </div>
                )}
              </li>
            );
          })}
        </ol>

        <div className='mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--mw-border-light)] pt-6 text-sm text-[var(--mw-text-subtle)]'>
          <span>
            Discovery → Capture →{' '}
            <span className='font-medium text-[var(--mw-signal-red)]'>Response</span> → Follow-up →
            Visibility
          </span>
          <span>Most enquiries die between capture and response.</span>
        </div>
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 03 · Website as Public Control Point / Practice Front Door
// =============================================================================

function HomeControlPoint() {
  return (
    <SectionShell
      ariaLabel='Website as public control point and practice front door'
      tone='gradient-mist'
      heading={{
        eyebrow: 'Website as control point',
        title: 'Not just a page. [[muted:The visible front door.]]',
        description:
          'For service businesses it is the public control point. For specialist clinics it is the practice front door. Either way, it sits where search, trust, enquiry, response, follow-up, and proof meet.',
      }}
    >
      <div className='relative overflow-hidden rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-panel)] bg-[var(--mw-bg-brand-primary)] p-6 lg:p-10 mw-animate-up'>
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.06]'
          aria-hidden='true'
          style={{
            backgroundImage: 'var(--mw-gradient-grid-texture)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className='relative grid gap-4 lg:grid-cols-3'>
          {HOME_CONTROL_LAYERS.map(layer => (
            <div
              key={layer.title}
              className='rounded-[var(--mw-radius-lg)] border border-[var(--mw-white-10)] bg-[var(--mw-white-04)] p-5'
            >
              <p className={`mw-text-eyebrow ${CONTROL_LAYER_ACCENT_EYEBROW[layer.accent]}`}>
                {layer.eyebrow}
              </p>
              <h3 className='mt-2 text-xl font-semibold text-[var(--mw-text-on-dark-strong)]'>
                {layer.title}
              </h3>
              <ul className='mt-4 space-y-2'>
                {layer.points.map(point => (
                  <li
                    key={point}
                    className='flex items-start gap-2 text-sm text-[var(--mw-text-on-dark-muted)]'
                  >
                    <span
                      className={`mt-1.5 size-1.5 shrink-0 rounded-full ${CONTROL_LAYER_ACCENT_DOT[layer.accent]}`}
                      aria-hidden='true'
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 04 · Normal Website vs Connected Website System
// =============================================================================

function HomeContrast() {
  return (
    <SectionShell
      ariaLabel='Normal website vs connected website system'
      tone='white'
      heading={{
        eyebrow: 'Built differently',
        title: 'A website that exists. [[muted:Or a website that carries the work.]]',
        description:
          'Same pages on the surface. Different operating state behind them. The contrast is not pretty design vs ugly design — it is whether the work coming in actually gets handled.',
      }}
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] p-6 lg:p-8'>
          <div className='mb-5 flex items-center justify-between'>
            <p className='mw-text-eyebrow text-[var(--mw-signal-red)]'>Normal website</p>
            <span className='size-2 rounded-full bg-[var(--mw-signal-red)]' aria-hidden='true' />
          </div>
          <ul className='space-y-3'>
            {HOME_CONTRAST_NORMAL.map(point => (
              <li
                key={point}
                className='flex items-start gap-3 text-sm text-[var(--mw-text-secondary)]'
              >
                <span
                  className='mt-2 size-1 shrink-0 rounded-full bg-[var(--mw-signal-red)]'
                  aria-hidden='true'
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-signal-teal-30)] bg-[var(--mw-signal-teal-10)] p-6 lg:p-8'>
          <div className='mb-5 flex items-center justify-between'>
            <p className='mw-text-eyebrow text-[var(--mw-signal-teal)]'>Connected website system</p>
            <span className='size-2 rounded-full bg-[var(--mw-signal-teal)]' aria-hidden='true' />
          </div>
          <ul className='space-y-3'>
            {HOME_CONTRAST_CONNECTED.map(point => (
              <li
                key={point}
                className='flex items-start gap-3 text-sm text-[var(--mw-text-primary)]'
              >
                <span
                  className='mt-2 size-1 shrink-0 rounded-full bg-[var(--mw-signal-teal)]'
                  aria-hidden='true'
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 05 · What Conversion-Focused Actually Means
// =============================================================================

function HomeConversionMeans() {
  return (
    <SectionShell
      ariaLabel='What conversion-focused actually means'
      tone='mist'
      heading={{
        eyebrow: 'What conversion-focused means',
        title: 'Not a slogan. [[muted:Five working mechanisms.]]',
        description:
          'Conversion-focused is not a label on a redesign. It is what the website system has to do to turn a found visitor into a handled enquiry.',
      }}
    >
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
        {HOME_CONVERSION_MECHANISMS.map(mechanism => (
          <div
            key={mechanism.num}
            className='rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-5'
          >
            <p className='mw-text-eyebrow tabular-nums text-[var(--mw-signal-teal)]'>
              {mechanism.num}
            </p>
            <h3 className='mt-2 font-semibold text-[var(--mw-text-primary)]'>{mechanism.label}</h3>
            <p className='mt-2 text-sm text-[var(--mw-text-subtle)]'>{mechanism.note}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 06 · Connected Handling Path
// =============================================================================

function HomeConnectedHandling() {
  return (
    <SectionShell
      ariaLabel='Connected handling after the enquiry'
      tone='gradient-teal'
      heading={{
        eyebrow: 'After the enquiry',
        title: 'Six steps. [[muted:One connected path.]]',
        description:
          'Most enquiries do not fail at the website. They fail in the hours and days after. Connected handling makes sure the next step is visible, owned, and reliable.',
      }}
    >
      <div className='relative rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-soft)] lg:p-10 mw-animate-up'>
        <svg
          className='mw-animate-line pointer-events-none absolute inset-x-10 top-[6.5rem] hidden lg:block'
          viewBox='0 0 100 1'
          preserveAspectRatio='none'
          style={{ height: '2px' }}
          aria-hidden='true'
        >
          <line
            x1='2'
            y1='0.5'
            x2='98'
            y2='0.5'
            stroke='var(--mw-signal-teal-30)'
            strokeWidth='1'
            strokeDasharray='3 4'
          />
        </svg>
        <ol className='relative grid grid-cols-1 gap-4 lg:grid-cols-6 lg:gap-3'>
          {HOME_HANDLING_STAGES.map(stage => (
            <li
              key={stage.num}
              className='rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] p-4'
            >
              <div className='mb-3 flex items-center justify-between'>
                <span className='mw-text-eyebrow tabular-nums text-[var(--mw-signal-teal)]'>
                  {stage.num}
                </span>
                <span
                  className='size-1.5 rounded-full bg-[var(--mw-signal-teal)]'
                  aria-hidden='true'
                />
              </div>
              <div className='text-sm font-medium text-[var(--mw-text-primary)]'>{stage.label}</div>
              <div className='mt-1 text-xs leading-snug text-[var(--mw-text-subtle)]'>
                {stage.note}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 07 · Five Protections, One Connected Path  (single full dark body section)
// =============================================================================

function HomeFiveProtections() {
  return (
    <SectionShell
      ariaLabel='Five protections in one connected path'
      tone='gradient-dark'
      heading={{
        eyebrow: 'Five protections, one path',
        title: 'One website system. [[muted:Four connected protections around it.]]',
        description:
          'Not five separate services. One connected operating path with five named protections — held together by the website system at the centre.',
      }}
    >
      <div className='relative overflow-hidden rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-panel)] bg-[var(--mw-bg-brand-primary-mid)] p-6 lg:p-12 mw-animate-up'>
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.05]'
          aria-hidden='true'
          style={{
            backgroundImage: 'var(--mw-gradient-grid-texture)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Desktop constellation: SWS centred, four protections at top/right/bottom/left. */}
        <div className='relative hidden lg:block'>
          <div className='grid grid-cols-3 grid-rows-3 gap-6'>
            <div className='col-start-2 row-start-1 self-end'>
              <ProtectionCard
                data={HOME_PROTECTION_OUTER[0]}
                accent={HOME_PROTECTION_OUTER[0].accent}
              />
            </div>
            <div className='col-start-1 row-start-2 self-center'>
              <ProtectionCard
                data={HOME_PROTECTION_OUTER[3]}
                accent={HOME_PROTECTION_OUTER[3].accent}
              />
            </div>
            <div className='col-start-2 row-start-2 self-center'>
              <ProtectionCard data={HOME_PROTECTION_HUB} accent='cyan' hub />
            </div>
            <div className='col-start-3 row-start-2 self-center'>
              <ProtectionCard
                data={HOME_PROTECTION_OUTER[1]}
                accent={HOME_PROTECTION_OUTER[1].accent}
              />
            </div>
            <div className='col-start-2 row-start-3 self-start'>
              <ProtectionCard
                data={HOME_PROTECTION_OUTER[2]}
                accent={HOME_PROTECTION_OUTER[2].accent}
              />
            </div>
          </div>
        </div>

        {/* Mobile vertical path in connected order. */}
        <div className='relative space-y-3 lg:hidden'>
          <ProtectionCard
            data={HOME_PROTECTION_OUTER[0]}
            accent={HOME_PROTECTION_OUTER[0].accent}
          />
          <ProtectionCard data={HOME_PROTECTION_HUB} accent='cyan' hub />
          <ProtectionCard
            data={HOME_PROTECTION_OUTER[1]}
            accent={HOME_PROTECTION_OUTER[1].accent}
          />
          <ProtectionCard
            data={HOME_PROTECTION_OUTER[2]}
            accent={HOME_PROTECTION_OUTER[2].accent}
          />
          <ProtectionCard
            data={HOME_PROTECTION_OUTER[3]}
            accent={HOME_PROTECTION_OUTER[3].accent}
          />
        </div>
      </div>
    </SectionShell>
  );
}

function ProtectionCard({
  data,
  accent,
  hub = false,
}: {
  data: ProtectionCardData;
  accent: ProtectionAccent;
  hub?: boolean;
}) {
  const borderClass = hub
    ? 'border-[var(--mw-signal-cyan-30)] shadow-[var(--mw-shadow-dark-lg)]'
    : 'border-[var(--mw-border-panel)]';
  return (
    <a
      href={`/services/${data.slug}`}
      className={`group block rounded-[var(--mw-radius-lg)] border bg-[var(--mw-white-04)] p-5 transition-colors hover:bg-[var(--mw-white-06)] ${borderClass}`}
    >
      <div className='flex items-center justify-between'>
        <p className={`mw-text-eyebrow ${PROTECTION_ACCENT_EYEBROW[accent]}`}>{data.label}</p>
        <span
          className={`size-2 rounded-full ${PROTECTION_ACCENT_DOT[accent]}`}
          aria-hidden='true'
        />
      </div>
      <h3
        className={`mt-2 font-semibold text-[var(--mw-text-on-dark-strong)] ${
          hub ? 'text-lg' : 'text-base'
        }`}
      >
        {data.title}
      </h3>
      <p className='mt-2 text-sm leading-snug text-[var(--mw-text-on-dark-muted)]'>{data.note}</p>
    </a>
  );
}

// =============================================================================
// 08 · What Changes When The Path Is Connected
// =============================================================================

function HomeWhatChanges() {
  return (
    <SectionShell
      ariaLabel='What changes when the path is connected'
      tone='gradient-mist'
      heading={{
        eyebrow: 'What changes',
        title: 'Less leakage. [[muted:More work actually handled.]]',
        description:
          'The visible change is calm: fewer dropped enquiries, fewer chased quotes, fewer review requests forgotten. The harder change is that the owner can finally see what the business is doing day to day.',
      }}
    >
      <ul className='grid gap-3 sm:grid-cols-2'>
        {HOME_POSITIVE_STATES.map(state => (
          <li
            key={state}
            className='flex items-start gap-3 rounded-[var(--mw-radius-lg)] border border-[var(--mw-signal-teal-30)] bg-[var(--mw-signal-teal-10)] p-4'
          >
            <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--mw-signal-teal-30)] text-[var(--mw-signal-teal)]'>
              <Check size={11} strokeWidth={2.25} aria-hidden='true' />
            </span>
            <span className='text-sm text-[var(--mw-text-primary)]'>{state}</span>
          </li>
        ))}
      </ul>
    </SectionShell>
  );
}

// =============================================================================
// 09 · How This Shows Up — Service Businesses & Specialist Clinics
// =============================================================================

function HomeScenarios() {
  return (
    <SectionShell
      ariaLabel='How this shows up in service businesses and specialist clinics'
      tone='gradient-teal'
      heading={{
        eyebrow: 'How this shows up',
        title: 'In service businesses. [[muted:In specialist clinics.]]',
        description:
          'Two working days. Different industries, same operating problem — and the same connected handling around the website.',
      }}
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        {HOME_SCENARIOS.map(scenario => (
          <article
            key={scenario.title}
            className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-soft)] lg:p-8'
          >
            <p className='mw-text-eyebrow text-[var(--mw-signal-teal)]'>{scenario.label}</p>
            <h3 className='mt-3 text-xl font-semibold text-[var(--mw-text-primary)]'>
              {scenario.title}
            </h3>
            <ol className='mt-5 space-y-3'>
              {scenario.beats.map((beat, index) => (
                <li key={beat} className='flex items-start gap-3 text-[var(--mw-text-secondary)]'>
                  <span className='mw-text-eyebrow mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[var(--mw-border-light)] bg-[var(--mw-bg-mist)] tabular-nums text-[var(--mw-text-subtle)]'>
                    {index + 1}
                  </span>
                  <span className='text-sm leading-relaxed'>{beat}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 10 · Selected Website-System Surfaces  (proof-supportive, not portfolio)
// =============================================================================

function HomeSelectedSurfaces() {
  return (
    <SectionShell
      ariaLabel='Selected website-system surfaces'
      tone='white'
      heading={{
        eyebrow: 'Selected surfaces',
        title: 'Examples of the surface design [[muted:we build into website systems.]]',
        description:
          'Not finished case studies. Selected patterns — service-page anatomy, trust placement, and enquiry handoff. The website surface is one part; the handling around it makes it work.',
      }}
    >
      <div className='grid gap-5 lg:grid-cols-3'>
        <article className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-card)] lg:col-span-2 lg:p-8'>
          <p className='mw-text-eyebrow text-[var(--mw-signal-cyan)]'>Service-page anatomy</p>
          <h3 className='mt-2 text-xl font-semibold text-[var(--mw-text-primary)]'>
            Where decisions form on a service or treatment page
          </h3>
          <div className='mt-6 rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-panel)] bg-[var(--mw-bg-brand-primary)] p-5 lg:p-6 mw-animate-up'>
            <div className='flex items-center gap-1.5 border-b border-[var(--mw-white-10)] pb-3'>
              <span className='size-2 rounded-full bg-[var(--mw-white-15)]' aria-hidden='true' />
              <span className='size-2 rounded-full bg-[var(--mw-white-15)]' aria-hidden='true' />
              <span className='size-2 rounded-full bg-[var(--mw-white-15)]' aria-hidden='true' />
            </div>
            <ul className='mt-4 space-y-3'>
              {HOME_SELECTED_FEATURED_PARTS.map(part => (
                <li
                  key={part.label}
                  className='flex items-start justify-between gap-4 rounded-[var(--mw-radius-md)] border border-[var(--mw-white-08)] bg-[var(--mw-white-04)] px-3 py-3'
                >
                  <div>
                    <div className='text-sm font-medium text-[var(--mw-text-on-dark-strong)]'>
                      {part.label}
                    </div>
                    <div className='mt-0.5 text-xs text-[var(--mw-text-on-dark-muted)]'>
                      {part.note}
                    </div>
                  </div>
                  <span
                    className='mt-1 size-1.5 shrink-0 rounded-full bg-[var(--mw-signal-cyan)]'
                    aria-hidden='true'
                  />
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className='grid gap-5'>
          <article className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-card)]'>
            <p className='mw-text-eyebrow text-[var(--mw-signal-teal)]'>Trust band</p>
            <h3 className='mt-2 font-semibold text-[var(--mw-text-primary)]'>
              Signals placed where hesitation forms
            </h3>
            <ul className='mt-4 space-y-2 rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-panel)] bg-[var(--mw-bg-brand-primary)] p-4'>
              {HOME_SELECTED_TRUST_LABELS.map(label => (
                <li
                  key={label}
                  className='flex items-center gap-2 rounded-[var(--mw-radius-md)] border border-[var(--mw-white-08)] bg-[var(--mw-white-04)] px-3 py-2 text-xs text-[var(--mw-text-on-dark-muted)]'
                >
                  <span
                    className='size-1.5 rounded-full bg-[var(--mw-signal-teal)]'
                    aria-hidden='true'
                  />
                  {label}
                </li>
              ))}
            </ul>
          </article>

          <article className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 shadow-[var(--mw-shadow-card)]'>
            <p className='mw-text-eyebrow text-[var(--mw-signal-green)]'>Enquiry handoff</p>
            <h3 className='mt-2 font-semibold text-[var(--mw-text-primary)]'>
              Context travels with the enquiry
            </h3>
            <ul className='mt-4 space-y-2 rounded-[var(--mw-radius-lg)] border border-[var(--mw-border-panel)] bg-[var(--mw-bg-brand-primary)] p-4'>
              {HOME_SELECTED_HANDOFF_ROWS.map(row => (
                <li
                  key={row.field}
                  className='flex items-center justify-between rounded-[var(--mw-radius-md)] border border-[var(--mw-white-08)] bg-[var(--mw-white-04)] px-3 py-2'
                >
                  <span className='mw-text-eyebrow text-[var(--mw-text-on-dark-muted)]'>
                    {row.field}
                  </span>
                  <span className='text-xs font-medium text-[var(--mw-text-on-dark-strong)]'>
                    {row.value}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
      <p className='mt-6 max-w-2xl text-sm text-[var(--mw-text-subtle)]'>
        These are illustrative surface patterns, not specific client deliverables. No real
        screenshots, names, or outcomes are implied.
      </p>
    </SectionShell>
  );
}

// =============================================================================
// 11 · Fit / Not Fit
// =============================================================================

function HomeFit() {
  return (
    <SectionShell
      ariaLabel='Who this is built for'
      tone='mist'
      heading={{
        eyebrow: 'Built for',
        title:
          'Established service businesses. [[muted:Specialist clinics that take their practice seriously.]]',
        description:
          'The work suits operators where moving parts already exist and the cost of leakage is real. It does not suit looks-only, rankings-only, or AI-hype buyers.',
      }}
    >
      <div className='grid gap-5 lg:grid-cols-2'>
        <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-signal-teal-30)] bg-[var(--mw-signal-teal-10)] p-6 lg:p-8'>
          <p className='mw-text-eyebrow text-[var(--mw-signal-teal)]'>For</p>
          <ul className='mt-4 space-y-3'>
            {HOME_FIT_FOR.map(item => (
              <li
                key={item}
                className='flex items-start gap-3 text-sm text-[var(--mw-text-primary)]'
              >
                <span className='mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[var(--mw-signal-teal-30)] text-[var(--mw-signal-teal)]'>
                  <Check size={11} strokeWidth={2.25} aria-hidden='true' />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='rounded-[var(--mw-radius-2xl)] border border-[var(--mw-border-light)] bg-[var(--mw-bg-page)] p-6 lg:p-8'>
          <p className='mw-text-eyebrow text-[var(--mw-signal-red)]'>Not for</p>
          <ul className='mt-4 space-y-3'>
            {HOME_FIT_NOT_FOR.map(item => (
              <li
                key={item}
                className='flex items-start gap-3 text-sm text-[var(--mw-text-secondary)]'
              >
                <span className='mw-text-eyebrow mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-[var(--mw-signal-red-30)] bg-[var(--mw-signal-red-10)] tabular-nums text-[var(--mw-signal-red)]'>
                  ×
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 12 · Practical Delivery With System Thinking Behind It
// =============================================================================

function HomeCredibility() {
  return (
    <SectionShell
      ariaLabel='How the work runs'
      tone='white'
      heading={{
        eyebrow: 'How the work runs',
        title: 'Practical delivery. [[muted:System thinking behind it.]]',
        description:
          'We work directly with the owner or practice manager. The aim is operating change, not a prettier site or another tool subscription.',
      }}
    >
      <div className='grid max-w-4xl gap-8 lg:grid-cols-2'>
        <div>
          <p className='mw-text-eyebrow text-[var(--mw-signal-cyan)]'>Working belief</p>
          <p className='mt-3 text-base leading-relaxed text-[var(--mw-text-primary)]'>
            A website is one visible part of how a service business or specialist clinic actually
            runs. Build it as part of the system that captures, routes, follows up, and improves —
            not as a separate project.
          </p>
        </div>
        <div>
          <p className='mw-text-eyebrow text-[var(--mw-signal-teal)]'>How an engagement starts</p>
          <ol className='mt-3 space-y-2 text-sm leading-relaxed text-[var(--mw-text-primary)]'>
            <li className='flex gap-3'>
              <span className='tabular-nums text-[var(--mw-text-subtle)]'>01</span>
              Review the current site and handling path.
            </li>
            <li className='flex gap-3'>
              <span className='tabular-nums text-[var(--mw-text-subtle)]'>02</span>
              Map where work is leaking and what to fix first.
            </li>
            <li className='flex gap-3'>
              <span className='tabular-nums text-[var(--mw-text-subtle)]'>03</span>
              Put the website system and connected handling in place.
            </li>
          </ol>
        </div>
      </div>
    </SectionShell>
  );
}

// =============================================================================
// 13 · FAQ
// =============================================================================

function HomeFAQ() {
  const { faq } = homepageData;
  return (
    <FAQSection
      ariaLabel='Frequently asked questions'
      eyebrow='Questions'
      title={faq.heading}
      description={faq.description}
      items={faq.items.map((item, index) => ({
        id: `home-faq-${index + 1}`,
        question: item.question,
        answer: item.answer,
      }))}
      tone='mist'
      variant='split'
    />
  );
}

// =============================================================================
// 14 · Final Diagnostic CTA  (DecisionPanel handles its own dark inner container)
// =============================================================================

function HomeCTA() {
  const { cta } = homepageData;
  return (
    <DecisionPanel
      heading={{
        eyebrow: cta.eyebrow,
        title: cta.heading.title,
        subtitle: cta.heading.muted,
        description: cta.heading.description,
      }}
      actions={cta.actions.map(action => ({ label: action.label, href: action.href }))}
      expectations={cta.expectations}
      expectationsLabel='What we will look at'
      reassurance={cta.footer}
    />
  );
}
