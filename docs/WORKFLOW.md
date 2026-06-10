# WORKFLOW — Figma-First Design Loop

How pages get made right now. **We design the whole site in Figma first. Code comes later.**

This replaces the old React-sandbox → port → validate workflow. That code machinery (the `Mindwp-Design` Vite sandbox, porting to `Mindwp/src`, `pnpm check:names`/typecheck/smoke) is **deferred to the build phase** and lives, for reference only, in `docs/archive/`. Do not work in code until the full design is approved.

## The phase we're in

1. **Design every page in Figma**, page by page, to an approved standard.
2. Only after the design is signed off do we build the code.

The Figma file is `Mindwp2026` (`GXcpV37YaecLcJ23UG616g`). Existing frames there — the Figma Make draft, the rebuilt Home, the Smart Website page — are **research into craft level, not templates to clone.** The standard is [DESIGN.md](./DESIGN.md), not those frames.

## The per-page loop

```
1. SECTION PLAN
   Pull the page's job, owning system, and section spine from
   PAGES.md + STRATEGY.md. For the homepage the 16-section spine is
   already locked in PAGES.md. Confirm each section's job + visual
   archetype before building. No "plain placeholder" sections.
            ↓
2. BUILD IN FIGMA
   Design the page in the Figma file, section by section, to the
   DESIGN.md genre: real artifacts (work screenshots, device frames,
   diagrams, SVG illustration), varied silhouettes, no faux-UI, no
   fake proof, offer stated early, real proof shown.
            ↓
3. REVIEW
   Show the owner the Figma frames (screenshots / the live file).
   The owner flags what's off.
            ↓
4. ONE TWEAK PASS
   One focused pass of section rebuilds + tweaks per the owner's
   feedback. Then the page is done for this round.
            ↓
        next page
```

**One review pass per page** is the agreed rhythm (the owner's instruction). Get the section plan and the genre right *before* building so the single pass is about refinement, not rescue.

## Section plan (Phase 1 of each page)

A section plan confirms, per section:

- **Job** — what this section must make the visitor recognise, understand, believe, or do.
- **Owning system** — which of the five (or "whole picture" for the homepage), respecting boundaries from [OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).
- **Visual archetype** — the silhouette (editorial split, work-frame gallery, statement band, diagram, ladder, comparison columns…), chosen to **differ from its neighbours**.
- **Artifact** — the real thing it shows (which build, what diagram, what SVG). Never a placeholder.
- **Proof + next step** — where proof appears and where the page moves the buyer.

Decisions that should persist live here in the docs; working notes can stay in chat.

## Building in Figma (Phase 2)

Build directly in the `Mindwp2026` file. Apply [DESIGN.md](./DESIGN.md) without exception:

- Real artifacts over faux-UI — every time.
- Vary silhouettes; no card-grid spine, no repeated dark-glow anchors.
- State the offer early; show real work; give a clear next step.
- Use the demonstration builds as the proof motif (roofing, dental implant, etc.).
- Decide the palette + type scale early (warm, confident, senior-studio — not tech-startup) and hold it across pages.

Screenshot frames at legible resolution for review. Keep the file organised so the owner can scroll a coherent page, not scattered fragments.

## Rebuild order

1. **Home** (locked 16-section spine — [PAGES.md](./PAGES.md))
2. **Smart Website Systems** (flagship service)
3. The other four service pages
4. Front-door industries: **Roofing**, **Dental Implant Clinics**, then the two lane hubs
5. Implementation pages (tool-intent capture)
6. **Work**, **About**, **Pricing / How it works**, **Contact** (the new proof + conversion surfaces)
7. Remaining 14 industries (shared template), Resources/Blog

## When the design is approved → code (later)

Only after the full design is signed off do we move to code. At that point the archived build workflow applies: rebuild in production from the approved Figma designs, convert to tokens/components, wire real navigation, and run the validators (`check:names`, typecheck, lint, smoke). Until then, **no code.**

## When to skip the loop

For a tiny tweak to one already-approved section, just make the change in Figma. The full per-page loop is for designing or significantly reworking a page.
