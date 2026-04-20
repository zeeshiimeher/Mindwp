# TOOLS — MindWP

> Source of truth for commands, validators, reports, and control-plane working order.
> If this file conflicts with [./SYSTEM.md](./SYSTEM.md), fix the conflict immediately.
> System structure is defined in:
> src/system/knowledge.ts
---

## USE THIS DOC

Use this file when you need the live command surface, the validator entrypoints, the report outputs, or the correct execution order.

---

## CONTROL PLANE

MindWP has one full-system control plane.

- `npm run system:full` is the full report-generation and validation entrypoint.
- `node scripts/core/validate-all.mjs` is the validator orchestrator.
- `/reports` stores machine-readable control-plane artifacts.
- `/dev/system-dashboard` reads report outputs for operator visibility.

The control plane is report-driven. Dashboards read reports; they do not define system truth.

---

## PRIMARY COMMANDS

| Command | Purpose |
|---|---|
| `npm run system:full` | Full-system validation, report generation, dashboard sync, and snapshot write. |
| `npm run validate:all` | Runs the validator orchestrator and writes `reports/validation-results.json`. |
| `npm run validate:docs` | Validates docs links and formatting and writes the docs report. |
| `npm run test:runtime` | Runs unit, system, and integration runtime tests. |
| `npm run test:e2e` | Runs Playwright E2E. |
| `npm run lint` | Runs ESLint through the repo runner. Advisory in the full control plane. |
| `npm run dev` | Starts the local Next.js development server. |
| `npm run build` | Runs the production build. |

---

## VALIDATOR SURFACE

`validate-all.mjs` is the single validator orchestrator.

Current model:

- 25 validators run through the orchestrator.
- Blocking validators run in deterministic order.
- Advisory validators run in parallel and remain visible in reports.
- Blocking failures fail the run.
- Advisory failures surface in reports without becoming blocking by themselves.

Key validator surfaces include:

| Concern | Command |
|---|---|
| Content contract | `npm run validate:content-contract` |
| Content quality | `npm run validate:content-quality` |
| Domain structure | `npm run validate:domain-structure` |
| CTA label contract | `npm run validate:cta-label-contract` |
| CTA ownership and placement | `npx tsx scripts/validators/validate-cta-violations.ts` |
| Conversion contract | `npm run validate:conversion-contract` |
| Graph integrity | `npx tsx scripts/validators/validate-graph.ts --report-json` |
| Production contracts | `npx tsx scripts/validators/validate-production-contracts.ts --report-json` |
| Docs | `npm run validate:docs` |

---

## LOCKED AND DIRECT PATHS

### Locked entrypoints

These commands exist only to redirect work back to `npm run system:full`:

- `npm run system:report`
- `npm run analyze`
- `npm run analyze:report`
- `npm run analyze:readable-report`

### Direct scripts still in use

| Area | Command | Output |
|---|---|---|
| Authority map | `tsx scripts/generators/generate-authority-map.ts` | `reports/authority-map.json` |
| Topic authority | `tsx scripts/generators/generate-topic-authority-scores.ts` | topic authority reports |
| Content gaps | `tsx scripts/analyzers/generate-content-gaps.ts` | content gap reports |
| Docs inventory | `node scripts/generators/generate-global-inventory.mjs` | generated docs inventory |
| Component docs | `node scripts/generators/generate-component-docs.cjs` | generated component docs |
| Image system | `tsx scripts/image-system/image-generate.ts` | image assets and queue operations |

---

## REPORT ARTIFACTS

| File | Produced By | Purpose |
|---|---|---|
| `reports/system-report.json` | `npm run system:full` | Primary internal control-plane artifact. |
| `reports/client-dashboard.json` | `npm run system:full` | Client-safe dashboard artifact. |
| `reports/validation-results.json` | `validate-all` or `system:full` | Machine-readable validator results. |
| `reports/production-contract-report.json` | production contracts validator | Registry, graph, and route contract status. |
| `reports/content-contract-report.json` | content contract validator | Metadata and canonical identifier contract status. |
| `reports/domain-structure-report.json` | domain structure validator | Route and domain structure integrity. |
| `reports/docs-report.json` | docs validator | Docs validation status. |
| `reports/authority-map.json` | authority map generator | Frozen authority relationship output. |

---

## DAILY WORKING ORDER

### Start work

1. Run the narrow command that matches the surface you need to inspect.
2. Run `npm run system:full` when you need a fresh whole-system snapshot.
3. Inspect reports or open `/dev/system-dashboard`.

### Finish work

1. Run the narrow validator or test that matches the changed surface.
2. Run `npm run validate:docs` after doc changes.
3. Run `npm run system:full` after changes that affect runtime, validators, reports, or dashboard-facing outputs.
4. Trust report artifacts over assumptions.

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
