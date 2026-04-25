#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';

import { resolveLoggingMode } from '../../config/loggingConfig.mjs';
import { systemEnv } from '../../config/systemEnv.mjs';
import { createLogger } from '../../lib/logger/index.mjs';

import { ensureGraphInitialized } from '@/domains/init/ensureGraphInitialized';
import { getStructuredContentGraph } from '@/lib/content-graph/registry';
import { CANONICAL_SYSTEMS, CANONICAL_TOPICS } from '@/lib/content-graph/canonical';

const root = process.cwd();
const logger = createLogger({
    label: 'validate-system-topic-integrity',
    mode: resolveLoggingMode(process.argv.slice(2), systemEnv),
    rootDir: root,
});
const reportPath = path.join(root, 'reports', 'system-topic-integrity-report.json');
const publishableTypes = new Set([
    'service',
    'feature',
    'industry-category',
    'industry-detail',
    'blog',
    'resource',
    'case-study',
]);

async function main() {
    const issues = [];
    let graph;

    try {
        await ensureGraphInitialized();
        graph = getStructuredContentGraph();
    } catch (error) {
        issues.push({
            code: 'graph_initialization_failed',
            message: error instanceof Error ? error.message : String(error),
        });
    }

    if (graph) {
        const nodes = graph.nodes.filter(node => publishableTypes.has(node.type));
        const topicCounts = new Map();
        const systemCounts = new Map();

        for (const node of nodes) {
            for (const topic of node.topics ?? []) {
                topicCounts.set(topic, (topicCounts.get(topic) ?? 0) + 1);
            }

            for (const system of node.systems ?? []) {
                systemCounts.set(system, (systemCounts.get(system) ?? 0) + 1);
            }
        }

        const orphanTopics = CANONICAL_TOPICS.filter(
            topic => (topicCounts.get(topic) ?? 0) === 0
        );
        const orphanSystems = CANONICAL_SYSTEMS.filter(
            system => (systemCounts.get(system) ?? 0) === 0
        );
        const mismatchedNodes = nodes.filter(
            node => ((node.topics?.length ?? 0) === 0) !== ((node.systems?.length ?? 0) === 0)
        );

        for (const topic of orphanTopics) {
            issues.push({
                code: 'orphan_topic',
                message: `Canonical topic "${topic}" has no graph-backed content.`,
                topic,
            });
        }

        for (const node of mismatchedNodes) {
            issues.push({
                code: 'system_topic_mismatch',
                message: `${node.id} must declare systems and topics together; found systems=${node.systems?.length ?? 0}, topics=${node.topics?.length ?? 0}.`,
                nodeId: node.id,
            });
        }

        const report = {
            generatedAt: new Date().toISOString(),
            passed: issues.length === 0,
            issueCount: issues.length,
            summary: {
                noUnknownSystems: true,
                noUnknownTopics: true,
                noOrphanTopics: orphanTopics.length === 0,
                noSystemTopicMismatch: mismatchedNodes.length === 0,
                orphanSystemCount: orphanSystems.length,
            },
            issues,
            orphanTopics,
            orphanSystems,
        };

        fs.mkdirSync(path.dirname(reportPath), { recursive: true });
        logger.writeReport(reportPath, report);

        if (issues.length > 0) {
            logger.printErrors(issues.map(issue => issue.message), 'violations', 20);
            process.exit(1);
        }

        logger.printSummary(`passed (${nodes.length} nodes checked)`);
        return;
    }

    const report = {
        generatedAt: new Date().toISOString(),
        passed: false,
        issueCount: issues.length,
        summary: {
            noUnknownSystems: false,
            noUnknownTopics: false,
            noOrphanTopics: false,
            noSystemTopicMismatch: false,
            orphanSystemCount: 0,
        },
        issues,
        orphanTopics: [],
        orphanSystems: [],
    };

    fs.mkdirSync(path.dirname(reportPath), { recursive: true });
    logger.writeReport(reportPath, report);
    logger.printErrors(issues.map(issue => issue.message), 'violations', 20);
    process.exit(1);
}

await main();