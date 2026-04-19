# TOOLS — MindWP

> Scripts, dashboards, reports, and commands.
> If this document conflicts with SYSTEM.md -> SYSTEM.md wins.

---

## WHEN TO USE THIS DOC

Use this when you need the current repo tool surface: primary commands, locked execution paths, dashboard entry points, and report ownership.

---

## 1. Control Plane

MindWP now has one production control plane:

1. `npm run system:full` is the only full report-generation entrypoint.
2. `node scripts/core/validate-all.mjs` is the validator orchestrator.
3. `/reports/` stores the frozen machine-readable artifacts.
4. `/dev/system-dashboard` is the internal operator dashboard.

Manual report-generation entrypoints are intentionally blocked in production mode. Commands such as `system:report`, `analyze`, `analyze:report`, and `analyze:readable-report` resolve to the manual-path lock and tell you to use `npm run system:full`.

The current frozen run surface writes `reports/system-report.json`, `reports/client-dashboard.json`, synchronized report artifacts in `/reports/`, and snapshot history under `reports/system-snapshots/`.

---

## 2. Dashboards

### Internal operator dashboard

- URL: `/dev/system-dashboard`
- Route: `src/app/dev/system-dashboard/page.tsx`
- Client layer: `src/app/dev/system-dashboard/OperatorDashboard.tsx`
- Reader: `src/lib/dev/system-report.ts`
- Data source: `reports/system-report.json`

Purpose:

- Daily operator mode for the frozen control plane
- Today’s Focus for the top active actions
- Fast presets for needs-attention, high-impact, and all-healthy views
- Local-only memory for dismissed and completed priority items
- Report-driven display only; no backend mutation and no dashboard-side recomputation of system truth

### Client-safe dashboard artifact

- Artifact: `reports/client-dashboard.json`
- Consumer route: `src/app/dashboard/page.tsx`

Purpose:

- Safe summary artifact for the client-facing dashboard experience
- Derived during `npm run system:full`
- Separate from the internal operator dashboard

---

## 3. Primary Commands

| Command | Purpose |
|---|---|
| `npm run system:full` | Locked full-system run. Validates contracts, gathers report artifacts, normalizes dashboard outputs, and writes snapshots. |
| `npm run validate:all` | Runs the validator control layer and writes `reports/validation-results.json`. |
| `npm run test:all` | Alias for `npm run system:full -- --include-e2e`. |
| `npm run test:runtime` | Runs Vitest runtime layers: unit, system, and integration. |
| `npm run test:e2e` | Runs Playwright E2E directly. |
| `npm run validate:docs` | Regenerates the global inventory and validates documentation links/formatting. |
| `npm run lint` | Runs ESLint through the repo runner. Advisory in the control-plane report. |
| `npm run dev` | Starts the local Next.js development server. |
| `npm run build` | Runs the production build. |

---

## 4. Locked And Direct Script Paths

### Locked entrypoints

These exist only to stop drift and redirect operators back to `npm run system:full`:

- `npm run system:report`
- `npm run analyze`
- `npm run analyze:report`
- `npm run analyze:readable-report`

The lock is implemented in `scripts/core/disallow-manual-report-paths.mjs`.

### Direct scripts still in use

| Area | Command | Output |
|---|---|---|
| Authority map | `tsx scripts/generators/generate-authority-map.ts` | `reports/authority-map.json` plus generated authority map code |
| Topic authority | `tsx scripts/generators/generate-topic-authority-scores.ts` | `reports/topic-authority-scores.json`, `reports/topic-authority-scores.md` |
| Content gaps | `tsx scripts/analyzers/generate-content-gaps.ts` | `reports/content-gaps.json`, `reports/content-gaps.md` |
| Content intelligence | `tsx scripts/analyzers/generate-content-intelligence.ts` | `reports/content-intelligence.json` |
| Page scoring | `node scripts/analyzers/score-content.mjs` | `reports/content-score.json` |
| Priority detection | `tsx scripts/analyzers/detect-page-priorities.mjs` | `reports/page-priorities.json` |
| Content consistency | `node scripts/analyzers/audit-content-consistency.mjs` | `reports/content-consistency-audit.json` |
| Docs inventory | `node scripts/generators/generate-global-inventory.mjs` | `Mindwp-Docs/core/GLOBAL-COMPONENTS-CATALOG.md` |
| Component docs | `node scripts/generators/generate-component-docs.cjs` | generated docs under `Mindwp-Docs/` |
| Image generation | `tsx scripts/image-system/image-generate.ts` | image assets and queue operations |
| Image inspection | `tsx scripts/image-system/image-inspect.ts` | image inspection output |

---

## 5. Validators

`validate-all` is the single validator orchestrator.

Current report reality:

- `reports/system-report.json` currently registers 22 validator entries.
- Blocking failures stop the run.
- Advisory failures are still surfaced in the report, but do not fail the overall system status by themselves.

Key validators and related commands:

| Validator | Command |
|---|---|
| Content contract | `npm run validate:content-contract` |
| Content quality | `npm run validate:content-quality` |
| Domain structure | `npm run validate:domain-structure` |
| CTA label contract | `npm run validate:cta-label-contract` |
| Conversion contract | `npm run validate:conversion-contract` |
| Template payload sufficiency | `npm run validate:template-payload-sufficiency` |
| Section structure | `npm run validate:section-structure` |
| Graph integrity | `npm run graph:validate` |
| Design system | `npm run validate:design` |
| Docs | `npm run validate:docs` |

---

## 6. Report Artifacts

The most important report artifacts are:

| File | Produced by | Purpose |
|---|---|---|
| `reports/system-report.json` | `npm run system:full` | Primary internal control-plane artifact for the operator dashboard. |
| `reports/client-dashboard.json` | `npm run system:full` | Client-safe dashboard artifact. |
| `reports/validation-results.json` | `npm run validate:all` or `npm run system:full` | Machine-readable validator results. |
| `reports/authority-map.json` | authority-map generator | Frozen authority relationship output. |
| `reports/topic-authority-scores.json` | topic authority generator | Topic strength and coverage status. |
| `reports/topic-authority-scores.md` | topic authority generator | Human-readable topic summary. |
| `reports/content-gaps.json` | content gaps analyzer | Topic/content coverage gaps. |
| `reports/content-gaps.md` | content gaps analyzer | Human-readable gap summary. |
| `reports/client-report.json` | `npm run system:full` | Client report artifact synchronized through the locked report path. |
| `reports/readable-audit-report.md` | `npm run system:full` | Human-readable audit output written through the locked report path. |

Do not document retired state/drift snapshot files as active required outputs. They are no longer the current control-plane contract.

---

## 7. Daily Working Order

### Start work

1. Run `npm run system:full` when you need a fresh full-system snapshot.
2. Inspect `reports/system-report.json` or open `/dev/system-dashboard`.
3. If the system report shows advisory noise only, use the priority list to decide whether action is needed.
4. Read `Mindwp-Docs/core/SYSTEM-STATE.md` for the current frozen-state summary.

### Finish work

1. Run the narrow validator or test layer that matches the changed surface.
2. Run `npm run validate:docs` if you touched docs.
3. Run `npm run system:full` if the change affects reports, validators, or dashboard-facing state.
4. Verify the updated report artifacts rather than relying on assumptions.

---

## 8. Data Ownership

- Generated docs: `Mindwp-Docs/core/GLOBAL-COMPONENTS-CATALOG.md`
- Append-only snapshot history: `reports/system-snapshots/*.json`
- Frozen internal control artifact: `reports/system-report.json`
- Frozen client-safe dashboard artifact: `reports/client-dashboard.json`
- Dashboard code reads reports; it does not define the system truth

---

## 9. Keep This Doc Current

Update this file in the same change when you:

- add or remove a dashboard route
- change the locked report-generation path
- add or remove a primary command
- change which report artifacts are considered authoritative
