# TOOLS — MindWP

> Source of truth for commands, validators, reports, and control-plane working order.
> If this file conflicts with [./SYSTEM.md](./SYSTEM.md), fix the conflict immediately.
> System structure is defined in:
> src/system/knowledge.ts

---

## USE THIS DOC

Use this file when you need the live command surface, the validator entrypoints, the report outputs, the correct execution order, or the shortest operator instructions for working on the repo safely.

---

## CONTROL PLANE

MindWP has one full-system control plane.

- `npm run system:full` is the full report-generation and validation entrypoint.
- `npm run system:quick` is the fast operator check. It skips tests and preserves the locked `system:full` report bundle.
- `npm run system:debug` runs the full path with debug visibility enabled.
- `node scripts/core/validate-all.mjs` is the validator orchestrator.
- `/reports` stores machine-readable control-plane artifacts.
- `/dev/system-dashboard` reads report outputs for operator visibility.

The control plane is report-driven. Dashboards read reports; they do not define system truth.

Human rule: if you are unsure which command is safe, start with `npm run system:quick` and escalate to `npm run system:full` only when you need a new source-of-truth report set.

---

## PRIMARY COMMANDS

| Command                 | Purpose                                                                        |
| ----------------------- | ------------------------------------------------------------------------------ |
| `npm run system:quick`  | Fast summary check. Skips tests and preserves the locked `system:full` bundle. |
| `npm run system:full`   | Full-system validation, report generation, dashboard sync, and snapshot write. |
| `npm run system:debug`  | Full-system run with debug logging and internal step visibility.               |
| `npm run validate:all`  | Runs the validator orchestrator and writes `reports/validation-results.json`.  |
| `npm run validate:docs` | Regenerates the global inventory and validates docs links and structure.       |
| `npm run test:runtime`  | Runs unit, system, and integration runtime tests.                              |
| `npm run test:e2e`      | Runs Playwright E2E.                                                           |
| `npm run generate:core` | Regenerates content registries, authority map, and topic authority outputs.    |
| `npm run generate:all`  | Runs all generation paths needed before dev or build.                          |
| `npm run dev`           | Starts the local Next.js development server on port 3000.                      |
| `npm run dev:audit`     | Starts the audit server flow for visual and audit-focused work.                |
| `npm run build`         | Runs the production build after prebuild generation and validation.            |
| `npm run lint`          | Runs ESLint through the repo runner. Advisory in the full control plane.       |

---

## VALIDATOR SURFACE

`validate-all.mjs` is the single validator orchestrator.

Current model:

- 26 validators run through the orchestrator.
- Blocking validators run in deterministic order.
- Advisory validators run in parallel and remain visible in reports.
- Blocking failures fail the run.
- Advisory failures surface in reports without becoming blocking by themselves.
- Synthetic validators such as `typecheck`, `lint`, and `check-generated` can reuse fresh passing reports, but failing synthetic reports are not trusted for reuse.

Key validator surfaces include:

| Concern                     | Command                                                                     |
| --------------------------- | --------------------------------------------------------------------------- |
| Content contract            | `npm run validate:content-contract`                                         |
| Content quality             | `npm run validate:content-quality`                                          |
| Domain structure            | `npm run validate:domain-structure`                                         |
| CTA label contract          | `npm run validate:cta-label-contract`                                       |
| CTA resolver integrity      | `node scripts/validators/validate-cta-resolver-integrity.mjs --report-json` |
| CTA ownership and placement | `npx tsx scripts/validators/validate-cta-violations.ts`                     |
| Conversion contract         | `npm run validate:conversion-contract`                                      |
| Graph integrity             | `npx tsx scripts/validators/validate-graph.ts --report-json`                |
| Production contracts        | `npx tsx scripts/validators/validate-production-contracts.ts --report-json` |
| System knowledge            | `npm run validate:system-knowledge`                                         |
| Docs                        | `npm run validate:docs`                                                     |

---

## EXECUTION MODES

### Summary mode

- Default operator mode.
- Prints concise step status and total runtime information.
- Best default for `system:quick` and routine `system:full` checks.

Example:

- `npm run system:full -- --mode=summary`

### Debug mode

- Use when you need resolver timing, per-step internals, or error triage.
- Run via `npm run system:debug` or by passing `--mode=debug` to the underlying scripts.

Example:

- `npm run system:full -- --mode=debug`

### Output detail mode

- `--output=summary` keeps the terminal output compact.
- `--output=full` adds the detailed structured section after the summary.
- This changes terminal verbosity only. It does not change report ownership, write behavior, or source-of-truth status.

Examples:

- `npm run system:full -- --output=full`
- `npm run system:full -- --mode=debug --output=full`
- `npm run system:quick -- --output=full`

### Source-of-truth rule

- `npm run system:full` is the only command that should rewrite the locked full-report bundle.
- `npm run system:quick` is intentionally non-mutating for the locked full-report and dashboard artifacts.
- Manual report-export paths stay subordinate to the full control plane.

---

## LOCKED AND DIRECT PATHS

### Locked entrypoints

These commands exist only to redirect work back to `npm run system:full`:

- `npm run system:report`
- `npm run analyze`
- `npm run analyze:report`
- `npm run analyze:readable-report`

### Direct scripts still in use

| Area            | Command                                                     | Output                            |
| --------------- | ----------------------------------------------------------- | --------------------------------- |
| Authority map   | `tsx scripts/generators/generate-authority-map.ts`          | `reports/authority-map.json`      |
| Topic authority | `tsx scripts/generators/generate-topic-authority-scores.ts` | topic authority reports           |
| Content gaps    | `tsx scripts/analyzers/generate-content-gaps.ts`            | content gap reports               |
| Content score   | `tsx scripts/analyzers/score-content.mjs`                   | content score report              |
| Graph inspect   | `tsx scripts/analyzers/inspect-graph.ts`                    | graph-derived summary             |
| Docs inventory  | `node scripts/generators/generate-global-inventory.mjs`     | generated docs inventory          |
| Component docs  | `node scripts/generators/generate-component-docs.cjs`       | generated component docs          |
| Image system    | `tsx scripts/image-system/image-generate.ts`                | image assets and queue operations |

Direct scripts are allowed for narrow work, but they do not replace the control-plane ownership of `npm run system:full`.

---

## REPORT ARTIFACTS

| File                                      | Produced By                     | Purpose                                            |
| ----------------------------------------- | ------------------------------- | -------------------------------------------------- |
| `reports/system-report.json`              | `npm run system:full`           | Primary internal control-plane artifact.           |
| `reports/system-health.json`              | `npm run system:full`           | Health summary for the current full-system run.    |
| `reports/client-dashboard.json`           | `npm run system:full`           | Client-safe dashboard artifact.                    |
| `reports/validation-results.json`         | `validate-all` or `system:full` | Machine-readable validator results.                |
| `reports/pipeline-report.json`            | `export-reports` or `system:full` | Pipeline coverage for generators and analyzers. |
| `reports/production-contract-report.json` | production contracts validator  | Registry, graph, and route contract status.        |
| `reports/content-contract-report.json`    | content contract validator      | Metadata and canonical identifier contract status. |
| `reports/domain-structure-report.json`    | domain structure validator      | Route and domain structure integrity.              |
| `reports/docs-report.json`                | docs validator                  | Docs validation status.                            |
| `reports/authority-map.json`              | authority map generator         | Frozen authority relationship output.              |

Dashboard readers consume the generated `reports/dashboard/*.json` files plus `reports/client-dashboard.json`. Those files are outputs, not operator-owned inputs.

---

## CACHE AND SKIP RULES

- Generators and analyzers may skip work when their declared inputs are older than their outputs.
- A cache-valid skip is acceptable only when the output artifacts remain authoritative and schema-valid.
- Fresh input always wins over cached output.
- Human takeaway: do not delete reports casually during debugging unless you mean to force recomputation.

---

## HUMAN COMMAND EXAMPLES

Use these exact forms when you want predictable operator behavior:

| Goal | Command |
| ---- | ------- |
| Fast non-mutating health check | `npm run system:quick` |
| Full source-of-truth run | `npm run system:full` |
| Full run with expanded terminal detail | `npm run system:full -- --output=full` |
| Full run with debug logging and expanded detail | `npm run system:full -- --mode=debug --output=full` |
| Docs-only validation | `npm run validate:docs` |

---

## DAILY WORKING ORDER

### Start work

1. Run `npm run system:quick` for a fast health check.
2. Run the narrow command that matches the surface you need to inspect.
3. Run `npm run system:full` when you need a fresh whole-system snapshot.
4. Inspect reports or open `/dev/system-dashboard`.

If you want the terminal to show the detailed structured section as well as the summary, use `npm run system:full -- --output=full`.

### Finish work

1. Run the narrow validator or test that matches the changed surface.
2. Run `npm run validate:docs` after doc changes.
3. Run `npm run system:quick` if you only need a fast non-mutating confidence pass.
4. Run `npm run system:full` after changes that affect runtime, validators, reports, or dashboard-facing outputs.
5. Trust report artifacts over assumptions.

---

## CHANGE CONTRACT

Update this file when you:

- add or remove a primary command
- change the control-plane entrypoint
- add or remove a validator
- change which report artifacts are authoritative
- change dashboard routes or report readers

---

## CROSS-REFERENCE MAP

- System identity and boundaries: [./SYSTEM.md](./SYSTEM.md)
- Content and graph contracts: [./CONTENT.md](./CONTENT.md), [./GRAPH.md](./GRAPH.md)
- CTA and contact contracts: [./CONVERSION.md](./CONVERSION.md)
