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
            People find you online. They call, fill in forms, ask for quotes or
            consultations, check reviews, and compare what you do. Some of it becomes
            booked work or kept appointments. Too much disappears between the first
            click and the next step.
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
  const missedCount = HERO_SIGNALS.filter(s => s.status === 'missed').length;
  const waitingCount = HERO_SIGNALS.filter(s => s.status === 'waiting').length;

  return (
    <div className="relative w-full">
      <div className="rounded-2xl border border-white/[0.18] bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 backdrop-blur-sm shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
          <div>
            <div
              className="text-white/45 uppercase tracking-[0.16em]"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              Today&rsquo;s working day
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
              Moments
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
            const isMissed = s.status === 'missed';
            return (
              <div
                key={s.label}
                className={`grid grid-cols-12 items-center gap-3 px-4 py-4 rounded-lg border transition-colors ${isMissed
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
                    className={`w-9 h-9 rounded-md border flex items-center justify-center ${isMissed
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
                    className={`truncate mt-0.5 ${isMissed ? 'text-[#E76F6F]/65' : 'text-white/60'}`}
                    style={{ fontSize: '13px' }}
                  >
                    {s.note}
                  </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  {isMissed ? (
                    <span
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[#E76F6F]/12 text-[#E76F6F] border border-[#E76F6F]/[0.28]"
                      style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E76F6F] shadow-[0_0_5px_#E76F6F]" />{' '}
                      MISSED
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
          <div
            className="flex items-center justify-end gap-1.5 text-[#35C7D8]"
            style={{ fontSize: '12px', fontWeight: 600 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8] animate-pulse" />
            Where MindWP picks up
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 right-12 h-12 rounded-full bg-[#35C7D8]/15 blur-2xl pointer-events-none" />
    </div>
  );
}

// ============================================================================
// SECTION 02 — Where work slips
// Recognition section: the business is already being found, contacted, and
// trusted after work is done — but momentum slips between those moments.
// Keep this as the problem-recognition section, not a build/explanation section.
// ============================================================================

// — Section 02 layer illustrations (illustrator-style flat SVGs) ——————————————

function PageLayerIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="8" width="44" height="44" rx="4" fill="#F4FBFC" stroke="#0E7D8C" strokeWidth="1.5" />
      <rect x="12" y="12" width="36" height="14" rx="2" fill="#0E7D8C" opacity="0.12" />
      <line x1="15" y1="16.5" x2="34" y2="16.5" stroke="#0E7D8C" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="15" y1="21" x2="28" y2="21" stroke="#0E7D8C" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
      <line x1="12" y1="32" x2="44" y2="32" stroke="#0E7D8C" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <line x1="12" y1="36" x2="40" y2="36" stroke="#0E7D8C" strokeWidth="1" strokeLinecap="round" opacity="0.35" />
      <rect x="12" y="42" width="18" height="6" rx="1.5" fill="#08111F" />
      <line x1="16" y1="45" x2="26" y2="45" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HandlingLayerIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Central handling hub */}
      <circle cx="30" cy="30" r="11" fill="#FEF6E4" stroke="#9A6F12" strokeWidth="1.5" />
      <circle cx="30" cy="30" r="3.5" fill="#9A6F12" />
      {/* Phone — top */}
      <circle cx="30" cy="10" r="4.5" fill="#FFFFFF" stroke="#9A6F12" strokeWidth="1.5" />
      <line x1="30" y1="15" x2="30" y2="18" stroke="#9A6F12" strokeWidth="1.2" strokeDasharray="1.2 1.5" />
      {/* Form — bottom left */}
      <rect x="6" y="42" width="10" height="8" rx="1.5" fill="#FFFFFF" stroke="#9A6F12" strokeWidth="1.5" />
      <line x1="9" y1="46" x2="13" y2="46" stroke="#9A6F12" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
      <line x1="17" y1="42" x2="22" y2="38" stroke="#9A6F12" strokeWidth="1.2" strokeDasharray="1.2 1.5" />
      {/* Message — bottom right */}
      <path
        d="M 44 42 L 52 42 C 53 42, 53.5 42.5, 53.5 43.5 L 53.5 47.5 C 53.5 48.5, 53 49, 52 49 L 48 49 L 45 52 L 45 49 L 44 49 C 43 49, 42.5 48.5, 42.5 47.5 L 42.5 43.5 C 42.5 42.5, 43 42, 44 42 Z"
        fill="#FFFFFF"
        stroke="#9A6F12"
        strokeWidth="1.5"
      />
      <line x1="43" y1="42" x2="38" y2="38" stroke="#9A6F12" strokeWidth="1.2" strokeDasharray="1.2 1.5" />
      {/* Owned check badge */}
      <circle cx="46" cy="14" r="5.5" fill="#21B985" />
      <path
        d="M 43.5 14 L 45.2 15.7 L 48.5 12.4"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function ProofLayerIcon() {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="8" y="18" width="44" height="34" rx="3" fill="#F4FBFC" stroke="#0F7A57" strokeWidth="1.5" />
      <line x1="12" y1="24" x2="28" y2="24" stroke="#0F7A57" strokeWidth="1.2" strokeLinecap="round" opacity="0.45" />
      <line x1="12" y1="28" x2="34" y2="28" stroke="#0F7A57" strokeWidth="1" strokeLinecap="round" opacity="0.3" />
      {/* Review block on page */}
      <rect x="12" y="34" width="36" height="14" rx="2" fill="#F4B74018" stroke="#F4B740" strokeWidth="1" />
      {/* 5 stars */}
      {[17, 23, 29, 35, 41].map(cx => (
        <path
          key={cx}
          d={`M ${cx} 38 L ${cx + 0.8} 39.6 L ${cx + 2.5} 39.9 L ${cx + 1.2} 41 L ${cx + 1.5} 42.7 L ${cx} 41.8 L ${cx - 1.5} 42.7 L ${cx - 1.2} 41 L ${cx - 2.5} 39.9 L ${cx - 0.8} 39.6 Z`}
          fill="#F4B740"
        />
      ))}
      {/* Returning arrow loop — review comes back to the page */}
      <path
        d="M 48 12 Q 54 12, 54 18 Q 54 24, 46 24"
        stroke="#0F7A57"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 48 21 L 46 24 L 49 26"
        stroke="#0F7A57"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function SectionLeak() {
  const layers = [
    {
      n: '01',
      tone: '#0E7D8C',
      label: 'Found, then unsure',
      title: 'The page gets the visit, but not enough confidence to act.',
      body:
        'Someone finds the business, reads the service or treatment page, checks reviews, and still leaves because the next step is not clear enough.',
      icon: <PageLayerIcon />,
    },
    {
      n: '02',
      tone: '#9A6F12',
      label: 'Contacted, then waiting',
      title: 'The form, call, quote, or consultation request arrives — then slows down.',
      body:
        'A weekend form waits. A missed call has no callback. A quote goes out Friday and Monday depends on memory.',
      icon: <HandlingLayerIcon />,
    },
    {
      n: '03',
      tone: '#0F7A57',
      label: 'Finished, then forgotten',
      title: 'The work goes well, but the trust never makes it back to the website.',
      body:
        'The job ends well, the appointment is kept, or the patient leaves reassured — and the moment to ask for a review or share the work quietly passes.',
      icon: <ProofLayerIcon />,
    },
  ];

  return (
    <section id="leak" className="section bg-page-mist">
      <div className="container section-stack">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              Where work slips
            </div>
            <h2 className="text-[#08111F]">
              The work is already there.{' '}
              <span className="text-[#4C5E6F]">
                It slips between the moments.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              More traffic is not the whole answer. Most established businesses and
              practices already have searches, calls, forms, quotes, appointments,
              and good work happening. The weak point is what happens between them.
            </p>
          </div>
        </div>

        {/* Three connected layers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
          {layers.map((layer, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white overflow-hidden h-full flex flex-col"
              style={{
                border: '1px solid #E6EEF3',
                boxShadow: '0 10px 28px rgba(8,17,31,0.06)',
              }}
            >
              {/* Top tone accent bar */}
              <div className="h-1" style={{ background: layer.tone }} aria-hidden="true" />

              <div className="p-7 lg:p-8 flex-1 flex flex-col">
                {/* Step number + illustration */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-[#9CA3B0] tabular-nums"
                    style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.04em' }}
                  >
                    {layer.n}
                  </span>
                  <div className="shrink-0">{layer.icon}</div>
                </div>

                {/* Eyebrow label in layer tone */}
                <div
                  className="uppercase tracking-[0.14em] mb-2"
                  style={{ color: layer.tone, fontSize: '10.5px', fontWeight: 700 }}
                >
                  {layer.label}
                </div>

                {/* Title */}
                <div
                  className="text-[#08111F] mb-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 1.3,
                    letterSpacing: '-0.012em',
                  }}
                >
                  {layer.title}
                </div>

                {/* Body */}
                <p
                  className="text-[#6F8190]"
                  style={{ fontSize: '13.5px', lineHeight: 1.65 }}
                >
                  {layer.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quiet closing line */}
        <p
          className="text-[#4C5E6F] max-w-2xl"
          style={{ fontSize: '14.5px', lineHeight: 1.65 }}
        >
          The work is not lost at one point.{' '}
          <span className="text-[#08111F] font-medium">
            It slips between handoffs.
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
              For a service business this is the public control point. For a specialist
              clinic it is the practice front door. It sits where people decide whether
              to call, fill the form, or ask for a consultation — and whether to trust
              you with the work.
            </p>
            <p
              className="mt-4 text-[#6F8190] max-w-[460px]"
              style={{ fontSize: '14.5px', lineHeight: 1.6 }}
            >
              It doesn&rsquo;t fix missed calls or scattered forms on its own. But it
              is the first place those problems show up — and the place where what
              visitors see can connect to what happens next.
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
                  example service page
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
                    Example service site
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
                      NAMED LOCAL AREA · STORM RESPONSE
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
                      <span className="text-[#0E7D8C]"> Quote request path visible.</span>
                    </div>
                    <p
                      className="mt-2 text-[#4C5E6F]"
                      style={{ fontSize: '12px', lineHeight: 1.5 }}
                    >
                      Emergency repair, full reroof, insurance work. A local
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
                        Request a quote
                        <ArrowRight size={11} />
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-[#0E2740]"
                        style={{ fontSize: '10.5px', fontWeight: 600 }}
                      >
                        <PhoneCall size={10} color="#0E7D8C" />
                        Speak to the team
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
                          className="ml-auto text-[#6F8190]"
                          style={{ fontSize: '9.5px', fontWeight: 600 }}
                        >
                          Recent verified reviews
                        </span>
                      </div>
                      <div
                        className="mt-2 text-[#4C5E6F]"
                        style={{ fontSize: '10.5px', lineHeight: 1.5 }}
                      >
                        Review snippet placed beside the CTA — sits where the visitor is deciding whether to act.
                      </div>
                      <div className="mt-2.5 pt-2.5 border-t flex items-center justify-between" style={{ borderColor: '#EEF3F6' }}>
                        <span
                          className="inline-flex items-center gap-1 text-[#0F7A57]"
                          style={{ fontSize: '9.5px', fontWeight: 700 }}
                        >
                          <CheckCircle2 size={10} />
                          Recent
                        </span>
                        <span
                          className="text-[#6F8190]"
                          style={{ fontSize: '9.5px', fontWeight: 600 }}
                        >
                          Local area covered
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
                  <span className="w-1 h-1 rounded-full bg-[#21B985]" />
                  Response path active
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
                    what happens after the enquiry, designed as part of the same site.
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
              once the visitor leaves. On the right, the same trade with a website
              built to carry the enquiry forward.
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
            example service site
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
            Example service site
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
            Plumbing services in your local area.
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
            Family-run plumbers serving the local area for over twenty years. Fully
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
                Contact route
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
                Generic enquiry address
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
              © Example service site
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
            example service site
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
              Example service site
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
            Phone route visible
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
              NAMED LOCAL AREA · RESPONSE PATH ACTIVE
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
              Emergency plumber in your local area —{' '}
              <span className="text-[#0E7D8C]">availability route visible.</span>
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
                Request a quote
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
                Direct line
              </span>
            </div>
          </div>
        </div>

        {/* Service tiles with proof per card */}
        <div className="px-6 lg:px-8 py-5 grid grid-cols-3 gap-2.5">
          {[
            { name: 'Boiler repair', meta: 'Quote path visible' },
            { name: 'Burst pipe', meta: 'Urgent route' },
            { name: 'No hot water', meta: 'Quote path visible' },
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
                  className="ml-1 text-[#6F8190]"
                  style={{ fontSize: '9.5px', fontWeight: 600 }}
                >
                  {s.meta}
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
              Registered
            </span>
            <span className="text-[#D0EFF4]">·</span>
            <span
              className="inline-flex items-center gap-1 text-[#0E2740]"
              style={{ fontSize: '10.5px', fontWeight: 600 }}
            >
              Recent verified reviews
            </span>
            <span className="text-[#D0EFF4]">·</span>
            <span
              className="inline-flex items-center gap-1 text-[#0E2740]"
              style={{ fontSize: '10.5px', fontWeight: 600 }}
            >
              Insured
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
              className="ml-1 text-[#6F8190]"
              style={{ fontSize: '11px', fontWeight: 600 }}
            >
              Recent verified review
            </span>
          </div>
          <div
            className="text-[#4C5E6F]"
            style={{ fontSize: '12px', lineHeight: 1.5 }}
          >
            Review snippet placed beside the CTA — where the visitor is deciding whether to act.
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
            © Example service site · local area covered
          </span>
          <span
            className="inline-flex items-center gap-1 text-[#0F7A57]"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            <span className="w-1 h-1 rounded-full bg-[#21B985]" />
            Response path active
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
          <span className="text-[#0E7D8C]">a real person replies, and the follow-up is on the calendar.</span>
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// SECTION 05 — Local SEO Authority
// Local discovery, service-area coverage, review signal, and listing consistency.
// No ranking promises, no fake Google dashboard, and no dominant website mockup.
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
                It is the same trustworthy details, everywhere.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Nearby customers and patients need to find you and verify you before they
              enquire. Local visibility holds when the website, the listing, reviews, and
              service-area pages all line up — and stay lined up.
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
                How they find you
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
                Local search, &ldquo;near me&rdquo;, an emergency at 9pm, or a patient
                researching a treatment. The local pack decides who gets clicked first —
                and whether you are even on the page.
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
                    Local
                  </span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { name: 'Listing one', rating: 'recent reviews', highlight: false },
                    { name: 'Listing two — the right business', rating: 'recent reviews', highlight: true },
                    { name: 'Listing three', rating: 'few reviews', highlight: false },
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

          {/* BOTTOM — Three local trust zones: three editorial zones, no website mockup, no fake metrics */}
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
                      Coverage matched to the work, named locally.
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#6F8190] mb-3"
                  style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                >
                  Service-area pages match the postcodes you actually work in. The
                  Google Business Profile, the website, and the directories all agree.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Area 1', 'Area 2', 'Area 3', 'Area 4', 'Area 5', 'Area 6'].map(p => (
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
                      Reviews
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '14px',
                        fontWeight: 700,
                        letterSpacing: '-0.005em',
                      }}
                    >
                      Recent, consistent, owned.
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#6F8190] mb-3"
                  style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                >
                  Reviews asked for when the job or appointment ends well, and shown
                  next to the work — not buried in a footer.
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
                      Listings
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
                  Name, hours, phone number, and services match across the website,
                  the Google profile, and every directory. No conflicting details.
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

      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — After contact handling
// Four contact paths — form enquiry, missed call, quote follow-up, and
// consultation request — shown as distinct practical handling surfaces.
// ============================================================================

type AfterContactKey = 'form' | 'call' | 'quote' | 'consultation';

type AfterContactPath = {
  key: AfterContactKey;
  label: string;
  qualifier: string;
  icon: LucideIcon;
  zoneColor: string;
};

const AFTER_CONTACT_PATHS: ReadonlyArray<AfterContactPath> = [
  {
    key: 'form',
    label: 'Form enquiry',
    qualifier: 'From the website',
    icon: Inbox,
    zoneColor: '#0E7D8C',
  },
  {
    key: 'call',
    label: 'Phone & missed calls',
    qualifier: 'Inbound calls',
    icon: PhoneCall,
    zoneColor: '#E76F6F',
  },
  {
    key: 'quote',
    label: 'Quote follow-up',
    qualifier: 'After the quote',
    icon: History,
    zoneColor: '#9A6F12',
  },
  {
    key: 'consultation',
    label: 'Consultation request',
    qualifier: 'Consultation request',
    icon: HeartPulse,
    zoneColor: '#6B4FB8',
  },
];

// — Per-path SVG illustrations (illustrator-style, one per scenario) ————————

function FormEnquiryIllustration() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="14"
        y="12"
        width="42"
        height="52"
        rx="4"
        fill="#F4FBFC"
        stroke="#0E7D8C"
        strokeWidth="1.5"
      />
      <line x1="22" y1="24" x2="44" y2="24" stroke="#0E7D8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.65" />
      <line x1="22" y1="34" x2="48" y2="34" stroke="#0E7D8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <line x1="22" y1="42" x2="44" y2="42" stroke="#0E7D8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <line x1="22" y1="50" x2="40" y2="50" stroke="#0E7D8C" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
      <circle cx="58" cy="56" r="12" fill="#21B985" />
      <path
        d="M 52 56 L 56 60 L 64 52"
        stroke="#FFFFFF"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function CallRecoveryIllustration() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="18"
        y="12"
        width="28"
        height="46"
        rx="5"
        fill="#FDF3F3"
        stroke="#E76F6F"
        strokeWidth="1.5"
      />
      <line x1="24" y1="20" x2="40" y2="20" stroke="#E76F6F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <rect x="22" y="28" width="20" height="22" rx="2" fill="#E76F6F" opacity="0.08" />
      <circle cx="44" cy="16" r="6" fill="#E76F6F" />
      <line x1="41" y1="16" x2="47" y2="16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="44" y1="13" x2="44" y2="19" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M 36 54 C 36 52, 38 50, 40 50 L 60 50 C 62 50, 64 52, 64 54 L 64 62 C 64 64, 62 66, 60 66 L 50 66 L 46 70 L 46 66 L 40 66 C 38 66, 36 64, 36 62 Z"
        fill="#0E7D8C"
      />
      <line x1="41" y1="56" x2="59" y2="56" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <line x1="41" y1="60" x2="55" y2="60" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function QuoteFollowupIllustration() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="14"
        y="14"
        width="38"
        height="50"
        rx="3"
        fill="#FEF6E4"
        stroke="#9A6F12"
        strokeWidth="1.5"
      />
      <path
        d="M 44 14 L 52 14 L 52 22 Z"
        fill="#FFFFFF"
        stroke="#9A6F12"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <line x1="20" y1="30" x2="42" y2="30" stroke="#9A6F12" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      <line x1="20" y1="38" x2="44" y2="38" stroke="#9A6F12" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="20" y1="46" x2="38" y2="46" stroke="#9A6F12" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <line x1="20" y1="54" x2="40" y2="54" stroke="#9A6F12" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <circle cx="62" cy="22" r="4.5" fill="#21B985" />
      <line x1="62" y1="27" x2="62" y2="40" stroke="#C8D8E4" strokeWidth="1.5" />
      <circle cx="62" cy="44" r="5" fill="#F4B740" stroke="#FFFFFF" strokeWidth="1.5" />
      <line x1="62" y1="49" x2="62" y2="62" stroke="#C8D8E4" strokeWidth="1.5" strokeDasharray="2 2" />
      <circle cx="62" cy="66" r="4.5" fill="#FFFFFF" stroke="#C8D8E4" strokeWidth="1.5" />
    </svg>
  );
}

function ConsultationIntakeIllustration() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect
        x="16"
        y="18"
        width="38"
        height="48"
        rx="3"
        fill="#FBF9FE"
        stroke="#6B4FB8"
        strokeWidth="1.5"
      />
      <rect
        x="26"
        y="14"
        width="18"
        height="8"
        rx="2"
        fill="#FFFFFF"
        stroke="#6B4FB8"
        strokeWidth="1.5"
      />
      <line x1="22" y1="30" x2="44" y2="30" stroke="#6B4FB8" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
      <line x1="22" y1="38" x2="40" y2="38" stroke="#6B4FB8" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
      <path
        d="M 35 50 C 35 48, 33 47, 31 47 C 29 47, 27 49, 27 51 C 27 54, 35 60, 35 60 C 35 60, 43 54, 43 51 C 43 49, 41 47, 39 47 C 37 47, 35 48, 35 50 Z"
        fill="#6B4FB8"
        opacity="0.2"
      />
      <path
        d="M 35 50 C 35 48, 33 47, 31 47 C 29 47, 27 49, 27 51 C 27 54, 35 60, 35 60 C 35 60, 43 54, 43 51 C 43 49, 41 47, 39 47 C 37 47, 35 48, 35 50 Z"
        stroke="#6B4FB8"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="60" cy="58" r="10" fill="#FFFFFF" stroke="#6B4FB8" strokeWidth="1.5" />
      <line x1="60" y1="53" x2="60" y2="58" stroke="#6B4FB8" strokeWidth="2" strokeLinecap="round" />
      <line x1="60" y1="58" x2="64" y2="60" stroke="#6B4FB8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// — Per-path surfaces (each has a distinct internal treatment) ——————————————

function FormEnquirySurface() {
  return (
    <div>
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 mb-6 pb-5 border-b"
        style={{ borderColor: '#EEF3F6' }}
      >
        <div className="min-w-0">
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-1"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            Form enquiry
          </div>
          <h3
            className="text-[#08111F]"
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 700,
              letterSpacing: '-0.012em',
              lineHeight: 1.2,
            }}
          >
            Repair enquiry — named local area
          </h3>
          <div
            className="mt-1 text-[#6F8190]"
            style={{ fontSize: '12.5px', fontWeight: 500 }}
          >
            Arrived during working hours from a service page
          </div>
        </div>
        <div className="shrink-0">
          <FormEnquiryIllustration />
        </div>
      </div>

      {/* Labeled field grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
        {[
          { label: 'Source page', value: 'Service or treatment page' },
          { label: 'What they need', value: 'Quote request · time-sensitive' },
          { label: 'Area', value: 'Named local area' },
          { label: 'Replying', value: 'Service manager — owner attached' },
          { label: 'First reply', value: 'Acknowledged while still fresh' },
          { label: 'Next step', value: 'Chase visible if no reply' },
        ].map((field, i) => (
          <div key={i}>
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.12em] mb-1"
              style={{ fontSize: '9px', fontWeight: 700 }}
            >
              {field.label}
            </div>
            <div
              className="text-[#0E2740]"
              style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.45 }}
            >
              {field.value}
            </div>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <div className="mt-7 pt-5 border-t" style={{ borderColor: '#EEF3F6' }}>
        <p className="text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
          Where it came from, why they got in touch, and who&rsquo;s replying — all
          attached to the enquiry, not sitting in a shared inbox.
        </p>
      </div>
    </div>
  );
}

function CallRecoverySurface() {
  return (
    <div>
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 mb-6 pb-5 border-b"
        style={{ borderColor: '#EEF3F6' }}
      >
        <div className="min-w-0">
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-1"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            Missed call recovery
          </div>
          <h3
            className="text-[#08111F]"
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 700,
              letterSpacing: '-0.012em',
              lineHeight: 1.2,
            }}
          >
            Weekend missed call — recovered with context
          </h3>
          <div
            className="mt-1 text-[#6F8190]"
            style={{ fontSize: '12.5px', fontWeight: 500 }}
          >
            After-hours · service line tracked
          </div>
        </div>
        <div className="shrink-0">
          <CallRecoveryIllustration />
        </div>
      </div>

      {/* Three event blocks — each visually distinct, including an SMS bubble in the middle */}
      <div className="space-y-3">
        {/* Missed call */}
        <div
          className="rounded-lg p-4 flex items-start gap-3"
          style={{
            background:
              'linear-gradient(to right, rgba(231,111,111,0.06), transparent)',
            border: '1px solid rgba(231,111,111,0.22)',
          }}
        >
          <div
            className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
            style={{
              background: '#E76F6F14',
              border: '1px solid #E76F6F30',
              color: '#E76F6F',
            }}
          >
            <PhoneOff size={14} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700 }}>
              Inbound call — missed
            </div>
            <p
              className="mt-0.5 text-[#6F8190]"
              style={{ fontSize: '12px', lineHeight: 1.55 }}
            >
              Caller logged · service line tracked · area attached.
            </p>
          </div>
          <span
            className="text-[#9CA3B0] shrink-0"
            style={{ fontSize: '11px', fontWeight: 600 }}
          >
            After-hours
          </span>
        </div>

        {/* Auto SMS with bubble */}
        <div
          className="rounded-lg p-4"
          style={{
            background: 'linear-gradient(135deg, #F4FBFC 0%, #FFFFFF 100%)',
            border: '1px solid #D0EFF4',
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
              style={{
                background: 'linear-gradient(135deg, #35C7D8, #14B8A6)',
                color: '#FFFFFF',
              }}
            >
              <FileText size={14} />
            </div>
            <div className="min-w-0 flex-1">
              <div
                className="text-[#08111F]"
                style={{ fontSize: '13.5px', fontWeight: 700 }}
              >
                Text sent back
              </div>
              <div
                className="mt-0.5 text-[#6F8190]"
                style={{ fontSize: '11.5px', fontWeight: 500 }}
              >
                Same line, every time
              </div>
            </div>
            <span
              className="text-[#9CA3B0] shrink-0"
              style={{ fontSize: '11px', fontWeight: 600 }}
            >
              Acknowledged
            </span>
          </div>
          {/* SMS bubble */}
          <div
            className="rounded-xl rounded-tl-sm px-3.5 py-2.5 ml-12"
            style={{
              background: '#FFFFFF',
              border: '1px solid #D0EFF4',
              color: '#0E2740',
              fontSize: '12.5px',
              lineHeight: 1.5,
            }}
          >
            <span style={{ fontStyle: 'italic' }}>
              &ldquo;Sorry we missed you — someone on the team has been notified and will follow up.&rdquo;
            </span>
          </div>
        </div>

        {/* Callback completed */}
        <div
          className="rounded-lg p-4 flex items-start gap-3"
          style={{
            background:
              'linear-gradient(to right, rgba(33,185,133,0.06), transparent)',
            border: '1px solid rgba(33,185,133,0.25)',
          }}
        >
          <div
            className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
            style={{
              background: '#21B98514',
              border: '1px solid #21B98540',
              color: '#0F7A57',
            }}
          >
            <CheckCircle2 size={14} />
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700 }}>
              Callback ownership attached
            </div>
            <p
              className="mt-0.5 text-[#6F8190]"
              style={{ fontSize: '12px', lineHeight: 1.55 }}
            >
              Service team owns the call route · the right person follows up with context.
            </p>
          </div>
          <span
            className="text-[#9CA3B0] shrink-0"
            style={{ fontSize: '11px', fontWeight: 600 }}
          >
            Owned
          </span>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-6 pt-5 border-t" style={{ borderColor: '#EEF3F6' }}>
        <p className="text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
          Weekend and after-hours calls don&rsquo;t disappear into voicemail. They
          come back into the same handling, with the right person calling back.
        </p>
      </div>
    </div>
  );
}

function QuoteFollowupSurface() {
  const steps = [
    { label: 'Sent', sub: 'Owner attached', state: 'done' as const },
    { label: 'Soft chase', sub: 'Scheduled', state: 'done' as const },
    { label: 'Owner check', sub: 'This week', state: 'active' as const },
    { label: 'Decision', sub: 'Pending', state: 'pending' as const },
  ];
  return (
    <div>
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 mb-6 pb-5 border-b"
        style={{ borderColor: '#EEF3F6' }}
      >
        <div className="min-w-0">
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-1"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            Quote follow-up
          </div>
          <h3
            className="text-[#08111F]"
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 700,
              letterSpacing: '-0.012em',
              lineHeight: 1.2,
            }}
          >
            Quote sent — chase path visible
          </h3>
          <div
            className="mt-1 text-[#6F8190]"
            style={{ fontSize: '12.5px', fontWeight: 500 }}
          >
            Sent during working hours · quote owner attached
          </div>
        </div>
        <div className="shrink-0">
          <QuoteFollowupIllustration />
        </div>
      </div>

      {/* Horizontal proposal track */}
      <div className="relative mb-6 px-1">
        <div
          className="absolute left-2 right-2 top-[7px] h-px"
          style={{
            backgroundImage:
              'linear-gradient(to right, #21B985 0%, #21B985 33%, #F4B740 33%, #F4B740 50%, #C8D8E4 50%, #C8D8E4 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative grid grid-cols-4 gap-2">
          {steps.map((step, i) => {
            const isDone = step.state === 'done';
            const isActive = step.state === 'active';
            return (
              <div key={i} className="flex flex-col">
                <span
                  className="w-[14px] h-[14px] rounded-full flex items-center justify-center"
                  style={{
                    background: '#FFFFFF',
                    border: isDone
                      ? '2px solid #21B985'
                      : isActive
                        ? '2px solid #F4B740'
                        : '2px solid #C8D8E4',
                    boxShadow: isActive
                      ? '0 0 0 4px rgba(244,183,64,0.18)'
                      : isDone
                        ? '0 0 6px rgba(33,185,133,0.40)'
                        : 'none',
                  }}
                  aria-hidden="true"
                >
                  {isDone && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: '#21B985' }}
                    />
                  )}
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: '#F4B740' }}
                    />
                  )}
                </span>
                <div className="mt-2.5">
                  <div
                    className="text-[#0E2740]"
                    style={{ fontSize: '12px', fontWeight: 700 }}
                  >
                    {step.label}
                  </div>
                  <div
                    className="text-[#9CA3B0]"
                    style={{ fontSize: '10.5px', fontWeight: 500 }}
                  >
                    {step.sub}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Owner note — quiet, not a testimonial */}
      <div
        className="rounded-lg p-4"
        style={{ background: '#F9FCFD', border: '1px solid #EEF3F6' }}
      >
        <div
          className="text-[#9CA3B0] uppercase tracking-[0.12em] mb-1.5"
          style={{ fontSize: '9px', fontWeight: 700 }}
        >
          Owner note · this week
        </div>
        <p
          className="text-[#0E2740]"
          style={{ fontSize: '13px', fontWeight: 500, lineHeight: 1.55 }}
        >
          Spoke briefly — they are waiting on a decision. Re-scheduled the next check-in
          on a defined cadence. Quote stays open, not silently lost.
        </p>
      </div>

      {/* Footnote */}
      <div className="mt-6 pt-5 border-t" style={{ borderColor: '#EEF3F6' }}>
        <p className="text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
          Quotes don&rsquo;t drift into the weekend. Someone picks up the chase on a
          known pace, and the status stays visible to the owner.
        </p>
      </div>
    </div>
  );
}

function ConsultationIntakeSurface() {
  return (
    <div>
      {/* Header */}
      <div
        className="flex items-start justify-between gap-4 mb-6 pb-5 border-b"
        style={{ borderColor: '#EEF3F6' }}
      >
        <div className="min-w-0">
          <div
            className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-1"
            style={{ fontSize: '10px', fontWeight: 700 }}
          >
            Consultation request
          </div>
          <h3
            className="text-[#08111F]"
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
              fontWeight: 700,
              letterSpacing: '-0.012em',
              lineHeight: 1.2,
            }}
          >
            Consultation request — pre-visit context attached
          </h3>
          <div
            className="mt-1 text-[#6F8190]"
            style={{ fontSize: '12.5px', fontWeight: 500 }}
          >
            From a treatment page · practice enquiry route
          </div>
        </div>
        <div className="shrink-0">
          <ConsultationIntakeIllustration />
        </div>
      </div>

      {/* Three intake blocks */}
      <div className="space-y-3">
        <div
          className="rounded-lg p-4"
          style={{ background: '#FBF9FE', border: '1px solid #DCD0F0' }}
        >
          <div
            className="text-[#6B4FB8] uppercase tracking-[0.12em] mb-1.5"
            style={{ fontSize: '9.5px', fontWeight: 700 }}
          >
            Request arrived · during practice hours
          </div>
          <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700 }}>
            From the treatment page, with the pre-visit form filled in
          </div>
        </div>

        <div
          className="rounded-lg p-4"
          style={{ background: '#FFFFFF', border: '1px solid #EEF3F6' }}
        >
          <div className="flex items-center justify-between gap-3 mb-1.5">
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.12em]"
              style={{ fontSize: '9.5px', fontWeight: 700 }}
            >
              Briefed by the practice team
            </div>
            <span className="text-[#6B4FB8]" style={{ fontSize: '11px', fontWeight: 600 }}>
              Practice clinician
            </span>
          </div>
          <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700 }}>
            The right person on the practice team is briefed before scheduling — without sitting in a shared inbox.
          </div>
        </div>

        <div
          className="rounded-lg p-4"
          style={{
            background:
              'linear-gradient(to right, rgba(33,185,133,0.06), transparent)',
            border: '1px solid rgba(33,185,133,0.25)',
          }}
        >
          <div
            className="text-[#0F7A57] uppercase tracking-[0.12em] mb-1.5"
            style={{ fontSize: '9.5px', fontWeight: 700 }}
          >
            Pre-visit reminder · day before
          </div>
          <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700 }}>
            Appointment reminder and prep notes go out the day before the visit.
          </div>
        </div>
      </div>

      {/* Footnote */}
      <div className="mt-6 pt-5 border-t" style={{ borderColor: '#EEF3F6' }}>
        <p className="text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
          Consultation requests don&rsquo;t sit in a shared inbox waiting to be
          spotted. They reach the right person on the practice team with context attached.
        </p>
      </div>
    </div>
  );
}

function SectionHandling() {
  const [activeContact, setActiveContact] = useState<AfterContactKey>('form');

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
              Different ways in.{' '}
              <span className="text-[#4C5E6F]">
                The same handling around the website.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Most enquiries don&rsquo;t fail on the website. They fail in the hours
              and days after — when nobody is sure who picks them up, or when Monday
              depends on memory.
            </p>
          </div>
        </div>

        {/* Handling desk — side rail (col-4) + active surface (col-8) */}
        <div
          className="rounded-2xl bg-white overflow-hidden mb-6"
          style={{
            border: '1px solid #D0EFF4',
            boxShadow: '0 24px 64px rgba(20,184,166,0.10)',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Side rail */}
            <div
              className="lg:col-span-4 p-5 lg:p-6 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: '#EEF3F6', background: '#F9FCFD' }}
              role="tablist"
              aria-label="Contact paths"
            >
              <div
                className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-3 hidden lg:block"
                style={{ fontSize: '10px', fontWeight: 700 }}
              >
                Contact paths
              </div>
              <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible -mx-1 px-1 lg:mx-0 lg:px-0">
                {AFTER_CONTACT_PATHS.map(p => {
                  const Icon = p.icon;
                  const isActive = p.key === activeContact;
                  return (
                    <button
                      key={p.key}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveContact(p.key)}
                      className="relative rounded-lg text-left transition-colors shrink-0 lg:shrink"
                      style={{
                        background: isActive ? '#FFFFFF' : 'transparent',
                        border: isActive ? '1px solid #D0EFF4' : '1px solid transparent',
                        boxShadow: isActive ? '0 6px 16px rgba(20,184,166,0.10)' : 'none',
                        cursor: 'pointer',
                        padding: '10px 14px 10px 16px',
                      }}
                    >
                      <span
                        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                        style={{
                          background: isActive ? p.zoneColor : 'transparent',
                        }}
                        aria-hidden="true"
                      />
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={13} color={isActive ? p.zoneColor : '#6F8190'} />
                        <span
                          className="uppercase tracking-[0.14em]"
                          style={{
                            color: isActive ? p.zoneColor : '#9CA3B0',
                            fontSize: '9.5px',
                            fontWeight: 700,
                          }}
                        >
                          {p.qualifier}
                        </span>
                      </div>
                      <div
                        className="text-[#08111F]"
                        style={{ fontSize: '14px', fontWeight: 700, lineHeight: 1.3 }}
                      >
                        {p.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active surface — fixed min-height so switching tabs does not shift the page */}
            <div className="lg:col-span-8 p-6 lg:p-10 lg:min-h-[640px]">
              {activeContact === 'form' && <FormEnquirySurface />}
              {activeContact === 'call' && <CallRecoverySurface />}
              {activeContact === 'quote' && <QuoteFollowupSurface />}
              {activeContact === 'consultation' && <ConsultationIntakeSurface />}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — Five protections, one connected path (FULL DARK ANCHOR)
// Orbital constellation: SWS hub centered with 4 outer protections at
// top/right/bottom/left, connected by dashed SVG cross lines. Grid-texture
// overlay + radial cyan wash.
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
  label: 'Where the decision happens',
  note: 'Service, treatment, and procedure pages that explain the work clearly, build trust, and lead to a clear next step.',
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
      label: 'People find and verify you',
      note: 'Nearby customers and patients can find you and trust what they see before they pick up the phone.',
      accent: 'teal',
    },
    {
      icon: PhoneCall,
      name: 'Lead Response & Handling',
      label: 'The enquiry lands somewhere',
      note: 'Calls, forms, and messages reach the right person fast — and don’t disappear into voicemail after hours.',
      accent: 'amber',
    },
    {
      icon: Workflow,
      name: 'Follow-Up & CRM',
      label: 'Someone owns what happens next',
      note: 'Quotes, reminders, and consultation requests have a named person behind them and a clear next step.',
      accent: 'green',
    },
    {
      icon: Star,
      name: 'Reputation & Review',
      label: 'Good work becomes visible trust',
      note: 'Reviews and finished work return to the page where the next visitor decides — not buried in a folder.',
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
          The other four sit{' '}
          <span className="text-white">around this one</span> — working together, not
          sold separately.
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
              Five connected systems
            </div>
            <h2 className="text-white">
              Smart Website Systems at the centre.{' '}
              <span className="text-white/55">Four more systems built around it.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-white/65" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
              Not five services to buy separately. Five connected systems that work
              as one — held together by the website where the buyer already decides.
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
            Most businesses and clinics already have parts of this. The work is
            making them work as one.
          </div>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-white pb-1"
            style={{ fontSize: '13.5px', fontWeight: 600 }}
          >
            Request a Website Review
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
      n: '01',
      when: 'In the first weeks',
      title: 'The bleeding stops.',
      body:
        'Calls don’t vanish into voicemail. Saturday forms don’t sit unread. Quotes have a name behind them before the page closes.',
    },
    {
      n: '02',
      when: 'By the third month',
      title: 'Follow-up has a rhythm.',
      body:
        'Quotes get a polite chase without anyone remembering. Consultation requests reach the right person on the practice team without sitting in a shared inbox.',
    },
    {
      n: '03',
      when: 'By the sixth month',
      title: 'Good work shows up on the page.',
      body:
        'Recent reviews and finished jobs land next to the services they describe. The listing, the website, and the directories tell the same story.',
    },
    {
      n: '04',
      when: 'After the first year',
      title: 'The website gets sharper, not replaced.',
      body:
        'Real questions, objections, and patterns feed back into the pages and the handling. You don’t need a redesign — you keep what you have, working better.',
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
              <span className="text-[#4C5E6F]">
                Something that gets sharper with use.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Working with us isn&rsquo;t a relaunch with bigger numbers afterwards.
              The same calls, forms, and consultations come in — quietly less of it
              disappears, week by week.
            </p>
          </div>
        </div>

        {/* Two-column editorial spread */}
        <div className="grid grid-cols-12 gap-10 lg:gap-12">
          {/* LEFT — strengthened typographic anchor */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative lg:pl-5">
              <span
                className="hidden lg:block absolute left-0 top-1 bottom-3 w-[3px] rounded-full"
                style={{
                  background:
                    'linear-gradient(180deg, #21B985 0%, rgba(33,185,133,0.10) 100%)',
                }}
                aria-hidden="true"
              />
              <div
                className="text-[#08111F]"
                style={{
                  fontSize: 'clamp(26px, 2.8vw, 34px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.18,
                }}
              >
                The owner stops carrying the handoffs in their head.
              </div>
              <p
                className="mt-5 text-[#4C5E6F]"
                style={{ fontSize: '15.5px', lineHeight: 1.7 }}
              >
                The shift is rarely loud. Mondays start calmer. Friday quotes stop
                disappearing into the weekend. The website looks the same; what happens
                after it does not.
              </p>
            </div>

            {/* Quiet owner-view editorial note — descriptive, no testimonial */}
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
                Tuesday — because none of it is waiting to be remembered.
              </p>
            </div>
          </div>

          {/* RIGHT — four scannable editorial rows */}
          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-3">
              {phases.map((p, i) => (
                <div
                  key={i}
                  className="rounded-xl bg-white p-6 lg:p-7 flex items-start gap-5 lg:gap-7"
                  style={{
                    border: '1px solid #E6EEF3',
                    boxShadow: '0 3px 10px rgba(8,17,31,0.03)',
                  }}
                >
                  {/* Time-phase label column */}
                  <div className="shrink-0 hidden sm:block" style={{ width: '128px' }}>
                    <div
                      className="text-[#0F7A57]"
                      style={{
                        fontSize: '22px',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        lineHeight: 1,
                      }}
                    >
                      {p.n}
                    </div>
                    <div
                      className="mt-2 text-[#6F8190] uppercase tracking-[0.14em]"
                      style={{ fontSize: '9.5px', fontWeight: 700 }}
                    >
                      {p.when}
                    </div>
                  </div>

                  {/* Content column */}
                  <div className="min-w-0 flex-1">
                    {/* Mobile-only label inline */}
                    <div
                      className="sm:hidden mb-2 text-[#0F7A57] uppercase tracking-[0.14em]"
                      style={{ fontSize: '10px', fontWeight: 700 }}
                    >
                      {p.n} · {p.when}
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: '17px',
                        fontWeight: 700,
                        letterSpacing: '-0.012em',
                        lineHeight: 1.25,
                      }}
                    >
                      {p.title}
                    </div>
                    <p
                      className="mt-2 text-[#6F8190]"
                      style={{ fontSize: '13.5px', lineHeight: 1.65 }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

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
          example roofing page
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
            <span className="text-[#9A6F12]">Quote request path visible.</span>
          </div>
          <p
            className="mt-2 text-[#4C5E6F] max-w-[420px]"
            style={{ fontSize: '12.5px', lineHeight: 1.5 }}
          >
            Emergency tarp, repair, and full reroof. Local crew. Quote follows during
            working hours.
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
              Request a quote
              <ArrowRight size={11} />
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-[#0E2740]"
              style={{ fontSize: '11px', fontWeight: 600 }}
            >
              <PhoneCall size={10} color="#9A6F12" />
              Direct line
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
            className="ml-2 text-[#6F8190]"
            style={{ fontSize: '10.5px', fontWeight: 600 }}
          >
            Recent verified reviews · Local area covered
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1.5 text-[#0F7A57]"
          style={{ fontSize: '10px', fontWeight: 700 }}
        >
          <span className="w-1 h-1 rounded-full bg-[#21B985]" />
          Response path active
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
              Service team · call route
            </div>
            <div
              className="text-[#0F7A57] flex items-center gap-1"
              style={{ fontSize: '9.5px', fontWeight: 600 }}
            >
              <span className="w-1 h-1 rounded-full bg-[#21B985]" />
              On duty · named local area
            </div>
          </div>
        </div>

        {/* Conversation */}
        <div className="p-3 space-y-2">
          <div
            className="text-center text-[#9CA3B0]"
            style={{ fontSize: '9.5px', fontWeight: 600 }}
          >
            Missed call · after-hours
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
              Sorry we missed you — someone on the team has been notified. What can we help with?
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
              Burst pipe upstairs — fairly urgent.
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
              Passed through with your details. The right person on the team will follow up.
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
            Owner attached
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
          { label: 'Site visit', value: 'Completed during the working week' },
          { label: 'Findings', value: 'Settling at front bay; minor crack pattern' },
          { label: 'Recommended scope', value: 'Underpinning to bay; monitor adjacent' },
          { label: 'Validity', value: 'Stated on the proposal' },
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
          Quote owner · Principal engineer
        </div>
        <div
          className="mt-2 text-[#6F8190] flex items-center justify-between gap-2"
          style={{ fontSize: '9.5px', fontWeight: 600 }}
        >
          <span>Sent · with client</span>
          <span>Owner: chase scheduled</span>
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
          Consultation visit
        </div>
        <div
          className="mt-1 text-[#6F8190] flex items-center gap-2"
          style={{ fontSize: '10.5px', fontWeight: 600 }}
        >
          <Clock size={10} />
          Consultation availability shown
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
              'What the visit covers',
              'What to expect on the day',
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
            Practice clinician
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        className="px-4 py-2.5 border-t flex items-center justify-between"
        style={{ borderColor: '#EEF3F6', background: '#FCFEFE' }}
      >
        <span className="text-[#6F8190]" style={{ fontSize: '9.5px', fontWeight: 600 }}>
          Reminder · day before the visit
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
      copy: 'A burst-pipe call hits voicemail at 8am while the engineer is on another job. Without a callback line, it goes to whoever in the trade answers first. With one — a text goes out in seconds and the work stays.',
    },
    {
      surface: <FoundationSurface />,
      industry: 'Foundation repair',
      audience: 'Service business',
      tone: '#0E7D8C',
      dot: '#14B8A6',
      copy: 'Inspection happens Tuesday. The written proposal drifts to Friday. Without follow-up, the lead cools by Monday — and the insurer never gets the document. With it, the chase is paced and the status stays open.',
    },
    {
      surface: <DentalSurface />,
      industry: 'Dental implants',
      audience: 'Specialist clinic',
      tone: '#6B4FB8',
      dot: '#9B7DE0',
      copy: 'A nearby buyer compares three clinics on a Sunday. If the treatment page does not explain what the visit covers, what to expect, and indicative cost plainly, the consultation request goes elsewhere. If it does — and the practice team follows up — it stays.',
    },
    {
      surface: <DermatologySurface />,
      industry: 'Dermatology',
      audience: 'Specialist clinic',
      tone: '#0F7A57',
      dot: '#21B985',
      copy: 'Appointment kept. The communication experience landed well. Without a timed review request, the moment passes and the website never reflects it. With one, recent practice-experience reviews land beside the page that needs them.',
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
              Different services.{' '}
              <span className="text-[#4C5E6F]">Same kind of moment.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              Illustrative working-day moments across service businesses and specialist
              clinics. Same shape underneath — different pages, different patients,
              different jobs.
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
                same website looks busy on Monday, but half the work has gone elsewhere.
                With missed-call recovery, owned quote follow-up, and a listing that
                holds in a storm, fewer of those jobs disappear.
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
              What a page looks like
            </div>
            <h2 className="text-[#08111F]">
              The kind of pages{' '}
              <span className="text-[#4C5E6F]">we actually build.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              A real service page, written for a real local trade. Clear intent at the
              top, trust where the visitor is deciding, a call to action that matches
              what they came for, and a route back to the rest of the business.
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
                  Example service site
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
                Request a quote
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
                  NAMED LOCAL AREA
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
                  Boiler repair — quote path visible, not just a callback form.
                </div>
                <div
                  className="mt-2 text-[#4C5E6F]"
                  style={{ fontSize: '13.5px', lineHeight: 1.55 }}
                >
                  Registered. Local. Fixed-price quotes before any work starts.
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
                    className="ml-2 text-[#6F8190]"
                    style={{ fontSize: '11.5px', fontWeight: 600 }}
                  >
                    Recent verified reviews placed beside the CTA
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
                  {[
                    { label: 'Registered', icon: ShieldCheck },
                    { label: 'Local area covered', icon: MapPin },
                    { label: 'Insured', icon: CheckCircle2 },
                    { label: 'Response path active', icon: Clock },
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
                    Request a quote
                    <ArrowRight size={13} />
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5 text-[#0E2740]"
                    style={{ fontSize: '13px', fontWeight: 700 }}
                  >
                    <PhoneCall size={12} color="#0F7A57" />
                    Speak to the team
                  </span>
                </div>
                <div
                  className="mt-3 text-[#6F8190]"
                  style={{ fontSize: '12px', fontWeight: 500 }}
                >
                  Goes to the right person on the team — captured, owned, routed, and replied to with context.
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
                  Local area covered · response path active
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

        {/* One quiet supporting note — italic marginalia */}
        <p
          className="text-[#6F8190] mx-auto max-w-2xl text-center"
          style={{ fontSize: '14px', lineHeight: 1.7, fontStyle: 'italic' }}
        >
          An illustrative page, showing the kind of structure we build.
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
  'An established service business or specialist clinic with real activity already',
  'Real enquiries, jobs, appointments, or consultation requests already come in',
  'Quotes, bookings, or follow-up have visible gaps between them',
  'The owner wants practical structure, not a prettier website',
  'Long-term stability matters more than a launch event',
];

const FIT_NOT_FOR_LIST = [
  'Looking for the cheapest possible website',
  'Wanting guaranteed rankings or quick traffic promises',
  'Buying a chatbot or AI tool as the main offer',
  'Asking for a looks-only redesign with no business context',
  'Healthcare buyer needing EMR, clinical compliance, or treatment-outcome claims',
];

function SectionFit() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        {/* Header — heading + one concise paragraph (no right-side recognition panel) */}
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
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              We don&rsquo;t create demand from zero. We make sure the demand you
              already have stops slipping before it becomes paid work or a kept
              appointment. Honest both ways — who this is for, and who it isn&rsquo;t.
            </p>
          </div>
        </div>

        {/* Two authoritative columns — Strong fit / Probably not right */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {/* STRONG FIT — calmer teal palette, left accent rail, no bright mint */}
          <div
            className="col-span-12 lg:col-span-7 relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FBF8 100%)',
              border: '1px solid #C9EDDB',
              boxShadow: '0 16px 40px rgba(33,185,133,0.10)',
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: 'linear-gradient(180deg, #21B985, #0F7A57)' }}
              aria-hidden="true"
            />

            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(33,185,133,0.10)',
                    border: '1px solid rgba(33,185,133,0.35)',
                    color: '#0F7A57',
                  }}
                >
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <div
                    className="text-[#0F7A57] uppercase tracking-[0.16em]"
                    style={{ fontSize: '10.5px', fontWeight: 700 }}
                  >
                    Strong fit
                  </div>
                  <div
                    className="text-[#08111F]"
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      letterSpacing: '-0.012em',
                      lineHeight: 1.25,
                    }}
                  >
                    When this is the right work
                  </div>
                </div>
              </div>

              <ul className="divide-y" style={{ borderColor: '#E1F0E9' }}>
                {FIT_FOR_LIST.map(f => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                    style={{ borderColor: '#E1F0E9' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#21B985] shrink-0 mt-2"
                      style={{ boxShadow: '0 0 6px rgba(33,185,133,0.50)' }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[#0E2E2A]"
                      style={{ fontSize: '14.5px', lineHeight: 1.55, fontWeight: 500 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* PROBABLY NOT RIGHT — respectful slate palette, same dimensional treatment */}
          <div
            className="col-span-12 lg:col-span-5 relative rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #FFFFFF 0%, #F6F8FA 100%)',
              border: '1px solid #DDE2E8',
              boxShadow: '0 12px 32px rgba(8,17,31,0.05)',
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: 'linear-gradient(180deg, #9CA3B0, #6F8190)' }}
              aria-hidden="true"
            />

            <div className="p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(111,129,144,0.10)',
                    border: '1px solid rgba(111,129,144,0.35)',
                    color: '#6F8190',
                  }}
                >
                  <Minus size={16} strokeWidth={3} />
                </div>
                <div>
                  <div
                    className="text-[#6F8190] uppercase tracking-[0.16em]"
                    style={{ fontSize: '10.5px', fontWeight: 700 }}
                  >
                    Probably not right
                  </div>
                  <div
                    className="text-[#08111F]"
                    style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      letterSpacing: '-0.012em',
                      lineHeight: 1.25,
                    }}
                  >
                    When to say so early
                  </div>
                </div>
              </div>

              <ul className="divide-y" style={{ borderColor: '#E6EAEF' }}>
                {FIT_NOT_FOR_LIST.map(f => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                    style={{ borderColor: '#E6EAEF' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#9CA3B0] shrink-0 mt-2"
                      aria-hidden="true"
                    />
                    <span
                      className="text-[#4C5E6F]"
                      style={{ fontSize: '14px', lineHeight: 1.55 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-6 pt-5 border-t text-[#6F8190]"
                style={{
                  borderColor: '#E6EAEF',
                  fontSize: '12px',
                  lineHeight: 1.55,
                }}
              >
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
// SECTION 11 — Practical review (consultation feel)
// A single premium invitation panel. Two inner columns: what gets reviewed
// together, and what the owner walks away with. No status chips, no numbered
// steps, no dashboard chrome — this is a working conversation, not a process
// deck.
// ============================================================================

type ReviewLine = { label: string; note: string };

const REVIEW_AREAS: ReadonlyArray<ReviewLine> = [
  {
    label: 'The actual website',
    note:
      'Service or treatment pages, how clearly they answer the real question, and whether the next step is obvious.',
  },
  {
    label: 'Local visibility and trust',
    note:
      'Whether nearby customers and patients can find you, recognise you, and decide to trust you before they enquire.',
  },
  {
    label: 'Where enquiries actually arrive',
    note:
      'Where calls, forms, and consultation requests end up — and whether anyone is sure who replies first.',
  },
  {
    label: 'First response and follow-up',
    note:
      'How fast the first reply goes out, and whether quotes, reminders, and consultations get chased on a real cadence.',
  },
  {
    label: 'Reviews and visible work',
    note:
      'Whether finished jobs and kept appointments become reviews and references on the pages that need them.',
  },
];

type Deliverable = { title: string; body: string };

const REVIEW_DELIVERABLES: ReadonlyArray<Deliverable> = [
  {
    title: 'A clear picture of where work is slipping',
    body:
      'Not a generic audit. Specific pages, specific moments — written so the owner can read it and act on it.',
  },
  {
    title: 'A short list of what to fix first',
    body:
      'The two or three changes that protect the most enquiries for the least disruption. Ranked, not exhaustive.',
  },
  {
    title: 'A practical plan for what to rebuild and what to connect',
    body:
      'What needs new structure. What only needs wiring. Honest about what is worth doing — and what is not.',
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
              A short working session with the owner or practice manager. We look at
              the actual website and what happens after the enquiry — calmly, with
              real specifics. No discovery deck. No three-step ritual.
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
                Five things, in plain conversation.
              </h3>
              <p
                className="mt-3 text-[#4C5E6F]"
                style={{ fontSize: '14px', lineHeight: 1.6 }}
              >
                We walk through them together on a call. Real examples from your
                business — not generic audit talk.
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
                  Practical and useful whether you work with us afterwards or not. No
                  pitch deck. No sales chase. No upsell.
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
    a: 'Conversion-focused websites for established service businesses and specialist clinics — plus what happens around the website after someone contacts you. Calls, forms, quote requests, and consultation requests get answered, picked up by name, followed up, and turned into reviews.',
  },
  {
    q: 'How is this different from getting a new website?',
    a: 'A website shows the business. What we build also makes sure the enquiry gets to the right person, gets a reply, and gets a follow-up. The site is the visible part. The rest is what stops good enquiries from quietly disappearing.',
  },
  {
    q: 'We already have a website. Do we need a rebuild?',
    a: 'Not always. We start by looking at what you already have, finding where work slips, and putting the missing pieces in place around it. Sometimes the website needs rebuilding. Often it just needs reshaping and connecting.',
  },
  {
    q: 'Is SEO included?',
    a: 'Local visibility is part of how the website works — not a separate package. The site, the Google Business Profile, the service or treatment pages, and the reviews need to tell the same story to nearby customers. That is what we build, and what we keep maintained.',
  },
  {
    q: 'What about missed calls and follow-up?',
    a: 'Missed-call recovery sits with Lead Response & Handling — a same-line text goes back while the enquiry is still fresh, and the right person on the team follows up. Quote follow-up and consultation reminders sit with Follow-Up & CRM — paced chasing, not memory.',
  },
  {
    q: 'What kind of businesses is this for?',
    a: 'Established service businesses and specialist clinics where work already comes in, the value of each job or appointment is real, and the handling between the call and the booked work has visible gaps.',
  },
  {
    q: 'How long before we see results?',
    a: 'Fewer missed enquiries once the response paths are in place. A calmer working week as ownership and follow-up settle in. The compounding takes longer — that is the point.',
  },
  {
    q: 'How do we start?',
    a: 'A short review of your website and what happens after the enquiry. We tell you where work is slipping and what to fix first — whether you work with us or not.',
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
  { num: '01', text: 'The website — how clearly each page carries the decision' },
  { num: '02', text: 'Local visibility — whether nearby buyers find and trust you' },
  { num: '03', text: 'First response — what gets answered and what slips' },
  { num: '04', text: 'Follow-up — who owns the next step after the reply' },
  { num: '05', text: 'Reviews — where good work becomes visible proof' },
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
                If the website isn&rsquo;t carrying enquiries properly,{' '}
                <span className="text-white/55">it is worth a look.</span>
              </h2>

              <p
                className="mt-6 text-white/65 max-w-[540px]"
                style={{ fontSize: '16.5px', lineHeight: 1.65 }}
              >
                Let&rsquo;s look at your website and what happens after the enquiry —
                together. How people find you, whether they trust what they see, where
                the call or form arrives, and what happens in the days after.
              </p>

              <a
                href="#"
                className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                Request a Website Review
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.07] border border-white/16 p-8 backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div
                  className="text-white/55 uppercase tracking-[0.14em] mb-2"
                  style={{ fontSize: '10.5px', fontWeight: 600 }}
                >
                  What we will look at — across the five systems
                </div>
                <div
                  className="text-white/55 mb-5"
                  style={{ fontSize: '12.5px', lineHeight: 1.5 }}
                >
                  Website, local visibility, response, follow-up, and reviews — read together, not in isolation.
                </div>
                <div className="space-y-2.5">
                  {CTA_EXPECTATIONS.map(s => (
                    <div
                      key={s.num}
                      className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.06] border border-white/10"
                    >
                      <span
                        className="text-[#35C7D8] shrink-0"
                        style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}
                      >
                        {s.num}
                      </span>
                      <span
                        className="text-white/90"
                        style={{ fontSize: '14px', lineHeight: 1.45 }}
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
