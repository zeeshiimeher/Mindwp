# Project Guidelines

## Root Cleanliness

- Keep the repository root clean.
- Do not create ad hoc root-level log or temp files such as `*.log`, `.tmp_*`, `.ai_*`, or `.phase*` artifacts.
- Put runtime logs, pid files, scratch output, and temporary command captures inside `_workspace/`.
- Prefer `_workspace/logs/` for logs and `_workspace/tmp/` for temporary files.
- Put machine-readable system outputs in `reports/`, not `_workspace/`.

## Build And Test

- Use `npm run validate:all` for the aggregate validator pass.
- Use `npm run system:report` for the full control-plane refresh.
- Use `npm run test:all` for the aggregated test and validator run.

## Architecture

- Treat the deterministic system as already built; prefer execution, cleanup, validation, and launch work.
- Do not introduce parallel systems or redesign existing architecture without explicit direction.
- Preserve the report-driven control plane and use existing sources of truth.

## Canonical Docs

- See `Mindwp-Docs/core/SYSTEM-README.md` for the system overview.
- See `Mindwp-Docs/core/SYSTEM-INTELLIGENCE-DOC.md` for dashboards, scripts, and reports.
- See `Mindwp-Docs/core/EXECUTION-MEMORY.md` for current execution-state constraints.