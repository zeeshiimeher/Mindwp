# MindWP System Hard Reset — Operating Manual

> Temporary operating context for active hard-reset work.
> Stable business, content, conversion, graph, design, and system rules live in `docs/core/*`.
> Old dependencies and delete gates live in `docs/Planning/Legacy-dependency-map.md`.

---

## 1. Current State

- Branch: `ui-hard-reset`.
- Rebuilt baseline-clean: Homepage, Smart Website Systems, Local SEO Authority.
- Base components operational: `SectionFrame`, `HeroFrame`, `DecisionPanel`, `FAQSection`, `Accordion`, `Tabs`, `RelatedSection`, `InlineText`, `SignalDot`, `StatusBadge`.
- `CaseStudyTemplate` no longer owns related or final CTA rendering, but still depends on old visual sections.
- `PrimaryCTASection` remains quarantine delete-later for old consumers only.
- `src/components/reusable/` remains quarantine delete-later for unrebuilt domains.
- Next priority: AI Lead Handling, then industry category, remaining features, case study, resource, and blog templates.

---

## 2. Active Build Rules

Use stable docs first:

- Business and boundaries: `docs/core/FOUNDATION.md`
- Public writing: `docs/core/WRITING.md`
- Page roles: `docs/core/CONTENT.md`
- CTA behavior: `docs/core/CONVERSION.md`
- Related content: `docs/core/GRAPH.md`
- Visual system: `docs/core/DESIGN.md`
- Runtime/control-plane locks: `docs/core/SYSTEM-ARCHITECTURE.md`, `docs/core/SYSTEM-RULES.md`

Use these for new/rebuilt pages:

- `SectionFrame` for normal section shells.
- `HeroFrame` for hero section shells.
- `DecisionPanel` for final conversion sections.
- `FAQSection` for FAQ sections.
- `RelatedSection` through config/wrapper injection only.
- `Accordion` and `Tabs` as primitives only.
- `InlineText` through `[[muted:...]]` title markers.

Do not use in new/rebuilt files:

- `src/components/reusable/` or `src/components/sections/`.
- Old `.rd-*`, `l-section`, `l-container`, `btn-primary`, or `btn-outline` classes.
- Raw hex or `rgba()` outside `tokens.css`.
- `titleMuted` or `headingMuted` props.
- Hardcoded `/contact` or hardcoded CTA labels.
- `PrimaryCTASection`.

New components go only in:

- `src/components/layout`
- `src/components/primitives`
- `src/components/conversion`
- `src/components/navigation`
- `src/components/content`

After each rebuild, remove dead CSS, dead imports, dead conditionals, and orphan files. Do not leave parallel old/new contracts.

---

## 3. Baseline Page Contracts

Homepage:

- Uses `HeroFrame`, section bodies wrapped by `SectionFrame`, `FAQSection`, and `DecisionPanel`.
- CSS: `src/styles/pages/home.css`.

Smart Website Systems:

- Uses new-system layout/conversion/content components and page-specific visual sections.
- CSS: `src/styles/services/smart-website.css`.

Local SEO Authority:

- Uses new-system layout/conversion/content components and page-specific visual sections.
- CSS: `src/styles/services/local-seo.css`.

For all future rebuilds, data shapes must be semantic and section-specific. Avoid generic `items/cards/steps` when a richer name describes the business meaning.

---

## 4. Future Rebuild Contracts

Features:

- Explain one capability inside a parent system.
- Show handoff logic and route back to the parent system.
- CSS: `src/styles/features/features-base.css`.

Industries:

- Category and detail pages must stay vertical-specific.
- Detail pages must not read like reusable service pages.
- CSS: `src/styles/industries/category.css`, `src/styles/industries/detail.css`.

Case studies:

- Proof assets, not service pages.
- `CaseStudyTemplate` still needs full visual rebuild.
- CSS: `src/styles/case-studies/case-study.css`.

Resources:

- Decision-support pages, not BOFU service pages.
- CTA should stay soft and contextual.
- CSS: `src/styles/resources/resources.css`.

Blog:

- Diagnose one real situation before routing upward.
- Must not turn into service pages.
- CSS: `src/styles/blog/blog.css`.

---

## 5. Legacy Quarantine

For full consumer lists, per-domain cleanup targets, and delete gates, see `docs/Planning/Legacy-dependency-map.md`.

Summary:

- `PrimaryCTASection` — quarantine delete-later for old consumers.
- `src/components/sections/` — delete when `PrimaryCTASection` gate is met.
- `src/components/reusable/` — delete when all consumers are rebuilt.
- `CaseStudyTemplate` — still quarantined for old visual sections.

---

## 6. Build Order

Completed baseline:

1. Header/Footer
2. Homepage
3. Smart Website Systems
4. Local SEO Authority
5. Base organization/enforcement cleanup

Remaining order:

1. AI Lead Handling feature
2. Reputation feature
3. Industry category
4. Landscaping industry detail
5. Fitness case study
6. Resource post/template
7. Blog post/template
8. Remaining services/features
9. Remaining industries
10. Remaining resources/blogs/case studies
11. Per-domain cleanup after each rebuild
12. Legacy/component deletion after consumers are gone
13. Final validator/test rewrite
14. Final accessibility/SEO/performance QA
15. Final visual QA

---

## 7. Current Open Follow-ups

- Case-study related injection: `RelatedSection` is not yet injected at config/wrapper level for case studies. Add when the case-study domain is rebuilt.
- `PrimaryCTASection` consumers: old consumers remain across blog, features, industries, resources, old services, About, Contact, and dev surfaces. Rebuild or update each before deleting `PrimaryCTASection`.

---

## 8. Definition of Done

Hard reset is complete when:

- All CSS follows the approved domain ownership model.
- All `var(--mw-*)` references resolve to real tokens.
- No page-named reusable behavior components remain.
- No slug exception lists for related content remain.
- All rebuilt pages use `DecisionPanel` as the final conversion section.
- All shared section framing uses `SectionFrame` / `HeroFrame`.
- No legacy CSS is imported.
- No old reusable section library is used by rebuilt pages.
- Validators protect the new system only.
- Tests align with new contracts.
- No raw `rgba()` appears outside `tokens.css`.
- No shared primitives import from domain/page data.
- Build and system validation pass.
- Old UI files are deleted when all consumers are gone.

Non-negotiable: frontend can be in motion during reset, but architecture cannot drift. Data follows section meaning. CSS follows tokens. Validators protect the new system, not old UI.

---

## 9. Active Tracker

| Area              | Status  | Notes                                                                                                                                                                 |
| ----------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Baseline pages    | Stable  | Homepage, SWS, LSA rebuilt and content-aligned                                                                                                                        |
| Base components   | Stable  | SectionFrame: split layout (layout/ratio) + gradient tones (gradient-dark/mist/teal) added; shell ownership enforced — page CSS owns visual body only                 |
| Next target       | Pending | AI Lead Handling audit starts at Prompt 3                                                                                                                             |
| Legacy quarantine | Active  | PrimaryCTASection and reusable folders remain delete-later; rd-\* layout classes are quarantine/delete-later (DESIGN.md)                                              |
| Open follow-ups   | Active  | Case-study RelatedSection injection pending; PrimaryCTASection consumers remain across unrebuilt domains                                                              |
| Shell enforcement | Stable  | validate-legacy-quarantine blocks page CSS overrides of mw-section-frame\_\_header/heading/description/eyebrow in rebuilt page CSS; no headerWidth or gap props exist |
