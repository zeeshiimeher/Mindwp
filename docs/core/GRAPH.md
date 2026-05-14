# Related Content

Related content supports the approved page journey. It should help the visitor take the next sensible step without breaking the current page intent.

## Ownership

- Page renderers should not manually add `RelatedSection`.
- Domain/config layers inject `RelatedSection` where it belongs.
- Inline editorial links are allowed when they support the current section narrative.
- Related items must preserve funnel role, page intent, and system boundaries.

## Current Rule

Keep related-content behavior simple and runtime-safe. Add stronger resolver behavior only when it supports approved page journeys and does not force page design decisions too early.
