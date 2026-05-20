import { ArrowRight, Hammer, Scissors, Stethoscope, Briefcase, Layers, Eye, Phone, Repeat, Star, Search, MapPin, Plus, Minus } from "lucide-react";
import { useState } from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, #35C7D8 0%, transparent 45%), radial-gradient(circle at 15% 90%, #14B8A6 0%, transparent 45%)' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-28">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Industries</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
              Different businesses.<br />
              <span className="text-white/55">Same places work slips.</span>
            </h1>
            <p className="mt-7 text-white/70 max-w-[600px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              A landscaper, clinic, salon, HVAC company, and professional firm do not run the same day. But the leaks often show up in the same places: people search, get in touch, wait, forget, or never leave proof.
            </p>
            <a href="#routes" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-6 py-3.5 transition-colors" style={{ fontSize: '14.5px', fontWeight: 600 }}>
              Find your industry <ArrowRight size={15} />
            </a>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
              <div className="text-white/55 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 600 }}>Where they leak</div>
              {[
                { l: "Visibility", d: "Hard to find in the area they serve", tone: "#35C7D8" },
                { l: "First contact", d: "Phone, form, DM — scattered owners", tone: "#14B8A6" },
                { l: "Follow-up", d: "Quotes and trials slip into nobody's queue", tone: "#F4B740" },
                { l: "Proof", d: "Good work happens, never gets asked about", tone: "#9B7DE0" },
              ].map((x) => (
                <div key={x.l} className="flex items-start gap-3 py-3 border-b border-white/8 last:border-b-0">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: x.tone, boxShadow: `0 0 8px ${x.tone}` }} />
                  <div className="flex-1">
                    <div className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>{x.l}</div>
                    <div className="text-white/55" style={{ fontSize: '12.5px' }}>{x.d}</div>
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

function SharedPattern() {
  const moments = [
    { icon: Search, label: "People search nearby", note: "Trades searched by area first, brand second" },
    { icon: Eye, label: "Service offer is unclear", note: "Salons, clinics, professional firms" },
    { icon: Phone, label: "Call or form arrives", note: "HVAC after-hours, dental enquiries" },
    { icon: Repeat, label: "Nobody owns the next step", note: "Quotes, trials, consultations sitting open" },
    { icon: Star, label: "Proof does not keep up", note: "Maintenance jobs, finished projects, repeat customers" },
    { icon: Layers, label: "Source is hard to see", note: "Spend goes out, return is invisible" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Shared operating pattern</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Most service businesses lose work in the same few moments.</h2>
        </div>
        <div className="grid grid-cols-12 gap-4">
          {moments.map((m, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white border border-[#E6EEF3] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center"><m.icon size={15} /></div>
                <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>0{i + 1}</span>
              </div>
              <div className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600 }}>{m.label}</div>
              <div className="mt-1.5 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{m.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PathwayMap() {
  const groups = [
    { icon: Hammer, name: "Trades & Home Services", first: "Phone call, often urgent", leak: "After-hours calls, late quote follow-up", start: "Local SEO + Smart Website + CRM", tone: "#35C7D8" },
    { icon: Scissors, name: "Beauty & Personal Care", first: "DM, booking app, walk-in", leak: "No reminder rhythm, reviews missed", start: "Smart Website + Reputation + reminders", tone: "#9B7DE0" },
    { icon: Stethoscope, name: "Clinics & Appointment-Based", first: "Local search to phone or form", leak: "Trial drop-off, booking gaps, low review velocity", start: "Local SEO + booking path + reviews", tone: "#14B8A6" },
    { icon: Briefcase, name: "Professional Services", first: "Referral, search, intake form", leak: "Slow qualification, follow-up forgotten", start: "Qualification + CRM + follow-up", tone: "#F4B740" },
    { icon: Layers, name: "Local Multi-Service Businesses", first: "Mixed channels, scattered offers", leak: "Service confusion, source invisible", start: "Service structure + tracking + routing", tone: "#21B985" },
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Pathway map</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Find the version that looks closest to your business.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-7 py-3 bg-[#F9FCFD] border-b border-[#E6EEF3] text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>
            <div className="col-span-3">Industry group</div>
            <div className="col-span-3">Typical first contact</div>
            <div className="col-span-3">Common leak</div>
            <div className="col-span-3">Best starting system</div>
          </div>
          {groups.map((g, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 px-7 py-7 items-start border-b border-[#EEF3F6] last:border-b-0 hover:bg-[#F9FCFD] transition-colors">
              <div className="col-span-12 md:col-span-3 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${g.tone}1a`, color: g.tone }}><g.icon size={16} /></div>
                <div className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600, lineHeight: 1.3 }}>{g.name}</div>
              </div>
              <div className="col-span-12 md:col-span-3 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{g.first}</div>
              <div className="col-span-12 md:col-span-3 text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{g.leak}</div>
              <div className="col-span-12 md:col-span-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ background: `${g.tone}14`, border: `1px solid ${g.tone}33`, color: g.tone, fontSize: '12px', fontWeight: 600 }}>
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: g.tone }} />{g.start}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BreakPoints() {
  const list = [
    { label: "Missed calls", note: "After-hours, mid-job, lunch hour" },
    { label: "Unclear services", note: "Visitor cannot tell if this is the right team" },
    { label: "Late follow-up", note: "Quotes, trials, consults sitting open" },
    { label: "Weak local visibility", note: "Found in the area, but not first" },
    { label: "No review rhythm", note: "Asking only happens when someone remembers" },
    { label: "No source clarity", note: "Cannot tell which spend brought the work" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Common break points</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The details change.<br /><span className="text-[#4C5E6F]">The break points repeat.</span></h2>
        </div>
        <div className="grid grid-cols-12 gap-3">
          {list.map((p, i) => (
            <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl bg-white border border-[#E6EEF3] p-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E76F6F]" />
                <span className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>{p.label}</span>
              </div>
              <div className="mt-2 text-[#4C5E6F]" style={{ fontSize: '13px', lineHeight: 1.55 }}>{p.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Routes() {
  const routes = [
    { label: "Landscaping Companies", note: "Spring quote bursts, maintenance reactivation", offset: 0 },
    { label: "HVAC Companies", note: "After-hours emergencies, recovery from missed calls", offset: 14 },
    { label: "Fitness Studios", note: "Trial drop-off, member retention", offset: 28 },
    { label: "Dental Practices", note: "Local search, recall, review velocity", offset: 14 },
    { label: "Beauty & Personal Care", note: "DM bookings, reminders, reputation", offset: 0 },
    { label: "Professional Services", note: "Qualification, intake, follow-through", offset: 14 },
  ];
  return (
    <section id="routes" className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Industry routes</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Explore by business type.</h2>
        </div>
        <div className="space-y-3">
          {routes.map((r, i) => (
            <div key={i} className="rounded-xl border border-[#E6EEF3] bg-gradient-to-r from-white to-[#F9FCFD] p-6 flex items-center justify-between hover:border-[#D8E6EE] transition-colors" style={{ marginLeft: `${r.offset}px` }}>
              <div className="flex items-center gap-5">
                <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em' }}>0{i + 1}</span>
                <div>
                  <div className="text-[#08111F]" style={{ fontSize: '17px', fontWeight: 600 }}>{r.label}</div>
                  <div className="text-[#4C5E6F]" style={{ fontSize: '13.5px' }}>{r.note}</div>
                </div>
              </div>
              <a href="#" className="inline-flex items-center gap-2 text-[#08111F] border-b border-[#08111F]/30 hover:border-[#08111F] pb-0.5" style={{ fontSize: '13px', fontWeight: 600 }}>Open <ArrowRight size={13} /></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  const items = [
    { tag: "Trial drop-off", line: "A studio could finally see who attended a trial, who needed a check-in, and where the conversation stopped." },
    { tag: "Maintenance reactivation", line: "A landscaper restarted maintenance contact with last season's customers — a queue that had been forgotten became a list." },
    { tag: "Quote follow-up", line: "Open quotes stopped sitting silently. Owners could see what was sent, what was waiting, and what had gone cold." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Proof strip</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What changes when the gaps are handled.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          {items.map((p, i) => (
            <div key={i} className="col-span-12 md:col-span-4 rounded-2xl bg-white border border-[#E6EEF3] p-7">
              <div className="text-[#14B8A6] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10.5px', fontWeight: 700 }}>{p.tag}</div>
              <p className="text-[#08111F]" style={{ fontSize: '16px', lineHeight: 1.55 }}>{p.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Do you work with my exact industry?", a: "If it is a service business with real demand and real jobs, usually yes. We map the leaks first." },
    { q: "Do all industries need the same systems?", a: "No. The pattern repeats. The starting system varies." },
    { q: "Can we start with one system?", a: "Yes. We pick the one that catches the most lost work first." },
    { q: "Do you understand seasonal businesses?", a: "Yes — landscaping, HVAC, recall-based clinics. Seasonality shapes where the leaks are." },
    { q: "Can this work for appointment-based businesses?", a: "Yes. Clinics, studios, salons — booking and follow-up are the usual gaps." },
    { q: "How do we choose where to start?", a: "Tell us how work comes in. We point at the part of the flow that should be fixed first." },
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
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #35C7D8 0%, transparent 40%), radial-gradient(circle at 10% 90%, #14B8A6 0%, transparent 40%)' }} />
          <div className="relative">
            <h2 className="text-white max-w-[700px]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Tell us how work comes in.</h2>
            <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16px', lineHeight: 1.65 }}>We will help identify which part of the business flow should be fixed first.</p>
            <a href="#" className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>Start a Conversation <ArrowRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesPage() {
  return (
    <main>
      <Hero />
      <SharedPattern />
      <PathwayMap />
      <BreakPoints />
      <Routes />
      <ProofStrip />
      <FAQ />
      <CTA />
    </main>
  );
}
