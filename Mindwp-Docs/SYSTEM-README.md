# MindWP Operator Manual

> Single operator doc for execution.
> Use this for commands, file roles, and working procedures.

---

## 1. Core Loop

Run this loop for any real change:

```bash
node scripts/system-sync.mjs
```

Interpret the result:
- `CLEAN` → continue
- `WARNING` → inspect drift and fix before expanding scope
- `BROKEN` → stop and fix violations first

---

## 2. Core Files

| Need | File |
|---|---|
| System reality | `Mindwp-Docs/SYSTEM-TRUTH.md` |
| System map | `Mindwp-Docs/SYSTEM-INDEX.md` |
| Operator rules | `Mindwp-Docs/AI-RULES.md` |
| Active work | `Mindwp-Docs/project-todo.md` |
| Current visual execution plan | `Mindwp-Docs/PHASE-7-VISUAL-SYSTEM-AUDIT.md` |
| Design-system rules | `Mindwp-Docs/system/DESIGN-SYSTEM-CONTROL-LAYER.md` |
| Current system log | `Mindwp-Docs/SYSTEM-LOG.md` |
| Drift report | `reports/system-drift.json` |
| Machine state | `reports/system-state.json` |
| Active decisions | `Mindwp-Docs/system/DECISION-STATE.md` |

---

## 3. Core Commands

| Command | Purpose |
|---|---|
| `node scripts/system-sync.mjs` | Run validator state, drift detection, and decision refresh |
| `node scripts/validate-all.mjs` | Run the full validator set |
| `node scripts/validation/validate-cta.mjs` | Validate CTA labels, hrefs, and scan scope |
| `node scripts/validate-design-system.cjs` | Validate design-system rules and gradient lifecycle |
| `npx tsx scripts/validate-graph.ts` | Validate graph types, edges, and orphan rules |
| `node scripts/validation/validate-tokens.mjs` | Validate spacing and font token usage |
| `node scripts/validation/validate-inline-styles.mjs` | Validate production inline-style rules |
| `node scripts/generate-content-registries.mjs` | Regenerate domain registries |
| `npx tsx scripts/generate-authority-map.ts` | Regenerate authority map artifacts |
| `npx tsx scripts/generate-topic-authority-scores.ts` | Regenerate topic authority reports |
| `npm run dev` | Start local development |
| `npm run build` | Run production build |

---

## 4. Working Procedures

### Daily check
1. Run `node scripts/system-sync.mjs`.
2. Read `Mindwp-Docs/SYSTEM-LOG.md`.
3. If drift exists, inspect `reports/system-drift.json`.
4. Start new work only from a clean state.

### Execute a task
1. Open `Mindwp-Docs/project-todo.md`.
2. Work the active phase only.
3. Run the validator relevant to the files you touched.
4. Run `node scripts/system-sync.mjs`.
5. Update task status if the implementation is complete.

### Add a new content page
1. Create the domain data file in `src/domains/<domain>/data/`.
2. Register the page in the graph system if needed.
3. Run `node scripts/generate-content-registries.mjs`.
4. Regenerate the authority map when graph inputs changed.
5. Run `node scripts/system-sync.mjs`.

### Add a new component
1. Create the component in the appropriate reusable or section directory.
2. Add BEM styles in `src/styles/components.css`.
3. Use tokens from `src/styles/foundation.css`.
4. Run design-system, token, and inline-style validators.
5. Run `node scripts/system-sync.mjs`.

### Fix a validator failure
1. Identify the failing validator from sync output.
2. Run the specific validator directly for detail.
3. Fix the underlying cause, not the symptom.
4. Re-run `node scripts/system-sync.mjs` until clean.

---

## 5. Non-Negotiables

- Docs override code.
- `SYSTEM-TRUTH.md` describes reality; it does not hold plans or tasks.
- Generated files are read-only.
- `ContentNodeType` is fixed to 7 formal types.
- CTA labels route through approved config, not ad hoc strings.
- Design-system work uses BEM classes and tokens, not inline token styles.

---

## 6. Health Meanings

| Status | Meaning |
|---|---|
| `CLEAN` | 0 violations and 0 drift |
| `WARNING` | Minor issues present; review before expanding scope |
| `BROKEN` | Violations or serious drift present; fix first |
