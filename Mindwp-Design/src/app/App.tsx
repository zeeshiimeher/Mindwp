import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./Home";
import { SmartWebsite } from "./pages/SmartWebsite";
import { LocalSEO } from "./pages/LocalSEO";
import { AILeadHandling } from "./pages/AILeadHandling";
import { FollowUpCRM } from "./pages/FollowUpCRM";
import { Reviews } from "./pages/Reviews";
import { IndustriesPage } from "./pages/Industries";
import { Landscaping } from "./pages/Landscaping";
import { FitnessCase } from "./pages/FitnessCase";
import { ResourcePage } from "./pages/Resource";
import { BlogPost } from "./pages/Blog";
import { WordPress } from "./pages/WordPress";
import { Elementor } from "./pages/Elementor";
import { Bricks } from "./pages/Bricks";
import { Divi } from "./pages/Divi";
import { Rebuild } from "./pages/Rebuild";
import { Woocommerce } from "./pages/Woocommerce";
import { HomeServices } from "./pages/HomeServices";
import { Plumbing } from "./pages/Plumbing";
import { HomeV2 } from "./HomeV2";

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
  | "plumbing"
  | "home-v2";

export default function App() {
  // TODO: revert to "home"
  const [page, setPage] = useState<Page>("home-v2");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [page]);

  return (
    <div className="min-h-screen bg-white text-[#08111F]">
      <Header page={page} onNav={setPage} />
      {page === "home" && <Home />}
      {page === "home-v2" && <HomeV2 />}
      {page === "sws" && <SmartWebsite onNav={setPage} />}
      {page === "lsa" && <LocalSEO />}
      {page === "ai-lead-handling" && <AILeadHandling />}
      {page === "follow-up-crm" && <FollowUpCRM />}
      {page === "reviews" && <Reviews />}
      {page === "industries" && <IndustriesPage />}
      {page === "landscaping" && <Landscaping />}
      {page === "fitness-case" && <FitnessCase />}
      {page === "resource" && <ResourcePage />}
      {page === "blog" && <BlogPost />}
      {page === "wordpress" && <WordPress onNav={setPage} />}
      {page === "elementor" && <Elementor onNav={setPage} />}
      {page === "bricks" && <Bricks onNav={setPage} />}
      {page === "divi" && <Divi onNav={setPage} />}
      {page === "rebuild" && <Rebuild onNav={setPage} />}
      {page === "woocommerce" && <Woocommerce onNav={setPage} />}
      {page === "home-services" && <HomeServices onNav={setPage} />}
      {page === "plumbing" && <Plumbing onNav={setPage} />}
      <Footer onNav={setPage} />
    </div>
  );
}
