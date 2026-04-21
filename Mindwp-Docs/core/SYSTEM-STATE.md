# SYSTEM STATE — MindWP

> Current-state operating reference for the live repo.
> This file summarizes what is true now. It does not preserve an execution history.
> If this file conflicts with `SYSTEM.md`, `SYSTEM.md` wins.

---

## USE THIS DOC

Use this file when you need the shortest current-state view of:

- the locked operating model
- the active constraints
- the current risk surface
- the current priorities

Architecture lives in `SYSTEM-ARCHITECTURE.md`. Tooling lives in `TOOLS.md`.

---

## CURRENT OPERATING MODEL

- `SYSTEM.md` is the behavioral authority for identity, hierarchy, and vocabulary.
- `npm run system:full` is the full-system control-plane entrypoint.
- `npm run system:quick` is the fast non-mutating operator check.
- `npm run system:debug` is the full-system debug path.
- `--output=full` is available when a human wants the detailed terminal section in addition to the summary.
- `node scripts/core/validate-all.mjs` is the validator orchestrator.
- The validator orchestrator currently manages 26 validators.
- `/dev/system-dashboard` is the internal operator surface.
- `reports/system-report.json` and `reports/client-dashboard.json` are the primary report artifacts.
- `reports/system-health.json` and `reports/pipeline-report.json` are supporting control-plane artifacts.
- Dashboards read reports; they do not define system truth.
- `/contact` remains the only form entry route.

---

## ACTIVE DECISIONS

- Full-system execution stays locked to `npm run system:full`.
- `system:quick` preserves the locked full-report and dashboard bundle instead of rewriting it.
- Generated drift is blocking.
- Lint remains advisory.
- Summary-mode logging is the normal operator view; debug mode exists for internals and timing.
- `--output=full` is a display choice only; it does not change report ownership or execution authority.
- Input-aware execution skip is allowed for generators and analyzers when outputs are still valid.
- CTA and related-content enforcement stay page-scoped and runtime-backed.
- Shared route and graph owners remain the authority for SEO, metadata, and relationships.
- Static report artifacts remain the source for dashboard visibility.

---

## ACTIVE CONSTRAINTS

- No duplicate validators, duplicate report engines, or dashboard-owned recomputation.
- No inline forms or alternate conversion routes.
- No manual report-path workflows instead of the locked control plane.
- No manual related-content systems instead of graph-backed resolution.
- No structural changes that break canonical systems, page identity, or CTA enforcement.

---

## CURRENT RISKS

- Report/dashboard drift if artifacts and readers diverge.
- Topic-authority regression if canonical topics change without supporting coverage.
- Conversion failure if contact configuration is missing or invalid.
- Test artifact staleness if test outputs are read without a fresh producing run.
- Docs drift if human instructions lag behind the control plane.
- Advisory lint drift accumulating until it hides more meaningful regressions.

---

## CURRENT PRIORITIES

1. Keep `reports/system-report.json` authoritative.
2. Keep `reports/client-dashboard.json` aligned with the locked full-system run.
3. Preserve graph, CTA, and topic-authority guarantees.
4. Keep human docs aligned with the live command and report surface.
5. Clear advisory drift before it spreads into more important surfaces.

---

## CROSS-REFERENCE MAP

- Identity, hierarchy, and boundaries: `SYSTEM.md`
- Architecture map: `SYSTEM-ARCHITECTURE.md`
- Graph and authority rules: `GRAPH.md`
- CTA and contact contracts: `CONVERSION.md`
- Commands, validators, and reports: `TOOLS.md`
