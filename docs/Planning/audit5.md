# AUDIT 4 — AUTHORITY SYSTEM AUDIT

## 1. EXECUTIVE SUMMARY

- Authority Level: Medium
- System Clarity: Partial
- Conversion Readiness: Medium

MindWP now has a strong authority core: homepage, Smart Website Systems, and the main industry category/detail pages clearly describe operational leakage, not generic website work. The system is not freelancer-level at the strongest commercial layer. The critical weakness is consistency: feature, blog, and resource pages still drift into internal system vocabulary, and the conversion layer routes every shared CTA through `smart-website-systems` even when the page belongs to another system.

## 2. CRITICAL ISSUES (TOP 10)

- ISSUE: Shared CTA generation hardcodes `smart-website-systems` for every page-level CTA.
- IMPACT: High. Conversion context is structurally valid but commercially inaccurate on Local SEO, feature, blog, resource, industry, and support pages that belong to other primary systems.
- ROOT CAUSE: `PrimaryCTASection` and `ActionButtons` build contact URLs with `system: 'smart-website-systems'` instead of using the page node primary system passed from route/domain metadata.
- AFFECTED AREAS: `src/components/system/PrimaryCTASection.tsx`, `src/components/system/ActionButtons.tsx`, Local SEO pages, feature pages, blog templates, resource templates, industry pages.

- ISSUE: Authority map is over-concentrated around Smart Website Systems.
- IMPACT: High. The public estate looks wide, but the generated authority-map report exposes a single source hub: 50 authority edges, all from `service:smart-website-systems`.
- ROOT CAUSE: Authority generation currently exports Smart Website Systems as the only source in `reports/authority-map.json`, despite the graph report showing 9,633 derived edges and 0 orphan nodes.
- AFFECTED AREAS: `reports/authority-map.json`, Smart Website cluster, Local SEO cluster, CRM/automation cluster, reputation/review cluster, industry cluster reinforcement.

- ISSUE: Feature pages still read like product/SaaS capability pages.
- IMPACT: High. They weaken the service hierarchy by making CRM and workflows feel like standalone software modules instead of subordinate operating layers inside a commercial service system.
- ROOT CAUSE: Feature data uses dashboard, integration, automation, visual builder, and feature overview language rather than the site's strongest observed business language.
- AFFECTED AREAS: `/features/crm`, `/features/workflows`, feature explore cards, feature FAQ sections.

- ISSUE: Blog and resource pages over-explain the doctrine instead of proving judgment.
- IMPACT: High. The educational layer creates conceptual consistency but reduces authority because many pages sound like internal architecture notes rather than buyer-facing expertise.
- ROOT CAUSE: Sampled pages repeatedly use `systems-first`, `operational infrastructure`, `system layer`, `workflow`, `pipeline`, and `automation` as primary framing.
- AFFECTED AREAS: `/blog/how-smart-website-systems-work-for-local-businesses`, `/blog/why-service-business-websites-fail-to-convert`, `/resources/what-is-a-systems-first-website`, `/resources/how-smart-website-systems-work`.

- ISSUE: Top-level `/industries` is weaker than the industry category pages it routes to.
- IMPACT: High. A major navigation surface underperforms the site's own industry standard and feels like a category browser instead of an authority entry point.
- ROOT CAUSE: The page opens with `Industry Navigation`, `operating model`, and `category-specific detail pages`; the stronger recognition-led language only appears after the user enters a category.
- AFFECTED AREAS: `/industries`, industry landing hero, industry category card copy.

- ISSUE: Local SEO is commercially relevant but less differentiated than the strongest service page.
- IMPACT: High. It can still be read as a better-executed SEO service rather than an unmistakable authority system lane.
- ROOT CAUSE: The page uses strong operational framing in places, but also relies on familiar SEO patterns: profile, listings, rankings, ongoing SEO, local pack, directory consistency.
- AFFECTED AREAS: `/services/local-seo-authority`, Local SEO CTA and proof sections, Local SEO supporting blog/resource cluster.

- ISSUE: Resource examples present proof, but proof often feels constructed rather than externally validating.
- IMPACT: High. Authority depends too much on explanation and illustrative case examples instead of hard proof surfaces that make the system undeniable.
- ROOT CAUSE: Resource case examples include business type, problem, solution, result, and stat, but they sit inside framework articles and do not carry the weight of dedicated proof assets.
- AFFECTED AREAS: Smart Website resources, conversion resources, feature support resources, case-study-to-service reinforcement.

- ISSUE: Blog/resource sidebar CTAs use broad system escalation instead of specific commercial routing.
- IMPACT: High. Users can understand a problem but still need to infer the exact service owner and next decision.
- ROOT CAUSE: Templates use generic sidebar language such as `trace the service path` and `operating layer`, while shared `ActionButtons` route to Smart Website Systems regardless of page system.
- AFFECTED AREAS: `BlogPostTemplate.tsx`, `ResourcePageTemplate.tsx`, blog/resource CTAs, `/contact` attribution quality.

- ISSUE: System language conflicts with the public writing playbook in key support layers.
- IMPACT: High. The governing writing doc bans or discourages many terms that still dominate sampled educational and feature content, creating a visible voice split.
- ROOT CAUSE: Newer service and industry content follows recognition-first language; older support content still follows architecture-first explanation.
- AFFECTED AREAS: Feature pages, framework resources, technical blog posts, FAQ answers.

- ISSUE: Validators prove structural health, not market authority.
- IMPACT: High. Reports show PASS states for graph, content contract, CTA contract, related duplication, and internal links, but the commercial system still has hierarchy, voice, and attribution drift.
- ROOT CAUSE: Current validators enforce metadata, route, link, and CTA shape; they do not fully enforce primary-system CTA accuracy, proof density, or writing-playbook alignment by page type.
- AFFECTED AREAS: Control-plane reports, system dashboard interpretation, audit workflow, content governance.

## 3. SYSTEM CLARITY ANALYSIS

- Does site feel like a system or services?

At the strongest layer, it feels like a system. The homepage frames the business as leakage across missed calls, dead enquiries, invisible local search, follow-up, and proof. `/services/smart-website-systems` is the clearest BOFU page reviewed: it describes what slips, what gets connected, what changes, and who is or is not a fit.

The main industry category pages now also feel system-led. Home Services, Automotive Services, Beauty & Personal Care, Legal & Professional Services, Local Appointment Businesses, and Real Estate & Property Services all use concrete operating moments and category-specific leaks. The HVAC detail page is especially strong because it opens with a real surge morning and keeps the page anchored to dispatch, no-heat triage, open quotes, and annual service reminders.

The site starts feeling like services or software when the user enters features, framework resources, or technical blog posts. CRM and Workflows read as dashboard capabilities. Smart Website resources explain infrastructure more than they demonstrate buyer judgment. That creates a split: commercial pages feel like an authority system; support pages often feel like documentation for one.

- Where system thinking breaks

System thinking breaks in the handoff between page role and commercial owner. The governing docs require every page to declare one primary system for conversion context, but the shared CTA implementation routes all primary CTAs to Smart Website Systems. That means Local SEO, CRM, Workflows, blog, resource, and industry pages may be structurally valid while losing system-specific conversion truth.

It also breaks in the authority-map report. The graph validator reports 9,633 derived edges, 0 invalid edges, and 0 orphan nodes. But the authority map exports 50 edges and every source is `service:smart-website-systems`. That is not a balanced authority system. It is a dominant hub with support content orbiting it.

- Inconsistent messaging areas

The biggest split is observed reality vs internal architecture. Homepage, Smart Website Systems, Home Services, Automotive, HVAC, and Local Appointment pages say what actually happens in a business. CRM, Workflows, Smart Website blog posts, and Smart Website resources explain structured views, operational layers, triggers, infrastructure, dashboards, and workflows.

The second split is industry strength vs industry top-level entry. Category pages are strong; `/industries` itself still speaks like a navigation surface. That page should be the user's first proof that MindWP understands real businesses, but it currently introduces the category system more than the pain.

## 4. CONTENT GRAPH ANALYSIS

- Connected vs disconnected pages

The graph is technically connected. `reports/graph-report.json` passes with 9,633 derived edges, 0 invalid edges, and 0 orphan nodes. `reports/internal-links-report.json` passes 227 of 227 pages with 355 valid paths. `reports/content-contract-report.json` passes 227 scanned nodes with 0 missing system and 0 missing metadata issues.

The authority problem is not basic connectivity. It is commercial concentration and inaccurate escalation. The authority map currently behaves as if Smart Website Systems is the only true authority source. This gives the site gravity, but it weakens Local SEO, CRM automation, review/reputation, and AI lead handling as distinct authority lanes.

- Orphan nodes

There are no technical orphan nodes in the reports. The live risk is conceptual orphaning.

Feature pages are conceptually orphaned because they have metadata and links, but the copy does not make their parent service ownership unavoidable. A reader can understand CRM or Workflows as features without clearly knowing which paid system owns them.

Local SEO is not orphaned structurally, but it is weaker as an independent authority lane because the shared CTA and authority-map concentration keep pulling it back into Smart Website Systems.

- Weak linking zones

The weakest zone is education to decision. Blog/resource pages include inline links, sidebar actions, and CTA components, but the copy often says `trace the service path` or `turn that into a clear priority` instead of naming the exact commercial owner.

The second weak zone is feature to service. Explore cards link horizontally to other features. The feature pages do not consistently force the hierarchy: feature -> parent system -> service decision.

The third weak zone is authority proof. Resources use case examples, but those examples do not create a strong enough proof bridge into service pages or case studies.

- Missing cluster relationships

The highest-impact missing relationship is primary-system conversion routing. Every page already has metadata. The conversion system should use that metadata so `/contact?system=...&source=...` matches the page's actual system.

The second missing relationship is authority-map diversification. Local SEO, CRM automation, AI lead handling, and reputation/review need their own authority-source edges where metadata supports them.

The third missing relationship is blog/resource-to-service specificity. Educational pages should route the diagnosed problem to the exact BOFU owner, not to a generic Smart Website conversation by default.

## 5. PAGE TYPE ANALYSIS

### SERVICE PAGES

- Quality: Strong but uneven.
- Issues: `/services/smart-website-systems` is the strongest BOFU page reviewed. It has clear leakage, decision support, scope, proof, qualification, and CTA. `/services/local-seo-authority` is commercially useful and better than generic SEO content, but still carries familiar SEO-service language and is weakened by shared CTA routing that attributes conversion to Smart Website Systems rather than Local SEO Authority.

### INDUSTRY PAGES

- Quality: Strong at category/detail level; weak at top-level index.
- Issues: Main category pages are now a major authority asset. Home Services, Automotive, Beauty, Legal/Professional, Local Appointment, and Real Estate pages are recognition-led and specific. HVAC detail is strong. The top-level `/industries` page is the weak exception because it is framed as navigation and category browsing instead of a high-conviction industry authority entry point.

### BLOG / RESOURCE

- Quality: Mixed.
- Issues: Blog and resource pages are structurally complete and graph-valid, but the sampled Smart Website pieces are too architecture-led. They use the system's internal worldview as the content, instead of using observed buyer failures, implementation judgment, constraints, and proof. Their CTA transitions also remain too generic and are affected by Smart Website hardcoded contact routing.

## 6. AUTHORITY SIGNAL ANALYSIS

- Depth vs generic content

Depth is high where pages describe live operating pressure: HVAC cold-snap calls, home-service emergency calls, automotive front-desk delays, professional-service proposal drift, appointment booking drag, and Smart Website missed form handling. These pages feel like the business has watched the problem happen.

Genericity rises when pages switch to conceptual vocabulary: `operational infrastructure`, `systems-first`, `workflow-driven page architecture`, `automation layer`, `CRM pipeline layer`, `unified communications`, `dashboard`, and `feature integration`. Those terms may be technically true, but they are not the site's strongest authority language.

- Repetition patterns

The repeated thesis is: standard websites are brochures; smart websites are operational infrastructure; connected systems capture, route, and follow up. That thesis is useful, but it appears too often across blog and resource pages with similar wording.

The feature layer repeats another pattern: capability title, process steps, benefits, use cases, capabilities, FAQ, explore related features. This is orderly, but it feels templated and product-led next to the sharper service and industry copy.

- Weak expertise signals

Weak expertise signals are concentrated in proof and specificity. The site has illustrative examples and case-like blocks, but the proof layer does not yet carry the same weight as the explanation layer. The site often asserts that the system works before giving enough external validation, before/after evidence, or constraint-aware implementation judgment.

The second weak signal is validator overconfidence. PASS reports prove the machinery is clean. They do not prove that the buyer feels the authority ladder or lands in the right commercial next step.

## 7. CONVERSION FLOW ANALYSIS

- CTA clarity

CTA rendering is structurally mature. `PrimaryCTASection` requires title, description, page identity, registry, and an actionable button. `reports/cta-contract-report.json` passes with 0 issues. `/contact` source generation is centralized through `buildContactHref()` and valid source shapes are enforced.

The flaw is system attribution. `PrimaryCTASection` and `ActionButtons` always build the primary href with `system: 'smart-website-systems'`. This makes CTA clarity look clean in UI while making conversion context too broad in the URL and downstream attribution.

- Journey flow

The best journey is homepage -> Smart Website Systems -> contact, or industry category/detail -> supporting service -> contact. That journey is clear and commercially strong.

The weaker journey is blog/resource/feature -> contact. The user can learn the problem, but the next commercial owner is often implied instead of explicit. For Local SEO and feature pages, the user may also be routed into Smart Website Systems attribution even when the page subject is another system.

- Dead ends

There are few hard dead ends. The internal-link report passes, related duplication passes, and templates include inline links, sidebars, related resources, and CTA sections.

The dead ends are interpretive. `/industries` makes the user choose a category before the strongest recognition happens. Feature pages let users browse capabilities without making the parent service decision obvious. Blog/resource pages can diagnose without naming the exact paid scope.

- Weak transitions

The weakest transition is from diagnosis to service owner. The second is feature to parent service. The third is Local SEO to Local SEO conversion context.

The code-level fix is clear: page identity should carry primary system into `PrimaryCTASection` and `ActionButtons`, and the contact URL should use that canonical system rather than defaulting to Smart Website Systems.

## 8. KEEP / FIX / REMOVE TABLE

| Page/File | Action (Keep/Fix/Remove) | Reason |
|----------|--------------------------|--------|
| `/` | Keep | Strong recognition-led authority entry. Frames leakage, missed calls, dead enquiries, visibility, follow-up, and proof as one operating problem. |
| `/services/smart-website-systems` | Keep | Best BOFU page reviewed. Clear system decision page with strong problem, comparison, scope, proof, qualification, and CTA. |
| `/services/local-seo-authority` | Fix | Commercially useful, but still partly reads like familiar SEO service content and is harmed by Smart Website default CTA attribution. |
| `/industries` | Fix | Structurally useful, but too navigation-led and abstract compared with the strong category pages below it. |
| `/industries/home-services` | Keep | Strong category authority page. Concrete emergency moments, quote leakage, area targeting, review gaps, and trade-specific routing. |
| `/industries/automotive-services` | Keep | Strong category page. Front-desk leakage, estimates, reviews, shop shapes, and detail routes are commercially believable. |
| `/industries/beauty-personal-care` | Keep | Strong category page. Booking, rebook timing, empty chairs, and treatment-specific route logic are clear. |
| `/industries/legal-professional-services` | Keep | Strong category page. Good handling of slow decisions, proposal drift, trust, and quiet middle-stage loss. |
| `/industries/local-appointment-businesses` | Keep | Strong category page. Specific booking, deposit, no-show, recall, and review logic. |
| `/industries/real-estate-property-services` | Keep | Strong category page. First response, pipeline memory, updates, and referral/review logic fit the category. |
| `/industries/home-services/hvac-companies` | Keep | Excellent detail page. Surge-morning framing, triage, dispatch, quote chase, and annual service reminders are highly specific. |
| `/features/crm` | Fix | Metadata exists, but copy reads like a generic CRM product page and uses weak parent-service hierarchy. |
| `/features/workflows` | Fix | Useful capability, but the page leans on automation builder/product language and horizontal feature exploration. |
| `/blog/how-smart-website-systems-work-for-local-businesses` | Fix | Structurally coherent, but too conceptual and infrastructure-led for buyer-facing authority. |
| `/blog/why-service-business-websites-fail-to-convert` | Fix | Better commercial relevance, but still overuses systems/infrastructure framing and generic educational CTA language. |
| `/resources/what-is-a-systems-first-website` | Fix | Explains the doctrine clearly, but violates the writing direction by centering systems-first terminology over observed business reality. |
| `/resources/how-smart-website-systems-work` | Fix | Useful framework page, but too close to adjacent Smart Website explanations and too dependent on architecture vocabulary. |
| `src/components/system/PrimaryCTASection.tsx` | Fix | Must use page primary system for contact context instead of hardcoded Smart Website Systems. |
| `src/components/system/ActionButtons.tsx` | Fix | Same attribution issue as `PrimaryCTASection`; affects sidebar and hero actions. |
| `reports/authority-map.json` generation path | Fix | Current generated map exposes only Smart Website Systems as authority source, which hides distinct system lanes. |

## 9. HIGH-IMPACT GAPS (NOT VOLUME)

- Missing industries (if strategic)

No immediate industry-volume gap is the problem. The industry catalog is already broad: home services, automotive, beauty/personal care, real estate/property, legal/professional, and local appointment businesses are all live with detail routes. More industries would increase maintenance risk before the current authority and conversion hierarchy is fixed.

- Missing problems (high-value only)

The site needs stronger problem ownership around system-specific lanes outside Smart Website Systems. Local SEO should own trust/visibility failure with the same force that Smart Website owns lead leakage. CRM automation should own pipeline memory and follow-up decay as a commercial service lane, not as a feature. Reputation/review should own proof mismatch as a serious revenue trust problem, not only as a supporting layer.

The highest-value problem gaps are not new blog topics. They are sharper service owners for existing problems: first response, dispatch/routing, quote decay, review proof, local visibility trust, reactivation, and pipeline memory.

- Missing system connections

The missing connection is primary-system truth from graph metadata into conversion. Page metadata already knows `systems[]`. CTA code should use that canonical primary system.

The authority map also needs distinct source lanes. Smart Website Systems should remain the gravity center, but Local SEO Authority, CRM Automation, AI Lead Handling, Reputation/Review, and Revenue Growth need graph-derived authority outputs that can support their own conversion paths.

The feature layer needs an explicit parent-service chain. A feature page should not leave the reader thinking about a CRM dashboard or automation builder. It should show which service path fixes the business problem.

## 10. FINAL VERDICT

- Does this look like authority system?

Yes at the strongest commercial layer. The homepage, Smart Website Systems page, industry category pages, and HVAC detail page are not freelancer-level. They show a clear operating model and strong recognition of how service businesses lose work.

- Or still freelancer-level?

Not freelancer-level overall. But it is not yet a fully disciplined authority system.

The site currently looks like a serious system business with a strong primary offer, strong industry execution, and a partially outdated support layer. The code-level conversion system is clean in shape but wrong in attribution. The graph is valid but authority-map output is overcentralized. The writing is powerful where it observes real business moments and weaker where it explains the internal worldview.

Brutal verdict: the authority core is real. The authority system is not finished. Fix CTA primary-system attribution, diversify authority-map source lanes, rewrite the feature layer as subordinate service support, and convert the Smart Website blog/resource cluster from doctrine into proof and judgment. Do that before adding more content.

-------------------------------------
# AUDIT 5 — EXECUTION TASK SYSTEM
-------------------------------------

## PURPOSE

This section converts the audit into a structured execution system.

This is NOT content notes.
This is NOT suggestions.

This is:

→ execution plan
→ tracking system
→ implementation record

-------------------------------------
## GLOBAL EXECUTION RULES

- DO NOT rewrite content blindly
- ALWAYS follow: UNDERSTAND → REFRAME → TRANSFORM
- NEVER replace entire pages unless absolutely required
- KEEP strong sections
- REMOVE only what is weak or misaligned
- EVERY change must improve:
  → authority
  → clarity
  → conversion

-------------------------------------
## EXECUTION GUARDRAILS (STRICT NO-REWRITE ZONES)
-------------------------------------

### DO NOT REWRITE — LOCKED AUTHORITY PAGES

These pages are already high-performing authority assets and MUST NOT be rewritten:

- `/` (Homepage)
- `/services/smart-website-systems`

Industry category pages:
- `/industries/home-services`
- `/industries/automotive-services`
- `/industries/beauty-personal-care`
- `/industries/legal-professional-services`
- `/industries/local-appointment-businesses`
- `/industries/real-estate-property-services`

Strong detail pages (example):
- HVAC and similar high-quality industry detail pages

ALLOWED ACTIONS:
- Minor clarity tweaks ONLY
- CTA attribution fix ONLY
- Internal linking improvements ONLY

NOT ALLOWED:
- Full rewrite
- Tone rewrite
- Structural rewrite
- Messaging change

-------------------------------------

### CASE STUDIES — STRICT EXECUTION MODE

Case studies are governed separately by:

→ docs/Planning/case-study-planning.md

RULES:
- DO NOT rewrite case studies during this audit execution
- ONLY work on them inside the case-study system plan
- MUST follow:
  → 4–7 section rule
  → realism layer
  → softened metrics
  → human-moment titles

DEFAULT:
→ SKIP CASE STUDIES during audit execution

-------------------------------------

### REWRITE SCOPE CONTROL

Copilot MUST NOT behave like a rewriting engine.

STRICT RULES:

- DO NOT rewrite full pages
- DO NOT "improve wording" globally
- DO NOT replace vocabulary blindly

MANDATORY FLOW:

→ UNDERSTAND full page first  
→ Identify weak sections ONLY  
→ Apply targeted transformation  

If no clear issue exists:

→ DO NOTHING

-------------------------------------
-------------------------------------
## EXECUTION WORKFLOW (MANDATORY)

For EACH file/page:

### STEP 1 — UNDERSTAND (NO EDITING)

- What is this page doing?
- Who is it for?
- What problem is being solved?
- What system owns this page?
- What is strong?
- What is weak?
- Where is confusion?

OUTPUT FORMAT:

### ANALYSIS
- Purpose:
- Audience:
- Problem:
- System Owner:
- Strengths:
- Weaknesses:
- Confusion Points:

-------------------------------------

### STEP 2 — REFRAME (NO EDITING)

- Correct positioning of page
- Correct tone (problem-first vs system-first)
- Correct hierarchy (service vs feature vs support)
- Correct CTA owner

OUTPUT FORMAT:

### STRATEGY
- Positioning:
- Tone:
- Hierarchy:
- CTA Owner:

-------------------------------------

### STEP 3 — TRANSFORM (CONTROLLED)

- KEEP strong sections
- REMOVE weak/system-heavy/repetitive parts
- REWRITE only where required
- DO NOT rewrite entire page blindly

OUTPUT FORMAT:

### CHANGES APPLIED
- Sections kept:
- Sections removed:
- Sections rewritten:
- CTA fix applied:

-------------------------------------
## EXECUTION PRIORITY ORDER

### PHASE 1 — CRITICAL (DO FIRST)

1. FIX CTA SYSTEM ATTRIBUTION
   - PrimaryCTASection → use page primary system
   - ActionButtons → use correct system
   - Contact routing must match page intent

2. AUTHORITY MAP FIX
   - Expand authority beyond Smart Website Systems
   - Add Local SEO, CRM, Reputation, AI as authority sources

-------------------------------------

### PHASE 2 — HIGH IMPACT

3. FEATURE PAGE REPOSITIONING (CONTROLLED)
   - Convert product language → service support positioning
   - REMOVE SaaS/dashboard tone ONLY where it weakens authority
   - KEEP valid technical explanation where useful
   - Make parent service ownership explicit

4. BLOG / RESOURCE REFRAME (SELECTIVE)
   - DO NOT rewrite full articles
   - Replace ONLY weak/system-heavy sections
   - Shift from explanation → problem diagnosis where needed
   - Strengthen transition to correct service owner

-------------------------------------

### PHASE 3 — STRUCTURE IMPROVEMENTS

5. INDUSTRIES PAGE FIX (/industries)
   - Convert from navigation → authority entry
   - Lead with real business problems

6. LOCAL SEO DIFFERENTIATION
   - Strengthen positioning beyond “SEO service”
   - Emphasize trust, visibility, authority system

-------------------------------------
## TRACKING SYSTEM

For each file updated, append:

### FILE UPDATE LOG

- FILE:
- STATUS: (Pending / In Progress / Completed)
- TYPE: (Fix / Reframe / Structural)
- IMPACT: (High / Medium / Low)
- NOTES:

-------------------------------------
## COMPLETION CRITERIA

- Homepage, Smart Website Systems, and strong industry pages remain intact (no regression)
- Case studies remain untouched unless executed via case-study plan
- No page was globally rewritten without ANALYSIS + STRATEGY stages
-------------------------------------
System is considered COMPLETE when:

- CTA attribution matches page system everywhere
- Feature pages clearly subordinate to services
- Blog/resources diagnose problems (not explain system)
- Authority map reflects multiple system sources
- No internal/system-heavy language dominates pages
## COMPLETION CRITERIA
-------------------------------------
## FINAL GOAL

Transform site from:

→ strong system with inconsistencies

into:

→ fully aligned authority system
→ clear commercial hierarchy
→ high-confidence conversion engine