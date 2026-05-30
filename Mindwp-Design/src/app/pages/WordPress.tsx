import { useState } from "react";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Layers,
  Repeat,
  Compass,
  Wrench,
  Settings,
  Plus,
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

// 01 HERO — centered
function WPHero({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#061323] via-[#071629] to-[#103E5A] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #35C7D8 0%, transparent 45%), radial-gradient(ellipse at 80% 90%, #14B8A6 0%, transparent 50%)",
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#35C7D8]/30 bg-[#35C7D8]/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
            <span
              className="text-[#9FE3EC] uppercase tracking-[0.2em]"
              style={{ fontSize: "10.5px", fontWeight: 700 }}
            >
              Implementation pathway · Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: "-0.022em" }}>
            WordPress is the base.
            <br />
            <span className="text-white/45">The website system is the work.</span>
          </h1>

          <p
            className="mt-8 mx-auto text-white/70"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "620px" }}
          >
            For established service businesses and specialist clinics, WordPress
            is the platform most teams already run on — and the right base for a
            site you can keep editing, extending, and trusting for years. The
            work above it is what carries the decision.
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
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
              { l: "Custom WordPress build", c: "#35C7D8" },
              { l: "Service & treatment pages", c: "#14B8A6" },
              { l: "Editable for the team", c: "#21B985" },
              { l: "Long-term ownership", c: "#9B7DE0" },
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

// 02 WHY WORDPRESS AS THE BASE
function WPWhyBase() {
  const reasons = [
    {
      n: "01",
      icon: Settings,
      tone: "#0E7D8C",
      title: "Editable in real working weeks",
      body:
        "WordPress is the platform the team can actually keep current — service updates, area additions, treatment changes, recent work — without a developer queue between them and a small edit.",
    },
    {
      n: "02",
      icon: Layers,
      tone: "#14B8A6",
      title: "Structural control",
      body:
        "Page templates, custom blocks, post types, and taxonomy that match how the business is organised — not forced into a generic theme's idea of a service page.",
    },
    {
      n: "03",
      icon: ShieldCheck,
      tone: "#21B985",
      title: "Long-term ownership",
      body:
        "The site, the database, the content, and the design system stay with the business. No vendor lock-in to a closed platform that owns the audience.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="text-[#0E7D8C] uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700 }}
          >
            Why WordPress as the base
          </div>
          <h2 className="text-[#08111F]">
            The platform is not the offer.{" "}
            <span className="text-[#4C5E6F]">
              It is the right ground to build on.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            WordPress is chosen as the base because it stays editable for the
            team, structural for the work, and owned by the business. The
            website system is what gets built on top.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {reasons.map((r) => {
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

// 03 WORDPRESS BUILD ANATOMY — structure-before-styling cross-section
function WPBuildAnatomy() {
  const layers = [
    {
      name: "Maintainability discipline",
      note: "Update path, backup procedure, recovery — the parts that should never fail quietly.",
      tone: "#6F8190",
      icon: Repeat,
    },
    {
      name: "Plugin discipline",
      note: "Only what earns its place — audited, justified, kept current. None inherited without reason.",
      tone: "#9B7DE0",
      icon: Settings,
    },
    {
      name: "Enquiry paths",
      note: "Forms and call routes attach the page, area, and reason before anyone replies.",
      tone: "#9A6F12",
      icon: ArrowRight,
    },
    {
      name: "Trust & proof placement",
      note: "Reviews, credentials, finished work — placed beside the call to action, not on a side page.",
      tone: "#21B985",
      icon: ShieldCheck,
    },
    {
      name: "Editing structure",
      note: "Reusable blocks, design tokens, and edit paths the team can actually own day-to-day.",
      tone: "#14B8A6",
      icon: Layers,
    },
    {
      name: "Page structure",
      note: "Custom templates and post types per service, treatment, and area — built as the first layer above the base.",
      tone: "#0E7D8C",
      icon: FileText,
    },
  ];
  const principles = [
    "Structure first — templates and post types are decided before any styling.",
    "The team's edit path is obvious; the structural parts are protected from it.",
    "Every plugin earns its place. None are inherited without a business reason.",
    "Performance and maintainability are build decisions, not launch-day afterthoughts.",
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <div
                className="text-[#6F8190] uppercase tracking-[0.18em] mb-5"
                style={{ fontSize: "11.5px", fontWeight: 700 }}
              >
                WordPress build anatomy
              </div>
              <h2 className="text-[#08111F]">
                Structure first.{" "}
                <span className="text-[#4C5E6F]">Styling is the last layer.</span>
              </h2>
              <p
                className="mt-6 text-[#4C5E6F]"
                style={{ fontSize: "16px", lineHeight: 1.65 }}
              >
                A design file is not a website yet. Imported old content is
                not a website yet. WordPress holds it all — and the layers
                we build on top decide whether the site is editable, fast,
                and useful, or just installed.
              </p>
              <ul className="mt-7 space-y-3.5">
                {principles.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    <span
                      className="w-1.5 h-1.5 mt-2 rounded-full shrink-0"
                      style={{ background: "#0E7D8C", boxShadow: "0 0 5px rgba(14,125,140,0.5)" }}
                    />
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: "14px", lineHeight: 1.6, fontWeight: 500 }}
                    >
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="relative">
              <span
                className="absolute left-7 top-3 bottom-3 w-px hidden md:block"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent, #E6EEF3 8%, #E6EEF3 92%, transparent)",
                }}
                aria-hidden="true"
              />
              <div className="space-y-2.5">
                {layers.map((layer, i) => {
                  const Icon = layer.icon;
                  return (
                    <div
                      key={layer.name}
                      className="relative rounded-xl bg-white px-4 lg:px-5 py-4 lg:py-5 flex items-start gap-4"
                      style={{
                        border: "1px solid #E6EEF3",
                        borderLeft: `3px solid ${layer.tone}`,
                        boxShadow: "0 6px 18px rgba(8,17,31,0.04)",
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 relative z-10"
                        style={{
                          background: `${layer.tone}12`,
                          border: `1px solid ${layer.tone}33`,
                          color: layer.tone,
                        }}
                      >
                        <Icon size={17} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <div
                            className="text-[#08111F]"
                            style={{
                              fontSize: "15.5px",
                              fontWeight: 700,
                              letterSpacing: "-0.012em",
                            }}
                          >
                            {layer.name}
                          </div>
                          <span
                            className="text-[#9CA3B0] tabular-nums shrink-0"
                            style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.14em" }}
                          >
                            L{String(layers.length - i).padStart(2, "0")}
                          </span>
                        </div>
                        <p
                          className="text-[#4C5E6F]"
                          style={{ fontSize: "13px", lineHeight: 1.6 }}
                        >
                          {layer.note}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className="mt-4 relative rounded-xl overflow-hidden p-5 lg:p-6"
                style={{
                  background:
                    "linear-gradient(160deg, #04101D 0%, #061323 55%, #0E2740 100%)",
                  boxShadow: "0 18px 44px rgba(6,19,35,0.25)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-[0.07] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <div className="relative flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(53,199,216,0.14)",
                      border: "1px solid rgba(53,199,216,0.35)",
                      color: "#35C7D8",
                    }}
                  >
                    <Wrench size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <div
                        className="text-white"
                        style={{
                          fontSize: "17px",
                          fontWeight: 700,
                          letterSpacing: "-0.012em",
                        }}
                      >
                        WordPress core
                      </div>
                      <span
                        className="uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                        style={{
                          fontSize: "9.5px",
                          fontWeight: 700,
                          color: "#9FE3EC",
                          background: "rgba(53,199,216,0.14)",
                          border: "1px solid rgba(53,199,216,0.30)",
                        }}
                      >
                        Foundation
                      </span>
                    </div>
                    <p
                      className="text-white/65"
                      style={{ fontSize: "13px", lineHeight: 1.6 }}
                    >
                      Open-source, owned by the business, the place every
                      layer above gets built. The platform decision is the
                      easy one — the build above is where the work earns
                      its place.
                    </p>
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

// 04 EDITING REALITY AFTER LAUNCH (signature)
function WPEditingReality() {
  const teamSide = [
    "Service or treatment content — what changes most often",
    "Service-area pages — adding or updating a covered area",
    "Recent work, reviews, and proof blocks beside the CTAs",
    "Hours, contact details, opening notes, holiday cover",
    "Pricing notes, frequently asked questions, policy lines",
  ];
  const platformSide = [
    "Page templates, post types, and the editing structure itself",
    "Reusable blocks, design tokens, and global styles",
    "Performance budget, image handling, and caching rules",
    "Integrations with the response and follow-up layer",
    "Long-term maintainability — the parts the team should not have to think about",
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="text-[#0E7D8C] uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700 }}
          >
            Editing reality after launch
          </div>
          <h2 className="text-[#08111F]">
            A WordPress build only works{" "}
            <span className="text-[#4C5E6F]">
              if the team can actually keep it current.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            We split the build into what the team owns day-to-day and what
            stays under the bonnet — so editing the site never feels like
            risking the site.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-7 items-stretch">
          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] bg-white border border-[#E6EEF3] p-8 lg:p-9"
              style={{ boxShadow: "0 16px 40px rgba(8,17,31,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: "#E5F4EC", border: "1px solid #BCE0CD", color: "#0F7A57" }}
                >
                  <Settings size={16} />
                </div>
                <div>
                  <div
                    className="text-[#0F7A57] uppercase tracking-[0.18em]"
                    style={{ fontSize: "10.5px", fontWeight: 700 }}
                  >
                    What the team can edit
                  </div>
                  <div
                    className="text-[#08111F]"
                    style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    Day-to-day content, in plain WordPress
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {teamSide.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#21B985] shrink-0" />
                    <span className="text-[#08111F]" style={{ fontSize: "14px", lineHeight: 1.55 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div
                className="mt-7 pt-5 border-t text-[#4C5E6F]"
                style={{ borderColor: "#EEF3F6", fontSize: "12.5px", lineHeight: 1.6 }}
              >
                No build-tool gymnastics. No staging-only flow. The edits the
                team makes most often are the easiest ones to make.
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div
              className="h-full rounded-[20px] p-8 lg:p-9 relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #061323 0%, #103E5A 100%)",
                boxShadow: "0 16px 44px rgba(8,17,31,0.20)",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(53,199,216,0.18)", border: "1px solid rgba(53,199,216,0.35)", color: "#35C7D8" }}
                  >
                    <Wrench size={16} />
                  </div>
                  <div>
                    <div
                      className="text-[#9FE3EC] uppercase tracking-[0.18em]"
                      style={{ fontSize: "10.5px", fontWeight: 700 }}
                    >
                      What stays under the bonnet
                    </div>
                    <div
                      className="text-white"
                      style={{ fontSize: "19px", fontWeight: 700, letterSpacing: "-0.012em" }}
                    >
                      The structural parts the team should not have to touch
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {platformSide.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 mt-2 rounded-full bg-[#35C7D8] shrink-0 shadow-[0_0_5px_#35C7D8]" />
                      <span className="text-white/85" style={{ fontSize: "14px", lineHeight: 1.55 }}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className="mt-7 pt-5 border-t text-white/55"
                  style={{ borderColor: "rgba(255,255,255,0.10)", fontSize: "12.5px", lineHeight: 1.6 }}
                >
                  Built once, documented, then maintained on a schedule. The
                  team is not expected to know how this part works to do their
                  job well.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 05 WORDPRESS ROUTES — route selector by what you're bringing in
function WPPathways({ onNav }: { onNav: (p: Page) => void }) {
  const routes: {
    id?: Page;
    name: string;
    tone: string;
    tint: string;
    bestWhen: string;
    watchOut: string;
    likelyPath: string;
    linkLabel?: string;
  }[] = [
    {
      name: "Design file to WordPress",
      tone: "#0E7D8C",
      tint: "#EEF7F8",
      bestWhen:
        "Figma, XD, PSD, or sketch ready — clear brand and content direction.",
      watchOut:
        "Pixel translation only. Responsive, editing, and CTAs still have to be designed.",
      likelyPath:
        "Custom WordPress theme or Elementor/Bricks build, depending on who will edit it after.",
    },
    {
      name: "Existing WordPress rebuild",
      tone: "#14B8A6",
      tint: "#F1FBF9",
      bestWhen:
        "WordPress site has aged — slow, fragile, pages no longer carry the decision.",
      watchOut:
        "Inherited plugin stack. Old content that has to be reshaped, not just imported.",
      likelyPath:
        "Rebuild on the same WordPress install, keep what earns its place, replace the rest.",
      id: "rebuild",
      linkLabel: "See Website Rebuild",
    },
    {
      name: "Migrate into WordPress",
      tone: "#9A6F12",
      tint: "#FCF5E2",
      bestWhen:
        "Coming from HTML, Wix, Squarespace, Joomla, or another stack. Need long-term ownership.",
      watchOut:
        "URL structure, redirects, content reshape, and embed/plugin equivalents — not a one-click.",
      likelyPath:
        "Plan the URL map, rebuild content into WordPress structure, set up redirects, ship cleanly.",
    },
    {
      name: "Builder-based build",
      tone: "#E11D74",
      tint: "#FFF1F7",
      bestWhen:
        "Team will edit pages themselves and a builder editor is the workflow they know.",
      watchOut:
        "Builder bloat. Globals, templates, and discipline have to be set up properly.",
      likelyPath:
        "Elementor, Bricks, or Divi inside WordPress — chosen by who edits and what scales.",
      id: "elementor",
      linkLabel: "See builder paths",
    },
    {
      name: "WooCommerce store",
      tone: "#7F54B3",
      tint: "#F7F3FB",
      bestWhen:
        "Selling products, bookings, deposits — alongside or instead of service work.",
      watchOut:
        "Product page craft, checkout friction, store admin reality — not just plugin install.",
      likelyPath:
        "WooCommerce inside the WordPress build, run as part of the website system.",
      id: "woocommerce",
      linkLabel: "See WooCommerce",
    },
    {
      name: "Custom WordPress build",
      tone: "#0E2740",
      tint: "#F4F6F8",
      bestWhen:
        "Editing needs, performance, or integrations the builders cannot hold cleanly.",
      watchOut:
        "Long-term ownership and editing — custom should not mean closed to the team.",
      likelyPath:
        "Custom theme on WordPress core, with editable blocks where the team owns content.",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div
              className="text-[#6F8190] uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700 }}
            >
              WordPress routes
            </div>
            <h2 className="text-[#08111F]">
              The route depends on{" "}
              <span className="text-[#4C5E6F]">
                what you are bringing in.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              A design file, an existing WordPress site, a stack you are
              migrating from, or a store you are scaling — each one points
              to a different route inside WordPress. Pick the one that
              fits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {routes.map((r) => (
            <div
              key={r.name}
              className="relative rounded-2xl bg-white overflow-hidden flex flex-col"
              style={{
                border: "1px solid #E6EEF3",
                boxShadow: "0 8px 22px rgba(8,17,31,0.05)",
              }}
            >
              <div
                className="px-5 lg:px-6 py-4 border-b"
                style={{
                  borderColor: "#EEF3F6",
                  background: `linear-gradient(180deg, ${r.tint} 0%, #FFFFFF 100%)`,
                }}
              >
                <span
                  className="inline-flex items-center gap-2"
                  style={{ color: r.tone, fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.16em" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: r.tone }}
                  />
                  ROUTE
                </span>
                <div
                  className="mt-1.5 text-[#08111F]"
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    letterSpacing: "-0.012em",
                    lineHeight: 1.3,
                  }}
                >
                  {r.name}
                </div>
              </div>
              <div className="p-5 lg:p-6 flex-1 flex flex-col gap-3">
                <RouteLine label="Best when" tone={r.tone} body={r.bestWhen} />
                <RouteLine label="Watch out for" tone="#9A6F12" body={r.watchOut} />
                <RouteLine label="Likely path" tone="#0E2740" body={r.likelyPath} />
                {r.id && r.linkLabel && (
                  <button
                    onClick={() => onNav(r.id as Page)}
                    className="mt-2 self-start inline-flex items-center gap-1.5 border-b pb-0.5"
                    style={{
                      color: r.tone,
                      borderColor: r.tone,
                      fontSize: "11.5px",
                      fontWeight: 600,
                    }}
                  >
                    {r.linkLabel}
                    <ArrowRight size={11} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <p
          className="text-[#6F8190] mx-auto max-w-2xl text-center"
          style={{ fontSize: "13.5px", lineHeight: 1.7, fontStyle: "italic" }}
        >
          The builder underneath is the implementation. The website system is
          the work above it.
        </p>
      </div>
    </section>
  );
}

function RouteLine({ label, tone, body }: { label: string; tone: string; body: string }) {
  return (
    <div>
      <div
        className="uppercase tracking-[0.14em] mb-1"
        style={{ fontSize: "9.5px", fontWeight: 700, color: tone }}
      >
        {label}
      </div>
      <p className="text-[#4C5E6F]" style={{ fontSize: "12.5px", lineHeight: 1.55 }}>
        {body}
      </p>
    </div>
  );
}

// 06 PROJECT FIT — Good WordPress project / Wrong WordPress project
function WPFit() {
  const goodSignals = [
    {
      label: "Real site to keep current",
      note: "An established business or specialist clinic running a real site already.",
    },
    {
      label: "Team will edit content themselves",
      note: "No developer queue between the team and a small edit on a service page.",
    },
    {
      label: "Long-term ownership matters",
      note: "The site, content, and database stay with the business.",
    },
    {
      label: "Service or treatment pages decide",
      note: "Those pages are central to how visitors decide to act.",
    },
    {
      label: "Current site has been outgrown",
      note: "Dated, fragile, or built on something the team is now stuck with.",
    },
    {
      label: "Future improvement matters",
      note: "What happens after launch matters as much as launch day.",
    },
  ];
  const wrongSignals = [
    {
      label: "Cheapest brochure or single landing",
      note: "A quick template install with no business context behind it.",
    },
    {
      label: "Brand-only refresh, not structural",
      note: "Surface paint, no rebuild of how the site does its work.",
    },
    {
      label: "SaaS-only buyer, zero ownership",
      note: "Wants a closed platform that owns the audience and the data.",
    },
    {
      label: "Install-and-leave developer search",
      note: "Looking for someone to drop a theme in and move on.",
    },
    {
      label: "Ranking or traffic guarantees",
      note: "Expects promised numbers — we do not promise numbers.",
    },
    {
      label: "EMR or clinical compliance work",
      note: "Treatment-outcome claims, medical records, regulated workflows.",
    },
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="text-[#6F8190] uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700 }}
          >
            Project fit
          </div>
          <h2 className="text-[#08111F]">
            A good WordPress project,{" "}
            <span className="text-[#4C5E6F]">
              and the wrong one to start.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            What the WordPress build is built for — and what it isn't. The same
            project that fits us perfectly is the wrong fit for the buyer
            looking for the opposite. Naming both saves time on both sides.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-5 lg:gap-6 items-stretch">
          <div
            className="col-span-12 lg:col-span-6 relative rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(180deg, #FFFFFF 0%, #F1FBF9 100%)",
              border: "1px solid #BFE7E1",
              boxShadow: "0 18px 44px rgba(20,184,166,0.10)",
            }}
          >
            <span
              className="absolute left-0 top-0 bottom-0 w-1"
              style={{ background: "linear-gradient(180deg, #14B8A6, #0E7D8C)" }}
            />
            <div className="p-8 lg:p-9">
              <div className="flex items-start gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(20,184,166,0.12)",
                    border: "1px solid rgba(20,184,166,0.35)",
                    color: "#0E7D8C",
                  }}
                >
                  <Check size={16} strokeWidth={3} />
                </div>
                <div>
                  <div
                    className="uppercase tracking-[0.16em]"
                    style={{ color: "#0E7D8C", fontSize: "10.5px", fontWeight: 700 }}
                  >
                    A good WordPress project
                  </div>
                  <div
                    className="text-[#08111F] mt-1"
                    style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    Signals to look for in the brief
                  </div>
                </div>
              </div>
              <ul>
                {goodSignals.map((s, i) => (
                  <li
                    key={s.label}
                    className="py-3.5"
                    style={
                      i < goodSignals.length - 1
                        ? { borderBottom: "1px dashed #C7E9E3" }
                        : { paddingBottom: 0 }
                    }
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                        style={{
                          background: "#14B8A6",
                          boxShadow: "0 0 6px rgba(20,184,166,0.50)",
                        }}
                      />
                      <div>
                        <div
                          className="text-[#08111F]"
                          style={{ fontSize: "14.5px", fontWeight: 600, lineHeight: 1.4 }}
                        >
                          {s.label}
                        </div>
                        <p
                          className="mt-1 text-[#4C5E6F]"
                          style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                        >
                          {s.note}
                        </p>
                      </div>
                    </div>
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
                    The wrong WordPress project
                  </div>
                  <div
                    className="text-[#08111F] mt-1"
                    style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    Briefs we will steer somewhere else
                  </div>
                </div>
              </div>
              <ul>
                {wrongSignals.map((s, i) => (
                  <li
                    key={s.label}
                    className="py-3.5"
                    style={
                      i < wrongSignals.length - 1
                        ? { borderBottom: "1px dashed #E6EAEF" }
                        : { paddingBottom: 0 }
                    }
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#9CA3B0] shrink-0 mt-2" />
                      <div>
                        <div
                          className="text-[#08111F]"
                          style={{ fontSize: "14.5px", fontWeight: 600, lineHeight: 1.4 }}
                        >
                          {s.label}
                        </div>
                        <p
                          className="mt-1 text-[#6F8190]"
                          style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                        >
                          {s.note}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div
                className="mt-6 pt-5 text-[#6F8190]"
                style={{ borderTop: "1px solid #E6EAEF", fontSize: "12px", lineHeight: 1.55, fontStyle: "italic" }}
              >
                Tell us early — we will say so early too.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 07 FAQ — kept light, page-specific
function WPFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    {
      q: "Can you build from a Figma, XD, or PSD design?",
      a: "Yes — design files are one of the most common starting points. We do not stop at pixel translation, though. A design file does not tell us how the page should re-flow on mobile, where trust should sit beside the call to action, or what the team will need to edit later. We name those decisions before the build starts and rebuild any sections that would weaken the page craft.",
    },
    {
      q: "Can you migrate an existing site into WordPress?",
      a: "Yes — from HTML, Wix, Squarespace, Joomla, or another stack. Migration is more than an import. We plan the URL map, set up the redirects, reshape the content into WordPress structure, and rebuild anything that was glued together with the old platform's quirks. We will not pretend a migration is a one-click move.",
    },
    {
      q: "Do you use Elementor, Bricks, or Divi?",
      a: "Where each one serves the build. Elementor when the team will edit pages themselves. Bricks for clean markup, performance, and reusable components. Divi where the team already runs Divi and the editor is the workflow they know. The builder underneath is the implementation — the website system is the work above it.",
    },
    {
      q: "Are you a WordPress agency?",
      a: "We build website systems on WordPress for established service businesses and specialist clinics. WordPress is the platform we work on most — but the work itself is the system above it: service or treatment page structure, trust placement, intent-matched CTAs, enquiry capture with context, and a clean handoff to the rest of the response and follow-up work.",
    },
    {
      q: "Will the team be able to edit the site after launch?",
      a: "Yes — that is part of the build. We split the site into what the team owns day-to-day (service or treatment content, area pages, reviews, hours, prices) and what stays under the bonnet (templates, components, performance, integrations). Editing the parts that change often does not put the parts that should not change at risk.",
    },
    {
      q: "Will the site be slow because it is WordPress?",
      a: "Not because of WordPress. Performance is a build decision — image handling, caching, plugin discipline, theme structure. The platform is not the bottleneck; the way it is set up usually is.",
    },
    {
      q: "Where does this sit in the rest of MindWP?",
      a: "WordPress Development is an implementation pathway under Smart Website Systems — the visible front door of the business. Local visibility, first response, sequenced follow-up, and review collection live in their own offers and connect to the website system.",
    },
    {
      q: "What happens first?",
      a: "A short review of the existing site and what happens around it — what is working, what is weak, and what would change which step a visitor takes. Then we agree what to rebuild, what to keep, and which path inside WordPress fits best.",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <div
              className="text-[#6F8190] uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700 }}
            >
              Practical questions
            </div>
            <h2 className="text-[#08111F]">
              WordPress, in plain answers.
            </h2>
            <p
              className="mt-5 text-[#4C5E6F]"
              style={{ fontSize: "15px", lineHeight: 1.65 }}
            >
              The questions service businesses and clinics tend to ask before
              committing — answered without hype, guarantees, or sales pressure.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <div className="rounded-2xl bg-white border border-[#E6EEF3] divide-y divide-[#E6EEF3] overflow-hidden">
              {faqs.map((f, i) => (
                <button
                  key={f.q}
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-6 py-5 hover:bg-[#F6FAFC] transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-[#08111F]"
                      style={{ fontSize: "15.5px", fontWeight: 600 }}
                    >
                      {f.q}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#EEF6FA] text-[#0E2740] flex items-center justify-center shrink-0">
                      {open === i ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </div>
                  {open === i && (
                    <p
                      className="mt-3 text-[#4C5E6F]"
                      style={{ fontSize: "14.5px", lineHeight: 1.65 }}
                    >
                      {f.a}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 08 CTA
function WPCta({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section id="cta" className="section bg-page-mist">
      <div className="container">
        <div className="relative rounded-[24px] bg-gradient-to-br from-[#061323] to-[#081827] p-12 lg:p-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 80%, #35C7D8 0%, transparent 45%), radial-gradient(circle at 90% 20%, #14B8A6 0%, transparent 45%)",
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
              <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              <span className="text-white/85 uppercase">Start with a review</span>
            </div>
            <h2 className="text-white">
              The platform is the easy choice.{" "}
              <span className="text-white/55">
                The website system is where the work earns its place.
              </span>
            </h2>
            <p
              className="mt-6 text-white/65 mx-auto"
              style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}
            >
              We look at the existing site, the service or treatment pages, the
              local trust, and the enquiry paths — together, in a working
              session. You walk away with a short list of what to fix first.
            </p>

            <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#"
                className="inline-flex items-center gap-2.5 bg-white text-[#061323] hover:bg-[#EEF6FA] rounded-full px-7 py-4 transition-colors"
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
              No hard sell. No automated audit. No ranking guarantee.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WordPress({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <WPHero onNav={onNav} />
      <WPWhyBase />
      <WPBuildAnatomy />
      <WPEditingReality />
      <WPPathways onNav={onNav} />
      <WPFit />
      <WPFaq />
      <WPCta onNav={onNav} />
    </main>
  );
}
