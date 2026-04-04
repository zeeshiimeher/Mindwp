# PHASE 8 — SECTION SYSTEM

## Status
- Phase 7 complete (visual system locked)
- Phase 8 in progress

---

## Goal

Standardize section architecture using composable primitives.

---

## Target Architecture

Section =
SectionWrapper + SectionHeader + LayoutPrimitive + Content

---

## Required Primitives

- SectionWrapper
- SectionHeader
- CardGrid
- SplitLayout
- Stack

---

## Rules

- No manual layout inside sections
- No duplicated grid logic
- No data transformation inside components
- One spacing system only

---

## Known Issues (from audit)

- Duplicate grid logic across 12+ sections
- Mixed spacing systems (gap vs margin vs tailwind)
- No section wrapper abstraction
- Blog/resource sections break layout contract
- Data normalization inside components

---

## Next Steps

1. Finalize spacing system
2. Build primitives
3. Refactor 3 core sections
4. Expand system gradually
