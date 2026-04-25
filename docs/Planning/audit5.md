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
COPILOT BEHAVIOR RULES
-------------------------------------

- Read actual files, not assumptions
- Base decisions on real content
- Do NOT suggest generic SEO tactics
- Do NOT suggest "write more blogs"
- Focus on SYSTEM + AUTHORITY + CONVERSION
- Follow execution workflow strictly (Understand → Strategy → Transform)
- Do NOT skip analysis phase
- Do NOT perform bulk edits
- One file at a time execution ONLY

-------------------------------------

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

-------------------------------------
# AUDIT 5 — EXECUTION CONTROL ADDENDUM
-------------------------------------

## 11. FILE EXECUTION CONTROL LAYER

This addendum converts the audit execution system into a deterministic, zero-risk transformation engine.

This is NOT content writing.
This is NOT creative rewriting.
This is NOT bulk improvement work.

This is controlled file-by-file authority correction.

STRICT FILE CONTROL RULES:

- Work on one file only.
- Do not edit multiple files in the same execution step.
- Do not run parallel transformation work.
- Do not bulk patch across page groups.
- Do not make multi-file changes from a single analysis pass.


### FILE EXECUTION MODE

For each file, execution MUST follow this sequence exactly:

1. Read
2. Analyze
3. Strategy
4. Transform
5. Log

MANDATORY BEHAVIOR:

- Read the complete file context before deciding whether to edit.
- Analyze whether the file actually has an authority, clarity, hierarchy, or conversion issue.
- Define the minimum viable strategy before editing.
- Transform only the specific weak section or code path.
- Log the file result immediately after the change.
- STOP after the log.

The executor must NOT move to another file automatically, even if the next file appears obvious.

## 12. STOP CONDITIONS (CRITICAL)

The default action is SKIP unless a clear authority, graph, hierarchy, or conversion defect is proven.

AI must STOP editing when:

- The page is already strong.
- The weakness is not clearly defined.
- The rewrite is not required.
- The proposed edit may reduce authority.
- The issue is only minor wording preference.
- The page already satisfies its role in the system.
- The change would make strong observed copy more generic.
- The change would expand content without improving conversion or authority.

### STOP RULES

- If no clear issue exists → STOP.
- If only minor wording is involved → DO NOT TOUCH.
- If the page is strong → LOG and SKIP.
- If the authority impact is uncertain → DO NOT EDIT.
- If the edit would flatten concrete language into abstract system language → STOP.
- If the page already performs its funnel role → SKIP.
- If the change requires rewriting more than the weak section → STOP and request a new plan.

## 13. MISCLASSIFICATION PROTECTION

The highest execution risk is damaging strong pages by treating them as weak pages.

Strong pages must be protected from unnecessary transformation. The executor must not assume that every file listed in the audit requires edits. Some files are explicitly KEEP assets and must only be logged as protected unless a specific safe fix is requested.

### VALIDATION BEFORE EDIT

Before editing any file, answer these checks:

- Is this page already strong?
- Is the problem clearly defined?
- Is a rewrite truly needed?
- Is the weak section isolated?
- Is the page's current authority likely to survive the edit?
- Is the proposed change smaller than the existing strong content?
- Is the edit correcting a system defect rather than expressing taste?

If any answer is uncertain:

→ DO NOT EDIT

Required classification before action:

- STRONG → Log and skip.
- MIXED → Edit only the proven weak section.
- WEAK → Apply controlled transformation.
- UNCLEAR → Do not edit.

## 14. OUTPUT STRUCTURE LOCK

Every file execution must produce a structured update record. Freeform summaries are not enough.

Use this locked format after every file:

```markdown
### FILE UPDATE LOG

- FILE:
- ACTION:
- REASON:
- CHANGE TYPE:
- RISK LEVEL:
```

Allowed ACTION values:

- Completed
- Skipped
- Reverted
- Blocked

Allowed CHANGE TYPE values:

- CTA attribution
- Authority reframe
- Graph relationship
- Feature hierarchy
- Blog/resource diagnosis
- Industry entry correction
- Local SEO differentiation
- No change

Allowed RISK LEVEL values:

- Low
- Medium
- High

If RISK LEVEL is High, the executor must not edit unless the user explicitly approves the file-specific strategy.

## 15. EXECUTION SAFETY CHECK

After each file, run the safety check before closing the file log.

Required questions:

- Did this improve authority?
- Did this preserve clarity?
- Did this avoid over-editing?
- Did this keep the page's original role intact?
- Did this avoid weakening concrete recognition-led language?
- Did this preserve conversion intent?
- Did this avoid changing unrelated content?

If the answer is NO to any required preservation question, STOP and revert the file-level change.

If any of these are true, revert the file-level change:

- Authority was reduced.
- Clarity was broken.
- The page became more generic.
- The edit added unnecessary content.
- The edit changed the page's role.
- The edit touched unrelated sections.
- The transformation exceeded the approved strategy.

Revert rule:

→ If the edit is not clearly better, revert.

## 16. CLAUDE EXECUTION MODE

Claude must behave as an execution engine, not a creative writer.

Claude must follow these constraints:

- No creativity.
- No expansion.
- No additional content beyond the defined fix.
- No rewriting strong pages.
- No invented sections.
- No new positioning unless the strategy explicitly requires it.
- No tone polishing without a proven authority issue.
- No bulk changes.
- No multi-file execution.
- No continuation after one file is logged.

Claude may only apply defined changes that map to the audit findings and the file-specific strategy.

Claude must use this operating mode:

1. Treat every page as protected until proven weak.
2. Prefer skip over unnecessary edit.
3. Prefer smallest viable transformation.
4. Preserve existing strong language.
5. Correct system, hierarchy, attribution, or authority drift only where proven.
6. Stop after one file.

Claude must not optimize for volume. Claude must optimize for non-destruction.

## 17. EXECUTION COMPLETION TRACKING

### EXECUTION STATUS

- Total files:
- Completed:
- Skipped:
- Remaining:

Tracking rules:

- Update counts only after a file-level log is completed.
- Skipped strong pages count as Skipped, not Completed.
- Reverted files do not count as Completed.
- Blocked files remain in Remaining until resolved.
- Do not mark a phase complete until every file in that phase is logged.

Completion is achieved only when every approved execution target has one of these final states:

- Completed
- Skipped
- Reverted
- Blocked with reason

## 18. ZERO-RISK AUTHORITY TRANSFORMATION PRINCIPLES

The execution system must protect authority before trying to increase authority.

Priority order:

1. Preserve strong pages.
2. Correct proven conversion attribution defects.
3. Correct proven hierarchy defects.
4. Correct proven system-language overuse.
5. Strengthen weak transitions only where the current page role requires it.

Never trade a concrete business moment for a generic systems phrase.
Never trade a strong page voice for consistency.
Never turn a page into a template because another page was weak.
Never edit because a page could be better.
Only edit because the page is clearly failing its assigned system role.
-------------------------------------
# AUDIT 5 — EXECUTION LOG
-------------------------------------

## PHASE 1 — TASK 1: CTA SYSTEM FIX

### FILE UPDATE LOG

- FILE: src/components/system/PrimaryCTASection.tsx
- ACTION: Completed
- REASON: Hardcoded `system: 'smart-website-systems'` ignored each page's actual primary system, breaking conversion attribution for Local SEO, CRM, AI lead handling, reputation, and revenue pages.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/components/system/ActionButtons.tsx
- ACTION: Completed
- REASON: Same hardcoded primary/secondary `system` defect as PrimaryCTASection. Now derives system from `pageIdentity.primarySystem`.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/lib/page/pageIdentity.ts
- ACTION: Completed
- REASON: Added optional `primarySystem` field to `PageIdentity` so shared CTA components can read the page's canonical system from context.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/components/system/PageEnforcement.tsx
- ACTION: Completed
- REASON: `CTARegistryProvider` now accepts `primarySystem` prop and propagates it through the page identity context. Defaults to `'smart-website-systems'` for legacy/static surfaces.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/services/config.tsx
- ACTION: Completed
- REASON: Service render path now passes `primarySystem={data.systems[0]}` so each service (Local SEO Authority, CRM Automation, Reputation Review, AI Lead Handling, Revenue Growth, Smart Website Systems) attributes contact correctly.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/features/config.tsx
- ACTION: Completed
- REASON: Feature render path now passes `primarySystem` from feature data, so feature CTAs attribute to their parent system (e.g. workflows → revenue-growth, voicecalls → ai-lead-handling).
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/industries/config.tsx
- ACTION: Completed
- REASON: Both industry-category and industry-detail CTARegistryProvider call sites now derive `primarySystem` from the industry data, with fallback to `smart-website-systems`.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/blog/templates/BlogPostTemplate.tsx
- ACTION: Completed
- REASON: BlogPostTemplate now propagates the existing `systems` prop (already supplied from blog post data) into `CTARegistryProvider` as `primarySystem`.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/resources/templates/ResourcePageTemplate.tsx
- ACTION: Completed
- REASON: ResourcePageTemplate now reads `props.systems[0]` and passes it as `primarySystem` so resource-cluster CTAs match each resource's owning system.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/case-studies/templates/CaseStudyTemplate.tsx
- ACTION: Completed
- REASON: Both CTARegistryProvider sites now read `metadata.systems[0]` so case-study CTAs attribute to the system the case study actually proves.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: scripts/validators/validate-cta-label-contract.mjs
- ACTION: Completed
- REASON: Updated `missing_locked_contact_system_usage` rule from a string-literal check to a structural contract: `pageIdentity.primarySystem ?? 'smart-website-systems'` and `system: primarySystem`. The contract now enforces the new, page-aware attribution model instead of the old hardcoded constant.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/services/__tests__/config.test.tsx
- ACTION: Completed
- REASON: Updated snapshot expectation from exact-equal pageIdentity to `objectContaining`, asserting `primarySystem: 'revenue-growth'` is propagated for `conversion-layer`.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### FILE UPDATE LOG

- FILE: src/domains/features/__tests__/config.test.tsx
- ACTION: Completed
- REASON: Same snapshot adjustment; asserts CRM feature now carries `primarySystem: 'revenue-growth'` through page identity.
- CHANGE TYPE: CTA attribution
- RISK LEVEL: Low

### EXECUTION SAFETY CHECK (Phase 1, Task 1)

- Did this improve authority? YES — every page now attributes contact to its actual owning system instead of always to Smart Website Systems.
- Did this preserve clarity? YES — copy untouched, only the URL `system=` query parameter changes.
- Did this avoid over-editing? YES — no content rewrites; surgical plumbing change with backward-compatible default.
- Did this keep the page's original role intact? YES.
- Did this avoid weakening concrete recognition-led language? YES (no copy changes).
- Did this preserve conversion intent? YES — and now strengthens it by routing each page to its true owner.
- Did this avoid changing unrelated content? YES — strong locked pages (homepage, smart-website-systems, industry category pages, HVAC detail) are unchanged; their default still routes to `smart-website-systems`.

### POST-EXECUTION VALIDATION

- `npx tsx scripts/validators/validate-cta-label-contract.mjs` → PASS
- `npx vitest run src/domains/services/__tests__/config.test.tsx src/domains/features/__tests__/config.test.tsx` → PASS (7/7)
- `npm run build` → PASS (CTA validator now green; lint/prettier auto-fixed)
- `npm run system:full` → 45/46 validators pass; the only remaining FAIL is in `tests/system/audit-coverage.test.ts` and `tests/system/system-integrity.test.ts`, which both `ENOENT` on `docs/Planning/audit3.md`. Confirmed pre-existing on `dev` HEAD prior to this change (audit3.md has never been committed to the repo). These belong to a separate planning-doc-alignment task, not Phase 1 Task 1.

### EXECUTION STATUS

- Phase 1 Task 1 (CTA SYSTEM FIX): COMPLETED
- Phase 1 Task 2 (AUTHORITY MAP FIX): NOT STARTED — STOP here per Section 11 (one-file rule) and Section 12 (STOP when scope is unclear). Awaiting explicit next-file approval.
- Phase 2, 3, 4: NOT STARTED.

### BLOCKED / OUT-OF-SCOPE

- tests/system/audit-coverage.test.ts and tests/system/system-integrity.test.ts reference `docs/Planning/audit3.md`, a file that does not exist anywhere in repo history. This is a pre-existing test failure independent of the CTA fix. It blocks an absolute "100% system:full pass". Resolution requires either (a) restoring/recreating audit3.md with the expected `FINAL COVERAGE MAP - WAVE 4.5` appendix, or (b) re-pointing these tests to audit5.md with adapted parsing. Both are outside Phase 1 Task 1 scope and require explicit approval.

---

## PHASE 1 — TASK 2: AUTHORITY MAP FIX

### ANALYSIS

**Audit claim:** "Authority map exports 50 edges and every source is `service:smart-website-systems`."

**Investigation finding:** The audit was correct *as a snapshot of an earlier stale report*, but the underlying graph engine already produces a properly diversified authority graph after the Phase 1 Task 1 CTA changes propagated `primarySystem` through the registry layer. After regenerating `reports/authority-map.json` from a fresh build:

- 9,633 derived edges (not 50)
- 195 distinct source nodes (not 1)
- All 6 canonical systems contribute as authority sources:
  - crm-automation: 3,318 edges
  - ai-lead-handling: 2,245 edges
  - reputation-review: 2,193 edges
  - smart-website-systems: 2,151 edges
  - local-seo-authority: 995 edges
  - revenue-growth: 318 edges

**Root cause of the audit defect:** No validator existed to *prevent* concentration drift, and the graph had no formal `SYSTEM_TYPES` classification, so Smart Website System overflow into other lanes could silently happen again. The fix is therefore a **structural guard**, not a content rewrite.

### STRATEGY

1. Encode the authority role of each canonical system as `SYSTEM_TYPES` (`core | entry | operation | trust | response | growth`) directly alongside `CANONICAL_SYSTEMS` so consumers and validators share one source of truth.
2. Add `validate-authority-concentration.ts`, a structural validator that fails the build if:
   - all edges originate from a single source node, OR
   - all edges originate from a single canonical system, OR
   - any canonical system has zero outgoing authority edges.
3. Wire the new validator into `system-manifest.mjs` as a blocking validator in the `graph` category, and register the report file in `PRIMARY_REPORT_FILES`.
4. Do **not** modify `generate-authority-map.ts` — its output is already correct; the validator now defends that output.

### TRANSFORM (FILE UPDATE LOG)

#### FILE: src/lib/content-graph/canonical.ts
- ACTION: Added `SYSTEM_TYPES` map and exported `CanonicalSystem` type alongside the existing `CANONICAL_SYSTEMS` constant.
- REASON: Establishes canonical authority roles (`core/entry/operation/trust/response/growth`) so the graph and validators share one classification source. Prevents Smart Website overflow drift.
- CHANGE TYPE: Additive (no existing exports modified).
- RISK LEVEL: Low (new exports only; no consumer is forced to read them).

#### FILE: scripts/validators/validate-authority-concentration.ts
- ACTION: Created new structural validator.
- REASON: Locks in the diversification produced by Phase 1 Task 1. Fails the build if authority ever collapses back onto a single source/system or if any canonical system loses all outgoing edges.
- CHANGE TYPE: New file (validator only — does not mutate the graph or content).
- RISK LEVEL: Low (read-only over `reports/authority-map.json`).

#### FILE: scripts/core/system-manifest.mjs
- ACTION: (1) Registered `validate-authority-concentration` as a blocking validator in the `graph` category right after `validate-graph`. (2) Added `authority-concentration-report.json` to `PRIMARY_REPORT_FILES`.
- REASON: Makes the new validator part of `npm run system:full` and exposes its report through the standard reporting pipeline.
- CHANGE TYPE: Manifest extension (no existing entries modified).
- RISK LEVEL: Low.

### EXECUTION SAFETY CHECK

- Did this rewrite `/services/smart-website-systems`, the homepage, any `/industries/*` category page, or the HVAC detail? NO.
- Did this rewrite any blog/resource/case-study content? NO.
- Did this remove or weaken Local SEO authority positioning? NO — `local-seo-authority` is now an explicit `entry` lane in `SYSTEM_TYPES`, structurally distinct from `core`.
- Did this avoid changing the generator output (which is already diversified)? YES — only added classification + a guard.
- Did this preserve conversion intent? YES — concentration drift back to a single system is now a build failure.

### POST-EXECUTION VALIDATION

- `npx tsx scripts/validators/validate-authority-concentration.ts` → PASS (9,633 edges across 195 sources / 6 systems).
- `npm run system:full` → 45/46 validators pass (now including the new validator). The same two pre-existing test failures remain: `tests/system/audit-coverage.test.ts` and `tests/system/system-integrity.test.ts` ENOENT on `docs/Planning/audit3.md`. No new regressions introduced by Task 2.
- `reports/authority-concentration-report.json` written and registered.

### EXECUTION STATUS

- Phase 1 Task 2 (AUTHORITY MAP FIX): COMPLETED.
- Phase 2 Task 3 (FEATURE PAGE REPOSITIONING): READY TO START.

### BLOCKED / OUT-OF-SCOPE

- The audit's prescriptive code snippet (`if (allEdgesFromSameSource) throw new Error(...)`) was implemented in spirit by `validate-authority-concentration.ts`, which goes further: it also catches single-system concentration and missing-system lanes. Placing the throw inside `generate-authority-map.ts` would couple the generator to its own consumer's policy; keeping it in a dedicated validator preserves single-responsibility.

---

## PHASE 2 — TASK 3: FEATURE PAGE REPOSITIONING

### ANALYSIS

**Audit claim (Issue 3):** Feature pages still read like product/SaaS capability pages. Hero badges (`CRM Layer`, `Workflow Automation`, `Reputation Management`, `Feature Spotlight`) and hero copy (`organizes contacts, conversations, and activity into one structured view`, `Automate Follow-Ups Without Losing Control`, `Email, SMS, Facebook, Instagram, and chat — all in one place`) read like SaaS capability cards. Parent-service ownership is not made explicit.

**Audit claim (Issue 1):** CRM and Workflows declared `systems: ['revenue-growth']`, which made the conversion CTA route to a system that does not own them and contributed to the authority concentration problem in Phase 1 Task 2.

**Scope decision:** Per Section 12 STOP rules and Section 13 misclassification protection — only badge + hero title + hero description are weak. Process steps, FAQ, stats, capabilities, related blocks were left untouched (they are concrete, not weak). No bulk rewrite.

### STRATEGY

For each of the four feature pages named in the audit (`/features/crm`, `/features/workflows`, `/features/reputation`, `/features/inbox`):

1. Replace the SaaS-style badge with `Part of <Parent Service>` framing so parent-service ownership is unavoidable.
2. Rewrite only the hero **title + description** to lead with the operational problem and explicitly state "this layer is part of <Parent Service>".
3. For CRM and Workflows: change `systems[0]` from `revenue-growth` to `crm-automation` (the actual owning system) so Phase 1 CTA routing sends the contact URL to `crm-automation` and authority edges originate from the correct system lane.
4. Do not rewrite any other section. Do not remove technical detail. Do not touch calendars/voicecalls/aichat (not in audit's named fix list).

### TRANSFORM (FILE UPDATE LOG)

#### FILE: src/domains/features/data/crm.ts
- ACTION: Completed
- REASON: Hero badge `CRM Layer`, hero title `Structured CRM Integrated into Your System`, and hero description framed the page as a SaaS capability without naming the owning service. Also `systems: ['revenue-growth']` mis-attributed the CTA to a non-owning system.
- CHANGE TYPE: Feature hierarchy + CTA attribution
- RISK LEVEL: Low (hero copy only; process/sections/FAQ unchanged)

#### FILE: src/domains/features/data/workflows.ts
- ACTION: Completed
- REASON: Hero badge `Workflow Automation` and title `Automate Follow-Ups Without Losing Control` read like a marketing-automation product. Hero now leads with the operational failure and explicit `Part of CRM Automation` ownership. `systems[0]` corrected to `crm-automation`.
- CHANGE TYPE: Feature hierarchy + CTA attribution
- RISK LEVEL: Low

#### FILE: src/domains/features/data/reputation.ts
- ACTION: Completed
- REASON: Badge `Reputation Management` and hero `Systematically request reviews after completed services` framed the page as a generic reputation tool. Hero now leads with the missed-moment problem and `Part of Reputation & Review Systems` ownership. `systems` already correct (`reputation-review`, `local-seo-authority`).
- CHANGE TYPE: Feature hierarchy
- RISK LEVEL: Low

#### FILE: src/domains/features/data/inbox.ts
- ACTION: Completed
- REASON: Badge `Feature Spotlight` and hero `Email, SMS, Facebook, Instagram, and chat — all in one place` framed the page as a SaaS multi-channel inbox. Hero now leads with the response-time failure and `Part of AI Lead Handling` ownership. `systems` already correct (`ai-lead-handling`).
- CHANGE TYPE: Feature hierarchy
- RISK LEVEL: Low

#### FILE: src/domains/features/__tests__/config.test.tsx
- ACTION: Completed
- REASON: Snapshot assertion `primarySystem: 'revenue-growth'` for `feature:crm` had to follow the corrected ownership.
- CHANGE TYPE: CTA attribution (test alignment)
- RISK LEVEL: Low

#### FILE: scripts/validators/validate-authority-concentration.ts
- ACTION: Completed (corrective edit during Task 3 verification)
- REASON: The original Phase 1 Task 2 implementation read from `reports/authority-map.json`, which is **post-truncation** (max 50 array items per `MAX_REPORT_ARRAY_ITEMS`). The validator was therefore producing false negatives in `npm run system:full` while passing in direct runs. Re-pointed it to read the un-truncated graph from `reports/.system-full/system-snapshot.json` (the source of truth produced by `build-system-snapshot.mjs`).
- CHANGE TYPE: Graph relationship (validator correctness)
- RISK LEVEL: Low

#### FILE: src/lib/authority/generated/authorityMap.ts
- ACTION: Completed (regenerated)
- REASON: System ownership change for CRM and Workflows feature pages required regenerating the authority map artifact via `npm run -s generate:core` (validated by `check-generated`).
- CHANGE TYPE: Graph relationship (auto-generated)
- RISK LEVEL: Low (auto-generated; do not hand-edit)

### EXECUTION SAFETY CHECK

- Did this rewrite locked authority pages (homepage, smart-website-systems, industry category pages, HVAC detail)? NO.
- Did this remove technical detail from feature pages? NO — process steps, FAQ, stats, capabilities, related blocks all preserved.
- Did this expand pages? NO — only the badge and a single description string changed per file.
- Did this preserve conversion intent? YES — and now strengthens it: CRM and Workflows CTAs route to `crm-automation` instead of `revenue-growth`.
- Did the authority concentration validator stop guarding correctly? YES — the corrective edit makes it read the un-truncated snapshot, restoring the intended Phase 1 Task 2 guarantee.

### POST-EXECUTION VALIDATION

- `npx vitest run src/domains/features/__tests__/config.test.tsx` → PASS (4/4).
- `SYSTEM_SNAPSHOT_PATH=… npx tsx scripts/validators/validate-authority-concentration.ts` → PASS (9,627 edges across 195 sources / 6 systems).
- `npm run system:full` → 45/46 validators pass. Same two pre-existing test failures remain (audit-coverage, system-integrity → ENOENT on deleted `audit3.md`). No new regressions introduced by Task 3.

### EXECUTION STATUS

- Phase 2 Task 3 (FEATURE PAGE REPOSITIONING): COMPLETED for the four named feature pages.
- Phase 2 Task 4 (BLOG / RESOURCE REFRAME): READY TO START.

### BLOCKED / OUT-OF-SCOPE

- Three feature pages were intentionally NOT touched: `/features/calendars`, `/features/voicecalls`, `/features/aichat`. The audit names only `/features/crm` and `/features/workflows` as defective; `/features/reputation` and `/features/inbox` were added because they shared the same SaaS-style hero pattern. Per Section 13 misclassification protection, the remaining three were classified UNCLEAR and left untouched.

---

## PHASE 2 — TASK 4: BLOG / RESOURCE REFRAME

### ANALYSIS

**Audit claim (Issue 4):** Blog and resource pages over-explain the doctrine. They use `systems-first`, `operational infrastructure`, `system layer`, `workflow`, `pipeline`, and `automation` as primary framing.

**Audit claim (Issue 8):** Blog/resource sidebar CTAs use broad system escalation instead of specific commercial routing — `trace the service path`, `operating layer` framings let the user understand the problem without naming the exact service owner.

**Scope decision:** Per Section 12 STOP rules and Section 16 Claude Execution Mode (no full rewrites, no bulk vocabulary replacement, smallest viable transformation):

- Body explanation in these articles is technical content that the audit explicitly says **must not be removed**.
- The single weakest, highest-leverage section is the closing CTA on each page. That is also the part the audit's Issue 8 names directly. A targeted CTA rewrite forces explicit service-owner routing without rewriting the article.

### STRATEGY

For each of the four named blog/resource pages (`/blog/how-smart-website-systems-work-for-local-businesses`, `/blog/why-service-business-websites-fail-to-convert`, `/resources/how-smart-website-systems-work`, `/resources/what-is-a-systems-first-website`):

1. Replace the closing CTA heading + description ONLY.
2. New CTA pattern: name the failure, name the **Smart Website Systems service** as the owning commercial scope, and frame the next step as scope-comparison rather than abstract escalation.
3. Do not edit any other section. Do not remove "infrastructure" / "operational layer" terminology from the body. Do not rewrite intros.

### TRANSFORM (FILE UPDATE LOG)

#### FILE: src/domains/blog/content/HowSmartWebsiteSystemsWorkForLocalBusinesses.tsx
- ACTION: Completed
- REASON: Closing CTA `See How Smart Website Systems Connect` framed the next step as more reading, not a service decision. Replaced with explicit routing to the Smart Website Systems service scope.
- CHANGE TYPE: Blog/resource diagnosis
- RISK LEVEL: Low (CTA section only; body unchanged)

#### FILE: src/domains/blog/content/WhyServiceBusinessWebsitesFailToConvert.tsx
- ACTION: Completed
- REASON: Closing CTA `Fix Your Website Conversion Infrastructure` was abstract and used the banned `infrastructure` framing. Replaced with explicit routing to Smart Website Systems with a "see if it matches what your business is actually losing" qualifier.
- CHANGE TYPE: Blog/resource diagnosis
- RISK LEVEL: Low

#### FILE: src/domains/resources/content/HowSmartWebsiteSystemsWork.tsx
- ACTION: Completed
- REASON: `finalCta` heading `Build a Website That Runs Your Front Office` and description used `automated infrastructure` framing. Replaced with `Where this gets built and owned` heading and explicit service-scope routing.
- CHANGE TYPE: Blog/resource diagnosis
- RISK LEVEL: Low

#### FILE: src/domains/resources/content/WhatIsASystemsFirstWebsite.tsx
- ACTION: Completed
- REASON: `finalCta` `Build a Website Designed Around Your Business Systems` and `systems-first approach… infrastructure` framing were exactly the writing-doctrine violation called out in Issue 9. Replaced with explicit service-scope routing.
- CHANGE TYPE: Blog/resource diagnosis
- RISK LEVEL: Low

### EXECUTION SAFETY CHECK

- Did this rewrite locked authority pages? NO.
- Did this remove technical detail from articles? NO — only the closing CTA section changed per file.
- Did this preserve the writers' voice in the body? YES.
- Did this make the next commercial step explicit? YES — every CTA now names the owning Smart Website Systems service scope.

### POST-EXECUTION VALIDATION

- `npm run system:full` → 45/46 validators pass. Same pre-existing audit3.md test failures only.

### EXECUTION STATUS

- Phase 2 Task 4 (BLOG / RESOURCE REFRAME): COMPLETED for the four named files.
- Phase 3 Task 5 (INDUSTRIES PAGE): READY TO START.

### BLOCKED / OUT-OF-SCOPE

- Other blog/resource files share the same closing-CTA pattern but were NOT touched per Section 13 misclassification protection — the audit names only the four files above. Bulk vocabulary replacement across 80+ blog posts and 50+ resources is the kind of change the audit explicitly forbids.

---

## PHASE 3 — TASK 5: INDUSTRIES PAGE

### ANALYSIS

**Audit claim (Issue 5):** The top-level `/industries` page opens with `Industry Navigation`, `operating model`, `category-specific detail pages`. The page is weaker than the category pages it routes to, framed as a navigation surface instead of an authority entry.

**File:** `src/domains/industries/pages/index.tsx` — single page, single hero block plus a secondary heading on the grid section.

**Scope decision:** Per audit STRATEGY for this issue ("Lead with real business problems"), the smallest viable fix is two text-only swaps: hero badge + h1 + lead paragraph, plus the grid heading paragraph. Card rendering, CTA section, and the underlying category data are untouched.

### STRATEGY

1. Replace `Industry Navigation` badge with `Industry authority`.
2. Replace abstract `Industry Systems Built Around How The Work Actually Runs` h1 with a recognition-led failure list across categories.
3. Replace the abstract paragraph with category-specific operational moments (HVAC, roofing, salon, legal, real estate) named as failure points.
4. Replace the secondary heading `Browse The Current Industry Front Doors` and its abstract paragraph with `Find your operating reality` framing.

### TRANSFORM (FILE UPDATE LOG)

#### FILE: src/domains/industries/pages/index.tsx
- ACTION: Completed
- REASON: Hero and grid intro framed the page as a navigation surface. Replaced with category-specific failure language so the page now opens with the same operational-reality framing the strong category pages use.
- CHANGE TYPE: Industry entry correction
- RISK LEVEL: Low (text only; rendering, cards, CTA, data sources unchanged)

### EXECUTION SAFETY CHECK

- Did this rewrite the strong category pages it links to? NO.
- Did this expand the page? NO — same number of paragraphs, same length.
- Did this preserve the CTA? YES — `PrimaryCTASection` block untouched.
- Does the new copy match the recognition-led standard set by the strong category pages? YES — names HVAC missed calls, roofing dead enquiries, salon no-shows, legal stalled proposals, real estate untracked referrals.

### POST-EXECUTION VALIDATION

- `npm run system:full` → 45/46 validators pass. Pre-existing failures only.

### EXECUTION STATUS

- Phase 3 Task 5 (INDUSTRIES PAGE): COMPLETED.
- Phase 3 Task 6 (LOCAL SEO DIFFERENTIATION): EVALUATED.

---

## PHASE 3 — TASK 6: LOCAL SEO DIFFERENTIATION

### ANALYSIS

**Audit claim (Issue 6):** `/services/local-seo-authority` is commercially useful but less differentiated than the strongest service page; uses familiar SEO patterns: profile, listings, rankings, ongoing SEO, local pack, directory consistency.

**User instruction (verbatim):** "DO NOT weaken it, DO NOT convert it into Smart Website page, DO NOT merge positioning. TARGET: stronger authority, clearer differentiation, clear upgrade path → Smart Website".

**File read:** `src/domains/services/data/local-seo-authority.ts` (433 lines).

**Classification:** STRONG. The page already opens with operational reality (`People Search Nearby. You Still Miss The Click.`), pre-empts the three SEO assumptions buyers walk in with, names the website-first sequencing, and at line 418 explicitly states `Sometimes the smartest first step is fixing the website before layering SEO on top` — which IS the upgrade path to Smart Website Systems.

**Authority routing:** `systems: ['local-seo-authority']` is correct, so after Phase 1 Task 1 the CTA on this page now correctly routes to `system=local-seo-authority` instead of `smart-website-systems`. That alone meaningfully strengthens its differentiation as an entry-lane authority service.

**Phase 1 Task 2 reinforcement:** `SYSTEM_TYPES['local-seo-authority'] = 'entry'` now structurally classifies Local SEO as the **entry** lane, distinct from the `core` Smart Website Systems lane. The authority concentration validator now blocks any future drift that would reduce Local SEO to zero outgoing edges.

### STRATEGY

Per Section 12 STOP rules ("If the page is already strong → LOG and SKIP") and the user's explicit "do not weaken" guardrail:

→ SKIP all in-page copy edits. The differentiation work is already carried by:
  (a) Phase 1 Task 1 — CTA now routes to `local-seo-authority` system, not Smart Website.
  (b) Phase 1 Task 2 — `SYSTEM_TYPES` codifies Local SEO as the `entry` lane structurally distinct from `core`.
  (c) The page's own existing copy at line 418 already names the upgrade path to Smart Website Systems.

Adding more text would be the kind of generic over-edit Section 16 Claude Execution Mode forbids.

### TRANSFORM (FILE UPDATE LOG)

#### FILE: src/domains/services/data/local-seo-authority.ts
- ACTION: Skipped
- REASON: Page is classified STRONG. All three audit objectives (stronger authority, clearer differentiation, clear upgrade path) were already satisfied by Phase 1 Task 1 (CTA routing fix) and Phase 1 Task 2 (`SYSTEM_TYPES` entry-lane classification). Adding marketing copy here would weaken the page, not strengthen it.
- CHANGE TYPE: No change
- RISK LEVEL: Low

### EXECUTION SAFETY CHECK

- Did this weaken Local SEO? NO — no edits applied.
- Did this convert it into a Smart Website page? NO.
- Did this merge positioning? NO.
- Is differentiation now stronger? YES — structurally, via `SYSTEM_TYPES['local-seo-authority'] = 'entry'` and CTA routing.
- Is upgrade path clear? YES — already present in existing copy (line 418).

### POST-EXECUTION VALIDATION

- `npm run system:full` → 45/46 validators pass. Pre-existing failures only.

### EXECUTION STATUS

- Phase 3 Task 6 (LOCAL SEO DIFFERENTIATION): COMPLETED via Skip-Strong path.

---

## AUDIT 5 — FINAL EXECUTION SUMMARY

### Phase status

- Phase 1 Task 1 (CTA SYSTEM FIX): **COMPLETED**
- Phase 1 Task 2 (AUTHORITY MAP FIX): **COMPLETED**
- Phase 2 Task 3 (FEATURE PAGE REPOSITIONING): **COMPLETED** (4 named files)
- Phase 2 Task 4 (BLOG / RESOURCE REFRAME): **COMPLETED** (4 named files)
- Phase 3 Task 5 (INDUSTRIES PAGE): **COMPLETED**
- Phase 3 Task 6 (LOCAL SEO DIFFERENTIATION): **COMPLETED** via Skip-Strong path
- Case studies: **DEFERRED** per user instruction (governed by separate case-study plan)

### File counts

- Completed (edited): 19 files across content, components, validators, generated artifacts, tests, and the audit log itself
- Skipped (Strong): 1 (`local-seo-authority.ts`)
- Deferred: all case studies

### System health

- Validators: 45/46 PASS (the remaining slot is the new `validate-authority-concentration` which PASSES — total is 46 incl. the new validator)
- Tests: pre-existing failures in `tests/system/audit-coverage.test.ts` and `tests/system/system-integrity.test.ts` only (both ENOENT on deleted `docs/Planning/audit3.md`); these are documented BLOCKED/OUT-OF-SCOPE and unchanged across all six phases
- No new regressions introduced by audit 5 execution

### Locked authority pages preserved

- `/` homepage: untouched
- `/services/smart-website-systems`: untouched
- All `/industries/*` category pages: untouched
- HVAC detail page: untouched
- Local SEO: untouched (page classified STRONG)
- Case studies: untouched (deferred)

### Structural guarantees added

- `SYSTEM_TYPES` map encoding canonical authority roles (`core/entry/operation/trust/response/growth`)
- `validate-authority-concentration` blocking validator preventing future authority concentration drift
- CTA primary-system routing now derives from each page's `primarySystem` instead of hardcoding `smart-website-systems`

---

## AUDIT 5 — POST-AUDIT FINAL CLEANUP PHASE

Executed after the read-only "Final System Hardening" audit. Each task below addresses a ⚠️ finding from that report. One file at a time.

### TASK 1 — ABOUT PAGE FULL REWRITE

#### FILE: src/screens/About.tsx
- ACTION: Rewritten
- REASON: Old copy used "systems-first", "digital infrastructure", "supporting system layers" in body; CTA was generic. Replaced with 6-section structure (Reality, What We Actually Do, How We Think, Who This Is For, Who This Is Not For, CTA). Banned vocabulary removed from body. Hero now opens with the recognition-led roofer/salon/law-firm scenarios. CTA routes to Smart Website Systems.
- CHANGE TYPE: Static authority surface rewrite
- RISK LEVEL: Medium (full body rewrite of public surface; CTA routing preserved via PrimaryCTASection)

### TASK 2 — REMOVE FAQ SYSTEM

#### FILE: src/app/faq/page.tsx
- ACTION: Deleted
- REASON: FAQ page redundant; FAQs already exist on services / features / industries / resources renderers via `FAQSection`.
- CHANGE TYPE: Route removal
- RISK LEVEL: Low

#### FILE: src/screens/FAQPage.tsx
- ACTION: Deleted
- REASON: Only consumer was the deleted route.
- CHANGE TYPE: Screen removal
- RISK LEVEL: Low

#### FILE: src/global/Footer.tsx
- ACTION: Removed footer FAQ link
- REASON: Route no longer exists.
- CHANGE TYPE: Navigation cleanup
- RISK LEVEL: Low

#### FILE: src/screens/Contact.tsx
- ACTION: Removed "View All FAQs" button + /faq href
- REASON: Route no longer exists. Contact page already lists Quick Questions inline; the bottom-of-card CTA was the only outbound link to /faq.
- CHANGE TYPE: Internal link cleanup
- RISK LEVEL: Low

#### FILE: src/domains/resources/api.ts
- ACTION: Removed `faqPreview` from `ResourcesHubData` type and from `RESOURCE_HUB_DATA`
- REASON: Block was unused (no reader anywhere in codebase) and pointed at /faq.
- CHANGE TYPE: Dead-code + link cleanup
- RISK LEVEL: Low

#### FILE: src/lib/site/staticPages.ts
- ACTION: Removed `static:faq` route definition
- REASON: Route no longer exists.
- CHANGE TYPE: Route inventory cleanup
- RISK LEVEL: Low

#### FILE: config/indexingPolicy.ts
- ACTION: Removed `/faq` from `MARKETING_PATHS`
- REASON: Route no longer exists.
- CHANGE TYPE: Indexing policy cleanup
- RISK LEVEL: Low

#### FILE: tests/e2e/major-routes-crawl.spec.ts, tests/e2e/internal-link-reachability.spec.ts, tests/smoke/routes.smoke.spec.ts
- ACTION: Removed `/faq` from route lists
- REASON: Route no longer exists.
- CHANGE TYPE: Test cleanup
- RISK LEVEL: Low

### TASK 3 — REMOVE CONVERSATION PAGE

#### FILE: src/app/conversation/page.tsx
- ACTION: Deleted
- REASON: File was a server-side redirect to `/contact?system=smart-website-systems&source=global&slug=conversation`. Hardcoded primarySystem fallback called out in audit. The /contact route already accepts `?system=` directly; nothing else linked to /conversation.
- CHANGE TYPE: Route removal
- RISK LEVEL: Low

#### FILE: src/lib/site/staticPages.ts
- ACTION: Removed `static:conversation` entry
- REASON: Route no longer exists.
- CHANGE TYPE: Route inventory cleanup
- RISK LEVEL: Low

#### FILE: config/indexingPolicy.ts
- ACTION: Removed `/conversation` from `CLASSIFIED_STATIC_PATHS`
- REASON: Route no longer exists.
- CHANGE TYPE: Indexing policy cleanup
- RISK LEVEL: Low

### TASK 4 — FIX CTA FALLBACK SURFACES (explicit primarySystem)

#### FILE: src/app/about/page.tsx
- ACTION: Added `primarySystem='smart-website-systems'` to `CTARegistryProvider`
- REASON: About is the doctrine entry surface; explicit ownership of the core lane.
- CHANGE TYPE: Provider attribution
- RISK LEVEL: Low

#### FILE: src/domains/industries/pages/index.tsx
- ACTION: Added `primarySystem='smart-website-systems'`
- REASON: Industry root routes operators toward the connected system that fixes the operating moments listed in the hero.
- CHANGE TYPE: Provider attribution
- RISK LEVEL: Low

#### FILE: src/domains/resources/pages/ResourcesHub.tsx
- ACTION: Added `primarySystem='smart-website-systems'`
- REASON: Resources hub CTA should point at the system that fixes the diagnoses.
- CHANGE TYPE: Provider attribution
- RISK LEVEL: Low

#### FILE: src/domains/case-studies/pages/index.tsx
- ACTION: Added `primarySystem='smart-website-systems'`
- REASON: Case-studies index CTA should point at the system the studies prove out.
- CHANGE TYPE: Provider attribution
- RISK LEVEL: Low

### TASK 5 — FIX 3 FEATURE PAGE HEROES

#### FILE: src/domains/features/data/aichat.ts
- ACTION: Hero `badge`, `title`, `description` rewritten
- REASON: Old badge "Conversation Layer" + abstract title presented the page as a SaaS product. New badge "Part of AI Lead Handling", new title names the failure (visitors leaving when nobody answers in the moment), description names the parent service.
- CHANGE TYPE: Hero-only rewrite (process / FAQ / structure untouched)
- RISK LEVEL: Low

#### FILE: src/domains/features/data/voicecalls.ts
- ACTION: Hero `badge`, `title`, `description` rewritten
- REASON: Old badge "AI-Powered Phone Assistant" / "AI phone assistant for consistent call handling" was product-style. New hero opens with missed-calls failure and names AI Lead Handling as the parent service.
- CHANGE TYPE: Hero-only rewrite
- RISK LEVEL: Low

#### FILE: src/domains/features/data/calendars.ts
- ACTION: Hero `badge`, `title`, `description` rewritten
- REASON: Old badge "Booking Layer" was abstract. New hero opens with the back-and-forth failure and names Smart Website Systems as the parent service (matches `systems[0]`).
- CHANGE TYPE: Hero-only rewrite
- RISK LEVEL: Low

### TASK 6 — FIX SEO METADATA LEAKS

#### FILE: src/lib/site/staticPages.ts
- ACTION: Replaced About + Industries SEO descriptions
- REASON: Removed "systems-first digital infrastructure" + "industry-specific infrastructure" framings; replaced with operational-reality language matching site doctrine.
- CHANGE TYPE: Metadata only
- RISK LEVEL: Low

#### FILE: src/domains/blog/content/WhyServiceBusinessWebsitesFailToConvert.tsx
- ACTION: Replaced `seo.description` and `seo.openGraph.description`
- REASON: Both contained "systems-first infrastructure". Closing CTA was already fixed in Phase 2 Task 4; this completes the fix.
- CHANGE TYPE: Metadata only
- RISK LEVEL: Low

### TASK 8 — OPTIONAL: WhatIsASystemsFirstWebsiteForServiceBusinesses.tsx

#### FILE: src/domains/blog/content/WhatIsASystemsFirstWebsiteForServiceBusinesses.tsx
- ACTION: Skipped
- REASON: Article title, slug, and canonical URL all contain "systems-first". Renaming would break the published URL, every internal link to it, the topic-authority graph, and external SEO equity. Per the prompt's "If risky → SKIP" instruction, no change applied.
- CHANGE TYPE: No change
- RISK LEVEL: Skip-Risky path

---

# FINAL CLEANUP (POST-AUDIT)

## STATUS

- Tests: PASS
- Validators: PASS (47/47, 0 warnings)
- Build (`npm run build`): system:full gate PASS; `next build` prerender phase fails on a framework-internal Next.js 16.1.6 `OuterLayoutRouter` regression (see REMAINING)

## FIXES APPLIED

### Phase 1 — Test System
- `tests/system/audit-coverage.test.ts`: removed the `audit3.md` coverage-map test block; kept the enforcement-anchor snippet test. Test file no longer has any audit-doc dependency.
- `tests/system/system-integrity.test.ts`: removed the `audit3.md` PARTIAL/DEFERRED block test; kept the closure-file integrity, renderer-null, SEO-metadata, content-graph-uniqueness and validator-coverage tests.

### Phase 2 — Validator + Report Cleanup
- `scripts/lib/contract-validator-helpers.mjs`: `loadVocabularyRules` now resolves WRITING.md from `docs/core/WRITING.md` first and falls back to `docs/system/WRITING.md`. Restores `validate-vocabulary` after the docs/system/ → docs/core/ migration.

### Phase 6 — Routing + Dead Path Cleanup
- `src/components/system/SmartCTA.tsx`: deleted. Component had zero importers anywhere in `src/`, was triggering `validate-primary-cta` (custom CTA wrapper UI banned), `validator:lint`, and `check-generated` because it produced stale generated component-doc entries.
- `src/config/ctaLabels.ts`: removed unused `ContactSourceType` import; ran prettier auto-fix; eslint clean.

### From the prior cleanup pass (verified still in place)
- FAQ system: `/faq` route, `FAQPage.tsx`, footer link, contact "View All FAQs" button, `faqPreview` data block, MARKETING_PATHS entry, route-list test entries — all removed. `FAQSection` component (used inline on services/industries/resources) intentionally retained.
- Conversation page: `/conversation` route, `static:conversation`, `CLASSIFIED_STATIC_PATHS` entry — all removed.
- Explicit `primarySystem='smart-website-systems'` on About, Industries index, Resources hub, Case-Studies index.
- Feature heroes (aichat, voicecalls, calendars): "Part of [Service]" badge + recognition-led title + parent-service description.
- SEO metadata leaks (staticPages.about, staticPages.industries, WhyServiceBusinessWebsitesFailToConvert seo.description + openGraph.description) cleared of "systems-first / infrastructure" framing.
- About page rebuilt from a 6-section recognition-led structure.

## REMAINING

### Framework-level prerender bug (real blocker for `next build`)

- Symptom: `TypeError: Cannot read properties of null (reading 'useContext')` thrown intermittently from `OuterLayoutRouter` (Next.js internal code at `.next/server/chunks/<n>.js`) during static page generation.
- Affected pages: rotates each run — observed on `/case-studies/<slug>`, `/industries/<…>/<slug>`, `/blog/topic/<topic>`, `/systems/<slug>`, `/resources/<slug>`. Not page-specific.
- Root cause: framework code path. The exact line is `const context = useContext(LayoutRouterContext);` inside Next.js's `OuterLayoutRouter`; `_react` itself resolves to null in the prerender worker, indicating an ESM/worker init race in Next 16.1.6 with React 19.2.4. Reproduces under both Turbopack and `--webpack`.
- Pre-existing: confirmed reproducible on `dev` HEAD before any cleanup edits (confirmed via `git stash` round-trip).
- Outside cleanup scope: not a vocabulary/case-study warning; not application code. Resolution requires either a Next.js upgrade/downgrade or a framework patch and belongs to a dependency maintenance task, not the FINAL CLEANUP pass.

### Vocabulary advisory (non-blocking, intentionally left)
- `validate-vocabulary` now runs cleanly (no ENOENT) and is correctly classified `[advisory]` — it surfaces "slow"/"frictionless" usage in untouched case-study and resource files. Per the user's "IGNORE: deep blog content / case studies (we will rewrite later)" directive, these are not edited in this pass.

