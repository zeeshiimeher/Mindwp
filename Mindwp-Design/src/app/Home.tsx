/**
 * Home.tsx — MindWP design-sandbox homepage (consolidated)
 *
 * Single-file homepage render. All 12 sections inline. Replaces the
 * previously-separate components/Hero, components/LeakDiagnosis, etc.
 *
 * Section arc (per the 12-section brief):
 *  01  Work Comes In. Too Much Slips Away.            (hero + signal surface)
 *  02  Traffic Does Not Help If the Path Is Unclear.  (3-lane leak handoff board)
 *  03  The Website Is the Visible Control Point.      (3-layer stacked surface)
 *  04  Built to Match How the Business Actually Runs. (normal vs connected contrast)
 *  05  From First Enquiry to Reliable Follow-Up.      (6-stage connected handling path)
 *  06  Five Systems. One Connected Path.              (flagship SWS + 4 protections)
 *  07  What Changes When the Path Is Connected.       (dark before/after panel)
 *  08  How This Shows Up — Service Business + Clinic. (two illustrative scenario cards)
 *  09  Selected Surfaces (illustrative).              (service-page anatomy preview)
 *  10  Built for Established Service Businesses and Specialist Clinics. (fit / not for)
 *  11  Practical Delivery With System Thinking.       (3-step engagement)
 *  12  Final diagnostic CTA.                          (dark CTA panel)
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
// SECTION 02 — Leak diagnosis (3-lane handoff board)
// "Traffic Does Not Help If the Path After It Is Unclear."
// ============================================================================

const LEAK_LANES = [
  {
    label: 'Found',
    accent: '#14B8A6',
    stageSummary: 'Demand arrives. Not all of it lands.',
    mainLeak: 'Found by some. Missed by the rest.',
    moments: [
      {
        icon: Search,
        title: 'Local search shows the wrong business first',
        note: 'A competitor takes the top spot. The right business sits on page two — or never shows for the search a patient or customer actually typed.',
      },
      {
        icon: FileText,
        title: 'Service or treatment pages do not answer the question',
        note: 'Visitor lands, reads a paragraph, cannot tell if this is the right team or the right procedure. Closes the tab before deciding.',
      },
    ],
  },
  {
    label: 'Captured',
    accent: '#F4B740',
    stageSummary: 'Enquiries arrive. The handoffs break.',
    mainLeak: 'Comes in. Nobody owns the full picture.',
    moments: [
      {
        icon: Inbox,
        title: 'Enquiries land in the wrong place',
        note: 'Form to one inbox. Call to a phone. Consultation request to a separate booking tool. No single owner sees the queue.',
      },
      {
        icon: Clock,
        title: 'First response is too slow',
        note: 'The enquiry cools while it sits. By the time someone picks it up, the visitor has already booked elsewhere.',
      },
      {
        icon: History,
        title: 'Follow-up depends on memory',
        note: 'Quotes go quiet on Friday. Consultations get forgotten on Monday. Jobs and appointments go to whoever replies first.',
      },
    ],
  },
  {
    label: 'Proven',
    accent: '#9B7DE0',
    stageSummary: 'Good work happens. Evidence disappears.',
    mainLeak: 'Job done. Proof never captured.',
    moments: [
      {
        icon: Star,
        title: 'Review moment passes unused',
        note: 'Job complete, customer happy, appointment over, patient relieved — and nobody asked at the right moment.',
      },
      {
        icon: Repeat,
        title: 'No loop back into the system',
        note: 'Completed work and patient experience never become visible proof on the website, the local profile, or the next visitor’s decision.',
      },
    ],
  },
];

function SectionLeak() {
  return (
    <section id="leak" className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              Traffic does not help if the path is unclear
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
              None of these gaps looks dramatic alone. Together, they decide whether demand
              becomes booked work, kept appointments, proof, and repeat enquiries.
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

        <div className="relative rounded-2xl bg-white border border-[#E6EEF3] overflow-hidden shadow-[0_8px_48px_rgba(8,17,31,0.06)]">
          <div className="hidden lg:grid grid-cols-3 border-b border-[#E6EEF3]">
            {LEAK_LANES.map((lane, i) => (
              <div
                key={lane.label}
                className="flex items-center gap-3 px-10 py-4"
                style={{
                  borderRight: i < LEAK_LANES.length - 1 ? '1px solid #E6EEF3' : 'none',
                  background: `${lane.accent}06`,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: lane.accent, boxShadow: `0 0 8px ${lane.accent}90` }}
                />
                <span
                  style={{
                    color: lane.accent,
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                  }}
                >
                  {lane.label.toUpperCase()}
                </span>
                <span
                  className="text-[#6F8190] truncate ml-1"
                  style={{ fontSize: '12px' }}
                >
                  — {lane.stageSummary}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#E6EEF3]">
            {LEAK_LANES.map((lane, i) => (
              <div key={lane.label} className="relative p-6 lg:p-10 flex flex-col">
                <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{
                    background: `linear-gradient(90deg, ${lane.accent}, ${lane.accent}20)`,
                  }}
                />

                <div className="flex items-center gap-2 mb-5 lg:hidden">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: lane.accent }}
                  />
                  <span
                    style={{
                      color: lane.accent,
                      fontSize: '12px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {lane.label.toUpperCase()}
                  </span>
                </div>

                <div
                  className="text-[#08111F] mb-7"
                  style={{
                    fontSize: '22px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {lane.mainLeak}
                </div>

                <div className="space-y-5 flex-1">
                  {lane.moments.map(m => {
                    const Icon = m.icon;
                    return (
                      <div key={m.title} className="flex gap-3.5">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            background: `${lane.accent}12`,
                            border: `1px solid ${lane.accent}28`,
                            color: lane.accent,
                          }}
                        >
                          <Icon size={14} />
                        </div>
                        <div>
                          <div
                            className="text-[#08111F]"
                            style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.3 }}
                          >
                            {m.title}
                          </div>
                          <div
                            className="text-[#6F8190] mt-1"
                            style={{ fontSize: '13.5px', lineHeight: 1.55 }}
                          >
                            {m.note}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: lane.accent }}
                  />
                  <span
                    style={{ color: lane.accent, fontSize: '11.5px', fontWeight: 700 }}
                  >
                    {lane.moments.length} gaps in this stage
                  </span>
                </div>

                {i < LEAK_LANES.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-white border border-[#E6EEF3] shadow-[0_4px_16px_rgba(8,17,31,0.08)] z-10">
                    <span className="text-[#6F8190]" style={{ fontSize: '14px' }}>
                      →
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="border-t border-[#E6EEF3] px-6 lg:px-10 py-7 lg:py-8 bg-gradient-to-r from-[#F9FCFD] to-white">
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
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 03 — The website is the visible control point
// 3-layer stacked surface (Surface / What runs underneath / Foundation)
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
// SECTION 06 — Five systems. One connected path.
// Flagship SWS + 4 protections (2x2)
// ============================================================================

const FLAGSHIP_SYS = {
  icon: Globe,
  name: 'Smart Website Systems',
  role: 'The operating surface',
  role_note: 'Where work lands, routes, and converts',
  handles:
    'Visitors, service or treatment questions, enquiry and consultation capture, page clarity — the central surface everything else connects to',
  state: 'Foundation',
  accent: '#35C7D8',
};

const PROTECTION_SYSTEMS: ReadonlyArray<{
  icon: LucideIcon;
  name: string;
  journeyStage: string;
  handles: string;
  state: string;
  accent: string;
}> = [
  {
    icon: MapPin,
    name: 'Local SEO Authority Systems',
    journeyStage: 'Found',
    handles: 'Local search presence, service-area relevance, signal trust',
    state: 'Broadcasting',
    accent: '#14B8A6',
  },
  {
    icon: PhoneCall,
    name: 'Lead Response & Handling Systems',
    journeyStage: 'Answered',
    handles: 'Calls, forms, missed calls, messages, after-hours response',
    state: 'First response',
    accent: '#F4B740',
  },
  {
    icon: Workflow,
    name: 'Follow-Up & CRM Systems',
    journeyStage: 'Followed Up',
    handles: 'Owner, status, next step, quote and consultation follow-up',
    state: 'Tracking',
    accent: '#21B985',
  },
  {
    icon: Star,
    name: 'Reputation & Review Systems',
    journeyStage: 'Proven',
    handles: 'Review request timing, feedback routing, completed work and patient experience as proof',
    state: 'Accumulating',
    accent: '#9B7DE0',
  },
];

function SectionFiveSystems() {
  return (
    <section className="bg-white py-20 border-t border-[#EEF3F6]">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 600 }}
            >
              The handling system
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
              Five systems.
              <br />
              <span className="text-[#4C5E6F]">One connected path.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              Smart Website Systems is the flagship — where decisions form. The four
              protections around it handle what happens before, during, and after the
              enquiry. None depends on someone remembering.
            </p>
          </div>
        </div>

        {/* Flagship row */}
        <div className="mb-5">
          <div className="relative rounded-2xl border-2 border-[#35C7D8]/30 bg-gradient-to-r from-[#F6FCFD] to-white p-7 shadow-[0_4px_30px_rgba(53,199,216,0.08)]">
            <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-[#35C7D8] to-[#14B8A6]" />
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: `${FLAGSHIP_SYS.accent}18`,
                    border: `1px solid ${FLAGSHIP_SYS.accent}40`,
                    color: FLAGSHIP_SYS.accent,
                  }}
                >
                  <FLAGSHIP_SYS.icon size={22} />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#35C7D8]/12 border border-[#35C7D8]/30 text-[#0E2740]"
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                      Flagship · {FLAGSHIP_SYS.state}
                    </span>
                  </div>
                  <div
                    className="text-[#08111F]"
                    style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}
                  >
                    {FLAGSHIP_SYS.name}
                  </div>
                  <div
                    className="mt-1 text-[#4C5E6F]"
                    style={{ fontSize: '14px', fontWeight: 500 }}
                  >
                    {FLAGSHIP_SYS.role} ·{' '}
                    <span className="text-[#6F8190]">{FLAGSHIP_SYS.role_note}</span>
                  </div>
                </div>
              </div>
              <div className="max-w-[440px]">
                <div
                  className="text-[#6F8190] uppercase tracking-[0.14em] mb-1.5"
                  style={{ fontSize: '9.5px', fontWeight: 700 }}
                >
                  What it handles
                </div>
                <div className="text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                  {FLAGSHIP_SYS.handles}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Journey rail */}
        <div className="mb-4 hidden lg:flex items-center bg-gradient-to-r from-[#F6FAFC] via-white to-[#F6FAFC] border border-[#E6EEF3] rounded-xl px-6 py-3.5 overflow-hidden">
          {['Found', 'Understood', 'Captured', 'Answered', 'Followed up', 'Proven'].map(
            (step, i) => (
              <div key={step} className="flex items-center shrink-0">
                <span
                  className="text-[#4C5E6F]"
                  style={{ fontSize: '12.5px', fontWeight: 600 }}
                >
                  {step}
                </span>
                {i < 5 && (
                  <span
                    className="text-[#C8D8E4] mx-3"
                    style={{ fontSize: '12px' }}
                  >
                    →
                  </span>
                )}
              </div>
            )
          )}
          <span
            className="ml-auto text-[#6F8190] shrink-0 pl-6"
            style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em' }}
          >
            Customer or patient journey
          </span>
        </div>

        {/* 2×2 protections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PROTECTION_SYSTEMS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="relative rounded-2xl border border-[#E6EEF3] bg-gradient-to-b from-white to-[#F9FCFD] p-7 overflow-hidden hover:border-[#D8E6EE] hover:shadow-[0_8px_30px_rgba(8,17,31,0.06)] transition-all"
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl"
                  style={{ background: s.accent }}
                />

                <div className="flex items-start justify-between mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: `${s.accent}12`,
                      border: `1px solid ${s.accent}30`,
                      color: s.accent,
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                    }}
                  >
                    <span className="w-1 h-1 rounded-full" style={{ background: s.accent }} />
                    {s.journeyStage}
                  </span>
                  <span
                    className="text-[#6F8190] tabular-nums"
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                    }}
                  >
                    0{i + 2}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${s.accent}14`,
                      border: `1px solid ${s.accent}33`,
                      color: s.accent,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '17px',
                        fontWeight: 600,
                        lineHeight: 1.3,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      className="mt-2 text-[#4C5E6F]"
                      style={{ fontSize: '14.5px', lineHeight: 1.6 }}
                    >
                      {s.handles}
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: s.accent }}
                  />
                  <span style={{ color: s.accent, fontSize: '11px', fontWeight: 600 }}>
                    {s.state}
                  </span>
                </div>

                <div
                  className="absolute left-5 right-5 bottom-0 h-px"
                  style={{
                    backgroundImage: `linear-gradient(90deg, transparent, ${s.accent}50, transparent)`,
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4 px-2">
          <div className="text-[#4C5E6F]" style={{ fontSize: '14px' }}>
            Most businesses already have parts of this. The work is connecting them.
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-[#08111F] border-b border-[#08111F]/30 hover:border-[#08111F] pb-1"
            style={{ fontSize: '13.5px', fontWeight: 600 }}
          >
            See where your stack is incomplete
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 07 — What changes when the path is connected
// Dark before/after panel
// ============================================================================

const SHIFT_BEFORE = [
  'Voicemail and messages, checked when someone gets to it',
  'Enquiries split across three inboxes and a booking tool',
  'Quotes sent, never followed up',
  'Reviews depend on whoever remembers to ask',
  'No clear view of what is in motion',
];

const SHIFT_AFTER: ReadonlyArray<{ icon: LucideIcon; title: string; before: string; after: string }> = [
  { icon: Inbox, title: 'Enquiries arrive in one place', before: '3 inboxes', after: '1 surface' },
  { icon: Workflow, title: 'Nothing gets lost in the handoff', before: 'Manual relay', after: 'Routed' },
  { icon: Repeat, title: 'Follow-up happens on schedule', before: 'When remembered', after: 'On time' },
  { icon: Star, title: 'Reviews captured at the right moment', before: 'By accident', after: 'On request' },
  { icon: Activity, title: 'Owner sees what is in motion', before: 'No visibility', after: 'Clear' },
];

function SectionShift() {
  return (
    <section className="bg-gradient-to-br from-[#061323] to-[#0E2740] pt-32 pb-28 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative max-w-[1240px] mx-auto px-8">
        <div className="max-w-[680px] mb-16">
          <h2
            className="text-white"
            style={{
              fontSize: '52px',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
            }}
          >
            What changes when the path is connected.
          </h2>
          <p
            className="mt-6 text-white/65"
            style={{ fontSize: '16.5px', lineHeight: 1.65 }}
          >
            The visible change is calm: fewer dropped enquiries, fewer chased quotes, fewer
            review requests forgotten. The harder change is that the owner can finally see
            what the business is doing day to day.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-0 items-stretch relative">
          {/* Before */}
          <div className="col-span-12 lg:col-span-5 rounded-2xl lg:rounded-r-none border border-white/12 bg-white/[0.04] p-9 relative overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 0% 100%, rgba(231,111,111,0.07) 0%, transparent 60%)',
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-white/80 uppercase tracking-[0.16em]"
                  style={{ fontSize: '11px', fontWeight: 700 }}
                >
                  Before
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E76F6F]/12 text-[#E76F6F] border border-[#E76F6F]/25"
                  style={{ fontSize: '10px', fontWeight: 700 }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#E76F6F]" /> scattered
                </span>
              </div>
              <div className="space-y-3">
                {SHIFT_BEFORE.map(item => (
                  <div
                    key={item}
                    className="flex items-start gap-3.5 p-5 rounded-lg border border-white/[0.09] bg-[#E76F6F]/[0.04]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]/70 mt-2 shrink-0" />
                    <span className="text-white/85" style={{ fontSize: '15.5px', lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:flex col-span-12 lg:col-span-2 flex-col items-center justify-center relative z-10">
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="w-11 h-11 rounded-full bg-[#0E2740] border border-[#35C7D8]/50 flex items-center justify-center shadow-[0_0_28px_rgba(53,199,216,0.35)]">
              <span className="text-[#35C7D8]" style={{ fontSize: '18px' }}>
                →
              </span>
            </div>
            <div className="w-px flex-1 bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          </div>

          {/* After */}
          <div className="col-span-12 lg:col-span-5 rounded-2xl lg:rounded-l-none border border-[#35C7D8]/25 bg-gradient-to-br from-[#071C35] to-[#061323] p-9 relative overflow-hidden shadow-[0_0_60px_rgba(53,199,216,0.08)]">
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at 100% 0%, rgba(53,199,216,0.12) 0%, transparent 60%)',
              }}
            />
            <div className="relative">
              <div className="flex items-center justify-between mb-8">
                <span
                  className="text-[#35C7D8] uppercase tracking-[0.16em]"
                  style={{ fontSize: '11px', fontWeight: 700 }}
                >
                  After
                </span>
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#14B8A6]/18 text-[#35C7D8] border border-[#35C7D8]/20"
                  style={{ fontSize: '10px', fontWeight: 600 }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />{' '}
                  controlled
                </span>
              </div>

              <div className="space-y-3">
                {SHIFT_AFTER.map(s => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.title}
                      className="flex items-center gap-4 p-5 rounded-xl border border-white/12 bg-white/[0.05]"
                    >
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#35C7D8]/25 to-[#14B8A6]/16 border border-[#35C7D8]/30 flex items-center justify-center text-[#35C7D8] shrink-0">
                        <Icon size={18} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white" style={{ fontSize: '16px', fontWeight: 600 }}>
                          {s.title}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className="text-white/40 line-through"
                            style={{ fontSize: '13px' }}
                          >
                            {s.before}
                          </span>
                          <span className="text-white/35" style={{ fontSize: '12px' }}>
                            →
                          </span>
                          <span
                            className="text-[#35C7D8]"
                            style={{ fontSize: '13px', fontWeight: 700 }}
                          >
                            {s.after}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 08 — How this shows up: service business + specialist clinic
// Two illustrative scenarios (featured + supporting)
// ============================================================================

const SCENARIOS = [
  {
    icon: Hammer,
    label: 'Illustrative scenario · Service business',
    audience: 'Service business (e.g. roofing or HVAC)',
    week: 'Storm passes. The phone does not stop.',
    leaks: [
      'Missed call while crew is on a job',
      'Quote sent Friday — no follow-up Monday',
      'Job done Thursday — review moment missed',
    ],
    needs: ['Response handling', 'Quote follow-up', 'Local visibility'],
    tone: '#F4B740',
  },
  {
    icon: HeartPulse,
    label: 'Illustrative scenario · Specialist clinic',
    audience: 'Specialist clinic (e.g. dental implants or dermatology)',
    week: 'A patient researches their treatment options.',
    leaks: [
      'Procedure page does not explain what to expect',
      'Consultation request sits in a shared inbox',
      'Pre-appointment follow-up depends on memory',
    ],
    needs: ['Practice front-door clarity', 'Consultation routing', 'Review request timing'],
    tone: '#9B7DE0',
  },
];

function SectionScenarios() {
  return (
    <section className="bg-gradient-to-b from-white to-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
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
              Two working days. Different industries, same operating problem — and the same
              connected handling around the website. Names of work change. The shape of the
              leak does not.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {SCENARIOS.map((s, i) => {
            const Icon = s.icon;
            const featured = i === 0;
            return (
              <div
                key={s.audience}
                className={featured ? 'col-span-12 lg:col-span-7' : 'col-span-12 lg:col-span-5'}
              >
                <div
                  className="h-full rounded-2xl border-2 p-9 relative overflow-hidden"
                  style={{
                    background:
                      featured
                        ? 'linear-gradient(to bottom, #ffffff, #FFFBF0)'
                        : 'linear-gradient(to bottom, #ffffff, #FAF7FF)',
                    borderColor: `${s.tone}30`,
                    boxShadow: `0 12px 40px ${s.tone}10`,
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{
                      background: `linear-gradient(90deg, ${s.tone}, ${s.tone}20)`,
                    }}
                  />
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${s.tone}18`,
                        border: `1px solid ${s.tone}35`,
                        color: s.tone,
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div>
                      <div
                        className="text-[#6F8190] uppercase tracking-[0.14em]"
                        style={{ fontSize: '10px', fontWeight: 700 }}
                      >
                        {s.label}
                      </div>
                      <div
                        className="text-[#08111F]"
                        style={{
                          fontSize: '20px',
                          fontWeight: 700,
                          letterSpacing: '-0.01em',
                        }}
                      >
                        {s.audience}
                      </div>
                    </div>
                  </div>

                  <div
                    className="p-5 rounded-xl mb-6"
                    style={{
                      background: `${s.tone}08`,
                      border: `1px solid ${s.tone}20`,
                    }}
                  >
                    <div
                      className="text-[#6F8190] uppercase tracking-[0.14em] mb-2"
                      style={{ fontSize: '9px', fontWeight: 700 }}
                    >
                      What a common week looks like
                    </div>
                    <p
                      className="text-[#08111F]"
                      style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.4 }}
                    >
                      {s.week}
                    </p>
                  </div>

                  <div
                    className="text-[#6F8190] uppercase tracking-[0.14em] mb-3"
                    style={{ fontSize: '9.5px', fontWeight: 700 }}
                  >
                    Where it leaks
                  </div>
                  <div className="space-y-2 mb-7">
                    {s.leaks.map(l => (
                      <div key={l} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: s.tone }}
                        />
                        <span
                          className="text-[#4C5E6F]"
                          style={{ fontSize: '13.5px', lineHeight: 1.5 }}
                        >
                          {l}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t" style={{ borderColor: `${s.tone}20` }}>
                    <div
                      className="text-[#6F8190] uppercase tracking-[0.14em] mb-3"
                      style={{ fontSize: '9.5px', fontWeight: 700 }}
                    >
                      What it needs
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {s.needs.map(n => (
                        <span
                          key={n}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F6FAFC] border border-[#E6EEF3] text-[#08111F]"
                          style={{ fontSize: '12px', fontWeight: 500 }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: s.tone }}
                          />
                          {n}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-xl bg-[#F6FAFC] border border-[#E6EEF3] px-8 py-5 text-center">
          <span className="text-[#4C5E6F]" style={{ fontSize: '15px', lineHeight: 1.6 }}>
            Illustrative scenarios — not named clients. The pattern is real; the details
            here are typical, not measured.
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — Selected surfaces (illustrative)
// "Selected Work / Website Showcase" — single anatomy card, no fake screenshots
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

function SectionSurfaces() {
  return (
    <section className="bg-white py-24">
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

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Featured anatomy card */}
          <article className="rounded-2xl border border-[#E6EEF3] bg-white p-8 shadow-[0_8px_32px_rgba(8,17,31,0.07)] lg:col-span-2">
            <p
              className="uppercase tracking-[0.16em]"
              style={{ color: '#35C7D8', fontSize: '11px', fontWeight: 700 }}
            >
              Service- or treatment-page anatomy
            </p>
            <h3
              className="mt-2 text-[#08111F]"
              style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.01em' }}
            >
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
                      <div
                        className="text-white"
                        style={{ fontSize: '14px', fontWeight: 600 }}
                      >
                        {p.label}
                      </div>
                      <div
                        className="mt-0.5 text-white/55"
                        style={{ fontSize: '12.5px' }}
                      >
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
              <p
                className="uppercase tracking-[0.16em]"
                style={{ color: '#14B8A6', fontSize: '11px', fontWeight: 700 }}
              >
                Trust band
              </p>
              <h3
                className="mt-2 text-[#08111F]"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
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
              <p
                className="uppercase tracking-[0.16em]"
                style={{ color: '#21B985', fontSize: '11px', fontWeight: 700 }}
              >
                Enquiry handoff
              </p>
              <h3
                className="mt-2 text-[#08111F]"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
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
                    <span
                      className="text-white"
                      style={{ fontSize: '12.5px', fontWeight: 600 }}
                    >
                      {r.value}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
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
