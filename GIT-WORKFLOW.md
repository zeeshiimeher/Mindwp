# Git Workflow

This repository uses a local-first workflow.

## Core rule

- The local VS Code working folder is the source of truth.
- Git exists to record, protect, and recover that local state.
- Do not use Git to overwrite local work unless that is a deliberate decision.

## Daily routine in VS Code

1. Start from the active working branch, not `main`.
2. Make changes locally in VS Code.
3. Run the relevant checks for the files you changed.
4. If the work is substantive, run `node scripts/core/validate-all.mjs`.
5. Run `node scripts/core/system-sync.mjs` when reports or system docs should reflect the latest state.
6. Review `git status` and confirm the working tree matches the local truth you want to preserve.
7. Commit frequently with small, clear messages.
8. Push when you want the remote to act as backup for the current local state.

## Branch routine

1. Keep `main` as the stable branch.
2. Create or switch to a working branch before new changes.
3. Merge working branches into `main` only after the local state is correct.
4. When merge conflicts happen, prefer the current verified local state unless there is a specific reason not to.
5. After merging, delete old local and remote branches that are no longer needed.

## Safe commit routine

```bash
git status
git add -A
git commit -m "type: short description"
git push
```

## Safe merge-to-main routine

```bash
git checkout main
git merge --no-ff <working-branch>
git push origin main
git checkout <working-branch>
```

## If main must be replaced by current local truth

Use this only when the local state is intentionally authoritative and should overwrite remote `main`.

```bash
git checkout main
git push --force-with-lease -u origin main
```