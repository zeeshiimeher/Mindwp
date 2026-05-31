import { type ReactNode, useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  FileText,
  Globe,
  History,
  Inbox,
  type LucideIcon,
  MapPin,
  MessageSquare,
  Minus,
  PhoneCall,
  PhoneOff,
  Plus,
  Repeat,
  ScanSearch,
  Search,
  ShieldCheck,
  Star,
  TrendingUp,
  Workflow,
  X,
} from 'lucide-react';

// ============================================================================
// Shared in-file primitives (NOT exported — local to the V2 skeleton)
// ============================================================================

/** Radial glow + faint grid overlays shared by the three dark anchors. */
function DarkAnchorOverlays() {
  return (
    <>
      <div
        className="absolute inset-0 opacity-[0.16] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 15% 20%, #35C7D8 0%, transparent 45%), radial-gradient(ellipse at 95% 90%, #14B8A6 0%, transparent 50%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
    </>
  );
}

/** Browser chrome wrapper. The frame is the ONE border depth; inner elements
 *  use fills + dividers only (no nested bordered cards). */
function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border border-[#E6EEF3] bg-white overflow-hidden shadow-[0_8px_24px_rgba(8,17,31,0.06)]">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#EEF3F6] bg-[#F9FCFD]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#E76F6F]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#F4B740]/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#21B985]/70" />
        <div className="ml-3 flex-1 max-w-[320px] flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EFF4F7]">
          <Globe size={11} className="text-[#9DB0BE]" />
          <span className="text-[#6F8190] truncate" style={{ fontSize: '11px' }}>
            {url}
          </span>
        </div>
      </div>
      {children}
    </div>
  );
}

// ============================================================================
// SECTION 01 — Hero (DARK ANCHOR)
// "Work Comes In. Too Much Slips Away." + working-day signal surface
// ============================================================================

type HeroSignalStatus = 'missed' | 'waiting';

const HERO_SIGNALS: ReadonlyArray<{
  icon: LucideIcon;
  label: string;
  note: string;
  status: HeroSignalStatus;
}> = [
    { icon: Search, label: 'Local search', note: 'Found on page two — competitor first', status: 'waiting' },
    { icon: FileText, label: 'Service page visit', note: 'Read the page, did not enquire', status: 'waiting' },
    { icon: Inbox, label: 'Form enquiry', note: 'Saturday morning — still unread', status: 'missed' },
    { icon: PhoneOff, label: 'Missed call', note: 'Mid-morning — no callback yet', status: 'missed' },
    { icon: Clock, label: 'Consultation request', note: 'In since this morning, no reply', status: 'waiting' },
  ];

function HeroSignalSurface() {
  const missedCount = HERO_SIGNALS.filter(s => s.status === 'missed').length;
  const waitingCount = HERO_SIGNALS.filter(s => s.status === 'waiting').length;

  return (
    <div className="relative w-full">
      <div className="rounded-2xl border border-white/[0.18] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
          <div>
            <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>
              Today&rsquo;s working day
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
              Moments
            </div>
            <div className="text-white" style={{ fontSize: '34px', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
              {String(HERO_SIGNALS.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {HERO_SIGNALS.map((s, i) => {
            const Icon = s.icon;
            const isMissed = s.status === 'missed';
            return (
              <div
                key={s.label}
                className={`grid grid-cols-12 items-center gap-3 px-4 py-4 rounded-lg border ${isMissed ? 'border-[#E76F6F]/[0.22] bg-[#E76F6F]/[0.04]' : 'border-white/8 bg-white/[0.02]'
                  }`}
              >
                <div className="col-span-1">
                  <span className="text-white/30 tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="col-span-1">
                  <div
                    className={`w-9 h-9 rounded-md border flex items-center justify-center ${isMissed
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
                  <div className={`truncate mt-0.5 ${isMissed ? 'text-[#E76F6F]/65' : 'text-white/60'}`} style={{ fontSize: '13px' }}>
                    {s.note}
                  </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  {isMissed ? (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#E76F6F]/12 text-[#E76F6F] border border-[#E76F6F]/[0.28]"
                      style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E76F6F] shadow-[0_0_5px_#E76F6F]" /> MISSED
                    </span>
                  ) : (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#F4B740]/10 text-[#F4B740] border border-[#F4B740]/25"
                      style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#F4B740]" /> WAITING
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
              {missedCount} missed
            </span>
          </div>
          <div className="text-white/50 text-center" style={{ fontSize: '12px' }}>
            {waitingCount} waiting
          </div>
          <div className="flex items-center justify-end gap-1.5 text-[#35C7D8]" style={{ fontSize: '12px', fontWeight: 600 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            Where MindWP picks up
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 right-12 h-12 rounded-full bg-[#35C7D8]/15 blur-2xl pointer-events-none" />
    </div>
  );
}

function HeroV2() {
  return (
    <section className="section-hero mw2-anchor-dark relative overflow-hidden">
      <DarkAnchorOverlays />

      <div className="container relative grid grid-cols-12 gap-8 lg:gap-10 items-center">
        <div className="col-span-12 lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span className="text-white/85 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>
              Service Businesses &amp; Specialist Clinics
            </span>
          </div>

          <h1 className="text-white">
            Work Comes In.
            <br />
            <span className="text-white/45">Too Much Slips Away.</span>
          </h1>

          <p className="mt-8 text-white/70 max-w-[560px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            People find you online. They call, fill in forms, ask for quotes or consultations, check reviews, and
            compare what you do. Some of it becomes booked work or kept appointments. Too much disappears between the
            first click and the next step.
          </p>

          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Request a Website Review
              <ArrowRight size={16} />
            </a>
            <a
              href="#leak"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              See where work slips
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
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }} />
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
// SECTION 02 — Where work slips (light / mist)
// Boxless found→contacted→trusted sequence. Oversized ghost numeral + accent
// rule + heading + copy, each moment balanced across the full width by a quiet
// "what slips here" signal on the right. Editorial, not a bare text list.
// ============================================================================

const SLIP_MOMENTS: ReadonlyArray<{
  n: string;
  tone: string;
  tag: string;
  title: string;
  body: string;
  icon: LucideIcon;
  slip: string;
}> = [
    {
      n: '01',
      tone: '#0E7D8C',
      tag: 'Found, then unsure',
      title: 'The page gets the visit, but not the confidence to act.',
      body: 'They read the page, check the reviews — and still leave, because the next step isn’t clear enough to act on.',
      icon: Search,
      slip: 'Visit ends · no enquiry',
    },
    {
      n: '02',
      tone: '#9A6F12',
      tag: 'Contacted, then waiting',
      title: 'The form, call, or quote arrives — then the momentum stalls.',
      body: 'A weekend form sits unread. A mid-job call rings out. A quote goes out Friday — and Monday runs on memory.',
      icon: Inbox,
      slip: 'Reply waiting · hours later',
    },
    {
      n: '03',
      tone: '#0F7A57',
      tag: 'Finished, then forgotten',
      title: 'The work goes well, but the trust never makes it back to the site.',
      body: 'The job lands well, the appointment’s kept — and the moment to ask for a review quietly passes.',
      icon: Star,
      slip: 'No review asked',
    },
  ];

function SlipSequence() {
  return (
    <section className="section bg-page-mist" id="leak">
      <div className="container section-stack">
        {/* Header — two columns, fills the width */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#0E7D8C' }}>
              Where work slips
            </div>
            <span className="mw2-rule mt-5" style={{ color: '#0E7D8C' }} />
            <h2 className="mt-6 text-[#08111F]">
              The work is already there.{' '}
              <span className="text-[#4C5E6F]">It slips between the moments.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              More traffic is not the whole answer. Most established businesses and clinics already have the searches,
              calls, forms, quotes, and good work happening. The weak point is everything that happens between them.
            </p>
          </div>
        </div>

        {/* Three moments — full-width rows: numeral / heading / quiet slip-signal */}
        <div>
          {SLIP_MOMENTS.map((m, i) => {
            const Icon = m.icon;
            return (
              <div
                key={m.n}
                className={`grid grid-cols-12 gap-y-5 gap-x-6 lg:gap-x-10 items-center py-9 lg:py-11 ${i > 0 ? 'mw2-hairline' : ''}`}
              >
                {/* Numeral + tag */}
                <div className="col-span-12 lg:col-span-4 flex items-center gap-5">
                  <span
                    className="mw2-numeral leading-none shrink-0"
                    style={{ fontSize: 'clamp(64px, 7vw, 104px)', color: `${m.tone}33` }}
                  >
                    {m.n}
                  </span>
                  <div>
                    <span className="mw2-rule" style={{ color: m.tone }} />
                    <div
                      className="mt-3 uppercase tracking-[0.14em]"
                      style={{ color: m.tone, fontSize: '11px', fontWeight: 700 }}
                    >
                      {m.tag}
                    </div>
                  </div>
                </div>

                {/* Heading + body */}
                <div className="col-span-12 lg:col-span-5">
                  <h3
                    className="text-[#08111F]"
                    style={{ fontSize: '21px', lineHeight: 1.32, letterSpacing: '-0.012em', fontWeight: 700 }}
                  >
                    {m.title}
                  </h3>
                  <p className="mt-2.5 text-[#6F8190]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    {m.body}
                  </p>
                </div>

                {/* Quiet slip-signal — balances the row (single border depth) */}
                <div className="col-span-12 lg:col-span-3 lg:justify-self-end">
                  <div
                    className="inline-flex items-center gap-2.5 rounded-full pl-2.5 pr-4 py-2"
                    style={{ background: '#FFFFFF', border: `1px solid ${m.tone}33`, boxShadow: '0 6px 18px rgba(8,17,31,0.05)' }}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: `${m.tone}14`, color: m.tone }}
                    >
                      <Icon size={13} />
                    </span>
                    <span className="text-[#4C5E6F]" style={{ fontSize: '12px', fontWeight: 600 }}>
                      {m.slip}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <p className="text-[#4C5E6F] max-w-2xl" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
          The work is not lost at one point.{' '}
          <span className="text-[#08111F] font-medium">It slips between the handoffs.</span>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 03 — Website as control point (white)
// Silhouette: ONE object — the dominant page mockup with the "underneath the
// page" handling layer (captured / owned / next step) recessed into the SAME
// frame beneath it (folder-tab seam + inset shadow + connector ticks), so page
// and handling read as a single thing. Centered header.
// ============================================================================

function ControlPoint() {
  const underneath = [
    { icon: Inbox, label: 'Enquiry captured', note: 'Form, call, or chat — logged with context, not lost in an inbox.' },
    { icon: CheckCircle2, label: 'Response owned', note: 'A named person picks it up, with timing — not a shared inbox.' },
    { icon: Repeat, label: 'Next step set', note: 'Follow-up lands on the calendar, so nothing rides on memory.' },
  ];
  return (
    <section className="section bg-page-white">
      <div className="container">
        {/* Centered header */}
        <div className="max-w-[720px] mx-auto text-center">
          <div className="section-kicker" style={{ color: '#0E7D8C' }}>The website is the control point</div>
          <h2 className="mt-5 text-[#08111F]">
            Not just a page.{' '}
            <span className="text-[#4C5E6F]">The visible front door.</span>
          </h2>
          <p className="mt-5 text-[#4C5E6F] mx-auto max-w-[60ch]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            It sits where people decide whether to call, fill the form, or ask for a consultation. The page is what they
            see — and underneath it, on the same site, runs the handling that decides whether the enquiry survives.
          </p>
        </div>

        {/* ONE object: the page surface + the handling layer beneath it, same frame */}
        <div className="relative mt-12 lg:mt-14 max-w-[1040px] mx-auto">
          <div className="absolute -inset-x-6 top-6 -bottom-6 rounded-[44px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 28%, rgba(53,199,216,0.14), transparent 72%)', filter: 'blur(56px)' }} aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid #D8E6EE', boxShadow: '0 40px 96px rgba(8,17,31,0.12)' }}>
            {/* ───── THE PAGE ───── */}
            {/* chrome */}
            <div className="flex items-center gap-2 px-5 py-3 border-b" style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#E76F6F66' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#F4B74066' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#21B98566' }} />
              <span className="ml-3 px-3 py-1 rounded-md inline-flex items-center gap-1.5" style={{ background: '#EFF4F7', color: '#6F8190', fontSize: '11px', fontWeight: 600 }}>
                <ShieldCheck size={10} color="#21B985" /> yourcompany.co.uk/services
              </span>
            </div>
            {/* nav */}
            <div className="flex items-center justify-between px-6 py-3.5 border-b bg-white" style={{ borderColor: '#F2F5F7' }}>
              <div className="flex items-center gap-2.5">
                <span className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: '#061323' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                </span>
                <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '-0.005em' }}>Example service site</span>
              </div>
              <div className="hidden md:flex items-center gap-5">
                {['Services', 'Areas', 'Reviews', 'Contact'].map(n => (<span key={n} className="text-[#4C5E6F]" style={{ fontSize: '12px', fontWeight: 500 }}>{n}</span>))}
              </div>
              <span className="px-3.5 py-1.5 rounded-md" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 700 }}>Request a quote</span>
            </div>
            {/* hero — intent + trust */}
            <div className="relative px-6 lg:px-10 pt-8 pb-9" style={{ background: 'linear-gradient(135deg, #F8FBFC 0%, #FFFFFF 55%, #ECF9FB 100%)' }}>
              <div className="absolute -top-12 -right-16 w-64 h-64 rounded-full pointer-events-none" style={{ background: 'rgba(53,199,216,0.18)', filter: 'blur(60px)' }} aria-hidden="true" />
              <div className="relative grid md:grid-cols-12 gap-6 lg:gap-10 items-center">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4" style={{ background: '#FFFFFF', color: '#0E7D8C', fontSize: '10px', fontWeight: 700, letterSpacing: '0.14em' }}>
                    <MapPin size={10} /> NAMED LOCAL AREA · STORM RESPONSE
                  </div>
                  <div className="text-[#08111F]" style={{ fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.02em' }}>
                    Roof gone after the storm?{' '}
                    <span className="text-[#0E7D8C]">Quote request path visible.</span>
                  </div>
                  <p className="mt-3 text-[#4C5E6F] max-w-[440px]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                    Emergency repair, full reroof, insurance work. A local crew, not a call centre — with the quote path
                    in view, not buried behind a contact tab.
                  </p>
                  <div className="mt-6 flex items-center gap-3 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '13px', fontWeight: 700 }}>
                      Request a quote <ArrowRight size={13} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[#0E2740]" style={{ fontSize: '12.5px', fontWeight: 600 }}>
                      <PhoneCall size={12} color="#0E7D8C" /> Speak to the team
                    </span>
                  </div>
                  <div className="mt-6 flex items-center gap-2.5 flex-wrap">
                    {['Emergency tarp', 'Repair', 'Full reroof', 'Insurance work'].map(t => (
                      <span key={t} className="inline-flex items-center px-2.5 py-1 rounded-full" style={{ background: '#FFFFFF', color: '#4C5E6F', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="rounded-xl p-5" style={{ background: '#FFFFFF', boxShadow: '0 10px 28px rgba(8,17,31,0.08)' }}>
                    <div className="flex items-center gap-1">
                      {[0, 1, 2, 3, 4].map(i => <Star key={i} size={12} fill="#F4B740" color="#F4B740" />)}
                      <span className="ml-auto text-[#6F8190]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Recent verified reviews</span>
                    </div>
                    <div className="mt-2.5 text-[#4C5E6F]" style={{ fontSize: '12px', lineHeight: 1.55 }}>
                      A review snippet sits right beside the CTA — where the visitor is deciding whether to act.
                    </div>
                    <div className="mt-3.5 pt-3.5 border-t flex items-center justify-between" style={{ borderColor: '#EEF3F6' }}>
                      <span className="inline-flex items-center gap-1.5 text-[#0F7A57]" style={{ fontSize: '11px', fontWeight: 700 }}><CheckCircle2 size={12} /> Recent</span>
                      <span className="inline-flex items-center gap-1.5 text-[#0F7A57]" style={{ fontSize: '11px', fontWeight: 700 }}><span className="w-1.5 h-1.5 rounded-full bg-[#21B985]" /> Response path active</span>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-2 text-[#9CA3B0]" style={{ fontSize: '11px', fontWeight: 600 }}>
                    <MapPin size={11} color="#0E7D8C" /> Local area covered
                  </div>
                </div>
              </div>
            </div>

            {/* ───── UNDERNEATH — recessed into the SAME frame, beneath the page ───── */}
            <div className="relative px-6 lg:px-10 pt-9 pb-8 border-t" style={{ borderColor: '#CDEAF0', background: 'linear-gradient(180deg, #E7F6F9 0%, #F2FAFC 100%)', boxShadow: 'inset 0 11px 22px -12px rgba(8,17,31,0.20)' }}>
              {/* folder-tab label straddling the seam */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px inline-flex items-center gap-2 px-4 py-1.5 rounded-b-xl" style={{ background: '#0E7D8C', boxShadow: '0 6px 14px rgba(14,125,140,0.30)' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#7FE3EE', boxShadow: '0 0 6px #7FE3EE' }} />
                <span className="uppercase tracking-[0.16em] text-white" style={{ fontSize: '9.5px', fontWeight: 700 }}>Underneath — the same site</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 lg:gap-5">
                {underneath.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="relative">
                      {/* connector tick rising to the page seam above */}
                      <span className="hidden sm:block absolute left-7 -top-9 w-px h-9" style={{ background: 'linear-gradient(to bottom, rgba(53,199,216,0), #35C7D8)' }} aria-hidden="true" />
                      <div className="relative rounded-xl bg-white p-5" style={{ boxShadow: '0 8px 22px rgba(8,17,31,0.07)' }}>
                        <div className="flex items-center justify-between mb-2.5">
                          <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#E6F6F4', color: '#0E7D8C' }}><Icon size={16} /></span>
                          <span className="mw2-numeral text-[#CFE3E8]" style={{ fontSize: '22px' }}>0{i + 1}</span>
                        </div>
                        <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>{s.label}</div>
                        <p className="mt-1 text-[#6F8190]" style={{ fontSize: '12px', lineHeight: 1.5 }}>{s.note}</p>
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
// SECTION 04 — Same business, two websites (mist)
// Flagship credibility moment. Two detailed, premium page mockups side by side:
// a shallow site that dead-ends at the form vs a connected system that carries
// the enquiry. Inner elements are fills (one border depth per frame).
// ============================================================================

function ShallowSite() {
  return (
    <div className="relative flex flex-col h-full">
      <div className="relative rounded-2xl bg-white overflow-hidden flex-1" style={{ border: '1px solid #E6EEF3', boxShadow: '0 14px 36px rgba(8,17,31,0.06)' }}>
        {/* chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}>
          <span className="w-2 h-2 rounded-full bg-[#E6EEF3]" />
          <span className="w-2 h-2 rounded-full bg-[#E6EEF3]" />
          <span className="w-2 h-2 rounded-full bg-[#E6EEF3]" />
          <span className="ml-2 px-2.5 py-0.5 rounded-md" style={{ background: '#EFF2F4', color: '#9CA3B0', fontSize: '10.5px', fontWeight: 600 }}>example service site</span>
        </div>
        {/* nav */}
        <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: '#F2F5F7' }}>
          <span className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>Example service site</span>
          <div className="hidden sm:flex items-center gap-4">
            {['Home', 'Services', 'About', 'Contact'].map(n => (
              <span key={n} className="text-[#6F8190]" style={{ fontSize: '11px', fontWeight: 500 }}>{n}</span>
            ))}
          </div>
        </div>
        {/* hero */}
        <div className="px-6 lg:px-8 pt-7 pb-5">
          <div className="text-[#08111F]" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.018em' }}>
            Plumbing services in your local area.
          </div>
          <p className="mt-2 text-[#6F8190] max-w-[380px]" style={{ fontSize: '13px', lineHeight: 1.55 }}>
            Reliable plumbing for homes and businesses. Get in touch for a quote.
          </p>
        </div>
        {/* service tiles — fills */}
        <div className="px-6 lg:px-8 pb-6 grid grid-cols-3 gap-2.5">
          {['Repairs', 'Boilers', 'Heating'].map(s => (
            <div key={s} className="rounded-lg px-3 py-4 text-center" style={{ background: '#F9FBFC' }}>
              <div className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>{s}</div>
              <div className="mt-1 text-[#9CA3B0]" style={{ fontSize: '10.5px' }}>Quality service</div>
            </div>
          ))}
        </div>
        {/* about strip */}
        <div className="px-6 lg:px-8 py-5 border-t" style={{ borderColor: '#EEF3F6' }}>
          <div className="text-[#08111F] mb-2" style={{ fontSize: '13px', fontWeight: 700 }}>About us</div>
          <p className="text-[#6F8190]" style={{ fontSize: '11.5px', lineHeight: 1.55 }}>
            Family-run plumbers serving the local area for over twenty years. Fully qualified team and competitive rates.
          </p>
        </div>
        {/* generic CTA band */}
        <div className="px-6 lg:px-8 py-5 border-t text-center" style={{ borderColor: '#EEF3F6', background: '#FCFDFE' }}>
          <div className="text-[#08111F] mb-3" style={{ fontSize: '14px', fontWeight: 700 }}>Get in touch today</div>
          <div className="inline-block px-4 py-2 rounded-md" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 700 }}>Get a quote</div>
        </div>
        {/* footer */}
        <div className="px-6 lg:px-8 py-4 border-t" style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}>
          <div className="grid grid-cols-3 gap-2">
            {[['Phone', 'Contact route'], ['Email', 'Generic inbox'], ['Hours', 'Mon–Fri 9–5']].map(([k, v]) => (
              <div key={k}>
                <div className="text-[#9CA3B0] uppercase tracking-[0.12em]" style={{ fontSize: '8.5px', fontWeight: 700 }}>{k}</div>
                <div className="text-[#4C5E6F]" style={{ fontSize: '10.5px', fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* below-frame — where it stops */}
      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        {['Enquiry lands in an inbox', 'No owner, no timing', 'Follow-up nobody does'].map(s => (
          <span key={s} className="inline-flex items-center gap-1.5 text-[#9CA3B0]" style={{ fontSize: '11.5px', fontWeight: 600 }}>
            <X size={12} color="#C2554E" /> {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ConnectedSite() {
  return (
    <div className="relative flex flex-col h-full">
      {/* premium glow */}
      <div className="absolute -inset-3 rounded-[28px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 18%, rgba(20,184,166,0.13), transparent 70%)', filter: 'blur(36px)' }} aria-hidden="true" />
      <div className="relative rounded-2xl bg-white overflow-hidden flex-1" style={{ border: '1px solid #C7EBEF', boxShadow: '0 22px 52px rgba(20,184,166,0.16)' }}>
        {/* chrome */}
        <div className="flex items-center gap-2 px-4 py-2.5 border-b" style={{ borderColor: '#EEF3F6', background: '#F9FBFC' }}>
          <span className="w-2 h-2 rounded-full" style={{ background: '#E76F6F66' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#F4B74066' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#21B98566' }} />
          <span className="ml-2 px-2.5 py-0.5 rounded-md inline-flex items-center gap-1.5" style={{ background: '#ECF9FB', color: '#0E7D8C', fontSize: '10.5px', fontWeight: 600 }}>
            <ShieldCheck size={9} color="#21B985" /> example service site
          </span>
        </div>
        {/* nav */}
        <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: '#F2F5F7' }}>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#061323' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
            </span>
            <span className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>Example service site</span>
          </div>
          <span className="px-2.5 py-1 rounded-md inline-flex items-center gap-1.5" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '10.5px', fontWeight: 700 }}>
            <PhoneCall size={9} /> Phone route visible
          </span>
        </div>
        {/* hero */}
        <div className="relative px-6 lg:px-8 pt-7 pb-6" style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #ECF9FB 100%)' }}>
          <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full pointer-events-none" style={{ background: 'rgba(53,199,216,0.20)', filter: 'blur(48px)' }} aria-hidden="true" />
          <div className="relative">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-3" style={{ background: '#FFFFFF', color: '#0E7D8C', fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.14em' }}>
              <MapPin size={9} /> NAMED LOCAL AREA · RESPONSE PATH ACTIVE
            </div>
            <div className="text-[#08111F]" style={{ fontSize: '22px', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.018em' }}>
              Emergency plumber in your local area —{' '}
              <span className="text-[#0E7D8C]">availability route visible.</span>
            </div>
            <p className="mt-2 text-[#4C5E6F] max-w-[420px]" style={{ fontSize: '13px', lineHeight: 1.55 }}>
              Burst pipes, no hot water, boiler down. A local engineer on the doorstep, not a call centre.
            </p>
            <div className="mt-4 flex items-center gap-2.5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '11.5px', fontWeight: 700 }}>
                Request a quote <ArrowRight size={11} />
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md" style={{ background: '#FFFFFF', color: '#0E2740', fontSize: '11.5px', fontWeight: 700, boxShadow: '0 3px 10px rgba(20,184,166,0.10)' }}>
                <PhoneCall size={11} color="#0E7D8C" /> Direct line
              </span>
            </div>
          </div>
        </div>
        {/* service tiles with proof — fills */}
        <div className="px-6 lg:px-8 py-5 grid grid-cols-3 gap-2.5">
          {[{ name: 'Boiler repair', meta: 'Quote path' }, { name: 'Burst pipe', meta: 'Urgent route' }, { name: 'No hot water', meta: 'Quote path' }].map(s => (
            <div key={s.name} className="rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 3px 10px rgba(20,184,166,0.06)' }}>
              <div className="text-[#08111F]" style={{ fontSize: '12px', fontWeight: 700 }}>{s.name}</div>
              <div className="mt-1 flex items-center gap-1">
                <Star size={9} color="#F4B740" fill="#F4B740" />
                <span className="text-[#6F8190]" style={{ fontSize: '9.5px', fontWeight: 600 }}>{s.meta}</span>
              </div>
            </div>
          ))}
        </div>
        {/* trust band */}
        <div className="px-6 lg:px-8 py-3 border-y flex items-center gap-2.5 flex-wrap" style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}>
          <span className="inline-flex items-center gap-1 text-[#0F7A57]" style={{ fontSize: '10.5px', fontWeight: 700 }}><CheckCircle2 size={10} /> Registered</span>
          <span className="text-[#D0EFF4]">·</span>
          <span className="text-[#0E2740]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Recent verified reviews</span>
          <span className="text-[#D0EFF4]">·</span>
          <span className="text-[#0E2740]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Insured</span>
        </div>
        {/* review */}
        <div className="px-6 lg:px-8 py-4">
          <div className="flex items-center gap-1 mb-1.5">
            {[0, 1, 2, 3, 4].map(i => <Star key={i} size={10} fill="#F4B740" color="#F4B740" />)}
            <span className="ml-1 text-[#6F8190]" style={{ fontSize: '11px', fontWeight: 600 }}>Recent verified review</span>
          </div>
          <div className="text-[#4C5E6F]" style={{ fontSize: '12px', lineHeight: 1.5 }}>
            Review snippet placed beside the CTA — where the visitor is deciding whether to act.
          </div>
        </div>
        {/* footer */}
        <div className="px-6 lg:px-8 py-3 border-t flex items-center justify-between" style={{ borderColor: '#EEF3F6' }}>
          <span className="text-[#6F8190]" style={{ fontSize: '10px', fontWeight: 600 }}>© Example service site · local area covered</span>
          <span className="inline-flex items-center gap-1 text-[#0F7A57]" style={{ fontSize: '10px', fontWeight: 700 }}>
            <span className="w-1 h-1 rounded-full bg-[#21B985]" /> Response path active
          </span>
        </div>
      </div>
      {/* below-frame — carries the work */}
      <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
        {['Enquiry captured', 'Response owned', 'Follow-up scheduled'].map(s => (
          <span key={s} className="inline-flex items-center gap-1.5 text-[#0E2740]" style={{ fontSize: '11.5px', fontWeight: 600 }}>
            <CheckCircle2 size={12} color="#21B985" /> {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function TwoWebsites() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#0E7D8C' }}>Same business, two websites</div>
            <span className="mw2-rule mt-5" style={{ color: '#0E7D8C' }} />
            <h2 className="mt-6 text-[#08111F]">
              Same business.{' '}
              <span className="text-[#4C5E6F]">Two different websites.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              On the left, what most local websites are — clean, generic, and quiet once the visitor leaves. On the
              right, the same trade with a website built to carry the enquiry forward.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          <div className="relative flex flex-col">
            <div className="mb-3 inline-flex items-baseline gap-2">
              <span className="uppercase tracking-[0.14em] text-[#6F8190]" style={{ fontSize: '11px', fontWeight: 700 }}>Shallow site</span>
              <span className="text-[#9CA3B0]" style={{ fontSize: '12.5px' }}>— ends at the form</span>
            </div>
            <ShallowSite />
          </div>
          <div className="relative flex flex-col">
            <div className="mb-3 inline-flex items-baseline gap-2">
              <span className="uppercase tracking-[0.14em] text-[#0E7D8C]" style={{ fontSize: '11px', fontWeight: 700 }}>Connected system</span>
              <span className="text-[#0E7D8C]" style={{ fontSize: '12.5px' }}>— carries the work</span>
            </div>
            <ConnectedSite />
          </div>
        </div>

        {/* closing contrast line */}
        <div
          className="rounded-2xl px-6 lg:px-8 py-5 flex flex-wrap items-center justify-between gap-3"
          style={{ background: 'linear-gradient(to right, #FFFFFF, #ECF9FB)', border: '1px solid #D0EFF4' }}
        >
          <span className="text-[#08111F] max-w-[640px]" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.55 }}>
            One ends at the contact form.{' '}
            <span className="text-[#4C5E6F]">The other carries the work the whole way through.</span>
          </span>
          <a href="#cta" className="inline-flex items-center gap-2 text-[#0E2740] hover:text-[#08111F]" style={{ fontSize: '13px', fontWeight: 700, borderBottom: '1px solid #0E2740', paddingBottom: '2px' }}>
            See where yours sits <ArrowRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 05 — Local visibility (white)
// Technique: ONE unified local-profile / knowledge-panel artifact. Finding (the
// search/map header) and verifying (identity + the three holding factors +
// "one story" footer) live on the SAME connected surface — a single focal
// object, not two zones bridged by an arrow.
// ============================================================================

function LocalVisibility() {
  return (
    <section className="section bg-page-white">
      <div className="container">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 mb-12 lg:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#0E7D8C' }}>Local SEO Authority</div>
            <span className="mw2-rule mt-5" style={{ color: '#0E7D8C' }} />
            <h2 className="mt-6 text-[#08111F]">
              Local visibility is not a ranking.{' '}
              <span className="text-[#4C5E6F]">It is the same trustworthy details, everywhere.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Nearby customers and patients find you, then verify you, before they enquire. It holds when the listing,
              the reviews, and the service-area details all line up — and stay lined up.
            </p>
          </div>
        </div>

        {/* ONE local profile: found and verified on the same surface */}
        <div className="relative max-w-[920px] mx-auto">
          <div className="absolute -inset-x-8 -top-4 -bottom-4 rounded-[44px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 22%, rgba(20,184,166,0.12), transparent 72%)', filter: 'blur(56px)' }} aria-hidden="true" />
          <div className="relative rounded-2xl bg-white overflow-hidden" style={{ border: '1px solid #D8E6EE', boxShadow: '0 36px 90px rgba(8,17,31,0.12)' }}>
            {/* FOUND — the local search / map moment */}
            <div className="relative h-[164px] overflow-hidden" style={{ background: 'linear-gradient(160deg, #EAF7F8 0%, #F4FBFC 100%)' }}>
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(#D6EAEC 1px, transparent 1px), linear-gradient(90deg, #D6EAEC 1px, transparent 1px)', backgroundSize: '34px 34px' }} aria-hidden="true" />
              <div className="absolute left-0 right-0 top-[64%] h-[6px]" style={{ background: '#FFFFFF', opacity: 0.7 }} aria-hidden="true" />
              <div className="absolute top-0 bottom-0 left-[26%] w-[6px]" style={{ background: '#FFFFFF', opacity: 0.7 }} aria-hidden="true" />
              <div className="absolute top-[-10%] bottom-[-10%] right-[24%] w-[5px] rotate-[14deg]" style={{ background: '#FFFFFF', opacity: 0.55 }} aria-hidden="true" />
              {[['16%', '32%'], ['74%', '22%'], ['62%', '80%'], ['36%', '84%']].map(([l, t], i) => (
                <span key={i} className="absolute" style={{ left: l, top: t }} aria-hidden="true"><MapPin size={14} fill="#C9E0E3" color="#A9C6CB" /></span>
              ))}
              {/* the business pin (highlighted) */}
              <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="px-2.5 py-1 rounded-md mb-1.5 whitespace-nowrap" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '10px', fontWeight: 700, boxShadow: '0 6px 14px rgba(8,17,31,0.25)' }}>Your Business · Open now</div>
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center" style={{ boxShadow: '0 0 0 4px rgba(20,184,166,0.18), 0 8px 20px rgba(20,184,166,0.30)', color: '#14B8A6' }}><MapPin size={20} fill="#14B8A6" color="#FFFFFF" /></span>
              </div>
              {/* search chip */}
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full px-3 py-2" style={{ background: '#FFFFFF', boxShadow: '0 6px 18px rgba(8,17,31,0.10)' }}>
                <Search size={12} color="#6F8190" />
                <span className="text-[#08111F]" style={{ fontSize: '11.5px', fontWeight: 600 }}>emergency plumber near me</span>
                <span className="ml-1 inline-flex items-center gap-1 text-[#0E7D8C]" style={{ fontSize: '9.5px', fontWeight: 700 }}><span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" /> Local</span>
              </div>
            </div>

            {/* IDENTITY — who they found + the first trust read */}
            <div className="flex items-center gap-4 px-6 lg:px-8 py-5 border-b" style={{ borderColor: '#EEF3F6' }}>
              <span className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #14B8A6, #0E7D8C)', color: '#FFFFFF', boxShadow: '0 8px 20px rgba(20,184,166,0.30)' }}><MapPin size={22} /></span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#08111F]" style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}>Your Business</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: '#E6F8F0', color: '#0F7A57', fontSize: '9px', fontWeight: 700 }}><CheckCircle2 size={10} /> VERIFIED</span>
                </div>
                <div className="text-[#6F8190]" style={{ fontSize: '12.5px' }}>Emergency plumber · Service-area business</div>
              </div>
              <div className="hidden sm:flex flex-col items-end shrink-0">
                <div className="flex items-center gap-0.5">{[0, 1, 2, 3, 4].map(i => <Star key={i} size={12} fill="#F4B740" color="#F4B740" />)}</div>
                <div className="text-[#9CA3B0] mt-0.5" style={{ fontSize: '10px', fontWeight: 600 }}>recent verified reviews</div>
              </div>
            </div>

            {/* HELD IN PLACE — three verification layers, same card */}
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: '#EEF3F6' }}>
              <div className="p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#14B8A614', color: '#0E7D8C' }}><MapPin size={15} /></span>
                  <span className="uppercase tracking-[0.12em] text-[#9CA3B0]" style={{ fontSize: '9px', fontWeight: 700 }}>Service area</span>
                </div>
                <div className="text-[#08111F] mb-2.5" style={{ fontSize: '14px', fontWeight: 700 }}>Coverage matched to the work.</div>
                <div className="flex flex-wrap gap-1.5">
                  {['Area 1', 'Area 2', 'Area 3', 'Area 4', '+ more'].map(a => (
                    <span key={a} className="inline-flex items-center px-2 py-0.5 rounded-md" style={{ background: '#F0FAFB', color: '#0E7D8C', fontSize: '10.5px', fontWeight: 700 }}>{a}</span>
                  ))}
                </div>
              </div>
              <div className="p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#21B98514', color: '#0F7A57' }}><ShieldCheck size={15} /></span>
                  <span className="uppercase tracking-[0.12em] text-[#9CA3B0]" style={{ fontSize: '9px', fontWeight: 700 }}>The details</span>
                </div>
                <div className="text-[#08111F] mb-2.5" style={{ fontSize: '14px', fontWeight: 700 }}>The same story everywhere.</div>
                <div className="space-y-1.5">
                  {['Name', 'Hours', 'Phone', 'Service lines'].map(d => (
                    <div key={d} className="flex items-center gap-1.5 text-[#4C5E6F]" style={{ fontSize: '11.5px', fontWeight: 600 }}><CheckCircle2 size={12} color="#21B985" /> {d}</div>
                  ))}
                </div>
              </div>
              <div className="p-6 lg:p-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: '#F4B74014', color: '#9A6F12' }}><Star size={15} /></span>
                  <span className="uppercase tracking-[0.12em] text-[#9CA3B0]" style={{ fontSize: '9px', fontWeight: 700 }}>Reviews</span>
                </div>
                <div className="text-[#08111F] mb-2.5" style={{ fontSize: '14px', fontWeight: 700 }}>Recent, asked for, owned.</div>
                <div className="space-y-1.5">
                  {['Google Business Profile', 'Trustpilot', 'Sector-specific'].map(p => (
                    <div key={p} className="flex items-center gap-1.5 text-[#4C5E6F]" style={{ fontSize: '11.5px', fontWeight: 600 }}><span className="w-1.5 h-1.5 rounded-full" style={{ background: '#9A6F12' }} /> {p}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* ONE STORY — kept current across every source */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-6 lg:px-8 py-4 border-t" style={{ borderColor: '#D0EFF4', background: 'linear-gradient(to right, #F4FBFC, #FFFFFF)' }}>
              <div className="flex items-center gap-2 flex-wrap">
                {['Website', 'Google profile', 'Directories'].map(s => (
                  <span key={s} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white" style={{ color: '#0E7D8C', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 8px rgba(8,17,31,0.05)' }}><CheckCircle2 size={11} /> {s}</span>
                ))}
              </div>
              <span className="text-[#4C5E6F]" style={{ fontSize: '12.5px', fontWeight: 600 }}>One set of details — and they stay lined up.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — Different ways in (mist)
// Four contact routes shown at once as four colour-coded handling LANES, each
// its own scenario (form=teal record, missed-call=red handoff, quote=green
// status, consultation=purple intake), all converging into one "owned handling"
// hub on the right. No tabs — the variety is visible at a glance.
// ============================================================================

type Lane = {
  id: 'form' | 'call' | 'quote' | 'consult';
  color: string;
  tint: string;
  icon: LucideIcon;
  qualifier: string;
  label: string;
  outcome: string;
};

const HANDLING_LANES: ReadonlyArray<Lane> = [
  { id: 'form', color: '#0E7D8C', tint: '#F3FAFB', icon: Inbox, qualifier: 'From the website', label: 'Form enquiry', outcome: 'Owned' },
  { id: 'call', color: '#C2554E', tint: '#FDF4F3', icon: PhoneCall, qualifier: 'Inbound calls', label: 'Phone & missed calls', outcome: 'Called back' },
  { id: 'quote', color: '#0F7A57', tint: '#F1FAF5', icon: History, qualifier: 'After the quote', label: 'Quote follow-up', outcome: 'Resolved' },
  { id: 'consult', color: '#6B4FB8', tint: '#F7F4FD', icon: Calendar, qualifier: 'Consultation request', label: 'Consultation request', outcome: 'Routed' },
];

// Each lane foregrounds a different object: a captured record, a missed-call
// handoff, a quote status, a consultation intake.
function LaneArtifact({ id }: { id: Lane['id'] }) {
  if (id === 'form') {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        {['Source page', 'Service', 'Named area'].map(f => (
          <span key={f} className="inline-flex items-center px-2 py-1 rounded-md bg-white" style={{ color: '#0E2740', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}>{f}</span>
        ))}
        <span className="inline-flex items-center gap-1 text-[#0E7D8C]" style={{ fontSize: '11px', fontWeight: 700 }}><CheckCircle2 size={12} /> captured with context</span>
      </div>
    );
  }
  if (id === 'call') {
    const nodes = [
      { icon: PhoneOff, c: '#C2554E', bg: '#FBE9E8', t: 'Missed' },
      { icon: MessageSquare, c: '#0E7D8C', bg: '#E3F6F4', t: 'Text back' },
      { icon: PhoneCall, c: '#0F7A57', bg: '#E6F8F0', t: 'Callback' },
    ];
    return (
      <div className="flex items-center gap-1.5 flex-wrap">
        {nodes.map((n, i) => {
          const Icon = n.icon;
          return (
            <span key={i} className="inline-flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full pl-1.5 pr-2.5 py-1 bg-white" style={{ boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}>
                <span className="w-5 h-5 rounded-full flex items-center justify-center" style={{ background: n.bg, color: n.c }}><Icon size={11} /></span>
                <span className="text-[#0E2740]" style={{ fontSize: '10.5px', fontWeight: 700 }}>{n.t}</span>
              </span>
              {i < 2 && <ArrowRight size={12} color="#C2554E" className="opacity-50" />}
            </span>
          );
        })}
      </div>
    );
  }
  if (id === 'quote') {
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-white" style={{ color: '#0E2740', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}><FileText size={11} color="#0F7A57" /> Quote sent · reminder set</span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: '#FFF6E6', color: '#9A6F12', fontSize: '10.5px', fontWeight: 700 }}><span className="w-1.5 h-1.5 rounded-full bg-[#F4B740]" /> Status: Awaiting reply</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {['Interest', 'Preferred time'].map(f => (
        <span key={f} className="inline-flex items-center px-2 py-1 rounded-md bg-white" style={{ color: '#0E2740', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}>{f}</span>
      ))}
      <span className="inline-flex items-center gap-1 text-[#6B4FB8]" style={{ fontSize: '11px', fontWeight: 700 }}><MessageSquare size={12} /> intake confirmed</span>
    </div>
  );
}

function HandlingPaths() {
  return (
    <section className="section bg-page-mist overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 mb-12">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#9A6F12' }}>Lead Response &amp; Handling</div>
            <span className="mw2-rule mt-5" style={{ color: '#F4B740' }} />
            <h2 className="mt-6 text-[#08111F]">
              Different ways in.{' '}
              <span className="text-[#4C5E6F]">The same handling around the website.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Most enquiries don&rsquo;t fail on the website. They fail in the hours and days after — when nobody is sure
              who picks them up, or when Monday depends on memory.
            </p>
          </div>
        </div>

        {/* Four routes in, converging into one owned-handling hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-stretch">
          {/* the four lanes */}
          <div className="lg:col-span-8 space-y-3">
            {HANDLING_LANES.map(lane => {
              const Icon = lane.icon;
              return (
                <div key={lane.id} className="relative rounded-xl overflow-hidden" style={{ background: lane.tint, boxShadow: '0 6px 18px rgba(8,17,31,0.05)' }}>
                  <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: lane.color }} aria-hidden="true" />
                  <div className="grid grid-cols-12 items-center gap-x-4 gap-y-3 pl-5 pr-4 py-4">
                    {/* route identity */}
                    <div className="col-span-12 lg:col-span-4 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: '#FFFFFF', color: lane.color, boxShadow: `0 3px 10px ${lane.color}1F` }}><Icon size={17} /></span>
                      <div className="min-w-0">
                        <div className="uppercase tracking-[0.12em]" style={{ color: lane.color, fontSize: '9px', fontWeight: 700 }}>{lane.qualifier}</div>
                        <div className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.25 }}>{lane.label}</div>
                      </div>
                    </div>
                    {/* its own artifact */}
                    <div className="col-span-12 lg:col-span-6 min-w-0">
                      <LaneArtifact id={lane.id} />
                    </div>
                    {/* outcome → toward the hub */}
                    <div className="col-span-12 lg:col-span-2 flex items-center justify-start lg:justify-end gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: `${lane.color}14`, color: lane.color, fontSize: '10px', fontWeight: 700 }}><CheckCircle2 size={11} /> {lane.outcome}</span>
                      <ArrowRight size={14} color={lane.color} className="hidden lg:block shrink-0" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* the owned-handling hub — every route lands here */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl h-full p-7 overflow-hidden bg-white flex flex-col" style={{ border: '1px solid #C7EBEF', boxShadow: '0 24px 60px rgba(20,184,166,0.14)' }}>
              <span className="absolute left-0 right-0 top-0 h-1.5" style={{ background: 'linear-gradient(to right, #35C7D8, #14B8A6)' }} aria-hidden="true" />
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(20,184,166,0.16), transparent 65%)', filter: 'blur(40px)' }} aria-hidden="true" />
              <div className="relative">
                <div className="uppercase tracking-[0.16em] text-[#0E7D8C]" style={{ fontSize: '10px', fontWeight: 700 }}>Where every route lands</div>
                <h3 className="text-[#08111F] mt-2.5" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>Owned handling — not a shared inbox.</h3>
                <p className="text-[#4C5E6F] mt-3" style={{ fontSize: '13px', lineHeight: 1.6 }}>Whichever way it arrives, the same thing happens to it.</p>
              </div>
              <div className="relative mt-5 space-y-2.5">
                {[
                  { icon: Inbox, t: 'Captured with context', n: 'not a bare email in a pile' },
                  { icon: CheckCircle2, t: 'Picked up by a named person', n: 'someone owns it' },
                  { icon: Repeat, t: 'Followed up on a cadence', n: 'not left to memory' },
                ].map(r => {
                  const RIcon = r.icon;
                  return (
                    <div key={r.t} className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5" style={{ background: '#F4FBFC' }}>
                      <span className="w-7 h-7 rounded-md flex items-center justify-center shrink-0" style={{ background: '#FFFFFF', color: '#0E7D8C', boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}><RIcon size={13} /></span>
                      <div>
                        <div className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>{r.t}</div>
                        <div className="text-[#6F8190]" style={{ fontSize: '11px' }}>{r.n}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="relative mt-auto pt-5 text-[#6F8190]" style={{ fontSize: '11.5px', lineHeight: 1.5 }}>
                Four ways in, one place they land — so nothing falls into an inbox no one watches.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 07 — Five Systems (DARK ANCHOR)
// Smart Website Systems as the flagship hub at the centre, the four connected
// protections around it, joined by a connecting graphic. Each is a polished
// dark surface with its signal colour, icon, role label, and one-line note.
// Five systems only — never a sixth, and the cross-system recovery lens is never a node.
// ============================================================================

type SystemNode = { icon: LucideIcon; name: string; label: string; note: string; color: string };

const FLAGSHIP_SYSTEM: SystemNode = {
  icon: Globe,
  name: 'Smart Website Systems',
  label: 'Where the decision happens',
  note: 'Service, treatment, and procedure pages that explain the work clearly, build trust, and lead to one clear next step.',
  color: '#35C7D8',
};

const ORBITAL_SYSTEMS: ReadonlyArray<SystemNode> = [
  { icon: MapPin, name: 'Local SEO Authority', label: 'People find and verify you', note: 'Nearby customers and patients find you and trust what they see before they pick up the phone.', color: '#14B8A6' },
  { icon: PhoneCall, name: 'Lead Response & Handling', label: 'The enquiry lands somewhere', note: 'Calls, forms, and messages reach the right person fast — and don’t disappear into voicemail after hours.', color: '#F4B740' },
  { icon: Workflow, name: 'Follow-Up & CRM', label: 'Someone owns what happens next', note: 'Quotes, reminders, and consultation requests have a named person behind them and a clear next step.', color: '#21B985' },
  { icon: Star, name: 'Reputation & Review', label: 'Good work becomes visible trust', note: 'Reviews and finished work return to the page where the next visitor decides — not buried in a folder.', color: '#9B7DE0' },
];

function FlagshipCard() {
  const Icon = FLAGSHIP_SYSTEM.icon;
  const color = FLAGSHIP_SYSTEM.color;
  return (
    <div
      className="relative rounded-3xl p-7 lg:p-8 overflow-hidden h-full flex flex-col"
      style={{
        border: `1px solid ${color}55`,
        background: 'linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(53,199,216,0.10) 60%, rgba(255,255,255,0.04) 100%)',
        boxShadow: `0 32px 80px rgba(0,0,0,0.40), 0 0 60px ${color}22`,
      }}
    >
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${color}40 0%, transparent 60%)`, filter: 'blur(40px)' }} aria-hidden="true" />
      <div className="relative flex items-start justify-between mb-6">
        <span className="inline-flex items-center gap-2" style={{ color, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.18em' }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 10px ${color}` }} /> FLAGSHIP
        </span>
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${color}33, ${color}12)`, color }}>
          <Icon size={26} />
        </div>
      </div>
      <div className="relative text-white" style={{ fontSize: '25px', fontWeight: 700, letterSpacing: '-0.018em', lineHeight: 1.15 }}>{FLAGSHIP_SYSTEM.name}</div>
      <div className="relative mt-2" style={{ color, fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em' }}>{FLAGSHIP_SYSTEM.label}</div>
      <p className="relative mt-4 text-white/70 flex-1" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>{FLAGSHIP_SYSTEM.note}</p>
      <div className="relative mt-6 pt-5 border-t" style={{ borderColor: 'rgba(255,255,255,0.10)' }}>
        <div className="text-white/60" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>
          The other four sit <span className="text-white">around this one</span> — working together, not sold separately.
        </div>
      </div>
    </div>
  );
}

function OrbitalCard({ system }: { system: SystemNode }) {
  const Icon = system.icon;
  const color = system.color;
  return (
    <div className="relative rounded-2xl p-6 h-full" style={{ border: '1px solid rgba(255,255,255,0.10)', background: `linear-gradient(180deg, ${color}10, rgba(255,255,255,0.03))` }}>
      <div className="flex items-start justify-between mb-4">
        <span className="w-2 h-2 rounded-full mt-2" style={{ background: color, boxShadow: `0 0 8px ${color}` }} aria-hidden="true" />
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${color}1F`, color }}>
          <Icon size={18} />
        </div>
      </div>
      <div className="text-white" style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.01em' }}>{system.name}</div>
      <div className="mt-1.5" style={{ color, fontSize: '12px', fontWeight: 600, letterSpacing: '0.02em' }}>{system.label}</div>
      <p className="mt-2.5 text-white/65" style={{ fontSize: '13px', lineHeight: 1.55 }}>{system.note}</p>
    </div>
  );
}

function FiveSystems() {
  return (
    <section className="section mw2-anchor-dark relative overflow-hidden">
      <DarkAnchorOverlays />

      <div className="container relative">
        {/* Header — heading left, framing line right (v1 SectionFiveSystems shape) */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10 mb-12 lg:mb-14">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker text-[#35C7D8]">Five connected systems</div>
            <h2 className="mt-5 text-white">
              Smart Website Systems at the centre.{' '}
              <span className="text-white/55">Four more systems built around it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-white/65" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
              Not five services to buy separately. Five connected systems that work as one — held together by the website
              where the buyer already decides.
            </p>
          </div>
        </div>

        {/* Asymmetric architecture: flagship on the left, four protections 2×2 on the right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div className="lg:col-span-5">
            <FlagshipCard />
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
            {ORBITAL_SYSTEMS.map(s => (
              <OrbitalCard key={s.name} system={s} />
            ))}
          </div>
        </div>

        {/* Closing row */}
        <div className="mt-12 lg:mt-14 flex items-center justify-between flex-wrap gap-4">
          <div className="text-white/55 max-w-[560px]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
            Most businesses and clinics already have parts of this. The work is making them run as one.
          </div>
          <a href="#cta" className="inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-white pb-1" style={{ fontSize: '13.5px', fontWeight: 600 }}>
            Request a Website Review <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 08 — Not a launch event (light / white)
// Horizontal 01→04 time progression, BOXLESS, on a light background. Ascending
// "gets sharper with use" sequence with a connecting baseline. Differs from
// §6 (asymmetric rail) above and §9 (two surfaces) below.
// ============================================================================

const COMPOUND_STEPS: ReadonlyArray<{
  n: string;
  when: string;
  title: string;
  body: string;
  chip: string;
  color: string;
}> = [
    { n: '01', when: 'In the first weeks', title: 'The bleeding stops.', body: 'Calls don’t vanish into voicemail. Saturday forms don’t sit unread. Quotes have a name behind them before the page closes.', chip: 'Nothing waits to be remembered', color: '#35C7D8' },
    { n: '02', when: 'By the third month', title: 'Follow-up finds a rhythm.', body: 'Quotes get a polite chase without anyone remembering. Consultation requests reach the right person — not a shared inbox.', chip: 'Chased on a real cadence', color: '#14B8A6' },
    { n: '03', when: 'By the sixth month', title: 'Good work shows on the page.', body: 'Recent reviews and finished jobs land next to the services they describe. Listing, website, and directories tell one story.', chip: 'Proof where it’s decided', color: '#0E7D8C' },
    { n: '04', when: 'After the first year', title: 'It gets sharper, not replaced.', body: 'Real questions and patterns feed back into the pages and the handling. You keep what you have — working better.', chip: 'No redesign needed', color: '#21B985' },
  ];

function Compounds() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        {/* Header */}
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#0F7A57' }}>What compounds</div>
            <span className="mw2-rule mt-5" style={{ color: '#21B985' }} />
            <h2 className="mt-6 text-[#08111F]">
              Not a launch event.{' '}
              <span className="text-[#4C5E6F]">Something that gets sharper with use.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Working with us isn&rsquo;t a relaunch with bigger numbers afterwards. The same calls, forms, and
              consultations come in — quietly less of it disappears, week by week.
            </p>
          </div>
        </div>

        {/* Horizontal time progression with a connecting timeline */}
        <div className="relative">
          <div
            className="hidden md:block absolute top-[29px] h-[2px] rounded-full"
            style={{ left: '12.5%', right: '12.5%', background: 'linear-gradient(to right, #35C7D8, #14B8A6, #0E7D8C, #21B985)' }}
            aria-hidden="true"
          />
          <div className="grid md:grid-cols-4 gap-y-10 md:gap-x-6">
            {COMPOUND_STEPS.map(step => (
              <div key={step.n} className="relative flex flex-col">
                {/* node on the timeline */}
                <div className="flex md:justify-center">
                  <span
                    className="relative z-10 w-[58px] h-[58px] rounded-full flex items-center justify-center"
                    style={{ background: '#FFFFFF', boxShadow: `0 0 0 1.5px ${step.color}, 0 0 0 6px ${step.color}14, 0 8px 20px rgba(8,17,31,0.06)` }}
                  >
                    <span className="mw2-numeral" style={{ color: step.color, fontSize: '20px' }}>{step.n}</span>
                  </span>
                </div>
                {/* step card */}
                <div className="mt-5 rounded-2xl bg-white p-6 flex-1 flex flex-col" style={{ border: '1px solid #E6EEF3', boxShadow: '0 8px 24px rgba(8,17,31,0.05)' }}>
                  <div className="uppercase tracking-[0.14em]" style={{ color: step.color, fontSize: '10px', fontWeight: 700 }}>{step.when}</div>
                  <h3 className="mt-2 text-[#08111F]" style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{step.title}</h3>
                  <p className="mt-2.5 text-[#6F8190] flex-1" style={{ fontSize: '13px', lineHeight: 1.6 }}>{step.body}</p>
                  <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full" style={{ background: `${step.color}12` }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: step.color }} />
                    <span style={{ color: step.color, fontSize: '11px', fontWeight: 600 }}>{step.chip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <div className="flex items-center gap-2.5 text-[#0E7D8C]">
          <TrendingUp size={18} />
          <span style={{ fontSize: '14.5px', fontWeight: 600 }}>
            Same effort in, more booked work out — because the gaps keep closing, not because traffic spikes.
          </span>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — Scenarios (light)
// DE-LOADED: only TWO large scenario surfaces — one home-service, one clinic.
// Not five stacked mockups. (≠ §8 timeline, ≠ §10 browser frame.)
// ============================================================================

type ScenarioStep = { n: string; title: string; note: string };

function ScenarioShell({
  accent,
  tag,
  audience,
  title,
  moment,
  children,
  steps,
  footnote,
}: {
  accent: string;
  tag: string;
  audience: string;
  title: string;
  moment: string;
  children: ReactNode;
  steps: ScenarioStep[];
  footnote: string;
}) {
  return (
    <div className="relative rounded-2xl bg-white overflow-hidden h-full flex flex-col" style={{ border: '1px solid #E6EEF3', boxShadow: '0 18px 48px rgba(8,17,31,0.07)' }}>
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${accent}1F, transparent 65%)`, filter: 'blur(40px)' }} aria-hidden="true" />
      {/* header */}
      <div className="relative p-7 lg:p-8 pb-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: accent, boxShadow: `0 0 8px ${accent}` }} />
          <span className="uppercase tracking-[0.16em]" style={{ color: accent, fontSize: '10.5px', fontWeight: 700 }}>{tag}</span>
          <span className="ml-auto text-[#9CA3B0]" style={{ fontSize: '10.5px', fontWeight: 600 }}>{audience}</span>
        </div>
        <h3 className="text-[#08111F]" style={{ fontSize: 'clamp(20px, 2vw, 24px)', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.22 }}>{title}</h3>
        <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>{moment}</p>
      </div>
      {/* believable artifact */}
      <div className="relative px-7 lg:px-8 flex-1 flex flex-col justify-center">{children}</div>
      {/* 01/02/03 handled sequence */}
      <div className="relative mt-auto p-7 lg:p-8 pt-6">
        <div className="uppercase tracking-[0.14em] text-[#9CA3B0] mb-3.5" style={{ fontSize: '9.5px', fontWeight: 700 }}>How it&rsquo;s handled</div>
        <div className="grid grid-cols-3 gap-2.5">
          {steps.map(s => (
            <div key={s.n} className="rounded-xl p-3.5" style={{ background: '#F9FCFD' }}>
              <div className="flex items-center gap-1.5" style={{ color: accent }}>
                <span className="mw2-numeral" style={{ fontSize: '17px' }}>{s.n}</span>
                <span className="h-[2px] flex-1 rounded-full" style={{ background: `${accent}40` }} />
              </div>
              <div className="mt-2 text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>{s.title}</div>
              <div className="mt-0.5 text-[#6F8190]" style={{ fontSize: '11px', lineHeight: 1.4 }}>{s.note}</div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{footnote}</p>
      </div>
    </div>
  );
}

function Scenarios() {
  return (
    <section className="section bg-page-light">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#14B8A6' }}>Different services, same moment</div>
            <span className="mw2-rule mt-5" style={{ color: '#14B8A6' }} />
            <h2 className="mt-6 text-[#08111F]">
              A trade callout and a clinic enquiry{' '}
              <span className="text-[#4C5E6F]">slip in the same place.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              The work looks different — a burst pipe at night, a new patient on a Sunday. The moment it slips is the
              same: the gap between someone reaching out and someone owning the reply.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* HOME SERVICE — missed-call recovery artifact */}
          <ScenarioShell
            accent="#9A6F12"
            tag="Home service · after hours"
            audience="Service business"
            title="Burst pipe, 7:40pm — the phone is ringing out."
            moment="The engineer is on another job. Without a callback line, the work goes to whoever in the trade answers first."
            steps={[
              { n: '01', title: 'Caught', note: 'Missed call logged' },
              { n: '02', title: 'Texted back', note: 'In seconds' },
              { n: '03', title: 'Booked', note: 'Owned, not lost' },
            ]}
            footnote="A text goes out in seconds and the right person calls back with context — so the job stays instead of going elsewhere."
          >
            <div className="rounded-xl p-4" style={{ background: 'linear-gradient(180deg, #FFFCF5, #FFFFFF)' }}>
              <div className="flex items-center gap-3 rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 3px 10px rgba(8,17,31,0.05)' }}>
                <span className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: '#E76F6F14', color: '#C2554E' }}><PhoneOff size={15} /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>Missed call · mobile</div>
                  <div className="text-[#6F8190]" style={{ fontSize: '11px' }}>After-hours · service line tracked</div>
                </div>
                <span className="text-[#9CA3B0]" style={{ fontSize: '10.5px', fontWeight: 600 }}>7:40pm</span>
              </div>
              <div className="mt-2.5 flex justify-end">
                <div className="rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]" style={{ background: 'linear-gradient(135deg, #35C7D8, #14B8A6)', color: '#FFFFFF', fontSize: '12px', lineHeight: 1.45 }}>
                  Sorry we missed you — someone on the team has been notified and will call you straight back.
                </div>
              </div>
              <div className="mt-2.5 flex items-center gap-3 rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 3px 10px rgba(8,17,31,0.05)' }}>
                <span className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: '#21B98514', color: '#0F7A57' }}><PhoneCall size={15} /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>Callback owned</div>
                  <div className="text-[#6F8190]" style={{ fontSize: '11px' }}>Assigned to the on-call engineer</div>
                </div>
                <CheckCircle2 size={16} color="#21B985" />
              </div>
            </div>
          </ScenarioShell>

          {/* SPECIALIST CLINIC — consultation intake artifact */}
          <ScenarioShell
            accent="#6B4FB8"
            tag="Specialist clinic · new patient"
            audience="Specialist clinic"
            title="Consultation request — the first reply sets the tone."
            moment="A prospective patient compares clinics on a Sunday. If the request just lands in an inbox, the consultation goes to whoever replies first."
            steps={[
              { n: '01', title: 'Captured', note: 'With context' },
              { n: '02', title: 'Confirmed', note: 'Right away' },
              { n: '03', title: 'Routed', note: 'To the coordinator' },
            ]}
            footnote="The request is captured with what they asked for, confirmed immediately, and routed to the person who actually follows it up."
          >
            <div className="rounded-xl p-4" style={{ background: 'linear-gradient(180deg, #FAF8FE, #FFFFFF)' }}>
              <div className="rounded-lg p-4" style={{ background: '#FFFFFF', boxShadow: '0 3px 10px rgba(8,17,31,0.05)' }}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>Consultation request</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full" style={{ background: '#6B4FB814', color: '#6B4FB8', fontSize: '9.5px', fontWeight: 700 }}><Calendar size={9} /> NEW</span>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {[['Interest', 'Implant consultation'], ['Preferred', 'Weekday evening'], ['Area', 'Named local area'], ['Context', 'Kept with the request']].map(([k, v]) => (
                    <div key={k}>
                      <div className="uppercase tracking-[0.1em] text-[#9CA3B0]" style={{ fontSize: '8.5px', fontWeight: 700 }}>{k}</div>
                      <div className="text-[#0E2740]" style={{ fontSize: '12px', fontWeight: 500 }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2.5 flex items-center gap-3 rounded-lg p-3" style={{ background: '#FFFFFF', boxShadow: '0 3px 10px rgba(8,17,31,0.05)' }}>
                <span className="w-9 h-9 rounded-md flex items-center justify-center" style={{ background: '#14B8A614', color: '#0E7D8C' }}><MessageSquare size={15} /></span>
                <div className="min-w-0 flex-1">
                  <div className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 700 }}>Confirmation sent</div>
                  <div className="text-[#6F8190]" style={{ fontSize: '11px' }}>Immediately, not the next day</div>
                </div>
                <CheckCircle2 size={16} color="#21B985" />
              </div>
            </div>
          </ScenarioShell>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10 — Pages we actually build (mist)
// Silhouette: an ANNOTATED artifact. A real service-page surface carries numbered
// pins on its zones; margin callouts point in, each explaining why that part
// converts. A diagram of a page — NOT §3's dominant-surface-plus-breakout shape.
// ============================================================================

function PagesWeBuild() {
  const callouts = [
    { n: '01', side: 'right' as const, top: '1%', color: '#0E7D8C', bg: '#E6F6F4', label: 'Enquiry capture in view', note: 'The quote path is stated in the first line — not buried behind a contact tab.' },
    { n: '02', side: 'left' as const, top: '45%', color: '#9A6F12', bg: '#FBF3DF', label: 'Trust before the ask', note: 'Registered, insured, local, reviewed — right where a buyer hesitates.' },
    { n: '03', side: 'right' as const, top: '74%', color: '#0F7A57', bg: '#E6F8F0', label: 'One clear next step', note: 'One obvious action that routes to a real person with context.' },
  ];
  return (
    <section className="section bg-page-mist">
      <div className="container">
        <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-16">
          <div className="section-kicker" style={{ color: '#0E7D8C' }}>What a page looks like</div>
          <h2 className="mt-5 text-[#08111F]">
            Not a homepage.{' '}
            <span className="text-[#4C5E6F]">The page that has to convert.</span>
          </h2>
          <p className="mt-5 text-[#4C5E6F] mx-auto max-w-[60ch]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            A real service page, written for a real local trade — annotated so you can see which parts do the converting,
            and why.
          </p>
        </div>

        {/* annotated diagram: artifact + numbered pins + margin callouts (xl) / legend (below xl) */}
        <div className="relative max-w-[1100px] mx-auto">
          <div className="relative mx-auto" style={{ maxWidth: 600 }}>
            <div className="absolute -inset-8 rounded-[40px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 30%, rgba(53,199,216,0.12), transparent 70%)', filter: 'blur(56px)' }} aria-hidden="true" />
            <div className="relative rounded-2xl bg-white overflow-hidden" style={{ border: '1px solid #D8E6EE', boxShadow: '0 30px 80px rgba(8,17,31,0.12)' }}>
              {/* chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b" style={{ borderColor: '#EEF3F6', background: '#F6FAFC' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: '#E76F6F66' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: '#F4B74066' }} />
                <span className="w-2 h-2 rounded-full" style={{ background: '#21B98566' }} />
                <span className="ml-3 px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5" style={{ background: '#FFFFFF', color: '#6F8190', fontSize: '10.5px', fontWeight: 600 }}>
                  <ShieldCheck size={10} color="#21B985" /> yourcompany.co.uk/services/boiler-repair
                </span>
              </div>
              {/* nav */}
              <div className="flex items-center justify-between px-5 py-3 border-b" style={{ borderColor: '#F2F5F7' }}>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-md flex items-center justify-center" style={{ background: '#061323' }}><span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" /></span>
                  <span className="text-[#08111F]" style={{ fontSize: '12px', fontWeight: 700 }}>Example service site</span>
                </div>
                <span className="px-3 py-1.5 rounded-md" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '11px', fontWeight: 700 }}>Request a quote</span>
              </div>
              {/* body zones with numbered pins */}
              <div className="p-5 lg:p-6 space-y-4">
                {/* INTENT — pin 01 */}
                <div className="relative rounded-xl p-5 pr-12" style={{ background: 'linear-gradient(135deg, rgba(53,199,216,0.12), rgba(53,199,216,0.03))' }}>
                  <span className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center tabular-nums" style={{ background: '#0E7D8C', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, boxShadow: '0 0 0 4px rgba(14,125,140,0.14)' }}>01</span>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-2.5" style={{ background: '#FFFFFF', color: '#0E7D8C', fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.14em' }}>
                    <MapPin size={9} /> NAMED LOCAL AREA
                  </div>
                  <div className="text-[#08111F]" style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.018em' }}>
                    Boiler repair — quote path visible, not just a callback form.
                  </div>
                  <div className="mt-1.5 text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>Registered. Local. Fixed-price quotes before any work starts.</div>
                </div>
                {/* EXPLAIN */}
                <div className="rounded-xl p-5" style={{ background: '#F6FAFC' }}>
                  <div className="text-[#08111F] mb-1.5" style={{ fontSize: '13px', fontWeight: 700 }}>What we fix today</div>
                  <div className="text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>No heat, no hot water, pressure dropping, error codes. Most repairs handled in one visit — diagnosis, fixed-price quote, and the fix on the same call.</div>
                </div>
                {/* PROOF — pin 02 */}
                <div className="relative rounded-xl p-5 pr-12" style={{ background: 'rgba(20,184,166,0.08)' }}>
                  <span className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center tabular-nums" style={{ background: '#9A6F12', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, boxShadow: '0 0 0 4px rgba(154,111,18,0.14)' }}>02</span>
                  <div className="flex items-center gap-1.5 mb-2.5 flex-wrap">
                    {[0, 1, 2, 3, 4].map(i => <Star key={i} size={11} fill="#F4B740" color="#F4B740" />)}
                    <span className="ml-1.5 text-[#6F8190]" style={{ fontSize: '11px', fontWeight: 600 }}>Recent verified reviews, beside the CTA</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5">
                    {[{ label: 'Registered', icon: ShieldCheck }, { label: 'Insured', icon: CheckCircle2 }, { label: 'Local area covered', icon: MapPin }].map(t => {
                      const Icon = t.icon;
                      return (<span key={t.label} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white" style={{ color: '#0E7D8C', fontSize: '11px', fontWeight: 600, boxShadow: '0 2px 6px rgba(8,17,31,0.05)' }}><Icon size={10} /> {t.label}</span>);
                    })}
                  </div>
                </div>
                {/* CTA — pin 03 */}
                <div className="relative rounded-xl p-5 pr-12" style={{ background: 'linear-gradient(135deg, rgba(33,185,133,0.12), rgba(33,185,133,0.03))' }}>
                  <span className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center tabular-nums" style={{ background: '#0F7A57', color: '#FFFFFF', fontSize: '11px', fontWeight: 800, boxShadow: '0 0 0 4px rgba(15,122,87,0.14)' }}>03</span>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md" style={{ background: '#08111F', color: '#FFFFFF', fontSize: '12.5px', fontWeight: 700 }}>Request a quote <ArrowRight size={12} /></span>
                    <span className="inline-flex items-center gap-1.5 text-[#0E2740]" style={{ fontSize: '12px', fontWeight: 700 }}><PhoneCall size={12} color="#0F7A57" /> Speak to the team</span>
                  </div>
                  <div className="mt-2.5 text-[#6F8190]" style={{ fontSize: '11.5px', fontWeight: 500 }}>Routes to the right person — captured, owned, and replied to with context.</div>
                </div>
              </div>
            </div>
          </div>

          {/* xl: margin callouts pointing to the pins */}
          <div className="hidden xl:block">
            {callouts.map(c => (
              <div key={c.n} className="absolute flex items-center" style={{ top: c.top, [c.side]: 0, width: 246, flexDirection: c.side === 'right' ? 'row-reverse' : 'row' }}>
                <div className="rounded-xl bg-white p-4" style={{ boxShadow: '0 12px 30px rgba(8,17,31,0.10)', width: 196 }}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center tabular-nums shrink-0" style={{ background: c.bg, color: c.color, fontSize: '11px', fontWeight: 800 }}>{c.n}</span>
                    <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '-0.005em' }}>{c.label}</span>
                  </div>
                  <p className="text-[#6F8190]" style={{ fontSize: '12px', lineHeight: 1.5 }}>{c.note}</p>
                </div>
                <div className="flex items-center" style={{ width: 50 }}>
                  <span className="h-px flex-1" style={{ background: c.color, opacity: 0.45 }} />
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ background: c.color, boxShadow: `0 0 8px ${c.color}66` }} />
                </div>
              </div>
            ))}
          </div>

          {/* below xl: numbered legend under the artifact */}
          <div className="xl:hidden mt-8 grid sm:grid-cols-3 gap-5">
            {callouts.map(c => (
              <div key={c.n} className="flex items-start gap-3">
                <span className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 tabular-nums" style={{ background: c.bg, color: c.color, fontSize: '12px', fontWeight: 800 }}>{c.n}</span>
                <div>
                  <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700 }}>{c.label}</div>
                  <p className="mt-1 text-[#6F8190]" style={{ fontSize: '13px', lineHeight: 1.55 }}>{c.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 11 — Built for / not for (white)
// Two balanced columns (recreated from v1 SectionFit): a green "when this is the
// right work" beside an equal-weight slate "when to say so early". The honest
// both-ways read — neither side buried.
// ============================================================================

const FIT_FOR_LIST = [
  'An established service business or specialist clinic with real activity already',
  'Real enquiries, calls, or consultation requests already come in',
  'Quotes, bookings, or follow-up have visible gaps between them',
  'The owner wants practical structure, not just a prettier website',
  'Long-term stability matters more than a one-off launch event',
];

const FIT_NOT_FOR_LIST = [
  'Looking for the cheapest possible website, nothing more',
  'Wanting guaranteed rankings or quick-traffic promises',
  'Buying a chatbot or AI tool as the main offer',
  'A looks-only redesign with no business context',
  'A healthcare buyer needing EMR, compliance, or treatment-outcome claims',
];

function FitFilter() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#0F7A57' }}>Built for</div>
            <span className="mw2-rule mt-5" style={{ color: '#21B985' }} />
            <h2 className="mt-6 text-[#08111F]">Built for established service businesses and specialist clinics.</h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              We don&rsquo;t create demand from zero. We make sure the demand you already have stops slipping before it
              becomes paid work or a kept appointment. Honest both ways — who this is for, and who it isn&rsquo;t.
            </p>
          </div>
        </div>

        {/* Two balanced columns — strong fit (green) / probably not right (slate) */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* STRONG FIT — col-7, green */}
          <div className="col-span-12 lg:col-span-7 relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FBF8 100%)', border: '1px solid #C9EDDB', boxShadow: '0 16px 40px rgba(33,185,133,0.10)' }}>
            <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #21B985, #0F7A57)' }} aria-hidden="true" />
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(33,185,133,0.10)', border: '1px solid rgba(33,185,133,0.35)', color: '#0F7A57' }}><Check size={16} strokeWidth={3} /></span>
                <div>
                  <div className="uppercase tracking-[0.16em]" style={{ color: '#0F7A57', fontSize: '10.5px', fontWeight: 700 }}>Strong fit</div>
                  <div className="text-[#08111F]" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.25 }}>When this is the right work</div>
                </div>
              </div>
              <ul className="divide-y divide-[#E1F0E9]">
                {FIT_FOR_LIST.map(f => (
                  <li key={f} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(33,185,133,0.12)', color: '#0F7A57' }}><Check size={11} strokeWidth={3} /></span>
                    <span className="text-[#0E2E2A]" style={{ fontSize: '14.5px', lineHeight: 1.55, fontWeight: 500 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROBABLY NOT RIGHT — col-5, slate, equal-weight card */}
          <div className="col-span-12 lg:col-span-5 relative rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F8FA 100%)', border: '1px solid #DDE2E8', boxShadow: '0 12px 32px rgba(8,17,31,0.05)' }}>
            <span className="absolute left-0 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(180deg, #9CA3B0, #6F8190)' }} aria-hidden="true" />
            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'rgba(111,129,144,0.10)', border: '1px solid rgba(111,129,144,0.35)', color: '#6F8190' }}><Minus size={16} strokeWidth={3} /></span>
                <div>
                  <div className="uppercase tracking-[0.16em]" style={{ color: '#6F8190', fontSize: '10.5px', fontWeight: 700 }}>Probably not right</div>
                  <div className="text-[#08111F]" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.25 }}>When to say so early</div>
                </div>
              </div>
              <ul className="divide-y divide-[#E6EAEF]">
                {FIT_NOT_FOR_LIST.map(f => (
                  <li key={f} className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#EEF1F4', color: '#9CA3B0' }}><Minus size={11} strokeWidth={3} /></span>
                    <span className="text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.55 }}>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-5 border-t text-[#6F8190]" style={{ borderColor: '#E6EAEF', fontSize: '12px', lineHeight: 1.55 }}>
                Tell us early — it saves time on both sides.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 12 — Review, not a pitch (light)
// One invitation panel (recreated from v1 SectionDelivery): two inner columns —
// what we review together / what you walk away with — closing on a QUIET inline
// review cue (no dark CTA block, since §14's dark CTA follows immediately).
// ============================================================================

const REVIEW_AREAS: ReadonlyArray<{ label: string; note: string; tone: string }> = [
  { label: 'The actual website', note: 'Service or treatment pages, how clearly they answer the real question, and whether the next step is obvious.', tone: '#35C7D8' },
  { label: 'Local visibility and trust', note: 'Whether nearby customers and patients can find you, recognise you, and trust you before they enquire.', tone: '#14B8A6' },
  { label: 'Where enquiries actually arrive', note: 'Where calls, forms, and consultation requests end up — and whether anyone is sure who replies first.', tone: '#0E7D8C' },
  { label: 'First response and follow-up', note: 'How fast the first reply goes out, and whether quotes, reminders, and consultations get chased on a real cadence.', tone: '#14B8A6' },
  { label: 'Reviews and visible work', note: 'Whether finished jobs and kept appointments become reviews on the pages that need them.', tone: '#21B985' },
];

const REVIEW_DELIVERABLES: ReadonlyArray<{ title: string; body: string }> = [
  { title: 'A clear picture of where work is slipping', body: 'Not a generic audit. Specific pages, specific moments — written so the owner can read it and act on it.' },
  { title: 'A short list of what to fix first', body: 'The two or three changes that protect the most enquiries for the least disruption. Ranked, not exhaustive.' },
  { title: 'A plan for what to rebuild and what to connect', body: 'What needs new structure, what only needs wiring. Honest about what is worth doing — and what is not.' },
];

function ReviewNotPitch() {
  return (
    <section className="section bg-page-light">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div className="section-kicker" style={{ color: '#0E7D8C' }}>The first conversation</div>
            <span className="mw2-rule mt-5" style={{ color: '#14B8A6' }} />
            <h2 className="mt-6 text-[#08111F]">
              We start with a review,{' '}
              <span className="text-[#4C5E6F]">not a pitch.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              A short working session with the owner or practice manager. We look at the actual website and what happens
              after the enquiry — calmly, with real specifics. No discovery deck. No three-step ritual.
            </p>
          </div>
        </div>

        {/* One invitation panel, two inner columns */}
        <div className="relative rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(160deg, #FFFFFF 0%, #F9FCFD 100%)', border: '1px solid #E6EEF3', boxShadow: '0 24px 64px rgba(8,17,31,0.08)' }}>
          <div className="absolute -top-20 -right-24 w-80 h-80 rounded-full pointer-events-none" style={{ background: 'rgba(53,199,216,0.10)', filter: 'blur(60px)' }} aria-hidden="true" />
          <div className="relative grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT — what we review together */}
            <div className="lg:col-span-7 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r" style={{ borderColor: '#EEF3F6' }}>
              <div className="flex items-center gap-2 text-[#0E7D8C]">
                <ScanSearch size={15} />
                <span className="uppercase tracking-[0.16em]" style={{ fontSize: '11.5px', fontWeight: 700 }}>What we review together</span>
              </div>
              <h3 className="text-[#08111F] mt-3" style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>Five things, in plain conversation.</h3>
              <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                We walk through them together on a call. Real examples from your business — not generic audit talk.
              </p>
              <ul className="mt-8 relative">
                <span className="absolute left-[3px] top-2 bottom-2 w-px" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #14B8A6 8%, #14B8A6 92%, transparent)' }} aria-hidden="true" />
                {REVIEW_AREAS.map(item => (
                  <li key={item.label} className="relative flex items-start gap-5 pb-6 last:pb-0">
                    <span className="relative mt-1.5 shrink-0 block w-[7px] h-[7px] rounded-full" style={{ background: item.tone, boxShadow: `0 0 0 4px ${item.tone}1A, 0 0 8px ${item.tone}80` }} aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 700, letterSpacing: '-0.005em', lineHeight: 1.3 }}>{item.label}</div>
                      <div className="mt-1 text-[#6F8190]" style={{ fontSize: '13px', lineHeight: 1.6 }}>{item.note}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — what you walk away with */}
            <div className="lg:col-span-5 p-8 lg:p-12" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECF9FB 100%)' }}>
              <div className="flex items-center gap-2 text-[#0F7A57]">
                <ClipboardCheck size={15} />
                <span className="uppercase tracking-[0.16em]" style={{ fontSize: '11.5px', fontWeight: 700 }}>What you walk away with</span>
              </div>
              <h3 className="text-[#08111F] mt-3" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>Three things, written for the owner.</h3>
              <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>
                You keep what we put together — whether you go ahead with us or not.
              </p>
              <div className="mt-8 space-y-4">
                {REVIEW_DELIVERABLES.map(d => (
                  <div key={d.title} className="rounded-xl p-5" style={{ background: '#FFFFFF', boxShadow: '0 4px 14px rgba(20,184,166,0.07)' }}>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(33,185,133,0.12)', color: '#0F7A57' }}><Check size={12} strokeWidth={3} /></span>
                      <div>
                        <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.005em' }}>{d.title}</div>
                        <div className="mt-1.5 text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>{d.body}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer — quiet inline review cue (no dark CTA block) */}
          <div className="relative px-8 lg:px-12 py-6 border-t flex flex-wrap items-center justify-between gap-4" style={{ borderColor: '#EEF3F6', background: 'linear-gradient(to right, #FFFFFF, #F9FCFD)' }}>
            <div className="flex items-start gap-4 max-w-[680px]">
              <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'linear-gradient(135deg, rgba(20,184,166,0.12), rgba(53,199,216,0.06))', border: '1px solid rgba(20,184,166,0.25)', color: '#0E7D8C' }}><Clock size={16} /></span>
              <div className="min-w-0">
                <div className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 700, letterSpacing: '-0.005em' }}>A 60–90 minute working session.</div>
                <div className="mt-1 text-[#6F8190]" style={{ fontSize: '13px', lineHeight: 1.55 }}>Practical and useful whether you work with us afterwards or not. No pitch deck, no sales chase, no upsell.</div>
              </div>
            </div>
            <a href="#cta" className="inline-flex items-center gap-2 text-[#0E2740] hover:text-[#08111F] shrink-0" style={{ fontSize: '13.5px', fontWeight: 700, borderBottom: '2px solid #14B8A6', paddingBottom: '2px' }}>
              Request a review <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 13 — FAQ (mist)
// BOXLESS accordion on the open background. Hairline-separated rows, no panel.
// ============================================================================

const FAQS: ReadonlyArray<{ q: string; a: string }> = [
  { q: 'What do you actually build?', a: 'Conversion-focused websites for established service businesses and specialist clinics — plus what happens around the website after someone makes contact. Calls, forms, quote requests, and consultation requests get answered, picked up by name, followed up, and turned into reviews.' },
  { q: 'How is this different from just getting a new website?', a: 'A website shows the business. What we build also makes sure the enquiry reaches the right person, gets a reply, and gets a follow-up. The site is the visible part; the rest is what stops good enquiries from quietly disappearing.' },
  { q: 'We already have a website. Do we need a full rebuild?', a: 'Not always. We start by looking at what you already have, find where work slips, and put the missing pieces in place around it. Sometimes the website needs rebuilding. Often it just needs reshaping and connecting.' },
  { q: 'Is local SEO included, or a separate package?', a: 'Local visibility is part of how the website works — not a bolt-on. The site, the Google Business Profile, the service or treatment pages, and the reviews need to tell the same story to nearby customers. That is what we build and keep maintained.' },
  { q: 'How is Lead Response & Handling different from Follow-Up & CRM?', a: 'Lead Response & Handling is about the first reply — catching the form, the missed call, or the consultation request in the moment. Follow-Up & CRM owns the next step after that — paced quote chasing and reminders, so nothing goes quiet.' },
  { q: 'What about missed calls after hours?', a: 'A same-line text goes back while the enquiry is still fresh, and the right person on the team follows up with context. Weekend and after-hours calls come back into the same handling instead of disappearing into voicemail.' },
  { q: 'Who is this actually for?', a: 'Established service businesses and specialist clinics where work already comes in, the value of each job or appointment is real, and the handling between the first contact and the booked work has visible gaps.' },
  { q: 'How do we start?', a: 'A short review of your website and what happens after the enquiry. We tell you where work is slipping and what to fix first — whether you work with us afterwards or not.' },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-page-mist">
      <div className="container">
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="col-span-12 lg:col-span-4">
            <div className="section-kicker" style={{ color: '#0E7D8C' }}>Questions</div>
            <span className="mw2-rule mt-5" style={{ color: '#35C7D8' }} />
            <h2 className="mt-6 text-[#08111F]">Straight answers.</h2>
            <p className="mt-5 text-[#4C5E6F] max-w-[40ch]" style={{ fontSize: '15px', lineHeight: 1.65 }}>
              The things owners actually ask before a review — answered without spin.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            {FAQS.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className={i > 0 ? 'mw2-hairline' : ''}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 text-left py-6"
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{ color: isOpen ? '#08111F' : '#0E2740', fontSize: '17.5px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.35 }}
                    >
                      {item.q}
                    </span>
                    <span
                      className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors"
                      style={{ background: isOpen ? '#08111F' : '#FFFFFF', color: isOpen ? '#FFFFFF' : '#0E7D8C', boxShadow: isOpen ? 'none' : '0 4px 12px rgba(8,17,31,0.06)' }}
                    >
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="text-[#4C5E6F] max-w-[68ch] pb-7 -mt-1" style={{ fontSize: '15px', lineHeight: 1.7 }}>
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 14 — Final CTA (DARK ANCHOR)
// Diagnostic CTA + across-the-five-systems checklist. No demo / guarantee.
// ============================================================================

function FinalCta() {
  const checklist = [
    { label: 'Visibility', note: 'where you show up locally' },
    { label: 'Enquiry capture', note: 'the page that has to convert' },
    { label: 'Lead Response & Handling', note: 'the first reply, owned' },
    { label: 'Follow-Up & CRM', note: 'the next step nobody forgets' },
    { label: 'Reputation & Review', note: 'proof asked for and shown' },
  ];

  return (
    <section className="section mw2-anchor-dark relative overflow-hidden" id="cta">
      <DarkAnchorOverlays />

      <div className="container relative">
        <div className="max-w-[760px] mx-auto text-center">
          <div className="section-kicker text-[#35C7D8]">Start with a review</div>
          <h2 className="mt-5 text-white">See where the work is slipping.</h2>
          <p className="mt-5 text-white/65 mx-auto max-w-[56ch]">
            A diagnostic look across the five systems — where work comes in, and where it&rsquo;s slipping today. You
            walk away with a plain read of the gaps and what to fix first.
          </p>

          <div className="mt-9 flex items-center justify-center gap-6 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Request a Website Review
              <ArrowRight size={16} />
            </a>
            <a
              href="#leak"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              See where work slips
              <ArrowRight size={14} />
            </a>
          </div>
        </div>

        {/* Across-the-five-systems checklist — boxless on dark */}
        <div className="mt-14 max-w-[1000px] mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-px rounded-2xl overflow-hidden border border-white/10">
          {checklist.map(c => (
            <div key={c.label} className="bg-white/[0.03] p-6">
              <span className="w-7 h-7 rounded-full bg-[#35C7D8]/15 border border-[#35C7D8]/30 flex items-center justify-center text-[#35C7D8]">
                <Check size={14} />
              </span>
              <div className="mt-3.5 text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
                {c.label}
              </div>
              <div className="mt-1 text-white/50" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>
                {c.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Composition
// ============================================================================

export function HomeV2() {
  return (
    <main>
      <HeroV2 />
      <SlipSequence />
      <ControlPoint />
      <TwoWebsites />
      <LocalVisibility />
      <HandlingPaths />
      <FiveSystems />
      <Compounds />
      <Scenarios />
      <PagesWeBuild />
      <FitFilter />
      <ReviewNotPitch />
      <Faq />
      <FinalCta />
    </main>
  );
}
