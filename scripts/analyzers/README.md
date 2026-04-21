# Analysis Scripts

Optional analysis tools for content auditing and reporting. These scripts are **not** part of the build or validation pipeline — they run on-demand only.

All outputs write to `/reports/` and are never consumed at runtime.

## Available Commands

| Command                        | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `npm run analyze:gaps`         | Identify missing content coverage across topics, industries, and resource types |
| `npm run analyze:intelligence` | Generate a full content intelligence report (authority, priority, coverage)     |
| `npm run analyze:score`        | Score each content page on vocabulary, hype density, and sentence structure     |
| `npm run analyze:consistency`  | Audit CTA labels, banned vocabulary, and hype density across domains            |
| `npm run analyze:priority`     | Tag pages with priority levels (high/medium/low) based on domain rules          |
| `npm run graph:inspect`        | Open the development graph inspector                                            |
| `npm run phase7:visual`        | Run the supported visual audit pipeline                                         |

## Manual Tools

These analyzers are intentionally kept out of `package.json` and `validate-all`. They are operator/debug tools, not supported daily-entry commands.

| Command                                             | Purpose                                                                   |
| --------------------------------------------------- | ------------------------------------------------------------------------- |
| `node scripts/analyzers/heading-audit.cjs`          | Inspect heading hierarchy and accessibility from the visual-audit surface |
| `node scripts/analyzers/split-screenshots.cjs`      | Split oversized visual-audit screenshots into reviewable segments         |
| `node scripts/analyzers/test-editing-stability.mjs` | Stress-test vocabulary validators with auto-reverted bad-edit injections  |

## Internal And Legacy

- `scripts/analyzers/visual-audit-runtime.js` is an internal browser runtime used by `run-visual-audit.js`.
- `scripts/analyzers/visual-audit-engine.js` is a legacy capture script kept for reference; use `npm run phase7:visual` instead.

## Rules

- Do not depend on these scripts for runtime logic.
- Do not add these scripts to `generate:core`, `prebuild`, or `validate-all`.
- Outputs in `/reports/` are gitignored reference data, not build artifacts.
