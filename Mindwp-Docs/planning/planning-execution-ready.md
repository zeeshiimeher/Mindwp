# COPILOT EXECUTION PLAN

Model: GPT-5.4

Source:
- derived from planning.md
- audited against the current repo state on 2026-04-17

Purpose:
This document is the execution plan Copilot should follow.

Use it to:
- understand current repo state
- understand how the current code path works
- execute tasks in the right order
- avoid drift during bulk execution
- keep full rewrites separate at the end

Planning overrides for this version:
- service pages are already Level 5 rewritten
- homepage is already done for the current approved scope
- service pages only need micro improvements where clearly necessary
- new BOFU and WOFU pages may be created before the final rewrite pass
- full page rewrites stay in the separate end queue

---

# 1. CURRENT STATE

## 1.1 Audit Sources

This document is grounded in the following repo artifacts:
- Mindwp-Docs/planning/planning.md
- reports/validation-results.json
- reports/system-state.json
- reports/readable-audit-report.md
- reports/client-report.md
- reports/content-gaps.md
- reports/topic-authority-scores.md
- reports/execution-log.json
- package.json scripts
- active route and domain surfaces under src/app and src/domains

Audit method:
- verify current completion claims against repo reports and docs
- map open work to real repo surfaces
- remove abstract planning language where execution can already be specified
- keep rewrite work separate from execution work that can be done now

## 1.2 Repo Summary

Current repo state from the audit:

- architecture and topic coverage are materially stable
- content gap coverage is complete for the current authority model
- topic authority coverage is complete with 42 topics analyzed and 0 weak or gap topics
- SEO metadata coverage is currently clean with 0 missing metadata and 0 duplicate titles or descriptions
- validation is mostly green but not fully closed
- current validation-results.json shows 19 passed, 2 failed, with 1 blocking fail and 1 advisory fail
- the current blocking fail is generated-state drift, not structural validator failure
- the current advisory fail is lint drift across multiple surfaces
- readable and client audit reports still show large conversion-path and internal-link weaknesses across live pages
- landing pages, industry pages, and multiple case studies still show weak journey progression and missing service links
- service-page rewrite work is already materially present, so service work in this plan is micro improvement only
- homepage is treated as done for the approved current scope unless a later explicit reopen happens

Completed enough to treat as done in this plan:
- service page Level 5 rewrite pass
- homepage approved current pass

Still open now:
- generated outputs need regeneration and closure
- lint drift needs cleanup or deliberate triage
- conversion-path quality remains weak across many live pages
- internal-link and journey progression quality remain weak on high-impact pages
- some blog and resource pages still need targeted validates and service-routing closure
- case-study and industry surfaces still show evidence of conversion-path weakness even where content coverage is otherwise complete

## 1.3 Non-Negotiable Rules

Copilot should treat the following as fixed:

- core architecture decisions stay as-is
- topics stay as-is
- services stay as-is
- Smart Website Systems remains the strategic gravity layer
- BOFU is isolated to service pages
- components remain stable building blocks
- pages remain the composition layer
- no new topics
- no architectural redesign
- no random new pages
- no broad content expansion before alignment work is complete
- no BOFU escalation inside blog or resource pages
- no component mutation to introduce new page behavior
- no bulk execution across multiple page families without a clear phase owner
- one page equals one primary service
- one primary CTA equals one service
- proof must be mid-content and directly support the service being pushed

---

# 2. CURRENT CODE MODEL

## 2.1 Runtime Path

Current page flow is consistent across the main domains:
- route file resolves graph-backed slug or path
- metadata resolves from inventory or pageMetadata helpers
- domain registry or config resolves the page payload
- template or renderer outputs the page
- CTA routing is expected to flow through SmartCTA and contact helpers

This pattern is visible in:
- services: src/app/services/[...slug]/page.tsx -> src/domains/services/config.tsx -> service renderer
- blog: src/app/blog/[slug]/page.tsx -> src/domains/blog/registry.ts -> BlogPostTemplate
- resources: src/app/resources/[slug]/page.tsx -> RESOURCE_REGISTRY -> ResourcePageTemplate
- industries: src/app/industries/[...slug]/page.tsx -> src/domains/industries/config.tsx -> industry renderer
- case studies: src/app/case-study/[slug]/page.tsx -> CASE_STUDY_REGISTRY -> CaseStudyTemplate

## 2.2 Metadata And Graph Model

Current metadata and graph rules from code and docs:
- static and parameterized route metadata is inventory-driven or resolved through page metadata helpers
- graph relationships are built at generation time
- canonical values must stay aligned with the canonical registry
- report files are the execution feedback layer and must be regenerated after meaningful content-system edits

Copilot should not guess metadata, graph values, or CTA routing rules from visible content.

## 2.3 Hub And Landing Model

Current landing surfaces are mostly card-and-CTA composition pages:
- services landing highlights Smart Website Systems first, then supporting systems and operational modules
- industries landing uses category cards and one footer CTA
- case studies landing uses a card grid plus one footer CTA
- resources hub uses category cards, guide cards, and one footer CTA
- homepage reads inventory metadata and renders Homepage with featured case studies

Execution implication:
- most current landing, industry-parent, case-study, blog, and resource issues are page-composition and routing issues, not architecture issues

## 2.4 Execution Order

Do the work in this order:
1. generated-state and validation closure
2. CTA and conversion-path fixes
3. blog and resource routing fixes
4. landing, industry, and case-study non-rewrite fixes
5. service-page micro improvements only if audit shows a real gap
6. new BOFU and WOFU page creation
7. full page rewrites at the end

Grouping rule:
- group tasks only when they share the same page family, validation path, and risk profile
- do not mix unrelated families in one execution burst
- do not solve page-specific behavior through shared component mutation

## 2.5 Agent Behavior

Copilot should execute this doc like a runbook:
- pick one module only
- read the listed repo surfaces before editing
- follow the listed validation step before moving to the next slice
- use the default decision when a review question has no answer yet
- stop and ask only when the task cannot be executed safely with the stated default
- do not reopen excluded rewrite work during normal execution

---

# 3. PHASE SUMMARY

## 3.1 Phase 0

What it means now:
- close generated drift
- keep CTA and related-content infrastructure stable
- do not open location implementation

## 3.2 Phase 3

What it means now:
- preserve and verify the CRM cluster
- keep service pages in micro-improvement mode only
- finish proof and validation closure
- BOFU and WOFU page creation is allowed now if the page brief is explicit

Current Phase 3 surfaces:
- src/domains/blog/content/WebsiteCrmIntegrationForServiceBusinesses.tsx
- src/domains/blog/content/WebsiteCrmIntegrationForSalons.tsx
- src/domains/resources/content/WebsiteCrmIntegrationExplained.tsx
- existing service data, renderers, and pages under src/domains/services/**

## 3.3 Phase 4

What it means now:
- align page families to the correct service path
- fix CTA path weakness, missing service links, and weak journey progression
- keep blog and resource pages educational with upward routing
- treat landing, industry, and case-study work as patch work first
- keep full rewrites in the separate end queue

Current Phase 4 surfaces:
- landing pages and hubs under src/domains/services/pages, src/domains/industries/pages, src/domains/case-studies/pages, src/domains/resources/pages
- industry pages under src/domains/industries/**
- case studies under src/domains/case-studies/**
- blog and resource content under src/domains/blog/content and src/domains/resources/content

---

# 4. EXECUTION MODULES

## 4.1 Module A — Generated State And Validation Closure

Current code:
- generators write authority maps, registries, docs, and inventory support files
- validators and analyzers read those derived files and write back into reports/
- current audit shows one blocking failure from generated drift and one advisory failure from lint drift

Work:
1. regenerate stale outputs
2. run generated-state checks
3. rerun the validation stack needed to refresh reports
4. record exactly what still fails after regeneration

Repo surfaces:
- package.json
- scripts/generators/**
- src/utils/componentDocs.generated.ts
- src/lib/authority/generated/authorityMap.ts
- reports/validation-results.json
- reports/system-state.json

How to execute:
- use the existing npm scripts from package.json
- update reports before planning downstream fixes
- do not mix page-family edits into this module

Validation:
- check-generated passes
- validation-results.json is refreshed
- system-state.json reflects the new baseline

Done when:
- generated outputs are current
- check-generated no longer fails
- remaining failures, if any, are explicitly triaged into later groups

Question for review:
- Should global lint cleanup be part of launch prep now, or should lint only be fixed in files touched by active execution?

Default now:
- fix only the files touched by active execution, then reassess global lint cleanup near launch

## 4.2 Module B — CTA And Conversion Path Alignment

Current code:
- primary CTA behavior is expected to flow through SmartCTA and contact helpers
- landing and template pages decide placement, framing, and surrounding context
- reports currently show weak service connection and weak journey progression across many pages

Work:
1. audit weak CTA and conversion-path pages from the current reports
2. patch page-level CTA framing and service-routing paths
3. verify one primary service path per page
4. rerun conversion and CTA contract validation

Repo surfaces:
- src/config/ctaLabels.ts
- src/components/system/SmartCTA.tsx
- src/lib/cta/**
- landing and template surfaces under src/domains/**

Priority signals:
- readable-audit-report.md reports 104 pages with weak service connection
- readable-audit-report.md reports 45 pages with poor journey progression
- client-report.md reports critical path weakness on multiple landing, industry, and case-study surfaces

How to execute:
- fix CTA path issues at the page layer first
- only touch shared CTA code if the reports show a system-level defect
- keep one page to one service path

Validation:
- npm run validate:cta-label-contract
- npm run validate:conversion-contract
- report refresh for the touched slice

Done when:
- page-level CTA paths are clear on the current slice
- conversion-path weaknesses are reduced on priority pages
- CTA system contracts remain passing

Question for review:
- For landing and hub pages, should the primary CTA always point to Smart Website Systems unless the page is explicitly owned by another service?

Default now:
- yes, use Smart Website Systems as the default gravity path unless the page already has a clearly approved service owner

## 4.3 Module C — Blog And Resource Routing Closure

Current code:
- blog routes resolve BLOG_POSTS into BlogPostTemplate
- resource routes resolve RESOURCE_REGISTRY into ResourcePageTemplate
- graph relationships and validates signals are derived from generated authority outputs
- these surfaces should educate, validate, and route upward without becoming disguised service pages

Work:
1. audit blog entries with weak validates or weak service linkage
2. audit resource entries with weak service linkage
3. patch one service connection, one CTA path, and one proof reference where missing
4. rerun graph and authority generation after each approved slice

Repo surfaces:
- src/domains/blog/content/**
- src/domains/resources/content/**
- src/domains/blog/registry.ts
- src/domains/resources/generatedRegistry.ts

Priority surfaces:
- WebsiteCrmIntegrationForServiceBusinesses.tsx
- WebsiteCrmIntegrationForSalons.tsx
- WebsiteCrmIntegrationExplained.tsx
- generated summaries showing blog or resource nodes with validates = 0

How to execute:
- patch only the routing and proof layers needed for MOFU closure
- do not add BOFU decision sections here
- use the CRM cluster as the reference model for MOFU service routing

Validation:
- npm run graph:validate
- npm run generate:authority-map
- npm run generate:authority-scores
- spot-check regenerated report output for touched nodes

Done when:
- no targeted page drifts into BOFU structure
- targeted MOFU pages route clearly to one service
- report regeneration confirms the closure

Question for review:
- Should every targeted blog/resource patch add exactly one proof reference even when the page already has strong conceptual validation but weak service routing?

Default now:
- yes, add one proof reference if it strengthens the route without pushing the page into BOFU behavior

## 4.4 Module D — Service Page Micro Improvements Only

Current code:
- services resolve through src/app/services/[...slug]/page.tsx and src/domains/services/config.tsx
- service data and renderers already carry the current Level 5 rewrite pass
- remaining issues should be treated as small closure defects, not rewrite prompts

Work:
1. audit service pages only when a report or validation signal shows a real defect
2. patch proof placement, CTA alignment, or service-intent gaps only where clearly needed
3. avoid restructuring sections unless the defect cannot be fixed by a micro edit
4. rerun service validation after each approved service slice

Repo surfaces:
- src/domains/services/data/**
- src/domains/services/renderers/**
- src/domains/services/pages/**

Priority signals:
- report-level service weakness if still present after other modules
- any service page that fails structure, proof, or CTA validation
- touched service files that already require lint cleanup during active execution

How to execute:
- do not reopen the service-page rewrite pass
- keep Smart Website Systems as the gravity layer
- if a service page needs a real rewrite, move it to the rewrite queue instead of expanding this module

Validation:
- npm run validate:service-structure
- npm run graph:validate when service mappings or proof links change

Done when:
- no service-page work remains except true rewrite-sized issues
- service pages touched in this module are fixed with micro edits only

Question for review:
- Should service-page micro improvements happen only after landing, blog/resource, industry, and case-study fixes are done?

Default now:
- yes, only touch service pages early if a validator or high-priority report points to a concrete defect

## 4.5 Module E — Landing, Industry, And Case Study Fixes

Current code:
- services landing, industries landing, case studies landing, and resources hub are composition-heavy pages with card grids and CTA blocks
- industry and case-study detail routes resolve through graph and registries, then render templates
- current reports show these families still carry the largest routing and journey gaps

Work:
1. audit landing hubs one family at a time
2. patch service links, journey progression, and CTA clarity
3. audit industry parents and details where reports show missing route depth
4. audit case studies with missing service-routing and next-step paths
5. rerun report checks after each family slice

Repo surfaces:
- src/domains/services/pages/index.tsx
- src/domains/industries/pages/**
- src/domains/case-studies/pages/**
- src/domains/case-studies/content/**
- src/domains/resources/pages/**
- blog and resource hub surfaces as needed

Priority signals:
- client-report.md flags critical industry parents with missing service links and journey progression
- client-report.md flags critical case studies missing service links and progression paths
- readable-audit-report.md identifies high-impact pages ready for improvement and weak internal linking

How to execute:
- work by page family, not across mixed families
- patch parent routing before expanding into detail-page polish
- keep these fixes in patch mode; move rewrite-sized issues to the end queue

Validation:
- report regeneration for the touched family
- graph validation when service links or authority links change
- structure validation if template payloads are touched

Done when:
- each audited family has clearer upward service routing
- internal-link and journey gaps are reduced on the approved slice
- no family enters rewrite mode unless patch-level closure fails

Question for review:
- For industry work, should parent category pages be fully stabilized before touching detail pages under the same category?

Default now:
- yes, fix the parent route first because it controls the main service-routing path

## 4.6 Module F — New BOFU And WOFU Page Creation

Current code:
- new page creation can fit the current runtime model as long as metadata, canonical values, inventory rules, graph relationships, and CTA routing follow the existing system
- the earlier plan already defined 3 BOFU pages, and this plan now allows them before the final rewrite queue

Work:
1. confirm the approved list of new BOFU and WOFU pages
2. define one page brief per page before any generation
3. define service owner, route, intent, CTA target, proof asset, and metadata target for each page
4. keep these pages separate from the later rewrite queue

Current approved BOFU pages from planning:
- Website CRM Integration vs Manual Lead Handling -> crm-infrastructure-implementation
- Service Pages vs One Generic Services Page -> smart-website-systems
- Conversion Funnel System vs Landing Page Development -> conversion-layer or conversion-funnel-system alignment review needed

Questions for review:
- Is conversion-layer the final service owner for the funnel page, or should it be renamed back to conversion-funnel-system in the plan?
- Do we want only the 3 BOFU pages now, or should WOFU comparison pages be added in the same build cycle?
- If WOFU pages are added now, what is the approved page list?

Default now:
- create briefs for the 3 BOFU pages first
- hold extra WOFU pages until titles and service owners are explicitly approved

---

# 5. DEFERRED REWRITE QUEUE

## 5.1 Full Rewrites At The End

Keep this section separate from active execution.

This queue is for pages that need real rewriting, not for pages that can be fixed with routing, proof, CTA, metadata, or structure patches.

Deferred rewrite queue:
1. any service page that proves to need more than a micro improvement
2. landing pages that cannot be fixed through page-composition patches
3. industry pages that need narrative rewriting, not routing fixes
4. case studies that need full proof-first rewriting
5. any explicitly reopened long-form blog or resource rewrite

Already excluded from this rewrite queue:
- service page Level 5 rewrite pass as a full-program task
- homepage rewrite for the current approved scope
- new BOFU and WOFU page creation handled in Module F

Rewrite prerequisites per page:
- audit recorded
- closure attempt recorded
- reason patching failed recorded
- rewrite scope approved
- validation target defined before rewrite starts

---

# 6. EXECUTION RULES

## 6.1 Service Page Standard

Page readiness states:

- Level 3 Explanatory:
	- explains the topic or service
	- may have a CTA
	- lacks strong comparison, proof, or decision support
- Level 4 Partially Conversion-Ready:
	- clearer commercial framing
	- may include comparison or proof
	- still lacks complete decision structure
- Level 5 Ready:
	- complete commercial page structure
	- explicit service ownership
	- proof and CTA aligned to one service
	- ready to push a decision without drift or duplication

Universal Level 5 structure:
1. Hero
2. Problem
3. System Explanation
4. Comparison
5. Proof
6. Outcome
7. Decision Support
8. Implementation Scope
9. Mid CTA
10. Final CTA

Use this rule set if a service page is touched:
- service pages move upward by adopting the standard structure
- service pages are the only true BOFU layer
- a page is not complete without metadata update

## 6.2 Proof Rules

Use these proof rules:
- proof must appear mid-content
- proof must not be footer-only
- proof must show before versus after
- proof must connect directly to the service being sold
- proof must not float as generic trust decoration

MOFU proof rules:
- validates a concept
- supports authority content
- does not push a hard decision

BOFU proof rules:
- validates a service decision
- supports a service page or BOFU page only
- must remain out of blog and resource content unless reduced to MOFU framing

## 6.3 CTA Rules

Use these CTA rules:
- one page equals one primary service
- one primary CTA equals one service
- CTA must not compete with another service on the same page

Level 5 service-page CTA count:
- one hero CTA
- one mid CTA
- one final CTA

Placement:
- hero CTA at top
- mid CTA after proof or outcome
- final CTA at end of page

Tone:
- short tone for speed and top-level action
- descriptive tone for lower-page conviction and clarity

Enforcement rule:
- CTA behavior should be corrected at the page layer when possible
- shared CTA components must not absorb one-off rewrite logic

## 6.4 Metadata Rules

Every service-page touch should preserve:
- SEO title aligned to conversion intent
- meta description aligned to outcome
- primary service mapping
- correct system mapping
- topic alignment with no mismatch

Forbidden metadata states:
- generic titles
- vague descriptions
- metadata that does not match the page content

## 6.5 Component Integrity Rules

Use this component rule:
- do not modify existing reusable components to introduce new page behavior
- do not inject new logic through existing component props
- do not extend stable data structures just to squeeze in new behavior
- create a new page-level section instead
- insert new behavior explicitly at the page composition layer

Allowed:
- new dedicated sections
- page-level composition
- explicit insertion of new section blocks

Forbidden:
- hidden conditions inside shared CTA, hero, or section components
- conditional logic injection for one-off rewrite behavior
- turning reusable components into phase-specific behavior carriers

---

# 7. RISKS BY TASK GROUP

Group A risks:
- regeneration can overwrite derived files and expose drift that was previously hidden
- generated outputs can make downstream diffs noisy if run before the active patch slice is understood
- validation reruns can surface unrelated advisory issues that should not derail the active closure slice

Group B risks:
- CTA fixes can accidentally create multi-service competition on a page
- page-level routing fixes can be pushed incorrectly into shared components
- improving conversion language can accidentally create BOFU leakage on MOFU pages

Group C risks:
- blog and resource patches can drift into rewrite behavior instead of routing closure
- proof references can become too aggressive and violate MOFU role boundaries
- generated authority state can change after seemingly small topic or system edits

Group D risks:
- service-page closure work can quietly turn into rewrite work
- proof insertion can become generic trust decoration rather than service-linked proof
- service-page fixes can displace Smart Website Systems as the strategic gravity layer if routing is not checked carefully

Group E risks:
- landing, industry, and case-study fixes can sprawl across unrelated families if batching is not controlled
- link and journey patches can improve one path while weakening another
- these page families are the most likely place for patch-level work to reveal that a later rewrite is actually necessary

Global execution risks:
- generated-state drift can make the plan look wrong when the reports are simply stale
- lint drift is currently broad enough to distract from business-critical closure work
- report-level signals can lag behind page fixes until regeneration and validation are rerun
- bulk editing across families will reintroduce the confusion this document is intended to remove

---

# 8. VALIDATION CHECKPOINTS

Validation rule:
- every execution slice must end with the narrowest useful validation step before another slice opens

Checkpoint 1: generated-state closure
- run generation scripts needed for current drift
- rerun check-generated or validate-all relevant to the slice
- update reports before judging completion

Checkpoint 2: contract integrity
- use:
	- npm run validate:cta-label-contract
	- npm run validate:conversion-contract
	- npm run validate:section-structure
	- npm run validate:service-structure when service surfaces are touched

Checkpoint 3: graph and authority integrity
- use:
	- npm run graph:validate
	- npm run generate:authority-map
	- npm run generate:authority-scores
- use after blog, resource, case-study, service-mapping, or proof-routing changes

Checkpoint 4: page-family validation
- service closure slices:
	- npm run validate:service-structure
- industry non-rewrite slices:
	- npm run validate:industry-structure
- landing and hub slices:
	- rerun the relevant analyzers and inspect readable and client report output

Checkpoint 5: broad state validation
- use when a slice changes shared infrastructure or multiple domains:
	- npm run validate:all
	- npm run analyze:readable-report
	- npm run analyze:report

Current audit checkpoint priorities:
1. close check-generated failure
2. rerun relevant validators after regeneration
3. use report regeneration to measure conversion-path improvement on priority pages
4. do not treat a patch slice as complete until the reports reflect it or the reason for report lag is documented

---

# 9. ROLE OWNERSHIP

GPT-5.4 owns:
- planning
- structure decisions
- validation logic
- success criteria
- planning document updates

GPT-5.4 must not:
- perform bulk repo edits
- generate uncontrolled long-form production writing

Copilot owns:
- repo audits
- file patching
- system fixes
- metadata fixes
- CTA and structure implementation
- consistent multi-file execution within the active slice

Copilot must not:
- invent new architecture
- rewrite architecture by implication
- perform uncontrolled creative rewriting

Claude owns when explicitly used:
- controlled content rewriting
- service-page rewrites
- case-study rewrites
- industry-page rewrites
- targeted blog or resource writing only when explicitly approved

Claude must not:
- change system logic
- change metadata logic
- change architecture decisions

Responsibility rule:
- never mix responsibilities loosely
- return to GPT for validation and planning control after execution

---

# 10. PHASE COMPLETION CHECKS

Phase 0 is complete when:
- CTA system remains centralized
- generated-state drift is closed
- related-system behavior is deterministic
- location system remains blocked but future-ready

Phase 3 is complete when:
- CRM patch remains complete and validated
- service-page micro improvements, if any, are complete for the approved slice
- proof integration is complete
- validation fixes are complete
- approved BOFU and WOFU pages for this cycle are created or explicitly deferred

Phase 4.1 is complete when:
- any real service-page defects found in audit are fixed with micro improvements
- no service-page rewrite is reopened unless explicitly moved to the end queue

Phase 4.2 is complete when:
- no broken topic mappings remain
- no invalid system associations remain
- authority graph is clean
- generated outputs are current

Phase 4.3 is complete when:
- no weak generic primary CTA remains in the approved slice
- every primary CTA maps to one service
- CTA placement follows page-role logic

Phase 4.4 is complete when:
- landing pages are audited one by one in sequence
- titles, descriptions, and CTA blocks are conversion-driven where applicable
- each card or section pushes one clear next step
- unresolved rewrite-sized work is explicitly moved to the rewrite queue

Phase 4.5 is complete when:
- industry pages in the approved slice have clear proof and CTA alignment
- service-routing and journey gaps are closed for the current patch scope
- any remaining rewrite-sized work is explicitly deferred

Phase 4.6 is complete when:
- each approved case study has explicit service connection
- before versus after and measurable proof remain clear where already available
- missing service-routing and journey links are closed for the current scope
- rewrite-sized improvements are explicitly deferred

Phase 4.8 is complete when:
- no targeted blog or resource remains in the zero-validate or weak-routing scope for the approved slice
- each patched page has one CTA
- each patched page has one service mapping
- each patched page has one proof reference
- no unnecessary rewrites were introduced

Rewrite queue is complete when:
- only true rewrite-sized work remains in that queue
- services and homepage are not mistakenly re-added as bulk rewrite scope
- each queued rewrite has a brief, owner, and validation target

---

# 11. EXECUTION LOG

[Date]

- Module worked:
	->

- Scope:
	->

- Repo surfaces touched:
	->

- Validation run:
	->

- Result:
	->

- Risks discovered:
	->

- Next approved slice:
	->

---

# 12. SUCCESS CONDITION

- consistent execution across the live system
- no tone inconsistency from role drift
- no system breakage from component mutation
- clean separation of MOFU, BOFU, and service ownership
- clear grouping of tasks that can be executed together
- no uncontrolled rewrite work before closure work is complete
- easier auditability for future phases