# SYSTEM RULES — MindWP

> AI execution rulebook for MindWP.
> Use this when changing docs, source, content, routes, data, metadata, or page systems.
> The goal is to prevent future sessions from reviving removed strategy or creating parallel models.

---

## ACTIVE BUILD RULE

Business reality, buyer recognition, page intent, section quality, and visual trust come before extraction.

The active build path is:

```text
BUSINESS REALITY -> BUYER RECOGNITION -> PAGE INTENT -> PATTERN -> SECTION DESIGN -> JSX -> APPROVAL -> SYSTEMIZATION
```

Checks protect approved decisions. They do not decide the page before it exists.

---

## ACTIVE OFFER RULE

Use only the active public systems defined in [./OFFER-ARCHITECTURE.md](./OFFER-ARCHITECTURE.md).

Revenue Recovery is a cross-system improvement layer only.

It is not:

- a primary service page
- a route family
- a graph category
- a navigation pillar
- an equal service beside the active systems

Implementation services are active implementation pathways under Smart Website Systems, not primary systems.

---

## DO NOT REVIVE REMOVED STRATEGY

Do not:

- revive removed service names
- create parallel offer models
- use a removed offer model
- preserve removed service categories
- keep removed routes for unpublished pages
- create compatibility wrappers for removed routes
- create a `/systems` public taxonomy unless governing docs are intentionally updated later
- use removed identifiers in metadata, graph logic, redirects, navigation, or content inventory

If removed-source remnants or stale docs conflict with the active model, update them in the relevant cleanup pass. Do not preserve both.

---

## PUBLIC LANGUAGE RULES

Do not publicly mention backend CRM, automation, AI, booking, form, or white-label platform names.

Do not publicly mention GoHighLevel, GHL, or HighLevel.

Public language should sell:

- clarity
- handling
- response
- follow-up ownership
- visible status
- reviews and proof
- local trust
- revenue recovery from work already in motion

Public language should not sell:

- tools
- dashboards
- backend platform setup
- AI chatbot features
- CRM software
- generic automation
- rankings hacks
- cheap website packages

---

## PAGE ROLE RULES

Service pages are active system decision pages.

Feature pages are capability pages inside one active system.

Implementation service pages are implementation pathways under Smart Website Systems.

Industry pages are vertical landing pages.

Blogs, resources, and case studies support the flow:

```text
Blog -> Resource -> Industry -> Service
```

Do not:

- turn feature pages into SaaS pages
- turn service pages into catalog pages
- turn blogs or resources into BOFU service pages
- let resources trap readers in endless education
- treat implementation pages as primary systems
- treat Revenue Recovery as a CTA category or service page

---

## PROOF AND CLAIMS

Do not create fake proof.

Forbidden:

- invented metrics
- fabricated testimonials
- fake rankings
- unsupported revenue claims
- guaranteed reviews
- guaranteed rankings
- guaranteed lead volume
- fictional client results presented as real

Scenario studies and system examples are allowed only when clearly framed as illustrative or operational examples. They must not imply real attribution or measured outcomes.

---

## ARCHITECTURE RULES

- `src/app/**` owns routes.
- `src/domains/**` owns domain content, data, renderers, and registries.
- `domains/services` owns active system service pages.
- `domains/services/implementation` owns implementation pathway pages.
- `components/` owns reusable UI surfaces.
- `styles/` owns tokens, layout, primitives, and typography.
- `lib/content-graph` owns graph metadata and relationships.
- `lib/cta`, `lib/contact`, and `lib/seo` own shared behavior.
- `config/routeOwnership.ts` and indexing config must align with active routes.

Graph/content metadata should use `primarySystem` and `supportingSystems[]`, not old broad system-array metadata as the strategic source of truth.

Related content injection belongs in config/domain layers, not manually in page bodies after the journey is stable.

---

## BUILD-SYSTEM RULES

Allowed while proving a page:

- JSX-owned content
- local arrays for section-specific content
- Tailwind layout/composition utilities
- page-owned sections
- page-local helper components
- repeated JSX until a pattern proves it should be extracted
- flexible section count
- small, useful types that support the current page

Extract after approval:

- shared base components
- stable data groups
- domain `pageData` entries
- related-content rules
- metadata rules
- tighter types

Shared components are optional building blocks, not mandatory shells.

---

## WHEN CODE AND DOCS CONFLICT

Use docs as authority before asking approval questions.

If the active docs clearly define the decision and source code is stale, update the source code in a source-cleanup pass.

If implementation reality proves a doc is wrong, update the doc and explain why.

Do not ask the user whether to follow stale source when the docs already define the active direction.

If a task asks for source cleanup, fix repo-wide drift directly. Do not create parallel compatibility code.

---

## ACTIVE CHECKS

For docs-only passes, run search validation for forbidden drift terms.

For source cleanup or page work, run the relevant checks:

- `npm run lint`
- `npm run typecheck`
- `npm run check:names`
- `npm run check:minimal`
- `npm run build`
- `npm run check:frontend`

Use `check:frontend` after visual/page work to catch runtime page crashes.

---

## FINAL AI CHECKLIST

Before finishing a MindWP task, confirm:

- no removed service names were revived
- no parallel offer model was introduced
- no backend platform name appears publicly
- no `/systems` taxonomy was created
- implementation services still sit under Smart Website Systems
- Revenue Recovery remains a layer only
- service pages still resolve to one active system
- feature pages do not sound like SaaS
- service pages do not sound like a catalog
- proof is real, clearly framed, or absent
- checks or validation appropriate to the task were run
