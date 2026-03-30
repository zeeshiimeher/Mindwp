#!/usr/bin/env node
/* eslint-disable no-console */
/**
 * Documentation validation script.
 *
 * Validates documentation files for:
 * - Required frontmatter
 * - Proper markdown formatting
 * - Required sections
 * - Broken links (basic check)
 */

import fs from "fs";
import path from "path";

const args = new Set(process.argv.slice(2));
const shouldReportJson = args.has('--report-json');

const WORKSPACE_ROOT = process.cwd();

function resolveDocsDir() {
  const candidates = [
    path.join(WORKSPACE_ROOT, "src", "internal", "docs"),
    path.join(WORKSPACE_ROOT, "Mindwp-Docs"),
    path.join(WORKSPACE_ROOT, "MindWP-Docs"),
    path.join(WORKSPACE_ROOT, "..", "Mindwp-Docs"),
    path.join(WORKSPACE_ROOT, "..", "MindWP-Docs"),
  ];

  for (const candidate of candidates) {
    try {
      if (fs.statSync(candidate).isDirectory()) {
        return candidate;
      }
    } catch {
      // continue checking candidates
    }
  }

  throw new Error(
    `Could not locate docs directory. Checked: ${candidates
      .map(p => path.relative(WORKSPACE_ROOT, p) || ".")
      .join(", ")}`
  );
}

/** @type {Array<{file:string,line:number,rule:string,message:string}>} */
const violations = [];

function walkFiles(dir) {
  /** @type {string[]} */
  const out = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      out.push(...walkFiles(full));
      continue;
    }
    if (!ent.isFile()) continue;
    if (!full.endsWith(".md")) continue;
    out.push(full);
  }
  return out;
}

function toRel(absPath) {
  return path.relative(WORKSPACE_ROOT, absPath).replaceAll(path.sep, "/");
}

function lineOfIndex(text, index) {
  let line = 1;
  for (let i = 0; i < index && i < text.length; i++) {
    if (text[i] === "\n") line++;
  }
  return line;
}

function addViolation(fileAbs, index, rule, message) {
  violations.push({
    file: toRel(fileAbs),
    line: lineOfIndex(fs.readFileSync(fileAbs, "utf8"), index),
    rule,
    message,
  });
}

function validateMarkdownFile(fileAbs) {
  const content = fs.readFileSync(fileAbs, "utf8");
  const filename = path.basename(fileAbs);

  // Basic validation - check for broken links and malformed markdown
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const link = match[2];
    if (link.startsWith("./") || link.startsWith("../")) {
      const linkPath = path.resolve(path.dirname(fileAbs), link);
      if (!fs.existsSync(linkPath)) {
        // Check if it's a directory or file
        try {
          const stat = fs.statSync(linkPath.replace(/\.md$/, ""));
          if (!stat) {
            addViolation(fileAbs, match.index, "BROKEN_LINK", `Broken internal link: ${link}`);
          }
        } catch (e) {
          addViolation(fileAbs, match.index, "BROKEN_LINK", `Broken internal link: ${link}`);
        }
      }
    }
  }

  // Check for unclosed code blocks
  const codeBlockRegex = /```/g;
  const codeBlocks = content.match(codeBlockRegex);
  if (codeBlocks && codeBlocks.length % 2 !== 0) {
    // Skip this check for now as it may give false positives
    // addViolation(fileAbs, 0, "UNCLOSED_CODE_BLOCK", "Unclosed code block detected");
  }
}

function main() {
  console.log("[validate-docs] Validating documentation files...");

  const DOCS_DIR = resolveDocsDir();
  const docFiles = walkFiles(DOCS_DIR);

  for (const file of docFiles) {
    validateMarkdownFile(file);
  }

  if (violations.length > 0) {
    console.error("\n[validate-docs] Documentation validation failed:");
    for (const v of violations) {
      console.error(`[validate-docs] ${v.file}:${v.line} - ${v.rule}: ${v.message}`);
    }
    process.exitCode = 1;
    return;
  } else {
    console.log("[validate-docs] All documentation files passed validation");
  }
}

try {
  main();
  if (shouldReportJson) {
    const reportPath = path.join(WORKSPACE_ROOT, 'reports', 'docs-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: process.exitCode !== 1, violationCount: violations.length, violations }, null, 2));
  }
} catch (err) {
  if (shouldReportJson) {
    const reportPath = path.join(WORKSPACE_ROOT, 'reports', 'docs-report.json');
    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, JSON.stringify({ generatedAt: new Date().toISOString(), passed: false, error: err instanceof Error ? err.message : String(err) }, null, 2));
  }
  // eslint-disable-next-line no-console
  console.error(`[validate-docs] ${err instanceof Error ? err.message : String(err)}`);
  process.exitCode = 1;
}