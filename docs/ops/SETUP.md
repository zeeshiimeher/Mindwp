# MindWP Setup

## Required Tools

- Node 20.x
- npm 11
- rg (ripgrep)
- Visual Studio Code

## Recommended VS Code Extensions

- GitHub Copilot
- dbaeumer.vscode-eslint
- esbenp.prettier-vscode
- bradlc.vscode-tailwindcss
- ms-playwright.playwright

## Recommended VS Code Settings

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

## Setup

```bash
npm install
npm run system:full
```

Read `docs/ops/AUDIT.md` for the enforcement model and `docs/ops/WORKFLOW.md` for the daily command path.