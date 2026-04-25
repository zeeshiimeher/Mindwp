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

## Deploy Path

`npm run deploy`

- runs `predeploy-check`
- blocks deploy on failed build or `system:full`
- refreshes `artifacts/system-snapshot.json`
- writes `artifacts/deploy-report.json`

## Working Order

```bash
npm run system:quick
npm run system:full
npm run deploy
```

## Git Gates

- pre-commit: `system:quick`
- pre-push: `system:quick`

## Rules

- run `system:full` before deploy
- `npm run deploy` is the final hard gate
- do not edit generated files

## DEPLOY FLOW (NEW)

Deploy is a validated release pipeline.

Command:
npm run deploy

Flow:
system:quick → system:full → build → snapshot → deploy-report → deploy handoff

Notes:
- Deploy is provider-agnostic unless DEPLOY_COMMAND is set
- Deploy writes artifacts into /artifacts
- Deploy must pass system:full before release

## DAILY WORKFLOW

Before:
build → push

After:
system:quick → build → deploy (for production)