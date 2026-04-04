# SYSTEM INDEX — MindWP

> Entry map for the cleaned documentation system.
> Every active file should have one clear purpose.

---

## 1. Core Docs

| File                                                | Role                                         | Type   |
| --------------------------------------------------- | -------------------------------------------- | ------ |
| `Mindwp-Docs/SYSTEM-TRUTH.md`                       | Current system reality                       | Manual |
| `Mindwp-Docs/SYSTEM-INDEX.md`                       | Documentation map and file roles             | Manual |
| `Mindwp-Docs/DEV-DASHBOARD.md`                      | Daily control center; summary and links only | Manual |
| `Mindwp-Docs/SYSTEM-README.md`                      | Operator manual for execution                | Manual |
| `Mindwp-Docs/AI-RULES.md`                           | Unified rules and guardrails                 | Manual |
| `Mindwp-Docs/project-todo.md`                       | Active execution ledger                      | Manual |
| `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT.md`        | Phase-scoped visual task playbook            | Manual |
| `Mindwp-Docs/system/DESIGN-SYSTEM-CONTROL-LAYER.md` | Design-system control rules                  | Manual |

---

## 2. Generated Docs

| File                                       | Role                                         | Type      |
| ------------------------------------------ | -------------------------------------------- | --------- |
| `Mindwp-Docs/SYSTEM-LOG.md`                | Human-readable current state                 | Generated |
| `Mindwp-Docs/system/DECISION-STATE.md`     | Generated system memory for active decisions | Generated |
| `Mindwp-Docs/GLOBAL-COMPONENTS-CATALOG.md` | Shared component inventory                   | Generated |

These files are overwritten by scripts. Do not edit them manually.

---

## 3. Reports

| File                                       | Role                                   |
| ------------------------------------------ | -------------------------------------- |
| `reports/system-state.json`                | Machine-readable validator state       |
| `reports/system-drift.json`                | Machine-readable truth drift           |
| `reports/script-history.json`              | Latest script execution history        |
| `reports/authority-map.json`               | Graph authority data                   |
| `reports/fix-log.json`                     | Append-only fix history                |
| `reports/session-log.json`                 | Append-only session history            |
| `reports/phase7/visual-audit.json`         | Current Phase 7 visual audit output    |
| `reports/*.json` validator reports         | Specific validator outputs             |
| `reports/*.md` generated report companions | Optional human-readable report outputs |

`reports/` contains both generated snapshots and append-only histories.
It is operational data, not governance truth.

## 4. System Data Model

### Snapshot Layer

These files are overwrite-only. They represent current state, not history.

- `reports/system-state.json` = machine state
- `Mindwp-Docs/SYSTEM-LOG.md` = human state
- `reports/system-drift.json` = drift only

`Mindwp-Docs/SYSTEM-LOG.md` is a snapshot, not a historical log.

### Fix History

- `reports/fix-log.json` = append-only fix history
- source of truth for fix analytics and dashboard insights
- may be written by controlled tooling or deliberate manual maintenance

### Session History

- `reports/session-log.json` = append-only work session history
- written via `node scripts/dev/add-session-entry.mjs`
- not a substitute for fix history

---

## 5. Governing Docs (`content-architecture/`)

These files in `Mindwp-Docs/content-architecture/` are the authority stack. All execution docs defer to them. Docs override code.

1. `Mindwp-Docs/content-architecture/FOUNDATION-AND-POSITIONING.md`
2. `Mindwp-Docs/content-architecture/CONTENT-SYSTEM-ARCHITECTURE.md`
3. `Mindwp-Docs/content-architecture/CONTENT-GRAPH-SYSTEM.md`
4. `Mindwp-Docs/content-architecture/CONTENT-BLUEPRINT-SYSTEM.md`
5. `Mindwp-Docs/content-architecture/CONTENT-GOVERNANCE.md`

---

## 6. Supporting Docs

| File                                                       | Role                            |
| ---------------------------------------------------------- | ------------------------------- |
| `Mindwp-Docs/system/SYSTEM-INTELLIGENCE-DOC.md`            | Tooling and dashboard reference |
| `Mindwp-Docs/content-architecture/*-PLANNING-INVENTORY.md` | Planning-only references        |

Supporting docs help navigation or tooling, but they are not primary execution files.

---

## 7. Working Order

1. Read `Mindwp-Docs/SYSTEM-INDEX.md`.
2. Run `node scripts/core/validate-all.mjs`.
3. Run `node scripts/core/system-sync.mjs`.
4. Check `Mindwp-Docs/project-todo.md` for current execution.
5. Use `Mindwp-Docs/DEV-DASHBOARD.md` for current status and execution links.
6. Use `Mindwp-Docs/SYSTEM-README.md` for commands and procedure.
7. Use `Mindwp-Docs/AI-RULES.md` for guardrails.

---

## 8. Directory Shape

```
Mindwp-Docs/
├── SYSTEM-TRUTH.md
├── SYSTEM-INDEX.md
├── DEV-DASHBOARD.md
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
├── phase7/
│   └── visual-audit.json
└── validator and analysis outputs

scripts/
├── core/
├── validators/
├── generators/
├── analyzers/
├── runners/
├── phase7/
└── dev/
```
