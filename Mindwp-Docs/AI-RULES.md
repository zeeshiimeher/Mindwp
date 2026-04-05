# MindWP Rules

> Single rules file for AI and operator behavior.
> Use this before changing code, docs, validators, or generated outputs.

---

## 1. Pre-Flight

Before substantive work:
1. Read `Mindwp-Docs/SYSTEM-INDEX.md`.
2. Run `node scripts/core/validate-all.mjs`.
3. Run `node scripts/core/system-sync.mjs`.
4. Check `reports/system-drift.json` if sync is not clean.
5. Check `Mindwp-Docs/project-todo.md` for the active phase.

---

## 2. Core Rules

### R1. Fix → sync → verify is mandatory.
After any real change, run `node scripts/core/validate-all.mjs`, then `node scripts/core/system-sync.mjs`, and return to a clean state.

### R2. Docs override code.
Governance priority is fixed:
1. `FOUNDATION-AND-POSITIONING.md`
2. `CONTENT-SYSTEM-ARCHITECTURE.md`
3. `CONTENT-GRAPH-SYSTEM.md`
4. `CONTENT-BLUEPRINT-SYSTEM.md`
5. `CONTENT-GOVERNANCE.md`

### R3. One file, one job.
- `SYSTEM-TRUTH.md` = current system reality
- `DEV-DASHBOARD.md` = daily summary and links only
- `project-todo.md` = execution state
- `PHASE-7-VISUAL-SYSTEM-AUDIT.md` = phase task playbook only
- `PHASE-10-audit-plan.md` = Phase 10 source of truth (8 locked decisions, governance rules)
- `SYSTEM-LOG.md` = generated human-readable current snapshot
- `reports/system-state.json` = generated machine current snapshot
- `reports/system-drift.json` = generated current drift snapshot
- `reports/fix-log.json` = append-only fix history
- `reports/session-log.json` = append-only session history
- `DECISION-STATE.md` = generated active decisions

### R4. Snapshot files are read-only. Histories are append-only.
Do not manually edit:
- `reports/system-state.json`
- `reports/system-drift.json`
- `Mindwp-Docs/system/DECISION-STATE.md`
- `Mindwp-Docs/SYSTEM-LOG.md`
- any report produced by a generator or validator script

Allowed append-only history files:
- `reports/fix-log.json`
- `reports/session-log.json`

`SYSTEM-LOG.md` is a snapshot, not a historical log.

### R5. `SYSTEM-TRUTH.md` is descriptive, not procedural.
It must not absorb plans, tasks, risks, or temporary audit noise.

---

## 3. Content and CTA Guardrails

### R6. `ContentNodeType` is absolute.
Allowed types only:
`blog`, `service`, `resource`, `case-study`, `feature`, `industry-detail`, `industry-category`

### R7. Primary CTA is locked.
- Label: `Start a Conversation`
- Href: `/contact`
- Labels route through `CTA_CONFIG` in `src/lib/ui/ui-intelligence.ts`

### R8. No urgency language.
Do not introduce patterns like `Book a`, `Get a`, `Schedule a`, `Request a`, `Act now`, or similar pressure language.

### R9. No fabricated proof.
Do not add fake logos, testimonials, metrics, named clients, or performance claims.

---

## 4. Design-System Guardrails

### R10. BEM everywhere.
Production component styling belongs in CSS classes, not ad hoc inline styling.

### R11. Inline token styles are banned.
Do not use `style={{ ...var(--*)... }}` in production components. Allowed exceptions are limited to shadcn/ui patterns and SVG text-specific needs.

### R12. Use design tokens.
- spacing uses `--space-*`
- font sizes use `--font-*` or `clamp()`
- repeated visual values should become tokens or approved helpers

### R13. Gradient lifecycle is strict.
Define gradient tokens in `foundation.css` before consuming them in component CSS.

### R14. CSS load order is fixed.
`foundation.css` → `primitives.css` → `framework.css` → `components.css`

### R15. SmartRelatedSection is the sole linking mechanism.
- No internal linking engine. No JourneyNavigator.
- Slot rules and link limits are defined in `PHASE-10-audit-plan.md` Decisions 2–4.
- Max 2 sections × 3 items per page. No exceptions.

---

## 5. Validation Guardrails

### R15. Do not bypass validators.
If a validator is wrong, fix or scope the validator. Do not work around it.

### R16. Start new work from a clean system.
Do not stack new implementation onto known validator failure or truth drift.

### R17. Scope fixes correctly.
Fix the root cause where possible. Do not patch generated outputs to silence symptoms.

---

## 6. Permission Boundaries

### Allowed without asking
- run sync and validators
- read any repo file for context
- implement tasks from `project-todo.md`
- fix validator failures and code defects inside the active task scope
- update execution docs that the user explicitly asked to refine

### Requires user confirmation
- update `SYSTEM-TRUTH.md`
- modify governing docs in `Mindwp-Docs/content-architecture/`
- add or remove validators
- change CTA governance or conversion model
- add new content types
- make structural CSS architecture changes outside the requested scope

---

## 7. Failure Patterns to Avoid

| Mistake | Correct action |
|---|---|
| Editing `SYSTEM-LOG.md` by hand | Regenerate with `node scripts/core/system-sync.mjs` after `node scripts/core/validate-all.mjs` |
| Writing plans into `SYSTEM-TRUTH.md` | Put execution state in `project-todo.md` |
| Adding `type: 'industry'` to a node | Use `industry-detail` or `industry-category` |
| Hardcoding spacing/font values in component CSS | Use tokens |
| Creating a CTA label outside approved config | Route through `CTA_CONFIG` |
| Skipping validation after a change | Run `validate-all`, then sync, and verify clean state |
