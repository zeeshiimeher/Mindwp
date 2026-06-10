import { ArrowRight } from "lucide-react";

interface PlumbingProps {
  onNav: (page: string) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// 01  HERO
// ─────────────────────────────────────────────────────────────────────────────
function PLHero({ onNav }: PlumbingProps) {
  const moments = [
    {
      state: "MISSED",
      label: "Emergency call",
      when: "Tue 14:12 · team on site · no answer",
      tone: "#E76F6F",
    },
    {
      state: "UNOWNED",
      label: "Boiler quote request",
      when: "Mon 09:47 · form submitted · no follow-up",
      tone: "#F4B740",
    },
    {
      state: "EXIT",
      label: "Service page visit",
      when: "Tue 11:33 · no service area shown",
      tone: "#F4B740",
    },
    {
      state: "WAITING",
      label: "Blocked drain enquiry",
      when: "Mon 15:05 · form sitting, no owner",
      tone: "#F4B740",
    },
    {
      state: "NOT SENT",
      label: "Review request — last job",
      when: "Job complete · request not triggered",
      tone: "#6F8190",
    },
  ];

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #061323 0%, #071629 55%, #0F1E3C 100%)",
      }}
    >
      {/* Radial glows */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 15% 15%, #F4B740 0%, transparent 45%), radial-gradient(ellipse at 85% 85%, #35C7D8 0%, transparent 50%)",
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="section-hero relative">
        <div className="container">
          <div className="grid grid-cols-12 gap-12 items-center">

            {/* ── Left: copy ── */}
            <div className="col-span-12 lg:col-span-7">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.04] mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#35C7D8]"
                  style={{ boxShadow: "0 0 8px #35C7D8" }}
                />
                <span
                  className="text-white/60 uppercase tracking-[0.18em]"
                  style={{ fontSize: "10.5px", fontWeight: 700 }}
                >
                  Home Services · Plumbing
                </span>
              </div>

              {/* H1 */}
              <h1
                className="text-white"
                style={{
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-0.035em",
                }}
              >
                The call came in.
                <br />
                <span className="text-white/40">
                  The team was already
                  <br />
                  on a job.
                </span>
              </h1>

              {/* Subhead */}
              <p
                className="mt-8 text-white/65 max-w-[560px]"
                style={{ fontSize: "18px", lineHeight: 1.65 }}
              >
                For an established plumbing business, every enquiry arrives in a
                gap — between the engineer and the phone, between the quote and
                the decision, between the completed job and the proof it should
                leave behind. The service page, the first response, and the
                follow-up all have to work when you can't.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex items-center gap-5 flex-wrap">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  See how it works for plumbing{" "}
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => onNav("sws")}
                  className="text-white/50 hover:text-white/85 transition-colors"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  View Smart Website Systems →
                </button>
              </div>

              {/* Status badges */}
              <div className="mt-12 flex items-center gap-2.5 flex-wrap">
                {[
                  { l: "Missed emergency calls", c: "#E76F6F" },
                  { l: "Quotes without follow-up", c: "#F4B740" },
                  { l: "Proof not collected", c: "#9B7DE0" },
                ].map((x) => (
                  <span
                    key={x.l}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03]"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: x.c,
                        boxShadow: `0 0 7px ${x.c}`,
                      }}
                    />
                    <span
                      className="text-white/70"
                      style={{ fontSize: "12.5px", fontWeight: 500 }}
                    >
                      {x.l}
                    </span>
                  </span>
                ))}
              </div>
            </div>

            {/* ── Right: plumbing signal surface ── */}
            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-5">
                {/* Surface header */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/[0.08]">
                  <div>
                    <div
                      className="text-white/40 uppercase tracking-[0.16em]"
                      style={{ fontSize: "10px", fontWeight: 700 }}
                    >
                      Today's enquiry record
                    </div>
                    <div
                      className="text-white mt-1"
                      style={{ fontSize: "16px", fontWeight: 600 }}
                    >
                      Plumbing — working day
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(231,111,111,0.12)",
                      border: "1px solid rgba(231,111,111,0.2)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]"
                      style={{ boxShadow: "0 0 6px #E76F6F" }}
                    />
                    <span
                      className="text-[#E76F6F]"
                      style={{ fontSize: "10.5px", fontWeight: 700 }}
                    >
                      Gaps present
                    </span>
                  </span>
                </div>

                {/* Moment rows */}
                <div className="space-y-2">
                  {moments.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-white/[0.08] bg-white/[0.02]"
                    >
                      <span
                        className="w-0.5 h-9 rounded-full shrink-0"
                        style={{
                          background: m.tone,
                          boxShadow: `0 0 8px ${m.tone}55`,
                        }}
                      />
                      <div className="flex-1 min-w-0">
                        <div
                          className="uppercase tracking-[0.14em] mb-0.5"
                          style={{
                            color: m.tone,
                            fontSize: "9.5px",
                            fontWeight: 700,
                          }}
                        >
                          {m.state}
                        </div>
                        <div
                          className="text-white/90 truncate"
                          style={{ fontSize: "13px", fontWeight: 600 }}
                        >
                          {m.label}
                        </div>
                        <div
                          className="text-white/45 truncate"
                          style={{ fontSize: "11px" }}
                        >
                          {m.when}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p
                  className="mt-4 pt-3 border-t border-white/[0.08] text-white/25 text-center"
                  style={{ fontSize: "11px" }}
                >
                  Illustrative — every plumbing business has its own pattern
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 02  PRESSURE MOMENTS
// ─────────────────────────────────────────────────────────────────────────────
function PLPressureMoments() {
  const smallPanels = [
    {
      tone: "#E76F6F",
      label: "Planned repair",
      headline: "Blocked drain, slow leak, intermittent fault.",
      body: "Compared on response speed and reviews. The faster, more credible reply usually wins the job.",
      slip: "Slower reply than the next result",
    },
    {
      tone: "#21B985",
      label: "Installation quote",
      headline: "Boiler replacement, bathroom fit, larger job.",
      body: "A multi-day decision. The quote goes out — and cools within 48 hours if nobody follows up.",
      slip: "Quote sent, no follow-up owned",
    },
    {
      tone: "#35C7D8",
      label: "Returning customer",
      headline: "Has used the business before. Ready to book.",
      body: "Fastest to convert, easiest to lose through inattention. Poor follow-up after the last job costs the repeat booking.",
      slip: "Inattention after the previous job",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container">

        {/* Section header */}
        <div className="mb-16">
          <div
            className="section-kicker mb-4"
            style={{ color: "#6F8190" }}
          >
            Four kinds of enquiry
          </div>
          <h2 style={{ color: "#08111F", maxWidth: "600px" }}>
            Not every plumbing call is the same kind of moment.
          </h2>
          <p
            className="mt-5"
            style={{
              color: "#4C5E6F",
              fontSize: "17px",
              lineHeight: 1.65,
              maxWidth: "580px",
            }}
          >
            Each arrives differently, carries different urgency, and has its
            own point where the job can slip. The handling has to match the
            moment.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-12 gap-5">

          {/* Emergency — dominant left panel */}
          <div
            className="col-span-12 lg:col-span-7 rounded-2xl border border-[#E6EEF3] overflow-hidden flex flex-col"
            style={{
              background: "#FAFCFE",
              boxShadow: "0 8px 32px rgba(8,17,31,0.06)",
            }}
          >
            {/* Accent bar */}
            <div className="h-1" style={{ background: "#F4B740" }} />
            <div className="p-8 lg:p-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 mb-6">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#F4B740",
                    boxShadow: "0 0 8px #F4B740",
                  }}
                />
                <span
                  className="uppercase tracking-[0.16em]"
                  style={{
                    color: "#F4B740",
                    fontSize: "10.5px",
                    fontWeight: 700,
                  }}
                >
                  Emergency call
                </span>
              </div>

              <h3 style={{ color: "#08111F", marginBottom: "16px" }}>
                Burst pipe. Flooding. No hot water.
              </h3>
              <p style={{ color: "#4C5E6F", fontSize: "17px", lineHeight: 1.65, flex: 1 }}>
                The homeowner needs help now. They are not comparing three
                plumbers — they are calling the first number that answers, or
                the first page that convinces them you cover their area and are
                available. The decision happens in minutes. If the page is
                vague or the call goes unanswered, the job goes to the next
                result.
              </p>

              <div
                className="mt-8 pt-6 border-t border-[#E6EEF3] grid grid-cols-2 gap-6"
              >
                <div>
                  <div
                    className="uppercase tracking-[0.14em] mb-1.5"
                    style={{ color: "#9CA3B0", fontSize: "10px", fontWeight: 700 }}
                  >
                    Decision speed
                  </div>
                  <div style={{ color: "#08111F", fontSize: "14.5px", fontWeight: 600 }}>
                    Under ten minutes
                  </div>
                </div>
                <div>
                  <div
                    className="uppercase tracking-[0.14em] mb-1.5"
                    style={{ color: "#9CA3B0", fontSize: "10px", fontWeight: 700 }}
                  >
                    Where jobs slip
                  </div>
                  <div style={{ color: "#08111F", fontSize: "14.5px", fontWeight: 600 }}>
                    No answer · no area clarity
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Three smaller panels — stacked */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-5">
            {smallPanels.map((p) => (
              <div
                key={p.label}
                className="rounded-2xl border border-[#E6EEF3] overflow-hidden flex-1"
                style={{
                  background: "#FAFCFE",
                  boxShadow: "0 8px 24px rgba(8,17,31,0.04)",
                }}
              >
                <div className="h-0.5" style={{ background: p.tone }} />
                <div className="p-6">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: p.tone }}
                    />
                    <span
                      className="uppercase tracking-[0.14em]"
                      style={{
                        color: p.tone,
                        fontSize: "10px",
                        fontWeight: 700,
                      }}
                    >
                      {p.label}
                    </span>
                  </div>
                  <p style={{ color: "#08111F", fontSize: "15px", fontWeight: 600, lineHeight: 1.4, marginBottom: "8px" }}>
                    {p.headline}
                  </p>
                  <p style={{ color: "#4C5E6F", fontSize: "14px", lineHeight: 1.6, marginBottom: "16px" }}>
                    {p.body}
                  </p>
                  <div
                    className="pt-4 border-t border-[#E6EEF3] flex items-start justify-between gap-4"
                  >
                    <span style={{ color: "#9CA3B0", fontSize: "11.5px" }}>
                      Where it slips
                    </span>
                    <span
                      style={{
                        color: "#08111F",
                        fontSize: "11.5px",
                        fontWeight: 600,
                        textAlign: "right",
                      }}
                    >
                      {p.slip}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 03  SERVICE PAGE
// ─────────────────────────────────────────────────────────────────────────────
function PLServicePage() {
  const points = [
    {
      num: "01",
      title: "Service area named — not a vague county",
      body: "Specific areas listed on the page. The homeowner searching for a plumber nearby needs to see their neighbourhood confirmed before they pick up the phone.",
    },
    {
      num: "02",
      title: "Two paths for two different visitors",
      body: "An emergency line and a quote-request form are not the same CTA. The visitor's intent should shape where they go and what they're asked to do next.",
    },
    {
      num: "03",
      title: "Recent work placed near the decision",
      body: "Reviews and finished-job proof beside the call or quote action — not buried on a testimonials page that most visitors never reach.",
    },
    {
      num: "04",
      title: "One specific page per service",
      body: "An emergency plumbing page and a boiler service page carry different trust signals, different questions, and different CTAs. A single generic services page answers none of them well.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container">
        <div className="grid grid-cols-12 gap-16 items-start">

          {/* ── Left: page silhouette ── */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="rounded-2xl border border-[#D0DDE8] bg-white overflow-hidden"
              style={{ boxShadow: "0 16px 48px rgba(8,17,31,0.09)" }}
            >
              {/* Browser-style header */}
              <div className="px-5 py-3.5 border-b border-[#E6EEF3] flex items-center justify-between bg-white">
                <div className="w-20 h-2.5 rounded-full bg-[#08111F]/10" />
                <div className="flex items-center gap-2">
                  <div
                    className="w-16 h-7 rounded-full border border-[#E6EEF3]"
                    style={{ background: "#F6FAFC" }}
                  />
                  <div
                    className="w-20 h-7 rounded-full"
                    style={{ background: "#061323" }}
                  />
                </div>
              </div>

              {/* Hero zone — dark */}
              <div
                className="px-5 pt-8 pb-6"
                style={{
                  background: "linear-gradient(135deg, #061323, #0E2740)",
                }}
              >
                {/* Area badge */}
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "#E76F6F" }}
                  />
                  <span
                    className="text-white/65 uppercase tracking-[0.14em]"
                    style={{ fontSize: "9px", fontWeight: 700 }}
                  >
                    Emergency plumbing · Islington
                  </span>
                </div>

                {/* Headline wireframe */}
                <div
                  className="h-5 rounded-full bg-white/55 mb-2.5"
                  style={{ width: "78%" }}
                />
                <div
                  className="h-3 rounded-full bg-white/28 mb-6"
                  style={{ width: "60%" }}
                />

                {/* Two-CTA wireframe */}
                <div className="flex items-center gap-3">
                  <div
                    className="h-9 rounded-full px-4 flex items-center"
                    style={{ background: "#E76F6F" }}
                  >
                    <span
                      className="text-white"
                      style={{ fontSize: "11px", fontWeight: 600 }}
                    >
                      Emergency line
                    </span>
                  </div>
                  <div
                    className="h-9 rounded-full px-4 flex items-center"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.18)",
                    }}
                  >
                    <span
                      className="text-white/65"
                      style={{ fontSize: "11px", fontWeight: 500 }}
                    >
                      Request a quote
                    </span>
                  </div>
                </div>
              </div>

              {/* Service area strip */}
              <div
                className="px-5 py-3 border-b border-[#D0EDE9]"
                style={{ background: "#F0FAFA" }}
              >
                <div className="flex items-center gap-1.5 mb-1.5">
                  <span
                    className="w-1 h-1 rounded-full"
                    style={{ background: "#14B8A6" }}
                  />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{
                      color: "#0E7D8C",
                      fontSize: "9.5px",
                      fontWeight: 700,
                    }}
                  >
                    Areas covered
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Islington",
                    "Highbury",
                    "Canonbury",
                    "Barnsbury",
                    "Angel",
                    "+8 more",
                  ].map((a) => (
                    <span
                      key={a}
                      className="px-2 py-0.5 rounded-full border"
                      style={{
                        background: "rgba(20,184,166,0.1)",
                        borderColor: "rgba(20,184,166,0.25)",
                        color: "#0E7D8C",
                        fontSize: "10.5px",
                        fontWeight: 600,
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content wireframe */}
              <div className="px-5 py-5 border-b border-[#E6EEF3]">
                <div
                  className="h-3 rounded-full bg-[#08111F]/10 mb-3"
                  style={{ width: "42%" }}
                />
                <div className="space-y-2">
                  {[0.82, 0.9, 0.68, 0.76].map((w, i) => (
                    <div
                      key={i}
                      className="h-2 rounded-full bg-[#08111F]/[0.06]"
                      style={{ width: `${w * 100}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Reviews strip */}
              <div
                className="px-5 py-5 border-b border-[#E6EEF3]"
                style={{ background: "#FAFCFE" }}
              >
                <div className="flex items-center gap-1.5 mb-3">
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{
                      color: "#9CA3B0",
                      fontSize: "9.5px",
                      fontWeight: 700,
                    }}
                  >
                    Recent work
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(155,125,224,0.1)",
                      color: "#7B5EB8",
                      fontSize: "9px",
                      fontWeight: 700,
                    }}
                  >
                    placed near the decision
                  </span>
                </div>
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg border border-[#E6EEF3] bg-white mb-2 last:mb-0"
                  >
                    <div
                      className="w-7 h-7 rounded-full shrink-0"
                      style={{ background: "rgba(155,125,224,0.15)" }}
                    />
                    <div className="flex-1">
                      <div
                        className="h-2 rounded-full bg-[#08111F]/10 mb-1.5"
                        style={{ width: "72%" }}
                      />
                      <div
                        className="h-2 rounded-full bg-[#08111F]/[0.06]"
                        style={{ width: "52%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA footer */}
              <div className="px-5 py-5">
                <div className="flex gap-3">
                  <div
                    className="flex-1 h-10 rounded-full"
                    style={{ background: "#061323" }}
                  />
                  <div
                    className="flex-1 h-10 rounded-full border border-[#E6EEF3]"
                    style={{ background: "#F6FAFC" }}
                  />
                </div>
              </div>
            </div>

            <p
              className="mt-4 text-center"
              style={{ color: "#9CA3B0", fontSize: "12px" }}
            >
              A plumbing service page built to carry the decision — not just
              describe the service
            </p>
          </div>

          {/* ── Right: copy ── */}
          <div className="col-span-12 lg:col-span-6 lg:pt-2">
            <div
              className="section-kicker mb-5"
              style={{ color: "#6F8190" }}
            >
              The service page
            </div>
            <h2 style={{ color: "#08111F", marginBottom: "20px" }}>
              Before the first call, the page has already decided the job.
            </h2>
            <p
              style={{
                color: "#4C5E6F",
                fontSize: "17px",
                lineHeight: 1.65,
                marginBottom: "48px",
              }}
            >
              In an emergency search, a homeowner spends about 20 seconds on a
              page. It either confirms coverage, signals availability, and gives
              a clear path to contact — or they leave. Most plumbing websites
              fail at least two of those three things.
            </p>

            <div className="space-y-8">
              {points.map((p) => (
                <div key={p.num} className="flex gap-5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: "#08111F",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: 700,
                    }}
                  >
                    {p.num}
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#08111F",
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      {p.title}
                    </div>
                    <p style={{ color: "#4C5E6F", fontSize: "15px", lineHeight: 1.6 }}>
                      {p.body}
                    </p>
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

// ─────────────────────────────────────────────────────────────────────────────
// 04  CALL GAP
// ─────────────────────────────────────────────────────────────────────────────
function PLCallGap() {
  const unhandled = [
    {
      time: "14:12",
      event: "Emergency call received",
      note: "Homeowner — burst pipe, kitchen",
      tone: "#6F8190",
      strong: false,
    },
    {
      time: "14:12",
      event: "Rings out. Voicemail.",
      note: "No message left",
      tone: "#6F8190",
      strong: false,
    },
    {
      time: "14:13",
      event: "Homeowner dials the next result",
      note: "Two more plumbers listed for the area",
      tone: "#E76F6F",
      strong: true,
    },
    {
      time: "14:28",
      event: "Job booked with another plumber",
      note: "No callback made. No record of the call.",
      tone: "#E76F6F",
      strong: true,
    },
  ];

  const handled = [
    {
      time: "14:12",
      event: "Emergency call received",
      note: "Homeowner — burst pipe, kitchen",
      tone: "#4C5E6F",
      strong: false,
    },
    {
      time: "14:12",
      event: "Call logged. Context noted.",
      note: "Area, issue type, caller details captured",
      tone: "#F4B740",
      strong: true,
    },
    {
      time: "14:14",
      event: "Nearest available engineer alerted",
      note: "Estimated callback window: 30–40 min",
      tone: "#4C5E6F",
      strong: false,
    },
    {
      time: "14:51",
      event: "Callback made with full context",
      note: "Issue known before the call. Job confirmed.",
      tone: "#21B985",
      strong: true,
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container">

        {/* Section header */}
        <div className="mb-14">
          <div
            className="section-kicker mb-4"
            style={{ color: "#6F8190" }}
          >
            First response
          </div>
          <h2 style={{ color: "#08111F", maxWidth: "580px" }}>
            Between the missed call and the callback, the job is usually gone.
          </h2>
          <p
            className="mt-5"
            style={{
              color: "#4C5E6F",
              fontSize: "17px",
              lineHeight: 1.65,
              maxWidth: "560px",
            }}
          >
            An engineer is under a bath when the emergency call comes in. It
            rings out. This isn't a technology problem — it's a handling
            problem. Whether the job survives that gap depends on what happens
            in the next forty minutes.
          </p>
        </div>

        {/* Two-path split card */}
        <div
          className="rounded-2xl overflow-hidden border border-[#E6EEF3]"
          style={{ boxShadow: "0 16px 48px rgba(8,17,31,0.08)" }}
        >
          <div className="grid grid-cols-12">

            {/* Unhandled — dark */}
            <div
              className="col-span-12 lg:col-span-6 p-8 lg:p-10"
              style={{ background: "#07111F" }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]"
                  style={{ boxShadow: "0 0 6px #E76F6F" }}
                />
                <span
                  className="uppercase tracking-[0.16em] text-white/45"
                  style={{ fontSize: "10.5px", fontWeight: 700 }}
                >
                  Without handling
                </span>
              </div>

              <div>
                {unhandled.map((step, i, arr) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{
                          background: step.tone,
                          boxShadow:
                            step.tone === "#E76F6F"
                              ? "0 0 6px #E76F6F"
                              : "none",
                        }}
                      />
                      {i < arr.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1 mb-1"
                          style={{ background: "rgba(255,255,255,0.07)" }}
                        />
                      )}
                    </div>
                    <div className="pb-5">
                      <div
                        className="mb-0.5"
                        style={{
                          color: "rgba(255,255,255,0.3)",
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        {step.time}
                      </div>
                      <div
                        style={{
                          color: step.strong
                            ? "rgba(255,255,255,0.8)"
                            : "rgba(255,255,255,0.35)",
                          fontSize: "15px",
                          fontWeight: step.strong ? 600 : 400,
                        }}
                      >
                        {step.event}
                      </div>
                      <div
                        className="mt-0.5"
                        style={{
                          color: "rgba(255,255,255,0.28)",
                          fontSize: "12.5px",
                        }}
                      >
                        {step.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg"
                  style={{
                    background: "rgba(231,111,111,0.12)",
                    border: "1px solid rgba(231,111,111,0.2)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]"
                    style={{ boxShadow: "0 0 5px #E76F6F" }}
                  />
                  <span
                    className="text-[#E76F6F]"
                    style={{ fontSize: "13px", fontWeight: 600 }}
                  >
                    Job lost
                  </span>
                </div>
              </div>
            </div>

            {/* Handled — light */}
            <div
              className="col-span-12 lg:col-span-6 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-[#E6EEF3]"
              style={{ background: "#F9FCFD" }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#F4B740",
                    boxShadow: "0 0 6px #F4B740",
                  }}
                />
                <span
                  className="uppercase tracking-[0.16em]"
                  style={{
                    color: "#9A6F12",
                    fontSize: "10.5px",
                    fontWeight: 700,
                  }}
                >
                  With handling
                </span>
              </div>

              <div>
                {handled.map((step, i, arr) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                        style={{
                          background: step.tone,
                          boxShadow: step.strong
                            ? `0 0 6px ${step.tone}`
                            : "none",
                        }}
                      />
                      {i < arr.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1 mb-1"
                          style={{ background: "#E6EEF3" }}
                        />
                      )}
                    </div>
                    <div className="pb-5">
                      <div
                        className="mb-0.5"
                        style={{
                          color: "#9CA3B0",
                          fontSize: "11px",
                          fontWeight: 600,
                        }}
                      >
                        {step.time}
                      </div>
                      <div
                        style={{
                          color: step.strong ? "#08111F" : "#4C5E6F",
                          fontSize: "15px",
                          fontWeight: step.strong ? 600 : 400,
                        }}
                      >
                        {step.event}
                      </div>
                      <div
                        className="mt-0.5"
                        style={{ color: "#9CA3B0", fontSize: "12.5px" }}
                      >
                        {step.note}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#E6EEF3]">
                <div
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg"
                  style={{
                    background: "rgba(33,185,133,0.1)",
                    border: "1px solid rgba(33,185,133,0.2)",
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[#21B985]"
                    style={{ boxShadow: "0 0 6px #21B985" }}
                  />
                  <span
                    style={{
                      color: "#0F7A57",
                      fontSize: "13px",
                      fontWeight: 600,
                    }}
                  >
                    Job held
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <p
          className="mt-6 text-center"
          style={{ color: "#9CA3B0", fontSize: "13px" }}
        >
          This is about handling and routing — not automated responses or voice
          systems
        </p>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 05  QUOTE WINDOW
// ─────────────────────────────────────────────────────────────────────────────
function PLQuoteWindow() {
  const spine = [
    {
      day: "Monday",
      event: "Site survey complete",
      note: "Engineer visits, job scoped",
      tone: "#4C5E6F",
      key: false,
    },
    {
      day: "Friday · 17:47",
      event: "Quote sent",
      note: "Emailed to homeowner. Three pages.",
      tone: "#4C5E6F",
      key: false,
    },
    {
      day: "Friday · 20:12",
      event: "Quote opened",
      note: "Homeowner reads it over dinner",
      tone: "#F4B740",
      key: true,
    },
    {
      day: "Weekend",
      event: "The window is open",
      note: "Two more quotes received. Homeowner comparing.",
      tone: "#F4B740",
      key: true,
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container">
        <div className="grid grid-cols-12 gap-16 items-start">

          {/* ── Left: copy ── */}
          <div className="col-span-12 lg:col-span-5">
            <div
              className="section-kicker mb-5"
              style={{ color: "#6F8190" }}
            >
              Quote &amp; follow-up
            </div>
            <h2 style={{ color: "#08111F", marginBottom: "20px" }}>
              The quote went out. The decision window is still open.
            </h2>
            <p
              style={{
                color: "#4C5E6F",
                fontSize: "17px",
                lineHeight: 1.65,
                marginBottom: "36px",
              }}
            >
              A plumber visits, surveys a boiler replacement or bathroom job,
              and sends a quote Friday evening. Without a follow-up, the
              homeowner has had two more quotes by Monday, discussed it over
              the weekend, and booked the one that checked in. The quote is a
              live document for 48 to 72 hours. After that, it cools.
            </p>

            <div
              className="p-6 rounded-2xl border border-[#E6EEF3] bg-white"
              style={{ boxShadow: "0 8px 24px rgba(8,17,31,0.05)" }}
            >
              <div
                className="uppercase tracking-[0.14em] mb-4"
                style={{
                  color: "#9CA3B0",
                  fontSize: "10px",
                  fontWeight: 700,
                }}
              >
                What follow-up is not
              </div>
              <div className="space-y-3">
                {[
                  "Not a sales sequence or automated cadence",
                  "Not chasing — it's owning the next step",
                  "Not a CRM dashboard — it's a single check-in with the context from the visit",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "#21B985" }}
                    />
                    <span
                      style={{ color: "#4C5E6F", fontSize: "14.5px", lineHeight: 1.55 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: quote timeline ── */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="rounded-2xl border border-[#E6EEF3] bg-white p-8 lg:p-10"
              style={{ boxShadow: "0 12px 40px rgba(8,17,31,0.06)" }}
            >
              <div
                className="uppercase tracking-[0.16em] mb-8"
                style={{
                  color: "#9CA3B0",
                  fontSize: "10.5px",
                  fontWeight: 700,
                }}
              >
                The quote window — boiler replacement
              </div>

              {/* Timeline spine */}
              {spine.map((step, i, arr) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-2.5 h-2.5 rounded-full mt-0.5 shrink-0"
                      style={{
                        background: step.tone,
                        boxShadow: step.key
                          ? `0 0 8px ${step.tone}`
                          : "none",
                      }}
                    />
                    {i < arr.length - 1 && (
                      <div
                        className="w-px flex-1 mt-1 mb-1"
                        style={{ background: "#E6EEF3" }}
                      />
                    )}
                  </div>
                  <div className="pb-5">
                    <div
                      style={{
                        color: "#9CA3B0",
                        fontSize: "11px",
                        fontWeight: 600,
                        marginBottom: "2px",
                      }}
                    >
                      {step.day}
                    </div>
                    <div
                      style={{
                        color: "#08111F",
                        fontSize: "15px",
                        fontWeight: step.key ? 600 : 500,
                      }}
                    >
                      {step.event}
                    </div>
                    <div
                      style={{ color: "#9CA3B0", fontSize: "12.5px", marginTop: "2px" }}
                    >
                      {step.note}
                    </div>
                  </div>
                </div>
              ))}

              {/* Branch node */}
              <div className="flex gap-4 mb-4">
                <div className="flex flex-col items-center">
                  <div
                    className="w-2.5 h-2.5 rounded-full mt-0.5 shrink-0"
                    style={{ background: "#08111F" }}
                  />
                </div>
                <div>
                  <div
                    style={{
                      color: "#9CA3B0",
                      fontSize: "11px",
                      fontWeight: 600,
                      marginBottom: "2px",
                    }}
                  >
                    Monday morning
                  </div>
                  <div
                    style={{
                      color: "#08111F",
                      fontSize: "15px",
                      fontWeight: 600,
                    }}
                  >
                    Two outcomes
                  </div>
                </div>
              </div>

              {/* Outcome branches */}
              <div className="grid grid-cols-2 gap-4 mt-1">
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "rgba(33,185,133,0.07)",
                    border: "1px solid rgba(33,185,133,0.2)",
                  }}
                >
                  <div className="inline-flex items-center gap-1.5 mb-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#21B985]"
                      style={{ boxShadow: "0 0 6px #21B985" }}
                    />
                    <span
                      className="uppercase tracking-[0.14em]"
                      style={{
                        color: "#0F7A57",
                        fontSize: "9.5px",
                        fontWeight: 700,
                      }}
                    >
                      Follow-up made
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#08111F",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Brief check-in with context from the visit
                  </div>
                  <div
                    style={{
                      color: "#4C5E6F",
                      fontSize: "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    Homeowner remembers the engineer. Job confirmed.
                  </div>
                </div>
                <div
                  className="rounded-xl p-5"
                  style={{
                    background: "#F6FAFC",
                    border: "1px solid #E6EEF3",
                  }}
                >
                  <div className="inline-flex items-center gap-1.5 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3B0]" />
                    <span
                      className="uppercase tracking-[0.14em]"
                      style={{
                        color: "#9CA3B0",
                        fontSize: "9.5px",
                        fontWeight: 700,
                      }}
                    >
                      No contact
                    </span>
                  </div>
                  <div
                    style={{
                      color: "#6F8190",
                      fontSize: "14px",
                      fontWeight: 600,
                      marginBottom: "6px",
                    }}
                  >
                    Quote sits unopened since Friday
                  </div>
                  <div
                    style={{
                      color: "#9CA3B0",
                      fontSize: "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    Homeowner books the plumber who followed up.
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

// ─────────────────────────────────────────────────────────────────────────────
// 06  LOCAL SEARCH
// ─────────────────────────────────────────────────────────────────────────────
function PLLocalSearch() {
  const signals = [
    {
      num: "01",
      title: "Service area precision",
      body: "Specific areas named on the page and in the listing — not just a city. The homeowner searching for a plumber in their street needs to see their neighbourhood confirmed.",
    },
    {
      num: "02",
      title: "Listing consistency",
      body: "Business name, phone, and hours matching across the Google Business Profile, website, and directories. Disagreement between surfaces costs visibility and erodes trust.",
    },
    {
      num: "03",
      title: "Review recency",
      body: "A high average rating from 18 months ago reads differently than one from last week. Recent reviews — placed where someone is deciding, not on a separate page — carry the most weight.",
    },
    {
      num: "04",
      title: "Service page match",
      body: "The listing promises emergency plumbing in the area. The page has to confirm it — with the service, the area, and the trust signals the homeowner needs to make the call.",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-16 items-start">

          {/* ── Left: search moments ── */}
          <div className="col-span-12 lg:col-span-5">
            <div className="section-kicker mb-5" style={{ color: "#6F8190" }}>
              Local search
            </div>
            <h2 style={{ color: "#08111F", marginBottom: "20px" }}>
              The search happens before the call. Local presence decides who
              gets it.
            </h2>
            <p
              style={{
                color: "#4C5E6F",
                fontSize: "17px",
                lineHeight: 1.65,
                marginBottom: "32px",
              }}
            >
              Plumbing searches split into two distinct moments — each driven
              by different urgency, different signals, and a different version
              of local trust.
            </p>

            {/* Emergency search */}
            <div
              className="rounded-2xl border border-[#E6EEF3] p-6 mb-4"
              style={{
                background: "#FAFCFE",
                boxShadow: "0 8px 24px rgba(8,17,31,0.04)",
              }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]"
                  style={{ boxShadow: "0 0 6px #E76F6F" }}
                />
                <span
                  className="uppercase tracking-[0.14em]"
                  style={{
                    color: "#B85C5C",
                    fontSize: "10px",
                    fontWeight: 700,
                  }}
                >
                  Emergency search
                </span>
              </div>
              <div
                className="rounded-lg px-3.5 py-2.5 mb-4 border border-[#E6EEF3] bg-white"
              >
                <span style={{ color: "#4C5E6F", fontSize: "13px" }}>
                  "emergency plumber islington"
                </span>
              </div>
              <p style={{ color: "#4C5E6F", fontSize: "14px", lineHeight: 1.6 }}>
                Fast decision. First relevant result in the local pack wins the
                call. Area coverage, recent reviews, and a clear CTA are the
                deciding factors.
              </p>
            </div>

            {/* Considered search */}
            <div
              className="rounded-2xl border border-[#E6EEF3] p-6"
              style={{
                background: "#FAFCFE",
                boxShadow: "0 8px 24px rgba(8,17,31,0.04)",
              }}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "#14B8A6",
                    boxShadow: "0 0 6px #14B8A6",
                  }}
                />
                <span
                  className="uppercase tracking-[0.14em]"
                  style={{
                    color: "#0E7D8C",
                    fontSize: "10px",
                    fontWeight: 700,
                  }}
                >
                  Considered search
                </span>
              </div>
              <div
                className="rounded-lg px-3.5 py-2.5 mb-4 border border-[#E6EEF3] bg-white"
              >
                <span style={{ color: "#4C5E6F", fontSize: "13px" }}>
                  "boiler replacement quote islington"
                </span>
              </div>
              <p style={{ color: "#4C5E6F", fontSize: "14px", lineHeight: 1.6 }}>
                Multi-day comparison. Review depth, area trust, and service page
                specificity are the deciding factors. Recency of reviews matters
                more than the overall average.
              </p>
            </div>
          </div>

          {/* ── Right: four trust signals ── */}
          <div className="col-span-12 lg:col-span-7 lg:pt-2">
            <div className="space-y-4">
              {signals.map((s) => (
                <div
                  key={s.title}
                  className="flex gap-5 p-6 rounded-2xl border border-[#E6EEF3]"
                  style={{
                    background: "#FAFCFE",
                    boxShadow: "0 8px 24px rgba(8,17,31,0.04)",
                  }}
                >
                  <div className="shrink-0 mt-0.5">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        background: "rgba(20,184,166,0.1)",
                        border: "1px solid rgba(20,184,166,0.2)",
                        color: "#0E7D8C",
                        fontSize: "12px",
                        fontWeight: 700,
                      }}
                    >
                      {s.num}
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        color: "#08111F",
                        fontSize: "16px",
                        fontWeight: 600,
                        marginBottom: "6px",
                      }}
                    >
                      {s.title}
                    </div>
                    <p style={{ color: "#4C5E6F", fontSize: "15px", lineHeight: 1.6 }}>
                      {s.body}
                    </p>
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

// ─────────────────────────────────────────────────────────────────────────────
// 07  PROOF FRAGMENTS
// ─────────────────────────────────────────────────────────────────────────────
function PLProofFragments() {
  const fragments = [
    {
      text: "Turned up when he said he would. Explained the issue before touching anything. Left everything exactly as he found it.",
      job: "Boiler service · N1",
      rotate: "-2deg",
      offsetX: "0px",
    },
    {
      text: "Replied same day. Job done the following morning. No fuss.",
      job: "Emergency call · EC1",
      rotate: "1.5deg",
      offsetX: "48px",
    },
    {
      text: "Gave an honest assessment of the pipe work. Didn't push for a full replacement when a repair was the right call.",
      job: "Leak repair · N5",
      rotate: "-1deg",
      offsetX: "20px",
    },
  ];

  return (
    <section className="section" style={{ background: "#081420" }}>
      <div className="container">
        <div className="grid grid-cols-12 gap-16 items-start">

          {/* ── Left: heading + context ── */}
          <div className="col-span-12 lg:col-span-4">
            <div
              className="section-kicker mb-5"
              style={{ color: "rgba(155,125,224,0.65)" }}
            >
              Reviews &amp; proof
            </div>
            <h2 style={{ color: "white", marginBottom: "20px" }}>
              Good work done. The proof still has to arrive.
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.5)",
                fontSize: "17px",
                lineHeight: 1.65,
                marginBottom: "40px",
              }}
            >
              Plumbing trust is built on specific things: showing up on time,
              explaining the problem honestly, leaving the space clean. Those
              are the things that get reviewed — when asked at the right moment.
            </p>

            <div className="space-y-5">
              {[
                {
                  label: "Ask within 24–48 hours",
                  note: "When the experience is still fresh. Later requests produce weaker responses.",
                },
                {
                  label: "Specific language beats star counts",
                  note: "A review mentioning the engineer's name and the problem outperforms a five-star rating without detail.",
                },
                {
                  label: "Placed beside the decision",
                  note: "Recent reviews near the emergency CTA — not on a separate page nobody reaches.",
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-3 items-start">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{
                      background: "#9B7DE0",
                      boxShadow: "0 0 6px #9B7DE0",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.82)",
                        fontSize: "14.5px",
                        fontWeight: 600,
                        marginBottom: "3px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.38)",
                        fontSize: "13px",
                        lineHeight: 1.55,
                      }}
                    >
                      {item.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: scrap-card fragments ── */}
          <div className="col-span-12 lg:col-span-8">
            <div className="flex flex-col gap-3">
              {fragments.map((f, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-7"
                  style={{
                    background:
                      i === 1
                        ? "rgba(155,125,224,0.05)"
                        : "rgba(155,125,224,0.07)",
                    border: "1px solid rgba(155,125,224,0.18)",
                    transform: `rotate(${f.rotate})`,
                    marginLeft: f.offsetX,
                    position: "relative",
                    zIndex: 3 - i,
                    boxShadow: "0 12px 40px rgba(0,0,0,0.25)",
                  }}
                >
                  <div
                    style={{
                      color: "rgba(155,125,224,0.5)",
                      fontSize: "28px",
                      lineHeight: 1,
                      fontFamily: "Georgia, serif",
                      marginBottom: "12px",
                    }}
                  >
                    "
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "17px",
                      lineHeight: 1.65,
                      fontStyle: "italic",
                    }}
                  >
                    {f.text}
                  </p>
                  <div
                    className="mt-5 pt-4"
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      className="uppercase tracking-[0.14em]"
                      style={{
                        color: "rgba(155,125,224,0.45)",
                        fontSize: "10px",
                        fontWeight: 700,
                      }}
                    >
                      {f.job}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p
              className="mt-6"
              style={{
                color: "rgba(255,255,255,0.22)",
                fontSize: "12px",
                paddingLeft: "8px",
              }}
            >
              Illustrative — review language drawn from what plumbing customers
              commonly say when asked at the right moment
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 08  CTA
// ─────────────────────────────────────────────────────────────────────────────
function PLCta({ onNav }: PlumbingProps) {
  const lookAt = [
    "Service page clarity — area coverage, emergency vs. quote intent",
    "First response — what happens when an emergency call isn't answered",
    "Quote follow-up — the window between survey and decision",
    "Review timing — when proof arrives and where it appears on the page",
  ];

  return (
    <section
      id="cta"
      className="section-tight relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #061323 0%, #071629 60%, #0F1E3C 100%)",
      }}
    >
      {/* Glows */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 8% 50%, #35C7D8 0%, transparent 50%), radial-gradient(ellipse at 92% 50%, #9B7DE0 0%, transparent 50%)",
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative">
        <div className="container">
          <div className="grid grid-cols-12 gap-12 items-start">

            {/* ── Left: headline + CTA ── */}
            <div className="col-span-12 lg:col-span-7">
              <h2
                className="text-white mb-6"
                style={{ lineHeight: 1.06 }}
              >
                Let's look at how your plumbing enquiries are currently handled.
              </h2>
              <p
                className="text-white/60 mb-10 max-w-[500px]"
                style={{ fontSize: "17px", lineHeight: 1.65 }}
              >
                A review of your service pages, first response, quote
                follow-up, and review timing. No pitch. No automated audit.
                No ranking guarantee.
              </p>
              <div className="flex items-center gap-5 flex-wrap">
                <a
                  href="mailto:hello@mindwp.com"
                  className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  Request a website review <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => onNav("sws")}
                  className="text-white/45 hover:text-white/80 transition-colors"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  View Smart Website Systems →
                </button>
              </div>
              <p
                className="mt-5 text-white/28"
                style={{ fontSize: "12.5px" }}
              >
                No hard sell. No ranking guarantee. No automated audit.
              </p>
            </div>

            {/* ── Right: what we look at ── */}
            <div className="col-span-12 lg:col-span-5">
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="uppercase tracking-[0.16em] mb-5"
                  style={{
                    color: "rgba(255,255,255,0.32)",
                    fontSize: "10.5px",
                    fontWeight: 700,
                  }}
                >
                  What we look at
                </div>
                <div className="space-y-4">
                  {lookAt.map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-[#35C7D8]"
                        style={{ boxShadow: "0 0 6px #35C7D8" }}
                      />
                      <span
                        className="text-white/60"
                        style={{ fontSize: "14.5px", lineHeight: 1.55 }}
                      >
                        {item}
                      </span>
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

// ─────────────────────────────────────────────────────────────────────────────
// EXPORT
// ─────────────────────────────────────────────────────────────────────────────
export function Plumbing({ onNav }: PlumbingProps) {
  return (
    <main>
      <PLHero onNav={onNav} />
      <PLPressureMoments />
      <PLServicePage />
      <PLCallGap />
      <PLQuoteWindow />
      <PLLocalSearch />
      <PLProofFragments />
      <PLCta onNav={onNav} />
    </main>
  );
}
