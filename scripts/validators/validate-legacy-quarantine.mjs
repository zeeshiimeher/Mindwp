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
].map(d => path.join(root, d));

// ── Individually-named rebuilt files ─────────────────────────────────────────
const NEW_SYSTEM_FILES = [
    'src/screens/Homepage.tsx',
    'src/domains/services/renderers/SmartWebsiteSystemsRenderer.tsx',
    'src/domains/services/renderers/LocalSeoAuthorityRenderer.tsx',
].map(f => path.join(root, f));

// ── Forbidden import substrings ───────────────────────────────────────────────
const FORBIDDEN_IMPORTS = [
    "@/components/reusable",
    "@/components/sections",
];

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
