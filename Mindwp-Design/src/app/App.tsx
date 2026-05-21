import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
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

export default function App() {
  const [page, setPage] = useState<Page>("home");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-[#08111F]">
      <Header page={page} onNav={setPage} />
      {page === "home" && <Home />}
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
    </div>
  );
}
