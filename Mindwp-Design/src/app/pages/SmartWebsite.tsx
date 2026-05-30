/**
 * SmartWebsite.tsx — MindWP design-sandbox Smart Website Systems page
 *
 * Flagship service-page render. Lead is the website itself: service and
 * treatment pages, clarity, trust placement, local relevance, conversion
 * paths, proof, and implementation quality. Connected handling sits as an
 * edge of the website system, not the spine.
 *
 * Section arc:
 *  01  Hero — flagship positioning, premium service/treatment page surface
 *  02  Two kinds of website — editorial before/after panels with page silhouettes
 *  03  What Smart Website Systems include — six responsibilities, not features
 *  04  Page craft as a decision stack — editorial 5-row stack + illustrative page-anatomy panel
 *  05  Built for different visitor intents — two grouped panels (urgent / considered)
 *  06  Connected handling edge — light bridge, not the story
 *  07  Trust placement — editorial vertical spine with five trust placements
 *  08  Implementation pathways — WP, Elementor, Bricks, Divi 5, WooCommerce, rebuild
 *  09  What changes after launch — outcomes without fake metrics
 *  10  Fit / Not Fit — qualification panel
 *  11  FAQ — six SWS-specific questions, accordion
 *  12  Website System Review CTA — diagnostic close
 *
 * Voice + content per the project writing rules. No fake clients, no fake
 * metrics, no testimonials, no ranking promises, no treatment-outcome claims.
 */
import { useState, type CSSProperties } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Clock,
  Compass,
  FileText,
  Layers,
  MapPin,
  Minus,
  PhoneCall,
  Plus,
  Repeat,
  ShieldCheck,
  Stars,
  Star,
} from 'lucide-react';

type Page =
  | 'home'
  | 'sws'
  | 'lsa'
  | 'ai-lead-handling'
  | 'follow-up-crm'
  | 'reviews'
  | 'industries'
  | 'landscaping'
  | 'fitness-case'
  | 'resource'
  | 'blog'
  | 'wordpress'
  | 'elementor'
  | 'bricks'
  | 'divi'
  | 'rebuild'
  | 'woocommerce';

// ============================================================================
// SECTION 01 — Hero / flagship positioning
// Premium service/treatment page surface — not a signal dashboard.
// ============================================================================

function SectionHero() {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 12% 18%, #35C7D8 0%, transparent 45%), radial-gradient(ellipse at 95% 90%, #14B8A6 0%, transparent 50%)',
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

      <div className="container relative grid grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span
              className="text-white/85 uppercase tracking-[0.16em]"
              style={{ fontSize: '10.5px', fontWeight: 700 }}
            >
              Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: '-0.022em' }}>
            A better website is not just a better-looking page.
            <br className="hidden sm:block" />
            <span className="text-white/45"> It carries the decision.</span>
          </h1>

          <p
            className="mt-8 text-white/70 max-w-[620px]"
            style={{ fontSize: '18px', lineHeight: 1.6 }}
          >
            Smart Website Systems are built for established service businesses
            and specialist clinics where the website has to clarify what you
            do, build confidence, capture intent, and connect the next step —
            not just sit online and look modern.
          </p>

          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: '15px', fontWeight: 600 }}
            >
              Review my website system
              <ArrowRight size={16} />
            </a>
            <a
              href="#what-it-includes"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
              style={{ fontSize: '14px', fontWeight: 500 }}
            >
              See what is inside
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-3 max-w-xl">
            {[
              'Service & treatment pages',
              'Trust where decisions happen',
              'Intent-matched calls to action',
              'Local relevance, area by area',
            ].map(label => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                <span className="text-white/75" style={{ fontSize: '12.5px', fontWeight: 500 }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 relative">
          <div className="absolute -inset-8 rounded-full bg-[#35C7D8]/[0.08] blur-3xl pointer-events-none" />
          <HeroTreatmentPage />
        </div>
      </div>
    </section>
  );
}

function HeroTreatmentPage() {
  return (
    <div className="relative w-full">
      <div
        className="relative rounded-2xl overflow-hidden bg-white"
        style={{
          border: '1px solid rgba(255,255,255,0.18)',
          boxShadow: '0 40px 96px rgba(0,0,0,0.45), 0 0 0 1px rgba(53,199,216,0.08)',
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
            /services/specialist-consultation
          </span>
        </div>

        {/* Hero zone */}
        <div className="p-7 lg:p-9 space-y-5">
          <div
            className="rounded-xl p-6"
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
              NAMED LOCAL AREA · SPECIALIST PRACTICE
            </div>
            <div
              className="text-[#08111F]"
              style={{
                fontSize: 'clamp(20px, 2vw, 26px)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.018em',
              }}
            >
              Specialist consultation — what the visit covers and what to expect.
            </div>
            <div
              className="mt-2 text-[#4C5E6F]"
              style={{ fontSize: '13.5px', lineHeight: 1.55 }}
            >
              What the consultation includes, what to bring, and the next steps
              after the visit.
            </div>
          </div>

          {/* Trust band — sits near the decision point */}
          <div
            className="rounded-xl p-5"
            style={{
              background: 'rgba(20,184,166,0.07)',
              border: '1px solid rgba(20,184,166,0.25)',
            }}
          >
            <div className="flex items-center gap-1.5 mb-3 flex-wrap">
              {[0, 1, 2, 3, 4].map(i => (
                <Star key={i} size={11} fill="#F4B740" color="#F4B740" />
              ))}
              <span className="ml-2 text-[#6F8190]" style={{ fontSize: '11px', fontWeight: 600 }}>
                Recent practice-experience reviews
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { label: 'Registered practice', icon: ShieldCheck },
                { label: 'Consultation availability shown', icon: Clock },
                { label: 'Local area covered', icon: MapPin },
              ].map(t => {
                const Icon = t.icon;
                return (
                  <span
                    key={t.label}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white"
                    style={{
                      border: '1px solid #D0EFF4',
                      color: '#0E7D8C',
                      fontSize: '11px',
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

          {/* CTA + context handoff cue */}
          <div
            className="rounded-xl p-5"
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
                Request a consultation
                <ArrowRight size={13} />
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[#0E2740]"
                style={{ fontSize: '12.5px', fontWeight: 700 }}
              >
                <PhoneCall size={11} color="#0F7A57" />
                Direct line to the practice
              </span>
            </div>
            <div
              className="mt-3 text-[#6F8190]"
              style={{ fontSize: '11.5px', fontWeight: 500 }}
            >
              Reaches the practice coordinator — page, area, and reason
              attached.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// SECTION 02 — Two kinds of website
// Editorial before/after composition. Two side-by-side panels with stylised
// page silhouettes (not browser chrome). Faster contrast than a table.
// ============================================================================

const EXISTS_TRAITS = [
  'Generic hero — the same headline a competitor could run tomorrow.',
  'Trust hidden on a separate page nobody opens.',
  'One contact button doing every job on every page.',
  'Forms post into an inbox with no page or area attached.',
];

const CARRIES_TRAITS = [
  'Hero names the service, the place, and the next step.',
  'Reviews and credentials placed beside the call to action.',
  'CTA written for the page — quote, consultation, callback.',
  'Each enquiry arrives with its page, area, and reason.',
];

function ExistsPageSilhouette() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Page frame */}
      <rect x="4" y="4" width="312" height="192" rx="8" fill="#FFFFFF" stroke="#E6EAEF" strokeWidth="1.5" />
      {/* Header bar */}
      <rect x="14" y="14" width="292" height="14" rx="3" fill="#F2F5F7" />
      <rect x="20" y="18" width="40" height="6" rx="2" fill="#DDE2E8" />
      <rect x="260" y="18" width="38" height="6" rx="3" fill="#DDE2E8" />
      {/* Hero — vague */}
      <rect x="20" y="42" width="220" height="14" rx="3" fill="#E6EAEF" />
      <rect x="20" y="62" width="170" height="8" rx="2" fill="#EEF3F6" />
      <rect x="20" y="76" width="130" height="8" rx="2" fill="#EEF3F6" />
      {/* Generic CTA */}
      <rect x="20" y="96" width="68" height="18" rx="5" fill="#DDE2E8" />
      <rect x="30" y="103" width="48" height="4" rx="2" fill="#9CA3B0" opacity="0.5" />
      {/* One content block — thin */}
      <rect x="20" y="128" width="280" height="56" rx="6" fill="#F6F8FA" stroke="#EEF3F6" strokeWidth="1" />
      <line x1="32" y1="142" x2="226" y2="142" stroke="#DDE2E8" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="154" x2="180" y2="154" stroke="#E6EAEF" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="32" y1="166" x2="208" y2="166" stroke="#E6EAEF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CarriesPageSilhouette() {
  return (
    <svg
      viewBox="0 0 320 200"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Page frame */}
      <rect x="4" y="4" width="312" height="192" rx="8" fill="#FFFFFF" stroke="#D0EFF4" strokeWidth="1.5" />
      {/* Header bar */}
      <rect x="14" y="14" width="292" height="14" rx="3" fill="#F4FBFC" />
      <rect x="20" y="18" width="46" height="6" rx="2" fill="#08111F" />
      <rect x="262" y="17" width="36" height="8" rx="3" fill="#08111F" />
      {/* Intent pill */}
      <rect x="20" y="38" width="56" height="9" rx="4.5" fill="#FFFFFF" stroke="#0E7D8C" strokeWidth="1" />
      {/* Hero — named */}
      <rect x="20" y="54" width="244" height="14" rx="3" fill="#08111F" />
      <rect x="20" y="74" width="170" height="8" rx="2" fill="#4C5E6F" opacity="0.55" />
      {/* Trust band with stars + chips */}
      <rect x="20" y="94" width="280" height="24" rx="6" fill="#E6F8F5" stroke="#14B8A6" strokeWidth="1" strokeOpacity="0.4" />
      {[30, 38, 46, 54, 62].map(x => (
        <path
          key={x}
          d={`M ${x} 104 L ${x + 1.6} 107 L ${x + 4.6} 107.6 L ${x + 2.4} 109.8 L ${x + 3} 112.6 L ${x} 111 L ${x - 3} 112.6 L ${x - 2.4} 109.8 L ${x - 4.6} 107.6 L ${x - 1.6} 107 Z`}
          fill="#F4B740"
        />
      ))}
      <rect x="80" y="103" width="38" height="10" rx="5" fill="#FFFFFF" stroke="#0E7D8C" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="124" y="103" width="44" height="10" rx="5" fill="#FFFFFF" stroke="#0E7D8C" strokeWidth="0.8" strokeOpacity="0.4" />
      <rect x="174" y="103" width="48" height="10" rx="5" fill="#FFFFFF" stroke="#0E7D8C" strokeWidth="0.8" strokeOpacity="0.4" />
      {/* CTA band */}
      <rect x="20" y="128" width="116" height="24" rx="6" fill="#08111F" />
      <rect x="32" y="138" width="62" height="5" rx="2.5" fill="#35C7D8" />
      <rect x="146" y="134" width="64" height="6" rx="2" fill="#0F7A57" opacity="0.55" />
      <rect x="146" y="144" width="84" height="5" rx="2" fill="#0F7A57" opacity="0.4" />
      {/* Local footer */}
      <rect x="20" y="162" width="280" height="22" rx="5" fill="#F4FBFC" stroke="#D0EFF4" strokeWidth="1" />
      <rect x="32" y="170" width="68" height="6" rx="2" fill="#0E7D8C" opacity="0.7" />
      <rect x="184" y="170" width="84" height="6" rx="2" fill="#4C5E6F" opacity="0.5" />
    </svg>
  );
}

function SectionWhyFails() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="text-center mx-auto max-w-3xl">
          <div
            className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 700 }}
          >
            Two kinds of website
          </div>
          <h2 className="text-[#08111F]">
            A website that exists{' '}
            <span className="text-[#4C5E6F]">
              is not the same as a website that carries the decision.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto max-w-2xl"
            style={{ fontSize: '16px', lineHeight: 1.65 }}
          >
            Most websites for established service businesses and clinics look
            fine at a glance. They are quietly thin in the places that actually
            matter — and visitors read that thinness before they ever fill in a
            form.
          </p>
        </div>

        {/* Two editorial panels, side by side */}
        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — Exists */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-2xl p-8 lg:p-10 relative overflow-hidden flex flex-col"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F2F5F7 100%)',
                border: '1px solid #DDE2E8',
                boxShadow: '0 8px 28px rgba(8,17,31,0.04)',
              }}
            >
              <div
                className="text-[#6F8190] uppercase tracking-[0.18em] mb-3"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                A website that exists
              </div>
              <div
                className="text-[#08111F] mb-7"
                style={{
                  fontSize: 'clamp(22px, 2.3vw, 28px)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  lineHeight: 1.18,
                }}
              >
                Online.{' '}
                <span className="text-[#9CA3B0]">Just sitting there.</span>
              </div>

              <div className="opacity-90">
                <ExistsPageSilhouette />
              </div>

              <ul className="mt-8 space-y-3.5">
                {EXISTS_TRAITS.map(t => (
                  <li
                    key={t}
                    className="flex items-start gap-3 text-[#6F8190]"
                    style={{ fontSize: '13.5px', lineHeight: 1.6 }}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#9CA3B0] mt-2 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Carries the decision */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-2xl p-8 lg:p-10 relative overflow-hidden flex flex-col"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 0%, #F4FBFC 100%)',
                border: '1px solid #C6E8EF',
                boxShadow: '0 16px 44px rgba(53,199,216,0.10)',
              }}
            >
              <div
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
                style={{ background: 'rgba(53,199,216,0.10)', filter: 'blur(50px)' }}
                aria-hidden="true"
              />
              <div className="relative flex flex-col flex-1">
                <div
                  className="text-[#0E7D8C] uppercase tracking-[0.18em] mb-3"
                  style={{ fontSize: '10.5px', fontWeight: 700 }}
                >
                  A website that carries the decision
                </div>
                <div
                  className="text-[#08111F] mb-7"
                  style={{
                    fontSize: 'clamp(22px, 2.3vw, 28px)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.18,
                  }}
                >
                  Reading the visitor.{' '}
                  <span className="text-[#0E7D8C]">Earning the next step.</span>
                </div>

                <CarriesPageSilhouette />

                <ul className="mt-8 space-y-3.5">
                  {CARRIES_TRAITS.map(t => (
                    <li
                      key={t}
                      className="flex items-start gap-3 text-[#0E2740]"
                      style={{ fontSize: '14px', lineHeight: 1.6, fontWeight: 500 }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0"
                        style={{ boxShadow: '0 0 6px rgba(53,199,216,0.5)' }}
                      />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-[#4C5E6F] max-w-2xl"
          style={{ fontSize: '14.5px', lineHeight: 1.65 }}
        >
          A modern look is the easy part.{' '}
          <span className="text-[#08111F] font-medium">
            What carries the decision is the writing, the trust, and the order
            of the page.
          </span>
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 03 — What Smart Website Systems include
// Six responsibilities, not a feature list. Premium architecture feel.
// ============================================================================

type Responsibility = {
  n: string;
  icon: typeof FileText;
  tone: string;
  title: string;
  body: string;
  detail: string;
};

const RESPONSIBILITIES: ReadonlyArray<Responsibility> = [
  {
    n: '01',
    icon: FileText,
    tone: '#0E7D8C',
    title: 'Service and treatment clarity',
    body:
      'A real page per service or treatment, written to answer the question that brought the visitor — not a sub-bullet on a list.',
    detail:
      'What it is, who it is for, what happens, what to expect, what it costs in the broadest sense, and what to do next.',
  },
  {
    n: '02',
    icon: MapPin,
    tone: '#14B8A6',
    title: 'Local trust and area relevance',
    body:
      'Area-aware pages, named neighbourhoods, and visible signs that the business is real and nearby.',
    detail:
      'Service-area cues on the page, consistent listing details, and area-specific content where the work is actually done.',
  },
  {
    n: '03',
    icon: ArrowRight,
    tone: '#35C7D8',
    title: 'Intent-matched calls to action',
    body:
      'Each page asks for the next step that actually fits — not the same generic "contact us" everywhere.',
    detail:
      'Quote, consultation, booking, callback, emergency line — written for the page and the visitor reading it.',
  },
  {
    n: '04',
    icon: Layers,
    tone: '#0F7A57',
    title: 'Enquiry capture with context',
    body:
      'Forms and calls arrive already explained — the page, area, and reason travel with the contact.',
    detail:
      'No more "where did this come from?" between the front desk and the owner. Context attached at source.',
  },
  {
    n: '05',
    icon: ShieldCheck,
    tone: '#9A6F12',
    title: 'Proof and review placement',
    body:
      'Reviews, credentials, and finished work placed near the moments of hesitation, not buried on a side page.',
    detail:
      'Trust shows up beside the call to action — where the visitor is deciding whether to act.',
  },
  {
    n: '06',
    icon: Repeat,
    tone: '#6F8190',
    title: 'Connected next-step handoff',
    body:
      'The website does not run the business — but it hands the enquiry forward with everything the next step needs.',
    detail:
      'A clean bridge into the rest of the response, follow-up, and review work that lives elsewhere.',
  },
];

function SectionWhatItIncludes() {
  return (
    <section id="what-it-includes" className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              What is inside
            </div>
            <h2 className="text-[#08111F]">
              Six things the website is responsible for{' '}
              <span className="text-[#4C5E6F]">
                — not six things on a feature list.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              A Smart Website System is defined by what the website has to do
              for visitors and the business — not by the page count, the
              template, or the builder underneath.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {RESPONSIBILITIES.map(r => {
            const Icon = r.icon;
            return (
              <div
                key={r.n}
                className="rounded-2xl bg-white overflow-hidden h-full flex flex-col"
                style={{
                  border: '1px solid #E6EEF3',
                  boxShadow: '0 10px 28px rgba(8,17,31,0.05)',
                }}
              >
                <div className="h-1" style={{ background: r.tone }} aria-hidden="true" />

                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-[#9CA3B0] tabular-nums"
                      style={{ fontSize: '12.5px', fontWeight: 700, letterSpacing: '0.06em' }}
                    >
                      {r.n}
                    </span>
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${r.tone}10`,
                        border: `1px solid ${r.tone}33`,
                        color: r.tone,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div
                    className="text-[#08111F] mb-3"
                    style={{
                      fontSize: '18.5px',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      letterSpacing: '-0.012em',
                    }}
                  >
                    {r.title}
                  </div>

                  <p
                    className="text-[#4C5E6F]"
                    style={{ fontSize: '13.5px', lineHeight: 1.65 }}
                  >
                    {r.body}
                  </p>

                  <div
                    className="mt-5 pt-5 text-[#6F8190]"
                    style={{
                      borderTop: '1px dashed #E6EEF3',
                      fontSize: '12.5px',
                      lineHeight: 1.55,
                    }}
                  >
                    {r.detail}
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
// SECTION 04 — Page craft as a decision stack
// Two-column composition. Left: editorial decision-stack rows (5 layers).
// Right: compact illustrative page-anatomy panel — no browser chrome, no
// fake brand or URL. Numbered tags pair the two sides across the divide.
// ============================================================================

type DecisionLayer = {
  n: string;
  stage: string;
  visitorQ: string;
  pageTitle: string;
  pageBody: string;
  tone: string;
  bg: string;
  accent: string;
};

const DECISION_LAYERS: ReadonlyArray<DecisionLayer> = [
  {
    n: '01',
    stage: 'Intent',
    visitorQ: 'What is this, and is it for me?',
    pageTitle: 'An intent-led hero, not a slogan.',
    pageBody:
      'The page names the service or treatment, the place, and the next step in plain language — above the fold, on the first read.',
    tone: '#0E7D8C',
    bg: 'linear-gradient(135deg, rgba(53,199,216,0.09), rgba(53,199,216,0.02))',
    accent: 'rgba(53,199,216,0.30)',
  },
  {
    n: '02',
    stage: 'Explanation',
    visitorQ: 'Will it actually answer my real question?',
    pageTitle: 'A real answer block — not a paragraph and a stock photo.',
    pageBody:
      'What it is, who it is for, what happens, and what to expect — written for the visitor who already searched the question.',
    tone: '#4C5E6F',
    bg: 'linear-gradient(135deg, rgba(8,17,31,0.04), rgba(8,17,31,0.01))',
    accent: 'rgba(8,17,31,0.14)',
  },
  {
    n: '03',
    stage: 'Trust',
    visitorQ: 'Can I trust them with this?',
    pageTitle: 'Trust placed beside the moment of hesitation.',
    pageBody:
      'Reviews, registrations, and finished work sit beside the call to action — not on a side page nobody opens.',
    tone: '#0F7A57',
    bg: 'linear-gradient(135deg, rgba(20,184,166,0.09), rgba(20,184,166,0.02))',
    accent: 'rgba(20,184,166,0.30)',
  },
  {
    n: '04',
    stage: 'Next step',
    visitorQ: 'What do I actually do now?',
    pageTitle: 'A matched call to action, written for this page.',
    pageBody:
      'Quote, consultation, callback, booking, or emergency line — not a generic "contact us" button shared across the whole site.',
    tone: '#08111F',
    bg: 'linear-gradient(135deg, rgba(33,185,133,0.09), rgba(33,185,133,0.02))',
    accent: 'rgba(33,185,133,0.30)',
  },
  {
    n: '05',
    stage: 'Local relevance',
    visitorQ: 'Are they actually near me?',
    pageTitle: 'Real local cues, not a postcode in the footer.',
    pageBody:
      'Service area named on the page, related work for nearby decisions, and listings that match what the page says.',
    tone: '#9A6F12',
    bg: 'linear-gradient(135deg, rgba(244,183,64,0.10), rgba(244,183,64,0.02))',
    accent: 'rgba(244,183,64,0.30)',
  },
];

function SectionPageCraft() {
  return (
    <section className="section bg-page-mist">
      <div className="container">
        {/* Two-column composition: left holds the framing copy and the
            supporting page-anatomy artifact (below the description); right
            holds the decision-stack reading list. */}
        <div className="relative grid grid-cols-12 gap-10 lg:gap-14 items-start">
          <div
            className="absolute -inset-10 rounded-[40px] pointer-events-none hidden lg:block"
            style={{
              background:
                'radial-gradient(ellipse at 25% 30%, rgba(53,199,216,0.10), transparent 65%)',
              filter: 'blur(60px)',
            }}
            aria-hidden="true"
          />

          {/* LEFT — eyebrow, title, description, then the page-anatomy artifact */}
          <div className="relative col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
                style={{ fontSize: '11.5px', fontWeight: 700 }}
              >
                How a single page earns the next step
              </div>
              <h2 className="text-[#08111F]">
                A service or treatment page{' '}
                <span className="text-[#4C5E6F]">
                  is a decision stack, not a brochure.
                </span>
              </h2>
              <p
                className="mt-6 text-[#4C5E6F]"
                style={{ fontSize: '16px', lineHeight: 1.65 }}
              >
                Visitors do not read a page top to bottom. They drop in already
                asking specific questions. A serious service page answers those
                questions in the order they get asked — and shows the answer in
                the place it belongs on the page.
              </p>

              <div className="mt-10">
                <div
                  className="text-[#9CA3B0] uppercase tracking-[0.16em] mb-3"
                  style={{ fontSize: '10.5px', fontWeight: 700 }}
                >
                  One page, five layers
                </div>
                <PageAnatomyPanel />
                <p
                  className="mt-5 text-[#6F8190]"
                  style={{ fontSize: '12.5px', fontStyle: 'italic' }}
                >
                  An illustrative page anatomy — the same five layers, shown as
                  page sections.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — decision stack reading list */}
          <div className="relative col-span-12 lg:col-span-7">
            <ul className="relative">
              <span
                className="absolute left-[23px] top-3 bottom-3 w-px hidden md:block"
                style={{
                  backgroundImage:
                    'linear-gradient(to bottom, transparent, #C6E8EF 10%, #C6E8EF 90%, transparent)',
                }}
                aria-hidden="true"
              />
              {DECISION_LAYERS.map((layer, i) => (
                <li
                  key={layer.n}
                  className="relative py-6 lg:py-7 first:pt-0"
                  style={
                    i < DECISION_LAYERS.length - 1
                      ? { borderBottom: '1px dashed #DDE6EC' }
                      : undefined
                  }
                >
                  <div className="flex items-start gap-5">
                    <span
                      className="relative shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: '#08111F',
                        color: '#35C7D8',
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        boxShadow: `0 0 0 4px ${layer.accent}, 0 8px 20px rgba(8,17,31,0.18)`,
                      }}
                    >
                      {layer.n}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className="uppercase tracking-[0.16em]"
                        style={{ color: layer.tone, fontSize: '10.5px', fontWeight: 700 }}
                      >
                        {layer.stage}
                      </div>
                      <div
                        className="mt-1.5 text-[#4C5E6F]"
                        style={{ fontSize: '13.5px', lineHeight: 1.55, fontStyle: 'italic' }}
                      >
                        &ldquo;{layer.visitorQ}&rdquo;
                      </div>
                      <div
                        className="mt-3 text-[#08111F]"
                        style={{
                          fontSize: '17px',
                          fontWeight: 700,
                          lineHeight: 1.3,
                          letterSpacing: '-0.012em',
                        }}
                      >
                        {layer.pageTitle}
                      </div>
                      <p
                        className="mt-1.5 text-[#4C5E6F] max-w-[560px]"
                        style={{ fontSize: '13.5px', lineHeight: 1.6 }}
                      >
                        {layer.pageBody}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageAnatomyPanel() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-white"
      style={{
        border: '1px solid #D8E6EE',
        boxShadow:
          '0 30px 80px rgba(8,17,31,0.14), 0 0 0 1px rgba(53,199,216,0.06)',
      }}
    >
      {/* Minimal site header strip (no browser chrome, no fake brand) */}
      <div
        className="px-5 py-3.5 border-b flex items-center justify-between"
        style={{ borderColor: '#EEF3F6', background: '#F6FAFC' }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="w-5 h-5 rounded-md"
            style={{ background: '#08111F' }}
            aria-hidden="true"
          />
          <span
            className="block h-2 rounded-full"
            style={{ background: '#CBD3DB', width: '88px' }}
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center gap-2.5">
          <span className="block h-1.5 rounded-full" style={{ background: '#CBD3DB', width: '30px' }} />
          <span className="block h-1.5 rounded-full" style={{ background: '#CBD3DB', width: '30px' }} />
          <span className="block h-1.5 rounded-full" style={{ background: '#CBD3DB', width: '30px' }} />
          <span
            className="block h-6 rounded-md ml-1"
            style={{ background: '#08111F', width: '64px' }}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* 01 — Intent band */}
      <div
        className="relative px-5 py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(53,199,216,0.10), rgba(53,199,216,0.02))',
          borderBottom: '1px solid rgba(8,17,31,0.04)',
        }}
      >
        <BandTag n="01" tone="#0E7D8C" />
        <div
          className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full mb-2.5"
          style={{
            background: '#FFFFFF',
            border: '1px solid #D0EFF4',
            color: '#0E7D8C',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.14em',
          }}
        >
          <MapPin size={9} />
          AREA
        </div>
        <div
          className="text-[#08111F]"
          style={{
            fontSize: '17.5px',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.015em',
          }}
        >
          Service or treatment, named clearly.
        </div>
        <div
          className="mt-1.5 text-[#4C5E6F]"
          style={{ fontSize: '12px', lineHeight: 1.55 }}
        >
          Plain language. The place. The next step.
        </div>
      </div>

      {/* 02 — Explanation band */}
      <div
        className="relative px-5 py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(8,17,31,0.03), rgba(8,17,31,0.01))',
          borderBottom: '1px solid rgba(8,17,31,0.04)',
        }}
      >
        <BandTag n="02" tone="#4C5E6F" />
        <div className="grid grid-cols-2 gap-x-5 gap-y-3">
          {[
            'What we do here',
            'Who it suits',
            'What happens',
            'What to expect',
          ].map(label => (
            <div key={label}>
              <div
                className="text-[#08111F]"
                style={{ fontSize: '12px', fontWeight: 700 }}
              >
                {label}
              </div>
              <div className="mt-1 space-y-1">
                <span
                  className="block h-1.5 rounded-full"
                  style={{ background: '#D8DEE5', width: '88%' }}
                />
                <span
                  className="block h-1.5 rounded-full"
                  style={{ background: '#E1E6EC', width: '72%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 03 — Trust band */}
      <div
        className="relative px-5 py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(20,184,166,0.09), rgba(20,184,166,0.02))',
          borderBottom: '1px solid rgba(8,17,31,0.04)',
        }}
      >
        <BandTag n="03" tone="#0F7A57" />
        <div className="flex items-center gap-1.5 mb-3 flex-wrap">
          {[0, 1, 2, 3, 4].map(i => (
            <Star key={i} size={11} fill="#F4B740" color="#F4B740" />
          ))}
          <span
            className="ml-2 text-[#6F8190]"
            style={{ fontSize: '11px', fontWeight: 600 }}
          >
            Reviews placed beside the click
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {['Registered', 'Local area covered', 'Written cover'].map(label => (
            <span
              key={label}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white"
              style={{
                border: '1px solid #D0EFF4',
                color: '#0E7D8C',
                fontSize: '10.5px',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={9} />
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* 04 — Next-step CTA band */}
      <div
        className="relative px-5 py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(33,185,133,0.09), rgba(33,185,133,0.02))',
          borderBottom: '1px solid rgba(8,17,31,0.04)',
        }}
      >
        <BandTag n="04" tone="#0F7A57" />
        <div className="flex items-center gap-2.5 flex-wrap">
          <span
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md"
            style={{
              background: '#08111F',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 700,
            }}
          >
            Take the next step
            <ArrowRight size={11} />
          </span>
          <span
            className="inline-flex items-center gap-1.5 text-[#0E2740]"
            style={{ fontSize: '12px', fontWeight: 700 }}
          >
            <PhoneCall size={11} color="#0F7A57" />
            Direct line
          </span>
        </div>
        <div
          className="mt-2.5 text-[#6F8190]"
          style={{ fontSize: '11px', fontWeight: 500 }}
        >
          Form attaches page, area, and reason — the context goes forward.
        </div>
      </div>

      {/* 05 — Local band */}
      <div
        className="relative px-5 py-5"
        style={{
          background: 'linear-gradient(135deg, rgba(244,183,64,0.10), rgba(244,183,64,0.02))',
        }}
      >
        <BandTag n="05" tone="#9A6F12" />
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 sm:col-span-5">
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-1.5"
              style={{ fontSize: '9px', fontWeight: 700 }}
            >
              Service area
            </div>
            <div
              className="flex items-center gap-1.5 text-[#08111F]"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              <MapPin size={11} color="#9A6F12" />
              Named local area
            </div>
          </div>
          <div className="col-span-12 sm:col-span-7">
            <div
              className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-1.5"
              style={{ fontSize: '9px', fontWeight: 700 }}
            >
              Related work
            </div>
            <div className="grid grid-cols-2 gap-y-1.5 gap-x-3">
              {[62, 78, 68, 84].map((w, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ background: '#F4B740' }}
                    aria-hidden="true"
                  />
                  <span
                    className="block h-1.5 rounded-full"
                    style={{ background: '#E2C786', width: `${w}%` }}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BandTag({ n, tone }: { n: string; tone: string }) {
  return (
    <span
      className="absolute top-3.5 right-3.5 inline-flex items-center justify-center"
      style={{
        width: '22px',
        height: '22px',
        borderRadius: '999px',
        background: '#08111F',
        color: '#35C7D8',
        fontSize: '9.5px',
        fontWeight: 700,
        letterSpacing: '0.04em',
        boxShadow: `0 0 0 3px ${tone}1A, 0 4px 10px rgba(8,17,31,0.16)`,
      }}
    >
      {n}
    </span>
  );
}


// ============================================================================
// SECTION 05 — Built for different visitor intents
// Two grouped panels instead of six equal cards: urgent / decided visitors
// on the left, considered / weighing visitors on the right.
// ============================================================================

type PathRow = {
  icon: typeof PhoneCall;
  name: string;
  pageShape: string;
  cta: string;
};

type PathGroup = {
  label: string;
  headline: string;
  intro: string;
  tone: string;
  bg: string;
  border: string;
  paths: ReadonlyArray<PathRow>;
};

const PATH_GROUPS: ReadonlyArray<PathGroup> = [
  {
    label: 'Urgent or decided',
    headline: 'Visitors who already know what they want.',
    intro:
      'The page has minutes — sometimes less. It needs to confirm, route, and get out of the way.',
    tone: '#9A6F12',
    bg: 'linear-gradient(180deg, #FFFFFF 0%, #FEF7E8 100%)',
    border: '#F0DBA8',
    paths: [
      {
        icon: PhoneCall,
        name: 'Emergency service call',
        pageShape:
          'Phone-first emergency page. Hours, area, and registration above the fold — no scrolling to find the number.',
        cta: 'Call now · response window stated',
      },
      {
        icon: Clock,
        name: 'Appointment booking',
        pageShape:
          'Booking-led page with available windows, clinic or branch picker, and clear policy notes beside the dates.',
        cta: 'Book an appointment',
      },
      {
        icon: Repeat,
        name: 'Repeat or referral visitor',
        pageShape:
          'A simple "what now?" route to the right service or treatment page, or back to the team that handled last time.',
        cta: 'Reach the team that handled last time',
      },
    ],
  },
  {
    label: 'Considered or weighing',
    headline: 'Visitors who are reading, comparing, and asking real questions.',
    intro:
      'The page has time. It needs to answer the question, place the trust, and earn the next step.',
    tone: '#0E7D8C',
    bg: 'linear-gradient(180deg, #FFFFFF 0%, #ECF9FB 100%)',
    border: '#C6E8EF',
    paths: [
      {
        icon: FileText,
        name: 'Quote request',
        pageShape:
          'Service page with what is included, what is excluded, and what changes the price — not a generic enquiry form.',
        cta: 'Request a written quote',
      },
      {
        icon: Stars,
        name: 'Consultation request',
        pageShape:
          'Treatment page with what the consult covers, what to bring, and who they will see — no clinical promises.',
        cta: 'Request a consultation',
      },
      {
        icon: Compass,
        name: 'Comparison visitor',
        pageShape:
          'Service page that answers the comparison questions a competitor page tends to hide.',
        cta: 'Save for later · light callback option',
      },
    ],
  },
];

function SectionBuyingPaths() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              Built for different visitor intents
            </div>
            <h2 className="text-[#08111F]">
              Some visitors come in fast.{' '}
              <span className="text-[#4C5E6F]">Others come in slow.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              One website system, two very different reading speeds. Urgent
              visitors need a fast route. Considered visitors need real
              answers. The page should match each one — not pretend they are
              all the same enquiry.
            </p>
          </div>
        </div>

        {/* Two grouped panels — three paths each */}
        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {PATH_GROUPS.map(group => (
            <div
              key={group.label}
              className="col-span-12 lg:col-span-6 rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: group.bg,
                border: `1px solid ${group.border}`,
                boxShadow: '0 12px 32px rgba(8,17,31,0.05)',
              }}
            >
              <div
                className="px-8 py-7 border-b"
                style={{ borderColor: group.border }}
              >
                <div
                  className="uppercase tracking-[0.18em] mb-3"
                  style={{ color: group.tone, fontSize: '10.5px', fontWeight: 700 }}
                >
                  {group.label}
                </div>
                <div
                  className="text-[#08111F]"
                  style={{
                    fontSize: '21px',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    letterSpacing: '-0.015em',
                  }}
                >
                  {group.headline}
                </div>
                <p
                  className="mt-3 text-[#4C5E6F]"
                  style={{ fontSize: '13.5px', lineHeight: 1.6 }}
                >
                  {group.intro}
                </p>
              </div>

              <div className="flex-1">
                {group.paths.map((path, i) => {
                  const Icon = path.icon;
                  return (
                    <div
                      key={path.name}
                      className="px-8 py-6"
                      style={
                        i < group.paths.length - 1
                          ? { borderBottom: `1px solid ${group.border}` }
                          : undefined
                      }
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                          style={{
                            background: `${group.tone}12`,
                            border: `1px solid ${group.tone}33`,
                            color: group.tone,
                          }}
                        >
                          <Icon size={15} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div
                            className="text-[#08111F]"
                            style={{
                              fontSize: '15.5px',
                              fontWeight: 700,
                              letterSpacing: '-0.005em',
                              lineHeight: 1.3,
                            }}
                          >
                            {path.name}
                          </div>
                          <p
                            className="mt-1.5 text-[#4C5E6F]"
                            style={{ fontSize: '13px', lineHeight: 1.6 }}
                          >
                            {path.pageShape}
                          </p>
                          <div
                            className="mt-3 inline-flex items-center gap-2"
                            style={{
                              color: group.tone,
                              fontSize: '12px',
                              fontWeight: 700,
                              letterSpacing: '0.04em',
                            }}
                          >
                            <ArrowRight size={12} />
                            <span>{path.cta}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 06 — Connected handling edge
// Bridge section. The website does not run the business — but it hands the
// enquiry forward with context. Quiet, single panel, not a CRM workflow.
// ============================================================================

function SectionHandlingEdge() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="text-center mx-auto max-w-3xl">
          <div
            className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 700 }}
          >
            Where the website ends
          </div>
          <h2 className="text-[#08111F]">
            The website does not run the business.{' '}
            <span className="text-[#4C5E6F]">
              It hands the enquiry forward, with context attached.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto max-w-2xl"
            style={{ fontSize: '16px', lineHeight: 1.65 }}
          >
            First reply, sequenced follow-up, reviews — those belong to other
            systems. The website&rsquo;s job is to deliver the enquiry already
            explained, so the next step does not start cold.
          </p>
        </div>

        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #FFFFFF 0%, #F9FCFD 100%)',
            border: '1px solid #E6EEF3',
            boxShadow: '0 16px 44px rgba(8,17,31,0.06)',
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'rgba(53,199,216,0.10)', filter: 'blur(50px)' }}
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* LEFT — what the website carries forward */}
            <div
              className="col-span-1 lg:col-span-5 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r"
              style={{ borderColor: '#EEF3F6' }}
            >
              <div
                className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-3"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                What the page carries forward
              </div>
              <h3
                className="text-[#08111F]"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.012em',
                }}
              >
                Context, not just a contact.
              </h3>
              <p
                className="mt-3 text-[#4C5E6F]"
                style={{ fontSize: '14px', lineHeight: 1.6 }}
              >
                Each enquiry arrives with the page, the area, the service or
                treatment, and the visitor&rsquo;s own words — so the first
                reply already fits.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  { k: 'Source page', v: 'Service or treatment page' },
                  { k: 'Service area', v: 'Named local area' },
                  { k: 'Asked about', v: 'Quote / consultation / callback request' },
                  { k: 'Channel', v: 'Form or call path' },
                  { k: 'Received', v: 'During working hours' },
                ].map(row => (
                  <li
                    key={row.k}
                    className="flex items-start gap-3 px-4 py-3 rounded-lg"
                    style={{ background: '#F6FAFC', border: '1px solid #E6EEF3' }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2"
                      style={{ boxShadow: '0 0 6px rgba(53,199,216,0.5)' }}
                    />
                    <div className="flex-1 grid grid-cols-12 gap-3">
                      <span
                        className="col-span-5 text-[#6F8190] uppercase tracking-[0.12em]"
                        style={{ fontSize: '10px', fontWeight: 700 }}
                      >
                        {row.k}
                      </span>
                      <span
                        className="col-span-7 text-[#08111F]"
                        style={{ fontSize: '13px', fontWeight: 600 }}
                      >
                        {row.v}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT — where it goes next */}
            <div
              className="col-span-1 lg:col-span-7 p-8 lg:p-10"
              style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #ECF9FB 100%)' }}
            >
              <div
                className="text-[#0F7A57] uppercase tracking-[0.16em] mb-3"
                style={{ fontSize: '10.5px', fontWeight: 700 }}
              >
                What the website hands to
              </div>
              <h3
                className="text-[#08111F]"
                style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.012em',
                }}
              >
                The right next step — already briefed.
              </h3>
              <p
                className="mt-3 text-[#4C5E6F]"
                style={{ fontSize: '14px', lineHeight: 1.6 }}
              >
                These are separate offers in their own right. The website&rsquo;s
                job is to deliver the enquiry cleanly into whichever one fits.
              </p>

              <div className="mt-7 space-y-3">
                {[
                  {
                    name: 'Lead Response & Handling Systems',
                    note: 'First reply, missed-call recovery, the person who answers.',
                  },
                  {
                    name: 'Follow-Up & CRM Systems',
                    note: 'Paced chasing of quotes, consultation reminders, returning visits.',
                  },
                  {
                    name: 'Reputation & Review Systems',
                    note: 'Review collection after good work, placed back on the pages that need it.',
                  },
                ].map(target => (
                  <div
                    key={target.name}
                    className="rounded-xl p-5 flex items-start gap-4"
                    style={{
                      background: '#FFFFFF',
                      border: '1px solid #D0EFF4',
                      boxShadow: '0 4px 14px rgba(20,184,166,0.06)',
                    }}
                  >
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{
                        background: 'rgba(33,185,133,0.12)',
                        border: '1px solid rgba(33,185,133,0.40)',
                        color: '#0F7A57',
                      }}
                    >
                      <ArrowUpRight size={13} strokeWidth={2.5} />
                    </span>
                    <div className="min-w-0">
                      <div
                        className="text-[#08111F]"
                        style={{
                          fontSize: '15px',
                          fontWeight: 700,
                          lineHeight: 1.3,
                          letterSpacing: '-0.005em',
                        }}
                      >
                        {target.name}
                      </div>
                      <div
                        className="mt-1 text-[#4C5E6F]"
                        style={{ fontSize: '12.5px', lineHeight: 1.6 }}
                      >
                        {target.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-[#6F8190] mx-auto max-w-2xl text-center"
          style={{ fontSize: '13.5px', lineHeight: 1.7, fontStyle: 'italic' }}
        >
          The Smart Website System ends where the next conversation begins —
          and starts that conversation already briefed.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 07 — Trust before the click
// A single focused "page moment" composition. One immersive scrolled-into
// view of a real service page right where the visitor decides — trust lives
// inline in the page body, beside the things it protects. No labels, no
// 5-up grid, no anatomy diagram. The placement itself is the message.
// ============================================================================

function PageMomentArtifact() {
  return (
    <div className="relative">
      {/* Soft halo behind the composition */}
      <div
        className="absolute -inset-6 lg:-inset-10 rounded-[40px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 60%, rgba(53,199,216,0.14), transparent 65%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative rounded-2xl overflow-hidden bg-white"
        style={{
          border: '1px solid #D8E6EE',
          boxShadow:
            '0 36px 80px rgba(8,17,31,0.12), 0 0 0 1px rgba(53,199,216,0.05)',
        }}
      >
        {/* Quiet browser-style strip — frames it as a real page view */}
        <div
          className="flex items-center gap-1.5 px-5 py-3 border-b"
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
            /treatments/consultation
          </span>
          <span
            className="ml-auto text-[#9CA3B0] uppercase tracking-[0.14em]"
            style={{ fontSize: '9.5px', fontWeight: 700 }}
          >
            Scrolled mid-page · the click moment
          </span>
        </div>

        {/* Page body — one continuous flow, no labelled sub-cards */}
        <div className="px-6 lg:px-12 py-8 lg:py-12">
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Body content — the reading column */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              <div>
                <div
                  className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-2"
                  style={{ fontSize: '11px', fontWeight: 700 }}
                >
                  Specialist consultation
                </div>
                <h3
                  className="text-[#08111F]"
                  style={{
                    fontSize: 'clamp(20px, 2.2vw, 26px)',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    letterSpacing: '-0.018em',
                  }}
                >
                  What the first consultation covers — and what you can ask.
                </h3>
              </div>

              <div className="space-y-2.5">
                {[92, 86, 78].map((w, i) => (
                  <span
                    key={i}
                    className="block h-2 rounded-full"
                    style={{ background: '#E6EEF3', width: `${w}%` }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Inline review — sitting naturally in the read flow, beside
                  the moment of hesitation */}
              <div
                className="rounded-xl p-5 flex gap-4"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFBEC 100%)',
                  border: '1px solid #F0DBA8',
                  boxShadow: '0 6px 20px rgba(244,183,64,0.10)',
                }}
              >
                <div className="shrink-0 pt-0.5">
                  <div className="flex items-center gap-0.5">
                    {[0, 1, 2, 3, 4].map(i => (
                      <Star key={i} size={11} fill="#F4B740" color="#F4B740" />
                    ))}
                  </div>
                  <div
                    className="mt-1 text-[#9A6F12] uppercase tracking-[0.14em]"
                    style={{ fontSize: '9.5px', fontWeight: 700 }}
                  >
                    Verified
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p
                    className="text-[#08111F]"
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.55,
                      fontWeight: 500,
                    }}
                  >
                    Recent practice-experience review placed beside the CTA — sits where the visitor is deciding whether to act.
                  </p>
                  <div
                    className="mt-1.5 text-[#6F8190]"
                    style={{ fontSize: '11.5px', fontWeight: 600 }}
                  >
                    — Recent practice-experience review
                  </div>
                </div>
              </div>

              <div className="space-y-2.5">
                {[88, 74].map((w, i) => (
                  <span
                    key={i}
                    className="block h-2 rounded-full"
                    style={{ background: '#E6EEF3', width: `${w}%` }}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Inline credentials — chips sitting in the body, beside the risk */}
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { label: 'Registered practice', icon: ShieldCheck },
                  { label: 'Cover in place', icon: ShieldCheck },
                  { label: 'Credentials placed near the CTA', icon: Stars },
                ].map(t => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white"
                      style={{
                        border: '1px solid #C6E8EF',
                        color: '#0E7D8C',
                        fontSize: '11.5px',
                        fontWeight: 600,
                      }}
                    >
                      <Icon size={11} />
                      {t.label}
                    </span>
                  );
                })}
              </div>

              {/* Local area inline note — beside the area question */}
              <div
                className="flex items-start gap-2.5 text-[#0E2740]"
                style={{ fontSize: '13px', fontWeight: 600 }}
              >
                <MapPin size={14} color="#0F7A57" className="mt-0.5 shrink-0" />
                <span>
                  Named local area covered —{' '}
                  <span className="text-[#4C5E6F] font-medium">
                    appointment availability shown
                  </span>
                </span>
              </div>
            </div>

            {/* CTA column — sits beside the body where the decision happens */}
            <div className="col-span-12 lg:col-span-4">
              <div
                className="rounded-xl p-6 lg:p-7"
                style={{
                  background:
                    'linear-gradient(180deg, #FFFFFF 0%, #F4FBFC 100%)',
                  border: '1px solid #C6E8EF',
                  boxShadow: '0 12px 32px rgba(14,125,140,0.10)',
                }}
              >
                <div
                  className="text-[#9CA3B0] uppercase tracking-[0.14em] mb-3"
                  style={{ fontSize: '9.5px', fontWeight: 700 }}
                >
                  Take the next step
                </div>

                <a
                  href="#"
                  className="block w-full text-center rounded-md px-4 py-3"
                  style={{
                    background: '#08111F',
                    color: '#FFFFFF',
                    fontSize: '13.5px',
                    fontWeight: 700,
                  }}
                >
                  Request a consultation
                </a>

                {/* Reassurance — right above the form */}
                <p
                  className="mt-4 text-[#4C5E6F]"
                  style={{ fontSize: '12px', lineHeight: 1.55 }}
                >
                  A coordinator replies during working hours, with what you
                  can expect at the consult. No clinical promises before the consultation.
                </p>

                {/* Form preview — sits below the reassurance */}
                <div className="mt-5 space-y-2">
                  <div
                    className="rounded-md px-3 py-2 text-[#9CA3B0]"
                    style={{
                      background: '#F6FAFC',
                      border: '1px solid #E6EEF3',
                      fontSize: '11.5px',
                    }}
                  >
                    Your name
                  </div>
                  <div
                    className="rounded-md px-3 py-2 text-[#9CA3B0]"
                    style={{
                      background: '#F6FAFC',
                      border: '1px solid #E6EEF3',
                      fontSize: '11.5px',
                    }}
                  >
                    How to reach you
                  </div>
                </div>
              </div>

              {/* Secondary route — beside, not below the form */}
              <div
                className="mt-4 flex items-center gap-2 text-[#0E2740]"
                style={{ fontSize: '12.5px', fontWeight: 600 }}
              >
                <PhoneCall size={12} color="#0F7A57" />
                <span>Call the practice</span>
                <span className="text-[#9CA3B0]" style={{ fontWeight: 500 }}>
                  · working hours
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLocalTrust() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        {/* Centered, stacked header — keeps the page rhythm calm before the
            single dominant artifact below. */}
        <div className="text-center mx-auto max-w-3xl">
          <div
            className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 700 }}
          >
            Trust where the decision happens
          </div>
          <h2 className="text-[#08111F]">
            Most trust is built{' '}
            <span className="text-[#4C5E6F]">
              before anyone fills in a form.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto max-w-2xl"
            style={{ fontSize: '16px', lineHeight: 1.65 }}
          >
            Reviews on a separate page, a credential line in the footer, and a
            generic contact form leave the visitor doing the trust work
            themselves. A serious page places the proof beside the question,
            quietly — and the visitor never has to look for it.
          </p>
        </div>

        {/* The single focused composition. Trust is shown placed inside the
            natural flow of a real page — not labelled, not numbered, not
            broken into sub-cards. The placement itself is the message. */}
        <PageMomentArtifact />

        {/* Closing reference paragraph — kept verbatim, centered */}
        <p
          className="text-[#4C5E6F] mx-auto max-w-3xl text-center"
          style={{ fontSize: '13.5px', lineHeight: 1.7 }}
        >
          Local visibility lives in its own offer —{' '}
          <span className="text-[#08111F] font-medium">
            Local SEO Authority Systems
          </span>{' '}
          — and review collection is the work of{' '}
          <span className="text-[#08111F] font-medium">
            Reputation &amp; Review Systems
          </span>
          . Both feed the website. The placement on the page belongs here.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 08 — Implementation pathways under SWS
// WordPress, Elementor, Bricks Builder, Divi 5, WooCommerce, Redesign.
// Calm matrix. Pathways, not products.
// ============================================================================

type Pathway = {
  n: string;
  name: string;
  use: string;
  fit: string;
};

type PathwayWithId = Pathway & { id?: Page };

const PATHWAYS: ReadonlyArray<PathwayWithId> = [
  {
    n: '01',
    id: 'wordpress',
    name: 'WordPress Development',
    use: 'Custom build on the platform most service businesses and clinics already run.',
    fit: 'When the site needs serious page work, custom blocks, and long-term editability.',
  },
  {
    n: '02',
    id: 'elementor',
    name: 'Elementor',
    use: 'Refined Elementor builds where the team needs to keep editing pages themselves.',
    fit: 'When in-house editing is part of the operating reality, not a fight against the builder.',
  },
  {
    n: '03',
    id: 'bricks',
    name: 'Bricks Builder',
    use: 'Bricks builds where performance, clean markup, and structured design matter.',
    fit: 'When the existing site is slow, fragile, or weighed down by past plugins.',
  },
  {
    n: '04',
    id: 'divi',
    name: 'Divi 5',
    use: 'Divi 5 rebuilds for sites already on Divi that need a serious page-craft pass.',
    fit: 'When the team is on Divi and the platform decision is not the question.',
  },
  {
    n: '05',
    id: 'woocommerce',
    name: 'WooCommerce',
    use: 'Service-led WooCommerce where bookings, deposits, or simple products belong with the site.',
    fit: 'When payments, deposits, or product lines sit alongside the service or treatment work.',
  },
  {
    n: '06',
    id: 'rebuild',
    name: 'Website Redesign / System Rebuild',
    use: 'Full rebuild of an existing site that has outgrown its structure and trust.',
    fit: 'When the current site is the bottleneck and the work needs to start over cleanly.',
  },
];

function SectionImplementation({ onNav }: { onNav?: (p: Page) => void }) {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="text-center mx-auto max-w-3xl">
          <div
            className="text-[#0E7D8C] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 700 }}
          >
            How a Smart Website System is built
          </div>
          <h2 className="text-[#08111F]">
            Six implementation pathways{' '}
            <span className="text-[#4C5E6F]">— chosen for the work, not the brochure.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto max-w-2xl"
            style={{ fontSize: '16px', lineHeight: 1.65 }}
          >
            These are how the website system gets built or rebuilt — not the
            point of the page. We choose based on what the team already edits,
            what the existing site can keep, and what the next two years of
            editing actually look like.
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden"
          style={{
            background: '#FFFFFF',
            border: '1px solid #E6EEF3',
            boxShadow: '0 10px 28px rgba(8,17,31,0.06)',
          }}
        >
          <div
            className="hidden md:grid grid-cols-12 gap-6 px-8 py-5"
            style={{
              borderBottom: '1px solid #EEF3F6',
              background: 'linear-gradient(to right, #F9FCFD, #FFFFFF)',
            }}
          >
            <div
              className="col-span-1 text-[#9CA3B0] uppercase tracking-[0.14em]"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              No.
            </div>
            <div
              className="col-span-3 text-[#6F8190] uppercase tracking-[0.14em]"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              Pathway
            </div>
            <div
              className="col-span-4 text-[#9CA3B0] uppercase tracking-[0.14em]"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              What we build with it
            </div>
            <div
              className="col-span-3 text-[#0E7D8C] uppercase tracking-[0.14em]"
              style={{ fontSize: '10px', fontWeight: 700 }}
            >
              When it fits
            </div>
            <div className="col-span-1" />
          </div>

          {PATHWAYS.map((p, i) => {
            const isClickable = !!(p.id && onNav);
            const content = (
              <div
                className={`grid grid-cols-12 gap-6 px-6 lg:px-8 py-6 items-start w-full ${
                  i < PATHWAYS.length - 1 ? 'border-b' : ''
                } ${isClickable ? 'transition-colors hover:bg-[#F9FCFD] text-left' : ''}`}
                style={{ borderColor: '#EEF3F6' }}
              >
                <div className="col-span-12 md:col-span-1">
                  <span
                    className="text-[#6F8190] tabular-nums"
                    style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.14em' }}
                  >
                    {p.n}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div
                    className="text-[#08111F]"
                    style={{
                      fontSize: '16px',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    {p.name}
                  </div>
                </div>
                <div
                  className="col-span-12 md:col-span-4 text-[#4C5E6F]"
                  style={{ fontSize: '13.5px', lineHeight: 1.65 }}
                >
                  {p.use}
                </div>
                <div className="col-span-12 md:col-span-3">
                  <span
                    className="inline-flex items-start gap-2 text-[#08111F]"
                    style={{ fontSize: '13px', lineHeight: 1.6, fontWeight: 500 }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0"
                      style={{ boxShadow: '0 0 6px rgba(53,199,216,0.5)' }}
                    />
                    {p.fit}
                  </span>
                </div>
                <div className="hidden md:flex col-span-1 items-center justify-end">
                  {isClickable && (
                    <ChevronRight size={16} className="text-[#9CA3B0]" />
                  )}
                </div>
              </div>
            );

            if (isClickable) {
              return (
                <button
                  key={p.n}
                  onClick={() => onNav!(p.id!)}
                  className="block w-full"
                >
                  {content}
                </button>
              );
            }
            return <div key={p.n}>{content}</div>;
          })}
        </div>

        <p
          className="text-[#6F8190] mx-auto max-w-2xl text-center"
          style={{ fontSize: '13.5px', lineHeight: 1.7, fontStyle: 'italic' }}
        >
          The builder underneath is the implementation. The website system is
          the work above it.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 09 — What changes after launch
// Real outcomes, no metric promises.
// ============================================================================

const AFTER_LAUNCH = [
  {
    title: 'Visitors understand the offer faster',
    body:
      'Service and treatment pages answer the real question on first read — fewer return visits before they decide.',
  },
  {
    title: 'Enquiries arrive with context',
    body:
      'The page, area, and reason travel with each contact, so the first reply already fits.',
  },
  {
    title: 'Trust is easier to find',
    body:
      'Reviews, credentials, and area cues sit beside the call to action, not on a side page nobody opens.',
  },
  {
    title: 'Local relevance is real, not implied',
    body:
      'Service-area cues and consistent listings make nearby visitors recognise the business sooner.',
  },
  {
    title: 'Improvements get easier',
    body:
      'A well-structured page system is something the team can read, edit, and add to from real working weeks.',
  },
  {
    title: 'The website stops being the bottleneck',
    body:
      'Conversations with the team can be about the work — not about why the website is in the way.',
  },
];

function SectionAfterLaunch() {
  return (
    <section className="section bg-gradient-to-br from-[#061323] to-[#0E2740] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 10% 30%, #35C7D8 0%, transparent 45%), radial-gradient(circle at 90% 80%, #14B8A6 0%, transparent 45%)',
        }}
      />

      <div className="relative container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#35C7D8] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              What changes after launch
            </div>
            <h2 className="text-white">
              After launch,{' '}
              <span className="text-white/55">
                the website behaves differently.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p
              className="text-white/65"
              style={{ fontSize: '16px', lineHeight: 1.65 }}
            >
              We do not promise lead numbers or conversion percentages — every
              business reads them differently. What we do commit to is a
              website that earns its place in the working week.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {AFTER_LAUNCH.map((item, i) => (
            <div
              key={item.title}
              className="rounded-2xl p-7 relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(6px)',
              }}
            >
              <div
                className="text-[#35C7D8] tabular-nums mb-4"
                style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em' }}
              >
                AFTER 0{i + 1}
              </div>
              <div
                className="text-white mb-3"
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: '-0.012em',
                }}
              >
                {item.title}
              </div>
              <p
                className="text-white/65"
                style={{ fontSize: '13.5px', lineHeight: 1.65 }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECTION 10 — Fit / Not Fit
// ============================================================================

const FIT_FOR = [
  'An established service business or specialist clinic with real activity already',
  'Service or treatment pages are central to how visitors decide',
  'The current website feels thin, unclear, dated, or quietly disconnected from how the business works',
  'Local trust and area relevance matter to who actually buys',
  'The owner wants real page structure, not just a prettier visual layer',
  'Future improvement matters as much as the launch',
];

const FIT_NOT_FOR = [
  'A cheapest-possible brochure site or a one-page quick build',
  'A purely visual refresh with no business context behind it',
  'Anyone shopping for guaranteed rankings or quick traffic promises',
  'A tool, chatbot, or demo as the actual product',
  'Healthcare buyer needing EMR, clinical compliance, or treatment-outcome claims',
];

function SectionFit() {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="text-center mx-auto max-w-3xl">
          <div
            className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
            style={{ fontSize: '11.5px', fontWeight: 700 }}
          >
            Fit
          </div>
          <h2 className="text-[#08111F]">
            Built for established service businesses and specialist clinics.
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto max-w-2xl"
            style={{ fontSize: '16px', lineHeight: 1.65 }}
          >
            We are honest both ways — who this work is for, and who it
            isn&rsquo;t. Saying so early saves time on both sides.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          {/* Strong fit */}
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
                {FIT_FOR.map(f => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#21B985] shrink-0 mt-2"
                      style={{ boxShadow: '0 0 6px rgba(33,185,133,0.50)' }}
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

          {/* Probably not right */}
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
                {FIT_NOT_FOR.map(f => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3.5 first:pt-0 last:pb-0"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#9CA3B0] shrink-0 mt-2"
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
                className="mt-6 pt-5 text-[#6F8190]"
                style={{
                  borderTop: '1px solid #E6EAEF',
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
// SECTION 11 — FAQ
// Six SWS-specific questions. Plain accordion, mirrors homepage shape.
// ============================================================================

const SWS_FAQS: ReadonlyArray<{ q: string; a: string }> = [
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

function SectionFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section bg-page-mist">
      <div className="container">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div
              className="text-[#6F8190] uppercase tracking-[0.16em] mb-5"
              style={{ fontSize: '11.5px', fontWeight: 700 }}
            >
              Practical questions
            </div>
            <h2 className="text-[#08111F]">
              Smart Website Systems,{' '}
              <span className="text-[#4C5E6F]">in plain answers.</span>
            </h2>
            <p
              className="mt-5 text-[#4C5E6F]"
              style={{ fontSize: '15px', lineHeight: 1.65 }}
            >
              The questions service businesses and clinics tend to ask before
              committing — answered without hype, guarantees, or sales pressure.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {SWS_FAQS.map((f, i) => (
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
// SECTION 12 — Website System Review CTA
// Diagnostic close. No hard sell, no fake audit, no guarantee.
// ============================================================================

function ReviewSnapshotIllustration() {
  return (
    <div
      className="relative w-full"
      style={{ aspectRatio: '5 / 6' }}
      aria-hidden="true"
    >
      {/* Soft background halo */}
      <div
        className="absolute inset-0 rounded-[28px]"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(53,199,216,0.22), transparent 65%)',
          filter: 'blur(20px)',
        }}
      />

      {/* Page mockup — small, white, sits in the middle of the stage */}
      <div
        className="absolute"
        style={{
          left: '22%',
          right: '22%',
          top: '6%',
          bottom: '6%',
          background: '#FFFFFF',
          borderRadius: '14px',
          border: '1px solid rgba(255,255,255,0.55)',
          boxShadow:
            '0 30px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(53,199,216,0.12)',
          overflow: 'hidden',
        }}
      >
        {/* Tiny browser strip */}
        <div
          className="flex items-center gap-1 px-3 py-2"
          style={{
            background: '#F6FAFC',
            borderBottom: '1px solid #EEF3F6',
          }}
        >
          <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#E76F6F66' }} />
          <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#F4B74066' }} />
          <span className="block w-1.5 h-1.5 rounded-full" style={{ background: '#21B98566' }} />
        </div>

        {/* Hero block */}
        <div className="px-3 pt-3">
          <div
            className="rounded-md p-2.5"
            style={{
              background: 'linear-gradient(135deg, #F4FBFC 0%, #FFFFFF 100%)',
              border: '1px solid #E6EEF3',
            }}
          >
            <span
              className="block h-1 rounded-full"
              style={{ background: '#08111F', width: '70%' }}
            />
            <span
              className="block h-1 rounded-full mt-1.5"
              style={{ background: '#C6CFD8', width: '50%' }}
            />
            <span
              className="inline-block h-1.5 rounded-full mt-2"
              style={{ background: '#35C7D8', width: '24px' }}
            />
          </div>
        </div>

        {/* Body lines */}
        <div className="px-3 pt-3 space-y-1.5">
          {[88, 76, 82, 64].map((w, i) => (
            <span
              key={i}
              className="block h-1 rounded-full"
              style={{ background: '#E1E6EC', width: `${w}%` }}
            />
          ))}
        </div>

        {/* Inline trust band */}
        <div className="px-3 pt-3">
          <div
            className="rounded-md p-2 flex items-center gap-1"
            style={{
              background: 'rgba(244,183,64,0.10)',
              border: '1px solid rgba(244,183,64,0.40)',
            }}
          >
            {[0, 1, 2, 3, 4].map(i => (
              <span
                key={i}
                className="block w-1.5 h-1.5"
                style={{
                  background: '#F4B740',
                  clipPath:
                    'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA pill */}
        <div className="px-3 pt-3">
          <div
            className="rounded-md flex items-center justify-center"
            style={{
              background: '#08111F',
              height: '20px',
            }}
          >
            <span
              className="block h-1 rounded-full"
              style={{ background: '#35C7D8', width: '40%' }}
            />
          </div>
        </div>

        {/* Form preview */}
        <div className="px-3 pt-3 space-y-1.5">
          <span
            className="block rounded-sm"
            style={{ background: '#F6FAFC', border: '1px solid #E6EEF3', height: '10px' }}
          />
          <span
            className="block rounded-sm"
            style={{ background: '#F6FAFC', border: '1px solid #E6EEF3', height: '10px' }}
          />
        </div>
      </div>

      {/* Annotation marker 1 — Clarity (upper left) */}
      <Marker
        style={{ left: '4%', top: '14%' }}
        color="#35C7D8"
        label="Clarity"
        align="left"
      />

      {/* Annotation marker 2 — Trust (mid right) */}
      <Marker
        style={{ right: '4%', top: '44%' }}
        color="#F4B740"
        label="Trust"
        align="right"
      />

      {/* Annotation marker 3 — Next step (lower left) */}
      <Marker
        style={{ left: '4%', bottom: '20%' }}
        color="#21B985"
        label="Next step"
        align="left"
      />

      {/* Floating "noted" check mark — a small visual flourish */}
      <div
        className="absolute"
        style={{ right: '8%', bottom: '10%' }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(33,185,133,0.50)',
            boxShadow: '0 10px 24px rgba(33,185,133,0.30)',
            color: '#0F7A57',
          }}
        >
          <Check size={14} strokeWidth={3} />
        </div>
      </div>
    </div>
  );
}

function Marker({
  style,
  color,
  label,
  align,
}: {
  style: CSSProperties;
  color: string;
  label: string;
  align: 'left' | 'right';
}) {
  return (
    <div className="absolute flex items-center gap-2" style={style}>
      {align === 'right' && (
        <span
          className="inline-flex items-center px-2 py-1 rounded-full uppercase tracking-[0.14em]"
          style={{
            background: '#FFFFFF',
            color: '#08111F',
            fontSize: '9px',
            fontWeight: 700,
            boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
          }}
        >
          {label}
        </span>
      )}
      <span
        className="relative inline-flex items-center justify-center"
        style={{ width: '14px', height: '14px' }}
      >
        <span
          className="absolute inset-0 rounded-full"
          style={{ background: color, opacity: 0.25 }}
        />
        <span
          className="relative rounded-full"
          style={{
            width: '8px',
            height: '8px',
            background: color,
            boxShadow: `0 0 12px ${color}`,
          }}
        />
      </span>
      {align === 'left' && (
        <span
          className="inline-flex items-center px-2 py-1 rounded-full uppercase tracking-[0.14em]"
          style={{
            background: '#FFFFFF',
            color: '#08111F',
            fontSize: '9px',
            fontWeight: 700,
            boxShadow: '0 6px 14px rgba(0,0,0,0.25)',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}

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
                <span className="text-white/85 uppercase">Start with a review</span>
              </div>
              <h2 className="text-white">
                Start with a website system review,{' '}
                <span className="text-white/55">not a quote.</span>
              </h2>

              <p
                className="mt-6 text-white/65 max-w-[540px]"
                style={{ fontSize: '16.5px', lineHeight: 1.65 }}
              >
                We read the website, the service or treatment pages, the local
                trust, the enquiry paths, and the proof placement — together,
                in a working session. You walk away with a short list of what
                to fix first, whether you work with us afterwards or not.
              </p>

              <a
                href="#"
                className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                style={{ fontSize: '15px', fontWeight: 600 }}
              >
                Review my website system
                <ArrowRight size={16} />
              </a>

              <div
                className="mt-6 text-white/45"
                style={{ fontSize: '12.5px' }}
              >
                No hard sell. No automated audit. No ranking guarantee.
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              {/* Illustration: a page being reviewed — visual primitive, not
                  a reading panel. Different from the homepage CTA's text list. */}
              <ReviewSnapshotIllustration />
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

export function SmartWebsite({ onNav }: { onNav?: (p: Page) => void } = {}) {
  return (
    <main>
      <SectionHero />
      <SectionWhyFails />
      <SectionWhatItIncludes />
      <SectionPageCraft />
      <SectionBuyingPaths />
      <SectionHandlingEdge />
      <SectionLocalTrust />
      <SectionImplementation onNav={onNav} />
      <SectionAfterLaunch />
      <SectionFit />
      <SectionFAQ />
      <SectionCTA />
    </main>
  );
}
