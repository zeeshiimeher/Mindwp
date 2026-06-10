import {
  ArrowRight,
  PhoneMissed,
  Phone,
  FileText,
  MapPin,
  Star,
  CheckCircle2,
  UserCheck,
  Users,
  User,
  Building2,
  Search,
  Wind,
  Droplets,
  Home as HomeIcon,
  HardHat,
  TreePine,
  Waves,
  RefreshCw,
  Layers,
  Compass,
  ClipboardList,
} from "lucide-react";

type Page =
  | "home"
  | "sws"
  | "lsa"
  | "ai-lead-handling"
  | "follow-up-crm"
  | "reviews"
  | "industries"
  | "landscaping"
  | "fitness-case"
  | "resource"
  | "blog"
  | "wordpress"
  | "elementor"
  | "bricks"
  | "divi"
  | "rebuild"
  | "woocommerce"
  | "home-services"
  | "plumbing";

const ACCENT = "#14B8A6";
const ACCENT_SOFT = "rgba(20,184,166,0.10)";
const ACCENT_BORDER = "rgba(20,184,166,0.30)";
const CYAN = "#35C7D8";

// 01 HERO — split 7/5 with working-day dispatch board
function HSHero({ onNav }: { onNav: (p: Page) => void }) {
  const board = [
    { icon: PhoneMissed, tone: "#E76F6F", label: "Missed call", sub: "Rang while on a job", tag: "No callback owner" },
    { icon: FileText, tone: "#F4B740", label: "Quote request", sub: "Form sitting in the inbox", tag: "Awaiting owner" },
    { icon: MapPin, tone: CYAN, label: "Service-area check", sub: "Asking if you cover the area", tag: "Page unclear" },
    { icon: Star, tone: "#21B985", label: "Finished job", sub: "Customer happy, work done", tag: "Review not asked" },
    { icon: RefreshCw, tone: ACCENT, label: "Quote follow-up", sub: "Sent three days ago", tag: "Next step unowned" },
  ];

  return (
    <section className="section-hero relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 78% 18%, #14B8A6 0%, transparent 52%), radial-gradient(ellipse at 8% 92%, #35C7D8 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative container">
        <div className="grid grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-7">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8"
              style={{ border: `1px solid ${ACCENT_BORDER}`, background: ACCENT_SOFT }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
              />
              <span
                className="uppercase tracking-[0.2em]"
                style={{ fontSize: "10.5px", fontWeight: 700, color: "#9FE6DD" }}
              >
                Home Services · Connected handling
              </span>
            </div>

            <h1 className="text-white" style={{ letterSpacing: "-0.03em" }}>
              Home-service work comes in
              <br />
              as calls, quotes and area questions.{" "}
              <span className="text-white/45">
                Too much of it slips before anyone owns the next step.
              </span>
            </h1>

            <p
              className="mt-8 text-white/70"
              style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "600px" }}
            >
              Field trades win work across nearby search, the service page, the
              first call, the quote, and the follow-up that turns a finished job
              into proof. MindWP builds the website and the handling path so the
              enquiry has somewhere to land — and someone to own it.
            </p>

            <div className="mt-10 flex items-center gap-7 flex-wrap">
              <a
                href="#cta"
                className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                style={{ fontSize: "15px", fontWeight: 600 }}
              >
                Review my home-service website and handling path
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => onNav("sws")}
                className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                View Smart Website Systems
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="mt-12 flex items-center gap-2 flex-wrap">
              {[
                { l: "Calls missed mid-job", c: "#E76F6F" },
                { l: "Quotes not owned", c: "#F4B740" },
                { l: "Service area unclear", c: CYAN },
              ].map((x) => (
                <span
                  key={x.l}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }}
                  />
                  <span className="text-white/80" style={{ fontSize: "12.5px", fontWeight: 500 }}>
                    {x.l}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — dispatch board */}
          <div className="col-span-12 lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6">
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-white/8">
                <div>
                  <div
                    className="text-white/45 uppercase tracking-[0.16em]"
                    style={{ fontSize: "10px", fontWeight: 700 }}
                  >
                    Field desk · today
                  </div>
                  <div className="text-white mt-1" style={{ fontSize: "17px", fontWeight: 600 }}>
                    Work coming in
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-[#F4B740]"
                  style={{ fontSize: "11px", fontWeight: 600 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F4B740]" /> 5 unowned
                </span>
              </div>

              <div className="space-y-2.5">
                {board.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.label}
                      className="flex items-center gap-3 px-3.5 py-3 rounded-lg border border-white/8 bg-white/[0.02]"
                    >
                      <span
                        className="w-9 h-9 rounded-md flex items-center justify-center shrink-0"
                        style={{
                          background: `${b.tone}1F`,
                          border: `1px solid ${b.tone}55`,
                          color: b.tone,
                        }}
                      >
                        <Icon size={15} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="text-white" style={{ fontSize: "12.5px", fontWeight: 600 }}>
                          {b.label}
                        </div>
                        <div className="text-white/50 truncate" style={{ fontSize: "11px" }}>
                          {b.sub}
                        </div>
                      </div>
                      <span
                        className="shrink-0 px-2 py-1 rounded-md whitespace-nowrap"
                        style={{
                          background: `${b.tone}14`,
                          border: `1px solid ${b.tone}3A`,
                          color: b.tone,
                          fontSize: "9.5px",
                          fontWeight: 700,
                        }}
                      >
                        {b.tag}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 pt-4 border-t border-white/8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
                <span className="text-white/55" style={{ fontSize: "11.5px", lineHeight: 1.4 }}>
                  Each one needs a page, a route, and an owner.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 02 FIELD-WORK REALITY — horizontal working-day timeline
function HSFieldReality() {
  const moments = [
    {
      time: "08:20",
      icon: Phone,
      accent: "#0E7D8C",
      soft: "#EEF7F8",
      border: "#C6E8EF",
      label: "Calls arrive mid-job",
      note: "The phone rings on the way to a site, hands full, no way to take details. The caller tries the next result.",
    },
    {
      time: "11:45",
      icon: FileText,
      accent: "#0468A8",
      soft: "#EEF4FA",
      border: "#C8DAEC",
      label: "Quote requests stack up",
      note: "Three forms in by lunch. They sit in an inbox until the evening — by then two have asked someone else.",
    },
    {
      time: "19:30",
      icon: PhoneMissed,
      accent: "#B23B3B",
      soft: "#FDECEC",
      border: "#F0CACA",
      label: "After-hours enquiry missed",
      note: "An urgent job comes in after the van is parked. No after-hours route, so the work is gone by morning.",
    },
    {
      time: "Fri",
      icon: Star,
      accent: "#0F7A57",
      soft: "#E8F4ED",
      border: "#BCE0CD",
      label: "Finished job, no proof",
      note: "A clean job, a happy customer — and nobody asks for the review that would have won the next three.",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="max-w-[840px]">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Field-work reality
          </div>
          <h2 className="text-[#08111F]">
            The work rarely arrives{" "}
            <span className="text-[#4C5E6F]">when anyone is at a desk.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F]"
            style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            A home-service day is not office hours. Enquiries land between jobs,
            after hours, and on the drive home — the exact moments a website and
            a handling path have to carry, because nobody is sitting by the phone.
          </p>
        </div>

        <div className="relative">
          {/* rail behind cards, centered on the icon row */}
          <div className="hidden lg:block absolute top-[46px] left-[8%] right-[8%] h-px bg-gradient-to-r from-[#14B8A6]/10 via-[#14B8A6]/30 to-[#14B8A6]/10 pointer-events-none" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 relative">
            {moments.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.time}
                  className="rounded-2xl bg-white border border-[#E6EEF3] p-6"
                  style={{ boxShadow: "0 10px 28px rgba(8,17,31,0.05)" }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <span
                      className="w-12 h-12 rounded-xl flex items-center justify-center relative z-10"
                      style={{ background: m.soft, border: `1px solid ${m.border}`, color: m.accent }}
                    >
                      <Icon size={18} />
                    </span>
                    <span
                      className="tabular-nums mt-1.5"
                      style={{ color: m.accent, fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.08em" }}
                    >
                      {m.time}
                    </span>
                  </div>
                  <div
                    className="text-[#08111F] mb-2.5"
                    style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.012em", lineHeight: 1.25 }}
                  >
                    {m.label}
                  </div>
                  <p className="text-[#4C5E6F]" style={{ fontSize: "13px", lineHeight: 1.6 }}>
                    {m.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-start gap-3 max-w-[720px]">
          <span
            className="w-2 h-2 rounded-full mt-2 shrink-0"
            style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
          />
          <p className="text-[#08111F]" style={{ fontSize: "15.5px", lineHeight: 1.6 }}>
            <span className="font-semibold">None of this is a lead problem.</span>{" "}
            <span className="text-[#4C5E6F]">
              The work is arriving. It just has nowhere reliable to land and
              nobody assigned to carry it forward.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// 03 OPERATING SHAPES — 3-column premium comparison
function HSOperatingShapes() {
  const shapes = [
    {
      icon: User,
      tone: "#0E7D8C",
      tag: "Owner-led trade",
      headline: "The owner is the business.",
      intake: "Calls, quotes and scheduling all run through one phone — the owner's.",
      loses:
        "When the owner is under a sink or up a ladder, the enquiry waits. The bottleneck is one person who cannot be in two places.",
    },
    {
      icon: Users,
      tone: ACCENT,
      tag: "Office-supported field team",
      headline: "Someone answers. Then it scatters.",
      intake: "An office or admin takes the call, then hands it to whichever crew is free.",
      loses:
        "The handoff is where it slips — a quote promised, a callback half-noted, a follow-up that depends on someone remembering.",
      highlighted: true,
    },
    {
      icon: Building2,
      tone: "#0468A8",
      tag: "Multi-service local company",
      headline: "Several trades, one front door.",
      intake: "HVAC, plumbing, electrical — different work arriving through one brand and one website.",
      loses:
        "The site cannot tell which service the visitor needs, so every enquiry lands in the same generic form and the urgent ones look like the routine ones.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="max-w-[840px]">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Operating shapes
          </div>
          <h2 className="text-[#08111F]">
            Home-service businesses lose work{" "}
            <span className="text-[#4C5E6F]">in different shapes.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F]"
            style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            How an enquiry gets dropped depends on how the business is run. Three
            common shapes — each with its own gap between work coming in and work
            being owned.
          </p>
        </div>

        <div
          className="rounded-[24px] bg-white border border-[#E6EEF3] overflow-hidden"
          style={{ boxShadow: "0 20px 56px rgba(8,17,31,0.06)" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#EEF3F6]">
            {shapes.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.tag}
                  className="p-8 lg:p-9 flex flex-col"
                  style={s.highlighted ? { background: "linear-gradient(180deg, #F4FBFA 0%, #FFFFFF 100%)" } : undefined}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${s.tone}14`, border: `1px solid ${s.tone}3A`, color: s.tone }}
                    >
                      <Icon size={18} />
                    </div>
                    <span
                      className="uppercase tracking-[0.14em]"
                      style={{ color: s.tone, fontSize: "10.5px", fontWeight: 700 }}
                    >
                      {s.tag}
                    </span>
                  </div>

                  <div
                    className="text-[#08111F] mb-5"
                    style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.015em", lineHeight: 1.25 }}
                  >
                    {s.headline}
                  </div>

                  <div className="mb-5">
                    <div
                      className="uppercase tracking-[0.14em] mb-2"
                      style={{ fontSize: "9.5px", fontWeight: 700, color: "#9CA3B0" }}
                    >
                      How work comes in
                    </div>
                    <p className="text-[#4C5E6F]" style={{ fontSize: "13.5px", lineHeight: 1.6 }}>
                      {s.intake}
                    </p>
                  </div>

                  <div className="mt-auto pt-5 border-t border-[#EEF3F6]">
                    <div
                      className="uppercase tracking-[0.14em] mb-2 flex items-center gap-1.5"
                      style={{ fontSize: "9.5px", fontWeight: 700, color: "#B23B3B" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E76F6F]" />
                      Where it loses work
                    </div>
                    <p className="text-[#08111F]" style={{ fontSize: "13.5px", lineHeight: 1.6, fontWeight: 500 }}>
                      {s.loses}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// 04 WHERE WORK SLIPS — connected horizontal path-map with slip callouts
function HSSlipPath() {
  const steps = [
    { n: "01", icon: Search, label: "Local search", slip: "Weak local trust", tone: "#E76F6F" },
    { n: "02", icon: FileText, label: "Service page", slip: "Unclear what you cover", tone: "#F4B740" },
    { n: "03", icon: Phone, label: "Call or form", slip: "Missed-call delay", tone: "#E76F6F" },
    { n: "04", icon: ClipboardList, label: "Quote", slip: "Quote not owned", tone: "#F4B740" },
    { n: "05", icon: RefreshCw, label: "Follow-up", slip: "Nobody chases", tone: "#E76F6F" },
    { n: "06", icon: Star, label: "Review", slip: "Proof not returned", tone: "#F4B740" },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="max-w-[840px]">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Where work slips
          </div>
          <h2 className="text-[#08111F]">
            Six steps from nearby search to repeat customer.{" "}
            <span className="text-[#4C5E6F]">Each one is a place to lose the job.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F]"
            style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            The path a home-service enquiry travels is short and well-worn. The
            losses are predictable — and they are rarely about the trade itself.
          </p>
        </div>

        <div
          className="rounded-[24px] bg-gradient-to-br from-[#F9FCFD] via-white to-[#F4FBFC] border border-[#E6EEF3] p-7 lg:p-12 relative overflow-hidden"
          style={{ boxShadow: "0 20px 56px rgba(8,17,31,0.06)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.45] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle, #D8E6EE 1px, transparent 1px)", backgroundSize: "26px 26px" }}
          />

          <div className="relative">
            {/* connector line */}
            <div className="hidden lg:block absolute top-[34px] left-[8%] right-[8%] h-px bg-gradient-to-r from-[#14B8A6]/15 via-[#14B8A6]/35 to-[#14B8A6]/15 pointer-events-none" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-3.5 relative">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.n} className="flex flex-col items-center text-center">
                    <div
                      className="w-[68px] h-[68px] rounded-2xl bg-white flex items-center justify-center relative z-10"
                      style={{ border: "1px solid #E6EEF3", boxShadow: "0 8px 20px rgba(8,17,31,0.06)" }}
                    >
                      <Icon size={22} style={{ color: "#0E2740" }} />
                      <span
                        className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center tabular-nums"
                        style={{ background: ACCENT, color: "#fff", fontSize: "10px", fontWeight: 700, boxShadow: "0 0 0 2px #fff" }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div
                      className="mt-4 text-[#08111F]"
                      style={{ fontSize: "13.5px", fontWeight: 700, letterSpacing: "-0.01em" }}
                    >
                      {s.label}
                    </div>
                    <div
                      className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{ background: `${s.tone}14`, border: `1px solid ${s.tone}3A` }}
                    >
                      <span className="w-1 h-1 rounded-full" style={{ background: s.tone }} />
                      <span style={{ color: s.tone, fontSize: "10px", fontWeight: 700 }}>{s.slip}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-11 pt-7 border-t border-[#E6EEF3] text-center">
              <p className="text-[#08111F] mx-auto max-w-[680px]" style={{ fontSize: "15.5px", lineHeight: 1.65 }}>
                <span className="font-semibold">Fix one step and the next still leaks.</span>{" "}
                <span className="text-[#4C5E6F]">
                  The path only holds when the page, the response, and the
                  follow-up are built to hand the enquiry along.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05 FIVE SYSTEMS — flagship hub (SWS lead + 4 connected protections)
function HSFiveSystems({ onNav }: { onNav: (p: Page) => void }) {
  const protections = [
    {
      icon: MapPin,
      tone: "#0E7D8C",
      label: "Local SEO Authority",
      note: "Named service areas and local trust so nearby searches find you before the next result.",
      navTo: "lsa" as Page,
    },
    {
      icon: Phone,
      tone: "#F4B740",
      label: "Lead Response & Handling",
      note: "First response and missed-call recovery, so a call taken mid-job is not a job lost.",
      navTo: "ai-lead-handling" as Page,
    },
    {
      icon: RefreshCw,
      tone: "#21B985",
      label: "Follow-Up & CRM",
      note: "A quote becomes an owned next step on a schedule — not a note someone hopes to remember.",
      navTo: "follow-up-crm" as Page,
    },
    {
      icon: Star,
      tone: "#9B7DE0",
      label: "Reputation & Review Systems",
      note: "Finished jobs turned into the recent local proof the next customer checks first.",
      navTo: "reviews" as Page,
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="max-w-[840px] mx-auto text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Five systems for home services
          </div>
          <h2 className="text-[#08111F]">
            One system leads.{" "}
            <span className="text-[#4C5E6F]">Four protect the work around it.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            The website is the hub a home-service enquiry lands on. Four connected
            systems make sure it is found, answered, followed up, and proven.
          </p>
        </div>

        {/* FLAGSHIP */}
        <div className="grid grid-cols-12 gap-5 lg:gap-6">
          <div className="col-span-12">
            <button
              onClick={() => onNav("sws")}
              className="w-full text-left rounded-[22px] relative overflow-hidden group"
              style={{ background: "linear-gradient(135deg, #061323 0%, #0E2740 55%, #103E5A 100%)" }}
            >
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{ backgroundImage: "radial-gradient(ellipse at 85% 30%, #35C7D8 0%, transparent 55%)" }}
              />
              <div className="relative p-8 lg:p-10 grid grid-cols-12 gap-6 items-center">
                <div className="col-span-12 lg:col-span-8">
                  <div className="flex items-center gap-2.5 mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(53,199,216,0.14)", border: "1px solid rgba(53,199,216,0.4)" }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: CYAN, boxShadow: `0 0 6px ${CYAN}` }} />
                      <span className="uppercase tracking-[0.16em]" style={{ color: CYAN, fontSize: "9.5px", fontWeight: 700 }}>
                        The flagship · the hub
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: "rgba(53,199,216,0.12)", border: "1px solid rgba(53,199,216,0.35)", color: CYAN }}
                    >
                      <Layers size={20} />
                    </div>
                    <div className="text-white" style={{ fontSize: "26px", fontWeight: 700, letterSpacing: "-0.02em" }}>
                      Smart Website Systems
                    </div>
                  </div>
                  <p className="text-white/65" style={{ fontSize: "15px", lineHeight: 1.6, maxWidth: "560px" }}>
                    The service pages, the enquiry capture, and the structure that
                    routes an urgent job differently from a routine one. Everything
                    else connects to this.
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-4 lg:text-right">
                  <span
                    className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 group-hover:gap-3 transition-all"
                    style={{ fontSize: "14px", fontWeight: 600 }}
                  >
                    View Smart Website Systems
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* CONNECTOR */}
        <div className="relative h-7 -my-2">
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
            style={{ backgroundImage: "linear-gradient(to bottom, #BFE0E4, transparent)" }}
          />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white border border-[#E6EEF3]"
          >
            <span className="uppercase tracking-[0.18em]" style={{ fontSize: "9px", fontWeight: 700, color: "#6F8190" }}>
              Connects to
            </span>
          </div>
        </div>

        {/* FOUR PROTECTIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {protections.map((p) => {
            const Icon = p.icon;
            return (
              <button
                key={p.label}
                onClick={() => onNav(p.navTo)}
                className="text-left rounded-2xl bg-white p-7 relative group hover:shadow-lg transition-all"
                style={{ border: "1px solid #E6EEF3", borderTop: `3px solid ${p.tone}`, boxShadow: "0 10px 28px rgba(8,17,31,0.05)" }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${p.tone}14`, border: `1px solid ${p.tone}3A`, color: p.tone }}
                  >
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <div
                      className="text-[#08111F] mb-1.5"
                      style={{ fontSize: "16.5px", fontWeight: 700, letterSpacing: "-0.012em" }}
                    >
                      {p.label}
                    </div>
                    <p className="text-[#4C5E6F] mb-3.5" style={{ fontSize: "13.5px", lineHeight: 1.6 }}>
                      {p.note}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                      style={{ color: p.tone, fontSize: "12px", fontWeight: 600 }}
                    >
                      View system
                      <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 06 TRADE CARDS — six trades, only Plumbing links
function HSTradeCards({ onNav }: { onNav: (p: Page) => void }) {
  const trades = [
    {
      icon: Wind,
      tone: "#0E7D8C",
      name: "HVAC",
      friction: "Seasonal spikes flood the phone, and the urgent no-heat call looks like every other enquiry.",
      chips: ["Seasonal demand", "Urgent vs routine", "Maintenance plans"],
      live: false,
    },
    {
      icon: Droplets,
      tone: "#1E73C8",
      name: "Plumbing",
      friction: "Emergency calls and quote requests arrive on the same form, handled at the same speed.",
      chips: ["Emergency calls", "Quote follow-up", "Local trust"],
      live: true,
    },
    {
      icon: HomeIcon,
      tone: "#9A6F12",
      name: "Roofing",
      friction: "High-value quotes go out and then go quiet — nobody owns the chase on a five-figure job.",
      chips: ["Big-ticket quotes", "Storm-season surges", "Proof matters"],
      live: false,
    },
    {
      icon: HardHat,
      tone: "#5E6B7A",
      name: "Foundation Repair",
      friction: "A worried homeowner researches for weeks; the site never earns enough trust to get the call.",
      chips: ["Long consideration", "Trust-heavy", "Inspection booking"],
      live: false,
    },
    {
      icon: Waves,
      tone: "#0F7A57",
      name: "Septic Services",
      friction: "Routine pumping and genuine emergencies share one inbox, so the urgent ones wait their turn.",
      chips: ["Routine + urgent", "Service-area bound", "Repeat schedule"],
      live: false,
    },
    {
      icon: TreePine,
      tone: "#3F8C5C",
      name: "Tree Service",
      friction: "Storm work needs a fast quote and a faster yes — the slow website loses it to whoever answers first.",
      chips: ["Storm response", "On-site quotes", "Fast turnaround"],
      live: false,
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="max-w-[840px]">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Trades we build for
          </div>
          <h2 className="text-[#08111F]">
            Every trade loses work{" "}
            <span className="text-[#4C5E6F]">at a slightly different moment.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F]"
            style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            The handling path is the same shape across home services, but the
            pressure point shifts by trade. Plumbing has a detailed page today —
            the rest are on the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {trades.map((t) => {
            const Icon = t.icon;
            const Tag = t.live ? "button" : "div";
            return (
              <Tag
                key={t.name}
                {...(t.live ? { onClick: () => onNav("plumbing") } : {})}
                className={`text-left rounded-2xl bg-white overflow-hidden flex flex-col h-full ${
                  t.live ? "group hover:shadow-lg transition-all cursor-pointer" : ""
                }`}
                style={{
                  border: `1px solid ${t.live ? ACCENT_BORDER : "#E6EEF3"}`,
                  boxShadow: t.live ? "0 16px 40px rgba(20,184,166,0.12)" : "0 10px 28px rgba(8,17,31,0.05)",
                }}
              >
                <div className="h-1" style={{ background: t.tone }} aria-hidden="true" />
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ background: `${t.tone}14`, border: `1px solid ${t.tone}3A`, color: t.tone }}
                    >
                      <Icon size={20} />
                    </div>
                    {t.live ? (
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                        style={{ background: ACCENT_SOFT, border: `1px solid ${ACCENT_BORDER}` }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
                        <span className="uppercase tracking-[0.12em]" style={{ color: "#0E7D8C", fontSize: "9px", fontWeight: 700 }}>
                          Page ready
                        </span>
                      </span>
                    ) : (
                      <span
                        className="uppercase tracking-[0.12em] px-2.5 py-1 rounded-full bg-[#F4F6F8] border border-[#E6EEF3]"
                        style={{ color: "#9CA3B0", fontSize: "9px", fontWeight: 700 }}
                      >
                        Overview in progress
                      </span>
                    )}
                  </div>

                  <div
                    className="text-[#08111F] mb-3"
                    style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.015em" }}
                  >
                    {t.name}
                  </div>
                  <p className="text-[#4C5E6F] mb-5" style={{ fontSize: "13.5px", lineHeight: 1.6 }}>
                    {t.friction}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {t.chips.map((c) => (
                      <span
                        key={c}
                        className="px-2.5 py-1 rounded-md bg-[#F6FAFC] border border-[#E6EEF3] text-[#4C5E6F]"
                        style={{ fontSize: "11px", fontWeight: 500 }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-[#EEF3F6]">
                    {t.live ? (
                      <span
                        className="inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all"
                        style={{ color: ACCENT, fontSize: "13px", fontWeight: 600 }}
                      >
                        View the plumbing page
                        <ArrowRight size={13} />
                      </span>
                    ) : (
                      <span className="text-[#9CA3B0]" style={{ fontSize: "12.5px", fontWeight: 500 }}>
                        Detailed overview coming soon
                      </span>
                    )}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 07 EXAMPLE PATH — positive staged journey (dark panel, the mirror of §4)
function HSExamplePath() {
  const stages = [
    { n: "01", icon: Search, label: "Nearby search", owner: "Local SEO", status: "Found in the area" },
    { n: "02", icon: FileText, label: "Service page", owner: "Website", status: "Right service, right area" },
    { n: "03", icon: Phone, label: "Call or form", owner: "Lead Response", status: "Answered or recovered" },
    { n: "04", icon: ClipboardList, label: "Quote owned", owner: "Follow-Up", status: "Assigned, dated" },
    { n: "05", icon: RefreshCw, label: "Follow-up", owner: "CRM", status: "Chased on schedule" },
    { n: "06", icon: Star, label: "Review & proof", owner: "Reputation", status: "Job becomes proof" },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="max-w-[840px]">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Example path
          </div>
          <h2 className="text-[#08111F]">
            What it looks like{" "}
            <span className="text-[#4C5E6F]">when the path holds.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F]"
            style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            The same six steps — but now each one has an owner and a status. An
            enquiry is handed cleanly from search to proof, with nothing waiting
            on someone to remember.
          </p>
        </div>

        <div
          className="rounded-[24px] relative overflow-hidden p-8 lg:p-12"
          style={{ background: "linear-gradient(135deg, #061323 0%, #0B1E33 55%, #103E5A 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="relative">
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#21B985", boxShadow: "0 0 8px #21B985" }} />
              <span className="uppercase tracking-[0.18em]" style={{ color: "#7FE3C0", fontSize: "10.5px", fontWeight: 700 }}>
                Enquiry handed along · nothing dropped
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {stages.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.n}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <span
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(53,199,216,0.10)", border: "1px solid rgba(53,199,216,0.28)", color: CYAN }}
                      >
                        <Icon size={16} />
                      </span>
                      <span className="tabular-nums text-white/35" style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}>
                        {s.n}
                      </span>
                    </div>
                    <div className="text-white mb-3" style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: 1.25 }}>
                      {s.label}
                    </div>
                    <div className="mt-auto space-y-2">
                      <div className="flex items-center gap-1.5">
                        <UserCheck size={11} style={{ color: ACCENT }} />
                        <span className="text-white/55" style={{ fontSize: "10.5px", fontWeight: 600 }}>
                          {s.owner}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={11} style={{ color: "#21B985" }} />
                        <span className="text-white/75" style={{ fontSize: "10.5px" }}>
                          {s.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-start gap-3">
              <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }} />
              <p className="text-white/80" style={{ fontSize: "14.5px", lineHeight: 1.6 }}>
                <span className="font-semibold text-white">Same work, same trade.</span>{" "}
                The difference is that every step has somewhere to land and someone to carry it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 08 FINAL CTA — dark card + right checklist
function HSCta({ onNav }: { onNav: (p: Page) => void }) {
  const checklist = [
    "Whether your service pages match how people search",
    "How visible you are for nearby work today",
    "What happens to a call taken mid-job",
    "Whether quotes get an owned follow-up",
    "Whether finished jobs turn into reviews",
  ];

  return (
    <section id="cta" className="section bg-page-white">
      <div className="container">
        <div className="relative rounded-[24px] overflow-hidden p-12 lg:p-16" style={{ background: "linear-gradient(160deg, #061323 0%, #103E5A 100%)" }}>
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 18% 82%, #14B8A6 0%, transparent 45%), radial-gradient(circle at 92% 18%, #35C7D8 0%, transparent 45%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="relative grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-8"
                style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.16em" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }} />
                <span className="text-white/85 uppercase">Start with a review</span>
              </div>
              <h2 className="text-white">
                Find where home-service enquiries{" "}
                <span className="text-white/55">are slipping.</span>
              </h2>
              <p className="mt-6 text-white/65" style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}>
                We look at the website and the handling path together — the
                service pages, local visibility, the missed call, the quote
                follow-up, and the review — and show you the first place work is
                getting lost.
              </p>

              <div className="mt-9 flex items-center gap-4 flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  Review my home-service website and handling path
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => onNav("sws")}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
                  style={{ fontSize: "14px", fontWeight: 500 }}
                >
                  <Compass size={14} />
                  View Smart Website Systems
                </button>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-7">
                <div className="text-white/45 uppercase tracking-[0.14em] mb-5" style={{ fontSize: "10.5px", fontWeight: 700 }}>
                  What we look at
                </div>
                <div className="space-y-3.5">
                  {checklist.map((t) => (
                    <div key={t} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#35C7D8] shrink-0 shadow-[0_0_6px_#35C7D8]" />
                      <span className="text-white/85" style={{ fontSize: "13.5px", lineHeight: 1.45 }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-white/10 text-white/45" style={{ fontSize: "12px", lineHeight: 1.55 }}>
                  No guaranteed rankings. No template pitch. Just where the work is going.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomeServices({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <HSHero onNav={onNav} />
      <HSFieldReality />
      <HSOperatingShapes />
      <HSSlipPath />
      <HSFiveSystems onNav={onNav} />
      <HSTradeCards onNav={onNav} />
      <HSExamplePath />
      <HSCta onNav={onNav} />
    </main>
  );
}
