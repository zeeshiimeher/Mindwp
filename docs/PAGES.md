# PAGES — MindWP

Page roles, funnel behavior, and CTA posture in one doc. Merges the load-bearing bullets from the previous `CONTENT.md` and `CONVERSION.md`.

Offer ownership lives in [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md). Voice lives in [WRITING.md](./WRITING.md). Hard rules live in [CLAUDE.md](../CLAUDE.md).

## Content Decision Order

Before writing or adding a page:

1. Confirm the buyer's business reality.
2. Confirm the recognition moment.
3. Confirm the page type and primary intent.
4. Confirm the owning active system where relevant.
5. Confirm the funnel role.
6. Choose the communication pattern.
7. Shape the section design.
8. Build JSX in `Mindwp-Design/` first (see [WORKFLOW.md](./WORKFLOW.md)), port to `Mindwp/` after.

## Page Type Hierarchy

| Page Type | Primary Role | Funnel Role | Primary Outcome |
| --- | --- | --- | --- |
| Service | Active system decision page | BOFU | Decide whether this system should be reviewed or built. |
| Implementation Service | Website-system implementation pathway | BOFU / commercial | Explain a practical build path under Smart Website Systems. |
| Feature | Capability page inside one active system | MOFU | Explain one capability without becoming a separate offer. |
| Industry Detail | Vertical application page | late MOFU / controlled BOFU | Translate active systems into one industry's working reality. |
| Industry Category | Navigation and grouping page | MOFU | Help visitors find relevant vertical pathways. |
| Blog | Problem discovery page | TOFU / MOFU | Diagnose one problem, misconception, pattern, or tradeoff. |
| Resource | Framework or decision-support page | MOFU | Explain a method, map, checklist, comparison, or lens. |
| Case Study | Proof or example page | MOFU / proof support | Prove or illustrate operating change. |
| Generic Page | Structural site surface | context-specific | Support navigation, contact, legal, non-domain context. |

## Homepage

Create recognition before explaining the offer model. The lead is the buyer's working day, not the system stack.

Public anchor headline: **"Work Comes In. Too Much Slips Away."**

Buyer or patient journey to evoke visually: find → verify → trust → contact / book → handled → proof.

Five-system visual rule: SWS is the visual flagship/hub. The other four sit as connected protections around it. **Never** five equal tiles or a 2×3 grid. Two acceptable patterns:

- **Flagship row + 4-cell stack** (the `Mindwp-Design` `SixSystemStack` pattern adapted to five — SWS featured on top, the other four arranged 2×2 or 3+1 below with a journey rail).
- **Hub + 4 orbital positions** (with an actual connecting graphic, not whitespace between cards).

## Service Pages

Active system decision pages. Each primary service page owns **one business moment** and shows connected context only when it clarifies that owning moment. It must not repeat the full MindWP model or absorb adjacent systems.

Boundaries that must stay clear:

- **Smart Website Systems** owns clarity, trust, enquiry capture, and the website-as-control-point story.
- **Local SEO Authority** owns find → verify → trust → contact. Local SEO starts with the website; mention website clarity, don't become a website page.
- **Lead Response & Handling** owns first response and routing after someone reaches out.
- **Follow-Up & CRM** owns ownership, status, reminders, and next steps after the first response or quote exists.
- **Reputation & Review** owns review request timing, feedback routing, and completed work becoming proof.

Service pages must not become generic agency catalogs, tutorials, blog hubs, or platform-reseller pages.

## Implementation Service Pages

WordPress, Elementor, Bricks, Divi, WooCommerce, website redesign / system rebuild. Active **pathways** under Smart Website Systems.

They may explain platform choice through business fit — clarity, maintainability, performance, ecommerce, enquiry capture, connected handling. They must not lead with technology, become affiliate-style platform comparisons, sell cheap packages, or disconnect from Smart Website Systems.

## Feature Pages

Capability pages inside one active system. Canonical feature slugs: `/features/inbox`, `/features/voice-calls`, `/features/calendars`, `/features/reputation`, `/features/crm`, `/features/handling-paths`, `/features/website-chat`. The unpublished `/features/aichat` and `/features/workflows` slugs are removed and must not return.

Feature pages may use capability language, integration context, and configuration detail when needed. The risk is SaaS drift, not capability clarity.

## Industry Pages

Active public industry families: **Home Services** and **Healthcare Practices** only. 16 detail slugs total under those two umbrellas. No other industry route families.

Industry pages translate the active systems into vertical working reality. They lead with working conditions, timing, customer or patient behavior, decision speed, trust concerns, enquiry/booking patterns, follow-up pressure, review/proof expectations.

Healthcare practice pages: treat the website as the **practice front door**. Cover patient trust, treatment / procedure clarity, booking, consultation follow-up, reviews, and proof. Do not turn into medical software, EMR, compliance, hospital operations, or treatment-claim pages.

If an industry page could be applied to another industry with minimal changes, it is invalid.

## Blog & Resource Pages

**Blogs diagnose.** One problem, misconception, operating pattern, or tradeoff per post. Open with a real situation. Route upward to a relevant resource, industry page, case study, or service page.

**Resources explain frameworks.** Maps, checklists, comparisons, decision logic, diagnostic models, implementation guidance. Reduce ambiguity. Route to active system pages or proof when the reader is implementation-ready.

Neither becomes a BOFU service page.

## Case Studies

Make clear what kind of evidence each one is:

- **Real Case Study** — real client work with real attribution or measured/observable outcomes.
- **Scenario Study** — realistic operational scenario, clearly illustrative.
- **Website Showcase** — approved work example focused on visible structure and proof, not invented outcomes.
- **Operational Breakdown** — explanation of what changed operationally without public attribution.

Only real case studies may imply measured outcomes. Scenario studies must use labels like "Illustrative scenario," "Operating change," "What became clearer," "What this example shows." Never "Results," "ROI," "Testimonial," "287% increase."

## Funnel Progression

```
Blog → Resource → Industry → Service
```

Blogs diagnose. Resources explain frameworks. Industry pages translate. Service pages own the implementation decision. Case studies support trust and proof.

Do not make one page absorb another's role.

---

# CTA Posture

MindWP CTAs feel diagnostic, specific, calm, practical, low-pressure. The buyer should feel: "This will help me understand what is leaking and what should be fixed first." Not: "I am being pushed into a demo."

## Conversion Sequence

1. Show the buyer's real situation.
2. Name what is slipping away.
3. Explain what changes when the website system and connected handling path work properly.
4. Show proof, proof-style reasoning, scenario, or operating example.
5. Invite the buyer to review the weak point with MindWP.

Don't escalate to a strong CTA before the reader understands why the next step matters.

## Approved CTA Directions

- Check my website system
- Review my website and handling path
- Find where work is slipping
- Map my follow-up gaps
- Talk through my current setup
- Request a system review
- Review my local visibility
- Check my response path
- Review my proof and reviews

These are direction examples, not mandatory labels. Short UI labels ("Contact MindWP," "Start a conversation") may be used as button text when nearby copy carries the diagnostic meaning.

## CTAs To Avoid

Book a demo · Start free trial · Claim your spot · Skyrocket my leads · Get a free quote · Buy now · Unlock growth · Get more leads now · Dominate Google · Automate my business · Try the platform · See the CRM · Launch my AI chatbot · Get guaranteed rankings.

## CTA By Page Type

- **Homepage**: diagnose the whole website + handling path. Don't force into a narrow service too early.
- **Service pages**: match the owning active system. Support a BOFU decision.
- **Implementation service pages**: Smart Website Systems CTA posture. Frame around the right implementation path for a conversion-focused website system.
- **Industry pages**: connect to the industry's working reality. Route to the most relevant active system or whole-system review.
- **Blog pages**: lighter, contextual. Route to a resource, industry page, case study, or service page.
- **Resource pages**: invite the reader to apply the framework. Route upward when implementation-ready.
- **Case studies**: connect proof to a similar weak point. Route to the relevant system or diagnostic CTA.
- **Contact page**: practical system review entry point. Explain what the buyer can send and what MindWP will look at.

## Form Fields

Useful fields: business or clinic name, website URL, industry or practice type, service area, current problem area, what happens after enquiries arrive, main concern (missed calls / follow-up / reviews / local visibility), best way to contact.

Do not require revenue range, generic growth goals, package-selection. Do not overload. Let the buyer describe the problem in plain language.

## Proof And Claims

Numbers allowed when their type is clear: sourced benchmark, clearly framed diagnostic estimate, or real measured result. Never invented client results, guaranteed outcomes, fabricated rankings, unsupported revenue claims, or review guarantees.

## CTA Validation Checklist

- Matches page type and owning active system.
- Reflects the buyer's visible problem.
- Tells or implies what happens next.
- Feels diagnostic, not pushy.
- Avoids demo/trial/platform language.
- Avoids AI chatbot and CRM reseller positioning.
- Avoids ranking, revenue, review, or lead-volume guarantees.
- Does not invent proof.
- Does not turn Revenue Recovery into a CTA category, page, panel, or form.
