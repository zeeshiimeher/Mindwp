import {
  ArrowRight,
  Compass,
  Layers,
  FileText,
  ShieldCheck,
  Settings,
  Smartphone,
  Sparkles,
  Check,
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
  | "woocommerce";

const ACCENT = "#D63A6D";
const ACCENT_SOFT = "rgba(214,58,109,0.10)";
const ACCENT_BORDER = "rgba(214,58,109,0.30)";

// 01 HERO — centered
function ELMHero({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#1A0A14] via-[#1F0E1A] to-[#3A1530] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #D63A6D 0%, transparent 45%), radial-gradient(ellipse at 80% 90%, #7C2A5E 0%, transparent 50%)",
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
        <div className="mx-auto max-w-[820px] text-center">
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
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#F2B7CC" }}
            >
              Implementation pathway · Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: "-0.022em" }}>
            Elementor done with structure,
            <br />
            <span className="text-white/45">not just style.</span>
          </h1>

          <p
            className="mt-8 mx-auto text-white/70"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "640px" }}
          >
            From a design file or an existing Elementor site, MindWP builds
            responsive, editable Elementor pages that hold the visitor's
            decision — not template defaults that ship in the box.
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#1A0A14] hover:bg-[#FCE9F0] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Review my website system
              <ArrowRight size={16} />
            </a>
            <button
              onClick={() => onNav("sws")}
              className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
              style={{ fontSize: "14px", fontWeight: 500 }}
            >
              See Smart Website Systems
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 flex-wrap">
            {[
              { l: "Elementor builds", c: "#D63A6D" },
              { l: "Existing-site cleanup", c: "#F2B7CC" },
              { l: "Design-to-page translation", c: "#9B7DE0" },
              { l: "Responsive correction", c: "#35C7D8" },
            ].map((x) => (
              <span
                key={x.l}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/12 bg-white/[0.03]"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: x.c, boxShadow: `0 0 8px ${x.c}` }}
                />
                <span
                  className="text-white/80"
                  style={{ fontSize: "12.5px", fontWeight: 500 }}
                >
                  {x.l}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 02 ELEMENTOR PAGE AUDIT STRIP — clean inspector findings
function ELMAuditStrip() {
  const findings = [
    {
      area: "Looks fine",
      issue:
        "The page is polished on first read. Template defaults, stock hero, calm spacing — nothing obviously wrong, nothing that earns the next step.",
      tag: "TEMPLATE",
      tone: "#0468A8",
      verdict: "WEAK",
    },
    {
      area: "Editing is messy",
      issue:
        "Global styling missing. Widgets nested deep inside columns. The team is scared to update a heading in case the layout shifts.",
      tag: "EDITING",
      tone: "#9A6F12",
      verdict: "WEAK",
    },
    {
      area: "Mobile breaks",
      issue:
        "Desktop reads. Mobile shifts, overlaps, and hides the next step behind a button the visitor will not find.",
      tag: "RESPONSIVE",
      tone: "#5E36AB",
      verdict: "FAIL",
    },
    {
      area: "Addons carry too much",
      issue:
        "Third-party widget packs and stacked plugins do most of the visual work. A widget upgrade can take the page with it.",
      tag: "BLOAT",
      tone: "#B23B3B",
      verdict: "WEAK",
    },
    {
      area: "Page does not sell",
      issue:
        "Service or treatment body reads as generic copy. Nothing names what makes this business specific. Trust sits on a separate page.",
      tag: "PAGE-CRAFT",
      tone: "#0E7D8C",
      verdict: "FAIL",
    },
    {
      area: "CTA & form path unclear",
      issue:
        "One generic 'Contact Us' on every page. Same form catches every kind of enquiry — quote, callback, booking — without context attached.",
      tag: "CTA",
      tone: "#0F7A57",
      verdict: "FAIL",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: ACCENT }}
          >
            Elementor page audit
          </div>
          <h2 className="text-[#08111F]">
            The page looks fine.{" "}
            <span className="text-[#4C5E6F]">It still goes quiet.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            Six findings we typically flag on an Elementor site arriving for
            review. Each one familiar. None of them about the work the
            business actually does.
          </p>
        </div>

        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{
            border: "1px solid #E6EEF3",
            boxShadow: "0 20px 48px rgba(8,17,31,0.06)",
          }}
        >
          <div
            className="flex items-center justify-between gap-3 px-6 lg:px-8 py-4 border-b"
            style={{
              borderColor: "#EEF3F6",
              background: "linear-gradient(180deg, #FCF1F5 0%, #FFFFFF 100%)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
              />
              <span
                className="uppercase tracking-[0.14em]"
                style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
              >
                Audit · service or treatment page
              </span>
            </div>
            <span
              className="text-[#6F8190] uppercase tracking-[0.14em] tabular-nums"
              style={{ fontSize: "10.5px", fontWeight: 700 }}
            >
              06 findings flagged
            </span>
          </div>

          <ul>
            {findings.map((f, i) => (
              <li
                key={f.area}
                className={`grid grid-cols-12 gap-4 lg:gap-6 px-6 lg:px-8 py-5 ${
                  i < findings.length - 1 ? "border-b border-[#EEF3F6]" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-1 flex md:block items-center gap-3">
                  <span
                    className="text-[#9CA3B0] tabular-nums"
                    style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em" }}
                  >
                    F{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <div
                    className="text-[#08111F]"
                    style={{ fontSize: "14.5px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    {f.area}
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 mt-2 px-2 py-0.5 rounded-md uppercase tracking-[0.14em]"
                    style={{
                      fontSize: "9.5px",
                      fontWeight: 700,
                      color: f.tone,
                      background: `${f.tone}10`,
                      border: `1px solid ${f.tone}30`,
                    }}
                  >
                    {f.tag}
                  </span>
                </div>
                <p
                  className="col-span-12 md:col-span-6 text-[#4C5E6F]"
                  style={{ fontSize: "13.5px", lineHeight: 1.6 }}
                >
                  {f.issue}
                </p>
                <div className="col-span-12 md:col-span-2 flex md:justify-end items-start">
                  <span
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full uppercase tracking-[0.18em]"
                    style={{
                      fontSize: "9.5px",
                      fontWeight: 700,
                      color: f.verdict === "FAIL" ? "#B23B3B" : "#9A6F12",
                      background: f.verdict === "FAIL" ? "#FDECEC" : "#FCF5E2",
                      border: `1px solid ${
                        f.verdict === "FAIL" ? "#F0CACA" : "#F0DBC8"
                      }`,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: f.verdict === "FAIL" ? "#B23B3B" : "#9A6F12",
                      }}
                    />
                    {f.verdict}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div
            className="px-6 lg:px-8 py-5 border-t bg-[#FAFBFC]"
            style={{ borderColor: "#EEF3F6" }}
          >
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: "13px", lineHeight: 1.6 }}
            >
              <span className="text-[#08111F] font-semibold">
                None of these are bugs.
              </span>{" "}
              They are page-craft decisions that template defaults could not
              make for the business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03 ELEMENTOR BUILD DONE RIGHT
function ELMBuildDoneRight() {
  const rows = [
    {
      label: "Theme builder, not page builder",
      note: "Headers, footers, archives, service-page templates — built once at the theme level so every page inherits the structure.",
      icon: Layers,
    },
    {
      label: "Custom widgets where they earn their place",
      note: "Reusable widgets for credentials, area cues, trust bands, and CTAs — written for the business, not the marketplace.",
      icon: Sparkles,
    },
    {
      label: "Global parts for the editing team",
      note: "Sections the team edits in one place and updates everywhere — service area lists, opening notes, repeat trust signals.",
      icon: Settings,
    },
    {
      label: "Performance pruning",
      note: "Widget audit, plugin discipline, image handling, and conditional loading so the page does not arrive a megabyte late.",
      icon: Compass,
    },
    {
      label: "Accessibility as default, not afterthought",
      note: "Heading structure, focus order, contrast, and keyboard paths handled at build time — not bolted on later.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Elementor build done right
            </div>
            <h2 className="text-[#08111F]">
              The same tool.{" "}
              <span className="text-[#4C5E6F]">
                Used like the team will keep editing it for years.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Elementor is a tool. The way it is set up decides whether the
              site stays sharp, stays editable, and stays fast — or quietly
              decays. These are the parts we hold to.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{ border: "1px solid #E6EEF3", boxShadow: "0 10px 28px rgba(8,17,31,0.05)" }}
        >
          {rows.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={r.label}
                className={`flex items-start gap-5 lg:gap-7 px-6 lg:px-8 py-6 ${
                  i < rows.length - 1 ? "border-b border-[#EEF3F6]" : ""
                }`}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: ACCENT_SOFT,
                    border: `1px solid ${ACCENT_BORDER}`,
                    color: ACCENT,
                  }}
                >
                  <Icon size={17} />
                </div>
                <div className="flex-1 grid grid-cols-12 gap-5">
                  <div className="col-span-12 md:col-span-4">
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.012em" }}
                    >
                      {r.label}
                    </div>
                  </div>
                  <div
                    className="col-span-12 md:col-span-8 text-[#4C5E6F]"
                    style={{ fontSize: "13.5px", lineHeight: 1.65 }}
                  >
                    {r.note}
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

// 04 DESIGN FILE → ELEMENTOR STRUCTURE → LIVE PAGE — translation path
function ELMDesignToLive() {
  const stages = [
    {
      n: "01",
      tag: "Design file",
      icon: FileText,
      tone: "#9B7DE0",
      tint: "#F5F1FC",
      title: "Figma, XD, or sketch",
      what: "Visual decisions — colour, type, spacing, hierarchy.",
      decisions: [
        "What sells the page above the fold",
        "Where trust sits beside the action",
        "What the next step is at the end of the page",
      ],
      output: "A clear page intent — not a pixel-only mockup brief.",
    },
    {
      n: "02",
      tag: "Elementor structure",
      icon: Layers,
      tone: ACCENT,
      tint: "#FCF1F5",
      title: "Templates, globals, widgets",
      what: "Page-craft translation — not pixel translation.",
      decisions: [
        "Theme-builder templates over one-off page builds",
        "Global widgets the team edits in one place",
        "Reusable patterns per service or treatment page",
      ],
      output: "A site the team can edit without breaking the structure.",
    },
    {
      n: "03",
      tag: "Live page",
      icon: Smartphone,
      tone: "#0F7A57",
      tint: "#F1F8F4",
      title: "Service, treatment, area pages",
      what: "What visitors actually use, on the device they arrive on.",
      decisions: [
        "Mobile breakpoints that keep the next step visible",
        "Trust placed beside the call to action",
        "CTA written for the page intent, not a global default",
      ],
      output: "A page that does the work, not just shows the brand.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            Design to live page
          </div>
          <h2 className="text-[#08111F]">
            Design file → Elementor structure → live page.{" "}
            <span className="text-[#4C5E6F]">Not pixel translation.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            The same design file turns into very different live pages
            depending on what gets decided at each handoff. Three stages.
            Three different decisions to make well.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {stages.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="relative flex">
                <div
                  className="flex-1 rounded-2xl bg-white overflow-hidden flex flex-col"
                  style={{
                    border: "1px solid #E6EEF3",
                    boxShadow: "0 10px 28px rgba(8,17,31,0.05)",
                  }}
                >
                  <div
                    className="px-6 py-5 border-b"
                    style={{
                      borderColor: "#EEF3F6",
                      background: `linear-gradient(180deg, ${s.tint} 0%, #FFFFFF 100%)`,
                    }}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span
                        className="text-[#9CA3B0] tabular-nums"
                        style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.14em" }}
                      >
                        STAGE {s.n}
                      </span>
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: `${s.tone}14`,
                          border: `1px solid ${s.tone}33`,
                          color: s.tone,
                        }}
                      >
                        <Icon size={16} />
                      </div>
                    </div>
                    <div
                      className="uppercase tracking-[0.16em]"
                      style={{ color: s.tone, fontSize: "10.5px", fontWeight: 700 }}
                    >
                      {s.tag}
                    </div>
                    <div
                      className="mt-1 text-[#08111F]"
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        letterSpacing: "-0.012em",
                        lineHeight: 1.3,
                      }}
                    >
                      {s.title}
                    </div>
                    <p
                      className="mt-2 text-[#4C5E6F]"
                      style={{ fontSize: "13px", lineHeight: 1.55 }}
                    >
                      {s.what}
                    </p>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div
                      className="uppercase tracking-[0.14em] mb-3"
                      style={{ fontSize: "10px", fontWeight: 700, color: "#6F8190" }}
                    >
                      Decisions made here
                    </div>
                    <ul className="space-y-2.5 flex-1">
                      {s.decisions.map((d) => (
                        <li key={d} className="flex items-start gap-2.5">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                            style={{ background: s.tone }}
                          />
                          <span
                            className="text-[#08111F]"
                            style={{ fontSize: "13px", lineHeight: 1.55, fontWeight: 500 }}
                          >
                            {d}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="mt-5 pt-4 text-[#4C5E6F]"
                      style={{
                        borderTop: `1px dashed ${s.tone}30`,
                        fontSize: "12.5px",
                        lineHeight: 1.55,
                        fontStyle: "italic",
                      }}
                    >
                      → {s.output}
                    </div>
                  </div>
                </div>
                {i < stages.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 rounded-full bg-white items-center justify-center z-10"
                    style={{
                      border: "1px solid #E6EEF3",
                      boxShadow: "0 4px 12px rgba(8,17,31,0.08)",
                    }}
                  >
                    <ArrowRight size={14} className="text-[#6F8190]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 05 ROUTE FORK — Clean up / Rebuild inside / Build clean
function ELMOptions() {
  const routes = [
    {
      tag: "Clean up",
      tone: "#0E7D8C",
      tint: "#EEF7F8",
      condition: "Structure still holds",
      title: "Clean up the Elementor build",
      summary:
        "Tactical pass on the existing site — globals, mobile, plugin and widget audit, performance. The bones stay.",
    },
    {
      tag: "Rebuild inside",
      tone: ACCENT,
      tint: "#FCF1F5",
      condition: "Page craft is the problem",
      title: "Rebuild the pages inside Elementor",
      summary:
        "Same tool, different structure. Theme-builder templates, global widgets, and page bodies redone.",
      highlighted: true,
    },
    {
      tag: "Build clean",
      tone: "#9A6F12",
      tint: "#FCF5E2",
      condition: "Existing build is too messy",
      title: "Start clean from the design",
      summary:
        "When the inherited Elementor build cannot be saved — start from the design or brief, build clean, migrate the content that earns its place.",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            Route fork
          </div>
          <h2 className="text-[#08111F]">
            Clean up, rebuild inside,{" "}
            <span className="text-[#4C5E6F]">or build clean.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Cleanup is not always right. Sometimes the page craft has to
            start over inside Elementor. Sometimes the existing build is too
            messy to save and a clean start is the honest answer.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Start node */}
          <div className="flex justify-center mb-2">
            <div
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full"
              style={{
                background: "#1A0A14",
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: `0 12px 28px rgba(26,10,20,0.20)`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
              />
              <span
                className="uppercase tracking-[0.18em]"
                style={{ fontSize: "10.5px", fontWeight: 700, color: "#F2B7CC" }}
              >
                What's the state of the Elementor build?
              </span>
            </div>
          </div>

          {/* Connector SVG */}
          <div className="relative h-12">
            <svg
              viewBox="0 0 600 48"
              preserveAspectRatio="none"
              className="absolute inset-0 w-full h-full hidden md:block"
              aria-hidden="true"
            >
              <path
                d="M 300 0 L 300 16 Q 300 24 292 24 L 108 24 Q 100 24 100 32 L 100 48"
                fill="none"
                stroke={ACCENT_BORDER}
                strokeWidth="1.5"
              />
              <path
                d="M 300 0 L 300 48"
                fill="none"
                stroke={ACCENT_BORDER}
                strokeWidth="1.5"
              />
              <path
                d="M 300 0 L 300 16 Q 300 24 308 24 L 492 24 Q 500 24 500 32 L 500 48"
                fill="none"
                stroke={ACCENT_BORDER}
                strokeWidth="1.5"
              />
            </svg>
            <div className="md:hidden absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px" style={{background: ACCENT_BORDER}} />
          </div>

          {/* Routes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
            {routes.map((r) => {
              const isHighlighted = !!r.highlighted;
              return (
                <div
                  key={r.tag}
                  className="relative rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: `linear-gradient(180deg, #FFFFFF 0%, ${r.tint} 100%)`,
                    border: `1px solid ${isHighlighted ? ACCENT_BORDER : "#E6EEF3"}`,
                    boxShadow: isHighlighted
                      ? `0 20px 44px ${ACCENT_SOFT}`
                      : "0 8px 22px rgba(8,17,31,0.05)",
                  }}
                >
                  <div
                    className="px-5 py-3 border-b flex items-center justify-between gap-2"
                    style={{ borderColor: `${r.tone}22`, background: `${r.tone}08` }}
                  >
                    <span
                      className="uppercase tracking-[0.16em]"
                      style={{ fontSize: "10px", fontWeight: 700, color: r.tone }}
                    >
                      {r.tag}
                    </span>
                    {isHighlighted && (
                      <span
                        className="uppercase tracking-[0.14em] tabular-nums"
                        style={{ fontSize: "9px", fontWeight: 700, color: ACCENT }}
                      >
                        Most common
                      </span>
                    )}
                  </div>
                  <div className="p-5 lg:p-6 flex-1 flex flex-col">
                    <div
                      className="inline-flex items-center gap-2 mb-3"
                      style={{ fontSize: "11.5px", color: r.tone, fontWeight: 600 }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: r.tone }}
                      />
                      If: {r.condition}
                    </div>
                    <div
                      className="text-[#08111F] mb-3"
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        letterSpacing: "-0.012em",
                        lineHeight: 1.3,
                      }}
                    >
                      {r.title}
                    </div>
                    <p
                      className="text-[#4C5E6F] flex-1"
                      style={{ fontSize: "13px", lineHeight: 1.6 }}
                    >
                      {r.summary}
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

// 06 BRIEF-READINESS CHECKLIST — what we need before the build starts
function ELMBriefReadiness() {
  const brief = [
    {
      label: "Design file or existing page",
      note: "Figma, XD, PSD, sketch, or a live page to rebuild. Either works — bring what you have.",
    },
    {
      label: "Desktop / tablet / mobile expectations",
      note: "How the page should behave on the device most visitors arrive on — not just the desktop pixel.",
    },
    {
      label: "Brand assets, fonts, icons",
      note: "Logo files, brand colours, type files or sources, icon set. Whatever is missing, we will flag.",
    },
    {
      label: "Current content state",
      note: "Service or treatment copy, photos, products. Drafts welcome — we will name what needs rewriting.",
    },
    {
      label: "Form & CTA requirements per page",
      note: "What each page should ask for — quote, consultation, booking, callback — and where it goes after.",
    },
    {
      label: "Editable areas — what the team owns",
      note: "Which sections the team needs to edit after launch, and which should be protected from a routine update.",
    },
  ];
  const checks = [
    {
      label: "Responsive plan, not just a desktop pixel",
      note: "How sections re-flow at mobile, tablet, and where the next step has to stay visible.",
    },
    {
      label: "Editable structure scope",
      note: "Which fields are plain, which globals propagate, which parts stay under the bonnet.",
    },
    {
      label: "Plugin & widget discipline",
      note: "Only what earns its place. Third-party add-ons audited, not inherited.",
    },
    {
      label: "Performance budget",
      note: "Image handling, conditional loading, theme weight — checked against the budget before launch.",
    },
    {
      label: "SEO basics — titles, meta, headings",
      note: "Structure that does not have to be retro-fitted after the design lands.",
    },
    {
      label: "Trust placed beside the decision",
      note: "Reviews, credentials, finished work — placed where the visitor is actually deciding.",
    },
    {
      label: "What can still be challenged in the brief",
      note: "Anything in the design that would weaken the page craft — flagged before build, not after.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            Before the Elementor build starts
          </div>
          <h2 className="text-[#08111F]">
            What we need from you,{" "}
            <span className="text-[#4C5E6F]">and what we check on our side.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            A clean handoff prevents a messy build. What a builder-ready brief
            looks like — and what we will be checking before the first
            section gets shipped.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div
            className="col-span-12 lg:col-span-6 relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #FCF1F5 100%)",
              border: `1px solid ${ACCENT_BORDER}`,
              boxShadow: `0 18px 44px ${ACCENT_SOFT}`,
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: ACCENT }}
            />
            <div className="p-7 lg:p-8">
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: ACCENT_SOFT,
                    border: `1px solid ${ACCENT_BORDER}`,
                    color: ACCENT,
                  }}
                >
                  <FileText size={16} />
                </div>
                <div>
                  <div
                    className="uppercase tracking-[0.16em]"
                    style={{ color: ACCENT, fontSize: "10.5px", fontWeight: 700 }}
                  >
                    Builder-ready brief
                  </div>
                  <div
                    className="text-[#08111F] mt-1"
                    style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    What you bring
                  </div>
                </div>
              </div>
              <ul>
                {brief.map((b, i) => (
                  <li
                    key={b.label}
                    className="py-3"
                    style={
                      i < brief.length - 1
                        ? { borderBottom: "1px dashed #F0DBE3" }
                        : { paddingBottom: 0 }
                    }
                  >
                    <div className="flex items-start gap-3">
                      <Check
                        size={13}
                        strokeWidth={3}
                        className="shrink-0 mt-1"
                        style={{ color: ACCENT }}
                      />
                      <div>
                        <div
                          className="text-[#08111F]"
                          style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: 1.4 }}
                        >
                          {b.label}
                        </div>
                        <p
                          className="mt-0.5 text-[#4C5E6F]"
                          style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                        >
                          {b.note}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className="mt-5 pt-4 text-[#6F8190]"
                style={{
                  borderTop: "1px solid #F0DBE3",
                  fontSize: "12px",
                  lineHeight: 1.55,
                  fontStyle: "italic",
                }}
              >
                Anything missing, we will list it — and recommend what we
                need before scoping the build.
              </div>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-6 relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FA 100%)",
              border: "1px solid #DDE2E8",
              boxShadow: "0 12px 32px rgba(8,17,31,0.05)",
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: "#0E2740" }}
            />
            <div className="p-7 lg:p-8">
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(14,39,64,0.08)",
                    border: "1px solid rgba(14,39,64,0.20)",
                    color: "#0E2740",
                  }}
                >
                  <Settings size={16} />
                </div>
                <div>
                  <div
                    className="uppercase tracking-[0.16em]"
                    style={{ color: "#0E2740", fontSize: "10.5px", fontWeight: 700 }}
                  >
                    What we check on our side
                  </div>
                  <div
                    className="text-[#08111F] mt-1"
                    style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    Before the first section ships
                  </div>
                </div>
              </div>
              <ul>
                {checks.map((c, i) => (
                  <li
                    key={c.label}
                    className="py-3"
                    style={
                      i < checks.length - 1
                        ? { borderBottom: "1px dashed #E6EAEF" }
                        : { paddingBottom: 0 }
                    }
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                        style={{ background: "#0E2740" }}
                      />
                      <div>
                        <div
                          className="text-[#08111F]"
                          style={{ fontSize: "13.5px", fontWeight: 600, lineHeight: 1.4 }}
                        >
                          {c.label}
                        </div>
                        <p
                          className="mt-0.5 text-[#4C5E6F]"
                          style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                        >
                          {c.note}
                        </p>
                      </div>
                    </div>
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

// 07 CTA
function ELMCta({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section id="cta" className="section bg-page-white">
      <div className="container">
        <div className="relative rounded-[24px] overflow-hidden p-12 lg:p-20"
          style={{ background: "linear-gradient(160deg, #1A0A14 0%, #3A1530 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #D63A6D 0%, transparent 45%), radial-gradient(circle at 90% 20%, #7C2A5E 0%, transparent 45%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div className="relative mx-auto max-w-[820px] text-center">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 mb-8"
              style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.16em" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 8px ${ACCENT}` }}
              />
              <span className="text-white/85 uppercase">Start with a review</span>
            </div>
            <h2 className="text-white">
              The tool is not the answer.{" "}
              <span className="text-white/55">
                The structure of the page is.
              </span>
            </h2>
            <p
              className="mt-6 text-white/65 mx-auto"
              style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}
            >
              We look at the existing Elementor site, the service or treatment
              pages, the responsive behaviour, and the next-step paths —
              together, in a working session. You walk away with a short list
              of what to fix first.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-white text-[#1A0A14] hover:bg-[#FCE9F0] rounded-full px-7 py-4 transition-colors"
                style={{ fontSize: "15px", fontWeight: 600 }}
              >
                Review my website system
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => onNav("sws")}
                className="inline-flex items-center gap-2 text-white/85 hover:text-white border-b border-white/25 pb-1"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                <Compass size={14} />
                See Smart Website Systems
              </button>
            </div>

            <div
              className="mt-6 text-white/45"
              style={{ fontSize: "12.5px" }}
            >
              No template marketplace pitch. No automated audit. No guarantees.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Elementor({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <ELMHero onNav={onNav} />
      <ELMAuditStrip />
      <ELMBuildDoneRight />
      <ELMDesignToLive />
      <ELMOptions />
      <ELMBriefReadiness />
      <ELMCta onNav={onNav} />
    </main>
  );
}
