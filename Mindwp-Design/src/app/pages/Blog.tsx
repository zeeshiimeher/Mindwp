import { ArrowRight, PhoneOff, Phone, Clock, AlertTriangle, MessageSquare, Workflow, Globe, Bot, Inbox, FileText } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, #E76F6F 0%, transparent 45%), radial-gradient(circle at 15% 90%, #35C7D8 0%, transparent 45%)' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-24">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <FileText size={12} className="text-[#35C7D8]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Blog</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Why HVAC Missed Calls Lose After-Hours Revenue
            </h1>
            <p className="mt-7 text-white/70 max-w-[640px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              The call often comes after the office is closed. The customer has no heat, no cooling, or a system making the wrong noise. If nobody answers or follows up quickly, they call the next company.
            </p>
            <div className="mt-7 flex items-center gap-6 text-white/55" style={{ fontSize: '12px' }}>
              <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8]" /> Problem recognition</span>
              <span>6 min read</span>
              <span>For HVAC owners</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
              <div className="text-white/55 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 600 }}>After-hours call surface</div>
              {[
                { t: "20:47", l: "Inbound call", note: "Customer dials your number", tone: "#35C7D8", on: true },
                { t: "20:47", l: "No answer", note: "Office is closed", tone: "#E76F6F", on: true },
                { t: "20:48", l: "No voicemail", note: "Caller does not leave one", tone: "#F4B740", on: true },
                { t: "20:49", l: "Competitor called", note: "Caller searched again, picked next", tone: "#9B7DE0", on: true },
                { t: "+12h", l: "Callback too late", note: "Job already booked elsewhere", tone: "#6F8190", on: true },
              ].map((r) => (
                <div key={r.l} className="flex items-start gap-3 py-3 border-b border-white/8 last:border-b-0">
                  <span className="w-12 text-white/55 tabular-nums shrink-0" style={{ fontSize: '11px', fontWeight: 700 }}>{r.t}</span>
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: r.tone, boxShadow: `0 0 6px ${r.tone}` }} />
                  <div className="flex-1">
                    <div className="text-white/85" style={{ fontSize: '13px', fontWeight: 600 }}>{r.l}</div>
                    <div className="text-white/55" style={{ fontSize: '11.5px' }}>{r.note}</div>
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

function ScenePanel() {
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px]">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Real situation</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>The call comes when nobody is watching the desk.</h2>
        </div>

        <div className="mt-10 rounded-2xl bg-white border border-[#E6EEF3] p-9 max-w-[820px]">
          <p className="text-[#08111F]" style={{ fontSize: '18px', lineHeight: 1.65, letterSpacing: '-0.005em' }}>
            It is 9:13pm. Someone's heating has stopped. They search, tap call, wait, and hang up. They do not leave a voicemail. They call the next HVAC company.
          </p>
          <div className="mt-6 flex items-center gap-3 text-[#6F8190]" style={{ fontSize: '12.5px' }}>
            <PhoneOff size={14} className="text-[#E76F6F]" />
            <span>Observed scene — typical mid-week winter evening</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallWindow() {
  const points = [
    { icon: AlertTriangle, label: "Urgency is higher", note: "Cold house, broken system, kids in bed" },
    { icon: Clock, label: "Patience is lower", note: "They will not wait through three rings" },
    { icon: Phone, label: "The next company is one tap away", note: "Search results are still on screen" },
    { icon: PhoneOff, label: "Voicemail usually loses", note: "Most after-hours callers do not leave one" },
    { icon: Clock, label: "Tomorrow is too late", note: "The job is gone before the office opens" },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>After-hours call window</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>After-hours calls do not behave like normal enquiries.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-[#F9FCFD] divide-y divide-[#EEF3F6]">
          {points.map((p, i) => (
            <div key={i} className="grid grid-cols-12 gap-5 px-7 py-6 items-center">
              <div className="col-span-12 md:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-[#E76F6F]/12 text-[#E76F6F] flex items-center justify-center"><p.icon size={15} /></div>
              </div>
              <div className="col-span-12 md:col-span-4 text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>{p.label}</div>
              <div className="col-span-12 md:col-span-7 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompoundingChain() {
  const chain = [
    { label: "Missed call", note: "Phone rings out" },
    { label: "No record", note: "Call never enters the business" },
    { label: "No callback task", note: "Nobody owns it in the morning" },
    { label: "No source visibility", note: "Cannot see where it came from" },
    { label: "No recovery path", note: "Customer is already booked elsewhere" },
    { label: "No learning", note: "Same loss next week" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Why the loss compounds</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The problem is not one missed call.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] p-7">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
            {chain.map((c, i) => (
              <div key={i} className="relative rounded-lg border border-[#E6EEF3] bg-[#F9FCFD] p-4">
                <div className="text-[#E76F6F] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em' }}>0{i + 1}</div>
                <div className="mt-1.5 text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 600 }}>{c.label}</div>
                <div className="mt-1 text-[#6F8190]" style={{ fontSize: '11.5px', lineHeight: 1.5 }}>{c.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CallerBehaviour() {
  const steps = ["They search", "They call", "They wait briefly", "They choose whoever responds", "They rarely compare deeply"];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Emergency caller behaviour</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Emergency callers move fast.</h2>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
            {steps.map((s, i) => (
              <div key={i} className="relative rounded-xl bg-white/[0.05] border border-white/10 p-5">
                <div className="text-[#35C7D8] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>STEP {i + 1}</div>
                <div className="mt-2 text-white" style={{ fontSize: '14px', fontWeight: 600 }}>{s}</div>
                {i < steps.length - 1 && <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 text-white/30"><ArrowRight size={14} /></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BetterHandling() {
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What better handling looks like</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The call still comes after hours. The loss does not.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 rounded-2xl border border-[#E6EEF3] bg-white p-7">
            <span className="text-[#E76F6F] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Before</span>
            <ul className="mt-4 space-y-2 text-[#4C5E6F]" style={{ fontSize: '14px' }}>
              {["Phone rings out", "No record of the call", "No callback task", "No source attached", "Lost without a trace"].map((s) => <li key={s} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] mt-2 shrink-0" />{s}</li>)}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7">
            <span className="text-[#35C7D8] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>After</span>
            <ul className="mt-4 space-y-2 text-white/85" style={{ fontSize: '14px' }}>
              {["Missed call captured", "Instant text response", "Callback task created", "CRM record created", "Source attached", "Next action visible"].map((s) => <li key={s} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0 shadow-[0_0_6px_#35C7D8]" />{s}</li>)}
            </ul>
          </div>
        </div>
        <p className="mt-5 text-[#6F8190]" style={{ fontSize: '12.5px' }}>This is what better handling looks like, not a sales claim.</p>
      </div>
    </section>
  );
}

function Takeaways() {
  const list = [
    "After-hours callers are urgent",
    "Voicemail is weak recovery",
    "Missed calls need a record",
    "Fast response matters",
    "Source visibility helps improve the system",
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Key takeaways</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What to keep.</h2>
        </div>
        <ol className="grid grid-cols-12 gap-4">
          {list.map((s, i) => (
            <li key={s} className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-[#F6FAFC] border border-[#E6EEF3] p-6">
              <div className="text-[#35C7D8]" style={{ fontSize: '20px', fontWeight: 700 }}>0{i + 1}</div>
              <div className="mt-3 text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.55 }}>{s}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Related() {
  const items = [
    { name: "AI Lead Handling", kind: "System", icon: Bot },
    { name: "CRM & Automation", kind: "System", icon: Workflow },
    { name: "Smart Website Systems", kind: "System", icon: Globe },
    { name: "HVAC Emergency Call Handling System", kind: "Article", icon: Inbox },
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '11px', fontWeight: 700 }}>Related</div>
        <h2 className="text-[#08111F] mb-10" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>If this hit close to home.</h2>
        <div className="grid grid-cols-12 gap-4">
          {items.map((it) => (
            <div key={it.name} className="col-span-12 md:col-span-6 lg:col-span-3 rounded-xl border border-[#E6EEF3] bg-white p-5">
              <div className="w-9 h-9 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center mb-3"><it.icon size={15} /></div>
              <div className="text-[#14B8A6] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>{it.kind}</div>
              <div className="mt-1 text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{it.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftCTA() {
  return (
    <section id="cta" className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="rounded-3xl bg-[#F6FAFC] border border-[#E6EEF3] p-10 lg:p-14 max-w-[900px]">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-3" style={{ fontSize: '11px', fontWeight: 700 }}>Soft route</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '34px', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Missing after-hours calls?</h2>
          <p className="mt-4 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>We can help you see where calls go after the office closes and what should happen next.</p>
          <a href="#" className="mt-7 inline-flex items-center gap-2 text-[#08111F] border-b border-[#08111F]/30 hover:border-[#08111F] pb-1" style={{ fontSize: '13.5px', fontWeight: 600 }}>Start a Conversation <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

export function BlogPost() {
  return (
    <main>
      <Hero />
      <ScenePanel />
      <CallWindow />
      <CompoundingChain />
      <CallerBehaviour />
      <BetterHandling />
      <Takeaways />
      <Related />
      <SoftCTA />
    </main>
  );
}
