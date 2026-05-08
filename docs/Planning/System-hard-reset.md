# MindWP System Hard Reset — Operating Manual

> Temporary operating manual for the active hard reset.
> For stable design/CSS rules: `docs/core/DESIGN.md`
> For old dependency lists and delete gates: `docs/Planning/Legacy-dependency-map.md`
> For new-chat agent rules: `AGENTS.md`

---

## 1. Current State

- Branch: `ui-hard-reset`. Latest resolved milestone: **6N**.
- Rebuilt baseline-clean: Homepage, Smart Website Systems, Local SEO Authority.
- Base components operational: `SectionFrame`, `HeroFrame`, `DecisionPanel`, `FAQSection`, `Accordion`, `Tabs`, `RelatedSection`, `InlineText`.
- `CaseStudyTemplate` — `RelatedSection` and `PrimaryCTASection` removed (6M/6N). Still quarantined for old visual sections.
- `PrimaryCTASection` — ~30 consumers remain across unrebuilt domains.
- `src/components/reusable/` — all unrebuilt domains still depend on it.
- **Next priority**: AI Lead Handling, then industry category, remaining features, case study, resource, blog templates.

---

## 2. Active Build Rules

**Use these for new/rebuilt pages:**

- `SectionFrame` — all normal content section shells
- `HeroFrame` — all hero section shells
- `DecisionPanel` — final conversion section (not `PrimaryCTASection`)
- `FAQSection` — all FAQ sections
- `RelatedSection` — injected via config wrappers; page renderers must NOT render their own
- `Accordion` and `Tabs` — primitives only, no section framing
- `InlineText` — `[[muted:...]]` markers only, inline use

**Do not use in new/rebuilt files:**

- `src/components/reusable/` or `src/components/sections/` — quarantine
- `.rd-*`, `l-section`, `l-container` CSS classes
- Raw hex or `rgba()` outside `tokens.css`
- `titleMuted` or `headingMuted` props — use `[[muted:...]]` in data strings instead
- Hardcoded `/contact` — use `buildContactHref()` from `@/lib/contact/contactHref`
- Hardcoded CTA label — use `PRIMARY_CTA_LABEL` from `@/lib/cta/primaryAction`
- `PrimaryCTASection` — quarantine delete-later; only old consumers may still use it

**New components go in:**

- `src/components/layout` — section framing
- `src/components/primitives` — behavior/accessibility primitives
- `src/components/conversion` — final conversion panels
- `src/components/navigation` — related content, nav helpers
- `src/components/content` — full reusable content sections

**Do not create page-named reusable components** (e.g. `SWSFaqAccordion`, `LSAHeroPanel`).

**Per-milestone cleanup:** After each rebuild: remove dead CSS, dead imports, dead conditionals, orphan files. Do not leave parallel old/new contracts.

---

## 3. Architecture Boundaries

> For stable design/CSS philosophy, visual patterns, token rules, and component design responsibilities: **see `docs/core/DESIGN.md`**.

Summary of active boundaries:

- CSS stack: `tokens.css → reset.css → typography.css → layout.css → primitives.css → components.css → page/domain CSS`
- All tokens use `--mw-*` namespace; raw values belong only in `tokens.css`
- `mw-container` for shared width constraint — do not reinvent container patterns
- Page CSS owns visual bodies only; section shells/headings/FAQ/CTA/related are owned by base components
- CSS folder ownership: `pages/`, `services/`, `features/`, `industries/`, `case-studies/`, `resources/`, `blog/` — one domain CSS file per template type, not per content page
- Dependency direction: shared primitives must never import from page/domain data files
- Data shapes must use semantic names (`signals`, `leakPoints`, `flowStages`) not generic ones (`items`, `cards`, `steps`)
- Page renderer composes sections; data owns content; CSS owns visuals; primitives are small shared details

---

## 4. Current Base Components

| Component | Folder | Role |
|---|---|---|
| `SectionFrame` | `layout/` | Normal section shell: `<section>`, container, heading block, tone/bg |
| `HeroFrame` | `layout/` | Hero section shell: split layout, copy, actions, chips, visual slot |
| `DecisionPanel` | `conversion/` | Final conversion section: actions, reassurance, expectations |
| `FAQSection` | `content/` | Full FAQ section: wraps SectionFrame + Accordion |
| `RelatedSection` | `navigation/` | Global related content: config-wrapper-injected |
| `Accordion` | `primitives/` | Disclosure primitive; no section framing |
| `Tabs` | `primitives/` | Tab primitive; generic API |
| `InlineText` | `primitives/` | Renders `[[muted:...]]` as muted spans |
| `SignalDot` | `primitives/` | Status dot; always paired with label |
| `StatusBadge` | `primitives/` | Status badge; same type constraints as SignalDot |
| `InternalLink` | `src/global/` | Internal link primitive |

Page-specific visual sections remain custom first. Extract only when the same structural pattern proves itself across at least two pages with identical data requirements.

---

## 5. Baseline Page Contracts

### Homepage

Sections: Hero (`HeroFrame`), 13× `SectionFrame` sections, `FAQSection` (split/white), `DecisionPanel`.

Key data shapes: `hero.signals`, `businessLeakage.flowStages/leakPoints`, `systemStack.journeyStages`, `fitFoundations.strongFit/poorFit`, `clientShift.before/after`, `pressurePoints.points`, `proofStory`, `implementationExamples.implementationPatterns`, `faq.items`, `cta.expectations`.

CSS: `src/styles/pages/home.css`.

### Smart Website Systems

Key data shapes: `hero.feedRows`, `leakPath.stages`, `siteContrast.left/right`, `handoffBoard.source/receivers`, `coverageLedger.areas`, `environmentScenarios`, `handledPath.stages`, `proofStory`, `compoundingSignals`, `buildWorkbench.inputs/work/workingState`, `fitFilter`, `faq.items`, `cta.expectations`.

CSS: `src/styles/services/smart-website.css`.

### Local SEO Authority

Key data shapes: `hero.localSignals`, `authorityDecisionBoard.criteria`, `visibilitySignalAudit.families`, `structuredComparison.left/right`, `coverageMap.areas`, `visibilityCycle.stages`, `proofStory`, `fitFilter`, `faq.items`, `cta.expectations`.

CSS: `src/styles/services/local-seo.css`.

---

## 6. Future Rebuild Contracts

### Features

Data shapes: `hero.chatPreview / hero.proofTimeline`, `failureMoments`, `handledQuestions`, `handoffBoundary`, `systemFit`, `useCases`, `coverage`, `fitFilter`, `faq`, `cta`, `relatedSystems`.

CSS: `src/styles/features/features-base.css`. Feature pages explain one capability; must route back to parent system; must show handoff logic.

### Industries (category + detail)

Data shapes: `hero.leakPanel / hero.enquiryBoard`, `sharedOperatingPattern`, `industryPathways`, `commonBreakPoints`, `systemsByBusinessType`, `seasonalLeakPattern`, `workflowExamples`, `proofScenario`, `faq`, `cta`.

CSS: `src/styles/industries/category.css`, `src/styles/industries/detail.css`. Detail pages must feel specific to the vertical; no generic industry cards as main pattern.

### Case Studies

Data shapes: `hero.trialBoard`, `messyReality`, `whatChanged`, `conversationPath`, `workingDifferently`, `constraints`, `systemsInvolved`, `cta`, `related`.

CSS: `src/styles/case-studies/case-study.css`. `CaseStudyTemplate` still quarantined for old visual sections. Related injection open follow-up (see §11).

### Resources

Data shapes: `hero.frameworkSurface`, `decisionQuestions`, `systemFit`, `qualityThreshold`, `pageAnatomy`, `keyTakeaways`, `relatedResources`, `softCta`.

CSS: `src/styles/resources/resources.css`. Resources are decision-support pages, not service pages; CTA should be soft.

### Blog

Data shapes: `hero.callSurface`, `situationOpening`, `callWindow`, `compoundingLoss`, `callerBehaviour`, `betterHandling`, `keyTakeaways`, `relatedSystems`, `softCta`.

CSS: `src/styles/blog/blog.css`. Start with real situation; diagnose before routing; do not turn blog posts into service pages.

---

## 7. CTA / Related / InlineText Rules

**CTA:**

- `DecisionPanel` is the final conversion section. No manual CTA markup in page renderers.
- `PrimaryCTASection` — quarantine delete-later for old consumers only.
- Action href: `buildContactHref()` from `@/lib/contact/contactHref`.
- Label: `PRIMARY_CTA_LABEL` from `@/lib/cta/primaryAction`.

**Related:**

- `RelatedSection` is global and config-wrapper-owned. Page renderers must NOT render related sections.
- Config: `relatedSection?: { enabled?: boolean; variant?: 'standard' | 'rail' | 'compact'; }`.
- No slug exception lists.

**InlineText:**

- Use `[[muted:...]]` in data title strings for muted text. No HTML or JSX in data strings.
- Do not use `titleMuted` or `headingMuted` props.

---

## 8. Validators / Tests

**Active validators for the new system:**

- Token existence — `var(--mw-*)` must resolve; raw hex/`rgba()` outside `tokens.css` fails
- Legacy quarantine — fails imports from `reusable/` or `sections/` in rebuilt/new files
- Rebuilt-page old-class — fails `rd-*`, `l-section`, `l-container`, `btn-primary`, `btn-outline` in rebuilt files
- Related section — fails slug exception lists; no page-owned related sections
- DecisionPanel — blocks old `PrimaryCTASection`/`CTASection` naming in rebuilt files
- Content enforcement, CSS ownership, CTA/contact, route ownership, SEO, graph validators

**Rules:**

- Do not weaken validators to silence errors.
- Update validators when they enforce old UI assumptions, not new architecture.
- Delete/rewrite tests tied to removed components.
- Keep tests protecting CTA behavior, route ownership, metadata, graph rules.

---

## 9. Legacy Quarantine

For full consumer lists, per-domain cleanup targets, and delete gates: **see `docs/Planning/Legacy-dependency-map.md`**.

Summary:

- `PrimaryCTASection` — ~30 consumers; delete when all domains rebuilt
- `src/components/sections/` — barrel + PrimaryCTASection only; delete when gate met
- `src/components/reusable/` — all unrebuilt domains depend; delete when all rebuilt
- `CaseStudyTemplate` — old visual sections quarantined; delete when template fully rebuilt

---

## 10. Build Order

1. Header/Footer ✓
2. Homepage ✓
3. Smart Website Systems ✓
4. Local SEO Authority ✓
5. Base organization/enforcement cleanup ✓ (through 6N)
6. AI Lead Handling feature
7. Reputation feature
8. Industry category
9. Landscaping industry detail
10. Fitness case study
11. Resource post/template
12. Blog post/template
13. Remaining services/features
14. Remaining industries
15. Remaining resources/blogs/case studies
16. Per-domain cleanup after each rebuild
17. Legacy/component deletion after consumers gone
18. Final validator/test rewrite
19. Final accessibility/SEO/performance QA
20. Final visual QA

---

## 11. Current Open Follow-ups

- **Case-study related injection** — `RelatedSection` not yet injected at config/wrapper level for case studies. Add when the case-study domain is rebuilt.
- **PrimaryCTASection consumers** — ~30 consumers remain across unrebuilt domains (blog, features, industries, resources, old services, About, Contact). Each must be rebuilt before `PrimaryCTASection` can be deleted.

---

## 12. Compressed Milestone Summary

| Milestone group | Summary |
|---|---|
| 1 | CSS foundation: `tokens.css` / `reset.css` / `typography.css` / `layout.css` / `primitives.css` / `components.css`. `_compat.css` removed. |
| 2 | Header/Footer restyled. RevealMotion restored. |
| 3–5.1 | Homepage rebuilt (15 sections). SWS + LSA full rebuilds. Types/primitives (`SignalDot`, `StatusBadge`, `src/types/ui.ts`) established. |
| 6A–6D | Base components created: `SectionFrame`, `HeroFrame`, `DecisionPanel`, `Accordion`, `Tabs`. SWS + LSA migrated. Old component-library route deleted. |
| 6E–6G | Legacy quarantine map created. 17 zero-import section files deleted. `validate-legacy-quarantine.mjs` created. Global `RelatedSection` created; `SmartRelatedSection` chain deleted. `SectionShell` deleted. |
| 6H | `InlineText` + `FAQSection` created. `[[muted:...]]` syntax live. Homepage fully migrated to all base components. |
| 6K–6L | Control plane cleaned. Validators reset. LSA `lsa-cycle` resolved. All rebuilt renderers use `SectionFrame`. |
| 6M–6N | `CaseStudyTemplate`: `{ type: 'more' }` and `RelatedSection` removed (6M). `PrimaryCTASection` replaced with `DecisionPanel` (6N). |

---

## 13. Definition of Done

Hard reset is complete when:

- All CSS files follow the approved domain ownership model
- All `var(--mw-*)` references resolve to real tokens
- No page-named reusable behavior components remain
- No slug exception lists for related content remain
- All rebuilt pages use `DecisionPanel` as the final conversion section
- All shared section framing uses `SectionFrame` / `HeroFrame`
- No legacy CSS imported; no `_compat.css`; no `styles/_legacy`
- No old reusable section library used by rebuilt pages
- All main pages follow the new MindWP system direction
- Validators protect new system only
- Tests align with new contracts
- No raw `rgba()` outside `tokens.css`
- No shared primitives importing from domain/page data
- Build passes and system validation passes
- Old UI files deleted when all consumers are gone

**Non-negotiable:** Frontend can break during reset. Architecture cannot drift. Data must follow section meaning. CSS must follow tokens. Validators must protect new system, not old UI.
