import {
  ArrowRight,
  Compass,
  Layers,
  Boxes,
  Gauge,
  Code2,
  Repeat,
  Minus,
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

const ACCENT = "#E8843F";
const ACCENT_SOFT = "rgba(232,132,63,0.10)";
const ACCENT_BORDER = "rgba(232,132,63,0.32)";

// 01 HERO — centered
function BRHero({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#1A0E06] via-[#221408] to-[#3A1F0F] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #E8843F 0%, transparent 45%), radial-gradient(ellipse at 80% 90%, #B25E20 0%, transparent 50%)",
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
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#F2C99F" }}
            >
              Implementation pathway · Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: "-0.022em" }}>
            Bricks Builder for
            <br />
            <span className="text-white/45">serious service-page craft.</span>
          </h1>

          <p
            className="mt-8 mx-auto text-white/70"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "640px" }}
          >
            Performance-aware. Clean markup. Component-driven. Bricks builds
            the kind of WordPress site that stays fast, stays editable, and
            holds its structure as the business grows.
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#1A0E06] hover:bg-[#FBEDDD] rounded-full px-7 py-4 transition-colors"
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
              { l: "Bricks build", c: "#E8843F" },
              { l: "Component classes", c: "#F2C99F" },
              { l: "Dynamic content", c: "#9B7DE0" },
              { l: "Performance-aware", c: "#35C7D8" },
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

// 02 WHY BRICKS — three considerations
function BRWhy() {
  const items = [
    {
      n: "01",
      icon: Gauge,
      tone: "#E8843F",
      title: "Performance the page actually feels",
      body:
        "Cleaner markup, fewer dependencies, conditional loading — pages that load fast on the device most visitors arrive on, not just on a fibre line.",
    },
    {
      n: "02",
      icon: Boxes,
      tone: "#0E7D8C",
      title: "Components that hold their shape",
      body:
        "Global classes, reusable component instances, and a real design system inside Bricks — so a change made once propagates everywhere it should.",
    },
    {
      n: "03",
      icon: Code2,
      tone: "#0F7A57",
      title: "Professional control without bolt-ons",
      body:
        "Custom queries, dynamic content, structured data, and template hierarchies the team does not have to install a third-party plugin to reach.",
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
            Why Bricks for established service businesses & specialist clinics
          </div>
          <h2 className="text-[#08111F]">
            The builder is the means.{" "}
            <span className="text-[#4C5E6F]">
              The page craft is the outcome.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Bricks is chosen where performance matters, where the build needs
            to stay clean for years, and where the team — or the next agency —
            should be able to read what was made.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.n}
                className="rounded-2xl bg-white overflow-hidden h-full flex flex-col"
                style={{
                  border: "1px solid #E6EEF3",
                  boxShadow: "0 10px 28px rgba(8,17,31,0.05)",
                }}
              >
                <div className="h-1" style={{ background: r.tone }} aria-hidden="true" />
                <div className="p-7 flex-1 flex flex-col">
                  <div className="flex items-start justify-between mb-6">
                    <span
                      className="text-[#9CA3B0] tabular-nums"
                      style={{ fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.06em" }}
                    >
                      {r.n}
                    </span>
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${r.tone}10`,
                        border: `1px solid ${r.tone}33`,
                        color: r.tone,
                      }}
                    >
                      <Icon size={18} />
                    </div>
                  </div>
                  <div
                    className="text-[#08111F] mb-3"
                    style={{
                      fontSize: "18.5px",
                      fontWeight: 700,
                      letterSpacing: "-0.012em",
                      lineHeight: 1.25,
                    }}
                  >
                    {r.title}
                  </div>
                  <p className="text-[#4C5E6F]" style={{ fontSize: "13.5px", lineHeight: 1.65 }}>
                    {r.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 03 BRICKS BUILD APPROACH — class/component tree, balanced + business-meaning
function BRApproach() {
  const tiers = [
    {
      tier: "Tier 01",
      label: "Global classes",
      businessMeaning:
        "The design system. Brand decisions live here — edit once, applied everywhere.",
      items: [
        { kind: "class", name: "type/scale" },
        { kind: "class", name: "color/tokens" },
        { kind: "class", name: "spacing" },
        { kind: "class", name: "container" },
        { kind: "class", name: "section-rhythm" },
      ],
    },
    {
      tier: "Tier 02",
      label: "Components",
      businessMeaning:
        "The building blocks. Each one owns one purpose on a service or treatment page.",
      items: [
        { kind: "component", name: "Service hero", uses: ["type/scale", "container"] },
        { kind: "component", name: "Trust band", uses: ["color/tokens", "spacing"] },
        { kind: "component", name: "Intent CTA", uses: ["color/tokens", "section-rhythm"] },
        { kind: "component", name: "Area card", uses: ["type/scale", "spacing"] },
        { kind: "component", name: "Review snippet", uses: ["color/tokens", "spacing"] },
      ],
    },
    {
      tier: "Tier 03",
      label: "Pages",
      businessMeaning:
        "The working surfaces visitors actually use. Compose from components — never from scratch.",
      items: [
        { kind: "page", name: "Service page" },
        { kind: "page", name: "Treatment page" },
        { kind: "page", name: "Service-area page" },
        { kind: "page", name: "Landing page" },
      ],
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
            Bricks build approach
          </div>
          <h2 className="text-[#08111F]">
            Classes hold the design.{" "}
            <span className="text-[#4C5E6F]">
              Components hold the meaning. Pages hold the work.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            A three-tier build that is honest about what each tier owns —
            and what changes when you edit at that level.
          </p>
        </div>

        <div
          className="rounded-[24px] bg-white p-7 lg:p-10 relative overflow-hidden"
          style={{ border: "1px solid #E6EEF3", boxShadow: "0 20px 56px rgba(8,17,31,0.06)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #6F8190 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-start">
            {tiers.map((t, ti) => (
              <div key={t.tier} className="lg:col-span-4 relative">
                <div className="mb-4">
                  <div className="flex items-baseline justify-between gap-2 mb-1.5">
                    <span
                      className="uppercase tracking-[0.16em]"
                      style={{ fontSize: "10px", fontWeight: 700, color: ACCENT }}
                    >
                      {t.tier}
                    </span>
                    <span
                      className="tabular-nums uppercase tracking-[0.14em]"
                      style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3B0" }}
                    >
                      {t.items.length} items
                    </span>
                  </div>
                  <div
                    className="text-[#08111F]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      letterSpacing: "-0.012em",
                    }}
                  >
                    {t.label}
                  </div>
                  <p
                    className="mt-1.5 text-[#4C5E6F]"
                    style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                  >
                    {t.businessMeaning}
                  </p>
                </div>

                <div className="space-y-2">
                  {t.items.map((it: any) => {
                    if (it.kind === "class") {
                      return (
                        <div
                          key={it.name}
                          className="rounded-md px-3 py-2.5"
                          style={{
                            background: ACCENT_SOFT,
                            border: `1px solid ${ACCENT_BORDER}`,
                          }}
                        >
                          <span
                            className="font-mono"
                            style={{
                              fontSize: "12px",
                              color: "#8A4A18",
                              fontWeight: 600,
                            }}
                          >
                            .{it.name}
                          </span>
                        </div>
                      );
                    }
                    if (it.kind === "component") {
                      return (
                        <div
                          key={it.name}
                          className="rounded-lg p-3"
                          style={{
                            background: "#F9FCFD",
                            border: "1px solid #E6EEF3",
                          }}
                        >
                          <div
                            className="text-[#08111F]"
                            style={{ fontSize: "13px", fontWeight: 700 }}
                          >
                            {it.name}
                          </div>
                          {it.uses && (
                            <div className="mt-1.5 flex flex-wrap gap-1.5">
                              {it.uses.map((u: string) => (
                                <span
                                  key={u}
                                  className="font-mono px-1.5 py-0.5 rounded"
                                  style={{
                                    background: ACCENT_SOFT,
                                    color: "#8A4A18",
                                    fontSize: "10px",
                                    fontWeight: 600,
                                  }}
                                >
                                  .{u}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    return (
                      <div
                        key={it.name}
                        className="rounded-md px-3 py-2.5 flex items-center justify-between"
                        style={{ background: "#08111F", color: "#FFFFFF" }}
                      >
                        <span style={{ fontSize: "13px", fontWeight: 600 }}>
                          {it.name}
                        </span>
                        <span
                          style={{
                            fontSize: "10px",
                            color: "rgba(255,255,255,0.45)",
                            letterSpacing: "0.14em",
                          }}
                        >
                          PAGE
                        </span>
                      </div>
                    );
                  })}
                </div>

                {ti < tiers.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 w-7 h-7 rounded-full items-center justify-center z-10"
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #E6EEF3",
                      boxShadow: "0 4px 10px rgba(8,17,31,0.06)",
                    }}
                  >
                    <ArrowRight size={12} className="text-[#9CA3B0]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            className="relative mt-9 pt-7 border-t border-[#EEF3F6] grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {[
              {
                head: "Edit a class",
                tail: "Every component using it updates.",
              },
              {
                head: "Refine a component",
                tail: "Every page composed from it updates.",
              },
              {
                head: "Ship a new page",
                tail: "Same components, same design — no copy-paste.",
              },
            ].map((rule) => (
              <div key={rule.head} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full"
                  style={{ background: ACCENT, boxShadow: `0 0 5px ${ACCENT}` }}
                />
                <div>
                  <span
                    className="text-[#08111F]"
                    style={{ fontSize: "13.5px", fontWeight: 700 }}
                  >
                    {rule.head} →
                  </span>{" "}
                  <span
                    className="text-[#4C5E6F]"
                    style={{ fontSize: "13.5px", lineHeight: 1.55 }}
                  >
                    {rule.tail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 04 BRICKS BUILD SYSTEM — five disciplines a serious Bricks build holds
function BRBuildSystem() {
  const disciplines = [
    {
      tag: "01",
      icon: Layers,
      tone: "#E8843F",
      tint: "#FBEDDD",
      label: "Base styles",
      definition:
        "Type, colour, spacing and rhythm — defined once at the class layer, applied everywhere they belong.",
      example: "Edit a colour token → every component using it updates.",
    },
    {
      tag: "02",
      icon: Boxes,
      tone: "#9A6F12",
      tint: "#FCF5E2",
      label: "Reusable components",
      definition:
        "Hero, trust band, intent CTA, area card — one component, one purpose, many uses.",
      example: "Refine the trust band → every page carrying it updates.",
    },
    {
      tag: "03",
      icon: Code2,
      tone: "#0E7D8C",
      tint: "#EEF7F8",
      label: "Dynamic content",
      definition:
        "Service, treatment and area pages populated from structured queries — not pasted prose.",
      example: "Add a treatment in the admin → page generates with the same structure.",
    },
    {
      tag: "04",
      icon: Repeat,
      tone: "#0F7A57",
      tint: "#E5F4EC",
      label: "Service templates",
      definition:
        "Per-intent page templates — service, treatment, area, landing — each composed from components.",
      example: "Treatment template change rolls to every treatment page.",
    },
    {
      tag: "05",
      icon: Gauge,
      tone: "#5E36AB",
      tint: "#F0EBFB",
      label: "Performance discipline",
      definition:
        "Image handling, conditional loading, plugin restraint, clean markup — discipline, not luck.",
      example: "Mobile load stays inside budget on the device most visitors arrive on.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Bricks build system
            </div>
            <h2 className="text-[#08111F]">
              Five disciplines{" "}
              <span className="text-[#4C5E6F]">
                a serious Bricks build holds together.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Bricks does not make these decisions for you. The discipline of
              how the build is set up is what makes Bricks worth the
              migration — or makes it noise.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {disciplines.map((d) => {
            const Icon = d.icon;
            return (
              <div
                key={d.tag}
                className="relative rounded-2xl overflow-hidden bg-white flex flex-col"
                style={{
                  border: "1px solid #E6EEF3",
                  boxShadow: "0 8px 22px rgba(8,17,31,0.05)",
                }}
              >
                <div
                  className="px-5 py-4 border-b"
                  style={{
                    borderColor: "#EEF3F6",
                    background: `linear-gradient(180deg, ${d.tint} 0%, #FFFFFF 100%)`,
                  }}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className="tabular-nums uppercase tracking-[0.14em]"
                      style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3B0" }}
                    >
                      Discipline {d.tag}
                    </span>
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${d.tone}14`,
                        border: `1px solid ${d.tone}33`,
                        color: d.tone,
                      }}
                    >
                      <Icon size={15} />
                    </div>
                  </div>
                  <div
                    className="text-[#08111F]"
                    style={{
                      fontSize: "15.5px",
                      fontWeight: 700,
                      letterSpacing: "-0.012em",
                      lineHeight: 1.3,
                    }}
                  >
                    {d.label}
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <p
                    className="text-[#4C5E6F] flex-1"
                    style={{ fontSize: "12.5px", lineHeight: 1.6 }}
                  >
                    {d.definition}
                  </p>
                  <div
                    className="mt-4 pt-4 text-[#08111F]"
                    style={{
                      borderTop: `1px dashed ${d.tone}33`,
                      fontSize: "12px",
                      lineHeight: 1.55,
                      fontStyle: "italic",
                    }}
                  >
                    → {d.example}
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

// 05 FROM DESIGN FILE TO BRICKS STRUCTURE — build pipeline
function BRDesignToBricks() {
  const stages = [
    {
      n: "01",
      label: "Design file or brief",
      note: "Figma, XD, sketch, or an existing site to rebuild. The input — not yet a page.",
    },
    {
      n: "02",
      label: "Global styles",
      note: "Type scale, colour tokens, spacing, container, section rhythm — set once at the class layer.",
    },
    {
      n: "03",
      label: "Reusable components",
      note: "Hero, trust band, intent CTA, area card — each one purpose, composed from globals.",
    },
    {
      n: "04",
      label: "Templates",
      note: "Service, treatment, area, landing — per-intent page templates built from components.",
    },
    {
      n: "05",
      label: "Dynamic content (where useful)",
      note: "Structured queries for the pages that need to scale — areas, treatments, products.",
    },
    {
      n: "06",
      label: "Editable page assembly",
      note: "The team composes pages from templates and components. No copy-paste. No layout drift.",
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
            From design file to Bricks structure
          </div>
          <h2 className="text-[#08111F]">
            A design file is not a website yet.{" "}
            <span className="text-[#4C5E6F]">
              This is how it becomes a maintainable Bricks build.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Six steps from the brief or the screen to a live build the team
            can run. Same pipeline for a Figma file or a site we are
            rebuilding from scratch.
          </p>
        </div>

        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{
            border: "1px solid #E6EEF3",
            boxShadow: "0 14px 36px rgba(8,17,31,0.05)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
            {stages.map((s, i) => (
              <div
                key={s.n}
                className={`relative p-5 lg:p-6 ${
                  i < stages.length - 1
                    ? "border-b lg:border-b-0 lg:border-r border-[#EEF3F6]"
                    : ""
                }`}
                style={
                  i === 0
                    ? { background: `linear-gradient(180deg, ${ACCENT_SOFT} 0%, #FFFFFF 100%)` }
                    : undefined
                }
              >
                <div className="flex items-baseline justify-between mb-3">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-md tabular-nums"
                    style={{
                      background: i === 0 ? ACCENT : "#1A0E06",
                      color: i === 0 ? "#FFFFFF" : ACCENT,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                    }}
                  >
                    {s.n}
                  </span>
                  {i < stages.length - 1 && (
                    <span
                      className="hidden lg:inline text-[#9CA3B0]"
                      aria-hidden="true"
                    >
                      <ArrowRight size={13} />
                    </span>
                  )}
                </div>
                <div
                  className="text-[#08111F] mb-2"
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "-0.012em",
                    lineHeight: 1.3,
                  }}
                >
                  {s.label}
                </div>
                <p
                  className="text-[#4C5E6F]"
                  style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                >
                  {s.note}
                </p>
              </div>
            ))}
          </div>
          <div
            className="px-6 lg:px-8 py-5 border-t bg-[#FAFBFC]"
            style={{ borderColor: "#EEF3F6" }}
          >
            <p
              className="text-[#4C5E6F]"
              style={{ fontSize: "13px", lineHeight: 1.6 }}
            >
              <span className="text-[#08111F] font-semibold">
                Migration note:
              </span>{" "}
              Sometimes Bricks is the right move. Sometimes the current
              builder is familiar enough and the real problem is structure,
              not platform. Both answers are honest — and shown in the next
              section.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06 BRICKS IS RIGHT WHEN / NOT THE POINT WHEN
function BRFit() {
  const rightWhen = [
    "Performance matters and the team feels the page speed daily",
    "Service or treatment pages need to scale to many variants without copy-paste",
    "A move from another builder is on the table for the right reasons",
    "The team values clean markup and what the next agency will read",
    "Long-term build quality outweighs launch-day familiarity",
    "The site has to hold its shape under real operating growth",
  ];
  const notThePointWhen = [
    "The real problem is page craft or writing — Bricks will not fix it",
    "The current site does the job and a builder switch slows the team down",
    "The need is trust placement or strategy, not technical control",
    "A one-off landing page in isolation",
    "Cheapest-possible Bricks dev for a template install",
    "EMR, clinical compliance, or treatment-outcome claims",
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            When to pick Bricks
          </div>
          <h2 className="text-[#08111F]">
            Bricks is right when —{" "}
            <span className="text-[#4C5E6F]">
              and not the point when.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Some briefs the platform decision really is the lever. Others, the
            work is elsewhere and Bricks will not move it. Naming which is
            true is part of the conversation.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div
            className="col-span-12 lg:col-span-6 relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #FCF1E6 100%)",
              border: `1px solid ${ACCENT_BORDER}`,
              boxShadow: `0 18px 44px ${ACCENT_SOFT}`,
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: ACCENT }}
            />
            <div className="p-8 lg:p-9">
              <div className="flex items-start gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: ACCENT_SOFT,
                    border: `1px solid ${ACCENT_BORDER}`,
                    color: ACCENT,
                  }}
                >
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <div
                    className="uppercase tracking-[0.16em]"
                    style={{ color: ACCENT, fontSize: "10.5px", fontWeight: 700 }}
                  >
                    Bricks is right when
                  </div>
                  <div
                    className="text-[#08111F] mt-1"
                    style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    The build really is the lever
                  </div>
                </div>
              </div>
              <ul>
                {rightWhen.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3.5"
                    style={
                      i < rightWhen.length - 1
                        ? { borderBottom: "1px dashed #F0DBC8" }
                        : { paddingBottom: 0 }
                    }
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                      style={{
                        background: ACCENT,
                        boxShadow: `0 0 6px ${ACCENT}`,
                      }}
                    />
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: "14px", lineHeight: 1.55, fontWeight: 500 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-6 relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #FAFBFC 100%)",
              border: "1px solid #DDE2E8",
              boxShadow: "0 12px 32px rgba(8,17,31,0.05)",
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: "linear-gradient(180deg, #9CA3B0, #6F8190)" }}
            />
            <div className="p-8 lg:p-9">
              <div className="flex items-start gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(111,129,144,0.10)",
                    border: "1px solid rgba(111,129,144,0.35)",
                    color: "#6F8190",
                  }}
                >
                  <Minus size={16} strokeWidth={3} />
                </div>
                <div>
                  <div
                    className="uppercase tracking-[0.16em]"
                    style={{ color: "#6F8190", fontSize: "10.5px", fontWeight: 700 }}
                  >
                    Bricks is not the point when
                  </div>
                  <div
                    className="text-[#08111F] mt-1"
                    style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    The lever is somewhere else
                  </div>
                </div>
              </div>
              <ul>
                {notThePointWhen.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3.5"
                    style={
                      i < notThePointWhen.length - 1
                        ? { borderBottom: "1px dashed #E6EAEF" }
                        : { paddingBottom: 0 }
                    }
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3B0] shrink-0 mt-2" />
                    <span
                      className="text-[#4C5E6F]"
                      style={{ fontSize: "14px", lineHeight: 1.55 }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 pt-5 text-[#6F8190]"
                style={{ borderTop: "1px solid #E6EAEF", fontSize: "12px", lineHeight: 1.55, fontStyle: "italic" }}
              >
                We will tell you so early. Bricks is not always the move.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 07 CTA
function BRCta({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section id="cta" className="section bg-page-white">
      <div className="container">
        <div className="relative rounded-[24px] overflow-hidden p-12 lg:p-20"
          style={{ background: "linear-gradient(160deg, #1A0E06 0%, #3A1F0F 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #E8843F 0%, transparent 45%), radial-gradient(circle at 90% 20%, #B25E20 0%, transparent 45%)",
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
              A serious build deserves a serious read.{" "}
              <span className="text-white/55">
                Not a templated quote.
              </span>
            </h2>
            <p
              className="mt-6 text-white/65 mx-auto"
              style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}
            >
              We look at the existing site, the performance picture, the page
              structure, and where Bricks would carry the work better than the
              tool that is there now. You walk away with a short list of what
              to do first.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-white text-[#1A0E06] hover:bg-[#FBEDDD] rounded-full px-7 py-4 transition-colors"
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
              No marketplace template pitch. No automated audit. No guarantees.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bricks({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <BRHero onNav={onNav} />
      <BRWhy />
      <BRApproach />
      <BRBuildSystem />
      <BRDesignToBricks />
      <BRFit />
      <BRCta onNav={onNav} />
    </main>
  );
}
