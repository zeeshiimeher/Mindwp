# COMPONENT MAPPING GUIDE

> Deterministic rules for deciding whether a page should keep its current section composition, adopt a variant, or move to a new component.
> This guide is intentionally conservative.

---

## USE THIS DOC

Use this file when reviewing service renderer composition or deciding whether a repeated page pattern justifies a new reusable section.

---

## DEFAULT RULE

Default action is `KEEP AS-IS`.

Only replace a component when there is a real semantic mismatch between the content and the component family currently rendering it.

---

## DECISION LEVELS

Use exactly one of these labels when evaluating a section or page:

- `keep as-is`
- `replace only after data rewrite`
- `variant switch only after data rewrite`

---

## CORE MAPPING RULES

### Component Creation Rule

A new reusable component is justified only when:

1. the pattern appears in three or more meaningful service surfaces
2. the pattern has one stable semantic meaning
3. existing components or variants cannot express it cleanly

### Grid vs Narrative Rule

- grid = parallel independent items
- narrative = explanatory progression or sequence

Do not move grid content into a narrative layout unless the content is intentionally rewritten to behave like narrative content.

### Proof Rule

Use a transformation-style proof section only when all three are explicit:

1. before state
2. intervention or build
3. after state or result

If those are not explicit, keep the existing proof structure.

### Comparison Merge Rule

Merge comparison and proof only when the proof directly validates the comparison being shown.

Otherwise keep them separate.

---

## SEMANTIC BUCKETS

Treat these as distinct jobs even when the layouts look similar:

- problem framing
- capability scope
- process
- scenario-response
- qualification narrowing
- strategic bridge
- proof

This is why broad replacement passes are usually wrong.

---

## PRIORITY PAGES FOR FUTURE EVOLUTION

These pages are the strongest candidates for future section-system upgrades because they are both commercially important and structurally representative:

1. Smart Website Systems
2. AI Lead Handling
3. CRM Automation
4. Booking Scheduling System
5. Conversion Funnel System
6. Local SEO Authority
7. WordPress Development

---

## CURRENT SYSTEM-LEVEL READING

- Keep the current component mapping by default.
- Do not run broad replacement passes across service renderers.
- Permit only a small number of future additions when the data shape clearly supports them.

---

## APPROVED FUTURE FITS

### SignalResponseSection

Best use:

- workflow-heavy scenario-response surfaces
- trigger-to-response explanations

Adoption level:

- replace only after data rewrite

### OutcomeTimelineSection

Best use:

- process sections that also need explicit per-stage outputs

Adoption level:

- replace only after data rewrite

### DecisionFitSection

Best use:

- pure strong-fit versus not-fit qualification surfaces

Adoption level:

- variant switch only after data rewrite or replace only after data rewrite, depending on the current section mix

---

## DEFERRED FITS

### WorkflowOrchestrationSection

Status: deferred

Do not recommend or implement it until a stronger repeated orchestration pattern exists in actual page data.

---

## WORKING PRINCIPLE

If two sections look similar but perform different semantic jobs, keep them separate.

The mapping system should become more conservative as the content model becomes clearer, not less.

---

## RELATED FILES

- `component-audit.md`: live component system overview
- `component-evolution-proposals.md`: proposal gate and future-direction rules
- `component-final-apis.md`: approved future API shapes