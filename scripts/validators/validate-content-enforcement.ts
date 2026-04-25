#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { Node, Project, SyntaxKind, type ObjectLiteralExpression, type SourceFile } from 'ts-morph';

import { createLogger } from '../../lib/logger/index.mjs';
import { normalizeRawReport } from '../lib/report-schema.mjs';

type RuleName =
    | 'hero-list-length'
    | 'heading-hierarchy'
    | 'seo-position'
    | 'faq-position'
    | 'button-rule'
    | 'badge-length';

type Issue = {
    rule: RuleName;
    domain: string;
    file: string;
    issueType: string;
    message: string;
    slug?: string;
};

const root = process.cwd();
const args = new Set(process.argv.slice(2));
const ruleArg = process.argv.slice(2).find(arg => arg.startsWith('--rule='));
const reportJson = args.has('--report-json');
const rule = (ruleArg?.slice('--rule='.length) ?? '') as RuleName;
const logger = createLogger({
    label: 'validate-content-enforcement',
    mode: 'summary',
    rootDir: root,
});
const project = new Project({ tsConfigFilePath: path.join(root, 'tsconfig.json') });

const REPORT_FILE_BY_RULE: Record<RuleName, string> = {
    'hero-list-length': 'hero-list-length-report.json',
    'heading-hierarchy': 'heading-hierarchy-report.json',
    'seo-position': 'seo-position-report.json',
    'faq-position': 'faq-position-report.json',
    'button-rule': 'button-rule-report.json',
    'badge-length': 'badge-length-report.json',
};

const SOURCE_COMMAND_BY_RULE: Record<RuleName, string> = {
    'hero-list-length': 'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=hero-list-length',
    'heading-hierarchy': 'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=heading-hierarchy',
    'seo-position': 'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=seo-position',
    'faq-position': 'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=faq-position',
    'button-rule': 'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=button-rule',
    'badge-length': 'node --import tsx/esm scripts/validators/validate-content-enforcement.ts --rule=badge-length',
};

const DATA_GLOBS = {
    services: 'src/domains/services/data/*.{ts,tsx}',
    features: 'src/domains/features/data/*.{ts,tsx}',
    industries: 'src/domains/industries/pages/**/*.{ts,tsx}',
    blog: 'src/domains/blog/content/*.{ts,tsx}',
    resources: 'src/domains/resources/content/*.{ts,tsx}',
    'case-studies': 'src/domains/case-studies/content/*.{ts,tsx}',
} as const;

function toRelative(filePath: string) {
    return path.relative(root, filePath).replace(/\\/g, '/');
}

function countWords(value: string) {
    return (value.match(/[A-Za-z0-9]+(?:[-'][A-Za-z0-9]+)*/g) ?? []).length;
}

function getStringValue(node: Node | undefined): string | undefined {
    if (!node) return undefined;

    if (Node.isStringLiteral(node) || Node.isNoSubstitutionTemplateLiteral(node)) {
        return node.getLiteralText();
    }

    if (Node.isTemplateExpression(node)) {
        const head = node.getHead().getLiteralText();
        const spans = node.getTemplateSpans();
        if (spans.every(span => Node.isStringLiteral(span.getExpression()) || Node.isNoSubstitutionTemplateLiteral(span.getExpression()))) {
            return [head, ...spans.flatMap(span => [getStringValue(span.getExpression()) ?? '', span.getLiteral().getLiteralText()])].join('');
        }
    }

    return undefined;
}

function getArrayStringValues(node: Node | undefined): string[] | undefined {
    if (!node || !Node.isArrayLiteralExpression(node)) {
        return undefined;
    }

    const values: string[] = [];
    for (const element of node.getElements()) {
        const value = getStringValue(element);
        if (!value) {
            return undefined;
        }
        values.push(value);
    }

    return values;
}

function resolveNodeFromIdentifier(sourceFile: SourceFile, node: Node | undefined): Node | undefined {
    if (!node) return undefined;
    if (!Node.isIdentifier(node)) return node;

    const declaration = node.getDefinitions()[0]?.getDeclarationNode();
    if (declaration && Node.isVariableDeclaration(declaration)) {
        return declaration.getInitializer();
    }

    const fallbackDeclaration = sourceFile.getVariableDeclaration(node.getText());
    return fallbackDeclaration?.getInitializer();
}

function getPropertyInitializer(sourceFile: SourceFile, objectLiteral: ObjectLiteralExpression, name: string): Node | undefined {
    const property = objectLiteral.getProperty(name);
    if (!property || !Node.isPropertyAssignment(property)) {
        for (const candidate of objectLiteral.getProperties()) {
            if (!Node.isSpreadAssignment(candidate)) continue;
            const spreadObject = toObjectLiteral(sourceFile, candidate.getExpression());
            if (!spreadObject) continue;
            const initializer = getPropertyInitializer(sourceFile, spreadObject, name);
            if (initializer) {
                return initializer;
            }
        }

        return undefined;
    }
    return resolveNodeFromIdentifier(sourceFile, property.getInitializer());
}

function toObjectLiteral(sourceFile: SourceFile, node: Node | undefined): ObjectLiteralExpression | undefined {
    if (!node) return undefined;
    const resolvedNode = resolveNodeFromIdentifier(sourceFile, node);
    if (!resolvedNode) return undefined;
    if (Node.isObjectLiteralExpression(resolvedNode)) return resolvedNode;
    if (Node.isAsExpression(resolvedNode) || Node.isSatisfiesExpression(resolvedNode)) {
        return toObjectLiteral(sourceFile, resolvedNode.getExpression());
    }
    return undefined;
}

function findReturnedObjectLiteral(sourceFile: SourceFile, callName: string) {
    const fn = sourceFile.getFunction(callName);
    if (!fn) return undefined;

    for (const statement of fn.getDescendantsOfKind(SyntaxKind.ReturnStatement)) {
        const objectLiteral = toObjectLiteral(sourceFile, statement.getExpression());
        if (objectLiteral) {
            return objectLiteral;
        }
    }

    return undefined;
}

function getExportedObjectLiteral(sourceFile: SourceFile): ObjectLiteralExpression | undefined {
    for (const declaration of sourceFile.getVariableDeclarations()) {
        if (!declaration.getVariableStatement()?.isExported()) {
            continue;
        }

        const initializer = declaration.getInitializer();
        const objectLiteral = toObjectLiteral(sourceFile, initializer);
        if (objectLiteral) {
            return objectLiteral;
        }

        if (initializer && Node.isCallExpression(initializer)) {
            const callName = initializer.getExpression().getText();
            const returnedObject = findReturnedObjectLiteral(sourceFile, callName);
            if (returnedObject) {
                return returnedObject;
            }
        }
    }

    return undefined;
}

function getObjectPropertyNames(objectLiteral: ObjectLiteralExpression) {
    return objectLiteral
        .getProperties()
        .filter(Node.isPropertyAssignment)
        .map(property => property.getName());
}

function pushIssue(issues: Issue[], issue: Issue) {
    issues.push(issue);
}

function scanServiceAndIndustryHeroLists(): Issue[] {
    const issues: Issue[] = [];

    const domains: Array<{ domain: 'services' | 'industries'; glob: string }> = [
        { domain: 'services', glob: DATA_GLOBS.services },
        { domain: 'industries', glob: DATA_GLOBS.industries },
    ];

    for (const { domain, glob } of domains) {
        for (const sourceFile of project.getSourceFiles(glob)) {
            const objectLiteral = getExportedObjectLiteral(sourceFile);
            if (!objectLiteral) continue;

            const heroObject = toObjectLiteral(sourceFile, getPropertyInitializer(sourceFile, objectLiteral, 'hero'));
            if (!heroObject) continue;

            const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
            const list = getArrayStringValues(getPropertyInitializer(sourceFile, heroObject, 'list'));

            if (!list) {
                pushIssue(issues, {
                    rule: 'hero-list-length',
                    domain,
                    file: toRelative(sourceFile.getFilePath()),
                    issueType: 'missing_hero_list',
                    message: `${domain}/${slug ?? sourceFile.getBaseName()} is missing hero.list.`,
                    slug,
                });
                continue;
            }

            if (list.length !== 3) {
                pushIssue(issues, {
                    rule: 'hero-list-length',
                    domain,
                    file: toRelative(sourceFile.getFilePath()),
                    issueType: 'invalid_hero_list_count',
                    message: `${domain}/${slug ?? sourceFile.getBaseName()} hero.list must contain exactly 3 items; found ${list.length}.`,
                    slug,
                });
            }
        }
    }

    return issues;
}

function scanHeadingHierarchy(): Issue[] {
    const issues: Issue[] = [];

    const sourceChecks: Array<{ file: string; needle: string; issueType: string; message: string }> = [
        {
            file: 'src/components/reusable/single/SimpleHero.tsx',
            needle: "headingTag = 'h1'",
            issueType: 'hero_not_h1',
            message: 'SimpleHero must default hero headingTag to h1.',
        },
        {
            file: 'src/components/reusable/single/SplitHeroSection.tsx',
            needle: "headingTag = 'h1'",
            issueType: 'hero_not_h1',
            message: 'SplitHeroSection must default hero headingTag to h1.',
        },
        {
            file: 'src/components/reusable/sections/case-studies/CaseStudyHeroSection.tsx',
            needle: "headingTag = 'h1'",
            issueType: 'hero_not_h1',
            message: 'CaseStudyHeroSection must default hero headingTag to h1.',
        },
        {
            file: 'src/components/reusable/single/SectionIntro.tsx',
            needle: "headingLevel = 'h2'",
            issueType: 'section_not_h2',
            message: 'SectionIntro must default section headings to h2.',
        },
    ];

    for (const check of sourceChecks) {
        const fullPath = path.join(root, check.file);
        const sourceText = fs.readFileSync(fullPath, 'utf8');
        if (!sourceText.includes(check.needle)) {
            pushIssue(issues, {
                rule: 'heading-hierarchy',
                domain: 'shared',
                file: check.file,
                issueType: check.issueType,
                message: check.message,
            });
        }
    }

    for (const sourceFile of project.getSourceFiles(DATA_GLOBS.services)) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
        const sectionsObject = toObjectLiteral(sourceFile, getPropertyInitializer(sourceFile, objectLiteral, 'sections'));
        if (!sectionsObject) continue;

        for (const property of sectionsObject.getProperties()) {
            if (!Node.isPropertyAssignment(property)) continue;
            const sectionObject = toObjectLiteral(sourceFile, property.getInitializer());
            if (!sectionObject) continue;
            const hasTitle = Boolean(getStringValue(getPropertyInitializer(sourceFile, sectionObject, 'title')));
            const headerObject = toObjectLiteral(sourceFile, getPropertyInitializer(sourceFile, sectionObject, 'header'));
            const hasHeaderTitle = headerObject
                ? Boolean(getStringValue(getPropertyInitializer(sourceFile, headerObject, 'title')))
                : false;
            if (!hasTitle && !hasHeaderTitle) {
                pushIssue(issues, {
                    rule: 'heading-hierarchy',
                    domain: 'services',
                    file: toRelative(sourceFile.getFilePath()),
                    issueType: 'missing_section_title',
                    message: `services/${slug ?? sourceFile.getBaseName()} section ${property.getName()} is missing a title/header.title.`,
                    slug,
                });
            }
        }
    }

    for (const sourceFile of project.getSourceFiles(DATA_GLOBS.features)) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
        const sectionsObject = toObjectLiteral(sourceFile, getPropertyInitializer(sourceFile, objectLiteral, 'sections'));
        if (!sectionsObject) continue;

        for (const property of sectionsObject.getProperties()) {
            if (!Node.isPropertyAssignment(property)) continue;
            const sectionObject = toObjectLiteral(sourceFile, property.getInitializer());
            if (!sectionObject) continue;
            const hasTitle = Boolean(getStringValue(getPropertyInitializer(sourceFile, sectionObject, 'title')));
            if (!hasTitle) {
                pushIssue(issues, {
                    rule: 'heading-hierarchy',
                    domain: 'features',
                    file: toRelative(sourceFile.getFilePath()),
                    issueType: 'missing_section_title',
                    message: `features/${slug ?? sourceFile.getBaseName()} section ${property.getName()} is missing a title.`,
                    slug,
                });
            }
        }
    }

    return issues;
}

function scanSeoPosition(): Issue[] {
    const issues: Issue[] = [];
    const domains = Object.entries(DATA_GLOBS);

    for (const [domain, glob] of domains) {
        for (const sourceFile of project.getSourceFiles(glob)) {
            const objectLiteral = getExportedObjectLiteral(sourceFile);
            if (!objectLiteral) continue;
            const propertyNames = getObjectPropertyNames(objectLiteral);
            const seoIndex = propertyNames.indexOf('seo');
            const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));

            if (seoIndex === -1) {
                pushIssue(issues, {
                    rule: 'seo-position',
                    domain,
                    file: toRelative(sourceFile.getFilePath()),
                    issueType: 'missing_seo',
                    message: `${domain}/${slug ?? sourceFile.getBaseName()} is missing seo.`,
                    slug,
                });
                continue;
            }

            if (seoIndex !== 0) {
                pushIssue(issues, {
                    rule: 'seo-position',
                    domain,
                    file: toRelative(sourceFile.getFilePath()),
                    issueType: 'seo_not_first_property',
                    message: `${domain}/${slug ?? sourceFile.getBaseName()} must place seo as the first top-level property.`,
                    slug,
                });
            }
        }
    }

    return issues;
}

function scanFaqPosition(): Issue[] {
    const issues: Issue[] = [];

    for (const sourceFile of project.getSourceFiles([
        DATA_GLOBS.blog,
        DATA_GLOBS.resources,
        DATA_GLOBS['case-studies'],
    ])) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
        const propertyNames = getObjectPropertyNames(objectLiteral);
        if (propertyNames.includes('faq')) {
            pushIssue(issues, {
                rule: 'faq-position',
                domain: sourceFile.getFilePath().includes('/blog/') ? 'blog' : sourceFile.getFilePath().includes('/resources/') ? 'resources' : 'case-studies',
                file: toRelative(sourceFile.getFilePath()),
                issueType: 'top_level_faq',
                message: `${slug ?? sourceFile.getBaseName()} must not define a top-level faq block.`,
                slug,
            });
        }
    }

    for (const sourceFile of project.getSourceFiles(DATA_GLOBS.industries)) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const type = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'type'));
        if (type !== 'detail') continue;
        const propertyNames = getObjectPropertyNames(objectLiteral);
        const faqIndex = propertyNames.indexOf('faq');
        const ctaIndex = propertyNames.indexOf('cta');
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));

        if (faqIndex === -1) {
            pushIssue(issues, {
                rule: 'faq-position',
                domain: 'industries',
                file: toRelative(sourceFile.getFilePath()),
                issueType: 'missing_faq',
                message: `industries/${slug ?? sourceFile.getBaseName()} detail page is missing faq.`,
                slug,
            });
            continue;
        }

        if (ctaIndex === -1 || faqIndex !== ctaIndex - 1) {
            pushIssue(issues, {
                rule: 'faq-position',
                domain: 'industries',
                file: toRelative(sourceFile.getFilePath()),
                issueType: 'faq_not_positioned_with_render_order',
                message: `industries/${slug ?? sourceFile.getBaseName()} must place faq immediately before cta.`,
                slug,
            });
        }
    }

    return issues;
}

function scanButtonRule(): Issue[] {
    const issues: Issue[] = [];

    const sourceChecks: Array<{
        file: string;
        expected: string[];
        forbidden?: string[];
        issueType: string;
        message: string;
    }> = [
            {
                file: 'src/components/system/PrimaryCTASection.tsx',
                expected: ['allowSecondaryCTA?: true;', 'if (!isActionableButton(primaryButtonAction)) {'],
                forbidden: ['resolveSecondaryCta(', 'secondaryAction && <Button'],
                issueType: 'missing_primary_cta_guard',
                message: 'PrimaryCTASection must not implicitly resolve or auto-render secondary CTA buttons.',
            },
            {
                file: 'src/components/reusable/single/SectionIntro.tsx',
                expected: ['allowSecondaryCTA?: true;', 'const showSecondaryAction = allowSecondaryCTA === true && isRenderableAction(secondaryAction);'],
                issueType: 'missing_sectionintro_guard',
                message: 'SectionIntro must gate secondary actions behind allowSecondaryCTA.',
            },
            {
                file: 'src/components/reusable/sections/core/DarkSplitShowcaseSection.tsx',
                expected: ['allowSecondaryCTA?: true;', 'allowSecondaryCTA === true && secondaryAction'],
                issueType: 'missing_component_guard',
                message: 'DarkSplitShowcaseSection must gate secondary actions behind allowSecondaryCTA.',
            },
            {
                file: 'src/components/reusable/sections/core/NarrativeStatsSection.tsx',
                expected: ['allowSecondaryCTA?: true;', 'allowSecondaryCTA === true && secondaryAction'],
                issueType: 'missing_component_guard',
                message: 'NarrativeStatsSection must gate secondary actions behind allowSecondaryCTA.',
            },
            {
                file: 'src/components/reusable/sections/core/TestimonialSpotlightSplitSection.tsx',
                expected: ['allowSecondaryCTA?: true;', 'allowSecondaryCTA === true && secondaryAction'],
                issueType: 'missing_component_guard',
                message: 'TestimonialSpotlightSplitSection must gate secondary actions behind allowSecondaryCTA.',
            },
            {
                file: 'src/components/reusable/sections/core/StackedFeatureListSection.tsx',
                expected: ['allowSecondaryCTA?: true;', 'allowSecondaryCTA === true && secondaryAction'],
                issueType: 'missing_component_guard',
                message: 'StackedFeatureListSection must gate secondary actions behind allowSecondaryCTA.',
            },
        ];

    for (const check of sourceChecks) {
        const sourceText = fs.readFileSync(path.join(root, check.file), 'utf8');
        const missingExpected = !check.expected.every(needle => sourceText.includes(needle));
        const hasForbidden = (check.forbidden ?? []).some(needle => sourceText.includes(needle));
        if (missingExpected || hasForbidden) {
            pushIssue(issues, {
                rule: 'button-rule',
                domain: 'shared',
                file: check.file,
                issueType: check.issueType,
                message: check.message,
            });
        }
    }

    if (fs.readFileSync(path.join(root, 'src/domains/industries/templates/IndustryCategoryPageTemplate.tsx'), 'utf8').includes('IndustrySubIndustriesSection')) {
        pushIssue(issues, {
            rule: 'button-rule',
            domain: 'industries',
            file: 'src/domains/industries/templates/IndustryCategoryPageTemplate.tsx',
            issueType: 'implicit_section_injection',
            message: 'IndustryCategoryPageTemplate must not inject fallback sub-industry sections.',
        });
    }

    return issues;
}

function scanBadgeLength(): Issue[] {
    const issues: Issue[] = [];

    for (const sourceFile of project.getSourceFiles(DATA_GLOBS.services)) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const badge = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'badge'));
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
        if (badge && countWords(badge) > 3) {
            pushIssue(issues, {
                rule: 'badge-length',
                domain: 'services',
                file: toRelative(sourceFile.getFilePath()),
                issueType: 'badge_too_long',
                message: `services/${slug ?? sourceFile.getBaseName()} badge must be 3 words or fewer: "${badge}".`,
                slug,
            });
        }
    }

    for (const sourceFile of project.getSourceFiles(DATA_GLOBS.features)) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const badge = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'badge'));
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
        if (badge && countWords(badge) > 3) {
            pushIssue(issues, {
                rule: 'badge-length',
                domain: 'features',
                file: toRelative(sourceFile.getFilePath()),
                issueType: 'badge_too_long',
                message: `features/${slug ?? sourceFile.getBaseName()} badge must be 3 words or fewer: "${badge}".`,
                slug,
            });
        }
    }

    for (const sourceFile of project.getSourceFiles(DATA_GLOBS.industries)) {
        const objectLiteral = getExportedObjectLiteral(sourceFile);
        if (!objectLiteral) continue;
        const heroObject = toObjectLiteral(sourceFile, getPropertyInitializer(sourceFile, objectLiteral, 'hero'));
        const badge = heroObject
            ? getStringValue(getPropertyInitializer(sourceFile, heroObject, 'badge'))
            : undefined;
        const slug = getStringValue(getPropertyInitializer(sourceFile, objectLiteral, 'slug'));
        if (badge && countWords(badge) > 3) {
            pushIssue(issues, {
                rule: 'badge-length',
                domain: 'industries',
                file: toRelative(sourceFile.getFilePath()),
                issueType: 'badge_too_long',
                message: `industries/${slug ?? sourceFile.getBaseName()} hero badge must be 3 words or fewer: "${badge}".`,
                slug,
            });
        }
    }

    return issues;
}

function collectIssues(activeRule: RuleName): Issue[] {
    switch (activeRule) {
        case 'hero-list-length':
            return scanServiceAndIndustryHeroLists();
        case 'heading-hierarchy':
            return scanHeadingHierarchy();
        case 'seo-position':
            return scanSeoPosition();
        case 'faq-position':
            return scanFaqPosition();
        case 'button-rule':
            return scanButtonRule();
        case 'badge-length':
            return scanBadgeLength();
        default:
            throw new Error(`Unsupported rule: ${activeRule}`);
    }
}

async function main() {
    if (!(rule in REPORT_FILE_BY_RULE)) {
        throw new Error(`Missing or unsupported --rule value: ${rule}`);
    }

    const issues = collectIssues(rule);
    const reportPath = path.join(root, 'reports', REPORT_FILE_BY_RULE[rule]);
    const normalizedReport = normalizeRawReport({
        name: rule,
        payload: issues,
        sourceCommand: SOURCE_COMMAND_BY_RULE[rule],
    });

    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    fs.writeFileSync(reportPath, `${JSON.stringify(normalizedReport, null, 2)}\n`, 'utf8');

    if (reportJson) {
        logger.printSummary(`report-json flag active; report -> ${logger.relativePath(reportPath)}`);
    }

    if ((normalizedReport.summary.failed ?? 0) > 0) {
        logger.printErrors(issues.map(issue => `${issue.file}: ${issue.message}`), 'violations', 50);
        process.exit(1);
    }

    logger.printSummary(`passed (${rule})`);
}

await main();
