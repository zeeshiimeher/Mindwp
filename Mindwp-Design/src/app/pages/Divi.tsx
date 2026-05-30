import {
  ArrowRight,
  Compass,
  Layers,
  Smartphone,
  Wrench,
  Repeat,
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

const ACCENT = "#7C4DCF";
const ACCENT_SOFT = "rgba(124,77,207,0.12)";
const ACCENT_BORDER = "rgba(124,77,207,0.32)";

// 01 HERO — centered
function DVHero({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#0E0A1F] via-[#150E2C] to-[#2A1B4F] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #7C4DCF 0%, transparent 45%), radial-gradient(ellipse at 80% 90%, #4A2A8A 0%, transparent 50%)",
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
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#C8B5F0" }}
            >
              Implementation pathway · Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: "-0.022em" }}>
            Divi 5 modernisation
            <br />
            <span className="text-white/45">without leaving Divi.</span>
          </h1>

          <p
            className="mt-8 mx-auto text-white/70"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "640px" }}
          >
            An older Divi site or a new design file ready to build — MindWP
            modernises the structure, the responsive behaviour, and the page
            craft on Divi 5, while the editor the team already knows stays in
            place.
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#0E0A1F] hover:bg-[#F0EBFB] rounded-full px-7 py-4 transition-colors"
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
              { l: "Divi 5 modernisation", c: "#7C4DCF" },
              { l: "Mobile correction", c: "#C8B5F0" },
              { l: "Template consolidation", c: "#35C7D8" },
              { l: "Page-craft rewrite", c: "#21B985" },
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

// 02 WHERE DATED DIVI SITES SLOW DOWN
function DVWhereSlow() {
  const items = [
    {
      n: "01",
      icon: Layers,
      tone: "#7C4DCF",
      title: "Template clutter",
      body:
        "Years of layouts have accumulated. Some pages use the original theme. Some use library imports. Some are one-offs. The site no longer has a single design system — it has a stack of moments frozen in time.",
    },
    {
      n: "02",
      icon: Smartphone,
      tone: "#0E7D8C",
      title: "Mobile breakage",
      body:
        "Desktop still reads. Mobile shifts, overlaps, or stacks the next step somewhere the visitor will not find it. Most of the traffic that quietly leaves leaves from here.",
    },
    {
      n: "03",
      icon: Wrench,
      tone: "#9A6F12",
      title: "Plugin sprawl",
      body:
        "Add-ons have stacked up over time — many doing what Divi 5 now handles natively. The site is slow, fragile, and difficult to update without breaking something elsewhere.",
    },
    {
      n: "04",
      icon: Repeat,
      tone: "#0F7A57",
      title: "Layout drift across pages",
      body:
        "Service pages drift apart over the years. Headings, spacing, and trust placement gradually disagree, page by page. The site loses the consistency that made it feel professional in the first place.",
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
            Where dated Divi sites slow down
          </div>
          <h2 className="text-[#08111F]">
            The site still works.{" "}
            <span className="text-[#4C5E6F]">
              It just shows its years in the places that matter.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Four patterns we see on Divi sites that arrive for a
            modernisation. Each one is familiar. None of them mean the team
            should leave Divi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
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

// 03 DIVI 5 MODERNISATION APPROACH
function DVApproach() {
  const rows = [
    {
      label: "From old Divi layout or new design file",
      note: "Two starting points we see most: a Divi site that has aged and drifted, or a fresh Figma / XD design ready to build in Divi 5. Either way, the Divi 5 architecture is the destination.",
    },
    {
      label: "Move to the Divi 5 core",
      note: "Migrate to the rebuilt Divi 5 architecture — faster builder, lighter front-end output, modern block-based editing. No retraining from scratch for a team that already knows Divi.",
    },
    {
      label: "Divi global presets & reusable layouts",
      note: "Global colours, typography presets, spacing scale, and reusable layout library — set once, applied everywhere. The drift between pages stops accumulating module by module.",
    },
    {
      label: "Divi Theme Builder, properly used",
      note: "Headers, footers, archive layouts, and service-page templates handled in the Divi Theme Builder — so editing one page no longer means redesigning a section across the site.",
    },
    {
      label: "Mobile-first responsive correction",
      note: "Sections rebuilt for the smallest viewport first, then scaled up — using Divi 5's responsive controls properly. The device most visitors arrive on stops being where the site breaks.",
    },
    {
      label: "Familiar editing — protected structure",
      note: "The team keeps the Divi editor they already know. Day-to-day content lives on the surface; templates, globals, and integrations stay under the bonnet.",
    },
    {
      label: "Divi performance pass",
      note: "Critical CSS, conditional module loading, image handling, and Divi 5's new caching behaviour — the build feels fast on the device, not just on a synthetic test from a fibre line.",
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
              The Divi 5 modernisation approach
            </div>
            <h2 className="text-[#08111F]">
              The team stays on Divi.{" "}
              <span className="text-[#4C5E6F]">
                The site moves into the Divi 5 phase.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Six fronts a Divi 5 modernisation pass usually covers. The team
              keeps the Divi editor they already know. The site gets the
              architecture Divi 5 was built to give it.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{ border: "1px solid #E6EEF3", boxShadow: "0 10px 28px rgba(8,17,31,0.05)" }}
        >
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`flex items-start gap-5 lg:gap-7 px-6 lg:px-8 py-6 ${
                i < rows.length - 1 ? "border-b border-[#EEF3F6]" : ""
              }`}
            >
              <span
                className="text-[#9CA3B0] tabular-nums shrink-0 mt-1"
                style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}

// 04 SERVICE PAGE REBUILD INSIDE DIVI — signature then/now silhouettes
function DVServicePageThenNow() {
  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            Service page rebuild inside Divi
          </div>
          <h2 className="text-[#08111F]">
            Same Divi.{" "}
            <span className="text-[#4C5E6F]">
              A page that finally carries the decision.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            A service page rebuilt inside Divi looks calmer, reads cleaner,
            and leads to a step the visitor can actually take. The platform
            stays. The page craft is what changes.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          {/* THEN — dated Divi silhouette */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] bg-white p-7 lg:p-8"
              style={{ border: "1px solid #DDE2E8", boxShadow: "0 12px 32px rgba(8,17,31,0.05)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "10.5px", fontWeight: 700, color: "#6F8190" }}
                >
                  Then · dated Divi
                </span>
                <span className="text-[#9CA3B0]" style={{ fontSize: "11px" }}>
                  drifted over the years
                </span>
              </div>
              <DiviPageSilhouette dated />
              <ul className="mt-6 space-y-2.5 text-[#4C5E6F]" style={{ fontSize: "13px", lineHeight: 1.55 }}>
                {[
                  "Hero is a slogan, not an intent line.",
                  "Trust hidden on a separate page.",
                  "One generic CTA pasted across every service.",
                  "Mobile lays out the wrong order.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#9CA3B0] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NOW — modernised Divi silhouette */}
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] p-7 lg:p-8"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F4EFFB 100%)",
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: `0 16px 44px ${ACCENT_SOFT}`,
              }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
                >
                  Now · Divi 5 rebuild
                </span>
                <span style={{ color: ACCENT, fontSize: "11px", fontWeight: 600 }}>
                  page craft restored
                </span>
              </div>
              <DiviPageSilhouette />
              <ul className="mt-6 space-y-2.5 text-[#08111F]" style={{ fontSize: "13px", lineHeight: 1.55 }}>
                {[
                  "Hero names the service, the place, and the next step.",
                  "Trust placed beside the call to action.",
                  "Intent-matched CTA — quote, consultation, callback.",
                  "Mobile-first layout leads with the same order as desktop.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 mt-2 rounded-full shrink-0"
                      style={{ background: ACCENT, boxShadow: `0 0 5px ${ACCENT}` }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p
          className="text-[#6F8190] mx-auto max-w-2xl text-center"
          style={{ fontSize: "13.5px", lineHeight: 1.7, fontStyle: "italic" }}
        >
          Illustrative page silhouettes. The platform is the same — what
          carries the decision is the order of the page.
        </p>
      </div>
    </section>
  );
}

function DiviPageSilhouette({ dated = false }: { dated?: boolean }) {
  if (dated) {
    return (
      <svg
        viewBox="0 0 320 360"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="4" y="4" width="312" height="352" rx="8" fill="#FFFFFF" stroke="#E6EAEF" strokeWidth="1.5" />
        {/* Header */}
        <rect x="14" y="14" width="292" height="14" rx="3" fill="#F2F5F7" />
        <rect x="20" y="19" width="36" height="4" rx="2" fill="#DDE2E8" />
        <rect x="220" y="19" width="22" height="4" rx="2" fill="#DDE2E8" />
        <rect x="246" y="19" width="22" height="4" rx="2" fill="#DDE2E8" />
        <rect x="272" y="19" width="26" height="4" rx="2" fill="#DDE2E8" />
        {/* Hero */}
        <rect x="20" y="42" width="220" height="14" rx="3" fill="#E6EAEF" />
        <rect x="20" y="62" width="170" height="6" rx="2" fill="#EEF3F6" />
        <rect x="20" y="74" width="120" height="6" rx="2" fill="#EEF3F6" />
        <rect x="20" y="94" width="60" height="16" rx="5" fill="#DDE2E8" />
        {/* Hero image placeholder (generic stock) */}
        <rect x="200" y="42" width="98" height="78" rx="6" fill="#F4F5F7" stroke="#EEF3F6" strokeWidth="1" />
        <circle cx="220" cy="62" r="5" fill="#E6EAEF" />
        <path d="M210 110 L 230 90 L 248 100 L 268 80 L 290 110 Z" fill="#E6EAEF" opacity="0.7" />
        {/* Generic body block */}
        <rect x="20" y="134" width="278" height="46" rx="6" fill="#F6F8FA" stroke="#EEF3F6" strokeWidth="1" />
        <rect x="32" y="146" width="200" height="5" rx="2" fill="#DDE2E8" />
        <rect x="32" y="156" width="250" height="5" rx="2" fill="#E6EAEF" />
        <rect x="32" y="166" width="220" height="5" rx="2" fill="#E6EAEF" />
        {/* Three generic feature blocks */}
        <rect x="20" y="194" width="86" height="60" rx="6" fill="#FAFBFC" stroke="#EEF3F6" strokeWidth="1" />
        <rect x="116" y="194" width="86" height="60" rx="6" fill="#FAFBFC" stroke="#EEF3F6" strokeWidth="1" />
        <rect x="212" y="194" width="86" height="60" rx="6" fill="#FAFBFC" stroke="#EEF3F6" strokeWidth="1" />
        <circle cx="63" cy="212" r="5" fill="#DDE2E8" />
        <circle cx="159" cy="212" r="5" fill="#DDE2E8" />
        <circle cx="255" cy="212" r="5" fill="#DDE2E8" />
        <rect x="34" y="226" width="58" height="4" rx="2" fill="#DDE2E8" />
        <rect x="130" y="226" width="58" height="4" rx="2" fill="#DDE2E8" />
        <rect x="226" y="226" width="58" height="4" rx="2" fill="#DDE2E8" />
        <rect x="34" y="236" width="44" height="3" rx="1.5" fill="#E6EAEF" />
        <rect x="130" y="236" width="44" height="3" rx="1.5" fill="#E6EAEF" />
        <rect x="226" y="236" width="44" height="3" rx="1.5" fill="#E6EAEF" />
        {/* Generic CTA strip */}
        <rect x="20" y="268" width="278" height="40" rx="6" fill="#F6F8FA" stroke="#EEF3F6" strokeWidth="1" />
        <rect x="32" y="280" width="120" height="5" rx="2" fill="#DDE2E8" />
        <rect x="32" y="290" width="150" height="4" rx="2" fill="#E6EAEF" />
        <rect x="220" y="282" width="60" height="14" rx="4" fill="#DDE2E8" />
        {/* Footer */}
        <rect x="20" y="322" width="278" height="22" rx="5" fill="#F6F8FA" stroke="#EEF3F6" strokeWidth="1" />
        <rect x="32" y="330" width="36" height="4" rx="2" fill="#E6EAEF" />
        <rect x="76" y="330" width="44" height="4" rx="2" fill="#E6EAEF" />
        <rect x="128" y="330" width="36" height="4" rx="2" fill="#E6EAEF" />
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 320 360"
      className="w-full h-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="312" height="352" rx="8" fill="#FFFFFF" stroke={ACCENT_BORDER} strokeWidth="1.5" />
      {/* Header */}
      <rect x="14" y="14" width="292" height="14" rx="3" fill="#F8F4FC" />
      <rect x="20" y="19" width="44" height="4" rx="2" fill="#08111F" />
      <rect x="186" y="19" width="22" height="4" rx="2" fill="#4C5E6F" />
      <rect x="212" y="19" width="22" height="4" rx="2" fill="#4C5E6F" />
      <rect x="238" y="19" width="22" height="4" rx="2" fill="#4C5E6F" />
      <rect x="266" y="17" width="32" height="9" rx="4.5" fill="#08111F" />
      {/* Intent badge */}
      <rect x="20" y="40" width="62" height="11" rx="5.5" fill="#FFFFFF" stroke={ACCENT} strokeWidth="1" />
      <circle cx="28" cy="45.5" r="1.8" fill={ACCENT} />
      <rect x="33" y="44" width="44" height="3" rx="1.5" fill={ACCENT} />
      {/* Hero headline */}
      <rect x="20" y="58" width="186" height="14" rx="3" fill="#08111F" />
      <rect x="20" y="78" width="150" height="14" rx="3" fill="#7C4DCF" opacity="0.55" />
      <rect x="20" y="100" width="186" height="5" rx="2" fill="#4C5E6F" opacity="0.55" />
      <rect x="20" y="110" width="160" height="5" rx="2" fill="#4C5E6F" opacity="0.4" />
      {/* Hero CTA pair */}
      <rect x="20" y="124" width="80" height="18" rx="9" fill="#08111F" />
      <rect x="30" y="131" width="48" height="4" rx="2" fill="#FFFFFF" />
      <rect x="108" y="124" width="68" height="18" rx="9" fill="#FFFFFF" stroke={ACCENT_BORDER} strokeWidth="1" />
      <rect x="116" y="131" width="44" height="4" rx="2" fill={ACCENT} />
      {/* Hero visual */}
      <rect x="216" y="42" width="82" height="100" rx="6" fill="#F4EFFB" stroke={ACCENT} strokeOpacity="0.35" strokeWidth="1" />
      <circle cx="257" cy="78" r="14" fill="#FFFFFF" stroke={ACCENT} strokeWidth="1" strokeOpacity="0.4" />
      <rect x="240" y="100" width="34" height="3" rx="1.5" fill={ACCENT} opacity="0.7" />
      <rect x="232" y="108" width="50" height="3" rx="1.5" fill="#4C5E6F" opacity="0.55" />
      <rect x="236" y="116" width="42" height="3" rx="1.5" fill="#4C5E6F" opacity="0.45" />
      {/* Trust strip */}
      <rect x="20" y="156" width="278" height="28" rx="6" fill="#FAFBFC" stroke="#EEF3F6" strokeWidth="1" />
      <rect x="28" y="164" width="62" height="12" rx="3" fill="#FFFFFF" stroke={ACCENT_BORDER} strokeWidth="0.8" />
      <circle cx="34" cy="170" r="2" fill={ACCENT} />
      <rect x="40" y="168" width="44" height="4" rx="2" fill="#08111F" opacity="0.7" />
      <rect x="96" y="164" width="58" height="12" rx="3" fill="#FFFFFF" stroke={ACCENT_BORDER} strokeWidth="0.8" />
      <rect x="102" y="168" width="46" height="4" rx="2" fill="#08111F" opacity="0.7" />
      <rect x="160" y="164" width="68" height="12" rx="3" fill="#FFFFFF" stroke={ACCENT_BORDER} strokeWidth="0.8" />
      <rect x="166" y="168" width="56" height="4" rx="2" fill="#08111F" opacity="0.7" />
      <rect x="234" y="164" width="56" height="12" rx="3" fill="#FFFFFF" stroke={ACCENT_BORDER} strokeWidth="0.8" />
      <rect x="240" y="168" width="44" height="4" rx="2" fill="#08111F" opacity="0.7" />
      {/* Service explanation block */}
      <rect x="20" y="194" width="278" height="74" rx="6" fill="#FFFFFF" stroke="#EEF3F6" strokeWidth="1" />
      <rect x="32" y="204" width="14" height="14" rx="3" fill={ACCENT} opacity="0.18" />
      <rect x="36" y="208" width="6" height="6" rx="1.5" fill={ACCENT} />
      <rect x="52" y="206" width="120" height="6" rx="2" fill="#08111F" />
      <rect x="52" y="218" width="80" height="4" rx="2" fill="#4C5E6F" opacity="0.7" />
      <rect x="32" y="234" width="252" height="4" rx="2" fill="#4C5E6F" opacity="0.55" />
      <rect x="32" y="244" width="236" height="4" rx="2" fill="#4C5E6F" opacity="0.4" />
      <rect x="32" y="254" width="200" height="4" rx="2" fill="#4C5E6F" opacity="0.4" />
      {/* Intent CTA card */}
      <rect x="20" y="278" width="278" height="40" rx="8" fill="#F4EFFB" stroke={ACCENT_BORDER} strokeWidth="1" />
      <rect x="32" y="288" width="100" height="6" rx="2" fill="#08111F" />
      <rect x="32" y="300" width="150" height="4" rx="2" fill={ACCENT} opacity="0.7" />
      <rect x="206" y="290" width="80" height="18" rx="9" fill={ACCENT} />
      <rect x="222" y="297" width="48" height="4" rx="2" fill="#FFFFFF" />
      {/* Footer */}
      <rect x="20" y="328" width="278" height="22" rx="5" fill="#0E0A1F" />
      <rect x="32" y="336" width="36" height="4" rx="2" fill="#C8B5F0" />
      <rect x="76" y="336" width="44" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
      <rect x="128" y="336" width="36" height="4" rx="2" fill="rgba(255,255,255,0.45)" />
    </svg>
  );
}

// 05 STAY ON DIVI VS MIGRATE
function DVStayOrMigrate({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            Stay on Divi vs migrate
          </div>
          <h2 className="text-[#08111F]">
            Leaving Divi is a decision,{" "}
            <span className="text-[#4C5E6F]">
              not a default.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Sometimes the right answer is to modernise inside Divi. Sometimes
            the right answer is to migrate. Both are honest. Neither is the
            answer to every situation.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] p-8 lg:p-9"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F4EFFB 100%)",
                border: `1px solid ${ACCENT_BORDER}`,
                boxShadow: `0 16px 44px ${ACCENT_SOFT}`,
              }}
            >
              <div
                className="uppercase tracking-[0.18em] mb-4"
                style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
              >
                Stay on Divi when
              </div>
              <div
                className="text-[#08111F] mb-5"
                style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.012em", lineHeight: 1.3 }}
              >
                The team familiarity and content depth outweigh the gains from leaving.
              </div>
              <ul className="space-y-2.5 text-[#08111F]" style={{ fontSize: "13.5px", lineHeight: 1.6 }}>
                {[
                  "The team edits the site daily and Divi is the editor they know.",
                  "The site has years of content built into Divi modules and library imports.",
                  "Divi 5 covers what the next two years actually need.",
                  "Most of the gain is available without migration — through modernisation and page-craft work.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 mt-2 rounded-full shrink-0"
                      style={{ background: ACCENT }}
                    />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] p-8 lg:p-9"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F6F8FA 100%)",
                border: "1px solid #DDE2E8",
                boxShadow: "0 12px 32px rgba(8,17,31,0.05)",
              }}
            >
              <div
                className="uppercase tracking-[0.18em] mb-4"
                style={{ fontSize: "10.5px", fontWeight: 700, color: "#6F8190" }}
              >
                Migrate when
              </div>
              <div
                className="text-[#08111F] mb-5"
                style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.012em", lineHeight: 1.3 }}
              >
                The structural ceiling is the real bottleneck.
              </div>
              <ul className="space-y-2.5 text-[#4C5E6F]" style={{ fontSize: "13.5px", lineHeight: 1.6 }}>
                {[
                  "The site has outgrown what Divi can hold cleanly for the next phase.",
                  "Performance, dynamic content, or template scale need more than modernisation can give.",
                  "The team is ready to learn a different editor — and the gain is worth the change.",
                  "A full rebuild on a different pathway is the most honest answer.",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#9CA3B0] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => onNav("bricks")}
                  className="inline-flex items-center gap-2 text-[#0E2740] hover:text-[#08111F] border-b border-[#0E2740] pb-1"
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  See the Bricks pathway
                  <ArrowRight size={13} />
                </button>
                <button
                  onClick={() => onNav("rebuild")}
                  className="inline-flex items-center gap-2 text-[#0E2740] hover:text-[#08111F] border-b border-[#0E2740] pb-1"
                  style={{ fontSize: "13px", fontWeight: 600 }}
                >
                  See the Rebuild pathway
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 06 DIVI DECISION — Stay on Divi / Rebuild inside Divi / Consider migration
function DVFit({ onNav }: { onNav: (p: Page) => void }) {
  const paths = [
    {
      tag: "Stay on Divi",
      tone: ACCENT,
      tint: "#F4EFFB",
      icon: Layers,
      headline: "Modernise inside Divi 5.",
      summary:
        "A Divi 5 modernisation pass — global presets, theme builder, mobile, performance. Editor stays.",
      signals: [
        "Team edits Divi daily and the editor is the workflow",
        "Site has drifted but pages still answer the visitor's question",
        "Divi 5 covers what the next two years really need",
        "Mobile and performance are the biggest gaps",
      ],
      action: "The modernisation pass.",
      highlighted: true,
    },
    {
      tag: "Rebuild inside Divi",
      tone: "#9A6F12",
      tint: "#FCF5E2",
      icon: Wrench,
      headline: "Same platform. Different page craft.",
      summary:
        "Divi 5 stays, but service or treatment pages start over — often driven by a design-file refresh or a brand reset.",
      signals: [
        "Service or treatment pages no longer carry the decision",
        "A Figma, XD, or sketch refresh is on the table",
        "Trust placement and CTAs are wrong on every template",
        "Team wants to keep Divi for editing after the rebuild",
      ],
      action: "Divi 5 rebuild — same editor, different structure.",
    },
    {
      tag: "Consider migration",
      tone: "#6F8190",
      tint: "#F4F6F8",
      icon: ArrowRight,
      headline: "The build ceiling is the real bottleneck.",
      summary:
        "Divi is no longer the right base. Migrate to a different build path — Bricks, custom WordPress, or a full rebuild.",
      signals: [
        "Site has outgrown what Divi can hold cleanly",
        "Performance, dynamic content, or template scale need more",
        "Team is ready to learn a different editor and the gain is worth it",
        "A full rebuild on a different pathway is the most honest answer",
      ],
      action: "We will point you to the right pathway.",
      links: [
        { id: "bricks" as Page, label: "See Bricks" },
        { id: "rebuild" as Page, label: "See Rebuild" },
      ],
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
            The Divi decision
          </div>
          <h2 className="text-[#08111F]">
            Stay on Divi, rebuild inside,{" "}
            <span className="text-[#4C5E6F]">or consider migration.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Three honest paths from a Divi site that has aged. Most teams
            land in the middle — but naming which one this is matters more
            than choosing the cheapest one quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {paths.map((p) => {
            const Icon = p.icon;
            const isHighlighted = !!p.highlighted;
            return (
              <div
                key={p.tag}
                className={`relative rounded-2xl overflow-hidden flex flex-col ${
                  isHighlighted ? "lg:-mt-3 lg:mb-3" : ""
                }`}
                style={{
                  background: `linear-gradient(180deg, #FFFFFF 0%, ${p.tint} 100%)`,
                  border: `1px solid ${isHighlighted ? ACCENT_BORDER : "#E6EEF3"}`,
                  boxShadow: isHighlighted
                    ? `0 24px 56px ${ACCENT_SOFT}`
                    : "0 10px 28px rgba(8,17,31,0.05)",
                }}
              >
                <span
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ background: p.tone }}
                />
                {isHighlighted && (
                  <span
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-full uppercase tracking-[0.14em]"
                    style={{
                      background: "#0E0A1F",
                      color: ACCENT,
                      fontSize: "9.5px",
                      fontWeight: 700,
                    }}
                  >
                    MOST COMMON
                  </span>
                )}
                <div className="p-7 lg:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: `${p.tone}14`,
                        border: `1px solid ${p.tone}40`,
                        color: p.tone,
                      }}
                    >
                      <Icon size={16} strokeWidth={2.5} />
                    </div>
                    <div
                      className="uppercase tracking-[0.16em]"
                      style={{ color: p.tone, fontSize: "10.5px", fontWeight: 700 }}
                    >
                      {p.tag}
                    </div>
                  </div>
                  <div
                    className="text-[#08111F] mb-3"
                    style={{
                      fontSize: "19px",
                      fontWeight: 700,
                      letterSpacing: "-0.012em",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.headline}
                  </div>
                  <p
                    className="text-[#4C5E6F] mb-5"
                    style={{ fontSize: "13.5px", lineHeight: 1.6 }}
                  >
                    {p.summary}
                  </p>
                  <div
                    className="uppercase tracking-[0.14em] mb-3"
                    style={{ fontSize: "9.5px", fontWeight: 700, color: "#6F8190" }}
                  >
                    Signals
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {p.signals.map((s) => (
                      <li key={s} className="flex items-start gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                          style={{ background: p.tone }}
                        />
                        <span
                          className={isHighlighted ? "text-[#08111F]" : "text-[#4C5E6F]"}
                          style={{
                            fontSize: "13px",
                            lineHeight: 1.55,
                            fontWeight: isHighlighted ? 500 : 400,
                          }}
                        >
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div
                    className="mt-6 pt-5"
                    style={{ borderTop: `1px dashed ${p.tone}30` }}
                  >
                    <div
                      className="text-[#6F8190]"
                      style={{ fontSize: "12.5px", lineHeight: 1.55, fontStyle: "italic" }}
                    >
                      {p.action}
                    </div>
                    {p.links && (
                      <div className="mt-3 flex items-center gap-4 flex-wrap">
                        {p.links.map((l) => (
                          <button
                            key={l.id}
                            onClick={() => onNav(l.id)}
                            className="inline-flex items-center gap-1.5 border-b pb-0.5"
                            style={{
                              color: "#0E2740",
                              borderColor: "#0E2740",
                              fontSize: "12px",
                              fontWeight: 600,
                            }}
                          >
                            {l.label}
                            <ArrowRight size={11} />
                          </button>
                        ))}
                      </div>
                    )}
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

// 07 CTA
function DVCta({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section id="cta" className="section bg-page-white">
      <div className="container">
        <div className="relative rounded-[24px] overflow-hidden p-12 lg:p-20"
          style={{ background: "linear-gradient(160deg, #0E0A1F 0%, #2A1B4F 100%)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #7C4DCF 0%, transparent 45%), radial-gradient(circle at 90% 20%, #4A2A8A 0%, transparent 45%)",
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
              Keep the editor.{" "}
              <span className="text-white/55">Raise the build.</span>
            </h2>
            <p
              className="mt-6 text-white/65 mx-auto"
              style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}
            >
              We look at the existing Divi site — what works, what has drifted,
              and what Divi 5 would carry better — together, in a working
              session. You walk away with a short list of what to modernise
              first.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-white text-[#0E0A1F] hover:bg-[#F0EBFB] rounded-full px-7 py-4 transition-colors"
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
              No theme-swap promise. No automated audit. No guarantees.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Divi({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <DVHero onNav={onNav} />
      <DVWhereSlow />
      <DVApproach />
      <DVServicePageThenNow />
      <DVStayOrMigrate onNav={onNav} />
      <DVFit onNav={onNav} />
      <DVCta onNav={onNav} />
    </main>
  );
}
