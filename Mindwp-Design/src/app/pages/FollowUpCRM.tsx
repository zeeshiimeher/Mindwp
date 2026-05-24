import { useState } from "react";
import { ArrowRight, UserCheck, Clock, CalendarDays, MessageSquare, FileText, CheckCircle2, Star, Plus, Minus, User, Globe, Phone, Repeat, Bell, Eye, Compass, ListChecks } from "lucide-react";

// 01 HERO
function FUHero() {
  const enquiries = [
    { icon: FileText, tone: "#21B985", state: "QUOTE SENT", label: "Bathroom refit · awaiting reply", status: "Follow-up due Friday", owner: "Owner: Sophie" },
    { icon: MessageSquare, tone: "#35C7D8", state: "CONSULTATION", label: "Implant patient enquiry", status: "Reminder scheduled", owner: "Owner: Dr Patel" },
    { icon: Phone, tone: "#F4B740", state: "CALLBACK", label: "Roof job · promised callback", status: "Due today", owner: "Owner: Amir" },
    { icon: CalendarDays, tone: "#0F7A57", state: "BOOKING", label: "Annual service appointment", status: "Confirmation pending", owner: "Owner: Office" },
    { icon: CheckCircle2, tone: "#14B8A6", state: "COMPLETED", label: "Kitchen install · finished Tuesday", status: "Ready for review handoff", owner: "Owner: Sophie" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#061A1F] via-[#072A22] to-[#0A3A2A] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(ellipse at 15% 15%, #21B985 0%, transparent 45%), radial-gradient(ellipse at 90% 90%, #35C7D8 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-32 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#21B985]/30 bg-[#21B985]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985]" />
            <span className="text-[#9FE3CD] uppercase tracking-[0.2em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Follow-Up &amp; CRM Systems</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
            The Enquiry Was Answered.<br /><span className="text-white/45">The Next Step<br />Still Disappeared.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-[580px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            After the first reply, quotes need chasing, bookings need confirming, consultations need reminders, and long-cycle enquiries need somewhere to live. Follow-Up &amp; CRM Systems give every active enquiry an owner, a status, and a next step.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061A1F] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
            <a href="#where" className="inline-flex items-center gap-2 text-white/85 hover:text-white" style={{ fontSize: '14px', fontWeight: 600 }}>
              See where follow-up slips <ArrowRight size={14} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "No owner", c: "#F4B740" }, { l: "No next step", c: "#E76F6F" }, { l: "Follow-up forgotten", c: "#9CA3B0" }].map((x) => (
              <span key={x.l} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }} />
                <span className="text-white/80" style={{ fontSize: '12.5px', fontWeight: 500 }}>{x.l}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right — active enquiries surface */}
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
              <div>
                <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Active enquiries</div>
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>This morning · owner view</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#21B985]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" /> In view
              </span>
            </div>
            <div className="space-y-2">
              {enquiries.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div key={i} className="flex items-start gap-3 px-3.5 py-3 rounded-lg border border-white/8 bg-white/[0.02]">
                    <div className="w-9 h-9 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0" style={{ color: e.tone }}>
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="uppercase tracking-[0.14em]" style={{ color: e.tone, fontSize: '9.5px', fontWeight: 700 }}>{e.state}</div>
                      <div className="text-white truncate" style={{ fontSize: '13px', fontWeight: 600 }}>{e.label}</div>
                      <div className="flex items-center justify-between mt-0.5 text-white/55" style={{ fontSize: '11px' }}>
                        <span>{e.status}</span>
                        <span className="ml-2 truncate">{e.owner}</span>
                      </div>
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

// 02 WHERE FOLLOW-UP BREAKS
function FUWhereBreaks() {
  const moments = [
    { icon: Eye, tone: "#9D7CF8", title: "Proposal viewed — no follow-up", note: "The customer opened it three times. Nobody picked up the thread." },
    { icon: Phone, tone: "#E76F6F", title: "Callback promised — not logged", note: "A verbal commitment in the morning. Forgotten by the afternoon." },
    { icon: CalendarDays, tone: "#0F7A57", title: "Appointment booked — reminder forgotten", note: "The patient turned up the wrong week. Nobody had confirmed." },
    { icon: MessageSquare, tone: "#0468A8", title: "Consultation reply sent — no next task", note: "First reply went out. The enquiry slid off the list." },
    { icon: Clock, tone: "#6F8190", title: "Lead said \"next month\" — disappeared", note: "A real future enquiry. No place to live until then." },
    { icon: Star, tone: "#7C4DCF", title: "Job completed — no review handoff", note: "Good work. Thanked in person. Then nothing happened with it." },
  ];

  return (
    <section id="where" className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where follow-up breaks</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The first reply happened.{' '}
            <span className="text-[#4C5E6F]">The follow-up still went quiet.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Most work that slips through is not a missed first reply. It is the second move that never came — the chase, the confirmation, the reminder, the next task that depended on someone remembering.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — anchor story */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#061A1F] to-[#0A3A2A] p-8 lg:p-9 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(33,185,133,0.22) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985]" />
                  <span className="text-[#9FE3CD] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>One quote · ten working days</span>
                </div>
                <div className="text-white mb-6" style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  The quote that just sat there.
                </div>

                <ol className="space-y-3.5 relative">
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/15 text-[#9FE3CD] flex items-center justify-center shrink-0" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>T</span>
                    <div className="flex-1">
                      <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 700 }}>Tuesday · Quote sent</div>
                      <div className="text-white/55 mt-0.5" style={{ fontSize: '12px', lineHeight: 1.5 }}>The owner moves on to the next job.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/15 text-[#9FE3CD] flex items-center justify-center shrink-0" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>F</span>
                    <div className="flex-1">
                      <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 700 }}>Friday · Customer opens it</div>
                      <div className="text-white/55 mt-0.5" style={{ fontSize: '12px', lineHeight: 1.5 }}>No follow-up scheduled, no notification, no nudge.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#F4B740]/15 border border-[#F4B740]/40 text-[#F4B740] flex items-center justify-center shrink-0" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>W</span>
                    <div className="flex-1">
                      <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 700 }}>Following Wednesday · Customer asks elsewhere</div>
                      <div className="text-white/55 mt-0.5" style={{ fontSize: '12px', lineHeight: 1.5 }}>They never heard back. They assumed silence meant disinterest.</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#E76F6F]/15 border border-[#E76F6F]/40 text-[#E76F6F] flex items-center justify-center shrink-0" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>—</span>
                    <div className="flex-1">
                      <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 700 }}>Two weeks on · Job booked elsewhere</div>
                      <div className="text-white/55 mt-0.5" style={{ fontSize: '12px', lineHeight: 1.5 }}>A different company won the work the team had already quoted.</div>
                    </div>
                  </li>
                </ol>

                <div className="mt-7 pt-5 border-t border-white/10 text-white/55" style={{ fontSize: '12px', lineHeight: 1.55 }}>
                  Nothing was wrong with the quote. Follow-up was depending on memory.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — six moments */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-7 lg:p-8" style={{ boxShadow: '0 16px 48px rgba(8,17,31,0.06)' }}>
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6 pb-5 border-b border-[#EEF3F6]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_6px_#21B985]" />
                  <span className="text-[#0F7A57] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Six more ordinary moments</span>
                </div>
                <span className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>Same week · different paths</span>
              </div>

              <div className="space-y-3">
                {moments.map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.title} className="flex items-start gap-4 px-4 py-3.5 rounded-lg border border-[#E6EEF3] bg-[#F9FCFD]">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center shrink-0" style={{ background: `${m.tone}15`, border: `1px solid ${m.tone}30`, color: m.tone }}>
                        <Icon size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{m.title}</div>
                        <div className="text-[#6F8190] mt-0.5" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{m.note}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-[#EEF3F6] text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                <span className="font-semibold">None of these are bad work.</span>{' '}
                <span className="text-[#4C5E6F]">They are good work that nobody carried forward.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03 OWNER, STATUS, NEXT STEP
function FURule() {
  const parts = [
    {
      tag: '01',
      icon: UserCheck,
      label: 'Owner',
      headline: 'Who is responsible.',
      body: 'Not the inbox. Not "the team." A named person whose name is attached to the enquiry — and who knows it.',
    },
    {
      tag: '02',
      icon: Compass,
      label: 'Status',
      headline: 'Where it sits now.',
      body: 'Not "in progress." A specific state: quote sent, awaiting reply, booking confirmed, callback overdue, ready for review handoff.',
    },
    {
      tag: '03',
      icon: ArrowRight,
      label: 'Next step',
      headline: 'What happens and when.',
      body: 'Not "follow up sometime." A defined action with a date and an owner — so it shows up before it slips.',
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The operating rule</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            If nobody owns the next step,{' '}
            <span className="text-[#4C5E6F]">the enquiry is not handled.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Every active enquiry carries three things. Without all three, it is not being handled — it is being hoped for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7">
          {parts.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.tag}
                className="rounded-[20px] bg-gradient-to-br from-[#F0F8F4] to-white border border-[#BCE0CD]/60 p-7 lg:p-9 relative overflow-hidden"
                style={{ boxShadow: '0 16px 40px rgba(33,185,133,0.10)' }}
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full pointer-events-none" style={{ background: 'rgba(33,185,133,0.08)', filter: 'blur(36px)' }} />
                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-white border border-[#BCE0CD] text-[#0F7A57] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <span className="text-[#0F7A57] tabular-nums" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em' }}>{p.tag}</span>
                  </div>
                  <div className="text-[#0F7A57] uppercase tracking-[0.18em] mb-2" style={{ fontSize: '10.5px', fontWeight: 700 }}>{p.label}</div>
                  <div className="text-[#08111F]" style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.018em', lineHeight: 1.2 }}>{p.headline}</div>
                  <p className="mt-4 text-[#4C5E6F]" style={{ fontSize: '14px', lineHeight: 1.65 }}>{p.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-9 pt-7 border-t border-[#EEF3F6] grid grid-cols-12 gap-5 items-start">
          <div className="col-span-12 md:col-span-8">
            <p className="text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
              <span className="font-semibold">Three small things. One quiet operating rule.</span>{' '}
              <span className="text-[#4C5E6F]">Every active enquiry passes through them — or it goes quiet.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 md:text-right">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#E5F4EC] border border-[#BCE0CD]">
              <ListChecks size={12} className="text-[#0F7A57]" />
              <span className="text-[#0F7A57]" style={{ fontSize: '11.5px', fontWeight: 600 }}>Owner · status · next step</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04 FOLLOW-UP PATHS
function FUPaths() {
  const featuredFlow = [
    { label: 'Quote sent', sub: 'Owner attached, sent date logged.' },
    { label: 'Follow-up due', sub: 'Defined window, scheduled to surface.' },
    { label: 'Owner assigned', sub: 'A named person — not the shared inbox.' },
    { label: 'Next check-in visible', sub: 'Shows up on the right day, with context.' },
  ];

  const supporting = [
    {
      icon: CalendarDays,
      accent: '#0F7A57',
      soft: '#E5F4EC',
      border: '#BCE0CD',
      tag: 'PATH 02',
      name: 'Booking or appointment confirmation',
      whatHappened: 'A visit or appointment has been booked.',
      whatsNext: 'A confirmation goes out. A reminder is scheduled.',
      who: 'Office team owns it · returns the day before the visit.',
    },
    {
      icon: MessageSquare,
      accent: '#0E7D8C',
      soft: '#EEF7F8',
      border: '#C6E8EF',
      tag: 'PATH 03',
      name: 'Consultation reminder',
      whatHappened: 'A consultation request has been confirmed.',
      whatsNext: 'Pre-visit context is attached. Practitioner is briefed.',
      who: 'Practice manager owns it · returns on the day.',
    },
    {
      icon: Clock,
      accent: '#9A6F12',
      soft: '#FCF5E2',
      border: '#F0DDA0',
      tag: 'PATH 04',
      name: 'Long-cycle "not yet" enquiry',
      whatHappened: 'A real enquiry — but timing is later in the year.',
      whatsNext: 'A scheduled return on the right day, with the original context.',
      who: 'Original owner · returns when "next month" arrives.',
    },
    {
      icon: Star,
      accent: '#7C4DCF',
      soft: '#F0EBFB',
      border: '#D3C5F0',
      tag: 'PATH 05',
      name: 'Completed-work review handoff',
      whatHappened: 'The job is done, the appointment kept, the project handed over.',
      whatsNext: 'A clean handoff to Reputation & Review at the right moment.',
      who: 'Reputation & Review picks up · with completion context.',
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Follow-up paths</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Follow-up is not one reminder.{' '}
            <span className="text-[#4C5E6F]">Different enquiries need different paths.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Five paths — each one with its own trigger, its own next step, and someone whose name is on it. Plain language, not feature buckets.
          </p>
        </div>

        {/* FEATURED PATH — Quote / proposal follow-up */}
        <div className="rounded-[24px] bg-white p-7 lg:p-10 relative overflow-hidden mb-7" style={{ border: '1px solid #C8DAEC', boxShadow: '0 24px 64px rgba(4,104,168,0.10)' }}>
          <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background: '#0468A8' }} />
          <div className="absolute -top-24 -right-24 w-[280px] h-[280px] rounded-full pointer-events-none" style={{ background: 'rgba(4,104,168,0.06)', filter: 'blur(40px)' }} />

          <div className="relative grid grid-cols-12 gap-7 lg:gap-10 items-start">
            {/* Left: heading + story */}
            <div className="col-span-12 lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EEF4FA] border border-[#C8DAEC] mb-5">
                <span className="w-1 h-1 rounded-full bg-[#0468A8]" />
                <span className="text-[#0468A8] uppercase tracking-[0.18em]" style={{ fontSize: '10px', fontWeight: 700 }}>Featured · PATH 01</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-[#EEF4FA] border border-[#C8DAEC] text-[#0468A8] flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <div className="text-[#08111F]" style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Quote or proposal follow-up
                </div>
              </div>
              <p className="text-[#4C5E6F] mb-5" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
                The most common place follow-up slips. A quote leaves the team, lands on a clean schedule, and the next move shows up before memory has to do the work.
              </p>
              <div className="rounded-lg bg-[#F9FCFD] border border-[#E6EEF3] px-4 py-3">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#0468A8] shrink-0" />
                  <p className="text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>
                    <span className="font-semibold">What happened:</span>{' '}
                    <span className="text-[#4C5E6F]">A quote or proposal has been sent. The customer is reading it on their own time.</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Right: visual flow */}
            <div className="col-span-12 lg:col-span-7">
              <div className="text-[#9CA3B0] uppercase tracking-[0.16em] mb-4" style={{ fontSize: '10px', fontWeight: 700 }}>What the system holds — in order</div>
              <div className="relative">
                <div className="hidden md:block absolute left-[18px] top-3 bottom-3 w-px bg-gradient-to-b from-[#0468A8]/40 via-[#0468A8]/15 to-transparent" />
                <ol className="space-y-3">
                  {featuredFlow.map((f, i) => (
                    <li key={f.label} className="flex items-start gap-4 px-4 py-3.5 rounded-lg border border-[#E6EEF3] bg-[#F9FCFD] relative">
                      <span className="relative z-10 w-9 h-9 rounded-full bg-white border border-[#C8DAEC] text-[#0468A8] flex items-center justify-center shrink-0" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.05em' }}>{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex-1">
                        <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>{f.label}</div>
                        <div className="text-[#6F8190] mt-0.5" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{f.sub}</div>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="mt-5 pt-4 border-t border-[#EEF3F6] text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>
                <span className="text-[#0468A8] uppercase tracking-[0.16em] mr-2" style={{ fontSize: '10px', fontWeight: 700 }}>Owner view</span>
                A follow-up due date, the previous touch, the right person to chase — already in place.
              </div>
            </div>
          </div>
        </div>

        {/* SUPPORTING PATHS — 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {supporting.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.tag}
                className="rounded-2xl bg-white p-6 lg:p-7 relative overflow-hidden"
                style={{ border: `1px solid ${p.border}`, boxShadow: `0 10px 28px ${p.accent}10` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: p.accent }} />
                <div className="flex items-start gap-3 mb-4 pt-1">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: p.soft, border: `1px solid ${p.border}`, color: p.accent }}>
                    <Icon size={16} />
                  </div>
                  <div className="flex-1">
                    <div className="tabular-nums" style={{ color: p.accent, fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em' }}>{p.tag}</div>
                    <div className="text-[#08111F] mt-0.5" style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.2 }}>{p.name}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#9CA3B0] shrink-0" />
                    <p className="text-[#08111F]" style={{ fontSize: '13px', lineHeight: 1.55 }}>
                      <span className="text-[#9CA3B0] uppercase tracking-[0.14em] mr-1.5" style={{ fontSize: '9.5px', fontWeight: 700 }}>Happened</span>
                      {p.whatHappened}
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0" style={{ background: p.accent }} />
                    <p className="text-[#08111F]" style={{ fontSize: '13px', lineHeight: 1.55 }}>
                      <span className="uppercase tracking-[0.14em] mr-1.5" style={{ color: p.accent, fontSize: '9.5px', fontWeight: 700 }}>Next</span>
                      {p.whatsNext}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EEF3F6] flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#9CA3B0] shrink-0" />
                    <p className="text-[#4C5E6F]" style={{ fontSize: '12px', lineHeight: 1.55 }}>
                      <span className="text-[#9CA3B0] uppercase tracking-[0.14em] mr-1.5" style={{ fontSize: '9.5px', fontWeight: 700 }}>Who · when</span>
                      {p.who}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 05 THE CRM IS NOT THE OFFER
function FUNotTheTool() {
  const rules = [
    { label: 'What stages exist', note: 'Quote sent, awaiting reply, confirmed, completed — named for the business, not the software.' },
    { label: 'Who owns each stage', note: 'A named person — not "shared inbox," not "whoever sees it first."' },
    { label: 'When follow-up happens', note: 'Defined windows for each path. Not "whenever someone remembers."' },
    { label: 'What stays manual', note: 'Pricing, judgement, sensitive replies — kept human on purpose.' },
    { label: 'What counts as done', note: 'A clear definition of complete, so nothing sits in "still going" forever.' },
    { label: 'When the next system takes over', note: 'When Reputation & Review picks up the completed-work handoff — and what context it gets.' },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Maturity</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            A CRM without rules{' '}
            <span className="text-[#4C5E6F]">becomes another place work disappears.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            The tool matters less than the operating rules. Software without these six answers is just a fancier place for the same enquiries to slip through.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — The tool (dark, restrained) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#061A1F] to-[#0A3A2A] p-8 lg:p-9 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="absolute -top-24 -right-24 w-[260px] h-[260px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(33,185,133,0.20) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985]" />
                  <span className="text-[#9FE3CD] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The tool</span>
                </div>
                <div className="text-white mb-5" style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.18 }}>
                  A CRM is just a database — until rules make it a system.
                </div>
                <p className="text-white/70 mb-6" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
                  Software can hold contacts, dates, notes, files. None of that decides who calls back, when, or what counts as finished. The rules do.
                </p>

                <div className="rounded-lg bg-white/[0.04] border border-white/10 p-5">
                  <div className="text-white/45 uppercase tracking-[0.14em] mb-3" style={{ fontSize: '10px', fontWeight: 700 }}>Without rules, a CRM is</div>
                  <ul className="space-y-2 text-white/65" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                    <li className="flex items-start gap-2"><span className="text-[#F4B740] mt-0.5">·</span> a tidier shared inbox</li>
                    <li className="flex items-start gap-2"><span className="text-[#F4B740] mt-0.5">·</span> a longer list of contacts</li>
                    <li className="flex items-start gap-2"><span className="text-[#F4B740] mt-0.5">·</span> a new place to lose the quote</li>
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-white/55" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>
                  Buy the tool last. Decide the rules first.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — The rules */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white border border-[#BCE0CD]/60 p-7 lg:p-9 relative overflow-hidden" style={{ boxShadow: '0 16px 44px rgba(33,185,133,0.08)' }}>
              <div className="flex items-center justify-between flex-wrap gap-3 mb-7 pb-5 border-b border-[#EEF3F6]">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F7A57] shadow-[0_0_6px_#21B985]" />
                  <span className="text-[#0F7A57] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The rules</span>
                </div>
                <span className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>Six things to agree before the software</span>
              </div>

              <ol className="space-y-3">
                {rules.map((r, i) => (
                  <li key={r.label} className="flex items-start gap-4 px-4 py-3.5 rounded-lg bg-[#F9FCFD] border border-[#E6EEF3]">
                    <span className="w-8 h-8 rounded-full bg-white border border-[#BCE0CD] text-[#0F7A57] flex items-center justify-center shrink-0 mt-0.5 tabular-nums" style={{ fontSize: '12px', fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1">
                      <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{r.label}</div>
                      <p className="text-[#4C5E6F] mt-0.5" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{r.note}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 pt-5 border-t border-[#EEF3F6] text-[#08111F]" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                <span className="font-semibold">Rules first. Software second.</span>{' '}
                <span className="text-[#4C5E6F]">Most CRMs fail at the rules step — not the install step.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06 WHAT THE OWNER CAN FINALLY SEE
function FUOwnerView() {
  const lanes = [
    { icon: FileText, label: 'Active enquiries', state: 'All have owners', tone: 'ok' },
    { icon: FileText, label: 'Quotes waiting', state: 'In follow-up window', tone: 'ok' },
    { icon: CalendarDays, label: 'Bookings pending', state: 'Confirmations sent', tone: 'ok' },
    { icon: MessageSquare, label: 'Consultation requests', state: 'Pre-visit context ready', tone: 'ok' },
    { icon: Bell, label: 'Overdue follow-ups', state: 'Needs attention today', tone: 'warn' },
    { icon: Star, label: 'Ready for review handoff', state: 'Ready to hand off', tone: 'good' },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The owner view</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            What the owner can{' '}
            <span className="text-[#4C5E6F]">finally see.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Not dashboards, not pipeline value, not totals — just clarity. What is active, what is waiting, what needs a hand today.
          </p>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#061A1F] to-[#0A3A2A] p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(33,185,133,0.18) 0%, transparent 70%)' }} />

          <div className="relative">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_8px_#21B985]" />
                <span className="text-white" style={{ fontSize: '14px', fontWeight: 600 }}>This morning&rsquo;s view</span>
              </div>
              <span className="text-white/45" style={{ fontSize: '11.5px' }}>Owner · practice manager · service team</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {lanes.map((l) => {
                const Icon = l.icon;
                const toneColor = l.tone === 'warn' ? '#F4B740' : l.tone === 'good' ? '#9B7DE0' : '#21B985';
                const toneText = l.tone === 'warn' ? '#FCD98A' : l.tone === 'good' ? '#C8B5F0' : '#9FE3CD';
                return (
                  <div key={l.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-11 h-11 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center" style={{ color: toneText }}>
                        <Icon size={16} />
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: `${toneColor}15`, border: `1px solid ${toneColor}40` }}>
                        <span className="w-1 h-1 rounded-full" style={{ background: toneColor, boxShadow: `0 0 5px ${toneColor}` }} />
                        <span className="uppercase tracking-[0.12em]" style={{ color: toneText, fontSize: '10px', fontWeight: 600 }}>{l.state}</span>
                      </span>
                    </div>
                    <div className="text-white" style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.25 }}>{l.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-12 gap-5 items-start">
              <div className="col-span-12 md:col-span-8">
                <p className="text-white" style={{ fontSize: '14.5px', lineHeight: 1.6 }}>
                  <span className="font-semibold">No revenue totals. No pipeline value. No vanity dashboard.</span>{' '}
                  <span className="text-white/55">Just what is active — and what needs a hand today.</span>
                </p>
              </div>
              <div className="col-span-12 md:col-span-4 md:text-right">
                <span className="inline-flex items-center gap-2 text-white/55" style={{ fontSize: '11.5px' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#21B985]" />
                  Clarity, not analytics
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 07 WHAT WE BUILD AND CONNECT
function FUScope() {
  const buckets = [
    {
      n: '01',
      icon: User,
      accent: '#0F7A57',
      soft: '#E5F4EC',
      border: '#BCE0CD',
      heading: 'Enquiry ownership',
      summary: 'Every active enquiry has a record, a person, and a current state.',
      items: [
        'Active enquiry record',
        'Source and context',
        'A named owner',
        'A current status',
        'The next task with a due time',
      ],
    },
    {
      n: '02',
      icon: Repeat,
      accent: '#0468A8',
      soft: '#EEF4FA',
      border: '#C8DAEC',
      heading: 'Follow-up paths',
      summary: 'Each enquiry type has its own path — chosen for the moment, not copy-pasted.',
      items: [
        'Quotes and proposals',
        'Bookings and appointments',
        'Consultations',
        'Callbacks promised in conversation',
        'Long-cycle "not yet" enquiries',
      ],
    },
    {
      n: '03',
      icon: Globe,
      accent: '#7C4DCF',
      soft: '#F0EBFB',
      border: '#D3C5F0',
      heading: 'Handoffs & visibility',
      summary: 'The system passes work cleanly — and the owner can see across all of it.',
      items: [
        'Lead Response handoff (in)',
        'Review request handoff (out)',
        'Owner / practice-manager view',
        'A simple daily and weekly view',
      ],
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What we build and connect</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The scope of Follow-Up &amp; CRM Systems.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            Three plain-language buckets — who owns what, how follow-up runs, and how this layer connects to the team and the next system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {buckets.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.n}
                className="h-full rounded-[20px] bg-white p-7 lg:p-8 relative overflow-hidden"
                style={{ border: `1px solid ${b.border}`, boxShadow: `0 16px 40px ${b.accent}12` }}
              >
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: b.accent }} />
                <div className="flex items-start gap-4 mb-5 pt-1">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: b.soft, border: `1px solid ${b.border}`, color: b.accent }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="tabular-nums" style={{ color: b.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.2em' }}>BUCKET {b.n}</div>
                    <div className="text-[#08111F] mt-1" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{b.heading}</div>
                  </div>
                </div>
                <p className="text-[#4C5E6F] mb-5" style={{ fontSize: '13px', lineHeight: 1.6, fontStyle: 'italic' }}>{b.summary}</p>
                <ul className="space-y-2.5">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.5, fontWeight: 500 }}>
                      <span className="w-1.5 h-1.5 mt-2 rounded-full shrink-0" style={{ background: b.accent }} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 08 WHERE THIS CONNECTS
function FUConnects() {
  const supportingSteps = [
    {
      icon: Globe,
      stepNumber: '01',
      name: 'Smart Website Systems',
      role: 'Captures the enquiry with context.',
      accent: '#35C7D8',
      soft: '#E4F6F9',
      border: '#C6E8EF',
    },
    {
      icon: MessageSquare,
      stepNumber: '02',
      name: 'Lead Response & Handling',
      role: 'Handles the first reply.',
      accent: '#F4B740',
      soft: '#FCF5E2',
      border: '#F0DDA0',
    },
    {
      icon: Star,
      stepNumber: '04',
      name: 'Reputation & Review',
      role: 'Turns completed work into proof.',
      accent: '#7C4DCF',
      soft: '#F0EBFB',
      border: '#D3C5F0',
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where this connects</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '48px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            One step in a connected path.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            Smart Website captures context. Lead Response handles the first reply. Follow-Up &amp; CRM owns the next step. Reputation &amp; Review turns completed work into proof.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
          {/* LEFT — CURRENT PAGE (dominant, dark) */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="h-full rounded-[20px] p-7 lg:p-9 relative overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, #0A3A2A 0%, #061A1F 100%)',
                border: '1.5px solid #21B985',
                boxShadow: '0 28px 64px rgba(33,185,133,0.35)',
              }}
            >
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
              <div className="absolute -top-16 -right-16 w-[240px] h-[240px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(33,185,133,0.35) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: 'rgba(33,185,133,0.18)', border: '1px solid rgba(33,185,133,0.5)', color: '#21B985' }}>
                    <User size={20} />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: 'rgba(33,185,133,0.18)', border: '1px solid rgba(33,185,133,0.55)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#21B985] shadow-[0_0_5px_#21B985]" />
                    <span className="text-[#21B985] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>This page</span>
                  </span>
                </div>
                <div className="text-[#21B985] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em' }}>STEP 03</div>
                <div className="text-white mt-2 mb-3" style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Follow-Up &amp; CRM Systems
                </div>
                <p className="text-white/70 mb-5" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
                  Owns the next step after the first response. Every active enquiry gets an owner, a status, and a defined next move — so the work stops depending on memory.
                </p>
                <div className="rounded-lg bg-white/[0.05] border border-white/10 px-4 py-3 text-white/65" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
                  Picks up from Lead Response · hands off to Reputation &amp; Review.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — three supporting steps stacked */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full flex flex-col gap-4">
              {supportingSteps.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.name}
                    className="rounded-2xl bg-white p-5 lg:p-6 flex items-start gap-5"
                    style={{ border: '1px solid #E6EEF3', boxShadow: '0 8px 20px rgba(8,17,31,0.04)' }}
                  >
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: s.soft, border: `1px solid ${s.border}`, color: s.accent }}>
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="tabular-nums" style={{ color: s.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.18em' }}>STEP {s.stepNumber}</div>
                      <div className="text-[#08111F] mt-0.5" style={{ fontSize: '17px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.2 }}>{s.name}</div>
                      <p className="text-[#4C5E6F] mt-1.5" style={{ fontSize: '13px', lineHeight: 1.55 }}>{s.role}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 text-[#4C5E6F] max-w-[840px]" style={{ fontSize: '13.5px', lineHeight: 1.65 }}>
          Local SEO Authority Systems sit alongside — keeping the listing, the page, and the reviews in agreement so the enquiry arrives in the first place.
        </div>
      </div>
    </section>
  );
}

// 09 FIT / NOT FIT + FAQ
function FUFitFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const fit = [
    "Enquiries already come in — calls, forms, messages, quotes, consultations",
    "Quotes, bookings, and consultations need follow-up",
    "Several people touch the same enquiries",
    "Owner or practice manager lacks visibility today",
    "The team relies on inbox, spreadsheets, or memory",
    "Follow-up matters commercially — and is slipping",
    "Completed work should trigger review requests",
  ];
  const notFit = [
    "Want CRM software only — without operating rules",
    "Want automation built before the process is clear",
    "Very low enquiry volume",
    "No clear enquiry stages yet",
    "Team will not use any structure",
    "Want aggressive sales sequences or nurture blasts",
    "Expect automation to fix unclear operations",
  ];
  const faqs = [
    { q: "Is this just CRM setup?", a: "No. The CRM is the easy half. The work is the operating rules — what stages exist, who owns each, when follow-up happens, what stays manual. Without those, the software is just another place enquiries disappear." },
    { q: "Does this replace the team?", a: "No. The team still owns the conversations, the quotes, and the relationship. The system gives the team a clearer view of who is doing what, and surfaces the things that would otherwise slip." },
    { q: "Do you use a specific CRM?", a: "We build inside the CRM and communication setup used for the project. The important part is the structure: owner, status, next step, reminders, and handoffs." },
    { q: "Can it handle quote follow-up?", a: "Yes. Sent date, follow-up window, owner, and previous touches all live on the record — and the right reminder reaches the owner in time to do something about it." },
    { q: "Can it handle appointment reminders?", a: "Yes. Bookings, consultations, and appointment-style visits each get their own confirmation and reminder pattern — built around the practice's actual day, not a generic template." },
    { q: "How does it connect to Lead Response?", a: "Lead Response & Handling Systems take care of the first reply and the handoff. This system takes the enquiry from there — opening the record, attaching the owner, and scheduling the next step." },
    { q: "How does it connect to Reviews?", a: "When completed work is marked done, the system hands the enquiry over to Reputation & Review Systems — so the right review ask is sent at the right moment, with the right context." },
    { q: "What happens first?", a: "A follow-up review — where active enquiries live today, where ownership is unclear, where quotes go cold, where reminders miss. Then we agree the first paths to set up, in order of return." },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        {/* FIT / NOT FIT */}
        <div className="max-w-[820px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Is this right for your business?
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            Follow-Up &amp; CRM Systems work best where real enquiries already arrive, and several people touch them — and where the owner wants follow-up to stop depending on memory.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5 mb-20">
          <div className="col-span-12 lg:col-span-7 rounded-[20px] bg-gradient-to-br from-[#E5F4EC] to-white border border-[#BCE0CD]/60 p-9">
            <span className="text-[#0F7A57] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {fit.map((s) => (
                <div key={s} className="flex items-start gap-3 px-4 py-3.5 rounded-lg bg-white border border-[#BCE0CD]/60">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#21B985] shrink-0" />
                  <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.45 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 rounded-[20px] bg-[#F6FAFC] border border-[#E6EEF3] p-9">
            <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not the right fit</span>
            <ul className="mt-6 space-y-2.5">
              {notFit.map((s) => (
                <li key={s} className="flex items-start gap-2.5 px-4 py-3 rounded-lg bg-white border border-[#E6EEF3] text-[#4C5E6F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                  <span className="w-1 h-1 mt-2 rounded-full bg-[#6F8190] shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1.08, letterSpacing: '-0.025em' }}>
              What business owners ask about follow-up
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-[#F6FAFC] border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-7 py-6 hover:bg-white transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600 }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-[#E5F4EC] text-[#0F7A57] flex items-center justify-center shrink-0">{open === i ? <Minus size={14} /> : <Plus size={14} />}</span>
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

// 10 CTA
function FUCta() {
  return (
    <section id="cta" className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061A1F] to-[#0A3A2A] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #21B985 0%, transparent 45%), radial-gradient(circle at 90% 20%, #35C7D8 0%, transparent 45%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '54px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
                Find where follow-up{' '}
                <span className="text-white/55">is slipping.</span>
              </h2>
              <p className="mt-6 text-white/65 max-w-[560px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                We review active enquiries, quotes, bookings, reminders, ownership, and handoffs — and find the first places work is disappearing. Calm, diagnostic, no automation hype.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061A1F] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Review my follow-up path <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-7">
                <div className="text-white/45 uppercase tracking-[0.14em] mb-5" style={{ fontSize: '10.5px', fontWeight: 700 }}>What we look at</div>
                <div className="space-y-3.5">
                  {[
                    "Active enquiries and who owns them",
                    "Quotes, bookings, and consultation paths",
                    "Reminders, follow-up windows, and long-cycle returns",
                    "Handoffs into and out of the team",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#21B985] shrink-0 shadow-[0_0_6px_#21B985]" />
                      <span className="text-white/85" style={{ fontSize: '13.5px', lineHeight: 1.45 }}>{t}</span>
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

export function FollowUpCRM() {
  return (
    <main>
      <FUHero />
      <FUWhereBreaks />
      <FURule />
      <FUPaths />
      <FUNotTheTool />
      <FUOwnerView />
      <FUScope />
      <FUConnects />
      <FUFitFaq />
      <FUCta />
    </main>
  );
}
