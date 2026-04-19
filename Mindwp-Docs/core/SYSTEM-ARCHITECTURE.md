# SYSTEM ARCHITECTURE — MindWP

> High-level architecture map for the live repo surface.

---

## 1. System Layers

```
┌──────────────────────────────────────────────────────┐
│ GOVERNANCE                                           │
│ Mindwp-Docs/core/SYSTEM.md + supporting core docs    │
└──────────────────────┬───────────────────────────────┘
                       │ rules govern
┌──────────────────────▼───────────────────────────────┐
│ CONTENT + ROUTE MODEL                                │
│ src/domains/ · src/lib/content-graph/ · inventory    │
└──────────────────────┬───────────────────────────────┘
                       │ rendered by
┌──────────────────────▼───────────────────────────────┐
│ PRESENTATION                                         │
│ src/app/ · src/components/ · SmartCTA · templates    │
└──────────────────────┬───────────────────────────────┘
                       │ checked by
┌──────────────────────▼───────────────────────────────┐
│ VALIDATION + ANALYSIS                                │
│ validate-all · analyzers · generators                │
└──────────────────────┬───────────────────────────────┘
                       │ normalized by
┌──────────────────────▼───────────────────────────────┐
│ CONTROL PLANE                                        │
│ npm run system:full                                  │
│ scripts/core/run-system-full.mjs                     │
│ scripts/core/system-report.mjs                       │
└──────────────────────┬───────────────────────────────┘
                       │ consumed by
┌──────────────────────▼───────────────────────────────┐
│ OBSERVABILITY                                        │
│ reports/system-report.json                           │
│ reports/client-dashboard.json                        │
│ /dev/system-dashboard                                │
└──────────────────────────────────────────────────────┘
```

The repo no longer treats retired split dashboards or legacy sync surfaces as active architecture surfaces.

---

## 2. Content Flow

Content type determines route purpose; it does not force a single funnel.

| Type | Role | Routes To |
|---|---|---|
| Blog | Search capture and problem framing | Service, Resource |
| Resource | Framework and system explanation | Service, Case Study |
| Case Study | Proof and implementation evidence | Service |
| Service | Primary conversion destination | `/contact` |
| Industry | Vertical-specific context | Service |
| Feature | System component detail | Service via graph-backed linking |

Primary CTA remains `Start a Conversation -> /contact`.

---

## 3. Architectural Rules

1. Docs govern expected behavior. If governing docs and code conflict, the code must be brought back into line.
2. `inventory.ts` remains the route-metadata source of truth.
3. `SmartCTA` remains the runtime CTA renderer.
4. Components render; they do not become report engines or graph orchestrators.
5. Generated files and frozen report artifacts are not edited manually.
6. The full control-plane refresh is `npm run system:full`, not a manual report or sync script.
7. Dashboard UIs consume frozen artifacts; they do not define system truth.

---

## 4. Key Paths

| Area | Location |
|---|---|
| Governing system doc | `Mindwp-Docs/core/SYSTEM.md` |
| Route metadata | `src/lib/content-quality/inventory.ts` |
| Content graph types | `src/lib/content-graph/types.ts` |
| SmartCTA | `src/components/system/SmartCTA.tsx` |
| CTA label config | `src/config/ctaLabels.ts` |
| Contact href builder | `src/lib/contact/contactHref.ts` |
| Domain registries | `src/domains/*/registry.ts` |
| Validator orchestrator | `scripts/core/validate-all.mjs` |
| Locked full-system runner | `scripts/core/run-system-full.mjs` |
| Report normalizer | `scripts/core/system-report.mjs` |
| Manual-path lock | `scripts/core/disallow-manual-report-paths.mjs` |
| Internal system dashboard | `src/app/dev/system-dashboard/` |
| System report reader | `src/lib/dev/system-report.ts` |
| Image pipeline | `src/lib/image-system/` and `scripts/image-system/` |

---

## 5. Documentation Map

| Folder | Contains |
|---|---|
| `Mindwp-Docs/core/` | Governing docs and core operating references |
| `Mindwp-Docs/planning/` | Planning notes and audits |
| `Mindwp-Docs/system/` | Generated or system-adjacent operational reference docs |
| `Mindwp-Docs/Automatic-Image-Generation-System/` | Image pipeline architecture and testing guides |

Start with `Mindwp-Docs/core/SYSTEM.md`, then `Mindwp-Docs/core/TOOLS.md`, then `Mindwp-Docs/core/SYSTEM-STATE.md`.
