# Workspace Setup

## Required Tools

- Node `20.x`
- npm `11`
- `rg` (`ripgrep`)
- Visual Studio Code

Recommended VS Code extensions:

- GitHub Copilot
- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- bradlc.vscode-tailwindcss
- ms-playwright.playwright

## VS Code Settings

Recommended local settings:

- format on save enabled
- ESLint fixes on save enabled
- GitHub Copilot chat and inline completions enabled

Example settings:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "github.copilot.enable": {
    "*": true,
    "plaintext": false,
    "markdown": true
  }
}
```

## Setup Commands

1. `npm install`
2. `npm run system:full -- --mode=summary`
3. `npm run preaudit`

## AI Instruction

Read `system/AI_AUDIT_CONTEXT.md` before doing anything else.