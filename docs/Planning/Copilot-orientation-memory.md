# Copilot Orientation Memory — MindWP

> Read this at the start of any new chat before page work.
> Not a milestone log. Not a rebuild plan. Not page-specific.
> This is orientation memory.

---

## 1. What MindWP Is

**Internal:** Systems-first digital infrastructure consultancy for established service businesses.

**Public plain language:** Work is already coming in. Too much is missed, delayed, scattered, or forgotten between the moments where customers search, enquire, wait for a reply, receive quotes, book jobs, leave reviews, and come back later. MindWP connects the weak points so work gets handled properly.

**Is not:**
- Web design agency (design is a surface, not the product)
- Marketing agency (no campaign management, no ad spend, no generic retainers)
- SaaS platform or tool reseller (GoHighLevel and similar tools are hidden implementation detail)
- Generic digital service catalog

**Protected anchor phrases (do not rewrite without reason):**
- "Work Comes In. Too Much Slips Away."
- "The business is working. The system around it is leaking."
- "These aren't separate problems. They're connected."
- "Nothing depends on someone remembering."

---

## 2. Target Buyer

Established service businesses with real activity already in motion.

**May have:** calls, enquiries, jobs, customers, repeat business, reviews, staff, basic/weak website, Google Business Profile, WhatsApp, web forms, email, spreadsheets, disconnected tools, half-used CRM, or no real system at all.

**Not primarily:** no-traction startups, cheap visual refresh buyers, campaign-only buyers, tool subscription buyers.

**Important:** Do not assume buyers have mature systems. Most are managing with workarounds, memory, and luck.

**Language that lands:** calls, missed replies, voicemails, inboxes, follow-up, quotes, jobs, reviews, who owns what.

**Language that loses them:** infrastructure, stack, layer, ecosystem, omnichannel, pipeline, scalable, seamless, AI chatbot.

---

## 3. The Six Systems

| System | Owns | Does Not Own | Public Framing | Handoff |
|---|---|---|---|---|
| `smart-website-systems` | Website structure, enquiry capture, page flow, conversion clarity | Search acquisition, CRM follow-up, review collection | Website catches enquiries and routes them to the right next step | Feeds AI Lead Handling + CRM; receives discovery from LSA |
| `local-seo-authority` | Local discovery, Google authority signals, service-area visibility | Conversion handling, CRM, review operations | Nearby customers and Google can find and verify the business | Feeds Smart Website; benefits from Reputation & Review signals |
| `ai-lead-handling` | Instant response, missed-call recovery, qualification, booking handoff | Website strategy, SEO acquisition, reputation management | Calls and forms get a fast response without the owner manually intervening | Receives from Smart Website + LSA; routes qualified leads to CRM |
| `crm-automation` | Lead ownership, follow-up workflows, pipeline visibility, lifecycle routing | Website architecture, search visibility, review collection | Enquiries are owned, followed up, and visible | Receives from AI Lead Handling; triggers Reputation & Review at job completion |
| `reputation-review` | Review generation timing, negative feedback routing, reputation monitoring | Traffic acquisition, website conversion, CRM pipelines | Good jobs generate reviews; negative feedback is caught before going public | Receives timing from CRM; feeds LSA authority signals |
| `revenue-growth` | Conversion refinement after enquiries arrive, revenue recovery, lifecycle improvement | Core website foundation, local visibility, review operations | Leaks after the lead arrives are found and fixed | Receives pipeline data from CRM; feeds improvements back to Smart Website |

---

## 4. Smart Website Gravity

Smart Website Systems is the **structural flagship and common visible anchor** — but not always the buyer's first entry point.

The website is where most buyer journeys converge, which is why it anchors the public service hierarchy. But Smart Website must not swallow every other system.

**Other systems lead when buyer pain is direct:**
- LSA leads when pain is visibility / not being found locally — even if the website is weak or limited
- AI Lead Handling leads when pain is missed calls or slow replies
- CRM leads when pain is follow-up failure, ownership gaps, or pipeline invisibility
- Reputation & Review leads when pain is review absence or trust
- Revenue Growth leads when pain is leaking revenue after enquiries arrive

**Adjacent systems are handoffs, not absorbed responsibilities.** A bridge is a door, not an annexe. Mention the handoff, then return to the owning page's narrative.

Do not make every service page sound like a Smart Website page.

---

## 5. Page Behaviour

| Behaviour | Use | Job | Must Not |
|---|---|---|---|
| Landing page | Industry pages, controlled BOFU | Recognition in seconds; reader feels "this is exactly my situation" | Drift into guides, blogs, tool explanations |
| System page | Tier-1 service pages | Explain how structure changes business outcomes; carry BOFU decision support | Become tool explainer, feature dump, or adjacent system absorber |
| Entry page | Blog, resource, SEO entry | Diagnose problem, route upward | Position as standalone service or absorb service-page conversion structure |

**Funnel separation:**
- Blogs diagnose and discover (TOFU/MOFU)
- Resources clarify frameworks (MOFU)
- Case studies prove (MOFU/proof support)
- Service pages decide (BOFU)

Moving funnel-role behaviour between page types weakens both. CTA timing follows proof and recognition — not the reverse.

---

## 6. Writing Direction

**Direction: FLOW → HANDLING → RESULT**

Not: PAGES → DESIGN → FEATURES

**Starts from what the reader already recognises in their working day:**
- Calls come in while the team is on a job. Nobody answers.
- Forms land in an inbox nobody checks fast enough.
- Quotes go out. Nobody chases.
- A job finishes. Nobody asks for the review.
- The owner cannot see which lead became real work.

**Outcome first.** Start with what changes, not what we do.

**Avoid:**
- "powerful platform / scalable ecosystem / seamless automation"
- "AI chatbot hype" or tech-first framing
- "generate more leads / improve online presence" (generic marketing)
- Feature dumping without situational context
- Saying "infrastructure" or "systems-first" before the visible problem is clear

**MindWP moves the business from owner-memory handling to visible, assigned, repeatable handling.** Do not imply the owner/team disappears from operations.

---

## 7. Data-First Thinking

Content data comes before JSX. The component cannot tell you what the page is about.

**Data groups carry business meaning.** Prefer:
- `problemSignals` over `items`
- `leakPoints` over `cards`
- `ownershipGaps`, `sourceChannels`, `handoffPoints`, `fitCriteria`, `proof`, `faq`, `ctaContext`

**Canonical metadata** (`systems[]`, `topics[]`, `industries[]`, `slug`, `intent`) is structural truth for graph/CTA/related. Separate from narrative page content.

**Page data must not store:**
- Generated CTA label strings (use `PRIMARY_CTA_LABEL`)
- Hardcoded `/contact` query strings (use `buildContactHref()`)
- Manual related content lists
- Fabricated proof, fake metrics, invented attribution

**Page data preserves system boundaries.** Do not let Smart Website data carry CRM detail, etc.

---

## 8. Visual Thinking

**Should feel like:** Operating surfaces, signal boards, ownership views, calm control, premium but not decorative.

**Should not feel like:** Generic SaaS dashboard, random icon grids, agency portfolio, page-builder template, cartoon automation, fake futuristic UI.

**Metaphors that fit:** Live enquiry feed with status states (Assigned / Follow-up / Lost), job queue with visible gaps, before/after split panels, status indicators (active/unowned/leaking/handled).

**Avoid:** Equal-weight card grids, process diagrams with arrows everywhere, decorative progress bars, chart dashboards disconnected from business reality.

**Show state and ownership, not system architecture diagrams.** Let the reader see the unowned state before showing the owned state.

Color is always paired with a label — never the sole signal.

---

## 9. Current Repo State

| Item | Status |
|---|---|
| Branch | `ui-hard-reset` |
| Rebuilt baseline pages | Homepage, Smart Website Systems, Local SEO Authority |
| `docs/core/*` | Stable long-term authority |
| `docs/Planning/System-hard-reset.md` | Temporary operating manual — retire when reset is complete |
| `docs/Planning/Legacy-dependency-map.md` | Live delete-gate map — live until all consumers rebuilt |

**Remaining rebuild order (from System-hard-reset.md):**
AI Lead Handling → Reputation feature → Industry category → Landscaping detail → Fitness case study → Resource template → Blog template → remaining services/features/industries → legacy cleanup → final QA.

**Open follow-ups:**
- `RelatedSection` not yet injected at config level for case studies
- `PrimaryCTASection` consumers remain across all unrebuilt domains

---

## 10. Current Component System

| Component | Owns | Rules |
|---|---|---|
| `SectionFrame` (layout) | `<section>`, container, heading block (kicker, h2, description), tone, header width, header–body gap | Props: `tone` (mist/white/dark), `headerWidth` ('narrow'), `gap` ('relaxed'); no page-specific classes; page CSS must NOT override `mw-section-frame__header/heading/description/eyebrow` |
| `HeroFrame` (layout) | Hero section, split layout, badge, h1, description, actions, chips, visual slot | No hardcoded contact URLs; visual is a prop |
| `DecisionPanel` (conversion) | Final conversion section, heading, primary action, expectations, reassurance | Required: `data-testid='smart-cta'`; use `PRIMARY_CTA_LABEL` and `buildContactHref()` |
| `FAQSection` (content) | Full FAQ section — wraps `SectionFrame` + `Accordion` | Use this, not manual composition |
| `RelatedSection` (navigation) | Global related-content section; graph-resolved | Injected by config/wrapper only; page renderers do not render this |
| `Accordion` (primitives) | Disclosure primitive only; no shell | Use `FAQSection` for FAQ sections |
| `Tabs` (primitives) | Generic tab primitive | No page-specific tab variants |
| `InlineText` (primitives) | Renders `[[muted:...]]` markers | Used internally by `SectionFrame` and `HeroFrame`; no `titleMuted`/`headingMuted` props |
| `SignalDot` / `StatusBadge` (primitives) | Status signals via `data-accent` / `data-variant` | Color always paired with visible label |
| `InternalLink` (global) | Internal link primitive | Typed `href` required |

**Page renderers own:** page-specific visual body JSX only, icon maps, data destructuring, section guards.

---

## 11. CSS Ownership

**Import order (do not change):**
```
tokens.css → reset.css → typography.css → layout.css → primitives.css → components.css → page/domain CSS → @tailwind
```

| Layer | Owns |
|---|---|
| `tokens.css` | All `--mw-*` definitions; raw values only |
| `reset.css` | Browser reset |
| `typography.css` | Font stack, type scale, line heights |
| `layout.css` | `mw-container`, `SectionFrame`, `HeroFrame`, motion utilities |
| `primitives.css` | Buttons, badges, Accordion, Tabs, signal/status atoms |
| `components.css` | Header, Footer, DecisionPanel, RelatedSection, FAQSection |
| page/domain CSS | Page-specific visual bodies only |

**Hard rules:**
- No raw hex or `rgba()` outside `tokens.css`
- No inline styles in production TSX
- No Tailwind classes in production TSX unless explicitly approved
- No `rd-*`, `l-section`, `l-container`, `btn-primary`, `btn-outline` in rebuilt/new files
- Domain-prefix required (`home-*`, `sws-*`, `lsa-*`, `feature-*`, `industry-*`, `case-*`, etc.)
- No duplicate section shell / heading / FAQ / CTA / related CSS in page files — shared components own those

---

## 12. Approved vs Quarantine Folders

**Approved new component folders:**
- `src/components/layout`
- `src/components/primitives`
- `src/components/conversion`
- `src/components/navigation`
- `src/components/content`

**Quarantine (do not import in rebuilt/new files):**
- `src/components/reusable/` — delete when all consumers rebuilt
- `src/components/sections/` — contains only `PrimaryCTASection.tsx`; delete when all consumers rebuilt

**Confirmed deleted (do not reference as active):**
`SectionShell`, `RelatedContentSection`, `SmartRelatedSection`, `SmartRelatedSectionClient`, component library route, `componentDocs.generated`, `{ type: 'more' }` case-study pseudo-section, `SLUGS_WITH_OWN_RELATED`, `sections/types.ts`.

---

## 13. CTA / Related Rules

- `DecisionPanel` is the current final conversion component for all rebuilt/new pages
- `PrimaryCTASection` is quarantine delete-later — do not import in rebuilt or new files
- CTA labels come from `PRIMARY_CTA_LABEL` or `resolveCtaLabel()` — only `'Start a Conversation'` and `'Discuss Your Project'` are approved
- Contact URLs generated by `buildContactHref()` — never hardcoded `/contact` strings
- `RelatedSection` is graph/config/wrapper-owned — page renderers do not render it manually
- Config injection: `relatedSection: { enabled?, variant? }` in domain registry

---


## 14. Validator / Check Rules

| Command | When |
|---|---|
| `npm run lint -- --fix` | First cleanup pass after edits; fixes safe ESLint issues where possible |
| `npx prettier --write .` | Repo-wide formatting pass after lint fixes |
| `npm run lint` | Confirm lint is clean after formatting |
| `npm run system:quick` | Fast development check |
| `npm run system:full` | Full validation/report gate — must pass before commit/release |
| `npm run typecheck` | Confirm TypeScript is clean when edits touch TS/TSX/data contracts |
| `npm run build` | Final production build check; runs through `build-safe.mjs` if configured |

**Recommended check order after implementation:** run lint auto-fix first, then Prettier repo-wide, then lint again, then `system:full`, then `typecheck` if TS/TSX/data contracts changed, then `build`. Do not hide real failures with formatting churn; fix the cause.

**Key validators and what they block:**
- `validate-legacy-quarantine` — imports from `reusable`/`sections`, old `PrimaryCTASection`/`SectionShell`/`titleMuted`/`headingMuted`/`RelatedContentSection`, new files in frozen quarantine dirs
- `validate-tokens` — raw hex/rgba outside `tokens.css`, hardcoded spacing/font-size values
- `validate-primary-cta` — unapproved CTA label strings, hardcoded contact href strings
- `validate-content-enforcement` — heading hierarchy, hero list length, button rules, badge length, no hardcoded content, no brand in content
- `validate-related-duplication` — manual related-content shortcuts

**Rules:**
- Do not weaken validators to silence errors
- Do not restore old components to make validators pass
- If a validator enforces an old assumption, fix it with a clear reason and documented change

---

## 15. Pre-Page-Work Checklist

Before auditing or rebuilding any page:

1. Confirm the page's primary system ownership
2. Confirm what that system does not own (especially adjacent systems)
3. Confirm the buyer's direct pain and correct entry point
4. Confirm adjacent system handoffs (bridge only — no absorption)
5. Confirm data groups before writing JSX
6. Confirm which shared components are needed
7. Confirm page-specific visual body structure
8. Confirm CTA uses `PRIMARY_CTA_LABEL` + `buildContactHref()`
9. Confirm `RelatedSection` is not manually rendered
10. Confirm no imports from quarantine folders
11. Confirm the expected check sequence before editing: lint fix → Prettier → lint → system:full → typecheck if needed → build

---

## 16. Known Risks

| Risk | Pattern to watch |
|---|---|
| Smart Website absorbs adjacent systems | Service page expanding into CRM/AI detail beyond a handoff bridge |
| AI Lead Handling becomes chatbot/SaaS pitch | USD pricing, feature lists, compliance claims, "24/7 virtual assistant" framing |
| CRM becomes vague automation | Losing specific ownership/visibility/follow-up framing |
| LSA absorbs Reputation & Review | Review generation copy appearing on LSA pages beyond a bridge |
| Revenue Growth becomes generic growth marketing | Revenue promises, vanity metric targets, lead-volume framing |
| Proof/scenario inflation | Fictional scenarios presented as real client outcomes |
| Page data storing generated values | Hardcoded CTA labels, contact URLs, or manual related lists |
| Generic card-grid / process-diagram drift | Equal-weight cards, arrows everywhere, SaaS dashboard cosplay |
| Writing opens with architecture before situation | "Systems-first" or "infrastructure" before the visible buyer problem is named |

## 17. Work Rules
- Dont work in Bulk Patches
- Must work Step by step
- Partically allowed to read multiple files in parallel for better understand.better avoid parallel reading of multiple files.
- But execute or make changes Step by Step or task by task in small patches