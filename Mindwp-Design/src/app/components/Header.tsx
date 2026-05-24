import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type Page = "home" | "sws" | "lsa" | "ai-lead-handling" | "follow-up-crm" | "reviews" | "industries" | "landscaping" | "fitness-case" | "resource" | "blog";

type DropdownGroup = {
  label: string;
  items: { id: Page; label: string; note: string }[];
};

const groups: DropdownGroup[] = [
  {
    label: "Services",
    items: [
      { id: "sws", label: "Smart Website Systems", note: "Enquiry capture & conversion structure" },
      { id: "lsa", label: "Local SEO Authority", note: "Local visibility & authority signals" },
      { id: "ai-lead-handling", label: "Lead Response & Handling", note: "First response & missed-call recovery" },
      { id: "follow-up-crm", label: "Follow-Up & CRM", note: "Owned next step, scheduled follow-up" },
      { id: "reviews", label: "Reputation & Review Systems", note: "Review generation & monitoring" },
    ],
  },
  {
    label: "Industries",
    items: [
      { id: "industries", label: "All Industries", note: "Overview of sectors served" },
      { id: "landscaping", label: "Landscaping", note: "Industry case example" },
    ],
  },
  {
    label: "Resources",
    items: [
      { id: "fitness-case", label: "Case Studies", note: "Operational examples" },
      { id: "resource", label: "Resource", note: "Framework & implementation guides" },
      { id: "blog", label: "Blog", note: "Problem diagnosis & insights" },
    ],
  },
];

function Dropdown({
  group,
  page,
  onNav,
}: {
  group: DropdownGroup;
  page: Page;
  onNav: (p: Page) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const isActive = group.items.some((it) => it.id === page);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 transition-colors ${isActive ? "text-[#08111F]" : "text-[#4C5E6F] hover:text-[#08111F]"}`}
        style={{ fontSize: "13.5px", fontWeight: isActive ? 600 : 500 }}
      >
        {group.label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[260px] rounded-2xl bg-white border border-[#E6EEF3] shadow-[0_16px_48px_rgba(8,17,31,0.10)] overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-[#F0F5F8]">
            <span className="text-[#6F8190] uppercase tracking-[0.16em]" style={{ fontSize: "10px", fontWeight: 700 }}>
              {group.label}
            </span>
          </div>
          <div className="py-1.5">
            {group.items.map((it) => (
              <button
                key={it.id}
                onClick={() => {
                  onNav(it.id);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 flex items-start gap-3 hover:bg-[#F6FAFC] transition-colors ${page === it.id ? "bg-[#F6FAFC]" : ""}`}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{
                    background: page === it.id ? "#35C7D8" : "#D0DDE6",
                    boxShadow: page === it.id ? "0 0 6px #35C7D8" : "none",
                  }}
                />
                <div>
                  <div
                    className={page === it.id ? "text-[#08111F]" : "text-[#08111F]"}
                    style={{ fontSize: "13.5px", fontWeight: page === it.id ? 600 : 500 }}
                  >
                    {it.label}
                  </div>
                  <div className="text-[#6F8190]" style={{ fontSize: "11.5px", lineHeight: 1.4 }}>
                    {it.note}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Header({ page, onNav }: { page: Page; onNav: (p: Page) => void }) {
  return (
    <header className="w-full bg-white border-b border-[#E6EEF3] sticky top-0 z-50 backdrop-blur-md bg-white/85">
      <div className="max-w-[1240px] mx-auto px-8 h-[76px] flex items-center justify-between">
        <button onClick={() => onNav("home")} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#061323] to-[#103E5A] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#35C7D8]/40 to-transparent" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] relative z-10 shadow-[0_0_8px_#35C7D8]" />
          </div>
          <span className="text-[#08111F] tracking-tight" style={{ fontWeight: 700, fontSize: "17px" }}>MindWP</span>
        </button>

        <nav className="hidden md:flex items-center gap-7">
          {groups.map((g) => (
            <Dropdown key={g.label} group={g} page={page} onNav={onNav} />
          ))}
        </nav>

        <a
          href="#cta"
          className="inline-flex items-center gap-2 bg-[#061323] hover:bg-[#0E2740] text-white rounded-full px-5 py-2.5 transition-colors"
          style={{ fontSize: "13.5px", fontWeight: 500 }}
        >
          Start a Conversation
          <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
        </a>
      </div>
    </header>
  );
}
