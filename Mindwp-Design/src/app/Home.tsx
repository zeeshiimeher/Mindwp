/**
 * Home.tsx — MindWP design-sandbox homepage (consolidated)
 *
 * Single-file homepage render. All 12 sections inline. Replaces the
 * previously-separate components/Hero, components/LeakDiagnosis, etc.
 *
 * Section arc:
 *  01  Hero — "Work Comes In. Too Much Slips Away." + signal surface
 *  02  Leak audit — bento grid with featured critical leak + 6 supporting incident cards; phase as colored chips, no timeline
 *  03  Website as control point — original v1 3-layer stacked surface (Surface → Underneath → Foundation)
 *  04  Normal vs Connected — white 2-column contrast
 *  05  Connected handling path — 6-stage horizontal with dashed SVG rail (teal-grounded)
 *  06  Five Protections, One Connected Path — FULL DARK constellation, SWS hub + 4 outer
 *  07  What Changes — single audit-style panel with 5 shift rows (icon + title + before→after diff)
 *  08  How This Shows Up — flagship Roofing scenario + 4 supporting scenarios in 2x2 (Plumbing / Foundation / Dental implants / Dermatology); each card has a project-image placeholder
 *  09  Selected surfaces — light section + STRONG dark inner panel, 3 layer cards
 *  10  Fit / Not for — diagnostic two-column panel
 *  11  Practical Delivery — 3-step engagement
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
// SECTION 02 — Leak audit
// Bento-style diagnostic. Seven leak incidents arranged with the critical one
// featured (large card). Each card carries a phase tag (Found / Captured /
// Proven) as a colored chip — no timeline, no numbered steps, no rail.
// ============================================================================

type LeakSeverity = 'critical' | 'high' | 'medium';
type LeakIncident = {
  phase: 'Found' | 'Captured' | 'Proven';
  phaseColor: string;
  severity: LeakSeverity;
  icon: LucideIcon;
  title: string;
  note: string;
};

const LEAK_INCIDENTS: ReadonlyArray<LeakIncident> = [
  // CRITICAL — featured
  {
    phase: 'Captured',
    phaseColor: '#F4B740',
    severity: 'critical',
    icon: Clock,
    title: 'First response is too slow',
    note: 'The enquiry cools while it sits. By the time someone picks it up, the visitor has already booked elsewhere. This is where most enquiries die.',
  },
  // HIGH — Captured supporting
  {
    phase: 'Captured',
    phaseColor: '#F4B740',
    severity: 'high',
    icon: Inbox,
    title: 'Enquiries land in scattered places',
    note: 'Form to one inbox. Call to a phone. Consultation request to a separate booking tool. No single owner sees the queue.',
  },
  {
    phase: 'Captured',
    phaseColor: '#F4B740',
    severity: 'high',
    icon: History,
    title: 'Follow-up depends on memory',
    note: 'Quotes go quiet on Friday. Consultations get forgotten on Monday. Jobs go to whoever replies first.',
  },
  // MEDIUM — Found
  {
    phase: 'Found',
    phaseColor: '#14B8A6',
    severity: 'medium',
    icon: Search,
    title: 'Local search shows the wrong business first',
    note: 'A competitor takes the top spot. The right business sits on page two — or never shows for the search a patient or customer actually typed.',
  },
  {
    phase: 'Found',
    phaseColor: '#14B8A6',
    severity: 'medium',
    icon: FileText,
    title: 'Service or treatment pages do not answer the question',
    note: 'Visitor lands, reads a paragraph, cannot tell if this is the right team or the right procedure. Closes the tab before deciding.',
  },
  // MEDIUM — Proven
  {
    phase: 'Proven',
    phaseColor: '#9B7DE0',
    severity: 'medium',
    icon: Star,
    title: 'Review moment passes unused',
    note: 'Job complete, customer happy, appointment over, patient relieved — and nobody asked at the right moment.',
  },
  {
    phase: 'Proven',
    phaseColor: '#9B7DE0',
    severity: 'medium',
    icon: Repeat,
    title: 'No loop back into the system',
    note: 'Completed work and patient experience never become visible proof on the website, the local profile, or the next visitor’s decision.',
  },
];

function LeakCard({ incident, featured = false }: { incident: LeakIncident; featured?: boolean }) {
  const Icon = incident.icon;
  const sev = incident.severity;
  const sevColor = sev === 'critical' ? '#E76F6F' : sev === 'high' ? '#F4B740' : '#9CA3B0';
  const sevLabel = sev === 'critical' ? 'CRITICAL' : sev === 'high' ? 'HIGH' : 'WEAK';

  return (
    <div
      className={featured ? 'h-full rounded-2xl p-7 lg:p-9 relative overflow-hidden' : 'h-full rounded-xl p-5'}
      style={
        featured
          ? {
              background: 'linear-gradient(to bottom right, #FFFFFF, #FDF3F3)',
              border: '1px solid #E76F6F50',
              boxShadow:
                '0 16px 48px rgba(231,111,111,0.10), 0 0 0 1px rgba(231,111,111,0.04)',
            }
          : {
              background: '#FFFFFF',
              border: '1px solid #E6EEF3',
            }
      }
    >
      {featured && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 0% 0%, rgba(231,111,111,0.06) 0%, transparent 55%)',
          }}
        />
      )}
      <div className="relative">
        {/* Tag row */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: `${incident.phaseColor}14`,
              border: `1px solid ${incident.phaseColor}38`,
              color: incident.phaseColor,
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.12em',
            }}
          >
            <span
              className="w-1 h-1 rounded-full"
              style={{ background: incident.phaseColor }}
            />
            {incident.phase.toUpperCase()}
          </span>
          <span
            className="inline-flex items-center gap-1"
            style={{
              color: sevColor,
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '0.14em',
            }}
          >
            <span
              className={sev === 'critical' ? 'animate-pulse' : ''}
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '999px',
                background: sevColor,
                boxShadow: sev === 'critical' ? `0 0 8px ${sevColor}` : 'none',
                display: 'inline-block',
              }}
            />
            {sevLabel}
          </span>
        </div>

        {/* Icon */}
        <div
          className={featured ? 'w-12 h-12 rounded-xl flex items-center justify-center mb-5' : 'w-9 h-9 rounded-lg flex items-center justify-center mb-3'}
          style={{
            background: `${incident.phaseColor}14`,
            border: `1px solid ${incident.phaseColor}30`,
            color: incident.phaseColor,
          }}
        >
          <Icon size={featured ? 22 : 16} />
        </div>

        {/* Title */}
        <div
          className="text-[#08111F]"
          style={{
            fontSize: featured ? '24px' : '15px',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
          }}
        >
          {incident.title}
        </div>

        {/* Note */}
        <p
          className="mt-3 text-[#4C5E6F]"
          style={{
            fontSize: featured ? '15.5px' : '13px',
            lineHeight: featured ? 1.6 : 1.5,
          }}
        >
          {incident.note}
        </p>
      </div>
    </div>
  );
}

function SectionLeak() {
  const [critical, ...supporting] = LEAK_INCIDENTS;
  const capturedSupport = supporting.slice(0, 2); // Captured x2
  const tail = supporting.slice(2); // Found x2 + Proven x2

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
              Leak audit
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
              Not a dramatic failure. A steady drip across the path from someone searching
              online to a job done or an appointment kept and a review captured. Each step
              works on its own. The handoffs between them do not.
            </p>
          </div>
        </div>

        {/* Audit overview strip — three summary chips, no phase ordering */}
        <div
          className="mb-6 rounded-xl bg-white border border-[#E6EEF3] px-5 lg:px-6 py-4 flex flex-wrap items-center justify-between gap-3"
          style={{ boxShadow: '0 2px 12px rgba(8,17,31,0.03)' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span
              className="uppercase tracking-[0.16em] text-[#0E2740]"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              Diagnostic overview
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6FAFC] border border-[#E6EEF3] text-[#4C5E6F]"
              style={{ fontSize: '12px', fontWeight: 600 }}
            >
              3 stages
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6FAFC] border border-[#E6EEF3] text-[#4C5E6F]"
              style={{ fontSize: '12px', fontWeight: 600 }}
            >
              7 gaps
            </span>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: '#E76F6F12',
                border: '1px solid #E76F6F38',
                color: '#C04A4A',
                fontSize: '12px',
                fontWeight: 700,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_6px_#E76F6F] animate-pulse" />
              1 critical leak
            </span>
          </div>
        </div>

        {/* Bento — featured critical card + 2 captured-support cards in top row,
            then 4 supporting cards (Found x2, Proven x2) in a 4-column band below. */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Featured critical leak card (spans 6 cols, taller) */}
          <div className="lg:col-span-6">
            <LeakCard incident={critical} featured />
          </div>

          {/* Two captured-supporting cards stacked into the remaining 6 cols */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {capturedSupport.map(inc => (
              <LeakCard key={inc.title} incident={inc} />
            ))}
          </div>

          {/* Bottom band — 4 cards: Found x2 + Proven x2 */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {tail.map(inc => (
              <LeakCard key={inc.title} incident={inc} />
            ))}
          </div>
        </div>

        {/* Bottom summary strip */}
        <div className="mt-8 rounded-2xl bg-white border border-[#E6EEF3] px-6 lg:px-10 py-7 lg:py-8 shadow-[0_4px_24px_rgba(8,17,31,0.04)]">
          <div className="grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 lg:col-span-8">
              <div
                className="text-[#08111F]"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: '-0.02em',
                }}
              >
                Seven gaps. Three handoffs. Together they decide how much of what comes
                in actually becomes paid work or kept appointments.
              </div>
              <div
                className="text-[#4C5E6F] mt-3"
                style={{ fontSize: '15px', lineHeight: 1.65 }}
              >
                This is the shape of the leak. Not a dramatic failure — it is the space
                between each step where the handoff breaks.
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
              <div
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#35C7D8]/12 to-[#14B8A6]/8 border border-[#35C7D8]/30 text-[#0E2740]"
                style={{ fontSize: '14px', fontWeight: 700 }}
              >
                <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_10px_#35C7D8]" />
                The fix is the system between the steps
              </div>
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
              Built to match how your business or practice actually runs.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              Same pages on the surface. Different operating state behind them. The
              contrast is not pretty design vs ugly design — it is whether the work coming
              in actually gets handled.
            </p>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#E6EEF3] bg-[#F6FAFC] p-8">
            <div className="mb-5 flex items-center justify-between">
              <p
                className="uppercase tracking-[0.16em]"
                style={{ color: '#E76F6F', fontSize: '11.5px', fontWeight: 700 }}
              >
                Normal website
              </p>
              <span className="w-2 h-2 rounded-full bg-[#E76F6F]" />
            </div>
            <ul className="space-y-3">
              {NORMAL_POINTS.map(p => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[#4C5E6F]"
                  style={{ fontSize: '14.5px', lineHeight: 1.55 }}
                >
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-[#E76F6F]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-[#14B8A6]/30 bg-[#14B8A6]/[0.06] p-8">
            <div className="mb-5 flex items-center justify-between">
              <p
                className="uppercase tracking-[0.16em]"
                style={{ color: '#14B8A6', fontSize: '11.5px', fontWeight: 700 }}
              >
                Connected website system
              </p>
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
            </div>
            <ul className="space-y-3">
              {CONNECTED_POINTS.map(p => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-[#08111F]"
                  style={{ fontSize: '14.5px', lineHeight: 1.55 }}
                >
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
// SECTION 05 — Connected handling path (6 stages)
// "From First Enquiry to Reliable Follow-Up."
// ============================================================================

const HANDLING_STAGES: ReadonlyArray<{ num: string; label: string; note: string }> = [
  { num: '01', label: 'Enquiry arrives', note: 'Call, form, message, booking or consultation request' },
  { num: '02', label: 'First response', note: 'Fast, even after hours' },
  { num: '03', label: 'Source recorded', note: 'Where it came from and what they wanted' },
  { num: '04', label: 'Owner sees it', note: 'The right person — not a shared inbox' },
  { num: '05', label: 'Follow-up runs', note: 'Quote chased, reminder sent, status updated' },
  { num: '06', label: 'Proof captured', note: 'Review requested when the work is done' },
];

function SectionHandling() {
  return (
    <section className="bg-gradient-to-b from-[#F6FAFC] to-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
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
              From first enquiry.
              <br />
              <span className="text-[#4C5E6F]">To reliable follow-up.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              Most enquiries do not fail at the website. They fail in the hours and days
              after. Connected handling makes sure the next step is visible, owned, and
              reliable.
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
                <div
                  className="text-[#08111F]"
                  style={{ fontSize: '14.5px', fontWeight: 600 }}
                >
                  {stage.label}
                </div>
                <div
                  className="mt-1 text-[#6F8190]"
                  style={{ fontSize: '12.5px', lineHeight: 1.5 }}
                >
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
// SECTION 07 — What changes when the path is connected
// Single audit-style panel listing 5 operating shifts as horizontal rows.
// Each row: icon + title + description (left ~65%) | before→after diff (right ~35%).
// Distinct from Section 5 (staged-rail), Section 6 (constellation), and
// Section 8 (flagship+2x2).
// ============================================================================

type OperatingShift = {
  icon: LucideIcon;
  title: string;
  description: string;
  before: string;
  after: string;
};

const OPERATING_SHIFTS: ReadonlyArray<OperatingShift> = [
  {
    icon: Inbox,
    title: 'Enquiries arrive in one place',
    description:
      'Calls, forms, messages, and consultation requests all land on a single surface with source, context, and an owner attached.',
    before: '3 inboxes + booking tool',
    after: 'One capture surface',
  },
  {
    icon: Workflow,
    title: 'Routed, not relayed',
    description:
      'The enquiry reaches the right person without three manual forwards in between.',
    before: 'Manual relay',
    after: 'Right person, right time',
  },
  {
    icon: Repeat,
    title: 'Follow-up runs on schedule',
    description:
      'Quotes get chased. Consultations get reminders. None of it depends on memory.',
    before: 'When someone remembers',
    after: 'On time, every time',
  },
  {
    icon: Star,
    title: 'Reviews captured at the right moment',
    description:
      'The request goes out when the work is fresh and the customer or patient is happy.',
    before: 'By accident, if at all',
    after: 'On request, on schedule',
  },
  {
    icon: Activity,
    title: 'Owner can see what is in motion',
    description:
      'A clear view of every active enquiry — who owns it, where it stands, what comes next.',
    before: 'No visibility',
    after: 'Clear picture',
  },
];

function SectionShift() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5"
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
              The visible change is calm: fewer dropped enquiries, fewer chased quotes,
              fewer review requests forgotten. The harder change is that the owner can
              finally see what the business or practice is doing day to day.
            </p>
          </div>
        </div>

        {/* Single shift-list panel — 5 horizontal rows */}
        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{
            border: '1px solid #E6EEF3',
            boxShadow: '0 8px 48px rgba(8,17,31,0.06)',
          }}
        >
          {/* Top header strip inside the panel */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-6 lg:px-8 py-4 border-b"
            style={{
              borderColor: '#E6EEF3',
              background: 'linear-gradient(to right, #F9FCFD, #FFFFFF)',
            }}
          >
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <span
                className="uppercase tracking-[0.16em] text-[#0E2740]"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                Operating shifts
              </span>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full"
              style={{
                background: '#F6FAFC',
                border: '1px solid #E6EEF3',
                color: '#4C5E6F',
                fontSize: '11.5px',
                fontWeight: 600,
              }}
            >
              {OPERATING_SHIFTS.length} changes · none depends on memory
            </span>
          </div>

          {/* Shift rows */}
          <div className="divide-y" style={{ borderColor: '#EEF3F6' }}>
            {OPERATING_SHIFTS.map((shift, i) => {
              const Icon = shift.icon;
              return (
                <div
                  key={shift.title}
                  className="grid grid-cols-12 gap-6 px-6 lg:px-8 py-6 lg:py-7 transition-colors hover:bg-[#F9FCFD]"
                >
                  {/* Left: icon + index + title + description */}
                  <div className="col-span-12 lg:col-span-7 flex gap-5">
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <span
                        className="tabular-nums uppercase tracking-[0.14em] text-[#9CA3B0]"
                        style={{ fontSize: '10px', fontWeight: 700 }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          background:
                            'linear-gradient(to bottom right, rgba(53,199,216,0.16), rgba(20,184,166,0.08))',
                          border: '1px solid #35C7D830',
                          color: '#0E7D8C',
                        }}
                      >
                        <Icon size={18} />
                      </div>
                    </div>
                    <div className="min-w-0 pt-1">
                      <h3
                        className="text-[#08111F]"
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          lineHeight: 1.25,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {shift.title}
                      </h3>
                      <p
                        className="mt-1.5 text-[#4C5E6F]"
                        style={{ fontSize: '13.5px', lineHeight: 1.55 }}
                      >
                        {shift.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: before → after diff */}
                  <div className="col-span-12 lg:col-span-5 flex items-center lg:justify-end">
                    <div
                      className="flex items-center gap-3 w-full rounded-xl px-4 py-3"
                      style={{
                        background: '#F9FCFD',
                        border: '1px solid #EEF3F6',
                      }}
                    >
                      <div className="flex-1 min-w-0">
                        <div
                          className="uppercase tracking-[0.14em] text-[#9CA3B0] mb-1"
                          style={{ fontSize: '9px', fontWeight: 700 }}
                        >
                          Before
                        </div>
                        <div
                          className="line-through truncate"
                          style={{ color: '#6F8190', fontSize: '13px' }}
                        >
                          {shift.before}
                        </div>
                      </div>
                      <span
                        className="shrink-0"
                        style={{ color: '#9CA3B0', fontSize: '14px' }}
                      >
                        →
                      </span>
                      <div className="flex-1 min-w-0">
                        <div
                          className="uppercase tracking-[0.14em] mb-1"
                          style={{ color: '#0E7D8C', fontSize: '9px', fontWeight: 700 }}
                        >
                          After
                        </div>
                        <div
                          className="truncate"
                          style={{ color: '#08111F', fontSize: '13px', fontWeight: 700 }}
                        >
                          {shift.after}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom strip inside panel */}
          <div
            className="flex flex-wrap items-center justify-between gap-3 px-6 lg:px-8 py-5 border-t"
            style={{
              borderColor: '#E6EEF3',
              background: 'linear-gradient(to right, #F9FCFD, #FFFFFF)',
            }}
          >
            <span className="text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
              The visible change is calm. The underlying change is that the owner can see
              the business or practice running.
            </span>
            <span
              className="inline-flex items-center gap-1.5"
              style={{ color: '#0E7D8C', fontSize: '12px', fontWeight: 700 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              What the system holds
            </span>
          </div>
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
  },
];

function ScenarioImagePlaceholder({ tone, height }: { tone: string; height: string }) {
  return (
    <div
      className="mt-6 rounded-xl flex items-center justify-center"
      style={{
        height,
        background: `linear-gradient(135deg, ${tone}08, #F6FAFC)`,
        border: `1px dashed ${tone}40`,
      }}
    >
      <div className="text-center">
        <div
          className="uppercase tracking-[0.16em] mb-1"
          style={{ color: tone, fontSize: '10px', fontWeight: 700 }}
        >
          Project image
        </div>
        <div className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>
          To be added
        </div>
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

        <ScenarioImagePlaceholder tone={scenario.tone} height="180px" />

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

      <ScenarioImagePlaceholder tone={scenario.tone} height="120px" />

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
// Light section + STRONG dark inner panel containing 3 horizontal cards:
// Service-page anatomy / Trust band / Enquiry handoff — each with a bullet list.
// (Adopted from the v2 Control Point pattern.)
// ============================================================================

const SURFACE_PATTERNS: ReadonlyArray<{
  eyebrow: string;
  title: string;
  accent: string;
  points: ReadonlyArray<string>;
}> = [
  {
    eyebrow: 'Service- or treatment-page anatomy',
    title: 'Where decisions form on the page',
    accent: '#35C7D8',
    points: [
      'Problem & intent — what the visitor came to understand',
      'Plain-language explanation of the work',
      'Proof placement where hesitation usually happens',
      'Intent-matched CTA — call, form, booking, or consultation',
      'Handoff — context, source, and owner sent with the enquiry',
    ],
  },
  {
    eyebrow: 'Trust band',
    title: 'Signals where hesitation forms',
    accent: '#14B8A6',
    points: [
      'Local service area and coverage clarity',
      'Verified business or practice signals',
      'Real recent work referenced where it counts',
      'Response within minutes, not hours',
    ],
  },
  {
    eyebrow: 'Enquiry handoff',
    title: 'Context travels with the enquiry',
    accent: '#21B985',
    points: [
      'Source — which page or channel it came from',
      'Intent — quote, booking, consultation, or question',
      'Owner — the person routed to act on it',
      'Status — active, in follow-up, or closed',
    ],
  },
];

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
              Examples of the surface design{' '}
              <span className="text-[#4C5E6F]">we build into website systems.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Not finished case studies. Selected patterns — service or treatment-page
              anatomy, trust placement, and enquiry handoff. The website surface is one
              part; the handling around it makes it work.
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
            {SURFACE_PATTERNS.map(pattern => (
              <div
                key={pattern.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background: pattern.accent,
                      boxShadow: `0 0 6px ${pattern.accent}`,
                    }}
                  />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{ color: pattern.accent, fontSize: '10.5px', fontWeight: 700 }}
                  >
                    {pattern.eyebrow}
                  </span>
                </div>
                <h3
                  className="text-white"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    lineHeight: 1.25,
                  }}
                >
                  {pattern.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {pattern.points.map(p => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-white/65"
                      style={{ fontSize: '13.5px', lineHeight: 1.55 }}
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full"
                        style={{ background: pattern.accent }}
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
    <section className="bg-gradient-to-b from-[#F6FAFC] to-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              How the work runs
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
              Practical delivery.
              <br />
              <span className="text-[#4C5E6F]">System thinking behind it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              We work directly with the owner or practice manager. The aim is operating
              change, not a prettier site or another tool subscription.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {DELIVERY_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative rounded-2xl bg-white border-2 p-8 flex flex-col"
                style={{ borderColor: `${step.accent}28` }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{
                    background: `linear-gradient(90deg, ${step.accent}, ${step.accent}40)`,
                  }}
                />
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full"
                    style={{
                      background: `${step.accent}14`,
                      border: `1px solid ${step.accent}35`,
                      color: step.accent,
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                    }}
                  >
                    Step {step.num}
                  </span>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${step.accent}12`,
                      border: `1px solid ${step.accent}28`,
                      color: step.accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                </div>
                <div
                  className="text-[#08111F]"
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {step.title}
                </div>
                <p
                  className="mt-4 text-[#4C5E6F] flex-1"
                  style={{ fontSize: '14.5px', lineHeight: 1.6 }}
                >
                  {step.body}
                </p>
                {i < DELIVERY_STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 items-center justify-center rounded-full bg-white border border-[#E6EEF3] shadow-sm z-10">
                    <span className="text-[#6F8190]" style={{ fontSize: '10px' }}>
                      →
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl bg-white border border-[#E6EEF3] px-6 py-4 flex items-center justify-between">
          <span className="text-[#6F8190]" style={{ fontSize: '13px' }}>
            We do not optimise around unclear service pages or an unowned handling path.
            Structure first, optimisation second.
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-[#21B985]"
            style={{ fontSize: '12px', fontWeight: 600 }}
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
