# SYSTEM INDEX — MindWP

> Entry map for the cleaned documentation system.
> Every active file should have one clear purpose.

---

## 1. Core Docs

| File | Role | Type |
|---|---|---|
| `Mindwp-Docs/SYSTEM-TRUTH.md` | Current system reality | Manual |
| `Mindwp-Docs/SYSTEM-INDEX.md` | Documentation map and file roles | Manual |
| `Mindwp-Docs/SYSTEM-README.md` | Operator manual for execution | Manual |
| `Mindwp-Docs/AI-RULES.md` | Unified rules and guardrails | Manual |
| `Mindwp-Docs/project-todo.md` | Active execution ledger | Manual |
| `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT.md` | Current visual-system execution playbook | Manual |
| `Mindwp-Docs/system/DESIGN-SYSTEM-CONTROL-LAYER.md` | Design-system control rules | Manual |

---

## 2. Generated Docs

| File | Role | Type |
|---|---|---|
| `Mindwp-Docs/SYSTEM-LOG.md` | Human-readable current state | Generated |
| `Mindwp-Docs/system/DECISION-STATE.md` | Active decisions only | Generated |
| `Mindwp-Docs/GLOBAL-COMPONENTS-CATALOG.md` | Shared component inventory | Generated |

These files are overwritten by scripts. Do not edit them manually.

---

## 3. Reports

| File | Role |
|---|---|
| `reports/system-state.json` | Machine-readable validator state |
| `reports/system-drift.json` | Machine-readable truth drift |
| `reports/authority-map.json` | Graph authority data |
| `reports/visual-audit.json` | Current machine visual audit output |
| `reports/*.json` validator reports | Specific validator outputs |
| `reports/*.md` generated report companions | Optional human-readable report outputs |

**State roles are strict:**
- `reports/system-state.json` = machine state
- `Mindwp-Docs/SYSTEM-LOG.md` = human state
- `reports/system-drift.json` = drift only

---

## 4. Governing Docs

These remain the authority stack. Docs override code.

1. `Mindwp-Docs/content-architecture/FOUNDATION-AND-POSITIONING.md`
2. `Mindwp-Docs/content-architecture/CONTENT-SYSTEM-ARCHITECTURE.md`
3. `Mindwp-Docs/content-architecture/CONTENT-GRAPH-SYSTEM.md`
4. `Mindwp-Docs/content-architecture/CONTENT-BLUEPRINT-SYSTEM.md`
5. `Mindwp-Docs/content-architecture/CONTENT-GOVERNANCE.md`

---

## 5. Supporting Docs

| File | Role |
|---|---|
| `Mindwp-Docs/system/SYSTEM-INTELLIGENCE-DOC.md` | Tooling and dashboard reference |
| `Mindwp-Docs/content-architecture/*-PLANNING-INVENTORY.md` | Planning-only references |

Supporting docs help navigation or tooling, but they are not primary execution files.

---

## 6. Working Order

1. Read `Mindwp-Docs/SYSTEM-INDEX.md`.
2. Run `node scripts/system-sync.mjs`.
3. Check `Mindwp-Docs/project-todo.md` for current execution.
4. Use `Mindwp-Docs/SYSTEM-README.md` for commands and procedure.
5. Use `Mindwp-Docs/AI-RULES.md` for guardrails.

---

## 7. Directory Shape

```
Mindwp-Docs/
├── SYSTEM-TRUTH.md
├── SYSTEM-INDEX.md
├── SYSTEM-README.md
├── AI-RULES.md
├── SYSTEM-LOG.md
├── PHASE-7-VISUAL-SYSTEM-AUDIT.md
├── project-todo.md
├── GLOBAL-COMPONENTS-CATALOG.md
├── content-architecture/
└── system/

reports/
├── system-state.json
├── system-drift.json
├── authority-map.json
├── visual-audit.json
└── validator and analysis outputs

scripts/
├── system-sync.mjs
├── generate-system-log.mjs
├── validate-all.mjs
└── validation/ and analysis generators
```
