import { useState } from "react";
import { ArrowRight, AlertTriangle, Plus, Minus, Phone, MessageSquare, FileText, Calendar, Clock, CheckCircle2, User, Users, Globe, Star } from "lucide-react";

// 01 HERO
function LRHHero() {
  const arrivals = [
    { icon: Phone, tone: "#E76F6F", state: "MISSED CALL", label: "Roofing quote request", when: "Morning · while team is on site" },
    { icon: FileText, tone: "#F4B740", state: "NEW ENQUIRY", label: "Kitchen fit enquiry", when: "Morning · needs first reply" },
    { icon: AlertTriangle, tone: "#E76F6F", state: "TIME-SENSITIVE", label: "Heating issue", when: "Morning · surfaced earlier" },
    { icon: Calendar, tone: "#21B985", state: "READY FOR TEAM", label: "Consultation request", when: "During clinic hours · practice team" },
    { icon: MessageSquare, tone: "#9CA3B0", state: "AFTER-HOURS", label: "Weekend message", when: "After-hours · kept warm" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#0F1E3C] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.16]" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 10%, #F4B740 0%, transparent 45%), radial-gradient(ellipse at 90% 90%, #35C7D8 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-32 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F4B740]/30 bg-[#F4B740]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_8px_#F4B740]" />
            <span className="text-[#F4B740] uppercase tracking-[0.2em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Lead Response &amp; Handling Systems</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
            The Enquiry Arrived.<br /><span className="text-white/45">Nobody Was There<br />To Answer It.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-[560px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            Calls go to voicemail while the team is on a job. Forms sit after closing. Messages wait until morning. Quote and consultation requests lose momentum — while the customer keeps comparing.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Review my response path <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "Missed calls", c: "#E76F6F" }, { l: "After-hours enquiries", c: "#F4B740" }, { l: "Unanswered forms", c: "#9CA3B0" }].map((x) => (
              <span key={x.l} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }} />
                <span className="text-white/80" style={{ fontSize: '12.5px', fontWeight: 500 }}>{x.l}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right — Enquiry arrivals surface */}
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
              <div>
                <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Enquiry arrivals</div>
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>Typical enquiry moments</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#F4B740]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_6px_#F4B740]" /> Five paths
              </span>
            </div>
            <div className="space-y-2">
              {arrivals.map((e, i) => {
                const Icon = e.icon;
                return (
                  <div key={i} className="flex items-center gap-3 px-4 py-3.5 rounded-lg border border-white/8 bg-white/[0.02]">
                    <span className="w-1 h-9 rounded-full" style={{ background: e.tone, boxShadow: `0 0 10px ${e.tone}55` }} />
                    <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0" style={{ color: e.tone }}>
                      <Icon size={14} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="uppercase tracking-[0.14em] shrink-0" style={{ color: e.tone, fontSize: '9.5px', fontWeight: 700 }}>{e.state}</span>
                      </div>
                      <div className="text-white truncate" style={{ fontSize: '13px', fontWeight: 600 }}>{e.label}</div>
                      <div className="text-white/55 truncate" style={{ fontSize: '11px' }}>{e.when}</div>
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

// 02 WHERE ENQUIRIES GO COLD
function LRHWhereCold() {
  const moments = [
    {
      icon: FileText,
      tone: "#F4B740",
      when: "Friday, after closing",
      title: "Form sent after hours",
      note: "First reply on Monday morning.",
    },
    {
      icon: MessageSquare,
      tone: "#9D7CF8",
      when: "Tuesday lunchtime",
      title: "Message asking about availability",
      note: "Sat in a shared inbox until the afternoon.",
    },
    {
      icon: FileText,
      tone: "#0468A8",
      when: "Wednesday",
      title: "Quote request without enough detail",
      note: "Sent twice from two numbers — nobody picked up either.",
    },
    {
      icon: Calendar,
      tone: "#0F7A57",
      when: "Thursday",
      title: "Consultation request — wrong person",
      note: "Forwarded around the team. Nobody owned the reply.",
    },
    {
      icon: Clock,
      tone: "#6F8190",
      when: "Weekend",
      title: "Saturday form, no clear owner",
      note: "Picked up Monday. The customer had already booked elsewhere.",
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where enquiries go cold</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Real enquiries go cold{' '}
            <span className="text-[#4C5E6F]">in ordinary moments.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Most missed work is not lost to a better offer. It is lost in the gap between the enquiry arriving and someone replying.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — anchor card: missed call */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#061323] to-[#0E2740] p-8 lg:p-9 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(231,111,111,0.18) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_8px_#E76F6F]" />
                  <span className="text-[#E76F6F] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The call that rolled to voicemail</span>
                </div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#E76F6F]/15 border border-[#E76F6F]/30 flex items-center justify-center text-[#E76F6F]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-white/55 uppercase tracking-[0.12em]" style={{ fontSize: '10px', fontWeight: 700 }}>Monday morning</div>
                    <div className="text-white" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.015em' }}>Voicemail caught it.</div>
                  </div>
                </div>
                <p className="text-white/70" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
                  A call rolled to voicemail while the team was out. No callback was set up.
                </p>
                <div className="mt-6 pt-5 border-t border-white/10">
                  <div className="text-white/45 uppercase tracking-[0.14em] mb-2" style={{ fontSize: '10px', fontWeight: 700 }}>By mid-morning</div>
                  <p className="text-white" style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.5 }}>
                    By the time someone called back, the enquiry had gone cold.
                  </p>
                </div>
                <div className="mt-7 pt-5 border-t border-white/10 text-white/55" style={{ fontSize: '12px', lineHeight: 1.55 }}>
                  The customer did not wait. They rarely do.
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — list of working-day moments */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-7 lg:p-8" style={{ boxShadow: '0 16px 48px rgba(8,17,31,0.06)' }}>
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#EEF3F6] flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740]" />
                  <span className="text-[#9A6F12] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Working-day enquiries that went cold</span>
                </div>
                <span className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>Same week · different moments</span>
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
                        <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{m.title}</div>
                        <div className="text-[#6F8190] mt-1" style={{ fontSize: '12.5px', lineHeight: 1.5 }}>
                          <span style={{ color: m.tone, fontWeight: 600 }}>{m.when}</span>
                          <span className="text-[#D8E0E6] mx-1.5">·</span>
                          {m.note}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03 THE FIRST RESPONSE HAS ONE JOB
function LRHFirstResponse() {
  const stations = [
    {
      n: '01',
      icon: CheckCircle2,
      accent: '#0E7D8C',
      soft: '#EEF7F8',
      border: '#C6E8EF',
      label: 'Acknowledge',
      note: 'Someone has seen the enquiry — said so while it is still fresh.',
    },
    {
      n: '02',
      icon: MessageSquare,
      accent: '#0468A8',
      soft: '#EEF4FA',
      border: '#C8DAEC',
      label: 'Ask one useful thing',
      note: 'Enough to know what they actually need. Not a form on top of a form.',
    },
    {
      n: '03',
      icon: AlertTriangle,
      accent: '#9A6F12',
      soft: '#FCF5E2',
      border: '#F0DDA0',
      label: 'Read urgency',
      note: 'An emergency reads differently to a Monday quote. The reply changes with it.',
    },
    {
      n: '04',
      icon: FileText,
      accent: '#0F7A57',
      soft: '#E8F4ED',
      border: '#BCE0CD',
      label: 'Carry context',
      note: 'Name, ask, the page they came from, any detail already gathered.',
    },
    {
      n: '05',
      icon: ArrowRight,
      accent: '#7C4DCF',
      soft: '#F0EBFB',
      border: '#D3C5F0',
      label: 'Hand off',
      note: 'To the right person, with everything they need — not into a shared inbox.',
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The first response has one job</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Keep the enquiry alive{' '}
            <span className="text-[#4C5E6F]">long enough to be handled well.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            It does not need to close the work, quote the price, or give a clinical answer. It needs to acknowledge, ask one useful thing, surface urgency, and hand off cleanly to the person who can.
          </p>
        </div>

        <div className="rounded-[24px] bg-gradient-to-br from-[#F9FCFD] via-white to-[#F4FBFC] border border-[#E6EEF3] p-7 lg:p-10 relative overflow-hidden" style={{ boxShadow: '0 20px 56px rgba(8,17,31,0.06)' }}>
          <div className="absolute inset-0 opacity-[0.5] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #D8E6EE 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-9 pb-6 border-b border-[#EEF3F6]">
              <div className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_6px_#F4B740]" />
                <span className="text-[#9A6F12] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The shape of a good first response</span>
              </div>
              <span className="text-[#9CA3B0]" style={{ fontSize: '11.5px' }}>Acknowledge → Ask → Urgency → Context → Hand off</span>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[50px] left-[10%] right-[10%] h-px bg-gradient-to-r from-[#F4B740]/10 via-[#F4B740]/25 to-[#F4B740]/10 pointer-events-none" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3.5 relative">
                {stations.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.n} className="rounded-xl bg-white border border-[#E6EEF3] p-5 hover:shadow-md transition-shadow relative">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center relative z-10" style={{ background: s.soft, border: `1px solid ${s.border}`, color: s.accent }}>
                          <Icon size={18} />
                        </div>
                        <span className="tabular-nums mt-1" style={{ color: s.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.18em' }}>{s.n}</span>
                      </div>
                      <div className="text-[#08111F] mb-2.5" style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.25 }}>
                        {s.label}
                      </div>
                      <p className="text-[#6F8190]" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>
                        {s.note}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-9 pt-7 border-t border-[#EEF3F6]">
              <p className="text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
                <span className="font-semibold">Speed matters — but not as a race.</span>{' '}
                <span className="text-[#4C5E6F]">It is a sign that someone is paying attention. The customer can hear the difference within two replies.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04 DIFFERENT ENQUIRIES NEED DIFFERENT HANDLING
function LRHPaths() {
  const paths = [
    {
      icon: Phone,
      accent: '#E76F6F',
      soft: '#FDECEC',
      border: '#F4C2C2',
      tag: 'PATH 01',
      name: 'Missed call',
      arrived: 'A call rolled to voicemail while the team was on a job.',
      move: 'A text back acknowledged quickly — acknowledging the call and asking what they needed.',
      goes: 'Back to the team with context — not a missed-number row to chase later.',
    },
    {
      icon: AlertTriangle,
      accent: '#9A6F12',
      soft: '#FCF5E2',
      border: '#F0DDA0',
      tag: 'PATH 02',
      name: 'Time-sensitive request',
      arrived: 'A time-sensitive enquiry — gas, water, electrical, urgent practice enquiry, no-heat in winter.',
      move: 'Identify how urgent it is. Tell the customer someone is moving — they are not guessing.',
      goes: 'Flagged to whoever covers on-call, with what is safe to advise already collected.',
    },
    {
      icon: FileText,
      accent: '#0468A8',
      soft: '#EEF4FA',
      border: '#C8DAEC',
      tag: 'PATH 03',
      name: 'Quote request',
      arrived: 'A request for pricing — kitchen fit, roof job, refit, treatment estimate.',
      move: 'Collect the detail they forgot — scope, area, timing — before the quoter sees it.',
      goes: 'To the person who quotes, with the missing detail already in hand.',
    },
    {
      icon: Calendar,
      accent: '#0F7A57',
      soft: '#E8F4ED',
      border: '#BCE0CD',
      tag: 'PATH 04',
      name: 'Consultation or booking',
      arrived: 'An appointment, consultation, or visit request.',
      move: 'Confirm what they want to book, gather pre-visit context, offer the right times.',
      goes: 'To the right diary owner — with what the practitioner or team needs.',
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Different enquiries · different handling</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Not every enquiry needs{' '}
            <span className="text-[#4C5E6F]">the same first move.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            A missed call from an emergency is not the same as a Monday-morning quote request. The first reply, the first question, and the handoff change with the path.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">
          {paths.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.tag}
                className="rounded-2xl bg-white p-8 lg:p-9 relative overflow-hidden"
                style={{
                  border: `1px solid ${p.border}`,
                  boxShadow: `0 16px 40px ${p.accent}10`,
                }}
              >
                {/* Top stripe */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: p.accent }} />

                <div className="flex items-start justify-between mb-6 pt-1">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0" style={{ background: p.soft, border: `1px solid ${p.border}`, color: p.accent }}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="tabular-nums" style={{ color: p.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.2em' }}>{p.tag}</div>
                      <div className="text-[#08111F] mt-1" style={{ fontSize: '24px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>{p.name}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-md bg-[#F6FAFC] border border-[#E6EEF3] text-[#6F8190] flex items-center justify-center shrink-0 mt-0.5" style={{ fontSize: '11px', fontWeight: 700 }}>1</div>
                    <div className="flex-1">
                      <div className="text-[#9CA3B0] uppercase tracking-[0.16em] mb-1" style={{ fontSize: '10px', fontWeight: 700 }}>What arrived</div>
                      <p className="text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{p.arrived}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 mt-0.5" style={{ background: p.soft, border: `1px solid ${p.border}`, color: p.accent, fontSize: '11px', fontWeight: 700 }}>2</div>
                    <div className="flex-1">
                      <div className="uppercase tracking-[0.16em] mb-1" style={{ color: p.accent, fontSize: '10px', fontWeight: 700 }}>First move</div>
                      <p className="text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{p.move}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-7 h-7 rounded-md bg-[#F6FAFC] border border-[#E6EEF3] text-[#6F8190] flex items-center justify-center shrink-0 mt-0.5" style={{ fontSize: '11px', fontWeight: 700 }}>3</div>
                    <div className="flex-1">
                      <div className="text-[#9CA3B0] uppercase tracking-[0.16em] mb-1" style={{ fontSize: '10px', fontWeight: 700 }}>Where it goes</div>
                      <p className="text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.6 }}>{p.goes}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note: existing customers / follow-up */}
        <div className="mt-7 lg:mt-9 rounded-2xl bg-white border border-[#E6EEF3] px-7 py-5 flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-[#F0EBFB] border border-[#D3C5F0] text-[#7C4DCF] flex items-center justify-center shrink-0">
            <User size={15} />
          </div>
          <div className="flex-1">
            <div className="text-[#7C4DCF] uppercase tracking-[0.16em] mb-1" style={{ fontSize: '10px', fontWeight: 700 }}>And one more</div>
            <p className="text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.55 }}>
              <span className="font-semibold">Existing customers and follow-up questions</span>{' '}
              <span className="text-[#4C5E6F]">get routed back to whoever already owns the relationship — never into a generic inbox.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05 HOW THE FIRST CONVERSATION IS HANDLED
function LRHConversation() {
  type Turn = { from: 'customer' | 'reply'; text: string; meta?: string; annotation?: string };
  const turns: Turn[] = [
    {
      from: 'customer',
      text: 'Hi — saw the missed call. Still need someone to come out today if possible?',
      meta: 'From a missed-call text-back path',
    },
    {
      from: 'reply',
      text: 'Got your message — someone on the team has been notified. Quick check: is this an urgent issue or can it wait until later today?',
      annotation: 'Acknowledge · one useful question',
    },
    {
      from: 'customer',
      text: 'Pretty urgent — water leak.',
    },
    {
      from: 'reply',
      text: "Thanks for confirming. I've passed this through with the details you've shared. The right person on the team will follow up shortly.",
      annotation: 'Context to the team · warm handoff',
    },
  ];

  const summary = [
    { label: 'Issue', value: 'Captured from the customer\'s own words' },
    { label: 'Urgency', value: 'Surfaced before the handoff' },
    { label: 'Owner', value: 'Attached — a named person on the team' },
    { label: 'Context carried', value: 'Source page, area, and earlier replies' },
    { label: 'First reply', value: 'Acknowledged while the enquiry is still fresh' },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>How the first conversation is handled</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            A first reply that reads{' '}
            <span className="text-[#4C5E6F]">like the business — not a bot.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Short. Calm. Useful. The reply is written for the business — asks one thing that helps the team, surfaces urgency, and hands the enquiry over warm.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — illustrative first-reply pattern (not a fake transcript) */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[20px] bg-[#F9FCFD] border border-[#E6EEF3] p-7 lg:p-8" style={{ boxShadow: '0 16px 48px rgba(8,17,31,0.06)' }}>
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#EEF3F6]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F4B740]/15 border border-[#F4B740]/30 flex items-center justify-center text-[#9A6F12]">
                    <MessageSquare size={13} />
                  </div>
                  <div>
                    <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700 }}>Service team</div>
                    <div className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>Example first-reply pattern · SMS path</div>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#F4B740]/10 border border-[#F4B740]/30" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.14em' }}>
                  <span className="w-1 h-1 rounded-full bg-[#F4B740]" />
                  <span className="text-[#9A6F12] uppercase">Illustrative</span>
                </span>
              </div>

              <div className="space-y-4">
                {turns.map((t, i) => (
                  <div key={i} className={`flex ${t.from === 'reply' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[78%] ${t.from === 'reply' ? 'order-2' : ''}`}>
                      {t.meta && (
                        <div className="text-[#9CA3B0] mb-1.5" style={{ fontSize: '10.5px', fontWeight: 600 }}>{t.meta}</div>
                      )}
                      <div
                        className="px-4 py-3 rounded-2xl relative"
                        style={
                          t.from === 'reply'
                            ? { background: 'linear-gradient(180deg, #FFF8E2 0%, #FEF6E2 100%)', border: '1px solid #F0DDA0', color: '#08111F' }
                            : { background: '#FFFFFF', border: '1px solid #E6EEF3', color: '#08111F' }
                        }
                      >
                        <p style={{ fontSize: '13.5px', lineHeight: 1.55 }}>{t.text}</p>
                      </div>
                      <div className={`mt-1.5 ${t.from === 'reply' ? 'text-right' : 'text-left'}`}>
                        <span className="text-[#9CA3B0] uppercase tracking-[0.14em]" style={{ fontSize: '9.5px', fontWeight: 700 }}>
                          {t.from === 'reply' ? 'First reply' : 'Customer'}
                        </span>
                      </div>
                      {t.annotation && (
                        <div className={`mt-2 ${t.from === 'reply' ? 'text-right' : 'text-left'}`}>
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                            style={{
                              background: '#FFFFFF',
                              border: '1px dashed #F0DDA0',
                              color: '#9A6F12',
                              fontSize: '10px',
                              fontWeight: 700,
                              letterSpacing: '0.12em',
                            }}
                          >
                            <span className="w-1 h-1 rounded-full bg-[#F4B740]" />
                            <span className="uppercase">{t.annotation}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-[#EEF3F6] text-[#6F8190]" style={{ fontSize: '12px', lineHeight: 1.6 }}>
                Pattern, not transcript. The wording is shaped to the business and the path the enquiry came through — never a generic template, never an exact-time promise.
              </div>
            </div>
          </div>

          {/* RIGHT — handoff summary (the team picks up) */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#061323] to-[#0E2740] p-7 lg:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute -top-16 -right-16 w-[220px] h-[220px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(244,183,64,0.18) 0%, transparent 70%)' }} />

              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740] shadow-[0_0_8px_#F4B740]" />
                  <span className="text-[#F4B740] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>What the team picks up</span>
                </div>
                <div className="text-white mb-7" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.25 }}>
                  The enquiry — already warm.
                </div>

                <div className="space-y-2.5">
                  {summary.map((s) => (
                    <div key={s.label} className="px-4 py-3 rounded-lg border border-white/10 bg-white/[0.03]">
                      <div className="text-white/45 uppercase tracking-[0.14em] mb-1" style={{ fontSize: '10px', fontWeight: 700 }}>{s.label}</div>
                      <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 600, lineHeight: 1.4 }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/10 text-white/55" style={{ fontSize: '12px', lineHeight: 1.6 }}>
                  The right person on the team picks up a customer they already know something about — not a number on a missed-call list.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9">
          <p className="text-[#4C5E6F] max-w-[840px]" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
            The replies are not pretending to be the team. They are making sure the customer hears something while the enquiry is still alive — and that the team picks up the conversation already in motion.
          </p>
        </div>
      </div>
    </section>
  );
}

// 06 SUPPORT LAYER, NOT REPLACEMENT
function LRHSupport() {
  const system = [
    { icon: CheckCircle2, label: 'Acknowledges quickly', note: 'A short, human reply while the enquiry is still fresh.' },
    { icon: MessageSquare, label: 'Asks the right first question', note: 'Enough to know what the team needs to bring.' },
    { icon: AlertTriangle, label: 'Surfaces urgency', note: 'Emergencies are flagged. Quotes wait their turn.' },
    { icon: FileText, label: 'Collects useful context', note: 'Name, address, scope, timing, the detail they forgot.' },
    { icon: User, label: 'Notifies the right person', note: 'Not a shared inbox. Someone with the relationship.' },
  ];

  const team = [
    { label: 'Quoting, scope, and pricing', note: 'No system pretends to know what the job is worth.' },
    { label: 'Site visits and assessments', note: 'The eyes on the work stay human.' },
    { label: 'Treatment and clinical decisions', note: 'Practitioners make calls. Always.' },
    { label: 'Negotiation and relationship', note: 'The conversation that closes the work belongs to a person.' },
    { label: 'Final answers and judgement', note: 'When something is unclear, a person decides — not a script.' },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[840px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Support layer, not replacement</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The team still makes the call.{' '}
            <span className="text-[#4C5E6F]">They just start with better context.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Lead Response &amp; Handling Systems do not replace the people who quote, treat, or close. They handle the first reply, the useful question, and the handoff — so the team picks up an enquiry that is already warm.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — the system handles */}
          <div className="col-span-12 lg:col-span-6">
            <div className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-7 lg:p-8" style={{ boxShadow: '0 12px 32px rgba(8,17,31,0.05)' }}>
              <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-[#EEF3F6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740]" />
                <span className="text-[#9A6F12] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>What the system handles</span>
              </div>
              <div className="space-y-3.5">
                {system.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.label} className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-md bg-[#FCF5E2] border border-[#F0DDA0] text-[#9A6F12] flex items-center justify-center shrink-0">
                        <Icon size={15} />
                      </div>
                      <div>
                        <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>{s.label}</div>
                        <p className="text-[#4C5E6F] mt-0.5" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>{s.note}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT — what stays with the team */}
          <div className="col-span-12 lg:col-span-6">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#F4FBFC] to-white border border-[#C6E8EF] p-7 lg:p-8 relative overflow-hidden" style={{ boxShadow: '0 16px 44px rgba(53,199,216,0.10)' }}>
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none" style={{ background: 'rgba(53,199,216,0.10)', filter: 'blur(50px)' }} />
              <div className="relative">
                <div className="flex items-center gap-2.5 mb-6 pb-5 border-b border-[#C6E8EF]">
                  <Users size={13} className="text-[#0E7D8C]" />
                  <span className="text-[#0E7D8C] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>What stays with the team</span>
                </div>
                <ul className="space-y-3.5">
                  {team.map((t) => (
                    <li key={t.label} className="flex items-start gap-3">
                      <span className="w-2 h-2 mt-1.5 rounded-full bg-[#14B8A6] shrink-0 shadow-[0_0_6px_rgba(53,199,216,0.5)]" />
                      <div>
                        <div className="text-[#08111F]" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>{t.label}</div>
                        <p className="text-[#4C5E6F] mt-0.5" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>{t.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-[#08111F] max-w-[820px]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
            <span className="font-semibold">Nothing replaces the person who picks up the phone.</span>{' '}
            <span className="text-[#4C5E6F]">The system makes sure the enquiry on the other end is awake, named, and ready for them.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

// 07 WHERE THIS CONNECTS
function LRHConnects() {
  const steps = [
    {
      icon: Globe,
      name: 'Smart Website Systems',
      role: 'Captures the enquiry with context.',
      accent: '#35C7D8',
      soft: '#E4F6F9',
      border: '#C6E8EF',
    },
    {
      icon: MessageSquare,
      name: 'Lead Response & Handling',
      role: 'Owns the first reply and the handoff.',
      accent: '#F4B740',
      soft: '#FCF5E2',
      border: '#F0DDA0',
      current: true,
    },
    {
      icon: User,
      name: 'Follow-Up & CRM Systems',
      role: 'Owns what happens after pickup.',
      accent: '#21B985',
      soft: '#E5F4EC',
      border: '#BCE0CD',
    },
    {
      icon: Star,
      name: 'Reputation & Review Systems',
      role: 'Finished work returns as visible trust.',
      accent: '#7C4DCF',
      soft: '#F0EBFB',
      border: '#D3C5F0',
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where this connects</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            One step in a connected path.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            Lead Response &amp; Handling Systems own the first reply and the handoff. What happens before and after lives with the other MindWP systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 items-stretch">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isCurrent = !!s.current;
            return (
              <div key={s.name} className="relative">
                <div
                  className="h-full rounded-2xl p-6 lg:p-7 relative overflow-hidden"
                  style={
                    isCurrent
                      ? {
                          background: 'linear-gradient(160deg, #0E2740 0%, #061323 100%)',
                          border: `1.5px solid ${s.accent}`,
                          boxShadow: `0 22px 52px ${s.accent}40`,
                        }
                      : {
                          background: 'white',
                          border: '1px solid #E6EEF3',
                          boxShadow: '0 8px 20px rgba(8,17,31,0.04)',
                        }
                  }
                >
                  {isCurrent && (
                    <>
                      <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none" style={{ background: `radial-gradient(circle, ${s.accent}30 0%, transparent 70%)` }} />
                    </>
                  )}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center"
                        style={
                          isCurrent
                            ? { background: `${s.accent}15`, border: `1px solid ${s.accent}40`, color: s.accent }
                            : { background: s.soft, border: `1px solid ${s.border}`, color: s.accent }
                        }
                      >
                        <Icon size={17} />
                      </div>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: `${s.accent}15`, border: `1px solid ${s.accent}50` }}>
                          <span className="w-1 h-1 rounded-full shadow-[0_0_4px]" style={{ background: s.accent, boxShadow: `0 0 5px ${s.accent}` }} />
                          <span className="uppercase tracking-[0.14em]" style={{ color: s.accent, fontSize: '9px', fontWeight: 700 }}>This page</span>
                        </span>
                      )}
                    </div>
                    <div className="tabular-nums" style={{ color: s.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.16em' }}>STEP 0{i + 1}</div>
                    <div className="mt-1.5 mb-3" style={{ color: isCurrent ? '#FFFFFF' : '#08111F', fontSize: '16px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.25 }}>{s.name}</div>
                    <p style={{ color: isCurrent ? 'rgba(255,255,255,0.65)' : '#4C5E6F', fontSize: '12.5px', lineHeight: 1.6 }}>{s.role}</p>
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <span className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-[#E6EEF3] items-center justify-center z-10 text-[#9CA3B0]">
                    <ArrowRight size={11} />
                  </span>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-[#4C5E6F] max-w-[840px]" style={{ fontSize: '13.5px', lineHeight: 1.65 }}>
          Local SEO Authority Systems sit alongside — keeping the listing, the page, and the reviews in agreement so the enquiry arrives in the first place.
        </div>
      </div>
    </section>
  );
}

// 08 WHAT CHANGES WHEN RESPONSE IS HANDLED
function LRHOutcomes() {
  const outcomes = [
    { icon: Phone, title: 'Missed calls have a response path', note: 'Not silence until Monday — and not an auto-reply pretending to be a person.' },
    { icon: FileText, title: 'After-hours forms are not left without a first move', note: 'A short, human response — not silence until the office reopens.' },
    { icon: AlertTriangle, title: 'Time-sensitive enquiries are surfaced earlier', note: 'Whoever covers the on-call rota is notified with context.' },
    { icon: MessageSquare, title: 'Quote and consultation requests come ready', note: 'Missing detail collected, the right next question asked.' },
    { icon: User, title: 'The team picks up enquiries already warm', note: 'A named owner, a context, a clear next step — not just a row in an inbox.' },
    { icon: CheckCircle2, title: 'Handled paths have a clear owner', note: 'Every path has a person attached to it before the customer drifts.' },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 15% 20%, #F4B740 0%, transparent 45%), radial-gradient(circle at 90% 80%, #35C7D8 0%, transparent 45%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '56px 56px' }} />

          <div className="relative">
            <div className="max-w-[720px] mb-12">
              <div className="text-[#F4B740] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What changes</div>
              <h2 className="text-white" style={{ fontSize: 'clamp(42px, 5vw, 58px)', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
                Enquiries stop{' '}
                <span className="text-white/55">quietly disappearing.</span>
              </h2>
              <p className="mt-6 text-white/65" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                No promise that every enquiry converts. The ones that arrive get a first response, an honest read of urgency, and a clean handoff.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 lg:gap-4">
              {outcomes.map((o, i) => {
                const Icon = o.icon;
                return (
                  <div key={o.title} className="flex items-start gap-4 px-5 py-5 rounded-xl border border-white/10 bg-white/[0.04]">
                    <div className="w-11 h-11 rounded-md bg-[#F4B740]/10 border border-[#F4B740]/30 text-[#F4B740] flex items-center justify-center shrink-0">
                      <Icon size={16} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[#F4B740] tabular-nums" style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em' }}>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <div className="text-white" style={{ fontSize: '14.5px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.3 }}>{o.title}</div>
                      <p className="text-white/60 mt-1" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{o.note}</p>
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

// 09 FIT / NOT FIT
function LRHFit() {
  const fit = [
    "Established service business or specialist clinic",
    "Real enquiries already arrive — calls, forms, messages, quotes, consultations",
    "Missed calls or delayed replies are a real problem",
    "After-hours and weekend enquiries happen regularly",
    "The team is busy on jobs or in clinic hours",
    "You want practical response structure, not chatbot gimmicks",
  ];
  const notFit = [
    "Very low enquiry volume",
    "Want an AI chatbot as the entire offering",
    "Want to replace the team entirely",
    "Expect \"never miss a lead\" guarantees",
    "No clear services or enquiry types yet",
    "Expect a tool to fix a weak offer or a broken website",
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Is this right for your business?
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            Not the right fit for every business. Works best where real enquiries already arrive — and the team is busy enough that the first reply slips before anyone gets to it.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7 rounded-[20px] bg-gradient-to-br from-[#FFF8E2] to-white border border-[#F4B740]/25 p-9">
            <span className="text-[#9A6F12] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {fit.map((s) => (
                <div key={s} className="flex items-start gap-3 px-4 py-3.5 rounded-lg bg-white border border-[#F0DDA0]">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#F4B740] shrink-0" />
                  <span className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 500, lineHeight: 1.45 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 rounded-[20px] bg-white border border-[#E6EEF3] p-9">
            <span className="text-[#6F8190] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Probably not the right fit</span>
            <ul className="mt-6 space-y-2.5">
              {notFit.map((s) => (
                <li key={s} className="flex items-start gap-2.5 px-4 py-3 rounded-lg bg-[#F9FCFD] border border-[#E6EEF3] text-[#4C5E6F]" style={{ fontSize: '13px', lineHeight: 1.5 }}>
                  <span className="w-1 h-1 mt-2 rounded-full bg-[#6F8190] shrink-0" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10 FAQ
function LRHFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Does this replace my team?", a: "No. The team still handles the work, the quotes, the clinical decisions, and the final calls. The system handles the first reply and the handoff — so the team doesn't pick up cold." },
    { q: "Will replies sound robotic?", a: "The first reply is short and human — plain language. It says someone has seen the enquiry, asks one useful thing, and passes it on. It is not pretending to be the team." },
    { q: "Can it handle missed calls?", a: "Yes. A missed call gets a text back acknowledging it, asking what is needed, and surfacing the urgency. The customer hears something while the enquiry is still fresh — not Monday morning." },
    { q: "What happens with urgent enquiries?", a: "Time-sensitive enquiries — gas, water, electrical, urgent practice enquiry — are surfaced earlier. Whoever covers on-call is notified with context." },
    { q: "Can it handle quote or consultation requests?", a: "Yes. It acknowledges the request, asks the missing detail, and routes the enquiry to the right diary or person — with context already collected." },
    { q: "How does this connect with Follow-Up & CRM?", a: "This system handles the first response and the handoff. Once the enquiry is owned by a person, Follow-Up & CRM Systems own what happens next — quote chases, appointment confirmations, post-visit work." },
    { q: "What needs to be clear before this works well?", a: "A small amount of structure: who handles which enquiry type, what counts as urgent, what detail is usually missing. Most businesses already have the answers — we map them so the first reply makes sense." },
    { q: "What happens first?", a: "A review of the current response paths — calls, forms, messages, quote requests, consultations — and where they go cold. Then we agree which path to handle first." },
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What business owners ask about response</h2>
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

// 11 CTA
function LRHCta() {
  return (
    <section id="cta" className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #F4B740 0%, transparent 45%), radial-gradient(circle at 90% 20%, #35C7D8 0%, transparent 45%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '54px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
                Show us where enquiries{' '}
                <span className="text-white/55">are slipping through.</span>
              </h2>
              <p className="mt-6 text-white/65 max-w-[560px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                We review the response paths — calls, forms, messages, quote requests, consultations — and where they go cold. Then we agree which path to handle first.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Review my response path <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-7">
                <div className="text-white/45 uppercase tracking-[0.14em] mb-5" style={{ fontSize: '10.5px', fontWeight: 700 }}>What we look at</div>
                <div className="space-y-3.5">
                  {[
                    "Missed calls and after-hours enquiries",
                    "Forms and messages waiting for first reply",
                    "Quote and consultation requests missing detail",
                    "Team handoff and clear ownership",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#F4B740] shrink-0 shadow-[0_0_6px_#F4B740]" />
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

export function AILeadHandling() {
  return (
    <main>
      <LRHHero />
      <LRHWhereCold />
      <LRHFirstResponse />
      <LRHPaths />
      <LRHConversation />
      <LRHSupport />
      <LRHConnects />
      <LRHOutcomes />
      <LRHFit />
      <LRHFaq />
      <LRHCta />
    </main>
  );
}
