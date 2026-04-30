# COMPONENT SYSTEM — PHASE 9 EXECUTION TASKS

> This is an execution checklist. Do not design. Do not refactor architecture.
> Only fix correctness, consistency, and system integrity.

> SCOPE:
> These rules apply ONLY to new system components located in:
> /components/sections
>
> Old components (used by existing pages) are NOT to be modified during this phase.
> Migration will replace old components with new ones page-by-page.

---

# 🎯 GOAL

Convert current components into a **deterministic, validated, production-safe system**.

Every section must follow:

data → renderer → component

---

# 🔴 GLOBAL FIXES (APPLY TO ALL COMPONENTS FIRST)

## 1. Key Stability (MANDATORY)

Replace ALL unsafe keys:

❌ key={item}  
❌ key={label}  
❌ key={text}  
❌ key={action.label}  

✅ Use:

```
key={`${value}-${index}`}
```

OR:

```
key={item.id}
```

---

## 2. Empty State Guards (MANDATORY)

Add at top of EVERY component:

```
if (!heading?.title) return null;
```

For lists:

```
if (!items?.length) return null;
```

For visuals:

```
if (!image?.src) return null;
if (!visual?.rows?.length) return null;
```

---

## 3. Enforce ID in Data (MANDATORY)

All repeatable items must have:

```
id: string
```

Remove fallback key logic like:

```
item.id ?? `${title}-${index}`
```

---

## 4. Remove UI Logic Leakage

NO parsing inside components.

❌

```
item.badge.split(',')
```

✅ Move to data:

```
badgeList: string[]
```

---

## 5. CTA SYSTEM FIX (MANDATORY)

- Rename `PrimaryCTASection` → `CTASection`
- Single CTA component only
- Add guards:

```
if (!heading?.title) return null;
if (!actions?.length) return null;
```

- Fix keys:

```
key={`${action.label}-${index}`}
```

- Enforce variants:

```
'primary' | 'soft-panel' | 'split-card'
```

---

## 6. Animation Control (MANDATORY)

Add prop:

```
animate?: boolean
```

Apply:

```
animate ? 'rd-animate-up' : ''
```

---

# 🧩 COMPONENT TASKS

---

## HeroSplitSection

### Fix:

- Replace:
```
key={row.label}
```

→
```
key={`${row.label}-${index}`}
```

- Add guard:
```
if (!visual?.rows?.length) return null;
```

- Fix action keys:
```
key={`${action.label}-${index}`}
```

---

## GridCardsSection

### Fix:

- Add guard:
```
if (!items?.length) return null;
```

- Remove badge parsing:

❌
```
item.badge.split(',')
```

✅
```
badgeList: string[]
```

---

## BeforeAfterSection

### Fix:

- Replace:
```
key={item}
```

→
```
key={`${item}-${index}`}
```

- Add guard:
```
if (!items?.length) return null;
```

---

## ProcessStepsSection

### Fix:

- Replace:
```
key={step.index}
```

→
```
key={`${step.index}-${index}`}
```

- Add guard:
```
if (!steps?.length) return null;
```

---

## LayerStackSection

### Fix:

- Already has guard ✅
- Ensure all items have `id`

---

## FitCheckSection

### Fix:

- Replace:
```
key={item.text}
```

→
```
key={`${item.text}-${index}`}
```

- Add guard:
```
if (!items?.length) return null;
```

---

## AccordionFAQSection

### Fix:

- Add guard:
```
if (!items?.length) return null;
```

---

## RelatedContentSection

### Fix:

- Add minimum constraint:
```
if (items.length < 2) return null;
```

- Ensure all items have `id`

---

## ImageStorySection

### Fix:

- Replace:
```
key={item}
key={highlight.label}
```

→
```
key={`${item}-${index}`}
key={`${highlight.label}-${index}`}
```

- Add guard:
```
if (!image?.src) return null;
```

---

## ScopeSection

### Fix:

- Replace:
```
key={group.label}
key={item}
```

→
```
key={`${group.label}-${index}`}
key={`${item}-${index}`}
```

- Add guard:
```
if (!groups?.length) return null;
```

---

## CTASection (FINAL SYSTEM)

### Fix:

- Rename from PrimaryCTASection to CTASection update imports/validators etc 
- Add guards:

```
if (!heading?.title) return null;
if (!actions?.length) return null;
```

- Fix keys:

```
key={`${action.label}-${index}`}
key={`${support}-${index}`}
```

- Enforce max width (CSS):

```
max-width: 28ch;
```

---

# 🔒 VALIDATION LAYER (NEXT STEP AFTER FIXES)

Implement at renderer level with strict contract enforcement:

## Contract Flow

DATA FILE → VALIDATOR → RENDERER → COMPONENT

- Data = source of truth (do not mutate)
- Validator = strict gatekeeper (reject invalid data)
- Renderer = pure mapping (no logic)
- Component = pure UI (no parsing, no fixing)

---

## Validator Rules (MANDATORY)

- MUST reject invalid data (return null)
- MUST NOT mutate or auto-fix data
- MUST NOT add defaults silently

❌ Do NOT:

```
if (!data.title) data.title = "Default"
if (typeof badge === "string") badgeList = badge.split(',')
```

---

## Renderer Rules

- MUST call validator before render
- MUST NOT transform or fix data
- MUST pass validated data directly

Example:

```
const data = validateSection(rawData)
if (!data) return null

return <Section {...data} />
```

---

## Data Adjustment Rule

- Fix data ONLY at data file level
- Do NOT fix in validator
- Do NOT fix in component

---

## Goal

Ensure every section follows a strict, predictable pipeline with zero hidden logic.

# 🚨 DO NOT

- redesign UI
- change layout system
- modify data structure globally
- introduce new components

---

# ✅ SUCCESS CHECK

- No unsafe keys
- No empty render states
- Single CTA system
- No UI parsing logic
- All components guarded
- All items have IDs

---

# 🧭 EXECUTION ORDER

1. Fix keys (all components)
2. Add guards (all components)
3. Fix CTA system
4. Remove logic leakage
5. Enforce IDs
6. Add animation control

---

# 🧠 MINDSET

You are not improving visuals.

You are enforcing:

"system correctness and long-term stability"
