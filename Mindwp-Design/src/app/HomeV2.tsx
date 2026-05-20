/**
 * HomeV2.tsx — MindWP design-sandbox homepage (long-form, 14 sections)
 *
 * Second consolidated homepage variant per the 14-section v2 plan. Same design
 * concept as Home.tsx (raw <section> JSX, inline style, glow halos, signal
 * palette) but expanded content and a different tone allocation:
 *
 *  Section arc (v2):
 *   01  Hero — "Work Comes In. Too Much Slips Away."         (dark, gradient-hero)
 *   02  Leak Map — 5-state horizontal path + SVG rail        (mist)
 *   03  Website as Public Control Point                      (light + STRONG dark inner panel)
 *   04  Normal vs Connected                                  (white)
 *   05  What Conversion-Focused Actually Means (5 mechanisms)(mist, short bridge)
 *   06  Connected Handling Path                              (gradient-section-teal + SVG rail)
 *   07  Five Protections, One Connected Path  — DARK ANCHOR  (gradient-section-dark + grid texture)
 *   08  What Changes (positive state)                        (gradient-section-mist)
 *   09  How This Shows Up — service + clinic                 (gradient-section-teal)
 *   10  Selected Website-System Surfaces                     (white + dark inner panels)
 *   11  Fit / Not Fit                                        (mist)
 *   12  Practical Delivery (credibility)                     (white, short)
 *   13  FAQ                                                  (mist)
 *   14  Final Diagnostic CTA                                 (white section bg, dark inner container)
 *
 *  Body dark-bg count: 1 (Section 7 only) of the 2-max budget.
 *  Sections 3 + 10 use STRONG dark inner panels inside light surfaces — depth
 *  without darkness.
 *
 *  Voice + content per /Users/zeeshansadiq/Projects/Mindwp/docs/WRITING.md and
 *  /Users/zeeshansadiq/Projects/Mindwp/docs/FOUNDATION.md. Active 5-system
 *  model. Working-day objects throughout. No fake metrics or treatment claims.
 */
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Hammer,
  Handshake,
  HeartPulse,
  History,
  Inbox,
  Layers,
  type LucideIcon,
  MapPin,
  Minus,
  PhoneCall,
  PhoneOff,
  Plus,
  Repeat,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';

// ============================================================================
// SECTION 01 — Hero
// ============================================================================

const HERO_SIGNALS: ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  note: string;
  status: 'leaking' | 'unowned';
}> = [
  { icon: Search, label: 'Local search', note: 'Postcode N6 — page 3', status: 'unowned' },
  { icon: FileText, label: 'Service page visit', note: 'Bathrooms — 02:14 dwell', status: 'unowned' },
  { icon: Inbox, label: 'Form enquiry', note: 'Sat 09:14 — unread', status: 'leaking' },
  { icon: PhoneOff, label: 'Missed call', note: '11:42 — no callback', status: 'leaking' },
  { icon: Clock, label: 'Consultation request', note: 'Today — nobody owns it', status: 'unowned' },
];

function HeroSignalSurface() {
  const leakingCount = HERO_SIGNALS.filter(s => s.status === 'leaking').length;
  const unownedCount = HERO_SIGNALS.filter(s => s.status === 'unowned').length;

  return (
    <div className="relative w-full">
      <div className="rounded-2xl border border-white/[0.18] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
          <div>
            <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>
              Signal Surface
            </div>
            <div className="text-white mt-1" style={{ fontSize: '21px', fontWeight: 600, letterSpacing: '-0.01em' }}>
              What your business looks like today
            </div>
          </div>
          <div className="text-right">
            <div
              className="text-white/40 mb-0.5"
              style={{ fontSize: '9.5px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
            >
              Signals
            </div>
            <div className="text-white" style={{ fontSize: '34px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
              {String(HERO_SIGNALS.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {HERO_SIGNALS.map((s, i) => {
            const Icon = s.icon;
            const isLeaking = s.status === 'leaking';
            return (
              <div
                key={s.label}
                className={`grid grid-cols-12 items-center gap-3 px-4 py-4 rounded-lg border ${
                  isLeaking ? 'border-[#E76F6F]/[0.22] bg-[#E76F6F]/[0.04]' : 'border-white/8 bg-white/[0.02]'
                }`}
              >
                <div className="col-span-1">
                  <span className="text-white/30 tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-1">
                  <div
                    className={`w-9 h-9 rounded-md border flex items-center justify-center ${
                      isLeaking
                        ? 'bg-[#E76F6F]/10 border-[#E76F6F]/[0.28] text-[#E76F6F]'
                        : 'bg-white/[0.06] border-white/14 text-white/80'
                    }`}
                  >
                    <Icon size={15} />
                  </div>
                </div>
                <div className="col-span-7 min-w-0">
                  <div className="text-white truncate" style={{ fontSize: '15.5px', fontWeight: 600 }}>
                    {s.label}
                  </div>
                  <div
                    className={`truncate mt-0.5 ${isLeaking ? 'text-[#E76F6F]/65' : 'text-white/60'}`}
                    style={{ fontSize: '13px' }}
                  >
                    {s.note}
                  </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  {isLeaking ? (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#E76F6F]/12 text-[#E76F6F] border border-[#E76F6F]/[0.28]"
                      style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E76F6F] shadow-[0_0_5px_#E76F6F]" /> LEAKING
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#F4B740]/10 text-[#F4B740] border border-[#F4B740]/25"
                      style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#F4B740]" /> UNOWNED
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 pt-4 border-t border-white/8 grid grid-cols-3 gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]" />
            <span className="text-[#E76F6F]" style={{ fontSize: '12px', fontWeight: 600 }}>
              {leakingCount} leaking
            </span>
          </div>
          <div className="text-white/50 text-center" style={{ fontSize: '12px' }}>
            {unownedCount} unowned
          </div>
          <div className="flex items-center justify-end gap-1.5 text-[#35C7D8]" style={{ fontSize: '12px', fontWeight: 600 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8] animate-pulse" />
            Pulled toward system
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-4 right-12 h-12 rounded-full bg-[#35C7D8]/15 blur-2xl pointer-events-none" />
    </div>
  );
}

function S01Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 20%, #35C7D8 0%, transparent 45%), radial-gradient(ellipse at 95% 90%, #14B8A6 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-36 grid grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span className="text-white/85 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>
              Service Businesses & Specialist Clinics
            </span>
          </div>

          <h1
            className="text-white"
            style={{
              fontSize: 'clamp(48px, 6.4vw, 78px)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.035em',
            }}
          >
            Work Comes In.
            <br />
            <span className="text-white/45">Too Much Slips Away.</span>
          </h1>

          <p className="mt-8 text-white/70 max-w-[560px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            People find you online. They call, fill in forms, request quotes or consultations,
            check reviews, and compare what you do. Some of it turns into booked work or kept
            appointments. Too much disappears between the first click and the next step.
          </p>

          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Request a System Review
              <ArrowRight size={16} />
            </a>
            <a
              href="#leak"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              See where work is slipping
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[
              { label: 'Visibility', color: '#35C7D8' },
              { label: 'Enquiries', color: '#14B8A6' },
              { label: 'Follow-up', color: '#F4B740' },
              { label: 'Proof', color: '#21B985' },
            ].map(c => (
              <span
                key={c.label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }}
                />
                <span className="text-white/80" style={{ fontSize: '12.5px', fontWeight: 500 }}>
                  {c.label}
                </span>
              </span>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 relative">
          <div className="absolute -inset-8 rounded-full bg-[#35C7D8]/[0.07] blur-3xl pointer-events-none" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-[#14B8A6]/[0.08] blur-3xl pointer-events-none" />
          <HeroSignalSurface />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 02 — Leak Map (5-state horizontal path with SVG rail)
// "The business is working. The system around it is leaking."
// ============================================================================

const LEAK_STATES: ReadonlyArray<{
  label: string;
  note: string;
  state: 'leak' | 'weak' | 'ok';
  main?: boolean;
}> = [
  { label: 'Discovery', note: 'Searched and found', state: 'ok' },
  { label: 'Capture', note: 'Form or call submitted', state: 'ok' },
  { label: 'Response', note: 'Hours pass before a reply', state: 'leak', main: true },
  { label: 'Follow-up', note: 'Nobody owns the chase', state: 'weak' },
  { label: 'Visibility', note: 'Owner cannot see what happened', state: 'weak' },
];

function S02Leak() {
  return (
    <section id="leak" className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Where work usually slips
            </div>
            <h2
              className="text-[#08111F]"
              style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              The business is working.
              <br />
              <span className="text-[#4C5E6F]">The system around it is leaking.</span>
            </h2>
            <p
              className="mt-6 text-[#6F8190] max-w-[480px]"
              style={{ fontSize: '15.5px', lineHeight: 1.7 }}
            >
              Not one dramatic failure. A steady drip across the path from search to a job done
              or an appointment kept. Each step works on its own. The handoffs between them do not.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              Traffic does not help if the path after it is unclear. The leak below is what most
              service businesses and specialist clinics look like before connected handling is
              in place.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-[#E6EEF3] bg-white p-6 lg:p-10 shadow-[0_8px_48px_rgba(8,17,31,0.06)]">
          <svg
            className="pointer-events-none absolute inset-x-10 top-[7rem] hidden lg:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            style={{ height: '2px' }}
            aria-hidden="true"
          >
            <line x1="2" y1="0.5" x2="98" y2="0.5" stroke="#E6EEF3" strokeWidth="1" />
          </svg>

          <ol className="relative grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-3">
            {LEAK_STATES.map((step, index) => {
              const isMain = !!step.main;
              const stateStyles =
                step.state === 'leak'
                  ? { borderColor: '#E76F6F55', background: '#E76F6F0F' }
                  : step.state === 'weak'
                    ? { borderColor: '#F4B74044', background: '#F6FAFC' }
                    : { borderColor: '#E6EEF3', background: '#F6FAFC' };
              const dotColor = step.state === 'leak' ? '#E76F6F' : step.state === 'weak' ? '#F4B740' : '#21B985';
              return (
                <li
                  key={step.label}
                  className="relative rounded-xl border p-5"
                  style={{
                    ...stateStyles,
                    boxShadow: isMain ? '0 12px 40px rgba(231,111,111,0.18)' : 'none',
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className="uppercase tabular-nums tracking-[0.14em] text-[#6F8190]"
                      style={{ fontSize: '10.5px', fontWeight: 700 }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="size-2 rounded-full"
                      style={{ background: dotColor, boxShadow: isMain ? `0 0 8px ${dotColor}` : 'none' }}
                    />
                  </div>
                  <div
                    className="font-semibold text-[#08111F]"
                    style={{ fontSize: isMain ? '22px' : '16px', letterSpacing: '-0.01em' }}
                  >
                    {step.label}
                  </div>
                  <div
                    className="mt-2"
                    style={{
                      color: isMain ? '#08111F' : '#6F8190',
                      fontSize: isMain ? '14px' : '13px',
                      lineHeight: 1.55,
                    }}
                  >
                    {step.note}
                  </div>
                  {isMain && (
                    <div
                      className="mt-5 flex items-center gap-2 border-t pt-4"
                      style={{ borderColor: '#E76F6F44', color: '#E76F6F', fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}
                    >
                      <span className="size-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_6px_#E76F6F]" />
                      Main leak
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          <div
            className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t pt-6"
            style={{ borderColor: '#E6EEF3' }}
          >
            <span className="text-[#6F8190]" style={{ fontSize: '14px' }}>
              Discovery → Capture →{' '}
              <span className="font-semibold text-[#E76F6F]">Response</span> → Follow-up → Visibility
            </span>
            <span className="text-[#6F8190]" style={{ fontSize: '13.5px' }}>
              Most enquiries die between capture and response.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 03 — Website as Public Control Point / Practice Front Door
// Light section (gradient-section-mist) with STRONG dark inner panel
// ============================================================================

const CONTROL_LAYERS: ReadonlyArray<{
  eyebrow: string;
  title: string;
  accent: string;
  points: ReadonlyArray<string>;
}> = [
  {
    eyebrow: 'Visible layer',
    title: 'The website',
    accent: '#35C7D8',
    points: [
      'Service, treatment, or procedure pages',
      'Trust signals where decisions form',
      'Clear next step for each visitor or patient',
      'Local and practice relevance',
    ],
  },
  {
    eyebrow: 'Handling layer',
    title: 'Around the website',
    accent: '#14B8A6',
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
    accent: '#21B985',
    points: [
      'Completed work and patient experience captured as proof',
      'Pages tuned where they leak',
      'Local signals aligned with the website',
      'Reviews requested at the right time',
    ],
  },
];

function S03ControlPoint() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #F6FAFC 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Website as control point
            </div>
            <h2
              className="text-[#08111F]"
              style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}
            >
              Not just a page.
              <br />
              <span className="text-[#4C5E6F]">The visible front door.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              For a service business it is the public control point. For a specialist clinic it
              is the practice front door. Either way, it sits where search, trust, service or
              treatment clarity, enquiry or consultation capture, response, follow-up, and proof
              meet.
            </p>
          </div>
        </div>

        {/* Dark inner panel doing the visual work inside a light section */}
        <div className="relative overflow-hidden rounded-3xl border border-[#0E2740]/30 bg-gradient-to-br from-[#061323] to-[#103E5A] p-8 lg:p-14 shadow-[0_24px_64px_rgba(8,17,31,0.28),0_0_40px_rgba(53,199,216,0.06)]">
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
          />
          <div className="relative grid gap-4 lg:grid-cols-3">
            {CONTROL_LAYERS.map(layer => (
              <div
                key={layer.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: layer.accent, boxShadow: `0 0 6px ${layer.accent}` }}
                  />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{ color: layer.accent, fontSize: '10.5px', fontWeight: 700 }}
                  >
                    {layer.eyebrow}
                  </span>
                </div>
                <h3 className="text-white" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                  {layer.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {layer.points.map(p => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-white/65"
                      style={{ fontSize: '14px', lineHeight: 1.55 }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full"
                        style={{ background: layer.accent }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 04 — Normal Website vs Connected Website System
// ============================================================================

const NORMAL_POINTS = [
  'Service pages list what you do',
  'Enquiries land in a shared inbox',
  'Whoever sees it first replies — eventually',
  'Quote or consultation goes out, then nothing depends on memory',
  'Reviews happen when someone remembers',
  'Owner has no view of what is in motion',
];

const CONNECTED_POINTS = [
  'Pages explain the work and the next step',
  'Enquiries land with context, source, and an owner',
  'First response happens fast and is logged',
  'Quote and consultation follow-up runs without anyone chasing',
  'Reviews are requested at the right moment',
  'Owner sees every active enquiry and where it stands',
];

function S04Contrast() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              Built differently
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              A website that exists.
              <br />
              <span className="text-[#4C5E6F]">Or a website that carries the work.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Same pages on the surface. Different operating state behind them. The contrast is
              not pretty design vs ugly design — it is whether the work coming in actually gets
              handled.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#E6EEF3] bg-[#F6FAFC] p-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="uppercase tracking-[0.16em]" style={{ color: '#E76F6F', fontSize: '11.5px', fontWeight: 700 }}>
                Normal website
              </p>
              <span className="w-2 h-2 rounded-full bg-[#E76F6F]" />
            </div>
            <ul className="space-y-3">
              {NORMAL_POINTS.map(p => (
                <li key={p} className="flex items-start gap-3 text-[#4C5E6F]" style={{ fontSize: '14.5px', lineHeight: 1.55 }}>
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[#E76F6F]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#14B8A6]/30 bg-[#14B8A6]/[0.06] p-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="uppercase tracking-[0.16em]" style={{ color: '#14B8A6', fontSize: '11.5px', fontWeight: 700 }}>
                Connected website system
              </p>
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
            </div>
            <ul className="space-y-3">
              {CONNECTED_POINTS.map(p => (
                <li key={p} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.55 }}>
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[#14B8A6]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 05 — What Conversion-Focused Actually Means (5 mechanisms, bridge)
// Mist, short. NEW vs Home.tsx.
// ============================================================================

const MECHANISMS: ReadonlyArray<{ num: string; label: string; note: string }> = [
  { num: '01', label: 'Clarity', note: 'Service, treatment, or procedure pages explain the work in plain language' },
  { num: '02', label: 'Trust', note: 'Proof and signals appear where hesitation usually happens' },
  { num: '03', label: 'Intent-matched CTA', note: 'The next step matches what the visitor came to do' },
  { num: '04', label: 'Handoff', note: 'The enquiry lands with context, source, and owner' },
  { num: '05', label: 'Improvement', note: 'Pages and paths are maintained, not relaunched' },
];

function S05Mechanisms() {
  return (
    <section className="bg-[#F6FAFC] py-20">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              What conversion-focused means
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '44px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Not a slogan.
              <br />
              <span className="text-[#4C5E6F]">Five working mechanisms.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              Conversion-focused is not a label on a redesign. It is what the website system has
              to do to turn a found visitor into a handled enquiry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {MECHANISMS.map(m => (
            <div
              key={m.num}
              className="relative rounded-xl border border-[#E6EEF3] bg-white p-6"
            >
              <span
                className="uppercase tabular-nums tracking-[0.14em]"
                style={{ color: '#14B8A6', fontSize: '10.5px', fontWeight: 700 }}
              >
                {m.num}
              </span>
              <div
                className="mt-2 text-[#08111F]"
                style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em' }}
              >
                {m.label}
              </div>
              <p
                className="mt-2 text-[#6F8190]"
                style={{ fontSize: '13.5px', lineHeight: 1.5 }}
              >
                {m.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — Connected Handling Path (6 stages + SVG rail)
// gradient-section-teal
// ============================================================================

const HANDLING_STAGES: ReadonlyArray<{ num: string; label: string; note: string }> = [
  { num: '01', label: 'Enquiry arrives', note: 'Call, form, message, booking or consultation request' },
  { num: '02', label: 'First response', note: 'Fast, even after hours' },
  { num: '03', label: 'Source recorded', note: 'Where it came from and what they wanted' },
  { num: '04', label: 'Owner sees it', note: 'The right person — not a shared inbox' },
  { num: '05', label: 'Follow-up runs', note: 'Quote chased, reminder sent, status updated' },
  { num: '06', label: 'Proof captured', note: 'Review requested when the work is done' },
];

function S06Handling() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #EAFAF7 0%, #F6FAFC 100%)' }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              After the enquiry
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Six steps.
              <br />
              <span className="text-[#4C5E6F]">One connected path.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Most enquiries do not fail at the website. They fail in the hours and days after.
              Connected handling makes sure the next step is visible, owned, and reliable.
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl bg-white border border-[#E6EEF3] p-6 lg:p-10 shadow-[0_8px_48px_rgba(8,17,31,0.06)]">
          <svg
            className="pointer-events-none absolute inset-x-10 top-[6.5rem] hidden lg:block"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
            style={{ height: '2px' }}
            aria-hidden="true"
          >
            <line
              x1="2"
              y1="0.5"
              x2="98"
              y2="0.5"
              stroke="#14B8A6"
              strokeOpacity="0.3"
              strokeWidth="1"
              strokeDasharray="3 4"
            />
          </svg>
          <ol className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-3">
            {HANDLING_STAGES.map(stage => (
              <li
                key={stage.num}
                className="rounded-xl border border-[#E6EEF3] bg-[#F6FAFC] p-4"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="tabular-nums uppercase tracking-[0.14em]"
                    style={{ color: '#14B8A6', fontSize: '10.5px', fontWeight: 700 }}
                  >
                    {stage.num}
                  </span>
                  <span className="size-1.5 rounded-full bg-[#14B8A6]" />
                </div>
                <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                  {stage.label}
                </div>
                <div className="mt-1 text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>
                  {stage.note}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 07 — Five Protections, One Connected Path (FULL DARK ANCHOR)
// gradient-section-dark + grid texture. Orbital: SWS at hub, 4 around.
// ============================================================================

type ProtectionAccent = 'cyan' | 'teal' | 'amber' | 'green' | 'purple';

const PROTECTION_HUB = {
  icon: Globe,
  name: 'Smart Website Systems',
  label: 'Where decisions form',
  note: 'Service, treatment, and procedure pages carry clarity, trust, and the next step.',
  accent: 'cyan' as ProtectionAccent,
};

const PROTECTION_OUTER: ReadonlyArray<{
  icon: LucideIcon;
  name: string;
  label: string;
  note: string;
  accent: ProtectionAccent;
  position: 'top' | 'right' | 'bottom' | 'left';
}> = [
  {
    icon: MapPin,
    name: 'Local SEO Authority',
    label: 'Found and verified',
    note: 'Nearby customers and patients find the business and verify it before they enquire.',
    accent: 'teal',
    position: 'top',
  },
  {
    icon: PhoneCall,
    name: 'Lead Response & Handling',
    label: 'First response and routing',
    note: 'Calls, forms, and messages reach the right person fast — and do not get lost after hours.',
    accent: 'amber',
    position: 'right',
  },
  {
    icon: Workflow,
    name: 'Follow-Up & CRM',
    label: 'Owned next step',
    note: 'Every enquiry has an owner, a status, and a next step that does not depend on memory.',
    accent: 'green',
    position: 'bottom',
  },
  {
    icon: Star,
    name: 'Reputation & Review',
    label: 'Work becomes proof',
    note: 'Completed work, appointments, and outcomes turn into visible trust at the right time.',
    accent: 'purple',
    position: 'left',
  },
];

const ACCENT_HEX: Record<ProtectionAccent, string> = {
  cyan: '#35C7D8',
  teal: '#14B8A6',
  amber: '#F4B740',
  green: '#21B985',
  purple: '#9B7DE0',
};

function ProtectionCard({
  icon: Icon,
  name,
  label,
  note,
  accent,
  hub,
}: {
  icon: LucideIcon;
  name: string;
  label: string;
  note: string;
  accent: ProtectionAccent;
  hub?: boolean;
}) {
  const color = ACCENT_HEX[accent];
  return (
    <div
      className="relative rounded-2xl border bg-white/[0.04] p-6"
      style={{
        borderColor: hub ? `${color}55` : 'rgba(255,255,255,0.1)',
        boxShadow: hub ? `0 24px 60px rgba(0,0,0,0.32), 0 0 50px ${color}22` : 'none',
        background: hub ? `linear-gradient(180deg, ${color}10, rgba(255,255,255,0.04))` : 'rgba(255,255,255,0.04)',
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border"
          style={{
            borderColor: `${color}45`,
            background: `${color}14`,
            color,
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.12em',
          }}
        >
          <span className="w-1 h-1 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
          {hub ? 'Flagship' : label}
        </span>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${color}14`, border: `1px solid ${color}40`, color }}
        >
          <Icon size={18} />
        </div>
      </div>
      <div
        className="text-white"
        style={{ fontSize: hub ? '20px' : '17px', fontWeight: 700, letterSpacing: '-0.01em' }}
      >
        {name}
      </div>
      {!hub && (
        <div
          className="mt-1"
          style={{ color: `${color}`, fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}
        >
          {label}
        </div>
      )}
      <p className="mt-3 text-white/65" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>
        {note}
      </p>
    </div>
  );
}

function S07FiveProtections() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #061323 0%, #0E2740 100%)',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, #35C7D8 0%, transparent 45%)',
        }}
      />
      <div className="relative max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-white/55 uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Five protections, one path
            </div>
            <h2 className="text-white" style={{ fontSize: '54px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              One website system.
              <br />
              <span className="text-white/55">Four connected protections around it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-white/65" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
              Not five separate services. One connected operating path with five named
              protections — held together by the website system at the centre. None depends on
              someone remembering.
            </p>
          </div>
        </div>

        {/* Desktop constellation — 3x3 grid with SWS centered and 4 outer protections at top/right/bottom/left */}
        <div className="relative hidden lg:block">
          {/* Connecting lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="connect-grad" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#35C7D8" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#35C7D8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#35C7D8" stopOpacity="0.25" />
              </linearGradient>
            </defs>
            {/* vertical line */}
            <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="url(#connect-grad)" strokeWidth="1" strokeDasharray="4 6" />
            {/* horizontal line */}
            <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="url(#connect-grad)" strokeWidth="1" strokeDasharray="4 6" />
          </svg>

          <div className="relative grid grid-cols-3 grid-rows-3 gap-6">
            {/* TOP: Local SEO Authority */}
            <div className="col-start-2 row-start-1 self-end">
              <ProtectionCard
                icon={PROTECTION_OUTER[0].icon}
                name={PROTECTION_OUTER[0].name}
                label={PROTECTION_OUTER[0].label}
                note={PROTECTION_OUTER[0].note}
                accent={PROTECTION_OUTER[0].accent}
              />
            </div>
            {/* LEFT: Reputation & Review */}
            <div className="col-start-1 row-start-2 self-center">
              <ProtectionCard
                icon={PROTECTION_OUTER[3].icon}
                name={PROTECTION_OUTER[3].name}
                label={PROTECTION_OUTER[3].label}
                note={PROTECTION_OUTER[3].note}
                accent={PROTECTION_OUTER[3].accent}
              />
            </div>
            {/* CENTER (HUB): Smart Website Systems */}
            <div className="col-start-2 row-start-2 self-center">
              <ProtectionCard
                icon={PROTECTION_HUB.icon}
                name={PROTECTION_HUB.name}
                label={PROTECTION_HUB.label}
                note={PROTECTION_HUB.note}
                accent={PROTECTION_HUB.accent}
                hub
              />
            </div>
            {/* RIGHT: Lead Response & Handling */}
            <div className="col-start-3 row-start-2 self-center">
              <ProtectionCard
                icon={PROTECTION_OUTER[1].icon}
                name={PROTECTION_OUTER[1].name}
                label={PROTECTION_OUTER[1].label}
                note={PROTECTION_OUTER[1].note}
                accent={PROTECTION_OUTER[1].accent}
              />
            </div>
            {/* BOTTOM: Follow-Up & CRM */}
            <div className="col-start-2 row-start-3 self-start">
              <ProtectionCard
                icon={PROTECTION_OUTER[2].icon}
                name={PROTECTION_OUTER[2].name}
                label={PROTECTION_OUTER[2].label}
                note={PROTECTION_OUTER[2].note}
                accent={PROTECTION_OUTER[2].accent}
              />
            </div>
          </div>
        </div>

        {/* Mobile vertical path */}
        <div className="relative space-y-3 lg:hidden">
          <ProtectionCard
            icon={PROTECTION_OUTER[0].icon}
            name={PROTECTION_OUTER[0].name}
            label={PROTECTION_OUTER[0].label}
            note={PROTECTION_OUTER[0].note}
            accent={PROTECTION_OUTER[0].accent}
          />
          <ProtectionCard
            icon={PROTECTION_HUB.icon}
            name={PROTECTION_HUB.name}
            label={PROTECTION_HUB.label}
            note={PROTECTION_HUB.note}
            accent={PROTECTION_HUB.accent}
            hub
          />
          <ProtectionCard
            icon={PROTECTION_OUTER[1].icon}
            name={PROTECTION_OUTER[1].name}
            label={PROTECTION_OUTER[1].label}
            note={PROTECTION_OUTER[1].note}
            accent={PROTECTION_OUTER[1].accent}
          />
          <ProtectionCard
            icon={PROTECTION_OUTER[2].icon}
            name={PROTECTION_OUTER[2].name}
            label={PROTECTION_OUTER[2].label}
            note={PROTECTION_OUTER[2].note}
            accent={PROTECTION_OUTER[2].accent}
          />
          <ProtectionCard
            icon={PROTECTION_OUTER[3].icon}
            name={PROTECTION_OUTER[3].name}
            label={PROTECTION_OUTER[3].label}
            note={PROTECTION_OUTER[3].note}
            accent={PROTECTION_OUTER[3].accent}
          />
        </div>

        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <div className="text-white/55" style={{ fontSize: '14px' }}>
            Most businesses and practices already have parts of this. The work is connecting them.
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-white pb-1"
            style={{ fontSize: '13.5px', fontWeight: 600 }}
          >
            Review my website system
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 08 — What Changes (positive states)
// gradient-section-mist. Green/teal cards.
// ============================================================================

const POSITIVE_STATES = [
  'Enquiries land somewhere useful, not in a shared inbox',
  'First response happens fast, even after hours',
  'Every active enquiry has an owner and a status',
  'Quote and consultation follow-up does not depend on memory',
  'Reviews are requested at the right moment, not chased later',
  'Owner sees what came in, what got handled, and what is still moving',
];

function S08PositiveState() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #F6FAFC 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              What changes
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Less leakage.
              <br />
              <span className="text-[#4C5E6F]">More work actually handled.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              The visible change is calm: fewer dropped enquiries, fewer chased quotes, fewer
              review requests forgotten. The harder change is that the owner can finally see
              what the business or practice is doing day to day.
            </p>
          </div>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {POSITIVE_STATES.map(state => (
            <li
              key={state}
              className="flex items-start gap-3 rounded-xl border p-5"
              style={{
                borderColor: '#14B8A640',
                background: '#14B8A60D',
              }}
            >
              <span
                className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full"
                style={{ background: '#14B8A640', color: '#14B8A6' }}
              >
                <CheckCircle2 size={14} strokeWidth={2} />
              </span>
              <span className="text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.5 }}>
                {state}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — How This Shows Up (service business + specialist clinic)
// gradient-section-teal
// ============================================================================

const SCENARIOS = [
  {
    icon: Hammer,
    label: 'Illustrative scenario · Service business',
    audience: 'Service business (e.g. roofing or HVAC)',
    week: 'Storm passes. The phone does not stop.',
    beats: [
      'Search traffic spikes overnight. The website shows the right service area and a clear next step.',
      'Form quotes pile up while crews are still out on jobs.',
      'Missed calls trigger a fast acknowledgement instead of going cold.',
      'Each quote has an owner, a follow-up reminder, and a visible status.',
      'Once the job is done, a review request goes out at the right moment.',
    ],
    tone: '#F4B740',
  },
  {
    icon: HeartPulse,
    label: 'Illustrative scenario · Specialist clinic',
    audience: 'Specialist clinic (e.g. dental implants or dermatology)',
    week: 'A patient researches their treatment options.',
    beats: [
      'The procedure page explains what the treatment involves and what to expect.',
      'A consultation request lands with practice context, not just a name.',
      'The right team member sees it without it sitting in a shared inbox.',
      'Pre-appointment follow-up does not depend on someone remembering.',
      'After the appointment, the practice front door earns its next review.',
    ],
    tone: '#9B7DE0',
  },
];

function S09Scenarios() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #EAFAF7 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              How this shows up
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              In service businesses.
              <br />
              <span className="text-[#4C5E6F]">In specialist clinics.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Two working days. Different industries, same operating problem — and the same
              connected handling around the website. Names of work change. The shape of the
              leak does not.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {SCENARIOS.map(s => {
            const Icon = s.icon;
            return (
              <article
                key={s.audience}
                className="rounded-2xl border bg-white p-7 lg:p-9 shadow-[0_8px_48px_rgba(8,17,31,0.05)]"
                style={{ borderColor: `${s.tone}30` }}
              >
                <div
                  className="absolute h-[3px] -mt-7 -ml-7 -mr-7"
                  style={{ width: 'calc(100% + 56px)', background: `linear-gradient(90deg, ${s.tone}, ${s.tone}22)` }}
                />
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ background: `${s.tone}18`, border: `1px solid ${s.tone}38`, color: s.tone }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>
                      {s.label}
                    </div>
                    <div className="text-[#08111F]" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.01em' }}>
                      {s.audience}
                    </div>
                  </div>
                </div>

                <div
                  className="p-5 rounded-xl mb-6"
                  style={{ background: `${s.tone}0A`, border: `1px solid ${s.tone}20` }}
                >
                  <p className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}>
                    {s.week}
                  </p>
                </div>

                <ol className="space-y-3">
                  {s.beats.map((beat, i) => (
                    <li key={beat} className="flex items-start gap-3 text-[#4C5E6F]">
                      <span
                        className="mw-text-eyebrow mt-0.5 grid size-5 shrink-0 place-items-center rounded-full tabular-nums"
                        style={{
                          background: '#F6FAFC',
                          border: '1px solid #E6EEF3',
                          color: '#6F8190',
                          fontSize: '10.5px',
                          fontWeight: 700,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span style={{ fontSize: '14px', lineHeight: 1.6 }}>{beat}</span>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>

        <p className="mt-6 max-w-2xl text-[#6F8190]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
          Illustrative scenarios — not named clients. The pattern is real; the details are
          typical, not measured.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10 — Selected Website-System Surfaces
// White + dark inner panels. Asymmetric: featured + 2 support.
// ============================================================================

const ANATOMY_PARTS = [
  { label: 'Problem & intent', note: 'What the visitor or patient came to understand' },
  { label: 'Plain-language explanation', note: 'What the service, treatment, or procedure actually is' },
  { label: 'Proof placement', note: 'Trust signals where hesitation usually happens' },
  { label: 'Intent-matched CTA', note: 'Call, form, booking, or consultation request' },
  { label: 'Handoff', note: 'Context, source, and owner sent with the enquiry' },
];

const TRUST_LABELS = [
  'Local service area',
  'Verified business or practice',
  'Real recent work',
  'Response within minutes',
];

const HANDOFF_ROWS = [
  { field: 'Source', value: 'Service page' },
  { field: 'Intent', value: 'Quote request' },
  { field: 'Owner', value: 'Routed' },
  { field: 'Status', value: 'Active' },
];

function S10Surfaces() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              Selected surfaces
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Examples of the surface design{' '}
              <span className="text-[#4C5E6F]">we build into website systems.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Not finished case studies. Selected patterns — service or treatment-page anatomy,
              trust placement, enquiry handoff. The website surface is one part; the handling
              around it makes it work.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured anatomy card */}
          <article className="rounded-2xl border border-[#E6EEF3] bg-white p-8 shadow-[0_8px_32px_rgba(8,17,31,0.07)] lg:col-span-2">
            <p className="uppercase tracking-[0.16em]" style={{ color: '#35C7D8', fontSize: '11px', fontWeight: 700 }}>
              Service- or treatment-page anatomy
            </p>
            <h3 className="mt-2 text-[#08111F]" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}>
              Where decisions form on a service or treatment page
            </h3>
            <div className="mt-6 rounded-xl border border-[#0E2740]/40 bg-gradient-to-br from-[#061323] to-[#103E5A] p-6">
              <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/15" />
                <span className="size-2 rounded-full bg-white/15" />
              </div>
              <ul className="mt-4 space-y-3">
                {ANATOMY_PARTS.map(p => (
                  <li
                    key={p.label}
                    className="flex items-start justify-between gap-4 rounded-md border border-white/8 bg-white/[0.04] px-3 py-3"
                  >
                    <div>
                      <div className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                        {p.label}
                      </div>
                      <div className="mt-0.5 text-white/55" style={{ fontSize: '12.5px' }}>
                        {p.note}
                      </div>
                    </div>
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Trust band + handoff side cards */}
          <div className="grid gap-5">
            <article className="rounded-2xl border border-[#E6EEF3] bg-white p-7 shadow-[0_8px_32px_rgba(8,17,31,0.07)]">
              <p className="uppercase tracking-[0.16em]" style={{ color: '#14B8A6', fontSize: '11px', fontWeight: 700 }}>
                Trust band
              </p>
              <h3 className="mt-2 text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>
                Signals placed where hesitation forms
              </h3>
              <ul className="mt-4 space-y-2 rounded-lg border border-[#0E2740]/40 bg-gradient-to-br from-[#061323] to-[#103E5A] p-4">
                {TRUST_LABELS.map(l => (
                  <li
                    key={l}
                    className="flex items-center gap-2 rounded-md border border-white/8 bg-white/[0.04] px-3 py-2 text-white/65"
                    style={{ fontSize: '12.5px' }}
                  >
                    <span className="size-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
                    {l}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-[#E6EEF3] bg-white p-7 shadow-[0_8px_32px_rgba(8,17,31,0.07)]">
              <p className="uppercase tracking-[0.16em]" style={{ color: '#21B985', fontSize: '11px', fontWeight: 700 }}>
                Enquiry handoff
              </p>
              <h3 className="mt-2 text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>
                Context travels with the enquiry
              </h3>
              <ul className="mt-4 space-y-2 rounded-lg border border-[#0E2740]/40 bg-gradient-to-br from-[#061323] to-[#103E5A] p-4">
                {HANDOFF_ROWS.map(r => (
                  <li
                    key={r.field}
                    className="flex items-center justify-between rounded-md border border-white/8 bg-white/[0.04] px-3 py-2"
                  >
                    <span
                      className="uppercase tracking-[0.14em] text-white/55"
                      style={{ fontSize: '10px', fontWeight: 700 }}
                    >
                      {r.field}
                    </span>
                    <span className="text-white" style={{ fontSize: '12.5px', fontWeight: 600 }}>
                      {r.value}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-[#6F8190]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
          Illustrative surface patterns — not specific client deliverables. No real screenshots,
          named clients, or outcomes are implied.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 11 — Fit / Not Fit (mist, 2-column)
// ============================================================================

const FIT_FOR = [
  'Established service business or specialist clinic where work already comes in',
  'Real enquiries, jobs, appointments, or consultation requests already exist',
  'Quote, booking, or follow-up handling has visible gaps',
  'Owner wants practical structure, not a prettier website',
  'Long-term stability and compounding trust matter more than a launch event',
];

const FIT_NOT_FOR = [
  'Looking for the cheapest possible website package',
  'Expecting guaranteed rankings or “dominate Google” outcomes',
  'Want AI chatbot framed as the offer instead of practical handling',
  'Need a looks-only redesign with no business context',
  'Healthcare buyer expecting EMR, compliance, or treatment-outcome claims',
];

function S11Fit() {
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              Built for
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Established service businesses.
              <br />
              <span className="text-[#4C5E6F]">Specialist clinics that take their practice seriously.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              The work suits operators where moving parts already exist and the cost of leakage
              is real. It does not suit looks-only redesigns, rankings-only buyers, or AI-hype
              buyers.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div
            className="rounded-2xl border p-7 lg:p-8"
            style={{ background: '#14B8A60D', borderColor: '#14B8A640' }}
          >
            <p
              className="uppercase tracking-[0.16em]"
              style={{ color: '#14B8A6', fontSize: '11.5px', fontWeight: 700 }}
            >
              For
            </p>
            <ul className="mt-4 space-y-3">
              {FIT_FOR.map(item => (
                <li key={item} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.55 }}>
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                    style={{ background: '#14B8A640', color: '#14B8A6' }}
                  >
                    <CheckCircle2 size={11} strokeWidth={2.25} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#E6EEF3] bg-white p-7 lg:p-8">
            <p
              className="uppercase tracking-[0.16em]"
              style={{ color: '#E76F6F', fontSize: '11.5px', fontWeight: 700 }}
            >
              Not for
            </p>
            <ul className="mt-4 space-y-3">
              {FIT_NOT_FOR.map(item => (
                <li key={item} className="flex items-start gap-3 text-[#4C5E6F]" style={{ fontSize: '14.5px', lineHeight: 1.55 }}>
                  <span
                    className="mw-text-eyebrow mt-0.5 grid size-5 shrink-0 place-items-center rounded-full tabular-nums"
                    style={{
                      background: '#E76F6F10',
                      border: '1px solid #E76F6F38',
                      color: '#E76F6F',
                      fontSize: '12px',
                    }}
                  >
                    ×
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 12 — Practical Delivery (credibility, short, white)
// ============================================================================

function S12Delivery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[#35C7D8] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              How the work runs
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Practical delivery.
              <br />
              <span className="text-[#4C5E6F]">System thinking behind it.</span>
            </h2>
            <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              We work directly with the owner or practice manager. The aim is operating change,
              not a prettier site or another tool subscription.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 600 }}>
              How an engagement starts
            </div>
            <ol className="space-y-3 text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.6 }}>
              <li className="flex gap-4">
                <span className="tabular-nums text-[#6F8190] mt-0.5" style={{ fontSize: '13px', fontWeight: 700 }}>
                  01
                </span>
                Review the current site and handling path together — how enquiries arrive and
                where they go after.
              </li>
              <li className="flex gap-4">
                <span className="tabular-nums text-[#6F8190] mt-0.5" style={{ fontSize: '13px', fontWeight: 700 }}>
                  02
                </span>
                Map where work is leaking and what to fix first — structure before optimisation.
              </li>
              <li className="flex gap-4">
                <span className="tabular-nums text-[#6F8190] mt-0.5" style={{ fontSize: '13px', fontWeight: 700 }}>
                  03
                </span>
                Put the website system and connected handling in place so nothing depends on
                someone remembering.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 13 — FAQ (mist, accordion)
// ============================================================================

const FAQS = [
  {
    q: 'What do you build?',
    a: 'Conversion-focused website systems and the connected handling around them — for established service businesses and specialist clinics. The website carries the decision path. The handling around it makes sure calls, forms, quotes, and consultation requests are answered, routed, owned, followed up, and turned into proof.',
  },
  {
    q: 'How is this different from getting a new website?',
    a: 'A website shows the business. What we build makes sure enquiries get captured, routed to the right person, followed up, and tracked. The site is the visible part. The rest makes sure the enquiry is handled properly.',
  },
  {
    q: 'We already have a website. Can you work with that?',
    a: 'Often yes. We start by inspecting what exists, locate where it leaks, and put the missing handling in place around it. A full rebuild is not always needed.',
  },
  {
    q: 'Is local visibility included?',
    a: 'Local visibility and trust are part of how the website system works, not a separate package. The website, the local profile, the service or treatment pages, and the proof have to tell the same story to nearby customers — that is what we build.',
  },
  {
    q: 'What about missed calls and follow-up?',
    a: 'Missed call recovery sits with Lead Response & Handling — instant reply, enquiry logged. Sequenced follow-up sits with Follow-Up & CRM — quotes chased, reminders sent. Both connect into the same capture point as every other enquiry.',
  },
  {
    q: 'What kind of businesses is this for?',
    a: 'Established service businesses and specialist clinics where work already comes in, jobs or appointments are worth real money, and handling between moments has visible gaps.',
  },
  {
    q: 'How long before we see results?',
    a: 'Stop the bleeding in weeks. Groundwork in months. Compounding takes longer — that is the point.',
  },
  {
    q: 'How do we start?',
    a: 'Start a conversation. We map where work is leaking and what to put in place first.',
  },
];

function S13FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11.5px', fontWeight: 600 }}>
              Questions
            </div>
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Straight answers.
            </h2>
            <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15px', lineHeight: 1.65 }}>
              Practical questions, answered without spin.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {FAQS.map((f, i) => (
                <button
                  key={f.q}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 hover:bg-[#F6FAFC] transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600 }}>
                      {f.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </div>
                  {open === i && (
                    <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
                      {f.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 14 — Final Diagnostic CTA (white section bg, dark inner container)
// ============================================================================

const CTA_EXPECTATIONS = [
  { num: '01', text: 'Where work is coming in today' },
  { num: '02', text: 'What is being held — and what is not' },
  { num: '03', text: 'What to fix first' },
  { num: '04', text: 'What changes when the path is connected' },
];

function S14CTA() {
  return (
    <section id="cta" className="bg-white py-20">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#061323] to-[#081827] p-8 lg:p-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 80% 30%, #35C7D8 0%, transparent 40%), radial-gradient(circle at 10% 90%, #14B8A6 0%, transparent 40%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-8"
                style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.16em' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                <span className="text-white/85 uppercase">Start here</span>
              </div>
              <h2
                className="text-white"
                style={{
                  fontSize: '54px',
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                }}
              >
                If your website is not supporting enquiries properly,
                <br />
                <span className="text-white/55">it is worth reviewing.</span>
              </h2>
              <p
                className="mt-6 text-white/65 max-w-[540px]"
                style={{ fontSize: '16.5px', lineHeight: 1.65 }}
              >
                We start by reviewing the website and the handling path together — how people
                find the business or practice, whether they trust it, what they do next, where
                the enquiry lands, who owns follow-up, and whether good work becomes proof.
              </p>
              <a
                href="#"
                className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                Request a System Review
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.07] border border-white/16 p-8 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="text-white/55 uppercase tracking-[0.14em] mb-5" style={{ fontSize: '10.5px', fontWeight: 600 }}>
                  What we will look at
                </div>
                <div className="space-y-3">
                  {CTA_EXPECTATIONS.map(s => (
                    <div
                      key={s.num}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.06] border border-white/10"
                    >
                      <span
                        className="text-[#35C7D8] shrink-0"
                        style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.12em' }}
                      >
                        {s.num}
                      </span>
                      <span className="text-white/90" style={{ fontSize: '15.5px', lineHeight: 1.5 }}>
                        {s.text}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="mt-5 pt-5 border-t border-white/10 flex items-center justify-between text-white/50"
                  style={{ fontSize: '12px' }}
                >
                  <span>No hard sell.</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                    Calm conversation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Page export
// ============================================================================

export function HomeV2() {
  return (
    <main>
      <S01Hero />
      <S02Leak />
      <S03ControlPoint />
      <S04Contrast />
      <S05Mechanisms />
      <S06Handling />
      <S07FiveProtections />
      <S08PositiveState />
      <S09Scenarios />
      <S10Surfaces />
      <S11Fit />
      <S12Delivery />
      <S13FAQ />
      <S14CTA />
    </main>
  );
}
