# SYSTEM ARCHITECTURE — MindWP

> High-level architecture map. Entry point for understanding how the system fits together.

---

## 1. System Layers

```
┌─────────────────────────────────────────────────────┐
│  GOVERNANCE                                         │
│  governance/CONTENT-GOVERNANCE.md · core/SYSTEM-RULES.md    │
│  Authority stack: FOUNDATION → ARCHITECTURE → GRAPH │
│                   → BLUEPRINT → GOVERNANCE          │
└──────────────────────┬──────────────────────────────┘
                       │ rules flow down
┌──────────────────────▼──────────────────────────────┐
│  CONTENT GRAPH                                      │
│  211 nodes · 7 types · intent-based routing         │
│  src/lib/content-graph/ · authority-map.json         │
└──────────────────────┬──────────────────────────────┘
                       │ edges resolve to
┌──────────────────────▼──────────────────────────────┐
│  PRESENTATION                                       │
│  Next.js pages · BEM components · CTA engine        │
│  src/app/ · src/components/ · src/lib/ui/            │
└──────────────────────┬──────────────────────────────┘
                       │ images from
┌──────────────────────▼──────────────────────────────┐
│  IMAGE GENERATION                                   │
│  Sharp pipeline · SVG overlays · 3 layout variants  │
│  src/lib/image-system/ · scripts/generators/         │
│  Providers: Unsplash · Pexels · Pixabay             │
└──────────────────────┬──────────────────────────────┘
                       │ validated by
┌──────────────────────▼──────────────────────────────┐
│  VALIDATION                                         │
│  17 validators (blocking + advisory control layer)  │
│  scripts/validators/ · scripts/core/validate-all.mjs │
└──────────────────────┬──────────────────────────────┘
                       │ reported to
┌──────────────────────▼──────────────────────────────┐
│  OBSERVABILITY                                      │
│  system-report · system-sync · drift                 │
│  /dev/authority-dashboard · reports/ · logs/          │
└─────────────────────────────────────────────────────┘
```

---

## 2. Content Flow

Content type determines routing. No linear funnel.

| Type | Role | Routes To |
|---|---|---|
| Blog | Search capture, problem exploration | Service (PROBLEM), Resource (SYSTEM/FRAMEWORK) |
| Resource | Evergreen frameworks, system explanation | Service (ACTIONABLE/EDUCATIONAL), Case Study (EXAMPLE) |
| Case Study | Implementation proof | Service |
| Service | Conversion destination | /contact |
| Industry | Vertical-specific context | Service |
| Feature | System component detail | Service (via graph) |

Primary CTA everywhere: **"Start a Conversation" → /contact**

---

## 3. Core Rules

1. **Docs override code.** If governance docs and code conflict, change the code.
2. **One file, one job.** No file absorbs responsibilities from another.
3. **Fix → sync → verify.** Every change runs validators then system-sync.
4. **Snapshots are read-only.** Generated files are never manually edited.
5. **ContentNodeType is the only type system.** No derived runtime content types.
6. **BEM everywhere.** Inline styles only for approved shadcn/ui and SVG exceptions.
7. **SYSTEM-CONTRACT.md governs behavior.** All conversion, CTA, and routing behavior defined there.

---

## 4. Key Paths

| Area | Location |
|---|---|
| Content graph types | `src/lib/content-graph/types.ts` |
| CTA engine | `src/lib/ui/ctaEngine.ts` |
| CTA resolver | `src/lib/ui/ctaResolver.ts` |
| Domain registries | `src/domains/*/registry.ts` |
| Validator framework | `scripts/core/validate-all.mjs` |
| System sync | `scripts/core/system-sync.mjs` |
| System Health dashboard | `src/app/dev/system-dashboard/` |
| Image system pipeline | `src/lib/image-system/` |
| Image CLI generator | `scripts/image-system/image-generate.ts` |
| Image config + thresholds | `src/lib/image-system/config.ts` |
| Generated images | `public/images/<domain>/<slug>/` |

---

## 5. Documentation Map

| Folder | Contains |
|---|---|
| `core/` | System truth, architecture, graph rules, component catalog |
| `governance/` | Content governance hierarchy |
| `planning/` | Content inventory and planning docs |
| `Automatic-Image-Generation-System/` | Image pipeline architecture and testing guide |

Entry point: `core/SYSTEM-README.md`
