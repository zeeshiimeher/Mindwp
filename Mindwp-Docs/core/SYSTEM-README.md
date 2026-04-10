# SYSTEM ENTRY POINT

> This file controls how AI understands and interacts with MindWP Website project.
> It is NOT documentation. It is an execution control layer.
> Read this file FIRST. Follow it exactly.

---

# MANDATORY READ (STRICT)

## CURRENT PHASE: BUILD / ALIGNMENT

Before ANY work, AI MUST read ALL of the following files in order:

1. `core/SYSTEM-CORE.md` — Root authority: service map, boundaries, terminology, system flow, drift prevention
2. `core/SYSTEM-CONTRACT.md` — Behavioral authority (CTA, conversion, routing)
3. `core/SYSTEM-RULES.md` — Execution rules, permissions, failure patterns
4. `core/FOUNDATION-AND-POSITIONING.md` — Brand positioning and identity
5. `core/SYSTEM-ARCHITECTURE.md` — System layers and structure
6. `core/CONTENT-WRITING-PLAYBOOK.md` — Writing execution rules
7. `core/CONTENT-SYSTEM-ARCHITECTURE.md` — Content system rules
8. `core/CONTENT-GRAPH-SYSTEM.md` — Graph structure and edge rules
9. `core/CONTENT-BLUEPRINT-SYSTEM.md` — Content blueprint definitions
10. `governance/CONTENT-GOVERNANCE.md` — Content governance hierarchy
11. `core/SYSTEM-TRUTH.md` — Current system reality
12. `core/EXECUTION-MEMORY.md` — Decisions and execution state

**Rules:**
- Partial reading is NOT allowed
- Do NOT proceed without reading all listed files
- Do NOT skip files based on perceived relevance
- Re-read if context window resets

---

# FUTURE MODE (POST-LAUNCH)

> NOT ACTIVE. Do not use this mode yet.

When system stabilizes post-launch, mandatory read reduces to:

1. `core/SYSTEM-CORE.md`
2. `core/SYSTEM-CONTRACT.md`
3. `core/SYSTEM-README.md`
4. `core/SYSTEM-TRUTH.md`

All other files become read-on-demand.

---

# EXECUTION MODE

You are NOT designing a system.
You are executing inside an existing system.

**Rules:**
- Follow existing patterns. Do not invent new ones.
- All behavior is already defined. Do not assume behavior.
- All architecture is locked. Do not modify architecture.
- All content types are locked. Do not create new types.
- Keep Update EXECUTION-MEMORY.md once you finish task.

**DO NOT:**
- Create new systems or abstractions
- Modify architecture without explicit instruction
- Assume behavior not defined in docs
- Bypass validators or ignore failures

**If unsure → read `core/SYSTEM-CONTRACT.md`**

---

# CONTEXT RULE

- Do NOT rely on chat history or memory
- Do NOT assume previous decisions carry forward
- Always rely on documentation as the source of truth
- Every session starts fresh from these docs

**If context is unclear → re-read mandatory files**

---

# DOC AUTHORITY

Documentation defines system behavior. Code must follow docs.

**Authority stack (priority order):**
1. `core/SYSTEM-CORE.md`
2. `core/FOUNDATION-AND-POSITIONING.md`
3. `core/CONTENT-SYSTEM-ARCHITECTURE.md`
4. `core/CONTENT-GRAPH-SYSTEM.md`
5. `core/CONTENT-BLUEPRINT-SYSTEM.md`
6. `governance/CONTENT-GOVERNANCE.md`

**If docs and code conflict → docs are correct → fix the code**

---

# WHERE TO LOOK

| Need | File |
|---|---|
| **Service map, boundaries, terminology, system flow, drift rules** | `core/SYSTEM-CORE.md` |
| Behavior (CTA, conversion, routing) | `core/SYSTEM-CONTRACT.md` |
| Architecture layers | `core/SYSTEM-ARCHITECTURE.md` |
| Writing execution (voice, rewrite method, quality) | `core/CONTENT-WRITING-PLAYBOOK.md` |
| Brand identity and CTA tone | `core/FOUNDATION-AND-POSITIONING.md` |
| Content rules | `core/CONTENT-SYSTEM-ARCHITECTURE.md` |
| Graph + relationships | `core/CONTENT-GRAPH-SYSTEM.md` |
| Content blueprints | `core/CONTENT-BLUEPRINT-SYSTEM.md` |
| System reality | `core/SYSTEM-TRUTH.md` |
| Decisions + execution state | `core/EXECUTION-MEMORY.md` |
| Execution rules + permissions | `core/SYSTEM-RULES.md` |
| Design system | `core/DESIGN-SYSTEM-CONTROL-LAYER.md` |
| Content governance | `governance/CONTENT-GOVERNANCE.md` |
| Content planning | `planning/CONTENT-INVENTORY.md` |
| Image pipeline | `Automatic-Image-Generation-System/IMAGE-SYSTEM-ARCHITECTURE.md` |

---

# WORKING ORDER

### Start work
1. Run `npm run system:report`
2. Inspect `reports/system-report.json`
3. If CLEAN → continue. If WARNING/BROKEN → inspect `reports/system-drift.json`
4. Read `core/EXECUTION-MEMORY.md` for current priorities

### Finish work
1. Run targeted validator for changed files
2. Run the matching test layer when runtime behavior changed (`npm run test:unit`, `npm run test:integration`, `npm run test:system`, `npm run test:e2e`)
2. Run `npm run system:report`
3. Confirm `reports/system-report.json`, `reports/system-state.json`, and `reports/system-drift.json` updated
4. Do NOT leave repo in drift or failure state

### Core commands
| Command | Purpose |
|---|---|
| `npm run system:report` | Full system snapshot: validate, sync, analyze, normalize |
| `node scripts/core/validate-all.mjs` | Full validator set |
| `node scripts/core/system-sync.mjs` | Generate state and drift snapshots |
| `npm run test:runtime` | Vitest runtime layers: unit, system, and integration |
| `npm run test:e2e` | Playwright end-to-end runtime flows |
| `npm run test:all` | Validators + unit/system/integration/E2E aggregation with `reports/test-results.json` output |
| `npm run dev` | Local development |
| `npm run build` | Production build |

---

# DATA MODEL

- **Overwrite-only:** `reports/system-report.json`, `reports/system-state.json`, `reports/system-drift.json`
- **Append-only:** `reports/fix-log.json`, `reports/session-log.json`
- **Generated (do not edit):** `core/GLOBAL-COMPONENTS-CATALOG.md`
