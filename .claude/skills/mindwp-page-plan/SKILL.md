# MindWP Page Plan Skill

Use before editing one page. This skill is for planning only.

## Workflow

1. Read `CLAUDE.md`.
2. Read the task-relevant core docs, usually `FOUNDATION.md`, `OFFER-ARCHITECTURE.md`, `CONTENT.md`, `DESIGN.md`, `WRITING.md`, and `CONVERSION.md`.
3. Confirm which page is being rebuilt and what business, practice, or patient-decision moment it owns.
4. Inspect the target page route, renderer, page data, local components, shared components, and relevant styles/tokens.
5. Treat old pages and existing renderer order as context, not authority.
6. For later pages, inspect approved rebuilt pages for design standard and rhythm, but do not copy their inner section patterns too closely.
7. Do not edit files.

## Output

Return a concise page plan with:

- page role and owning system/context
- buyer, practice, or patient-recognition moment
- what the page must not become
- for specialist clinic pages, what medical/software/compliance/treatment-claim drift must be avoided
- soft section plan
- visual direction and pattern choices
- how this page will feel meaningfully different from previous approved pages
- components/styles to use or improve
- proposed `HeroFrame` setup
- proposed `SectionShell` sequence, including section titles, descriptions, tone/variant ideas, and whether each section may need a custom class
- whether any section may need background imagery, pseudo-elements, custom CSS, token support, or component variant support; for pages after the first three approved pages, flag these as user-approval items rather than normal rebuild work
- token/CSS risks
- validation plan

No JSX. No edits. No final copy.
