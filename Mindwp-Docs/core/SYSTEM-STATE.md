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
- `node scripts/core/validate-all.mjs` is the validator orchestrator.
- `/dev/system-dashboard` is the internal operator surface.
- `reports/system-report.json` and `reports/client-dashboard.json` are the primary report artifacts.
- Dashboards read reports; they do not define system truth.
- `/contact` remains the only form entry route.

---

## ACTIVE DECISIONS

- Full-system execution stays locked to `npm run system:full`.
- Generated drift is blocking.
- Lint remains advisory.
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
- Advisory lint drift accumulating until it hides more meaningful regressions.

---

## CURRENT PRIORITIES

1. Keep `reports/system-report.json` authoritative.
2. Keep `reports/client-dashboard.json` aligned with the locked full-system run.
3. Preserve graph, CTA, and topic-authority guarantees.
4. Keep documentation aligned with the live control plane.
5. Clear advisory drift before it spreads into more important surfaces.

---

## CROSS-REFERENCE MAP

- Identity, hierarchy, and boundaries: `SYSTEM.md`
- Architecture map: `SYSTEM-ARCHITECTURE.md`
- Graph and authority rules: `GRAPH.md`
- CTA and contact contracts: `CONVERSION.md`
- Commands, validators, and reports: `TOOLS.md`
