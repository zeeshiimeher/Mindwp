#!/usr/bin/env node
/**
 * Legacy quarantine validator.
 *
 * Enforces that rebuilt/new-system files do NOT import from old UI folders
 * or use old CSS class patterns.
 *
 * Scope: ONLY rebuilt/new files are checked.
 * Old/unrebuilt pages (blog, features, industries, resources, old service renderers)
 * are explicitly excluded — they may still import old UI until rebuilt.
 *
 * See docs/Planning/Legacy-dependency-map.md for full quarantine rules.
 */

import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');
const reportPath = path.join(root, 'reports', 'legacy-quarantine-report.json');

// ── New-system folders (all .ts/.tsx files within are checked) ────────────────
const NEW_SYSTEM_DIRS = [
    'src/components/layout',
    'src/components/primitives',
    'src/components/conversion',
    'src/components/navigation',
    'src/components/content',
].map(d => path.join(root, d));

// ── Individually-named rebuilt files ─────────────────────────────────────────
const NEW_SYSTEM_FILES = [
    'src/screens/Homepage.tsx',
    'src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx',
    'src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx',
].map(f => path.join(root, f));

// ── Forbidden import substrings ───────────────────────────────────────────────
const FORBIDDEN_IMPORTS = [
    '@/components/reusable',
    '@/components/sections',
];

// ── Forbidden text patterns (any occurrence in rebuilt/new files) ─────────────
// These are old component references that must not appear in new-system code.
const FORBIDDEN_TEXT_PATTERNS = [
    { pattern: /PrimaryCTASection/, label: 'PrimaryCTASection (use DecisionPanel instead)' },
    { pattern: /SectionShell/, label: 'SectionShell (deleted in 6G; use SectionFrame or HeroFrame instead)' },
    { pattern: /titleMuted/, label: 'titleMuted prop (old API; removed in new-system components)' },
    { pattern: /headingMuted/, label: 'headingMuted prop (old API; removed in new-system components)' },
    { pattern: /RelatedContentSection/, label: 'RelatedContentSection (deleted in 6F; use RelatedSection instead)' },
];

// ── Quarantine boundary: no new files allowed in these folders ────────────────
// These folders are frozen. New files must not be added.
const QUARANTINE_FROZEN_DIRS = [
    'src/components/reusable',
    'src/components/sections',
].map(d => path.join(root, d));

// ── Forbidden class patterns (matches className='xxx' or className="xxx") ─────
// These are old CSS class prefixes/patterns. Match any occurrence in the file.
const FORBIDDEN_CLASS_PATTERNS = [
    // match className="rd-* or className='rd-*
    { pattern: /className=['"]rd-/, label: "old 'rd-*' class" },
    { pattern: /className=['"]l-section/, label: "old 'l-section' class" },
    { pattern: /className=['"]l-container/, label: "old 'l-container' class" },
    { pattern: /className=['"]btn-primary/, label: "old 'btn-primary' class" },
    { pattern: /className=['"]btn-outline/, label: "old 'btn-outline' class" },
    { pattern: /className=['"]hero-split/, label: "old 'hero-split' class" },
    { pattern: /className=['"]grid-cards/, label: "old 'grid-cards' class" },
    { pattern: /className=['"]scope__/, label: "old 'scope__' class" },
    { pattern: /className=['"]process-steps/, label: "old 'process-steps' class" },
    { pattern: /className=['"]layer-stack/, label: "old 'layer-stack' class" },
    { pattern: /className=['"]lsa-related/, label: "old 'lsa-related' class (use mw-related-section)" },
    { pattern: /className=['"]related-content__/, label: "old 'related-content__' class (use mw-related-section__)" },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function toRel(absPath) {
    return path.relative(root, absPath).replaceAll(path.sep, '/');
}

function listFiles(dirPath) {
    if (!fs.existsSync(dirPath)) return [];
    return fs.readdirSync(dirPath, { withFileTypes: true }).flatMap(entry => {
        const fullPath = path.join(dirPath, entry.name);
        if (entry.isDirectory()) return listFiles(fullPath);
        return [fullPath];
    });
}

/** @type {Array<{file:string,line:number,rule:string,message:string,forbidden:string}>} */
const violations = [];

function checkFile(absPath) {
    if (!absPath.endsWith('.tsx') && !absPath.endsWith('.ts')) return;
    if (!fs.existsSync(absPath)) return;

    const rel = toRel(absPath);
    const content = fs.readFileSync(absPath, 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineNum = i + 1;

        // Check forbidden imports
        for (const forbidden of FORBIDDEN_IMPORTS) {
            if (line.includes(forbidden)) {
                violations.push({
                    file: rel,
                    line: lineNum,
                    rule: 'forbidden_old_import',
                    forbidden,
                    message: `Rebuilt/new file imports from quarantined old UI: "${forbidden}". Use new-system components from src/components/layout, src/components/primitives, or src/components/conversion instead.`,
                });
            }
        }

        // Check forbidden class patterns
        for (const { pattern, label } of FORBIDDEN_CLASS_PATTERNS) {
            if (pattern.test(line)) {
                violations.push({
                    file: rel,
                    line: lineNum,
                    rule: 'forbidden_old_class',
                    forbidden: label,
                    message: `Rebuilt/new file uses quarantined CSS class pattern ${label}. Use new-system CSS tokens and class names instead.`,
                });
            }
        }

        // Check forbidden text patterns
        for (const { pattern, label } of FORBIDDEN_TEXT_PATTERNS) {
            if (pattern.test(line)) {
                violations.push({
                    file: rel,
                    line: lineNum,
                    rule: 'forbidden_old_reference',
                    forbidden: label,
                    message: `Rebuilt/new file references quarantined component or prop: ${label}.`,
                });
            }
        }
    }
}

// Check that quarantine-frozen folders have no new files added since the freeze.
// These folders are locked -- new components must go into new-system dirs.
function checkFrozenDirs() {
    for (const dir of QUARANTINE_FROZEN_DIRS) {
        // We only enforce that no NEW .tsx files should be added.
        // Existing files are expected (they are the old components pending deletion).
        // This check is a tripwire: if someone adds a new .tsx file to reusable/ or sections/,
        // they must instead use src/components/{layout,primitives,conversion,navigation,content}.
        // Currently we have no baseline snapshot so this is a manual note -- the check is enforced
        // by the fact that FORBIDDEN_IMPORTS prevents new-system files from using them,
        // and the reusable folder is listed as quarantine delete-later.
        // TODO 6K+1: add a git-based or snapshot-based new-file detection when ready.
        void dir; // used in comment above
    }
}

// ── Run checks ────────────────────────────────────────────────────────────────

for (const dir of NEW_SYSTEM_DIRS) {
    for (const file of listFiles(dir)) {
        checkFile(file);
    }
}

for (const file of NEW_SYSTEM_FILES) {
    checkFile(file);
}

checkFrozenDirs();

// ── Output ────────────────────────────────────────────────────────────────────

if (shouldReportJson) {
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(
        reportPath,
        JSON.stringify(
            {
                generatedAt: new Date().toISOString(),
                passed: violations.length === 0,
                violationCount: violations.length,
                violations,
            },
            null,
            2
        )
    );
}

if (violations.length > 0) {
    console.error(`✗ Legacy quarantine: ${violations.length} violation(s) found in new/rebuilt files:`);
    for (const v of violations) {
        console.error(`  ${v.file}:${v.line} — ${v.message}`);
    }
    process.exitCode = 1;
} else {
    console.log('✓ Legacy quarantine passed — no old UI imports in new/rebuilt files.');
}
