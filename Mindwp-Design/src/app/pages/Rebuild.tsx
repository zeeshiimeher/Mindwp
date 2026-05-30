import {
  ArrowRight,
  Compass,
  Layers,
  FileText,
  MapPin,
  ShieldCheck,
  Repeat,
  Wrench,
  Star,
  Minus,
  Check,
  Sparkles,
  AlertTriangle,
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

const ACCENT = "#14B8A6";
const ACCENT_SOFT = "rgba(20,184,166,0.10)";
const ACCENT_BORDER = "rgba(20,184,166,0.32)";

// 01 HERO — centered
function RBHero({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#04201E] via-[#062C2A] to-[#0A4942] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #14B8A6 0%, transparent 45%), radial-gradient(ellipse at 80% 90%, #0E7D8C 0%, transparent 50%)",
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
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#9DEAE0" }}
            >
              Implementation pathway · Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: "-0.022em" }}>
            A redesign that
            <br />
            <span className="text-white/45">fixes more than how it looks.</span>
          </h1>

          <p
            className="mt-8 mx-auto text-white/70"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "640px" }}
          >
            Most redesigns change the surface. The site still ends at the
            contact form. A rebuild reshapes the structure, the trust, and
            the next step — so the site does the work it was always supposed
            to do.
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#04201E] hover:bg-[#E4F6F4] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Review my rebuild path
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
              { l: "Website rebuild", c: "#14B8A6" },
              { l: "System rebuild", c: "#9DEAE0" },
              { l: "Migration & content rescue", c: "#9B7DE0" },
              { l: "Trust placement reset", c: "#F4B740" },
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

// 02 WHY MOST REDESIGNS DISAPPOINT
function RBWhyDisappoint() {
  const items = [
    {
      n: "01",
      tone: "#E76F6F",
      title: "The look changed. The work did not.",
      body:
        "Newer fonts, calmer spacing, a fresh hero image. The page still ends at the contact form. The next step still depends on whoever opens the inbox first.",
    },
    {
      n: "02",
      tone: "#F4B740",
      title: "Same pages, prettier.",
      body:
        "The same service pages — paragraphs of generic copy, one button at the bottom. The visitor still cannot tell what makes this business specific.",
    },
    {
      n: "03",
      tone: "#9CA3B0",
      title: "Still no clear next step.",
      body:
        "Quote, consultation, callback, booking — they all sit behind the same generic 'Get in touch' button. The page never asks for the move that fits.",
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
            Why most redesigns disappoint
          </div>
          <h2 className="text-[#08111F]">
            A new look is not a new website.{" "}
            <span className="text-[#4C5E6F]">
              Sometimes it is the same site, freshly painted.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Three common patterns we see when a 'redesign' is delivered and
            the business looks at it six months later and asks why nothing
            changed in how the work comes in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {items.map((r) => (
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
                <span
                  className="text-[#9CA3B0] tabular-nums mb-5"
                  style={{ fontSize: "12.5px", fontWeight: 700, letterSpacing: "0.06em" }}
                >
                  {r.n}
                </span>
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
          ))}
        </div>
      </div>
    </section>
  );
}

// 03 REBUILD DECISION AUDIT BOARD — 3-column diagnostic
function RBAuditBoard() {
  const cols = [
    {
      tone: "#6F8190",
      tag: "After a refresh",
      icon: Sparkles,
      title: "What changed visually",
      hint: "Surface decisions a visitor notices on the new site.",
      items: [
        "New hero image and typography",
        "Brand palette modernised",
        "Cleaner navigation header",
        "Tighter spacing and a calmer grid",
        "Refreshed photography across the site",
      ],
    },
    {
      tone: "#C97A2C",
      tag: "Still unresolved",
      icon: AlertTriangle,
      title: "What fails operationally",
      hint: "Working-day failures the refresh did not touch.",
      items: [
        "Service pages still read as generic",
        "One contact form for every kind of enquiry",
        "Trust still parked on a side page",
        "Same 'contact us' button on every section",
        "Local intent missing from area pages",
        "No handoff once an enquiry arrives",
      ],
    },
    {
      tone: ACCENT,
      tag: "Rebuild must carry",
      icon: Wrench,
      title: "What a rebuild has to do",
      hint: "Work that has to be added structurally, not painted on.",
      items: [
        "Service or treatment pages restructured",
        "Intent-matched CTAs per page",
        "Reviews and credentials beside the decision",
        "Forms that arrive with page, area, reason",
        "Area pages that earn their place locally",
        "Wired-forward handoff into response and follow-up",
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
            Rebuild decision audit board
          </div>
          <h2 className="text-[#08111F]">
            A visual refresh{" "}
            <span className="text-[#4C5E6F]">
              is not the same as a system rebuild.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Same site, read three ways. What changed on the surface. What is
            still failing in the working week. What a rebuild actually has to
            carry forward.
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden bg-white"
          style={{
            border: "1px solid #E6EEF3",
            boxShadow: "0 18px 44px rgba(8,17,31,0.06)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {cols.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.tag}
                  className={
                    i < cols.length - 1
                      ? "lg:border-r border-[#EEF3F6] border-b lg:border-b-0"
                      : ""
                  }
                  style={
                    i === 2
                      ? { background: "linear-gradient(180deg, #F4FBFA 0%, #FFFFFF 60%)" }
                      : undefined
                  }
                >
                  <div className="px-7 lg:px-8 py-6 border-b border-[#EEF3F6]">
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span
                        className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full uppercase tracking-[0.16em]"
                        style={{
                          fontSize: "10px",
                          fontWeight: 700,
                          color: c.tone,
                          background: `${c.tone}12`,
                          border: `1px solid ${c.tone}33`,
                        }}
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: c.tone }}
                        />
                        {c.tag}
                      </span>
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{
                          color: c.tone,
                          background: `${c.tone}10`,
                          border: `1px solid ${c.tone}30`,
                        }}
                      >
                        <Icon size={15} />
                      </div>
                    </div>
                    <div
                      className="text-[#08111F]"
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        letterSpacing: "-0.012em",
                        lineHeight: 1.3,
                      }}
                    >
                      {c.title}
                    </div>
                    <p
                      className="mt-2 text-[#6F8190]"
                      style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                    >
                      {c.hint}
                    </p>
                  </div>
                  <ul>
                    {c.items.map((it, j) => (
                      <li
                        key={it}
                        className="flex items-start gap-3 px-7 lg:px-8 py-3.5"
                        style={
                          j < c.items.length - 1
                            ? { borderBottom: "1px dashed #EEF3F6" }
                            : undefined
                        }
                      >
                        <span
                          className="shrink-0 mt-2 w-1.5 h-1.5 rounded-full"
                          style={{
                            background: c.tone,
                            boxShadow: i === 2 ? `0 0 6px ${c.tone}` : undefined,
                          }}
                        />
                        <span
                          className={i === 2 ? "text-[#08111F]" : "text-[#4C5E6F]"}
                          style={{
                            fontSize: "13.5px",
                            lineHeight: 1.6,
                            fontWeight: i === 2 ? 500 : 400,
                          }}
                        >
                          {it}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <p
          className="text-[#08111F] mx-auto max-w-2xl text-center"
          style={{ fontSize: "15px", lineHeight: 1.65 }}
        >
          <span className="font-semibold">A refresh paints the wall.</span>{" "}
          <span className="text-[#4C5E6F]">
            A rebuild moves the wall where the work actually needs it.
          </span>
        </p>
      </div>
    </section>
  );
}

// 04 WHAT THE REBUILD ACTUALLY COVERS — 6 responsibilities applied
function RBWhatItCovers() {
  const items = [
    {
      n: "01",
      icon: FileText,
      tone: "#0E7D8C",
      title: "Service & treatment page rewrites",
      body:
        "Each page rewritten to answer the question the visitor brought — what it is, who it is for, what happens, what to expect, what to do next.",
    },
    {
      n: "02",
      icon: MapPin,
      tone: ACCENT,
      title: "Local area & service-area pages",
      body:
        "Area pages built where they are needed — named the way locals actually search, backed by the listing, and consistent across the directories.",
    },
    {
      n: "03",
      icon: ArrowRight,
      tone: "#35C7D8",
      title: "Intent-matched calls to action",
      body:
        "Each page asks for the next step that fits the page — quote, consultation, callback, booking — rather than a generic 'contact us' on every section.",
    },
    {
      n: "04",
      icon: Layers,
      tone: "#0F7A57",
      title: "Enquiry capture with context",
      body:
        "Forms and call paths rebuilt so each contact arrives with the page, the area, and the reason already attached.",
    },
    {
      n: "05",
      icon: ShieldCheck,
      tone: "#9A6F12",
      title: "Trust placement reset",
      body:
        "Reviews, credentials, and finished work moved from a side page to the moments where the visitor is actually deciding.",
    },
    {
      n: "06",
      icon: Repeat,
      tone: "#6F8190",
      title: "Connected handoff to the rest of the system",
      body:
        "Each enquiry is wired forward — into the response, follow-up, and review work that lives elsewhere in the operating layer.",
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
              What the rebuild actually covers
            </div>
            <h2 className="text-[#08111F]">
              Six fronts a system rebuild touches{" "}
              <span className="text-[#4C5E6F]">
                — that a refresh leaves alone.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              The same six responsibilities a Smart Website System holds —
              applied to a site that is being rebuilt, not just relaunched.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
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
                      fontSize: "17.5px",
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

// 05 PAGE INVENTORY MATRIX — page type / current role / rebuild role
function RBPageInventory() {
  const rows = [
    {
      type: "Service or treatment page",
      current:
        "Lists what you do, then ends at the same generic 'contact us'.",
      rebuild:
        "Carries one intent — answers the real question and asks for the next step that fits the page.",
    },
    {
      type: "Local / area page",
      current:
        "A second copy of the service page with the place name swapped in.",
      rebuild:
        "Names neighbourhoods, backs the directory listing, gives the booking moment for the area.",
    },
    {
      type: "About page",
      current:
        "Founder bio, year established, a generic team photo near the bottom.",
      rebuild:
        "Places credentials, registrations and finished work where they hold up the decision.",
    },
    {
      type: "Reviews / proof page",
      current:
        "A grid of stars on a side page that nobody opens on the way to deciding.",
      rebuild:
        "Reviews placed beside the service or treatment they describe — not on a separate tab.",
    },
    {
      type: "Contact page",
      current:
        "One catch-all form for every enquiry that ever arrives.",
      rebuild:
        "Routes by intent — quote, consultation, callback, booking — with page and reason attached.",
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
              Page inventory matrix
            </div>
            <h2 className="text-[#08111F]">
              Every page in the rebuild{" "}
              <span className="text-[#4C5E6F]">earns its next step.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Page by page — what each page is doing today, and what it has
              to do once the rebuild lands. No grand reveal. A working list.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl overflow-hidden bg-white"
          style={{
            border: "1px solid #E6EEF3",
            boxShadow: "0 12px 32px rgba(8,17,31,0.05)",
          }}
        >
          <div
            className="hidden md:grid grid-cols-12 gap-5 px-6 lg:px-8 py-4 bg-[#F6F9FB] border-b border-[#EEF3F6]"
          >
            <div
              className="col-span-3 uppercase tracking-[0.16em]"
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Page type
            </div>
            <div
              className="col-span-4 uppercase tracking-[0.16em]"
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Current role
            </div>
            <div
              className="col-span-5 uppercase tracking-[0.16em] flex items-center gap-2"
              style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 5px ${ACCENT}` }}
              />
              Rebuild role
            </div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r.type}
              className={`grid grid-cols-12 gap-5 px-6 lg:px-8 py-6 ${
                i < rows.length - 1 ? "border-b border-[#EEF3F6]" : ""
              }`}
            >
              <div className="col-span-12 md:col-span-3">
                <span
                  className="md:hidden uppercase tracking-[0.16em] mr-2"
                  style={{ fontSize: "10px", fontWeight: 700, color: "#6F8190" }}
                >
                  Page
                </span>
                <span
                  className="text-[#08111F]"
                  style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.012em" }}
                >
                  {r.type}
                </span>
              </div>
              <div
                className="col-span-12 md:col-span-4 text-[#6F8190]"
                style={{ fontSize: "13.5px", lineHeight: 1.6 }}
              >
                <span
                  className="md:hidden uppercase tracking-[0.16em] mr-2 block mb-1"
                  style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3B0" }}
                >
                  Current
                </span>
                {r.current}
              </div>
              <div
                className="col-span-12 md:col-span-5 text-[#08111F]"
                style={{ fontSize: "13.5px", lineHeight: 1.6, fontWeight: 500 }}
              >
                <span
                  className="md:hidden uppercase tracking-[0.16em] mr-2 block mb-1"
                  style={{ fontSize: "10px", fontWeight: 700, color: ACCENT }}
                >
                  Rebuild
                </span>
                <span className="flex items-start gap-2">
                  <ArrowRight
                    size={14}
                    className="shrink-0 mt-1"
                    style={{ color: ACCENT }}
                  />
                  {r.rebuild}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 06 MIGRATION & CONTENT RESCUE
function RBContentRescue() {
  const keep = [
    "Pages that already answer a real question well",
    "Service or treatment descriptions written by the team",
    "Genuine reviews, credentials, registrations, and finished work",
    "Editorial or article content with real value behind it",
    "Imagery from real work — site visits, finished projects, the team",
    "URL structure that the search engines and visitors already know",
  ];
  const rebuild = [
    "Generic hero slogans that any competitor could run tomorrow",
    "Pages that exist but never sold the work",
    "Stock-photo headers and library art with no business connection",
    "Forms that catch every enquiry the same way regardless of intent",
    "Contact paths that end in a shared inbox with no owner",
    "Pages built around the old builder rather than the visitor",
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            Migration & content rescue
          </div>
          <h2 className="text-[#08111F]">
            A rebuild does not throw the past away.{" "}
            <span className="text-[#4C5E6F]">
              It keeps what works and reshapes the rest.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Most established sites have content the team built up over years.
            A rebuild starts by sorting it — honestly — into what carries
            forward and what gets reshaped.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] p-8 lg:p-9"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F4FBF8 100%)",
                border: "1px solid #C9EDDB",
                boxShadow: "0 16px 40px rgba(33,185,133,0.10)",
              }}
            >
              <div
                className="uppercase tracking-[0.18em] mb-4"
                style={{ fontSize: "10.5px", fontWeight: 700, color: "#0F7A57" }}
              >
                What we usually keep
              </div>
              <ul className="space-y-3">
                {keep.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 mt-2 rounded-full shrink-0"
                      style={{ background: "#21B985", boxShadow: "0 0 5px rgba(33,185,133,0.5)" }}
                    />
                    <span
                      className="text-[#0E2E2A]"
                      style={{ fontSize: "14px", lineHeight: 1.6, fontWeight: 500 }}
                    >
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] p-8 lg:p-9"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #FBF6F2 100%)",
                border: "1px solid #F0DBC8",
                boxShadow: "0 16px 40px rgba(244,183,64,0.10)",
              }}
            >
              <div
                className="uppercase tracking-[0.18em] mb-4"
                style={{ fontSize: "10.5px", fontWeight: 700, color: "#9A6F12" }}
              >
                What we usually rebuild
              </div>
              <ul className="space-y-3">
                {rebuild.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 mt-2 rounded-full shrink-0"
                      style={{ background: "#F4B740", boxShadow: "0 0 5px rgba(244,183,64,0.5)" }}
                    />
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: "14px", lineHeight: 1.6, fontWeight: 500 }}
                    >
                      {s}
                    </span>
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

// 07 IMPLEMENTATION PATHWAY CHOICE — inputs and routes
function RBPathways({ onNav }: { onNav: (p: Page) => void }) {
  const paths: { id?: Page; name: string; kind: "input" | "route"; fit: string; linkLabel?: string }[] = [
    {
      name: "Provided design file",
      kind: "input",
      fit: "A Figma, XD, PSD, or sketch ready to build — the rebuild starts from a fresh visual direction, not the existing site.",
    },
    {
      name: "Existing builder rebuild",
      kind: "input",
      fit: "Already on Elementor, Bricks, or Divi — the rebuild stays on the same builder, but page craft and structure start over.",
    },
    {
      name: "Migrate into WordPress",
      kind: "input",
      fit: "Coming from HTML, Wix, Squarespace, Joomla, or a custom stack — content reshape, URL map, and redirects planned together.",
    },
    {
      id: "wordpress",
      name: "WordPress (custom)",
      kind: "route",
      fit: "When the team needs a long-term editable base and the build benefits from a custom theme layer.",
      linkLabel: "See WordPress",
    },
    {
      id: "elementor",
      name: "Elementor",
      kind: "route",
      fit: "When the team edits pages themselves and the build has to support that without falling apart.",
      linkLabel: "See Elementor",
    },
    {
      id: "bricks",
      name: "Bricks Builder",
      kind: "route",
      fit: "When performance, clean markup, and reusable components matter for the next two years of growth.",
      linkLabel: "See Bricks",
    },
    {
      id: "divi",
      name: "Divi 5",
      kind: "route",
      fit: "When the team is already on Divi and the platform decision is not the question — the page craft is.",
      linkLabel: "See Divi 5",
    },
    {
      id: "woocommerce",
      name: "WooCommerce",
      kind: "route",
      fit: "When bookings, deposits, or product lines sit alongside the service or treatment work.",
      linkLabel: "See WooCommerce",
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
            Implementation pathway choice
          </div>
          <h2 className="text-[#08111F]">
            The rebuild chooses the build path,{" "}
            <span className="text-[#4C5E6F]">not the other way round.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            What you are bringing in — a design file, an existing builder
            site, or content from another stack — and what the next two
            years of editing look like decide the path inside WordPress.
          </p>
        </div>

        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{ border: "1px solid #E6EEF3", boxShadow: "0 10px 28px rgba(8,17,31,0.05)" }}
        >
          {paths.map((p, i) => {
            const isInput = p.kind === "input";
            const showSectionHeader =
              i === 0 || (i > 0 && paths[i - 1].kind !== p.kind);
            return (
              <div key={p.name}>
                {showSectionHeader && (
                  <div
                    className="px-6 lg:px-8 py-3 border-b"
                    style={{
                      borderColor: "#EEF3F6",
                      background: isInput ? "#F4FBFA" : "#F9FCFD",
                    }}
                  >
                    <span
                      className="uppercase tracking-[0.18em]"
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: isInput ? ACCENT : "#6F8190",
                      }}
                    >
                      {isInput ? "What you are bringing in" : "Route inside WordPress"}
                    </span>
                  </div>
                )}
                {p.id ? (
                  <button
                    onClick={() => onNav(p.id as Page)}
                    className={`w-full text-left px-6 lg:px-8 py-5 flex items-start gap-5 lg:gap-7 hover:bg-[#F9FCFD] transition-colors ${
                      i < paths.length - 1 ? "border-b border-[#EEF3F6]" : ""
                    }`}
                  >
                    <PathBody p={p} isInput={isInput} index={i} arrow />
                  </button>
                ) : (
                  <div
                    className={`w-full text-left px-6 lg:px-8 py-5 flex items-start gap-5 lg:gap-7 ${
                      i < paths.length - 1 ? "border-b border-[#EEF3F6]" : ""
                    }`}
                  >
                    <PathBody p={p} isInput={isInput} index={i} />
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

function PathBody({
  p,
  isInput,
  index,
  arrow,
}: {
  p: { name: string; fit: string; linkLabel?: string };
  isInput: boolean;
  index: number;
  arrow?: boolean;
}) {
  return (
    <>
      <span
        className="text-[#6F8190] tabular-nums shrink-0 mt-1"
        style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1 grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-3">
          <div
            className="text-[#08111F]"
            style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.012em" }}
          >
            {p.name}
          </div>
          <span
            className="inline-flex items-center gap-1.5 mt-1 px-2 py-0.5 rounded uppercase tracking-[0.14em]"
            style={{
              fontSize: "9px",
              fontWeight: 700,
              color: isInput ? ACCENT : "#6F8190",
              background: isInput ? ACCENT_SOFT : "#F4F6F8",
              border: `1px solid ${isInput ? ACCENT_BORDER : "#DDE2E8"}`,
            }}
          >
            {isInput ? "INPUT" : "ROUTE"}
          </span>
        </div>
        <div
          className="col-span-12 md:col-span-8 text-[#4C5E6F]"
          style={{ fontSize: "13.5px", lineHeight: 1.65 }}
        >
          {p.fit}
          {p.linkLabel && (
            <span
              className="ml-2 inline-flex items-center gap-1 text-[#0E2740] hover:text-[#08111F]"
              style={{ fontSize: "12px", fontWeight: 600 }}
            >
              · {p.linkLabel}
            </span>
          )}
        </div>
      </div>
      {arrow && <ArrowRight size={16} className="text-[#9CA3B0] shrink-0 mt-1" />}
    </>
  );
}

// 08 TRUST PLACEMENT DURING REBUILD
function RBTrustPlacement() {
  const placements = [
    {
      icon: Star,
      label: "Reviews beside the decision",
      note: "Recent reviews placed next to the service, treatment, or area page — not parked behind a 'Testimonials' tab.",
    },
    {
      icon: ShieldCheck,
      label: "Credentials near the CTA",
      note: "Registrations, qualifications, and cover details placed beside the moment the visitor is deciding whether to act.",
    },
    {
      icon: Layers,
      label: "Finished work shown in context",
      note: "Recent jobs, completed projects, kept appointments — shown beside the work they describe.",
    },
    {
      icon: MapPin,
      label: "Local proof on the page",
      note: "Named neighbourhoods, service-area cues, and area-specific work — placed where local visitors actually look.",
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
              Trust placement during rebuild
            </div>
            <h2 className="text-[#08111F]">
              The proof was always there.{" "}
              <span className="text-[#4C5E6F]">
                The rebuild puts it where the visitor is looking.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              Most established businesses already have reviews, credentials,
              and finished work. The rebuild moves them out of the footer and
              into the moments where the visitor hesitates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {placements.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.label}
                className="rounded-2xl bg-white p-7"
                style={{
                  border: "1px solid #E6EEF3",
                  boxShadow: "0 10px 28px rgba(8,17,31,0.05)",
                }}
              >
                <div className="flex items-start gap-4">
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
                  <div>
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: "16px", fontWeight: 700, letterSpacing: "-0.012em" }}
                    >
                      {p.label}
                    </div>
                    <p
                      className="mt-1.5 text-[#4C5E6F]"
                      style={{ fontSize: "13.5px", lineHeight: 1.65 }}
                    >
                      {p.note}
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

// 09 AFTER LAUNCH — operational change
function RBAfterLaunch() {
  const changes = [
    {
      title: "Visitors understand the offer faster",
      note: "Service and treatment pages answer the real question on first read.",
    },
    {
      title: "Enquiries arrive with context",
      note: "Page, area, and reason travel with each contact — so the first reply fits.",
    },
    {
      title: "Trust is easier to find",
      note: "Reviews and credentials sit beside the call to action — not on a side page.",
    },
    {
      title: "The team stops fighting the site",
      note: "Editing day-to-day content does not put the build at risk.",
    },
    {
      title: "Improvements get easier",
      note: "A well-structured site is something the team can read, edit, and add to.",
    },
    {
      title: "The site stops being the bottleneck",
      note: "Conversations move on from why the website is in the way.",
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-[#04201E] to-[#0A4942] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 30%, #14B8A6 0%, transparent 45%), radial-gradient(circle at 90% 80%, #35C7D8 0%, transparent 45%)",
        }}
      />
      <div className="relative container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700, color: "#9DEAE0" }}
            >
              After launch
            </div>
            <h2 className="text-white">
              The change is operational —{" "}
              <span className="text-white/55">not just visual.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-white/65" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              No promise of lead numbers or conversion percentages. What does
              commit to change is how the site behaves in the working week
              after launch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {changes.map((c, i) => (
            <div
              key={c.title}
              className="rounded-2xl p-7 relative"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                className="tabular-nums mb-4"
                style={{
                  color: ACCENT,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                }}
              >
                AFTER 0{i + 1}
              </div>
              <div
                className="text-white mb-3"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  letterSpacing: "-0.012em",
                }}
              >
                {c.title}
              </div>
              <p className="text-white/65" style={{ fontSize: "13.5px", lineHeight: 1.65 }}>
                {c.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 10 REBUILD DECISION PANEL — refresh enough / rebuild right / not a fit + CTA
function RBFitAndCta({ onNav }: { onNav: (p: Page) => void }) {
  const decisions = [
    {
      tag: "Refresh is enough",
      tone: "#6F8190",
      tint: "#F6F9FB",
      border: "#DDE6EC",
      icon: Sparkles,
      headline: "The site works. The surface is dated.",
      items: [
        "Service pages already answer the visitor's real question",
        "Trust sits beside the call to action, not on a side page",
        "Enquiries already arrive with the page and reason attached",
        "What the team really wants is visual modernisation",
      ],
      note: "Honest answer: a refresh, not a rebuild. We will say so.",
    },
    {
      tag: "Rebuild is the right call",
      tone: ACCENT,
      tint: "#F1FBF9",
      border: "#BFE7E1",
      icon: Wrench,
      highlighted: true,
      headline: "Pages don't carry the decision. Structure has to move.",
      items: [
        "Service or treatment pages do not carry the decision",
        "Reviews and credentials are hidden on a separate page",
        "One generic form catches every kind of enquiry the same way",
        "Mobile experience breaks the flow before the visitor decides",
        "The owner wants what happens to change, not just how it looks",
        "Long-term editability matters as much as launch day",
      ],
      note: "This is the work the rebuild is built for.",
    },
    {
      tag: "Not a fit for us",
      tone: "#9CA3B0",
      tint: "#FAFBFC",
      border: "#E6EAEF",
      icon: Minus,
      headline: "Different work, different team.",
      items: [
        "A brand-only or pure-surface refresh",
        "Cheapest-possible quick redesign with no business context",
        "One-page or landing page in isolation",
        "Buyer expecting guaranteed rankings or quick traffic",
        "EMR, clinical compliance, or treatment-outcome claims",
      ],
      note: "Tell us early — it saves time on both sides.",
    },
  ];

  return (
    <>
      <section className="section bg-page-white">
        <div className="container section-stack">
          <div className="mx-auto max-w-[820px] text-center">
            <div
              className="uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
            >
              The rebuild decision
            </div>
            <h2 className="text-[#08111F]">
              Refresh, rebuild, or not a fit.{" "}
              <span className="text-[#4C5E6F]">Three honest reads.</span>
            </h2>
            <p
              className="mt-6 text-[#4C5E6F] mx-auto"
              style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
            >
              Not every site needs a rebuild. Some need a refresh. Some need a
              different team entirely. Naming which one this is, honestly, is
              where the conversation starts.
            </p>
          </div>

          <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {decisions.map((d) => {
              const Icon = d.icon;
              const isHighlighted = !!d.highlighted;
              return (
                <div
                  key={d.tag}
                  className={`col-span-12 lg:col-span-4 relative rounded-2xl overflow-hidden flex flex-col ${
                    isHighlighted ? "lg:-mt-3 lg:mb-3" : ""
                  }`}
                  style={{
                    background: `linear-gradient(180deg, #FFFFFF 0%, ${d.tint} 100%)`,
                    border: `1px solid ${d.border}`,
                    boxShadow: isHighlighted
                      ? `0 24px 56px rgba(20,184,166,0.18)`
                      : "0 10px 28px rgba(8,17,31,0.05)",
                  }}
                >
                  <span
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: d.tone }}
                  />
                  {isHighlighted && (
                    <span
                      className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2 py-1 rounded-full"
                      style={{
                        background: "#04201E",
                        color: ACCENT,
                        fontSize: "9.5px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
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
                          background: `${d.tone}14`,
                          border: `1px solid ${d.tone}40`,
                          color: d.tone,
                        }}
                      >
                        <Icon size={16} strokeWidth={2.5} />
                      </div>
                      <div
                        className="uppercase tracking-[0.16em]"
                        style={{ color: d.tone, fontSize: "10.5px", fontWeight: 700 }}
                      >
                        {d.tag}
                      </div>
                    </div>
                    <div
                      className="text-[#08111F] mb-5"
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        letterSpacing: "-0.012em",
                        lineHeight: 1.3,
                      }}
                    >
                      {d.headline}
                    </div>
                    <ul className="space-y-3 flex-1">
                      {d.items.map((it) => (
                        <li key={it} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                            style={{
                              background: d.tone,
                              boxShadow: isHighlighted ? `0 0 6px ${d.tone}` : undefined,
                            }}
                          />
                          <span
                            className={isHighlighted ? "text-[#08111F]" : "text-[#4C5E6F]"}
                            style={{
                              fontSize: "13.5px",
                              lineHeight: 1.6,
                              fontWeight: isHighlighted ? 500 : 400,
                            }}
                          >
                            {it}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div
                      className="mt-6 pt-5 text-[#6F8190]"
                      style={{ borderTop: `1px dashed ${d.border}`, fontSize: "12.5px", lineHeight: 1.55, fontStyle: "italic" }}
                    >
                      {d.note}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cta" className="section bg-page-mist">
        <div className="container">
          <div className="relative rounded-[24px] overflow-hidden p-12 lg:p-20"
            style={{ background: "linear-gradient(160deg, #04201E 0%, #0A4942 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.20]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, #14B8A6 0%, transparent 45%), radial-gradient(circle at 90% 20%, #0E7D8C 0%, transparent 45%)",
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
                Before the rebuild, the read.{" "}
                <span className="text-white/55">
                  Where the existing site is letting work slip.
                </span>
              </h2>
              <p
                className="mt-6 text-white/65 mx-auto"
                style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}
              >
                We look at the current site, the service or treatment pages,
                the local trust, the enquiry paths, and the handoff after
                contact — together, in a working session. You walk away with a
                short list of what to rebuild first.
              </p>

              <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-white text-[#04201E] hover:bg-[#E4F6F4] rounded-full px-7 py-4 transition-colors"
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  Review my rebuild path
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
                No visual-refresh-only quote. No automated audit. No guarantees.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Rebuild({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <RBHero onNav={onNav} />
      <RBWhyDisappoint />
      <RBAuditBoard />
      <RBWhatItCovers />
      <RBPageInventory />
      <RBContentRescue />
      <RBPathways onNav={onNav} />
      <RBTrustPlacement />
      <RBAfterLaunch />
      <RBFitAndCta onNav={onNav} />
    </main>
  );
}
