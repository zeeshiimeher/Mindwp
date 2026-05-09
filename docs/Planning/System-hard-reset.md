# MindWP System Hard Reset — Operating Manual

> Direct operating guide for the current rebuild stage.
> Use this with `docs/Planning/services-plan.md` and the stable rules in `docs/core/*`.

---

## 1. Current State

- Branch: `ui-hard-reset`.
- Homepage, Smart Website Systems, and Local SEO Authority are the current production baselines.
- Service-domain pages are staged as direct renderer skeletons so Claude Opus can rebuild them without old renderer/data gravity.
- Service-domain plan: `docs/Planning/services-plan.md`.
- Old consumers still exist outside the rebuilt baseline and service skeletons. Do not delete quarantine files until all consumers are gone.
- Next priority: Claude Opus service-domain build by approved group from `services-plan.md`.

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

For final rebuilds, Claude Opus may change section order, section count, data shape, renderer body JSX, and tone rhythm when it improves the page. Keep the business boundaries and new-system architecture intact.

Service-domain skeletons:

- SWS and LSA stay untouched as production baselines.
- Reset service renderers are direct new-system skeletons using `HeroFrame`, `SectionFrame`, optional `FAQSection`, and `DecisionPanel` inside each actual renderer file.
- No shared skeleton renderer/helper is allowed for service pages. Each page renderer must be easy for Claude Opus to open and edit directly.
- Skeleton placeholders are staging rails only; Claude Opus should replace them during the final build.
- Final pages must replace placeholder bodies with page-specific visual JSX, semantic data groups, and `services.css` rules.
- `docs/Planning/services-plan.md` owns the service-domain plan and Opus handoff guidance.
- `services.css` is reset to the shared domain CSS home for future service visual bodies.

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

1. Claude Opus service-domain build by approved group from `docs/Planning/services-plan.md`.
2. Features.
3. Industries.
4. Case studies.
5. Resources.
6. Blog.
7. Per-domain cleanup after each rebuild.
8. Legacy deletion after all consumers are gone.
9. Final validator/test rewrite.
10. Final accessibility, SEO, performance, and visual QA.

---

## 7. Open Follow-ups

- Case studies still need wrapper/config-level `RelatedSection` injection when that domain is rebuilt.
- `PrimaryCTASection` still has old consumers outside the rebuilt baseline and service skeletons. Do not delete it yet.
- `/services` listing still needs rebuild/cleanup after service detail pages are stable.

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

| Area              | Status | Direct instruction                                                                                                          |
| ----------------- | ------ | --------------------------------------------------------------------------------------------------------------------------- |
| Baseline pages    | Stable | Homepage, SWS, and LSA are production references. Do not change them unless a specific issue is approved.                    |
| Service skeletons | Active | Direct renderer skeletons are staging rails only. Claude Opus should replace placeholders with final page bodies.            |
| Service plan      | Active | Read `docs/Planning/services-plan.md` before service-domain work. It owns page grouping, Opus order, and handoff decisions.  |
| Components        | Stable | Use `HeroFrame`, `SectionFrame`, `FAQSection` where needed, `DecisionPanel`, and config-injected `RelatedSection`.           |
| CSS               | Active | `services.css` is the shared service-domain CSS home for new service visual bodies. No raw colors outside `tokens.css`.      |
| Legacy            | Active | `PrimaryCTASection` and reusable folders are delete-later only after all old consumers are rebuilt.                          |
| Case studies      | Pending | Add wrapper/config-level `RelatedSection` injection when the case-study domain is rebuilt.                                  |
