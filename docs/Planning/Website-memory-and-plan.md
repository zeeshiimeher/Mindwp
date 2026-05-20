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
| 5.5 — Tooling/dep/skill proposal | Not started |  |
| 6 — Homepage rebuild | Not started | First page to rebuild. Plan before editing. |
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
- `CLAUDE.md` — grammar fix, alignment, pointer block (Phase 5).
- `docs/Planning/Website-Rebuild.md` — user edits (pre-Phase 5; treat as governing).
- `docs/Planning/Design-Direction.md` — Phase 3 + Phase 4 + Phase 5 updates.
- `docs/Planning/Website-memory-and-plan.md` — this file (Phase 5).
- `docs/Planning/Repo-Map.md` — created in Phase 5.
- `.claude/skills/mindwp-page-plan/SKILL.md` — pointer added (Phase 5).
- `.claude/skills/mindwp-page-rebuild/SKILL.md` — pointer added (Phase 5).
- `.claude/skills/mindwp-page-review/SKILL.md` — pointer added (Phase 5).

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
4. Validate with `pnpm check:minimal` and `pnpm check:architecture`. Run `pnpm check:frontend` after visual work.
5. Update this file with what changed.

If you are about to change the design system (tokens, shared components, shared CSS):

- During the baseline window (until first three pages are approved): allowed when the approved design direction clearly justifies it. Report shared changes separately from page-owned changes.
- After the first three pages are approved: explicit user approval required.

If you are about to install a dependency or add a new tool: stop and ask the user first.
