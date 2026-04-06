# SYSTEM INDEX — MindWP

<!-- WHERE THIS FITS -->
<!-- Purpose: Documentation map — every active file and its role -->
<!-- Depends on: nothing (this is the entry point) -->
<!-- Used by: AI-RULES.md pre-flight, all navigation -->

> Entry map for the documentation system.
> Every active file has one clear purpose.

---

## 1. Core Docs (`core/`)

| File                                       | Role                                         | Type   |
| ------------------------------------------ | -------------------------------------------- | ------ |
| `core/SYSTEM-TRUTH.md`                     | Current system reality                       | Manual |
| `core/SYSTEM-INDEX.md`                     | Documentation map and file roles             | Manual |
| `core/SYSTEM-README.md`                    | Operator manual for execution                | Manual |
| `core/FOUNDATION-AND-POSITIONING.md`       | Brand positioning and identity               | Manual |
| `core/CONTENT-SYSTEM-ARCHITECTURE.md`      | Content system rules                         | Manual |
| `core/CONTENT-GRAPH-SYSTEM.md`             | Graph structure and edge rules               | Manual |
| `core/CONTENT-BLUEPRINT-SYSTEM.md`         | Content blueprint definitions                | Manual |
| `core/DESIGN-SYSTEM-CONTROL-LAYER.md`      | Design-system control rules                  | Manual |
| `core/SYSTEM-INTELLIGENCE-DOC.md`          | Tooling and dashboard reference              | Manual |

---

## 2. Governance (`governance/`)

| File                                       | Role                                         | Type   |
| ------------------------------------------ | -------------------------------------------- | ------ |
| `governance/AI-RULES.md`                   | Unified rules and guardrails                 | Manual |
| `governance/CONTENT-GOVERNANCE.md`         | Content governance hierarchy                 | Manual |

---

## 3. Planning (`planning/`)

| File                                       | Role                                         | Type   |
| ------------------------------------------ | -------------------------------------------- | ------ |
| `planning/BLOG-PLANNING-INVENTORY.md`      | Blog content planning                        | Manual |
| `planning/RESOURCE-PLANNING-INVENTORY.md`  | Resource content planning                    | Manual |
| `planning/CASE-STUDY-INVENTORY.md`         | Case study planning                          | Manual |

---

## 3.5 Image System (`Automatic-Image-Generation-System/`)

| File                                                              | Role                                        | Type   |
| ----------------------------------------------------------------- | ------------------------------------------- | ------ |
| `Automatic-Image-Generation-System/IMAGE-SYSTEM-ARCHITECTURE.md`  | Image pipeline architecture and design      | Manual |
| `Automatic-Image-Generation-System/IMAGE-TESTING-GUIDE.md`        | Testing commands and visual QA guide        | Manual |

---

## 4. Generated Docs

| File                                       | Role                                         | Type      |
| ------------------------------------------ | -------------------------------------------- | --------- |
| `logs/SYSTEM-LOG.md`                       | Human-readable current state                 | Generated |
| `core/DECISION-STATE.md`                   | Generated active decisions                   | Generated |
| `core/GLOBAL-COMPONENTS-CATALOG.md`        | Shared component inventory                   | Generated |

These files are overwritten by scripts. Do not edit them manually.

---

## 5. Reports (`reports/`)

| File                                       | Role                                   |
| ------------------------------------------ | -------------------------------------- |
| `reports/system-state.json`                | Machine-readable validator state       |
| `reports/system-drift.json`                | Machine-readable truth drift           |
| `reports/script-history.json`              | Latest script execution history        |
| `reports/authority-map.json`               | Graph authority data                   |
| `reports/fix-log.json`                     | Append-only fix history                |
| `reports/session-log.json`                 | Append-only session history            |
| `reports/*.json` validator reports         | Specific validator outputs             |
| `reports/*.md` generated report companions | Optional human-readable report outputs |

`reports/` contains both generated snapshots and append-only histories.
It is operational data, not governance truth.

## 6. System Data Model

### Snapshot Layer

These files are overwrite-only. They represent current state, not history.

- `reports/system-state.json` = machine state
- `logs/SYSTEM-LOG.md` = human state
- `reports/system-drift.json` = drift only

`logs/SYSTEM-LOG.md` is a snapshot, not a historical log.

### Fix History

- `reports/fix-log.json` = append-only fix history
- source of truth for fix analytics and dashboard insights
- may be written by controlled tooling or deliberate manual maintenance

### Session History

- `reports/session-log.json` = append-only work session history
- written via `node scripts/dev/add-session-entry.mjs`
- not a substitute for fix history

---

## 7. Authority Stack

These docs are the authority stack. All execution docs defer to them. Docs override code.

1. `core/FOUNDATION-AND-POSITIONING.md`
2. `core/CONTENT-SYSTEM-ARCHITECTURE.md`
3. `core/CONTENT-GRAPH-SYSTEM.md`
4. `core/CONTENT-BLUEPRINT-SYSTEM.md`
5. `governance/CONTENT-GOVERNANCE.md`

---

## 8. Working Order

1. Read `core/SYSTEM-INDEX.md`.
2. Run `node scripts/core/validate-all.mjs`.
3. Run `node scripts/core/system-sync.mjs`.
4. Check `project-todo.md` for current execution.
5. Use `core/SYSTEM-README.md` for commands and procedure.
6. Use `governance/AI-RULES.md` for guardrails.

---

## 9. Directory Shape

```
Mindwp-Docs/
├── project-todo.md
├── core/
│   ├── SYSTEM-TRUTH.md
│   ├── SYSTEM-INDEX.md
│   ├── SYSTEM-README.md
│   ├── FOUNDATION-AND-POSITIONING.md
│   ├── CONTENT-SYSTEM-ARCHITECTURE.md
│   ├── CONTENT-GRAPH-SYSTEM.md
│   ├── CONTENT-BLUEPRINT-SYSTEM.md
│   ├── DESIGN-SYSTEM-CONTROL-LAYER.md
│   ├── SYSTEM-INTELLIGENCE-DOC.md
│   ├── GLOBAL-COMPONENTS-CATALOG.md
│   └── DECISION-STATE.md
├── governance/
│   ├── AI-RULES.md
│   └── CONTENT-GOVERNANCE.md
├── planning/
│   ├── BLOG-PLANNING-INVENTORY.md
│   ├── RESOURCE-PLANNING-INVENTORY.md
│   └── CASE-STUDY-INVENTORY.md
├── logs/
│   └── SYSTEM-LOG.md
└── Automatic-Image-Generation-System/
    ├── IMAGE-SYSTEM-ARCHITECTURE.md
    └── IMAGE-TESTING-GUIDE.md

reports/
├── system-state.json
├── system-drift.json
├── authority-map.json
└── validator and analysis outputs

scripts/
├── core/
├── validators/
├── generators/
├── analyzers/
└── dev/
```
