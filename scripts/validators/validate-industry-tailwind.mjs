#!/usr/bin/env node
/**
 * Industry-renderer Tailwind allow-list validator.
 *
 * During the renderer-first design phase, Tailwind layout utilities are
 * permitted inside `src/domains/industries/renderers/**` so that page
 * authors can iterate on layout quickly. Token / colour / raw-value rules
 * still apply — colour comes from MindWP tokens via category CSS, never
 * from Tailwind palette utilities.
 *
 * Blocked patterns (scoped to industry renderer TSX files):
 *
 *   ── Arbitrary-value Tailwind ──────────────────────────────────────
 *   ✗ className="bg-[#031927]"
 *   ✗ className="text-[#fff]"
 *   ✗ className="border-[#abc]"
 *   ✗ className="p-[37px]"
 *   ✗ className="m-[12px]"
 *   ✗ className="w-[420px]"
 *   ✗ className="h-[64px]"
 *   ✗ className="shadow-[0_24px_80px_rgba(0,0,0,.24)]"
 *   ✗ className="lg:grid-cols-[1.1fr_0.9fr]"  (use category CSS instead)
 *
 *   ── Tailwind colour palette utilities ─────────────────────────────
 *   ✗ className="bg-white"        ✗ className="text-gray-700"
 *   ✗ className="bg-slate-100"    ✗ className="border-blue-200"
 *   ✗ className="ring-emerald-500"
 *
 * Standard Tailwind layout/spacing/sizing/typography utilities (flex,
 * grid, gap-8, p-6, rounded-2xl, shadow-sm, md:flex-row, text-sm,
 * font-semibold, etc.) remain allowed. Use category CSS in
 * `src/styles/industries/` for any colour, surface, or brand styling.
 *
 * Source: docs/Planning/industry-plan.md (Tailwind Allowance section)
 */

import fs from 'node:fs';
import path from 'node:path';

import { listFilesRecursive } from '../lib/validator-helpers.mjs';

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const SCOPED_DIR = path.join(root, 'src', 'domains', 'industries', 'renderers');

/**
 * Matches any Tailwind-style token containing an arbitrary-value bracket.
 * Examples: bg-[#fff], p-[37px], lg:grid-cols-[1.1fr_0.9fr], shadow-[0_2px_4px].
 */
const ARBITRARY_TOKEN_RE = /(?:^|[\s"'`])([a-z][a-z0-9:-]*-\[[^\]\s]+\])(?=[\s"'`]|$)/gi;

/**
 * Tailwind colour-utility prefixes — any one of these followed by a known
 * colour name (or `-{shade}`) is treated as a palette colour utility and
 * blocked. Layout/typography utilities like `text-sm` or `border-2` are
 * not colour utilities and remain allowed.
 */
const COLOUR_PREFIXES = [
    'bg',
    'text',
    'border',
    'ring',
    'fill',
    'stroke',
    'from',
    'to',
    'via',
    'divide',
    'outline',
    'placeholder',
    'caret',
    'accent',
    'decoration',
];

const COLOUR_NAMES = [
    'white',
    'black',
    'transparent',
    'current',
    'inherit',
    'slate',
    'gray',
    'zinc',
    'neutral',
    'stone',
    'red',
    'orange',
    'amber',
    'yellow',
    'lime',
    'green',
    'emerald',
    'teal',
    'cyan',
    'sky',
    'blue',
    'indigo',
    'violet',
    'purple',
    'fuchsia',
    'pink',
    'rose',
];

const COLOUR_TOKEN_RE = new RegExp(
    `(?:^|[\\s"'\`])((?:[a-z]+:)*(?:${COLOUR_PREFIXES.join('|')})-(?:${COLOUR_NAMES.join('|')})(?:-\\d{2,3})?)(?=[\\s"'\`/]|$)`,
    'gi'
);

/** @type {RegExp[]} */
const CLASS_ATTR_PATTERNS = [
    /className\s*=\s*"([^"]*)"/g,
    /className\s*=\s*'([^']*)'/g,
    /className\s*=\s*\{\s*`([^`]*)`\s*\}/g,
    /className\s*=\s*\{\s*"([^"]*)"\s*\}/g,
    /className\s*=\s*\{\s*'([^']*)'\s*\}/g,
];

/** @type {Array<{file:string,line:number,rule:string,message:string}>} */
const violations = [];

function toRel(absPath) {
    return path.relative(root, absPath).replaceAll(path.sep, '/');
}

function lineOfIndex(text, idx) {
    let line = 1;
    for (let i = 0; i < idx && i < text.length; i++) {
        if (text.charCodeAt(i) === 10) line += 1;
    }
    return line;
}

function scanFile(fileAbs) {
    const rel = toRel(fileAbs);
    const text = fs.readFileSync(fileAbs, 'utf8');

    for (const pattern of CLASS_ATTR_PATTERNS) {
        pattern.lastIndex = 0;
        let attrMatch;
        while ((attrMatch = pattern.exec(text))) {
            const classValue = attrMatch[1];
            const lineNo = lineOfIndex(text, attrMatch.index);

            if (classValue.includes('[')) {
                ARBITRARY_TOKEN_RE.lastIndex = 0;
                let tokenMatch;
                while ((tokenMatch = ARBITRARY_TOKEN_RE.exec(classValue))) {
                    violations.push({
                        file: rel,
                        line: lineNo,
                        rule: 'TAILWIND_ARBITRARY_VALUE',
                        message: `Arbitrary-value Tailwind class \`${tokenMatch[1]}\` is not allowed in industry renderers — use a token-backed CSS class in src/styles/industries/ instead.`,
                    });
                }
            }

            COLOUR_TOKEN_RE.lastIndex = 0;
            let colourMatch;
            while ((colourMatch = COLOUR_TOKEN_RE.exec(classValue))) {
                violations.push({
                    file: rel,
                    line: lineNo,
                    rule: 'TAILWIND_COLOUR_UTILITY',
                    message: `Tailwind colour utility \`${colourMatch[1]}\` is not allowed in industry renderers — use a MindWP token-backed class in src/styles/industries/ instead.`,
                });
            }
        }
    }
}

function main() {
    if (!fs.existsSync(SCOPED_DIR)) {
        console.error(`[validate-industry-tailwind] scope directory not found: ${toRel(SCOPED_DIR)}`);
        process.exitCode = 1;
        return;
    }

    const files = listFilesRecursive(SCOPED_DIR, {
        exts: ['.tsx'],
        ignoreDirNames: ['node_modules'],
    });

    for (const f of files) scanFile(f);

    const reportPath = path.join(root, 'reports', 'industry-tailwind-report.json');
    if (shouldReportJson) {
        fs.mkdirSync(path.dirname(reportPath), { recursive: true });
        fs.writeFileSync(
            reportPath,
            JSON.stringify(
                {
                    generatedAt: new Date().toISOString(),
                    passed: violations.length === 0,
                    violationCount: violations.length,
                    scope: 'src/domains/industries/renderers',
                    rules: ['TAILWIND_ARBITRARY_VALUE', 'TAILWIND_COLOUR_UTILITY'],
                    violations,
                },
                null,
                2
            )
        );
    }

    if (violations.length > 0) {
        console.error('[validate-industry-tailwind] Validation failed.\n');
        for (const v of violations) {
            console.error(`[validate-industry-tailwind] ${v.file}:${v.line}`);
            console.error(`[validate-industry-tailwind]   [${v.rule}] ${v.message}`);
            console.error('[validate-industry-tailwind]');
        }
        console.error(
            `[validate-industry-tailwind] ✗ Found ${violations.length} Tailwind violation(s).`
        );
        process.exitCode = 1;
        return;
    }

    console.log(
        `[validate-industry-tailwind] ✓ No disallowed Tailwind classes found (${files.length} files scanned).`
    );
}

main();
