import { useState } from "react";
import { ArrowRight, MapPin, Search, Building2, Star, FileText, Globe, RefreshCw, Plus, Minus, MousePointerClick, Phone, Compass, MessageSquare } from "lucide-react";

// 01 HERO
function LSAHero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'radial-gradient(ellipse at 80% 20%, #14B8A6 0%, transparent 50%), radial-gradient(ellipse at 10% 90%, #35C7D8 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-32 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#14B8A6]/30 bg-[#14B8A6]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
            <span className="text-[#35C7D8] uppercase tracking-[0.2em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Get Found Locally</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
            People Search Nearby.<br /><span className="text-white/45">You Still Miss<br />The Click.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-[580px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            Nearby customers and patients compare a handful of local options before they ever pick up the phone. The one that feels safest to choose at a glance gets the click.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "Listings disagree", c: "#E76F6F" }, { l: "Reviews not visible", c: "#F4B740" }, { l: "Service area unclear", c: "#6F8190" }].map((x) => (
              <span key={x.l} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }} />
                <span className="text-white/80" style={{ fontSize: '12.5px', fontWeight: 500 }}>{x.l}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right: Local search presence surface */}
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
              <div>
                <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Local Presence</div>
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>Postcode N6 · 3 mi radius</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#F4B740]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_6px_#F4B740]" /> Weak
              </span>
            </div>

            {/* Map pack indicator */}
            <div className="mb-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/50 uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>Local pack visibility</span>
                <span className="text-[#E76F6F]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Not shown</span>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "Competitor A", state: "ok" },
                  { label: "Competitor B", state: "ok" },
                  { label: "Competitor C", state: "ok" },
                ].map((m, i) => (
                  <div key={i} className="px-2.5 py-2 rounded-md bg-white/[0.04] border border-white/8">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-1 h-1 rounded-full bg-[#21B985]" />
                      <span className="text-white/45" style={{ fontSize: '9.5px', fontWeight: 600 }}>POS {i + 1}</span>
                    </div>
                    <div className="text-white/85 truncate" style={{ fontSize: '11px' }}>{m.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-2 px-2.5 py-2 rounded-md border border-[#E76F6F]/30 bg-[#FDECEC]/5">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_6px_#E76F6F]" />
                  <span className="text-[#E76F6F]" style={{ fontSize: '11px', fontWeight: 600 }}>You — not shown nearby</span>
                </div>
              </div>
            </div>

            {/* Other signals */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Services listed", value: "2 of 7", state: "warn" },
                { label: "Listings agree", value: "62%", state: "warn" },
                { label: "Reviews this month", value: "0", state: "risk" },
                { label: "Service area", value: "Partial", state: "warn" },
              ].map((s) => {
                const tone = s.state === "risk" ? "#E76F6F" : "#F4B740";
                return (
                  <div key={s.label} className="px-3 py-2.5 rounded-md border border-white/8 bg-white/[0.02]">
                    <div className="text-white/45" style={{ fontSize: '10px' }}>{s.label}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>{s.value}</span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: tone, boxShadow: `0 0 6px ${tone}` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02 THE DECISION BEFORE THE CLICK — five moments journey
function LSAProblem() {
  const moments = [
    {
      n: '01',
      icon: Search,
      accent: '#0E7D8C',
      soft: '#EEF7F8',
      border: '#C6E8EF',
      label: 'They search nearby',
      ask: '"Who actually works in this area?"',
      reads: 'Shaped by where they are — not by your brand.',
    },
    {
      n: '02',
      icon: Compass,
      accent: '#0468A8',
      soft: '#EEF4FA',
      border: '#C8DAEC',
      label: 'They compare options',
      ask: '"Three results. Which one feels real?"',
      reads: 'A first read of whether you look credible.',
    },
    {
      n: '03',
      icon: Star,
      accent: '#9A6F12',
      soft: '#FCF5E2',
      border: '#F0DDA0',
      label: 'They check reviews',
      ask: '"What do other locals say, recently?"',
      reads: 'Recency carries more weight than the star average.',
    },
    {
      n: '04',
      icon: FileText,
      accent: '#0F7A57',
      soft: '#E8F4ED',
      border: '#BCE0CD',
      label: 'They open a page',
      ask: '"Does this page answer what I searched for?"',
      reads: 'The page confirms the listing — or quietly contradicts it.',
    },
    {
      n: '05',
      icon: MessageSquare,
      accent: '#7C4DCF',
      soft: '#F0EBFB',
      border: '#D3C5F0',
      label: 'They pick a next step',
      ask: '"Can I get a quote, booking, or callback that fits?"',
      reads: 'A step that fits the intent turns a visit into an enquiry.',
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Before they ever fill in a form</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The decision is made{' '}
            <span className="text-[#4C5E6F]">before the click.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            People do not pick from one search result. They run a quiet check across a handful of moments first — and by the time anyone clicks, the choice is already made.
          </p>
        </div>

        <div className="rounded-[24px] bg-white border border-[#E6EEF3] p-7 lg:p-10" style={{ boxShadow: '0 20px 56px rgba(8,17,31,0.06)' }}>
          {/* Top ribbon */}
          <div className="flex items-center justify-between flex-wrap gap-3 mb-9 pb-6 border-b border-[#EEF3F6]">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
              <span className="text-[#0E7D8C] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Five moments before the click</span>
            </div>
            <span className="text-[#9CA3B0]" style={{ fontSize: '11.5px' }}>Search → Compare → Reviews → Page → Decide</span>
          </div>

          {/* Five station cards */}
          <div className="relative">
            <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#14B8A6]/10 via-[#14B8A6]/25 to-[#14B8A6]/10 pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 relative">
              {moments.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.n} className="rounded-xl bg-white border border-[#E6EEF3] p-5 hover:shadow-md transition-shadow relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center relative z-10" style={{ background: m.soft, border: `1px solid ${m.border}`, color: m.accent }}>
                        <Icon size={18} />
                      </div>
                      <span className="tabular-nums mt-1" style={{ color: m.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.18em' }}>{m.n}</span>
                    </div>
                    <div className="text-[#08111F] mb-3" style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                      {m.label}
                    </div>
                    <div className="text-[#4C5E6F] mb-3" style={{ fontSize: '12.5px', fontStyle: 'italic', lineHeight: 1.55 }}>
                      {m.ask}
                    </div>
                    <p className="text-[#6F8190]" style={{ fontSize: '12px', lineHeight: 1.6 }}>
                      {m.reads}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing strap */}
          <div className="mt-9 pt-7 border-t border-[#EEF3F6]">
            <div className="grid grid-cols-12 gap-5 items-start">
              <div className="col-span-12 md:col-span-8">
                <p className="text-[#08111F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
                  <span className="font-semibold">By the time someone clicks, they have already chosen.</span>{' '}
                  <span className="text-[#4C5E6F]">The page only has to confirm what they already saw.</span>
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F4FBFC] border border-[#D0EFF4]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span className="text-[#0E7D8C]" style={{ fontSize: '11.5px', fontWeight: 600 }}>Five moments before the click</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03 FOUR PLACES LOCAL TRUST MUST AGREE — Quadrant composition
function LSATrustQuadrant() {
  const places = [
    {
      n: '01',
      icon: Globe,
      title: 'The listing',
      accent: '#0E7D8C',
      soft: '#EEF7F8',
      border: '#C6E8EF',
      dot: '#14B8A6',
      statement: 'Makes the first promise — the version of you they meet before any website.',
      points: [
        'Name, hours, category, contact details',
        'Service area named the way it is searched',
      ],
    },
    {
      n: '02',
      icon: FileText,
      title: 'The website page',
      accent: '#0468A8',
      soft: '#EEF4FA',
      border: '#C8DAEC',
      dot: '#3C8DCB',
      statement: 'Confirms the promise the listing made — or quietly contradicts it.',
      points: [
        'A real page for what they searched for',
        'Service area named in the body, not the footer',
      ],
    },
    {
      n: '03',
      icon: Star,
      title: 'The reviews and trust',
      accent: '#9A6F12',
      soft: '#FCF5E2',
      border: '#F0DDA0',
      dot: '#E8B238',
      statement: 'Reduces hesitation at the moment they are deciding whether to bother.',
      points: [
        'Recent reviews, work named in context',
        'Placed near the decision, not on a separate page',
      ],
    },
    {
      n: '04',
      icon: Phone,
      title: 'The next step',
      accent: '#0F7A57',
      soft: '#E8F4ED',
      border: '#BCE0CD',
      dot: '#21B985',
      statement: 'Fits the intent — not the same generic form for every kind of enquiry.',
      points: [
        'Wording that fits the page they just read',
        'A specific ask — quote, booking, callback, or consultation',
      ],
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where the trust gets built</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Trust is built in four places.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Each one either reinforces the same choice or breaks it. None of them have to be perfect. They have to point the same way.
          </p>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#F9FCFD] via-white to-[#F4FBFC] border border-[#E6EEF3] p-7 lg:p-12 relative overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(8,17,31,0.06)' }}>
          {/* Subtle dotted bg */}
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D8E6EE 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative">
            {/* TOP ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
              {places.slice(0, 2).map((p) => (
                <QuadrantCard key={p.n} place={p} />
              ))}
            </div>

            {/* CENTER — Decision moment */}
            <div className="my-7 lg:my-9 flex items-center gap-4 lg:gap-6">
              <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#14B8A6]/40 to-[#14B8A6]/40" />
              <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border border-[#14B8A6]/40" style={{ boxShadow: '0 10px 30px rgba(20,184,166,0.16)' }}>
                <Compass size={14} className="text-[#14B8A6]" />
                <span className="text-[#0E7D8C] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The decision moment</span>
              </div>
              <span className="flex-1 h-px bg-gradient-to-r from-[#14B8A6]/40 via-[#14B8A6]/40 to-transparent" />
            </div>

            {/* BOTTOM ROW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
              {places.slice(2, 4).map((p) => (
                <QuadrantCard key={p.n} place={p} />
              ))}
            </div>

            {/* Closing strap */}
            <div className="mt-10 lg:mt-12 pt-7 border-t border-[#E6EEF3] flex items-start gap-4 flex-wrap">
              <div className="flex-1 min-w-[260px]">
                <p className="text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
                  <span className="font-semibold">Each place is a small audition.</span>{' '}
                  <span className="text-[#4C5E6F]">The one that disagrees is the one they remember.</span>
                </p>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F4FBFC] border border-[#D0EFF4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                <span className="text-[#0E7D8C]" style={{ fontSize: '11.5px', fontWeight: 600 }}>Four signals · one decision</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type QuadrantPlace = {
  n: string;
  icon: typeof Globe;
  title: string;
  accent: string;
  soft: string;
  border: string;
  dot: string;
  statement: string;
  points: ReadonlyArray<string>;
};

function QuadrantCard({ place }: { place: QuadrantPlace }) {
  const Icon = place.icon;
  return (
    <div className="rounded-2xl bg-white p-6 lg:p-7" style={{ border: `1px solid ${place.border}`, boxShadow: `0 12px 32px ${place.accent}10` }}>
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: place.soft, color: place.accent, border: `1px solid ${place.border}` }}>
            <Icon size={18} />
          </div>
          <div>
            <div className="tabular-nums" style={{ color: place.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.18em' }}>{place.n} · PLACE</div>
            <div className="text-[#08111F]" style={{ fontSize: '19px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{place.title}</div>
          </div>
        </div>
        <span className="w-1.5 h-1.5 rounded-full mt-3 shrink-0" style={{ background: place.dot, boxShadow: `0 0 8px ${place.dot}` }} />
      </div>

      <p className="text-[#4C5E6F] mb-5" style={{ fontSize: '14px', lineHeight: 1.6 }}>{place.statement}</p>

      <ul className="space-y-2">
        {place.points.map((pt) => (
          <li key={pt} className="flex items-start gap-2.5 text-[#08111F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
            <span className="w-1 h-1 mt-2 rounded-full shrink-0" style={{ background: place.accent }} />
            <span>{pt}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 04 WHY PACKAGE SEO DISAPPOINTS — Disconnected activity vs maintained visibility
function LSAMaintenanceContrast() {
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Why off-the-shelf SEO disappoints</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Disconnected activity.{' '}
            <span className="text-[#4C5E6F]">Or a steady local presence.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            An SEO supplier can ship tasks every month. None of them help if the listing, the page, the reviews, and the area cues are never looked at together.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6 rounded-[20px] bg-white border border-[#E6EEF3] p-9">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Off-the-shelf SEO</span>
              <span className="text-[#6F8190]" style={{ fontSize: '11px' }}>Disconnected · Activity-driven</span>
            </div>
            <div className="text-[#08111F] mb-7" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Tasks delivered.<br />Nothing holding them together.
            </div>
            <div className="relative h-[200px] rounded-xl bg-[#F6FAFC] border border-[#E6EEF3] p-4">
              {["Keyword list", "Backlink task", "Audit report", "Blog post", "Schema added"].map((label, i) => {
                const positions = [
                  { top: '8%', left: '5%' },
                  { top: '14%', right: '8%' },
                  { top: '55%', left: '12%' },
                  { top: '60%', right: '15%' },
                  { top: '32%', left: '38%' },
                ];
                return (
                  <div key={label} className="absolute px-3 py-1.5 rounded-md bg-white border border-[#E6EEF3] text-[#4C5E6F]" style={{ ...positions[i], fontSize: '11.5px' }}>{label}</div>
                );
              })}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#6F8190]" style={{ fontSize: '11px', fontStyle: 'italic' }}>nothing keeping them in agreement</div>
            </div>
            <p className="mt-6 text-[#6F8190]" style={{ fontSize: '13px', lineHeight: 1.6 }}>
              Each task in isolation. Nothing checks the pieces against one another, so the picture drifts.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-6 rounded-[20px] bg-gradient-to-br from-[#061323] to-[#103E5A] p-9 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Steady local presence</span>
                <span className="text-white/55" style={{ fontSize: '11px' }}>Connected · Compounding</span>
              </div>
              <div className="text-white mb-7" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Listings, pages, reviews,<br />service areas — kept in step.
              </div>

              <div className="relative h-[200px] rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160" fill="none" preserveAspectRatio="none">
                  <path d="M40 80 L130 40 L240 80 L350 40 M130 40 L240 120 M240 80 L130 120 M40 80 L240 120 M240 80 L350 40" stroke="#35C7D8" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 4" />
                </svg>
                {["Pages", "Profile", "Listings", "Service area", "Reviews"].map((label, i) => {
                  const positions = [
                    { top: '40%', left: '8%' }, { top: '20%', left: '32%' }, { top: '40%', left: '57%' }, { top: '20%', right: '8%' }, { top: '70%', left: '40%' }
                  ];
                  return (
                    <div key={label} className="absolute px-3 py-1.5 rounded-md bg-[#061323]/60 border border-[#35C7D8]/30 text-white/90 backdrop-blur-sm" style={{ ...positions[i], fontSize: '11.5px', fontWeight: 500 }}>{label}</div>
                  );
                })}
              </div>
              <p className="mt-6 text-white/55" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                Each piece touched in relation to the others. Change one, the others are checked.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05 WHAT WE BUILD AND MAINTAIN — Coverage map with reasons
function LSACoverageMap() {
  const cov = [
    { icon: FileText, label: "Service & treatment pages", why: "A real page for what they searched — not a sub-bullet on a list." },
    { icon: MapPin, label: "Service-area pages", why: "Areas you actually serve, named the way locals search them." },
    { icon: Building2, label: "Google Business Profile", why: "Categories, hours, services, and area kept current with the business." },
    { icon: Globe, label: "Listing consistency", why: "Name, address, hours, and area in agreement across directories." },
    { icon: Star, label: "Review placement", why: "Recent reviews placed where someone is deciding." },
    { icon: Search, label: "Local proof on the website", why: "Named neighbourhoods, area cues, credentials a visitor recognises." },
    { icon: ArrowRight, label: "Enquiry path from search", why: "A next step that matches the intent — quote, callback, consultation." },
    { icon: RefreshCw, label: "Ongoing refinement", why: "Adjusted when services or areas change, or when enquiries reveal a gap." },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What we build and maintain</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The pieces a buyer actually checks.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            What MindWP looks after when Local SEO Authority is on. Set up properly — then kept current, not packed into a monthly task list.
          </p>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#061323] to-[#0E2740] p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative">
            <div className="flex items-center justify-between mb-10 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                <span className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>Local coverage map</span>
              </div>
              <span className="text-white/45" style={{ fontSize: '11px' }}>Eight handled areas · one connected picture</span>
            </div>

            {/* Service-area concentric */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              <div className="lg:col-span-4">
                <div className="relative aspect-square max-w-[300px] mx-auto">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300" fill="none">
                    <defs>
                      <radialGradient id="mapGrad" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#35C7D8" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#35C7D8" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="150" cy="150" r="140" fill="url(#mapGrad)" stroke="#35C7D8" strokeOpacity="0.2" />
                    <circle cx="150" cy="150" r="100" fill="none" stroke="#35C7D8" strokeOpacity="0.25" strokeDasharray="3 5" />
                    <circle cx="150" cy="150" r="60" fill="none" stroke="#35C7D8" strokeOpacity="0.35" strokeDasharray="3 5" />
                    {[
                      { x: 150, y: 80 }, { x: 230, y: 130 }, { x: 200, y: 220 },
                      { x: 90, y: 200 }, { x: 70, y: 110 },
                    ].map((p, i) => (
                      <g key={i}>
                        <circle cx={p.x} cy={p.y} r="4" fill="#35C7D8" />
                        <circle cx={p.x} cy={p.y} r="10" fill="#35C7D8" fillOpacity="0.2" />
                      </g>
                    ))}
                  </svg>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-[#061323] to-[#103E5A] border border-[#35C7D8]/40 flex items-center justify-center">
                    <MapPin size={20} className="text-[#35C7D8]" />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <div className="text-white/55 uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Service area</div>
                  <div className="text-white mt-1" style={{ fontSize: '13.5px', fontWeight: 500 }}>The local trust radius</div>
                </div>
                <p className="mt-5 text-white/55 text-center mx-auto max-w-[240px]" style={{ fontSize: '12px', lineHeight: 1.6 }}>
                  Each item ties back to the same picture of who you serve and where.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                {cov.map((c, i) => (
                  <div key={c.label} className="flex items-start gap-3 px-4 py-3.5 rounded-lg border border-white/10 bg-white/[0.04]">
                    <span className="text-[#35C7D8] tabular-nums shrink-0 mt-1" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-9 h-9 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#35C7D8] shrink-0"><c.icon size={15} /></div>
                    <div className="flex-1">
                      <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 600, lineHeight: 1.3 }}>{c.label}</div>
                      <div className="text-white/55 mt-1" style={{ fontSize: '12px', lineHeight: 1.5 }}>{c.why}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06 WEBSITE-FIRST LOCAL SEO — The page has to confirm the click
function LSAWebsiteFirst() {
  const carries = [
    {
      n: '01',
      icon: FileText,
      title: 'The service or treatment is named the way they searched',
      note: 'The page leads with what the listing promised — not buried under "Services".',
    },
    {
      n: '02',
      icon: MapPin,
      title: 'The service area appears in the page body',
      note: 'In the words a visitor reads while deciding — not just the footer.',
    },
    {
      n: '03',
      icon: Star,
      title: 'Reviews sit beside the decision',
      note: 'Recent reviews placed within the page, not on a separate "Testimonials" tab.',
    },
    {
      n: '04',
      icon: MessageSquare,
      title: 'The next step matches what brought them in',
      note: 'Consultation, quote, callback, or emergency line — written for the page they just read.',
    },
  ];

  const flow = [
    { label: 'Local search', note: '"invisalign N6", "emergency plumber near me"', icon: Search },
    { label: 'Listing chosen', note: 'The local pack returns three options. One gets the click.', icon: Globe },
    { label: 'Page lands', note: 'The visitor arrives on the website — three seconds to confirm.', icon: MousePointerClick },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Website-first local SEO</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Local SEO starts with the website,{' '}
            <span className="text-[#4C5E6F]">not around it.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            The listing may earn the click. The page has to confirm the choice. Without that, the click goes straight back to the results.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — Click handoff flow */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 lg:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="absolute -top-20 -right-20 w-[240px] h-[240px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(53,199,216,0.18) 0%, transparent 70%)' }} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                  <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>From the search to the page</span>
                </div>
                <div className="text-white" style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.25 }}>
                  The click is half the journey.
                </div>
                <p className="mt-4 text-white/55" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                  The listing handles the find. The page handles the decision.
                </p>

                <div className="mt-8 relative">
                  <div className="absolute left-[19px] top-3 bottom-12 w-px bg-gradient-to-b from-[#35C7D8]/45 via-[#35C7D8]/15 to-transparent" />
                  <div className="space-y-5">
                    {flow.map((f, i) => {
                      const Icon = f.icon;
                      return (
                        <div key={f.label} className="relative flex gap-4">
                          <span className="relative z-10 w-10 h-10 rounded-full bg-[#061323] border border-[#35C7D8]/40 text-[#35C7D8] flex items-center justify-center shrink-0">
                            <Icon size={15} />
                          </span>
                          <div className="pt-1.5">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[#35C7D8] tabular-nums" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em' }}>STEP {i + 1}</span>
                            </div>
                            <div className="text-white" style={{ fontSize: '14.5px', fontWeight: 600 }}>{f.label}</div>
                            <div className="text-white/55 mt-0.5" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>{f.note}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom: the fork */}
                <div className="mt-7 pt-6 border-t border-white/10">
                  <div className="text-[#35C7D8] uppercase tracking-[0.16em] mb-3" style={{ fontSize: '10px', fontWeight: 700 }}>Then, in three seconds</div>
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="px-3 py-2.5 rounded-md bg-white/[0.04] border border-white/10">
                      <div className="text-white" style={{ fontSize: '12px', fontWeight: 600 }}>Page confirms</div>
                      <div className="text-[#35C7D8] mt-0.5" style={{ fontSize: '11px' }}>→ they enquire</div>
                    </div>
                    <div className="px-3 py-2.5 rounded-md bg-white/[0.04] border border-white/10">
                      <div className="text-white" style={{ fontSize: '12px', fontWeight: 600 }}>Page goes quiet</div>
                      <div className="text-[#F4B740] mt-0.5" style={{ fontSize: '11px' }}>→ back to search</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — What the page must carry */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-7 lg:p-9" style={{ boxShadow: '0 16px 48px rgba(8,17,31,0.06)' }}>
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#EEF3F6]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                  <span className="text-[#0E7D8C] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>What the page must carry</span>
                </div>
                <span className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>Four moments · one page</span>
              </div>

              <div className="space-y-3">
                {carries.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div key={c.n} className="rounded-xl border border-[#E6EEF3] bg-[#F9FCFD] p-5">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-md bg-white border border-[#D0EFF4] text-[#0E7D8C] flex items-center justify-center shrink-0">
                          <Icon size={16} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2.5 mb-1">
                            <span className="text-[#14B8A6] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.14em' }}>{c.n}</span>
                            <span className="text-[#9CA3B0]" style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.12em' }}>MOMENT</span>
                          </div>
                          <div className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600, letterSpacing: '-0.012em', lineHeight: 1.3 }}>
                            {c.title}
                          </div>
                          <p className="mt-1.5 text-[#4C5E6F]" style={{ fontSize: '13px', lineHeight: 1.55 }}>
                            {c.note}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 pt-6 border-t border-[#EEF3F6] flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] mt-1.5 shrink-0 shadow-[0_0_6px_#14B8A6]" />
                <p className="text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                  <span className="font-semibold">Without the page doing this work, the listing sends clicks that bounce.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 07 VISIBILITY CYCLE — Sensible check-in points, not a treadmill
function VisibilityCycle() {
  const phases = [
    { name: "Check", note: "Read what someone searching nearby currently sees — listing, page, reviews, area cues.", angle: 0 },
    { name: "Clarify", note: "Get the listing, the page, the reviews, and the next step pointing the same way.", angle: 90 },
    { name: "Build", note: "Add or rework the missing pages, area cues, and review placements.", angle: 180 },
    { name: "Adjust", note: "Touch the slow pieces when services or areas change, or when real enquiries reveal a gap.", angle: 270 },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>After we start</div>
            <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Visibility is maintained,{' '}
              <span className="text-[#4C5E6F]">not installed once.</span>
            </h2>
            <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              Not a campaign sprint. Not a weekly treadmill. Sensible check-ins — when services or areas change, when reviews land, when real enquiries reveal a gap.
            </p>
            <div className="mt-7 flex items-center gap-2.5 text-[#14B8A6]" style={{ fontSize: '13px', fontWeight: 600 }}>
              <RefreshCw size={14} /> Sensible check-ins — not a never-ending SEO treadmill
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative aspect-square max-w-[520px] mx-auto">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 520 520" fill="none">
                <defs>
                  <linearGradient id="cycleGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#35C7D8" />
                    <stop offset="100%" stopColor="#14B8A6" />
                  </linearGradient>
                </defs>
                <circle cx="260" cy="260" r="200" fill="none" stroke="url(#cycleGrad)" strokeWidth="2" strokeDasharray="6 8" />
                <circle cx="260" cy="260" r="200" fill="#EEF6FA" fillOpacity="0.4" />
              </svg>

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[#061323] to-[#103E5A] flex flex-col items-center justify-center text-center">
                <RefreshCw size={22} className="text-[#35C7D8] mb-2" />
                <div className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>Compounding</div>
                <div className="text-white/50 mt-1" style={{ fontSize: '11px' }}>cycle</div>
              </div>

              {phases.map((p, i) => {
                const r = 38;
                const rad = ((p.angle - 90) * Math.PI) / 180;
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div key={p.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
                    <div className="rounded-xl bg-white border border-[#D8E6EE] shadow-[0_8px_24px_rgba(8,17,31,0.08)] p-4 w-[180px] text-center">
                      <div className="text-[#14B8A6] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em' }}>0{i + 1}</div>
                      <div className="text-[#08111F] mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>{p.name}</div>
                      <div className="text-[#6F8190] mt-1.5" style={{ fontSize: '11.5px', lineHeight: 1.45 }}>{p.note}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 08 ILLUSTRATIVE WORKING WEEK — Monday → Friday at a specialist dental practice
function LSAInPractice() {
  const scattered = [
    "Listing and page said different things",
    "Service area missing from the page itself",
    "Reviews tucked under a separate tab",
    "Treatment buried on a generic services page",
    "One generic contact form, no matter the intent",
  ];
  const aligned = [
    "Listing brought into agreement with the page",
    "A page named the way the search is phrased",
    "Service area named in the page body",
    "Recent reviews placed beside the treatment they describe",
    "A form that asks the specific question",
  ];
  const easier = [
    "They see the treatment named in the page title",
    "They see their neighbourhood named on the page",
    "Recent local work confirms it is a real fit",
    "The next step matches what brought them in",
    "They have what they need to act — without guessing",
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Local authority in practice</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            When nearby demand finally{' '}
            <span className="text-[#4C5E6F]">has a clear place to land.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            An illustrative scenario at a specialist dental practice. What shifts when the pieces a buyer checks stop contradicting each other.
          </p>
        </div>

        <div className="rounded-[24px] bg-white border border-[#E6EEF3] overflow-hidden" style={{ boxShadow: '0 20px 56px rgba(8,17,31,0.06)' }}>
          {/* Header strip */}
          <div className="relative bg-gradient-to-br from-[#061323] to-[#0E2740] p-7 lg:p-9 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            <div className="absolute -top-16 -right-16 w-[220px] h-[220px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(53,199,216,0.18) 0%, transparent 70%)' }} />
            <div className="relative grid grid-cols-12 gap-6 items-center">
              <div className="col-span-12 md:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Compass size={14} className="text-[#35C7D8]" />
                  <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The scenario</span>
                </div>
                <div className="text-white" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.25 }}>
                  Specialist dental practice. Real demand nearby. The pieces do not agree.
                </div>
                <p className="mt-2 text-white/55" style={{ fontSize: '13px', lineHeight: 1.6 }}>
                  An established practice with patients searching locally — but the pieces a nearby patient checks are not yet pointing the same way.
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-white/45 uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10px', fontWeight: 700 }}>How the picture moves</div>
                  <div className="flex items-center gap-2 flex-wrap" style={{ fontSize: '11px', fontWeight: 600 }}>
                    <span className="px-2.5 py-1 rounded-md border" style={{ background: 'rgba(231,111,111,0.15)', borderColor: 'rgba(231,111,111,0.35)', color: '#FCC0C0' }}>Scattered</span>
                    <span className="text-white/40">→</span>
                    <span className="px-2.5 py-1 rounded-md border" style={{ background: 'rgba(53,199,216,0.15)', borderColor: 'rgba(53,199,216,0.35)', color: '#9FE3EC' }}>Aligned</span>
                    <span className="text-white/40">→</span>
                    <span className="px-2.5 py-1 rounded-md border" style={{ background: 'rgba(33,185,133,0.15)', borderColor: 'rgba(33,185,133,0.35)', color: '#B4E5CE' }}>Easier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#EEF3F6]">
            <ScenarioColumn
              tag="SCATTERED"
              tagColor="#E76F6F"
              tagBg="#FDECEC"
              title="What felt unclear"
              note="Each piece doing its own thing."
              items={scattered}
              dotColor="#E76F6F"
            />
            <ScenarioColumn
              tag="ALIGNED"
              tagColor="#0E7D8C"
              tagBg="#EEF7F8"
              title="What was brought into alignment"
              note="Each piece touched in relation to the others. Done once, not weekly."
              items={aligned}
              dotColor="#14B8A6"
              accent
            />
            <ScenarioColumn
              tag="EASIER"
              tagColor="#0F7A57"
              tagBg="#E5F4EC"
              title="What the visitor can now decide"
              note="The same search now produces a consistent picture wherever they look."
              items={easier}
              dotColor="#21B985"
            />
          </div>

          {/* Footer disclaimer */}
          <div className="bg-[#F9FCFD] border-t border-[#EEF3F6] p-6 lg:p-7">
            <p className="text-[#9CA3B0] text-center" style={{ fontSize: '11.5px', lineHeight: 1.6 }}>
              Illustrative scenario. No client name, no metric, no ranking promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScenarioColumn({ tag, tagColor, tagBg, title, note, items, dotColor, accent }: {
  tag: string;
  tagColor: string;
  tagBg: string;
  title: string;
  note: string;
  items: ReadonlyArray<string>;
  dotColor: string;
  accent?: boolean;
}) {
  return (
    <div className="p-7 lg:p-8" style={accent ? { background: 'linear-gradient(180deg, #F9FCFD 0%, #FFFFFF 100%)' } : undefined}>
      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full mb-4" style={{ background: tagBg, border: `1px solid ${tagColor}30` }}>
        <span className="w-1 h-1 rounded-full" style={{ background: tagColor }} />
        <span className="uppercase tracking-[0.16em]" style={{ color: tagColor, fontSize: '10px', fontWeight: 700 }}>{tag}</span>
      </div>
      <div className="text-[#08111F] mb-2" style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.3 }}>
        {title}
      </div>
      <p className="text-[#6F8190] mb-5" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>
        {note}
      </p>
      <ul className="space-y-2.5">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2.5 text-[#08111F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
            <span className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0" style={{ background: dotColor }} />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 09 FIT FILTER
function LSAFitFilter() {
  const fit = [
    "Established service business or specialist clinic",
    "Real demand already exists for what you do nearby",
    "Service areas matter to your enquiries",
    "Reviews affect who actually gets contacted",
    "The website and the listing do not yet back each other up",
    "You want steady local presence over time — not ranking tricks",
  ];
  const notFit = [
    "Want guaranteed rankings or map-pack promises",
    "Want the cheapest SEO checklist run monthly",
    "Want blog posts without touching pages, listings, or trust",
    "No real local service area to work with",
    "Expect a traffic spike within weeks",
    "Not willing to improve the website or the trust signals",
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Is this right for your business?
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            Not every business needs this. Local SEO Authority works best where nearby demand already exists, and the owner wants the listing, the website, and the trust signals to back each other up over time.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7 rounded-[20px] bg-gradient-to-br from-[#DFF8F3] to-white border border-[#21B985]/20 p-9">
            <span className="text-[#21B985] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {fit.map((s) => (
                <div key={s} className="flex items-start gap-3 px-4 py-3.5 rounded-lg bg-white border border-[#E6EEF3]">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#21B985] shrink-0" />
                  <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.45 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 rounded-[20px] bg-[#F6FAFC] border border-[#E6EEF3] p-9">
            <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not the right fit</span>
            <ul className="mt-6 space-y-2.5">
              {notFit.map((s) => (
                <li key={s} className="flex items-start gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#E6EEF3] text-[#4C5E6F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                  <span className="w-1 h-1 mt-2 rounded-full bg-[#6F8190] shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10 FAQ
function LSAFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Is this just SEO?", a: "Not in the package sense. It is the work that keeps the listing, the page, the reviews, and the next step pointing the same way — so a nearby buyer is not contradicted at any step." },
    { q: "Do you guarantee rankings?", a: "No. We can show what someone searching nearby currently sees, and the work that makes that picture hold up." },
    { q: "Do you work on the Google Business Profile?", a: "Yes — categories, services, hours, service area, photos, posts, and review activity. The profile is often the first place someone checks." },
    { q: "Do you build service and area pages?", a: "Yes, where they need to exist. Pages that match how people actually search and that back up what the listing promised." },
    { q: "What if the website needs fixing first?", a: "Often it does. Listings cannot fix a page the visitor walks away from. If the service or service-area pages are weak, that is the first work." },
    { q: "How do reviews connect to this?", a: "Reviews influence both the listing decision and the page decision. We place recent reviews where someone is deciding — beside the service or treatment, not under a separate tab." },
    { q: "How does this connect to enquiries?", a: "A local search has to land somewhere. We keep the listing, the page, and the next step asking for the same kind of contact." },
    { q: "What happens first?", a: "A review of what a nearby buyer currently sees. Then we agree what to correct first, in order of return." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What business owners ask about local SEO</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-7 py-6 hover:bg-[#F6FAFC] transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600 }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0">{open === i ? <Minus size={14} /> : <Plus size={14} />}</span>
                  </div>
                  {open === i && <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>{f.a}</p>}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 11 CTA
function LSACta() {
  return (
    <section id="cta" className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #14B8A6 0%, transparent 45%), radial-gradient(circle at 90% 20%, #35C7D8 0%, transparent 45%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '54px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
                See why nearby customers<br />are finding other businesses first
              </h2>
              <p className="mt-6 text-white/65 max-w-[560px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                We review what a nearby customer or patient sees before they ever contact you — and identify the first fixes that would change which option they pick.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Review my local visibility <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-7">
                <div className="text-white/45 uppercase tracking-[0.14em] mb-5" style={{ fontSize: '10.5px', fontWeight: 700 }}>What we look at</div>
                <div className="space-y-3.5">
                  {[
                    "What shows up for a local search today",
                    "Where the listing and the page disagree",
                    "Whether reviews land where they help",
                    "Whether the next step matches the intent",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#35C7D8] shrink-0 shadow-[0_0_6px_#35C7D8]" />
                      <span className="text-white/85" style={{ fontSize: '13.5px', lineHeight: 1.45 }}>{t}</span>
                    </div>
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

export function LocalSEO() {
  return (
    <main>
      <LSAHero />
      <LSAProblem />
      <LSATrustQuadrant />
      <LSAMaintenanceContrast />
      <LSACoverageMap />
      <LSAWebsiteFirst />
      <VisibilityCycle />
      <LSAInPractice />
      <LSAFitFilter />
      <LSAFaq />
      <LSACta />
    </main>
  );
}
