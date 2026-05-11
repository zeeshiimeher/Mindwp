# Industry Domain — Renderer-First Reset Plan

## Current State

The industry domain has been hard-reset to a minimum contract. All 32 pages (6 category + 26 detail) are registered and route correctly. Each page renders a minimal shell: `HeroFrame` + placeholder `SectionFrame` + `FAQSection` + `DecisionPanel`.

This is an intentional renderer-first design phase. Claude Opus should rebuild pages directly inside their page renderers and matching category CSS files. Do not recreate the removed data contracts before the visual/page-flow direction is approved.

**Data contract (minimum — enforced by types.ts):**

- `seo`, `slug`, `type`, `category`/`parentSlug`, `hero`, `systems`, `industries` (required on detail), `topics?`, `faq`, `cta`
- All old canonical section fields removed (`categoryLeaks`, `sharedPattern`, `industryPattern`, `leakTimeline`, etc.)
- All `*Extras` named exports removed

**Renderers:** All 32 are minimal shells in `src/domains/industries/renderers/`. Each renders HeroFrame → placeholder SectionFrame → FAQSection → DecisionPanel. No renderer-local content constants. No `id-canon` CSS patterns.

**CSS:** All industry CSS files reset to minimal shell (`.industry-reset-note` only). `home-services.css` created and imported in `src/index.css`.

**Validators:** `validate-render-alignment.ts` updated — both `INDUSTRY_CATEGORY_RENDER_ORDER` and `INDUSTRY_DETAIL_RENDER_ORDER` are now `['hero', 'faq', 'cta']`.

## Architecture

```
CONTENT → PATTERN → COMPONENT → VARIANT / CONTROL → RENDER
```

Page route: `src/app/industries/[...slug]/page.tsx`  
Registry: `src/domains/industries/registry.ts`  
Config (renderer map + wrapper): `src/domains/industries/config.tsx`  
Types: `src/domains/industries/types.ts`

**Important config facts:**

- `config.tsx` wraps every page in `CTARegistryProvider` + `RelatedSection`. Pages must NOT render `RelatedSection` themselves.
- `config.tsx` throws if `systems[0]` is missing — every data file must have at least one system.
- `page.tsx` uses `hero.badge` for breadcrumb labels and `seo.canonical` for path resolution.

## Renderer-First Design Phase

During this phase, page-local public content may live inside the page renderer while Claude Opus discovers the final page design.

Allowed during design:

- page-local arrays and objects for visual sections
- page-local section copy
- inline SVG/JSX diagrams
- page-specific visual bodies
- category CSS files for page/group styling

Not allowed:

- shared full-page scaffolds
- shared canonical section renderers
- old industry templates
- `_canonicalSections.tsx`
- `IndustryDetailScaffold`
- `IndustryCategoryScaffold`
- manual `RelatedSection`
- old `reusable/*` or `sections/*` imports
- hardcoded CTA labels or `/contact` URLs

After visual approval, stable public content will be extracted back into data files. Do not do that during the Opus design pass.

## New-System Components (use these)

- `HeroFrame` — hero shell with split layout, actions, chips
- `SectionFrame` — section shell: owns `<section>`, container, heading block, tone/bg
- `FAQSection` — full FAQ section wrapping SectionFrame + Accordion
- `DecisionPanel` — final conversion section
- `RelatedSection` — injected by config wrapper only; never render manually

## CTA Rules

- Use `buildIndustryContactHref({ system, slug })` from `@/lib/contact/contactHref`
- Use `PRIMARY_CTA_LABEL` from `@/lib/cta/primaryAction`
- No hardcoded `/contact` links

## InlineText Rules

- Use `[[muted:...]]` inside title/heading data strings
- `InlineText` is used internally by `SectionFrame` and `HeroFrame`

## Data Contract Rules

### Detail pages

- `industries` array is **required** (graph validator checks it)
- `faq` must appear **immediately before** `cta` (content-enforcement validator checks it)
- `hero.list` must have **exactly 3 items** (badge-length validator checks it)
- `hero.badge` must be **≤3 words** (badge-length validator checks it)
- `seo` must be the **first property** (content-enforcement validator checks it)

### Category pages

- `industries` is optional
- Same `hero.list` / `hero.badge` / `seo` rules apply

## Data File Rule During Opus Pass

Do not expand data files during the renderer-first design pass.

Data files are intentionally minimal. They exist for route, SEO, graph, breadcrumb, hero, FAQ, and CTA safety only.

Claude Opus should rebuild visual sections in the renderer first. New final data shapes should only be introduced later, after the page design is approved.

## CSS Rules

Per-page and per-category CSS files live in `src/styles/industries/`. Each starts as a minimal shell. Add page-specific visuals there only. Do not put shared component CSS in page files.

Token names must exist in `src/styles/tokens.css`. No raw hex or `rgba()`. No inline styles.

## Tailwind Allowance (Renderer-First Design Phase Only)

Industry renderers are in renderer-first prototype mode. Tailwind layout utilities are allowed only inside industry renderers (`src/domains/industries/renderers/**`) for layout exploration. Tailwind colour utilities are not allowed — colour, background, state, and brand identity still come from MindWP tokens through category CSS files in `src/styles/industries/`. Arbitrary Tailwind values and inline styles are blocked. After visual approval, Tailwind may either stay or be converted to custom CSS in a separate cleanup pass.

Tailwind v4 is installed (`tailwindcss@^4`, `@tailwindcss/postcss`) and processed through `postcss.config.js`. Utility classes used inside industry renderer TSX compile via the existing build.

**Allowed inside industry renderers:**

- layout: `flex`, `grid`, `block`, `hidden`, `items-*`, `justify-*`, `place-*`, `col-span-*`, `row-span-*`, `order-*`
- spacing on the standard scale: `gap-4`, `gap-x-6`, `p-6`, `px-4`, `m-2`, `mt-8`
- sizing on the standard scale: `w-full`, `max-w-3xl`, `min-w-0`, `h-12`, `min-h-screen`
- responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- rounded / shadow / border on the standard scale: `rounded-2xl`, `shadow-sm`, `border`, `border-2`
- typography on the standard scale: `text-sm`, `font-semibold`, `tracking-wide`, `leading-tight`
- overflow / state / opacity on the standard scale: `overflow-hidden`, `hover:opacity-80`, `opacity-60`
- simple transitions on the standard scale: `transition`, `transition-colors`, `duration-200`

**Still blocked (enforced by validators):**

- Tailwind colour palette utilities anywhere in industry renderers (`validate-industry-tailwind`):
  `bg-white`, `text-gray-700`, `bg-slate-100`, `border-blue-200`, `ring-emerald-500`, `from-*`/`to-*`/`via-*`, `divide-*`, `outline-*`, `placeholder-*`, `caret-*`, `accent-*`, `decoration-*`, `fill-*`, `stroke-*`
- Arbitrary-value Tailwind classes anywhere in industry renderers (`validate-industry-tailwind`):
  `bg-[#...]`, `text-[#...]`, `border-[#...]`, `p-[37px]`, `m-[12px]`, `w-[420px]`, `h-[64px]`, `shadow-[...]`, `lg:grid-cols-[1.1fr_0.9fr]`
- Inline `style={{}}` outside renderers (`validate-inline-styles`); inside industry renderers the only acceptable inline-style use is a CSS-variable carrier like `style={{ ['--load']: '15%' } as CSSProperties}`
- Raw hex / `rgba()` in CSS (`validate-tokens`)
- hardcoded `/contact` (use `buildIndustryContactHref`)
- hardcoded CTA labels (use `PRIMARY_CTA_LABEL`)
- `PrimaryCTASection` (use `DecisionPanel`)
- manual `RelatedSection` (injected by config wrapper)
- old `reusable/*` and `sections/*` imports
- `SectionFrame` shell selector overrides in CSS

If a layout requires an arbitrary grid template (e.g. `lg:grid-cols-[1.1fr_0.9fr]`), define it in the matching category CSS file (`src/styles/industries/<category>.css`) instead of inline in the renderer.

This allowance is scoped to industry renderers only. It does not extend to the rest of `src/`.

## Inventory

### Category pages (6)

| Slug                            | Renderer                                     |
| ------------------------------- | -------------------------------------------- |
| `home-services`                 | `HomeServicesIndustryRenderer`               |
| `automotive-services`           | `AutomotiveServicesIndustryRenderer`         |
| `beauty-personal-care`          | `BeautyPersonalCareIndustryRenderer`         |
| `legal-professional-services`   | `LegalProfessionalServicesIndustryRenderer`  |
| `local-appointment-businesses`  | `LocalAppointmentBusinessesIndustryRenderer` |
| `real-estate-property-services` | `RealEstatePropertyServicesIndustryRenderer` |

### Detail pages (26)

**home-services:** RoofingCompanies, PlumbingCompanies, ElectricalCompanies, HvacCompanies, LandscapingCompanies  
**automotive-services:** AutoRepair, BodyShops, CarDetailing, MobileMechanics  
**beauty-personal-care:** HairSalons, NailSalons, LashExtensions, SmallMedSpas, AestheticCosmeticClinics  
**legal-professional-services:** SmallLawFirms, AccountingFirms, Consultants  
**local-appointment-businesses:** DentalClinics, DrivingSchools, RepairShops, SmallPrivateClinics, TattooStudios  
**real-estate-property-services:** Realtors, MortgageBrokers, PropertyManagers, HomeInspectors

## Rebuild Protocol (Claude Opus Design Pass)

Use this exact workflow for each category group:

1. Rebuild every detail page in the category first.
2. Rebuild the category page after the detail pages are clear.
3. Add CSS only to that category's CSS file.
4. Run focused checks when useful.
5. Run `system:quick` and `build` after the category group is complete.
6. Move to the next category group only after the current group is clean.

Category order:

1. Home Services
2. Automotive Services
3. Beauty & Personal Care
4. Local Appointment Businesses
5. Real Estate & Property Services
6. Legal & Professional Services
7. `/industries` listing review/rebuild

For each page:

1. Read the data file for route/SEO/hero/FAQ/CTA context.
2. Do not change the data contract.
3. Rewrite the page renderer from the minimal shell.
4. Replace the placeholder `SectionFrame` with real page-specific sections.
5. Add at least one strong custom operational visual/diagram.
6. Add page-specific CSS to the matching category CSS file.
7. Keep the final CTA and FAQ compliant.
8. Do not manually render `RelatedSection`.

## Page Quality Rules

Category pages should feel like vertical operating maps, not directories.

Detail pages should feel like one business type's working day, not generic service pages or SaaS dashboards.

Every page should have:

- a buyer-recognition opening
- one strong signature visual section
- a clear change-state section
- a simple starting-point/system section
- a realistic scenario or proof-safe example
- FAQ only where useful
- final `DecisionPanel`

Avoid:

- cloned page rhythm
- generic card grids
- tiny dashboard tables
- old canonical section shapes
- over-explaining all six systems
- internal implementation language
- fake proof, fake metrics, or guarantee claims

Use:

- calls, forms, DMs, appointments, quotes, inspections, documents, follow-up, reviews, referrals, bookings, no-shows, staff handoff, office line, counter, bay, crews, site visits, and working-day language.

## CSS Group Files

Use one CSS file per category group:

- `src/styles/industries/home-services.css`
- `src/styles/industries/automotive-services.css`
- `src/styles/industries/beauty-personal-care.css`
- `src/styles/industries/local-appointment-businesses.css`
- `src/styles/industries/real-estate-property-services.css`
- `src/styles/industries/legal-professional-services.css`

Do not grow `category.css` or `detail.css` with page-specific visuals. Use those only for true generic industry defaults.

## Final Extraction Later

After the industry pages are visually approved, run a separate extraction pass:

1. Move stable public content from renderers into data files.
2. Create final typed data shapes based on the approved pages.
3. Tighten validators to the new final industry contracts.
4. Remove any temporary renderer-local content that should become data-owned.

Do not perform this extraction during the Opus design pass.
