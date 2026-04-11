# Component Mapping

This document is a deterministic mapping guide based on three checks done together:

1. service data content
2. current renderer JSX
3. current reusable section/component inventory

It is intentionally conservative.

## Default Rule

Default action is NO CHANGE.

Only replace components when semantic mismatch exists.

## Component Creation Rule

A new component is allowed only if:

- the pattern appears in 3 or more service pages
- it cannot be handled by existing components or existing layout variants
- it has a stable semantic meaning rather than a page-specific presentation need

If any of those conditions fails, do not create the component.

## Grid vs Narrative Rule

- grid = parallel independent items
- alternating = narrative or explanatory content

Do not move grid content into narrative layouts unless the content itself is rewritten into a narrative structure.

## Proof Rule

Use `TransformationProofSection` only when all three exist:

1. before state
2. what we built
3. after/result

Otherwise keep the existing proof section.

## Critical Usage Warning - TransformationProofSection

`TransformationProofSection` must be used with strict constraints.

This is not a generic proof component.

Use only when all of the following are explicitly present in data:

1. before state with a clear problem condition
2. build phase showing what was implemented
3. after state with a measurable or observable result

Do not use when:

- proof is a flat list of cards
- only before and after comparison exists
- content is capability-based rather than transformation-based
- build phase is weak, implied, or missing

If these conditions are not met:

-> keep using existing sections such as `ServiceSpectrumCardsSection`

## Comparison Merge Rule

Use `ComparisonEvidenceBand` only when proof directly supports comparison.

Otherwise keep comparison and proof as separate sections.

## Orchestration Rule

`WorkflowOrchestrationSection` is deferred.

Do not recommend it or use it in current mapping decisions.

Status:

- Deferred - pattern not sufficiently proven in current data

Reason:

- current pages use process steps
- current pages use scenario-response
- current pages use parallel capability layers
- current pages do not show a repeated true orchestration flow strongly enough to justify a new section

## QA Decision Levels

Every page-level recommendation in this file should be read in one of these three levels:

- keep as-is: current data semantics and current JSX already match
- replace only after data rewrite: a new component could be stronger, but only if the section content is intentionally reshaped to fit that component's contract
- variant switch only after data rewrite: a current component family is still correct, but the internal grouping, emphasis, or balance would need content restructuring before a different layout or variant becomes valid

Current QA result:

- almost all pages are keep as-is
- one reusable upgrade is strong enough now: `TransformationProofSection`
- no current variant switch is justified strongly enough to recommend immediately across service pages

## Why The Picture Changed After Reading Data Files

The mapping became more conservative after reading the data files for one reason: component names alone were overstating replaceability.

The data showed that many visually similar sections are actually doing different semantic jobs such as:

- qualification narrowing
- scenario-response
- governance
- capability scope
- strategic bridge
- proof

That means the system should get stricter, not broader.

## Tiering For Design Upgrade Work

Service pages are the top execution domain in planning, and these pages also sit in the repo's highest conversion-priority group. For design and component upgrade work, the practical tier 1 set should be:

1. Smart Website Systems
2. AI Lead Handling
3. CRM Automation
4. Booking Scheduling System
5. Conversion Funnel System
6. Local SEO Authority
7. Marketing Automation Setup
8. WordPress Development

These are tier 1 because they are both commercially central and structurally representative of the main service-system story: attract demand, capture response, route work, follow up, and support delivery.

All other service pages remain important, but they are lower priority for section-system evolution.

## Self-QA Outcome

The self-QA pass reduced the scope further:

- keep current component mapping by default
- do not recommend broad replacements
- confirm only one new semantic section pattern strongly enough to document now
- allow future section data rewrites only when they are intentional and tied to a proven component contract

### 1. TransformationProofSection

Why this should exist:

- multiple tier 1 pages use proof as a three-stage commercial transformation story
- the content pattern is not just before/after comparison and not just a card spectrum
- the center state, what we built, is the commercial hinge and deserves visual emphasis

What it should own:

- left panel: before state
- center featured panel: what we built
- right panel: after state
- optional result chips or micro-metrics
- directional flow between stages so the proof reads as a transformation, not three equal cards

Why it is unique against current components:

- `ComparisonSection` only handles before vs after lists
- `ComparisonEvidenceBand` combines comparison plus evidence but not a three-act implementation story
- `ServiceSpectrumCardsSection` treats all cards as a capability group, not a narrative proof arc

Best immediate tier 1 targets:

- Smart Website Systems proof
- AI Lead Handling proof
- CRM Automation proof
- Booking Scheduling proof
- Local SEO Authority proof
- WordPress Development proof

Data rewrite note:

- this component becomes valid when proof content is explicitly shaped as `before -> what we built -> after`
- if a page currently stores proof as a generic `cards[]` list, the data should be rewritten to match the transformation contract instead of forcing the component to infer the story from loose cards

## Deferred Patterns

### WorkflowOrchestrationSection

Deferred - pattern not sufficiently proven in current data.

Do not treat this as an active recommendation.

## Content Roles Used In This File

- problem framing: why the page exists and what is broken now
- capability scope: what layers, services, or functional coverage are included
- process: how the work is delivered or implemented
- scenario-response: trigger, condition, or example followed by action or outcome
- qualification narrowing: which business type, use case, or situation the page best fits
- strategic bridge: how the page connects into broader business outcomes or systems
- proof: before state, intervention, and result or evidence
- qualification: strong-fit vs not-fit decision block

---

## Tier 1 Pages

## 1. Smart Website Systems

### Current Components
`ServiceHeroSection` -> `SectionWrapper` with `IconBenefitCard` grid -> `ComparisonSection` -> `ChecklistCardsSection` -> `SectionWrapper` with `IconBenefitCard` grid -> `ServiceSpectrumCardsSection` -> `StackedFeatureListSection` -> optional `SectionWrapper` business-size grid -> `SmartCTA` -> `ProcessStepsSection` -> optional concerns section -> `TechnologyCardsSection` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> comparison -> included scope -> qualification narrowing -> connected system layers -> strategic bridge -> scale-fit guidance -> process -> concerns -> technology guidance -> qualification

### Mapping Decision
Keep the current mapping for now.

Reason: the page already separates value loss, comparison, included baseline, fit by business type, core system layers, broader business effect, technology guidance, and qualification.

Why keep:

- `coreLayer` represents parallel capability layers, not narrative flow
- `comparison` stands on its own and is not directly supported by proof in the current renderer
- `types`, `included`, `technology`, and `qualification` are distinct semantic jobs, not merge candidates

### Upgrade Direction
- optional: `TransformationProofSection` only if proof is brought into the renderer and rewritten explicitly as before -> build -> after

---

## 2. AI Lead Handling

### Current Components
`ServiceHeroSection` -> `ProblemCardsSection` -> `FeatureChecklistCardsSection` -> `ProcessStepsSection` -> `SectionWrapper` with `WorkflowStepCard` grid -> `ServiceSpectrumCardsSection` (use cases) -> `ComparisonSection` -> `ServiceSpectrumCardsSection` (proof) -> `SmartCTA` -> `StackedFeatureListSection` -> `ChecklistCardsSection` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> capability scope -> process -> scenario-response -> qualification narrowing -> comparison -> proof -> strategic bridge -> included scope -> qualification

### Mapping Decision
Keep the current mapping.

Reason: the existing page structure is semantically strong. The main opportunity is not replacing sections blindly, but giving the system-flow and proof sections stronger first-class owners later.

Why keep:

- `processSection` is process, not scenario-response
- `workflowExamples` is scenario-response, not process
- `useCasesSection` is qualification narrowing, not narrative explanation
- `positioning` is strategic bridge, not proof

### Upgrade Direction
- future fit: move proof from flat `ServiceSpectrumCardsSection` to `TransformationProofSection`
- this is valid only if proof data is rewritten as explicit before/build/after stages rather than left as generic peer cards
- strength: strong

---

## 3. CRM Automation

### Current Components
`ServiceHeroSection` -> `OperationalShiftCardsSection` -> `SectionWrapper` with `IconTextCard` grid -> `SectionWrapper` with `IconListCard` grid -> `SectionWrapper` with `WorkflowStepCard` grid -> `SectionWrapper` text block -> `StackedFeatureListSection` -> `ComparisonSection` -> `ServiceSpectrumCardsSection` (proof) -> `SmartCTA` -> `SectionWrapper` qualification block

### Content Check
Problem framing -> qualification narrowing -> capability scope -> scenario-response -> governance/process guidance -> strategic bridge -> comparison -> proof -> qualification

### Mapping Decision
Keep the current mapping, but mark this as one of the strongest upgrade candidates in tier 1.

Reason: this renderer contains real semantic separation and one clear missing proof pattern.

Why keep:

- `useCasesSection` is qualification narrowing, not proof or process
- `featuresSection` is capability scope, not comparison
- `workflowsSection` is trigger/action scenario-response and already has the right structural owner
- `governance` is operational control text, not checklist content by default
- `connection` is strategic bridge, not workflow section

### Upgrade Direction
- proof is the strongest upgrade candidate in this page
- use `TransformationProofSection` only after data is rewritten into explicit: before -> build -> after
- do not migrate current proof blindly
- current `cards[]` structure is not compatible
- this upgrade requires:
	1. data restructuring
	2. then renderer replacement
- strength: highest confidence upgrade in system

---

## 4. Booking Scheduling System

### Current Components
`ServiceHeroSection` -> `ProblemCardsSection` -> `ServiceSpectrumCardsSection` (booking layer) -> `StackedFeatureListSection` -> `ComparisonSection` -> `ServiceSpectrumCardsSection` (proof) -> `SmartCTA` -> `ProcessStepsSection` -> `FeatureChecklistCardsSection` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> capability scope -> strategic bridge -> comparison -> proof -> process -> capability scope -> qualification

### Mapping Decision
Keep the current mapping.

Reason: the content is already well aligned. The real upgrade opportunity is to give the booking-layer system flow more operating logic and give proof a transformation-specific component.

Why keep:

- `bookingLayer` is parallel capability architecture, not orchestration
- `positioning` is strategic bridge, not a capability grid replacement candidate
- `processSection` is implementation method, not booking-layer content
- `capabilitySection` is included scope, not comparison or qualification

### Upgrade Direction
- future fit: proof -> `TransformationProofSection`
- proof upgrade here is replace only after data rewrite
- strength: valid

---

## 5. Conversion Funnel System

### Current Components
`ServiceHeroSection` -> `ProblemCardsSection` -> `SectionWrapper` with `ProblemSolutionSplitCard` grid -> `SectionWrapper` with `BeforeAfterMetricCard` grid -> `ProcessStepsSection` -> `SectionWrapper` with `CenteredFeatureCard` grid -> `ComparisonSection` -> `ServiceSpectrumCardsSection` (proof) -> `SmartCTA` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> diagnostic scope -> proof-of-impact framing -> process -> capability scope -> comparison -> proof -> qualification

### Mapping Decision
Keep the current mapping.

Reason: this page is diagnosis-first and already has good structural logic. It is tier 1 because it is commercially central, but not because it urgently needs component replacement.

Why keep:

- `funnelBreakpoints` is diagnostic split content, not a generic narrative row pattern
- `comparisonMetrics` is quantified proof framing, not generic proof cards
- `processSection` is method sequence, not transformation proof
- `funnelLevers` is capability scope, not process

### Upgrade Direction
No current replacement recommended.

---

## 6. Local SEO Authority

### Current Components
`ServiceHeroSection` -> `ProblemCardsSection` -> `StackedFeatureListSection` -> `ServiceSpectrumCardsSection` -> `ComparisonSection` -> `ServiceSpectrumCardsSection` -> `SmartCTA` -> `ProcessStepsSection` -> `FeatureChecklistCardsSection` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> strategic bridge -> capability scope -> comparison -> proof -> process -> included scope -> qualification

### Mapping Decision
Keep the current mapping.

Reason: the page already carries the right sequence from myth correction into approach, integrated visibility layers, proof, working scope, and qualification.

Why keep:

- `misconceptions` is problem framing with myth correction, not comparison
- `why` is strategic bridge, not grid replacement material
- `integrations` is parallel capability scope, not narrative or process
- `scopeSection` is included scope, not qualification

### Upgrade Direction
- strongest future upgrade: proof -> `TransformationProofSection`
- avoid changing the `why` and `integrations` sections because the current content is already structurally clear
- proof upgrade here is replace only after data rewrite
- strength: valid

---

## 7. Marketing Automation Setup

### Current Components
`ServiceHeroSection` -> `ProblemCardsSection` -> `SectionWrapper` with `WorkflowStepCard` grid -> `SectionWrapper` with `AuditChecklistCard` grid -> `SectionWrapper` with `CenteredFeatureCard` grid -> `ProcessStepsSection` -> `ComparisonSection` -> `ServiceSpectrumCardsSection` -> `SmartCTA` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> scenario-response -> governance guidance -> capability scope -> process -> comparison -> proof -> qualification

### Mapping Decision
Keep the current mapping.

Reason: the page is semantically correct now and does not justify a structural replacement beyond a proof-specific rewrite.

Why keep:

- `automationExamples` is scenario-response, not process
- `governanceAreas` is control-layer audit content, not proof
- `automationLayers` is parallel capability scope, not narrative flow
- `processSection` is setup methodology, not scenario-response

### Upgrade Direction
No current replacement recommended.

---

## 8. WordPress Development

### Current Components
`ServiceHeroSection` -> `ProblemCardsSection` -> `ServiceSpectrumCardsSection` -> `StackedFeatureListSection` -> `ProcessStepsSection` -> `FeatureChecklistCardsSection` -> `ComparisonSection` -> `ServiceSpectrumCardsSection` -> `SmartCTA` -> `DualToneChecklistComparisonSection` -> `FAQSection`

### Content Check
Problem framing -> qualification narrowing -> strategic bridge -> process -> capability scope -> comparison -> proof -> qualification

### Mapping Decision
Keep the current mapping.

Reason: the current renderer reflects the actual content logic well. The best improvement here is proof presentation, not broad section replacement.

Why keep:

- `implementationScope` is qualification narrowing, not outcome timeline
- `principles` is strategic bridge, not capability scope
- `processSection` is methodology, not proof
- `capabilitySection` is included implementation scope, not comparison

### Upgrade Direction
- future fit: proof -> `TransformationProofSection`
- proof upgrade here is replace only after data rewrite
- strength: valid

---

## Tier 2 Pages

These pages stay below tier 1 for component-system upgrade work. They may still receive page-level polish later, but they should not drive the next component-creation decisions.

## 9. System Migration Platform Consolidation

### Mapping Decision
Keep current mapping.

Why keep:

- `migrationSignals` is qualification narrowing, not proof
- `riskAreas` is cautionary risk framing, not narrative explanation
- `consolidationTargets` is capability scope, not process

No current replacement recommended.

---

## 10. Website Redesign System Rebuild

### Mapping Decision
Keep current mapping.

Why keep:

- structural signals are diagnosis, not process
- rebuild scenarios are qualification narrowing, not proof
- implementation layers are capability scope, not narrative

No current replacement recommended.

---

## 11. Unified Communication System

### Mapping Decision
Keep current mapping.

Why keep:

- channel signals, risks, workflows, and operating layers are distinct roles
- current data does not prove a reusable orchestration section

No current replacement recommended.

---

## 12. Growth Revenue Systems

### Mapping Decision
Keep current mapping.

Why keep:

- audit areas are diagnosis, not capability marketing
- WordPress context is explanatory support, not proof
- deliverables are outcome scope, not process

No current replacement recommended.

---

## 13. Funnel Landing Page Development

### Mapping Decision
Keep current mapping.

Why keep:

- `pageTypes` is scope definition, not comparison
- `implementationAlerts` is cautionary content, not qualification split
- `implementationPaths` is conversion-path scope, not process

No current replacement recommended.

---

## 14. Lead Reactivation System

### Mapping Decision
Keep current mapping.

Why keep:

- scenarios, audit areas, and entry points are distinct roles
- scenario-led content should not be merged into process or proof

No current replacement recommended.

---

## 15. Reputation Review Systems

### Mapping Decision
Keep current mapping.

Why keep:

- review system layers are capability scope
- positioning is strategic bridge
- capability section is included scope

No current replacement recommended.

---

## 16. Review Automation System

### Mapping Decision
Keep current mapping.

Why keep:

- workflow layer is capability scope, not process methodology
- positioning and capability sections already serve different roles clearly

No current replacement recommended.

---

## 17. Missed Call Recovery System

### Mapping Decision
Keep current mapping.

Why keep:

- signals are qualification narrowing, not capability scope
- workflow examples are scenario-response, not process
- recovery layer is parallel system scope, not orchestration

No current replacement recommended.

---

## 18. Bricks Builder

### Mapping Decision
Keep current mapping.

Why keep:

- builder pages are compact implementation pages
- current sections already separate rationale, process, and capability scope

No current replacement recommended.

---

## 19. Elementor

### Mapping Decision
Keep current mapping.

Why keep:

- current sections already separate rationale, process, and capability scope

No current replacement recommended.

---

## 20. Divi 5

### Mapping Decision
Keep current mapping.

Why keep:

- current sections already separate implementation principles, capability scope, rationale, and process

No current replacement recommended.

---

## 21. WooCommerce

### Mapping Decision
Keep current mapping.

Why keep:

- this is a lean implementation page with distinct roles already covered
- no stable missing semantic section pattern is exposed here

No current replacement recommended.

---

## Summary

The recommendation is now more precise than before.

- do not run a broad replacement pass across service renderers
- prioritize tier 1 pages first
- create `TransformationProofSection` now
- keep `WorkflowOrchestrationSection` deferred because the pattern is not sufficiently proven in current data
- use the proof component first on tier 1 pages where flat spectrum cards are carrying before -> intervention -> after narratives
- treat those proof upgrades as content rewrites plus renderer swaps, not renderer swaps alone
- do not recommend any service-wide variant change until a section's data is rewritten to justify that layout structurally

This is the main change after the full architecture alignment pass: most pages should remain unchanged, and only one new semantic pattern is currently proven strongly enough to justify a new reusable component.
