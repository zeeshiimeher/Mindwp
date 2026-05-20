import { useState } from "react";
import { ArrowRight, MapPin, Search, Building2, Star, FileText, Globe, RefreshCw, Plus, Minus, AlertCircle, CheckCircle2, Quote } from "lucide-react";

// 2. HERO
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
          <p className="mt-8 text-white/70 max-w-[540px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            Someone nearby needs the service you offer right now. Google shows three businesses. Yours is missing, incomplete, or inconsistent enough that Google does not trust what it sees.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "Scattered details", c: "#E76F6F" }, { l: "Incomplete profile", c: "#F4B740" }, { l: "Hidden services", c: "#6F8190" }].map((x) => (
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
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>Postcode N6 — within 3 mi</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#F4B740]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_6px_#F4B740]" /> Weak
              </span>
            </div>

            {/* Map pack indicator */}
            <div className="mb-3 p-4 rounded-lg border border-white/8 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-3">
                <span className="text-white/50 uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>Map pack visibility</span>
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
                  <span className="text-[#E76F6F]" style={{ fontSize: '11px', fontWeight: 600 }}>You — not in pack</span>
                </div>
              </div>
            </div>

            {/* Other signals */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Services indexed", value: "2 of 7", state: "warn" },
                { label: "Citations match", value: "62%", state: "warn" },
                { label: "Reviews this month", value: "0", state: "risk" },
                { label: "Rank stable", value: "-3 ↓", state: "risk" },
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

// 3. PACKAGE SEO VS AUTHORITY — Decision Board
function PackageVsAuthority() {
  const decisions = [
    { name: "Scope of work", left: "Tasks billed each month", right: "Trust signals being built" },
    { name: "Starting point", left: "Templated audit", right: "What Google currently believes" },
    { name: "Results timeline", left: "Promised in weeks", right: "Earned over months" },
    { name: "What it measures", left: "Activity reports", right: "Visibility, intent, conversion" },
    { name: "What happens after setup", left: "Repeat tasks", right: "Maintained signal layer" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Authority decision board</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Package SEO vs local authority system
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Most SEO sells activity. Local authority builds trust signals Google can verify.
          </p>
        </div>

        <div className="rounded-[20px] bg-white border border-[#E6EEF3] p-8 lg:p-10">
          <div className="grid grid-cols-12 gap-4 mb-6 items-center">
            <div className="col-span-12 md:col-span-4">
              <div className="rounded-xl border border-[#E6EEF3] bg-[#F9FCFD] p-5">
                <div className="text-[#6F8190] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Side A</div>
                <div className="text-[#08111F] mt-1.5" style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.015em' }}>Package SEO</div>
                <div className="text-[#6F8190] mt-1" style={{ fontSize: '12.5px' }}>Sells activity. Reports the work done.</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 text-center">
              <div className="inline-flex flex-col items-center">
                <div className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10px', fontWeight: 700 }}>Decision points</div>
                <div className="mt-1 text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 600 }}>five places they diverge</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4">
              <div className="rounded-xl border border-[#14B8A6]/30 bg-gradient-to-br from-[#DFF8F3] to-white p-5">
                <div className="text-[#14B8A6] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Side B</div>
                <div className="text-[#08111F] mt-1.5" style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.015em' }}>Local authority system</div>
                <div className="text-[#08111F]/70 mt-1" style={{ fontSize: '12.5px' }}>Builds signals Google can verify.</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            {decisions.map((d, i) => (
              <div key={d.name} className="grid grid-cols-12 gap-4 items-stretch">
                <div className="col-span-12 md:col-span-4">
                  <div className="h-full px-4 py-3.5 rounded-lg border border-[#E6EEF3] bg-[#F9FCFD] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6F8190]" />
                    <span className="text-[#4C5E6F]" style={{ fontSize: '13.5px' }}>{d.left}</span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4 flex items-center justify-center">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-[#E6EEF3]">
                    <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em' }}>0{i + 1}</span>
                    <span className="text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 600 }}>{d.name}</span>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <div className="h-full px-4 py-3.5 rounded-lg border border-[#14B8A6]/25 bg-gradient-to-br from-[#DFF8F3]/40 to-white flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] shadow-[0_0_6px_#14B8A6]" />
                    <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500 }}>{d.right}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. SIGNAL AUDIT
function SignalAudit() {
  const families = [
    {
      icon: Globe, name: "Website foundation", state: "weak",
      checks: [{ label: "Service pages", s: "weak" }, { label: "Schema markup", s: "missing" }, { label: "Local content", s: "weak" }],
    },
    {
      icon: Building2, name: "Google Business Profile", state: "weak",
      checks: [{ label: "Categories", s: "weak" }, { label: "Services list", s: "missing" }, { label: "Posts", s: "missing" }],
    },
    {
      icon: FileText, name: "Citations and directories", state: "active",
      checks: [{ label: "NAP consistency", s: "weak" }, { label: "Industry directories", s: "active" }, { label: "Aggregators", s: "active" }],
    },
    {
      icon: Search, name: "Content coverage", state: "missing",
      checks: [{ label: "Service areas", s: "missing" }, { label: "Service detail", s: "weak" }, { label: "Local context", s: "missing" }],
    },
  ];
  const tone = (s: string) => s === "active" ? "#21B985" : s === "weak" ? "#F4B740" : "#E76F6F";
  const label = (s: string) => s === "active" ? "Active" : s === "weak" ? "Weak" : "Missing";

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Local presence board</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Where your local visibility stands right now
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            Google needs several signals to agree before it can confidently show your business for nearby searches.
          </p>
        </div>

        <div className="relative rounded-[20px] bg-[#F6FAFC] border border-[#E6EEF3] p-8 lg:p-12 overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>Four signal families · one local search center</span>
            <div className="flex items-center gap-3 text-[#6F8190]" style={{ fontSize: '11px' }}>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]" /> Missing</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#F4B740]" /> Weak</span>
              <span className="inline-flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#21B985]" /> Active</span>
            </div>
          </div>

          <div className="relative grid grid-cols-12 gap-5 items-stretch">
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(53,199,216,0.12) 0%, transparent 70%)' }} />
            </div>

            {families.slice(0, 2).map((f, i) => (
              <div key={f.name} className={`col-span-12 md:col-span-6 lg:col-span-5 ${i === 1 ? 'lg:col-start-8' : ''}`}>
                <SignalCard f={f} tone={tone} label={label} />
              </div>
            ))}

            <div className="col-span-12 lg:col-span-2 lg:col-start-6 lg:row-span-2 flex items-center justify-center">
              <div className="relative w-[180px] h-[180px] rounded-full bg-gradient-to-br from-[#061323] to-[#103E5A] flex flex-col items-center justify-center text-center border border-[#35C7D8]/25 shadow-[0_20px_60px_rgba(8,17,31,0.18)]">
                <div className="absolute inset-2 rounded-full border border-[#35C7D8]/15" />
                <Search size={20} className="text-[#35C7D8]" />
                <div className="text-white mt-2" style={{ fontSize: '13px', fontWeight: 600 }}>Local search</div>
                <div className="text-white/55 mt-0.5" style={{ fontSize: '10.5px' }}>center</div>
              </div>
            </div>

            {families.slice(2).map((f, i) => (
              <div key={f.name} className={`col-span-12 md:col-span-6 lg:col-span-5 ${i === 1 ? 'lg:col-start-8' : ''}`}>
                <SignalCard f={f} tone={tone} label={label} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalCard({ f, tone, label }: any) {
  return (
    <div className="h-full p-7 bg-white rounded-2xl border border-[#E6EEF3]">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-lg bg-[#EEF6FA] border border-[#D8E6EE] flex items-center justify-center text-[#0E2740]"><f.icon size={18} /></div>
          <span className="text-[#08111F]" style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.015em' }}>{f.name}</span>
        </div>
        <span className="px-2.5 py-1 rounded-full uppercase tracking-[0.12em]" style={{ fontSize: '10px', fontWeight: 700, color: tone(f.state), background: `${tone(f.state)}18`, border: `1px solid ${tone(f.state)}40` }}>
          {label(f.state)}
        </span>
      </div>
      <div className="space-y-2">
        {f.checks.map((c: any) => (
          <div key={c.label} className="flex items-center justify-between px-3.5 py-2.5 rounded-md border border-[#E6EEF3] bg-[#F9FCFD]">
            <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 500 }}>{c.label}</span>
            <span className="inline-flex items-center gap-1.5 text-[#4C5E6F]" style={{ fontSize: '11.5px', fontWeight: 500 }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: tone(c.s) }} /> {label(c.s)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// 5. STRUCTURED LOCAL COMPARISON
function StructuredCompare() {
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Off-the-shelf SEO vs local visibility that holds
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6 rounded-[20px] bg-white border border-[#E6EEF3] p-9">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Off-the-shelf SEO</span>
              <span className="text-[#6F8190]" style={{ fontSize: '11px' }}>Disconnected · Activity-driven</span>
            </div>
            <div className="text-[#08111F] mb-7" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Keyword activity. Reports.<br />Disconnected work.
            </div>
            <div className="relative h-[180px] rounded-xl bg-[#F6FAFC] border border-[#E6EEF3] p-4">
              {["Keyword list", "Backlink task", "Audit report", "Blog post"].map((label, i) => {
                const positions = [{ top: '8%', left: '5%' }, { top: '12%', right: '8%' }, { top: '55%', left: '12%' }, { top: '60%', right: '15%' }];
                return (
                  <div key={label} className="absolute px-3 py-1.5 rounded-md bg-white border border-[#E6EEF3] text-[#4C5E6F]" style={{ ...positions[i], fontSize: '11.5px' }}>{label}</div>
                );
              })}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#6F8190]" style={{ fontSize: '11px', fontStyle: 'italic' }}>nothing connecting them</div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 rounded-[20px] bg-gradient-to-br from-[#061323] to-[#103E5A] p-9 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Structured local</span>
                <span className="text-white/55" style={{ fontSize: '11px' }}>Connected · Compounding</span>
              </div>
              <div className="text-white mb-7" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Pages, profile, citations,<br />content, reviews — connected.
              </div>

              <div className="relative h-[180px] rounded-xl bg-white/[0.03] border border-white/10 p-4">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 160" fill="none" preserveAspectRatio="none">
                  <path d="M40 80 L130 40 L240 80 L350 40 M130 40 L240 120 M240 80 L130 120" stroke="#35C7D8" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="3 4" />
                </svg>
                {["Pages", "Profile", "Citations", "Content", "Reviews"].map((label, i) => {
                  const positions = [
                    { top: '40%', left: '8%' }, { top: '20%', left: '32%' }, { top: '40%', left: '57%' }, { top: '20%', right: '8%' }, { top: '70%', left: '40%' }
                  ];
                  return (
                    <div key={label} className="absolute px-3 py-1.5 rounded-md bg-[#061323]/60 border border-[#35C7D8]/30 text-white/90 backdrop-blur-sm" style={{ ...positions[i], fontSize: '11.5px', fontWeight: 500 }}>{label}</div>
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

// 6. ASSUMPTIONS
function Assumptions() {
  const items = [
    { myth: "More traffic will fix everything.", reality: "Traffic without structure just moves the leak. Visitors arrive and bounce against unclear pages." },
    { myth: "SEO can work around a messy website.", reality: "Google's trust starts with what is on your site. Mess on the surface caps how much authority can compound." },
    { myth: "We should be ranking by next month.", reality: "Local authority is earned over months as Google verifies signals. The fast version is usually paid placement." },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Three assumptions that keep you invisible
          </h2>
        </div>
        <div className="space-y-5">
          {items.map((it, i) => (
            <div key={i} className="rounded-[20px] border border-[#E6EEF3] bg-gradient-to-r from-[#F6FAFC] via-white to-white p-2 grid grid-cols-12 gap-0 overflow-hidden">
              <div className="col-span-12 md:col-span-5 p-7">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#FDECEC] text-[#E76F6F] flex items-center justify-center"><AlertCircle size={14} /></span>
                  <span className="text-[#E76F6F] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Myth 0{i + 1}</span>
                </div>
                <div className="text-[#08111F]" style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>"{it.myth}"</div>
              </div>
              <div className="col-span-12 md:col-span-7 p-7 bg-gradient-to-br from-[#DFF8F3]/40 to-white rounded-2xl border border-[#21B985]/15">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-7 h-7 rounded-full bg-[#DFF8F3] text-[#21B985] flex items-center justify-center"><CheckCircle2 size={14} /></span>
                  <span className="text-[#21B985] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Reality</span>
                </div>
                <p className="text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.6 }}>{it.reality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. LOCAL COVERAGE MAP
function CoverageMap() {
  const cov = [
    { icon: Globe, label: "Website structure" },
    { icon: FileText, label: "Service pages" },
    { icon: Building2, label: "Google Business Profile" },
    { icon: MapPin, label: "Citations and directories" },
    { icon: Star, label: "Reviews and reputation" },
    { icon: Search, label: "Local content" },
    { icon: FileText, label: "Reporting" },
    { icon: RefreshCw, label: "Ongoing improvement" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            What we handle for your local visibility
          </h2>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#061323] to-[#0E2740] p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

          <div className="relative">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                <span className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>Local coverage map</span>
              </div>
              <span className="text-white/45" style={{ fontSize: '11px' }}>08 zones · single owned system</span>
            </div>

            {/* Service-area concentric */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
              <div className="lg:col-span-1">
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
                <div className="mt-4 text-center">
                  <div className="text-white/55 uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Service area</div>
                  <div className="text-white mt-1" style={{ fontSize: '13.5px', fontWeight: 500 }}>Authority radius</div>
                </div>
              </div>

              <div className="lg:col-span-2 grid grid-cols-2 gap-3">
                {cov.map((c, i) => (
                  <div key={c.label} className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/10 bg-white/[0.04]">
                    <span className="text-[#35C7D8] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>{String(i + 1).padStart(2, '0')}</span>
                    <div className="w-9 h-9 rounded-md bg-white/[0.04] border border-white/8 flex items-center justify-center text-[#35C7D8]"><c.icon size={15} /></div>
                    <span className="text-white" style={{ fontSize: '13.5px', fontWeight: 500 }}>{c.label}</span>
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

// 8. VISIBILITY CYCLE
function VisibilityCycle() {
  const phases = [
    { name: "Check", note: "What does Google currently see?", angle: 0 },
    { name: "Clarify", note: "Fix details, services, structure.", angle: 90 },
    { name: "Build", note: "Pages, citations, content, reviews.", angle: 180 },
    { name: "Adjust", note: "Read the signal. Refine. Repeat.", angle: 270 },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>After we start</div>
            <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              What happens after we start
            </h2>
            <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
              A repeating cycle: check, clarify, build, adjust. Each loop adds signal. The compounding does the work.
            </p>
            <div className="mt-7 flex items-center gap-2.5 text-[#14B8A6]" style={{ fontSize: '13px', fontWeight: 600 }}>
              <RefreshCw size={14} /> Monthly visibility cycle
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

// 9. PROOF STORY
function LSAProofStory() {
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[680px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            What this looked like for a real business
          </h2>
        </div>
        <div className="rounded-[20px] bg-white border border-[#E6EEF3] p-10 lg:p-14 grid grid-cols-12 gap-10 items-center">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-7 h-7 rounded-md bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center"><Quote size={14} /></span>
              <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Context</span>
            </div>
            <div className="text-[#08111F]" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.25 }}>
              Dental practice paying for ads. Invisible in organic search.
            </div>
            <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              Services were separated, Google profile completed, directory details fixed, and organic visibility started growing. No ranking promises — measured signal, earned over months.
            </p>
            <div className="mt-7 grid grid-cols-3 gap-3">
              {[
                { label: "Services indexed", before: "2 of 9", after: "9 of 9" },
                { label: "Profile complete", before: "48%", after: "100%" },
                { label: "Citation match", before: "55%", after: "94%" },
              ].map((m) => (
                <div key={m.label} className="rounded-lg border border-[#E6EEF3] bg-[#F6FAFC] p-3">
                  <div className="text-[#6F8190]" style={{ fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.06em' }}>{m.label}</div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span className="text-[#6F8190] line-through" style={{ fontSize: '11.5px' }}>{m.before}</span>
                    <span className="text-[#14B8A6]" style={{ fontSize: '13.5px', fontWeight: 600 }}>{m.after}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative">
                <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>What changed</span>
                <div className="mt-3 text-white" style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.3, letterSpacing: '-0.015em' }}>
                  Clearer service visibility. Less dependence on paid clicks for every enquiry.
                </div>

                <div className="mt-6 space-y-2.5">
                  {[
                    { icon: FileText, label: "Service pages", note: "Treatments separated, intent matched" },
                    { icon: Building2, label: "Google profile", note: "Categories, services, posts complete" },
                    { icon: MapPin, label: "Citations", note: "Directory details aligned" },
                    { icon: Search, label: "Local content", note: "Area context published" },
                  ].map((s) => (
                    <div key={s.label} className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-white/10 bg-white/[0.03]">
                      <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#35C7D8]"><s.icon size={14} /></div>
                      <div className="flex-1">
                        <div className="text-white" style={{ fontSize: '12.5px', fontWeight: 600 }}>{s.label}</div>
                        <div className="text-white/55" style={{ fontSize: '11px' }}>{s.note}</div>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-white/50" style={{ fontSize: '11px' }}>Story illustrative. No ranking guarantee.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. FIT FILTER
function LSAFitFilter() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Is this right for your business?
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7 rounded-[20px] bg-gradient-to-br from-[#DFF8F3] to-white border border-[#21B985]/20 p-9">
            <span className="text-[#21B985] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {["You run real services locally", "You want lasting visibility", "Your details are wrong or missing online", "You are ready for ongoing work"].map((s) => (
                <div key={s} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-[#E6EEF3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985]" />
                  <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 rounded-[20px] bg-[#F6FAFC] border border-[#E6EEF3] p-9">
            <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not</span>
            <ul className="mt-6 space-y-2.5">
              {["You expect guaranteed ranking", "You need immediate traffic", "Your website has problems you will not address", "You want a one-off audit only"].map((s) => (
                <li key={s} className="flex items-center gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#E6EEF3] text-[#4C5E6F]" style={{ fontSize: '13px' }}>
                  <span className="w-1 h-1 rounded-full bg-[#6F8190]" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 11. FAQ
function LSAFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "What is the difference between ongoing SEO and a one-time audit?", a: "An audit tells you where you stand. Ongoing work earns and maintains the signal Google needs to trust you over time." },
    { q: "Can you guarantee we will rank higher?", a: "No serious operator can. We can show what Google currently sees, what is missing, and build the signal layer that compounds." },
    { q: "How long does local SEO take?", a: "Foundation in weeks. Compounding effect over months. Local authority is earned, not switched on." },
    { q: "Do we need a new website first?", a: "Not always. Often we can work with what is there. Sometimes the site has structural issues that cap how much can compound." },
    { q: "What is included each month?", a: "Profile, citation, content, and review work — paced to compound. Specific scope is set during the conversation." },
    { q: "What makes this different from an SEO package?", a: "Packages sell tasks. We build connected signals — pages, profile, citations, content, reviews — as one operating layer." },
    { q: "Can this work with ads?", a: "Yes. Ads buy attention; local authority earns it. Together they read clearer signal back into the business." },
    { q: "How do we start?", a: "Start a conversation. We map what Google can see, what it cannot trust, and what to fix first." },
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

// 12. CTA
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
              <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                We will map what Google can see, what it cannot trust, and what needs fixing first.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Start a Conversation <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                <div className="text-white/45 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 700 }}>What we deliver back</div>
                <div className="space-y-2.5">
                  {[{ n: "01", t: "Signal audit — what Google currently sees" }, { n: "02", t: "Trust gaps — what it cannot verify" }, { n: "03", t: "Priority fixes — in order of return" }].map((s) => (
                    <div key={s.n} className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-white/8 bg-white/[0.02]">
                      <span className="text-[#35C7D8] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>{s.n}</span>
                      <span className="text-white/85" style={{ fontSize: '13px' }}>{s.t}</span>
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

// 13. RELATED
function LSARelated() {
  const items = [
    { tag: "Connected system", title: "Smart Website Systems", note: "Service pages and enquiry paths give local visibility work somewhere useful to land." },
    { tag: "Connected system", title: "Reputation & Review Systems", note: "Reviews strengthen trust and help local decision-making." },
    { tag: "Resource", title: "Service Pages vs One Generic Services Page", note: "Clear service structure helps Google match the right search to the right page." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Related Services</h2>
          <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>Local visibility works better when the business foundation around it is clear.</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#14B8A6]/30 to-transparent" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5">
            {items.map((it) => (
              <a key={it.title} href="#" className="rounded-2xl bg-white border border-[#E6EEF3] p-7 hover:shadow-[0_12px_40px_rgba(8,17,31,0.08)] transition-shadow group">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#0E2740] uppercase tracking-[0.18em] px-2 py-1 rounded bg-[#DFF8F3]" style={{ fontSize: '10px', fontWeight: 700 }}>{it.tag}</span>
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]" />
                </div>
                <div className="text-[#08111F] mb-2" style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.25 }}>{it.title}</div>
                <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-1.5 mt-3" style={{ fontSize: '9.5px', fontWeight: 700 }}>Why this connects</div>
                <p className="text-[#4C5E6F] mb-5" style={{ fontSize: '13px', lineHeight: 1.55 }}>{it.note}</p>
                <span className="inline-flex items-center gap-1.5 text-[#0E2740]" style={{ fontSize: '13px', fontWeight: 600 }}>
                  Continue <ArrowRight size={14} />
                </span>
              </a>
            ))}
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
      <PackageVsAuthority />
      <SignalAudit />
      <StructuredCompare />
      <Assumptions />
      <CoverageMap />
      <VisibilityCycle />
      <LSAProofStory />
      <LSAFitFilter />
      <LSAFaq />
      <LSACta />
      <LSARelated />
    </main>
  );
}
