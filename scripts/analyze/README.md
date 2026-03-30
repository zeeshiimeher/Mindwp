# Analysis Scripts

Optional analysis tools for content auditing and reporting. These scripts are **not** part of the build or validation pipeline — they run on-demand only.

All outputs write to `/reports/` and are never consumed at runtime.

## Available Commands

| Command | Description |
|---|---|
| `npm run analyze:gaps` | Identify missing content coverage across topics, industries, and resource types |
| `npm run analyze:intelligence` | Generate a full content intelligence report (authority, priority, coverage) |
| `npm run analyze:score` | Score each content page on vocabulary, hype density, and sentence structure |
| `npm run analyze:consistency` | Audit CTA labels, banned vocabulary, and hype density across domains |
| `npm run analyze:priority` | Tag pages with priority levels (high/medium/low) based on domain rules |

## Rules

- Do not depend on these scripts for runtime logic.
- Do not add these scripts to `generate:core`, `prebuild`, or `validate-all`.
- Outputs in `/reports/` are gitignored reference data, not build artifacts.
