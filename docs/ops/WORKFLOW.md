# MindWP Workflow

## Command Path

### `system:quick`

Checks type safety.

- runs core validators
- skips snapshot rebuild

### `system:full`

Runs the full gate.

- runs validators
- verifies snapshot integrity
- runs tests
- checks env and manifest integrity

## Build Path

`npm run build`

- runs `system:full`
- stops on failure

## Working Order

```bash
npm run system:quick
npm run system:full
```

## Git Gates

- pre-commit: `system:quick`
- pre-push: `system:full`

## Rules

- run `system:full` before deploy
- do not edit generated files