import { ArrowRight, Sun, CloudRain, Wrench, Leaf, MessageSquare, Star, Globe, MapPin, Workflow, Plus, Minus } from "lucide-react";
import { useState } from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, #21B985 0%, transparent 45%), radial-gradient(circle at 15% 90%, #35C7D8 0%, transparent 45%)' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-28">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>For landscapers</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '60px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
              Spring gets busy.<br />
              <span className="text-white/55">Quotes start slipping.</span>
            </h1>
            <p className="mt-7 text-white/70 max-w-[600px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              The first warm weekend hits. People ask about patios, cleanups, turf, fencing, planting, and maintenance. Some are ready now. Some need chasing later. Most landscaping businesses lose work somewhere between the first quote and the second conversation.
            </p>
            <a href="#cta" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-6 py-3.5 transition-colors" style={{ fontSize: '14.5px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={15} />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/55 uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Seasonal enquiry board</span>
                <span className="text-[#21B985]" style={{ fontSize: '11px', fontWeight: 600 }}>Spring · week 14</span>
              </div>
              {[
                { l: "New quote requests", v: "12 this week", tone: "#35C7D8" },
                { l: "Site visits booked", v: "5 confirmed", tone: "#14B8A6" },
                { l: "Quotes sent", v: "7 awaiting reply", tone: "#F4B740" },
                { l: "Maintenance regulars due", v: "3 not contacted", tone: "#9B7DE0" },
                { l: "Reviews after finished gardens", v: "Last asked: Sept", tone: "#E76F6F" },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between py-3 border-b border-white/8 last:border-b-0">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full" style={{ background: r.tone, boxShadow: `0 0 8px ${r.tone}` }} />
                    <span className="text-white/80" style={{ fontSize: '13.5px' }}>{r.l}</span>
                  </div>
                  <span className="text-white/55" style={{ fontSize: '12.5px' }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeasonalLeaks() {
  const items = [
    { t: "Mon", note: "Twenty quote requests arrive in one week" },
    { t: "Fri", note: "Five get replied to before the weekend" },
    { t: "Wk 6", note: "Patio quote sits open. Homeowner has gone quiet." },
    { t: "Last yr", note: "Maintenance regular never re-engages this season" },
    { t: "Done", note: "Finished garden never becomes a review" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Seasonal leak pattern</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Where landscapers actually lose the season.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] p-8">
          <div className="space-y-4">
            {items.map((m, i) => (
              <div key={i} className="grid grid-cols-12 gap-4 items-center pb-4 border-b border-[#EEF3F6] last:border-b-0 last:pb-0">
                <div className="col-span-2 md:col-span-1 text-[#6F8190] tabular-nums" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em' }}>{m.t}</div>
                <div className="col-span-1 flex justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E76F6F]" />
                </div>
                <div className="col-span-9 md:col-span-10 text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.55 }}>{m.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Quote before / after</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>A spring quote, before and after.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 rounded-2xl border border-[#E6EEF3] bg-white p-7">
            <span className="text-[#E76F6F] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Before</span>
            <div className="mt-2 text-[#08111F]" style={{ fontSize: '17px', fontWeight: 600 }}>Quote sent. Then silence.</div>
            <ol className="mt-5 space-y-3">
              {["Quote request arrives", "Visit booked manually", "Quote sent over email", "No reminder scheduled", "Homeowner goes quiet"].map((s, i) => (
                <li key={s} className="flex items-start gap-3"><span className="text-[#6F8190] tabular-nums w-5" style={{ fontSize: '11px', fontWeight: 700 }}>{i + 1}</span><span className="text-[#4C5E6F]" style={{ fontSize: '14px' }}>{s}</span></li>
              ))}
            </ol>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            <div className="relative">
              <span className="text-[#35C7D8] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>After</span>
              <div className="mt-2 text-white" style={{ fontSize: '17px', fontWeight: 600 }}>Open quotes are visible work.</div>
              <ol className="mt-5 space-y-3">
                {["Quote request captured at intake", "Site visit visible to the team", "Quote follow-up scheduled automatically", "Owner sees open quotes by week", "Review asked after completion"].map((s, i) => (
                  <li key={s} className="flex items-start gap-3"><span className="text-[#35C7D8] tabular-nums w-5" style={{ fontSize: '11px', fontWeight: 700 }}>{i + 1}</span><span className="text-white/80" style={{ fontSize: '14px' }}>{s}</span></li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PutInPlace() {
  const pieces = [
    { icon: Leaf, label: "Spring enquiry capture", note: "One surface for every channel" },
    { icon: MessageSquare, label: "Quote follow-up", note: "Sequenced reminders that do not depend on memory" },
    { icon: Wrench, label: "Maintenance reactivation", note: "Last-season regulars contacted before the season starts" },
    { icon: Globe, label: "Service page structure", note: "Patios, fencing, turf — each its own page" },
    { icon: Star, label: "Review request after finished work", note: "Asked while the garden still looks fresh" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Seasonal workbench</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Five pieces sized for one big season and three quiet ones.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#EEF3F6]">
          {pieces.map((p, i) => (
            <div key={i} className="grid grid-cols-12 gap-5 px-7 py-6 items-center">
              <div className="col-span-12 md:col-span-1 text-[#6F8190] tabular-nums" style={{ fontSize: '12px', fontWeight: 700 }}>0{i + 1}</div>
              <div className="col-span-12 md:col-span-1">
                <div className="w-10 h-10 rounded-lg bg-[#21B985]/12 text-[#21B985] flex items-center justify-center"><p.icon size={15} /></div>
              </div>
              <div className="col-span-12 md:col-span-4 text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>{p.label}</div>
              <div className="col-span-12 md:col-span-6 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhereToStart() {
  const choices = [
    { icon: Sun, label: "Missed spring enquiries", note: "If the busy weeks are leaking" },
    { icon: MessageSquare, label: "Open quotes", note: "If quote follow-up is the gap" },
    { icon: Wrench, label: "Maintenance reactivation", note: "If last year's regulars are not coming back" },
    { icon: MapPin, label: "Local visibility", note: "If you are not being found in the right area" },
    { icon: Star, label: "Reviews after completed jobs", note: "If finished work is not becoming proof" },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where to start</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>You do not have to fix the whole season at once.</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5 space-y-2">
            {choices.map((c, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-colors ${active === i ? 'bg-[#F6FCFD] border-[#35C7D8]/40' : 'bg-white border-[#E6EEF3]'}`}>
                <div className="w-10 h-10 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center"><c.icon size={15} /></div>
                <span className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{c.label}</span>
              </button>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-7 rounded-2xl border border-[#E6EEF3] bg-gradient-to-b from-white to-[#F9FCFD] p-7">
            <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10.5px', fontWeight: 700 }}>Starting point</div>
            <h3 className="text-[#08111F]" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em' }}>{choices[active].label}</h3>
            <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '15px', lineHeight: 1.65 }}>{choices[active].note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowExamples() {
  const examples = [
    { name: "Quote request follow-up", trigger: "Quote sent 7 days ago, no reply", what: "Reminder text drafted for owner approval", owner: "Owner" },
    { name: "Maintenance plan reminder", trigger: "Last service > 11 months", what: "Outreach to last year's regulars before the season", owner: "Office" },
    { name: "Post-job review request", trigger: "Job marked complete in CRM", what: "Review request sent same day with direct link", owner: "Automatic" },
    { name: "Service-area page", trigger: "New service area added", what: "Structured page generated with intake hooks", owner: "Build" },
    { name: "CRM quote board", trigger: "Open quotes > 3 weeks", what: "Highlighted in this week's owner view", owner: "Owner" },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Architecture sample board</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What it can look like in practice.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#EEF3F6]">
              {examples.map((e, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-full text-left px-5 py-4 flex items-center justify-between ${active === i ? 'bg-[#F6FCFD]' : ''}`}>
                  <span className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: active === i ? 600 : 500 }}>{e.name}</span>
                  {active === i && <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />}
                </button>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-8 h-full text-white">
              <div className="text-[#35C7D8] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10.5px', fontWeight: 700 }}>Selected pattern</div>
              <h3 className="text-white" style={{ fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em' }}>{examples[active].name}</h3>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
                {[{ k: "Trigger", v: examples[active].trigger }, { k: "What happens", v: examples[active].what }, { k: "Owner", v: examples[active].owner }].map((r) => (
                  <div key={r.k} className="rounded-lg bg-white/[0.05] border border-white/10 p-4">
                    <div className="text-[#35C7D8] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>{r.k}</div>
                    <div className="text-white/85 mt-1.5" style={{ fontSize: '13px', lineHeight: 1.5 }}>{r.v}</div>
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

function RelevantSystems() {
  const items = [
    { icon: Globe, name: "Smart Website Systems", why: "Service pages structured by job type, with capture wired in." },
    { icon: MapPin, name: "Local SEO Authority", why: "Found in the right villages, towns, and postcodes you serve." },
    { icon: Workflow, name: "CRM & Automation", why: "Quote board, follow-up sequences, maintenance reactivation." },
    { icon: Star, name: "Reputation & Reviews", why: "Reviews requested while the finished garden is still fresh." },
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Relevant systems</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Systems that usually matter for landscapers.</h2>
        </div>
        <div className="space-y-3">
          {items.map((it, i) => (
            <div key={i} className="rounded-xl border border-[#E6EEF3] bg-white p-5 flex items-start gap-5" style={{ marginLeft: `${i * 12}px` }}>
              <div className="w-10 h-10 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0"><it.icon size={15} /></div>
              <div className="flex-1">
                <div className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600 }}>{it.name}</div>
                <div className="mt-1 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{it.why}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Scenario() {
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Scenario</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What changed when open quotes stopped disappearing.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {[
            { tag: "Before", tone: "#E76F6F", text: "Quotes were sent and forgotten. Owners did not know which were live and which had gone cold." },
            { tag: "Change", tone: "#35C7D8", text: "Quote board added. Reminders sequenced. Owner sees what is open and how long it has been waiting." },
            { tag: "After", tone: "#21B985", text: "Open quotes had a clear owner and a path to the second conversation. Lost-quote conversations stopped happening in March." },
          ].map((c) => (
            <div key={c.tag} className="col-span-12 md:col-span-4 rounded-2xl bg-white border border-[#E6EEF3] p-7">
              <span className="uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700, color: c.tone }}>{c.tag}</span>
              <p className="mt-3 text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.6 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Can this help during busy season?", a: "Yes — the workbench is built around the spring burst, not for steady weeks." },
    { q: "Can we track open quotes?", a: "Yes. Each quote has an owner, a date, and a follow-up date." },
    { q: "Can you help bring back maintenance customers?", a: "Yes. Reactivation is its own seasonal piece." },
    { q: "Do we need a new website?", a: "Sometimes. Often we can rework what is there with the right service-page structure." },
    { q: "Can this work for seasonal services?", a: "Yes — landscaping is the example, but the same applies to any seasonal trade." },
    { q: "Can reviews be requested after finished jobs?", a: "Yes — automatically, when the job is marked complete." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Common questions</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-6 py-5 hover:bg-[#F6FAFC] transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600 }}>{f.q}</span>
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

function CTA() {
  return (
    <section id="cta" className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #21B985 0%, transparent 40%), radial-gradient(circle at 10% 90%, #35C7D8 0%, transparent 40%)' }} />
          <div className="relative">
            <h2 className="text-white max-w-[700px]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Show us where the season slips.</h2>
            <p className="mt-6 text-white/65 max-w-[560px]" style={{ fontSize: '16px', lineHeight: 1.65 }}>We can map where enquiries, quotes, maintenance reminders, and reviews are being missed.</p>
            <a href="#" className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>Start a Conversation <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Landscaping() {
  return (
    <main>
      <Hero />
      <SeasonalLeaks />
      <BeforeAfter />
      <PutInPlace />
      <WhereToStart />
      <WorkflowExamples />
      <RelevantSystems />
      <Scenario />
      <FAQ />
      <CTA />
    </main>
  );
}
