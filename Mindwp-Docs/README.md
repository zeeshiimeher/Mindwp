MindWP Documentation System

Core architecture documents live in `content-architecture/`.

This repository follows a 5-layer architecture:

1. FOUNDATION → positioning and messaging rules (content-architecture/FOUNDATION-AND-POSITIONING.md)
2. ARCHITECTURE → system structure and authority flow (content-architecture/CONTENT-SYSTEM-ARCHITECTURE.md)
3. GRAPH → metadata and relationship engine (content-architecture/CONTENT-GRAPH-SYSTEM.md)
4. BLUEPRINT → content creation system (content-architecture/CONTENT-BLUEPRINT-SYSTEM.md)
5. GOVERNANCE → change control and rewrite rules (content-architecture/CONTENT-GOVERNANCE.md)

Planning files are non-authoritative and only define content inventory:

- content-architecture/BLOG-PLANNING-INVENTORY.md
- content-architecture/RESOURCE-PLANNING-INVENTORY.md
- content-architecture/CASE-STUDY-INVENTORY.md

Generated files at root level:

- GLOBAL-COMPONENTS-CATALOG.md (auto-generated component inventory)

Reference files (read-only, not authoritative):

- archive-reference/project-todo.md (historical task tracker)
- archive-reference/DESIGN-SYSTEM-ARCHITECTURE.md
- archive-reference/IMAGE-SYSTEM-ARCHITECTURE.md
- archive-reference/IMAGE-TESTING-GUIDE.md

Editing Rules:

- Core architecture documents define rules and should change rarely.
- Planning inventory documents may be updated frequently as content expands.
- Files in `archive/` and `archive-reference/` must not be used as authoritative reference.
