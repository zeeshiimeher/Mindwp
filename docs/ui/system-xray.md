

# MindWP System Refactor — Execution Blueprint

Date: 2026-05-05

Status: Phase 1 — COMPLETE. Phase 2 — NOT STARTED.

---

## Current Execution Status

### Phase 1 — Anchor Component System Execution

| Task | Description | Status |
|---|---|---|
| 1 | HeroSplitSection: remove variant, add visualType (`system-feed` / `signal-grid`) | ✅ Complete |
| 2 | LayerStackSection: single approved variant `stack` only | ✅ Complete |
| 3 | ImageStorySection: approved variants `evidence-photo` / `system-visual` only | ✅ Complete |
| 4 | JourneyLeakMapSection: component created, contract enforced, CSS added, data added | ✅ Complete |
| 5 | ServiceBridgeSection: component created, contract enforced, CSS added, data added | ✅ Complete |
| 6 | ScopeSection: anchor scope data prepared for both Smart Website and Local SEO | ✅ Complete |
| 7 | Smart Website capability decision: `types`/`technologies` retained as `feature-grid`; `businessSizes`/`concerns` absent/omitted | ✅ Complete |
| 8 | CriteriaComparisonSection: component created, contract enforced, CSS added, data added | ✅ Complete |
| 9 | AuthoritySignalMapSection: component created, contract enforced, CSS added, data added | ✅ Complete |
| 10 | Type + Contract Alignment: all Phase 1 components compile with explicit props, no `any` | ✅ Complete |
| 11 | Dev Component System Preview: all Phase 1 components previewed at `/dev/component-system` | ✅ Complete |
| 12 | Validator + Test Alignment: 56/56 validators pass, 19 contract tests pass | ✅ Complete |
| — | Backward compat removed: all deprecated variant types cleaned from all components | ✅ Complete |
| — | Production renderers updated to approved variant names | ✅ Complete |

Build: clean. TypeScript: clean. Validators: 56/56. Tests: 19/19.

### Phase 2 — Production Renderer Migration + Remaining Pages

| Task | Description | Status |
|---|---|---|
| 1 | Smart Website Systems renderer migration to approved section order | ❌ Pending |
| 2 | Local SEO Authority renderer migration to approved section order | ❌ Pending |
| 3 | Remaining Tier-1 page migration: AI Lead Handling, CRM Automation, Reputation Review, Revenue Growth | ❌ Pending |
| 4 | Remaining approved components: ResponseRoutingMapSection, PipelineVisibilityMapSection, ReviewTrustLoopSection, OpportunityRecoveryMapSection, ScenarioMapSection, CapabilityMatrixSection, CaseStudyNarrativeSection, DecisionFrameworkSection, MetricProofSection, ObjectionResolutionSection | ❌ Pending |
| 5 | Supporting service page migration (12 pages) | ❌ Pending |
| 6 | Validator and test hardening for Phase 2 migrations | ❌ Pending |
| 7 | Visual system hardening across all pages | ❌ Pending |

---

Authority posture:
- Component blocks are the source of truth for implementation, validation, and tests.
- Higher-level governance lives in FOUNDATION, CONTENT, CONVERSION, GRAPH, DESIGN, SYSTEM-RULES, and WORKFLOW.
- When docs and code conflict, verify code then update docs deliberately.
- Implementation starts only through a scoped execution task. Future implementation must inspect current code before editing files.

---

# 1. System Overview

## 1.0 Scope

This document covers the full MindWP system refactor, not only component cleanup.

It must guide:

- business positioning
- page behavior
- content patterns
- component system decisions
- visual system decisions
- validator and test alignment after contract changes
- migration workflow
- AI / Copilot execution

Planning boundary:

- This document defines the approved planning direction.
- It does not authorize automatic implementation.
- Implementation starts only through a scoped execution task.
- Future implementation must inspect current code before editing.
- Approved component contracts are the intended target for implementation, validators, and tests.
- Deprecated items are not approved for new implementation and should be migrated away during scoped work.

## 1.1 Core Model

CONTENT → PATTERN → COMPONENT → VARIANT → RENDER

Meaning:

- business intent decides pattern
- page behavior shapes pattern choice
- pattern decides component
- component defines the data contract
- variant defines structural expression only
- renderer or template maps prepared data into the component
- components render only
- validators and tests align after contract changes

## 1.2 System Principles

- Pattern-first architecture
- Components = render surfaces (not logic owners)
- Data-driven UI
- Existing data is the first content source
- Data may be reshaped when an approved pattern/component requires it, but new content must preserve existing business meaning and follow WRITING.md, CONTENT.md, and current page data
- Deterministic structure
- No decorative abstraction

- Components must NOT own:
  - routing
  - SEO
  - graph relationships
  - CTA strategy
  - metadata
- Each section maps to EXACTLY one pattern
- A component must NOT represent multiple patterns
- Uniqueness comes from structure, NOT styling

- UI must feel like operational infrastructure
- NOT like SaaS dashboard
- NOT like template website
- NOT like portfolio design

- User must feel:
  → system is running
  → problems are being handled
  → outcomes are being produced

- This system guides thinking, not just structure
- Decisions must balance correctness and practicality

## 1.3 How to Use This System (Copilot + Developer)

This system is designed to guide intelligent decisions, not block execution.

Approach:

- Read the situation (content, intent, business goal)
- Identify the correct pattern
- Choose the appropriate component
- Shape data to match the component
- Prefer existing data before adding new data
- Report content gaps instead of inventing copy, proof, metrics, or claims
- When execution requires new section content, first read WRITING.md, CONTENT.md, and the relevant page data, then write only operational, specific, non-hype content that preserves existing meaning
- Apply rules without over-restricting implementation

Important:

- Do NOT treat rules as hard blockers
- Do NOT assume something is “not allowed” too early
- Always resolve using intent + pattern logic

The goal is:

→ correct structure
→ meaningful UI
→ business-aligned output

NOT perfect schema matching.

---

# 2. Business + Page System

## 2.1 Business Systems

- Smart Website Systems
- Local SEO Authority
- AI Lead Handling
- CRM Automation
- Reputation Review
- Revenue Growth

## 2.2 Page Types

- Landing
- System
- Entry
- Case Study

## 2.3 Page Behavior Rules

- Landing → recognition → CTA
- System → diagnosis → structure → proof → CTA
- Entry → problem → understanding → explore

## 2.4 Page Type Behavior (Detailed)

Services:
- diagnosis-driven
- strongest structural differentiation
- must include leak or signal map

Features:
- capability-focused
- lighter structure
- less diagnostic depth

Industries:
- scenario-first recognition
- contextual problems
- system adaptation

Resources:
- teaching-first
- framework-driven
- non-linear learning

Case Study:
- narrative-first
- proof-heavy
- real-world sequence

## 2.5 Domain Differentiation Rule

Each domain MUST maintain distinct structure:

- Services:
  - diagnosis-first
  - system-heavy
  - proof-driven

- Features:
  - capability-focused
  - lighter structure

- Industries:
  - scenario-first
  - contextual problems

- Resources:
  - teaching-first
  - framework-driven

- Case Studies:
  - narrative-first
  - real-world sequence

It is NOT allowed to:

- reuse service structure for features
- reuse blog structure for services
- flatten domains into one template

---

# 3. Pattern System

## 3.1 Core Patterns

- Recognition
- Diagnosis
- Comparison
- Flow
- System Layers
- Signal Map
- Scope
- Capability
- Scenario
- Proof
- Qualification
- Discovery
- Decision
- Resource / Learning
- Visual Evidence

## 3.2 Pattern → Component Mapping

| Pattern | Component | Notes |
|--------|----------|------|
| Recognition | HeroSplitSection | Always top section, includes controlled visual system |
| Diagnosis | JourneyLeakMapSection, GridCardsSection (restricted) | Prefer JourneyLeakMapSection for lifecycle issues |
| Comparison | BeforeAfterSection | Split-panel only unless scorecard is fully defined |
| Flow | ProcessStepsSection | Timeline only |
| System Layers | LayerStackSection | Max 4 layers, no signal mapping |
| Signal Map | AuthoritySignalMapSection | Required for SEO / visibility systems |
| Scope | ScopeSection | Grouped coverage only |
| Capability | CapabilityMatrixSection, GridCardsSection (limited) | Matrix preferred for structured capability |
| Scenario | ScenarioMapSection | 1 primary + 2 secondary layout |
| Proof | ProofStorySection, CaseStudyNarrativeSection | Structured vs narrative proof |
| Qualification | QualificationSection | Fit-filter only |
| Discovery | RelatedContentSection | 1 primary + 2 secondary (asymmetric) |
| Decision | PrimaryCTASection | Single CTA enforced |
| Criteria Comparison | CriteriaComparisonSection | Option comparison across decision criteria |
| Metric Proof | MetricProofSection | Metric-led proof with context |
| Objection Resolution | ObjectionResolutionSection | Belief → reality → reframe before decision |
| System Handoff | ServiceBridgeSection | Controlled bridge between adjacent systems |
| Resource / Learning | DecisionFrameworkSection | Non-linear learning and decision framework blocks |
| Visual Evidence | ImageStorySection | Requires meaningful visual |

---

## 3.3 Page Identity Mapping

| Page | Dominant Pattern | Component |
|------|------------------|-----------|
| Smart Website Systems | Diagnosis / Leakage Map | JourneyLeakMapSection |
| Local SEO Authority | Signal Map | AuthoritySignalMapSection |
| AI Lead Handling | Response / Routing Map | ResponseRoutingMapSection |
| CRM Automation | Pipeline Visibility | PipelineVisibilityMapSection |
| Reputation Review | Trust Loop | ReviewTrustLoopSection |
| Revenue Growth | Opportunity Recovery | OpportunityRecoveryMapSection |
| Industries | Scenario | ScenarioMapSection |

## 3.4 Page Template Mapping

Services:
Recognition → Diagnosis → Comparison → Scope → Proof → Process → Qualification → FAQ → CTA

Features:
Recognition → Capability → Process → Use cases → Matrix → CTA

Industries:
Recognition → Scenario → Comparison → Layers → Pathway → FAQ → CTA

Blog:
Recognition / Intro → Problem → Explanation / Examples → Takeaways → Related → Soft CTA

Resources:
Framework → Problem → Example → Solution → Steps → FAQ → Related → CTA

Case Study:
Recognition → Problem → Process → Result → Proof → CTA

## 3.5 Anchor Usage Mapping (Reference)

Purpose:
- Ground system in real usage
- Prevent theoretical drift
- Validate component decisions

Smart Website Systems:
- Recognition → HeroSplitSection using visualType `system-feed`
- Diagnosis → JourneyLeakMapSection with no variant
- Comparison → BeforeAfterSection using `split-panel`
- Scope → ScopeSection using `grouped-scope` or `service-map` depending on data shape
- Capability → GridCardsSection using `feature-grid` only when items are independent peer capabilities
- Layers → LayerStackSection using `stack`
- Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real metric proof is available
- Visual Evidence → ImageStorySection using `evidence-photo` or `system-visual`
- Process → ProcessStepsSection using `timeline`
- Qualification → QualificationSection using `fit-filter`
- FAQ → AccordionFAQSection using `single-column`
- CTA → PrimaryCTASection using `soft-panel`

Local SEO Authority:
- Recognition → HeroSplitSection using visualType `signal-grid`
- Diagnosis → GridCardsSection using `signal-board` only when badge/status data is structurally present
- Signal Map → AuthoritySignalMapSection with no variant
- Comparison → BeforeAfterSection using `split-panel`
- Criteria Comparison → CriteriaComparisonSection only when comparing SEO packages/manual approach vs authority system across explicit criteria
- Process → ProcessStepsSection using `timeline`
- Scope → ScopeSection using `grouped-scope` or `service-map` depending on data shape
- Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real metric proof is available
- Qualification → QualificationSection using `fit-filter`
- FAQ → AccordionFAQSection using `single-column`
- CTA → PrimaryCTASection using `soft-panel`


Anchor mapping rule:

- Smart Website and Local SEO are anchor references for future Tier-1 page mapping.
- Their mappings must show both component and approved variant/control decisions.
- Do not use deprecated variants in anchor pages.
- If current code uses deprecated names such as `operations`, `visibility`, `signal-map`, `scorecard`, or `two-column`, future implementation should migrate the usage to the approved mapping above.

Anchor data reality rule:

- Existing Smart Website and Local SEO data is good enough for many direct maps and light reshapes.
- Do not add new data just to satisfy imagined props.
- If the approved mapping needs meaning that does not exist in current data, mark it as a content gap.
- New top-third components may require execution-ready content where current data cannot directly express the approved pattern; Copilot may write that content only after reading WRITING.md, CONTENT.md, and the relevant page data.
- MetricProofSection must not be used on anchor pages unless real metric source data exists.


## 3.5A Approved Tier-1 Service Page Mapping


Purpose:

- Define the approved planning direction for canonical Tier-1 service pages.
- Give future Copilot chats a clear page-flow map before implementation.
- Prevent every Tier-1 page from becoming the same service template with different copy.
- Keep shared terminal/supporting patterns reusable while making each top-third identity structurally specific.

Mapping authority:

- The mappings below are approved planning decisions, not examples or inspiration.
- Future implementation should follow the listed section order, pattern, component, and variant/control unless the user explicitly opens a remapping decision.
- Copilot must not create new components, new variants, or alternate section order to solve a mapped Tier-1 page.
- If current code or data cannot support the mapping, pause and report the missing data, missing component, or contract mismatch instead of inventing a workaround.
- Styling differences do not justify changing the mapped component or variant.
- Mapping decisions exist so future implementation can execute confidently without re-deciding page structure.


Tier-1 mapping rules:

- Every Tier-1 page starts with HeroSplitSection.
- Every Tier-1 page must include one unique top-third structural component tied to that system's business logic.
- Section 2 must create a distinct scan pattern across Tier-1 pages.
- Section 2 should not repeat the same component/variant across Tier-1 pages unless the data contract and scanning behavior are meaningfully different.
- Each Tier-1 page must also include one unique system-specific component or structural variant in Section 3 or Section 4.
- Tier-1 pages must not follow the repeated pattern `HeroSplitSection → GridCardsSection → unique map → BeforeAfterSection`.
- Unique structure should appear in Section 2 or Section 3 unless page flow requires otherwise.
- Terminal patterns may stay shared: FAQ, CTA, qualification, related content.
- Deprecated variants are not allowed in Tier-1 mapping.
- Current legacy renderers may differ; future implementation should migrate toward this mapping through scoped execution tasks.

### Smart Website Systems

Primary system logic:
Website structure, enquiry capture, handoff clarity, conversion flow, and leakage between visit and business outcome.

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Diagnosis → JourneyLeakMapSection with no variant
3. Comparison → BeforeAfterSection using `split-panel`
4. System Handoff → ServiceBridgeSection with no variant
5. Scope → ScopeSection using `grouped-scope` or `service-map` depending on data shape
6. Capability → GridCardsSection using `feature-grid` only for independent peer capabilities
7. System Layers → LayerStackSection using `stack`
8. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real metric proof exists
9. Visual Evidence → ImageStorySection using `evidence-photo` or `system-visual`
10. Process → ProcessStepsSection using `timeline`
11. Qualification → QualificationSection using `fit-filter`
12. FAQ → AccordionFAQSection using `single-column`
13. CTA → PrimaryCTASection using `soft-panel`

Top-third identity:
JourneyLeakMapSection owns the Section 2 identity. ServiceBridgeSection adds the Section 4 gravity-system distinction by showing how Smart Website hands off to lead handling, CRM, SEO, reputation, and growth without becoming those pages.

### Local SEO Authority

Primary system logic:
Website, location, service, review, and authority signals working together so local visibility becomes trustworthy and conversion-ready.

Approved mapping:

1. Recognition → HeroSplitSection using visualType `signal-grid`
2. Criteria Comparison → CriteriaComparisonSection when comparing SEO package thinking vs authority system thinking
3. Signal Map → AuthoritySignalMapSection with no variant
4. Comparison → BeforeAfterSection using `split-panel`
5. Diagnosis → GridCardsSection using `signal-board` only when badge/status data is structurally present
6. Scope → ScopeSection using `grouped-scope` or `service-map` depending on data shape
7. Process → ProcessStepsSection using `timeline`
8. Proof → ProofStorySection using `before-change-after`, MetricProofSection only when real metric proof exists
9. Qualification → QualificationSection using `fit-filter`
10. FAQ → AccordionFAQSection using `single-column`
11. CTA → PrimaryCTASection using `soft-panel`

Top-third identity:
CriteriaComparisonSection owns the Section 2 decision reframe: SEO package thinking vs authority system thinking. AuthoritySignalMapSection owns the Section 3 system logic by showing grouped signal families, current state, and effect on local discovery.

### AI Lead Handling

Primary system logic:
Enquiries, calls, missed calls, chats, and repeat questions are answered, captured, routed, and handed off before interest dies.

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Scenario / Live Situation → ScenarioMapSection using `primary-scenario`
3. Response Routing → ResponseRoutingMapSection with no variant
4. Comparison → BeforeAfterSection using `split-panel`
5. Diagnosis → GridCardsSection using `diagnostic-grid` for slow-response, dead-end, and no-handoff symptoms only when needed
6. Scope → ScopeSection using `service-map` when channels map to handled areas
7. Criteria Comparison → CriteriaComparisonSection only when comparing bolted-on AI vs connected AI lead handling
8. Process → ProcessStepsSection using `timeline`
9. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real response/recovery data exists
10. Qualification → QualificationSection using `fit-filter`
11. FAQ → AccordionFAQSection using `single-column`
12. CTA → PrimaryCTASection using `soft-panel`

Top-third identity:
ScenarioMapSection owns the Section 2 live situation: call/message/enquiry arrives, waits, stalls, or gets missed. ResponseRoutingMapSection owns Section 3 by showing what comes in, what happens immediately, who owns it, and where it goes next.

### CRM Automation

Primary system logic:
Lead ownership, follow-up visibility, pipeline state, and next actions become clear so enquiries stop depending on memory or scattered tools.

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Objection Resolution → ObjectionResolutionSection focused on “we already track leads” / “we already have a CRM” friction
3. Pipeline Visibility → PipelineVisibilityMapSection with no variant
4. Capability → CapabilityMatrixSection using `matrix`
5. Comparison → BeforeAfterSection using `split-panel`
6. Criteria Comparison → CriteriaComparisonSection only when comparing generic CRM setup vs operational CRM automation
7. Scope → ScopeSection using `service-map` for pipeline, follow-up, ownership, and reporting areas
8. Process → ProcessStepsSection using `timeline`
9. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real follow-up/visibility data exists
10. Qualification → QualificationSection using `fit-filter`
11. FAQ → AccordionFAQSection using `single-column`
12. CTA → PrimaryCTASection using `soft-panel`

Top-third identity:
ObjectionResolutionSection owns the Section 2 reframe by addressing the belief that having a CRM or spreadsheet already solves the problem. PipelineVisibilityMapSection owns Section 3 by showing stage, owner, visible state, risk, and next action together.

### Reputation Review

Primary system logic:
Happy customers become visible proof, unhappy feedback routes privately, and public trust stays current instead of accidental.

Approved mapping:

1. Recognition → HeroSplitSection using visualType `signal-grid`
2. Scenario / Review Moments → ScenarioMapSection using `environment-map`
3. Trust Loop → ReviewTrustLoopSection with no variant
4. Objection Resolution → ObjectionResolutionSection when the page must reframe hesitations around asking for reviews or managing feedback
5. Comparison → BeforeAfterSection using `split-panel`
6. Scope → ScopeSection using `service-map` for request timing, complaint routing, monitoring, and public response
7. Process → ProcessStepsSection using `timeline`
8. Proof → ProofStorySection using `before-change-after`, CaseStudyNarrativeSection using `proof-breakdown`, or MetricProofSection only when real review-growth data exists
9. Qualification → QualificationSection using `fit-filter`
10. FAQ → AccordionFAQSection using `single-column`
11. CTA → PrimaryCTASection using `soft-panel`

Top-third identity:
ScenarioMapSection owns the Section 2 review moments/environment map. ReviewTrustLoopSection owns Section 3 by showing review timing, trust capture, feedback routing, public signal, and failure risk as one loop.

### Revenue Growth

Primary system logic:
Missed, delayed, weak, dormant, or underworked opportunities are identified, recovered, refined, and turned into measurable improvement.

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Diagnosis → OpportunityRecoveryMapSection with no variant
3. Decision Framework → DecisionFrameworkSection using `checklist-framework` for prioritization or recovery criteria
4. Comparison → BeforeAfterSection using `split-panel`
5. Scenario / Opportunity Types → ScenarioMapSection using `primary-scenario` or `environment-map` depending on data shape
6. Criteria Comparison → CriteriaComparisonSection only when comparing more-leads thinking vs recovery/refinement system thinking
7. Scope → ScopeSection using `service-map` for reactivation, follow-up, lifecycle, and refinement areas
8. Process → ProcessStepsSection using `timeline`
9. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real recovered-value data exists
10. Qualification → QualificationSection using `fit-filter`
11. FAQ → AccordionFAQSection using `single-column`
12. CTA → PrimaryCTASection using `soft-panel`

Top-third identity:
OpportunityRecoveryMapSection owns the Section 2 opportunity recovery diagnosis. DecisionFrameworkSection owns Section 3 by helping the reader understand which missed, delayed, weak, or dormant opportunities should be recovered first.


Tier-1 final rule:
If a Tier-1 page repeats another Tier-1 page's Section 2 scan pattern without a meaningful data-contract difference, the page is not aligned with the approved planning system.

If a Tier-1 page does not contain its unique system-specific component or structural variant in Section 3 or Section 4, the page is not aligned with the approved planning system.


## 3.5B Approved Supporting Service Page Mapping

Purpose:

- Define approved planning direction for remaining service, builder, comparison, migration, and support pages.
- Keep supporting pages tied to their parent system instead of turning them into independent Tier-1 pages.
- Prevent Copilot from inventing new components, variants, or section orders for supporting service pages.
- Preserve structural clarity while allowing sibling pages with the same role to share mappings.

Mapping authority:

- The mappings below are approved planning decisions, not examples or inspiration.
- Future implementation should follow the listed section order, pattern, component, and variant/control unless the user explicitly opens a remapping decision.
- Supporting service pages do not need a unique global component unless the mapping below explicitly assigns one.
- Supporting pages must preserve parent system ownership.
- Copilot must not create new components, new variants, or alternate section order to solve a mapped supporting page.
- If current code or data cannot support the mapping, pause and report the missing data, missing component, or contract mismatch instead of inventing a workaround.
- Styling differences do not justify changing the mapped component or variant.

Supporting service mapping rules:

- Supporting service pages may share section flow when the page role is the same.
- Builder-specific pages may share one implementation-pathway mapping.
- Comparison pages should start with CriteriaComparisonSection when the page title or intent is explicitly comparative.
- Migration/rebuild pages should use ObjectionResolutionSection or CriteriaComparisonSection early when the reader may believe the wrong thing solves the problem.
- Sub-system pages should use the unique component of their parent system when the sub-system still depends on that parent logic.
- Deprecated variants are not allowed in supporting service mapping.

### WordPress Development

Parent system:
Smart Website Systems

Page role:
Implementation pathway

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Diagnosis → JourneyLeakMapSection with no variant
3. Scope → ScopeSection using `service-map`
4. Criteria Comparison → CriteriaComparisonSection when comparing WordPress implementation vs system-based website implementation
5. Process → ProcessStepsSection using `timeline`
6. Capability → CapabilityMatrixSection using `matrix`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real metric proof exists
8. Qualification → QualificationSection using `fit-filter`
9. FAQ → AccordionFAQSection using `single-column`
10. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
WordPress Development must position WordPress as the implementation layer for a Smart Website System, not as the primary value by itself.

### Elementor / Bricks Builder / Divi 5

Parent system:
Smart Website Systems

Page role:
Builder implementation pathway

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Objection Resolution → ObjectionResolutionSection focused on “the builder is not the real problem”
3. System Handoff → ServiceBridgeSection with no variant
4. Scope → ScopeSection using `grouped-scope`
5. Criteria Comparison → CriteriaComparisonSection when comparing builder skill vs system-based implementation
6. Process → ProcessStepsSection using `timeline`
7. Capability → GridCardsSection using `feature-grid` only for independent peer capabilities
8. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
Builder pages may share this mapping because they are sibling implementation-pathway pages, not Tier-1 system pages. They must not become builder sales pages.

### WooCommerce / Ecommerce

Parent system:
Smart Website Systems with Revenue Growth support

Page role:
Commerce implementation pathway

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Opportunity Diagnosis → OpportunityRecoveryMapSection with no variant
3. Criteria Comparison → CriteriaComparisonSection when comparing store build vs commerce system thinking
4. Scope → ScopeSection using `service-map`
5. System Handoff → ServiceBridgeSection with no variant
6. Process → ProcessStepsSection using `timeline`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real commerce data exists
8. Qualification → QualificationSection using `fit-filter`
9. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
WooCommerce must not become “store build” positioning only. It should connect browsing, product clarity, trust, cart behavior, follow-up, and repeat purchase opportunities.

### Website Redesign System Rebuild

Parent system:
Smart Website Systems

Page role:
Rebuild decision

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Objection Resolution → ObjectionResolutionSection focused on “a redesign alone will fix this”
3. Journey Leak Diagnosis → JourneyLeakMapSection with no variant
4. Criteria Comparison → CriteriaComparisonSection when comparing visual redesign vs system rebuild
5. Scenario / Rebuild Cases → ScenarioMapSection using `primary-scenario`
6. Process → ProcessStepsSection using `timeline`
7. Scope → ScopeSection using `service-map`
8. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real rebuild data exists
9. Qualification → QualificationSection using `fit-filter`
10. FAQ → AccordionFAQSection using `single-column`
11. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page must reframe redesign as a system rebuild decision, not a visual refresh decision.

### System Migration / Platform Consolidation

Parent system:
Smart Website Systems with CRM Automation support

Page role:
Migration decision

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Criteria Comparison → CriteriaComparisonSection when comparing platform switching vs system consolidation
3. System Handoff → ServiceBridgeSection with no variant
4. Scope → ScopeSection using `service-map`
5. Comparison → BeforeAfterSection using `split-panel`
6. Process → ProcessStepsSection using `timeline`
7. Objection Resolution → ObjectionResolutionSection focused on migration risk, tool sprawl, and false platform fixes
8. Qualification → QualificationSection using `fit-filter`
9. FAQ → AccordionFAQSection using `single-column`
10. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page must prevent platform switching from being treated as the solution when the real issue is disconnected structure, ownership, and handoff.

### Service Pages vs One Generic Services Page

Parent system:
Smart Website Systems with Local SEO Authority support

Page role:
Website structure decision

Approved mapping:

1. Recognition → HeroSplitSection using visualType `signal-grid`
2. Criteria Comparison → CriteriaComparisonSection when comparing service-page structure vs one generic services page
3. Signal Map → AuthoritySignalMapSection with no variant
4. Comparison → BeforeAfterSection using `split-panel`
5. Scope → ScopeSection using `grouped-scope`
6. Decision Framework → DecisionFrameworkSection using `checklist-framework`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real structure/visibility data exists
8. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page is a decision page. It must compare structure, search signal clarity, and buyer recognition rather than selling generic page count.

### Unified Communication System

Parent system:
AI Lead Handling

Page role:
Communication routing sub-system

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Scenario / Live Situation → ScenarioMapSection using `environment-map`
3. Response Routing → ResponseRoutingMapSection with no variant
4. Scope → ScopeSection using `service-map`
5. Comparison → BeforeAfterSection using `split-panel`
6. Process → ProcessStepsSection using `timeline`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real communication/routing data exists
8. Qualification → QualificationSection using `fit-filter`
9. FAQ → AccordionFAQSection using `single-column`
10. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page must show channel-to-owner routing clarity. It must not become a generic communication feature list.

### Missed Call Recovery System

Parent system:
AI Lead Handling

Page role:
Lead recovery sub-system

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Scenario / Missed Call Moment → ScenarioMapSection using `primary-scenario`
3. Response Routing → ResponseRoutingMapSection with no variant
4. Comparison → BeforeAfterSection using `split-panel`
5. Scope → ScopeSection using `service-map`
6. Process → ProcessStepsSection using `timeline`
7. Metric Proof → MetricProofSection only when real missed-call/recovery data exists; otherwise use ProofStorySection using `before-change-after`
8. Qualification → QualificationSection using `fit-filter`
9. FAQ → AccordionFAQSection using `single-column`
10. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page must stay focused on recovering missed contact moments and routing them back into business handling.

### Lead Reactivation System

Parent system:
Revenue Growth with AI Lead Handling support

Page role:
Dormant lead recovery sub-system

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Opportunity Recovery → OpportunityRecoveryMapSection with no variant
3. Decision Framework → DecisionFrameworkSection using `checklist-framework`
4. Criteria Comparison → CriteriaComparisonSection when comparing new-leads focus vs reactivation system thinking
5. Scope → ScopeSection using `service-map`
6. Process → ProcessStepsSection using `timeline`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real reactivation data exists
8. Qualification → QualificationSection using `fit-filter`
9. FAQ → AccordionFAQSection using `single-column`
10. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page must frame reactivation as recovery/refinement, not generic email/SMS follow-up.

### Website CRM Integration vs Manual Lead Handling

Parent system:
CRM Automation

Page role:
Decision comparison

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Criteria Comparison → CriteriaComparisonSection when comparing website CRM integration vs manual lead handling
3. Pipeline Visibility → PipelineVisibilityMapSection with no variant
4. Comparison → BeforeAfterSection using `split-panel`
5. Scope → ScopeSection using `service-map`
6. Process → ProcessStepsSection using `timeline`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real integration/follow-up data exists
8. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page title is comparative. Section 2 must be criteria comparison, not generic pain cards.

### Conversion Layer

Parent system:
Revenue Growth

Page role:
Conversion path refinement

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Opportunity Recovery → OpportunityRecoveryMapSection with no variant
3. Decision Framework → DecisionFrameworkSection using `principle-steps`
4. Criteria Comparison → CriteriaComparisonSection when comparing conversion surface fixes vs system refinement
5. Scope → ScopeSection using `service-map`
6. Process → ProcessStepsSection using `timeline`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real conversion data exists
8. Qualification → QualificationSection using `fit-filter`
9. FAQ → AccordionFAQSection using `single-column`
10. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
Conversion Layer must not become landing-page optimization positioning. It should show the path from interest to action to follow-up.

### Conversion Funnel System vs Landing Page Development

Parent system:
Revenue Growth

Page role:
Decision comparison

Approved mapping:

1. Recognition → HeroSplitSection using visualType `system-feed`
2. Criteria Comparison → CriteriaComparisonSection when comparing funnel system vs landing page development
3. Opportunity Recovery → OpportunityRecoveryMapSection with no variant
4. Comparison → BeforeAfterSection using `split-panel`
5. Decision Framework → DecisionFrameworkSection using `checklist-framework`
6. Scope → ScopeSection using `service-map`
7. Proof → ProofStorySection using `before-change-after`, or MetricProofSection only when real funnel/recovery data exists
8. CTA → PrimaryCTASection using `soft-panel`

Mapping logic:
This page must make the “system vs page” decision clear. It must not start with generic funnel pain points.

Supporting service final rule:
If a supporting service page changes its parent system ownership, invents a new component, or changes mapped section order without an explicit remapping decision, it is not aligned with the approved planning system.

## 3.5C Current Runtime Reality (Smart Website + Local SEO)

This section captures the current state of the two anchor renderers after Phase 0 Safe Alignment. Use this as the starting point for Phase 1 component and preview readiness work, then Phase 2 anchor renderer migration.

Runtime files:

- `src/domains/services/data/smart-website-systems.ts`
- `src/domains/services/data/local-seo-authority.ts`
- `src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx`
- `src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx`

### Smart Website Systems — Current Runtime

| Approved Component | Phase 1 State | Phase 2 Required |
|---|---|---|
| HeroSplitSection `visualType='system-feed'` | ✅ Component updated. Production renderer still uses old section order. | Renderer migration |
| JourneyLeakMapSection | ✅ Component created. Data added. Dev preview ready. | Renderer migration |
| BeforeAfterSection `split-panel` | ✅ Aligned | — |
| ServiceBridgeSection | ✅ Component created. Data added. Dev preview ready. | Renderer migration |
| ScopeSection `grouped-scope` or `service-map` | ✅ Scope data added. Dev preview ready. | Renderer migration (replace GridCardsSection in renderer) |
| GridCardsSection `feature-grid` | ✅ Aligned (types/technologies retained) | — |
| LayerStackSection `stack` | ✅ Component updated to `stack` only. Production renderer updated. | — |
| ProofStorySection `before-change-after` | ✅ Aligned | — |
| ImageStorySection `evidence-photo` or `system-visual` | ✅ Component updated. Production renderer updated to `evidence-photo`. | — |
| ProcessStepsSection `timeline` | ✅ Aligned | — |
| QualificationSection `fit-filter` | ✅ Aligned | — |
| AccordionFAQSection `single-column` | ✅ Aligned | — |
| PrimaryCTASection `soft-panel` | ✅ Aligned | — |

Smart Website execution-ready content: complete (journeyLeakMap, serviceBridge data added).

Smart Website data decisions: complete (types/technologies as feature-grid; businessSizes/concerns absent).

### Local SEO Authority — Current Runtime

| Approved Component | Phase 1 State | Phase 2 Required |
|---|---|---|
| HeroSplitSection `visualType='signal-grid'` | ✅ Component updated. Production renderer updated. | Renderer section-order migration |
| CriteriaComparisonSection | ✅ Component created. Data added. Dev preview ready. | Renderer migration |
| AuthoritySignalMapSection | ✅ Component created. Data added. Dev preview ready. | Renderer migration (replace LayerStackSection in renderer) |
| BeforeAfterSection `split-panel` | ✅ Aligned | — |
| GridCardsSection `signal-board` | ✅ Aligned (misconceptions section) | — |
| ScopeSection `grouped-scope` or `service-map` | ✅ Scope data added. Dev preview ready. | Renderer migration (replace GridCardsSection in renderer) |
| ProcessStepsSection `timeline` | ✅ Aligned | — |
| ProofStorySection `before-change-after` | ✅ Aligned | — |
| QualificationSection `fit-filter` | ✅ Aligned | — |
| AccordionFAQSection `single-column` | ✅ Aligned | — |
| PrimaryCTASection `soft-panel` | ✅ Aligned | — |

Local SEO execution-ready content: complete (comparisonCriteria, authoritySignalFamilies data added).

Local SEO data decisions: complete (`sections.integrations` data retained separately; signal families use independent authoritySignalFamilies structure).

### Phase 1 Content Writing Boundary

Phase 1 may create or reshape section content required by the approved anchor component contracts.

Before writing or reshaping content, Copilot must read:

- `docs/core/WRITING.md`
- `docs/core/CONTENT.md`
- the relevant page data file
- the target component authority block in this document

Allowed:

- turn existing meaning into clearer section fields
- write operational stage labels, handoff labels, criteria labels, or signal labels when required by the approved component contract
- write short explanatory copy that preserves the page's existing business meaning
- remove or merge weak repeated sections when they damage the approved page flow

Not allowed:

- fake metrics
- fake proof
- testimonials or attribution without source
- guarantees
- ranking promises
- unsupported service capabilities
- public GoHighLevel mention
- generic SaaS or agency filler copy

Final rule:
Phase 1 content writing exists to express the approved system clearly, not to create new marketing claims.

### GoHighLevel Public Mention Rule

GoHighLevel must not be mentioned publicly.

- Completed: Public GoHighLevel mention removed from `smart-website-systems.ts` FAQ.
- Rule going forward: Any data, content, or renderer referencing GoHighLevel publicly must be replaced with neutral platform-agnostic language (CRM platform, lead handling system, follow-up system, automation layer).
- Do not remove legitimate public platform mentions such as WordPress, Google, Google Business Profile, Google Search Console, or Google Ads.

## 3.6 Component Selection Heuristics (Reference)

Use:

- GridCardsSection:
  → when items are independent and unordered

- ScopeSection:
  → when items are grouped

- ProcessStepsSection:
  → when order matters

- DecisionFrameworkSection:
  → when order does NOT matter and the reader needs a decision framework

- AuthoritySignalMapSection:
  → when relationships between signals exist

- JourneyLeakMapSection:
  → when diagnosing lifecycle issues

- CriteriaComparisonSection:
  → when comparing approaches across explicit criteria

- MetricProofSection:
  → when real metric evidence is the primary proof

- ObjectionResolutionSection:
  → when a page needs to resolve decision friction before CTA

- ServiceBridgeSection:
  → when one system must hand off to another without changing page ownership

If unsure:
→ check pattern first
→ NOT component

# 4. Visual System

This section defines the ONLY allowed visual system across all components.

Visuals are NOT decorative.  
They must express system state, evidence, hierarchy, or relationships.

---

## 4.1 Visual Types (STRICT)

| Visual type | Purpose | Usage |
|------------|--------|------|
| `system-feed` | Operational system activity (handling, routing, CRM, automation) | Hero (operations-driven systems) |
| `signal-grid` | Visibility, authority, trust signals | Hero (SEO / discovery systems) |

---

## 4.2 Core Visual Rules

- Visuals must carry meaning  
- Visuals must be data-driven  
- Visuals are NOT variants  
- Visuals must NOT be decorative  
- No inline JSX or per-page custom visuals  

---

## 4.3 Hero Visual Rules

- Hero MUST use:
  - `system-feed` OR
  - `signal-grid`

- No other visual types allowed in hero  

- Visual must:
  - confirm heading  
  - reflect real system behavior  
  - support CTA decision  

---

## 4.4 Visual Usage Matrix

| Component | Visual Usage | Rule |
|----------|-------------|------|
| HeroSplitSection | REQUIRED | Must use system visual (system-feed or signal-grid) |
| ImageStorySection | REQUIRED | Must use real visual evidence |
| AuthoritySignalMapSection | REQUIRED | Visual = signal structure |
| GridCardsSection | SUPPORTED | Icons / badges only |
| LayerStackSection | SUPPORTED | Structural only |
| ProcessStepsSection | SUPPORTED | Connector only |
| BeforeAfterSection | SUPPORTED | Comparison state only |
| ProofStorySection | SUPPORTED | Metrics / emphasis only |
| ScopeSection | SUPPORTED | Group structure only |
| QualificationSection | SUPPORTED | Markers only |
| RelatedContentSection | SUPPORTED | Minimal visual weight |
| PrimaryCTASection | SUPPORTED | Button + emphasis only |
| AccordionFAQSection | NOT ALLOWED | No visual system |

---

## 4.5 Visual Density Rules

- Each page must have:
  - 1 primary visual (hero)
  - Maximum 1 additional visual-heavy section

- All other sections must use structural visuals only  

Purpose:
- maintain hierarchy  
- prevent visual noise  
- keep hero dominant  

---

## 4.6 Visual Anti-Patterns (STRICTLY FORBIDDEN)

- Decorative dashboards  
- Stock images as filler  
- Abstract illustrations without meaning  
- Repeating hero-style visuals  
- Diagram-heavy visual systems  
- Visual duplication across sections  

---

## 4.7 Final Rule

If a visual does not express:
- system state  
- evidence  
- hierarchy  
- relationship  

→ it must NOT exist  

Visuals are functional, not decorative.

---

## 4.8 UI & Interaction Rules (GLOBAL)

Visual Hierarchy:
- Each section must define:
  - first scan target
  - confirmation layer
  - supporting detail

Scanning Behavior:
- Grid → peer scanning
- Stack → top-to-bottom
- Map → group → item → state
- Timeline → directional sequence

Grouping Rules:
- Group by:
  - lifecycle stage
  - signal family
  - scope area
  - decision path
  - scenario context

Interaction Rules:
- Hover allowed only if it clarifies state or hierarchy
- Reveal allowed only for short supporting detail
- Tabs/filter require structural justification
- No interaction for decoration

Motion Rules:
- Subtle only
- Must support meaning (not attract attention)
- No heavy animation

Attention Flow:
- Each section must define:
  - what user sees first
  - what confirms it
  - what moves them forward

---

## 4.9 Hero Visual System

Hero visual follows strict structure:

HeroSplitSection → visualType → visualData

Rules:

- visualType must be:
  - system-feed OR signal-grid

- visualData must match type contract

- No inline JSX visuals
- No per-page overrides

- system-feed:
  - 3–5 rows
  - operational activity

- signal-grid:
  - 3–4 groups
  - authority signals

- Motion must be subtle and functional

---

## 4.10 Interaction Boundaries

- Sections must remain usable without interaction

- Hover:
  - allowed for emphasis or hierarchy
  - not required for meaning

- Reveal:
  - allowed only for short supporting content

- Tabs / filters:
  - allowed only when structure requires segmentation

- Animation:
  - must not carry meaning
  - must not delay understanding

## 4.11 Design Language (GLOBAL)

The system follows a clean operational product-UI visual style.

Principles:

- minimal
- structured
- high signal, low noise
- no visual clutter

Style Reference:
- Linear-like clarity
- Stripe-like hierarchy
- Vercel-like restraint

Rules:

- No heavy shadows
- No gradient overload
- No decorative illustrations
- No glassmorphism or trendy UI patterns

- Use spacing and hierarchy instead of decoration
- Use typography and layout to create emphasis

---

## 4.12 Spacing & Rhythm System

- Sections must follow consistent vertical spacing
- Internal spacing must follow hierarchy:

  - section spacing > group spacing > item spacing

- Avoid:
  - random spacing
  - inconsistent gaps
  - overly tight or overly loose layouts

- Dense sections:
  - CapabilityMatrixSection
  - GridCardsSection

- Relaxed sections:
  - HeroSplitSection
  - ImageStorySection

Spacing must reflect content density.

---

## 4.13 Typography Hierarchy

- Each section must define:

  - primary heading
  - secondary supporting text
  - tertiary detail (optional)

- Rules:

  - heading must express core meaning
  - description must support, not repeat
  - no long paragraphs

- Avoid:

  - equal-weight text blocks
  - unclear hierarchy
  - overly dense text

---

## 4.14 Token Usage Rules

- All styling must use system tokens:

  - color tokens
  - spacing tokens
  - typography tokens
  - border radius tokens

- NOT allowed:

  - inline styles
  - hardcoded values
  - per-component overrides

- Tokens must control:

  - spacing
  - layout rhythm
  - visual consistency

If a new style is needed:
→ extend tokens
→ NOT override locally

---

## 4.15 Rendering Consistency Rule

- Same component must render consistently across all pages

- NOT allowed:

  - per-page JSX modifications
  - conditional layout hacks
  - style overrides per usage

- Differences allowed ONLY via:

  - data
  - variant (if valid)
  - control (tone, density, etc)

If visual output differs:
→ system is broken

---

## 4.16 No Overdesign Rule

- UI must prioritize clarity over visual richness

- Avoid:

  - unnecessary elements
  - excessive styling
  - visual noise

- Prefer:

  - whitespace
  - structure
  - hierarchy

If something does not improve understanding:
→ remove it

---

## 4.17 UI Quality Bar

Every page and section must pass this quality bar before future implementation is accepted.

Section quality:

- Every section must have a clear first scan target.
- Every section must define what confirms the first scan target.
- Every section must define what moves the reader forward.
- Every section must differ in scanning behavior from the previous section.
- No section should exist only to add volume or visual variety.

Page rhythm:

- No page may stack three card-grid-like sections in a row.
- Top-third sections must feel specific to the page's primary system.
- Terminal sections may be calmer and more reusable.
- Reusable does not mean visually repetitive.

Design quality:

- UI must feel like a working business system, not a template page.
- Visual hierarchy should come from spacing, structure, type, grouping, and contrast.
- Interaction must clarify state, relationship, or decision — never decorate.
- Proof must feel observed, not polished.
- CTA must feel calm, specific, and conversational, not promotional.

Failure signals:

- repeated equal card grids
- multiple sections with the same scan pattern
- visual panels that do not carry meaning
- generic SaaS-dashboard feeling
- UI that explains the component instead of the business situation
- sections that look different but mean the same thing


Final rule:
If the UI does not improve understanding, decision confidence, or trust, remove or redesign it.

---

## 4.18 Style Guide Direction

This section defines the approved planning direction for MindWP's visual language. It does not replace `DESIGN.md` or the live CSS token files; it explains how the style system should feel and how tokens should be used during future component implementation.

### Brand Feel

MindWP should feel:

- calm
- operational
- structured
- premium but not flashy
- technical but not cold
- trustworthy without looking corporate-generic

MindWP should NOT feel:

- like a generic SaaS dashboard
- like a web design agency template
- like a startup landing page
- like a dark-mode portfolio
- like a decorative marketing site

The visual language should communicate:

- enquiries are being handled
- systems are connected
- signals are visible
- gaps are diagnosed
- decisions are clearer

### Core Palette Direction

The current navy / blue / cyan palette is approved.

Primary color role:

- deep navy is the authority and infrastructure base
- muted blue supports depth and hierarchy
- cyan accent represents signal, visibility, handling, and system feedback
- light surfaces keep the site readable and service-business friendly

Approved current direction:

```css
--primary: #07111f;
--secondary: #173b63;
--accent: #3f9caf;
--accent-soft: #8dd8e8;
--surface: #ffffff;
--surface-soft: #f6f8fb;
--surface-muted: #eef3f7;
```

Do not replace the cyan accent unless a separate brand decision explicitly approves it.

### Accent Usage Rules

Use `--accent` for:

- icons
- borders
- dots
- signal markers
- badge outlines
- dashboard/status details
- small visual anchors

Use `--accent-soft` for:

- small text on dark backgrounds
- subtle highlights on navy
- soft glow or emphasis on dark panels
- non-primary badge text inside dark sections

Do NOT use accent color for:

- long body text
- every heading
- every button on the page
- full-section backgrounds
- decorative glow without meaning

Accent must behave like a system signal, not decoration.

### Contrast Rules

On `--primary` / dark navy backgrounds:

- `--accent` is acceptable for icons, borders, badges, and larger text.
- `--accent-soft` is preferred for small text.
- normal body copy should use high-contrast foreground tokens, not raw accent.

On `--secondary` / mid-blue backgrounds:

- avoid using `--accent` for normal text.
- prefer `--accent-soft` or a high-contrast foreground token.

Rule:
If a badge, button, or small label feels slightly low-impact on dark blue, strengthen the usage through border/background/token pairing before changing the palette.

### Surface System

Use surfaces to create structure, not decoration.

Approved surface behavior:

- `--surface` = main readable white surface
- `--surface-soft` = quiet section background
- `--surface-muted` = grouped content or secondary panel background
- dark navy surfaces = hero, primary system emphasis, or major decision moments only

Avoid:

- too many dark sections
- random tinted panels
- repeated equal card surfaces
- overusing gradients to separate sections

Surface hierarchy should make the section easier to scan.

### Buttons and CTA Styling

CTA styling must feel calm and confident.

Primary CTA should feel like:

- a natural next conversation
- a clear decision point
- a low-friction business enquiry

Primary CTA should NOT feel like:

- a SaaS signup button
- a pricing button
- an aggressive sales CTA
- a decorative glow element

Button rules:

- one primary action should dominate each CTA area
- secondary actions must be visually quieter
- button contrast must be checked on dark and light backgrounds
- icon usage inside buttons must clarify action, not decorate

### Badge and Label Styling

Badges are system labels, not decorative pills.

Use badges for:

- system category
- status
- page context
- proof/support labels
- signal labels

Badge rules:

- badge text must remain readable at small size
- badges on dark backgrounds should prefer `--accent-soft` text
- badges should use subtle borders/backgrounds to feel intentional
- do not overuse badges as visual filler

### Status and Signal Colors

Status colors should communicate meaning consistently.

Use semantic state tokens where possible instead of raw color choices.

Approved state meanings:

- good / strong / handled = positive state
- risk / missing / leaking = urgent negative state
- warning / delayed / weak = needs attention
- neutral / pending / observed = informational state

Future token direction:

```css
--signal-strong
--signal-weak
--signal-missing
--signal-handled
--signal-waiting
--signal-priority
```

Component implementation should prefer semantic state tokens over hardcoded colors.

### Typography Style

Typography should carry clarity and hierarchy.

Rules:

- headings must be direct and operational
- subheadings must explain why the section matters
- body text must stay short and scannable
- labels should be mechanical and precise
- avoid hype, cleverness, and generic SaaS phrasing

Visual hierarchy should come from:

- heading scale
- spacing
- grouping
- contrast
- line length
- text weight

Do not rely on color alone to create hierarchy.

### Icon Style

Icons are allowed only when they clarify meaning.

Use icons for:

- signal state
- system layer
- process step
- category marker
- status marker

Do NOT use icons for:

- decoration
- filling empty card space
- making generic cards look designed

Icon style should be:

- simple
- consistent stroke weight
- aligned with text hierarchy
- secondary to the content

### Gradient and Glow Rules

Gradients are allowed only when they support system emphasis.

Allowed:

- hero background depth
- major CTA emphasis
- subtle panel depth
- signal glow where state needs emphasis

Not allowed:

- gradient overload
- every section using gradient separation
- glow around decorative elements
- visual effects that compete with content

If glow does not communicate signal, state, or focus, remove it.

### Page-Level Color Rhythm

Each page should feel cohesive, not themed per section.

Rules:

- base brand palette stays consistent across pages
- system accents may appear lightly for signal or status
- do not create separate color themes for every service page
- top-third sections may use stronger system visuals
- lower sections should calm down and support reading

Final rule:
Color should help the reader understand state, hierarchy, and decision movement. If color is only making the UI look more designed, reduce it.

---

# 5. Component System

This is the MOST IMPORTANT section.

All components must be defined as full authority blocks.

---

## 5.1 Component Template (STANDARD)

Each component MUST follow this structure:

- Status (`Approved` or `Deprecated` only)
- Role
- Pattern
- When to use
- When NOT to use
- Structure Philosophy
- Data Contract
- Variant Rules
- Visual Rules
- Validation Rules
- Anti-Patterns
- Replacement Guidance
- Final Rule
- Final Authority Contract

---

## 5.1A Component Inventory (Operating Reference)

Current approved production section components covered by this document:

- SectionShell
- HeroSplitSection
- GridCardsSection
- JourneyLeakMapSection
- AuthoritySignalMapSection
- ResponseRoutingMapSection
- PipelineVisibilityMapSection
- ReviewTrustLoopSection
- OpportunityRecoveryMapSection
- ScenarioMapSection
- CapabilityMatrixSection
- CaseStudyNarrativeSection
- DecisionFrameworkSection
- CriteriaComparisonSection
- MetricProofSection
- ObjectionResolutionSection
- ServiceBridgeSection
- LayerStackSection
- ProcessStepsSection
- BeforeAfterSection
- QualificationSection
- ProofStorySection
- ImageStorySection
- ScopeSection
- RelatedContentSection
- AccordionFAQSection
- PrimaryCTASection

Naming authority:

- QualificationSection is the official qualification component name
- FitCheckSection is legacy naming only and must be treated as deprecated
- PrimaryCTASection remains the current CTA rendering owner
- Any future CTASection rename is optional future migration work only, never an implied immediate rename from this document

Status model:

- `Approved` = decided planning direction and future target for implementation, validator alignment, and test alignment.
- `Deprecated` = not approved for new implementation and must be migrated through controlled execution work.

---

## 5.2 Components

### SectionShell
Status: Approved

Role: Shared section wrapper that enforces container, heading, tone, density, alignment, and shell consistency.

Pattern: Layout Shell

When to use:
- around approved production sections
- when a section needs shared shell behavior, heading treatment, and layout controls

When NOT to use:
- as a substitute for a content pattern
- for page-specific layout hacks or ad-hoc styling bypasses

Structure Philosophy:
- shell first, content pattern inside
- shared structure and spacing are controlled centrally

Data Contract:
- children (required)
- optional heading
- optional tone, density, alignment, and bare shell controls
- optional controlled shell class hooks only where system styling requires them

Variant Rules:
- no variants
- shell controls are not variants
- tone, density, align, and bare are controls only

Visual Rules:
- must defer to the four-layer CSS system
- must not create page-local visual language

Validation Rules:
- must not change content meaning
- must remain a wrapper, not a content owner
- must not bypass shared shell rules through uncontrolled custom classes

Anti-Patterns:
- treating SectionShell as a page component
- using it to create custom one-off section behavior
- hiding structural differences inside wrapper-only styling

Replacement Guidance:
- none; this is the layout boundary for approved section components

Final Rule:
If it starts owning content meaning, pattern choice, or page identity, it is being misused.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### HeroSplitSection
Status: Approved

Role: Recognition and immediate system positioning

Pattern: Recognition

When to use:
- Top of page
- When user needs instant context and clarity

When NOT to use:
- Generic marketing hero
- Multi-CTA layout
- Feature dump

Structure Philosophy:
- left side: recognition copy and CTA
- right side: functional system visual
- Content first → visual confirmation → CTA
- Visual is supportive, not decorative
- the visual should feel like a system state panel, not a decorative dashboard

Data Contract:
- heading (required)
- description (required)
- primaryAction (required)
- visualType (required: system-feed | signal-grid)
- visualData (required)

Variant Rules:
- no variants
- `operations` and `visibility` are deprecated as variants
- use `visualType` instead: `system-feed` or `signal-grid`
- hero uniqueness comes from heading, page behavior, visualType, visualData, and CTA context

Visual Rules:
- MUST use system visual
- No custom JSX visuals
- No decorative visuals

Validation Rules:
- exactly one CTA
- visualType must be defined
- visualData must match type

Anti-Patterns:
- dashboard UI
- multiple CTAs
- generic SaaS hero

Replacement Guidance:
- none (this is mandatory top section)

Final Rule:
Hero must create recognition instantly and confirm it visually.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.
---

### GridCardsSection
Status: Approved

Role: Display independent items (problem / feature / signal)

Pattern: Diagnosis or Capability

When to use:
- items are independent
- no order required

When NOT to use:
- grouped scope
- process flow
- system relationships
- comparison

Structure Philosophy:
- flat, peer-based scanning
- no hierarchy between items

Data Contract:
- items[] (required)
- each item must be independent
- `diagnostic-grid` items require title, description, icon, and optional impact/status
- `feature-grid` items require title, description, and icon
- `signal-board` items require title, description, status, and badge or signalLabel

Variant Rules:
- `diagnostic-grid` = independent problems, risks, symptoms, or leaks
- `feature-grid` = independent capabilities, inclusions, or benefits
- `signal-board` = independent signal cards only when status or badge data is structurally used
- `signal-board` without status or badge data is deprecated
- do not add `scope-grid`, `process-grid`, `comparison-grid`, or `technology-grid`

Visual Rules:
- icons and badges only
- no dashboards

Validation Rules:
- items must be independent
- signal-board must include status or badge
- max 2 sections per page

Anti-Patterns:
- grouped content
- sequence
- layered systems

Replacement Guidance:
- grouped → ScopeSection
- flow → ProcessStepsSection
- signals → AuthoritySignalMapSection

Final Rule:
If items are not independent peers, do not use this component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.
---

### JourneyLeakMapSection
Status: Approved

Role: Diagnose where business leaks across lifecycle stages

Pattern: Diagnosis

When to use:
- lifecycle problems exist
- enquiry, lead, or conversion leaks must be visualized

When NOT to use:
- step-by-step process
- feature explanation
- capability listing

Structure Philosophy:
- stage-based diagnosis, not process flow
- each stage is an independent failure point
- show where the enquiry breaks, what happens, what it costs, and how it gets handled
- use ordered leak stages with stage marker, leak statement, impact, and handled state

Data Contract:
- stages[] (required, 3–5)
- each stage must include:
  - label
  - title
  - leak
  - impact
- optional:
  - handled
  - metric
  - status (critical / warning / stable)

Variant Rules:
- no variants

Visual Rules:
- no process timeline UI
- no decorative arrows
- no flat cards
- structural markers only
- connectors may appear only if they clarify the leak path without turning the section into a process

Validation Rules:
- stages.length must be 3–5
- leak must be specific (not generic)
- impact must NOT repeat leak
- handled must represent real system action
- data must represent real business/system state (no generic content)

Anti-Patterns:
- process timeline
- feature grid
- generic cards

Replacement Guidance:
- process → ProcessStepsSection
- grouped scope → ScopeSection

Final Rule:
If stages feel sequential instead of diagnostic, the component is wrong.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### AuthoritySignalMapSection
Status: Approved

Role: Show how visibility, authority, and trust signals connect

Pattern: Signal Map

When to use:
- SEO / visibility systems
- authority explanation
- trust signal breakdown

When NOT to use:
- feature listing
- system layers
- process flow

Structure Philosophy:
- grouped signal families
- state-based visibility: strong, weak, or missing
- each family shows signal items, current state, and effect on local discovery
- grouping must be visually stronger than individual card styling

Data Contract:
- families[] (required, 2–4)
- each family must include:
  - title
  - signals[] (2–4)
- each signal must include:
  - label
  - state (strong | weak | missing)
- optional:
  - metric
  - context note

Variant Rules:
- no variants

Visual Rules:
- must feel like a signal map, not SEO cards
- must NOT look like dashboard
- must NOT render as a flat grid
- must emphasize weak/missing signals
- data must represent real business/system state (no generic content)

Validation Rules:
- families.length must be 2–4
- each family must have 2–4 signals
- state must be valid enum
- missing signals must be visible

Anti-Patterns:
- grid cards
- layered stack
- feature blocks

Replacement Guidance:
- independent signals → GridCardsSection (restricted)
- system layers → LayerStackSection

Final Rule:
If relationships between signals are not clear, the component is failing.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ResponseRoutingMapSection
Status: Approved

Role: Show how enquiries, calls, messages, and missed leads are responded to, routed, and handed off.

Pattern: Response / Routing Map

When to use:
- AI Lead Handling sections
- missed-call and response-system sections
- routing and handoff clarity sections

When NOT to use:
- general process steps
- CRM follow-up visibility
- website diagnosis

Structure Philosophy:
- route-centered response map
- show what comes in, what happens immediately, who gets it, and where it goes next
- trigger, response, owner, and handoff must all remain visible together
- this is not a generic process timeline

Data Contract:
- routes[] (required, 3–5)
- each route must include:
  - trigger
  - response
  - owner
  - handoff
  - status

Variant Rules:
- no variants

Visual Rules:
- must emphasize routing and handoff clarity
- must not collapse into a generic timeline or feature list

Validation Rules:
- routes.length must be 3–5
- each route must show both response and handoff behavior
- owner must be explicit
- status must reflect real routing state

Anti-Patterns:
- generic process steps
- follow-up checklists
- diagnostic cards

Replacement Guidance:
- generic flow → ProcessStepsSection
- follow-up ownership → PipelineVisibilityMapSection

Final Rule:
If it does not show response and handoff behavior, use another component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### PipelineVisibilityMapSection
Status: Approved

Role: Show lead ownership, follow-up state, and visibility across pipeline stages.

Pattern: Pipeline Visibility

When to use:
- CRM Automation sections
- follow-up clarity sections
- ownership and stage-visibility sections

When NOT to use:
- SEO signals
- website leakage
- response routing

Structure Philosophy:
- stage-centered visibility map
- ownership, follow-up state, risk, and next action must remain visible together
- the section should make it clear that nobody is guessing where the lead is
- use stage rows or grouped state bands, not a decorative CRM screenshot

Data Contract:
- stages[] (required, 3–6)
- each stage must include:
  - stage
  - owner
  - visibleState
  - risk
  - nextAction

Variant Rules:
- no variants

Visual Rules:
- must emphasize stage ownership and follow-up clarity
- must not collapse into capability rows or generic steps

Validation Rules:
- stages.length must be 3–6
- each stage must show owner and visibleState explicitly
- risk must be specific
- nextAction must be operationally clear

Anti-Patterns:
- capability matrix rows
- signal maps
- response handoff flows

Replacement Guidance:
- response routing → ResponseRoutingMapSection
- grouped capability explanation → CapabilityMatrixSection

Final Rule:
If it does not show ownership and follow-up visibility, use another component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ReviewTrustLoopSection
Status: Approved

Role: Show review timing, trust capture, feedback routing, and the public reputation loop.

Pattern: Trust Loop

When to use:
- Reputation Review Systems sections
- review capture and trust-loop sections

When NOT to use:
- generic testimonials
- case studies
- SEO authority signals

Structure Philosophy:
- loop-centered trust system
- show work completed, review asked, happy client routed public, bad feedback routed privately, and trust improving
- each moment must connect trigger, ask, routing, public signal, and failure risk
- a subtle loop structure is allowed only when it improves clarity

Data Contract:
- moments[] (required, 3–5)
- each moment must include:
  - trigger
  - ask
  - routing
  - publicSignal
  - failureRisk

Variant Rules:
- no variants

Visual Rules:
- must emphasize trust capture and public proof loop
- must not read like a testimonial strip or generic process

Validation Rules:
- moments.length must be 3–5
- each moment must connect internal routing and public signal
- failureRisk must be specific
- ask must reflect real review timing

Anti-Patterns:
- testimonial cards
- case-study proof blocks
- generic authority maps

Replacement Guidance:
- narrative proof → CaseStudyNarrativeSection
- signal relationships → AuthoritySignalMapSection

Final Rule:
If it does not show the review/trust loop, use another component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### OpportunityRecoveryMapSection
Status: Approved

Role: Show missed, delayed, or weak opportunities and how the system recovers or improves them.

Pattern: Recovery / Refinement Map

When to use:
- Revenue Growth sections
- lifecycle improvement sections
- recovery and refinement sections

When NOT to use:
- first-time diagnosis
- linear process
- general benefits

Structure Philosophy:
- opportunity-centered recovery map
- show missed, delayed, or weak opportunity → recovery action → business effect
- source, leak, recovery action, business effect, and priority must remain visible together
- this must feel different from JourneyLeakMapSection: recovery/refinement, not first-pass diagnosis

Data Contract:
- opportunities[] (required, 3–5)
- each opportunity must include:
  - source
  - leak
  - recoveryAction
  - businessEffect
  - priority

Variant Rules:
- no variants

Visual Rules:
- must emphasize recovery and refinement behavior
- must not collapse into generic diagnosis cards or benefit lists

Validation Rules:
- opportunities.length must be 3–5
- each opportunity must show both leak and recoveryAction
- businessEffect must be explicit
- priority must be operationally meaningful

Anti-Patterns:
- first-pass diagnosis maps
- generic feature grids
- simple process timelines

Replacement Guidance:
- first-time diagnosis → JourneyLeakMapSection
- linear execution → ProcessStepsSection

Final Rule:
If it does not show recovery/refinement behavior, use another component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ScenarioMapSection
Status: Approved

Role: Create instant recognition through real, industry-specific business situations

Pattern: Scenario

When to use:
- industry pages
- landing sections requiring contextual recognition

When NOT to use:
- feature explanation
- capability listing
- generic marketing content

Structure Philosophy:
- asymmetric layout (1 dominant + 2 supporting)
- real-world situations, not categories

Data Contract:
- `primary-scenario` requires one primary scenario and exactly two supporting scenarios
- primary scenario requires title, description, situation context, and optional consequence
- each supporting scenario requires title, description, and situation context
- `environment-map` requires contexts[] with 3–5 items
- each context requires situation, pressure, and consequence

Variant Rules:
- `primary-scenario` = one dominant real-world situation plus two supporting scenarios
- `environment-map` = different working environments or enquiry contexts
- do not add `scenario-grid`, `use-case-grid`, or `industry-cards`

Visual Rules:
- no icons as primary elements
- no equal-width generic card grid
- `primary-scenario` must be asymmetric: one dominant scenario plus two supporting scenarios
- `environment-map` must group by working context, not by generic use case

Validation Rules:
- `primary-scenario` must have exactly 3 scenarios: one primary and two supporting
- `environment-map` must have 3–5 contexts
- one scenario must be primary
- scenarios must represent real situations (not features)
- descriptions must not be generic marketing copy
- data must represent real business/system state (no generic content)

Anti-Patterns:
- feature cards
- grid layout
- generic use cases

Replacement Guidance:
- feature explanation → GridCardsSection
- capability → CapabilityMatrixSection

Final Rule:
If user does not instantly recognize their situation, the component fails.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### CapabilityMatrixSection
Status: Approved

Role: Present structured capabilities in a dense, scannable, non-card layout

Pattern: Capability

When to use:
- structured capability explanation
- grouped system capabilities

When NOT to use:
- independent features
- process steps
- scope grouping

Structure Philosophy:
- grouped rows, not cards
- comparison within a system

Data Contract:
- groups[] (required, 3–6)
- each group must include:
  - title
  - rows[] (2–5)
- each row must include:
  - label
  - description
- optional:
  - status (available | partial | not included)
  - priority (core | advanced | optional)

Variant Rules:
- `matrix` only
- no additional variants approved

Visual Rules:
- no card UI
- no equal grid
- no heavy boxes

Validation Rules:
- groups.length must be 3–6
- each group must have at least 2 rows
- rows must not be generic
- rows must not repeat across groups
- status must be consistent if used
- data must represent real business/system state (no generic content)

Anti-Patterns:
- grid cards
- scope grouping
- feature highlight cards

Replacement Guidance:
- independent items → GridCardsSection
- grouped scope → ScopeSection

Final Rule:
If capabilities are not scannable across groups, the component fails.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### CaseStudyNarrativeSection
Status: Approved

Role: Present believable, real-world proof using flexible narrative blocks

Pattern: Proof

When to use:
- case studies
- proof sections where story matters more than rigid panels

When NOT to use:
- simple before/after comparison
- step-by-step process
- feature listing

Structure Philosophy:
- vertical narrative flow
- composable blocks, not fixed panels

Data Contract:
- `narrative-flow` requires blocks[] with 4–7 items
- `narrative-flow` first block must be problem and at least one block must be result
- supported `narrative-flow` block types: problem, context, constraint, action, result, testimonial, decision
- `proof-breakdown` requires broken, changed, and improved fields
- `proof-breakdown` may include optional metric or quote only when context is provided

Variant Rules:
- `narrative-flow` = full case-study page narrative
- `proof-breakdown` = shorter proof section inside service or industry pages
- no generic story/card variants approved

Visual Rules:
- `narrative-flow` must use vertical narrative rhythm
- `proof-breakdown` may use compact structured proof blocks
- no generic grid layout
- no testimonial-card wall
- no feature-style storytelling cards

Validation Rules:
- blocks.length must be 4–7
- first block must be problem
- one block must be result
- action must not be UI steps
- metrics must include context
- data must represent real business/system state (no generic content)

Anti-Patterns:
- highlight cards
- feature storytelling
- rigid before/after panels

Replacement Guidance:
- strict comparison → BeforeAfterSection
- structured proof → ProofStorySection

Final Rule:
If story feels generic or templated, the component fails.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### DecisionFrameworkSection
Status: Approved

Role: Teach structured thinking and support non-linear decisions

Pattern: Resource / Learning / Decision Framework

When to use:
- resource sections
- educational sections
- decision-support frameworks
- non-linear guidance where the reader needs criteria, principles, or checks

When NOT to use:
- linear process
- diagnosis
- capability listing

Structure Philosophy:
- non-linear learning blocks
- each step is independent

Data Contract:
- `principle-steps` requires steps[] with 3–5 items
- each `principle-steps` item requires principle, action, and expectedOutcome
- `checklist-framework` requires checks[] with 3–7 items
- each `checklist-framework` item requires check, whyItMatters, and whatToLookFor

Variant Rules:
- `principle-steps` = independent learning principles with action and expected outcome
- `checklist-framework` = non-linear decision checklist
- never use this component for ordered process flow
- `FrameworkStepsSection` is deprecated naming; use `DecisionFrameworkSection`

Visual Rules:
- no timeline
- no directional connectors
- no process-step styling
- checklist-framework must feel like decision support, not task execution

Validation Rules:
- steps.length must be 3–5
- steps must not depend on order
- action must not be UI steps
- expectedOutcome must be observable
- data must represent real business/system state (no generic content)

Anti-Patterns:
- process flow
- checklist UI
- generic tips

Replacement Guidance:
- ordered steps → ProcessStepsSection
- diagnosis → JourneyLeakMapSection

Final Rule:
If steps require order, the component is wrong.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### CriteriaComparisonSection
Status: Approved

Role: Compare approaches across explicit decision criteria.

Pattern: Criteria Comparison

When to use:
- comparing current approach vs MindWP system approach
- comparing DIY, agency, package, or manual approaches against system-based implementation
- when the reader needs to understand why two approaches are not equivalent

When NOT to use:
- simple broken vs working contrast
- before/after outcomes
- pricing tables
- feature matrices without a decision question

Structure Philosophy:
- criteria-centered comparison
- each row must show the criterion, current approach, system approach, and decision signal
- comparison should help the reader decide, not just list differences

Data Contract:
- criteria[] (required, 3–6)
- each criterion must include:
  - label
  - currentApproach
  - systemApproach
  - decisionSignal

Variant Rules:
- no variants
- if the comparison is only before/after, use BeforeAfterSection
- if the comparison is dense capability coverage, use CapabilityMatrixSection

Visual Rules:
- row or table-like structure is allowed
- must not look like a pricing table
- decisionSignal must be visually scannable
- no equal feature cards

Validation Rules:
- criteria.length must be 3–6
- each criterion must compare approaches, not list features
- decisionSignal must explain why the difference matters
- currentApproach and systemApproach must not be vague

Anti-Patterns:
- pricing comparison
- generic feature checklist
- vague “better vs worse” claims
- using this for simple before/after state

Replacement Guidance:
- simple contrast → BeforeAfterSection
- grouped capabilities → CapabilityMatrixSection
- proof → ProofStorySection or MetricProofSection

Final Rule:
If the section does not help the reader choose between approaches, use another component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### MetricProofSection
Status: Approved

Role: Present metric-led proof with enough context to be believable.

Pattern: Metric Proof

When to use:
- real measurable outcomes are the main proof
- service or industry pages need compact proof without full narrative
- case-study data includes before/after numbers or observable operational metrics

When NOT to use:
- when metrics are invented, estimated, or unsupported
- when story/context is more important than numbers
- when the section only needs before/change/after causality

Structure Philosophy:
- metric first, context immediately after
- every number must explain what changed and why it matters
- metrics must support trust, not decorate the page

Data Contract:
- metrics[] (required, 2–4)
- each metric must include:
  - value
  - label
  - context
  - before
  - after
- optional:
  - sourceNote

Variant Rules:
- no variants
- if proof is narrative, use CaseStudyNarrativeSection
- if proof is causal but not metric-led, use ProofStorySection

Visual Rules:
- metrics may be visually prominent
- context must remain close to the number
- no isolated number cards without explanation
- no vanity metrics

Validation Rules:
- metrics.length must be 2–4
- every metric must include context
- before and after must be specific
- value must be supported by real source data
- sourceNote is required when the number could sound inflated or unclear

Anti-Patterns:
- metric walls
- unsupported numbers
- vague improvement percentages
- proof that feels polished but not observed

Replacement Guidance:
- narrative proof → CaseStudyNarrativeSection
- causal proof → ProofStorySection
- simple contrast → BeforeAfterSection

Final Rule:
If the metric cannot be trusted without extra explanation, the section is not ready.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ObjectionResolutionSection
Status: Approved

Role: Resolve decision friction before the reader reaches a CTA.

Pattern: Objection Resolution

When to use:
- a page has predictable buying hesitation
- the reader may believe their current setup is enough
- the page needs to reframe objections before asking for action

When NOT to use:
- FAQ content
- generic concerns
- benefits lists
- qualification filtering

Structure Philosophy:
- belief → reality → reframe
- the component should make the reader feel understood, not persuaded
- objections must be specific to the page/system context

Data Contract:
- objections[] (required, 3–5)
- each objection must include:
  - belief
  - reality
  - reframe

Variant Rules:
- no variants
- if the content is a question/answer, use AccordionFAQSection
- if the content filters fit, use QualificationSection

Visual Rules:
- should feel calm and direct
- avoid aggressive myth-busting UI
- belief, reality, and reframe must be visually connected
- no generic card grid styling

Validation Rules:
- objections.length must be 3–5
- belief must sound like something a real business owner would think
- reality must be specific and observable
- reframe must connect to the page's primary system

Anti-Patterns:
- FAQ replacement
- objection dumping
- salesy rebuttals
- generic “you might think...” copy

Replacement Guidance:
- common questions → AccordionFAQSection
- fit filtering → QualificationSection
- comparison → CriteriaComparisonSection or BeforeAfterSection

Final Rule:
If it feels like persuasion instead of clarification, rewrite or use another component.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ServiceBridgeSection
Status: Approved

Role: Show a controlled handoff between adjacent MindWP systems without changing page ownership.

Pattern: System Handoff

When to use:
- one system needs to reference what happens next in another system
- a service page needs to show handoff context without becoming the adjacent service page
- connected systems need to be explained as a sequence of responsibility boundaries

When NOT to use:
- as a generic related-services section
- to make all systems feel equal
- to replace graph-owned related content
- to blur primary system ownership

Structure Philosophy:
- handoff-centered, not service-list-centered
- each bridge must show from-system, to-system, handoff, and boundary
- the owning page's primary system must remain dominant

Data Contract:
- bridges[] (required, 2–4)
- each bridge must include:
  - from
  - to
  - handoff
  - boundary

Variant Rules:
- no variants
- if content is graph-owned discovery, use RelatedContentSection
- if content is process flow inside one system, use ProcessStepsSection

Visual Rules:
- must show relationship boundaries clearly
- no equal service cards
- no generic service catalog layout
- the current/owning system should be visually dominant

Validation Rules:
- bridges.length must be 2–4
- from and to must be canonical systems or approved system labels
- handoff must be specific
- boundary must explain what the current page does not own
- must not change primary system or CTA context

Anti-Patterns:
- related service cards
- cross-sell grids
- equal-weight service menus
- system boundary blur

Replacement Guidance:
- graph discovery → RelatedContentSection
- process flow → ProcessStepsSection
- capability grouping → CapabilityMatrixSection

Final Rule:
If the section makes the page feel like a service catalog, it is wrong.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### LayerStackSection
Status: Approved

Role: Explain connected system layers

Pattern: System Layers

When to use:
- system architecture explanation
- layered infrastructure

When NOT to use:
- signal relationships
- process flow
- independent features

Structure Philosophy:
- connected layers (not cards)
- all layers visible together

Data Contract:
- layers[] (required, max 4)
- each layer must include:
  - title
  - summary

Variant Rules:
- `stack` only
- `signal-map` is deprecated
- `interactive-stack` is deprecated unless rebuilt with meaningful interaction and a real data contract

Visual Rules:
- no connectors
- no arrows
- no grid layout

Validation Rules:
- layers must feel interdependent
- no isolated cards
- max 4 layers
- data must represent real system structure

Anti-Patterns:
- signal mapping
- feature cards
- timeline flow

Replacement Guidance:
- signals → AuthoritySignalMapSection
- process → ProcessStepsSection

Final Rule:
If layers are independent, this component is wrong.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ProcessStepsSection
Status: Approved

Role: Represent linear execution flow

Pattern: Flow

When to use:
- ordered process
- step-by-step execution

When NOT to use:
- independent ideas
- diagnosis
- system layers

Structure Philosophy:
- strict sequence
- directional flow

Data Contract:
- steps[] (required, 3–5)
- each step must include:
  - title
  - description

Variant Rules:
- `timeline` only
- `cycle` is deprecated
- if a sequence is truly cyclical, use ReviewTrustLoopSection or define a future loop component instead

Visual Rules:
- directional connector only
- no cards

Validation Rules:
- steps must be ordered
- each step depends on previous
- data must represent real execution

Anti-Patterns:
- checklist
- framework thinking

Replacement Guidance:
- non-linear → DecisionFrameworkSection
- diagnosis → JourneyLeakMapSection

Final Rule:
If order is not required, component is wrong.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### BeforeAfterSection
Status: Approved

Role: Compare broken vs working state

Pattern: Comparison

When to use:
- direct contrast needed

When NOT to use:
- narrative proof
- process

Structure Philosophy:
- two panels only
- strong contrast

Data Contract:
- before[] (required)
- after[] (required)

Variant Rules:
- `split-panel` only
- `scorecard` is deprecated unless rebuilt as a real criteria/metric comparison structure
- if score or criteria comparison is needed, create a future CriteriaComparisonSection instead of overloading this component

Visual Rules:
- no gimmicks

Validation Rules:
- before = problems
- after = outcomes
- contrast must be immediate

Anti-Patterns:
- feature comparison
- vague outcomes

Replacement Guidance:
- narrative → ProofStorySection

Final Rule:
User must instantly see difference.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ScopeSection
Status: Approved

Role: Show grouped system coverage

Pattern: Scope

When to use:
- grouped inclusions

When NOT to use:
- independent features

Structure Philosophy:
- grouped hierarchy

Data Contract:
- `grouped-scope` requires groups[] with 3–6 items
- each group requires title and bullets[] with 3–6 real inclusion items
- `service-map` requires areas[] with 3–6 items
- each area requires title, includes[], and outcome

Variant Rules:
- `grouped-scope` = grouped inclusions
- `service-map` = system areas mapped to includes and outcome
- do not use ScopeSection for independent feature cards, process steps, or comparison

Visual Rules:
- grouped hierarchy must be visible
- `grouped-scope` can use grouped lists
- `service-map` must show system areas and outcomes, not simple bullet cards
- no independent feature-card grid

Validation Rules:
- bullets must be real inclusions
- groups must be logical

Anti-Patterns:
- feature grid

Replacement Guidance:
- independent → GridCardsSection

Final Rule:
Must feel like system coverage.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### QualificationSection
Status: Approved

Role: Filter users by fit

Pattern: Qualification

When to use:
- pre-CTA filtering

When NOT to use:
- features

Structure Philosophy:
- binary fit filter
- the reader should quickly decide: this is for me or this is not for me
- this is not a general comparison block

Data Contract:
- goodFit[] (required)
- notFit[] (required)
- maybeFit[] is not approved unless a future explicit decision adds it

Variant Rules:
- `fit-filter` only
- `two-column` is a layout description, not an approved variant name
- `decision-cards` is deprecated

Visual Rules:
- no cards

Validation Rules:
- must allow fast decision
- items must be specific

Anti-Patterns:
- benefits list

Replacement Guidance:
- comparison → BeforeAfterSection

Legacy Naming:
- FitCheckSection is legacy naming only
- new fit-check naming must NOT be introduced
- migration to QualificationSection must happen as a controlled docs, code, validator, and test update

Final Rule:
User must decide in seconds.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ProofStorySection
Status: Approved

Role: Convert belief into certainty using grounded before → change → after proof

Pattern: Proof

When to use:
- when measurable or observable change must be shown

When NOT to use:
- narrative storytelling
- simple comparison only

Structure Philosophy:
- 3-part structure: before → change → after

Data Contract:
- before (required)
- change (required)
- after (required)
- optional: metrics (must include context)

Variant Rules:
- `before-change-after` only
- `metric-story` is deprecated
- if metric-led proof is needed, define a future MetricProofSection instead of overloading this component

Visual Rules:
- no equal-weight panels
- emphasis on after state

Validation Rules:
- must include real change
- metrics must be contextual
- data must represent real business/system state (no generic content)

Anti-Patterns:
- vague improvement claims
- metric-only cards

Replacement Guidance:
- narrative → CaseStudyNarrativeSection
- comparison → BeforeAfterSection

Final Rule:
Proof must feel measurable and causally clear.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### ImageStorySection
Status: Approved

Role: Present visual-backed evidence where image explains system behavior

Pattern: Visual Evidence

When to use:
- when visual carries meaning

When NOT to use:
- decorative imagery

Structure Philosophy:
- visual-first evidence block

Data Contract:
- image (required)
- heading (required)
- description (required)
- optional: bullets, highlights, caption

Variant Rules:
- `evidence-photo` = contextual or real-world visual evidence
- `system-visual` = structured screenshot, system view, or diagram-like evidence
- `operational-photo`, `visual-panel`, and `split-evidence` are deprecated names

Visual Rules:
- must use real system or contextual visual evidence
- no stock images
- `evidence-photo` must feel grounded in a real business context
- `system-visual` must explain system behavior or structure

Validation Rules:
- image must add meaning
- content must explain visual

Anti-Patterns:
- decorative visuals
- generic photos

Replacement Guidance:
- comparison → BeforeAfterSection
- system structure → LayerStackSection

Final Rule:
If visual is removed and meaning remains, component is wrong.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### AccordionFAQSection
Status: Approved

Role: Reduce friction through disclosure

Pattern: Support

When to use:
- common blocking questions

When NOT to use:
- main content or proof

Structure Philosophy:
- progressive disclosure

Data Contract:
- items[] (required)
- each item: question + answer

Variant Rules:
- `single-column` only
- if categorized, searchable, or multi-panel FAQ is needed, define a future CategorizedFAQSection instead

Visual Rules:
- no visual system

Validation Rules:
- answers must be specific
- questions must reflect real objections

Anti-Patterns:
- long content blocks
- hidden primary information

Replacement Guidance:
- explanation → DecisionFrameworkSection

Final Rule:
FAQ must reduce friction, not carry core meaning.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### RelatedContentSection
Status: Approved

Role: Provide contextual discovery based on graph relationships

Pattern: Discovery

When to use:
- post-content exploration

When NOT to use:
- step sequence or learning path

Structure Philosophy:
- asymmetric: one primary recommendation plus two supporting recommendations
- this should feel like the next useful step, not generic related posts

Data Contract:
- items[] (required, exactly 3)
- one primary item

Variant Rules:
- `progression` only
- no equal-card grid variants approved

Visual Rules:
- minimal visual weight
- primary item must be visually distinct from supporting items
- do not render as three equal cards

Validation Rules:
- items must be non-sequential
- must not repeat same intent

Anti-Patterns:
- grid layout
- numbered progression

Replacement Guidance:
- learning → DecisionFrameworkSection

Final Rule:
Must feel optional and relevant.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

### PrimaryCTASection
Status: Approved

Role: Drive final conversion decision

Pattern: Decision

When to use:
- end of page conversion

When NOT to use:
- explanatory content

Structure Philosophy:
- single clear action
- CTA should feel like a calm next conversation, not a pricing block or SaaS banner

Data Contract:
- primaryAction (required)
- optional: supporting text

Variant Rules:
- `soft-panel` only
- `split-card` is deprecated unless supports/actions become structurally separate
- tone, density, and supporting points are controls, not variants

Visual Rules:
- emphasis via layout, not visuals

Validation Rules:
- only one CTA
- action must be clear

Anti-Patterns:
- multiple CTAs
- unclear action

Replacement Guidance:
- qualification → QualificationSection

# Final Rule:
CTA must make next step obvious.

### Final Authority Contract

This approved component definition is the source of truth for implementation, validation, and tests.

No implementation behavior or validator rule may exist outside this component block.

If something is missing here, it is undefined for implementation.

---

## 5.3 Controlled Uniqueness System

Approved direction:

- Tier-1 pages should share terminal/supporting patterns.
- The top third of each Tier-1 page must contain one page-specific structural pattern that reflects that system's unique business logic.
- Unique structure should appear in Section 2, 3, or 4.
- Uniqueness must change structure, grouping, hierarchy, or data shape.
- Uniqueness must NOT be color-only, spacing-only, typography-only, icon-only, or label-only.

Target:

- Use shared components where the pattern is genuinely shared.
- Use unique structural patterns where the business logic is different.
- Do not force a fixed reuse percentage if it weakens page clarity.

Purpose:

- maintain consistency
- allow meaningful differentiation
- prevent design drift

---

## 5.4 Page-Level Uniqueness Map

Smart Website Systems:
- Unique: JourneyLeakMapSection
- Placement: Section 2
- Reason: owns lifecycle diagnosis

Local SEO Authority:
- Unique: AuthoritySignalMapSection
- Placement: Section 3
- Reason: owns signal relationships

AI Lead Handling:
- Unique: ResponseRoutingMapSection
- Placement: Section 2 or 3
- Reason: owns response, routing, missed-call, and handoff behavior

CRM Automation:
- Unique: PipelineVisibilityMapSection
- Placement: Section 2 or 3
- Reason: owns lead ownership, follow-up visibility, and pipeline clarity

Reputation Review:
- Unique: ReviewTrustLoopSection
- Placement: Section 2 or 3
- Reason: owns review timing, trust capture, and feedback routing

Revenue Growth:
- Unique: OpportunityRecoveryMapSection
- Placement: Section 2 or 3
- Reason: owns recovery, refinement, lifecycle improvement, and missed opportunity loops

## 5.5 Top-Third Priority Rule

- Sections 2–4 define page identity

- These sections MUST:
  - contain primary pattern
  - include unique structural component (if Tier-1 page)

- Lower sections:
  - support
  - validate
  - reinforce

If top-third is weak:
→ page fails regardless of lower sections

# 6. System Rules

## 6.1 Global Rules

- components are render only
- no logic ownership
- no duplication of meaning

- Rules should guide correct decisions, not block valid business implementation unnecessarily
- Component contracts remain strict once a pattern and component are chosen

## 6.2 Variant Rules

- max 2 variants per component unless a future approved component block says otherwise
- no style-only variants
- no naming-only variants
- variants must change structure, data contract, semantic meaning, or scanning behavior
- controls are not variants

## 6.3 Usage Rules

- each section = one pattern
- no repeated grids

- If content does not perfectly fit:
  → adjust data or structure
  → do NOT abandon system

---

## 6.3A Rendering Pipeline Rule

All sections must follow strict pipeline:

DATA → VALIDATOR → RENDERER → COMPONENT

Definitions:

- Data:
  - source of truth
  - must be complete and valid

- Validator:
  - strict gatekeeper
  - must reject invalid data
  - must NOT mutate or fix data

- Renderer:
  - maps validated data to components
  - must NOT transform or enrich data

- Component:
  - pure UI
  - must NOT parse, fix, or infer data

Rules:

- No logic inside components
- No silent data fixing
- No fallback defaults

If data is invalid:
→ fix data at source
→ avoid rendering broken UI

## 6.4 Component Usage Constraints (Global)

GridCardsSection:
- max 2 per page (hard limit)
- only for independent items

JourneyLeakMapSection:
- must be used for lifecycle diagnosis
- must not be replaced by grid

AuthoritySignalMapSection:
- must be used for signal relationships
- must not be replaced by LayerStackSection

ScopeSection:
- must be used when grouped coverage exists

## 6.4A Dominant Component Control Rule

Certain components tend to be overused and must be strictly controlled:

- GridCardsSection:
  - must NOT be default fallback
  - must NOT replace grouped, sequential, or relational content

- LayerStackSection:
  - must NOT be used for signal relationships

- ProcessStepsSection:
  - must NOT be used for non-linear explanation

If overuse is detected:
→ page structure must be reviewed
→ NOT component reused

## 6.5 Variant Classification System

Variant Types:
- Real → structural/data difference (allowed)
- Structural-light → temporary (must convert or remove)
- Fake → REMOVE

Rules:
- No style-only variants
- No naming-only variants
- Max 2 variants per component unless an approved component block says otherwise
- Variants must change structure, data contract, semantic meaning, or scanning behavior

---

## 6.6 System Reality Rule

- If real usage conflicts with system rules:
  → system rules must correct usage

- If a component is repeatedly misused:
  → restrict or replace the component

- System rules are enforced, not descriptive


## 6.6A System Feedback Loop Rule

- Real usage must continuously be evaluated against system rules

If repeated misuse is detected:

1. Check:
   - Is component definition unclear?
   - Is pattern mapping insufficient?

2. Then:
   - update system definition OR
   - enforce stricter validation

System evolves through:
→ real usage feedback
→ NOT assumptions


## 6.7 Data Ownership Rules

- Renderers/templates prepare ALL component data
- Components must NOT transform, infer, or enrich data
- CTA links must be generated outside components
- Graph relationships must be resolved before render
- Components receive final, ready-to-render props only

---

## 6.8 Component Implementation Gap Rule

- If component source does not match this document:
  → source must be updated

- If a variant exists without a real data contract:
  → remove or rebuild it

- Class-only or style-only variants are NOT valid variants

---

## 6.9 Component Conflict Resolution Rules

If multiple components could be used:

- Signal relationships → AuthoritySignalMapSection (never LayerStackSection)
- Grouped scope → ScopeSection (never GridCardsSection)
- Linear steps → ProcessStepsSection
- Non-linear learning → DecisionFrameworkSection
- Direct comparison → BeforeAfterSection
- Causal proof → ProofStorySection

---

# 6.10 Variant Integrity Rule

- If a variant does NOT change:
  - structure OR
  - data contract

→ it is NOT a real variant

- Class-only variants must be removed
- Naming-only variants must be removed
- Variants must introduce meaningful structural or data differences

---

## 6.11 Deprecated Components & Variants (STRICT)

Deprecated items are not approved for new implementation.

Existing code references must be migrated through controlled implementation work.

No fallback or legacy support should be introduced.

Deprecated:

Components:
- FitCheckSection → replaced by QualificationSection
- FrameworkStepsSection → replaced by DecisionFrameworkSection

Variants and deprecated names:
- HeroSplitSection: `operations` and `visibility` as variants; use visualType instead
- GridCardsSection: `signal-board` usage without badge/status structure
- ScenarioMapSection: `scenario-grid`, `use-case-grid`, `industry-cards`
- LayerStackSection: `signal-map`, `interactive-stack`
- ProcessStepsSection: `cycle`
- BeforeAfterSection: `scorecard` unless rebuilt with real criteria structure
- QualificationSection: `decision-cards`, `two-column` as variant names
- ProofStorySection: `metric-story`
- PrimaryCTASection: `split-card` unless supports/actions become structurally separate
- ImageStorySection: `operational-photo`, `visual-panel`, `split-evidence`, decorative or non-evidence variants
- BeforeAfterSection misuse for criteria comparison; use CriteriaComparisonSection
- ProofStorySection misuse for metric-led proof; use MetricProofSection
- AccordionFAQSection misuse for objection reframing; use ObjectionResolutionSection
- RelatedContentSection misuse for system handoff; use ServiceBridgeSection

Rules:

- Deprecated items must NOT be used for new implementation
- If found in existing code → migrate through controlled implementation work
- No fallback or legacy support allowed

---

## 6.12 Migration Enforcement Rule

- Any component usage that violates system rules MUST be migrated

- Migration priority:
  1. Replace wrong component usage
  2. Remove fake variants
  3. Align data with component contracts

- No partial compliance:
  - If a component is used incorrectly → it is considered invalid

- Migration is mandatory before:
  - adding new pages
  - introducing new variants
  - extending components

---

## 6.13 Component Consolidation Rule

- Each component must have a clear, non-overlapping responsibility

- If two components overlap:
  → one must be removed or restricted

- New components are NOT allowed unless:
  - a pattern cannot be expressed with existing components
  - AND a new data contract is required

- Avoid:
  - near-duplicate components
  - minor variations as new components

---

## 6.14 No Fallback UI Rule

- There is NO generic fallback component

- If content does not fit a component:
  → content must be restructured
  → OR a new pattern + component must be defined

- Do NOT:
  - default to GridCardsSection
  - create ad-hoc layouts
  - bypass system rules

---


## 6.15 System Cleanliness Rule

- System must remain:
  - minimal
  - non-duplicated
  - strictly governed

- Any new addition must:
  - not duplicate existing patterns
  - not introduce variant drift
  - follow full component block definition

- If duplication appears:
  → remove or merge immediately

## 6.16 Control vs Variant Rule

Controls are NOT variants.

Controls include:
- tone (light / dark)
- density (compact / relaxed)
- alignment (left / center)
- layout direction (normal / reversed)
- spacing adjustments

Rules:

- Controls must NOT create new variants
- Controls must NOT change data contract
- Controls must NOT change structure

- Variants ONLY exist when:
  - structure changes OR
  - data contract changes

If a change can be achieved via control:
→ DO NOT create a variant

---

## 6.17 Renderer Responsibility Rule

Renderers/templates MUST own:

- page structure (section order)
- pattern selection
- component selection
- variant selection
- CTA placement and context
- data mapping to component contracts

Components MUST NOT:

- decide order
- infer missing data
- choose variants dynamically
- generate CTA logic

Components are pure render functions only.

## 6.17A Final Variant Decision Table

| Component | Approved Variants | Deprecated / Not Approved | Notes |
|---|---|---|---|
| SectionShell | none | all content variants | tone, density, align, and bare are controls |
| HeroSplitSection | none; use visualType | operations, visibility as variants | visualType owns system-feed / signal-grid |
| GridCardsSection | diagnostic-grid, feature-grid, signal-board | signal-board without badge/status | only independent peer cards |
| JourneyLeakMapSection | none | all variants | lifecycle leak diagnosis only |
| AuthoritySignalMapSection | none | all variants | signal relationship map only |
| ResponseRoutingMapSection | none | all variants | response and handoff map only |
| PipelineVisibilityMapSection | none | all variants | pipeline visibility map only |
| ReviewTrustLoopSection | none | all variants | trust loop only |
| OpportunityRecoveryMapSection | none | all variants | recovery/refinement map only |
| ScenarioMapSection | primary-scenario, environment-map | scenario-grid, use-case-grid | industry recognition patterns |
| CapabilityMatrixSection | matrix | all others | dense capability matrix only |
| CaseStudyNarrativeSection | narrative-flow, proof-breakdown | generic story/card variants | full case study vs compact proof |
| DecisionFrameworkSection | principle-steps, checklist-framework | FrameworkStepsSection naming, process/checklist UI variants | non-linear learning and decision support only |
| CriteriaComparisonSection | none | all variants | criteria-based decision comparison only |
| MetricProofSection | none | all variants | metric-led proof with context only |
| ObjectionResolutionSection | none | all variants | belief → reality → reframe only |
| ServiceBridgeSection | none | all variants | controlled system handoff only |
| LayerStackSection | stack | signal-map, interactive-stack | ordered layers only |
| ProcessStepsSection | timeline | cycle | linear execution only |
| BeforeAfterSection | split-panel | scorecard | direct broken/working contrast |
| ScopeSection | grouped-scope, service-map | feature-grid-like usage | grouped scope and system areas |
| QualificationSection | fit-filter | decision-cards, two-column naming | fit filtering only |
| ProofStorySection | before-change-after | metric-story | causal proof only |
| ImageStorySection | evidence-photo, system-visual | operational-photo, visual-panel, split-evidence | meaningful visual evidence only |
| AccordionFAQSection | single-column | all others | simple friction reduction only |
| RelatedContentSection | progression | equal-card grid variants | one primary + two supporting |
| PrimaryCTASection | soft-panel | split-card | CTA controls are not variants |

## 6.17B Data Reality And Content Flexibility Rule

Core rule:

Existing data is the first content source.

Approved component contracts may require clearer structure, but future implementation must not blindly add data just to satisfy imagined props.

Plain-English data guidance:

- Prefer direct mapping when current data already expresses the approved pattern.
- Prefer light reshaping when the meaning is already present but the old field shape is too flat.
- Add labels, states, stages, or decision signals only when they clarify existing meaning.
- Do not add substantive content unless the user approves it.
- Do not invent proof, metrics, testimonials, guarantees, client results, vendor claims, or capabilities.
- If a section cannot be filled honestly from current data, report the content gap.

Allowed:

- rename a field for clarity
- group existing items into approved sections
- split existing meaning into clearer labels or states
- move content from renderer mapping into data where the component needs structure
- add short mechanical labels when they clarify existing meaning

Not allowed:

- writing new sales claims to fill a component
- inventing staged leaks or handoffs beyond current page meaning or without following WRITING.md, CONTENT.md, current page data, and the component authority block
- inventing metric proof
- inventing testimonials or attribution
- adding visual-only props that do not express meaning
- parsing paragraphs inside components to create fake structure

New prop guidance:

New props are allowed only when they express:

- structure
- state
- relationship
- decision signal
- scanning behavior
- ownership
- handoff
- risk
- next action

New props are not allowed when they exist only for:

- decoration
- layout filler
- visual complexity
- generic marketing copy
- making a section look fuller

Renderer/data responsibility:

- Data files own content.
- Renderers map domain data into approved component props.
- Components render prepared props only.
- Components must not parse content to invent structure.
- If a component needs structure, put the structure in data or renderer mapping.

Proof and metrics rule:

- No real metric data → do not use MetricProofSection.
- No real case-study source → do not invent CaseStudyNarrativeSection claims.
- No testimonial source → do not invent attribution or quote text.
- No guarantee source → do not create guarantee copy.

Final rule:
Data flexibility exists to express approved patterns using real content, not to let Copilot write new marketing material.

---

## 6.18 No Implicit Behavior Rule

- Components must NOT:
  - infer missing props
  - guess variant
  - auto-generate content
  - fallback to default layouts

- All behavior must be:
  - explicitly defined
  - explicitly passed via data

If something is not defined:
→ it must NOT render

Note:
- This does NOT mean system should be rigid
- It means behavior must be intentional and explicit

---

## 6.18A No UI Logic Leakage Rule

Components must NOT perform:

- string parsing
- data transformation
- fallback generation
- shape correction

Examples (FORBIDDEN):

- splitting strings into arrays
- converting types
- generating IDs
- deriving missing fields

All transformations must happen:

→ in data layer ONLY

If component needs to transform data:
→ system design is wrong

## 6.19 Data Contract Enforcement Rule

- All component props must match defined data contracts exactly
- Data may be reshaped to match approved contracts only when the meaning already exists or the user approves the new content

- Missing required props:
  → component is invalid

- Extra props not defined:
  → must be removed

- Incorrect data shape:
  → must fail validation

- No flexible or optional interpretation allowed during implementation once the relevant component contract is chosen

---

## 6.19A Empty State Guard Rule

All components must enforce:

- required content must exist before render

Examples:

- if heading.title missing → do not render
- if items empty → do not render
- if visual missing → do not render

Rules:

- No partial rendering
- No placeholder content
- No empty UI shells

If required data is missing:
→ component must return null

## 6.20 System Extension Rule

New components or variants are allowed ONLY if:

1. A pattern cannot be expressed with existing components
2. A new data contract is required
3. It does not overlap with existing components

Required steps:

- define full component block
- define pattern mapping
- define data contract
- define validation rules

If these are not met:
→ extension is NOT allowed

---


## 6.21 No System Bypass Rule

- It is NOT allowed to:
  - create custom layouts outside components
  - inject JSX outside system structure
  - bypass component contracts
  - override system rules per page

If requirement cannot be met:
→ system must be updated
→ NOT bypassed

---

## 6.22 Implementation Guidance (AI + Developer)

Interpretation boundary:

- During planning, use system rules to choose the right pattern and component without over-restricting execution.
- During implementation, once a component is chosen, its approved component block and data contract are strict.
- Do not use “practicality” to bypass approved component contracts, CTA ownership, graph ownership, SEO ownership, route identity ownership, or CSS ownership.

This section overrides over-strict interpretation of rules.

This system is deterministic, but NOT rigid.

Rules:

- Follow component intent, not just structure
- If data does not perfectly match:
  → adapt data
  → NOT break component usage

- Prefer correct pattern over strict contract matching
- If a rule conflicts with real-world content:
  → resolve using pattern logic
  → NOT bypass system

- Do NOT assume something is “not allowed”
- Instead:
  → check intent
  → choose closest valid structure

- Components are flexible within their purpose
- System rules guide decisions, not block them

---

## Practical Interpretation

When implementing:

1. Identify pattern first
2. Choose correct component
3. Shape data to match component
4. Apply visual + structure rules

NOT:

- forcing data into wrong component
- skipping component because data is imperfect
- creating new structure unnecessarily

---

## Important

This system should:

- guide decisions
- reduce ambiguity
- prevent misuse

It should NOT:

- block implementation
- create fear of breaking rules
- force rigid compliance

If something feels “too strict”:

→ interpret intent
→ NOT abandon system

# 7. Validation System


## 7.1 Validator Source of Truth (STRICT)

When validators are created or updated in a scoped implementation task, they must follow this source order.

Validators MUST read ONLY:

- Component blocks (Section 5)
- Visual system (Section 4)
- System Rules (Section 6)

Validators MUST NOT read:

- Phase sections
- historical notes
- migration notes
- usage references
- anchor mappings

If a rule exists outside allowed sections:
→ it must be ignored

---

## 7.2 Component Authority Override Rule

- Component blocks override ALL other sections

If conflict exists between:

- component block
- system rules
- pattern mapping
- usage reference

→ component block MUST win

Component blocks define:

- structure
- data contract
- validation rules
- allowed behavior

Nothing outside component block can override it

---

## 7.3 Self-Contained Component Rule

- Each component block must be fully self-contained

It must include:

- structure rules
- data contract
- validation rules
- anti-patterns
- replacement guidance

Validators must NOT depend on:

- other component definitions
- pattern tables
- external notes

If a rule is not inside the component block:
→ it is undefined

---

## 7.4 Component Completeness Rule

- Every component block must include ALL required sections:

  - Status
  - Role
  - Pattern
  - When to use
  - When NOT to use
  - Structure Philosophy
  - Data Contract
  - Variant Rules
  - Visual Rules
  - Validation Rules
  - Anti-Patterns
  - Replacement Guidance
  - Final Rule
  - Final Authority Contract

If any part is missing:
→ component is incomplete
→ system is invalid

---

## 7.5 Final System Guarantee

- The system is deterministic

- Every UI decision must be derived from:

  CONTENT → PATTERN → COMPONENT → VARIANT → RENDER

- No randomness allowed
- No AI guessing allowed
- No implicit interpretation inside component contracts, renderers, validators, or runtime behavior

If a decision cannot be derived:
→ system definition is incomplete

---

## 7.6 System Authoring Rule

When updating the system:

- ALWAYS update component block first
- THEN update system rules if needed
- THEN update reference sections

NEVER:

- define rules only in reference sections
- leave component blocks outdated
- introduce behavior outside component blocks

---

# 8. Execution Phases

Execution runs in exactly two phases. Each task executes one at a time: read required files → state intended edits → apply edits → run check → report → move to next task.

No task may be skipped or reordered without an explicit decision. No new components, variants, or data may be invented during execution — existing data and approved patterns drive all decisions.

Content writing during execution phases is allowed only after:

1. Reading current page data
2. Reading `WRITING.md`
3. Reading `CONTENT.md`
4. Preserving existing page meaning
5. Avoiding fake metrics, proof, testimonials, guarantees, or vendor claims
6. Avoiding public GoHighLevel mention
7. Keeping tone operational, specific, and non-hype

---

## 8.1 Phase 1 — Anchor Component System Execution

Phase 1 is the full anchor system refactor phase. It builds and upgrades the approved component contracts, data shapes, CSS/UI support, exports, dev preview route, and initial validator/test alignment needed to make the anchor component system real.

Phase 1 does not migrate production service renderers/pages to the final mapping. Production renderer migration begins in Phase 2.

Phase 1 scope:

- build or upgrade approved component contracts
- align component types, shared types, exports, and execution-ready data shapes required by those contracts
- prepare visual and CSS support for those components
- update `/dev/component-system` as the preview and QA surface
- align validators and tests for Phase 1 component contracts after those contracts exist in runtime and preview
- do not migrate production service renderers or pages
- production renderer and page migration begins in Phase 2

Tasks execute in this order:

### Task 1: HeroSplitSection — Add visualType and prepare anchor preview support

- Add `visualType` prop to `HeroSplitSection` (replacing variant `operations` / `visibility`)
- Approved visualType values: `system-feed` | `signal-grid`
- Update `/dev/component-system` preview coverage for `system-feed` and `signal-grid`
- Run system check

### Task 2: LayerStackSection — Add stack variant and prepare anchor preview support

- Add `stack` variant to `LayerStackSection`
- `signal-map` and `interactive-stack` are deprecated
- Update `/dev/component-system` preview coverage for `stack`
- Run system check

### Task 3: ImageStorySection — Add evidence-photo / system-visual variants and prepare preview support

- Add `evidence-photo` variant: contextual or real-world visual evidence
- Add `system-visual` variant: structured screenshot, system view, or diagram-like evidence
- Deprecate `operational-photo`, `visual-panel`, `split-evidence`
- Update `/dev/component-system` preview coverage for `evidence-photo` and `system-visual`
- Run system check

### Task 4: JourneyLeakMapSection — Create component and prepare preview content

- Create `JourneyLeakMapSection` component with approved data contract
- Prepare execution-ready content: stages (3–5), each with leak, impact, optional handled/metric/status
- Add data to `smart-website-systems.ts`
- Update `/dev/component-system` preview coverage for `JourneyLeakMapSection`
- Run system check

### Task 5: ServiceBridgeSection — Create component and prepare preview content

- Create `ServiceBridgeSection` component with approved data contract
- Prepare execution-ready content: bridges (2–4), each with from/to/handoff/boundary
- Add data to `smart-website-systems.ts`
- Update `/dev/component-system` preview coverage for `ServiceBridgeSection`
- Run system check

### Task 6: ScopeSection — Prepare anchor scope data for preview

- Reshape anchor data in both data files as needed so ScopeSection preview can show grouped inclusions or service areas honestly
- Update `/dev/component-system` preview coverage for ScopeSection
- Run system check

### Task 7: Smart Website — Capability / legacy section decision

- Read `sections.types`, `sections.businessSizes`, `sections.concerns`, `sections.technologies` in current data
- Decide: keep GridCardsSection `feature-grid` for `types` if it is honest independent peer capability content — or remove/replace
- Decide keep, merge, or remove for `businessSizes`, `concerns`, `technologies`
- Apply decision in preview-facing data and dev component preview coverage
- Run system check

### Task 8: CriteriaComparisonSection — Create component and prepare preview content

- Create `CriteriaComparisonSection` component with approved data contract
- Prepare execution-ready content: criteria rows (3–6), each with label/currentApproach/systemApproach/decisionSignal
- Content framing: SEO package thinking vs authority system thinking
- Add data to `local-seo-authority.ts`
- Update `/dev/component-system` preview coverage for `CriteriaComparisonSection`
- Run system check

### Task 9: AuthoritySignalMapSection — Create component, merge why + integrations, and prepare preview content

- Create `AuthoritySignalMapSection` component with approved data contract
- Decide if `sections.why` and `sections.integrations` merge into one `AuthoritySignalMapSection` or if meaning is insufficient to express approved signal families/states
- Prepare execution-ready content: families (2–4), each with signals (2–4) each with label/state
- Add data to `local-seo-authority.ts`
- Update `/dev/component-system` preview coverage for `AuthoritySignalMapSection`
- Run system check

### Phase 1 Task — Type + Contract Alignment

Purpose:
- Keep component props, exported types, shared types, data shapes, and dev-preview adapters aligned as Phase 1 components are created or upgraded.
- Prevent component implementation from drifting into untyped or renderer-only contracts.

Rules:
- Every new or changed prop must be represented in the component's TypeScript contract.
- Export component prop/item types only when another file needs them.
- Keep types local to the component when they are component-specific.
- Move types into shared `types.ts` only when multiple approved components share the same shape.
- Renderer/data adapter types must match the prepared props passed into components.
- Do not add broad shared types just to avoid local typing.
- Do not hide contract decisions in `any`, loose records, or untyped mapping helpers.
- Do not make validators enforce a contract before the runtime component and dev preview exist.

Acceptance criteria:
- New Phase 1 components compile with explicit prop/item types.
- Updated components expose only the types that are actually reused.
- `/dev/component-system` examples use the same data shapes as the component contracts.
- No new `any` or loose catch-all props are introduced for Phase 1 component contracts.

### Phase 1 Final Task — Dev Component System Preview

- Update `/dev/component-system` (route: `src/app/dev/component-system/page.tsx`)
- Preview all Phase 1 anchor component contracts and approved variants or controls needed before production renderer migration
- Use real Smart Website and Local SEO data where possible
- No fake marketing copy
- Labels must be mechanical
- Keep DOM flat: label → component → repeated
- Separate Approved and Deprecated/fake variants visually
- Clarify through the preview that production renderer migration is deferred to Phase 2

### Phase 1 Task — Validator + Test Alignment

Purpose:
- Align validators and tests with the real Phase 1 component contracts after the components and `/dev/component-system` preview exist.
- Use validators to protect the new system without forcing imaginary contracts before implementation.

Rules:
- Validator/test updates happen after runtime component contracts and dev preview examples exist.
- Update validators only for Phase 1 contracts that are actually implemented.
- Remove validator expectations for deprecated anchor variants where the replacement exists.
- Add validation for new Phase 1 component contracts where practical.
- Validate that public data does not mention GoHighLevel.
- Validate that MetricProofSection is not used without real metric data if MetricProofSection is implemented or previewed.
- Do not redesign the entire validator/test system in Phase 1 unless a Phase 1 contract requires it.
- Do not make validators enforce Phase 2 page migrations before those migrations happen.

Acceptance criteria:
- Validators/tests reflect the Phase 1 component system that actually exists.
- Build/check commands pass or report only unrelated pre-existing issues.
- Validators support Copilot alignment instead of fighting runtime reality.

### Task 12: Phase 1 checks

- Run `npm run system:full`
- Confirm 56/56 validators pass
- Confirm build is clean
- Phase 1 approved components and controls are implemented or upgraded enough to preview in `/dev/component-system`
- `/dev/component-system` previews all Phase 1 anchor components and approved variants/controls needed before production renderer migration
- Production renderer migration is explicitly deferred to Phase 2
- Phase 1 component contracts, exported types, and dev-preview data shapes are aligned
- Validators/tests are updated only for Phase 1 contracts that exist in runtime
- No validator enforces Phase 2 production renderer migration before Phase 2 begins

---

## 8.2 Phase 2 — Supporting Pages, Remaining Tier-1, Visual Hardening

Goal: Migrate Smart Website Systems and Local SEO Authority production renderers to the approved anchor mapping after Phase 1 component and preview stability, then migrate remaining Tier-1 pages and supporting service pages, harden validators and tests, and apply visual system hardening.

Tasks execute in this order:

### Phase 2 Task — Anchor Renderer Migration

Purpose:
- Migrate Smart Website Systems and Local SEO Authority from current production renderer structure to the approved component mapping after Phase 1 components and `/dev/component-system` preview are stable.
- Keep production page migration separate from component creation so UI contracts can be reviewed first.

Scope:
- Smart Website Systems renderer migration
- Local SEO Authority renderer migration
- approved anchor data reshaping required by the mapped components
- removal of anchor-only deprecated component/variant usage after replacements exist

Rules:
- Do not start anchor renderer migration until Phase 1 component contracts and `/dev/component-system` preview are stable.
- Use existing data as the first source.
- Write or reshape content only under the writing/content rules in this document and core docs.
- Do not invent metrics, proof, testimonials, guarantees, rankings, or unsupported claims.
- Do not place RelatedContentSection before PrimaryCTASection.

Smart Website final section order:

1. HeroSplitSection visualType `system-feed`
2. JourneyLeakMapSection
3. BeforeAfterSection `split-panel`
4. ServiceBridgeSection
5. ScopeSection
6. GridCardsSection `feature-grid` only for honest capabilities (if retained from Task 7)
7. LayerStackSection `stack`
8. ProofStorySection `before-change-after`
9. ImageStorySection `evidence-photo` or `system-visual`
10. ProcessStepsSection `timeline`
11. QualificationSection `fit-filter`
12. AccordionFAQSection `single-column`
13. PrimaryCTASection `soft-panel`

Local SEO final section order:

1. HeroSplitSection visualType `signal-grid`
2. CriteriaComparisonSection
3. AuthoritySignalMapSection
4. BeforeAfterSection `split-panel`
5. GridCardsSection `signal-board` for misconceptions only when badge/status data is structurally present
6. ScopeSection
7. ProcessStepsSection `timeline`
8. ProofStorySection `before-change-after`
9. QualificationSection `fit-filter`
10. AccordionFAQSection `single-column`
11. PrimaryCTASection `soft-panel`

Apply final renderer reorder, verify no orphan sections remain, run system check.

### Task 1: Remaining Tier-1 page migration

Pages: AI Lead Handling, CRM Automation, Reputation Review, Revenue Growth

For each page:
- Read current renderer and data
- Read approved Tier-1 mapping from §3.5A
- Apply migration following approved section order
- Use only components that exist in runtime at time of execution
- If a required component is missing, create it in the same task before migrating
- Run system check after each page

### Task 2: Remaining approved components

Create these components (not yet built):

- `ResponseRoutingMapSection` (AI Lead Handling unique component)
- `PipelineVisibilityMapSection` (CRM Automation unique component)
- `ReviewTrustLoopSection` (Reputation Review unique component)
- `OpportunityRecoveryMapSection` (Revenue Growth unique component)
- `ScenarioMapSection` (variants: primary-scenario, environment-map)
- `CapabilityMatrixSection` (variant: matrix)
- `CaseStudyNarrativeSection` (variants: narrative-flow, proof-breakdown)
- `DecisionFrameworkSection` (variants: principle-steps, checklist-framework)
- `MetricProofSection`
- `ObjectionResolutionSection`

For each component: create component file, add to barrel export, add to dev visualizer, align data contract with approved component block.

### Task 3: Supporting service page migration

Pages (12):
- WordPress Development
- Elementor / Bricks Builder / Divi 5
- WooCommerce / Ecommerce
- Website Redesign System Rebuild
- System Migration / Platform Consolidation
- Service Pages vs One Generic Services Page
- Unified Communication System
- Missed Call Recovery System
- Lead Reactivation System
- Website CRM Integration vs Manual Lead Handling
- Conversion Layer
- Conversion Funnel System vs Landing Page Development

For each page: read current renderer and data, read approved supporting service mapping from §3.5B, apply migration, run system check.

### Task 4: Validator and test hardening

- Phase 2 may harden validators/tests for production renderer and supporting page migrations, but Phase 1 owns validator/test alignment for the Phase 1 component contracts it creates or upgrades.
- Review validators and tests that need additional hardening after anchor renderer migration and supporting page migration are stable.
- Update validators that reference outdated component names or contracts introduced by production renderer and supporting page migration.
- Align tests with those later migration changes.
- Run `npm run system:full` after all changes

### Task 5: Visual system hardening

- Audit all pages for visual system compliance against §4 rules
- Check: no repeated equal card grids in top-third, no decorative visuals, no inline styles
- Fix violations found
- Run system check

### Task 6: Compatibility cleanup

- Remove any remaining references to deprecated component names: FitCheckSection, FrameworkStepsSection
- Remove any remaining deprecated variant usage: scorecard, decision-cards, two-column, cycle, metric-story, split-card, signal-map, interactive-stack, operational-photo, visual-panel, split-evidence, operations/visibility as variants
- Confirm no fallback or legacy support code remains

### Task 7: Phase 2 checks

- Run `npm run system:full`
- Confirm all validators pass
- Confirm build is clean
- Confirm dev visualizer reflects all components
- Smart Website Systems and Local SEO Authority production renderers follow the approved anchor mapping
- Remaining Tier-1 and supporting page migrations happen only after anchor renderer migration is stable
- Confirm no deprecated variants remain in any renderer
- Confirm all Tier-1 and supporting service page renderers match approved mappings

---

# 9. Implementation Gap Tracking

This section tracks known code / contract mismatches. Verify each item against current code before acting. Validators must NOT read this section.

Known gaps (verify before executing):

- LayerStackSection: CSS class mismatch (`layer-stack__index` vs `layer-stack__card-index`)
- GridCardsSection: `signal-board` requires badge/status data — not currently enforced in code
- GridCardsSection: `.grid-cards--signal-board .grid-card[data-status='risk']` does not match JSX class `grid-cards__item`; no `data-status` emitted
- ScopeSection: blank item strings should be validated and rejected
- RelatedContentSection: error references `groups` instead of `items`
- PrimaryCTASection: any CTASection rename is a parked future migration only — keep current CTA ownership

If mismatch exists:
→ fix in code
→ this document remains authority

---

# 10. Execution Reference Appendices

## 10.1 Execution Checklist

Use this appendix during future scoped migration and contract enforcement work.

System execution flow:

DATA FILE → VALIDATOR → RENDERER → COMPONENT

Checklist:

- use stable keys for repeatable items
- require explicit `id` fields on repeatable items where the contract supports them
- guard empty states before rendering
- do not parse inside components
- do not add silent defaults in validators or components
- call validator before render when a validator exists
- keep renderer mapping explicit and minimal
- fix bad data in data files, not in components
- apply migration one page or one component unit at a time
- run visual and functional checks after each migration unit

Interpretation notes:

- stable keys are mandatory, but use real ids when the contract already defines them
- missing required data should fail or guard rather than auto-heal
- disallowed data should be treated as a contract error
- unused data should trigger review rather than become implicit behavior
- no parsing examples such as splitting badge strings inside UI components
- no fallback UI that hides contract failures

Page migration workflow:

1. Identify the page type and section purpose.
2. Match the pattern before choosing a component.
3. Define or verify the required data contract.
4. Validate data before render.
5. Update renderer mapping without adding UI-layer logic.
6. Check visual output and functional behavior.
7. Remove old usage only after the new slice is stable.

CTA conflict handling:

- keep PrimaryCTASection as the current CTA rendering owner
- do not adopt an immediate CTASection rename from older audit notes
- treat any CTASection rename as a future repo-wide migration only if docs, code, validators, and tests are updated together

## 10.2 AI / Copilot Execution Rules

Use these rules to reduce drift during future Copilot planning and scoped execution.

- define intent before editing
- identify page type and pattern before choosing a component
- understand MindWP business positioning before touching UI
- do not solve design problems by adding generic cards
- ask for a scoped execution task before changing runtime files
- explain why a component change is needed before making broad changes
- prefer the smallest valid change that improves pattern integrity
- do not invent new data fields unless justified by pattern, UI clarity, and business meaning
- use existing data as the first source before adding new fields
- report content gaps instead of inventing copy
- do not invent staged leaks, system handoffs, criteria rows, signal states, proof, metrics, testimonials, guarantees, or capabilities
- list required data additions when changing contracts
- variants must define required, optional, and disallowed fields
- missing required data must fail or guard
- disallowed data is a contract error
- unused data is a warning or review signal
- avoid decorative, animation-first, or novelty-first output
- do not let a summary section replace detailed component guidance
- when docs and code conflict, verify code and then update docs deliberately
- execute Phase 1 tasks in the defined order, one at a time
- read current page data and authority docs before writing any new content
- do not invent content to satisfy component contracts — report the gap instead

Operating principle:

- clear authority
- clear goal
- clear scope
- clear success condition
- minimal hard restrictions outside real ownership boundaries


## 10.3 Migration Strategy

- migrate components one by one during scoped execution tasks
- Phase 1 handles component creation, component upgrades, visual support, and `/dev/component-system` preview readiness; Phase 2 begins production renderer migration with the Smart Website and Local SEO anchors before remaining Tier-1 and supporting page migration
- verify against real data
- update contracts
- align validators and tests after contract changes, not before
- keep higher-level governance docs intact
- do not treat backlog notes as implementation truth until verified against current code
- run system:full and build after each phase and make sure they both are clean.

---

---

# SYSTEM INTENT (IMPORTANT)

This system exists to:

- build real business websites
- communicate clearly
- guide users toward decisions

It is NOT:

- a rigid design system during planning
- a UI constraint engine that blocks valid business decisions
- a blocker to implementation

It IS strict during implementation once a component contract, data shape, CTA owner, graph owner, SEO owner, or CSS layer has been chosen.

If a situation is unclear:

→ prioritize clarity
→ prioritize business intent
→ then align with system rules

System should feel:

- structured
- intelligent
- adaptive

NOT:

- rigid
- over-restricted
- fragile

# FINAL RULE
If something is not defined in:

- Component block (Section 5)
- Visual system (Section 4)
- System rules (Section 6)

→ It does not exist in the approved planning system.