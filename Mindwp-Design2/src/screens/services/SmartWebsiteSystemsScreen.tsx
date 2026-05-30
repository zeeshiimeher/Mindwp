import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  MapPin,
  Clock,
  PhoneCall,
  FileText,
  Layers,
  Repeat,
  Compass,
  Star,
  Check,
  Minus,
} from 'lucide-react';

import { cn } from '@/lib/cn';
import { ROUTES } from '@/config/routes';
import { SITE } from '@/config/site';
import { Container } from '@/components/primitives/Container';
import { SignalDot, type SignalTone } from '@/components/primitives/SignalDot';
import { Stars } from '@/components/content/Stars';
import { FaqAccordion, type FaqItem } from '@/components/content/FaqAccordion';

/* ============================================================================
   Shared local helpers (presentational — self-contained to this screen)
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
      <h2 className={cn('max-w-[22ch]', dark ? 'text-white' : 'text-[#08111f]')}>
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

const HEX: Record<SignalTone, string> = {
  cyan: '#35c7d8',
  teal: '#14b8a6',
  amber: '#d99a1f',
  green: '#21b985',
  purple: '#9b7de0',
  red: '#e76f6f',
};

/* ============================================================================
   Data
   ============================================================================ */

const SWS_FAQS: FaqItem[] = [
  {
    q: 'Is this just a website redesign?',
    a: 'No. A redesign refreshes how the site looks. A Smart Website System rebuilds the way service or treatment pages are structured, how trust is placed, how each enquiry carries context, and how the next step is reached. Some of the work is visible to the eye — most of it is in the writing and the order of the page.',
  },
  {
    q: 'Do you build in WordPress?',
    a: 'Yes. WordPress is what most established service businesses and specialist clinics already run, and most of our work sits there. We choose the build approach to fit the team who will keep editing the site afterwards.',
  },
  {
    q: 'Can you work with Elementor, Bricks, Divi, or WooCommerce?',
    a: 'Yes — Elementor, Bricks Builder, Divi 5, and WooCommerce are all implementation pathways under Smart Website Systems. The right choice depends on what your team already edits, what the existing site can keep, and what the next two years of editing actually look like.',
  },
  {
    q: 'Do we need to rebuild everything?',
    a: 'Often, no. We look at what already works on the site, what only needs reshaping, and where a real rebuild is the honest answer. That recommendation comes out of the website system review — not from a default to a full rebuild.',
  },
  {
    q: 'How does this connect with SEO, enquiries, and follow-up?',
    a: 'The website is the front door. Local visibility, first reply, sequenced follow-up, and review collection live in their own offers — Local SEO Authority Systems, Lead Response & Handling Systems, Follow-Up & CRM Systems, and Reputation & Review Systems. The Smart Website System hands the enquiry forward to whichever ones fit, with context attached.',
  },
  {
    q: 'What happens in the website system review?',
    a: 'A short working session — 60 to 90 minutes — looking at the actual website, the service or treatment pages, the local trust, the enquiry paths, and where proof is placed. You walk away with a short list of what to fix first, ranked. No automated audit, no hard sell, no guarantee.',
  },
];

/* ============================================================================
   1 — HERO (with treatment-page anatomy visual)
   ============================================================================ */

function HeroTreatmentPage() {
  return (
    <div className='relative'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -inset-6 rounded-[32px]'
        style={{ background: 'radial-gradient(60% 60% at 55% 35%, rgba(53,199,216,0.18), transparent 70%)' }}
      />
      <div className='relative overflow-hidden rounded-[20px] bg-white' style={{ boxShadow: 'var(--mw-elev-dark)' }}>
        {/* chrome */}
        <div className='flex items-center gap-2 border-b border-[#eef3f6] bg-[#f6fafc] px-4 py-3'>
          <span className='flex gap-1.5'>
            <span className='h-2.5 w-2.5 rounded-full bg-[#e0e7ec]' />
            <span className='h-2.5 w-2.5 rounded-full bg-[#e0e7ec]' />
            <span className='h-2.5 w-2.5 rounded-full bg-[#e0e7ec]' />
          </span>
          <span className='ml-2 flex flex-1 items-center gap-1.5 truncate rounded-md border border-[#e6eef3] bg-white px-3 py-1 text-[#6f8190]' style={{ fontSize: '11.5px' }}>
            <ShieldCheck size={12} className='text-[#21b985]' />
            /services/specialist-consultation
          </span>
        </div>

        <div className='p-5 sm:p-6'>
          {/* hero zone */}
          <div className='rounded-2xl border border-[#cdeef2] bg-[#f3fbfc] p-5'>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[#0e7d8c]' style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>
              <MapPin size={11} />
              NAMED LOCAL AREA · SPECIALIST PRACTICE
            </span>
            <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '19px', letterSpacing: '-0.02em' }}>
              Specialist consultation — what the visit covers and what to expect.
            </h3>
            <p className='mt-2 text-[#4c5e6f]' style={{ fontSize: '13px' }}>
              What the consultation includes, what to bring, and the next steps after the visit.
            </p>
          </div>

          {/* trust band */}
          <div className='mt-3 rounded-2xl border border-[#cfeae6] bg-[#f0fbf9] p-4'>
            <div className='flex items-center gap-2.5'>
              <Stars size={13} />
              <span className='text-[#6f8190]' style={{ fontSize: '12px' }}>
                Recent practice-experience reviews
              </span>
            </div>
            <div className='mt-3 flex flex-wrap gap-2'>
              {[
                { icon: ShieldCheck, label: 'Registered practice' },
                { icon: Clock, label: 'Consultation availability shown' },
                { icon: MapPin, label: 'Local area covered' },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <span key={c.label} className='inline-flex items-center gap-1.5 rounded-full border border-[#e6eef3] bg-white px-2.5 py-1 text-[#0e7d8c]' style={{ fontSize: '11px', fontWeight: 600 }}>
                    <Icon size={12} />
                    {c.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* CTA + handoff */}
          <div className='mt-3 rounded-2xl border border-[#cdeadd] bg-[#f1fbf6] p-4'>
            <div className='flex flex-wrap items-center gap-3'>
              <span className='inline-flex items-center gap-2 rounded-full bg-[#061323] px-4 py-2 text-white' style={{ fontSize: '12.5px', fontWeight: 600 }}>
                Request a consultation
                <ArrowRight size={14} />
              </span>
              <span className='inline-flex items-center gap-1.5 text-[#0f7a57]' style={{ fontSize: '12px', fontWeight: 600 }}>
                <PhoneCall size={13} />
                Direct line to the practice
              </span>
            </div>
            <p className='mt-2.5 text-[#6f8190]' style={{ fontSize: '11.5px' }}>
              Reaches the practice coordinator — page, area, and reason attached.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHero() {
  const features = [
    'Service & treatment pages',
    'Trust where decisions happen',
    'Intent-matched calls to action',
    'Local relevance, area by area',
  ];
  return (
    <section className='section-hero relative overflow-hidden bg-page-dark'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{
          background:
            'radial-gradient(120% 90% at 80% -10%, rgba(53,199,216,0.18) 0%, transparent 55%), radial-gradient(80% 70% at 0% 100%, rgba(16,62,90,0.5) 0%, transparent 60%)',
        }}
      />
      <div className='mw-grid-overlay pointer-events-none absolute inset-0 opacity-[0.04]' aria-hidden='true' />

      <Container className='relative'>
        <div className='grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16'>
          <div className='flex flex-col gap-7'>
            <Eyebrow tone='cyan' dark>
              Smart Website Systems
            </Eyebrow>
            <h1 className='text-white' style={{ letterSpacing: '-0.022em' }}>
              A better website is not just a better-looking page.{' '}
              <span className='text-white/45'>It carries the decision.</span>
            </h1>
            <p className='max-w-[56ch] text-white/65' style={{ fontSize: '18px', lineHeight: 1.65 }}>
              Smart Website Systems are built for established service businesses and specialist
              clinics where the website has to clarify what you do, build confidence, capture intent,
              and connect the next step — not just sit online and look modern.
            </p>

            <div className='flex flex-wrap items-center gap-3 pt-1'>
              <Link
                href={SITE.cta.href}
                className='inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-[#08111f] transition-colors hover:bg-[#eaf6f8]'
                style={{ fontSize: '14.5px' }}
              >
                Review my website system
                <SignalDot tone='cyan' glow='bloom' />
              </Link>
              <Link
                href='#what-it-includes'
                className='inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-white/85 transition-colors hover:bg-white/5'
                style={{ fontSize: '14.5px' }}
              >
                See what is inside
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className='grid grid-cols-2 gap-x-6 gap-y-3 pt-2'>
              {features.map(f => (
                <span key={f} className='flex items-center gap-2.5 text-white/70' style={{ fontSize: '13.5px' }}>
                  <SignalDot tone='cyan' glow='bloom' size={6} />
                  {f}
                </span>
              ))}
            </div>
          </div>

          <HeroTreatmentPage />
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   2 — WHY FAILS ("Two kinds of website")
   ============================================================================ */

function SectionWhyFails() {
  const exists = [
    'Generic hero — the same headline a competitor could run tomorrow.',
    'Trust hidden on a separate page nobody opens.',
    'One contact button doing every job on every page.',
    'Forms post into an inbox with no page or area attached.',
  ];
  const carries = [
    'Hero names the service, the place, and the next step.',
    'Reviews and credentials placed beside the call to action.',
    'CTA written for the page — quote, consultation, callback.',
    'Each enquiry arrives with its page, area, and reason.',
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Two kinds of website'
          tone='cyan'
          align='center'
          title='A website that exists'
          titleMuted='is not the same as a website that carries the decision.'
          intro='Most websites for established service businesses and clinics look fine at a glance. They are quietly thin in the places that actually matter — and visitors read that thinness before they ever fill in a form.'
        />

        <div className='grid gap-5 lg:grid-cols-2'>
          {/* exists */}
          <div className='rounded-[var(--mw-radius-panel)] border border-[#e6eef3] bg-[#f9fcfd] p-7 sm:p-8'>
            <span className='mw-eyebrow text-[#9cb0bd]'>A website that exists</span>
            <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '22px' }}>
              Online. <span className='text-[#9cb0bd]'>Just sitting there.</span>
            </h3>
            <ul className='mt-6 flex flex-col gap-4'>
              {exists.map(item => (
                <li key={item} className='flex items-start gap-3 text-[#6f8190]' style={{ fontSize: '14.5px' }}>
                  <SignalDot tone='red' glow='none' size={7} className='mt-1.5 opacity-50' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* carries */}
          <div
            className='relative rounded-[var(--mw-radius-panel)] border border-[#35c7d8]/25 p-7 sm:p-8'
            style={{
              background: 'linear-gradient(165deg, rgba(53,199,216,0.08) 0%, #ffffff 60%)',
              boxShadow: 'var(--mw-ring-ambient), var(--mw-elev-2)',
            }}
          >
            <span className='mw-eyebrow text-[#0e7d8c]'>A website that carries the decision</span>
            <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '22px' }}>
              Reading the visitor. <span className='text-[#0e7d8c]'>Earning the next step.</span>
            </h3>
            <ul className='mt-6 flex flex-col gap-4'>
              {carries.map(item => (
                <li key={item} className='flex items-start gap-3 text-[#4c5e6f]' style={{ fontSize: '14.5px' }}>
                  <Check size={17} className='mt-0.5 shrink-0 text-[#35c7d8]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className='mx-auto max-w-[64ch] text-center text-[#4c5e6f]' style={{ fontSize: '15.5px' }}>
          A modern look is the easy part.{' '}
          <span className='font-semibold text-[#08111f]'>
            What carries the decision is the writing, the trust, and the order of the page.
          </span>
        </p>
      </Container>
    </section>
  );
}

/* ============================================================================
   3 — WHAT IT INCLUDES (six responsibilities)
   ============================================================================ */

function SectionWhatItIncludes() {
  const responsibilities: {
    n: string;
    tone: SignalTone;
    icon: typeof FileText;
    title: string;
    body: string;
    detail: string;
  }[] = [
    {
      n: '01',
      tone: 'teal',
      icon: FileText,
      title: 'Service and treatment clarity',
      body: 'A real page per service or treatment, written to answer the question that brought the visitor — not a sub-bullet on a list.',
      detail: 'What it is, who it is for, what happens, what to expect, what it costs in the broadest sense, and what to do next.',
    },
    {
      n: '02',
      tone: 'teal',
      icon: MapPin,
      title: 'Local trust and area relevance',
      body: 'Area-aware pages, named neighbourhoods, and visible signs that the business is real and nearby.',
      detail: 'Service-area cues on the page, consistent listing details, and area-specific content where the work is actually done.',
    },
    {
      n: '03',
      tone: 'cyan',
      icon: ArrowRight,
      title: 'Intent-matched calls to action',
      body: 'Each page asks for the next step that actually fits — not the same generic "contact us" everywhere.',
      detail: 'Quote, consultation, booking, callback, emergency line — written for the page and the visitor reading it.',
    },
    {
      n: '04',
      tone: 'green',
      icon: Layers,
      title: 'Enquiry capture with context',
      body: 'Forms and calls arrive already explained — the page, area, and reason travel with the contact.',
      detail: 'No more "where did this come from?" between the front desk and the owner. Context attached at source.',
    },
    {
      n: '05',
      tone: 'amber',
      icon: ShieldCheck,
      title: 'Proof and review placement',
      body: 'Reviews, credentials, and finished work placed near the moments of hesitation, not buried on a side page.',
      detail: 'Trust shows up beside the call to action — where the visitor is deciding whether to act.',
    },
    {
      n: '06',
      tone: 'purple',
      icon: Repeat,
      title: 'Connected next-step handoff',
      body: 'The website does not run the business — but it hands the enquiry forward with everything the next step needs.',
      detail: 'A clean bridge into the rest of the response, follow-up, and review work that lives elsewhere.',
    },
  ];

  return (
    <section id='what-it-includes' className='section bg-page-white'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='What is inside'
          tone='teal'
          title='Six things the website is responsible for'
          titleMuted='— not six things on a feature list.'
          intro='A Smart Website System is defined by what the website has to do for visitors and the business — not by the page count, the template, or the builder underneath.'
        />

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
          {responsibilities.map(r => {
            const Icon = r.icon;
            const hex = HEX[r.tone];
            return (
              <div
                key={r.n}
                className='mw-card mw-card-interactive relative flex flex-col gap-4 overflow-hidden p-6'
                style={{ borderTop: `3px solid ${hex}` }}
              >
                <span
                  className='pointer-events-none absolute right-4 top-3 select-none font-bold leading-none text-[#08111f] opacity-[0.04]'
                  style={{ fontSize: '64px' }}
                  aria-hidden='true'
                >
                  {r.n}
                </span>
                <span className='flex h-11 w-11 items-center justify-center rounded-xl' style={{ background: `${hex}14` }}>
                  <Icon size={19} style={{ color: hex }} />
                </span>
                <h3 className='text-[#08111f]' style={{ fontSize: '17.5px' }}>
                  {r.title}
                </h3>
                <p className='text-[#4c5e6f]' style={{ fontSize: '14px' }}>
                  {r.body}
                </p>
                <p className='mt-auto border-t border-dashed border-[#e6eef3] pt-3.5 text-[#6f8190]' style={{ fontSize: '12.5px' }}>
                  {r.detail}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   4 — PAGE CRAFT (decision stack) — the showpiece
   ============================================================================ */

function PageAnatomyPanel() {
  return (
    <div className='relative'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -inset-5 rounded-[28px]'
        style={{ background: 'radial-gradient(55% 55% at 50% 30%, rgba(53,199,216,0.14), transparent 70%)' }}
      />
      <div className='relative overflow-hidden rounded-[20px] border border-[#e6eef3] bg-white' style={{ boxShadow: 'var(--mw-elev-float)' }}>
        {/* header strip */}
        <div className='flex items-center gap-2.5 border-b border-[#eef3f6] bg-[#f6fafc] px-5 py-3'>
          <span className='h-5 w-5 rounded-md bg-[#dce6ec]' />
          <span className='flex flex-1 gap-1.5'>
            <span className='h-1.5 w-10 rounded-full bg-[#dce6ec]' />
            <span className='h-1.5 w-10 rounded-full bg-[#dce6ec]' />
            <span className='h-1.5 w-10 rounded-full bg-[#dce6ec]' />
          </span>
          <span className='h-5 w-14 rounded-md bg-[#061323]' />
        </div>

        <div className='flex flex-col gap-3 p-5'>
          {/* 01 Intent */}
          <Band n='01' tone='teal'>
            <span className='inline-flex items-center gap-1.5 rounded-full bg-[#e9f7f5] px-2.5 py-1 text-[#0e7d8c]' style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em' }}>
              <MapPin size={11} />
              AREA
            </span>
            <h4 className='mt-2 text-[#08111f]' style={{ fontSize: '15.5px' }}>
              Service or treatment, named clearly.
            </h4>
            <p className='text-[#4c5e6f]' style={{ fontSize: '12.5px' }}>
              Plain language. The place. The next step.
            </p>
          </Band>

          {/* 02 Explanation */}
          <Band n='02' tone='cyan'>
            <div className='grid grid-cols-2 gap-2.5'>
              {['What we do here', 'Who it suits', 'What happens', 'What to expect'].map(l => (
                <div key={l} className='rounded-lg border border-[#eef3f6] bg-[#f9fcfd] px-3 py-2'>
                  <span className='block text-[#08111f]' style={{ fontSize: '11.5px', fontWeight: 700 }}>
                    {l}
                  </span>
                  <span className='mt-1.5 block h-1 w-3/4 rounded-full bg-[#dce6ec]' />
                </div>
              ))}
            </div>
          </Band>

          {/* 03 Trust */}
          <Band n='03' tone='green'>
            <div className='flex items-center gap-2'>
              <Stars size={12} />
              <span className='text-[#6f8190]' style={{ fontSize: '11.5px' }}>
                Reviews placed beside the click
              </span>
            </div>
            <div className='mt-2.5 flex flex-wrap gap-1.5'>
              {['Registered', 'Local area covered', 'Written cover'].map(c => (
                <span key={c} className='inline-flex items-center gap-1 rounded-full border border-[#e6eef3] bg-white px-2 py-0.5 text-[#0e7d8c]' style={{ fontSize: '10.5px', fontWeight: 600 }}>
                  <ShieldCheck size={10} />
                  {c}
                </span>
              ))}
            </div>
          </Band>

          {/* 04 Next-step CTA */}
          <Band n='04' tone='green'>
            <div className='flex flex-wrap items-center gap-2.5'>
              <span className='inline-flex items-center gap-1.5 rounded-full bg-[#061323] px-3.5 py-1.5 text-white' style={{ fontSize: '11.5px', fontWeight: 600 }}>
                Take the next step
                <ArrowRight size={12} />
              </span>
              <span className='inline-flex items-center gap-1 text-[#0f7a57]' style={{ fontSize: '11px', fontWeight: 600 }}>
                <PhoneCall size={11} />
                Direct line
              </span>
            </div>
            <p className='mt-2 text-[#6f8190]' style={{ fontSize: '11px' }}>
              Form attaches page, area, and reason — the context goes forward.
            </p>
          </Band>

          {/* 05 Local */}
          <Band n='05' tone='amber'>
            <span className='block text-[#9cb0bd]' style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Service area
            </span>
            <span className='mt-0.5 inline-flex items-center gap-1.5 text-[#08111f]' style={{ fontSize: '13px', fontWeight: 600 }}>
              <MapPin size={13} className='text-[#9a6f12]' />
              Named local area
            </span>
            <span className='mt-2.5 block text-[#9cb0bd]' style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Related work
            </span>
            <div className='mt-1.5 grid grid-cols-4 gap-1.5'>
              {[0, 1, 2, 3].map(i => (
                <span key={i} className='h-6 rounded-md' style={{ background: 'rgba(226,199,134,0.4)' }} />
              ))}
            </div>
          </Band>
        </div>
      </div>
    </div>
  );
}

function Band({ n, tone, children }: { n: string; tone: SignalTone; children: React.ReactNode }) {
  const hex = HEX[tone];
  return (
    <div className='relative rounded-xl border border-[#eef3f6] bg-white p-4 pl-12' style={{ boxShadow: 'var(--mw-elev-1)' }}>
      <span
        className='absolute left-3 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#061323] text-[#35c7d8]'
        style={{ fontSize: '11px', fontWeight: 700, boxShadow: `0 0 0 3px ${hex}26` }}
      >
        {n}
      </span>
      {children}
    </div>
  );
}

function SectionPageCraft() {
  const layers: {
    n: string;
    tone: SignalTone;
    stage: string;
    q: string;
    title: string;
    body: string;
  }[] = [
    {
      n: '01',
      tone: 'teal',
      stage: 'Intent',
      q: 'What is this, and is it for me?',
      title: 'An intent-led hero, not a slogan.',
      body: 'The page names the service or treatment, the place, and the next step in plain language — above the fold, on the first read.',
    },
    {
      n: '02',
      tone: 'cyan',
      stage: 'Explanation',
      q: 'Will it actually answer my real question?',
      title: 'A real answer block — not a paragraph and a stock photo.',
      body: 'What it is, who it is for, what happens, and what to expect — written for the visitor who already searched the question.',
    },
    {
      n: '03',
      tone: 'green',
      stage: 'Trust',
      q: 'Can I trust them with this?',
      title: 'Trust placed beside the moment of hesitation.',
      body: 'Reviews, registrations, and finished work sit beside the call to action — not on a side page nobody opens.',
    },
    {
      n: '04',
      tone: 'green',
      stage: 'Next step',
      q: 'What do I actually do now?',
      title: 'A matched call to action, written for this page.',
      body: 'Quote, consultation, callback, booking, or emergency line — not a generic "contact us" button shared across the whole site.',
    },
    {
      n: '05',
      tone: 'amber',
      stage: 'Local relevance',
      q: 'Are they actually near me?',
      title: 'Real local cues, not a postcode in the footer.',
      body: 'Service area named on the page, related work for nearby decisions, and listings that match what the page says.',
    },
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='How a single page earns the next step'
          tone='cyan'
          title='A service or treatment page'
          titleMuted='is a decision stack, not a brochure.'
          intro='Visitors do not read a page top to bottom. They drop in already asking specific questions. A serious service page answers those questions in the order they get asked — and shows the answer in the place it belongs on the page.'
        />

        <div className='grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-14'>
          {/* visual */}
          <div className='lg:sticky lg:top-28'>
            <span className='mw-eyebrow mb-4 block text-[#9cb0bd]'>One page, five layers</span>
            <PageAnatomyPanel />
            <p className='mt-4 text-center italic text-[#6f8190]' style={{ fontSize: '12.5px' }}>
              An illustrative page anatomy — the same five layers, shown as page sections.
            </p>
          </div>

          {/* reading list */}
          <div className='flex flex-col gap-4'>
            {layers.map(l => {
              const hex = HEX[l.tone];
              return (
                <div key={l.n} className='mw-card flex gap-5 p-6'>
                  <span
                    className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061323] text-[#35c7d8]'
                    style={{ fontSize: '13px', fontWeight: 700, boxShadow: `0 0 0 3px ${hex}26` }}
                  >
                    {l.n}
                  </span>
                  <div className='min-w-0'>
                    <span className='mw-eyebrow' style={{ color: hex }}>
                      {l.stage}
                    </span>
                    <p className='mt-2 italic text-[#6f8190]' style={{ fontSize: '14px' }}>
                      &ldquo;{l.q}&rdquo;
                    </p>
                    <h3 className='mt-2 text-[#08111f]' style={{ fontSize: '18px' }}>
                      {l.title}
                    </h3>
                    <p className='mt-1.5 text-[#4c5e6f]' style={{ fontSize: '14px' }}>
                      {l.body}
                    </p>
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
   5 — BUYING PATHS (urgent vs considered)
   ============================================================================ */

function IntentGroup({
  label,
  headline,
  intro,
  tone,
  rows,
}: {
  label: string;
  headline: string;
  intro: string;
  tone: SignalTone;
  rows: { icon: typeof PhoneCall; name: string; shape: string; cta: string }[];
}) {
  const hex = HEX[tone];
  return (
    <div
      className='rounded-[var(--mw-radius-panel)] border p-7 sm:p-8'
      style={{
        borderColor: `${hex}33`,
        background: `linear-gradient(170deg, ${hex}0f 0%, #ffffff 55%)`,
        boxShadow: 'var(--mw-ring-ambient), var(--mw-elev-2)',
      }}
    >
      <span className='mw-eyebrow' style={{ color: hex }}>
        {label}
      </span>
      <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '21px' }}>
        {headline}
      </h3>
      <p className='mt-2 text-[#4c5e6f]' style={{ fontSize: '14px' }}>
        {intro}
      </p>
      <div className='mt-6 flex flex-col gap-3'>
        {rows.map(r => {
          const Icon = r.icon;
          return (
            <div key={r.name} className='rounded-2xl border border-[#e6eef3] bg-white p-4' style={{ boxShadow: 'var(--mw-elev-1)' }}>
              <div className='flex items-center gap-2.5'>
                <span className='flex h-8 w-8 items-center justify-center rounded-lg' style={{ background: `${hex}14` }}>
                  <Icon size={15} style={{ color: hex }} />
                </span>
                <span className='text-[#08111f]' style={{ fontSize: '14.5px', fontWeight: 700 }}>
                  {r.name}
                </span>
              </div>
              <p className='mt-2.5 text-[#4c5e6f]' style={{ fontSize: '13px' }}>
                {r.shape}
              </p>
              <span className='mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1' style={{ background: `${hex}12`, color: hex, fontSize: '11.5px', fontWeight: 600 }}>
                {r.cta}
                <ArrowRight size={12} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionBuyingPaths() {
  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Built for different visitor intents'
          tone='amber'
          title='Some visitors come in fast.'
          titleMuted='Others come in slow.'
          intro='One website system, two very different reading speeds. Urgent visitors need a fast route. Considered visitors need real answers. The page should match each one — not pretend they are all the same enquiry.'
        />

        <div className='grid gap-5 lg:grid-cols-2'>
          <IntentGroup
            label='Urgent or decided'
            tone='amber'
            headline='Visitors who already know what they want.'
            intro='The page has minutes — sometimes less. It needs to confirm, route, and get out of the way.'
            rows={[
              {
                icon: PhoneCall,
                name: 'Emergency service call',
                shape: 'Phone-first emergency page. Hours, area, and registration above the fold — no scrolling to find the number.',
                cta: 'Call now · response window stated',
              },
              {
                icon: Clock,
                name: 'Appointment booking',
                shape: 'Booking-led page with available windows, clinic or branch picker, and clear policy notes beside the dates.',
                cta: 'Book an appointment',
              },
              {
                icon: Repeat,
                name: 'Repeat or referral visitor',
                shape: 'A simple "what now?" route to the right service or treatment page, or back to the team that handled last time.',
                cta: 'Reach the team that handled last time',
              },
            ]}
          />
          <IntentGroup
            label='Considered or weighing'
            tone='teal'
            headline='Visitors who are reading, comparing, and asking real questions.'
            intro='The page has time. It needs to answer the question, place the trust, and earn the next step.'
            rows={[
              {
                icon: FileText,
                name: 'Quote request',
                shape: 'Service page with what is included, what is excluded, and what changes the price — not a generic enquiry form.',
                cta: 'Request a written quote',
              },
              {
                icon: Star,
                name: 'Consultation request',
                shape: 'Treatment page with what the consult covers, what to bring, and who they will see — no clinical promises.',
                cta: 'Request a consultation',
              },
              {
                icon: Compass,
                name: 'Comparison visitor',
                shape: 'Service page that answers the comparison questions a competitor page tends to hide.',
                cta: 'Save for later · light callback option',
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   6 — HANDLING EDGE ("Where the website ends")
   ============================================================================ */

function SectionHandlingEdge() {
  const carries = [
    { k: 'Source page', v: 'Service or treatment page' },
    { k: 'Service area', v: 'Named local area' },
    { k: 'Asked about', v: 'Quote / consultation / callback request' },
    { k: 'Channel', v: 'Form or call path' },
    { k: 'Received', v: 'During working hours' },
  ];
  const targets = [
    {
      name: 'Lead Response & Handling Systems',
      note: 'First reply, missed-call recovery, the person who answers.',
      href: ROUTES.services.leadResponseHandling,
      tone: 'amber' as SignalTone,
    },
    {
      name: 'Follow-Up & CRM Systems',
      note: 'Paced chasing of quotes, consultation reminders, returning visits.',
      href: ROUTES.services.followUpCrm,
      tone: 'green' as SignalTone,
    },
    {
      name: 'Reputation & Review Systems',
      note: 'Review collection after good work, placed back on the pages that need it.',
      href: ROUTES.services.reputationReviewSystems,
      tone: 'purple' as SignalTone,
    },
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Where the website ends'
          tone='teal'
          align='center'
          title='The website does not run the business.'
          titleMuted='It hands the enquiry forward, with context attached.'
          intro='First reply, sequenced follow-up, reviews — those belong to other systems. The website’s job is to deliver the enquiry already explained, so the next step does not start cold.'
        />

        <div className='grid items-stretch gap-5 lg:grid-cols-2'>
          {/* carries forward */}
          <div className='mw-card p-7 sm:p-8'>
            <span className='mw-eyebrow text-[#0e7d8c]'>What the page carries forward</span>
            <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '20px' }}>
              Context, not just a contact.
            </h3>
            <p className='mt-2 text-[#4c5e6f]' style={{ fontSize: '14px' }}>
              Each enquiry arrives with the page, the area, the service or treatment, and the
              visitor’s own words — so the first reply already fits.
            </p>
            <div className='mt-6 flex flex-col gap-2.5'>
              {carries.map(row => (
                <div key={row.k} className='flex items-center gap-3 rounded-xl border border-[#eef3f6] bg-[#f9fcfd] px-4 py-3'>
                  <SignalDot tone='cyan' glow='bloom' size={6} />
                  <span className='w-28 shrink-0 uppercase tracking-[0.08em] text-[#6f8190]' style={{ fontSize: '10.5px', fontWeight: 700 }}>
                    {row.k}
                  </span>
                  <span className='text-[#08111f]' style={{ fontSize: '13px' }}>
                    {row.v}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* hands to */}
          <div className='flex flex-col gap-4 rounded-[var(--mw-radius-panel)] border border-[#e6eef3] bg-white p-7 sm:p-8' style={{ boxShadow: 'var(--mw-ring-ambient), var(--mw-elev-2)' }}>
            <div>
              <span className='mw-eyebrow text-[#0f7a57]'>What the website hands to</span>
              <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '20px' }}>
                The right next step — already briefed.
              </h3>
              <p className='mt-2 text-[#4c5e6f]' style={{ fontSize: '14px' }}>
                These are separate offers in their own right. The website’s job is to deliver the
                enquiry cleanly into whichever one fits.
              </p>
            </div>
            <div className='flex flex-col gap-3'>
              {targets.map(t => {
                const hex = HEX[t.tone];
                return (
                  <Link
                    key={t.name}
                    href={t.href}
                    className='group flex items-start gap-3.5 rounded-2xl border border-[#e6eef3] bg-[#f9fcfd] p-4 transition-colors hover:bg-white'
                  >
                    <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-xl' style={{ background: `${hex}16` }}>
                      <ArrowUpRight size={16} style={{ color: hex }} />
                    </span>
                    <span className='min-w-0 flex-1'>
                      <span className='block text-[#08111f]' style={{ fontSize: '14.5px', fontWeight: 700 }}>
                        {t.name}
                      </span>
                      <span className='block text-[#4c5e6f]' style={{ fontSize: '12.5px' }}>
                        {t.note}
                      </span>
                    </span>
                    <ArrowRight size={15} className='mt-1 shrink-0 text-[#9cb0bd] transition-transform group-hover:translate-x-0.5' />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <p className='mx-auto max-w-[62ch] text-center italic text-[#6f8190]' style={{ fontSize: '15px' }}>
          The Smart Website System ends where the next conversation begins — and starts that
          conversation already briefed.
        </p>
      </Container>
    </section>
  );
}

/* ============================================================================
   7 — LOCAL TRUST (trust placement, page-moment artifact)
   ============================================================================ */

function PageMomentArtifact() {
  return (
    <div className='relative'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -inset-5 rounded-[28px]'
        style={{ background: 'radial-gradient(55% 55% at 50% 35%, rgba(155,125,224,0.12), transparent 70%)' }}
      />
      <div className='relative overflow-hidden rounded-[20px] border border-[#e6eef3] bg-white' style={{ boxShadow: 'var(--mw-elev-float)' }}>
        {/* chrome */}
        <div className='flex items-center gap-2 border-b border-[#eef3f6] bg-[#f6fafc] px-4 py-3'>
          <span className='ml-0 flex flex-1 items-center gap-1.5 truncate rounded-md border border-[#e6eef3] bg-white px-3 py-1 text-[#6f8190]' style={{ fontSize: '11px' }}>
            <ShieldCheck size={11} className='text-[#21b985]' />
            /treatments/consultation
          </span>
          <span className='shrink-0 uppercase tracking-[0.08em] text-[#9cb0bd]' style={{ fontSize: '9.5px', fontWeight: 700 }}>
            Scrolled mid-page · the click moment
          </span>
        </div>

        <div className='grid gap-5 p-5 sm:p-6 md:grid-cols-[1.3fr_0.7fr]'>
          {/* reading column */}
          <div>
            <span className='mw-eyebrow text-[#0e7d8c]'>Specialist consultation</span>
            <h3 className='mt-2.5 text-[#08111f]' style={{ fontSize: '18px' }}>
              What the first consultation covers — and what you can ask.
            </h3>
            <div className='mt-3 flex flex-col gap-1.5' aria-hidden='true'>
              <span className='h-1.5 w-full rounded-full bg-[#eef3f6]' />
              <span className='h-1.5 w-11/12 rounded-full bg-[#eef3f6]' />
              <span className='h-1.5 w-4/5 rounded-full bg-[#eef3f6]' />
            </div>

            {/* inline review card */}
            <div className='mt-4 rounded-xl border border-[#f0e2c2] bg-[#fdf9ee] p-4'>
              <div className='flex items-center justify-between'>
                <Stars size={13} />
                <span className='rounded-full bg-white px-2 py-0.5 text-[#9a6f12]' style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.06em' }}>
                  Verified
                </span>
              </div>
              <p className='mt-2 text-[#08111f]' style={{ fontSize: '12.5px', lineHeight: 1.6 }}>
                Recent practice-experience review placed beside the CTA — sits where the visitor is
                deciding whether to act.
              </p>
              <p className='mt-1.5 text-[#6f8190]' style={{ fontSize: '11px' }}>
                — Recent practice-experience review
              </p>
            </div>

            <div className='mt-3 flex flex-col gap-1.5' aria-hidden='true'>
              <span className='h-1.5 w-full rounded-full bg-[#eef3f6]' />
              <span className='h-1.5 w-3/4 rounded-full bg-[#eef3f6]' />
            </div>

            {/* credential chips */}
            <div className='mt-3 flex flex-wrap gap-1.5'>
              {[
                { icon: ShieldCheck, label: 'Registered practice' },
                { icon: ShieldCheck, label: 'Cover in place' },
                { icon: Star, label: 'Credentials placed near the CTA' },
              ].map(c => {
                const Icon = c.icon;
                return (
                  <span key={c.label} className='inline-flex items-center gap-1 rounded-full border border-[#e6eef3] bg-white px-2 py-0.5 text-[#0e7d8c]' style={{ fontSize: '10.5px', fontWeight: 600 }}>
                    <Icon size={10} />
                    {c.label}
                  </span>
                );
              })}
            </div>

            <p className='mt-3 inline-flex items-center gap-1.5 text-[#08111f]' style={{ fontSize: '12px' }}>
              <MapPin size={12} className='text-[#0f7a57]' />
              Named local area covered — <span className='text-[#4c5e6f]'>appointment availability shown</span>
            </p>
          </div>

          {/* CTA column */}
          <div className='rounded-xl border border-[#eef3f6] bg-[#f9fcfd] p-4'>
            <span className='block uppercase tracking-[0.08em] text-[#9cb0bd]' style={{ fontSize: '9.5px', fontWeight: 700 }}>
              Take the next step
            </span>
            <span className='mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#061323] px-4 py-2.5 text-white' style={{ fontSize: '12.5px', fontWeight: 600 }}>
              Request a consultation
              <ArrowRight size={13} />
            </span>
            <p className='mt-3 text-[#4c5e6f]' style={{ fontSize: '11.5px', lineHeight: 1.6 }}>
              A coordinator replies during working hours, with what you can expect at the consult. No
              clinical promises before the consultation.
            </p>
            <div className='mt-3 flex flex-col gap-1.5'>
              <span className='rounded-md border border-[#e6eef3] bg-white px-2.5 py-1.5 text-[#9cb0bd]' style={{ fontSize: '11px' }}>
                Your name
              </span>
              <span className='rounded-md border border-[#e6eef3] bg-white px-2.5 py-1.5 text-[#9cb0bd]' style={{ fontSize: '11px' }}>
                How to reach you
              </span>
            </div>
            <p className='mt-3 inline-flex items-center gap-1.5 text-[#08111f]' style={{ fontSize: '11px' }}>
              <PhoneCall size={11} className='text-[#0f7a57]' />
              Call the practice <span className='text-[#9cb0bd]'>· working hours</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLocalTrust() {
  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Trust where the decision happens'
          tone='purple'
          align='center'
          title='Most trust is built'
          titleMuted='before anyone fills in a form.'
          intro='Reviews on a separate page, a credential line in the footer, and a generic contact form leave the visitor doing the trust work themselves. A serious page places the proof beside the question, quietly — and the visitor never has to look for it.'
        />

        <PageMomentArtifact />

        <p className='mx-auto max-w-[68ch] text-center text-[#4c5e6f]' style={{ fontSize: '15px' }}>
          Local visibility lives in its own offer —{' '}
          <Link href={ROUTES.services.localSeoAuthority} className='font-semibold text-[#08111f] underline decoration-[#cdd9e1] underline-offset-4 hover:decoration-[#14b8a6]'>
            Local SEO Authority Systems
          </Link>{' '}
          — and review collection is the work of{' '}
          <Link href={ROUTES.services.reputationReviewSystems} className='font-semibold text-[#08111f] underline decoration-[#cdd9e1] underline-offset-4 hover:decoration-[#9b7de0]'>
            Reputation &amp; Review Systems
          </Link>
          . Both feed the website. The placement on the page belongs here.
        </p>
      </Container>
    </section>
  );
}

/* ============================================================================
   8 — IMPLEMENTATION (6 build pathways)
   ============================================================================ */

function SectionImplementation() {
  const pathways: { n: string; name: string; use: string; fit: string; href: string }[] = [
    {
      n: '01',
      name: 'WordPress Development',
      use: 'Custom build on the platform most service businesses and clinics already run.',
      fit: 'When the site needs serious page work, custom blocks, and long-term editability.',
      href: ROUTES.implementation.wordpressDevelopment,
    },
    {
      n: '02',
      name: 'Elementor',
      use: 'Refined Elementor builds where the team needs to keep editing pages themselves.',
      fit: 'When in-house editing is part of the operating reality, not a fight against the builder.',
      href: ROUTES.implementation.elementor,
    },
    {
      n: '03',
      name: 'Bricks Builder',
      use: 'Bricks builds where performance, clean markup, and structured design matter.',
      fit: 'When the existing site is slow, fragile, or weighed down by past plugins.',
      href: ROUTES.implementation.bricksBuilder,
    },
    {
      n: '04',
      name: 'Divi 5',
      use: 'Divi 5 rebuilds for sites already on Divi that need a serious page-craft pass.',
      fit: 'When the team is on Divi and the platform decision is not the question.',
      href: ROUTES.implementation.divi5,
    },
    {
      n: '05',
      name: 'WooCommerce',
      use: 'Service-led WooCommerce where bookings, deposits, or simple products belong with the site.',
      fit: 'When payments, deposits, or product lines sit alongside the service or treatment work.',
      href: ROUTES.implementation.woocommerce,
    },
    {
      n: '06',
      name: 'Website Redesign / System Rebuild',
      use: 'Full rebuild of an existing site that has outgrown its structure and trust.',
      fit: 'When the current site is the bottleneck and the work needs to start over cleanly.',
      href: ROUTES.implementation.websiteRedesignSystemRebuild,
    },
  ];

  return (
    <section className='section bg-page-mist'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='How a Smart Website System is built'
          tone='teal'
          align='center'
          title='Six implementation pathways'
          titleMuted='— chosen for the work, not the brochure.'
          intro='These are how the website system gets built or rebuilt — not the point of the page. We choose based on what the team already edits, what the existing site can keep, and what the next two years of editing actually look like.'
        />

        <div className='mw-card overflow-hidden'>
          {/* header row (md+) */}
          <div className='hidden grid-cols-[64px_1.1fr_1.4fr] gap-6 border-b border-[#eef3f6] px-6 py-3.5 md:grid'>
            <span className='uppercase tracking-[0.1em] text-[#9cb0bd]' style={{ fontSize: '10.5px', fontWeight: 700 }}>No.</span>
            <span className='uppercase tracking-[0.1em] text-[#9cb0bd]' style={{ fontSize: '10.5px', fontWeight: 700 }}>Pathway</span>
            <span className='uppercase tracking-[0.1em] text-[#9cb0bd]' style={{ fontSize: '10.5px', fontWeight: 700 }}>What we build with it</span>
          </div>

          {pathways.map((p, i) => (
            <Link
              key={p.n}
              href={p.href}
              className={cn(
                'group grid gap-3 px-6 py-5 transition-colors hover:bg-[#f6fafc] md:grid-cols-[64px_1.1fr_1.4fr] md:items-center md:gap-6',
                i !== pathways.length - 1 && 'border-b border-[#eef3f6]'
              )}
            >
              <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-[#e6eef3] text-[#6f8190]' style={{ fontSize: '12.5px', fontWeight: 700 }}>
                {p.n}
              </span>
              <span className='flex items-center gap-2 text-[#08111f]' style={{ fontSize: '15.5px', fontWeight: 700 }}>
                {p.name}
                <ArrowRight size={14} className='text-[#9cb0bd] transition-transform group-hover:translate-x-0.5 group-hover:text-[#14b8a6]' />
              </span>
              <span className='flex flex-col gap-2'>
                <span className='text-[#4c5e6f]' style={{ fontSize: '13.5px' }}>{p.use}</span>
                <span className='inline-flex items-start gap-2 text-[#6f8190]' style={{ fontSize: '12.5px' }}>
                  <SignalDot tone='cyan' glow='flat' size={6} className='mt-1.5' />
                  <span><span className='font-semibold text-[#0e7d8c]'>When it fits — </span>{p.fit}</span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        <p className='mx-auto max-w-[60ch] text-center italic text-[#6f8190]' style={{ fontSize: '15px' }}>
          The builder underneath is the implementation. The website system is the work above it.
        </p>
      </Container>
    </section>
  );
}

/* ============================================================================
   9 — AFTER LAUNCH (dark)
   ============================================================================ */

function SectionAfterLaunch() {
  const items = [
    {
      n: 'AFTER 01',
      title: 'Visitors understand the offer faster',
      body: 'Service and treatment pages answer the real question on first read — fewer return visits before they decide.',
    },
    {
      n: 'AFTER 02',
      title: 'Enquiries arrive with context',
      body: 'The page, area, and reason travel with each contact, so the first reply already fits.',
    },
    {
      n: 'AFTER 03',
      title: 'Trust is easier to find',
      body: 'Reviews, credentials, and area cues sit beside the call to action, not on a side page nobody opens.',
    },
    {
      n: 'AFTER 04',
      title: 'Local relevance is real, not implied',
      body: 'Service-area cues and consistent listings make nearby visitors recognise the business sooner.',
    },
    {
      n: 'AFTER 05',
      title: 'Improvements get easier',
      body: 'A well-structured page system is something the team can read, edit, and add to from real working weeks.',
    },
    {
      n: 'AFTER 06',
      title: 'The website stops being the bottleneck',
      body: 'Conversations with the team can be about the work — not about why the website is in the way.',
    },
  ];

  return (
    <section className='section relative overflow-hidden bg-page-dark'>
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0'
        style={{ background: 'radial-gradient(80% 60% at 80% 0%, rgba(53,199,216,0.12) 0%, transparent 55%)' }}
      />
      <div className='mw-grid-overlay pointer-events-none absolute inset-0 opacity-[0.03]' aria-hidden='true' />

      <Container className='section-stack relative'>
        <SectionHead
          eyebrow='What changes after launch'
          tone='cyan'
          dark
          title='After launch,'
          titleMuted='the website behaves differently.'
          intro='We do not promise lead numbers or conversion percentages — every business reads them differently. What we do commit to is a website that earns its place in the working week.'
        />

        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {items.map(it => (
            <div key={it.n} className='mw-glass-dark flex flex-col gap-3 p-6'>
              <span className='mw-eyebrow text-[#35c7d8]'>{it.n}</span>
              <h3 className='text-white' style={{ fontSize: '17px', letterSpacing: '-0.02em' }}>
                {it.title}
              </h3>
              <p className='text-white/60' style={{ fontSize: '13.5px' }}>
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   10 — FIT
   ============================================================================ */

function SectionFit() {
  const fitFor = [
    'An established service business or specialist clinic with real activity already',
    'Service or treatment pages are central to how visitors decide',
    'The current website feels thin, unclear, dated, or quietly disconnected from how the business works',
    'Local trust and area relevance matter to who actually buys',
    'The owner wants real page structure, not just a prettier visual layer',
    'Future improvement matters as much as the launch',
  ];
  const fitNotFor = [
    'A cheapest-possible brochure site or a one-page quick build',
    'A purely visual refresh with no business context behind it',
    'Anyone shopping for guaranteed rankings or quick traffic promises',
    'A tool, chatbot, or demo as the actual product',
    'Healthcare buyer needing EMR, clinical compliance, or treatment-outcome claims',
  ];

  return (
    <section className='section bg-page-white'>
      <Container className='section-stack'>
        <SectionHead
          eyebrow='Fit'
          tone='green'
          align='center'
          title='Built for established service businesses and specialist clinics.'
          intro='We are honest both ways — who this work is for, and who it isn’t. Saying so early saves time on both sides.'
        />

        <div className='grid gap-5 lg:grid-cols-2'>
          <div className='mw-card p-7 sm:p-8'>
            <span className='mw-eyebrow text-[#0f7a57]'>Strong fit</span>
            <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '20px' }}>
              When this is the right work
            </h3>
            <ul className='mt-5 flex flex-col gap-3.5'>
              {fitFor.map(item => (
                <li key={item} className='flex items-start gap-3 text-[#4c5e6f]' style={{ fontSize: '14.5px' }}>
                  <Check size={16} className='mt-0.5 shrink-0 text-[#0f7a57]' />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className='rounded-[var(--mw-radius-panel)] border border-[#e6eef3] bg-[#f9fcfd] p-7 sm:p-8'>
            <span className='mw-eyebrow text-[#9cb0bd]'>Probably not right</span>
            <h3 className='mt-3 text-[#08111f]' style={{ fontSize: '20px' }}>
              When to say so early
            </h3>
            <ul className='mt-5 flex flex-col gap-3.5'>
              {fitNotFor.map(item => (
                <li key={item} className='flex items-start gap-3 text-[#6f8190]' style={{ fontSize: '14.5px' }}>
                  <Minus size={16} className='mt-0.5 shrink-0 text-[#9cb0bd]' />
                  {item}
                </li>
              ))}
            </ul>
            <p className='mt-5 border-t border-[#eef3f6] pt-4 text-[#6f8190]' style={{ fontSize: '13px' }}>
              Tell us early — it saves time on both sides.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   11 — FAQ
   ============================================================================ */

function SectionFaq() {
  return (
    <section className='section bg-page-mist'>
      <Container>
        <div className='grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16'>
          <SectionHead
            eyebrow='Practical questions'
            tone='cyan'
            title='Smart Website Systems,'
            titleMuted='in plain answers.'
            intro='The questions service businesses and clinics tend to ask before committing — answered without hype, guarantees, or sales pressure.'
          />
          <FaqAccordion items={SWS_FAQS} />
        </div>
      </Container>
    </section>
  );
}

/* ============================================================================
   12 — CTA (dark panel)
   ============================================================================ */

function SectionCta() {
  const markers: { label: string; tone: SignalTone }[] = [
    { label: 'Clarity', tone: 'cyan' },
    { label: 'Trust', tone: 'amber' },
    { label: 'Next step', tone: 'green' },
  ];

  return (
    <section id='cta' className='section bg-page-white'>
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

          <div className='relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
            <div className='flex flex-col gap-6'>
              <Eyebrow tone='cyan' dark>
                Start with a review
              </Eyebrow>
              <h2 className='text-white'>
                Start with a website system review,{' '}
                <span className='text-white/45'>not a quote.</span>
              </h2>
              <p className='max-w-[52ch] text-white/65' style={{ fontSize: '17px' }}>
                We read the website, the service or treatment pages, the local trust, the enquiry
                paths, and the proof placement — together, in a working session. You walk away with a
                short list of what to fix first, whether you work with us afterwards or not.
              </p>
              <div className='flex flex-wrap items-center gap-3 pt-1'>
                <Link
                  href={SITE.cta.href}
                  className='inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 font-medium text-[#08111f] transition-colors hover:bg-[#eaf6f8]'
                  style={{ fontSize: '14.5px' }}
                >
                  Review my website system
                  <SignalDot tone='cyan' glow='bloom' />
                </Link>
              </div>
              <p className='text-white/45' style={{ fontSize: '13px' }}>
                No hard sell. No automated audit. No ranking guarantee.
              </p>
            </div>

            {/* snapshot illustration */}
            <div className='relative'>
              <div className='mw-glass-dark p-6'>
                <span className='mw-eyebrow text-white/45'>What the review marks up</span>
                <div className='mt-5 flex flex-col gap-3'>
                  {markers.map(m => {
                    const hex = HEX[m.tone];
                    return (
                      <div key={m.label} className='flex items-center gap-3 rounded-xl bg-white/[0.04] px-4 py-3'>
                        <SignalDot tone={m.tone} glow='bloom' />
                        <span className='uppercase tracking-[0.12em] text-white/80' style={{ fontSize: '11.5px', fontWeight: 700 }}>
                          {m.label}
                        </span>
                        <span className='ml-auto h-1.5 flex-1 max-w-[90px] rounded-full' style={{ background: `${hex}55` }} />
                      </div>
                    );
                  })}
                </div>
                <div className='mt-4 flex items-center gap-2 border-t border-white/10 pt-4 text-white/55' style={{ fontSize: '12.5px' }}>
                  <Check size={14} className='text-[#21b985]' />
                  Ranked: what to fix first, in plain language.
                </div>
              </div>
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

export function SmartWebsiteSystemsScreen() {
  return (
    <>
      <SectionHero />
      <SectionWhyFails />
      <SectionWhatItIncludes />
      <SectionPageCraft />
      <SectionBuyingPaths />
      <SectionHandlingEdge />
      <SectionLocalTrust />
      <SectionImplementation />
      <SectionAfterLaunch />
      <SectionFit />
      <SectionFaq />
      <SectionCta />
    </>
  );
}
