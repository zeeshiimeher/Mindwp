import { useState } from "react";
import { ArrowRight, AlertTriangle, UserCheck, Plus, Minus, User, Database, Globe } from "lucide-react";

// 1. HERO
function AILHHero() {
  const events = [
    { tone: "#9D7CF8", state: "INCOMING", label: "Call: roofing quote — BS8", time: "07:43", note: "Team on site — handled", live: true },
    { tone: "#35C7D8", state: "REPLIED", label: "Form: kitchen fit — urgent?", time: "08:12", note: "Reply sent in 45s" },
    { tone: "#F4B740", state: "URGENT", label: "Gas call: emergency cover", time: "08:47", note: "Flagged — team notified" },
    { tone: "#21B985", state: "ROUTED", label: "Quote request: bathroom refit", time: "09:14", note: "Sent to Sophie" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#0F1E3C] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 10%, #9D7CF8 0%, transparent 45%), radial-gradient(ellipse at 90% 90%, #35C7D8 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-32 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#9D7CF8]/30 bg-[#9D7CF8]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9D7CF8] shadow-[0_0_8px_#9D7CF8]" />
            <span className="text-[#9D7CF8] uppercase tracking-[0.2em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>AI Lead Handling</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
            The Enquiry Arrived.<br /><span className="text-white/45">Nobody Was There<br />To Answer It.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-[540px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            While the team is on a job, driving, or done for the day — calls go to voicemail, forms sit unopened, messages wait until morning. The customer does not wait.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "Missed calls", c: "#E76F6F" }, { l: "After-hours enquiries", c: "#F4B740" }, { l: "Unanswered forms", c: "#9D7CF8" }].map((x) => (
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
                <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Response Layer</div>
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>Today — 4 handled</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#9D7CF8]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D7CF8] shadow-[0_0_8px_#9D7CF8] animate-pulse" /> Active
              </span>
            </div>
            <div className="space-y-2">
              {events.map((e, i) => (
                <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/8 bg-white/[0.02]">
                  <span className="w-1 h-9 rounded-full" style={{ background: e.tone, boxShadow: `0 0 10px ${e.tone}55` }} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="px-1.5 py-0.5 rounded uppercase tracking-[0.14em]" style={{ fontSize: '9px', fontWeight: 700, color: e.tone, background: `${e.tone}18`, border: `1px solid ${e.tone}40` }}>{e.state}</span>
                      {e.live && <span className="text-[#9D7CF8]" style={{ fontSize: '9.5px', fontWeight: 600 }}>● LIVE</span>}
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

// 2. MISSED ENQUIRY DIAGNOSIS
function MissedDiagnosis() {
  const leaks = [
    { name: "Missed call", note: "Rang while the team was on a job", state: "critical", main: true },
    { name: "Form unread", note: "Arrived at 6pm — nobody saw it until 9am", state: "risk" },
    { name: "Message waiting", note: '"Can you send a quote?" — no reply for 3 days', state: "risk" },
    { name: "After-hours", note: "Landed at 20:14. Office opens at 8am.", state: "weak" },
    { name: "Nobody owns it", note: "Everyone assumed someone else replied", state: "weak" },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>First-response diagnosis</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Where enquiries go unanswered
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
            The enquiry arrived. The business missed the window. Not because nobody cared — because nobody was there in the moment.
          </p>
        </div>

        <div className="rounded-[20px] bg-white border border-[#E6EEF3] p-10 lg:p-14 relative overflow-hidden">
          <div className="grid grid-cols-12 gap-4 items-stretch">
            {leaks.map((m, i) => {
              const dom = m.main;
              const tone = m.state === "critical" ? "#E76F6F" : m.state === "risk" ? "#F4B740" : "#9D7CF8";
              return (
                <div key={i} className={`${dom ? 'col-span-12 md:col-span-4' : 'col-span-6 md:col-span-2'} relative`}>
                  <div className={`h-full rounded-xl p-5 ${dom ? 'bg-gradient-to-br from-[#FDECEC] to-white border border-[#E76F6F]/30 shadow-[0_12px_40px_rgba(231,111,111,0.12)]' : 'bg-[#F6FAFC] border border-[#E6EEF3]'}`}>
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

          <div className="mt-10 pt-8 border-t border-[#E6EEF3] flex items-center justify-between text-[#6F8190]" style={{ fontSize: '12.5px' }}>
            <span>Call → Form → Message → <span className="text-[#E76F6F]">No reply</span> → Customer moves on</span>
            <span>Most first-response failures happen here.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 3. FIRST RESPONSE WINDOW
function FirstResponseWindow() {
  const unhandled = [
    { t: "0 min", label: "Enquiry arrives", state: "ok" },
    { t: "2 min", label: "Silence", state: "warn" },
    { t: "8 min", label: "Customer opens a competitor tab", state: "risk" },
    { t: "22 min", label: "Books elsewhere", state: "lost" },
    { t: "+1 day", label: "Team replies — too late", state: "lost" },
  ];
  const handled = [
    { t: "0 min", label: "Enquiry arrives", state: "ok" },
    { t: "45s", label: "First reply sent", state: "active" },
    { t: "2 min", label: "Qualifying question asked", state: "active" },
    { t: "4 min", label: "Job type and urgency captured", state: "active" },
    { t: "5 min", label: "Routed to team with context", state: "done" },
  ];

  const dotColor = (state: string) => {
    if (state === "ok") return "#21B985";
    if (state === "active" || state === "done") return "#9D7CF8";
    if (state === "warn") return "#F4B740";
    return "#E76F6F";
  };

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The response window</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The first few minutes decide it
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
            This is not about nurturing. It is about whether someone is still deciding. The window is open briefly.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Unhandled */}
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-[20px] bg-[#F6FAFC] border border-[#E6EEF3] overflow-hidden h-full">
              <div className="px-7 py-4 border-b border-[#E6EEF3] flex items-center justify-between">
                <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>No first response</span>
                <span className="inline-flex items-center gap-1.5 text-[#E76F6F]" style={{ fontSize: '11px', fontWeight: 600 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]" /> Customer lost
                </span>
              </div>
              <div className="p-7 relative">
                <div className="absolute left-[42px] top-12 bottom-12 w-px bg-gradient-to-b from-[#E76F6F]/30 via-[#E76F6F]/20 to-transparent" />
                <div className="space-y-5">
                  {unhandled.map((s, i) => (
                    <div key={i} className="flex items-start gap-4 relative">
                      <div className="w-12 text-right shrink-0">
                        <span className="text-[#6F8190] tabular-nums" style={{ fontSize: '10.5px', fontWeight: 600 }}>{s.t}</span>
                      </div>
                      <div className="w-3 h-3 rounded-full mt-0.5 shrink-0 relative z-10" style={{ background: dotColor(s.state), boxShadow: `0 0 8px ${dotColor(s.state)}` }} />
                      <div className="text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.5 }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Handled */}
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-[20px] bg-gradient-to-br from-[#061323] to-[#0F1E3C] overflow-hidden h-full relative">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative">
                <div className="px-7 py-4 border-b border-white/8 flex items-center justify-between">
                  <span className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>First response in place</span>
                  <span className="inline-flex items-center gap-1.5 text-[#9D7CF8]" style={{ fontSize: '11px', fontWeight: 600 }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9D7CF8] shadow-[0_0_6px_#9D7CF8] animate-pulse" /> Handled
                  </span>
                </div>
                <div className="p-7 relative">
                  <div className="absolute left-[42px] top-12 bottom-12 w-px bg-gradient-to-b from-[#9D7CF8]/40 via-[#9D7CF8]/20 to-transparent" />
                  <div className="space-y-5">
                    {handled.map((s, i) => (
                      <div key={i} className="flex items-start gap-4 relative">
                        <div className="w-12 text-right shrink-0">
                          <span className="text-white/55 tabular-nums" style={{ fontSize: '10.5px', fontWeight: 600 }}>{s.t}</span>
                        </div>
                        <div className="w-3 h-3 rounded-full mt-0.5 shrink-0 relative z-10" style={{ background: dotColor(s.state), boxShadow: `0 0 8px ${dotColor(s.state)}` }} />
                        <div className="text-white/85" style={{ fontSize: '14px', lineHeight: 1.5 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. CONVERSATION HANDLING VISUAL (main body section)
function ConversationTriage() {
  const messages = [
    { from: "Customer", text: "Hi, do you cover emergency boiler callouts in the evening?", t: "19:42", kind: "inbound", flag: null },
    { from: "First response", text: "Yes — evening callouts are available. What postcode and is the boiler completely off?", t: "19:42", kind: "reply", flag: null },
    { from: "Customer", text: "BS5. No hot water, no heating. Three young kids.", t: "19:43", kind: "inbound", flag: null },
    { from: "First response", text: "Flagging as urgent — family with no heating. Capturing your number. One of the team will confirm availability in the next few minutes.", t: "19:43", kind: "reply", flag: "URGENT" },
  ];
  const meta = [
    { label: "Job type", value: "Emergency callout" },
    { label: "Urgency", value: "High" },
    { label: "Postcode", value: "BS5" },
    { label: "Next step", value: "Team confirm" },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>How it handles the conversation</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Reply. Qualify. Flag. Route.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
            The first reply goes out before anyone checks. The next message extracts what the team needs. Urgency is flagged before it becomes a problem.
          </p>
        </div>

        <div className="rounded-[20px] bg-white border border-[#E6EEF3] overflow-hidden">
          <div className="px-7 py-4 border-b border-[#E6EEF3] flex items-center justify-between bg-[#F9FCFD]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#9D7CF8] shadow-[0_0_8px_#9D7CF8] animate-pulse" />
              <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>First response — active triage</span>
            </div>
            <span className="text-[#6F8190]" style={{ fontSize: '11.5px' }}>19:42 · Emergency boiler enquiry</span>
          </div>

          <div className="grid grid-cols-12">
            {/* Conversation thread */}
            <div className="col-span-12 lg:col-span-8 p-8 border-r border-[#E6EEF3] space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`${m.kind === "reply" ? 'ml-8' : 'mr-8'}`}>
                  <div className={`rounded-xl p-4 border ${m.kind === "reply" ? 'bg-gradient-to-br from-[#EEF0FD] to-white border-[#9D7CF8]/30' : 'bg-[#F6FAFC] border-[#E6EEF3]'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`uppercase tracking-[0.14em] ${m.kind === "reply" ? 'text-[#9D7CF8]' : 'text-[#6F8190]'}`} style={{ fontSize: '9.5px', fontWeight: 700 }}>{m.from}</span>
                        {m.flag && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E76F6F]/15 text-[#E76F6F] border border-[#E76F6F]/30" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em' }}>
                            <AlertTriangle size={9} /> {m.flag}
                          </span>
                        )}
                      </div>
                      <span className="text-[#6F8190]" style={{ fontSize: '10.5px' }}>{m.t}</span>
                    </div>
                    <p className="text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Triage state panel */}
            <div className="col-span-12 lg:col-span-4 p-7 bg-[#F9FCFD]">
              <div className="text-[#6F8190] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '10.5px', fontWeight: 700 }}>Triage state</div>
              <div className="space-y-2.5 mb-6">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-center justify-between px-4 py-3 rounded-lg border border-[#E6EEF3] bg-white">
                    <span className="text-[#6F8190]" style={{ fontSize: '12px' }}>{m.label}</span>
                    <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>{m.value}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-lg border border-[#E76F6F]/30 bg-gradient-to-br from-[#FDECEC]/60 to-white p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle size={13} className="text-[#E76F6F]" />
                  <span className="text-[#E76F6F] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>Urgent flagged</span>
                </div>
                <p className="text-[#08111F]" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>Family without heating. Team notified. Handoff ready.</p>
              </div>

              <div className="mt-4 px-4 py-3 rounded-lg border border-[#9D7CF8]/30 bg-[#9D7CF8]/5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9D7CF8] shadow-[0_0_6px_#9D7CF8]" />
                <span className="text-[#9D7CF8]" style={{ fontSize: '12px', fontWeight: 600 }}>Ready for team handoff</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary callouts */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "First reply", note: "Before anyone checks the phone" },
            { label: "Qualifying question", note: "Extracts what the team needs" },
            { label: "Urgency flagged", note: "Detected from message context" },
            { label: "Handoff prepared", note: "Context ready for the team" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-[#E6EEF3] bg-white p-5 text-center">
              <span className="w-2 h-2 rounded-full bg-[#9D7CF8] shadow-[0_0_8px_#9D7CF8] inline-block mb-3" />
              <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 600 }}>{s.label}</div>
              <div className="text-[#6F8190] mt-1" style={{ fontSize: '12px' }}>{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. QUALIFICATION / ROUTING
function QualificationRouting() {
  const lanes = [
    { type: "Emergency / urgent", note: "Gas, flooding, no heat, electrical fault", action: "Notify team immediately", tone: "#E76F6F" },
    { type: "Quote request", note: "Job scope, size, location, timeline needed", action: "Capture details, confirm next step", tone: "#F4B740" },
    { type: "Booking request", note: "Site visit, consultation, fixed appointment", action: "Offer available slots or escalate", tone: "#9D7CF8" },
    { type: "Existing customer", note: "Follow-up, job status, repeat work", action: "Route to correct team member", tone: "#35C7D8" },
    { type: "Not a fit", note: "Out of area, service not offered", action: "Polite close, no dead end", tone: "#6F8190" },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Qualification & routing</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Not every enquiry needs the same next step
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
            The handling layer reads what arrived and routes accordingly. An urgent callout and a quote request do not go to the same queue.
          </p>
        </div>

        <div className="rounded-[20px] border border-[#E6EEF3] bg-[#F6FAFC] overflow-hidden">
          <div className="px-7 py-4 border-b border-[#E6EEF3] bg-white flex items-center justify-between">
            <span className="text-[#08111F]" style={{ fontSize: '13px', fontWeight: 600 }}>Routing decision map</span>
            <span className="text-[#6F8190]" style={{ fontSize: '11.5px' }}>5 enquiry types · 5 next steps</span>
          </div>

          <div className="hidden md:grid grid-cols-12 px-7 py-3 border-b border-[#E6EEF3] bg-[#F9FCFD] text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '10px', fontWeight: 700 }}>
            <div className="col-span-1" />
            <div className="col-span-3">Enquiry type</div>
            <div className="col-span-4">What it looks like</div>
            <div className="col-span-4">What happens next</div>
          </div>

          {lanes.map((l, i) => (
            <div key={l.type} className={`grid grid-cols-12 items-center gap-4 px-7 py-6 ${i < lanes.length - 1 ? 'border-b border-[#EEF3F6]' : ''}`}>
              <div className="col-span-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: l.tone, boxShadow: `0 0 8px ${l.tone}` }} />
              </div>
              <div className="col-span-12 md:col-span-3">
                <span className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}>{l.type}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <span className="text-[#4C5E6F]" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>{l.note}</span>
              </div>
              <div className="col-span-12 md:col-span-4">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ fontSize: '12px', fontWeight: 600, color: l.tone, borderColor: `${l.tone}40`, background: `${l.tone}10` }}>
                  <span className="w-1 h-1 rounded-full" style={{ background: l.tone }} />
                  {l.action}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. HUMAN HANDOFF
function HumanHandoff() {
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Team handoff</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The team gets the enquiry — with context
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.65 }}>
            The handoff is not a raw forwarded message. It is a structured summary: who called, what they need, how urgent it is, and what the next step is.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Handoff card */}
          <div className="col-span-12 lg:col-span-7">
            <div className="rounded-[20px] bg-white border border-[#E6EEF3] overflow-hidden">
              <div className="px-8 py-5 border-b border-[#E6EEF3] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#9D7CF8]/15 border border-[#9D7CF8]/30 flex items-center justify-center">
                    <UserCheck size={16} className="text-[#9D7CF8]" />
                  </div>
                  <div>
                    <div className="text-[#6F8190] uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Handoff ready</div>
                    <div className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 600 }}>New enquiry — team action needed</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E76F6F]/10 text-[#E76F6F] border border-[#E76F6F]/25" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_6px_#E76F6F]" /> URGENT
                </span>
              </div>

              <div className="p-8 grid grid-cols-2 gap-4">
                {[
                  { label: "Name", value: "Jamie — not confirmed" },
                  { label: "Contact", value: "07XXX — from message" },
                  { label: "Service", value: "Emergency boiler callout" },
                  { label: "Location", value: "BS5 postcode" },
                  { label: "Urgency", value: "High — family, no heating" },
                  { label: "Time received", value: "19:43 tonight" },
                ].map((f) => (
                  <div key={f.label} className="px-4 py-3.5 rounded-lg border border-[#E6EEF3] bg-[#F9FCFD]">
                    <div className="text-[#6F8190] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>{f.label}</div>
                    <div className="text-[#08111F] mt-1" style={{ fontSize: '14px', fontWeight: 600 }}>{f.value}</div>
                  </div>
                ))}
              </div>

              <div className="px-8 pb-8">
                <div className="rounded-xl border border-[#9D7CF8]/30 bg-gradient-to-br from-[#F0EEFE] to-white p-5">
                  <div className="text-[#9D7CF8] uppercase tracking-[0.14em] mb-2" style={{ fontSize: '10px', fontWeight: 700 }}>Recommended next step</div>
                  <p className="text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.6 }}>Call back before 20:30. Confirm availability for tonight or first slot tomorrow morning. Customer is expecting a callback.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Route targets */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-2xl bg-gradient-to-br from-[#061323] to-[#0F1E3C] p-7 relative overflow-hidden flex-1">
              <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="relative">
                <span className="text-[#9D7CF8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Where it routes</span>
                <div className="mt-4 space-y-3">
                  {[
                    { icon: User, label: "On-call team member", note: "Notified directly by message" },
                    { icon: Database, label: "CRM / job queue", note: "Record created, status: pending" },
                    { icon: Globe, label: "Owner dashboard", note: "Visible on open enquiries" },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.03]">
                      <div className="w-8 h-8 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/70 shrink-0">
                        <r.icon size={14} />
                      </div>
                      <div className="flex-1">
                        <div className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>{r.label}</div>
                        <div className="text-white/50" style={{ fontSize: '11.5px' }}>{r.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white border border-[#E6EEF3] p-6">
              <div className="text-[#6F8190] uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10px', fontWeight: 700 }}>Not replaced — handed off</div>
              <p className="text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                The team is not removed from the process. They receive the enquiry with context — instead of a missed call and no information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. WHAT CHANGES
function WhatChanges() {
  const before = [
    "Call goes to voicemail",
    "Form waits overnight",
    "Nobody owns the reply",
    "Customer asks someone else",
    "Team has no context when they dial back",
  ];
  const after = [
    "First reply sent within minutes",
    "Urgency identified and flagged",
    "Enquiry routed with context",
    "Team gets a structured handoff",
    "Next step is clear before anyone dials",
  ];

  return (
    <section className="bg-gradient-to-br from-[#061323] to-[#0E2740] py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="relative max-w-[1240px] mx-auto px-8">
        <div className="max-w-[760px] mb-16">
          <div className="text-white/45 uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What changes</div>
          <h2 className="text-white" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Enquiries stop sitting unanswered
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {/* Before */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-[20px] border border-white/10 bg-white/[0.03] p-8 h-full">
              <div className="flex items-center justify-between mb-7">
                <span className="text-white/50 uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Before</span>
                <span className="text-[#E76F6F]" style={{ fontSize: '11px' }}>No handling in place</span>
              </div>
              <div className="space-y-3">
                {before.map((s) => (
                  <div key={s} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/8 bg-white/[0.02]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shrink-0" />
                    <span className="text-white/70" style={{ fontSize: '14px' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow divider */}
          <div className="col-span-12 lg:col-span-2 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row items-center gap-3">
              <div className="w-px h-12 lg:w-12 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-[#9D7CF8]/60 to-[#35C7D8]/60" />
              <div className="w-10 h-10 rounded-full bg-[#9D7CF8]/20 border border-[#9D7CF8]/40 flex items-center justify-center shrink-0">
                <ArrowRight size={16} className="text-[#9D7CF8]" />
              </div>
              <div className="w-px h-12 lg:w-12 lg:h-px bg-gradient-to-b lg:bg-gradient-to-r from-[#35C7D8]/60 to-[#9D7CF8]/60" />
            </div>
          </div>

          {/* After */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-[20px] bg-gradient-to-br from-[#1A1048] to-[#0F1E3C] border border-[#9D7CF8]/30 p-8 h-full relative overflow-hidden">
              <div className="absolute -inset-px rounded-[20px] border border-[#9D7CF8]/15 pointer-events-none" />
              <div className="flex items-center justify-between mb-7">
                <span className="text-[#9D7CF8] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>After</span>
                <span className="inline-flex items-center gap-1.5 text-[#21B985]" style={{ fontSize: '11px', fontWeight: 600 }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" /> Handled
                </span>
              </div>
              <div className="space-y-3">
                {after.map((s) => (
                  <div key={s} className="flex items-center gap-3 px-4 py-3 rounded-lg border border-[#9D7CF8]/20 bg-[#9D7CF8]/[0.05]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9D7CF8] shadow-[0_0_6px_#9D7CF8] shrink-0" />
                    <span className="text-white/85" style={{ fontSize: '14px' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Effect callouts */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Fewer missed opportunities", note: "Enquiries that would have gone cold are held and routed" },
            { name: "Team answers with context", note: "No cold call-back — they know the job before they dial" },
            { name: "After-hours enquiries land correctly", note: "Received, acknowledged, and queued before morning" },
          ].map((c, i) => (
            <div key={c.name} className="rounded-xl border border-white/10 bg-white/[0.03] p-5 flex items-start gap-4">
              <span className="text-white/35 tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em' }}>0{i + 1}</span>
              <div>
                <div className="text-white" style={{ fontSize: '15px', fontWeight: 600, letterSpacing: '-0.01em' }}>{c.name}</div>
                <div className="text-white/55 mt-1" style={{ fontSize: '13px' }}>{c.note}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. FAQ
function AILHFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Will it sound robotic to customers?", a: "The replies are configured around your business — your services, your tone, your rules. The first reply sounds like a business that is on top of things, not a placeholder response." },
    { q: "Does it replace my team?", a: "No. It handles the first reply and the initial qualification so the team gets an enquiry with context, not a cold message or a missed call. The team still does the job." },
    { q: "What happens with urgent enquiries?", a: "Urgency is detected from the conversation. An emergency flagged as such routes differently — the team is notified directly, not just added to a general queue." },
    { q: "Can it handle missed calls?", a: "Yes. A missed call triggers an immediate message back. The customer knows they have been seen, and the call is captured and queued for the team." },
    { q: "What if the customer wants to speak to a real person?", a: "The handling layer recognises when the conversation needs a human. It lets the customer know someone will be in touch and routes the enquiry with a note." },
    { q: "Does this connect to a CRM?", a: "Yes. Qualified enquiries pass into the CRM — or a lightweight record is created if there is none in place. The handoff is structured, not a forwarded message." },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              What people ask before putting this in place
            </h2>
            <p className="mt-5 text-[#4C5E6F]" style={{ fontSize: '15px', lineHeight: 1.65 }}>
              Practical questions. Straight answers.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-[#F6FAFC] border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-7 py-6 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600 }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-white border border-[#E6EEF3] text-[#0E2740] flex items-center justify-center shrink-0">
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

// 9. CTA
function AILHCta() {
  return (
    <section id="cta" className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, #9D7CF8 0%, transparent 40%), radial-gradient(circle at 10% 85%, #35C7D8 0%, transparent 45%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '60px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
                Show us where enquiries are slipping through
              </h2>
              <p className="mt-6 text-white/65 max-w-[540px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                Tell us what arrives, when it arrives, and what happens next. We map the first-response gaps and show what putting a handling layer in place would change.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Start a Conversation <ArrowRight size={16} />
              </a>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur-sm">
                <div className="text-white/50 uppercase tracking-[0.14em] mb-4" style={{ fontSize: '10.5px', fontWeight: 600 }}>What we map first</div>
                <div className="space-y-3">
                  {[
                    { num: "01", text: "Where calls and forms are currently landing" },
                    { num: "02", text: "How long before first reply — and who owns it" },
                    { num: "03", text: "What after-hours traffic looks like" },
                    { num: "04", text: "Which enquiries are going cold before the team sees them" },
                  ].map((s) => (
                    <div key={s.num} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <span className="text-[#9D7CF8]" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>{s.num}</span>
                      <span className="text-white/85" style={{ fontSize: '13.5px' }}>{s.text}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/8 flex items-center justify-between text-white/50" style={{ fontSize: '11.5px' }}>
                  <span>No pitch. Just the map.</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9D7CF8] shadow-[0_0_6px_#9D7CF8]" />
                    Practical conversation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AILeadHandling() {
  return (
    <main>
      <AILHHero />
      <MissedDiagnosis />
      <FirstResponseWindow />
      <ConversationTriage />
      <QualificationRouting />
      <HumanHandoff />
      <WhatChanges />
      <AILHFaq />
      <AILHCta />
    </main>
  );
}
