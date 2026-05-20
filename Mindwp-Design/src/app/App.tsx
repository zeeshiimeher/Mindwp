import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
import { HomeV2 } from "./HomeV2";
import { SmartWebsite } from "./pages/SmartWebsite";
import { LocalSEO } from "./pages/LocalSEO";
import { AILeadHandling } from "./pages/AILeadHandling";
import { AIChat } from "./pages/AIChat";
import { Reviews } from "./pages/Reviews";
import { IndustriesPage } from "./pages/Industries";
import { Landscaping } from "./pages/Landscaping";
import { FitnessCase } from "./pages/FitnessCase";
import { ResourcePage } from "./pages/Resource";
import { BlogPost } from "./pages/Blog";

type Page =
  | "home"
  | "home-v2"
  | "sws"
  | "lsa"
  | "ai-lead-handling"
  | "ai-chat"
  | "reviews"
  | "industries"
  | "landscaping"
  | "fitness-case"
  | "resource"
  | "blog";

// Pages the Header dropdown understands (v2 doesn't exist in Header nav).
type HeaderPage = Exclude<Page, "home-v2">;

/**
 * Floating homepage variant switcher. Lets you compare Home (13 sections) with
 * HomeV2 (14 sections, longer-form) without leaving the dev server.
 */
function HomeVariantSwitch({ page, onNav }: { page: Page; onNav: (p: Page) => void }) {
  if (page !== "home" && page !== "home-v2") return null;
  return (
    <div
      className="fixed bottom-6 right-6 z-[60] inline-flex items-center gap-1 rounded-full p-1 backdrop-blur"
      style={{
        background: "rgba(6,19,35,0.92)",
        border: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.32)",
      }}
    >
      <button
        onClick={() => onNav("home")}
        className="rounded-full px-3 py-1.5 transition-colors"
        style={{
          background: page === "home" ? "#FFFFFF" : "transparent",
          color: page === "home" ? "#061323" : "rgba(255,255,255,0.75)",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        v1 · 13 sections
      </button>
      <button
        onClick={() => onNav("home-v2")}
        className="rounded-full px-3 py-1.5 transition-colors"
        style={{
          background: page === "home-v2" ? "#FFFFFF" : "transparent",
          color: page === "home-v2" ? "#061323" : "rgba(255,255,255,0.75)",
          fontSize: "12px",
          fontWeight: 600,
        }}
      >
        v2 · 14 sections
      </button>
    </div>
  );
}

export default function App() {
  // Default to v2 — the long-form 14-section homepage built from the v2 plan.
  const [page, setPage] = useState<Page>("home-v2");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  // Header dropdown nav uses the legacy Page type without "home-v2"; treat v2
  // as the "home" highlight state for header active-link styling.
  const headerPage: HeaderPage = page === "home-v2" ? "home" : page;
  const headerOnNav = (p: HeaderPage) => setPage(p);

  return (
    <div className="min-h-screen bg-white text-[#08111F]">
      <Header page={headerPage} onNav={headerOnNav} />
      {page === "home" && <Home />}
      {page === "home-v2" && <HomeV2 />}
      {page === "sws" && <SmartWebsite />}
      {page === "lsa" && <LocalSEO />}
      {page === "ai-lead-handling" && <AILeadHandling />}
      {page === "ai-chat" && <AIChat />}
      {page === "reviews" && <Reviews />}
      {page === "industries" && <IndustriesPage />}
      {page === "landscaping" && <Landscaping />}
      {page === "fitness-case" && <FitnessCase />}
      {page === "resource" && <ResourcePage />}
      {page === "blog" && <BlogPost />}
      <Footer />
      <HomeVariantSwitch page={page} onNav={setPage} />
    </div>
  );
}
