import { ArrowRight, BookOpen, MapPin, Globe, Workflow, Inbox, CheckCircle2, XCircle, FileText } from "lucide-react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, #14B8A6 0%, transparent 45%), radial-gradient(circle at 15% 90%, #35C7D8 0%, transparent 45%)' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-24">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <BookOpen size={12} className="text-[#35C7D8]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Resource</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '54px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Local Service Page Architecture for Local Businesses
            </h1>
            <p className="mt-7 text-white/70 max-w-[640px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              A local service page should not be a thin keyword page. It should help Google understand the service, help people recognise the fit, and help the business see where the enquiry came from.
            </p>
            <div className="mt-7 flex items-center gap-6 text-white/55" style={{ fontSize: '12px' }}>
              <span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8]" /> Framework</span>
              <span>9 min read</span>
              <span>Updated for local search</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6">
              <div className="text-white/55 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 600 }}>What a service page must hold</div>
              <div className="grid grid-cols-2 gap-2.5">
                {["Service", "Location", "Intent", "Proof", "Next step", "Tracking"].map((s) => (
                  <div key={s} className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2.5">
                    <span className="text-white/85" style={{ fontSize: '12.5px', fontWeight: 600 }}>{s}</span>
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

function HelpsDecide() {
  const qs = [
    "Which services deserve their own page",
    "When location pages make sense",
    "What a page must prove",
    "How to avoid thin duplicate pages",
    "How pages connect to local SEO and enquiry capture",
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What this guide helps decide</div>
            <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Decisions before pages.</h2>
            <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              Pages multiply easily. Useful pages multiply slowly. This guide helps you choose which to build, in what order, and what each must do.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#EEF3F6]">
              {qs.map((q, i) => (
                <div key={q} className="flex items-start gap-4 px-6 py-5">
                  <span className="text-[#6F8190] tabular-nums w-7 pt-0.5" style={{ fontSize: '11.5px', fontWeight: 700 }}>0{i + 1}</span>
                  <span className="text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.5 }}>{q}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereFits() {
  const stages = [
    { icon: MapPin, label: "Local SEO", note: "Where the visitor was found" },
    { icon: FileText, label: "Service Page", note: "Where the question is answered" },
    { icon: Inbox, label: "Enquiry Capture", note: "Where the lead lands" },
    { icon: Workflow, label: "CRM / Follow-up", note: "Where it stays owned" },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where service pages fit</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The page is one stop on a longer path.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-[#F9FCFD] p-7">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
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

function QualityThreshold() {
  const bad = ["Thin service page", "Copied location text", "Generic content", "No proof", "Weak next step"];
  const good = ["Specific service language", "Local relevance", "Clear next step", "Specific proof", "Source tracking"];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The quality threshold</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Most pages fail in the same way.</h2>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#E76F6F]/25 p-7">
            <div className="flex items-center gap-2 text-[#E76F6F]" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em' }}><XCircle size={14} /> NOT ENOUGH</div>
            <ul className="mt-5 space-y-3">
              {bad.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px' }}><span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] mt-2 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#21B985]/25 p-7">
            <div className="flex items-center gap-2 text-[#21B985]" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.16em' }}><CheckCircle2 size={14} /> ENOUGH TO HOLD</div>
            <ul className="mt-5 space-y-3">
              {good.map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px' }}><span className="w-1.5 h-1.5 rounded-full bg-[#21B985] mt-2 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageAnatomy() {
  const parts = [
    { label: "Specific service headline", note: "Names the work the visitor came for" },
    { label: "Local relevance", note: "Area, postcode, or service zone made clear" },
    { label: "Problem recognition", note: "Why someone arrives at this page right now" },
    { label: "Service explanation", note: "What it covers, what it does not" },
    { label: "Proof / trust", note: "Specific reviews, photos, or named jobs" },
    { label: "Clear next step", note: "Phone, form, booking — not all three at once" },
    { label: "Tracking / source clarity", note: "So the business can see where the enquiry came from" },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Effective page anatomy</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What an effective local service page needs.</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl border border-[#E6EEF3] bg-gradient-to-b from-white to-[#F9FCFD] p-6">
              {/* Annotated page blueprint */}
              <div className="rounded-xl border border-[#D8E6EE] bg-white p-5 space-y-3">
                <div className="rounded-md bg-[#061323] text-white px-3 py-2" style={{ fontSize: '12px', fontWeight: 600 }}>Headline</div>
                <div className="rounded-md bg-[#EEF6FA] text-[#0E2740] px-3 py-2" style={{ fontSize: '11.5px' }}>Local relevance line</div>
                <div className="rounded-md bg-[#F6FAFC] border border-[#E6EEF3] px-3 py-3" style={{ fontSize: '11.5px', color: '#4C5E6F' }}>Problem recognition paragraph</div>
                <div className="rounded-md bg-[#F6FAFC] border border-[#E6EEF3] px-3 py-3" style={{ fontSize: '11.5px', color: '#4C5E6F' }}>Service explanation</div>
                <div className="rounded-md bg-[#9B7DE0]/10 border border-[#9B7DE0]/30 px-3 py-2" style={{ fontSize: '11.5px', color: '#4C5E6F' }}>Specific proof</div>
                <div className="rounded-md bg-[#35C7D8]/10 border border-[#35C7D8]/30 px-3 py-2 text-[#0E2740]" style={{ fontSize: '11.5px', fontWeight: 600 }}>One clear next step</div>
                <div className="text-[#6F8190]" style={{ fontSize: '10.5px' }}>+ source tracking attached to enquiry</div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-2xl bg-[#F6FAFC] border border-[#E6EEF3] divide-y divide-[#EEF3F6]">
              {parts.map((p, i) => (
                <div key={p.label} className="grid grid-cols-12 gap-4 px-5 py-4 items-start">
                  <div className="col-span-1 text-[#6F8190] tabular-nums" style={{ fontSize: '11.5px', fontWeight: 700 }}>0{i + 1}</div>
                  <div className="col-span-5 text-[#08111F]" style={{ fontSize: '14px', fontWeight: 600 }}>{p.label}</div>
                  <div className="col-span-6 text-[#4C5E6F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>{p.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scalability() {
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Scalability challenge</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The goal is not hundreds of thin pages.</h2>
          <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
            The goal is to build the pages that match real services, real areas, and real demand.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#E6EEF3] p-7">
            <div className="text-[#21B985] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Branch — useful</div>
            <ul className="mt-4 space-y-2 text-[#08111F]" style={{ fontSize: '14px' }}>
              {["Real service in real demand", "Distinct area with distinct work", "Specific proof available", "Clear next step"].map((s) => <li key={s} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#21B985] mt-2 shrink-0" />{s}</li>)}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#E6EEF3] p-7">
            <div className="text-[#E76F6F] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Branch — thin</div>
            <ul className="mt-4 space-y-2 text-[#08111F]" style={{ fontSize: '14px' }}>
              {["Same content, different town in the title", "No proof tied to the area", "Vague service overlap", "No next-step difference"].map((s) => <li key={s} className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] mt-2 shrink-0" />{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signals() {
  const list = [
    "Impressions for service terms",
    "Enquiries by page",
    "Calls from service pages",
    "Local ranking movement",
    "Source clarity",
    "Conversion quality",
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Measurement</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>How to know if the pages are working.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-[#F6FAFC] p-7 grid grid-cols-12 gap-3">
          {list.map((s, i) => (
            <div key={s} className="col-span-12 md:col-span-6 lg:col-span-4 rounded-xl bg-white border border-[#E6EEF3] p-5">
              <div className="text-[#6F8190] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.1em' }}>SIGNAL {i + 1}</div>
              <div className="mt-1 text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Takeaways() {
  const list = [
    "A service page is part of a path, not a single deliverable",
    "Specific beats generic, every time",
    "Proof on the page is what holds the visitor",
    "One next step is stronger than three",
    "Tracking is not optional — without it, the page is invisible to the business",
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-10">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Key takeaways</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What to keep.</h2>
        </div>
        <ol className="grid grid-cols-12 gap-4">
          {list.map((s, i) => (
            <li key={s} className="col-span-12 md:col-span-6 lg:col-span-4 rounded-2xl bg-white border border-[#E6EEF3] p-6">
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
    { name: "Service Pages vs One Generic Services Page", kind: "Resource" },
    { name: "Local SEO Authority", kind: "System" },
    { name: "Smart Website Systems", kind: "System" },
  ];
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '11px', fontWeight: 700 }}>Related resources</div>
        <h2 className="text-[#08111F] mb-10" style={{ fontSize: '32px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em' }}>Continue from this guide.</h2>
        <div className="grid grid-cols-12 gap-4">
          {items.map((it) => (
            <div key={it.name} className="col-span-12 md:col-span-4 rounded-xl border border-[#E6EEF3] bg-white p-5">
              <div className="text-[#14B8A6] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>{it.kind}</div>
              <div className="mt-1.5 text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>{it.name}</div>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[#08111F]" style={{ fontSize: '12.5px', fontWeight: 600 }}>Open <ArrowRight size={12} /></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SoftCTA() {
  return (
    <section id="cta" className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="rounded-3xl bg-white border border-[#E6EEF3] p-10 lg:p-14 max-w-[900px]">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-3" style={{ fontSize: '11px', fontWeight: 700 }}>Soft route</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '34px', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em' }}>Not sure which services need their own page?</h2>
          <p className="mt-4 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>We can map the pages that should exist before building more content.</p>
          <a href="#" className="mt-7 inline-flex items-center gap-2 text-[#08111F] border-b border-[#08111F]/30 hover:border-[#08111F] pb-1" style={{ fontSize: '13.5px', fontWeight: 600 }}>Start a Conversation <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

export function ResourcePage() {
  return (
    <main>
      <Hero />
      <HelpsDecide />
      <WhereFits />
      <QualityThreshold />
      <PageAnatomy />
      <Scalability />
      <Signals />
      <Takeaways />
      <Related />
      <SoftCTA />
    </main>
  );
}
