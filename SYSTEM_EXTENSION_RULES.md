# SYSTEM EXTENSION RULES

This system is in production freeze mode.

The public execution entry is `npm run system:full`.

Do not run direct report-generation commands in production mode. They are intentionally blocked so validation, snapshots, and dashboard artifacts stay synchronized.

## Frozen Contracts

The following surfaces are locked contracts:

1. `reports/system-report.json`
2. `reports/client-dashboard.json`
3. `src/domains/features/registry.ts`
4. `src/domains/services/registry.ts`
5. `src/lib/cta/ctaRegistry.ts`
6. `src/lib/content-graph/registry.ts`

These contracts are enforced by:

1. `scripts/lib/system-contract-schemas.mjs`
2. `scripts/validators/validate-production-contracts.ts`
3. `scripts/core/system-report.mjs`
4. `scripts/core/validate-all.mjs`

## Safe Extensions

The following changes are allowed without redefining the contract surface:

1. Add new registry entries that match the existing shape.
2. Add new pages, services, features, topics, or graph nodes that satisfy the current validators.
3. Improve copy, styling, or dashboard presentation without changing report field names or object shapes.
4. Add new advisory reports that do not replace or silently mutate frozen report contracts.
5. Add new validators if they integrate through `validate-all` and do not weaken existing blocking checks.

## Unsafe Changes

The following changes are contract-breaking and must not be made as isolated edits:

1. Renaming, removing, or changing fields in `system-report.json` or `client-dashboard.json`.
2. Changing the top-level shape of feature, service, CTA, or content-graph registry entries.
3. Bypassing `npm run system:full` to generate reports directly.
4. Adding internal validator/debug terminology to client-facing dashboard/report content.
5. Making schema changes without updating the report builder, validators, and dashboard readers together.

## Required Paired Updates

If a frozen contract must change, update all of the following in the same change set:

1. The source registry or report builder.
2. `scripts/lib/system-contract-schemas.mjs`.
3. `scripts/validators/validate-production-contracts.ts`.
4. Any reader types in `src/lib/dev/system-report.ts` or `src/lib/dashboard/client-dashboard.ts`.
5. Any dashboard routes or components that consume the changed fields.
6. Any affected docs that describe the command or contract surface.

## Snapshot Rule

Every successful `npm run system:full` run writes a frozen snapshot to `reports/system-snapshots/`.

Use snapshot diffs to inspect real contract or status drift. Do not rely on memory or manual assumptions when evaluating system changes.