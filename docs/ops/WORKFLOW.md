# MindWP Workflow

## Philosophy

- Local-first
- Deterministic validation
- No unsafe deploys
- Minimal commands

---

## Commands

### `system:quick`

FAST DEV CHECK

Runs:

- typecheck
- core validators

Does NOT:

- rebuild snapshot
- run heavy analyzers

---

### `system:regen`

REGENERATE SYSTEM

Runs:

- snapshot rebuild
- analyzers
- reports

---

### `system:full`

FULL SYSTEM GATE

Runs:

- all validators
- tests
- snapshot
- env validation
- manifest integrity

---

## Build Safety

`npm run build`

- automatically runs `system:full`
- blocks if the system fails

---

## Development Flow

```bash
npm run system:quick
npm run system:regen
npm run system:full
```

---

## Git Workflow

- pre-commit -> `system:quick`
- pre-push -> `system:full`

---

## Rules

- never deploy without `system:full`
- never edit generated files
- regenerate after content changes