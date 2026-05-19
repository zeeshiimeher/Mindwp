# MindWP Page Review Skill

Use after a page rebuild or when asked to review a page.

## Workflow

1. Read `CLAUDE.md`.
2. Read the relevant core docs, especially `OFFER-ARCHITECTURE.md`, `CONTENT.md`, `DESIGN.md`, `WRITING.md`, and `CONVERSION.md`.
3. Inspect the rebuilt page, route, renderer, page data, shared components, and styles.
4. If this is not one of the first three pages, compare against approved rebuilt pages for design rhythm and section-pattern variety.
5. Review only. Do not rewrite or edit unless explicitly asked.

## Review Focus

Check:

- buyer, practice, or patient-recognition
- section clarity
- operational design
- generic agency/SaaS/AI/SEO/tool drift
- for specialist clinic pages, medical software, EMR, compliance, generic doctor marketing, treatment-claim, or patient-result drift
- CTA posture
- whether clinic CTAs stay diagnostic around trust, booking, consultation follow-up, reviews, and proof instead of promising medical outcomes
- visual rhythm
- mobile risk
- token/component consistency
- render-shape quality before inner-section complexity
- whether `HeroFrame`, `SectionShell`, `DecisionPanel`, and `FAQSection` are helping rather than controlling the page
- whether any custom class, background, or pseudo-element is justified; after the first three approved pages, any shared CSS, token, or core component change should be treated as requiring explicit user approval
- whether inner section patterns are sufficiently distinct from previous approved pages
- whether the page helps establish or follow the first-three-pages design standard

Report findings first, ordered by impact, with file/line references when possible.

For specialist clinic pages, include a short note on whether the page treats the website as the practice front door and avoids medical/software/compliance/treatment-claim drift.
