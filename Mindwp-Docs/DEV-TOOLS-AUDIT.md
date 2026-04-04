# Dev Tools Audit

## Purpose

This audit classifies current developer-facing dashboards and execution tools after the execution-layer restructure.

## Canonical Surfaces

| Surface                                                              | Role                                                                          | Decision    |
| -------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------- |
| `/dev-dashboard`                                                     | Execution visibility, script registry, system status, current reports surface | KEEP        |
| `/dev/authority-dashboard`                                           | Specialized authority, rewrite, inspection, and fix workflow tooling          | KEEP        |
| `/content-dashboard`                                                 | Read-only content intelligence and report consumption                         | MERGE LATER |
| `Mindwp-Docs/DEV-DASHBOARD.md`                                       | Written operator checklist and command reference                              | KEEP        |
| `scripts/dev/audit-server.mjs`                                       | Dedicated audit server control for visual/phase workflows                     | KEEP        |
| `scripts/phase7/run-visual-audit.js` outputs at top-level `reports/` | Mixed phase output into system report surface                                 | DELETE      |

## Decisions

1. `/dev-dashboard` is the execution control layer.
2. `/dev/authority-dashboard` remains separate because it contains specialized analysis and action flows, not generic execution control.
3. `/content-dashboard` should not be expanded into another execution surface. Its useful report-reading features can be folded into `/dev-dashboard` later if duplication grows.
4. `Mindwp-Docs/DEV-DASHBOARD.md` remains useful as a docs-first operational surface and should stay aligned with the live dashboard.
5. Phase 7 visual audit outputs are not part of the current system-state surface and must stay isolated under `reports/phase7/`.

## Action Summary

- KEEP: `/dev-dashboard`, `/dev/authority-dashboard`, `Mindwp-Docs/DEV-DASHBOARD.md`, `scripts/dev/audit-server.mjs`
- MERGE LATER: `/content-dashboard` report viewer concepts into `/dev-dashboard` only if duplication becomes material
- DELETE: top-level `reports/visual-audit.json` and `reports/visual-audit.md` as current-system outputs
