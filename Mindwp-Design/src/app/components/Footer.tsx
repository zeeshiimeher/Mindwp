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

type FooterItem = { label: string; id?: Page };

export function Footer({ onNav }: { onNav?: (p: Page) => void }) {
  const cols: { title: string; items: FooterItem[] }[] = [
    {
      title: "Services",
      items: [
        { label: "Smart Website Systems", id: "sws" },
        { label: "Local SEO Authority", id: "lsa" },
        { label: "Lead Response & Handling", id: "ai-lead-handling" },
        { label: "Follow-Up & CRM", id: "follow-up-crm" },
        { label: "Reputation & Review Systems", id: "reviews" },
      ],
    },
    {
      title: "Build paths",
      items: [
        { label: "WordPress Development", id: "wordpress" },
        { label: "Elementor", id: "elementor" },
        { label: "Bricks Builder", id: "bricks" },
        { label: "Divi 5", id: "divi" },
        { label: "Website Rebuild", id: "rebuild" },
        { label: "WooCommerce", id: "woocommerce" },
      ],
    },
    {
      title: "Company",
      items: [
        { label: "About" },
        { label: "Case Studies", id: "fitness-case" },
        { label: "Request a Website Review" },
      ],
    },
    {
      title: "Resources",
      items: [
        { label: "Resource Hub", id: "resource" },
        { label: "Blog", id: "blog" },
        { label: "Discuss Your Project" },
      ],
    },
  ];

  return (
    <footer className="bg-[#061323] pt-20 pb-10">
      <div className="max-w-[1240px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-8 pb-14 border-b border-white/8">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-[#0E2740] to-[#103E5A] flex items-center justify-center relative">
                <div className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_8px_#35C7D8]" />
              </div>
              <span
                className="text-white tracking-tight"
                style={{ fontSize: "17px", fontWeight: 700 }}
              >
                MindWP
              </span>
            </div>
            <p
              className="text-white/60 max-w-[380px]"
              style={{ fontSize: "14px", lineHeight: 1.65 }}
            >
              For service businesses and specialist clinics where calls get missed, follow-ups slip, and local visibility disappears.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-6 lg:col-span-2">
              <div
                className="text-white/45 uppercase tracking-[0.14em] mb-5"
                style={{ fontSize: "10.5px", fontWeight: 600 }}
              >
                {c.title}
              </div>
              <ul className="space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    {it.id && onNav ? (
                      <button
                        onClick={() => onNav(it.id!)}
                        className="text-white/75 hover:text-white transition-colors text-left"
                        style={{ fontSize: "13.5px" }}
                      >
                        {it.label}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="text-white/75 hover:text-white transition-colors"
                        style={{ fontSize: "13.5px" }}
                      >
                        {it.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-7 flex items-center justify-between text-white/45"
          style={{ fontSize: "12px" }}
        >
          <span>© {new Date().getFullYear()} MindWP. Connected systems for service businesses.</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#35C7D8] shadow-[0_0_6px_#35C7D8]" />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
