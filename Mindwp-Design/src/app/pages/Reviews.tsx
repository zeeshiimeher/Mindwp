import { ArrowRight, Star, Inbox, Send, MapPin, Globe, Workflow, CheckCircle2, ShieldCheck, MessageSquare, Calendar, Plus, Minus } from "lucide-react";
import { useState } from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 75% 25%, #9B7DE0 0%, transparent 45%), radial-gradient(circle at 15% 90%, #35C7D8 0%, transparent 45%)' }} />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-28">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B7DE0] shadow-[0_0_8px_#9B7DE0]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Part of Reputation & Reviews</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '60px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
              Good work happens.<br />
              <span className="text-white/55">The proof never shows up.</span>
            </h1>
            <p className="mt-7 text-white/70 max-w-[560px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              The job goes well. The customer is happy. Then everyone moves on. By the time someone remembers to ask for a review, the moment has passed.
            </p>
            <div className="mt-9 flex items-center gap-5 flex-wrap">
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-6 py-3.5 transition-colors" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                Start a Conversation <ArrowRight size={15} />
              </a>
              <a href="#flow" className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/30 pb-1" style={{ fontSize: '13.5px', fontWeight: 500 }}>
                See how reviews get requested
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-sm">
              <div className="text-white/55 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 600 }}>Proof request — live</div>
              {[
                { l: "Job completed", t: "Patio refit · Bristol", on: true, tone: "#21B985" },
                { l: "Request due", t: "Send within 24h while it is fresh", on: true, tone: "#35C7D8" },
                { l: "Customer response", t: "Public review or private feedback", on: false, tone: "#9B7DE0" },
                { l: "Public review", t: "Posts to Google profile", on: false, tone: "#14B8A6" },
                { l: "Team notified", t: "Owner sees it. Replies if needed.", on: false, tone: "#F4B740" },
              ].map((r) => (
                <div key={r.l} className="flex items-start gap-3 py-2.5 border-b border-white/8 last:border-b-0">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: r.on ? r.tone : 'rgba(255,255,255,0.18)', boxShadow: r.on ? `0 0 8px ${r.tone}` : 'none' }} />
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

function MissedMoment() {
  const stages = [
    { t: "Day 0", note: "Appointment finished. Customer says thank you.", warm: true },
    { t: "Day 0+1h", note: "Team moves to next job. No request sent.", warm: true },
    { t: "Day 1", note: "Customer is back at work. The moment is fading.", warm: false },
    { t: "Day 4", note: "Memory of the experience starts blurring.", warm: false },
    { t: "Day 14", note: "Asking now feels late.", warm: false },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Missed proof moment</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>The best time to ask is when the work is still fresh.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] p-8">
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-[#21B985]/40 via-[#F4B740]/30 to-[#6F8190]/30" />
            <div className="relative grid grid-cols-5 gap-4">
              {stages.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-[#6F8190] tabular-nums mb-3" style={{ fontSize: '11.5px', fontWeight: 700 }}>{s.t}</div>
                  <div className="w-3 h-3 mx-auto rounded-full mb-3" style={{ background: s.warm ? '#21B985' : '#C4D0D7', boxShadow: s.warm ? '0 0 10px #21B985' : 'none' }} />
                  <div className="text-[#08111F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>{s.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RequestFlow() {
  const flow = [
    { icon: CheckCircle2, label: "Work completed", note: "Job marked done in CRM", tone: "#21B985" },
    { icon: Send, label: "Request sent", note: "Right time, right channel", tone: "#35C7D8" },
    { icon: MessageSquare, label: "Public or private", note: "Customer chooses the path", tone: "#9B7DE0" },
    { icon: Inbox, label: "Team notified", note: "Owner sees and responds", tone: "#F4B740" },
    { icon: Star, label: "Proof added", note: "Surfaced where decisions happen", tone: "#14B8A6" },
  ];
  return (
    <section id="flow" className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#9B7DE0] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Request flow</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>How review requests stop depending on memory.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-gradient-to-b from-white to-[#F9FCFD] p-7">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-3">
            {flow.map((f, i) => (
              <div key={i} className="relative rounded-xl bg-white border border-[#E6EEF3] p-5">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-3" style={{ background: `${f.tone}1c`, color: f.tone }}>
                  <f.icon size={15} />
                </div>
                <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{f.label}</div>
                <div className="mt-1.5 text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>{f.note}</div>
                {i < flow.length - 1 && <div className="hidden lg:flex absolute top-1/2 -right-2.5 -translate-y-1/2 text-[#D8E6EE]"><ArrowRight size={14} /></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Boundary() {
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Feedback boundary</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Not every response should go public first.</h2>
          <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>The customer chooses the path. Public stays public. Private stays handleable.</p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#21B985]/25 p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#21B985]/15 text-[#21B985] flex items-center justify-center"><Star size={16} /></div>
              <div>
                <div className="text-[#21B985] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>Public path</div>
                <div className="text-[#08111F]" style={{ fontSize: '17px', fontWeight: 600 }}>Happy customer → Google</div>
              </div>
            </div>
            <div className="space-y-2.5">
              {["Request sent at the right time", "Customer writes the review", "Posts to Google profile", "Visible where new visitors check"].map((s) => (
                <div key={s} className="flex items-start gap-2.5 text-[#08111F]" style={{ fontSize: '14px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] mt-2 shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center"><ShieldCheck size={16} /></div>
              <div>
                <div className="text-[#35C7D8] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>Private path</div>
                <div className="text-white" style={{ fontSize: '17px', fontWeight: 600 }}>Problem reported → handled</div>
              </div>
            </div>
            <div className="space-y-2.5">
              {["Private feedback form", "Owner notified directly", "Conversation continues offline", "Nothing hidden, nothing manipulated"].map((s) => (
                <div key={s} className="flex items-start gap-2.5 text-white/85" style={{ fontSize: '14px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0 shadow-[0_0_6px_#35C7D8]" />{s}
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-6 text-[#6F8190]" style={{ fontSize: '12.5px' }}>Both paths are visible to the customer. Nothing is gated based on what they might say.</p>
      </div>
    </section>
  );
}

function VisibilityMap() {
  const nodes = [
    { icon: MapPin, label: "Google profile", note: "Where star count and recency are read" },
    { icon: Globe, label: "Local search", note: "Map results lean on review signal" },
    { icon: Workflow, label: "Service pages", note: "Specific reviews tied to specific work" },
    { icon: Star, label: "Proof on site", note: "Surfaced where the visitor decides" },
    { icon: CheckCircle2, label: "Customer decision", note: "What tips a near-call into an enquiry" },
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Trust signal map</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Reviews help people trust what they find.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-[#F6FAFC] p-7">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {nodes.map((n, i) => (
              <div key={i} className="rounded-xl bg-white border border-[#E6EEF3] p-5">
                <div className="w-9 h-9 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center mb-3"><n.icon size={15} /></div>
                <div className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 600 }}>{n.label}</div>
                <div className="mt-1.5 text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>{n.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const list = [
    { cue: "After a finished home job", line: "Patio, decking, fencing — fresh visual proof and a happy household." },
    { cue: "After a salon or clinic appointment", line: "While the experience is still in the room." },
    { cue: "After a consultation delivered", line: "When the advice has just landed and felt useful." },
    { cue: "After a maintenance visit", line: "Repeat customers are where steady reviews come from." },
    { cue: "After project handover", line: "Bigger jobs deserve a longer-form review request." },
    { cue: "Repeat customer", line: "A second opportunity, asked differently than the first." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Use cases</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Where reviews get missed.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#EEF3F6]">
          {list.map((c, i) => (
            <div key={i} className="grid grid-cols-12 gap-6 px-7 py-6 items-center">
              <div className="col-span-12 md:col-span-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#9B7DE0]/12 text-[#9B7DE0] flex items-center justify-center"><Calendar size={14} /></div>
                <span className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 600 }}>{c.cue}</span>
              </div>
              <div className="col-span-12 md:col-span-8 text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.55 }}>{c.line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const ledger = [
    { label: "Review request timing", note: "Right after work is fresh, not weeks later" },
    { label: "Message templates", note: "Set with you, not generic boilerplate" },
    { label: "Platform links", note: "Direct to your Google profile, no detours" },
    { label: "Private feedback routing", note: "Goes to a person, not a black hole" },
    { label: "Response reminders", note: "When a review needs a reply, the owner sees it" },
    { label: "Review monitoring", note: "New reviews surface in one place" },
    { label: "Proof reuse", note: "Quotes shown on service pages where they fit" },
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Coverage ledger</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What is covered.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] overflow-hidden">
          {ledger.map((l, i) => (
            <div key={i} className="grid grid-cols-12 px-7 py-5 items-center border-b border-[#EEF3F6] last:border-b-0">
              <div className="col-span-1 text-[#6F8190] tabular-nums" style={{ fontSize: '12px', fontWeight: 700 }}>0{i + 1}</div>
              <div className="col-span-4 text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{l.label}</div>
              <div className="col-span-6 text-[#4C5E6F]" style={{ fontSize: '13.5px' }}>{l.note}</div>
              <div className="col-span-1 text-right">
                <span className="inline-flex items-center gap-1.5 text-[#14B8A6]" style={{ fontSize: '11px', fontWeight: 600 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" /> Set
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitNotFit() {
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Fit / Not fit</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Where this is right.</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#21B985]/25 p-7">
            <span className="text-[#21B985] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <ul className="mt-5 space-y-3">
              {["Customers are happy but reviews are rare", "Team forgets to ask", "Reviews matter for local trust", "Bad feedback needs private handling", "You need a repeatable request process"].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px' }}><span className="w-1.5 h-1.5 rounded-full bg-[#21B985] mt-2 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#E76F6F]/25 p-7">
            <span className="text-[#E76F6F] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not</span>
            <ul className="mt-5 space-y-3">
              {["You want fake reviews", "You only want to ask happy customers and gate the rest", "You do not want to respond to feedback", "There is not enough completed work yet"].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px' }}><span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] mt-2 shrink-0" />{s}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "Is this allowed by review platforms?", a: "Yes. Public path is open to everyone. We do not gate or filter who gets asked." },
    { q: "Can we choose when requests are sent?", a: "Yes. Timing is set with you and tied to job completion." },
    { q: "What happens with unhappy customers?", a: "They can choose private feedback. Owner is notified to handle it directly." },
    { q: "Does this help local SEO?", a: "Recent, specific reviews are read into local visibility. It compounds over time." },
    { q: "Can reviews appear on the website?", a: "Yes — surfaced where they fit, not pasted in a generic carousel." },
    { q: "Can the team approve messages?", a: "Yes. Templates are set with you and editable." },
    { q: "Can this connect to CRM?", a: "Yes — request and response live alongside the job record." },
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
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #9B7DE0 0%, transparent 40%), radial-gradient(circle at 10% 90%, #14B8A6 0%, transparent 40%)' }} />
          <div className="relative">
            <h2 className="text-white max-w-[700px]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Find where good work stops becoming proof.
            </h2>
            <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
              We can map when reviews should be asked for and where feedback should go.
            </p>
            <a href="#" className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related() {
  const items = [
    { icon: MapPin, name: "Local SEO Authority", why: "Reviews feed directly into local visibility — recent, specific signal earns trust." },
    { icon: Globe, name: "Smart Website Systems", why: "Proof shows up on the surface where the next visitor decides." },
    { icon: Workflow, name: "CRM & Automation", why: "Job completion is the trigger. Without it, requests depend on memory." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '11px', fontWeight: 700 }}>Continue</div>
        <h2 className="text-[#08111F] mb-12" style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>From proof, the path keeps going.</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <div className="rounded-xl bg-[#061323] text-white p-5 h-full">
              <div className="text-[#9B7DE0] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>Origin</div>
              <div className="mt-2" style={{ fontSize: '15px', fontWeight: 600 }}>Review request layer</div>
              <div className="mt-2 text-white/55" style={{ fontSize: '12px', lineHeight: 1.5 }}>Asks at the right moment. Captures proof.</div>
            </div>
          </div>
          {items.map((it) => (
            <div key={it.name} className="col-span-12 lg:col-span-3">
              <div className="rounded-xl border border-[#E6EEF3] bg-white p-5 h-full">
                <div className="w-9 h-9 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center mb-3"><it.icon size={15} /></div>
                <div className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>{it.name}</div>
                <div className="mt-1.5 text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{it.why}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <main>
      <Hero />
      <MissedMoment />
      <RequestFlow />
      <Boundary />
      <VisibilityMap />
      <UseCases />
      <Coverage />
      <FitNotFit />
      <FAQ />
      <CTA />
      <Related />
    </main>
  );
}
