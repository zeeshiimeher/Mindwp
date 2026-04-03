# CLAUDE.md — Agent Instruction File

> Execution rules for AI agents working inside MindWP.
> This is NOT documentation. This is a behaviour contract.

---

## 1. PROJECT CONTEXT

- MindWP is a docs-first system. `SYSTEM-TRUTH.md` governs all code.
- If docs and code conflict → change the code, never the docs.
- Governance hierarchy: FOUNDATION-AND-POSITIONING → CONTENT-SYSTEM-ARCHITECTURE → CONTENT-GRAPH-SYSTEM → CONTENT-BLUEPRINT-SYSTEM → CONTENT-GOVERNANCE.
- Platform: Next.js + TypeScript (strict). Custom BEM CSS. Tailwind v4 bridge. GoHighLevel backend. Target: Vercel.

---

## 2. CORE WORKFLOW

Every task follows this sequence:

```
Understand → Search → Verify → Change → Sync → Fix
```

1. **Understand** — Read the task from `project-todo.md`. Know the phase, scope, and expected outcome.
2. **Search** — Find all relevant files. Never assume file locations or contents.
3. **Verify** — Confirm current state matches assumptions. Read before writing.
4. **Change** — Make the minimum required edit. No scope expansion.
5. **Sync** — Run `node scripts/system-sync.mjs`. Check output.
6. **Fix** — If violations or drift appear, fix them before moving on.

---

## 3. MANDATORY BEFORE ANY TASK

Before touching any file:

- [ ] Search the repo for related code and docs
- [ ] Read the relevant governing doc(s)
- [ ] Read `SYSTEM-TRUTH.md` sections relevant to the task
- [ ] Check `project-todo.md` for task context and dependencies
- [ ] Verify current system state: `node scripts/system-sync.mjs`

**Never assume the system is correct. Always verify.**

---

## 4. EXECUTION RULES

- Follow `project-todo.md` — execute tasks in phase order.
- Complete one task fully (including sync) before starting the next.
- No skipping tasks. No reordering phases without user approval.
- No scope expansion. If a task says "fix X", fix X. Nothing else.
- Mark task status in `project-todo.md` as work progresses.

---

## 5. VALIDATION RULE

After ANY code or doc change:

```bash
node scripts/system-sync.mjs
```

- **0 violations, 0 drift** → continue.
- **Any violation** → fix it immediately before proceeding.
- **Any drift** → update `SYSTEM-TRUTH.md` or fix the code to match.

The 27 validators cover: CTA labels, design system, graph integrity, tokens, inline styles, system truth drift, and more. All must pass.

---

## 6. NEVER DO

- Modify `SYSTEM-TRUTH.md` without explicit user approval.
- Create new systems, frameworks, or architectural patterns.
- Refactor code beyond the scope of the current task.
- Ignore validator failures or skip sync.
- Add features, abstractions, or "improvements" not requested.
- Override governance hierarchy (docs win over code, always).
- Create or store content types outside `ContentNodeType` (7 formal types only).

---

## 7. ALLOWED TO

- Execute tasks from `project-todo.md`.
- Fix validator violations and drift.
- Suggest improvements — but only suggest, never auto-apply beyond scope.
- Create files only when a task explicitly requires it.
- Update `project-todo.md` task statuses.

---

## 8. DECISION RULE

If anything is unclear:

**STOP. Ask the user.**

Do not guess. Do not infer intent. Do not "fix forward."

---

## 9. SYSTEM STATE

Check state via `node scripts/system-sync.mjs`. Respond accordingly:

| State | Action |
|-------|--------|
| **CLEAN** (0 violations, 0 drift) | Proceed with next task |
| **WARNING** (advisory only) | Review, proceed if non-blocking |
| **BROKEN** (violations or drift) | Fix before any other work |

---

## 10. KEY COMMANDS

```bash
# Full system sync (validators + drift + state update)
node scripts/system-sync.mjs

# Run all validators standalone
node scripts/validate-all.mjs

# Dev server
npm run dev

# TypeScript check
npx tsc --noEmit
```

---

## 11. KEY FILES

| Purpose | Path |
|---------|------|
| Source of truth | `Mindwp-Docs/SYSTEM-TRUTH.md` |
| Task list | `Mindwp-Docs/project-todo.md` |
| System index | `Mindwp-Docs/SYSTEM-INDEX.md` |
| Design tokens | `src/styles/foundation.css` |
| Component styles | `src/styles/components.css` |
| Content graph types | `src/lib/content-graph/` |
| Validators | `scripts/validation/` |
| Sync engine | `scripts/system-sync.mjs` |

---

## 12. FINAL RULE

**Verify first, then act.**
