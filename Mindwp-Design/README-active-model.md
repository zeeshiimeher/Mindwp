# Mindwp-Design — Active Model Notes

This is the design sandbox for MindWP, nested inside the main `Mindwp/` repository on the same git branch. Production code lives at the repo root (`../src/`, `../docs/`). See `../docs/WORKFLOW.md` for the cross-folder design loop.

This file documents the **active strategy model** the sandbox should design against, so design sessions don't reintroduce drift terms that will get blocked when the page eventually ports to production.

## Active 5-System Model

| # | System | Slug | Visual role |
|---|---|---|---|
| 1 | **Smart Website Systems** | `smart-website-systems` | Flagship / hub. Use cyan `var(--mw-signal-cyan)`. |
| 2 | Local SEO Authority Systems | `local-seo-authority` | Find / verify protection. Use teal `var(--mw-signal-teal)`. |
| 3 | Lead Response & Handling Systems | `lead-response-handling` | First response protection. Use amber `var(--mw-signal-amber)`. |
| 4 | Follow-Up & CRM Systems | `follow-up-crm` | Ownership / next-step protection. Use green `var(--mw-signal-green)`. |
| 5 | Reputation & Review Systems | `reputation-review-systems` | Proof protection. Use purple `var(--mw-signal-purple)`. |

**Smart Website Systems is the flagship.** Never render the five as five equal tiles or a 2×3 grid. Two acceptable layouts:

- Flagship row + 4-cell stack (SWS featured on top, the other four arranged 2×2 or 3+1 below).
- Hub + 4 orbital positions (with an actual connecting graphic, not whitespace).

## Banned Names (production validator blocks these)

When the design ports to the production code at the repo root, `pnpm check:names` will fail the build on any of these. Rewrite during the port. Better yet: design with active names from the start.

**Removed offer names:**
- "AI Lead Handling" → use **Lead Response & Handling Systems**
- "CRM & Automation" → use **Follow-Up & CRM Systems**
- "Revenue Growth" / "Revenue Growth Systems" → **DROP entirely** (Revenue Recovery is a lens only, not an offer)

**Removed slugs:**
- `ai-lead-handling`, `crm-automation`, `revenue-growth`, `growth-revenue-systems`, `aichat`, `workflows`

**Removed routes:**
- `/systems`, `/topics`, `/blog/topic`, `/portfolio`

**Vendor names (never publicly visible):**
- GoHighLevel, GHL, HighLevel

**Other:**
- "Revenue Recovery" as a service / route / panel / category (the words may appear in copy only as a cross-system lens)
- "six systems", "six connected systems", "digital infrastructure consultancy"

## Homepage Files

The homepage now lives as a single consolidated render file at `src/app/Home.tsx` (13 sections) with a second variant at `src/app/HomeV2.tsx` (14 sections, longer-form, per the v2 plan). Both render directly from `src/app/App.tsx` based on the `page` state.

The previously-separate `components/Hero.tsx`, `LeakDiagnosis.tsx`, `Foundation.tsx`, `SixSystemStack.tsx`, etc. have all been merged into those Home files. Only `components/Header.tsx` and `components/Footer.tsx` remain as standalone reusable layout shells.

## Sandbox Legacy Pages

These older files in `src/app/pages/` still reference pre-reset names and should be rewritten (or renamed) when they get touched:

| Legacy file | Replace with | Notes |
|---|---|---|
| `pages/AILeadHandling.tsx` | `pages/LeadResponseHandling.tsx` | Rewrite copy for first-response / routing framing |
| `pages/AIChat.tsx` | `pages/WebsiteChat.tsx` | Canonical feature is `/features/website-chat` |

## Theme + CSS Variables

`src/app/theme.css` exposes a subset of Mindwp's production palette as CSS vars (`--mw-brand-primary`, `--mw-signal-cyan`, etc.) so sandbox JSX can use the same colors as the production token system. Loaded from `src/main.tsx`.

Use the vars when colors match the palette. Use inline hex (`#08111F`, `#F6FAFC`) for anything outside it. Don't fight the sandbox — it exists for fast iteration.

## Voice

Lead with working-day objects: calls, forms, quotes, bookings, consultation requests, missed replies, follow-up nobody owns, reviews not requested.

Public anchor headline: **"Work Comes In. Too Much Slips Away."**

No fake metrics, testimonials, rankings, or client outcomes. Plausibly specific illustrative details (postcodes, timestamps, dwell times) are fine and recommended — they make sections feel observed.

## What Stays In This Folder

This README. Theme.css. Sandbox components and pages. Vite config. That's it. Strategy docs, validators, page-role rules, voice rules — all live in `../docs/` and `../CLAUDE.md`. When you need them, read them in the production folder.
