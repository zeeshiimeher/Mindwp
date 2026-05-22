/**
 * Home.tsx — MindWP design-sandbox homepage (consolidated)
 *
 * Single-file homepage render. All 12 sections inline. Replaces the
 * previously-separate components/Hero, components/LeakDiagnosis, etc.
 *
 * Section arc:
 *  01  Hero — "Work Comes In. Too Much Slips Away." + signal surface
 *  02  Operating leak map — central dominant leak + 6 satellite incidents on a custom map surface with SVG connectors and FOUND/CAPTURED/PROVEN zone labels
 *  03  Website as control point — original v1 3-layer stacked surface (Surface → Underneath → Foundation)
 *  04  Split operating table — scattered fragments (offset, dashed) vs aligned path (vertical rail); mist section bg
 *  05  Connected handling path — featured handoff card (channels → response surface → owner) + 4 supporting handling states (2x2); mist
 *  06  Five Protections, One Connected Path — FULL DARK constellation, SWS hub + 4 outer
 *  07  Positive operating state board — featured anchor state + 4 small positive-state tiles (calm green/teal); white
 *  08  Scenario ledger — single white panel with 5 horizontal scenario rows (Roofing taller); each row has industry badge + trigger + leak + protection + abstract surface preview
 *  09  Selected surfaces — light panel with page-mock canvas + 4 numbered annotation labels + 2 compact modules (Trust band, Enquiry handoff); no dark inner panel
 *  10  Fit / Not for — diagnostic two-column panel; white
 *  11  Review desk — split panel: "What we review" 5-row checklist (left) + "How the work moves" 3 status cards (right); mist section
 *  12  FAQ — accordion
 *  13  Final diagnostic CTA — dark CTA panel
 *
 * Section 6 is the only full dark body section — the constellation anchor. Section 7
 * (was previously dark) is now light to avoid two consecutive dark sections.
 *
 * Voice + content per /Users/zeeshansadiq/Projects/Mindwp/docs/WRITING.md and
 * /Users/zeeshansadiq/Projects/Mindwp/docs/FOUNDATION.md. Active 5-system model
 * (no banned terms — see README-active-model.md). Working-day objects: calls,
 * forms, quotes, bookings, consultation requests, missed replies, follow-up,
 * reviews. No fake metrics, no fabricated testimonials, no medical/treatment
 * claims for clinic context.
 *
 * Design language inherited from the prior sandbox components — inline style
 * with hex + var(--mw-*) tokens from theme.css. Each section owns its own
 * geometry; no shared shell.
 */
import {
  Activity,
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Hammer,
  HeartPulse,
  History,
  Inbox,
  type LucideIcon,
  MapPin,
  Minus,
  PhoneCall,
  PhoneOff,
  Plus,
  Repeat,
  ScanSearch,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
  Workflow,
} from 'lucide-react';
import { useState } from 'react';

// ============================================================================
// SECTION 01 — Hero
// "Work Comes In. Too Much Slips Away."
// ============================================================================

type HeroSignalStatus = 'leaking' | 'unowned';

const HERO_SIGNALS: ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  note: string;
  status: HeroSignalStatus;
}> = [
    { icon: Search, label: 'Local search', note: 'Postcode N6 — page 3', status: 'unowned' },
    { icon: FileText, label: 'Service page visit', note: 'Bathrooms — 02:14 dwell', status: 'unowned' },
    { icon: Inbox, label: 'Form enquiry', note: 'Sat 09:14 — unread', status: 'leaking' },
    { icon: PhoneOff, label: 'Missed call', note: '11:42 — no callback', status: 'leaking' },
    { icon: Clock, label: 'Consultation request', note: 'Today — nobody owns it', status: 'unowned' },
  ];

function SectionHero() {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
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
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="container relative grid grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span
              className="text-white/85 uppercase tracking-[0.16em]"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              Service Businesses & Specialist Clinics
            </span>
          </div>

          <h1 className="text-white">
            Work Comes In.
            <br />
            <span className="text-white/45">Too Much Slips Away.</span>
          </h1>

          <p
            className="mt-8 text-white/70 max-w-[560px]"
            style={{ fontSize: '18px', lineHeight: 1.6 }}
          >
            People find you online. They call, fill in forms, request quotes or
            consultations, check reviews, and compare what you do. Some of it turns into
            booked work or kept appointments. Too much disappears between the first click
            and the next step.
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

function HeroSignalSurface() {
  const leakingCount = HERO_SIGNALS.filter(s => s.status === 'leaking').length;
  const unownedCount = HERO_SIGNALS.filter(s => s.status === 'unowned').length;

  return (
    <div className="relative w-full">
      <div className="rounded-2xl border border-white/[0.18] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
          <div>
            <div
              className="text-white/45 uppercase tracking-[0.16em]"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              Signal Surface
            </div>
            <div
              className="text-white mt-1"
              style={{ fontSize: '21px', fontWeight: 600, letterSpacing: '-0.01em' }}
            >
              What your business looks like today
            </div>
          </div>
          <div className="text-right">
            <div
              className="text-white/40 mb-0.5"
              style={{
                fontSize: '9.5px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              Signals
            </div>
            <div
              className="text-white"
              style={{ fontSize: '34px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}
            >
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
                className={`grid grid-cols-12 items-center gap-3 px-4 py-4 rounded-lg border transition-colors ${isLeaking
                  ? 'border-[#E76F6F]/[0.22] bg-[#E76F6F]/[0.04]'
                  : 'border-white/8 bg-white/[0.02] hover:bg-white/[0.04]'
                  }`}
              >
                <div className="col-span-1">
                  <span
                    className="text-white/30 tabular-nums"
                    style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-1">
                  <div
                    className={`w-9 h-9 rounded-md border flex items-center justify-center ${isLeaking
                      ? 'bg-[#E76F6F]/10 border-[#E76F6F]/[0.28] text-[#E76F6F]'
                      : 'bg-white/[0.06] border-white/14 text-white/80'
                      }`}
                  >
                    <Icon size={15} />
                  </div>
                </div>
                <div className="col-span-7 min-w-0">
                  <div
                    className="text-white truncate"
                    style={{ fontSize: '15.5px', fontWeight: 600 }}
                  >
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
                      <span className="w-1 h-1 rounded-full bg-[#E76F6F] shadow-[0_0_5px_#E76F6F]" />{' '}
                      LEAKING
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
          <div
            className="flex items-center justify-end gap-1.5 text-[#35C7D8]"
            style={{ fontSize: '12px', fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8] animate-pulse" />
            Pulled toward system
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 right-12 h-12 rounded-full bg-[#35C7D8]/15 blur-2xl pointer-events-none" />
    </div>
  );
}

// ============================================================================
// SECTION 02 — Operating leak map
// A custom "map surface" inside one light panel: 1 central dominant leak +
// 6 satellite incidents grouped under 3 zone labels (FOUND / CAPTURED /
// PROVEN). Faint SVG connectors point from each satellite to the central
// leak. No card grid, no timeline, no numbered steps.
// ============================================================================

type LeakZone = 'FOUND' | 'CAPTURED' | 'PROVEN';

type LeakNode = {
  zone: LeakZone;
  icon: LucideIcon;
  title: string;
  note: string;
};

const ZONE_COLOR: Record<LeakZone, string> = {
  FOUND: '#14B8A6',
  CAPTURED: '#F4B740',
  PROVEN: '#9B7DE0',
};

const DOMINANT_LEAK = {
  zone: 'CAPTURED' as LeakZone,
  icon: Clock,
  title: 'First response is too slow',
  note: 'Visitor compares three businesses before anyone replies. By then the decision is already moving away from yours.',
};

// 6 satellite incidents arranged around the dominant. desktop positions are
// pinned via inline style; mobile stacks grouped by zone.
type SatellitePos = { top: string; left: string };
type Satellite = LeakNode & { pos: SatellitePos };

const SATELLITES: ReadonlyArray<Satellite> = [
  // FOUND zone — top-left arc
  {
    zone: 'FOUND',
    icon: Search,
    title: 'Visitor compares three businesses before anyone replies',
    note: 'Local search shows the wrong business first; the right one sits on page two.',
    pos: { top: '6%', left: '4%' },
  },
  {
    zone: 'FOUND',
    icon: FileText,
    title: 'Service or treatment page does not answer the question',
    note: 'Visitor reads a paragraph, cannot tell if this is the right team. Closes the tab.',
    pos: { top: '8%', left: '36%' },
  },
  // CAPTURED zone — sides of the dominant
  {
    zone: 'CAPTURED',
    icon: Inbox,
    title: 'Form lands in an inbox nobody checks on weekends',
    note: 'Saturday morning enquiry sits unread until Tuesday — competitor replied within the hour.',
    pos: { top: '38%', left: '2%' },
  },
  {
    zone: 'CAPTURED',
    icon: History,
    title: 'Quote sent. Nobody owns Monday follow-up.',
    note: 'Friday quote goes quiet over the weekend. By Wednesday the lead has booked elsewhere.',
    pos: { top: '38%', left: '76%' },
  },
  // PROVEN zone — bottom arc
  {
    zone: 'PROVEN',
    icon: Star,
    title: 'Review moment passes after the job or appointment',
    note: 'Customer happy, patient relieved — and nobody asked while the experience was fresh.',
    pos: { top: '74%', left: '8%' },
  },
  {
    zone: 'PROVEN',
    icon: Repeat,
    title: 'Proof never returns to the website',
    note: 'Completed work and patient experience never show up where the next visitor decides.',
    pos: { top: '74%', left: '64%' },
  },
];

function ZoneLabel({
  label,
  pos,
}: {
  label: LeakZone;
  pos: { top?: string; bottom?: string; left?: string; right?: string };
}) {
  const c = ZONE_COLOR[label];
  return (
    <div
      className="hidden lg:inline-flex absolute items-center gap-2 px-3 py-1.5 rounded-full"
      style={{
        ...pos,
        background: `${c}10`,
        border: `1px solid ${c}40`,
        backdropFilter: 'blur(4px)',
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ background: c, boxShadow: `0 0 6px ${c}` }}
      />
      <span
        className="uppercase"
        style={{
          color: c,
          fontSize: '10.5px',
          fontWeight: 700,
          letterSpacing: '0.16em',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function SatelliteNode({ s }: { s: Satellite }) {
  const c = ZONE_COLOR[s.zone];
  const Icon = s.icon;
  return (
    <div
      className="rounded-xl bg-white p-4 lg:absolute"
      style={{
        ...('lg:absolute' && {}), // placeholder
        width: '21%',
        minWidth: '210px',
        top: s.pos.top,
        left: s.pos.left,
        border: '1px solid #E6EEF3',
        boxShadow: '0 4px 16px rgba(8,17,31,0.05)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
          style={{
            background: `${c}14`,
            border: `1px solid ${c}30`,
            color: c,
          }}
        >
          <Icon size={13} />
        </div>
        <span
          className="uppercase"
          style={{
            color: c,
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.14em',
          }}
        >
          {s.zone}
        </span>
      </div>
      <div
        className="text-[#08111F]"
        style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.35, letterSpacing: '-0.005em' }}
      >
        {s.title}
      </div>
      <div
        className="mt-1.5 text-[#6F8190]"
        style={{ fontSize: '11.5px', lineHeight: 1.5 }}
      >
        {s.note}
      </div>
    </div>
  );
}

function SectionLeak() {
  const DC = ZONE_COLOR[DOMINANT_LEAK.zone]; // dominant color (Captured/amber)

  return (
    <section id="leak" className="section bg-page-mist">
      <div className="container section-stack">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Operating leak map
            </div>
            <h2 className="text-[#08111F]">
              The business is working.{' '}
              <span className="text-[#4C5E6F]">The system around it is leaking.</span>
            </h2>
            <p
              className="mt-6 text-[#6F8190] max-w-[480px]"
              style={{ fontSize: '15.5px', lineHeight: 1.7 }}
            >
              None of these gaps looks dramatic alone. Together, they decide whether
              demand becomes booked work, kept appointments, proof, and repeat enquiries.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              Map the path from search to a job done or appointment kept and a review
              captured. One leak sits at the centre. Six smaller ones drain into it.
            </p>
          </div>
        </div>

        {/* Outer map panel */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background:
              'linear-gradient(180deg, #FFFFFF 0%, #F9FCFD 100%)',
            border: '1px solid #E6EEF3',
            boxShadow: '0 12px 60px rgba(8,17,31,0.06)',
          }}
        >
          {/* Map header strip */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-6 lg:px-10 py-4 border-b"
            style={{ borderColor: '#E6EEF3' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <span
                className="uppercase tracking-[0.16em] text-[#0E2740]"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                Where work is slipping
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {(['FOUND', 'CAPTURED', 'PROVEN'] as LeakZone[]).map(z => {
                const c = ZONE_COLOR[z];
                return (
                  <span
                    key={z}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: `${c}10`,
                      border: `1px solid ${c}38`,
                      color: c,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full"
                      style={{ background: c }}
                    />
                    {z}
                  </span>
                );
              })}
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                style={{
                  background: '#E76F6F12',
                  border: '1px solid #E76F6F38',
                  color: '#C04A4A',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_6px_#E76F6F] animate-pulse" />
                1 critical
              </span>
            </div>
          </div>

          {/* Desktop map surface */}
          <div
            className="relative hidden lg:block"
            style={{
              height: '640px',
              background:
                'radial-gradient(ellipse at 50% 50%, rgba(231,111,111,0.05) 0%, transparent 55%)',
            }}
          >
            {/* Subtle dotted grid wash */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.4]"
              style={{
                backgroundImage:
                  'radial-gradient(circle, #C8D8E4 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
              aria-hidden="true"
            />

            {/* SVG connectors — each satellite reaches the central dominant */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="leakConnector" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#6F8190" stopOpacity="0.0" />
                  <stop offset="60%" stopColor="#E76F6F" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#E76F6F" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              {/* Approximate satellite centres (in percent) → dominant (50%, 50%) */}
              {[
                { x: 12, y: 16 },
                { x: 44, y: 18 },
                { x: 10, y: 48 },
                { x: 86, y: 48 },
                { x: 18, y: 84 },
                { x: 74, y: 84 },
              ].map((p, i) => (
                <line
                  key={i}
                  x1={p.x}
                  y1={p.y}
                  x2={50}
                  y2={50}
                  stroke="url(#leakConnector)"
                  strokeWidth="0.18"
                  strokeDasharray="0.6 0.7"
                />
              ))}
            </svg>

            {/* Zone labels */}
            <ZoneLabel label="FOUND" pos={{ top: '22px', left: '24px' }} />
            <ZoneLabel label="CAPTURED" pos={{ top: '22px', right: '24px' }} />
            <ZoneLabel label="PROVEN" pos={{ bottom: '22px', left: '50%' }} />

            {/* Central dominant leak */}
            <div
              className="absolute"
              style={{
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32%',
                maxWidth: '380px',
              }}
            >
              {/* Glow halo */}
              <div
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(231,111,111,0.18) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-2xl p-7"
                style={{
                  background: 'linear-gradient(to bottom right, #FFFFFF, #FDF3F3)',
                  border: '1.5px solid #E76F6F55',
                  boxShadow:
                    '0 24px 60px rgba(231,111,111,0.18), 0 0 0 1px rgba(231,111,111,0.08)',
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: `${DC}18`,
                      border: `1px solid ${DC}45`,
                      color: DC,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                    }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: DC }} />
                    {DOMINANT_LEAK.zone}
                  </span>
                  <span
                    className="inline-flex items-center gap-1"
                    style={{
                      color: '#E76F6F',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                    }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[#E76F6F] animate-pulse"
                      style={{ boxShadow: '0 0 8px #E76F6F' }}
                    />
                    CRITICAL
                  </span>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: '#E76F6F14',
                    border: '1px solid #E76F6F30',
                    color: '#E76F6F',
                  }}
                >
                  <DOMINANT_LEAK.icon size={22} />
                </div>
                <div
                  className="text-[#08111F]"
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {DOMINANT_LEAK.title}
                </div>
                <p
                  className="mt-3 text-[#4C5E6F]"
                  style={{ fontSize: '14px', lineHeight: 1.55 }}
                >
                  {DOMINANT_LEAK.note}
                </p>
              </div>
            </div>

            {/* Satellites */}
            {SATELLITES.map(s => (
              <SatelliteNode key={s.title} s={s} />
            ))}
          </div>

          {/* Mobile: collapse into vertical list grouped by zone */}
          <div className="lg:hidden p-6 space-y-8">
            {/* Dominant first */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(to bottom right, #FFFFFF, #FDF3F3)',
                border: '1.5px solid #E76F6F55',
                boxShadow: '0 16px 48px rgba(231,111,111,0.12)',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: `${DC}18`,
                    border: `1px solid ${DC}45`,
                    color: DC,
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                  }}
                >
                  {DOMINANT_LEAK.zone}
                </span>
                <span
                  style={{
                    color: '#E76F6F',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                  }}
                >
                  · CRITICAL
                </span>
              </div>
              <div
                className="text-[#08111F]"
                style={{ fontSize: '20px', fontWeight: 700, lineHeight: 1.2 }}
              >
                {DOMINANT_LEAK.title}
              </div>
              <p
                className="mt-2 text-[#4C5E6F]"
                style={{ fontSize: '13.5px', lineHeight: 1.55 }}
              >
                {DOMINANT_LEAK.note}
              </p>
            </div>

            {(['FOUND', 'CAPTURED', 'PROVEN'] as LeakZone[]).map(zone => {
              const items = SATELLITES.filter(s => s.zone === zone);
              if (items.length === 0) return null;
              const c = ZONE_COLOR[zone];
              return (
                <div key={zone}>
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full mb-3"
                    style={{
                      background: `${c}10`,
                      border: `1px solid ${c}38`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: c }}
                    />
                    <span
                      className="uppercase"
                      style={{
                        color: c,
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      {zone}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {items.map(s => {
                      const Icon = s.icon;
                      return (
                        <div
                          key={s.title}
                          className="rounded-xl bg-white p-4"
                          style={{
                            border: '1px solid #E6EEF3',
                            boxShadow: '0 4px 16px rgba(8,17,31,0.04)',
                          }}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className="w-7 h-7 rounded-md flex items-center justify-center"
                              style={{
                                background: `${c}14`,
                                border: `1px solid ${c}30`,
                                color: c,
                              }}
                            >
                              <Icon size={13} />
                            </div>
                          </div>
                          <div
                            className="text-[#08111F]"
                            style={{ fontSize: '13.5px', fontWeight: 600, lineHeight: 1.35 }}
                          >
                            {s.title}
                          </div>
                          <div
                            className="mt-1.5 text-[#6F8190]"
                            style={{ fontSize: '12.5px', lineHeight: 1.5 }}
                          >
                            {s.note}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom summary strip */}
          <div
            className="px-6 lg:px-10 py-6 border-t flex flex-wrap items-center justify-between gap-4"
            style={{
              borderColor: '#E6EEF3',
              background: 'linear-gradient(to right, #F9FCFD, #FFFFFF)',
            }}
          >
            <div className="max-w-[640px]">
              <div
                className="text-[#08111F]"
                style={{
                  fontSize: '17px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                }}
              >
                Seven leak points. One critical drain in the middle.
              </div>
              <div
                className="text-[#4C5E6F] mt-1.5"
                style={{ fontSize: '13.5px', lineHeight: 1.55 }}
              >
                Together they decide how much of what comes in actually becomes paid
                work or a kept appointment.
              </div>
            </div>
            <div
              className="inline-flex items-center gap-2.5 px-4 py-3 rounded-xl"
              style={{
                background:
                  'linear-gradient(to right, rgba(53,199,216,0.12), rgba(20,184,166,0.06))',
                border: '1px solid rgba(53,199,216,0.30)',
                color: '#0E2740',
                fontSize: '13px',
                fontWeight: 700,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_10px_#35C7D8]" />
              The fix is the system between the steps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 03 — The website is the visible control point
// Original v1 design: 3-layer stacked surface (Surface → Underneath → Foundation)
// with vertical connectors between layers.
// ============================================================================

const CONTROL_MIDDLE: ReadonlyArray<{ icon: LucideIcon; label: string; note: string }> = [
  { icon: Inbox, label: 'Capture', note: 'All channels in' },
  { icon: Workflow, label: 'Routing', note: 'Right person, right time' },
  { icon: Repeat, label: 'Follow-up', note: 'On schedule, not memory' },
  { icon: History, label: 'Status', note: 'Who owns each enquiry' },
  { icon: Star, label: 'Proof', note: 'Reviews at the right moment' },
];

function SectionControlPoint() {
  return (
    <section className="section bg-page-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              The website is the control point
            </div>
            <h2 className="text-[#08111F]">
              Not just a page.{' '}
              <span className="text-[#4C5E6F]">The visible front door.</span>
            </h2>
            <p
              className="mt-7 text-[#4C5E6F] max-w-[460px]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              For a service business it is the public control point. For a specialist
              clinic it is the practice front door. Either way, it sits where search,
              trust, service or treatment clarity, enquiry or consultation capture,
              response, follow-up, and proof meet.
            </p>
            <p
              className="mt-4 text-[#6F8190] max-w-[460px]"
              style={{ fontSize: '14.5px', lineHeight: 1.6 }}
            >
              The site does not fix missed calls, scattered forms, or invisible follow-up
              on its own. But it is the place those problems first become visible — and
              the place the system around them gets connected.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 relative">
            {/* Ambient halo behind the stack */}
            <div
              className="absolute inset-x-4 top-12 bottom-12 rounded-[40px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 40%, rgba(53,199,216,0.14), transparent 70%)',
                filter: 'blur(48px)',
              }}
              aria-hidden="true"
            />

            {/* Top — premium website surface with real micro-content */}
            <div
              className="relative rounded-2xl bg-white overflow-hidden"
              style={{
                border: '1px solid #E6EEF3',
                boxShadow: '0 18px 44px rgba(8,17,31,0.08)',
              }}
            >
              {/* Browser chrome */}
              <div
                className="flex items-center gap-2 px-4 py-2.5 border-b"
                style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: '#E76F6F66' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: '#F4B74066' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: '#21B98566' }} />
                <span
                  className="ml-2 px-2.5 py-0.5 rounded-md inline-flex items-center gap-1.5"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6EEF3',
                    color: '#6F8190',
                    fontSize: '10.5px',
                    fontWeight: 600,
                  }}
                >
                  <ShieldCheck size={9} color="#21B985" />
                  yourbusiness.co.uk
                </span>
              </div>

              {/* Mini nav */}
              <div
                className="flex items-center justify-between px-5 py-2.5 border-b"
                style={{ borderColor: '#F2F5F7' }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center"
                    style={{ background: '#08111F', color: '#35C7D8', fontSize: '9px', fontWeight: 800 }}
                  >
                    ▲
                  </span>
                  <span
                    className="text-[#08111F]"
                    style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '-0.005em' }}
                  >
                    Northwell Roofing
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-3">
                  {['Services', 'Areas', 'Reviews', 'Contact'].map(n => (
                    <span
                      key={n}
                      className="text-[#4C5E6F]"
                      style={{ fontSize: '10.5px', fontWeight: 500 }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
                <span
                  className="px-2.5 py-1 rounded-md"
                  style={{
                    background: '#08111F',
                    color: '#FFFFFF',
                    fontSize: '10px',
                    fontWeight: 700,
                  }}
                >
                  Request a quote
                </span>
              </div>

              {/* Hero — real content, not grey strokes */}
              <div
                className="relative px-5 lg:px-7 pt-6 pb-7"
                style={{
                  background:
                    'linear-gradient(135deg, #F8FBFC 0%, #FFFFFF 60%, #ECF9FB 100%)',
                }}
              >
                <div
                  className="absolute -top-10 -right-12 w-44 h-44 rounded-full pointer-events-none"
                  style={{
                    background: 'rgba(53,199,216,0.20)',
                    filter: 'blur(50px)',
                  }}
                  aria-hidden="true"
                />
                <div className="relative grid grid-cols-12 gap-5 items-center">
                  <div className="col-span-12 sm:col-span-7">
                    <div
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-3"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D0EFF4',
                        color: '#0E7D8C',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      <MapPin size={9} />
                      NORTH LONDON · STORM RESPONSE
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '20px',
                        fontWeight: 700,
                        lineHeight: 1.15,
                        letterSpacing: '-0.018em',
                      }}
                    >
                      Roof gone after the storm?
                      <span className="text-[#0E7D8C]"> We&rsquo;re out today.</span>
                    </div>
                    <p
                      className="mt-2 text-[#4C5E6F]"
                      style={{ fontSize: '12px', lineHeight: 1.5 }}
                    >
                      Emergency repair, full reroof, insurance work. A real local
                      crew, not a call centre.
                    </p>
                    <div className="mt-4 flex items-center gap-2.5 flex-wrap">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md"
                        style={{
                          background: '#08111F',
                          color: '#FFFFFF',
                          fontSize: '11px',
                          fontWeight: 700,
                        }}
                      >
                        Get a same-day quote
                        <ArrowRight size={11} />
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-[#0E2740]"
                        style={{ fontSize: '10.5px', fontWeight: 600 }}
                      >
                        <PhoneCall size={10} color="#0E7D8C" />
                        020 7946 0214
                      </span>
                    </div>
                  </div>

                  {/* Right side: a finished trust panel — no skeleton, no placeholder image */}
                  <div className="col-span-12 sm:col-span-5">
                    <div
                      className="rounded-xl p-3.5"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D0EFF4',
                        boxShadow: '0 6px 18px rgba(8,17,31,0.06)',
                      }}
                    >
                      <div className="flex items-center gap-1">
                        {[0, 1, 2, 3, 4].map(i => (
                          <Star key={i} size={10} fill="#F4B740" color="#F4B740" />
                        ))}
                        <span
                          className="ml-1 text-[#08111F]"
                          style={{ fontSize: '11px', fontWeight: 700 }}
                        >
                          4.9
                        </span>
                        <span
                          className="ml-auto text-[#6F8190]"
                          style={{ fontSize: '9.5px', fontWeight: 600 }}
                        >
                          312 reviews
                        </span>
                      </div>
                      <div
                        className="mt-2 text-[#4C5E6F]"
                        style={{ fontSize: '10.5px', lineHeight: 1.5 }}
                      >
                        &ldquo;Came out the morning after the storm. Tarped the roof,
                        scheduled the full repair the same week.&rdquo;
                      </div>
                      <div className="mt-2.5 pt-2.5 border-t flex items-center justify-between" style={{ borderColor: '#EEF3F6' }}>
                        <span
                          className="inline-flex items-center gap-1 text-[#0F7A57]"
                          style={{ fontSize: '9.5px', fontWeight: 700 }}
                        >
                          <CheckCircle2 size={10} />
                          Verified
                        </span>
                        <span
                          className="text-[#6F8190]"
                          style={{ fontSize: '9.5px', fontWeight: 600 }}
                        >
                          N6 · N8 · N10
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom strip — service indicators, not labels */}
              <div
                className="flex items-center justify-between gap-3 px-5 py-3 border-t flex-wrap"
                style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
              >
                <div className="flex items-center gap-2.5 flex-wrap">
                  {['Emergency tarp', 'Repair', 'Full reroof', 'Insurance work'].map(t => (
                    <span
                      key={t}
                      className="text-[#4C5E6F]"
                      style={{ fontSize: '10px', fontWeight: 600 }}
                    >
                      {t}
                      <span className="ml-2.5 text-[#D0EFF4]">·</span>
                    </span>
                  ))}
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[#0F7A57]"
                  style={{ fontSize: '10px', fontWeight: 700 }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                  Open · responding now
                </span>
              </div>
            </div>

            {/* Connector — single line down into the control point */}
            <div className="relative flex justify-center" style={{ height: '40px' }}>
              <svg width="120" height="40" className="overflow-visible" aria-hidden="true">
                <defs>
                  <linearGradient id="cp-down" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#35C7D8" stopOpacity="0" />
                    <stop offset="100%" stopColor="#35C7D8" stopOpacity="0.85" />
                  </linearGradient>
                </defs>
                <line x1="60" y1="0" x2="60" y2="32" stroke="url(#cp-down)" strokeWidth="1.5" strokeDasharray="3 4" />
                <circle cx="60" cy="34" r="3" fill="#35C7D8" />
              </svg>
            </div>

            {/* Central control point — premium architectural object */}
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[36px] pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 30%, rgba(53,199,216,0.18) 0%, transparent 65%)',
                  filter: 'blur(28px)',
                }}
                aria-hidden="true"
              />
              <div
                className="relative rounded-3xl p-6 lg:p-8"
                style={{
                  background: 'linear-gradient(160deg, #FFFFFF 0%, #ECF9FB 100%)',
                  border: '1.5px solid #35C7D850',
                  boxShadow:
                    '0 24px 60px rgba(53,199,216,0.18), 0 0 0 1px rgba(53,199,216,0.06), inset 0 1px 0 rgba(255,255,255,0.7)',
                }}
              >
                {/* Single quiet label */}
                <div className="mb-6">
                  <span
                    className="inline-flex items-center gap-1.5"
                    style={{
                      color: '#0E7D8C',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      letterSpacing: '0.18em',
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                    WHAT RUNS UNDERNEATH THE SURFACE
                  </span>
                </div>

                {/* Center anchor — dark hub */}
                <div className="flex justify-center mb-6">
                  <div
                    className="relative rounded-2xl px-5 py-4 flex items-center gap-3.5 w-full max-w-full sm:w-auto sm:min-w-[280px]"
                    style={{
                      background: 'linear-gradient(135deg, #061323, #0E2740)',
                      border: '1px solid rgba(53,199,216,0.40)',
                      boxShadow:
                        '0 18px 40px rgba(8,17,31,0.30), 0 0 30px rgba(53,199,216,0.22)',
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: 'rgba(53,199,216,0.18)',
                        border: '1px solid rgba(53,199,216,0.45)',
                      }}
                    >
                      <Globe size={22} color="#35C7D8" />
                    </div>
                    <div className="min-w-0">
                      <div
                        className="text-white/55 uppercase tracking-[0.14em]"
                        style={{ fontSize: '9px', fontWeight: 700 }}
                      >
                        Smart Website System
                      </div>
                      <div
                        className="text-white"
                        style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.005em' }}
                      >
                        One connected path
                      </div>
                    </div>
                    <span
                      className="ml-auto inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(33,185,133,0.16)',
                        border: '1px solid rgba(33,185,133,0.40)',
                        color: '#7CE5BB',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                      LIVE
                    </span>
                  </div>
                </div>

                {/* 5 system tiles — no numbering */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {CONTROL_MIDDLE.map(m => {
                    const Icon = m.icon;
                    return (
                      <div
                        key={m.label}
                        className="relative rounded-xl bg-white p-4 flex flex-col items-start gap-2.5"
                        style={{
                          border: '1px solid #D0EFF4',
                          boxShadow: '0 4px 14px rgba(8,17,31,0.05)',
                        }}
                      >
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center"
                          style={{
                            background:
                              'linear-gradient(135deg, rgba(53,199,216,0.18), rgba(20,184,166,0.10))',
                            border: '1px solid rgba(53,199,216,0.32)',
                            color: '#0E6879',
                          }}
                        >
                          <Icon size={15} />
                        </div>
                        <div
                          className="text-[#08111F]"
                          style={{ fontSize: '12.5px', fontWeight: 700 }}
                        >
                          {m.label}
                        </div>
                        <div
                          className="text-[#6F8190]"
                          style={{ fontSize: '10.5px', lineHeight: 1.4 }}
                        >
                          {m.note}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Foundation footer — quiet base */}
            <div className="relative mt-5">
              <div
                className="rounded-2xl px-6 py-4 flex items-center gap-4"
                style={{
                  background: 'linear-gradient(90deg, #F9FCFD, #FFFFFF)',
                  border: '1px solid #E6EEF3',
                  boxShadow: '0 4px 14px rgba(8,17,31,0.04)',
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: '#08111F' }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[#08111F]"
                    style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.005em' }}
                  >
                    The connected handling path
                  </div>
                  <div
                    className="text-[#6F8190]"
                    style={{ fontSize: '11.5px', lineHeight: 1.5 }}
                  >
                    What sits under every visible page.
                  </div>
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
// SECTION 04 — Normal website vs connected system contrast
// "Built to Match How Your Business or Practice Actually Runs."
// ============================================================================

// Two full website page surfaces stand side by side. Both are real text-led
// previews, no skeleton bars, no dashboard chips. The visual difference is
// immediate: the left is a clean shallow page that quietly ends at the form;
// the right is a richer surface that visibly continues into live handling.
function SectionContrast() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Built differently
            </div>
            <h2 className="text-[#08111F]">
              Same business.{' '}
              <span className="text-[#4C5E6F]">Two different websites.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              On the left, what most local websites are — clean, generic, and quiet
              once the visitor leaves. On the right, what a connected website system
              looks like in the same trade.
            </p>
          </div>
        </div>

        {/* Two real page surfaces, side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* LEFT — shallow but polished website */}
          <ShallowWebsiteSurface />

          {/* RIGHT — connected website system */}
          <ConnectedWebsiteSurface />
        </div>

        {/* Honest one-line contrast */}
        <div
          className="rounded-2xl px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3"
          style={{
            background: 'linear-gradient(to right, #FFFFFF, #ECF9FB)',
            border: '1px solid #D0EFF4',
            boxShadow: '0 6px 18px rgba(20,184,166,0.06)',
          }}
        >
          <span
            className="text-[#08111F] max-w-[640px]"
            style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.55 }}
          >
            One ends at the contact form.{' '}
            <span className="text-[#4C5E6F]">
              The other carries the work the whole way through.
            </span>
          </span>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-[#0E2740] hover:text-[#08111F]"
            style={{ fontSize: '13px', fontWeight: 700, borderBottom: '1px solid #0E2740', paddingBottom: '2px' }}
          >
            See where yours sits
            <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ShallowWebsiteSurface() {
  return (
    <div className="relative flex flex-col">
      {/* The page */}
      <div
        className="relative rounded-2xl bg-white overflow-hidden flex-1"
        style={{
          border: '1px solid #E6EEF3',
          boxShadow: '0 14px 36px rgba(8,17,31,0.06)',
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b"
          style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}
        >
          <span className="w-2 h-2 rounded-full bg-[#E6EEF3]" />
          <span className="w-2 h-2 rounded-full bg-[#E6EEF3]" />
          <span className="w-2 h-2 rounded-full bg-[#E6EEF3]" />
          <span
            className="ml-2 px-2.5 py-0.5 rounded-md"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E6EEF3',
              color: '#9CA3B0',
              fontSize: '10.5px',
              fontWeight: 600,
            }}
          >
            cooperplumbing.co.uk
          </span>
        </div>

        {/* Mini nav */}
        <div
          className="flex items-center justify-between px-6 py-3 border-b"
          style={{ borderColor: '#F2F5F7' }}
        >
          <span
            className="text-[#08111F]"
            style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '-0.005em' }}
          >
            Cooper Plumbing
          </span>
          <div className="hidden sm:flex items-center gap-4">
            {['Home', 'Services', 'About', 'Contact'].map(n => (
              <span
                key={n}
                className="text-[#6F8190]"
                style={{ fontSize: '11px', fontWeight: 500 }}
              >
                {n}
              </span>
            ))}
          </div>
        </div>

        {/* Hero */}
        <div className="px-6 lg:px-8 pt-7 pb-5">
          <div
            className="text-[#08111F]"
            style={{
              fontSize: '22px',
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: '-0.018em',
            }}
          >
            Plumbing services in North London.
          </div>
          <p
            className="mt-2 text-[#6F8190] max-w-[380px]"
            style={{ fontSize: '13px', lineHeight: 1.55 }}
          >
            Reliable plumbing for homes and businesses. Get in touch for a quote.
          </p>
        </div>

        {/* Service tiles — real text */}
        <div className="px-6 lg:px-8 pb-6 grid grid-cols-3 gap-2.5">
          {['Repairs', 'Boilers', 'Heating'].map(s => (
            <div
              key={s}
              className="rounded-lg px-3 py-4 text-center"
              style={{
                background: '#F9FBFC',
                border: '1px solid #EEF3F6',
              }}
            >
              <div
                className="text-[#08111F]"
                style={{ fontSize: '12.5px', fontWeight: 700 }}
              >
                {s}
              </div>
              <div
                className="mt-1 text-[#9CA3B0]"
                style={{ fontSize: '10.5px', lineHeight: 1.4 }}
              >
                Quality service
              </div>
            </div>
          ))}
        </div>

        {/* Compact contact form — the page quietly ends here */}
        <div
          className="px-6 lg:px-8 py-5 border-t"
          style={{ borderColor: '#EEF3F6', background: '#FCFDFE' }}
        >
          <div
            className="text-[#08111F] mb-3"
            style={{ fontSize: '13px', fontWeight: 700 }}
          >
            Contact us
          </div>
          <div className="grid grid-cols-2 gap-2 mb-2">
            <div
              className="rounded-md px-3 py-2"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E6EEF3',
                color: '#9CA3B0',
                fontSize: '11px',
              }}
            >
              Your name
            </div>
            <div
              className="rounded-md px-3 py-2"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E6EEF3',
                color: '#9CA3B0',
                fontSize: '11px',
              }}
            >
              Email
            </div>
          </div>
          <div
            className="rounded-md px-3 py-4 mb-3"
            style={{
              background: '#FFFFFF',
              border: '1px solid #E6EEF3',
              color: '#9CA3B0',
              fontSize: '11px',
            }}
          >
            Message
          </div>
          <div className="flex">
            <div
              className="px-4 py-2 rounded-md inline-block"
              style={{
                background: '#08111F',
                color: '#FFFFFF',
                fontSize: '11.5px',
                fontWeight: 700,
              }}
            >
              Send message
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 lg:px-8 py-3 border-t flex items-center justify-between"
          style={{ borderColor: '#EEF3F6' }}
        >
          <span
            className="text-[#9CA3B0]"
            style={{ fontSize: '10px' }}
          >
            © Cooper Plumbing
          </span>
          <span
            className="text-[#9CA3B0]"
            style={{ fontSize: '10px' }}
          >
            Privacy · Terms
          </span>
        </div>
      </div>

      {/* Quiet "ends here" tail */}
      <div className="mt-4 flex items-center gap-3">
        <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3B0]" />
        <span
          className="text-[#9CA3B0]"
          style={{ fontSize: '12.5px', fontStyle: 'italic' }}
        >
          The visitor&rsquo;s journey ends at the form.
        </span>
      </div>
    </div>
  );
}

function ConnectedWebsiteSurface() {
  return (
    <div className="relative flex flex-col">
      {/* The page */}
      <div
        className="relative rounded-2xl bg-white overflow-hidden flex-1"
        style={{
          border: '1px solid #D0EFF4',
          boxShadow:
            '0 18px 44px rgba(20,184,166,0.14), 0 0 0 1px rgba(20,184,166,0.05)',
        }}
      >
        {/* Browser chrome */}
        <div
          className="flex items-center gap-2 px-4 py-2.5 border-b"
          style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: '#E76F6F66' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#F4B74066' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#21B98566' }} />
          <span
            className="ml-2 px-2.5 py-0.5 rounded-md inline-flex items-center gap-1.5"
            style={{
              background: '#FFFFFF',
              border: '1px solid #D0EFF4',
              color: '#0E7D8C',
              fontSize: '10.5px',
              fontWeight: 600,
            }}
          >
            <ShieldCheck size={9} color="#21B985" />
            cooperplumbing.co.uk
          </span>
        </div>

        {/* Mini nav */}
        <div
          className="flex items-center justify-between px-6 py-3 border-b"
          style={{ borderColor: '#F2F5F7' }}
        >
          <div className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded flex items-center justify-center"
              style={{ background: '#08111F', color: '#35C7D8', fontSize: '9.5px', fontWeight: 800 }}
            >
              ⌬
            </span>
            <span
              className="text-[#08111F]"
              style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '-0.005em' }}
            >
              Cooper Plumbing
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            {['Services', 'Areas', 'Reviews', 'Contact'].map(n => (
              <span
                key={n}
                className="text-[#0E2740]"
                style={{ fontSize: '11px', fontWeight: 600 }}
              >
                {n}
              </span>
            ))}
          </div>
          <span
            className="px-2.5 py-1 rounded-md inline-flex items-center gap-1.5"
            style={{
              background: '#08111F',
              color: '#FFFFFF',
              fontSize: '10.5px',
              fontWeight: 700,
            }}
          >
            <PhoneCall size={9} />
            020 7946 0214
          </span>
        </div>

        {/* Hero with intent + proof + dual CTA */}
        <div
          className="relative px-6 lg:px-8 pt-7 pb-6"
          style={{
            background:
              'linear-gradient(135deg, #FFFFFF 0%, #ECF9FB 100%)',
          }}
        >
          <div
            className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
            style={{
              background: 'rgba(53,199,216,0.20)',
              filter: 'blur(48px)',
            }}
            aria-hidden="true"
          />
          <div className="relative">
            <div
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-3"
              style={{
                background: '#FFFFFF',
                border: '1px solid #D0EFF4',
                color: '#0E7D8C',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.14em',
              }}
            >
              <MapPin size={9} />
              N1 — N22 · 24h response
            </div>
            <div
              className="text-[#08111F]"
              style={{
                fontSize: '22px',
                fontWeight: 700,
                lineHeight: 1.18,
                letterSpacing: '-0.018em',
              }}
            >
              Emergency plumber in North London —{' '}
              <span className="text-[#0E7D8C]">today, not tomorrow.</span>
            </div>
            <p
              className="mt-2 text-[#4C5E6F] max-w-[420px]"
              style={{ fontSize: '13px', lineHeight: 1.55 }}
            >
              Burst pipes, no hot water, boiler down. A local engineer on the doorstep,
              not a call centre.
            </p>
            <div className="mt-4 flex items-center gap-2.5 flex-wrap">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md"
                style={{
                  background: '#08111F',
                  color: '#FFFFFF',
                  fontSize: '11.5px',
                  fontWeight: 700,
                }}
              >
                Get a same-day quote
                <ArrowRight size={11} />
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D0EFF4',
                  color: '#0E2740',
                  fontSize: '11.5px',
                  fontWeight: 700,
                }}
              >
                <PhoneCall size={11} color="#0E7D8C" />
                020 7946 0214
              </span>
            </div>
          </div>
        </div>

        {/* Service tiles with proof per card */}
        <div className="px-6 lg:px-8 py-5 grid grid-cols-3 gap-2.5">
          {[
            { name: 'Boiler repair', stars: '4.9', meta: 'Same-day' },
            { name: 'Burst pipe', stars: '4.9', meta: '90-min ETA' },
            { name: 'No hot water', stars: '4.8', meta: 'Today' },
          ].map(s => (
            <div
              key={s.name}
              className="rounded-lg p-3"
              style={{
                background: '#FFFFFF',
                border: '1px solid #D0EFF4',
                boxShadow: '0 3px 10px rgba(20,184,166,0.05)',
              }}
            >
              <div
                className="text-[#08111F]"
                style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '-0.005em' }}
              >
                {s.name}
              </div>
              <div className="mt-1 flex items-center gap-1">
                <Star size={9} color="#F4B740" fill="#F4B740" />
                <span
                  className="text-[#0E2740]"
                  style={{ fontSize: '10px', fontWeight: 700 }}
                >
                  {s.stars}
                </span>
                <span
                  className="ml-1 text-[#6F8190]"
                  style={{ fontSize: '9.5px', fontWeight: 600 }}
                >
                  · {s.meta}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Inline trust band */}
        <div
          className="px-6 lg:px-8 py-3 border-y flex items-center justify-between flex-wrap gap-2"
          style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
        >
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className="inline-flex items-center gap-1 text-[#0F7A57]"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              <CheckCircle2 size={10} />
              Gas Safe registered
            </span>
            <span className="text-[#D0EFF4]">·</span>
            <span
              className="inline-flex items-center gap-1 text-[#0E2740]"
              style={{ fontSize: '10.5px', fontWeight: 600 }}
            >
              312 reviews
            </span>
            <span className="text-[#D0EFF4]">·</span>
            <span
              className="inline-flex items-center gap-1 text-[#0E2740]"
              style={{ fontSize: '10.5px', fontWeight: 600 }}
            >
              Insured to £2M
            </span>
          </div>
        </div>

        {/* Review */}
        <div className="px-6 lg:px-8 py-4">
          <div className="flex items-center gap-1 mb-1.5">
            {[0, 1, 2, 3, 4].map(i => (
              <Star key={i} size={10} fill="#F4B740" color="#F4B740" />
            ))}
            <span
              className="ml-1 text-[#08111F]"
              style={{ fontSize: '11px', fontWeight: 700 }}
            >
              4.9
            </span>
          </div>
          <div
            className="text-[#4C5E6F]"
            style={{ fontSize: '12px', lineHeight: 1.5 }}
          >
            &ldquo;Pipe burst at 7am. Booked at 7:20. Engineer on site by 8:40 with a
            fixed quote. Sorted.&rdquo;
          </div>
        </div>

        {/* Footer */}
        <div
          className="px-6 lg:px-8 py-3 border-t flex items-center justify-between"
          style={{ borderColor: '#EEF3F6' }}
        >
          <span
            className="text-[#6F8190]"
            style={{ fontSize: '10px', fontWeight: 600 }}
          >
            © Cooper Plumbing · N1—N22
          </span>
          <span
            className="inline-flex items-center gap-1 text-[#0F7A57]"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            <span className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
            Replying now
          </span>
        </div>
      </div>

      {/* "Continues" connector tail — single calm indicator, not a dashboard */}
      <div className="mt-4 flex items-center gap-3">
        <span className="relative w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_10px_#14B8A6]">
          <span
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: '#14B8A6', opacity: 0.4 }}
          />
        </span>
        <span
          className="text-[#0E2740]"
          style={{ fontSize: '12.5px', fontWeight: 600 }}
        >
          The work continues after the click —{' '}
          <span className="text-[#0E7D8C]">routed, replied, followed up, proved.</span>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// SECTION 04.5 — Local visibility bridge (Local SEO authority commercial section)
// Discovery-path surface: shows that people often find the business locally,
// then must trust it and find a clear next step. Bridges visibility into the
// enquiry/handling chapter that follows. Distinct from the leak map and the
// constellation — this is a horizontal "found-to-contact" journey.
// ============================================================================

type DiscoveryStage = {
  num: string;
  kicker: string;
  title: string;
  note: string;
  tone: string;
};

const DISCOVERY_STAGES: ReadonlyArray<DiscoveryStage> = [
  {
    num: '01',
    kicker: 'Local search',
    title: 'Near-me, postcode, or service area',
    note: 'Emergency call. Quote search. Procedure or treatment research.',
    tone: '#35C7D8',
  },
  {
    num: '02',
    kicker: 'Local pack',
    title: 'Three listings decide the next click',
    note: 'Profile, reviews, and proximity carry the first impression.',
    tone: '#14B8A6',
  },
  {
    num: '03',
    kicker: 'Website page',
    title: 'Does this page answer the question',
    note: 'Service or treatment clarity in the first screen. No hunting.',
    tone: '#9B7DE0',
  },
  {
    num: '04',
    kicker: 'Trust + path',
    title: 'Proof matches the next step',
    note: 'Reviews where hesitation forms. A clear path to call, book, or consult.',
    tone: '#21B985',
  },
];

function SectionLocalVisibility() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        {/* Header */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Local visibility
            </div>
            <h2 className="text-[#08111F]">
              Found locally is only the first step.{' '}
              <span className="text-[#4C5E6F]">It has to lead somewhere useful.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Most people find a service business or specialist clinic before they trust
              it. Local discovery is the entry. The website path after it decides whether
              the visit becomes an enquiry, a booking, or a quiet bounce.
            </p>
          </div>
        </div>

        {/* Discovery path surface */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FAFB 100%)',
            border: '1px solid #E6EEF3',
            boxShadow: '0 16px 56px rgba(8,17,31,0.06)',
          }}
        >
          {/* Top strip */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-6 lg:px-10 py-4 border-b"
            style={{ borderColor: '#E6EEF3' }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
              <span
                className="uppercase tracking-[0.16em] text-[#0E2740]"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                Discovery path
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {['Emergency search', 'Quote search', 'Treatment research', 'Near-me'].map(t => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6EEF3',
                    color: '#4C5E6F',
                    fontSize: '10.5px',
                    fontWeight: 600,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Top hero discovery row — map + pack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Search + Map mock */}
            <div
              className="col-span-1 lg:col-span-7 p-6 lg:p-9 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: '#E6EEF3' }}
            >
              {/* Search bar */}
              <div
                className="rounded-full px-4 py-2.5 flex items-center gap-3 bg-white"
                style={{ border: '1px solid #E6EEF3', boxShadow: '0 4px 12px rgba(8,17,31,0.04)' }}
              >
                <Search size={14} color="#6F8190" />
                <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>
                  emergency plumber near me
                </span>
                <span className="ml-auto inline-flex items-center gap-1 text-[#9CA3B0]">
                  <MapPin size={12} />
                  <span style={{ fontSize: '11px', fontWeight: 600 }}>N6, London</span>
                </span>
              </div>

              {/* Map surface */}
              <div
                className="relative mt-5 rounded-2xl overflow-hidden"
                style={{
                  height: '220px',
                  background:
                    'linear-gradient(135deg, #EEF6F8 0%, #E2F3F1 100%)',
                  border: '1px solid #D8E6EE',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.6)',
                }}
              >
                {/* faux grid streets */}
                <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                  <defs>
                    <pattern id="map-grid" width="36" height="36" patternUnits="userSpaceOnUse">
                      <path d="M 36 0 L 0 0 0 36" fill="none" stroke="#C8D8E4" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                  {/* faux roads */}
                  <line x1="0" y1="60" x2="100%" y2="60" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#FFFFFF" strokeWidth="6" />
                  <line x1="0" y1="160" x2="100%" y2="160" stroke="#FFFFFF" strokeWidth="4" />
                  <line x1="25%" y1="0" x2="25%" y2="100%" stroke="#FFFFFF" strokeWidth="4" />
                </svg>
                {/* faux pins */}
                {[
                  { top: '34%', left: '22%', tone: '#9CA3B0', n: 'A' },
                  { top: '58%', left: '46%', tone: '#14B8A6', n: 'B', highlight: true },
                  { top: '28%', left: '68%', tone: '#9CA3B0', n: 'C' },
                ].map(p => (
                  <div
                    key={p.n}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ top: p.top, left: p.left }}
                  >
                    {p.highlight && (
                      <span
                        className="absolute -inset-3 rounded-full pointer-events-none"
                        style={{
                          background: 'rgba(20,184,166,0.30)',
                          filter: 'blur(8px)',
                        }}
                      />
                    )}
                    <div
                      className="relative w-7 h-7 rounded-full flex items-center justify-center text-white shrink-0"
                      style={{
                        background: p.tone,
                        boxShadow: p.highlight
                          ? '0 0 0 3px #FFFFFF, 0 6px 14px rgba(20,184,166,0.40)'
                          : '0 0 0 2px #FFFFFF, 0 3px 8px rgba(8,17,31,0.20)',
                        fontSize: '10.5px',
                        fontWeight: 700,
                      }}
                    >
                      {p.n}
                    </div>
                  </div>
                ))}

                {/* Compass + scale chrome */}
                <div
                  className="absolute top-3 right-3 w-7 h-7 rounded-md flex items-center justify-center"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #E6EEF3',
                    color: '#6F8190',
                    fontSize: '10px',
                    fontWeight: 700,
                  }}
                >
                  N
                </div>
              </div>
            </div>

            {/* Local pack list */}
            <div className="col-span-1 lg:col-span-5 p-6 lg:p-9">
              <div className="flex items-center justify-between mb-4">
                <span
                  className="uppercase tracking-[0.16em]"
                  style={{ color: '#6F8190', fontSize: '10.5px', fontWeight: 700 }}
                >
                  Local pack
                </span>
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{
                    background: '#14B8A610',
                    border: '1px solid #14B8A638',
                    color: '#0E7D8C',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#14B8A6]" />3 LISTINGS
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { n: 'A', name: 'Listing one', rating: '4.6', highlight: false },
                  { n: 'B', name: 'Listing two — the right business', rating: '4.9', highlight: true },
                  { n: 'C', name: 'Listing three', rating: '4.4', highlight: false },
                ].map(l => (
                  <div
                    key={l.n}
                    className="rounded-xl px-3.5 py-3 flex items-center gap-3"
                    style={{
                      background: l.highlight ? 'linear-gradient(135deg, #FFFFFF, #ECF9FB)' : '#FFFFFF',
                      border: l.highlight ? '1px solid #14B8A640' : '1px solid #E6EEF3',
                      boxShadow: l.highlight
                        ? '0 8px 20px rgba(20,184,166,0.10)'
                        : '0 2px 6px rgba(8,17,31,0.03)',
                    }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white"
                      style={{
                        background: l.highlight ? '#14B8A6' : '#9CA3B0',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        boxShadow: l.highlight ? '0 4px 10px rgba(20,184,166,0.30)' : 'none',
                      }}
                    >
                      {l.n}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[#08111F] truncate"
                        style={{ fontSize: '12.5px', fontWeight: l.highlight ? 700 : 600 }}
                      >
                        {l.name}
                      </div>
                      <div className="flex items-center gap-1 mt-0.5">
                        <Star size={9} color={l.highlight ? '#F4B740' : '#9CA3B0'} fill={l.highlight ? '#F4B740' : '#9CA3B0'} />
                        <span
                          className="text-[#6F8190]"
                          style={{ fontSize: '10.5px', fontWeight: 600 }}
                        >
                          {l.rating} · local · open now
                        </span>
                      </div>
                    </div>
                    {l.highlight && (
                      <span
                        className="inline-flex items-center gap-1 shrink-0"
                        style={{
                          color: '#0E7D8C',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                        }}
                      >
                        SELECTED
                        <ArrowRight size={10} />
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Insight under the list */}
              <p
                className="mt-5 text-[#6F8190]"
                style={{ fontSize: '12.5px', lineHeight: 1.55 }}
              >
                Being visible here is the entry. What happens after the click decides
                whether anything comes of it.
              </p>
            </div>
          </div>

          {/* Connected path — 4 stages */}
          <div
            className="px-6 lg:px-10 py-8 border-t"
            style={{
              borderColor: '#E6EEF3',
              background: 'linear-gradient(180deg, #F9FCFD 0%, #FFFFFF 100%)',
            }}
          >
            <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
              <span
                className="uppercase tracking-[0.16em]"
                style={{ color: '#0E2740', fontSize: '10.5px', fontWeight: 700 }}
              >
                Found locally → trusted → contacted
              </span>
              <span
                className="text-[#6F8190]"
                style={{ fontSize: '11.5px', fontWeight: 600 }}
              >
                Local visibility connects into the website path
              </span>
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Horizontal connector rail (desktop) */}
              <div
                className="hidden lg:block absolute left-0 right-0 top-12 h-px pointer-events-none"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, transparent, #14B8A6 10%, #14B8A6 90%, transparent)',
                  opacity: 0.4,
                }}
                aria-hidden="true"
              />
              {DISCOVERY_STAGES.map((s, i) => (
                <div
                  key={s.num}
                  className="relative rounded-2xl bg-white p-5 flex flex-col"
                  style={{
                    border: '1px solid #E6EEF3',
                    boxShadow: '0 6px 18px rgba(8,17,31,0.05)',
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-2"
                      style={{
                        color: s.tone,
                        fontSize: '12.5px',
                        fontWeight: 700,
                        letterSpacing: '-0.005em',
                      }}
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ background: s.tone, boxShadow: `0 0 8px ${s.tone}` }}
                      />
                      {s.kicker}
                    </span>
                    {i < DISCOVERY_STAGES.length - 1 && (
                      <span
                        className="hidden lg:inline-flex"
                        style={{ color: s.tone, fontSize: '15px', fontWeight: 700 }}
                      >
                        →
                      </span>
                    )}
                  </div>
                  <div
                    className="text-[#08111F] mb-1.5"
                    style={{
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.28,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="text-[#6F8190] mt-auto"
                    style={{ fontSize: '12px', lineHeight: 1.55 }}
                  >
                    {s.note}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom insight strip */}
          <div
            className="px-6 lg:px-10 py-5 border-t flex flex-wrap items-center justify-between gap-4"
            style={{
              borderColor: '#E6EEF3',
              background: 'linear-gradient(to right, #FFFFFF, #F4FAFB)',
            }}
          >
            <div
              className="text-[#08111F] max-w-[640px]"
              style={{ fontSize: '14.5px', fontWeight: 600, lineHeight: 1.5 }}
            >
              Local visibility brings the visitor.{' '}
              <span className="text-[#4C5E6F]">
                The website system carries them the rest of the way.
              </span>
            </div>
            <span
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{
                background:
                  'linear-gradient(to right, rgba(53,199,216,0.12), rgba(20,184,166,0.06))',
                border: '1px solid rgba(53,199,216,0.30)',
                color: '#0E2740',
                fontSize: '12.5px',
                fontWeight: 700,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
              Visibility connects to the path, not the page
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 05 — Connected handling path
// Featured "First response" card with a Call/Form/Message/Consultation →
// Response surface → Owner handoff strip + 4 supporting handling states in
// a 2×2 grid below. Teal-grounded light surface.
// ============================================================================

const HANDLING_CHANNELS = [
  { icon: PhoneCall, label: 'Call' },
  { icon: Inbox, label: 'Form' },
  { icon: FileText, label: 'Message' },
  { icon: HeartPulse, label: 'Consultation' },
];

type SupportingHandling = {
  icon: LucideIcon;
  label: string;
  note: string;
};

const SUPPORTING_HANDLING: ReadonlyArray<SupportingHandling> = [
  {
    icon: MapPin,
    label: 'Source and context recorded',
    note: 'Which page, which campaign, which intent — captured with the enquiry, not lost.',
  },
  {
    icon: Workflow,
    label: 'Right person sees it',
    note: 'Routed by service area, treatment, or urgency. Not a shared inbox.',
  },
  {
    icon: Repeat,
    label: 'Follow-up is scheduled',
    note: 'Quote chased on a known cadence. Consultation reminders fire automatically.',
  },
  {
    icon: Star,
    label: 'Proof / review request triggered',
    note: 'When the job is marked done or the appointment is kept, the review request goes out.',
  },
];

function SectionHandling() {
  return (
    <section className="section bg-page-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              After the enquiry
            </div>
            <h2 className="text-[#08111F]">
              First response is the critical moment.{' '}
              <span className="text-[#4C5E6F]">Everything else protects it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Most enquiries do not fail at the website. They fail in the hours and days
              after. Connected handling protects the enquiry from disappearing.
            </p>
          </div>
        </div>

        {/* Featured handoff card */}
        <div
          className="relative rounded-3xl overflow-hidden p-7 lg:p-10 mb-5"
          style={{
            background:
              'linear-gradient(135deg, #FFFFFF 0%, #EBF9FB 50%, #DFF8F3 100%)',
            border: '1.5px solid #35C7D845',
            boxShadow:
              '0 20px 56px rgba(53,199,216,0.15), 0 0 0 1px rgba(53,199,216,0.05)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 100% 0%, rgba(53,199,216,0.18) 0%, transparent 50%)',
            }}
          />

          <div className="relative grid grid-cols-12 gap-8 items-center">
            {/* Left text column */}
            <div className="col-span-12 lg:col-span-5">
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-5"
                style={{
                  background: '#35C7D814',
                  border: '1px solid #35C7D845',
                  color: '#0E7D8C',
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                }}
              >
                <span className="w-1 h-1 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                CRITICAL MOMENT
              </span>
              <h3 className="text-[#08111F] mb-3">
                Every channel reaches the same response surface
              </h3>
              <p
                className="text-[#4C5E6F]"
                style={{ fontSize: '14.5px', lineHeight: 1.6 }}
              >
                Calls, forms, messages, and consultation requests all land on one
                surface — with source, context, and an owner attached. No shared
                inbox. No delay while someone figures out who replies.
              </p>
            </div>

            {/* Right handoff strip: Channels → Response surface → Owner */}
            <div className="col-span-12 lg:col-span-7">
              <div
                className="rounded-2xl p-5 lg:p-6"
                style={{
                  background: '#FFFFFF',
                  border: '1px solid #D0EFF4',
                  boxShadow: '0 8px 24px rgba(8,17,31,0.04)',
                }}
              >
                {/* Channels row */}
                <div
                  className="uppercase tracking-[0.14em] mb-3"
                  style={{ color: '#9CA3B0', fontSize: '9.5px', fontWeight: 700 }}
                >
                  Channels in
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {HANDLING_CHANNELS.map(c => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={c.label}
                        className="rounded-lg px-2 py-2.5 text-center"
                        style={{
                          background: '#F6FAFC',
                          border: '1px solid #E6EEF3',
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-md flex items-center justify-center mx-auto mb-1.5"
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid #D0EFF4',
                            color: '#0E7D8C',
                          }}
                        >
                          <Icon size={13} />
                        </div>
                        <div
                          className="text-[#4C5E6F]"
                          style={{ fontSize: '11px', fontWeight: 600 }}
                        >
                          {c.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Converging handoff — 4 channels funnel down into the response surface */}
                <div className="flex justify-center my-4">
                  <svg
                    width="100%"
                    height="36"
                    viewBox="0 0 200 36"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                    className="overflow-visible"
                  >
                    <defs>
                      <linearGradient id="handoffFlow" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#35C7D8" stopOpacity="0" />
                        <stop offset="80%" stopColor="#35C7D8" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#35C7D8" stopOpacity="0.85" />
                      </linearGradient>
                      <radialGradient id="handoffPulse" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#35C7D8" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#35C7D8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    {/* Four converging curves */}
                    <path
                      d="M 25 0 C 25 10, 70 16, 100 20"
                      fill="none"
                      stroke="url(#handoffFlow)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 75 0 C 75 10, 92 16, 100 20"
                      fill="none"
                      stroke="url(#handoffFlow)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 125 0 C 125 10, 108 16, 100 20"
                      fill="none"
                      stroke="url(#handoffFlow)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 175 0 C 175 10, 130 16, 100 20"
                      fill="none"
                      stroke="url(#handoffFlow)"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    {/* Soft halo at convergence */}
                    <circle cx="100" cy="20" r="8" fill="url(#handoffPulse)" />
                    {/* Convergence dot */}
                    <circle cx="100" cy="20" r="2.4" fill="#35C7D8" />
                    {/* Drop into response surface */}
                    <line
                      x1="100"
                      y1="22"
                      x2="100"
                      y2="34"
                      stroke="#35C7D8"
                      strokeOpacity="0.85"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M 96 30 L 100 34 L 104 30"
                      fill="none"
                      stroke="#35C7D8"
                      strokeOpacity="0.85"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Response surface — central pill */}
                <div
                  className="rounded-xl px-4 py-3 flex items-center gap-3 mb-3"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(53,199,216,0.16), rgba(20,184,166,0.10))',
                    border: '1px solid #35C7D850',
                  }}
                >
                  <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8] animate-pulse" />
                  <div className="flex-1 min-w-0">
                    <div
                      className="uppercase tracking-[0.14em]"
                      style={{ color: '#0E7D8C', fontSize: '9.5px', fontWeight: 700 }}
                    >
                      Response surface
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '-0.005em' }}
                    >
                      Fast first reply · logged · routed
                    </div>
                  </div>
                </div>

                {/* Owner row */}
                <div className="flex items-center gap-2">
                  <div
                    className="flex-1 rounded-lg px-3 py-2 flex items-center gap-2"
                    style={{
                      background: '#F6FAFC',
                      border: '1px solid #E6EEF3',
                    }}
                  >
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center"
                      style={{
                        background: '#21B98515',
                        border: '1px solid #21B98540',
                        color: '#21B985',
                      }}
                    >
                      <CheckCircle2 size={12} />
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: '12.5px', fontWeight: 600 }}
                    >
                      Owner · next step
                    </div>
                    <span
                      className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                      style={{
                        background: '#21B98512',
                        border: '1px solid #21B98538',
                        color: '#0F7A57',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      OWNED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2x2 supporting handling states — no numbering */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {SUPPORTING_HANDLING.map(s => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="relative rounded-2xl bg-white p-6 flex gap-4 overflow-hidden"
                style={{
                  border: '1px solid #E6EEF3',
                  boxShadow: '0 4px 16px rgba(8,17,31,0.04)',
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5"
                  style={{ background: '#14B8A6' }}
                />
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(53,199,216,0.16), rgba(20,184,166,0.08))',
                    border: '1px solid #35C7D830',
                    color: '#0E7D8C',
                  }}
                >
                  <Icon size={17} />
                </div>
                <div className="min-w-0">
                  <div
                    className="text-[#08111F]"
                    style={{
                      fontSize: '15.5px',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="mt-1.5 text-[#4C5E6F]"
                    style={{ fontSize: '13px', lineHeight: 1.55 }}
                  >
                    {s.note}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — Five protections, one connected path (FULL DARK ANCHOR)
// Orbital constellation: SWS hub centered with 4 outer protections at
// top/right/bottom/left, connected by dashed SVG cross lines. Grid-texture
// overlay + radial cyan wash. (Swapped in from HomeV2.)
// ============================================================================

type ProtectionAccent = 'cyan' | 'teal' | 'amber' | 'green' | 'purple';

const ACCENT_HEX: Record<ProtectionAccent, string> = {
  cyan: '#35C7D8',
  teal: '#14B8A6',
  amber: '#F4B740',
  green: '#21B985',
  purple: '#9B7DE0',
};

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
}> = [
    {
      icon: MapPin,
      name: 'Local SEO Authority',
      label: 'Found and verified',
      note: 'Nearby customers and patients find the business and verify it before they enquire.',
      accent: 'teal',
    },
    {
      icon: PhoneCall,
      name: 'Lead Response & Handling',
      label: 'First response and routing',
      note: 'Calls, forms, and messages reach the right person fast — and do not get lost after hours.',
      accent: 'amber',
    },
    {
      icon: Workflow,
      name: 'Follow-Up & CRM',
      label: 'Owned next step',
      note: 'Every enquiry has an owner, a status, and a next step that does not depend on memory.',
      accent: 'green',
    },
    {
      icon: Star,
      name: 'Reputation & Review',
      label: 'Work becomes proof',
      note: 'Completed work, appointments, and outcomes turn into visible trust at the right time.',
      accent: 'purple',
    },
  ];

function FiveSystemsFlagship() {
  const Icon = PROTECTION_HUB.icon;
  const color = ACCENT_HEX[PROTECTION_HUB.accent];
  return (
    <div
      className="relative rounded-3xl p-7 lg:p-8 h-full flex flex-col overflow-hidden"
      style={{
        borderRadius: '24px',
        border: `1px solid ${color}55`,
        background:
          'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(53,199,216,0.10) 60%, rgba(255,255,255,0.04) 100%)',
        boxShadow: `0 32px 80px rgba(0,0,0,0.40), 0 0 60px ${color}22`,
      }}
    >
      {/* Glow halo */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}40 0%, transparent 60%)`,
          filter: 'blur(40px)',
        }}
        aria-hidden="true"
      />

      <div className="relative flex items-start justify-between mb-6">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border"
          style={{
            borderColor: `${color}55`,
            background: `${color}1A`,
            color,
            fontSize: '10.5px',
            fontWeight: 700,
            letterSpacing: '0.16em',
          }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: color, boxShadow: `0 0 8px ${color}` }}
          />
          FLAGSHIP
        </span>
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${color}28, ${color}10)`,
            border: `1px solid ${color}50`,
            color,
          }}
        >
          <Icon size={26} />
        </div>
      </div>

      <div
        className="relative text-white"
        style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.018em', lineHeight: 1.15 }}
      >
        {PROTECTION_HUB.name}
      </div>
      <div
        className="relative mt-2"
        style={{ color, fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em' }}
      >
        {PROTECTION_HUB.label}
      </div>
      <p
        className="relative mt-4 text-white/70"
        style={{ fontSize: '14.5px', lineHeight: 1.6 }}
      >
        {PROTECTION_HUB.note}
      </p>

      {/* The four protections it connects */}
      <div
        className="relative mt-6 pt-5 border-t flex-1 flex flex-col justify-end"
        style={{ borderColor: 'rgba(255,255,255,0.10)' }}
      >
        <div
          className="text-white/45 uppercase tracking-[0.16em] mb-3"
          style={{ fontSize: '10px', fontWeight: 700 }}
        >
          Connects to
        </div>
        <div className="flex flex-wrap gap-1.5">
          {PROTECTION_OUTER.map(p => {
            const c = ACCENT_HEX[p.accent];
            return (
              <span
                key={p.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '11px',
                  fontWeight: 600,
                }}
              >
                <span
                  className="w-1 h-1 rounded-full"
                  style={{ background: c, boxShadow: `0 0 6px ${c}` }}
                />
                {p.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
      className="relative rounded-2xl border p-6"
      style={{
        borderColor: hub ? `${color}55` : 'rgba(255,255,255,0.1)',
        boxShadow: hub
          ? `0 24px 60px rgba(0,0,0,0.32), 0 0 50px ${color}22`
          : 'none',
        background: hub
          ? `linear-gradient(180deg, ${color}10, rgba(255,255,255,0.04))`
          : 'rgba(255,255,255,0.04)',
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
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: color, boxShadow: `0 0 6px ${color}` }}
          />
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
        style={{
          fontSize: hub ? '20px' : '17px',
          fontWeight: 700,
          letterSpacing: '-0.01em',
        }}
      >
        {name}
      </div>
      {!hub && (
        <div
          className="mt-1"
          style={{ color, fontSize: '12px', fontWeight: 600, letterSpacing: '0.04em' }}
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

function SectionFiveSystems() {
  return (
    <section
      className="section relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #061323 0%, #0E2740 100%)' }}
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
      <div className="container relative">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-white/55 uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Five protections, one path
            </div>
            <h2 className="text-white">
              One website system.{' '}
              <span className="text-white/55">Four connected protections around it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-white/65" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
              Not five separate services. One connected operating path with five named
              protections — held together by the website system at the centre. None depends
              on someone remembering.
            </p>
          </div>
        </div>

        {/* Asymmetric architecture: SWS flagship on left, 4 protections stacked on right */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
          {/* Flagship — Smart Website Systems */}
          <div className="lg:col-span-5">
            <FiveSystemsFlagship />
          </div>

          {/* 4 outer protections — 2x2 grid on right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {PROTECTION_OUTER.map(p => (
              <ProtectionCard key={p.name} {...p} />
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between flex-wrap gap-4">
          <div className="text-white/55" style={{ fontSize: '14px' }}>
            Most businesses and practices already have parts of this. The work is connecting
            them.
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
// SECTION 07 — Positive operating state board
// Featured "Every enquiry has somewhere to land" tile + 4 smaller positive
// states. Calm green/teal-tinted board. Each tile shows: state label + one
// muted "used to" micro-line + one stronger "now" line. Not a table, not a
// before/after list. After the dark constellation this should feel like
// relief and control.
// ============================================================================

type PositiveState = {
  icon: LucideIcon;
  label: string;
  used: string; // muted micro-line, what used to happen
  now: string; // stronger line, what now happens
};

const FEATURED_STATE: PositiveState = {
  icon: Inbox,
  label: 'Every enquiry has somewhere to land',
  used: 'Form to one inbox. Call to a phone. Consultation to a booking tool.',
  now: 'One capture surface holds every channel, with source and owner attached.',
};

const SMALL_STATES: ReadonlyArray<PositiveState> = [
  {
    icon: CheckCircle2,
    label: 'Every active enquiry has an owner',
    used: 'Whoever picked up the call last',
    now: 'A named person, visible on the enquiry',
  },
  {
    icon: Repeat,
    label: 'Follow-up has a visible next step',
    used: 'Memory and Friday goodwill',
    now: 'Scheduled, owned, not chased',
  },
  {
    icon: Star,
    label: 'Completed work becomes proof',
    used: 'Review depended on who remembered',
    now: 'Captured at the right moment',
  },
  {
    icon: Activity,
    label: 'The owner can see what is in motion',
    used: 'No view of active work',
    now: 'Clear picture, refreshed daily',
  },
];

function SectionShift() {
  const FeaturedIcon = FEATURED_STATE.icon;
  return (
    <section className="section bg-page-white">
      <div className="container">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0F7A57] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              What changes
            </div>
            <h2 className="text-[#08111F]">
              Less leakage.{' '}
              <span className="text-[#4C5E6F]">More work actually handled.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Not a list of features. Five operating states that become true once the
              website system and connected handling are in place.
            </p>
          </div>
        </div>

        {/* Asymmetric state board: featured tile (col-7) + 2x2 small tiles (col-5) */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5">
          {/* Featured */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="relative h-full rounded-3xl overflow-hidden p-8 lg:p-10"
              style={{
                background:
                  'linear-gradient(135deg, #FFFFFF 0%, #DFF8F3 60%, #C9F5EA 100%)',
                border: '1.5px solid #21B98540',
                boxShadow:
                  '0 24px 60px rgba(33,185,133,0.18), 0 0 0 1px rgba(33,185,133,0.05)',
              }}
            >
              {/* soft glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: 'rgba(33,185,133,0.18)',
                  filter: 'blur(50px)',
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(33,185,133,0.22), rgba(20,184,166,0.12))',
                    border: '1px solid #21B98555',
                    color: '#0F7A57',
                  }}
                >
                  <FeaturedIcon size={24} />
                </div>

                <h3 className="text-[#08111F]">{FEATURED_STATE.label}</h3>

                {/* Calm before/after — italic struck "before", clean "now" line */}
                <div className="mt-7 space-y-4">
                  <div
                    className="text-[#9CA3B0] italic"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.55,
                      textDecoration: 'line-through',
                      textDecorationColor: 'rgba(156,163,176,0.45)',
                      textDecorationThickness: '1px',
                    }}
                  >
                    {FEATURED_STATE.used}
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-1.5 w-2 h-2 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985] shrink-0"
                      aria-hidden="true"
                    />
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.5 }}
                    >
                      {FEATURED_STATE.now}
                    </div>
                  </div>
                </div>

                {/* Lifecycle ribbon — what now happens to a single enquiry */}
                <div
                  className="mt-8 pt-6 border-t flex items-center gap-2 flex-wrap"
                  style={{ borderColor: 'rgba(33,185,133,0.20)' }}
                >
                  {['Captured', 'Owned', 'Replied', 'Followed up', 'Reviewed'].map((step, i) => (
                    <div key={step} className="inline-flex items-center gap-2">
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.7)',
                          border: '1px solid rgba(33,185,133,0.30)',
                          color: '#0E2740',
                          fontSize: '11px',
                          fontWeight: 600,
                        }}
                      >
                        <span
                          className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_5px_#21B985]"
                          aria-hidden="true"
                        />
                        {step}
                      </span>
                      {i < 4 && (
                        <span
                          className="text-[#21B985]"
                          style={{ fontSize: '11px', fontWeight: 700 }}
                          aria-hidden="true"
                        >
                          ›
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 4 small positive states — calmer, no chips, no captions */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {SMALL_STATES.map(s => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="relative h-full rounded-2xl bg-white p-5 flex flex-col"
                  style={{
                    border: '1px solid #D0EFF4',
                    boxShadow: '0 4px 16px rgba(20,184,166,0.06)',
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5"
                    style={{
                      background:
                        'linear-gradient(to bottom right, rgba(33,185,133,0.16), rgba(20,184,166,0.08))',
                      border: '1px solid #21B98530',
                      color: '#0F7A57',
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <h4
                    className="text-[#08111F] mb-2"
                    style={{
                      fontSize: '14.5px',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: '-0.005em',
                    }}
                  >
                    {s.label}
                  </h4>
                  <div
                    className="text-[#4C5E6F] mt-auto"
                    style={{ fontSize: '12.5px', fontWeight: 500, lineHeight: 1.5 }}
                  >
                    {s.now}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lower strip */}
        <div
          className="mt-6 rounded-xl px-6 py-5 flex flex-wrap items-center justify-between gap-3"
          style={{
            background: 'linear-gradient(to right, #DFF8F3, #FFFFFF)',
            border: '1px solid #21B98530',
          }}
        >
          <span
            className="text-[#0E2740]"
            style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.55 }}
          >
            The visible change is calm. The owner can finally see the work moving.
          </span>
          <span
            className="inline-flex items-center gap-1.5"
            style={{ color: '#0F7A57', fontSize: '12px', fontWeight: 700 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985]" />
            Held by the system
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 08 — Scenario showcase (content-led, not image-led)
// Premium scenario examples — illustrative working weeks, not portfolio
// entries. One featured Roofing scenario with rich internal structure +
// 4 supporting scenarios in an asymmetric grid. No stock photos, no fake
// screenshots, no placeholder image boxes.
// ============================================================================

type ScenarioPath = ReadonlyArray<{ label: string; tone?: 'leak' | 'live' }>;

type ScenarioData = {
  industry: string;
  audience: 'Service business' | 'Specialist clinic';
  trigger: string;
  slips: ReadonlyArray<string>;
  protects: ReadonlyArray<string>;
  tone: string;
  path: ScenarioPath;
};

const SCENARIO_DATA: ReadonlyArray<ScenarioData> = [
  {
    industry: 'Roofing',
    audience: 'Service business',
    trigger: 'Storm passes. Quote requests stack up while crews are still on jobs.',
    slips: [
      'Calls hit voicemail mid-afternoon.',
      'Friday quote goes quiet over the weekend.',
      'Local listing still shows last summer.',
    ],
    protects: [
      'Missed-call recovery with instant SMS reply.',
      'Owned quote follow-up on a known cadence.',
      'Local visibility that survives the next storm.',
    ],
    tone: '#F4B740',
    path: [
      { label: 'Storm + search' },
      { label: 'Voicemail', tone: 'leak' },
      { label: 'Captured' },
      { label: 'Owned reply', tone: 'live' },
      { label: 'Quote booked' },
    ],
  },
  {
    industry: 'Plumbing',
    audience: 'Service business',
    trigger: 'A same-day call hits voicemail, form, and message channel at once.',
    slips: ['Three inboxes, no single owner.', 'Job goes to whoever replies first.'],
    protects: [
      'One capture surface across every channel.',
      'Fast first response, logged and routed.',
    ],
    tone: '#35C7D8',
    path: [
      { label: 'Call' },
      { label: 'Form' },
      { label: 'Captured' },
      { label: 'Owned reply', tone: 'live' },
    ],
  },
  {
    industry: 'Foundation repair',
    audience: 'Service business',
    trigger: 'Inspection happens on Tuesday. The proposal follow-up quietly drifts.',
    slips: ['Quote drafted, never sent.', 'Owner forgets to circle back.'],
    protects: [
      'Owned follow-up and proposal tracking.',
      'Visible status on every active quote.',
    ],
    tone: '#14B8A6',
    path: [
      { label: 'Site visit' },
      { label: 'Quote drafted' },
      { label: 'Drift', tone: 'leak' },
      { label: 'Chased + signed', tone: 'live' },
    ],
  },
  {
    industry: 'Dental implants',
    audience: 'Specialist clinic',
    trigger: 'A patient compares three providers. The consultation request sits.',
    slips: ['Procedure page unclear.', 'Request lands in a shared inbox.'],
    protects: [
      'Procedure clarity above the fold.',
      'Routed consultation + pre-visit follow-up.',
    ],
    tone: '#9B7DE0',
    path: [
      { label: 'Compare' },
      { label: 'Inbox', tone: 'leak' },
      { label: 'Routed' },
      { label: 'Consult kept', tone: 'live' },
    ],
  },
  {
    industry: 'Dermatology',
    audience: 'Specialist clinic',
    trigger: 'Appointment kept. Patient happy. The review moment is missed.',
    slips: ['No proof signal back on the website.', 'Repeat-care depends on memory.'],
    protects: [
      'Review request timed to the visit.',
      'Repeat-care prompt that runs itself.',
    ],
    tone: '#21B985',
    path: [
      { label: 'Visit' },
      { label: 'Happy' },
      { label: 'Missed', tone: 'leak' },
      { label: 'Proof returns', tone: 'live' },
    ],
  },
];

// Tiny abstract path visual — sequence of micro-pills connected by short lines.
// "leak" tone is muted red, "live" tone is the scenario accent, otherwise neutral.
function ScenarioMiniPath({ path, accent }: { path: ScenarioPath; accent: string }) {
  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {path.map((p, i) => {
        const isLeak = p.tone === 'leak';
        const isLive = p.tone === 'live';
        const dotColor = isLeak ? '#E76F6F' : isLive ? accent : '#9CA3B0';
        return (
          <div key={p.label + i} className="flex items-center gap-1.5">
            <span
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full"
              style={{
                background: isLive
                  ? `${accent}14`
                  : isLeak
                  ? 'rgba(231,111,111,0.10)'
                  : '#F6FAFC',
                border: `1px solid ${
                  isLive
                    ? `${accent}45`
                    : isLeak
                    ? 'rgba(231,111,111,0.32)'
                    : '#E6EEF3'
                }`,
                color: isLive ? accent : isLeak ? '#C04A4A' : '#4C5E6F',
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{
                  background: dotColor,
                  boxShadow: isLive ? `0 0 6px ${accent}` : 'none',
                }}
              />
              {p.label}
            </span>
            {i < path.length - 1 && (
              <span
                className="w-2 h-px"
                style={{ background: '#D8E6EE' }}
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ScenarioFeatured({ data }: { data: ScenarioData }) {
  return (
    <div
      className="relative rounded-3xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFFFFF 0%, #F9FCFD 100%)',
        border: '1px solid #E6EEF3',
        boxShadow: '0 24px 64px rgba(8,17,31,0.08)',
      }}
    >
      {/* Accent wash */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: `${data.tone}1A`,
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />
      {/* Left accent rail */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ background: data.tone }}
        aria-hidden="true"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left content */}
        <div className="col-span-1 lg:col-span-7 p-7 lg:p-10">
          <div className="flex items-center gap-2.5 mb-5">
            <span
              className="inline-flex items-center gap-1.5"
              style={{
                color: data.tone,
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '0.16em',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: data.tone, boxShadow: `0 0 8px ${data.tone}` }}
              />
              FEATURED SCENARIO
            </span>
            <span className="text-[#C8D8E4]">·</span>
            <span
              className="text-[#6F8190]"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              {data.audience} — {data.industry}
            </span>
          </div>

          <h3
            className="text-[#08111F]"
            style={{
              fontSize: 'clamp(26px, 2.8vw, 32px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.18,
              maxWidth: '560px',
            }}
          >
            {data.trigger}
          </h3>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <div
                className="text-[#C04A4A]"
                style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  marginBottom: '12px',
                }}
              >
                WHERE IT SLIPS
              </div>
              <ul className="space-y-2.5">
                {data.slips.map(s => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span
                      className="w-1 h-5 rounded-full shrink-0 mt-0.5"
                      style={{ background: '#E76F6F' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[#4C5E6F]"
                      style={{ fontSize: '13.5px', lineHeight: 1.5 }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div
                style={{
                  color: data.tone,
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  marginBottom: '12px',
                }}
              >
                WHAT THE PATH PROTECTS
              </div>
              <ul className="space-y-2.5">
                {data.protects.map(p => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span
                      className="w-1 h-5 rounded-full shrink-0 mt-0.5"
                      style={{ background: data.tone }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.5 }}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right — abstract scenario surface (no photo, no fake screenshot) */}
        <div
          className="col-span-1 lg:col-span-5 relative p-7 lg:p-9 flex"
          style={{
            background:
              'linear-gradient(135deg, rgba(244,183,64,0.06) 0%, rgba(244,183,64,0.02) 100%)',
            borderLeft: '1px solid #EEF3F6',
          }}
        >
          <div className="w-full self-center">
            <div
              className="text-[#6F8190] mb-3"
              style={{
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.16em',
              }}
            >
              THE WEEK, MAPPED
            </div>
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'linear-gradient(160deg, #061323 0%, #0E2740 100%)',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: `0 18px 40px rgba(8,17,31,0.30), 0 0 24px ${data.tone}1A`,
              }}
            >
              <div className="space-y-3">
                {data.path.map((p, i) => {
                  const isLeak = p.tone === 'leak';
                  const isLive = p.tone === 'live';
                  return (
                    <div key={p.label + i} className="relative flex items-center gap-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{
                          background: isLeak
                            ? '#E76F6F'
                            : isLive
                            ? data.tone
                            : 'rgba(255,255,255,0.30)',
                          boxShadow: isLive
                            ? `0 0 10px ${data.tone}`
                            : isLeak
                            ? '0 0 8px rgba(231,111,111,0.6)'
                            : 'none',
                        }}
                      />
                      <span
                        className={
                          isLeak
                            ? 'text-[#FF9B9B]'
                            : isLive
                            ? 'text-white'
                            : 'text-white/65'
                        }
                        style={{
                          fontSize: '13px',
                          fontWeight: isLive || isLeak ? 700 : 500,
                        }}
                      >
                        {p.label}
                      </span>
                      {(isLeak || isLive) && (
                        <span
                          className="ml-auto uppercase"
                          style={{
                            color: isLeak ? '#FF9B9B' : data.tone,
                            fontSize: '8.5px',
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                          }}
                        >
                          {isLeak ? 'leak' : 'live'}
                        </span>
                      )}
                      {i < data.path.length - 1 && (
                        <span
                          className="absolute left-[4.5px] top-4 w-px h-3"
                          style={{
                            background:
                              'linear-gradient(to bottom, rgba(255,255,255,0.20), transparent)',
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-5 pt-4 border-t flex items-center justify-between"
                style={{ borderColor: 'rgba(255,255,255,0.08)' }}
              >
                <span
                  className="text-white/55"
                  style={{ fontSize: '10.5px', fontWeight: 600 }}
                >
                  Same shape, different week
                </span>
                <span
                  className="inline-flex items-center gap-1"
                  style={{
                    color: data.tone,
                    fontSize: '9.5px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: data.tone, boxShadow: `0 0 6px ${data.tone}` }}
                  />
                  HELD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScenarioCard({ data }: { data: ScenarioData }) {
  return (
    <div
      className="relative rounded-2xl bg-white overflow-hidden flex flex-col h-full"
      style={{
        border: '1px solid #E6EEF3',
        boxShadow: '0 8px 24px rgba(8,17,31,0.05)',
      }}
    >
      {/* Top accent rail */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: data.tone }}
        aria-hidden="true"
      />

      <div className="p-6 lg:p-7 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
          <span
            className="inline-flex items-center gap-2"
            style={{
              color: data.tone,
              fontSize: '12.5px',
              fontWeight: 700,
              letterSpacing: '-0.005em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: data.tone, boxShadow: `0 0 8px ${data.tone}` }}
            />
            {data.industry}
          </span>
          <span
            className="text-[#9CA3B0]"
            style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em' }}
          >
            {data.audience}
          </span>
        </div>

        <div
          className="text-[#08111F]"
          style={{
            fontSize: '17px',
            fontWeight: 700,
            lineHeight: 1.28,
            letterSpacing: '-0.012em',
          }}
        >
          {data.trigger}
        </div>

        <div className="mt-5 space-y-3 pt-5 border-t" style={{ borderColor: '#EEF3F6' }}>
          {data.slips.map(s => (
            <div key={s} className="flex items-start gap-2.5">
              <span
                className="w-1 h-5 rounded-full shrink-0 mt-0.5"
                style={{ background: '#E76F6F' }}
                aria-hidden="true"
              />
              <span
                className="text-[#6F8190]"
                style={{ fontSize: '12.5px', lineHeight: 1.55 }}
              >
                {s}
              </span>
            </div>
          ))}
          {data.protects.map(p => (
            <div key={p} className="flex items-start gap-2.5">
              <span
                className="w-1 h-5 rounded-full shrink-0 mt-0.5"
                style={{ background: data.tone }}
                aria-hidden="true"
              />
              <span
                className="text-[#08111F]"
                style={{ fontSize: '12.5px', fontWeight: 500, lineHeight: 1.55 }}
              >
                {p}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t" style={{ borderColor: '#EEF3F6' }}>
          <ScenarioMiniPath path={data.path} accent={data.tone} />
        </div>
      </div>
    </div>
  );
}

function SectionScenarios() {
  const [featured, ...rest] = SCENARIO_DATA;
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Selected scenarios — illustrative
            </div>
            <h2 className="text-[#08111F]">
              How this shows up{' '}
              <span className="text-[#4C5E6F]">in real working weeks.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Five working weeks across service businesses and specialist clinics.
              Different trades, the same operating shape — and the same connected
              handling around the website.
            </p>
          </div>
        </div>

        {/* Featured scenario — full-width, content-led */}
        <ScenarioFeatured data={featured} />

        {/* 4 supporting scenarios — two lanes feel via positioning */}
        <div className="space-y-5 lg:space-y-6">
          {/* Service business lane */}
          <div>
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.18em] mb-4"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              Service businesses
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
              <ScenarioCard data={rest[0]} />
              <ScenarioCard data={rest[1]} />
            </div>
          </div>

          {/* Specialist clinic lane */}
          <div>
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.18em] mb-4"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              Specialist clinics
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
              <ScenarioCard data={rest[2]} />
              <ScenarioCard data={rest[3]} />
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          className="rounded-xl px-6 py-4 flex flex-wrap items-center justify-between gap-3"
          style={{
            background: 'linear-gradient(to right, #FFFFFF, #F9FCFD)',
            border: '1px solid #E6EEF3',
          }}
        >
          <span
            className="text-[#6F8190]"
            style={{ fontSize: '12.5px', lineHeight: 1.55 }}
          >
            Illustrative scenarios — not named client results. The pattern is real; the
            details here are typical, not measured.
          </span>
          <span
            className="inline-flex items-center gap-1.5"
            style={{ color: '#0F7A57', fontSize: '11.5px', fontWeight: 700 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
            Same handling path
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — Selected website-system surfaces
// Light section, no dark inner panel. One large premium "page mock" surface
// on the left with numbered annotation pins; 4 annotation labels on the right
// each connected to a zone via a thin SVG line. Below: two compact modules
// (Trust band + Enquiry handoff). Labels/chips/pins instead of bullet lists.
// ============================================================================

const SURFACE_PINS: ReadonlyArray<{
  marker: string;
  label: string;
  note: string;
  accent: string;
}> = [
  {
    marker: 'A',
    label: 'Intent line',
    note: 'The headline answers what the visitor came to understand — in their words, above the fold.',
    accent: '#35C7D8',
  },
  {
    marker: 'B',
    label: 'Plain-language explanation',
    note: 'The work itself, written in real words. No feature copy, no jargon, no padding.',
    accent: '#6F8190',
  },
  {
    marker: 'C',
    label: 'Proof placement',
    note: 'Reviews, registrations, coverage — placed mid-page where hesitation forms, not buried in the footer.',
    accent: '#14B8A6',
  },
  {
    marker: 'D',
    label: 'Intent-matched CTA',
    note: 'Call, quote, booking, or consultation — paired with a clear next step and handoff context.',
    accent: '#21B985',
  },
];

function SectionSurfaces() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Selected surfaces
            </div>
            <h2 className="text-[#08111F]">
              The kind of surface design{' '}
              <span className="text-[#4C5E6F]">we build into website systems.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              An abstract page surface with the zones we design into every service or
              treatment page — plus the trust and handoff modules that travel with it.
            </p>
          </div>
        </div>

        {/* Outer light panel containing the surface canvas */}
        <div
          className="rounded-3xl bg-[#F9FCFD] p-6 lg:p-10"
          style={{
            border: '1px solid #E6EEF3',
            boxShadow: '0 12px 48px rgba(8,17,31,0.06)',
          }}
        >
          {/* Top strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <span
                className="uppercase tracking-[0.16em] text-[#0E2740]"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                Service- or treatment-page anatomy
              </span>
            </div>
            <span
              className="text-[#9CA3B0]"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Illustrative · not a client screenshot
            </span>
          </div>

          {/* Page mock surface + annotation labels */}
          <div className="grid grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Page mock (col-7) */}
            <div className="col-span-12 lg:col-span-7">
              <div
                className="rounded-2xl overflow-hidden bg-white"
                style={{
                  border: '1px solid #D8E6EE',
                  boxShadow: '0 18px 56px rgba(8,17,31,0.10)',
                }}
              >
                {/* Browser chrome */}
                <div
                  className="flex items-center gap-1.5 px-4 py-2.5 border-b"
                  style={{ borderColor: '#EEF3F6', background: '#F6FAFC' }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: '#E76F6F66' }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: '#F4B74066' }} />
                  <span className="w-2 h-2 rounded-full" style={{ background: '#21B98566' }} />
                  <span
                    className="ml-3 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #E6EEF3',
                      color: '#6F8190',
                      fontSize: '10px',
                      fontWeight: 600,
                    }}
                  >
                    <ShieldCheck size={9} color="#21B985" />
                    /services/boiler-repair
                  </span>
                </div>

                {/* Page body — real micro-content, no numbered pins */}
                <div className="p-6 lg:p-7 space-y-3.5">
                  {/* INTENT zone */}
                  <div
                    className="relative rounded-lg p-4 lg:p-5"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(53,199,216,0.10), rgba(53,199,216,0.02))',
                      border: '1px solid rgba(53,199,216,0.30)',
                    }}
                  >
                    <span
                      className="absolute top-3 right-3"
                      style={{
                        color: '#35C7D8',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                      }}
                    >
                      A
                    </span>
                    <div
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-2"
                      style={{
                        background: '#FFFFFF',
                        border: '1px solid #D0EFF4',
                        color: '#0E7D8C',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      <MapPin size={8} />
                      NORTH LONDON
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        lineHeight: 1.22,
                        letterSpacing: '-0.008em',
                      }}
                    >
                      Same-day boiler repair — engineer at your door, not a callback.
                    </div>
                    <div
                      className="mt-1 text-[#4C5E6F]"
                      style={{ fontSize: '11.5px', lineHeight: 1.5 }}
                    >
                      Gas Safe registered. Local. Fixed-price quotes before any work starts.
                    </div>
                  </div>

                  {/* EXPLAIN zone */}
                  <div
                    className="relative rounded-lg p-4 lg:p-5"
                    style={{ background: '#F6FAFC', border: '1px solid #E6EEF3' }}
                  >
                    <span
                      className="absolute top-3 right-3"
                      style={{
                        color: '#6F8190',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                      }}
                    >
                      B
                    </span>
                    <div
                      className="text-[#08111F] mb-1.5"
                      style={{ fontSize: '12px', fontWeight: 700 }}
                    >
                      What we fix today
                    </div>
                    <div
                      className="text-[#4C5E6F]"
                      style={{ fontSize: '11.5px', lineHeight: 1.55 }}
                    >
                      No heat, no hot water, pressure dropping, error codes, knocking
                      pipes, intermittent shutoff. Most repairs handled in one visit.
                    </div>
                  </div>

                  {/* PROOF zone */}
                  <div
                    className="relative rounded-lg p-4 lg:p-5"
                    style={{
                      background: 'rgba(20,184,166,0.08)',
                      border: '1px solid rgba(20,184,166,0.28)',
                    }}
                  >
                    <span
                      className="absolute top-3 right-3"
                      style={{
                        color: '#14B8A6',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                      }}
                    >
                      C
                    </span>
                    <div className="flex items-center gap-1.5 mb-2">
                      {[0, 1, 2, 3, 4].map(i => (
                        <Star key={i} size={10} fill="#F4B740" color="#F4B740" />
                      ))}
                      <span
                        className="ml-1 text-[#0E2740]"
                        style={{ fontSize: '11px', fontWeight: 700 }}
                      >
                        4.9
                      </span>
                      <span
                        className="ml-1 text-[#6F8190]"
                        style={{ fontSize: '10px', fontWeight: 600 }}
                      >
                        · 312 verified reviews
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { label: 'Gas Safe', icon: ShieldCheck },
                        { label: 'N1—N22', icon: MapPin },
                        { label: 'Insured to £2M', icon: CheckCircle2 },
                        { label: 'Reply in minutes', icon: Clock },
                      ].map(t => {
                        const Icon = t.icon;
                        return (
                          <span
                            key={t.label}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white"
                            style={{
                              border: '1px solid #D0EFF4',
                              color: '#0E7D8C',
                              fontSize: '10px',
                              fontWeight: 600,
                            }}
                          >
                            <Icon size={9} />
                            {t.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA zone */}
                  <div
                    className="relative rounded-lg p-4 lg:p-5"
                    style={{
                      background:
                        'linear-gradient(to right, rgba(33,185,133,0.10), rgba(33,185,133,0.02))',
                      border: '1px solid rgba(33,185,133,0.30)',
                    }}
                  >
                    <span
                      className="absolute top-3 right-3"
                      style={{
                        color: '#21B985',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.18em',
                      }}
                    >
                      D
                    </span>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md"
                        style={{
                          background: '#08111F',
                          color: '#FFFFFF',
                          fontSize: '11.5px',
                          fontWeight: 700,
                        }}
                      >
                        Get a same-day quote
                        <ArrowRight size={11} />
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-[#0E2740]"
                        style={{ fontSize: '11.5px', fontWeight: 700 }}
                      >
                        <PhoneCall size={11} color="#0F7A57" />
                        020 7946 0214
                      </span>
                    </div>
                    <div
                      className="mt-2 text-[#6F8190]"
                      style={{ fontSize: '10.5px', fontWeight: 500 }}
                    >
                      Goes to the next available engineer, not a shared inbox.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Annotation labels (col-5) — editorial marginalia */}
            <div className="col-span-12 lg:col-span-5">
              <div className="mb-4">
                <span
                  className="text-[#0E2740]"
                  style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.005em' }}
                >
                  Four zones every service or treatment page has to carry.
                </span>
              </div>
              <div className="space-y-3">
                {SURFACE_PINS.map(p => (
                  <div
                    key={p.marker}
                    className="relative flex items-start gap-3.5 rounded-xl px-4 py-3.5"
                    style={{ background: '#FFFFFF', border: '1px solid #E6EEF3' }}
                  >
                    {/* Accent rail */}
                    <span
                      className="absolute left-0 top-3 bottom-3 w-0.5 rounded-full"
                      style={{ background: p.accent }}
                      aria-hidden="true"
                    />
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-1"
                      style={{
                        background: `${p.accent}14`,
                        border: `1px solid ${p.accent}45`,
                        color: p.accent,
                        fontSize: '12.5px',
                        fontWeight: 700,
                      }}
                    >
                      {p.marker}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[#08111F]"
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          letterSpacing: '-0.005em',
                        }}
                      >
                        {p.label}
                      </div>
                      <div
                        className="mt-0.5 text-[#4C5E6F]"
                        style={{ fontSize: '12.5px', lineHeight: 1.55 }}
                      >
                        {p.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Asymmetric supporting modules below the canvas */}
          <div className="grid grid-cols-12 gap-4 lg:gap-5 mt-8">
            {/* Trust band module — featured wider */}
            <div
              className="col-span-12 lg:col-span-7 relative rounded-2xl bg-white p-6 lg:p-7 overflow-hidden"
              style={{
                border: '1px solid #D0EFF4',
                boxShadow: '0 8px 28px rgba(20,184,166,0.08)',
              }}
            >
              <div
                className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none"
                style={{
                  background: 'rgba(20,184,166,0.10)',
                  filter: 'blur(48px)',
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{ color: '#0E7D8C', fontSize: '10.5px', fontWeight: 700 }}
                  >
                    Trust band module
                  </span>
                </div>
                <h3
                  className="text-[#08111F] mb-1"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.25,
                  }}
                >
                  Signals placed where hesitation forms
                </h3>
                <p
                  className="text-[#6F8190] mb-5"
                  style={{ fontSize: '13px', lineHeight: 1.55 }}
                >
                  Trust is read where the decision happens — not at the footer.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Local service area', icon: MapPin },
                    { label: 'Verified business', icon: ShieldCheck },
                    { label: 'Real recent work', icon: Star },
                    { label: 'Reply in minutes', icon: Clock },
                    { label: 'Owner-led', icon: Briefcase },
                  ].map(t => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={t.label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                        style={{
                          background: '#F6FAFC',
                          border: '1px solid #D0EFF4',
                          color: '#0E2740',
                          fontSize: '11px',
                          fontWeight: 600,
                        }}
                      >
                        <Icon size={11} color="#14B8A6" />
                        {t.label}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Enquiry handoff module — compact support */}
            <div
              className="col-span-12 lg:col-span-5 rounded-2xl bg-white p-6"
              style={{
                border: '1px solid #E6EEF3',
                boxShadow: '0 4px 16px rgba(8,17,31,0.04)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                <span
                  className="uppercase tracking-[0.14em]"
                  style={{ color: '#0F7A57', fontSize: '10.5px', fontWeight: 700 }}
                >
                  Enquiry handoff
                </span>
              </div>
              <h3
                className="text-[#08111F] mb-4"
                style={{
                  fontSize: '15.5px',
                  fontWeight: 700,
                  letterSpacing: '-0.005em',
                  lineHeight: 1.3,
                }}
              >
                Context travels with every enquiry
              </h3>
              <div className="space-y-1.5">
                {[
                  { k: 'Source', v: 'Service page · roofing' },
                  { k: 'Intent', v: 'Quote request' },
                  { k: 'Owner', v: 'Routed · M. Patel' },
                  { k: 'Status', v: 'Active · follow-up due' },
                ].map(row => (
                  <div
                    key={row.k}
                    className="flex items-center justify-between rounded px-3 py-1.5"
                    style={{ background: '#F6FAFC', border: '1px solid #E6EEF3' }}
                  >
                    <span
                      className="uppercase tracking-[0.14em] text-[#9CA3B0]"
                      style={{ fontSize: '9px', fontWeight: 700 }}
                    >
                      {row.k}
                    </span>
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: '11.5px', fontWeight: 600 }}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p
          className="mt-6 max-w-2xl text-[#6F8190]"
          style={{ fontSize: '13.5px', lineHeight: 1.6 }}
        >
          Illustrative surface patterns — not specific client deliverables. No real
          screenshots, named clients, or outcomes are implied.
        </p>
      </div>
    </section>
  );
}


// ============================================================================
// SECTION 10 — Built for established service businesses and specialist clinics
// Fit / Not for two-column panel
// ============================================================================

const FIT_FOR_LIST = [
  'Established service business or specialist clinic where work already comes in',
  'Real enquiries, jobs, appointments, or consultation requests already exist',
  'Quote, booking, or follow-up handling has visible gaps',
  'Owner wants practical structure, not a prettier website',
  'Long-term stability and compounding trust matter more than a launch event',
];

const FIT_NOT_FOR_LIST = [
  'Cheapest possible website package',
  'Guaranteed rankings or “dominate Google” expectations',
  'AI chatbot framed as the offer instead of practical handling',
  'Looks-only redesign with no business context',
  'Healthcare buyer expecting EMR, compliance, or treatment-outcome claims',
];

function SectionFit() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="max-w-[760px]">
          <div
            className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 600 }}
          >
            Built for
          </div>
          <h2 className="text-[#08111F]">
            Built for established service businesses and specialist clinics.
          </h2>
          <p
            className="mt-6 text-[#4C5E6F]"
            style={{ fontSize: '16.5px', lineHeight: 1.65 }}
          >
            The work suits operators where moving parts already exist and the cost of
            leakage is real. It does not suit looks-only redesigns, ranking-guarantee
            seekers, or AI-hype buyers.
          </p>
          <p
            className="mt-4 text-[#6F8190]"
            style={{ fontSize: '14.5px', lineHeight: 1.6 }}
          >
            We do not create demand from zero. We make sure the demand you already have
            stops slipping before it becomes paid work or a kept appointment.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 rounded-2xl bg-gradient-to-br from-[#C9F5EA] to-[#E8FAF5] border border-[#21B985]/35 p-9 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#21B985]/5 -translate-y-1/2 translate-x-1/4" />
            <div className="relative">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#21B985] text-white shadow-[0_0_12px_rgba(33,185,133,0.4)]">
                  <Check size={14} strokeWidth={3} />
                </span>
                <span
                  className="text-[#08111F]"
                  style={{ fontSize: '18px', fontWeight: 700 }}
                >
                  Strong fit
                </span>
              </div>
              <p
                className="text-[#0E4A30] mb-6"
                style={{ fontSize: '13.5px', lineHeight: 1.6 }}
              >
                Demand already exists but too much slips before it becomes paid work or a
                kept appointment. These businesses and practices get the most from a
                connected operating layer.
              </p>
              <ul className="space-y-3.5">
                {FIT_FOR_LIST.map(f => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] mt-2 shrink-0" />
                    <span
                      className="text-[#0E1F15]"
                      style={{ fontSize: '15.5px', lineHeight: 1.55 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-4 rounded-2xl bg-[#F2F5F7] border border-[#D0DCE5] p-9 relative">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#D8E6EE] text-[#6F8190]">
                <Minus size={14} strokeWidth={3} />
              </span>
              <span
                className="text-[#08111F]"
                style={{ fontSize: '17px', fontWeight: 600 }}
              >
                Probably not right
              </span>
            </div>
            <ul className="space-y-3.5">
              {FIT_NOT_FOR_LIST.map(f => (
                <li key={f} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F8190] mt-2 shrink-0" />
                  <span
                    className="text-[#4C5E6F]"
                    style={{ fontSize: '14.5px', lineHeight: 1.55 }}
                  >
                    {f}
                  </span>
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
// SECTION 11 — Practical review (consultation feel)
// A single premium invitation panel. Two inner columns: what gets reviewed
// together, and what the owner walks away with. No status chips, no numbered
// steps, no dashboard chrome — this is a working conversation, not a process
// deck.
// ============================================================================

type ReviewLine = { label: string; note: string };

const REVIEW_AREAS: ReadonlyArray<ReviewLine> = [
  {
    label: 'The visible website',
    note:
      'Service or treatment pages, intent matching, plain-language explanation, the path to a clear next step.',
  },
  {
    label: 'Local trust',
    note:
      'Local visibility, service-area signals, where proof sits relative to the moment hesitation forms.',
  },
  {
    label: 'How enquiries actually land',
    note:
      'Where calls, forms, and consultation requests end up — and who owns them once they do.',
  },
  {
    label: 'First response and follow-up',
    note:
      'How fast the first reply goes out, and whether quotes, reminders, and consultations get chased without anyone remembering.',
  },
  {
    label: 'Proof that returns to the page',
    note:
      'Whether good work becomes reviews, references, and visible trust on the pages that need it.',
  },
];

type Deliverable = { title: string; body: string };

const REVIEW_DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    title: 'A clear picture of where work is slipping',
    body:
      'Not a generic audit. Specific surfaces, specific moments, written so a non-marketing reader can act on it.',
  },
  {
    title: 'A short list of what to fix first',
    body:
      'The two or three changes that protect the most demand for the least disruption — ranked, not exhaustive.',
  },
  {
    title: 'A practical plan for what to rebuild and what to connect',
    body:
      'What needs new structure. What only needs wiring. Honest about what is worth doing and what is not.',
  },
];

function SectionDelivery() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              The first conversation
            </div>
            <h2 className="text-[#08111F]">
              We start with a review,{' '}
              <span className="text-[#4C5E6F]">not a pitch.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              A short working session with the owner or practice manager. We inspect the
              website and the handling path together — calmly, in real terms, with the
              specifics on the table. No discovery deck, no three-step ritual.
            </p>
          </div>
        </div>

        {/* Consultation invitation card */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #F9FCFD 100%)',
            border: '1px solid #E6EEF3',
            boxShadow: '0 24px 64px rgba(8,17,31,0.08)',
          }}
        >
          {/* Soft accent wash */}
          <div
            className="absolute -top-20 -right-24 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'rgba(53,199,216,0.10)',
              filter: 'blur(60px)',
            }}
            aria-hidden="true"
          />

          {/* Body — two columns */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* LEFT — what we review */}
            <div
              className="col-span-1 lg:col-span-7 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: '#EEF3F6' }}
            >
              <div
                className="text-[#0E7D8C]"
                style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.16em' }}
              >
                WHAT WE REVIEW TOGETHER
              </div>
              <h3
                className="text-[#08111F] mt-3"
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.2,
                }}
              >
                Five surfaces, in plain conversation.
              </h3>
              <p
                className="mt-3 text-[#4C5E6F]"
                style={{ fontSize: '14px', lineHeight: 1.6 }}
              >
                We walk through them on a call together. Specifics, not generalities.
              </p>

              <ul className="mt-8 space-y-6">
                {REVIEW_AREAS.map(item => (
                  <li key={item.label} className="flex items-start gap-5">
                    {/* Slim vertical accent — no chips */}
                    <div className="relative pt-1 shrink-0">
                      <span
                        className="block w-px h-full bg-[#D0EFF4]"
                        style={{ minHeight: '54px' }}
                        aria-hidden="true"
                      />
                      <span
                        className="absolute top-1 -left-[3px] w-[7px] h-[7px] rounded-full"
                        style={{
                          background: '#14B8A6',
                          boxShadow: '0 0 0 3px rgba(20,184,166,0.12)',
                        }}
                        aria-hidden="true"
                      />
                    </div>
                    <div className="min-w-0">
                      <div
                        className="text-[#08111F]"
                        style={{
                          fontSize: '16px',
                          fontWeight: 700,
                          letterSpacing: '-0.005em',
                          lineHeight: 1.3,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        className="mt-1.5 text-[#4C5E6F]"
                        style={{ fontSize: '13.5px', lineHeight: 1.6 }}
                      >
                        {item.note}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — what you receive */}
            <div
              className="col-span-1 lg:col-span-5 p-8 lg:p-12"
              style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECF9FB 100%)' }}
            >
              <div
                className="text-[#0F7A57]"
                style={{ fontSize: '11.5px', fontWeight: 700, letterSpacing: '0.16em' }}
              >
                WHAT YOU WALK AWAY WITH
              </div>
              <h3
                className="text-[#08111F] mt-3"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  letterSpacing: '-0.015em',
                  lineHeight: 1.2,
                }}
              >
                Three things, written for the owner.
              </h3>
              <p
                className="mt-3 text-[#4C5E6F]"
                style={{ fontSize: '14px', lineHeight: 1.6 }}
              >
                You keep what we put together — whether you go ahead with us or not.
              </p>

              <div className="mt-8 space-y-5">
                {REVIEW_DELIVERABLES.map(d => (
                  <div
                    key={d.title}
                    className="rounded-xl p-5"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #D0EFF4',
                      boxShadow: '0 4px 14px rgba(20,184,166,0.06)',
                    }}
                  >
                    <div
                      className="flex items-start gap-3"
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: 'rgba(33,185,133,0.12)',
                          border: '1px solid rgba(33,185,133,0.40)',
                          color: '#0F7A57',
                        }}
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <div>
                        <div
                          className="text-[#08111F]"
                          style={{
                            fontSize: '14.5px',
                            fontWeight: 700,
                            lineHeight: 1.3,
                            letterSpacing: '-0.005em',
                          }}
                        >
                          {d.title}
                        </div>
                        <div
                          className="mt-1.5 text-[#4C5E6F]"
                          style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                        >
                          {d.body}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer — calm CTA */}
          <div
            className="relative px-8 lg:px-12 py-6 border-t flex flex-wrap items-center justify-between gap-4"
            style={{
              borderColor: '#EEF3F6',
              background: 'linear-gradient(to right, #FFFFFF, #F9FCFD)',
            }}
          >
            <div className="max-w-[640px]">
              <div
                className="text-[#08111F]"
                style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.005em' }}
              >
                A 60–90 minute working session.
              </div>
              <div
                className="mt-1 text-[#6F8190]"
                style={{ fontSize: '13px', lineHeight: 1.55 }}
              >
                Quiet, practical, and only paid for if you choose to take it forward. No
                pitch deck, no sales chase, no upsell.
              </div>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md transition-colors"
              style={{
                background: '#08111F',
                color: '#FFFFFF',
                fontSize: '13.5px',
                fontWeight: 700,
              }}
            >
              Request a review
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ — kept inline before the final CTA
// ============================================================================

const FAQ_ITEMS = [
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
    q: 'Is SEO included?',
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

function SectionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-page-mist">
      <div className="container">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Questions
            </div>
            <h2 className="text-[#08111F]">Straight answers.</h2>
            <p
              className="mt-5 text-[#4C5E6F]"
              style={{ fontSize: '15px', lineHeight: 1.65 }}
            >
              Practical questions, answered without spin.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {FAQ_ITEMS.map((f, i) => (
                <button
                  key={f.q}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 hover:bg-[#F6FAFC] transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: '15.5px', fontWeight: 600 }}
                    >
                      {f.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </div>
                  {open === i && (
                    <p
                      className="mt-3 text-[#4C5E6F]"
                      style={{ fontSize: '14.5px', lineHeight: 1.65 }}
                    >
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
// SECTION 12 — Final diagnostic CTA
// ============================================================================

const CTA_EXPECTATIONS = [
  { num: '01', text: 'Where work is coming in today' },
  { num: '02', text: 'What is being held — and what is not' },
  { num: '03', text: 'What to fix first' },
  { num: '04', text: 'What changes when the path is connected' },
];

function SectionCTA() {
  return (
    <section id="cta" className="section bg-page-mist">
      <div className="container">
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
              <h2 className="text-white">
                If your website is not supporting enquiries properly,{' '}
                <span className="text-white/55">it is worth reviewing.</span>
              </h2>

              <p
                className="mt-6 text-white/65 max-w-[540px]"
                style={{ fontSize: '16.5px', lineHeight: 1.65 }}
              >
                We start by reviewing the website and the handling path together — how
                people find the business or practice, whether they trust it, what they do
                next, where the enquiry lands, who owns follow-up, and whether good work
                becomes proof.
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
                <div
                  className="text-white/55 uppercase tracking-[0.14em] mb-5"
                  style={{ fontSize: '10.5px', fontWeight: 600 }}
                >
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
                      <span
                        className="text-white/90"
                        style={{ fontSize: '15.5px', lineHeight: 1.5 }}
                      >
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

export function Home() {
  return (
    <main>
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
      <SectionFAQ />
      <SectionCTA />
    </main>
  );
}
