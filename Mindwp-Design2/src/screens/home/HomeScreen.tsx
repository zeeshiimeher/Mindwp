import Link from 'next/link';
import {
  ArrowRight,
  Search,
  MapPin,
  PhoneCall,
  Inbox,
  MessageSquare,
  Repeat,
  Star,
  Globe,
  FileText,
  CalendarCheck,
  ShieldCheck,
  Layers,
  Building2,
  Wrench,
  Stethoscope,
  Activity,
  AlertTriangle,
  Check,
  X,
  Eye,
  Quote,
} from 'lucide-react';

import { cn } from '@/lib/cn';
import { ROUTES } from '@/config/routes';
import { SITE } from '@/config/site';
import { Container } from '@/components/primitives/Container';
import { SignalDot, type SignalTone } from '@/components/primitives/SignalDot';
import { Stars } from '@/components/content/Stars';
import { FaqAccordion, type FaqItem } from '@/components/content/FaqAccordion';
import { HandlingTabs } from '@/screens/home/sections/HandlingTabs';

/* ============================================================================
   Shared data
   ============================================================================ */

const HERO_SIGNALS: {
  tone: SignalTone;
  icon: typeof Globe;
  label: string;
  detail: string;
  state: string;
}[] = [
  {
    tone: 'cyan',
    icon: Globe,
    label: 'Website',
    detail: 'Service & treatment pages',
    state: 'Built to convert',
  },
  {
    tone: 'teal',
    icon: MapPin,
    label: 'Local visibility',
    detail: 'Named service areas',
    state: 'Found nearby',
  },
  {
    tone: 'amber',
    icon: PhoneCall,
    label: 'Lead response',
    detail: 'Calls & form enquiries',
    state: 'Answered with context',
  },
  {
    tone: 'green',
    icon: Repeat,
    label: 'Follow-up',
    detail: 'Quotes & consultations',
    state: 'Owned, not dropped',
  },
  {
    tone: 'purple',
    icon: Star,
    label: 'Reputation',
    detail: 'Reviews & proof',
    state: 'Requested on a system',
  },
];

const SYSTEMS: {
  tone: SignalTone;
  name: string;
  role: string;
  href: string;
  icon: typeof Globe;
}[] = [
  {
    tone: 'teal',
    name: 'Local SEO Authority',
    role: 'Found in the areas you actually serve',
    href: ROUTES.services.localSeoAuthority,
    icon: MapPin,
  },
  {
    tone: 'amber',
    name: 'Lead Response & Handling',
    role: 'Calls and enquiries answered with context',
    href: ROUTES.services.leadResponseHandling,
    icon: PhoneCall,
  },
  {
    tone: 'green',
    name: 'Follow-Up & CRM',
    role: 'Quotes and consultations nobody drops',
    href: ROUTES.services.followUpCrm,
    icon: Repeat,
  },
  {
    tone: 'purple',
    name: 'Reputation & Review',
    role: 'Proof requested and placed on a system',
    href: ROUTES.services.reputationReviewSystems,
    icon: Star,
  },
];

const HOME_FAQS: FaqItem[] = [
  {
    q: 'Is this just a new website, or something more?',
    a: 'It starts with the website, because that is the control point — the place work comes in. But the website is built so the work that arrives is captured with context and handed to the right next step: response, follow-up, and review requests. You can start with the site alone and connect the rest as it makes sense.',
  },
  {
    q: 'Do I have to replace my whole site to work with you?',
    a: 'No. Some businesses need a full rebuild; others have a site that converts but leaks after the enquiry arrives. We look at where work is actually slipping and fix that part first, whether that is the pages, the response path, or the follow-up.',
  },
  {
    q: 'We already get enquiries — what does this change?',
    a: 'Most established businesses do get enquiries. The loss usually happens after contact: a missed weekend call, a quote that never gets chased, a consultation request sitting in a shared inbox. The system makes sure each of those has an owner and a visible next step.',
  },
  {
    q: 'Is this built for service businesses, clinics, or both?',
    a: 'Both. The working-day objects are similar — a call, a form, a quote, a consultation request, a review not yet asked for. Service businesses and specialist clinics both lose work in the gaps between those moments, so the system is built to fit either.',
  },
  {
    q: 'Which website platform do you build on?',
    a: 'WordPress, with Elementor, Bricks, Divi 5, or a clean custom build depending on what the site needs to do. WooCommerce when there is a store. These are implementation paths under Smart Website Systems — the platform serves the system, not the other way around.',
  },
  {
    q: 'Do you guarantee more leads or higher rankings?',
    a: 'No. Anyone guaranteeing a ranking or a lead number is guessing. What we control is the system: pages built to convert, visibility in your service areas, and handling that stops work slipping after it arrives. That is what we focus the review on.',
  },
  {
    q: 'Will this turn into a chatbot or an automated call centre?',
    a: 'No. The point is that the right person handles the work with the right context — not that a bot replaces them. Automation removes the parts that get dropped (the chase nobody owns, the reminder nobody sends), so your team handles the parts that need a human.',
  },
  {
    q: 'What actually happens when I request a website review?',
    a: 'We look at your current site and the path work takes after someone makes contact, and we tell you where it is slipping and what the highest-value fix is. It is a diagnostic conversation, not a sales demo — no trial to start, no guarantee to sign.',
  },
];

/* ============================================================================
   Small shared building blocks
   ============================================================================ */

function Eyebrow({
  children,
  tone = 'cyan',
  dark = false,
}: {
  children: React.ReactNode;
  tone?: SignalTone;
  dark?: boolean;
}) {
  return (
    <span
      className={cn(
        'mw-eyebrow inline-flex items-center gap-2.5',
        dark ? 'text-white/55' : 'text-[#6f8190]'
      )}
    >
      <SignalDot tone={tone} glow='bloom' pulse />
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  tone = 'cyan',
  title,
  titleMuted,
  intro,
  dark = false,
  align = 'left',
  className,
}: {
  eyebrow: string;
  tone?: SignalTone;
  title: string;
  titleMuted?: string;
  intro?: string;
  dark?: boolean;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      <Eyebrow tone={tone} dark={dark}>
        {eyebrow}
      </Eyebrow>
      <h2 className={cn('max-w-[20ch]', dark ? 'text-white' : 'text-[#08111f]')}>
        {title}
        {titleMuted && (
          <>
            {' '}
            <span className={dark ? 'text-white/45' : 'text-[#9cb0bd]'}>{titleMuted}</span>
          </>
        )}
      </h2>
      {intro && (
        <p
          className={cn(
            'section-intro',
            align === 'center' && 'mx-auto',
            dark ? '!text-white/65' : ''
          )}
          style={{ fontSize: '17px' }}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* ============================================================================
   1 — HERO
   ============================================================================ */

function SectionHero() {
  return (
    <section className='section-hero relative overflow-hidden bg-page-dark'>
      {/* ambient field */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(120% 90% at 78% -10%, rgba(53,199,216,0.16) 0%, rgba(53,199,216,0) 55%), radial-gradient(90% 80% at 5% 110%, rgba(20,184,166,0.10) 0%, rgba(20,184,166,0) 60%)',
        }}
      />
      <div className='mw-grid-overlay pointer-events-none absolute inset-0 opacity-[0.04]' aria-hidden='true' />

      <Container className='relative'>
        <div className='grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'>
          {/* left */}
          <div className='flex flex-col gap-7'>
            <Eyebrow tone='cyan' dark>
              Service Businesses & Specialist Clinics
            </Eyebrow>

            <h1 className='text-white'>
              Work Comes In.
              <br />
              <span className='text-white/45'>Too Much Slips Away.</span>
            </h1>

            <p className='max-w-[54ch] text-white/65' style={{ fontSize: '18px', lineHeight: 1.65 }}>
              The calls, forms, quotes and consultation requests already arrive. They slip in the
              gaps — a missed weekend call, a quote nobody chases, a review never asked for. MindWP
              builds the website as the control point, with connected handling so the work that
              comes in is the work that gets done.
            </p>

            <div className='flex flex-wrap items-center gap-3 pt-1'>
              <Link
                href={SITE.cta.href}
                className='inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-[#08111f] transition-colors hover:bg-[#eaf6f8]'
                style={{ fontSize: '14.5px' }}
              >
                {SITE.cta.label}
                <SignalDot tone='cyan' glow='bloom' />
              </Link>
              <Link
                href={ROUTES.services.smartWebsiteSystems}
                className='inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white/85 transition-colors hover:bg-white/5'
                style={{ fontSize: '14.5px' }}
              >
                See how the system works
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className='flex items-center gap-2 text-white/45' style={{ fontSize: '13px' }}>
              <ShieldCheck size={15} className='text-[#35c7d8]' />
              A calm diagnostic review — no demo, no trial to start, no guarantee to sign.
            </p>
          </div>

          {/* right — working-day signal surface */}
          <div className='relative'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -inset-6 rounded-[32px]'
              style={{ background: 'radial-gradient(60% 60% at 50% 40%, rgba(53,199,216,0.18), transparent 70%)' }}
            />
            <div className='mw-glass-dark relative p-5 sm:p-6' style={{ boxShadow: 'var(--mw-elev-dark)' }}>
              <div className='flex items-center justify-between border-b border-white/10 pb-4'>
                <span className='inline-flex items-center gap-2.5 text-white/80' style={{ fontSize: '13px', fontWeight: 600 }}>
                  <SignalDot tone='cyan' glow='bloom' pulse />
                  Your working day
                </span>
                <span className='mw-eyebrow text-white/35'>One connected system</span>
              </div>

              <div className='mt-2 flex flex-col'>
                {HERO_SIGNALS.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className={cn(
                        'flex items-center gap-4 py-3.5',
                        i !== HERO_SIGNALS.length - 1 && 'border-b border-white/[0.06]'
                      )}
                    >
                      <span
                        className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl'
                        style={{ background: 'rgba(255,255,255,0.05)', boxShadow: 'var(--mw-ring-ambient)' }}
                      >
                        <Icon size={17} className='text-white/70' />
                      </span>
                      <span className='min-w-0 flex-1'>
                        <span className='flex items-center gap-2'>
                          <SignalDot tone={s.tone} glow='bloom' size={7} />
                          <span className='text-white' style={{ fontSize: '14.5px', fontWeight: 600 }}>
                            {s.label}
                          </span>
                        </span>
                        <span className='block text-white/45' style={{ fontSize: '12.5px' }}>
                          {s.detail}
                        </span>
                      </span>
                      <span
                        className='hidden shrink-0 rounded-full border border-white/10 px-3 py-1 text-white/65 sm:inline-block'
                        style={{ fontSize: '11.5px', fontWeight: 500 }}
                      >
                        {s.state}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className='mt-3 flex items-center justify-between rounded-xl bg-white/[0.04] px-4 py-3'>
                <span className='inline-flex items-center gap-2 text-white/70' style={{ fontSize: '12.5px' }}>
                  <Check size={14} className='text-[#21b985]' />
                  Nothing waiting in a shared inbox to be spotted
                </span>
                <span className='mw-eyebrow text-[#35c7d8]'>Live</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   2 — LEAK ("Where work slips")
   ============================================================================ */

function SectionLeak() {
  const layers = [
    {
      no: '01',
      title: 'Before they ever reach you',
      copy: 'They search, but the site is hard to find in the area you serve — or it loads, looks dated, and they bounce before making contact.',
      slip: 'Found late, or not at all',
    },
    {
      no: '02',
      title: 'At the moment of contact',
      copy: 'The call comes in on a weekend. The form lands in a shared inbox. The reply is slow, generic, or never arrives — and the moment cools.',
      slip: 'A reply too slow to land',
    },
    {
      no: '03',
      title: 'After the first contact',
      copy: 'The quote is sent and never chased. The consultation request sits unread. The happy customer is never asked for a review.',
      slip: 'Follow-up nobody owns',
    },
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Where work slips'
          tone='red'
          title='The work is already arriving.'
          titleMuted='It leaks in three places.'
          intro='Most established service businesses and clinics don’t have a demand problem. They have a leak — and it almost always sits in one of these three layers.'
        />

        <div className='relative'>
          {/* connecting spine */}
          <div
            aria-hidden='true'
            className='absolute left-[27px] top-8 bottom-8 hidden w-px bg-gradient-to-b from-[#e76f6f]/40 via-[#e6eef3] to-[#e6eef3] md:block'
          />
          <div className='flex flex-col gap-4'>
            {layers.map(l => (
              <div
                key={l.no}
                className='mw-card relative grid gap-5 p-6 sm:p-7 md:grid-cols-[56px_1fr_auto] md:items-center md:gap-8'
              >
                <span
                  className='relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#f3d6d6] bg-[#fdf4f4] text-[#c0524e]'
                  style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '0.02em' }}
                >
                  {l.no}
                </span>
                <div>
                  <h3 className='text-[#08111f]' style={{ fontSize: '20px' }}>
                    {l.title}
                  </h3>
                  <p className='mt-2 max-w-[58ch] text-[#4c5e6f]' style={{ fontSize: '15px' }}>
                    {l.copy}
                  </p>
                </div>
                <span className='inline-flex items-center gap-2 self-start rounded-full border border-[#f3d6d6] bg-[#fdf4f4] px-3.5 py-1.5 text-[#c0524e] md:self-center'>
                  <SignalDot tone='red' glow='bloom' />
                  <span style={{ fontSize: '12.5px', fontWeight: 600 }}>{l.slip}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   3 — CONTROL POINT (website as the front of the operating line)
   ============================================================================ */

function SectionControlPoint() {
  const flow = [
    { icon: Search, label: 'Found', tone: 'teal' as SignalTone },
    { icon: Globe, label: 'Website', tone: 'cyan' as SignalTone, anchor: true },
    { icon: Inbox, label: 'Captured', tone: 'amber' as SignalTone },
    { icon: MessageSquare, label: 'Handled', tone: 'amber' as SignalTone },
    { icon: Repeat, label: 'Followed up', tone: 'green' as SignalTone },
    { icon: Star, label: 'Reviewed', tone: 'purple' as SignalTone },
  ];

  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <div className='grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16'>
          <SectionHead
            eyebrow='The control point'
            tone='cyan'
            title='The website isn’t a brochure.'
            titleMuted='It’s where the work enters.'
            intro='Every call, form, quote and booking starts at the site. Treat it as the control point — the front of one operating line — and everything that happens next can be captured, owned and finished instead of slipping.'
          />

          <div className='mw-panel p-7 sm:p-9'>
            <span className='mw-eyebrow text-[#6f8190]'>One operating line</span>
            {/* flow rail */}
            <div className='relative mt-7'>
              <div
                aria-hidden='true'
                className='absolute left-6 right-6 top-7 h-px bg-gradient-to-r from-[#e6eef3] via-[#35c7d8]/50 to-[#e6eef3]'
              />
              <div className='relative grid grid-cols-3 gap-y-8 sm:grid-cols-6'>
                {flow.map(step => {
                  const Icon = step.icon;
                  return (
                    <div key={step.label} className='flex flex-col items-center gap-2.5 text-center'>
                      <span
                        className={cn(
                          'flex h-14 w-14 items-center justify-center rounded-2xl border bg-white',
                          step.anchor ? 'border-[#35c7d8]' : 'border-[#e6eef3]'
                        )}
                        style={
                          step.anchor
                            ? { boxShadow: 'var(--mw-bloom-cyan)' }
                            : { boxShadow: 'var(--mw-elev-1)' }
                        }
                      >
                        <Icon
                          size={20}
                          style={{
                            color:
                              step.tone === 'cyan'
                                ? '#35c7d8'
                                : step.tone === 'teal'
                                  ? '#14b8a6'
                                  : step.tone === 'amber'
                                    ? '#d99a1f'
                                    : step.tone === 'green'
                                      ? '#21b985'
                                      : '#9b7de0',
                          }}
                        />
                      </span>
                      <span
                        className={cn('text-[#08111f]', step.anchor && 'font-bold')}
                        style={{ fontSize: '12.5px', fontWeight: step.anchor ? 700 : 600 }}
                      >
                        {step.label}
                      </span>
                      {step.anchor && (
                        <span className='mw-eyebrow text-[#35c7d8]' style={{ fontSize: '9.5px' }}>
                          Control point
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <p className='mt-7 border-t border-[#eef3f6] pt-5 text-[#4c5e6f]' style={{ fontSize: '14px' }}>
              When the site is the control point, the work doesn’t scatter across inboxes, phones and
              sticky notes. It moves down one line — and you can see where it is.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   4 — CONTRAST (with vs without connected handling) — dark ledger
   ============================================================================ */

function SectionContrast() {
  const without = [
    'Weekend calls go to voicemail and never get returned',
    'Form enquiries land in a shared inbox nobody owns',
    'Quotes are sent, then quietly forgotten',
    'Happy customers are never asked for a review',
  ];
  const withSystem = [
    'Missed calls come back with a text and a named owner',
    'Every enquiry has context attached and someone replying',
    'Quotes carry a visible chase on a known cadence',
    'Reviews are requested on a system, not when someone remembers',
  ];

  return (
    <section className='section relative overflow-hidden bg-page-dark'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(70% 60% at 90% 0%, rgba(33,185,133,0.10) 0%, transparent 60%), radial-gradient(70% 60% at 5% 100%, rgba(231,111,111,0.08) 0%, transparent 60%)',
        }}
      />
      <Container className='section-stack relative'>
        <SectionHead
          eyebrow='The difference'
          tone='green'
          dark
          title='Same enquiries.'
          titleMuted='Two completely different days.'
          intro='Nothing here is about working harder. It’s about whether the work that already comes in has somewhere to land.'
        />

        <div className='grid gap-5 lg:grid-cols-2'>
          {/* without */}
          <div className='mw-glass-dark p-7 sm:p-8'>
            <div className='flex items-center gap-3 border-b border-white/10 pb-5'>
              <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#e76f6f]/15'>
                <AlertTriangle size={17} className='text-[#e76f6f]' />
              </span>
              <span className='text-white' style={{ fontSize: '16px', fontWeight: 700 }}>
                Without a connected system
              </span>
            </div>
            <ul className='mt-5 flex flex-col gap-4'>
              {without.map(item => (
                <li key={item} className='flex items-start gap-3 text-white/55' style={{ fontSize: '14.5px' }}>
                  <X size={17} className='mt-0.5 shrink-0 text-[#e76f6f]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* with */}
          <div
            className='relative rounded-[var(--mw-radius-panel)] border border-[#35c7d8]/25 p-7 sm:p-8'
            style={{
              background: 'linear-gradient(165deg, rgba(53,199,216,0.10) 0%, rgba(255,255,255,0.02) 60%)',
              boxShadow: '0 0 0 1px rgba(53,199,216,0.08), var(--mw-elev-dark)',
            }}
          >
            <div className='flex items-center gap-3 border-b border-white/10 pb-5'>
              <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#21b985]/15'>
                <ShieldCheck size={17} className='text-[#21b985]' />
              </span>
              <span className='text-white' style={{ fontSize: '16px', fontWeight: 700 }}>
                With MindWP’s connected handling
              </span>
            </div>
            <ul className='mt-5 flex flex-col gap-4'>
              {withSystem.map(item => (
                <li key={item} className='flex items-start gap-3 text-white/85' style={{ fontSize: '14.5px' }}>
                  <Check size={17} className='mt-0.5 shrink-0 text-[#21b985]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   5 — LOCAL VISIBILITY
   ============================================================================ */

function SectionLocalVisibility() {
  const areas = ['Named local area', 'Neighbouring town', 'Wider service radius'];
  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <div className='grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16'>
          <SectionHead
            eyebrow='Found where it counts'
            tone='teal'
            title='Visible in the areas'
            titleMuted='you actually serve.'
            intro='Being found isn’t about ranking for everything. It’s about showing up — with proof — in the specific places your customers and patients are searching, so the right work reaches the control point in the first place.'
          />

          <div className='mw-card-interactive mw-card overflow-hidden'>
            {/* map-ish header */}
            <div className='relative border-b border-[#eef3f6] p-6'>
              <div
                aria-hidden='true'
                className='mw-grid-overlay absolute inset-0 opacity-[0.5]'
                style={{ backgroundSize: '28px 28px', maskImage: 'linear-gradient(180deg,#000,transparent)' }}
              />
              <div className='relative flex items-center gap-2'>
                <MapPin size={16} className='text-[#14b8a6]' />
                <span className='text-[#08111f]' style={{ fontSize: '13.5px', fontWeight: 600 }}>
                  Your service areas
                </span>
              </div>
              <div className='relative mt-4 flex flex-wrap gap-2'>
                {areas.map((a, i) => (
                  <span
                    key={a}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5',
                      i === 0
                        ? 'border-[#14b8a6]/30 bg-[#14b8a6]/10 text-[#0e7d8c]'
                        : 'border-[#e6eef3] bg-white text-[#4c5e6f]'
                    )}
                    style={{ fontSize: '12.5px', fontWeight: 600 }}
                  >
                    <SignalDot tone='teal' glow={i === 0 ? 'bloom' : 'none'} size={6} />
                    {a}
                  </span>
                ))}
              </div>
            </div>
            {/* trust placement row */}
            <div className='flex items-center justify-between gap-4 p-6'>
              <div>
                <div className='flex items-center gap-2.5'>
                  <Stars size={14} />
                  <span className='text-[#08111f]' style={{ fontSize: '13.5px', fontWeight: 600 }}>
                    Recent verified reviews
                  </span>
                </div>
                <p className='mt-1 text-[#6f8190]' style={{ fontSize: '12.5px' }}>
                  Proof shown beside the area you serve — not buried on a separate page.
                </p>
              </div>
              <Link
                href={ROUTES.services.localSeoAuthority}
                className='inline-flex shrink-0 items-center gap-1.5 text-[#0e7d8c] transition-colors hover:text-[#14b8a6]'
                style={{ fontSize: '13px', fontWeight: 600 }}
              >
                Local SEO
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   6 — HANDLING (interactive tabs)
   ============================================================================ */

function SectionHandling() {
  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='After contact'
          tone='amber'
          title='However the work arrives,'
          titleMuted='the handling is the same.'
          intro='A form, a missed call, a quote, a consultation request — different doors into the business, one consistent way of being answered, owned and followed up. Pick a path to see how it lands.'
        />
        <HandlingTabs />
      </Container>
    </section>
  );
}

/* ============================================================================
   7 — FIVE SYSTEMS (dark operating map — flagship hub + 4 connected)
   ============================================================================ */

function SectionFiveSystems() {
  return (
    <section className='section relative overflow-hidden bg-page-dark'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(80% 60% at 50% -10%, rgba(53,199,216,0.14) 0%, transparent 55%)',
        }}
      />
      <div className='mw-grid-overlay pointer-events-none absolute inset-0 opacity-[0.03]' aria-hidden='true' />

      <Container className='section-stack relative'>
        <SectionHead
          eyebrow='The operating map'
          tone='cyan'
          dark
          align='center'
          title='Five connected systems.'
          titleMuted='One control point.'
          intro='Smart Website Systems is the flagship — the control point the others connect to. Each protection sits around it, so work that arrives at the site is carried all the way through.'
        />

        {/* flagship hub */}
        <div className='mx-auto w-full max-w-3xl'>
          <Link
            href={ROUTES.services.smartWebsiteSystems}
            className='group relative block overflow-hidden rounded-[var(--mw-radius-panel)] border border-[#35c7d8]/30 p-7 transition-colors hover:border-[#35c7d8]/55 sm:p-8'
            style={{
              background: 'linear-gradient(160deg, rgba(53,199,216,0.14) 0%, rgba(255,255,255,0.02) 55%)',
              boxShadow: '0 0 0 1px rgba(53,199,216,0.10), var(--mw-elev-dark)',
            }}
          >
            <div className='flex flex-wrap items-center gap-4'>
              <span
                className='flex h-12 w-12 items-center justify-center rounded-2xl'
                style={{ background: 'rgba(53,199,216,0.15)', boxShadow: 'var(--mw-bloom-cyan)' }}
              >
                <Globe size={22} className='text-[#35c7d8]' />
              </span>
              <div className='min-w-0'>
                <span className='mw-eyebrow text-[#35c7d8]'>Flagship · the control point</span>
                <h3 className='mt-1.5 text-white' style={{ fontSize: '23px' }}>
                  Smart Website Systems
                </h3>
              </div>
              <ArrowRight
                size={20}
                className='ml-auto text-white/40 transition-all group-hover:translate-x-1 group-hover:text-[#35c7d8]'
              />
            </div>
            <p className='mt-4 max-w-[60ch] text-white/65' style={{ fontSize: '14.5px' }}>
              The website built to convert and to hold everything else together — with WordPress,
              Elementor, Bricks, Divi 5 and WooCommerce as the build paths underneath.
            </p>
          </Link>
        </div>

        {/* connector graphic (lg+) */}
        <div className='relative mx-auto hidden h-12 w-full max-w-5xl lg:block' aria-hidden='true'>
          <svg className='absolute inset-0 h-full w-full' viewBox='0 0 1000 48' preserveAspectRatio='none'>
            <path
              d='M500 0 V12 M500 12 H125 V48 M500 12 H375 V48 M500 12 H625 V48 M500 12 H875 V48'
              fill='none'
              stroke='rgba(255,255,255,0.14)'
              strokeWidth='1.5'
            />
          </svg>
          <span className='absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-[#35c7d8]' style={{ boxShadow: 'var(--mw-bloom-cyan)' }} />
        </div>

        {/* 4 connected systems */}
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {SYSTEMS.map(sys => {
            const Icon = sys.icon;
            const hex =
              sys.tone === 'teal'
                ? '#14b8a6'
                : sys.tone === 'amber'
                  ? '#f4b740'
                  : sys.tone === 'green'
                    ? '#21b985'
                    : '#9b7de0';
            return (
              <Link
                key={sys.name}
                href={sys.href}
                className='mw-glass-dark group relative flex flex-col gap-4 p-6 transition-colors hover:border-white/20'
              >
                <span
                  className='absolute inset-x-0 top-0 h-0.5 rounded-t-[var(--mw-radius-card)]'
                  style={{ background: hex, opacity: 0.7 }}
                />
                <span
                  className='flex h-11 w-11 items-center justify-center rounded-xl'
                  style={{ background: `${hex}1f` }}
                >
                  <Icon size={19} style={{ color: hex }} />
                </span>
                <div>
                  <h4 className='text-white' style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.02em' }}>
                    {sys.name}
                  </h4>
                  <p className='mt-1.5 text-white/55' style={{ fontSize: '13px' }}>
                    {sys.role}
                  </p>
                </div>
                <span className='mt-auto inline-flex items-center gap-1.5 text-white/45 transition-colors group-hover:text-white/80' style={{ fontSize: '12.5px', fontWeight: 600 }}>
                  Explore
                  <ArrowRight size={13} className='transition-transform group-hover:translate-x-0.5' />
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   8 — SHIFT (4 phases — timeline spine)
   ============================================================================ */

function SectionShift() {
  const phases = [
    {
      tone: 'teal' as SignalTone,
      icon: Search,
      phase: 'Phase 01',
      title: 'A stranger searching',
      copy: 'Someone in your area has a problem worth paying to solve. Right now, whether they find you is mostly luck.',
    },
    {
      tone: 'cyan' as SignalTone,
      icon: Globe,
      phase: 'Phase 02',
      title: 'A visitor on your site',
      copy: 'They land on a page that has to do one job: make the next step obvious. Clear pages turn visitors into contact.',
    },
    {
      tone: 'amber' as SignalTone,
      icon: Inbox,
      phase: 'Phase 03',
      title: 'An enquiry with an owner',
      copy: 'The call, form or request arrives with context attached and a named person replying — not a notification nobody acts on.',
    },
    {
      tone: 'green' as SignalTone,
      icon: CalendarCheck,
      phase: 'Phase 04',
      title: 'Work that gets finished',
      copy: 'Quotes are chased, consultations are confirmed, and the happy customer is asked for a review. The loop closes.',
    },
  ];

  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='The shift'
          tone='cyan'
          title='From a search'
          titleMuted='to work that’s finished.'
          intro='The same person moves through four phases. A connected system carries them across each gap instead of letting them fall into it.'
        />

        <div className='relative'>
          {/* spine */}
          <div
            aria-hidden='true'
            className='absolute left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-[#14b8a6] via-[#35c7d8] to-[#21b985] opacity-30 md:left-1/2 md:-translate-x-px'
          />
          <div className='flex flex-col gap-5'>
            {phases.map((p, i) => {
              const Icon = p.icon;
              const hex =
                p.tone === 'teal' ? '#14b8a6' : p.tone === 'cyan' ? '#35c7d8' : p.tone === 'amber' ? '#d99a1f' : '#21b985';
              return (
                <div
                  key={p.phase}
                  className={cn(
                    'relative grid grid-cols-[56px_1fr] items-start gap-5 md:grid-cols-2 md:gap-12',
                    i % 2 === 1 && 'md:[&>div:first-child]:order-2'
                  )}
                >
                  {/* node + card */}
                  <div className={cn('md:flex', i % 2 === 0 ? 'md:justify-end' : 'md:justify-start')}>
                    <div className='mw-card mw-card-interactive w-full max-w-md p-6'>
                      <span className='mw-eyebrow' style={{ color: hex }}>
                        {p.phase}
                      </span>
                      <h3 className='mt-2 text-[#08111f]' style={{ fontSize: '20px' }}>
                        {p.title}
                      </h3>
                      <p className='mt-2 text-[#4c5e6f]' style={{ fontSize: '14.5px' }}>
                        {p.copy}
                      </p>
                    </div>
                  </div>
                  {/* node marker */}
                  <span
                    className='absolute left-0 top-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#e6eef3] bg-white md:left-1/2 md:-translate-x-1/2'
                    style={{ boxShadow: 'var(--mw-elev-2)' }}
                  >
                    <Icon size={20} style={{ color: hex }} />
                  </span>
                  {/* spacer on md to balance grid (empty) */}
                  <div className='hidden md:block' aria-hidden='true' />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   9 — SCENARIOS (featured + grid)
   ============================================================================ */

function SectionScenarios() {
  const cards = [
    {
      icon: Wrench,
      tone: 'amber' as SignalTone,
      trade: 'Plumbing & heating',
      slip: 'Weekend breakdown calls hit voicemail',
      fix: 'Missed calls come back with a text and a named owner.',
    },
    {
      icon: Stethoscope,
      tone: 'purple' as SignalTone,
      trade: 'Specialist clinic',
      slip: 'Consultation requests sit unread in a shared inbox',
      fix: 'Each request reaches the right clinician with context attached.',
    },
    {
      icon: Building2,
      tone: 'teal' as SignalTone,
      trade: 'Trades & contractors',
      slip: 'Quotes go out and are never chased',
      fix: 'Every quote carries a visible chase on a known cadence.',
    },
    {
      icon: Activity,
      tone: 'green' as SignalTone,
      trade: 'Established service firm',
      slip: 'Happy customers are never asked for a review',
      fix: 'Reviews are requested on a system, while goodwill is fresh.',
    },
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Where it shows up'
          tone='amber'
          title='Different businesses.'
          titleMuted='The same gaps.'
          intro='The trade changes. The working-day objects — and the places they slip — stay remarkably consistent.'
        />

        <div className='grid gap-5 lg:grid-cols-[1.1fr_1fr]'>
          {/* featured */}
          <div className='mw-panel relative overflow-hidden p-8 sm:p-9'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full'
              style={{ background: 'radial-gradient(circle, rgba(244,183,64,0.16), transparent 70%)' }}
            />
            <div className='relative flex items-center gap-3'>
              <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-[#f4b740]/12'>
                <Building2 size={20} className='text-[#d99a1f]' />
              </span>
              <span className='mw-eyebrow text-[#d99a1f]'>Featured · roofing & exteriors</span>
            </div>
            <h3 className='relative mt-5 max-w-[20ch] text-[#08111f]' style={{ fontSize: '26px' }}>
              A storm hits on a Saturday. The phone never stops.
            </h3>
            <p className='relative mt-4 max-w-[52ch] text-[#4c5e6f]' style={{ fontSize: '15.5px' }}>
              Calls, form enquiries and emergency requests arrive faster than anyone can answer them
              by hand. Without a system, the overflow becomes lost work by Monday.
            </p>
            <div className='relative mt-6 flex flex-col gap-2.5'>
              {[
                'Missed calls are recovered, not lost to voicemail',
                'Urgent jobs are flagged and owned first',
                'Slower enquiries still get a reply and a follow-up',
              ].map(line => (
                <span key={line} className='flex items-start gap-2.5 text-[#4c5e6f]' style={{ fontSize: '14px' }}>
                  <Check size={16} className='mt-0.5 shrink-0 text-[#21b985]' />
                  {line}
                </span>
              ))}
            </div>
          </div>

          {/* 2x2 grid */}
          <div className='grid gap-4 sm:grid-cols-2'>
            {cards.map(c => {
              const Icon = c.icon;
              const hex =
                c.tone === 'amber' ? '#d99a1f' : c.tone === 'purple' ? '#9b7de0' : c.tone === 'teal' ? '#14b8a6' : '#21b985';
              return (
                <div key={c.trade} className='mw-card mw-card-interactive flex flex-col gap-3.5 p-6'>
                  <span className='flex h-10 w-10 items-center justify-center rounded-xl' style={{ background: `${hex}14` }}>
                    <Icon size={18} style={{ color: hex }} />
                  </span>
                  <span className='text-[#08111f]' style={{ fontSize: '14.5px', fontWeight: 700 }}>
                    {c.trade}
                  </span>
                  <span className='flex items-start gap-2 text-[#6f8190]' style={{ fontSize: '12.5px' }}>
                    <SignalDot tone='red' glow='flat' size={6} className='mt-1.5' />
                    {c.slip}
                  </span>
                  <span className='mt-auto flex items-start gap-2 border-t border-[#eef3f6] pt-3 text-[#4c5e6f]' style={{ fontSize: '12.5px' }}>
                    <Check size={14} className='mt-0.5 shrink-0 text-[#21b985]' />
                    {c.fix}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   10 — SURFACES (service page mock) — dark
   ============================================================================ */

function SectionSurfaces() {
  const annotations = [
    { tone: 'cyan' as SignalTone, icon: FileText, label: 'One clear job per page', note: 'A single, obvious next step.' },
    { tone: 'purple' as SignalTone, icon: Star, label: 'Proof placed where it’s decided', note: 'Reviews beside the offer, not hidden.' },
    { tone: 'amber' as SignalTone, icon: Inbox, label: 'Context captured on contact', note: 'Page and area travel with the enquiry.' },
  ];

  return (
    <section className='section relative overflow-hidden bg-page-dark'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(70% 60% at 20% 0%, rgba(53,199,216,0.10) 0%, transparent 55%)' }}
      />
      <Container className='relative'>
        <div className='grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16'>
          <div className='flex flex-col gap-8'>
            <SectionHead
              eyebrow='On the page'
              tone='cyan'
              dark
              title='Every page does'
              titleMuted='one clear job.'
              intro='A service or treatment page isn’t decoration. It places proof where the decision happens, makes the next step obvious, and captures context the moment someone makes contact.'
            />
            <div className='flex flex-col gap-3'>
              {annotations.map(a => {
                const Icon = a.icon;
                return (
                  <div key={a.label} className='mw-glass-dark flex items-center gap-4 p-4'>
                    <span
                      className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl'
                      style={{ background: 'rgba(255,255,255,0.05)' }}
                    >
                      <Icon size={17} className='text-white/70' />
                    </span>
                    <div className='min-w-0'>
                      <span className='flex items-center gap-2 text-white' style={{ fontSize: '14px', fontWeight: 600 }}>
                        <SignalDot tone={a.tone} glow='bloom' size={6} />
                        {a.label}
                      </span>
                      <span className='block text-white/45' style={{ fontSize: '12.5px' }}>
                        {a.note}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* browser mock */}
          <div className='relative'>
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -inset-5 rounded-[28px]'
              style={{ background: 'radial-gradient(60% 60% at 60% 30%, rgba(53,199,216,0.14), transparent 70%)' }}
            />
            <div className='relative overflow-hidden rounded-[20px] bg-white' style={{ boxShadow: 'var(--mw-elev-dark)' }}>
              {/* chrome */}
              <div className='flex items-center gap-2 border-b border-[#eef3f6] bg-[#f6fafc] px-4 py-3'>
                <span className='flex gap-1.5'>
                  <span className='h-2.5 w-2.5 rounded-full bg-[#e0e7ec]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#e0e7ec]' />
                  <span className='h-2.5 w-2.5 rounded-full bg-[#e0e7ec]' />
                </span>
                <span className='ml-2 flex-1 truncate rounded-md border border-[#e6eef3] bg-white px-3 py-1 text-[#6f8190]' style={{ fontSize: '11.5px' }}>
                  yoursite.co.uk / boiler-repair / named-area
                </span>
              </div>
              {/* page body */}
              <div className='p-6 sm:p-8'>
                <span className='mw-eyebrow text-[#0e7d8c]'>Emergency boiler repair · named local area</span>
                <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '24px' }}>
                  Boiler down? We can be out today.
                </h3>
                <p className='mt-2.5 max-w-[42ch] text-[#4c5e6f]' style={{ fontSize: '14px' }}>
                  Gas-safe engineers covering your area. Tell us what’s happening and we’ll come
                  back with the next step — fast.
                </p>

                {/* trust row */}
                <div className='mt-5 flex items-center gap-3 rounded-xl border border-[#e6eef3] bg-[#f9fcfd] px-4 py-3'>
                  <Stars size={14} />
                  <span className='text-[#4c5e6f]' style={{ fontSize: '12.5px', fontWeight: 600 }}>
                    Recent verified reviews
                  </span>
                  <span className='ml-auto inline-flex items-center gap-1.5 text-[#9b7de0]' style={{ fontSize: '11.5px', fontWeight: 600 }}>
                    <Quote size={13} />
                    Placed where it’s decided
                  </span>
                </div>

                {/* cta + capture */}
                <div className='mt-5 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center'>
                  <div className='flex flex-col gap-2 rounded-xl border border-[#e6eef3] bg-white p-3'>
                    <span className='text-[#6f8190]' style={{ fontSize: '11px', fontWeight: 600 }}>
                      Tell us what’s happening
                    </span>
                    <span className='h-8 rounded-md bg-[#f1f6f9]' />
                  </div>
                  <span
                    className='inline-flex items-center justify-center gap-2 rounded-full bg-[#061323] px-5 py-3 text-white'
                    style={{ fontSize: '13px', fontWeight: 600 }}
                  >
                    Get help now
                    <SignalDot tone='cyan' glow='bloom' />
                  </span>
                </div>
                <p className='mt-3 flex items-center gap-1.5 text-[#6f8190]' style={{ fontSize: '11.5px' }}>
                  <Eye size={13} className='text-[#14b8a6]' />
                  Page and area attach to the enquiry automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   11 — FIT (built for / not for)
   ============================================================================ */

function SectionFit() {
  const fit = [
    'Established service businesses already getting real enquiries',
    'Specialist clinics handling consultation and treatment requests',
    'Owners who know work is slipping but can’t see exactly where',
    'Teams ready to own the work — not hand it to a bot',
    'Businesses serving defined local areas they want to win',
  ];
  const notFor = [
    'Brand-new businesses with no enquiry flow to protect yet',
    'Anyone shopping purely on the cheapest possible website',
    'Buyers who want a guaranteed ranking or lead number',
    'Projects that need a medical-software or EMR build',
    'Quick logo-and-template jobs with no system behind them',
  ];

  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Is this for you?'
          tone='green'
          align='center'
          title='Built for some businesses.'
          titleMuted='Honestly not for others.'
          intro='A system like this earns its place when there’s real work coming in to protect. If that’s not you yet, we’ll say so.'
        />

        <div className='grid gap-5 lg:grid-cols-2'>
          <div className='mw-card p-7 sm:p-8'>
            <div className='flex items-center gap-3 border-b border-[#eef3f6] pb-4'>
              <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#21b985]/12'>
                <Check size={17} className='text-[#21b985]' />
              </span>
              <span className='text-[#08111f]' style={{ fontSize: '16px', fontWeight: 700 }}>
                A strong fit
              </span>
            </div>
            <ul className='mt-5 flex flex-col gap-3.5'>
              {fit.map(item => (
                <li key={item} className='flex items-start gap-3 text-[#4c5e6f]' style={{ fontSize: '14.5px' }}>
                  <Check size={16} className='mt-0.5 shrink-0 text-[#21b985]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='rounded-[var(--mw-radius-panel)] border border-[#e6eef3] bg-[#f9fcfd] p-7 sm:p-8'>
            <div className='flex items-center gap-3 border-b border-[#eef3f6] pb-4'>
              <span className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#6f8190]/12'>
                <X size={17} className='text-[#6f8190]' />
              </span>
              <span className='text-[#08111f]' style={{ fontSize: '16px', fontWeight: 700 }}>
                Probably not yet
              </span>
            </div>
            <ul className='mt-5 flex flex-col gap-3.5'>
              {notFor.map(item => (
                <li key={item} className='flex items-start gap-3 text-[#6f8190]' style={{ fontSize: '14.5px' }}>
                  <X size={16} className='mt-0.5 shrink-0 text-[#9cb0bd]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   12 — DELIVERY (5 review areas + 3 deliverables)
   ============================================================================ */

function SectionDelivery() {
  const reviewAreas = [
    { n: '01', t: 'How the site is found', d: 'Visibility in the areas you actually serve.' },
    { n: '02', t: 'How pages convert', d: 'Whether each page makes the next step obvious.' },
    { n: '03', t: 'How contact is handled', d: 'What happens to calls and enquiries on arrival.' },
    { n: '04', t: 'How follow-up runs', d: 'Whether quotes and requests have a visible owner.' },
    { n: '05', t: 'How proof is gathered', d: 'Whether reviews are requested on a system.' },
  ];
  const deliverables = [
    { icon: FileText, tone: 'cyan' as SignalTone, t: 'A plain-language review', d: 'Where work is slipping today, in order of value — not a 40-page audit.' },
    { icon: Layers, tone: 'amber' as SignalTone, t: 'A prioritised plan', d: 'The highest-impact fix first, and what can wait, so nothing is over-built.' },
    { icon: CalendarCheck, tone: 'green' as SignalTone, t: 'A clear next step', d: 'Exactly what happens if you decide to move — and what it doesn’t commit you to.' },
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='What a review covers'
          tone='cyan'
          title='A calm look at where'
          titleMuted='the work is slipping.'
          intro='No demo, no pressure. We look at five areas, then come back with what’s worth fixing first.'
        />

        <div className='grid gap-5 lg:grid-cols-[1.05fr_0.95fr]'>
          {/* 5 review areas */}
          <div className='mw-card overflow-hidden'>
            {reviewAreas.map((a, i) => (
              <div
                key={a.n}
                className={cn(
                  'flex items-center gap-5 px-6 py-4.5',
                  i !== reviewAreas.length - 1 && 'border-b border-[#eef3f6]'
                )}
              >
                <span
                  className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#e6eef3] text-[#6f8190]'
                  style={{ fontSize: '12.5px', fontWeight: 700 }}
                >
                  {a.n}
                </span>
                <div className='min-w-0'>
                  <span className='block text-[#08111f]' style={{ fontSize: '15px', fontWeight: 600 }}>
                    {a.t}
                  </span>
                  <span className='block text-[#6f8190]' style={{ fontSize: '13px' }}>
                    {a.d}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 3 deliverables */}
          <div className='flex flex-col gap-4'>
            {deliverables.map(d => {
              const Icon = d.icon;
              const hex = d.tone === 'cyan' ? '#35c7d8' : d.tone === 'amber' ? '#d99a1f' : '#21b985';
              return (
                <div key={d.t} className='mw-card flex items-start gap-4 p-6'>
                  <span className='flex h-11 w-11 shrink-0 items-center justify-center rounded-xl' style={{ background: `${hex}14` }}>
                    <Icon size={19} style={{ color: hex }} />
                  </span>
                  <div>
                    <span className='block text-[#08111f]' style={{ fontSize: '15.5px', fontWeight: 700 }}>
                      {d.t}
                    </span>
                    <span className='mt-1 block text-[#4c5e6f]' style={{ fontSize: '13.5px' }}>
                      {d.d}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   13 — FAQ
   ============================================================================ */

function SectionFaq() {
  return (
    <section className='section bg-page-white'>
      <Container>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16'>
          <SectionHead
            eyebrow='Before you ask'
            tone='cyan'
            title='Straight answers.'
            titleMuted='No sales spin.'
            intro='The questions established owners and clinic managers actually ask before a review.'
          />
          <FaqAccordion items={HOME_FAQS} />
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   14 — CTA (dark inner panel)
   ============================================================================ */

function SectionCta() {
  const expectations = [
    'A look at your current site and where work slips after contact',
    'The single highest-value fix, named in plain language',
    'No demo, no trial, and nothing to sign to start',
    'An honest answer if it isn’t the right fit yet',
    'A clear, no-pressure next step either way',
  ];

  return (
    <section className='section bg-page-white'>
      <Container>
        <div
          className='relative overflow-hidden rounded-[28px] px-7 py-12 sm:px-12 sm:py-16'
          style={{
            background: 'linear-gradient(155deg, #061323 0%, #0b2236 60%, #103e5a 130%)',
            boxShadow: 'var(--mw-elev-dark)',
          }}
        >
          <div className='mw-grid-overlay pointer-events-none absolute inset-0 opacity-[0.04]' aria-hidden='true' />
          <div
            aria-hidden='true'
            className='pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full'
            style={{ background: 'radial-gradient(circle, rgba(53,199,216,0.22), transparent 70%)' }}
          />

          <div className='relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
            <div className='flex flex-col gap-6'>
              <Eyebrow tone='cyan' dark>
                Request a website review
              </Eyebrow>
              <h2 className='text-white'>
                Stop guessing where
                <br />
                <span className='text-white/45'>the work goes.</span>
              </h2>
              <p className='max-w-[48ch] text-white/65' style={{ fontSize: '17px' }}>
                Tell us about your business and your current site. We’ll show you where work is
                slipping — and the calm, ordered way to stop it.
              </p>
              <div className='flex flex-wrap items-center gap-3 pt-1'>
                <Link
                  href={SITE.cta.href}
                  className='inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-[#08111f] transition-colors hover:bg-[#eaf6f8]'
                  style={{ fontSize: '14.5px' }}
                >
                  {SITE.cta.label}
                  <SignalDot tone='cyan' glow='bloom' />
                </Link>
                <Link
                  href={ROUTES.services.smartWebsiteSystems}
                  className='inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white/85 transition-colors hover:bg-white/5'
                  style={{ fontSize: '14.5px' }}
                >
                  Explore Smart Website Systems
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className='mw-glass-dark p-7'>
              <span className='mw-eyebrow text-white/45'>What to expect</span>
              <ul className='mt-5 flex flex-col gap-4'>
                {expectations.map(item => (
                  <li key={item} className='flex items-start gap-3 text-white/80' style={{ fontSize: '14.5px' }}>
                    <Check size={17} className='mt-0.5 shrink-0 text-[#35c7d8]' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   Screen
   ============================================================================ */

export function HomeScreen() {
  return (
    <>
      <SectionHero />
      <SectionLeak />
      <SectionControlPoint />
      <SectionContrast />
      <SectionLocalVisibility />
      <SectionHandling />
      <SectionFiveSystems />
      <SectionShift />
      <SectionScenarios />
      <SectionSurfaces />
      <SectionFit />
      <SectionDelivery />
      <SectionFaq />
      <SectionCta />
    </>
  );
}
