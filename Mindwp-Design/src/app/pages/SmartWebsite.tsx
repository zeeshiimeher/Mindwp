import { useState } from "react";
import { ArrowRight, Inbox, UserCheck, Repeat, AlertTriangle, Zap, MapPin, Brain, Database, Eye, Layers, Anchor, GitBranch, Shield, Handshake, Plus, Minus, Quote } from "lucide-react";
import { Footer } from "../components/Footer";

// 2. HERO
function SWSHero() {
  const events = [
    { tone: "#35C7D8", state: "NEW", label: "Form: bathroom remodel — Camden", time: "09:14", note: "Routed to inbox", live: true },
    { tone: "#14B8A6", state: "ASSIGNED", label: "Voicemail: kitchen quote", time: "09:31", note: "Assigned to Jess" },
    { tone: "#F4B740", state: "FOLLOW-UP", label: "Quote pending — day 3", time: "—", note: "Reminder due today" },
    { tone: "#E76F6F", state: "LOST", label: "Form: tiling — Highbury", time: "Yesterday", note: "No reply for 26h" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 10%, #35C7D8 0%, transparent 45%), radial-gradient(ellipse at 90% 90%, #14B8A6 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-32 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#35C7D8]/30 bg-[#35C7D8]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span className="text-[#35C7D8] uppercase tracking-[0.2em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Smart Websites</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
            Enquiries Arrive.<br /><span className="text-white/45">Nobody Picks<br />Them Up.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-[540px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            Somebody finds your business online. Ready to talk. They fill in a form. That message goes to an email nobody checks until the end of the day. They have already rung someone else.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "Lost leads", c: "#E76F6F" }, { l: "No follow-up", c: "#F4B740" }, { l: "No tracking", c: "#6F8190" }].map((x) => (
              <span key={x.l} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }} />
                <span className="text-white/80" style={{ fontSize: '12.5px', fontWeight: 500 }}>{x.l}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
              <div>
                <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Live Enquiry Feed</div>
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>Today — 4 events</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#35C7D8]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8] animate-pulse" /> Live
              </span>
            </div>
            <div className="space-y-2">
              {events.map((e, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/8 bg-white/[0.02]">
                  <span className="w-1 h-9 rounded-full" style={{ background: e.tone, boxShadow: `0 0 10px ${e.tone}55` }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="px-1.5 py-0.5 rounded uppercase tracking-[0.14em]" style={{ fontSize: '9px', fontWeight: 700, color: e.tone, background: `${e.tone}18`, border: `1px solid ${e.tone}40` }}>{e.state}</span>
                      {e.live && <span className="text-[#35C7D8]" style={{ fontSize: '9.5px', fontWeight: 600 }}>● LIVE</span>}
                    </div>
                    <div className="text-white truncate" style={{ fontSize: '13px', fontWeight: 600 }}>{e.label}</div>
                    <div className="text-white/50" style={{ fontSize: '11px' }}>{e.note}</div>
                  </div>
                  <div className="text-white/40 tabular-nums" style={{ fontSize: '11px' }}>{e.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. ENQUIRY LEAK DIAGNOSIS
function EnquiryLeak() {
  const moments = [
    { name: "Discovery", note: "Found in search", state: "ok" },
    { name: "Capture", note: "Form submitted", state: "ok" },
    { name: "Response", note: "Hours pass before reply", state: "leak", main: true },
    { name: "Follow-up", note: "Nobody owns the chase", state: "weak" },
    { name: "Visibility", note: "Owner cannot see what happened", state: "weak" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Diagnosis</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Where enquiries leak out of your business
          </h2>
        </div>

        <div className="rounded-[20px] bg-white border border-[#E6EEF3] p-10 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-12 gap-4 items-stretch">
            {moments.map((m, i) => {
              const dom = m.main;
              const tone = m.state === "leak" ? "#E76F6F" : m.state === "weak" ? "#F4B740" : "#21B985";
              return (
                <div key={i} className={`${dom ? 'col-span-12 md:col-span-4' : 'col-span-6 md:col-span-2'} relative`}>
                  <div className={`h-full rounded-xl p-5 ${dom ? 'bg-gradient-to-br from-[#FDECEC] to-white border border-[#E76F6F]/30 shadow-[0_12px_40px_rgba(231,111,111,0.15)]' : 'bg-[#F6FAFC] border border-[#E6EEF3]'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em' }}>0{i + 1}</span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: tone, boxShadow: dom ? `0 0 10px ${tone}` : 'none' }} />
                    </div>
                    <div className="text-[#08111F]" style={{ fontSize: dom ? '24px' : '14.5px', fontWeight: 600, letterSpacing: '-0.015em' }}>{m.name}</div>
                    <div className={`mt-2 ${dom ? 'text-[#08111F]' : 'text-[#6F8190]'}`} style={{ fontSize: dom ? '14.5px' : '12px', lineHeight: 1.5 }}>{m.note}</div>
                    {dom && (
                      <div className="mt-5 pt-4 border-t border-[#E76F6F]/20 flex items-center gap-2 text-[#E76F6F]" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
                        <AlertTriangle size={12} /> MAIN LEAK
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-[#E6EEF3] flex items-center justify-between text-[#6F8190]" style={{ fontSize: '12.5px' }}>
            <span>Discovery → Capture → <span className="text-[#E76F6F]">Response</span> → Follow-up → Visibility</span>
            <span>Most enquiries die between Capture and Response.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. EXISTING SITE VS SMART WEBSITE
function SiteContrast() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The difference between a site that exists and one that earns
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-6 rounded-[20px] bg-[#F6FAFC] border border-[#E6EEF3] p-9 relative">
            <div className="flex items-center justify-between mb-7">
              <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Site that exists</span>
              <span className="text-[#6F8190]" style={{ fontSize: '11px' }}>Passive · Disconnected</span>
            </div>
            <div className="text-[#08111F] mb-7" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Information online.<br />Nothing connected behind it.
            </div>

            <div className="space-y-3">
              {[
                "Generic 'services' page",
                "Form goes to a single inbox",
                "No routing, no follow-up",
                "Owner has no idea what arrived",
                "Reviews collected by accident",
              ].map((s) => (
                <div key={s} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-[#E6EEF3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F8190]" />
                  <span className="text-[#4C5E6F]" style={{ fontSize: '13.5px' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 rounded-[20px] bg-gradient-to-br from-[#061323] to-[#103E5A] p-9 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <div className="flex items-center justify-between mb-7">
                <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Smart Website that earns</span>
                <span className="text-white/55" style={{ fontSize: '11px' }}>Structured · Owned · Visible</span>
              </div>
              <div className="text-white mb-7" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                A working surface.<br />Connected operating layer underneath.
              </div>

              <div className="space-y-3">
                {[
                  "Service-specific structured pages",
                  "Capture surface for every channel",
                  "Routing + follow-up running on schedule",
                  "Owner sees the queue and the outcome",
                  "Proof captured by design",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/[0.04] border border-white/8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                    <span className="text-white/85" style={{ fontSize: '13.5px' }}>{s}</span>
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

// 5. SYSTEM HANDOFF
function SystemHandoff() {
  const targets = [
    { icon: Brain, name: "AI Lead Handling", role: "Picks up replies, qualifies, hands warm leads on" },
    { icon: Database, name: "CRM Automation", role: "Holds the record, schedules follow-up, tracks state" },
    { icon: MapPin, name: "Local SEO Authority", role: "Feeds visibility — pages, profile, citations, reviews" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            What the website hands off — and to what
          </h2>
        </div>

        <div className="rounded-[20px] bg-white border border-[#E6EEF3] p-10 lg:p-12">
          <div className="grid grid-cols-12 gap-8 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <div className="h-full rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <div className="relative">
                  <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Entry point</span>
                  <div className="mt-3 text-white" style={{ fontSize: '32px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.15 }}>Smart Website Systems</div>
                  <p className="mt-4 text-white/65" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                    Where contact begins. Owns: structure, capture, first-step routing, ownership of every enquiry.
                  </p>
                  <div className="mt-7 grid grid-cols-2 gap-2">
                    {["Structure", "Capture", "Route", "Track"].map((x) => (
                      <div key={x} className="px-3 py-2 rounded-md bg-white/[0.04] border border-white/8 text-white/80" style={{ fontSize: '12px', fontWeight: 500 }}>{x}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 flex flex-col justify-between gap-3">
              {targets.map((t, i) => (
                <div key={t.name} className="relative rounded-xl border border-[#E6EEF3] bg-white p-6 flex items-center gap-5">
                  <div className="absolute -left-8 top-1/2 -translate-y-1/2 hidden lg:flex items-center" style={{ width: '32px' }}>
                    <span className="w-full h-px bg-gradient-to-r from-[#35C7D8]/60 to-[#35C7D8]/20" />
                    <span className="absolute right-0 w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-[#EEF6FA] border border-[#D8E6EE] flex items-center justify-center text-[#0E2740]"><t.icon size={20} /></div>
                  <div className="flex-1">
                    <div className="text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Hands off to</div>
                    <div className="text-[#08111F] mt-0.5" style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '-0.01em' }}>{t.name}</div>
                    <div className="text-[#4C5E6F] mt-1" style={{ fontSize: '13px' }}>{t.role}</div>
                  </div>
                  <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>OWNS{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. OPERATING COVERAGE
function OperatingCoverage() {
  const areas = [
    { icon: Layers, title: "Structure", purpose: "How services are organised on the site", items: ["Service pages", "Area pages", "Page hierarchy"], why: "Visitors and Google can both tell what you do" },
    { icon: Inbox, title: "Capture", purpose: "Where contact actually lands", items: ["Forms", "Calls", "Channels into one surface"], why: "Nothing arrives in a place nobody owns" },
    { icon: GitBranch, title: "Routing", purpose: "Who sees what, when", items: ["Right enquiry, right person", "State tracking", "Owner notified"], why: "First reply does not depend on someone checking" },
    { icon: Eye, title: "Visibility", purpose: "What the owner can see", items: ["Queue view", "Status", "Outcome"], why: "Decisions stop relying on memory" },
    { icon: Shield, title: "Protection", purpose: "What stops getting lost", items: ["Spam filtered", "Duplicates merged", "Recovery flows"], why: "Leads do not slip through the cracks quietly" },
    { icon: Handshake, title: "Handover", purpose: "What you walk away with", items: ["Documented system", "Owner trained", "Working state"], why: "The team can run the basics on their own" },
  ];
  const [active, setActive] = useState(0);
  const a = areas[active];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Operating coverage</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Everything in scope from day one</h2>
          <p className="mt-6 text-[#4C5E6F] max-w-[640px]" style={{ fontSize: '16px', lineHeight: 1.65 }}>This is not a thin brochure rebuild. The site is planned around how people find you, what they need to know, and what your team needs when they get in touch.</p>
        </div>

        <div className="rounded-[20px] border border-[#E6EEF3] bg-[#F6FAFC] overflow-hidden">
          <div className="px-7 py-4 border-b border-[#E6EEF3] bg-white flex items-center justify-between">
            <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>Coverage blueprint — Smart Website System</span>
            <span className="text-[#6F8190]" style={{ fontSize: '11.5px' }}>06 / 06 areas in scope</span>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 border-r border-[#E6EEF3] bg-white">
              {areas.map((x, i) => (
                <button key={x.title} onClick={() => setActive(i)} className={`w-full text-left px-6 py-5 flex items-center gap-4 border-b border-[#EEF3F6] transition-colors ${active === i ? 'bg-[#F6FAFC]' : 'hover:bg-[#F9FCFD]'}`}>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${active === i ? 'bg-[#0E2740] text-white' : 'bg-[#EEF6FA] text-[#0E2740]'}`}><x.icon size={16} /></div>
                  <div className="flex-1">
                    <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{x.title}</div>
                    <div className="text-[#6F8190]" style={{ fontSize: '11.5px' }}>{x.purpose}</div>
                  </div>
                  <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em' }}>0{i + 1}</span>
                </button>
              ))}
            </div>
            <div className="col-span-12 md:col-span-8 p-10 bg-white">
              <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-3" style={{ fontSize: '10.5px', fontWeight: 700 }}>Coverage area · 0{active + 1}</div>
              <div className="text-[#08111F]" style={{ fontSize: '34px', fontWeight: 600, letterSpacing: '-0.025em' }}>{a.title}</div>
              <div className="text-[#4C5E6F] mt-2" style={{ fontSize: '15px' }}>{a.purpose}</div>

              <div className="mt-8 grid grid-cols-12 gap-5">
                <div className="col-span-12 md:col-span-7">
                  <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10px', fontWeight: 700 }}>Included</div>
                  <ul className="space-y-2">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 px-4 py-3 rounded-lg border border-[#E6EEF3] bg-[#F9FCFD]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#21B985]" />
                        <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500 }}>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10px', fontWeight: 700 }}>Why it matters</div>
                  <div className="rounded-xl border border-[#35C7D8]/25 bg-gradient-to-br from-[#EEFBFD] to-white p-5 text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>{a.why}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. BUSINESS ENVIRONMENT FIT
function EnvFit() {
  const envs = [
    { name: "Service businesses", starts: "Phone call, form, sometimes a referral", breaks: "Calls go to voicemail while the team is on a job", handles: "Capture every channel, route to one owner" },
    { name: "Appointment-based", starts: "Booking request, DM, repeat visit", breaks: "Reminders depend on someone remembering", handles: "Booking clarity, automated reminders, review timing" },
    { name: "Multi-location", starts: "Searches by area or service", breaks: "Single generic page makes locations invisible", handles: "Distinct area pages, consistent capture, clear routing" },
    { name: "Single-offer campaigns", starts: "Ad click, focused landing", breaks: "Generic site dilutes intent before action", handles: "Focused page, structured capture, traceable outcome" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Built for businesses where the first contact matters
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>This is for businesses where a call, form, quote request, or booking starts real work.</p>
        </div>
        <div className="rounded-[20px] bg-white border border-[#E6EEF3] overflow-hidden">
          <div className="hidden md:grid grid-cols-12 gap-6 px-7 py-4 bg-[#F9FCFD] border-b border-[#E6EEF3] text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>
            <div className="md:col-span-3">Environment</div>
            <div className="md:col-span-3">How enquiry starts</div>
            <div className="md:col-span-3">What breaks</div>
            <div className="md:col-span-3">What the site must handle</div>
          </div>
          {envs.map((e, i) => (
            <div key={e.name} className={`grid grid-cols-12 gap-6 px-7 py-7 items-start ${i < envs.length - 1 ? 'border-b border-[#EEF3F6]' : ''}`}>
              <div className="col-span-12 md:col-span-3">
                <span className="text-[#6F8190] tabular-nums mb-2 block" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.12em' }}>0{i + 1}</span>
                <div className="text-[#08111F]" style={{ fontSize: '19px', fontWeight: 600, letterSpacing: '-0.01em', lineHeight: 1.25 }}>{e.name}</div>
              </div>
              <div className="col-span-12 md:col-span-3 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{e.starts}</div>
              <div className="col-span-12 md:col-span-3">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FDECEC] text-[#B14242]" style={{ fontSize: '11.5px', fontWeight: 500 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]" />{e.breaks}
                </span>
              </div>
              <div className="col-span-12 md:col-span-3">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEFBFD] text-[#0F8390] border border-[#35C7D8]/25" style={{ fontSize: '11.5px', fontWeight: 500 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />{e.handles}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. VISITOR TO HANDLED ENQUIRY
function VisitorToHandled() {
  const stages = [
    { name: "Discovery", note: "Search → land", emphasis: false },
    { name: "Visibility", note: "Page understands intent", emphasis: false },
    { name: "Routing", note: "Right person, right state, right time", emphasis: true },
    { name: "Follow-up", note: "Sequence runs on schedule", emphasis: false },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>From visitor to handled enquiry</h2>
        </div>

        <div className="relative rounded-[20px] bg-gradient-to-br from-[#F6FAFC] to-white border border-[#E6EEF3] p-10 lg:p-14 overflow-hidden">
          <svg className="absolute inset-x-10 top-1/2 hidden md:block" height="2" width="calc(100% - 80px)" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100%" y2="1" stroke="#D8E6EE" strokeDasharray="4 6" />
          </svg>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
            {stages.map((s, i) => (
              <div key={s.name} className={`relative ${s.emphasis ? 'md:scale-110 md:z-10' : ''}`}>
                <div className={`rounded-2xl p-6 ${s.emphasis ? 'bg-gradient-to-br from-[#061323] to-[#103E5A] shadow-[0_20px_60px_rgba(8,17,31,0.15)]' : 'bg-white border border-[#E6EEF3]'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className={s.emphasis ? 'text-[#35C7D8]' : 'text-[#6F8190]'} style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.14em' }}>STAGE 0{i + 1}</span>
                    {s.emphasis && <span className="text-[#35C7D8] uppercase" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.14em' }}>● Critical</span>}
                  </div>
                  <div className={s.emphasis ? 'text-white' : 'text-[#08111F]'} style={{ fontSize: s.emphasis ? '24px' : '20px', fontWeight: 600, letterSpacing: '-0.02em' }}>{s.name}</div>
                  <div className={`mt-2 ${s.emphasis ? 'text-white/70' : 'text-[#4C5E6F]'}`} style={{ fontSize: '13px', lineHeight: 1.55 }}>{s.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. PROOF STORY
function ProofStory() {
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[680px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What changed for a real business</h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-4 rounded-[20px] bg-white border border-[#E6EEF3] p-7">
            <span className="text-[#6F8190] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Context</span>
            <div className="mt-2 text-[#08111F]" style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em' }}>Veterinary clinic with traffic but few bookings</div>
            <p className="mt-4 text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>Regular visitors. Forms split across services. Email nobody owned. Bookings inconsistent.</p>
          </div>
          <div className="col-span-12 lg:col-span-4 rounded-[20px] bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <span className="text-[#35C7D8] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>System change</span>
              <div className="mt-2 text-white" style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em' }}>Services separated, forms connected, follow-up automated</div>
              <ul className="mt-4 space-y-2">
                {["Service pages restructured", "Single capture surface", "Auto-routing per service", "Reminder sequence live"].map((x) => (
                  <li key={x} className="flex items-center gap-2 text-white/80" style={{ fontSize: '13px' }}>
                    <span className="w-1 h-1 rounded-full bg-[#35C7D8]" /> {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 rounded-[20px] bg-gradient-to-br from-[#DFF8F3] to-white border border-[#21B985]/20 p-7">
            <span className="text-[#21B985] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>After</span>
            <div className="mt-2 text-[#08111F]" style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.25, letterSpacing: '-0.015em' }}>Bookings clear. Owner sees what happened.</div>
            <p className="mt-4 text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>Each enquiry routed to the right service. Follow-up running. The clinic stopped relying on luck.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10. COMPOUNDING EFFECT
function Compounding() {
  const lanes = [
    { name: "Ad spend clearer", note: "Trace which channel produced which booking" },
    { name: "Less manual chasing", note: "Routing and reminders quietly take the load" },
    { name: "Search traffic lands somewhere useful", note: "Structured pages, captured intent" },
    { name: "Team sees what happened", note: "Queue, status, outcome — visible to the right person" },
  ];
  return (
    <section className="bg-gradient-to-br from-[#061323] to-[#0E2740] py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="relative max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-white" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What changes when the site actually works</h2>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="rounded-2xl border border-[#35C7D8]/30 bg-gradient-to-br from-[#0E2740] to-[#061323] p-7 relative">
              <div className="absolute -inset-px rounded-2xl border border-[#35C7D8]/15 pointer-events-none" />
              <span className="text-[#35C7D8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Live signal</span>
              <div className="mt-3 text-white" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>Enquiry handled<br />09:14 → 09:16</div>
              <div className="mt-5 p-4 rounded-lg bg-white/[0.04] border border-white/8">
                <div className="text-white/55" style={{ fontSize: '11px' }}>Captured · Routed · Confirmed</div>
                <div className="mt-1 text-white" style={{ fontSize: '13.5px', fontWeight: 500 }}>Bathroom remodel — Camden</div>
                <div className="mt-3 flex items-center gap-1.5 text-[#35C7D8]" style={{ fontSize: '11px', fontWeight: 600 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8] animate-pulse" /> 2-minute response
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-3">
            {lanes.map((l, i) => (
              <div key={l.name} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5 flex items-center gap-5">
                <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-8 h-px bg-gradient-to-r from-[#35C7D8]/60 to-[#35C7D8]/20" />
                <span className="text-white/40 tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em' }}>EFFECT 0{i + 1}</span>
                <div className="flex-1">
                  <div className="text-white" style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.015em' }}>{l.name}</div>
                  <div className="text-white/55 mt-0.5" style={{ fontSize: '13px' }}>{l.note}</div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 11. BUILD METHOD
function BuildMethod() {
  const cols = [
    { title: "Inputs", items: ["Calls log", "Form history", "Existing pages", "CRM gaps", "Channels in use"], tone: "muted" },
    { title: "Build work", items: ["Map leads", "Structure pages", "Connect handling", "Handover documented"], tone: "active" },
    { title: "Working state", items: ["Clear pages", "Captured enquiries", "Assigned leads", "Follow-up running", "Tracking visible"], tone: "success" },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>From first conversation to a site pulling its weight</h2>
        </div>
        <div className="rounded-[20px] border border-[#E6EEF3] bg-[#F6FAFC] overflow-hidden">
          <div className="px-7 py-4 border-b border-[#E6EEF3] bg-white flex items-center justify-between">
            <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>Workbench — build pipeline</span>
            <span className="text-[#6F8190]" style={{ fontSize: '11.5px' }}>Inputs → Build → Live</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cols.map((c, i) => {
              const isActive = c.tone === "active";
              const isSuccess = c.tone === "success";
              return (
                <div key={c.title} className={`p-8 ${i < 2 ? 'md:border-r border-[#E6EEF3]' : ''} ${isActive ? 'bg-white' : isSuccess ? 'bg-gradient-to-br from-[#DFF8F3]/40 to-white' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em' }}>0{i + 1}</span>
                    <span className={`uppercase tracking-[0.14em]`} style={{ fontSize: '10px', fontWeight: 700, color: isSuccess ? '#21B985' : isActive ? '#35C7D8' : '#6F8190' }}>
                      {isSuccess ? 'LIVE' : isActive ? 'IN BUILD' : 'INTAKE'}
                    </span>
                  </div>
                  <div className="text-[#08111F] mb-5" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em' }}>{c.title}</div>
                  <ul className="space-y-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 px-3 py-2 rounded-md border border-[#E6EEF3] bg-white">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: isSuccess ? '#21B985' : isActive ? '#35C7D8' : '#6F8190' }} />
                        <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 500 }}>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// 12. FIT FILTER
function FitFilter() {
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Is this the right fit?</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-8 rounded-[20px] bg-gradient-to-br from-[#DFF8F3] to-white border border-[#21B985]/20 p-9">
            <span className="text-[#21B985] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <div className="mt-3 text-[#08111F] mb-6" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>Established service businesses where the first contact decides whether work happens.</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {["Real demand already coming in", "Enquiries getting lost between channels", "Owner cannot see what arrived", "Ready to commit to ongoing work"].map((s) => (
                <div key={s} className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white border border-[#E6EEF3]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985]" />
                  <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 rounded-[20px] bg-white border border-[#E6EEF3] p-9">
            <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not</span>
            <div className="mt-3 text-[#08111F] mb-5" style={{ fontSize: '22px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>If you are looking for a quick refresh.</div>
            <ul className="space-y-2.5">
              {["Cosmetic redesign only", "No demand to capture yet", "Looking for a one-off project"].map((s) => (
                <li key={s} className="flex items-center gap-2 text-[#4C5E6F]" style={{ fontSize: '13.5px' }}>
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

// 13. FAQ
function SWSFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "How is this different from getting a new website built?", a: "A new website is a surface. We build the underlying capture, routing, follow-up, and visibility — so the surface actually catches the work." },
    { q: "Do we start over?", a: "Often no. We start with what exists, locate where it leaks, and put the missing layers in place around it." },
    { q: "Do we need a CRM?", a: "Not necessarily. We can route into yours, or stand up a lightweight one. Either way — one queue, owned." },
    { q: "Will local people find us on Google?", a: "Smart Website handles structured pages and capture. Local SEO Authority extends visibility further." },
    { q: "How much upkeep is there?", a: "Minimal owner attention by design. Routing, follow-up, and tracking run quietly once live." },
    { q: "What exactly do we walk away with?", a: "A working website system, documented, owned by you. Pages, capture, routing, follow-up, tracking." },
    { q: "How long does it take?", a: "Stop the bleeding in weeks. Foundation in months. Compounding takes longer — that is the point." },
    { q: "What should we expect to pay?", a: "It depends on scope. Conversation first. We do not quote without understanding the leakage." },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What business owners ask before getting started</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-[#F6FAFC] border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-7 py-6 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600 }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-white border border-[#E6EEF3] text-[#0E2740] flex items-center justify-center shrink-0">{open === i ? <Minus size={14} /> : <Plus size={14} />}</span>
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

// 14. CTA
function SWSCta() {
  return (
    <section id="cta" className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #35C7D8 0%, transparent 40%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '60px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
                Show me what is broken
              </h2>
              <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                Drop your URL. We come back with what is working, what is leaking, and what to fix.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Start a Conversation <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 bg-[#061323]/40">
                  <span className="text-white/45" style={{ fontSize: '12px' }}>https://</span>
                  <span className="text-white/85" style={{ fontSize: '13px', fontWeight: 500 }}>your-business-url.com</span>
                </div>
                <div className="mt-4 text-white/55" style={{ fontSize: '12px' }}>We map the leakage and reply within 48h.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 15. RELATED SERVICES
function Related() {
  const items = [
    { tag: "Connected system", title: "AI Lead Handling", note: "First response and missed-call recovery after enquiry capture." },
    { tag: "Connected system", title: "CRM & Automation", note: "Ownership, follow-up, and visibility after the enquiry lands." },
    { tag: "Connected system", title: "Local SEO Authority", note: "Clear service pages give local visibility work something to build from." },
    { tag: "Resource", title: "Service Pages vs One Generic Services Page", note: "Why service-specific structure earns trust and search." },
    { tag: "Resource", title: "Conversion Architecture for Service Websites", note: "How structure, capture, and routing work together." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Related</h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-transparent via-[#35C7D8]/30 to-transparent" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {items.map((it, i) => (
              <a key={it.title} href="#" className="rounded-2xl bg-white border border-[#E6EEF3] p-7 hover:shadow-[0_12px_40px_rgba(8,17,31,0.08)] transition-shadow group">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[#0E2740] uppercase tracking-[0.18em] px-2 py-1 rounded bg-[#EEF6FA]" style={{ fontSize: '10px', fontWeight: 700 }}>{it.tag}</span>
                  <span className="w-2 h-2 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
                </div>
                <div className="text-[#08111F] mb-2" style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.25 }}>{it.title}</div>
                <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-1.5 mt-3" style={{ fontSize: '9.5px', fontWeight: 700 }}>Why this connects</div>
                <p className="text-[#4C5E6F] mb-5" style={{ fontSize: '13px', lineHeight: 1.55 }}>{it.note}</p>
                <span className="inline-flex items-center gap-1.5 text-[#0E2740] group-hover:text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>
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

export function SmartWebsite() {
  return (
    <main>
      <SWSHero />
      <EnquiryLeak />
      <SiteContrast />
      <SystemHandoff />
      <OperatingCoverage />
      <EnvFit />
      <VisitorToHandled />
      <ProofStory />
      <Compounding />
      <BuildMethod />
      <FitFilter />
      <SWSFaq />
      <SWSCta />
      <Related />
    </main>
  );
}
