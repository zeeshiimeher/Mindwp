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
 *  04  Split operating table — scattered fragments (offset, dashed) vs aligned path (vertical rail) on one wide panel
 *  05  Connected handling path — featured "Every channel reaches the response surface" handoff card + 4 supporting handling states (2x2)
 *  06  Five Protections, One Connected Path — FULL DARK constellation, SWS hub + 4 outer
 *  07  Positive operating state board — featured anchor state ("Every enquiry has somewhere to land") + 4 small positive-state tiles (calm green/teal)
 *  08  How This Shows Up — flagship Roofing scenario + 4 supporting scenarios in 2x2; each card uses an abstract dark surface preview (no "to be added" placeholder)
 *  09  Selected surfaces — asymmetric dark inner panel: large Service-page anatomy diagram + 2 stacked smaller surfaces (Trust band, Enquiry handoff)
 *  10  Fit / Not for — diagnostic two-column panel
 *  11  Engagement path — 3 connected step nodes on a horizontal gradient rail, centered icons
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
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-36 grid grid-cols-12 gap-8 lg:gap-10 items-center">
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
                className={`grid grid-cols-12 items-center gap-3 px-4 py-4 rounded-lg border transition-colors ${
                  isLeaking
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
    <section id="leak" className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Operating leak map
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              The business is working.
              <br />
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
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              The website is the control point
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Not just a page.
              <br />
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

          <div className="col-span-12 lg:col-span-7">
            {/* Top — visible surface */}
            <div className="rounded-2xl border-2 border-[#E6EEF3] bg-white p-6 shadow-[0_8px_32px_rgba(8,17,31,0.07)]">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-[#F6FAFC] border border-[#D8E6EE] flex items-center justify-center text-[#4C5E6F]">
                  <Globe size={20} />
                </div>
                <div className="flex-1">
                  <div
                    className="text-[#6F8190] uppercase tracking-[0.14em]"
                    style={{ fontSize: '10.5px', fontWeight: 600 }}
                  >
                    Surface
                  </div>
                  <div
                    className="text-[#08111F] mt-0.5"
                    style={{ fontSize: '16px', fontWeight: 600 }}
                  >
                    Visible website
                  </div>
                </div>
                <div className="text-[#6F8190]" style={{ fontSize: '12.5px' }}>
                  What the visitor or patient sees
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Service / treatment pages', 'Local coverage', 'Enquiry & booking paths'].map(
                  item => (
                    <div
                      key={item}
                      className="rounded-lg bg-[#F6FAFC] border border-[#E6EEF3] px-3 py-2.5 text-center"
                    >
                      <div className="text-[#4C5E6F]" style={{ fontSize: '12px', fontWeight: 500 }}>
                        {item}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 my-2">
              <div className="w-px h-5 bg-[#C8D8E4]" />
              <div
                className="text-[#6F8190] uppercase tracking-[0.12em]"
                style={{ fontSize: '9px', fontWeight: 700 }}
              >
                underneath
              </div>
              <div className="w-px h-5 bg-[#C8D8E4]" />
            </div>

            {/* Middle — working layers */}
            <div className="rounded-2xl border-2 border-[#35C7D8]/40 bg-gradient-to-b from-[#EBF9FB] to-[#F6FCFD] p-6 shadow-[0_4px_20px_rgba(53,199,216,0.10)]">
              <div
                className="text-[#0E7D8C] uppercase tracking-[0.14em] mb-4"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                What runs underneath
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {CONTROL_MIDDLE.map(m => {
                  const Icon = m.icon;
                  return (
                    <div
                      key={m.label}
                      className="rounded-xl bg-white border border-[#D0EFF4] p-4 flex flex-col items-center text-center gap-2 shadow-[0_2px_8px_rgba(8,17,31,0.04)]"
                    >
                      <div className="w-11 h-11 rounded-lg bg-[#35C7D8]/14 text-[#0E6879] flex items-center justify-center">
                        <Icon size={18} />
                      </div>
                      <div className="text-[#0E2740]" style={{ fontSize: '12.5px', fontWeight: 600 }}>
                        {m.label}
                      </div>
                      <div className="text-[#4C5E6F]" style={{ fontSize: '11px', lineHeight: 1.35 }}>
                        {m.note}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center gap-1 my-2">
              <div className="w-px h-5 bg-[#C8D8E4]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <div className="w-px h-5 bg-[#C8D8E4]" />
            </div>

            {/* Bottom — foundation */}
            <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 border border-[#35C7D8]/20 shadow-[0_24px_64px_rgba(8,17,31,0.28),0_0_40px_rgba(53,199,216,0.06)]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#35C7D8] shadow-[0_0_12px_#35C7D8]" />
                </div>
                <div className="flex-1">
                  <div
                    className="text-white/50 uppercase tracking-[0.14em]"
                    style={{ fontSize: '10.5px', fontWeight: 600 }}
                  >
                    Foundation
                  </div>
                  <div className="text-white mt-0.5" style={{ fontSize: '16px', fontWeight: 600 }}>
                    Smart Website Systems
                  </div>
                </div>
                <div className="text-white/55" style={{ fontSize: '12.5px' }}>
                  The connected handling path
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

// Paired contrast rows — same topics, different operating states. The visual
// difference (scattered vs aligned silhouette) does the work, not the text.
type ContrastTopic = {
  topic: string;
  normal: string;
  connected: string;
};

const CONTRAST_TOPICS: ReadonlyArray<ContrastTopic> = [
  {
    topic: 'Page clarity',
    normal: 'Service pages list what you do',
    connected: 'Pages explain the work and the next step',
  },
  {
    topic: 'Enquiry capture',
    normal: 'Form to one inbox, call to a phone, message somewhere else',
    connected: 'Every channel lands on one capture surface with context',
  },
  {
    topic: 'First response',
    normal: 'Whoever sees it first replies — eventually',
    connected: 'Fast first response, logged with source and owner',
  },
  {
    topic: 'Follow-up',
    normal: 'Quote goes out, then it depends on memory',
    connected: 'Follow-up runs on schedule without anyone chasing',
  },
  {
    topic: 'Review / proof',
    normal: 'Reviews happen when someone remembers',
    connected: 'Review request fires at the moment work is done',
  },
  {
    topic: 'Owner visibility',
    normal: 'No view of what is in motion',
    connected: 'Owner sees every active enquiry and where it stands',
  },
];

function SectionContrast() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Built differently
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              A website that exists.
              <br />
              <span className="text-[#4C5E6F]">A system that carries the work.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              Same pages on the surface. Different operating state behind them. Six
              moments where the contrast becomes visible.
            </p>
          </div>
        </div>

        {/* Split operating table — scattered fragments on left, aligned path on right */}
        <div
          className="relative rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{
            background: 'linear-gradient(90deg, #FCFDFE 0%, #F6FAFC 50%, #F0FCF9 100%)',
            border: '1px solid #E6EEF3',
            boxShadow: '0 12px 60px rgba(8,17,31,0.05)',
          }}
        >
          {/* LEFT — Normal: scattered fragments */}
          <div className="relative px-6 lg:px-10 py-10 lg:py-12 border-b lg:border-b-0 lg:border-r" style={{ borderColor: '#E6EEF3' }}>
            <div className="flex items-center justify-between mb-8">
              <span
                className="uppercase tracking-[0.16em]"
                style={{ color: '#6F8190', fontSize: '11px', fontWeight: 700 }}
              >
                Normal website
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{
                  background: '#E76F6F12',
                  border: '1px solid #E76F6F38',
                  color: '#C04A4A',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                }}
              >
                <span className="w-1 h-1 rounded-full bg-[#E76F6F]" />
                SCATTERED
              </span>
            </div>

            <div className="relative" style={{ minHeight: '420px' }}>
              {CONTRAST_TOPICS.map((t, i) => {
                // Manual offsets: alternating horizontal positions, slight rotation.
                const offsets = [
                  { left: '0%', top: '0px', rotate: '-1.2deg' },
                  { left: '18%', top: '74px', rotate: '0.9deg' },
                  { left: '4%', top: '152px', rotate: '-0.6deg' },
                  { left: '24%', top: '228px', rotate: '1.2deg' },
                  { left: '6%', top: '306px', rotate: '-0.9deg' },
                  { left: '18%', top: '380px', rotate: '0.4deg' },
                ];
                const o = offsets[i];
                return (
                  <div
                    key={t.topic}
                    className="absolute"
                    style={{
                      left: o.left,
                      top: o.top,
                      transform: `rotate(${o.rotate})`,
                      width: '78%',
                      maxWidth: '320px',
                    }}
                  >
                    <div
                      className="rounded-lg bg-white px-4 py-3"
                      style={{
                        border: '1px dashed #C8D8E4',
                        boxShadow: '0 4px 14px rgba(8,17,31,0.05)',
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]" />
                        <span
                          className="uppercase"
                          style={{
                            color: '#9CA3B0',
                            fontSize: '9.5px',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                          }}
                        >
                          {t.topic}
                        </span>
                      </div>
                      <div
                        className="text-[#4C5E6F]"
                        style={{ fontSize: '13px', lineHeight: 1.4 }}
                      >
                        {t.normal}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Connected: aligned path with vertical rail */}
          <div className="relative px-6 lg:px-10 py-10 lg:py-12">
            <div className="flex items-center justify-between mb-8">
              <span
                className="uppercase tracking-[0.16em]"
                style={{ color: '#0E7D8C', fontSize: '11px', fontWeight: 700 }}
              >
                Connected system
              </span>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                style={{
                  background: '#14B8A615',
                  border: '1px solid #14B8A638',
                  color: '#0E7D8C',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                }}
              >
                <span className="w-1 h-1 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
                ALIGNED
              </span>
            </div>

            <div className="relative" style={{ minHeight: '420px' }}>
              {/* Vertical alignment rail */}
              <div
                className="absolute left-[18px] top-0 bottom-0 w-px"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent, #14B8A6 12%, #14B8A6 88%, transparent)',
                }}
                aria-hidden="true"
              />

              <div className="space-y-3 relative">
                {CONTRAST_TOPICS.map(t => (
                  <div key={t.topic} className="flex items-start gap-4">
                    {/* Rail node */}
                    <div className="relative pt-3 shrink-0" style={{ width: '36px' }}>
                      <span
                        className="absolute left-[12px] w-[14px] h-[14px] rounded-full flex items-center justify-center"
                        style={{
                          background: '#FFFFFF',
                          border: '2px solid #14B8A6',
                          boxShadow: '0 0 0 3px rgba(20,184,166,0.10)',
                        }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#14B8A6]" />
                      </span>
                    </div>
                    <div
                      className="flex-1 rounded-lg bg-white px-4 py-3"
                      style={{
                        border: '1px solid #D0EFF4',
                        boxShadow: '0 4px 14px rgba(20,184,166,0.06)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className="uppercase"
                          style={{
                            color: '#0E7D8C',
                            fontSize: '9.5px',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                          }}
                        >
                          {t.topic}
                        </span>
                        <span
                          className="inline-flex items-center gap-1"
                          style={{
                            color: '#0E7D8C',
                            fontSize: '9px',
                            fontWeight: 700,
                            letterSpacing: '0.14em',
                          }}
                        >
                          <span className="w-1 h-1 rounded-full bg-[#14B8A6]" />
                          OWNED
                        </span>
                      </div>
                      <div
                        className="text-[#08111F]"
                        style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.4 }}
                      >
                        {t.connected}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom strip spans both columns */}
          <div
            className="lg:col-span-2 px-6 lg:px-10 py-5 border-t flex flex-wrap items-center justify-between gap-3"
            style={{
              borderColor: '#E6EEF3',
              background: 'linear-gradient(to right, #F9FCFD, #FFFFFF)',
            }}
          >
            <span className="text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.55 }}>
              Same pages on the surface. One is scattered. The other is aligned.
            </span>
            <span
              className="inline-flex items-center gap-1.5"
              style={{ color: '#0E7D8C', fontSize: '12px', fontWeight: 700 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
              The connected side is what gets built
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
    <section
      className="py-24"
      style={{
        background:
          'linear-gradient(180deg, #EBF9FB 0%, #F6FCFD 50%, #FFFFFF 100%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              After the enquiry
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '50px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              First response is the critical moment.
              <br />
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
              <h3
                className="text-[#08111F] mb-3"
                style={{
                  fontSize: '28px',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                }}
              >
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

                {/* Connector: SVG path with downward arrow */}
                <div className="flex justify-center my-3">
                  <svg width="100%" height="28" viewBox="0 0 200 28" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="handoffFlow" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#35C7D8" stopOpacity="0.0" />
                        <stop offset="100%" stopColor="#35C7D8" stopOpacity="0.6" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 30 0 Q 30 14, 100 14 Q 170 14, 170 0 M 100 14 L 100 26 M 95 21 L 100 26 L 105 21"
                      fill="none"
                      stroke="url(#handoffFlow)"
                      strokeWidth="1.2"
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

        {/* 2x2 supporting handling states */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {SUPPORTING_HANDLING.map((s, i) => {
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
                <div className="flex flex-col items-center gap-2 shrink-0 pt-1">
                  <span
                    className="tabular-nums"
                    style={{
                      color: '#9CA3B0',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                    }}
                  >
                    0{i + 2}
                  </span>
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(to bottom right, rgba(53,199,216,0.16), rgba(20,184,166,0.08))',
                      border: '1px solid #35C7D830',
                      color: '#0E7D8C',
                    }}
                  >
                    <Icon size={16} />
                  </div>
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
      className="relative py-28 overflow-hidden"
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
      <div className="relative max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-white/55 uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Five protections, one path
            </div>
            <h2
              className="text-white"
              style={{
                fontSize: '54px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              One website system.
              <br />
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

        {/* Desktop constellation — SWS centered, 4 outer protections at top/right/bottom/left */}
        <div className="relative hidden lg:block">
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
            <line
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              stroke="url(#connect-grad)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
            <line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="url(#connect-grad)"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          </svg>

          <div className="relative grid grid-cols-3 grid-rows-3 gap-6">
            <div className="col-start-2 row-start-1 self-end">
              <ProtectionCard {...PROTECTION_OUTER[0]} />
            </div>
            <div className="col-start-1 row-start-2 self-center">
              <ProtectionCard {...PROTECTION_OUTER[3]} />
            </div>
            <div className="col-start-2 row-start-2 self-center">
              <ProtectionCard {...PROTECTION_HUB} hub />
            </div>
            <div className="col-start-3 row-start-2 self-center">
              <ProtectionCard {...PROTECTION_OUTER[1]} />
            </div>
            <div className="col-start-2 row-start-3 self-start">
              <ProtectionCard {...PROTECTION_OUTER[2]} />
            </div>
          </div>
        </div>

        {/* Mobile vertical path in connected order */}
        <div className="relative space-y-3 lg:hidden">
          <ProtectionCard {...PROTECTION_OUTER[0]} />
          <ProtectionCard {...PROTECTION_HUB} hub />
          <ProtectionCard {...PROTECTION_OUTER[1]} />
          <ProtectionCard {...PROTECTION_OUTER[2]} />
          <ProtectionCard {...PROTECTION_OUTER[3]} />
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
    <section
      className="py-28"
      style={{
        background:
          'linear-gradient(180deg, #FFFFFF 0%, #F0FCF9 60%, #F6FAFC 100%)',
      }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0F7A57] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              What changes
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '52px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Less leakage.
              <br />
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
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-6"
                  style={{
                    background: '#21B98515',
                    border: '1px solid #21B98545',
                    color: '#0F7A57',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                  }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                  ANCHOR STATE
                </span>

                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background:
                      'linear-gradient(to bottom right, rgba(33,185,133,0.22), rgba(20,184,166,0.12))',
                    border: '1px solid #21B98555',
                    color: '#0F7A57',
                  }}
                >
                  <FeaturedIcon size={24} />
                </div>

                <h3
                  className="text-[#08111F]"
                  style={{
                    fontSize: '30px',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    letterSpacing: '-0.025em',
                  }}
                >
                  {FEATURED_STATE.label}
                </h3>

                {/* Two-line shift inside featured: muted "used to" then strong "now" */}
                <div className="mt-7 space-y-3">
                  <div
                    className="rounded-lg px-4 py-3"
                    style={{
                      background: '#FFFFFF80',
                      border: '1px dashed #C8D8E4',
                    }}
                  >
                    <div
                      className="uppercase tracking-[0.14em] mb-1"
                      style={{ color: '#9CA3B0', fontSize: '9.5px', fontWeight: 700 }}
                    >
                      Used to
                    </div>
                    <div
                      className="text-[#6F8190]"
                      style={{ fontSize: '14px', lineHeight: 1.5 }}
                    >
                      {FEATURED_STATE.used}
                    </div>
                  </div>
                  <div
                    className="rounded-lg px-4 py-3.5"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #21B98540',
                      boxShadow: '0 6px 18px rgba(33,185,133,0.08)',
                    }}
                  >
                    <div
                      className="uppercase tracking-[0.14em] mb-1 flex items-center gap-1.5"
                      style={{ color: '#0F7A57', fontSize: '9.5px', fontWeight: 700 }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                      Now
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.45 }}
                    >
                      {FEATURED_STATE.now}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 small positive states in 2x2 */}
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
                  <div className="flex items-center gap-2.5 mb-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background:
                          'linear-gradient(to bottom right, rgba(33,185,133,0.16), rgba(20,184,166,0.08))',
                        border: '1px solid #21B98530',
                        color: '#0F7A57',
                      }}
                    >
                      <Icon size={15} />
                    </div>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full"
                      style={{
                        background: '#21B98510',
                        color: '#0F7A57',
                        fontSize: '9px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#21B985]" />
                      NOW
                    </span>
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
                    className="text-[#9CA3B0] mb-1"
                    style={{ fontSize: '11.5px', lineHeight: 1.4 }}
                  >
                    {s.used}
                  </div>
                  <div
                    className="text-[#08111F] mt-auto"
                    style={{ fontSize: '12.5px', fontWeight: 600, lineHeight: 1.45 }}
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
// SECTION 08 — How this shows up: service business + specialist clinic
// Flagship + 2x2 grid. 5 scenarios total (1 featured roofing + 4 supporting).
// Each card carries an image placeholder for future project images.
// ============================================================================

type Scenario = {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  leaks: ReadonlyArray<string>;
  needs: ReadonlyArray<string>;
  tone: string;
  surface: SurfaceVariant; // abstract preview block; later swap for real <img />
};

const FEATURED_SCENARIO: Scenario = {
  icon: Hammer,
  eyebrow: 'Service business · Roofing',
  title: 'Storm passes. The phone does not stop.',
  description:
    'Search traffic surges overnight. Quote requests and missed calls pile up while crews are still on jobs. Connected handling decides whether those leads turn into work won — or go cold by next Tuesday.',
  leaks: [
    'Missed call while crew is on a job',
    'Quote sent Friday — no follow-up Monday',
    'Job done — review moment missed',
  ],
  needs: ['Missed-call recovery', 'Quote follow-up', 'Local visibility'],
  tone: '#F4B740',
  surface: 'page',
};

const SUPPORTING_SCENARIOS: ReadonlyArray<Scenario> = [
  {
    icon: Wrench,
    eyebrow: 'Service business · Plumbing',
    title: 'Same-day call. Wrong inbox.',
    description:
      'Urgent enquiries hit voicemail, form, and message channels at the same time. Without a single owner, the fastest team to reply wins the job — and it isn’t always yours.',
    leaks: [
      'Calls and forms split across channels',
      'No single owner sees the queue',
      'Job goes to whoever replies first',
    ],
    needs: ['Unified capture', 'Routing', 'Response speed'],
    tone: '#35C7D8',
    surface: 'handoff',
  },
  {
    icon: ShieldCheck,
    eyebrow: 'Service business · Foundation repair',
    title: 'High-trust quote. Slow inspection follow-up.',
    description:
      'Owners ask for inspections and quotes that take time to scope. The leak isn’t the first reply — it’s the days between site visit and proposal where the lead cools and chooses someone else.',
    leaks: [
      'Inspection scheduled, then quiet',
      'Quote drafted, never sent',
      'Owner forgets to circle back',
    ],
    needs: ['Owned follow-up', 'Proposal tracking', 'Status visibility'],
    tone: '#14B8A6',
    surface: 'timeline',
  },
  {
    icon: HeartPulse,
    eyebrow: 'Specialist clinic · Dental implants',
    title: 'Patient researches. Practice does not follow up.',
    description:
      'Patients spend weeks comparing providers and costs. The procedure page may be unclear, the consultation request may land in a shared inbox, the reminder may never happen.',
    leaks: [
      'Procedure page does not explain what to expect',
      'Consultation request sits in shared inbox',
      'Pre-appointment reminder depends on memory',
    ],
    needs: ['Procedure clarity', 'Consultation routing', 'Reminder flow'],
    tone: '#9B7DE0',
    surface: 'signal',
  },
  {
    icon: Sparkles,
    eyebrow: 'Specialist clinic · Dermatology',
    title: 'Appointment kept. Review never asked.',
    description:
      'The patient came, was seen, left happy. Without a review request at the right moment, the practice front door earns no new trust for the next visitor — and the repeat-care prompt depends on memory.',
    leaks: [
      'Job done — review moment passes',
      'No proof signal on the website',
      'Repeat-care depends on memory',
    ],
    needs: ['Review timing', 'Visible proof', 'Repeat-care flow'],
    tone: '#21B985',
    surface: 'review',
  },
];

// Abstract scenario surface preview — a small dark-on-light visual block that
// stands in for a future project image. Each scenario uses a slightly different
// composition (page anatomy, signal feed, handoff strip, timeline, signal panel)
// so the section doesn't read as 5 identical placeholders. Replace with a real
// <img /> when project assets exist; the abstract block is the visible UI in
// the meantime — no "to be added" text.
type SurfaceVariant = 'page' | 'signal' | 'handoff' | 'timeline' | 'review';

function ScenarioSurface({
  variant,
  tone,
  height,
}: {
  variant: SurfaceVariant;
  tone: string;
  height: string;
}) {
  return (
    <div
      className="rounded-xl overflow-hidden relative"
      style={{
        height,
        background: 'linear-gradient(135deg, #061323 0%, #0E2740 100%)',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: `0 12px 32px rgba(8,17,31,0.20), 0 0 24px ${tone}14`,
      }}
    >
      {/* faint accent wash */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 100% 0%, ${tone}24 0%, transparent 55%)`,
        }}
        aria-hidden="true"
      />
      {/* dotted grid wash */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
        aria-hidden="true"
      />

      {/* Browser chrome bar */}
      <div
        className="relative flex items-center gap-1.5 px-3 py-2 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
        <span
          className="ml-2"
          style={{ color: tone, fontSize: '8.5px', fontWeight: 700, letterSpacing: '0.18em' }}
        >
          {variant.toUpperCase()}
        </span>
      </div>

      <div className="relative p-3.5 flex flex-col gap-2">
        {variant === 'page' && (
          <>
            <div className="h-1.5 rounded-full bg-white/15" style={{ width: '60%' }} />
            <div
              className="h-3 rounded"
              style={{
                background: `linear-gradient(to right, ${tone}38, ${tone}10)`,
                width: '80%',
              }}
            />
            <div className="grid grid-cols-3 gap-2 mt-1.5">
              <div className="h-7 rounded bg-white/[0.06] border border-white/10" />
              <div className="h-7 rounded bg-white/[0.06] border border-white/10" />
              <div className="h-7 rounded bg-white/[0.06] border border-white/10" />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="h-1 rounded-full bg-white/12 flex-1" />
              <div
                className="h-3 px-2 rounded inline-flex items-center"
                style={{ background: `${tone}28`, border: `1px solid ${tone}50` }}
              >
                <span style={{ color: tone, fontSize: '7.5px', fontWeight: 700 }}>CTA</span>
              </div>
            </div>
          </>
        )}
        {variant === 'signal' && (
          <>
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 rounded-full bg-white/15 flex-1" />
              <span style={{ color: tone, fontSize: '7.5px', fontWeight: 700 }}>
                ●●●
              </span>
            </div>
            {[0, 1, 2].map(i => (
              <div
                key={i}
                className="flex items-center gap-2 px-2 py-1.5 rounded"
                style={{
                  background: i === 1 ? `${tone}10` : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${i === 1 ? `${tone}40` : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: i === 1 ? tone : '#9CA3B0' }}
                />
                <div className="h-1 rounded-full bg-white/15 flex-1" />
                <div className="h-1 rounded-full bg-white/10" style={{ width: '14px' }} />
              </div>
            ))}
          </>
        )}
        {variant === 'handoff' && (
          <>
            <div className="flex items-center gap-1.5">
              <div
                className="h-5 rounded flex items-center justify-center px-1.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  fontSize: '7px',
                  color: '#FFFFFF99',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                }}
              >
                CALL
              </div>
              <div
                className="h-5 rounded flex items-center justify-center px-1.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  fontSize: '7px',
                  color: '#FFFFFF99',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                }}
              >
                FORM
              </div>
              <div
                className="h-5 rounded flex items-center justify-center px-1.5"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  fontSize: '7px',
                  color: '#FFFFFF99',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                }}
              >
                MSG
              </div>
            </div>
            <div className="flex justify-center" style={{ color: '#FFFFFF55', fontSize: '10px' }}>
              ↓
            </div>
            <div
              className="h-6 rounded flex items-center justify-center"
              style={{
                background: `linear-gradient(to right, ${tone}40, ${tone}18)`,
                border: `1px solid ${tone}55`,
              }}
            >
              <span
                style={{
                  color: tone,
                  fontSize: '8px',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                }}
              >
                RESPONSE · OWNED
              </span>
            </div>
          </>
        )}
        {variant === 'timeline' && (
          <>
            <div className="flex items-center gap-1">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center flex-1">
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: i === 2 ? tone : 'rgba(255,255,255,0.25)',
                      boxShadow: i === 2 ? `0 0 6px ${tone}` : 'none',
                    }}
                  />
                  {i < 4 && (
                    <div
                      className="h-px flex-1"
                      style={{ background: 'rgba(255,255,255,0.15)' }}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="space-y-1.5 mt-1">
              <div className="flex gap-1.5">
                <div className="h-1 rounded-full bg-white/15" style={{ width: '20%' }} />
                <div className="h-1 rounded-full bg-white/10 flex-1" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-1 rounded-full bg-white/15" style={{ width: '50%' }} />
                <div className="h-1 rounded-full bg-white/10" style={{ width: '20%' }} />
              </div>
              <div
                className="h-3 rounded flex items-center px-2"
                style={{
                  background: `${tone}18`,
                  border: `1px solid ${tone}40`,
                }}
              >
                <span style={{ color: tone, fontSize: '7px', fontWeight: 700 }}>
                  FOLLOW-UP DUE
                </span>
              </div>
            </div>
          </>
        )}
        {variant === 'review' && (
          <>
            <div className="flex items-center gap-1.5">
              {[0, 1, 2, 3, 4].map(i => (
                <span
                  key={i}
                  className="w-2.5 h-2.5"
                  style={{
                    color: tone,
                    fontSize: '10px',
                    lineHeight: 1,
                  }}
                >
                  ★
                </span>
              ))}
              <span style={{ color: '#FFFFFF66', fontSize: '8px', fontWeight: 700 }}>
                · captured
              </span>
            </div>
            <div className="space-y-1 mt-1">
              <div className="h-1 rounded-full bg-white/15" style={{ width: '90%' }} />
              <div className="h-1 rounded-full bg-white/15" style={{ width: '70%' }} />
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <div
                className="h-3 rounded flex items-center px-2"
                style={{
                  background: `${tone}18`,
                  border: `1px solid ${tone}40`,
                }}
              >
                <span style={{ color: tone, fontSize: '7px', fontWeight: 700 }}>
                  PROOF · LIVE
                </span>
              </div>
              <div className="h-1 rounded-full bg-white/10 flex-1" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function FeaturedScenarioCard({ scenario }: { scenario: Scenario }) {
  const Icon = scenario.icon;
  return (
    <div
      className="h-full rounded-2xl p-7 lg:p-9 relative overflow-hidden flex flex-col"
      style={{
        background: `linear-gradient(to bottom, #FFFFFF, ${scenario.tone}0A)`,
        border: `2px solid ${scenario.tone}45`,
        boxShadow: `0 16px 48px ${scenario.tone}15, 0 0 0 1px ${scenario.tone}08`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: `linear-gradient(90deg, ${scenario.tone}, ${scenario.tone}22)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 100% 0%, ${scenario.tone}10 0%, transparent 55%)`,
        }}
      />
      <div className="relative flex-1 flex flex-col">
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: `${scenario.tone}18`,
              border: `1px solid ${scenario.tone}40`,
              color: scenario.tone,
            }}
          >
            <Icon size={24} />
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
            style={{
              background: `${scenario.tone}14`,
              border: `1px solid ${scenario.tone}38`,
              color: scenario.tone,
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span className="w-1 h-1 rounded-full" style={{ background: scenario.tone }} />
            Featured · most common
          </span>
        </div>
        <h3
          className="text-[#08111F] mb-3"
          style={{
            fontSize: '26px',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          {scenario.title}
        </h3>
        <div
          className="uppercase tracking-[0.14em] text-[#6F8190] mb-2"
          style={{ fontSize: '10px', fontWeight: 700 }}
        >
          {scenario.eyebrow}
        </div>
        <p
          className="text-[#4C5E6F]"
          style={{ fontSize: '14.5px', lineHeight: 1.6 }}
        >
          {scenario.description}
        </p>

        <div className="mt-6">
          <ScenarioSurface variant={scenario.surface} tone={scenario.tone} height="180px" />
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <div
              className="uppercase tracking-[0.14em] text-[#6F8190] mb-3"
              style={{ fontSize: '9.5px', fontWeight: 700 }}
            >
              Where it leaks
            </div>
            <ul className="space-y-2">
              {scenario.leaks.map(l => (
                <li
                  key={l}
                  className="flex items-start gap-2.5 text-[#4C5E6F]"
                  style={{ fontSize: '13px', lineHeight: 1.5 }}
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full"
                    style={{ background: scenario.tone }}
                  />
                  {l}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              className="uppercase tracking-[0.14em] text-[#6F8190] mb-3"
              style={{ fontSize: '9.5px', fontWeight: 700 }}
            >
              What it needs
            </div>
            <div className="flex flex-wrap gap-1.5">
              {scenario.needs.map(n => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-white border text-[#08111F]"
                  style={{
                    borderColor: '#E6EEF3',
                    fontSize: '11.5px',
                    fontWeight: 500,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: scenario.tone }}
                  />
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupportingScenarioCard({ scenario }: { scenario: Scenario }) {
  const Icon = scenario.icon;
  return (
    <div
      className="h-full rounded-2xl bg-white border p-6 flex flex-col relative overflow-hidden"
      style={{
        borderColor: '#E6EEF3',
        boxShadow: '0 4px 16px rgba(8,17,31,0.04)',
      }}
    >
      <div
        className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: scenario.tone }}
      />
      <div className="flex items-center gap-3 mb-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
          style={{
            background: `${scenario.tone}14`,
            border: `1px solid ${scenario.tone}33`,
            color: scenario.tone,
          }}
        >
          <Icon size={17} />
        </div>
        <div
          className="uppercase tracking-[0.14em] text-[#6F8190]"
          style={{ fontSize: '9.5px', fontWeight: 700 }}
        >
          {scenario.eyebrow}
        </div>
      </div>
      <h3
        className="text-[#08111F] mb-2"
        style={{
          fontSize: '17px',
          fontWeight: 700,
          lineHeight: 1.2,
          letterSpacing: '-0.01em',
        }}
      >
        {scenario.title}
      </h3>
      <p
        className="text-[#4C5E6F]"
        style={{ fontSize: '13.5px', lineHeight: 1.55 }}
      >
        {scenario.description}
      </p>

      <div className="mt-4">
        <ScenarioSurface variant={scenario.surface} tone={scenario.tone} height="110px" />
      </div>

      <div className="mt-5 pt-5 border-t border-[#EEF3F6]">
        <div
          className="uppercase tracking-[0.14em] text-[#6F8190] mb-2.5"
          style={{ fontSize: '9.5px', fontWeight: 700 }}
        >
          Where it leaks
        </div>
        <ul className="space-y-1.5 mb-4">
          {scenario.leaks.map(l => (
            <li
              key={l}
              className="flex items-start gap-2 text-[#4C5E6F]"
              style={{ fontSize: '12.5px', lineHeight: 1.45 }}
            >
              <span
                className="mt-1.5 w-1 h-1 shrink-0 rounded-full"
                style={{ background: scenario.tone }}
              />
              {l}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1">
          {scenario.needs.map(n => (
            <span
              key={n}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#F6FAFC] border text-[#4C5E6F]"
              style={{
                borderColor: '#E6EEF3',
                fontSize: '10.5px',
                fontWeight: 500,
              }}
            >
              <span
                className="w-1 h-1 rounded-full"
                style={{ background: scenario.tone }}
              />
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SectionScenarios() {
  return (
    <section className="bg-gradient-to-b from-[#F6FAFC] to-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              How this shows up
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '50px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              In service businesses.
              <br />
              <span className="text-[#4C5E6F]">In specialist clinics.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Five working days. Different industries, same operating shape — and the same
              connected handling around the website. Names of work change. The shape of
              the leak does not.
            </p>
          </div>
        </div>

        {/* Flagship + 2x2 grid: 1 featured roofing scenario + 4 supporting */}
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-5">
            <FeaturedScenarioCard scenario={FEATURED_SCENARIO} />
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {SUPPORTING_SCENARIOS.map(s => (
              <SupportingScenarioCard key={s.title} scenario={s} />
            ))}
          </div>
        </div>

        <p
          className="mt-10 max-w-2xl text-[#6F8190]"
          style={{ fontSize: '13.5px', lineHeight: 1.6 }}
        >
          Illustrative scenarios — not named clients. The pattern is real; the details
          here are typical, not measured. Project images shown above the card description
          when they are added.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — Selected surfaces (illustrative)
// Light section + STRONG dark inner panel. Asymmetric layout: one large
// "Service-page anatomy" surface (col-span-7) showing a stylized page with
// labeled zones; two smaller surfaces stacked on the right (col-span-5)
// for Trust band + Enquiry handoff. Visual annotations replace bullet lists.
// ============================================================================

function SectionSurfaces() {
  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #F6FAFC 0%, #FFFFFF 100%)' }}
    >
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Selected surfaces
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '48px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              The kind of surface design{' '}
              <span className="text-[#4C5E6F]">we build into website systems.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Not finished case studies. Three abstract surface patterns — page anatomy,
              trust placement, enquiry handoff. The website surface is one part; the
              handling around it makes it work.
            </p>
          </div>
        </div>

        {/* Dark inner panel — asymmetric layout */}
        <div
          className="relative overflow-hidden rounded-3xl p-6 lg:p-12"
          style={{
            background: 'linear-gradient(to bottom right, #061323, #103E5A)',
            border: '1px solid rgba(14,39,64,0.30)',
            boxShadow:
              '0 24px 64px rgba(8,17,31,0.28), 0 0 40px rgba(53,199,216,0.06)',
          }}
        >
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '32px 32px',
            }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-12 gap-4 lg:gap-5">
            {/* LARGE — Service-page anatomy (col-span-7) */}
            <div
              className="col-span-12 lg:col-span-7 rounded-2xl p-6 lg:p-7 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                <span
                  className="uppercase tracking-[0.14em]"
                  style={{ color: '#35C7D8', fontSize: '10.5px', fontWeight: 700 }}
                >
                  Service- or treatment-page anatomy
                </span>
              </div>
              <h3
                className="text-white mb-5"
                style={{
                  fontSize: '20px',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  lineHeight: 1.25,
                }}
              >
                Where decisions form on the page
              </h3>

              {/* Stylized page surface with labeled zones */}
              <div
                className="rounded-xl p-4 lg:p-5"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {/* Browser chrome dots */}
                <div
                  className="flex items-center gap-1.5 pb-3 mb-4 border-b"
                  style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/15" />
                </div>

                {/* Hero / intent zone */}
                <div className="flex gap-3 mb-3">
                  <span
                    className="shrink-0 inline-flex items-center px-2 py-0.5 rounded h-fit"
                    style={{
                      background: 'rgba(53,199,216,0.14)',
                      border: '1px solid rgba(53,199,216,0.30)',
                      color: '#35C7D8',
                      fontSize: '8.5px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                    }}
                  >
                    01 · INTENT
                  </span>
                  <div className="flex-1 space-y-1.5">
                    <div className="h-2 rounded-full bg-white/20" style={{ width: '70%' }} />
                    <div className="h-1.5 rounded-full bg-white/10" style={{ width: '55%' }} />
                  </div>
                </div>

                {/* Plain-language explanation zone */}
                <div className="flex gap-3 mb-3">
                  <span
                    className="shrink-0 inline-flex items-center px-2 py-0.5 rounded h-fit"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '8.5px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                    }}
                  >
                    02 · EXPLAIN
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="h-1.5 rounded-full bg-white/15" style={{ width: '92%' }} />
                    <div className="h-1.5 rounded-full bg-white/12" style={{ width: '88%' }} />
                    <div className="h-1.5 rounded-full bg-white/10" style={{ width: '60%' }} />
                  </div>
                </div>

                {/* Proof placement zone */}
                <div
                  className="flex gap-3 mb-3 p-2.5 rounded"
                  style={{
                    background: 'rgba(20,184,166,0.08)',
                    border: '1px solid rgba(20,184,166,0.22)',
                  }}
                >
                  <span
                    className="shrink-0 inline-flex items-center px-2 py-0.5 rounded h-fit"
                    style={{
                      background: 'rgba(20,184,166,0.18)',
                      border: '1px solid rgba(20,184,166,0.35)',
                      color: '#14B8A6',
                      fontSize: '8.5px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                    }}
                  >
                    03 · PROOF
                  </span>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {['Local', 'Verified', 'Recent', '★★★★★'].map(t => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 rounded"
                        style={{
                          background: 'rgba(255,255,255,0.06)',
                          border: '1px solid rgba(255,255,255,0.10)',
                          color: 'rgba(255,255,255,0.70)',
                          fontSize: '9px',
                          fontWeight: 600,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA + handoff zone */}
                <div
                  className="flex gap-3 items-center p-2.5 rounded"
                  style={{
                    background:
                      'linear-gradient(to right, rgba(53,199,216,0.16), rgba(20,184,166,0.08))',
                    border: '1px solid rgba(53,199,216,0.30)',
                  }}
                >
                  <span
                    className="shrink-0 inline-flex items-center px-2 py-0.5 rounded h-fit"
                    style={{
                      background: 'rgba(53,199,216,0.22)',
                      border: '1px solid rgba(53,199,216,0.40)',
                      color: '#35C7D8',
                      fontSize: '8.5px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                    }}
                  >
                    04 · CTA
                  </span>
                  <div className="flex-1 flex items-center gap-2">
                    <div
                      className="px-2.5 py-1 rounded"
                      style={{
                        background: '#FFFFFF',
                        color: '#061323',
                        fontSize: '10px',
                        fontWeight: 700,
                      }}
                    >
                      Request a review
                    </div>
                    <span className="text-white/40" style={{ fontSize: '10px' }}>
                      →
                    </span>
                    <span
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded"
                      style={{
                        background: 'rgba(33,185,133,0.18)',
                        border: '1px solid rgba(33,185,133,0.40)',
                        color: '#21B985',
                        fontSize: '8.5px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#21B985]" />
                      HANDOFF · OWNER
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column — two stacked smaller surfaces */}
            <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-4 lg:gap-5">
              {/* Trust band */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{ color: '#14B8A6', fontSize: '10.5px', fontWeight: 700 }}
                  >
                    Trust band
                  </span>
                </div>
                <h3
                  className="text-white mb-4"
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '-0.005em',
                    lineHeight: 1.3,
                  }}
                >
                  Signals placed where hesitation forms
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { label: 'Local service area', icon: MapPin },
                    { label: 'Verified', icon: ShieldCheck },
                    { label: 'Real recent work', icon: Star },
                    { label: 'Reply within minutes', icon: Clock },
                  ].map(t => {
                    const Icon = t.icon;
                    return (
                      <span
                        key={t.label}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(20,184,166,0.30)',
                          color: 'rgba(255,255,255,0.85)',
                          fontSize: '10.5px',
                          fontWeight: 600,
                        }}
                      >
                        <Icon size={10} color="#14B8A6" />
                        {t.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Enquiry handoff */}
              <div
                className="rounded-2xl p-6 relative overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{ color: '#21B985', fontSize: '10.5px', fontWeight: 700 }}
                  >
                    Enquiry handoff
                  </span>
                </div>
                <h3
                  className="text-white mb-4"
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    letterSpacing: '-0.005em',
                    lineHeight: 1.3,
                  }}
                >
                  Context travels with the enquiry
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
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <span
                        className="uppercase tracking-[0.14em]"
                        style={{
                          color: 'rgba(255,255,255,0.50)',
                          fontSize: '9px',
                          fontWeight: 700,
                        }}
                      >
                        {row.k}
                      </span>
                      <span
                        className="text-white"
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
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <div
            className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 600 }}
          >
            Built for
          </div>
          <h2
            className="text-[#08111F]"
            style={{
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
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
// SECTION 11 — Practical delivery with system thinking
// 3-step engagement
// ============================================================================

const DELIVERY_STEPS: ReadonlyArray<{
  num: string;
  title: string;
  body: string;
  icon: LucideIcon;
  accent: string;
}> = [
  {
    num: '01',
    title: 'Review the current site and handling path',
    body: 'Map how enquiries arrive today — search, calls, forms, messages, consultation requests — and where they go after.',
    icon: ScanSearch,
    accent: '#35C7D8',
  },
  {
    num: '02',
    title: 'Find where work is slipping',
    body: 'Identify the moments where the handoff breaks: missed calls, slow response, scattered inboxes, unowned follow-up, review requests that never happen.',
    icon: Wrench,
    accent: '#F4B740',
  },
  {
    num: '03',
    title: 'Put the website system and connected handling in place',
    body: 'Build the website surface and the handling around it together — clarity, capture, routing, follow-up, proof — so nothing depends on someone remembering.',
    icon: CheckCircle2,
    accent: '#21B985',
  },
];

function SectionDelivery() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              How an engagement starts
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '44px',
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
              }}
            >
              Practical delivery.
              <span className="text-[#4C5E6F]"> System thinking behind it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.6 }}>
              We work directly with the owner or practice manager. The aim is operating
              change, not a prettier site or another tool subscription.
            </p>
          </div>
        </div>

        {/* Engagement path — 3 steps with a thin connector line running through them */}
        <div className="relative">
          {/* Connector line — runs horizontally across the 3 cards on desktop */}
          <div
            className="hidden lg:block absolute left-[16%] right-[16%] pointer-events-none"
            style={{
              top: '52px',
              height: '2px',
              backgroundImage:
                'linear-gradient(to right, #35C7D8 0%, #F4B740 50%, #21B985 100%)',
              opacity: 0.55,
            }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5">
            {DELIVERY_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="relative flex flex-col items-center text-center px-2"
                >
                  {/* Connector node (large circle sitting on the rail) */}
                  <div
                    className="relative w-[88px] h-[88px] rounded-full flex items-center justify-center mb-5"
                    style={{
                      background: '#FFFFFF',
                      border: `2px solid ${step.accent}`,
                      boxShadow: `0 0 0 6px ${step.accent}14, 0 12px 28px rgba(8,17,31,0.06)`,
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center"
                      style={{
                        background: `${step.accent}14`,
                        color: step.accent,
                      }}
                    >
                      <Icon size={22} />
                    </div>
                    <span
                      className="absolute -bottom-2 px-2 py-0.5 rounded-full"
                      style={{
                        background: step.accent,
                        color: '#FFFFFF',
                        fontSize: '10.5px',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                      }}
                    >
                      STEP {step.num}
                    </span>
                  </div>
                  <h3
                    className="text-[#08111F] mb-2"
                    style={{
                      fontSize: '17px',
                      fontWeight: 700,
                      lineHeight: 1.25,
                      letterSpacing: '-0.005em',
                      maxWidth: '280px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#4C5E6F]"
                    style={{
                      fontSize: '13.5px',
                      lineHeight: 1.55,
                      maxWidth: '280px',
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className="mt-12 rounded-xl px-6 py-4 flex flex-wrap items-center justify-between gap-3"
          style={{
            background: '#F6FAFC',
            border: '1px solid #E6EEF3',
          }}
        >
          <span className="text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>
            Structure first, optimisation second. No campaign work over unclear pages or
            an unowned handling path.
          </span>
          <span
            className="inline-flex items-center gap-1.5"
            style={{ color: '#0F7A57', fontSize: '12px', fontWeight: 700 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
            Operating change
          </span>
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
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Questions
            </div>
            <h2
              className="text-[#08111F]"
              style={{
                fontSize: '46px',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
              }}
            >
              Straight answers.
            </h2>
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
