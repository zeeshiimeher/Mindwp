import {
  ArrowRight,
  Compass,
  ShoppingBag,
  Package,
  CreditCard,
  Truck,
  Settings,
  ShieldCheck,
  Layers,
  Star,
  Minus,
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

const ACCENT = "#7F54B3";
const ACCENT_SOFT = "rgba(127,84,179,0.12)";
const ACCENT_BORDER = "rgba(127,84,179,0.32)";

// 01 HERO — centered
function WCHero({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <section className="section-hero relative bg-gradient-to-br from-[#150C20] via-[#1F1230] to-[#3A1F58] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 10%, #7F54B3 0%, transparent 45%), radial-gradient(ellipse at 80% 90%, #4A2A75 0%, transparent 50%)",
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
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#D4BFEC" }}
            >
              Implementation pathway · Smart Website Systems
            </span>
          </div>

          <h1 className="text-white" style={{ letterSpacing: "-0.022em" }}>
            WooCommerce stores
            <br />
            <span className="text-white/45">built for the buying decision.</span>
          </h1>

          <p
            className="mt-8 mx-auto text-white/70"
            style={{ fontSize: "18px", lineHeight: 1.6, maxWidth: "640px" }}
          >
            New store from a design or brief, or an existing WooCommerce store
            that has grown messy — MindWP builds the buying decision across
            product, browse, cart, checkout, and the policies that usually
            arrive too late. Built well, every step earns the next.
          </p>

          <div className="mt-10 flex items-center justify-center gap-7 flex-wrap">
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-[#150C20] hover:bg-[#F0EBFA] rounded-full px-7 py-4 transition-colors"
              style={{ fontSize: "15px", fontWeight: 600 }}
            >
              Review my store path
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
              { l: "WooCommerce build", c: "#7F54B3" },
              { l: "Store rebuild", c: "#D4BFEC" },
              { l: "Checkout clarity", c: "#35C7D8" },
              { l: "Product page architecture", c: "#21B985" },
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

// 02 WHERE STORES LEAK — signature scrap grid
function WCWhereLeak() {
  const scraps = [
    {
      tag: "PRODUCT",
      tagColor: "#0468A8",
      tagBg: "#EEF4FA",
      rotate: -1.4,
      moment:
        "The product page is a title, a price, and three small thumbnails. The buyer cannot tell what the product includes, what it does not, or why they are looking at it.",
      lost: "Product page that does not sell.",
    },
    {
      tag: "CATEGORY",
      tagColor: "#9A6F12",
      tagBg: "#FCF5E2",
      rotate: 1.1,
      moment:
        "The category page is forty products in a grid. No filters. No story. No reason to choose one over another. The buyer leaves to compare elsewhere.",
      lost: "Browse without direction.",
    },
    {
      tag: "CHECKOUT",
      tagColor: "#B23B3B",
      tagBg: "#FDECEC",
      rotate: -0.6,
      moment:
        "Checkout asks for a phone number, a marketing consent, a billing address, and an account password — before the buyer even knows the final total.",
      lost: "Friction at the moment of decision.",
    },
    {
      tag: "SHIPPING",
      tagColor: "#0F7A57",
      tagBg: "#E5F4EC",
      rotate: 1.5,
      moment:
        "Shipping cost appears at the last step. It is more than the buyer expected. The cart was already mentally bought — and now it is abandoned.",
      lost: "Surprise after the decision.",
    },
    {
      tag: "TRUST",
      tagColor: "#5E36AB",
      tagBg: "#F0EBFB",
      rotate: -1.0,
      moment:
        "Near the pay button, no reviews. No returns note. No badge of who actually runs the store. The buyer pauses — and the pause is enough.",
      lost: "Trust missing at the click.",
    },
    {
      tag: "RETURNING",
      tagColor: "#0E7D8C",
      tagBg: "#EEF7F8",
      rotate: 0.8,
      moment:
        "A returning buyer cannot find what they bought last time. The reorder takes longer than the original. They go somewhere with a better account flow.",
      lost: "Loyalty made harder than it needs to be.",
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
            Where stores leak
          </div>
          <h2 className="text-[#08111F]">
            The traffic arrived.{" "}
            <span className="text-[#4C5E6F]">The decision still did not happen.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "660px" }}
          >
            Six common moments where a WooCommerce store quietly loses a buyer
            who arrived ready to buy. Each one is familiar. None of them are
            about the product itself.
          </p>
        </div>

        <div
          className="rounded-[24px] bg-white border border-[#E6EEF3] p-7 lg:p-12 relative overflow-hidden"
          style={{ boxShadow: "0 20px 56px rgba(8,17,31,0.06)" }}
        >
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, #E0E6EE 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
            {scraps.map((s) => (
              <div
                key={s.tag + s.moment.slice(0, 10)}
                className="rounded-xl bg-white border border-[#E6EEF3] p-5 lg:p-6 relative"
                style={{
                  transform: `rotate(${s.rotate}deg)`,
                  boxShadow: "0 10px 28px rgba(8,17,31,0.06)",
                }}
              >
                <span
                  className="absolute top-0 left-1/2 px-3 py-0.5 rounded-sm"
                  style={{
                    background: s.tagBg,
                    border: `1px solid ${s.tagColor}40`,
                    transform: `translate(-50%, -50%) rotate(${-s.rotate * 0.6}deg)`,
                  }}
                >
                  <span
                    className="uppercase tracking-[0.16em]"
                    style={{ color: s.tagColor, fontSize: "9.5px", fontWeight: 700 }}
                  >
                    {s.tag}
                  </span>
                </span>
                <p
                  className="mt-2 text-[#08111F]"
                  style={{ fontSize: "14px", lineHeight: 1.55, fontStyle: "italic" }}
                >
                  {s.moment}
                </p>
                <div className="mt-4 pt-3 border-t border-[#EEF3F6] flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: ACCENT, boxShadow: `0 0 5px ${ACCENT}` }}
                  />
                  <span className="text-[#6F8190]" style={{ fontSize: "11.5px", fontWeight: 600 }}>
                    {s.lost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-12 pt-8 border-t border-[#EEF3F6] text-center">
            <p
              className="text-[#08111F] mx-auto max-w-[640px]"
              style={{ fontSize: "15.5px", lineHeight: 1.65 }}
            >
              <span className="font-semibold">Most cart abandonment is not buyer doubt.</span>{" "}
              <span className="text-[#4C5E6F]">
                It is the store asking too much, too late, or too quietly.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// 03 PRODUCT PAGE ANATOMY — wireframe with section callouts
function WCProductAnatomy() {
  const sections = [
    {
      n: "01",
      label: "Product clarity",
      note:
        "Title, price, the one-line description of what it is — answers the visitor's first question without scrolling.",
    },
    {
      n: "02",
      label: "Variations",
      note:
        "Size, colour, finish, options — selected without leaving the page or guessing what is in stock.",
    },
    {
      n: "03",
      label: "Trust near the buy button",
      note:
        "Reviews specific to this product, returns clarity, dispatch promise — placed beside Add to Cart, not on a separate tab.",
    },
    {
      n: "04",
      label: "Delivery & returns",
      note:
        "Estimated delivery and return policy visible before commitment — never as a surprise on the final step.",
    },
    {
      n: "05",
      label: "Add to cart",
      note:
        "Clear primary action. Shipping cost previewed. No marketing consent disguised as agreement.",
    },
    {
      n: "06",
      label: "Related products",
      note:
        "Cross-sell that genuinely fits — surfaced for the buyer rather than pressured upsell at the buyer.",
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
            Product page anatomy
          </div>
          <h2 className="text-[#08111F]">
            A product page is a wireframe of the buying decision,{" "}
            <span className="text-[#4C5E6F]">not a product card.</span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            Six sections every WooCommerce product page has to hold — in
            roughly this order. Each one earns the next step or quietly
            loses it.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* WIREFRAME */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
            <div
              className="rounded-2xl bg-white p-5 lg:p-7 relative"
              style={{
                border: "1px solid #E6EEF3",
                boxShadow: "0 16px 40px rgba(8,17,31,0.06)",
              }}
            >
              <div
                className="flex items-center justify-between mb-4 pb-3 border-b"
                style={{ borderColor: "#EEF3F6" }}
              >
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E5E9EE]" />
                  <span className="w-2 h-2 rounded-full bg-[#E5E9EE]" />
                  <span className="w-2 h-2 rounded-full bg-[#E5E9EE]" />
                </div>
                <span
                  className="text-[#9CA3B0] tabular-nums"
                  style={{ fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.14em" }}
                >
                  /shop/product/winter-jacket
                </span>
              </div>

              <div className="grid grid-cols-12 gap-4">
                {/* Gallery */}
                <div className="col-span-12 md:col-span-6">
                  <div
                    className="rounded-lg overflow-hidden relative"
                    style={{
                      background: "#F4F5F7",
                      border: "1px solid #EEF3F6",
                      aspectRatio: "1 / 1",
                    }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 50% 40%, #DDE2E8 0%, transparent 60%)",
                      }}
                    >
                      <span className="text-[#9CA3B0]" style={{ fontSize: "12px" }}>
                        Product image
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-md"
                        style={{
                          background: "#F4F5F7",
                          border: "1px solid #EEF3F6",
                          aspectRatio: "1 / 1",
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Buy box */}
                <div className="col-span-12 md:col-span-6 relative">
                  <CalloutBadge n="01" tone={ACCENT} />
                  <div
                    className="rounded-lg p-3.5 border bg-[#FAFBFD]"
                    style={{ borderColor: "#EEF3F6" }}
                  >
                    <div className="h-3 rounded bg-[#08111F] w-3/4 mb-2" />
                    <div className="h-2.5 rounded bg-[#DDE2E8] w-1/2 mb-3" />
                    <div className="flex items-baseline gap-2">
                      <div
                        className="h-4 rounded w-12"
                        style={{ background: "#08111F" }}
                      />
                      <div className="h-2.5 rounded bg-[#DDE2E8] w-8" />
                    </div>
                  </div>

                  <div className="relative mt-3">
                    <CalloutBadge n="02" tone={ACCENT} />
                    <div
                      className="rounded-lg p-3.5 border"
                      style={{ borderColor: "#EEF3F6", background: "#FFFFFF" }}
                    >
                      <div className="h-2 rounded bg-[#9CA3B0] opacity-50 w-1/4 mb-2.5" />
                      <div className="flex gap-2 mb-3">
                        {["S", "M", "L", "XL"].map((s) => (
                          <span
                            key={s}
                            className="px-2 py-1 rounded text-[10px] font-semibold"
                            style={{
                              background: s === "M" ? ACCENT_SOFT : "#F4F5F7",
                              color: s === "M" ? ACCENT : "#6F8190",
                              border: `1px solid ${s === "M" ? ACCENT_BORDER : "#EEF3F6"}`,
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-1.5">
                        {[
                          "#0E2740",
                          "#7F54B3",
                          "#21B985",
                          "#E8843F",
                        ].map((c, i) => (
                          <span
                            key={i}
                            className="w-5 h-5 rounded-full border-2 border-white"
                            style={{ background: c, boxShadow: "0 0 0 1px #DDE2E8" }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3">
                    <CalloutBadge n="03" tone={ACCENT} />
                    <div
                      className="rounded-lg p-2.5 border flex items-center gap-2"
                      style={{
                        borderColor: "#EEF3F6",
                        background: "linear-gradient(180deg, #FFFFFF 0%, #F4EFFB 100%)",
                      }}
                    >
                      {[1, 2, 3].map((i) => (
                        <Star
                          key={i}
                          size={10}
                          fill={ACCENT}
                          stroke={ACCENT}
                        />
                      ))}
                      <span style={{ fontSize: "10px", color: "#08111F", fontWeight: 600 }}>
                        4.7
                      </span>
                      <span style={{ fontSize: "9.5px", color: "#6F8190" }}>
                        · 38 reviews
                      </span>
                      <span
                        className="ml-auto px-1.5 py-0.5 rounded text-[8.5px] font-semibold"
                        style={{
                          color: "#0F7A57",
                          background: "#E5F4EC",
                          border: "1px solid #BCE0CD",
                        }}
                      >
                        30-DAY RETURN
                      </span>
                    </div>
                  </div>

                  <div className="relative mt-3">
                    <CalloutBadge n="04" tone={ACCENT} />
                    <div
                      className="rounded-lg p-2.5 border"
                      style={{ borderColor: "#EEF3F6" }}
                    >
                      <div className="flex items-center gap-2">
                        <Truck size={11} className="text-[#0F7A57]" />
                        <span style={{ fontSize: "10px", color: "#08111F", fontWeight: 600 }}>
                          Free delivery
                        </span>
                        <span style={{ fontSize: "10px", color: "#6F8190" }}>
                          · Arrives Wed
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-3">
                    <CalloutBadge n="05" tone={ACCENT} />
                    <div
                      className="rounded-lg flex items-center justify-center py-3 px-4"
                      style={{
                        background: ACCENT,
                        color: "#FFFFFF",
                        fontSize: "12px",
                        fontWeight: 700,
                        letterSpacing: "0.04em",
                      }}
                    >
                      Add to cart
                    </div>
                  </div>
                </div>

                {/* Related */}
                <div className="col-span-12 relative mt-4">
                  <CalloutBadge n="06" tone={ACCENT} />
                  <div
                    className="rounded-lg p-3 border"
                    style={{ borderColor: "#EEF3F6", background: "#FAFBFD" }}
                  >
                    <div
                      className="uppercase tracking-[0.14em] mb-2"
                      style={{ fontSize: "9.5px", fontWeight: 700, color: "#6F8190" }}
                    >
                      You might also like
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i}>
                          <div
                            className="rounded-md"
                            style={{
                              background: "#F4F5F7",
                              border: "1px solid #EEF3F6",
                              aspectRatio: "1 / 1",
                            }}
                          />
                          <div className="h-2 rounded bg-[#DDE2E8] w-3/4 mt-1.5" />
                          <div className="h-2 rounded bg-[#EEF3F6] w-1/2 mt-1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CALLOUT LIST */}
          <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
            <ul className="space-y-4">
              {sections.map((s) => (
                <li
                  key={s.n}
                  className="flex items-start gap-3"
                >
                  <span
                    className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center tabular-nums"
                    style={{
                      background: ACCENT,
                      color: "#FFFFFF",
                      fontSize: "10.5px",
                      fontWeight: 700,
                      letterSpacing: "0.04em",
                      boxShadow: `0 0 0 3px ${ACCENT_SOFT}`,
                    }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: "14.5px", fontWeight: 700, letterSpacing: "-0.012em" }}
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalloutBadge({ n, tone }: { n: string; tone: string }) {
  return (
    <span
      className="absolute -left-1.5 -top-1.5 w-5 h-5 rounded-full flex items-center justify-center tabular-nums z-10"
      style={{
        background: tone,
        color: "#FFFFFF",
        fontSize: "9px",
        fontWeight: 700,
        boxShadow: `0 0 0 2px #FFFFFF, 0 2px 6px ${tone}55`,
      }}
    >
      {n}
    </span>
  );
}

// 04 CATEGORY & COLLECTION CLARITY
function WCCategory() {
  const items = [
    {
      n: "01",
      icon: ShoppingBag,
      tone: ACCENT,
      title: "A category is a story, not a grid",
      body:
        "Each category leads with a short note on what the buyer will find here, who it suits, and how to narrow it down. The shelf has a guide, not just a list.",
    },
    {
      n: "02",
      icon: Layers,
      tone: "#0E7D8C",
      title: "Filters that match how buyers actually choose",
      body:
        "Filters built around the questions buyers ask — material, size, use case, finish — not by warehouse tags or stockkeeping codes.",
    },
    {
      n: "03",
      icon: Compass,
      tone: "#0F7A57",
      title: "A hierarchy that helps the buyer narrow down",
      body:
        "Sub-collections that genuinely simplify the choice. Not a flat list of forty products with no way in.",
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
            Category & collection clarity
          </div>
          <h2 className="text-[#08111F]">
            Browse is half the buying decision.{" "}
            <span className="text-[#4C5E6F]">
              The shelf should help, not just hold stock.
            </span>
          </h2>
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

// 05 CART & CHECKOUT — checkout friction map
function WCCheckout() {
  const steps = [
    {
      n: "01",
      label: "Cart",
      friction:
        "Buyer can't see the final total. Shipping not previewed. No clarity on what they're committing to.",
      fix: "Order summary visible from the cart on — delivery included.",
    },
    {
      n: "02",
      label: "Details",
      friction:
        "Phone number required without reason. Marketing consent disguised as agreement. Account creation forced.",
      fix: "Only what we need, when we need it. Guest checkout offered first.",
    },
    {
      n: "03",
      label: "Shipping",
      friction:
        "Cost appears here for the first time. Buyer never budgeted for it. Cart is mentally abandoned.",
      fix: "Cost already known. Buyer just confirms the method.",
    },
    {
      n: "04",
      label: "Payment",
      friction:
        "Card details lost on a validation error. Buyer has to redo the whole form. Page reload at the worst moment.",
      fix: "Errors handled in place. Card kept. No reload.",
    },
    {
      n: "05",
      label: "Confirmation",
      friction:
        "Buyer sees an order number and nothing else. No follow-up plan. The store goes quiet after payment.",
      fix: "Next steps, contact route, and what to expect — written in plain language.",
    },
  ];

  return (
    <section className="section bg-page-white">
      <div className="container section-stack">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <div
              className="uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Checkout friction map
            </div>
            <h2 className="text-[#08111F]">
              Friction is not a feature.{" "}
              <span className="text-[#4C5E6F]">
                Every extra step is one chance to lose the buyer.
              </span>
            </h2>
            <p
              className="mt-6 text-[#4C5E6F]"
              style={{ fontSize: "16px", lineHeight: 1.65 }}
            >
              No promise of a conversion-rate uplift. What the build commits
              to is taking unnecessary friction out of the five steps the
              buyer has already decided to take.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div
              className="rounded-2xl bg-white overflow-hidden"
              style={{
                border: "1px solid #E6EEF3",
                boxShadow: "0 14px 36px rgba(8,17,31,0.05)",
              }}
            >
              <div
                className="px-6 lg:px-7 py-4 border-b flex items-center justify-between gap-3"
                style={{
                  borderColor: "#EEF3F6",
                  background: "linear-gradient(180deg, #F4EFFB 0%, #FFFFFF 100%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <CreditCard size={13} style={{ color: ACCENT }} />
                  <span
                    className="uppercase tracking-[0.14em]"
                    style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
                  >
                    The 5-step checkout pipeline
                  </span>
                </div>
                <span
                  className="text-[#6F8190] uppercase tracking-[0.14em]"
                  style={{ fontSize: "10px", fontWeight: 700 }}
                >
                  Friction vs fix
                </span>
              </div>
              <ul>
                {steps.map((s, i) => (
                  <li
                    key={s.n}
                    className={`grid grid-cols-12 gap-3 lg:gap-4 px-6 lg:px-7 py-5 ${
                      i < steps.length - 1 ? "border-b border-[#EEF3F6]" : ""
                    }`}
                  >
                    <div className="col-span-12 md:col-span-3 flex items-start gap-3">
                      <span
                        className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center tabular-nums"
                        style={{
                          background: "#150C20",
                          color: ACCENT,
                          fontSize: "11.5px",
                          fontWeight: 700,
                          letterSpacing: "0.06em",
                          boxShadow: `0 0 0 3px ${ACCENT_SOFT}`,
                        }}
                      >
                        {s.n}
                      </span>
                      <div className="pt-1">
                        <div
                          className="text-[#08111F]"
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            letterSpacing: "-0.012em",
                          }}
                        >
                          {s.label}
                        </div>
                        <div
                          className="uppercase tracking-[0.14em] mt-0.5"
                          style={{
                            fontSize: "9px",
                            fontWeight: 700,
                            color: "#9CA3B0",
                          }}
                        >
                          Step {s.n}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-12 md:col-span-9 space-y-2.5">
                      <div className="flex items-start gap-2.5">
                        <span
                          className="shrink-0 mt-0.5 px-2 py-0.5 rounded uppercase tracking-[0.14em]"
                          style={{
                            background: "#FDECEC",
                            color: "#B23B3B",
                            fontSize: "9px",
                            fontWeight: 700,
                            border: "1px solid #F0CACA",
                          }}
                        >
                          Friction
                        </span>
                        <p
                          className="text-[#4C5E6F]"
                          style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                        >
                          {s.friction}
                        </p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span
                          className="shrink-0 mt-0.5 px-2 py-0.5 rounded uppercase tracking-[0.14em]"
                          style={{
                            background: ACCENT_SOFT,
                            color: ACCENT,
                            fontSize: "9px",
                            fontWeight: 700,
                            border: `1px solid ${ACCENT_BORDER}`,
                          }}
                        >
                          Fix
                        </span>
                        <p
                          className="text-[#08111F]"
                          style={{
                            fontSize: "12.5px",
                            lineHeight: 1.55,
                            fontWeight: 500,
                          }}
                        >
                          {s.fix}
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

// 06 SHIPPING, PAYMENT & POLICY CLARITY
function WCPolicy() {
  const items = [
    {
      icon: Truck,
      label: "Shipping shown early",
      note: "Delivery options and costs visible on the product page and inside the cart — never as a last-step surprise.",
    },
    {
      icon: CreditCard,
      label: "Payment methods explained",
      note: "Which methods the store accepts, what currency, and what happens if a payment fails — written before the buyer needs to ask.",
    },
    {
      icon: Package,
      label: "Returns & refunds clear",
      note: "A short, plain-language returns note placed beside the buy button. The buyer knows the answer before they commit.",
    },
    {
      icon: ShieldCheck,
      label: "Contact route if something goes wrong",
      note: "A real route to a real person — visible at every step. The store does not vanish after the order confirmation page.",
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
            Shipping, payment & policy clarity
          </div>
          <h2 className="text-[#08111F]">
            The information was always there.{" "}
            <span className="text-[#4C5E6F]">
              It just needed to arrive before the buyer had to ask.
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {items.map((p) => {
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

// 07 STORE ADMIN REALITY — what running the store actually looks like
function WCStoreManagement() {
  const tasks = [
    {
      n: "01",
      icon: ShoppingBag,
      tone: ACCENT,
      label: "Order queue",
      daily: "New, in progress, dispatched, returned — at a glance.",
      build:
        "Custom order statuses that match how the team actually fulfils, not the generic WooCommerce defaults.",
    },
    {
      n: "02",
      icon: Package,
      tone: "#9A6F12",
      label: "Stock & product edits",
      daily: "Price change, variant added, photo swapped, description corrected.",
      build:
        "Edit fields are plain. The structural parts of the page are protected from a routine product update.",
    },
    {
      n: "03",
      icon: CreditCard,
      tone: "#0F7A57",
      label: "Customer emails",
      daily: "Order confirmations, shipping updates, replies to a buyer's question.",
      build:
        "Transactional templates rewritten — the team's voice carries through, not the WooCommerce template defaults.",
    },
    {
      n: "04",
      icon: Compass,
      tone: "#0E7D8C",
      label: "Basic reports",
      daily: "Sales by product, sales by category, returning vs new buyers.",
      build:
        "The handful of views that actually inform decisions — not the dashboard noise that nobody reads.",
    },
    {
      n: "05",
      icon: Settings,
      tone: "#35C7D8",
      label: "Team handoff",
      daily: "Order owner, fulfilment status, customer-facing notes — passed cleanly between people.",
      build:
        "Order routing and ownership built into the admin, not held in a side spreadsheet nobody else can read.",
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
              Store admin reality
            </div>
            <h2 className="text-[#08111F]">
              The build is half the work.{" "}
              <span className="text-[#4C5E6F]">
                Running it day to day is the other half.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex items-end">
            <p className="text-[#4C5E6F]" style={{ fontSize: "16px", lineHeight: 1.65 }}>
              The five things the team actually does inside the store every
              week — and how the build keeps each of them out of the
              spreadsheet, off the breath-holding list.
            </p>
          </div>
        </div>

        <div
          className="rounded-2xl bg-white overflow-hidden"
          style={{
            border: "1px solid #E6EEF3",
            boxShadow: "0 14px 36px rgba(8,17,31,0.05)",
          }}
        >
          <div
            className="hidden md:grid grid-cols-12 gap-5 px-6 lg:px-8 py-4 border-b bg-[#F9FCFD]"
            style={{ borderColor: "#EEF3F6" }}
          >
            <div
              className="col-span-3 uppercase tracking-[0.16em]"
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Admin task
            </div>
            <div
              className="col-span-4 uppercase tracking-[0.16em]"
              style={{ fontSize: "10.5px", fontWeight: 700, color: "#6F8190" }}
            >
              What the team needs
            </div>
            <div
              className="col-span-5 uppercase tracking-[0.16em] flex items-center gap-2"
              style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: ACCENT, boxShadow: `0 0 5px ${ACCENT}` }}
              />
              How the build supports it
            </div>
          </div>

          {tasks.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.n}
                className={`grid grid-cols-12 gap-5 px-6 lg:px-8 py-5 ${
                  i < tasks.length - 1 ? "border-b border-[#EEF3F6]" : ""
                }`}
              >
                <div className="col-span-12 md:col-span-3 flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: `${t.tone}14`,
                      border: `1px solid ${t.tone}33`,
                      color: t.tone,
                    }}
                  >
                    <Icon size={15} />
                  </div>
                  <div>
                    <div
                      className="text-[#08111F]"
                      style={{ fontSize: "14.5px", fontWeight: 700, letterSpacing: "-0.012em" }}
                    >
                      {t.label}
                    </div>
                    <span
                      className="text-[#9CA3B0] tabular-nums"
                      style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.14em" }}
                    >
                      ADMIN {t.n}
                    </span>
                  </div>
                </div>
                <div
                  className="col-span-12 md:col-span-4 text-[#4C5E6F]"
                  style={{ fontSize: "13px", lineHeight: 1.6 }}
                >
                  <span
                    className="md:hidden uppercase tracking-[0.14em] mr-2 block mb-1"
                    style={{ fontSize: "10px", fontWeight: 700, color: "#9CA3B0" }}
                  >
                    Daily
                  </span>
                  {t.daily}
                </div>
                <div
                  className="col-span-12 md:col-span-5 text-[#08111F]"
                  style={{ fontSize: "13px", lineHeight: 1.6, fontWeight: 500 }}
                >
                  <span
                    className="md:hidden uppercase tracking-[0.14em] mr-2 block mb-1"
                    style={{ fontSize: "10px", fontWeight: 700, color: ACCENT }}
                  >
                    Build
                  </span>
                  <span className="flex items-start gap-2">
                    <ArrowRight
                      size={13}
                      className="shrink-0 mt-1"
                      style={{ color: ACCENT }}
                    />
                    {t.build}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 08 FROM MESSY STORE TO REBUILT STORE
function WCRebuild() {
  const keep = [
    "Genuine product photography and existing imagery from real stock",
    "Honest product descriptions written by the team",
    "Real customer reviews and reorder history",
    "Working payment gateway, shipping zones, and tax configuration",
    "URL structure the search engines and returning buyers know",
    "Stock data, variants, and operational flows already in use",
  ];
  const rebuild = [
    "Product pages that do not explain what they sell",
    "Category pages built as a flat grid with no story",
    "Checkout that asks for marketing consent as a required field",
    "Shipping costs hidden until the final step",
    "Trust placement missing from the product and cart pages",
    "Pages built around a template, not around the buying decision",
  ];

  return (
    <section className="section bg-page-mist">
      <div className="container section-stack">
        <div className="mx-auto max-w-[820px] text-center">
          <div
            className="uppercase tracking-[0.18em] mb-5"
            style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
          >
            From messy store to rebuilt store
          </div>
          <h2 className="text-[#08111F]">
            A rebuild keeps what works.{" "}
            <span className="text-[#4C5E6F]">
              It reshapes the parts that are losing buyers.
            </span>
          </h2>
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

// 09 STORE + WEBSITE OPERATING MAP — nodes for storefront, product, checkout, order, reviews, local, follow-up
function WCCoexistence({ onNav }: { onNav: (p: Page) => void }) {
  const storeLayer = [
    {
      label: "Storefront",
      tone: ACCENT,
      note: "Home, category browse, the path a buyer arrives on.",
      navTo: "sws" as Page,
      navLabel: "Smart Website",
    },
    {
      label: "Product pages",
      tone: ACCENT,
      note: "Where the buying decision actually lives — clarity, trust, the Add to Cart.",
    },
    {
      label: "Checkout",
      tone: ACCENT,
      note: "Cart, details, shipping, payment, confirmation — the friction map you saw above.",
    },
  ];
  const operatingLayer = [
    {
      label: "Order handling",
      tone: "#0F7A57",
      note: "Pre-sale questions, cart abandonment messages, post-order replies — handled with first-response discipline.",
      navTo: "ai-lead-handling" as Page,
      navLabel: "Lead Response",
    },
    {
      label: "Reviews",
      tone: "#9A6F12",
      note: "Product and store reviews placed beside the decision, requested with consent, never gamed.",
      navTo: "reviews" as Page,
      navLabel: "Reputation & Review",
    },
    {
      label: "Local pages",
      tone: "#0E7D8C",
      note: "Local listings and area pages bring nearby buyers to product and pickup pages.",
      navTo: "lsa" as Page,
      navLabel: "Local SEO Authority",
    },
    {
      label: "Follow-up",
      tone: "#35C7D8",
      note: "Order owner, fulfilment status, repeat-purchase cadence — held in one operating layer.",
      navTo: "follow-up-crm" as Page,
      navLabel: "Follow-Up & CRM",
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
            Store + website operating map
          </div>
          <h2 className="text-[#08111F]">
            The store does not stand alone.{" "}
            <span className="text-[#4C5E6F]">
              It is one part of a connected operating layer.
            </span>
          </h2>
          <p
            className="mt-6 text-[#4C5E6F] mx-auto"
            style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
          >
            What the buyer sees on top of the store — and the operating
            layer that runs underneath. Each side has to support the other
            or the store quietly loses ground.
          </p>
        </div>

        <div
          className="rounded-2xl overflow-hidden bg-white relative"
          style={{
            border: "1px solid #E6EEF3",
            boxShadow: "0 18px 44px rgba(8,17,31,0.06)",
          }}
        >
          {/* STORE LAYER */}
          <div className="p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: ACCENT, boxShadow: `0 0 6px ${ACCENT}` }}
                />
                <span
                  className="uppercase tracking-[0.14em]"
                  style={{ fontSize: "10.5px", fontWeight: 700, color: ACCENT }}
                >
                  Store layer · what the buyer sees
                </span>
              </div>
              <span
                className="text-[#9CA3B0] uppercase tracking-[0.14em] tabular-nums"
                style={{ fontSize: "10px", fontWeight: 700 }}
              >
                03 nodes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
              {storeLayer.map((n) => (
                <div
                  key={n.label}
                  className="rounded-xl p-5 relative"
                  style={{
                    background: "linear-gradient(180deg, #FFFFFF 0%, #F4EFFB 100%)",
                    border: `1px solid ${ACCENT_BORDER}`,
                  }}
                >
                  <div
                    className="text-[#08111F] mb-1.5"
                    style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    {n.label}
                  </div>
                  <p
                    className="text-[#4C5E6F]"
                    style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                  >
                    {n.note}
                  </p>
                  {n.navTo && (
                    <button
                      onClick={() => onNav(n.navTo as Page)}
                      className="mt-3 inline-flex items-center gap-1.5 border-b pb-0.5"
                      style={{
                        color: ACCENT,
                        borderColor: ACCENT,
                        fontSize: "11.5px",
                        fontWeight: 600,
                      }}
                    >
                      {n.navLabel}
                      <ArrowRight size={11} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CONNECTOR */}
          <div className="relative px-6 lg:px-8 pb-4 pt-2">
            <div className="relative h-8">
              <div
                className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px"
                style={{
                  backgroundImage:
                    "linear-gradient(to bottom, transparent, #DDE6EC 20%, #DDE6EC 80%, transparent)",
                }}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-full bg-white"
                style={{
                  border: "1px solid #E6EEF3",
                }}
              >
                <span
                  className="uppercase tracking-[0.18em]"
                  style={{ fontSize: "9.5px", fontWeight: 700, color: "#6F8190" }}
                >
                  Feeds into
                </span>
              </div>
            </div>
          </div>

          {/* OPERATING LAYER */}
          <div
            className="p-6 lg:p-8 border-t bg-[#FAFBFC]"
            style={{ borderColor: "#EEF3F6" }}
          >
            <div className="flex items-center justify-between gap-3 mb-5">
              <div className="flex items-center gap-2.5">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#0F7A57", boxShadow: "0 0 6px rgba(15,122,87,0.6)" }}
                />
                <span
                  className="uppercase tracking-[0.14em]"
                  style={{ fontSize: "10.5px", fontWeight: 700, color: "#0F7A57" }}
                >
                  Operating layer · what runs underneath
                </span>
              </div>
              <span
                className="text-[#9CA3B0] uppercase tracking-[0.14em] tabular-nums"
                style={{ fontSize: "10px", fontWeight: 700 }}
              >
                04 nodes
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
              {operatingLayer.map((n) => (
                <button
                  key={n.label}
                  onClick={() => onNav(n.navTo)}
                  className="text-left rounded-xl p-5 bg-white relative group hover:shadow-lg transition-all"
                  style={{
                    border: `1px solid #E6EEF3`,
                    borderLeft: `3px solid ${n.tone}`,
                  }}
                >
                  <div
                    className="text-[#08111F] mb-1.5"
                    style={{ fontSize: "14.5px", fontWeight: 700, letterSpacing: "-0.012em" }}
                  >
                    {n.label}
                  </div>
                  <p
                    className="text-[#4C5E6F] mb-3"
                    style={{ fontSize: "12.5px", lineHeight: 1.55 }}
                  >
                    {n.note}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 group-hover:gap-2 transition-all"
                    style={{
                      color: n.tone,
                      fontSize: "11.5px",
                      fontWeight: 600,
                    }}
                  >
                    {n.navLabel}
                    <ArrowRight size={11} />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 10 STORE PROJECT FIT — Good store / Scope first / Not a fit + CTA
function WCFitAndCta({ onNav }: { onNav: (p: Page) => void }) {
  const projects = [
    {
      verdict: "Good store project",
      tone: ACCENT,
      tint: "#F4EFFB",
      icon: ShoppingBag,
      headline: "Real product lines, real fulfilment behind them.",
      signals: [
        "Established business already selling — or adding products to a service line",
        "New store from a design or brief, with real fulfilment behind it",
        "Existing WooCommerce store has grown messy, slow, or hard to run",
        "Product or category pages no longer carry the buying decision",
        "Cart abandonment is visible in the data and the team wants it addressed",
        "Owner wants a store inside the website system, not bolted on",
      ],
      action: "We take this on directly.",
      highlighted: true,
    },
    {
      verdict: "Scope first",
      tone: "#9A6F12",
      tint: "#FCF5E2",
      icon: Settings,
      headline: "Ecommerce, but with edges that need a conversation.",
      signals: [
        "Subscription billing alongside one-off product sales",
        "Marketplace or multi-vendor patterns layered on WooCommerce",
        "Complex bookings, deposits, or trade-account pricing",
        "Cross-border tax, currency, or fulfilment that needs proving",
        "Migration from Shopify, Magento, or a custom storefront",
      ],
      action: "We scope first — and tell you honestly what we will and won't carry.",
    },
    {
      verdict: "Not a fit",
      tone: "#6F8190",
      tint: "#F4F6F8",
      icon: Minus,
      headline: "The shape of the work is somewhere else.",
      signals: [
        "Cheapest-possible WooCommerce template install",
        "Dropship-only storefront with no real fulfilment behind it",
        "Subscription-billing-only platform replacing a SaaS",
        "A single conversion-rate guarantee as the buying decision",
        "EMR, clinical compliance, or treatment-outcome claims",
      ],
      action: "We will point you somewhere else — quickly.",
    },
  ];

  return (
    <>
      <section className="section bg-page-mist">
        <div className="container section-stack">
          <div className="mx-auto max-w-[820px] text-center">
            <div
              className="uppercase tracking-[0.18em] mb-5"
              style={{ fontSize: "11.5px", fontWeight: 700, color: "#6F8190" }}
            >
              Store project fit
            </div>
            <h2 className="text-[#08111F]">
              Good store project, scope first,{" "}
              <span className="text-[#4C5E6F]">or not a fit.</span>
            </h2>
            <p
              className="mt-6 text-[#4C5E6F] mx-auto"
              style={{ fontSize: "16px", lineHeight: 1.65, maxWidth: "640px" }}
            >
              Ecommerce briefs split three ways. The clean ones we take on
              directly. The edge cases need a scope conversation. The wrong
              fits — we will say so quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6 items-stretch">
            {projects.map((p) => {
              const Icon = p.icon;
              const isHighlighted = !!p.highlighted;
              return (
                <div
                  key={p.verdict}
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
                        background: "#150C20",
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
                        <Icon size={16} />
                      </div>
                      <div
                        className="uppercase tracking-[0.16em]"
                        style={{ color: p.tone, fontSize: "10.5px", fontWeight: 700 }}
                      >
                        {p.verdict}
                      </div>
                    </div>
                    <div
                      className="text-[#08111F] mb-5"
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        letterSpacing: "-0.012em",
                        lineHeight: 1.3,
                      }}
                    >
                      {p.headline}
                    </div>
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
                      className="mt-6 pt-5 text-[#6F8190]"
                      style={{
                        borderTop: `1px dashed ${p.tone}30`,
                        fontSize: "12.5px",
                        lineHeight: 1.55,
                        fontStyle: "italic",
                      }}
                    >
                      {p.action}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cta" className="section bg-page-white">
        <div className="container">
          <div className="relative rounded-[24px] overflow-hidden p-12 lg:p-20"
            style={{ background: "linear-gradient(160deg, #150C20 0%, #3A1F58 100%)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.22]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 80%, #7F54B3 0%, transparent 45%), radial-gradient(circle at 90% 20%, #4A2A75 0%, transparent 45%)",
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
                Show us where buyers are slipping —{" "}
                <span className="text-white/55">
                  on the product page, in the cart, or at the checkout.
                </span>
              </h2>
              <p
                className="mt-6 text-white/65 mx-auto"
                style={{ fontSize: "16.5px", lineHeight: 1.65, maxWidth: "560px" }}
              >
                We look at the store path — product pages, category browse,
                cart, checkout, policies, and post-order — together, in a
                working session. You walk away with a short list of what to
                tighten first.
              </p>

              <div className="mt-9 flex items-center justify-center gap-4 flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center gap-2.5 bg-white text-[#150C20] hover:bg-[#F0EBFA] rounded-full px-7 py-4 transition-colors"
                  style={{ fontSize: "15px", fontWeight: 600 }}
                >
                  Review my store path
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
                No template install pitch. No conversion guarantee. No automated audit.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export function Woocommerce({ onNav }: { onNav: (p: Page) => void }) {
  return (
    <main>
      <WCHero onNav={onNav} />
      <WCWhereLeak />
      <WCProductAnatomy />
      <WCCategory />
      <WCCheckout />
      <WCPolicy />
      <WCStoreManagement />
      <WCRebuild />
      <WCCoexistence onNav={onNav} />
      <WCFitAndCta onNav={onNav} />
    </main>
  );
}
