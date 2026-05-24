import { useState } from "react";
import { ArrowRight, Star, Send, MapPin, Globe, CheckCircle2, ShieldCheck, MessageSquare, Calendar, Plus, Minus, Inbox, FileText, Clock, Eye, User, Compass } from "lucide-react";

// 01 HERO
function RVHero() {
  const stages = [
    { icon: CheckCircle2, tone: "#21B985", state: "STAGE 01", label: "Work completed", note: "Job done · appointment kept · consultation finished" },
    { icon: MessageSquare, tone: "#9B7DE0", state: "STAGE 02", label: "Feedback route available", note: "A real place for concerns to be seen and handled" },
    { icon: Send, tone: "#7C4DCF", state: "STAGE 03", label: "Public review request sent", note: "Timed to the moment — not to a schedule" },
    { icon: Globe, tone: "#35C7D8", state: "STAGE 04", label: "Proof placed where it helps", note: "Beside the decision — service page, listing, local page" },
  ];
  return (
    <section className="relative bg-gradient-to-br from-[#0A0A1F] via-[#10142E] to-[#1A1140] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(ellipse at 15% 15%, #9B7DE0 0%, transparent 45%), radial-gradient(ellipse at 90% 90%, #35C7D8 0%, transparent 50%)' }} />
      <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

      <div className="relative max-w-[1240px] mx-auto px-8 pt-24 pb-32 grid grid-cols-12 gap-12 items-center">
        <div className="col-span-12 lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#9B7DE0]/30 bg-[#9B7DE0]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9B7DE0] shadow-[0_0_8px_#9B7DE0]" />
            <span className="text-[#C8B5F0] uppercase tracking-[0.2em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Reputation &amp; Review Systems</span>
          </div>
          <h1 className="text-white" style={{ fontSize: 'clamp(48px, 6.4vw, 78px)', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
            Good Work Happens.<br /><span className="text-white/45">The Proof Never<br />Shows Up.</span>
          </h1>
          <p className="mt-8 text-white/70 max-w-[580px]" style={{ fontSize: '18px', lineHeight: 1.6 }}>
            Completed jobs, kept appointments, helpful consultations, and quietly strong service experiences disappear once the work is done. Reputation &amp; Review Systems make sure the right request goes out at the right time, concerns have a responsible route, and proof lands where future customers and patients are deciding.
          </p>
          <div className="mt-10 flex items-center gap-7 flex-wrap">
            <a href="#cta" className="inline-flex items-center gap-2 bg-white text-[#0A0A1F] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-2 flex-wrap">
            {[{ l: "Asks forgotten", c: "#F4B740" }, { l: "Proof not on the page", c: "#9B7DE0" }, { l: "Concerns missed", c: "#E76F6F" }].map((x) => (
              <span key={x.l} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }} />
                <span className="text-white/80" style={{ fontSize: '12.5px', fontWeight: 500 }}>{x.l}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right — completed-work-to-proof path */}
        <div className="col-span-12 lg:col-span-5">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-6">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
              <div>
                <div className="text-white/45 uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>From work done to proof in place</div>
                <div className="text-white mt-1" style={{ fontSize: '17px', fontWeight: 600 }}>The reputation path</div>
              </div>
              <span className="inline-flex items-center gap-1.5 text-[#9B7DE0]" style={{ fontSize: '11px', fontWeight: 600 }}>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9B7DE0] shadow-[0_0_6px_#9B7DE0]" /> Four stages
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-[26px] top-3 bottom-3 w-px bg-gradient-to-b from-[#9B7DE0]/40 via-[#9B7DE0]/15 to-transparent" />
              <div className="space-y-2.5">
                {stages.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.state} className="flex items-start gap-3 px-3 py-3 rounded-lg border border-white/8 bg-white/[0.02] relative">
                      <div className="relative z-10 w-10 h-10 rounded-full bg-[#0A0A1F] border border-white/10 flex items-center justify-center shrink-0" style={{ color: s.tone }}>
                        <Icon size={15} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="uppercase tracking-[0.14em]" style={{ color: s.tone, fontSize: '9.5px', fontWeight: 700 }}>{s.state}</div>
                        <div className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>{s.label}</div>
                        <div className="text-white/55 mt-0.5" style={{ fontSize: '11px', lineHeight: 1.45 }}>{s.note}</div>
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

// 02 WHERE GOOD WORK STOPS BECOMING PROOF
function RVWhereProofStops() {
  const scraps = [
    {
      tag: 'JOB',
      tagColor: '#0468A8',
      tagBg: '#EEF4FA',
      rotate: -1.4,
      moment: 'The customer said thanks on the doorstep. The team smiled. Nobody asked.',
      lost: 'Review never written.',
    },
    {
      tag: 'VISIT',
      tagColor: '#0F7A57',
      tagBg: '#E5F4EC',
      rotate: 1.1,
      moment: 'The appointment ended well. They walked out content. No quiet route to say so.',
      lost: 'Feedback never offered.',
    },
    {
      tag: 'REVIEW',
      tagColor: '#9A6F12',
      tagBg: '#FCF5E2',
      rotate: -0.6,
      moment: 'A real five-star review landed on the platform. The service page does not show it.',
      lost: 'Proof off the page.',
    },
    {
      tag: 'CONCERN',
      tagColor: '#B23B3B',
      tagBg: '#FDECEC',
      rotate: 1.5,
      moment: 'A patient was unhappy with the reception communication. It became a public complaint.',
      lost: 'No private route existed.',
    },
    {
      tag: 'STALE',
      tagColor: '#6F8190',
      tagBg: '#F1F4F7',
      rotate: -1.0,
      moment: 'The latest review on the website is from four months ago. Three good jobs have happened since.',
      lost: 'New work never shown.',
    },
    {
      tag: 'REPEAT',
      tagColor: '#5E36AB',
      tagBg: '#F0EBFB',
      rotate: 0.8,
      moment: 'A second-time customer came back for another job. The proof of the first job stayed in someone’s head.',
      lost: 'Loyalty went unrecorded.',
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where good work stops becoming proof</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Good work happens.{' '}
            <span className="text-[#4C5E6F]">The proof scatters.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Six ordinary moments from one good month. Each one was real. None of them made it to the next visitor — because no one owns the path between the work and the proof.
          </p>
        </div>

        <div className="rounded-[24px] bg-white border border-[#E6EEF3] p-7 lg:p-12 relative overflow-hidden" style={{ boxShadow: '0 20px 56px rgba(8,17,31,0.06)' }}>
          {/* Soft texture */}
          <div className="absolute inset-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #E0E6EE 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

          {/* Center heading */}
          <div className="relative max-w-[680px] mx-auto text-center mb-10 lg:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5F4EC] border border-[#BCE0CD] mb-5">
              <CheckCircle2 size={12} className="text-[#21B985]" />
              <span className="text-[#0F7A57] uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>The good work that did happen</span>
            </div>
            <div className="text-[#08111F]" style={{ fontSize: '26px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              A real working month. Jobs done. Patients seen. Work finished well.
            </div>
            <p className="mt-3 text-[#4C5E6F]" style={{ fontSize: '14.5px', lineHeight: 1.65 }}>
              And then — nothing made it back to the next visitor.
            </p>
          </div>

          {/* Scrap grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {scraps.map((s) => (
              <div
                key={s.tag + s.moment.slice(0, 10)}
                className="rounded-xl bg-white border border-[#E6EEF3] p-5 lg:p-6 relative"
                style={{
                  transform: `rotate(${s.rotate}deg)`,
                  boxShadow: '0 10px 28px rgba(8,17,31,0.06)',
                }}
              >
                {/* Small "tape" decoration */}
                <span
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-0.5 rounded-sm"
                  style={{ background: s.tagBg, border: `1px solid ${s.tagColor}40`, transform: `translate(-50%, -50%) rotate(${-s.rotate * 0.6}deg)` }}
                >
                  <span className="uppercase tracking-[0.16em]" style={{ color: s.tagColor, fontSize: '9.5px', fontWeight: 700 }}>{s.tag}</span>
                </span>
                <p className="mt-2 text-[#08111F]" style={{ fontSize: '14px', lineHeight: 1.55, fontStyle: 'italic' }}>
                  &ldquo;{s.moment}&rdquo;
                </p>
                <div className="mt-4 pt-3 border-t border-[#EEF3F6] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F] shadow-[0_0_5px_#E76F6F]" />
                  <span className="text-[#6F8190]" style={{ fontSize: '11.5px', fontWeight: 600 }}>{s.lost}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Closing strap */}
          <div className="relative mt-12 pt-8 border-t border-[#EEF3F6] grid grid-cols-12 gap-5 items-start">
            <div className="col-span-12 md:col-span-8">
              <p className="text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
                <span className="font-semibold">Six real moments. Six places the proof slipped.</span>{' '}
                <span className="text-[#4C5E6F]">Most reputation loss is not bad work — it is good work that nobody carried forward.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F6FAFC] border border-[#E6EEF3]">
                <Clock size={12} className="text-[#5E36AB]" />
                <span className="text-[#5E36AB]" style={{ fontSize: '11.5px', fontWeight: 600 }}>One month · proof never reached the page</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03 THE RIGHT MOMENT TO ASK
function RVRightMoment() {
  const serviceMoments = [
    { name: 'Job completed', cue: 'Right after the work is done. The detail is still fresh.' },
    { name: 'Project handover', cue: 'The moment of relief and approval. People are warm.' },
    { name: 'Repair finished', cue: 'Before they go back to their day. While the difference is felt.' },
    { name: 'Repeat job', cue: 'After a second job. Loyalty is the proof, not a single visit.' },
  ];
  const clinicMoments = [
    { name: 'Appointment kept', cue: 'The visit went well. The practice experience is recent.' },
    { name: 'Consultation process', cue: 'Before treatment starts. While communication has been smooth.' },
    { name: 'Visit or admin experience', cue: 'After a smooth interaction with the practice team.' },
    { name: 'Follow-up communication', cue: 'After a careful, useful follow-up that landed well.' },
  ];

  const criteria = [
    { label: 'Recency', note: 'How fresh the work is in their mind.' },
    { label: 'Warmth', note: 'How positive the moment naturally is.' },
    { label: 'Appropriateness', note: 'Whether asking now respects the relationship.' },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The right moment to ask</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            A review request is timing,{' '}
            <span className="text-[#4C5E6F]">not a link drop.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            The ask is tied to a real point in the customer or patient experience — never an arbitrary day count, and never sent if the moment is wrong.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — featured anchor "the fresh moment" */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[24px] bg-gradient-to-br from-[#0A0A1F] to-[#1A1140] p-8 lg:p-9 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
              <div className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(155,125,224,0.22) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9B7DE0] shadow-[0_0_8px_#9B7DE0]" />
                  <span className="text-[#C8B5F0] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>The fresh moment</span>
                </div>
                <div className="text-white mb-3" style={{ fontSize: '28px', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Three things decide whether an ask reads as care — or as marketing.
                </div>
                <p className="text-white/65 mb-7" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                  Every request moment below is checked against the same three things before it is sent.
                </p>

                <div className="space-y-3">
                  {criteria.map((c, i) => (
                    <div key={c.label} className="flex items-start gap-3 px-4 py-3 rounded-lg border border-white/10 bg-white/[0.04]">
                      <span className="text-[#9B7DE0] tabular-nums shrink-0 mt-0.5" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.16em' }}>{String(i + 1).padStart(2, '0')}</span>
                      <div>
                        <div className="text-white" style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>{c.label}</div>
                        <p className="text-white/55 mt-0.5" style={{ fontSize: '12px', lineHeight: 1.55 }}>{c.note}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 pt-5 border-t border-white/10">
                  <p className="text-white" style={{ fontSize: '14px', lineHeight: 1.65, fontWeight: 600 }}>
                    If the moment is wrong, the ask is not sent.
                  </p>
                  <p className="text-white/55 mt-1" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
                    No arbitrary 14-day cadence. No quota.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — grouped moments */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[24px] bg-white border border-[#E6EEF3] p-7 lg:p-9 relative overflow-hidden" style={{ boxShadow: '0 20px 56px rgba(8,17,31,0.06)' }}>
              {/* Service moments */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EEF4FA] border border-[#C8DAEC]">
                    <span className="w-1 h-1 rounded-full bg-[#0468A8]" />
                    <span className="text-[#0468A8] uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Service business</span>
                  </span>
                  <span className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.012em' }}>Right moments</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {serviceMoments.map((m) => (
                    <div key={m.name} className="px-4 py-3.5 rounded-lg bg-[#F9FCFD] border border-[#E6EEF3]">
                      <div className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{m.name}</div>
                      <p className="text-[#4C5E6F] mt-1" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{m.cue}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic moments */}
              <div className="pt-7 border-t border-[#EEF3F6]">
                <div className="flex items-center gap-3 mb-5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E5F4EC] border border-[#BCE0CD]">
                    <span className="w-1 h-1 rounded-full bg-[#0F7A57]" />
                    <span className="text-[#0F7A57] uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>Clinic &amp; practice</span>
                  </span>
                  <span className="text-[#08111F]" style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.012em' }}>Right moments</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {clinicMoments.map((m) => (
                    <div key={m.name} className="px-4 py-3.5 rounded-lg bg-[#F9FCFD] border border-[#E6EEF3]">
                      <div className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.3 }}>{m.name}</div>
                      <p className="text-[#4C5E6F] mt-1" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>{m.cue}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[#9CA3B0]" style={{ fontSize: '11.5px', lineHeight: 1.55, fontStyle: 'italic' }}>
                  Practice experience only — never tied to treatment outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 04 THE REPUTATION PATH
function RVPath() {
  const phase1 = [
    {
      n: '01',
      icon: CheckCircle2,
      label: 'Work or appointment completed',
      note: 'The trigger is the experience itself — not a marketing schedule.',
    },
    {
      n: '02',
      icon: Inbox,
      label: 'A feedback route is available',
      note: 'A real place for concerns to be raised — open to every customer, in parallel with the public review path.',
    },
    {
      n: '03',
      icon: Send,
      label: 'A public review request goes out',
      note: 'The same ask, sent to every customer at the right moment — written for the business, not generic.',
    },
  ];
  const phase2 = [
    {
      n: '04',
      icon: Eye,
      label: 'New reviews are monitored',
      note: 'Someone sees them within a working day — including the ones that need a thoughtful reply.',
    },
    {
      n: '05',
      icon: Globe,
      label: 'Useful proof is placed where it helps',
      note: 'Service pages, treatment pages, listings, and hesitation moments — not parked on a separate review page.',
    },
    {
      n: '06',
      icon: Compass,
      label: 'A future visitor sees current trust',
      note: 'Before they decide, they meet the recent work — not a four-month-old quote.',
    },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>The reputation path</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            From completed work{' '}
            <span className="text-[#4C5E6F]">to visible trust.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Two phases. The work in motion — where the asking, listening, and request happen carefully. The proof in place — where the result becomes visible to the next person deciding.
          </p>
        </div>

        <div className="rounded-[24px] bg-white border border-[#E6EEF3] p-7 lg:p-10 relative overflow-hidden" style={{ boxShadow: '0 24px 64px rgba(8,17,31,0.07)' }}>
          {/* PHASE 1 — In motion */}
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#F0EBFB] border border-[#D3C5F0] flex items-center justify-center text-[#5E36AB]" style={{ fontSize: '11px', fontWeight: 700 }}>1</span>
              <div>
                <div className="text-[#5E36AB] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Phase 1 · The work in motion</div>
                <div className="text-[#08111F] mt-0.5" style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>Done · listened to · asked</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {phase1.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="rounded-xl bg-gradient-to-br from-[#FBF8FE] to-white border border-[#D3C5F0]/50 p-5 lg:p-6 relative" style={{ boxShadow: '0 12px 28px rgba(124,77,207,0.08)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#D3C5F0] text-[#5E36AB] flex items-center justify-center">
                      <Icon size={17} />
                    </div>
                    <span className="text-[#9B7DE0] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em' }}>STEP {s.n}</span>
                  </div>
                  <div className="text-[#08111F] mb-2" style={{ fontSize: '16.5px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.25 }}>{s.label}</div>
                  <p className="text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>{s.note}</p>
                </div>
              );
            })}
          </div>

          {/* Phase divider */}
          <div className="my-8 lg:my-10 flex items-center gap-4">
            <span className="flex-1 h-px bg-gradient-to-r from-transparent via-[#D3C5F0] to-[#D3C5F0]" />
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#D3C5F0]" style={{ boxShadow: '0 6px 18px rgba(124,77,207,0.12)' }}>
              <ArrowRight size={13} className="text-[#5E36AB] rotate-90" />
              <span className="text-[#5E36AB] uppercase tracking-[0.16em]" style={{ fontSize: '10px', fontWeight: 700 }}>From motion to place</span>
            </div>
            <span className="flex-1 h-px bg-gradient-to-r from-[#D3C5F0] via-[#D3C5F0] to-transparent" />
          </div>

          {/* PHASE 2 — In place */}
          <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-[#E5F4EC] border border-[#BCE0CD] flex items-center justify-center text-[#0F7A57]" style={{ fontSize: '11px', fontWeight: 700 }}>2</span>
              <div>
                <div className="text-[#0F7A57] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Phase 2 · The proof in place</div>
                <div className="text-[#08111F] mt-0.5" style={{ fontSize: '15.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>Seen · placed · trusted</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
            {phase2.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.n} className="rounded-xl bg-gradient-to-br from-[#F0F8F4] to-white border border-[#BCE0CD]/60 p-5 lg:p-6 relative" style={{ boxShadow: '0 12px 28px rgba(33,185,133,0.08)' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#BCE0CD] text-[#0F7A57] flex items-center justify-center">
                      <Icon size={17} />
                    </div>
                    <span className="text-[#21B985] tabular-nums" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.18em' }}>STEP {s.n}</span>
                  </div>
                  <div className="text-[#08111F] mb-2" style={{ fontSize: '16.5px', fontWeight: 700, letterSpacing: '-0.012em', lineHeight: 1.25 }}>{s.label}</div>
                  <p className="text-[#4C5E6F]" style={{ fontSize: '12.5px', lineHeight: 1.6 }}>{s.note}</p>
                </div>
              );
            })}
          </div>

          {/* Footer strap */}
          <div className="mt-10 pt-7 border-t border-[#EEF3F6] grid grid-cols-12 gap-5 items-start">
            <div className="col-span-12 md:col-span-8">
              <p className="text-[#08111F]" style={{ fontSize: '15.5px', lineHeight: 1.65 }}>
                <span className="font-semibold">No blasting. No gating. No shortcuts.</span>{' '}
                <span className="text-[#4C5E6F]">The goal is not to ask everyone for stars. It is to ask at the right moment, handle concerns properly, and place proof where future buyers actually look.</span>
              </p>
            </div>
            <div className="col-span-12 md:col-span-4 md:text-right">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#F0EBFB] border border-[#D3C5F0]">
                <ShieldCheck size={12} className="text-[#5E36AB]" />
                <span className="text-[#5E36AB]" style={{ fontSize: '11.5px', fontWeight: 600 }}>Ethical by design</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05 PRIVATE FEEDBACK AND PUBLIC REVIEWS — TWO PATHS, BOTH AVAILABLE
function RVTwoPaths() {
  const publicPoints = [
    "The same review request goes to every customer at the right moment",
    "The link points to a real review platform — not a private inbox first",
    "The review appears as the customer wrote it",
    "We do not filter by sentiment, score, or guess at the reply",
  ];
  const privatePoints = [
    "Available to anyone at any point — not only after a public request",
    "Concerns reach the responsible person quickly",
    "A real reply, not a holding form",
    "Does not block, replace, or precede the public review path",
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-14">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Two paths, both available</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Public reviews and private feedback{' '}
            <span className="text-[#4C5E6F]">do different jobs.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Both are offered to every customer in parallel. One is a public review request the customer can take to a real platform. The other is a responsible feedback route — a way to raise a concern with the business directly and have a person respond.
          </p>
        </div>

        {/* Banner: available to every customer */}
        <div className="rounded-[20px] bg-gradient-to-r from-[#F0EBFB] via-[#FBF8FE] to-[#F4FBFC] border border-[#D3C5F0]/60 px-6 py-4 mb-6 flex items-center gap-4 flex-wrap">
          <ShieldCheck size={16} className="text-[#5E36AB] shrink-0" />
          <span className="text-[#08111F]" style={{ fontSize: '14px', fontWeight: 600 }}>
            Both paths are offered to every customer — at the same moment, with no sentiment filtering between them.
          </span>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — Public path */}
          <div className="col-span-12 lg:col-span-6">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#F0EBFB]/70 to-white border border-[#D3C5F0]/70 p-7 lg:p-8 relative overflow-hidden" style={{ boxShadow: '0 16px 40px rgba(124,77,207,0.10)' }}>
              <div className="absolute -top-16 -right-16 w-60 h-60 rounded-full pointer-events-none" style={{ background: 'rgba(155,125,224,0.12)', filter: 'blur(40px)' }} />
              <div className="relative">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-11 h-11 rounded-md bg-white border border-[#D3C5F0] text-[#5E36AB] flex items-center justify-center">
                    <Star size={16} />
                  </div>
                  <div>
                    <div className="text-[#5E36AB] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Path A · Public</div>
                    <div className="text-[#08111F]" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.015em' }}>The public review request</div>
                  </div>
                </div>
                <p className="text-[#4C5E6F] mb-6" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                  A single, well-timed ask. Goes to the platform that matters for your business — Google, an industry directory, or both. The customer writes what they want to write.
                </p>
                <ul className="space-y-2.5">
                  {publicPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#9B7DE0] shrink-0 shadow-[0_0_4px_#9B7DE0]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT — Private path */}
          <div className="col-span-12 lg:col-span-6">
            <div className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-7 lg:p-8" style={{ boxShadow: '0 12px 32px rgba(8,17,31,0.05)' }}>
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-11 h-11 rounded-md bg-[#F4FBFC] border border-[#D0EFF4] text-[#0E7D8C] flex items-center justify-center">
                  <MessageSquare size={16} />
                </div>
                <div>
                  <div className="text-[#0E7D8C] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Path B · Private</div>
                  <div className="text-[#08111F]" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.015em' }}>The private feedback route</div>
                </div>
              </div>
              <p className="text-[#4C5E6F] mb-6" style={{ fontSize: '14px', lineHeight: 1.65 }}>
                Open to every customer, always — not only the ones with a concern. Goes to the responsible person, not a generic inbox. Concerns become customer care, not a complaint posted publicly because nobody listened.
              </p>
              <ul className="space-y-2.5">
                {privatePoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[#08111F]" style={{ fontSize: '13.5px', lineHeight: 1.5 }}>
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#14B8A6] shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ethics strap */}
        <div className="mt-7 rounded-[20px] bg-[#0A0A1F] p-7 lg:p-9 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          <div className="relative grid grid-cols-12 gap-5 items-start">
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck size={14} className="text-[#9B7DE0]" />
                <span className="text-[#9B7DE0] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>What this is not</span>
              </div>
              <p className="text-white" style={{ fontSize: '15.5px', lineHeight: 1.6 }}>
                Not review gating. Not sentiment filtering. Not a way to keep negative reviews off the platform.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5">
              <ul className="space-y-2 text-white/65" style={{ fontSize: '12.5px', lineHeight: 1.55 }}>
                <li className="flex items-start gap-2"><span className="text-[#E76F6F] mt-0.5">×</span> No fake reviews — ever, written by anyone.</li>
                <li className="flex items-start gap-2"><span className="text-[#E76F6F] mt-0.5">×</span> No promise to remove legitimate reviews.</li>
                <li className="flex items-start gap-2"><span className="text-[#E76F6F] mt-0.5">×</span> No routing happy customers to public, unhappy to private.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06 WHERE PROOF SHOULD APPEAR
function RVProofPlacement() {
  const placements = [
    { icon: Globe, label: 'Homepage trust strip', note: 'A small, current proof block above the fold — the first time the visitor meets evidence.' },
    { icon: FileText, label: 'Service page near the CTA', note: 'Reviews relevant to the service, placed beside the decision to act.' },
    { icon: Calendar, label: 'Treatment page beside booking', note: 'Practice experience reviews close to the consultation request — never tied to outcomes.' },
    { icon: MapPin, label: 'Service-area page proof', note: 'Reviews from the area being viewed — local trust where it lands.' },
    { icon: Inbox, label: 'Hesitation moments', note: 'Beside the form, the quote button, the call line — where doubt usually sits.' },
    { icon: Star, label: 'Listings and profiles', note: 'Reviews refreshed on the Google Business Profile and the listings that index it.' },
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>Where proof should appear</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Reviews do not belong{' '}
            <span className="text-[#4C5E6F]">on a separate reviews page.</span>
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '17px', lineHeight: 1.6 }}>
            Proof works when it sits beside the decision it supports — the service the visitor came for, the area they live in, the moment of hesitation before they act.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* LEFT — page silhouette with markers */}
          <div className="col-span-12 lg:col-span-7">
            <div className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-6 lg:p-7" style={{ boxShadow: '0 16px 48px rgba(8,17,31,0.06)' }}>
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-[#EEF3F6]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E76F6F]/60" />
                    <span className="w-2 h-2 rounded-full bg-[#F4B740]/60" />
                    <span className="w-2 h-2 rounded-full bg-[#21B985]/60" />
                  </div>
                  <span className="text-[#9CA3B0] ml-2" style={{ fontSize: '11px' }}>service-page · live</span>
                </div>
                <span className="text-[#9CA3B0]" style={{ fontSize: '11px' }}>Placement moments</span>
              </div>

              {/* Stylized page */}
              <div className="space-y-3">
                {/* Hero block */}
                <div className="relative rounded-lg bg-[#F9FCFD] border border-[#E6EEF3] p-4">
                  <div className="h-2 w-2/3 rounded bg-[#08111F]/15 mb-2" />
                  <div className="h-2 w-1/2 rounded bg-[#08111F]/10 mb-3" />
                  <div className="h-7 w-32 rounded-full bg-[#08111F]/20" />
                  <span className="absolute -top-2 -right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-[#D3C5F0] text-[#5E36AB]" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.12em' }}>
                    <span className="w-1 h-1 rounded-full bg-[#9B7DE0] shadow-[0_0_4px_#9B7DE0]" /> TRUST STRIP
                  </span>
                </div>

                {/* Service detail */}
                <div className="grid grid-cols-12 gap-3">
                  <div className="col-span-7 rounded-lg bg-[#F9FCFD] border border-[#E6EEF3] p-4">
                    <div className="h-2 w-1/2 rounded bg-[#08111F]/15 mb-2" />
                    <div className="h-1.5 w-full rounded bg-[#08111F]/8 mb-1.5" />
                    <div className="h-1.5 w-5/6 rounded bg-[#08111F]/8 mb-1.5" />
                    <div className="h-1.5 w-4/6 rounded bg-[#08111F]/8" />
                  </div>
                  <div className="col-span-5 relative rounded-lg bg-gradient-to-br from-[#F0EBFB] to-white border border-[#D3C5F0]/60 p-4 flex flex-col justify-center">
                    <div className="flex items-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} size={9} className="text-[#9B7DE0]" fill="#9B7DE0" />
                      ))}
                    </div>
                    <div className="h-1.5 w-full rounded bg-[#5E36AB]/20 mb-1" />
                    <div className="h-1.5 w-2/3 rounded bg-[#5E36AB]/20" />
                    <span className="absolute -top-2 -right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-[#D3C5F0] text-[#5E36AB]" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.12em' }}>
                      <span className="w-1 h-1 rounded-full bg-[#9B7DE0] shadow-[0_0_4px_#9B7DE0]" /> NEAR CTA
                    </span>
                  </div>
                </div>

                {/* Area page block */}
                <div className="relative rounded-lg bg-[#F9FCFD] border border-[#E6EEF3] p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={11} className="text-[#0E7D8C]" />
                    <div className="h-2 w-32 rounded bg-[#08111F]/15" />
                  </div>
                  <div className="h-1.5 w-3/4 rounded bg-[#08111F]/8 mb-1.5" />
                  <div className="h-1.5 w-2/3 rounded bg-[#08111F]/8" />
                  <span className="absolute -top-2 -right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-[#D3C5F0] text-[#5E36AB]" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.12em' }}>
                    <span className="w-1 h-1 rounded-full bg-[#9B7DE0] shadow-[0_0_4px_#9B7DE0]" /> AREA PROOF
                  </span>
                </div>

                {/* Hesitation block — form */}
                <div className="relative rounded-lg bg-[#F9FCFD] border border-[#E6EEF3] p-4">
                  <div className="h-2 w-1/3 rounded bg-[#08111F]/15 mb-3" />
                  <div className="grid grid-cols-2 gap-2 mb-2">
                    <div className="h-6 rounded border border-[#E6EEF3] bg-white" />
                    <div className="h-6 rounded border border-[#E6EEF3] bg-white" />
                  </div>
                  <div className="h-7 w-28 rounded-full bg-[#08111F]/20" />
                  <span className="absolute -top-2 -right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-[#D3C5F0] text-[#5E36AB]" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.12em' }}>
                    <span className="w-1 h-1 rounded-full bg-[#9B7DE0] shadow-[0_0_4px_#9B7DE0]" /> HESITATION
                  </span>
                </div>

                {/* Local listing block */}
                <div className="relative rounded-lg bg-gradient-to-br from-[#F9FCFD] to-[#FBF8FE] border border-[#E6EEF3] p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-md bg-white border border-[#E6EEF3] flex items-center justify-center text-[#0E7D8C]">
                      <MapPin size={12} />
                    </div>
                    <div className="flex-1">
                      <div className="h-2 w-28 rounded bg-[#08111F]/15 mb-1.5" />
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} size={8} className="text-[#9B7DE0]" fill="#9B7DE0" />
                        ))}
                        <span className="ml-1 text-[#6F8190]" style={{ fontSize: '10px' }}>recent</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-1.5 w-4/5 rounded bg-[#08111F]/8 mb-1.5" />
                  <div className="h-1.5 w-3/5 rounded bg-[#08111F]/8" />
                  <span className="absolute -top-2 -right-2 inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-white border border-[#D3C5F0] text-[#5E36AB]" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.12em' }}>
                    <span className="w-1 h-1 rounded-full bg-[#9B7DE0] shadow-[0_0_4px_#9B7DE0]" /> LOCAL LISTING
                  </span>
                </div>
              </div>
              <p className="mt-5 text-[#9CA3B0] text-center" style={{ fontSize: '11.5px', lineHeight: 1.55 }}>
                Illustrative — proof appears beside the decision, across the website and the listings.
              </p>
            </div>
          </div>

          {/* RIGHT — list of placements */}
          <div className="col-span-12 lg:col-span-5">
            <div className="h-full rounded-[20px] bg-gradient-to-br from-[#0A0A1F] to-[#1A1140] p-7 lg:p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full" style={{ background: 'radial-gradient(circle, rgba(155,125,224,0.20) 0%, transparent 70%)' }} />
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9B7DE0] shadow-[0_0_8px_#9B7DE0]" />
                  <span className="text-[#C8B5F0] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Placement moments</span>
                </div>
                <div className="text-white mb-7" style={{ fontSize: '22px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.25 }}>
                  Proof — beside the decision, across the website and the listings.
                </div>
                <div className="space-y-2.5">
                  {placements.map((p, i) => {
                    const Icon = p.icon;
                    return (
                      <div key={p.label} className="flex items-start gap-3 px-3.5 py-3 rounded-lg border border-white/10 bg-white/[0.03]">
                        <span className="text-[#9B7DE0] tabular-nums shrink-0 mt-0.5" style={{ fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.14em' }}>{String(i + 1).padStart(2, '0')}</span>
                        <div className="w-8 h-8 rounded-md bg-white/[0.04] border border-white/10 text-[#9B7DE0] flex items-center justify-center shrink-0">
                          <Icon size={13} />
                        </div>
                        <div className="flex-1">
                          <div className="text-white" style={{ fontSize: '13px', fontWeight: 600 }}>{p.label}</div>
                          <div className="text-white/55 mt-0.5" style={{ fontSize: '11.5px', lineHeight: 1.5 }}>{p.note}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 07 WHAT WE HANDLE
function RVScope() {
  const buckets = [
    {
      n: '01',
      icon: Clock,
      accent: '#5E36AB',
      soft: '#F0EBFB',
      border: '#D3C5F0',
      heading: 'Ask at the right time',
      summary: 'Asking that respects the moment — not a monthly request blast.',
      items: [
        { label: 'Timing logic', note: 'The trigger is the real experience — job done, visit kept, repair finished.' },
        { label: 'Request wording', note: 'Written for the business. Calm, specific, never a generic template.' },
        { label: 'SMS or email path', note: 'The channel that actually fits the customer relationship.' },
        { label: 'Platform link', note: 'The right place — Google, an industry directory, or both.' },
      ],
    },
    {
      n: '02',
      icon: ShieldCheck,
      accent: '#0E7D8C',
      soft: '#EEF7F8',
      border: '#C6E8EF',
      heading: 'Handle feedback responsibly',
      summary: 'Concerns get a real route. Reviews get a real reader.',
      items: [
        { label: 'Private feedback route', note: 'Open to every customer. Goes to the responsible person, not a generic inbox.' },
        { label: 'Response ownership', note: 'Who replies, in what tone — so the reply sounds like the business.' },
        { label: 'Review monitoring', note: 'New reviews seen within a working day, including the ones that need a thoughtful reply.' },
        { label: 'Concern visibility', note: 'Issues raised privately become a record of how the business responded.' },
      ],
    },
    {
      n: '03',
      icon: Globe,
      accent: '#0F7A57',
      soft: '#E5F4EC',
      border: '#BCE0CD',
      heading: 'Place proof where it helps',
      summary: 'Beside the decision, not on a separate reviews page.',
      items: [
        { label: 'Website proof placement', note: 'Homepage trust strip, service pages, hesitation moments before forms.' },
        { label: 'Service & treatment page trust', note: 'Recent reviews placed beside the page that earns the enquiry.' },
        { label: 'Local trust integration', note: 'Reviews refreshed on the listing and connected to service-area pages.' },
        { label: 'Periodic refinement', note: 'Adjusted when services or platforms change, or when real feedback reveals a gap.' },
      ],
    },
  ];

  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-16">
          <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What we handle</div>
          <h2 className="text-[#08111F]" style={{ fontSize: '52px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            The scope of Reputation &amp; Review Systems.
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
            Three buckets of work — asking at the right time, handling feedback responsibly, and placing proof where it helps the next visitor. Set up properly, then refined as the business and the real feedback move.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {buckets.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.n}
                className="h-full rounded-[20px] bg-white p-7 lg:p-8 relative overflow-hidden"
                style={{
                  border: `1px solid ${b.border}`,
                  boxShadow: `0 16px 40px ${b.accent}12`,
                }}
              >
                {/* Top accent stripe */}
                <div className="absolute top-0 left-0 right-0 h-1" style={{ background: b.accent }} />

                <div className="flex items-start justify-between mb-5 pt-1">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0" style={{ background: b.soft, border: `1px solid ${b.border}`, color: b.accent }}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="tabular-nums" style={{ color: b.accent, fontSize: '10.5px', fontWeight: 700, letterSpacing: '0.2em' }}>BUCKET {b.n}</div>
                      <div className="text-[#08111F] mt-1" style={{ fontSize: '20px', fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 }}>{b.heading}</div>
                    </div>
                  </div>
                </div>

                <p className="text-[#4C5E6F] mb-5" style={{ fontSize: '13px', lineHeight: 1.6, fontStyle: 'italic' }}>{b.summary}</p>

                <ul className="space-y-3">
                  {b.items.map((it) => (
                    <li key={it.label} className="flex items-start gap-3 pb-3 border-b border-[#EEF3F6] last:border-b-0 last:pb-0">
                      <span className="w-1.5 h-1.5 mt-1.5 rounded-full shrink-0" style={{ background: b.accent }} />
                      <div className="flex-1">
                        <div className="text-[#08111F]" style={{ fontSize: '13.5px', fontWeight: 700, letterSpacing: '-0.01em' }}>{it.label}</div>
                        <p className="text-[#6F8190] mt-0.5" style={{ fontSize: '12px', lineHeight: 1.55 }}>{it.note}</p>
                      </div>
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

// 08 WHAT CHANGES OVER TIME
function RVChanges() {
  const changes = [
    "Asking stops depending on memory.",
    "Recent proof becomes easy to find — not buried four months back.",
    "Concerns reach the responsible person before they reach the platform.",
    "Service and treatment pages feel more credible, not just more decorated.",
    "Local listings show fresher review support.",
    "Repeat good work becomes visible to the next visitor.",
    "Reputation moves into normal operations — not a last-minute marketing push.",
  ];

  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-10 lg:gap-14">
          <div className="col-span-12 lg:col-span-5">
            <div className="text-[#6F8190] uppercase tracking-[0.18em] mb-5" style={{ fontSize: '11px', fontWeight: 700 }}>What changes over time</div>
            <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Reputation stops being{' '}
              <span className="text-[#4C5E6F]">a last-minute campaign.</span>
            </h2>
            <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
              No promise of a rating jump or a guaranteed number of reviews. Just steady, ethical changes that the business and the next visitor can both feel.
            </p>
            <div className="mt-7 flex items-center gap-2.5 text-[#5E36AB]" style={{ fontSize: '13px', fontWeight: 600 }}>
              <ShieldCheck size={14} /> No fake reviews. No suppression. No guaranteed star count.
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <ol className="space-y-3">
              {changes.map((c, i) => (
                <li key={c} className="flex items-start gap-5 px-5 py-5 rounded-xl bg-white border border-[#E6EEF3]" style={{ boxShadow: '0 8px 20px rgba(8,17,31,0.04)' }}>
                  <span className="text-[#5E36AB] tabular-nums shrink-0" style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.16em' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[#08111F]" style={{ fontSize: '15px', fontWeight: 500, lineHeight: 1.55 }}>{c}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

// 09 FIT / NOT FIT
function RVFit() {
  const fit = [
    "Established service business or specialist clinic",
    "Good work is happening, but reviews are inconsistent",
    "Reviews already influence who gets contacted locally",
    "The team forgets to ask in the moment",
    "Recent proof is thin or buried",
    "Feedback could use a responsible private route",
    "You want ethical structure, not review hacks",
  ];
  const notFit = [
    "Want fake reviews or review writing",
    "Want to suppress legitimate negative feedback",
    "Want platform manipulation or rating boosts",
    "Want to gate unhappy customers away from public reviews",
    "Need legal or PR reputation crisis repair",
    "No real completed work or customer experience yet",
  ];
  return (
    <section className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="max-w-[820px] mb-14">
          <h2 className="text-[#08111F]" style={{ fontSize: '50px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Is this right for your business?
          </h2>
          <p className="mt-6 text-[#4C5E6F]" style={{ fontSize: '16px', lineHeight: 1.65 }}>
            Reputation &amp; Review Systems are not the right fit for every business. They work best where real customer or patient experiences are already happening — and the owner wants the proof handled properly, not gamed.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 lg:col-span-7 rounded-[20px] bg-gradient-to-br from-[#F0EBFB] to-white border border-[#D3C5F0]/60 p-9">
            <span className="text-[#5E36AB] uppercase tracking-[0.18em]" style={{ fontSize: '10.5px', fontWeight: 700 }}>Strong fit</span>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
              {fit.map((s) => (
                <div key={s} className="flex items-start gap-3 px-4 py-3.5 rounded-lg bg-white border border-[#D3C5F0]/60">
                  <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-[#9B7DE0] shrink-0" />
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
      </div>
    </section>
  );
}

// 10 FAQ
function RVFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: "Do you write fake reviews?", a: "No. Never. We do not create, edit, or alter reviews — and we do not work with anyone who does." },
    { q: "Can you remove bad reviews?", a: "No promise to remove legitimate reviews. We help you see, respond to, and handle feedback responsibly — a thoughtful reply is often the proof. Reviews that genuinely breach platform policy can be reported by you to the platform; that is their decision, not ours." },
    { q: "Is this review gating?", a: "No. The same public review request goes to every customer. A separate private feedback route is available to everyone, at any time. The two paths run in parallel — we never route people into one based on how positive they look." },
    { q: "When do review requests go out?", a: "At the right moment for the relationship — job completed, project handover, appointment kept, repeat visit. We map the moments with you so the ask is timed to a real point in the experience, not an arbitrary day count." },
    { q: "What happens with unhappy feedback?", a: "It is handled as customer care. Concerns reach the responsible person quickly, get a real reply, and become a record of how the business responded. None of this stops the customer leaving a public review if they choose." },
    { q: "Can this work for clinics?", a: "Yes. We use appointment, visit, consultation, and communication experience language — never treatment outcome claims. The same ethics apply: no manipulation, no gating." },
    { q: "How does this connect with the website?", a: "Reviews do not sit on a separate page. We place fresh proof beside the decisions it supports — service and treatment pages, hesitation moments before forms, the homepage trust strip." },
    { q: "How does this connect with Local SEO?", a: "Recent reviews are part of what nearby customers check before they contact anyone. This system keeps that picture fresh — alongside the listing and service-area work." },
    { q: "What happens first?", a: "A reputation review — when reviews are asked for today, where feedback goes (or does not), where proof appears across the website and listings, and what would change which option a future buyer picks. Then we agree the first fixes." },
  ];
  return (
    <section className="bg-[#F6FAFC] py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-[#08111F]" style={{ fontSize: '46px', fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em' }}>What business owners ask about reputation</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-7 py-6 hover:bg-[#F6FAFC] transition-colors">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[#08111F]" style={{ fontSize: '16px', fontWeight: 600 }}>{f.q}</span>
                    <span className="w-7 h-7 rounded-full bg-[#F0EBFB] text-[#5E36AB] flex items-center justify-center shrink-0">{open === i ? <Minus size={14} /> : <Plus size={14} />}</span>
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
function RVCta() {
  return (
    <section id="cta" className="bg-white py-32">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#0A0A1F] to-[#1A1140] p-12 lg:p-20 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.18]" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, #9B7DE0 0%, transparent 45%), radial-gradient(circle at 90% 20%, #35C7D8 0%, transparent 45%)' }} />
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="text-white" style={{ fontSize: '54px', fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.035em' }}>
                Find where good work{' '}
                <span className="text-white/55">stops becoming proof.</span>
              </h2>
              <p className="mt-6 text-white/65 max-w-[560px]" style={{ fontSize: '16.5px', lineHeight: 1.65 }}>
                We map when reviews are asked for today, where feedback goes (or does not), and where proof appears across the website and listings — then agree the first fixes. Calm and diagnostic. No review hacks.
              </p>
              <a href="#" className="mt-9 inline-flex items-center gap-2 bg-white text-[#0A0A1F] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors" style={{ fontSize: '15px', fontWeight: 600 }}>
                Review my reputation path <ArrowRight size={16} />
              </a>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-7">
                <div className="text-white/45 uppercase tracking-[0.14em] mb-5" style={{ fontSize: '10.5px', fontWeight: 700 }}>What we look at</div>
                <div className="space-y-3.5">
                  {[
                    "When and how requests go out today",
                    "Where private feedback currently goes",
                    "Where proof appears on the website",
                    "Where local listings show recent trust",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#9B7DE0] shrink-0 shadow-[0_0_6px_#9B7DE0]" />
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

export function Reviews() {
  return (
    <main>
      <RVHero />
      <RVWhereProofStops />
      <RVRightMoment />
      <RVPath />
      <RVTwoPaths />
      <RVProofPlacement />
      <RVScope />
      <RVChanges />
      <RVFit />
      <RVFaq />
      <RVCta />
    </main>
  );
}
