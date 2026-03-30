import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';

const validatorScriptPath = path.resolve(process.cwd(), 'scripts/validate-blog.mjs');

const tempDirs: string[] = [];

const writeFile = (filePath: string, content: string) => {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
};

const createTempWorkspace = ({
  authorKey = 'DEFAULT',
  landingPath = '/blog',
  publishDate = '2026-01-10',
} = {}) => {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'mindwp-blog-validator-'));
  tempDirs.push(tempRoot);

  writeFile(
    path.join(tempRoot, 'tsconfig.json'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'ES2022',
          module: 'ESNext',
          moduleResolution: 'Bundler',
          strict: false,
          jsx: 'preserve',
          baseUrl: '.',
          paths: {
            '@/*': ['src/*'],
          },
        },
        include: ['src/**/*.ts', 'src/**/*.tsx'],
      },
      null,
      2
    )
  );

  writeFile(
    path.join(tempRoot, 'src/domains/blog/data/blog.ts'),
    [
      'export const BLOG_AUTHORS = {',
      "  DEFAULT: { key: 'DEFAULT', name: 'Team', role: 'Editor', initials: 'TM' },",
      '};',
      '',
      'export const BLOG_CATEGORIES = [',
      "  { category: 'ai', slug: 'ai', name: 'AI', description: 'AI desc', colors: { bg: 'x', text: 'y' } },",
      '];',
      '',
      'export const BLOG_LANDING_SEO = {',
      "  title: 'Blog',",
      "  description: 'Blog desc',",
      `  path: '${landingPath}',`,
      '};',
      '',
    ].join('\n')
  );

  writeFile(
    path.join(tempRoot, 'src/domains/blog/registry.ts'),
    [
      "import { testPost } from '@/domains/blog/content/TestPost';",
      '',
      'export const BLOG_POSTS = {',
      "  'test-post': testPost,",
      '};',
      '',
    ].join('\n')
  );

  writeFile(
    path.join(tempRoot, 'src/lib/content-graph/canonical.ts'),
    [
      "export const CANONICAL_SYSTEMS = ['ai-lead-handling'] as const;",
      'export const CANONICAL_INDUSTRIES = [] as const;',
      "export const CANONICAL_TOPICS = ['lead-management'] as const;",
      '',
    ].join('\n')
  );

  writeFile(
    path.join(tempRoot, 'src/domains/blog/content/TestPost.tsx'),
    [
      "const slug = 'test-post';",
      'const canonical = `/blog/${slug}`;',
      '',
      'export const testPost = {',
      '  slug,',
      "  title: 'Test Post Automation Guide for Local Teams',",
      "  metaTitle: 'Test Post Automation Guide for Local Teams | MindWP',",
      "  metaDescription: 'This test post explains how local teams structure automation, CRM handoffs, and follow-up systems so leads move cleanly from inquiry to booked work.',",
      `  publishDate: '${publishDate}',`,
      `  authorKey: '${authorKey}',`,
      "  category: 'ai',",
      "  systems: ['ai-lead-handling'],",
      '  industries: [],',
      "  topics: ['lead-management'],",
      "  primaryKeyword: 'test post',",
      "  supportingKeywords: ['one'],",
      "  tags: ['tag'],",
      '  seo: {',
      "    title: 'Test Post Automation Guide for Local Teams | MindWP',",
      "    description: 'This test post explains how local teams structure automation, CRM handoffs, and follow-up systems so leads move cleanly from inquiry to booked work.',",
      '    canonical,',
      "    keywords: ['test', 'one'],",
      '    openGraph: {',
      "      title: 'Test Post Automation Guide for Local Teams | MindWP',",
      "      description: 'This test post explains how local teams structure automation, CRM handoffs, and follow-up systems so leads move cleanly from inquiry to booked work.',",
      '    },',
      '  },',
      '  sections: [],',
      '};',
      '',
    ].join('\n')
  );

  return tempRoot;
};

const runValidator = (workspaceRoot: string) => {
  return spawnSync('node', [validatorScriptPath], {
    cwd: workspaceRoot,
    encoding: 'utf8',
  });
};

afterEach(() => {
  for (const dir of tempDirs.splice(0, tempDirs.length)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
});

describe('validate-blog script', () => {
  it('passes for valid canonical domain blog structure', () => {
    const workspaceRoot = createTempWorkspace();

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(0);
    expect(`${result.stdout}\n${result.stderr}`).toContain('Blog validated');
  });

  it('fails when a post uses an unknown author key', () => {
    const workspaceRoot = createTempWorkspace({ authorKey: 'UNKNOWN' });

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('uses unknown authorKey');
  });

  it('fails when a post publishDate is in the future', () => {
    const workspaceRoot = createTempWorkspace({ publishDate: '2999-01-01' });

    const result = runValidator(workspaceRoot);

    expect(result.status).toBe(1);
    expect(`${result.stdout}\n${result.stderr}`).toContain('publishDate must not be in the future');
  });
});
