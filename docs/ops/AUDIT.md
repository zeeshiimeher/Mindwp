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