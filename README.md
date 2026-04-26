# MindWP — Smart Website Systems

MindWP is a systems-first website platform for service businesses.

It is not a blog business, affiliate project, ad site, generic agency site, or page-builder portfolio.

The repo combines:

- a Next.js application
- domain-owned content registries
- a deterministic content graph
- CTA and contact-flow enforcement
- validators, reports, snapshots, and deploy gates

The goal is simple:

```text
One command -> full validation -> safe deploy
```

---

## What MindWP Is

MindWP positions websites as lead-handling infrastructure, not just design surfaces.

The system exists to support:

- enquiry capture
- follow-up reliability
- CRM and response flow
- local visibility
- review and trust signals
- conversion clarity

Public positioning is controlled by `docs/core/FOUNDATION.md`.

---

## What This Repo Is Not

Do not treat this repo as:

- a blog-first content site
- an SEO content farm
- a generic WordPress agency website
- a template showcase
- a collection of disconnected service pages
- a place for experimental runtime AI behavior

Content should only be added when it strengthens authority, proof, clarity, or conversion progression.

---

## Trusted Command Path

Use these commands only through the intended workflow.

```bash
npm install
npm run system:quick
npm run system:regen
npm run system:full
npm run dev
```

Production release must go through:

```bash
npm run deploy
```

`npm run system:full` is the trusted system gate. It validates structure, regenerates required artifacts, runs checks, and confirms the repo is safe to build.

Validators protect structure. Manual review protects authority.

---

## Documentation Order

Read docs in this order before making meaningful changes:

1. `docs/core/FOUNDATION.md`
2. `docs/core/WRITING.md`
3. `docs/core/CONTENT.md`
4. `docs/core/CONVERSION.md`
5. `docs/core/GRAPH.md`
6. `docs/core/SYSTEM-RULES.md`
7. `docs/core/SYSTEM-ARCHITECTURE.md`
8. `docs/ops/WORKFLOW.md`
9. `docs/ops/AUDIT.md`
10. `docs/ops/CONTENT-INVENTORY.md`

If docs conflict, follow the authority order defined in `FOUNDATION.md`.

---

## Main Repo Areas

| Area | Purpose |
| ---- | ------- |
| `src/app/` | canonical app routes and route handlers |
| `src/domains/` | domain-owned content, registries, and content model |
| `src/components/` | rendering components and system UI surfaces |
| `src/lib/` | graph, SEO, CTA, contact, reporting, and shared logic |
| `src/config/` | CTA labels, UI intelligence, environment and policy config |
| `scripts/` | validators, analyzers, reports, deploy, and system commands |
| `reports/` | generated validation and audit outputs |
| `artifacts/` | generated deploy/snapshot outputs |
| `docs/` | governance, workflow, UI, and planning docs |

---

## Hard Rules

- One content item gets one canonical route.
- Canonical systems, topics, and industries come from registries.
- Domain data does not own CTA intent.
- Related content is graph-derived, not manually listed.
- `/contact` is the only form entry route.
- `PrimaryCTASection` owns primary page CTA rendering.
- Components render content; they do not query the graph directly.
- Generated reports and artifacts are not edited manually.
- Passing validators does not automatically mean a page is persuasive.

---

## Local Development

```bash
npm run dev
```

Use quick checks during active work:

```bash
npm run system:quick
```

Run the full gate before serious commits, launch checks, or deploy:

```bash
npm run system:full
```

---

## Deployment

Production deployment is gated.

Use:

```bash
npm run deploy
```

Do not bypass the deploy gate with direct platform deploy commands.

---

## Final Operating Principle

MindWP is not trying to publish more pages.

It is trying to make a serious service-business owner feel:

> This person understands how leads are lost, handled, followed up, and converted.