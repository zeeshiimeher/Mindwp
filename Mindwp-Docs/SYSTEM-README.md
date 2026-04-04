# MindWP Operator Manual

> THIS FILE IS OPERATIONAL ONLY.
> It does NOT define system truth or rules.
> Governing docs live in `Mindwp-Docs/content-architecture/` and override this file.

---

## 1. Run Order

### Start work
1. Run `node scripts/core/validate-all.mjs`.
2. Run `node scripts/core/system-sync.mjs`.
3. If the system is `CLEAN`, continue.
4. If the system is `WARNING` or `BROKEN`, inspect `Mindwp-Docs/SYSTEM-LOG.md` and `reports/system-drift.json` before changing anything.
5. Open `Mindwp-Docs/project-todo.md` and work only from the active phase.
6. If the task touches architecture, content rules, graph rules, or governance, read the relevant doc in `Mindwp-Docs/content-architecture/` before changing code.

### Finish work
1. Run the validator relevant to the files you changed.
2. Run `node scripts/core/validate-all.mjs`.
3. Run `node scripts/core/system-sync.mjs`.
4. Do not leave the repo in drift or validator failure state.

---

## 2. Core Commands

| Command | Purpose |
|---|---|
| `node scripts/core/validate-all.mjs` | Run the full validator set and write validation-results.json |
| `node scripts/core/system-sync.mjs` | Generate system state, drift, system log, and decision state from the latest validation snapshot |
| `node scripts/dev/add-fix-entry.mjs ...` | Append one fix entry to `reports/fix-log.json` |
| `node scripts/dev/add-session-entry.mjs ...` | Append one session entry to `reports/session-log.json` |
| `node scripts/validators/validate-cta.mjs` | Validate CTA labels, hrefs, and scan scope |
| `node scripts/validators/validate-design-system.cjs` | Validate design-system rules and gradient lifecycle |
| `node scripts/validators/validate-fix-log.mjs` | Validate `reports/fix-log.json` entry shape and lifecycle expectations |
| `npx tsx scripts/validators/validate-graph.ts` | Validate graph types, edges, and orphan rules |
| `node scripts/validators/validate-tokens.mjs` | Validate spacing and font token usage |
| `node scripts/validators/validate-inline-styles.mjs` | Validate production inline-style rules |
| `node scripts/generators/generate-content-registries.mjs` | Regenerate domain registries |
| `npx tsx scripts/generators/generate-authority-map.ts` | Regenerate authority map artifacts |
| `npx tsx scripts/generators/generate-topic-authority-scores.ts` | Regenerate topic authority reports |
| `npm run dev` | Start local development |
| `npm run build` | Run production build |

---

## 3. System Data Model

### Snapshot Layer
These files are overwrite-only and always represent current state.

- `Mindwp-Docs/SYSTEM-LOG.md` = human-readable snapshot
- `reports/system-state.json` = machine-readable snapshot
- `reports/system-drift.json` = machine-readable drift snapshot

`SYSTEM-LOG.md` is a snapshot, not a historical log.

### Fix History
This file is append-only and stores one measurable fix per entry.

- `reports/fix-log.json` = source of truth for fix history
- used by the authority dashboard and fix learning systems
- written through controlled tooling or deliberate manual maintenance

### Session History
This file is append-only and stores work sessions, not fix events.

- `reports/session-log.json` = source of truth for session history
- written via `node scripts/dev/add-session-entry.mjs`

### Lifecycle Rule

- overwrite-only: `SYSTEM-LOG.md`, `system-state.json`, `system-drift.json`
- append-only: `fix-log.json`, `session-log.json`

---

## 4. Workflows

### Local-first Git workflow
1. Treat the local working folder as the source of truth.
2. Use Git to capture and protect the current local state, not to overwrite it.
3. Commit frequently from VS Code after meaningful changes so the repository stays current as a recovery path.
4. Before any branch cleanup or merge, commit the current working tree first.
5. When resolving local branch conflicts, prefer the current local state unless there is an explicit reason not to.
6. Do not pull, reset, or otherwise sync the working folder from Git unless that decision is made deliberately.
7. After substantive work, run `node scripts/core/validate-all.mjs` and `node scripts/core/system-sync.mjs`, then commit the updated code and generated docs together.

### Run a task
1. Run `node scripts/core/validate-all.mjs`.
2. Run `node scripts/core/system-sync.mjs`.
3. Open `Mindwp-Docs/project-todo.md`.
4. If the task is phase-scoped, open the relevant playbook.
5. Make the change.
6. Run the targeted validator.
7. Run `node scripts/core/validate-all.mjs`.
8. Run `node scripts/core/system-sync.mjs`.

### Content or graph change
1. Create the domain data file in `src/domains/<domain>/data/`.
2. Run `node scripts/generators/generate-content-registries.mjs`.
3. If graph inputs changed, run `npx tsx scripts/generators/generate-authority-map.ts`.
4. Run `node scripts/core/validate-all.mjs`.
5. Run `node scripts/core/system-sync.mjs`.

### Component or CSS change
1. Create the component in the appropriate reusable or section directory.
2. Add BEM styles in `src/styles/components.css`.
3. Run design-system, token, and inline-style validators as needed.
4. Run `node scripts/core/validate-all.mjs`.
5. Run `node scripts/core/system-sync.mjs`.

### Fix a validator failure
1. Identify the failing validator from sync output.
2. Run the specific validator directly for detail.
3. Fix the underlying cause, not the symptom.
4. Re-run `node scripts/core/validate-all.mjs`.
5. Re-run `node scripts/core/system-sync.mjs` until clean.
