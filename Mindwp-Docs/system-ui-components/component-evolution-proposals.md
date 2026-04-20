# COMPONENT EVOLUTION GUIDE

> Planning rules for future section and component changes.
> This file is not runtime authority. It defines when a new component is justified and which candidate patterns are approved for future implementation.

---

## USE THIS DOC

Use this file when deciding whether to keep an existing section, add a variant, or introduce a new reusable component.

---

## DEFAULT RULE

Default action is `NO CHANGE`.

The system should prefer:

1. reuse an existing component
2. add a variant to an existing component family
3. create a new component only if the first two options fail

---

## NEW COMPONENT GATE

A new component is allowed only when all three are true:

1. the pattern appears in three or more meaningful surfaces
2. the pattern has one stable semantic job
3. existing components or variants cannot express it cleanly

If any condition fails, do not create the component.

---

## SEMANTIC BUCKETS

Use these buckets before proposing a new section:

- problem framing
- capability scope
- process
- scenario-response
- qualification narrowing
- strategic bridge
- proof
- decision fit

If the proposed component does not own one of these clearly, it is probably too page-specific.

---

## CURRENTLY APPROVED CANDIDATE DIRECTIONS

These are approved future directions. They are not live runtime components yet.

### SignalResponseSection

Use case:

- repeated sections where a page explains a trigger, signal, or operational symptom and then pairs it with the correct response

Best-fit surfaces:

- CRM and workflow-heavy service pages
- migration/consolidation pages
- communication and missed-call pages

Purpose:

- replace flat symptom/use-case grids when the real job is signal-to-response explanation

### OutcomeTimelineSection

Use case:

- pages that show a sequential process and also need stage-by-stage outputs or deliverables

Best-fit surfaces:

- implementation pages
- review/reputation workflows
- funnel and booking flows

Purpose:

- replace `process steps + second grid of outputs` when both belong to one timeline story

### DecisionFitSection

Use case:

- qualification blocks that are purely strong-fit vs not-fit decisions

Best-fit surfaces:

- service pages that currently end with a comparison CTA ladder followed by a fit split

Purpose:

- replace one-off qualification blocks when a deterministic decision-fit pattern is enough

---

## DEFERRED DIRECTIONS

### WorkflowOrchestrationSection

Status: deferred

Reason:

- current pages show process, scenario-response, and capability layers
- current data does not yet prove one strong orchestration pattern repeated often enough to justify a reusable section

Do not recommend or implement this pattern unless the data changes materially.

---

## UPGRADE RULES

### Grid vs Narrative Rule

- grid = parallel independent items
- narrative = sequential explanation or progression

Do not move grid content into narrative layouts unless the content is intentionally rewritten to behave like narrative content.

### Proof Rule

Use a proof-specific section only when the data clearly expresses:

1. before state
2. intervention or build
3. after state or result

If those are not explicit, keep the current proof structure instead of forcing transformation language.

### Comparison Merge Rule

Merge comparison and proof only when the proof directly validates the comparison being shown.

Otherwise keep them separate.

---

## CHANGE SAFETY RULES

- A new reusable component must not require implicit data inference to understand its content.
- A section family should not absorb multiple unrelated semantic jobs just because the visuals look similar.
- Page-level rewrites should happen only when the data is intentionally reshaped to fit the target component contract.

---

## REFERENCE FILES

- `component-audit.md`: current live component system overview
- `component-final-apis.md`: approved future API shapes
- `component-mapping.md`: page-level keep/replace guidance