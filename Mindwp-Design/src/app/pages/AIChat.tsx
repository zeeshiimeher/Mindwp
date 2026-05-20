import { ArrowRight, MessageSquare, Clock, Inbox, Phone, CalendarDays, MapPin, HelpCircle, ArrowUpRight, UserCheck, Bot, Globe, Workflow, TrendingUp, Plus, Minus } from "lucide-react";
import { useState } from "react";

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#061323] to-[#081827] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #35C7D8 0%, transparent 45%), radial-gradient(circle at 10% 90%, #14B8A6 0%, transparent 45%)' }} />
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-28">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <span className="text-white/80 uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Part of AI Lead Handling</span>
            </div>
            <h1 className="text-white" style={{ fontSize: '64px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.03em' }}>
              Questions come in.<br />
              <span className="text-white/55">The team is busy.</span>
            </h1>
            <p className="mt-7 text-white/70 max-w-[560px]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
              A visitor is ready to ask something specific. Your team is on a job, in a treatment room, or away from the desk. If nobody answers in the moment, the visit ends quietly.
            </p>
            <div className="mt-9 flex items-center gap-5 flex-wrap">
              <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-6 py-3.5 transition-colors" style={{ fontSize: '14.5px', fontWeight: 600 }}>
                Start a Conversation <ArrowRight size={15} />
              </a>
              <a href="#flow" className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/30 pb-1" style={{ fontSize: '13.5px', fontWeight: 500 }}>
                See how first response works <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-5">
                <span className="text-white/55 uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 600 }}>Live first response</span>
                <span className="inline-flex items-center gap-1.5 text-[#35C7D8]" style={{ fontSize: '11px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
                  Active
                </span>
              </div>
              <div className="space-y-2.5">
                {[
                  { from: "Visitor", text: "Do you do patio cleanup before the bank holiday?", t: "20:14" },
                  { from: "First response", text: "Yes — patio cleaning is available. What postcode?", t: "20:14", you: true },
                  { from: "Visitor", text: "BS6, semi-detached front and back.", t: "20:15" },
                  { from: "First response", text: "Booking a site visit Tuesday 10am or Wednesday 2pm — which works?", t: "20:15", you: true },
                ].map((m, i) => (
                  <div key={i} className={`rounded-lg p-3 border ${m.you ? 'bg-[#35C7D8]/10 border-[#35C7D8]/25' : 'bg-white/[0.04] border-white/10'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className={`uppercase tracking-[0.14em] ${m.you ? 'text-[#35C7D8]' : 'text-white/55'}`} style={{ fontSize: '9.5px', fontWeight: 700 }}>{m.from}</span>
                      <span className="text-white/35" style={{ fontSize: '10.5px' }}>{m.t}</span>
                    </div>
                    <div className="text-white/85" style={{ fontSize: '13px', lineHeight: 1.5 }}>{m.text}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                {[{ l: "Reply", v: "instant" }, { l: "Qualified", v: "postcode" }, { l: "Booking", v: "offered" }].map((s) => (
                  <div key={s.l} className="rounded-md bg-white/[0.03] border border-white/8 py-2">
                    <div className="text-white/45 uppercase tracking-[0.12em]" style={{ fontSize: '9px', fontWeight: 700 }}>{s.l}</div>
                    <div className="text-white mt-1" style={{ fontSize: '12px', fontWeight: 600 }}>{s.v}</div>
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

function MomentOfFailure() {
  const moments = [
    { t: "00:00", who: "Visitor", note: "Asks about availability for next week", status: "asked" },
    { t: "00:02", who: "Inbox", note: "Form lands. Nobody on the desk.", status: "waiting" },
    { t: "00:18", who: "Visitor", note: "Opens a competitor tab", status: "drift" },
    { t: "00:47", who: "Visitor", note: "Books elsewhere. Tab closed.", status: "lost" },
    { t: "+1d", who: "Team", note: "Replies — too late", status: "cold" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[720px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Moment of failure</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The first question is usually where the lead starts slipping.
          </h2>
        </div>

        <div className="rounded-2xl bg-white border border-[#E6EEF3] overflow-hidden">
          <div className="px-8 py-4 border-b border-[#E6EEF3] flex items-center justify-between">
            <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>Unanswered moment — going cold</span>
            <span className="text-[#6F8190]" style={{ fontSize: '11.5px' }}>Tracked over time →</span>
          </div>
          <div className="relative px-8 py-10">
            <div className="absolute left-8 right-8 top-1/2 h-px bg-gradient-to-r from-[#35C7D8]/40 via-[#F4B740]/40 to-[#E76F6F]/40" />
            <div className="relative grid grid-cols-5 gap-3">
              {moments.map((m, i) => {
                const tone = m.status === "asked" ? "#35C7D8" : m.status === "waiting" ? "#F4B740" : m.status === "drift" ? "#F4B740" : "#E76F6F";
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="text-[#6F8190] tabular-nums mb-3" style={{ fontSize: '11.5px', fontWeight: 600 }}>{m.t}</div>
                    <div className="w-3 h-3 rounded-full mb-3" style={{ background: tone, boxShadow: `0 0 10px ${tone}` }} />
                    <div className="text-[#6F8190] uppercase tracking-[0.12em] mb-1" style={{ fontSize: '9.5px', fontWeight: 700 }}>{m.who}</div>
                    <div className="text-[#08111F]" style={{ fontSize: '13px', lineHeight: 1.45 }}>{m.note}</div>
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

function HandlesBoard() {
  const items = [
    { icon: HelpCircle, label: "Service questions", note: "Is this offered? In my area? On weekends?" },
    { icon: CalendarDays, label: "Booking intent", note: "Site visit, consultation, appointment" },
    { icon: MessageSquare, label: "Quote direction", note: "Range, what affects it, what to send next" },
    { icon: MapPin, label: "Location & availability", note: "Postcode, travel, slots open" },
    { icon: UserCheck, label: "Basic qualification", note: "Job size, type, urgency" },
    { icon: ArrowUpRight, label: "Next-step routing", note: "Which person, which channel, which day" },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What gets answered</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            What gets answered before someone leaves.
          </h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5 space-y-2">
            {items.map((it, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-colors ${active === i ? 'bg-[#F6FCFD] border-[#35C7D8]/40' : 'bg-white border-[#E6EEF3] hover:border-[#D8E6EE]'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${active === i ? 'bg-[#35C7D8]/15 text-[#0E2740]' : 'bg-[#F6FAFC] text-[#0E2740]'}`}>
                  <it.icon size={16} />
                </div>
                <div className="flex-1">
                  <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{it.label}</div>
                </div>
                {active === i && <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />}
              </button>
            ))}
          </div>
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-2xl border border-[#E6EEF3] bg-gradient-to-b from-white to-[#F9FCFD] p-8 h-full">
              <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10.5px', fontWeight: 700 }}>Selected</div>
              <h3 className="text-[#08111F]" style={{ fontSize: '28px', fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{items[active].label}</h3>
              <p className="mt-4 text-[#4C5E6F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>{items[active].note}</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                {["Picks up the question", "Answers from your rules", "Captures the context", "Hands off when needed"].map((s) => (
                  <div key={s} className="rounded-lg border border-[#E6EEF3] bg-white p-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] inline-block mr-2 shadow-[0_0_6px_#35C7D8]" />
                    <span className="text-[#08111F]" style={{ fontSize: '13.5px' }}>{s}</span>
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

function HandoffBoundary() {
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Boundary</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            It answers enough.<br />
            <span className="text-[#4C5E6F]">Then the right person takes over.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            The point is not to replace the team. The point is to stop simple questions from sitting unanswered and make the handoff clearer when a person needs to step in.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-2xl bg-white border border-[#35C7D8]/30 p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#35C7D8]/15 text-[#0E2740] flex items-center justify-center"><Bot size={16} /></div>
                <div>
                  <div className="text-[#14B8A6] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>AI handles</div>
                  <div className="text-[#08111F]" style={{ fontSize: '17px', fontWeight: 600 }}>Repeat, fast, low-risk</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {["Basic service questions", "Intent capture", "Availability prompts", "Routing context"].map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-[#08111F]" style={{ fontSize: '14px' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#103E5A] p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-white/8 border border-white/12 text-white flex items-center justify-center"><UserCheck size={16} /></div>
                <div>
                  <div className="text-[#35C7D8] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>Person handles</div>
                  <div className="text-white" style={{ fontSize: '17px', fontWeight: 600 }}>Nuance, judgement, trust</div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {["Pricing nuance", "Final booking", "Complex requests", "Sensitive conversations"].map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-white/85" style={{ fontSize: '14px' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] mt-2 shrink-0 shadow-[0_0_6px_#35C7D8]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhereItFits() {
  const stages = [
    { icon: Globe, label: "Website enquiry", note: "Question or form arrives", tone: "#35C7D8" },
    { icon: MessageSquare, label: "AI first response", note: "Answers, qualifies, books", tone: "#14B8A6", parent: true },
    { icon: Workflow, label: "CRM record", note: "Captured with source and intent", tone: "#F4B740" },
    { icon: UserCheck, label: "Team handoff", note: "Right owner sees the queue", tone: "#21B985" },
    { icon: Clock, label: "Follow-up", note: "Sequenced, never depending on memory", tone: "#9B7DE0" },
  ];
  return (
    <section id="flow" className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where it fits</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            It belongs inside the handling system,<br />
            <span className="text-[#4C5E6F]">not beside it.</span>
          </h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] bg-gradient-to-b from-white to-[#F6FAFC] p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            {stages.map((s, i) => (
              <div key={i} className="relative">
                <div className={`rounded-xl p-5 border h-full ${s.parent ? 'bg-[#061323] border-[#35C7D8]/30 text-white' : 'bg-white border-[#E6EEF3]'}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${s.tone}1c`, color: s.parent ? '#fff' : s.tone }}>
                      <s.icon size={16} />
                    </div>
                    {s.parent && <span className="text-[#35C7D8] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>This page</span>}
                  </div>
                  <div className={`${s.parent ? 'text-white' : 'text-[#08111F]'}`} style={{ fontSize: '14.5px', fontWeight: 600 }}>{s.label}</div>
                  <div className={`mt-1.5 ${s.parent ? 'text-white/65' : 'text-[#6F8190]'}`} style={{ fontSize: '12.5px', lineHeight: 1.5 }}>{s.note}</div>
                </div>
                {i < stages.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-2 -translate-y-1/2 text-[#D8E6EE]"><ArrowRight size={14} /></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-[#6F8190]" style={{ fontSize: '13px' }}>
            Parent: AI Lead Handling · Context: Smart Website Systems, CRM & Automation
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCases() {
  const cases = [
    { time: "After hours", icon: Clock, line: "Boiler enquiry at 21:40 — replied, captured, booked for the morning." },
    { time: "Mid-job", icon: Phone, line: "Three appointment questions while the team is on site — handled without interruption." },
    { time: "Quote ask", icon: MessageSquare, line: "Visitor asks for a range — given a sensible band and a path to a real quote." },
    { time: "Service check", icon: HelpCircle, line: "‘Do you cover BS6?’ — answered with availability the same minute." },
    { time: "Missed call", icon: Phone, line: "Voicemail abandoned — reply texted with a question and booking link." },
    { time: "Soft booking", icon: CalendarDays, line: "Holds the slot, hands the final confirmation to a person." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Use cases</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Where this helps most.</h2>
        </div>
        <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#EEF3F6]">
          {cases.map((c, i) => (
            <div key={i} className="grid grid-cols-12 gap-6 px-7 py-6 items-center hover:bg-[#F9FCFD] transition-colors">
              <div className="col-span-12 md:col-span-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center"><c.icon size={15} /></div>
                <span className="text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>{c.time}</span>
              </div>
              <div className="col-span-12 md:col-span-9 text-[#08111F]" style={{ fontSize: '15px', lineHeight: 1.55 }}>{c.line}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const ledger = [
    { label: "Conversation prompts", note: "Tone, opening, fallback phrasing" },
    { label: "Response rules", note: "What to answer, what to defer" },
    { label: "Qualification questions", note: "Postcode, timing, job size" },
    { label: "Booking handoff", note: "Slot offer, calendar link, confirm path" },
    { label: "CRM/context capture", note: "Source, intent, transcript" },
    { label: "Escalation rules", note: "When a person must step in" },
    { label: "Fallback handling", note: "Out-of-scope, sensitive, missing info" },
  ];
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-12">
          <div className="text-[#14B8A6] uppercase tracking-[0.16em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Coverage ledger</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What is covered.</h2>
        </div>
        <div className="rounded-2xl border border-[#E6EEF3] overflow-hidden">
          <div className="grid grid-cols-12 px-7 py-3 bg-[#F9FCFD] border-b border-[#E6EEF3] text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>
            <div className="col-span-1">#</div>
            <div className="col-span-4">Coverage</div>
            <div className="col-span-6">What it covers</div>
            <div className="col-span-1 text-right">State</div>
          </div>
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
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>This is right when first response matters.</h2>
        </div>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#21B985]/25 p-7">
            <span className="text-[#21B985] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <ul className="mt-5 space-y-3">
              {["Enquiries arrive outside office hours", "Staff are busy during the day", "Visitors ask repeat questions", "Booking intent needs catching quickly", "Your team still needs final control"].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] mt-2 shrink-0" />{s}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-6 rounded-2xl bg-white border border-[#E76F6F]/25 p-7">
            <span className="text-[#E76F6F] uppercase tracking-[0.16em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not</span>
            <ul className="mt-5 space-y-3">
              {["You want AI to fully replace your team", "Conversations are too sensitive to automate", "You do not have a clear next step", "You only want a decorative chat widget"].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '14.5px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] mt-2 shrink-0" />{s}
                </li>
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
    { q: "Will this replace our team?", a: "No. It picks up the first question and hands real conversations to a person." },
    { q: "Can it book appointments?", a: "It can offer slots and hold them. The team confirms the booking." },
    { q: "Can it connect to CRM?", a: "Yes — captured with source, intent, and full transcript." },
    { q: "What happens if it cannot answer?", a: "It says so plainly, captures the question, and routes to the right owner." },
    { q: "Can we control what it says?", a: "Yes. Tone, scope, and rules are set with you, not on your behalf." },
    { q: "Does this work after hours?", a: "Yes. After-hours is where it usually pays for itself." },
    { q: "Is this part of the website or separate?", a: "Sits on the site, but its job is handling — not just a widget." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-white py-28">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '42px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>Common questions</h2>
            <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15px', lineHeight: 1.65 }}>Practical answers, no spin.</p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-6 py-5 hover:bg-[#F6FAFC] transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 600 }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
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
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                See where first response is going cold.
              </h2>
              <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
                We can map the moments where visitors ask, wait, and leave before anyone replies.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Start a Conversation <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Related() {
  const items = [
    { icon: Globe, name: "Smart Website Systems", why: "The surface where the question arrives. Capture has to be properly wired in." },
    { icon: Workflow, name: "CRM & Automation", why: "Where the conversation lands, gets owned, and stops depending on memory." },
    { icon: TrendingUp, name: "Revenue Growth", why: "What returned, what closed, and which conversations were worth the most." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-24">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '11px', fontWeight: 700 }}>Continue</div>
        <h2 className="text-[#08111F] mb-12" style={{ fontSize: '38px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>From first response, the path keeps going.</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3">
            <div className="rounded-xl bg-[#061323] text-white p-5 h-full">
              <div className="text-[#35C7D8] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>Origin</div>
              <div className="mt-2" style={{ fontSize: '15px', fontWeight: 600 }}>AI Chat — first response</div>
              <div className="mt-2 text-white/55" style={{ fontSize: '12px', lineHeight: 1.5 }}>Picks up the moment before it goes cold.</div>
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

export function AIChat() {
  return (
    <main>
      <Hero />
      <MomentOfFailure />
      <HandlesBoard />
      <HandoffBoundary />
      <WhereItFits />
      <UseCases />
      <Coverage />
      <FitNotFit />
      <FAQ />
      <CTA />
      <Related />
    </main>
  );
}
