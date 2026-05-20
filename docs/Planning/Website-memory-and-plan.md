# Website Rebuild — Memory & Plan

Live session-handoff doc. Update each session with what changed, what's accepted, and what comes next.

Read this after `CLAUDE.md` and before opening any rebuild source file. For phase structure read `Website-Rebuild.md`. For design baseline read `Design-Direction.md`. For repo memory read `Repo-Map.md`.

## Active Branch

`rebuild/baseline-homepage-sws-local-seo`

Branch parent: `ui-hard-reset`. The branch holds all baseline window work (Phases 4–8) before the first three pages are approved and merged.

## Phase Status

| Phase | Status | Notes |
| --- | --- | --- |
| 1 — Core understanding | Done | Phase 1 carry-forwards accepted (see below). |
| 2 — Repo and system understanding | Done | Captured in `Repo-Map.md`. |
| 3 — Design direction | Done (proposed) | Captured in `Design-Direction.md`. Locks in after first three pages approve. |
| 4 — Design-system base implementation | Done | Added `--mw-shadow-dark-lg` token. SectionShell `texture` slot and mass hex conversion explicitly deferred to page rebuilds. |
| 5 — AI workflow + doc optimization | Done | Validator false-positives fixed; durable repo/design memory captured; CLAUDE.md aligned. |
| 5.5 — Tooling/dep/skill proposal | Done | Approved actions applied: `check:baseline` + `test` + `test:smoke` scripts added, `screenshot-sections.mjs` migrated to `mw-animate-*`, Playwright smoke suite created in `tests/smoke/`. No dependencies installed. No external Claude skills installed. |
| 6 — Homepage rebuild | Done | 14-section long-form page rebuilt from approved plan. `src/screens/Homepage.tsx` + `src/domains/home/data/homepage.ts` overwritten. One full dark body section (Section 07 Five Protections). Dark inner panels in Sections 03 and 10. Validation green; smoke suite 23/23 pass. |
| 7 — Smart Website Systems rebuild | Not started |  |
| 8 — Local SEO Authority rebuild | Not started |  |
| 9 — Remaining primary service pages | Not started | Lead Response & Handling, Follow-Up & CRM, Reputation & Review. |
| 10 — Review, systemize, extract | Not started |  |

## Accepted Decisions (Carry-Forwards)

From Phase 1:

- Develop a positive-state anchor alongside leak language.
- Strengthen "practice front door" as a clinic recognition phrase.
- Sharpen SWS / Lead Response / Follow-Up boundaries during page planning and visual design.
- Make "conversion-focused" concrete through clarity, trust, intent-matched CTA, handoff, and improvement mechanisms.
- Avoid showing the five systems as generic equal service tiles on the homepage.
- Prefer short CTA buttons when surrounding copy carries the diagnostic meaning.
- Ensure implementation pages resolve upward to Smart Website Systems.
- Align CLAUDE.md and Website-Rebuild.md during the AI workflow/doc phase. *(Done in Phase 5.)*

From Phase 2/3:

- Treat 20% repetition guidance as a design smell, not a numeric validator.
- Don't fully ban interactive proof treatments; during baseline avoid auto-scroll carousels and portfolio-gallery behavior.
- Verify validation commands exist before using them.
- Inspect components before editing; add only missing capability when actually needed.
- `Design-Direction.md` is proposed baseline until the first three pages are approved.

From Phase 4 (design-direction calls):

- Five systems as a single connected map (not five tiles).
- "Practice front door" as parallel framing on shared sections, not split pages.
- `--mw-text-hero` reserved for the homepage; SWS and Local SEO open at `--mw-text-h1`.
- Tone-alternation as the rhythm engine, but not mechanically every other section.
- Implementation pathway selector as a *business-fit* surface, not a builder comparison or tech grid.
- Showcase optional during baseline.

From Phase 4 (implementation):

- The narrow Phase 4 implementation is accepted.
- `--mw-shadow-dark-lg` token added (`0 24px 60px rgba(0, 0, 0, 0.32)`).
- No speculative shared map/path components extracted.
- No speculative SectionShell `texture` slot or new gradient tone added.
- No mass token conversion was done for JSX that will be rebuilt.

## Open Decisions For The User

None currently. Phase 3 design-direction calls were all accepted in Phase 4. Any new open questions arrive here as they surface during Phase 6 onward.

## Validator Behavior (Phase 5 Outcome)

- `check:names` now strips code comments (`/* */`, `//`) from `.ts/.tsx/.js/.jsx/.mjs/.css` before scanning. Renderer briefs can name forbidden drift terms as "avoid" guidance without false positives. Markdown is scanned as-is — do not use forbidden terms in docs even when negated.
- `check:clean-base` "copied Smart Website helper names" and "copied Smart Website registry names" rules are now scoped to `src/**`. Doc references to `SmartWebsiteSystemsRenderer` and related symbols are fine.
- All other validator behavior is unchanged. Full inventory in `Repo-Map.md`.

## Files Changed In Baseline Window (Cumulative)

- `src/styles/tokens.css` — added `--mw-shadow-dark-lg` token (Phase 4).
- `scripts/check-names.mjs` — comment stripping for source files (Phase 5).
- `scripts/check-clean-base.ts` — scope Smart-Website symbol rules to `src/` (Phase 5).
- `scripts/screenshot-sections.mjs` — migrated stale `rd-animate-*` selectors to current `mw-animate-*` set (Phase 5.5).
- `package.json` — added `check:baseline`, `test`, `test:smoke` scripts (Phase 5.5).
- `tests/smoke/helpers.ts` — error/heading assertion helpers (Phase 5.5).
- `tests/smoke/homepage.spec.ts` — homepage clean-load, heading, CTA tests (Phase 5.5).
- `tests/smoke/routes.spec.ts` — core / service / renamed-feature / removed-route tests (Phase 5.5).
- `CLAUDE.md` — grammar fix, alignment, pointer block (Phase 5).
- `docs/Planning/Website-Rebuild.md` — user edits (pre-Phase 5; treat as governing).
- `docs/Planning/Design-Direction.md` — Phase 3 + Phase 4 + Phase 5 updates.
- `docs/Planning/Website-memory-and-plan.md` — this file (Phase 5, 5.5).
- `docs/Planning/Repo-Map.md` — created Phase 5, updated Phase 5.5 with smoke-suite + command table.
- `.claude/skills/mindwp-page-plan/SKILL.md` — pointer added (Phase 5).
- `.claude/skills/mindwp-page-rebuild/SKILL.md` — pointer added (Phase 5).
- `.claude/skills/mindwp-page-review/SKILL.md` — pointer added (Phase 5).
- `src/screens/Homepage.tsx` — full rewrite as 14-section long-form page (Phase 6).
- `src/domains/home/data/homepage.ts` — trimmed: `hero.signals` / `signalSummary` / `signalCountLabel` removed and moved into JSX; `HomeIconKey` type removed; FAQ #1 reframed to drop the 5-system enumeration; FAQ #4 SEO answer tightened; CTA `expectations` #4 rewritten to a positive-state line; hero eyebrow updated to "Service Businesses & Specialist Clinics"; hero description softened to cover quotes and consultations.

## Phase 6 Execution Summary

**14 sections in approved order** (D L L L L L D L L L L L L L by full-section background):

01 Hero (HeroFrame, gradient-hero) · 02 Leak Map (mist) · 03 Website as Public Control Point (gradient-mist + dark inner panel) · 04 Normal vs Connected (white) · 05 What Conversion-Focused Actually Means (mist) · 06 Connected Handling Path (gradient-teal) · 07 Five Protections, One Path (gradient-dark — single body anchor) · 08 What Changes (gradient-mist) · 09 Scenarios — service business + specialist clinic (gradient-teal) · 10 Selected Website-System Surfaces (white + dark inner panels) · 11 Fit / Not Fit (mist) · 12 Practical Delivery (white) · 13 FAQ (mist, split variant) · 14 Final Diagnostic CTA (DecisionPanel — light section bg, dark inner container).

**Visual decisions:**
- Five Protections (Section 07) implemented as a desktop "plus" constellation (SWS at hub centre; 4 outer protections at top/right/bottom/left) and a mobile vertical stack in connected order. Never a 5-tile grid.
- `mw-animate-line` used exactly twice — Section 02 leak rail, Section 06 handling rail.
- Dot-grid texture overlays applied to the two sections with dark inner panels (03 and 07) and once on Section 07's full dark surface.
- Selected surfaces framed as illustrative patterns with a small "not specific deliverables" disclaimer; uses a faint browser-chrome dots motif but no fake URL bar, no fake screenshots, no client names, no logos, no metrics.

**Data-file changes:** strictly trimmed. Only HeroFrame text/chips/actions, FAQ items, and DecisionPanel content remain in `homepageData`. All section content, leak states, mechanisms, handling stages, protection labels, positive states, scenarios, selected-surface annotations, and fit lists live page-locally inside `Homepage.tsx`.

**Shared component/token/CSS changes:** none in Phase 6. No `SectionShell` API additions. No new tokens. The only design-system change in the baseline window remains the Phase 4 `--mw-shadow-dark-lg` token addition, which the rebuilt page exercises.

**Validation:** `pnpm check:baseline` green (typecheck + lint + check:names + check:clean-base + check:domain-registries). `pnpm build` green. `pnpm test:smoke` 23/23 passing including the three homepage-specific tests (clean load, primary heading, diagnostic CTA visible). `pnpm check:frontend` blocked by an unrelated user-local `pnpm dev` server on PID 34466 — smoke suite covers the same load/hydration/console-error class on the rebuilt homepage and all key routes.

**Things to review visually:**
- Section 07 constellation on mobile vs desktop — the desktop plus layout depends on parent height; if it looks cramped at intermediate widths consider tightening the inner padding.
- The "browser-chrome dots" framing on Section 10's featured surface — confirm it reads as a stylistic frame and not as an implied real screenshot.
- Section 03's dark inner panel inside a light section is the page's first "depth without darkness" treatment; verify the contrast feels intentional, not abrupt, when scrolling from Section 02.

## Smoke Suite Behavior

`pnpm test:smoke` runs three specs in `tests/smoke/`:

- `homepage.spec.ts` — clean load (no runtime/hydration/console errors), visible primary heading, primary diagnostic CTA visible.
- `routes.spec.ts` — load + primary heading on core (9), primary service (5), renamed feature (2) routes; 404 enforcement on removed (4) routes.
- `helpers.ts` — shared error/heading helpers, mirrors the ignore lists from `scripts/check-frontend.mjs`.

23 tests total. ~20–60 s on first run after a fresh build. Boots production server via `playwright.config.ts` (port 3001) — does **not** collide with a running `pnpm dev` server.

`pnpm check:frontend` uses `next dev` and is single-instance-locked by the project runner. If `pnpm dev` is already running, `check:frontend` will refuse to start; either stop the dev server or rely on `pnpm test:smoke` instead (covers the same load-error class but smaller route set).

## Next-Session Handoff

If you are starting fresh:

1. Read `CLAUDE.md`.
2. Read this file for current phase and accepted decisions.
3. Read `Design-Direction.md` for the design baseline.
4. Read `Repo-Map.md` instead of exploring source folders from scratch.
5. Then read only the task-relevant core docs per `CLAUDE.md` § Task-Based Reading.

If you are about to rebuild a page:

1. Run the `mindwp-page-plan` skill workflow.
2. Confirm with the user that the plan is good before editing.
3. Run the `mindwp-page-rebuild` skill workflow.
4. Validate with `pnpm check:baseline`. After visual work, run `pnpm test:smoke` (fast) and/or `pnpm check:frontend` (broader 28-route check, but locks against a running `pnpm dev` server).
5. Update this file with what changed.

If you are about to change the design system (tokens, shared components, shared CSS):

- During the baseline window (until first three pages are approved): allowed when the approved design direction clearly justifies it. Report shared changes separately from page-owned changes.
- After the first three pages are approved: explicit user approval required.

If you are about to install a dependency or add a new tool: stop and ask the user first.
