# WORKFLOW — MindWP

> Operational guide for the live execution pipeline.
> This document describes the manifest-owned control plane.

---

## USE THIS DOC

Use this doc when running validation, regeneration, build, and deploy commands.

Runtime truth still lives in code. This file only documents the operational path.

---

## CONTROL-PLANE OWNERS

- manifest ownership: `scripts/core/system-manifest.mjs`
- validator runner: `scripts/core/validate-all.mjs`
- full-gate entrypoint: `scripts/core/run-system-full.mjs`
- system summary: `scripts/core/system-report.mjs`
- safe build path: `scripts/runners/build-safe.mjs`
- snapshot generation: `scripts/core/build-system-snapshot.mjs`
- report export: `scripts/analyzers/export-reports.mjs`

---

## COMMAND PATHS

### `npm run system:quick`

Fast operator validation.

Use it for:

- early checks while editing
- narrow feedback before a full run

It is not the release gate.

### `npm run system:full`

Full validation and reporting gate.

This is the authoritative path for:

- manifest-owned validators
- report generation
- tests
- snapshot and system summary outputs

### `npm run build`

Production build through `scripts/runners/build-safe.mjs`.

`build` must validate the same repo state that standalone `validate-all` and `system:full` validate. It must not hide drift with build-only mutation.

### `npm run deploy`

Validated release path.

Deploy must pass the controlled validation and build path before release artifacts are considered trustworthy.

---

## LIVE PIPELINE MODEL

```text
repo state -> validate-all -> reports -> export-reports -> system-report -> build-safe -> production build
```

Expanded view:

1. `system-manifest.mjs` defines validators and report ownership.
2. `validate-all.mjs` runs the validator set for the current repo state.
3. Validators emit manifest-owned report artifacts.
4. `export-reports.mjs` produces derived manifest-owned reports.
5. `system-report.mjs` summarizes the run and prepares dashboard inputs.
6. `build-safe.mjs` runs the full gate before allowing the production build to continue.

---

## GENERATED-SOURCE RULE

Generator-owned source files are part of repo state.

Rules:

- If generated source is stale, validation should fail.
- `build` must not pass by silently correcting generator drift that `system:full` would fail.
- Regenerate intentionally when generator-owned source changes.

Typical explicit regeneration command:

```bash
npm run generate:core
```

Use explicit generation when working on generator-owned source such as content registries, authority map inputs, or generated component docs.

---

## RECOMMENDED WORKING ORDER

```bash
npm run system:quick
npx tsc --noEmit
npm run lint
npm run system:full
npm run build
```

For production release:

```bash
npm run deploy
```

---

## RULES

- Do not edit generated files or report artifacts manually.
- Do not treat directory contents as source of truth when the manifest owns artifact inventory.
- Use `system:full` before release decisions.
- Use `build` only through the safe build path.
- Keep docs aligned with manifest-owned behavior, not old workflow assumptions.

---

## WHAT THIS DOC REPLACES

This workflow document replaces incomplete mental models based on:

- partial validator descriptions
- build-only preflight mutation
- missing report-generation steps
- missing snapshot ownership
- references to non-existent audit docs

The live source of truth for pipeline ownership is still code.