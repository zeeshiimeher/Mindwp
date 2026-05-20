import { ArrowRight, UserCheck, Calendar, MessageSquare, Eye, AlertCircle, Globe, Bot, Workflow, TrendingUp } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, #F4B740 0%, transparent 45%), radial-gradient(circle at 15% 90%, #35C7D8 0%, transparent 45%)' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-28">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_8px_#F4B740]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Case study</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '60px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
              People signed up for trials.<br />
              <span className="text-white/55">Most never came back.</span>
            </h1>
            <p className="mt-7 text-white/70 max-w-[600px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              The studio was getting trial signups. That was not the problem. The problem was what happened after the first class: some people came once, some disappeared, and nobody could clearly see which trials were becoming members.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
              <div className="text-white/55 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 600 }}>Trial week board</div>
              {[
                { l: "Trial signup", t: "Form filled, slot selected", on: true, tone: "#21B985" },
                { l: "First class attended", t: "Some yes, some no, no record", on: true, tone: "#F4B740" },
                { l: "Check-in missing", t: "Staff busy. Trial week silent.", on: false, tone: "#E76F6F" },
                { l: "Trial ending", t: "No reminder. Decision unclear.", on: false, tone: "#E76F6F" },
                { l: "Membership decision", t: "Sometimes happens. Often does not.", on: false, tone: "#9B7DE0" },
              ].map((r) => (
                <div key={r.l} className="flex items-start gap-3 py-3 border-b border-white/8 last:border-b-0">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: r.on ? r.tone : 'rgba(255,255,255,0.2)', boxShadow: r.on ? `0 0 8px ${r.tone}` : 'none' }} />
                  <div className="flex-1">
                    <div className="text-white/85" style={{ fontSize: '13.5px', fontWeight: 600 }}>{r.l}</div>
                    <div className="text-white/55" style={{ fontSize: '12px' }}>{r.t}</div>
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

function MessyReality() {
  const items = [
    "Trial signup came in",
    "First visit happened",
    "Staff got busy",
    "No check-in afterward",
    "No reminder before trial ended",
    "No clear view of who was close to joining",
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Messy reality</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The trial week felt like a black hole.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] p-8">
          <ol className="space-y-3">
            {items.map((s, i) => (
              <li key={s} className="flex items-start gap-4">
                <span className="text-[#6F8190] tabular-nums w-7 shrink-0 pt-0.5" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}>0{i + 1}</span>
                <span className="w-2 h-2 rounded-full bg-[#F4B740] mt-2.5 shrink-0" />
                <span className="text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.55 }}>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function WhatChanged() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What changed</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The trial became a real conversation.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 rounded-2xl border border-[#E6EEF3] bg-white p-7">
            <span className="text-[#E76F6F] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Before</span>
            <ul className="mt-4 space-y-2.5">
              {["No welcome before first class", "No check-in after first session", "No reminder before trial ended", "Trial owner was unclear", "Trial status invisible"].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#4C5E6F]" style={{ fontSize: '14px' }}><span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] mt-2 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7">
            <span className="text-[#35C7D8] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>After</span>
            <ul className="mt-4 space-y-2.5">
              {["Welcome message before first class", "Check-in after first session", "Reminder before trial ended", "Clearer owner for each trial", "Visible trial status on the board"].map((s) => (
                <li key={s} className="flex items-start gap-3 text-white/85" style={{ fontSize: '14px' }}><span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0 shadow-[0_0_6px_#35C7D8]" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConversationPath() {
  const stages = [
    { icon: UserCheck, label: "Signup", note: "Trial booked, welcome sent" },
    { icon: Calendar, label: "First class", note: "Attendance recorded" },
    { icon: MessageSquare, label: "Check-in", note: "How did it feel?" },
    { icon: AlertCircle, label: "Trial ending", note: "Reminder before the window closes" },
    { icon: ArrowRight, label: "Next step", note: "Membership decision asked, not assumed" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Conversation path</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What happened between signup and decision.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] p-7">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
            {stages.map((s, i) => (
              <div key={i} className="relative rounded-xl border border-[#E6EEF3] bg-white p-5">
                <div className="w-9 h-9 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center mb-3"><s.icon size={15} /></div>
                <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{s.label}</div>
                <div className="mt-1 text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>{s.note}</div>
                {i < stages.length - 1 && <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 text-[#D8E6EE]"><ArrowRight size={14} /></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NowVisible() {
  const list = [
    "Which trials attended the first class",
    "Who needed a check-in this week",
    "Who was near the end of their trial",
    "Which follow-up actually went out",
    "Where drop-off was still happening",
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What started working differently</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What the studio could finally see.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-[#F6FAFC] p-7">
          <ul className="space-y-3">
            {list.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.55 }}>
                <Eye size={15} className="text-[#14B8A6] mt-1 shrink-0" />{s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Constraints() {
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="rounded-2xl bg-white border border-[#E6EEF3] p-9 lg:p-12 max-w-[900px]">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-3" style={{ fontSize: '11px', fontWeight: 700 }}>Constraints</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '34px', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>What this did not magically fix.</h2>
          <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            The system did not make every trial join. It made the trial week visible and gave the team a better chance to follow up while the person still remembered the class.
          </p>
        </div>
      </div>
    </section>
  );
}

function Systems() {
  const items = [
    { icon: Globe, name: "Smart Website Systems", role: "Trial signup surface and booking" },
    { icon: Bot, name: "AI Lead Handling", role: "First response to trial questions and check-in nudges" },
    { icon: Workflow, name: "CRM & Automation", role: "Trial state, owner, and reminder sequencing" },
    { icon: TrendingUp, name: "Revenue Growth", role: "Where trials converted to membership and where they did not" },
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Systems involved</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What was running underneath.</h2>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-[#E6EEF3] bg-white p-5 flex items-center gap-5" style={{ marginLeft: `${i * 12}px` }}>
              <div className="w-10 h-10 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0"><it.icon size={15} /></div>
              <div className="flex-1">
                <div className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600 }}>{it.name}</div>
                <div className="mt-1 text-[#4C5E6F]" style={{ fontSize: '13.5px' }}>{it.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #F4B740 0%, transparent 40%), radial-gradient(circle at 10% 90%, #35C7D8 0%, transparent 40%)' }} />
          <div className="relative">
            <h2 className="text-white max-w-[700px]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Trials walking in but not staying?</h2>
            <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16px', lineHeight: 1.65 }}>We can map where the trial conversation stops.</p>
            <a href="#" className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>Start a Conversation <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related() {
  const items = [
    { name: "AI Lead Handling", why: "First response covered the trial week question gap." },
    { name: "CRM & Automation", why: "Trial state was where the visibility came from." },
    { name: "Revenue Growth", why: "Conversion read back into where the budget belonged." },
    { name: "Fitness / appointment-based", why: "Same pattern repeats in studios, clinics, and salons." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '11px', fontWeight: 700 }}>Continue</div>
        <h2 className="text-[#08111F] mb-12" style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Related to this case.</h2>
        <div className="grid grid-cols-12 gap-4">
          {items.map((it) => (
            <div key={it.name} className="col-span-12 md:col-span-6 lg:col-span-3 rounded-xl border border-[#E6EEF3] bg-white p-5">
              <div className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>{it.name}</div>
              <div className="mt-1.5 text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{it.why}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FitnessCase() {
  return (
    <main>
      <Hero />
      <MessyReality />
      <WhatChanged />
      <ConversationPath />
      <NowVisible />
      <Constraints />
      <Systems />
      <CTA />
      <Related />
    </main>
  );
}
