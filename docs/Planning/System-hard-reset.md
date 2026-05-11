# MindWP System Hard Reset — Operating Manual

> Direct operating guide for the current rebuild stage.
> Use this with `docs/Planning/services-plan.md`, `docs/Planning/industry-plan.md`, and the stable rules in `docs/core/*`.

---

## 1. Current State

- Branch: `ui-hard-reset`.
- Homepage, Smart Website Systems, and Local SEO Authority are the current production baselines.
- Service-domain detail pages are rebuilt and stable.
- Industry category/detail pages are staged as direct renderer skeletons for Claude Opus industry rebuild work.
- Service-domain plan: `docs/Planning/services-plan.md`.
- Industry-domain plan: `docs/Planning/industry-plan.md`.
- Old consumers still exist outside rebuilt/staged domains. Do not delete quarantine files until all consumers are gone.
- Next priority: Claude Opus industry-domain rebuild by `docs/Planning/industry-plan.md`.

---

## 2. Active Build Rules

Use these stable docs for decisions:

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

After each Opus rebuild, remove dead CSS, dead imports, dead conditionals, orphan files, and any leftover skeleton placeholders for that page.

---

## 3. Current Rebuild Contracts

Homepage:

- Uses `HeroFrame`, section bodies wrapped by `SectionFrame`, `FAQSection`, and `DecisionPanel`.
- CSS: `src/styles/pages/home.css`.

Smart Website Systems:

- Uses new-system layout/conversion/content components and page-specific visual sections.
- CSS: `src/styles/services/smart-website.css`.

Local SEO Authority:

- Uses new-system layout/conversion/content components and page-specific visual sections.
- CSS: `src/styles/services/local-seo.css`.

Service-domain pages:

- Service detail pages are rebuilt and stable.
- SWS and LSA remain production baselines.
- `docs/Planning/services-plan.md` remains the service-domain reference for page roles, boundaries, and cleanup guidance.
- Future service edits must preserve the rebuilt architecture: semantic data, direct renderers, `DecisionPanel`, config-injected `RelatedSection`, and `services.css` visual ownership where applicable.

Industry-domain skeletons:

- Industry category/detail renderers are direct new-system skeletons inside each actual renderer file.
- No shared skeleton renderer/helper is allowed for industry pages.
- `docs/Planning/industry-plan.md` owns category/detail rules, page grouping, Opus order, and handoff guidance.
- Category pages are broader vertical group pages; detail pages stay specific to one business type’s working day.
- Final industry pages must replace placeholders with page-specific visual JSX, semantic data groups, and approved industry-domain CSS rules.

---

## 4. Future Domain Rules

Features:

- Explain one capability inside a parent system.
- Do not become full service pages.
- Route back to the parent system.

Industries:

- Stay vertical-specific.
- Do not read like reusable service pages.

Case studies:

- Proof assets, not service pages.
- Be explicit when something is scenario-based instead of real attributed client proof.
- `CaseStudyTemplate` still needs full visual rebuild.

Resources:

- Decision-support pages, not BOFU service pages.
- CTA should stay soft and contextual.

Blog:

- Diagnose one real situation before routing upward.
- Do not turn into service pages.

---

## 5. Legacy Quarantine

Do not import these in rebuilt pages:

- `src/components/reusable/`
- `src/components/sections/`
- `PrimaryCTASection`

Do not delete them yet. Old consumers still exist.

Delete only after the matching consumers are rebuilt and `docs/Planning/Legacy-dependency-map.md` confirms the gate is clear.

---

## 6. Execution Order

1. Service-domain detail pages are complete; keep them stable and clean up only when needed.
2. Claude Opus industry-domain build by approved category/detail plan from `docs/Planning/industry-plan.md`.
3. Features.
4. Case studies.
5. Resources.
6. Blog.
7. Per-domain cleanup after each rebuild.
8. Legacy deletion after all consumers are gone.
9. Final validator/test rewrite.
10. Final accessibility, SEO, performance, and visual QA.

---

## 7. Open Follow-ups

- `/services` listing rebuild/cleanup follows the completed service detail pages.
- `/industries` listing rebuild/cleanup follows stable industry category/detail pages.
- Case studies need wrapper/config-level `RelatedSection` injection when that domain is rebuilt.
- `PrimaryCTASection` and reusable folders remain delete-later until all old consumers are rebuilt.

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

Non-negotiable: architecture cannot drift. Data follows section meaning. CSS follows tokens. Validators protect the new system, not old UI.

---

## 9. Active Tracker

| Area               | Status  | Direct instruction                                                                                                         |
| ------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| Baseline pages     | Stable  | Homepage, SWS, and LSA are production references. Do not change them unless a specific issue is approved.                   |
| Service plan       | Stable  | `docs/Planning/services-plan.md` remains the service-domain reference for roles, boundaries, and cleanup guidance.           |
| Service pages      | Stable  | Service detail pages are rebuilt. Keep them stable; only refine through approved page-specific fixes.                       |
| Industry plan      | Active  | Read `docs/Planning/industry-plan.md` before industry-domain work. It owns category/detail direction and Opus handoff rules. |
| Industry skeletons | Active  | Direct renderer skeletons are staging rails only. Claude Opus should replace placeholders with final page bodies.           |
| Components         | Stable  | Use `HeroFrame`, `SectionFrame`, `FAQSection` where needed, `DecisionPanel`, and config-injected `RelatedSection`.          |
| CSS                | Active  | Domain CSS owns visual bodies. No raw colors outside `tokens.css`.                                                         |
| Legacy             | Active  | `PrimaryCTASection` and reusable folders are delete-later only after all old consumers are rebuilt.                         |
| Listings           | Active  | `/services` and `/industries` listing pages rebuild after their detail/category pages are stable.                           |
| Case studies       | Pending | Add wrapper/config-level `RelatedSection` injection when the case-study domain is rebuilt.                                  |
