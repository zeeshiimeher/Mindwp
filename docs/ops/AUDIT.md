# MindWP Audit

## Enforcement Surface

- validators enforce blocking rules
- snapshot enforces stable shared inputs
- manifest enforces declared system structure
- generated-file protection enforces read-only artifacts

## `system:full`

`system:full` is the release gate.

- runs validators
- checks snapshot integrity
- verifies route, env, and manifest integrity
- blocks build on failure

## Determinism

```bash
npm run system:full
```

Repeated runs should produce the same result.

## Failure State

- failing validators stop `system:full`
- failed `system:full` blocks build
- blocked build means do not deploy
- failed `predeploy-check` blocks `npm run deploy`
- deploy writes `artifacts/deploy-report.json`
- deploy snapshot rollback uses `artifacts/last-snapshot.json`

## DEPLOY ARTIFACTS (NEW)

Deploy generates:

- artifacts/system-snapshot.json
- artifacts/last-snapshot.json
- artifacts/deploy-report.json

These represent:

- system state at deploy time
- validation status
- release trace

These artifacts are read-only and must not be edited manually.