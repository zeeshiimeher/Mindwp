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
import { type ReactNode, useState } from 'react';

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
// One dominant leak (First response is too slow) shown clearly + four
// surrounding leaks across the journey (FOUND → CAPTURED → PROVEN). Clean
// editorial grid, no floating positions, no SVG connectors, no zone overlay.
// ============================================================================

function SectionLeak() {
  const surroundingLeaks = [
    {
      zone: 'FOUND',
      zoneColor: '#14B8A6',
      icon: FileText,
      title: 'Service or treatment page does not answer the question',
      note: 'Visitor reads a paragraph, cannot tell if this is the right team. Closes the tab.',
    },
    {
      zone: 'CAPTURED',
      zoneColor: '#F4B740',
      icon: Inbox,
      title: 'Form lands in an inbox nobody checks',
      note: 'Saturday enquiry sits unread until Tuesday — competitor replied within the hour.',
    },
    {
      zone: 'CAPTURED',
      zoneColor: '#F4B740',
      icon: History,
      title: 'Quote sent. Nobody owns the follow-up.',
      note: 'Friday quote goes quiet over the weekend. By Wednesday the lead has booked elsewhere.',
    },
    {
      zone: 'PROVEN',
      zoneColor: '#9B7DE0',
      icon: Star,
      title: 'Review moment passes after the job',
      note: 'Customer happy, patient relieved — and nobody asked while the experience was fresh.',
    },
  ] as const;

  return (
    <section id="leak" className="section bg-page-mist">
      <div className="container section-stack">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Where work disappears
            </div>
            <h2 className="text-[#08111F]">
              The business is working.{' '}
              <span className="text-[#4C5E6F]">The system around it is leaking.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              None of these gaps looks dramatic alone. Compounded across a working week,
              they decide how much of what comes in actually becomes paid work or a kept
              appointment.
            </p>
          </div>
        </div>

        {/* Dominant leak — full-width hero block */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF3F3 100%)',
            border: '1.5px solid #E76F6F55',
            boxShadow: '0 24px 60px rgba(231,111,111,0.14)',
          }}
        >
          <div
            className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'rgba(231,111,111,0.18)',
              filter: 'blur(60px)',
            }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-12 gap-6 lg:gap-10 items-center p-8 lg:p-12">
            <div className="col-span-12 lg:col-span-2 flex lg:justify-start">
              <div
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: '#E76F6F14',
                  border: '1px solid #E76F6F30',
                  color: '#E76F6F',
                }}
              >
                <Clock size={28} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]"
                  style={{ boxShadow: '0 0 8px #E76F6F' }}
                />
                <span
                  className="text-[#E76F6F] uppercase"
                  style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em' }}
                >
                  The critical leak
                </span>
              </div>
              <h3
                className="text-[#08111F]"
                style={{
                  fontSize: 'clamp(22px, 2.6vw, 30px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.018em',
                }}
              >
                First response is too slow.
              </h3>
              <p
                className="mt-3 text-[#4C5E6F] max-w-3xl"
                style={{ fontSize: '15px', lineHeight: 1.65 }}
              >
                Visitors compare three businesses or providers before anyone replies. By
                the time the first reply goes out, the decision is already moving away.
              </p>
            </div>
          </div>
        </div>

        {/* Four surrounding leaks — clean grid, no connectors, no zone overlay */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {surroundingLeaks.map((leak, i) => {
            const Icon = leak.icon;
            return (
              <div
                key={i}
                className="rounded-xl bg-white p-5 lg:p-6 flex flex-col"
                style={{
                  border: '1px solid #E6EEF3',
                  boxShadow: '0 4px 14px rgba(8,17,31,0.04)',
                }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{
                      background: `${leak.zoneColor}14`,
                      border: `1px solid ${leak.zoneColor}30`,
                      color: leak.zoneColor,
                    }}
                  >
                    <Icon size={14} />
                  </div>
                  <span
                    style={{
                      color: leak.zoneColor,
                      fontSize: '9.5px',
                      fontWeight: 700,
                      letterSpacing: '0.16em',
                    }}
                  >
                    {leak.zone}
                  </span>
                </div>
                <div
                  className="text-[#08111F]"
                  style={{
                    fontSize: '14.5px',
                    fontWeight: 700,
                    lineHeight: 1.35,
                    letterSpacing: '-0.005em',
                  }}
                >
                  {leak.title}
                </div>
                <div
                  className="mt-2 text-[#6F8190]"
                  style={{ fontSize: '12.5px', lineHeight: 1.55 }}
                >
                  {leak.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Quiet closing line — no chip cluster, no badge */}
        <p
          className="text-[#4C5E6F] max-w-2xl"
          style={{ fontSize: '14.5px', lineHeight: 1.65 }}
        >
          The fix is not another page.{' '}
          <span className="text-[#08111F] font-medium">
            It is the system that holds the path between them.
          </span>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 03 — The website is the visible control point
// Original v1 design: 3-layer stacked surface (Surface → Underneath → Foundation)
// with vertical connectors between layers.
// ============================================================================

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
            {/* Ambient halo behind the composed visual */}
            <div
              className="absolute inset-x-4 top-12 bottom-12 rounded-[40px] pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 50% 40%, rgba(53,199,216,0.16), transparent 70%)',
                filter: 'blur(48px)',
              }}
              aria-hidden="true"
            />

            {/* ONE unified composed visual — visible website on top, the system underneath, quiet foundation caption */}
            <div
              className="relative rounded-3xl bg-white overflow-hidden"
              style={{
                border: '1px solid #E6EEF3',
                boxShadow:
                  '0 28px 72px rgba(8,17,31,0.10), 0 0 0 1px rgba(53,199,216,0.04)',
              }}
            >
              {/* — TOP — Visible website surface */}

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

              {/* Hero — real content */}
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

                  {/* Right side: trust panel */}
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

              {/* Service strip (closing the visible-website portion) */}
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

              {/* — UNDERNEATH — single quiet line replacing the old 5-tile band */}
              <div
                className="px-5 lg:px-7 py-4 border-t flex items-center gap-3 flex-wrap"
                style={{
                  borderColor: '#D0EFF4',
                  background:
                    'linear-gradient(180deg, #ECF9FB 0%, #F8FDFE 100%)',
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8] shrink-0"
                  aria-hidden="true"
                />
                <span
                  className="text-[#0E2740]"
                  style={{ fontSize: '12.5px', lineHeight: 1.5 }}
                >
                  <span style={{ fontWeight: 700 }}>Behind it —</span>{' '}
                  <span className="text-[#4C5E6F]">
                    one connected path for capture, routing, follow-up, status, and proof.
                  </span>
                </span>
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

        {/* About strip — generic, the kind every shallow website has */}
        <div
          className="px-6 lg:px-8 py-5 border-t"
          style={{ borderColor: '#EEF3F6' }}
        >
          <div
            className="text-[#08111F] mb-2"
            style={{ fontSize: '13px', fontWeight: 700 }}
          >
            About us
          </div>
          <p
            className="text-[#6F8190]"
            style={{ fontSize: '11.5px', lineHeight: 1.55 }}
          >
            Family-run plumbers serving North London for over twenty years. Fully
            qualified team and competitive rates.
          </p>
        </div>

        {/* Generic "Get a quote" CTA band */}
        <div
          className="px-6 lg:px-8 py-5 border-t text-center"
          style={{ borderColor: '#EEF3F6', background: '#FCFDFE' }}
        >
          <div
            className="text-[#08111F] mb-3"
            style={{ fontSize: '14px', fontWeight: 700 }}
          >
            Get in touch today
          </div>
          <div
            className="inline-block px-4 py-2 rounded-md"
            style={{
              background: '#08111F',
              color: '#FFFFFF',
              fontSize: '11.5px',
              fontWeight: 700,
            }}
          >
            Get a quote
          </div>
        </div>

        {/* Website footer band — phone, email, hours */}
        <div
          className="px-6 lg:px-8 py-4 border-t"
          style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}
        >
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div>
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.12em]"
                style={{ fontSize: '8.5px', fontWeight: 700 }}
              >
                Phone
              </div>
              <div
                className="text-[#4C5E6F]"
                style={{ fontSize: '10.5px', fontWeight: 600 }}
              >
                020 7946 0214
              </div>
            </div>
            <div>
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.12em]"
                style={{ fontSize: '8.5px', fontWeight: 700 }}
              >
                Email
              </div>
              <div
                className="text-[#4C5E6F]"
                style={{ fontSize: '10.5px', fontWeight: 600 }}
              >
                info@cooperplumbing.co.uk
              </div>
            </div>
            <div>
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.12em]"
                style={{ fontSize: '8.5px', fontWeight: 700 }}
              >
                Hours
              </div>
              <div
                className="text-[#4C5E6F]"
                style={{ fontSize: '10.5px', fontWeight: 600 }}
              >
                Mon–Fri 9–5
              </div>
            </div>
          </div>
          <div
            className="flex items-center justify-between pt-2 border-t"
            style={{ borderColor: '#EEF3F6' }}
          >
            <span className="text-[#9CA3B0]" style={{ fontSize: '9.5px' }}>
              © Cooper Plumbing
            </span>
            <span className="text-[#9CA3B0]" style={{ fontSize: '9.5px' }}>
              Privacy · Terms
            </span>
          </div>
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
              Local SEO Authority
            </div>
            <h2 className="text-[#08111F]">
              Local visibility is not a ranking.{' '}
              <span className="text-[#4C5E6F]">
                It is consistent trust, said the same way everywhere.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              People decide locally before they trust. Visibility holds when the website,
              the listing, the reviews, and the service-area story all tell the same
              story.
            </p>
          </div>
        </div>

        {/* Local authority composition — entry signal + three trust zones, no website mockup */}
        <div
          className="rounded-2xl bg-white p-6 lg:p-10"
          style={{
            border: '1px solid #E6EEF3',
            boxShadow: '0 16px 48px rgba(8,17,31,0.06)',
          }}
        >
          {/* TOP — Entry signal (compact local pack) */}
          <div
            className="grid grid-cols-12 gap-6 lg:gap-10 items-center pb-8 mb-8 border-b"
            style={{ borderColor: '#EEF3F6' }}
          >
            <div className="col-span-12 lg:col-span-5">
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-3"
                style={{ fontSize: '10px', fontWeight: 700 }}
              >
                Entry signal
              </div>
              <div
                className="text-[#08111F] mb-2"
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  letterSpacing: '-0.012em',
                  lineHeight: 1.3,
                }}
              >
                Where the visit starts.
              </div>
              <p className="text-[#6F8190]" style={{ fontSize: '13px', lineHeight: 1.65 }}>
                Local search, &ldquo;near me&rdquo;, emergency intent, treatment research.
                The local pack decides who gets clicked first — and whether the right
                business is even seen.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div
                className="rounded-xl bg-white p-4"
                style={{
                  border: '1px solid #E6EEF3',
                  boxShadow: '0 4px 12px rgba(8,17,31,0.04)',
                }}
              >
                <div
                  className="rounded-full px-3 py-2 flex items-center gap-2 mb-3"
                  style={{ background: '#F6FAFC', border: '1px solid #E6EEF3' }}
                >
                  <Search size={11} color="#6F8190" />
                  <span
                    className="text-[#08111F] truncate"
                    style={{ fontSize: '11.5px', fontWeight: 600 }}
                  >
                    emergency plumber near me
                  </span>
                  <span
                    className="ml-auto inline-flex items-center gap-1 text-[#9CA3B0] shrink-0"
                    style={{ fontSize: '10px', fontWeight: 600 }}
                  >
                    <MapPin size={9} />
                    N6
                  </span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: 'Listing one', rating: '4.6', highlight: false },
                    { name: 'Listing two — the right business', rating: '4.9', highlight: true },
                    { name: 'Listing three', rating: '4.4', highlight: false },
                  ].map((l, i) => (
                    <div
                      key={i}
                      className="rounded-md px-2.5 py-2 flex items-center gap-2"
                      style={{
                        background: l.highlight
                          ? 'linear-gradient(135deg, #FFFFFF, #ECF9FB)'
                          : '#FFFFFF',
                        border: l.highlight
                          ? '1px solid #14B8A640'
                          : '1px solid #EEF3F6',
                      }}
                    >
                      <div className="min-w-0 flex-1">
                        <div
                          className="text-[#08111F] truncate"
                          style={{
                            fontSize: '11px',
                            fontWeight: l.highlight ? 700 : 600,
                          }}
                        >
                          {l.name}
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <Star
                            size={7}
                            fill={l.highlight ? '#F4B740' : '#9CA3B0'}
                            color={l.highlight ? '#F4B740' : '#9CA3B0'}
                          />
                          <span
                            className="text-[#6F8190]"
                            style={{ fontSize: '9px', fontWeight: 600 }}
                          >
                            {l.rating} · local
                          </span>
                        </div>
                      </div>
                      {l.highlight && <ArrowRight size={10} color="#0E7D8C" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM — Authority ecosystem: three editorial zones, no website mockup, no fake metrics */}
          <div>
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-6"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              What holds the listing in place
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {/* Service area */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{
                      background: '#14B8A614',
                      border: '1px solid #14B8A640',
                      color: '#0E7D8C',
                    }}
                  >
                    <MapPin size={14} />
                  </div>
                  <div>
                    <div
                      className="text-[#9CA3B0] uppercase tracking-[0.12em]"
                      style={{ fontSize: '9px', fontWeight: 700 }}
                    >
                      Service area
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '-0.005em',
                      }}
                    >
                      Real coverage, named locally.
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#6F8190] mb-3"
                  style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                >
                  Service-area pages and schema match the postcodes the business actually
                  works in — so the listing earns trust in each.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['N1', 'N6', 'N8', 'N10', 'N16', 'N22'].map(p => (
                    <span
                      key={p}
                      className="inline-flex items-center px-2 py-0.5 rounded-md"
                      style={{
                        background: '#F4FBFC',
                        border: '1px solid #D0EFF4',
                        color: '#0E7D8C',
                        fontSize: '10.5px',
                        fontWeight: 700,
                      }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Review signal */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{
                      background: '#F4B74014',
                      border: '1px solid #F4B74040',
                      color: '#9A6F12',
                    }}
                  >
                    <Star size={14} />
                  </div>
                  <div>
                    <div
                      className="text-[#9CA3B0] uppercase tracking-[0.12em]"
                      style={{ fontSize: '9px', fontWeight: 700 }}
                    >
                      Review signal
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '-0.005em',
                      }}
                    >
                      Recent, consistent, real.
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#6F8190] mb-3"
                  style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                >
                  Reviews captured at the moment of completed work and returned to the
                  pages where the next visitor decides — not buried in a footer.
                </p>
                <div className="space-y-1.5">
                  {['Google Business Profile', 'Trustpilot', 'Checkatrade or sector-specific'].map(
                    p => (
                      <div
                        key={p}
                        className="flex items-center gap-2 text-[#4C5E6F]"
                        style={{ fontSize: '11.5px', fontWeight: 500 }}
                      >
                        <span className="w-1 h-1 rounded-full bg-[#9A6F12]" />
                        {p}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Listing parity */}
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div
                    className="w-8 h-8 rounded-md flex items-center justify-center"
                    style={{
                      background: '#21B98514',
                      border: '1px solid #21B98540',
                      color: '#0F7A57',
                    }}
                  >
                    <CheckCircle2 size={14} />
                  </div>
                  <div>
                    <div
                      className="text-[#9CA3B0] uppercase tracking-[0.12em]"
                      style={{ fontSize: '9px', fontWeight: 700 }}
                    >
                      Listing parity
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '-0.005em',
                      }}
                    >
                      Same story everywhere.
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#6F8190] mb-3"
                  style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                >
                  Business name, hours, phone, and service line consistent across the
                  website and every directory the business sits on.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Name', 'Hours', 'Phone', 'Areas', 'Service lines'].map(p => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md"
                      style={{
                        background: '#F2FBF7',
                        border: '1px solid #C9EDDB',
                        color: '#0F7A57',
                        fontSize: '10.5px',
                        fontWeight: 600,
                      }}
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#21B985]"
                        aria-hidden="true"
                      />
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quiet closing line */}
        <p
          className="text-[#08111F] max-w-3xl"
          style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.6 }}
        >
          Local visibility holds when the page, the listing, the reviews, and the service
          area all tell the same story.{' '}
          <span className="text-[#4C5E6F]">
            That is the work behind the listing — not a ranking promise.
          </span>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — After the enquiry
// One realistic enquiry shown end-to-end (source, owner, reply, follow-up,
// review) instead of a channels-funnel diagram. A single quiet supporting
// line replaces the 2x2 supporting handling states grid.
// ============================================================================

type AfterContactKey = 'form' | 'call' | 'quote' | 'consultation';

type AfterContactScenario = {
  key: AfterContactKey;
  label: string;
  icon: LucideIcon;
  sourceTag: string;
  sourceTitle: string;
  steps: ReadonlyArray<{
    icon: LucideIcon;
    label: string;
    detail: string;
    time: string;
  }>;
  footnote: string;
};

const AFTER_CONTACT_SCENARIOS: ReadonlyArray<AfterContactScenario> = [
  {
    key: 'form',
    label: 'Form enquiry',
    icon: Inbox,
    sourceTag: 'Form enquiry · /services/boiler-repair',
    sourceTitle: 'Boiler not heating · N6 · today',
    steps: [
      {
        icon: MapPin,
        label: 'Source recorded',
        detail: 'Service page · /boiler-repair · North London',
        time: '11:42',
      },
      {
        icon: Workflow,
        label: 'Routed to the right engineer',
        detail: 'M. Patel — on duty, N6 area',
        time: '11:43',
      },
      {
        icon: PhoneCall,
        label: 'First reply sent',
        detail: 'Call + SMS confirmation · seven minutes after the form',
        time: '11:49',
      },
      {
        icon: Repeat,
        label: 'Follow-up scheduled',
        detail: 'If no reply by 14:00 — auto-chase, owned by M. Patel',
        time: 'Auto',
      },
    ],
    footnote: 'Form, page, intent, and owner travel with the enquiry — no shared inbox.',
  },
  {
    key: 'call',
    label: 'Phone call / missed call',
    icon: PhoneCall,
    sourceTag: 'Inbound call · service-line tracked',
    sourceTitle: 'Sat 09:14 — missed call from N8',
    steps: [
      {
        icon: PhoneOff,
        label: 'Missed call captured',
        detail: 'Caller ID logged · service line tracked · area matched to N8',
        time: '09:14',
      },
      {
        icon: FileText,
        label: 'Auto SMS sent',
        detail: '“Sorry we missed you — we will call back inside 15 minutes.” Same line, every time.',
        time: '09:14',
      },
      {
        icon: Workflow,
        label: 'Routed for callback',
        detail: 'On-call engineer notified · context attached · no shared voicemail',
        time: '09:15',
      },
      {
        icon: CheckCircle2,
        label: 'Callback completed',
        detail: 'Engineer rang back · job booked for the same afternoon',
        time: '09:23',
      },
    ],
    footnote:
      'Out-of-hours and weekend calls are not lost — they re-enter the same handling path.',
  },
  {
    key: 'quote',
    label: 'Quote follow-up',
    icon: History,
    sourceTag: 'Quote sent · roofing repair',
    sourceTitle: 'Friday quote · awaiting response',
    steps: [
      {
        icon: FileText,
        label: 'Quote issued and logged',
        detail: 'Sent Friday afternoon · status set to Awaiting · owner attached',
        time: 'Fri',
      },
      {
        icon: Repeat,
        label: 'Soft follow-up scheduled',
        detail: 'Polite check-in queued for Monday morning if no reply',
        time: 'Mon',
      },
      {
        icon: PhoneCall,
        label: 'Owner check-in',
        detail: 'M. Patel rings before mid-week with a clear next step',
        time: 'Wed',
      },
      {
        icon: CheckCircle2,
        label: 'Status visible',
        detail: 'Quote stays Awaiting, Booked, or Closed — never silently lost',
        time: 'Live',
      },
    ],
    footnote: 'Quotes do not drift into the weekend. The chase is owned, paced, and visible.',
  },
  {
    key: 'consultation',
    label: 'Consultation request',
    icon: HeartPulse,
    sourceTag: 'Consultation request · /implants',
    sourceTitle: 'Implant consultation · pre-visit booked',
    steps: [
      {
        icon: FileText,
        label: 'Request captured',
        detail: 'Procedure page · intent: implants · pre-visit form attached',
        time: 'Tue',
      },
      {
        icon: Workflow,
        label: 'Routed to clinical lead',
        detail: 'Reviewed by the right clinician before scheduling — not by reception',
        time: 'Tue',
      },
      {
        icon: PhoneCall,
        label: 'Pre-visit call',
        detail: 'Plain-language explanation of procedure, recovery, and cost',
        time: 'Wed',
      },
      {
        icon: Repeat,
        label: 'Pre-visit reminder',
        detail: 'Appointment reminder + prep notes sent the day before',
        time: '24h',
      },
    ],
    footnote:
      'Clinical requests are not treated like generic enquiries — they get routed and prepared.',
  },
];

function SectionHandling() {
  const [activeContact, setActiveContact] = useState<AfterContactKey>('form');
  const scenario =
    AFTER_CONTACT_SCENARIOS.find(s => s.key === activeContact) ??
    AFTER_CONTACT_SCENARIOS[0];
  const SourceIcon = scenario.icon;

  return (
    <section className="section bg-page-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              After contact
            </div>
            <h2 className="text-[#08111F]">
              Every contact path lands somewhere.{' '}
              <span className="text-[#4C5E6F]">
                The handling around the website holds them all.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Most enquiries do not fail at the website. They fail in the hours and days
              after — different shape per channel, but the same handling protects each.
            </p>
          </div>
        </div>

        {/* Tab list — quiet pill row, no dashboard chrome */}
        <div
          className="flex flex-wrap gap-2 mb-6"
          role="tablist"
          aria-label="After-contact handling scenarios"
        >
          {AFTER_CONTACT_SCENARIOS.map(s => {
            const Icon = s.icon;
            const isActive = s.key === activeContact;
            return (
              <button
                key={s.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveContact(s.key)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full transition-colors"
                style={{
                  background: isActive ? '#08111F' : '#FFFFFF',
                  border: isActive ? '1px solid #08111F' : '1px solid #E6EEF3',
                  color: isActive ? '#FFFFFF' : '#4C5E6F',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                <Icon size={13} />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Active scenario — same calm card shape across tabs */}
        <div
          className="rounded-2xl bg-white overflow-hidden mb-6"
          style={{
            border: '1px solid #D0EFF4',
            boxShadow: '0 18px 48px rgba(20,184,166,0.10)',
          }}
        >
          {/* Header */}
          <div
            className="px-6 lg:px-8 py-4 border-b flex items-center gap-3"
            style={{ borderColor: '#EEF3F6', background: '#F9FCFD' }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: '#0E7D8C14',
                border: '1px solid #0E7D8C40',
                color: '#0E7D8C',
              }}
            >
              <SourceIcon size={16} />
            </div>
            <div className="min-w-0">
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.14em] truncate"
                style={{ fontSize: '9.5px', fontWeight: 700 }}
              >
                {scenario.sourceTag}
              </div>
              <div
                className="text-[#08111F] truncate"
                style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.005em' }}
              >
                {scenario.sourceTitle}
              </div>
            </div>
          </div>

          {/* Body — handling steps as quiet editorial rows */}
          <div className="p-6 lg:p-8">
            <div className="space-y-4">
              {scenario.steps.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div
                    key={`${scenario.key}-${i}`}
                    className="flex items-start gap-4 pb-4 last:pb-0 border-b last:border-b-0"
                    style={{ borderColor: '#EEF3F6' }}
                  >
                    <div
                      className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                      style={{
                        background:
                          'linear-gradient(135deg, rgba(53,199,216,0.16), rgba(20,184,166,0.08))',
                        border: '1px solid #35C7D830',
                        color: '#0E7D8C',
                      }}
                    >
                      <Icon size={14} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-[#08111F]"
                        style={{
                          fontSize: '14px',
                          fontWeight: 700,
                          letterSpacing: '-0.005em',
                          lineHeight: 1.3,
                        }}
                      >
                        {row.label}
                      </div>
                      <div
                        className="mt-0.5 text-[#4C5E6F]"
                        style={{ fontSize: '12.5px', lineHeight: 1.55 }}
                      >
                        {row.detail}
                      </div>
                    </div>
                    <span
                      className="text-[#9CA3B0] shrink-0 tabular-nums"
                      style={{ fontSize: '11px', fontWeight: 600 }}
                    >
                      {row.time}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer — per-scenario footnote */}
          <div
            className="px-6 lg:px-8 py-4 border-t"
            style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
          >
            <p
              className="text-[#6F8190]"
              style={{ fontSize: '12.5px', lineHeight: 1.55 }}
            >
              {scenario.footnote}
            </p>
          </div>
        </div>

        {/* Quiet closing line */}
        <p
          className="text-[#4C5E6F] max-w-3xl"
          style={{ fontSize: '14.5px', lineHeight: 1.65 }}
        >
          Form, call, quote, consultation —{' '}
          <span className="text-[#08111F] font-medium">
            different shape per channel, the same handling around the website.
          </span>{' '}
          Nothing depends on someone remembering.
        </p>
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

      {/* Quiet flagship indicator — dot + small caps, no pill */}
      <div className="relative flex items-start justify-between mb-7">
        <span
          className="inline-flex items-center gap-2"
          style={{
            color,
            fontSize: '10.5px',
            fontWeight: 700,
            letterSpacing: '0.18em',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 10px ${color}` }}
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
        className="relative mt-5 text-white/70 flex-1"
        style={{ fontSize: '15px', lineHeight: 1.6 }}
      >
        {PROTECTION_HUB.note}
      </p>

      {/* Quiet base — accent line + bottom anchor caption (no chip list) */}
      <div
        className="relative mt-6 pt-5 border-t"
        style={{ borderColor: 'rgba(255,255,255,0.10)' }}
      >
        <div
          className="text-white/60"
          style={{ fontSize: '12.5px', lineHeight: 1.5 }}
        >
          The other four protections sit{' '}
          <span className="text-white">around this one</span> — connected, not separate.
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
      {/* Inline label (dot + small caps) replaces the old pill */}
      <div className="flex items-start justify-between mb-4">
        <span
          className="inline-flex items-center gap-2"
          style={{
            color,
            fontSize: '10px',
            fontWeight: 700,
            letterSpacing: '0.16em',
            paddingTop: '4px',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: color, boxShadow: `0 0 6px ${color}` }}
          />
          {(hub ? 'Flagship' : label).toUpperCase()}
        </span>
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
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

function SectionShift() {
  const phases = [
    {
      when: 'In the first weeks',
      body:
        'The bleeding stops. Calls do not vanish into voicemail, weekend forms do not sit unread, and quotes have an owner before the page closes. The website looks the same; what happens after it does not.',
    },
    {
      when: 'By the third month',
      body:
        'Follow-up has a rhythm of its own. Quotes get a polite chase without anyone remembering. Consultation requests reach the right clinician before reception touches them. The owner stops carrying handoffs in their head.',
    },
    {
      when: 'By the sixth month',
      body:
        'Proof returns to the pages — real, recent, and placed where the next visitor hesitates. The listing tells the same story everywhere. Local visibility holds when a competitor flares up because the trust under the listing is real, not paid for.',
    },
    {
      when: 'After the first year',
      body:
        'Good work compounds. Pages get sharper because real questions and real objections feed back into them. Repeat-care and returning clients show up in the same handling path as new ones. The system improves with use, not with relaunches.',
    },
  ];

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
              What compounds
            </div>
            <h2 className="text-[#08111F]">
              Not a launch event.{' '}
              <span className="text-[#4C5E6F]">An operating layer that improves with use.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Connected handling is not a relaunch with bigger numbers afterwards. It is
              the same operating layer, quietly improving the work week the website
              already serves.
            </p>
          </div>
        </div>

        {/* Two-column editorial spread — no dominant card, no four-card grid, no lifecycle rail */}
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          {/* LEFT — typographic anchor + owner-view note */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="text-[#08111F]"
              style={{
                fontSize: 'clamp(22px, 2.4vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-0.018em',
                lineHeight: 1.25,
              }}
            >
              The owner stops carrying the handoffs in their head.
            </div>
            <p
              className="mt-5 text-[#4C5E6F]"
              style={{ fontSize: '15px', lineHeight: 1.7 }}
            >
              The shift is rarely loud. Mondays start calmer. Friday quotes stop
              disappearing into the weekend. The website looks the same; what happens
              after it does not. That is the change worth measuring.
            </p>

            {/* Quiet owner-view note — editorial framing, not a testimonial */}
            <div
              className="mt-8 pt-6 border-t"
              style={{ borderColor: '#E6EEF3' }}
            >
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-2"
                style={{ fontSize: '10px', fontWeight: 700 }}
              >
                What the owner notices first
              </div>
              <p
                className="text-[#4C5E6F]"
                style={{ fontSize: '13.5px', lineHeight: 1.65 }}
              >
                The same calls and forms still come in. They just stop becoming a pile by
                Tuesday. Mondays start measurably quieter — not because there is less
                work, but because none of it is waiting to be remembered.
              </p>
            </div>
          </div>

          {/* RIGHT — editorial progression, no cards, no icons, no chrome */}
          <div className="col-span-12 lg:col-span-7">
            <ol className="relative space-y-8">
              <span
                className="absolute left-[3px] top-2 bottom-2 w-px hidden lg:block"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent, #21B985 12%, rgba(33,185,133,0.20) 88%, transparent)',
                }}
                aria-hidden="true"
              />
              {phases.map((p, i) => (
                <li key={i} className="relative lg:pl-8">
                  <span
                    className="hidden lg:block absolute left-0 top-[7px] w-2 h-2 rounded-full"
                    style={{
                      background: '#21B985',
                      boxShadow: '0 0 0 4px rgba(33,185,133,0.12)',
                    }}
                    aria-hidden="true"
                  />
                  <div
                    className="text-[#0F7A57] uppercase tracking-[0.14em] mb-2"
                    style={{ fontSize: '10.5px', fontWeight: 700 }}
                  >
                    {p.when}
                  </div>
                  <p
                    className="text-[#0E2740]"
                    style={{
                      fontSize: '15.5px',
                      lineHeight: 1.7,
                      fontWeight: 500,
                    }}
                  >
                    {p.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Quiet closing line */}
        <p
          className="mt-12 text-[#08111F] max-w-3xl"
          style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.65 }}
        >
          The website does not get replaced every two years.{' '}
          <span className="text-[#4C5E6F]">
            It gets sharper because real working weeks feed back into it.
          </span>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — Scenario showcase (custom mini-surfaces per industry)
// Premium scenario examples — illustrative working weeks, not portfolio.
// One featured Roofing scenario with a full premium mini-page mock + four
// supporting scenarios, each with its own custom visual surface (funnel,
// timeline, consultation page, booking strip). No stock photos, no fake
// screenshots, no placeholder image boxes, no lane wrappers, no report rails.
// ============================================================================

// — Mini website surfaces (one per scenario) ——————————————————————————————

function RoofingSurface() {
  return (
    <div
      className="relative rounded-2xl bg-white overflow-hidden"
      style={{
        border: '1px solid #E6EEF3',
        boxShadow: '0 14px 36px rgba(8,17,31,0.08)',
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
          roofing site · emergency
        </span>
      </div>

      {/* Page hero */}
      <div
        className="relative px-6 pt-6 pb-7"
        style={{
          background:
            'linear-gradient(135deg, #FFFCF5 0%, #FFFFFF 50%, #FEF6E4 100%)',
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none"
          style={{
            background: 'rgba(244,183,64,0.24)',
            filter: 'blur(48px)',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <div
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-3"
            style={{
              background: '#FFFFFF',
              border: '1px solid #F4B74055',
              color: '#9A6F12',
              fontSize: '9.5px',
              fontWeight: 700,
              letterSpacing: '0.16em',
            }}
          >
            <span className="w-1 h-1 rounded-full bg-[#F4B740] shadow-[0_0_6px_#F4B740]" />
            STORM RESPONSE
          </div>
          <div
            className="text-[#08111F]"
            style={{
              fontSize: '22px',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.018em',
            }}
          >
            Roof gone after the storm?{' '}
            <span className="text-[#9A6F12]">We&rsquo;re out today.</span>
          </div>
          <p
            className="mt-2 text-[#4C5E6F] max-w-[420px]"
            style={{ fontSize: '12.5px', lineHeight: 1.5 }}
          >
            Emergency tarp, repair, and full reroof. Real local crews. Same-day quote
            on storm-week jobs.
          </p>
          <div className="mt-4 flex items-center gap-2.5 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md"
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
              style={{ fontSize: '11px', fontWeight: 600 }}
            >
              <PhoneCall size={10} color="#9A6F12" />
              020 7946 0214
            </span>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div
        className="flex items-center justify-between gap-3 px-6 py-3 border-t flex-wrap"
        style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
      >
        <div className="flex items-center gap-1.5">
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
            className="ml-2 text-[#6F8190]"
            style={{ fontSize: '10.5px', fontWeight: 600 }}
          >
            312 reviews · Verified · N6—N10
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[#0F7A57]"
          style={{ fontSize: '10px', fontWeight: 700 }}
        >
          <span className="w-1 h-1 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
          Replying now
        </span>
      </div>
    </div>
  );
}

// Plumbing — phone-frame SMS thread, missed-call recovery
function PlumbingSurface() {
  return (
    <div
      className="rounded-2xl mx-auto"
      style={{
        maxWidth: '280px',
        background: 'linear-gradient(180deg, #1A2435 0%, #0E1828 100%)',
        border: '1px solid rgba(53,199,216,0.20)',
        boxShadow: '0 14px 36px rgba(8,17,31,0.30)',
        padding: '8px',
      }}
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: '#F4F7FA' }}
      >
        {/* Contact / status bar */}
        <div
          className="flex items-center gap-2 px-3 py-2.5 border-b"
          style={{ borderColor: '#E6EEF3', background: '#FFFFFF' }}
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{
              background: 'linear-gradient(135deg, #35C7D8, #14B8A6)',
              color: '#FFFFFF',
            }}
          >
            <PhoneCall size={11} />
          </div>
          <div className="min-w-0 flex-1">
            <div
              className="text-[#08111F] truncate"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              Engineer · same-day cover
            </div>
            <div
              className="text-[#0F7A57] flex items-center gap-1"
              style={{ fontSize: '9.5px', fontWeight: 600 }}
            >
              <span className="w-1 h-1 rounded-full bg-[#21B985]" />
              On duty · N6
            </div>
          </div>
        </div>

        {/* Conversation */}
        <div className="p-3 space-y-2">
          <div
            className="text-center text-[#9CA3B0]"
            style={{ fontSize: '9.5px', fontWeight: 600 }}
          >
            Missed call · Sat 09:14
          </div>

          <div className="flex justify-end">
            <div
              className="rounded-2xl rounded-tr-sm px-3 py-2 max-w-[200px]"
              style={{
                background: 'linear-gradient(135deg, #0E7D8C, #14B8A6)',
                color: '#FFFFFF',
                fontSize: '10.5px',
                lineHeight: 1.45,
              }}
            >
              Sorry we missed you. Calling back in 15 minutes — burst pipe, no water?
            </div>
          </div>

          <div className="flex justify-start">
            <div
              className="rounded-2xl rounded-tl-sm px-3 py-2 max-w-[200px]"
              style={{
                background: '#FFFFFF',
                color: '#08111F',
                fontSize: '10.5px',
                lineHeight: 1.45,
                border: '1px solid #E6EEF3',
              }}
            >
              Yes please — burst pipe upstairs.
            </div>
          </div>

          <div className="flex justify-end">
            <div
              className="rounded-2xl rounded-tr-sm px-3 py-2 max-w-[200px]"
              style={{
                background: 'linear-gradient(135deg, #0E7D8C, #14B8A6)',
                color: '#FFFFFF',
                fontSize: '10.5px',
                lineHeight: 1.45,
              }}
            >
              On my way — 25 minutes. Stay safe.
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="border-t px-3 py-2 flex items-center justify-between"
          style={{ borderColor: '#E6EEF3', background: '#FFFFFF' }}
        >
          <span
            className="text-[#6F8190]"
            style={{ fontSize: '9px', fontWeight: 600 }}
          >
            Logged · routed · owned
          </span>
          <span
            className="text-[#0F7A57]"
            style={{ fontSize: '9.5px', fontWeight: 700 }}
          >
            +9 min
          </span>
        </div>
      </div>
    </div>
  );
}

// Foundation — written inspection proposal document preview
function FoundationSurface() {
  return (
    <div
      className="rounded-xl bg-white mx-auto overflow-hidden"
      style={{
        maxWidth: '300px',
        border: '1px solid #D0E8E1',
        boxShadow:
          '0 14px 36px rgba(8,17,31,0.10), 0 1px 0 rgba(20,184,166,0.06)',
      }}
    >
      {/* Document header */}
      <div
        className="px-4 py-3 border-b flex items-center justify-between gap-2"
        style={{
          borderColor: '#EEF3F6',
          background: 'linear-gradient(135deg, #F6FBF9 0%, #FFFFFF 100%)',
        }}
      >
        <div className="min-w-0">
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.14em]"
            style={{ fontSize: '8.5px', fontWeight: 700 }}
          >
            Structural inspection
          </div>
          <div
            className="text-[#08111F] truncate"
            style={{ fontSize: '12.5px', fontWeight: 700 }}
          >
            Written proposal
          </div>
        </div>
        <div
          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md shrink-0"
          style={{
            background: '#F4FBF8',
            border: '1px solid #C9EDDB',
            color: '#0F7A57',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.1em',
          }}
        >
          <CheckCircle2 size={9} />
          ISSUED
        </div>
      </div>

      {/* Document body */}
      <div className="px-4 py-3 space-y-2.5">
        {[
          { label: 'Site visit', value: 'Completed · Tuesday' },
          { label: 'Findings', value: 'Settling at front bay; minor crack pattern' },
          { label: 'Recommended scope', value: 'Underpinning to bay; monitor adjacent' },
          { label: 'Validity', value: '14 days from issue' },
        ].map((row, i) => (
          <div key={i}>
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.12em]"
              style={{ fontSize: '8.5px', fontWeight: 700 }}
            >
              {row.label}
            </div>
            <div
              className="text-[#08111F]"
              style={{ fontSize: '11px', fontWeight: 500, lineHeight: 1.45 }}
            >
              {row.value}
            </div>
          </div>
        ))}
      </div>

      {/* Footer — signature + owned follow-up */}
      <div
        className="px-4 py-3 border-t"
        style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
      >
        <div
          className="text-[#9CA3B0] uppercase tracking-[0.12em] mb-1"
          style={{ fontSize: '8.5px', fontWeight: 700 }}
        >
          Signature
        </div>
        <div
          className="text-[#08111F]"
          style={{ fontSize: '11px', fontWeight: 600 }}
        >
          M. Patel · Principal engineer
        </div>
        <div
          className="mt-2 text-[#6F8190] flex items-center justify-between gap-2"
          style={{ fontSize: '9.5px', fontWeight: 600 }}
        >
          <span>Sent · with client</span>
          <span>Owner: chase Mon 10:00</span>
        </div>
      </div>
    </div>
  );
}

// Dental — pre-visit consultation information card (not a website page)
function DentalSurface() {
  return (
    <div
      className="rounded-xl bg-white mx-auto overflow-hidden"
      style={{
        maxWidth: '300px',
        border: '1px solid #DCD0F0',
        boxShadow: '0 14px 36px rgba(155,125,224,0.12)',
      }}
    >
      {/* Pre-visit header */}
      <div
        className="px-4 py-3 border-b"
        style={{
          borderColor: '#EEF3F6',
          background: 'linear-gradient(135deg, #FBF9FE 0%, #FFFFFF 100%)',
        }}
      >
        <div
          className="text-[#6B4FB8] uppercase tracking-[0.14em]"
          style={{ fontSize: '8.5px', fontWeight: 700 }}
        >
          Pre-visit information
        </div>
        <div
          className="text-[#08111F] mt-0.5"
          style={{
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '-0.005em',
            lineHeight: 1.3,
          }}
        >
          Implant consultation
        </div>
        <div
          className="mt-1 text-[#6F8190] flex items-center gap-2"
          style={{ fontSize: '10.5px', fontWeight: 600 }}
        >
          <Clock size={10} />
          Thursday · 10:30 · 45 minutes
        </div>
      </div>

      {/* Procedure summary */}
      <div className="px-4 py-3 space-y-2.5">
        <div>
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.12em] mb-1"
            style={{ fontSize: '8.5px', fontWeight: 700 }}
          >
            What we will discuss
          </div>
          <div className="space-y-1">
            {[
              'Procedure step by step',
              'Recovery timing and care',
              'Indicative cost range',
            ].map((line, i) => (
              <div
                key={i}
                className="flex items-start gap-1.5 text-[#4C5E6F]"
                style={{ fontSize: '11px', lineHeight: 1.5 }}
              >
                <span
                  className="w-1 h-1 rounded-full bg-[#6B4FB8] mt-1.5 shrink-0"
                  aria-hidden="true"
                />
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 border-t" style={{ borderColor: '#EEF3F6' }}>
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.12em] mb-1"
            style={{ fontSize: '8.5px', fontWeight: 700 }}
          >
            With you on the day
          </div>
          <div className="text-[#08111F]" style={{ fontSize: '11.5px', fontWeight: 600 }}>
            Dr. A. Patel · Clinical lead
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-4 py-2.5 border-t flex items-center justify-between"
        style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
      >
        <span className="text-[#6F8190]" style={{ fontSize: '9.5px', fontWeight: 600 }}>
          Reminder · 24h before
        </span>
        <span
          className="inline-flex items-center gap-1 text-[#6B4FB8]"
          style={{ fontSize: '9.5px', fontWeight: 700 }}
        >
          <Repeat size={10} />
          Pre-visit set
        </span>
      </div>
    </div>
  );
}

// Dermatology — aftercare email with review prompt + repeat-care
function DermatologySurface() {
  return (
    <div
      className="rounded-xl bg-white mx-auto overflow-hidden"
      style={{
        maxWidth: '300px',
        border: '1px solid #C9EDDB',
        boxShadow: '0 14px 36px rgba(33,185,133,0.12)',
      }}
    >
      {/* Email header */}
      <div
        className="px-4 py-3 border-b"
        style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
      >
        <div className="flex items-center justify-between mb-1">
          <span
            className="text-[#9CA3B0] uppercase tracking-[0.12em]"
            style={{ fontSize: '8.5px', fontWeight: 700 }}
          >
            From the clinic
          </span>
          <span className="text-[#9CA3B0]" style={{ fontSize: '9px', fontWeight: 600 }}>
            Same day
          </span>
        </div>
        <div
          className="text-[#08111F]"
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '-0.005em',
            lineHeight: 1.3,
          }}
        >
          Care notes from today — and how you&rsquo;re doing.
        </div>
      </div>

      {/* Email body */}
      <div className="px-4 py-3 space-y-2.5">
        <p
          className="text-[#4C5E6F]"
          style={{ fontSize: '11px', lineHeight: 1.55 }}
        >
          A short note on aftercare from your visit today, and a few signs to watch for
          over the next week.
        </p>

        {/* Embedded review prompt */}
        <div
          className="rounded-md px-3 py-2.5"
          style={{
            background:
              'linear-gradient(to right, rgba(33,185,133,0.10), rgba(33,185,133,0.02))',
            border: '1px solid rgba(33,185,133,0.28)',
          }}
        >
          <div className="flex items-center gap-1 mb-1">
            {[0, 1, 2, 3, 4].map(i => (
              <Star key={i} size={9} fill="#F4B740" color="#F4B740" />
            ))}
            <span
              className="ml-1 text-[#08111F]"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              How was your visit?
            </span>
          </div>
          <p
            className="text-[#4C5E6F]"
            style={{ fontSize: '10px', lineHeight: 1.5 }}
          >
            One quick line helps the next patient decide.
          </p>
        </div>
      </div>

      {/* Footer — repeat-care prompt */}
      <div
        className="px-4 py-2.5 border-t flex items-center justify-between"
        style={{ borderColor: '#EEF3F6', background: '#F9FCFB' }}
      >
        <span
          className="inline-flex items-center gap-1 text-[#0F7A57]"
          style={{ fontSize: '9.5px', fontWeight: 700 }}
        >
          <Repeat size={10} />
          Repeat-care · 6 weeks
        </span>
        <span className="text-[#6F8190]" style={{ fontSize: '9px', fontWeight: 600 }}>
          Auto · owned
        </span>
      </div>
    </div>
  );
}

type ScenarioCardData = {
  surface: ReactNode;
  industry: string;
  audience: 'Service business' | 'Specialist clinic';
  tone: string;
  dot: string;
  copy: string;
};

function SectionScenarios() {
  const cards: ReadonlyArray<ScenarioCardData> = [
    {
      surface: <PlumbingSurface />,
      industry: 'Plumbing',
      audience: 'Service business',
      tone: '#0E7D8C',
      dot: '#35C7D8',
      copy: 'A same-day call hits voicemail, form, and message channel at once. Three inboxes, no single owner — the job goes to whoever replies first. One capture surface with fast first reply ends the scramble.',
    },
    {
      surface: <FoundationSurface />,
      industry: 'Foundation repair',
      audience: 'Service business',
      tone: '#0E7D8C',
      dot: '#14B8A6',
      copy: 'Inspection on Tuesday, the proposal follow-up quietly drifts. Quote drafted, never sent. Owned follow-up means status is visible on every active quote and the chase happens before the lead cools.',
    },
    {
      surface: <DentalSurface />,
      industry: 'Dental implants',
      audience: 'Specialist clinic',
      tone: '#6B4FB8',
      dot: '#9B7DE0',
      copy: 'A patient compares three providers and the consultation request sits in a shared inbox. Procedure clarity above the fold, routed handling, and pre-visit follow-up keep the consultation from drifting elsewhere.',
    },
    {
      surface: <DermatologySurface />,
      industry: 'Dermatology',
      audience: 'Specialist clinic',
      tone: '#0F7A57',
      dot: '#21B985',
      copy: 'Appointment kept. Patient happy. The review moment is missed and proof never returns to the website. A timed review request turns the visit into visible trust for the next visitor.',
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        {/* Header */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Selected scenarios
            </div>
            <h2 className="text-[#08111F]">
              Different trades.{' '}
              <span className="text-[#4C5E6F]">Same connected pattern.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              How a connected website system shows up across service businesses and
              specialist clinics — same operating shape, different page surfaces.
            </p>
          </div>
        </div>

        {/* Featured Roofing — wide composition, page surface on the right */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #FAFCFD 100%)',
            border: '1px solid #E6EEF3',
            boxShadow: '0 18px 48px rgba(8,17,31,0.06)',
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'rgba(244,183,64,0.10)', filter: 'blur(60px)' }}
            aria-hidden="true"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            <div className="col-span-12 lg:col-span-5 p-7 lg:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: '#F4B740', boxShadow: '0 0 8px #F4B740' }}
                />
                <span
                  style={{
                    color: '#9A6F12',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                  }}
                >
                  ROOFING · SERVICE BUSINESS
                </span>
              </div>
              <h3
                className="text-[#08111F]"
                style={{
                  fontSize: 'clamp(22px, 2.4vw, 28px)',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.018em',
                }}
              >
                The storm passes. Quote requests stack up while crews are still on jobs.
              </h3>
              <p
                className="mt-5 text-[#4C5E6F]"
                style={{ fontSize: '14.5px', lineHeight: 1.65 }}
              >
                Calls hit voicemail. The Friday quote goes quiet over the weekend. The
                connected path protects missed-call recovery, owned quote follow-up, and
                local visibility that survives the next storm.
              </p>
            </div>
            <div
              className="col-span-12 lg:col-span-7 p-6 lg:p-8 flex items-center"
              style={{ borderLeft: '1px solid #EEF3F6' }}
            >
              <div className="w-full">
                <RoofingSurface />
              </div>
            </div>
          </div>
        </div>

        {/* Four scenarios — page surface dominant, single flowing caption */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {cards.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white overflow-hidden flex flex-col"
              style={{
                border: '1px solid #E6EEF3',
                boxShadow: '0 10px 28px rgba(8,17,31,0.06)',
              }}
            >
              <div
                className="p-5"
                style={{
                  background: `linear-gradient(135deg, ${s.dot}0A 0%, ${s.dot}03 100%)`,
                  borderBottom: '1px solid #EEF3F6',
                }}
              >
                {s.surface}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: s.dot, boxShadow: `0 0 8px ${s.dot}` }}
                  />
                  <span
                    style={{
                      color: s.tone,
                      fontSize: '11.5px',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                    }}
                  >
                    {s.industry.toUpperCase()}
                  </span>
                  <span
                    className="ml-auto text-[#9CA3B0]"
                    style={{ fontSize: '10.5px', fontWeight: 600 }}
                  >
                    {s.audience}
                  </span>
                </div>
                <p
                  className="text-[#4C5E6F]"
                  style={{ fontSize: '13.5px', lineHeight: 1.65 }}
                >
                  {s.copy}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet footer note */}
        <p
          className="text-[#6F8190] max-w-2xl"
          style={{ fontSize: '13px', lineHeight: 1.6 }}
        >
          Illustrative scenarios across trades — same connected handling around the
          website. Not named client results.
        </p>
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

function SectionSurfaces() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        {/* Header */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Selected surfaces
            </div>
            <h2 className="text-[#08111F]">
              The kind of pages{' '}
              <span className="text-[#4C5E6F]">we build into website systems.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              A real service-page surface — designed to answer intent, carry trust, and
              hand off cleanly to the handling system around it.
            </p>
          </div>
        </div>

        {/* Dominant page surface — the product is the website */}
        <div className="relative">
          <div
            className="absolute -inset-10 rounded-[40px] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 50% 30%, rgba(53,199,216,0.12), transparent 70%)',
              filter: 'blur(60px)',
            }}
            aria-hidden="true"
          />

          <div
            className="relative rounded-2xl overflow-hidden bg-white mx-auto"
            style={{
              maxWidth: '1140px',
              border: '1px solid #D8E6EE',
              boxShadow:
                '0 40px 96px rgba(8,17,31,0.12), 0 0 0 1px rgba(53,199,216,0.06)',
            }}
          >
            {/* Browser chrome */}
            <div
              className="flex items-center gap-1.5 px-4 py-3 border-b"
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
                  fontSize: '10.5px',
                  fontWeight: 600,
                }}
              >
                <ShieldCheck size={10} color="#21B985" />
                /services/boiler-repair
              </span>
            </div>

            {/* Mini site nav */}
            <div
              className="flex items-center justify-between px-6 py-3 border-b"
              style={{ borderColor: '#F2F5F7' }}
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-5 h-5 rounded flex items-center justify-center"
                  style={{ background: '#08111F', color: '#35C7D8', fontSize: '9.5px', fontWeight: 800 }}
                >
                  ▲
                </span>
                <span
                  className="text-[#08111F]"
                  style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '-0.005em' }}
                >
                  Northwell Heating
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-4">
                {['Services', 'Areas', 'Reviews', 'Contact'].map(n => (
                  <span
                    key={n}
                    className="text-[#4C5E6F]"
                    style={{ fontSize: '11px', fontWeight: 500 }}
                  >
                    {n}
                  </span>
                ))}
              </div>
              <span
                className="px-3 py-1.5 rounded-md"
                style={{
                  background: '#08111F',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: 700,
                }}
              >
                Same-day quote
              </span>
            </div>

            {/* Page body — INTENT / EXPLAIN / PROOF / CTA zones, intrinsic, no annotation markers */}
            <div className="p-7 lg:p-10 space-y-5 lg:space-y-6">
              {/* INTENT */}
              <div
                className="relative rounded-xl p-6 lg:p-7"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(53,199,216,0.10), rgba(53,199,216,0.02))',
                  border: '1px solid rgba(53,199,216,0.28)',
                }}
              >
                <div
                  className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-3"
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid #D0EFF4',
                    color: '#0E7D8C',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                  }}
                >
                  <MapPin size={9} />
                  NORTH LONDON
                </div>
                <div
                  className="text-[#08111F]"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 26px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.018em',
                  }}
                >
                  Same-day boiler repair — engineer at your door, not a callback.
                </div>
                <div
                  className="mt-2 text-[#4C5E6F]"
                  style={{ fontSize: '13.5px', lineHeight: 1.55 }}
                >
                  Gas Safe registered. Local. Fixed-price quotes before any work starts.
                </div>
              </div>

              {/* EXPLAIN */}
              <div
                className="relative rounded-xl p-6 lg:p-7"
                style={{ background: '#F6FAFC', border: '1px solid #E6EEF3' }}
              >
                <div
                  className="text-[#08111F] mb-2"
                  style={{ fontSize: '14px', fontWeight: 700 }}
                >
                  What we fix today
                </div>
                <div
                  className="text-[#4C5E6F]"
                  style={{ fontSize: '13.5px', lineHeight: 1.6 }}
                >
                  No heat, no hot water, pressure dropping, error codes, knocking pipes,
                  intermittent shutoff. Most repairs handled in one visit — diagnosis,
                  fixed-price quote, and the fix on the same call.
                </div>
              </div>

              {/* PROOF */}
              <div
                className="relative rounded-xl p-6 lg:p-7"
                style={{
                  background: 'rgba(20,184,166,0.07)',
                  border: '1px solid rgba(20,184,166,0.25)',
                }}
              >
                <div className="flex items-center gap-1.5 mb-3 flex-wrap">
                  {[0, 1, 2, 3, 4].map(i => (
                    <Star key={i} size={12} fill="#F4B740" color="#F4B740" />
                  ))}
                  <span
                    className="ml-1 text-[#0E2740]"
                    style={{ fontSize: '13px', fontWeight: 700 }}
                  >
                    4.9
                  </span>
                  <span
                    className="ml-1 text-[#6F8190]"
                    style={{ fontSize: '11.5px', fontWeight: 600 }}
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
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white"
                        style={{
                          border: '1px solid #D0EFF4',
                          color: '#0E7D8C',
                          fontSize: '11.5px',
                          fontWeight: 600,
                        }}
                      >
                        <Icon size={10} />
                        {t.label}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* CTA + handoff */}
              <div
                className="relative rounded-xl p-6 lg:p-7"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(33,185,133,0.10), rgba(33,185,133,0.02))',
                  border: '1px solid rgba(33,185,133,0.28)',
                }}
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md"
                    style={{
                      background: '#08111F',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 700,
                    }}
                  >
                    Get a same-day quote
                    <ArrowRight size={13} />
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[#0E2740]"
                    style={{ fontSize: '13px', fontWeight: 700 }}
                  >
                    <PhoneCall size={12} color="#0F7A57" />
                    020 7946 0214
                  </span>
                </div>
                <div
                  className="mt-3 text-[#6F8190]"
                  style={{ fontSize: '12px', fontWeight: 500 }}
                >
                  Goes to the engineer on duty — captured, owned, routed, and replied to fast.
                </div>
              </div>
            </div>

            {/* Page footer — finished page feel: service area + related work, no annotation chrome */}
            <div
              className="border-t grid grid-cols-1 sm:grid-cols-12 gap-0"
              style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}
            >
              <div
                className="sm:col-span-5 p-5 lg:p-7 sm:border-r"
                style={{ borderColor: '#EEF3F6' }}
              >
                <div
                  className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-2"
                  style={{ fontSize: '9.5px', fontWeight: 700 }}
                >
                  Service area
                </div>
                <div
                  className="flex items-center gap-2 text-[#08111F] mb-2"
                  style={{ fontSize: '13px', fontWeight: 700 }}
                >
                  <MapPin size={12} color="#0E7D8C" />
                  N1—N22 · same-day cover
                </div>
                <p
                  className="text-[#6F8190]"
                  style={{ fontSize: '11.5px', lineHeight: 1.55 }}
                >
                  Engineers dispatched from local depots. Calls answered seven days,
                  emergency cover after hours.
                </p>
              </div>
              <div className="sm:col-span-7 p-5 lg:p-7">
                <div
                  className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-2"
                  style={{ fontSize: '9.5px', fontWeight: 700 }}
                >
                  Related work on this page
                </div>
                <div className="grid grid-cols-2 gap-y-1.5 gap-x-4">
                  {[
                    'Boiler replacement',
                    'Heating system installs',
                    'Annual service & safety',
                    'Landlord gas certificates',
                  ].map(item => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-[#4C5E6F]"
                      style={{ fontSize: '12px', fontWeight: 500 }}
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#35C7D8] shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* One quiet supporting note — italic marginalia, no chips, no spec table */}
        <p
          className="text-[#6F8190] mx-auto max-w-3xl text-center"
          style={{ fontSize: '14.5px', lineHeight: 1.75, fontStyle: 'italic' }}
        >
          Every service or treatment page carries the same four things — an intent line,
          plain-language explanation, proof placed where hesitation forms, and an
          intent-matched call to action that hands off to the handling system. Illustrative,
          not a client screenshot.
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
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
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

          {/* Right balance — a quiet "good fit usually means" panel that supports buyer fit */}
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <div
              className="rounded-2xl bg-white p-6 w-full"
              style={{
                border: '1px solid #E6EEF3',
                boxShadow: '0 6px 20px rgba(8,17,31,0.04)',
              }}
            >
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.18em] mb-1"
                style={{ fontSize: '10px', fontWeight: 700 }}
              >
                A good fit usually means
              </div>
              <div
                className="text-[#08111F] mb-4"
                style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.005em' }}
              >
                You recognise four of these.
              </div>
              <ul className="space-y-3">
                {[
                  'Enquiries already come in — the website is not the bottleneck.',
                  'Calls, forms, or quotes lose momentum after the first reply.',
                  'Follow-up depends on memory, not a system.',
                  'Reviews and proof are real but underused on the site.',
                  'The owner wants practical structure, not a prettier site.',
                ].map(line => (
                  <li key={line} className="flex items-start gap-3">
                    <span
                      className="w-1 h-5 rounded-full bg-[#14B8A6] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span
                      className="text-[#4C5E6F]"
                      style={{ fontSize: '13px', lineHeight: 1.55 }}
                    >
                      {line}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-5 pt-4 border-t text-[#6F8190]"
                style={{ borderColor: '#EEF3F6', fontSize: '11.5px', lineHeight: 1.55 }}
              >
                If three or more sound familiar, this is built for the operating state
                you&rsquo;re already in.
              </div>
            </div>
          </div>
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

          <div
            className="col-span-12 lg:col-span-4 rounded-2xl p-9 relative"
            style={{
              background: 'linear-gradient(180deg, #F6F8FA 0%, #EEF2F5 100%)',
              border: '1px solid #D8DDE3',
            }}
          >
            <div className="flex items-center gap-2.5 mb-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-[#D0DCE5] text-[#6F8190]">
                <Minus size={14} strokeWidth={3} />
              </span>
              <span
                className="text-[#08111F]"
                style={{ fontSize: '17px', fontWeight: 600 }}
              >
                Probably not right
              </span>
            </div>
            <p
              className="text-[#6F8190] mb-6"
              style={{ fontSize: '12.5px', lineHeight: 1.55 }}
            >
              Tell us early — it saves time on both sides.
            </p>
            <ul className="divide-y" style={{ borderColor: '#D8DDE3' }}>
              {FIT_NOT_FOR_LIST.map(f => (
                <li key={f} className="flex items-start gap-3 py-3 first:pt-0 last:pb-0" style={{ borderColor: '#D8DDE3' }}>
                  <span className="w-1 h-5 rounded-full bg-[#9CA3B0] mt-0.5 shrink-0" />
                  <span
                    className="text-[#4C5E6F]"
                    style={{ fontSize: '14px', lineHeight: 1.55 }}
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

              <ul className="mt-8 relative">
                {/* Continuous spine line connecting all five review areas */}
                <span
                  className="absolute left-[3px] top-2 bottom-2 w-px"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, transparent, #14B8A6 8%, #14B8A6 92%, transparent)',
                  }}
                  aria-hidden="true"
                />
                {REVIEW_AREAS.map((item, i) => {
                  const tones = ['#35C7D8', '#14B8A6', '#0E7D8C', '#14B8A6', '#21B985'];
                  const tone = tones[i] ?? '#14B8A6';
                  return (
                    <li
                      key={item.label}
                      className="relative flex items-start gap-5 pb-6 last:pb-0"
                    >
                      <div className="relative pt-1.5 shrink-0" style={{ width: '7px' }}>
                        <span
                          className="block w-[7px] h-[7px] rounded-full"
                          style={{
                            background: tone,
                            boxShadow: `0 0 0 4px ${tone}1A, 0 0 8px ${tone}80`,
                          }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
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
                          className="mt-1 text-[#6F8190]"
                          style={{ fontSize: '13px', lineHeight: 1.6 }}
                        >
                          {item.note}
                        </div>
                      </div>
                    </li>
                  );
                })}
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

          {/* Footer — calm CTA with small clock cue */}
          <div
            className="relative px-8 lg:px-12 py-6 border-t flex flex-wrap items-center justify-between gap-4"
            style={{
              borderColor: '#EEF3F6',
              background: 'linear-gradient(to right, #FFFFFF, #F9FCFD)',
            }}
          >
            <div className="flex items-start gap-4 max-w-[640px]">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(53,199,216,0.06))',
                  border: '1px solid rgba(20,184,166,0.25)',
                  color: '#0E7D8C',
                }}
              >
                <Clock size={16} />
              </div>
              <div className="min-w-0">
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
                  Quiet, practical, and only paid for if you choose to take it forward.
                  No pitch deck, no sales chase, no upsell.
                </div>
              </div>
            </div>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md transition-colors hover:bg-[#0E2740]"
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
