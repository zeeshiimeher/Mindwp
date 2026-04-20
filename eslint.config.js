import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: [
      'dist/',
      'build/',
      '.next/',
      '.next-audit/',
      'node_modules/',
      '*.config.js',
      '*.config.ts',
      // Do not lint/auto-fix vendored UI components
      'src/components/ui/',
      'src/global/site-wide/services.ts',
      'src/config/features.ts',
      // Generated / tooling artifacts (not user-authored runtime code)
      'src/utils/componentDocs.generated.ts',
      'src/domains/blog/registry.ts',
      'src/domains/case-studies/registry.ts',
      'src/domains/resources/generatedRegistry.ts',
      'reports/',
      'test-results/',
      'tmp/',
      'logs/',
      '_workspace/',
    ],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}', 'scripts/**/*.{ts,tsx,mjs,mts,cts}', 'lib/**/*.{ts,tsx,mjs,mts,cts}', 'config/**/*.{ts,tsx,mjs,mts,cts}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLFormElement: 'readonly',
        HTMLMetaElement: 'readonly',
        HTMLLinkElement: 'readonly',
        HTMLScriptElement: 'readonly',
        KeyboardEvent: 'readonly',
        MouseEvent: 'readonly',
        Node: 'readonly',
        IntersectionObserver: 'readonly',
        requestAnimationFrame: 'readonly',
        setTimeout: 'readonly',
        URLSearchParams: 'readonly',
        fetch: 'readonly',
        alert: 'readonly',
        FormData: 'readonly',
        process: 'readonly',
        URL: 'readonly',
        AbortController: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      'simple-import-sort': simpleImportSort,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      // Code quality
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-undef': 'off', // TypeScript handles undefined identifiers
      'no-unused-vars': 'off', // Let TypeScript handle this
      // Large parts of the codebase are registry/template driven and may
      // temporarily carry unused imports/vars while iterating.
      // Keep signal without blocking builds/validation.
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',

      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Accessibility
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/click-events-have-key-events': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',

      // Import rules
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react$', '^next', '^@?\\w'],
            ['^@/'],
            ['^\\u0000'],
            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
            ['^.+\\.s?css$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Export rules - default exports are allowed in this codebase.
      'no-restricted-exports': 'off',

      // Custom rules for MindWP standardization
      // Prevent use of react-helmet-async
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: 'react-helmet-async',
              message:
                'Use the custom SEO component instead of react-helmet-async for consistency and better performance.',
            },
            {
              name: '@/lib/blog/data',
              importNames: ['BlogCategory', 'BlogPost', 'BlogPostData'],
              message:
                'Import blog types from `@/domains/blog/types` (keep `@/domains/blog/api` for registries/helpers only).',
            },
          ],
          patterns: [
          ],
        },
      ],

      // Prettier
      'prettier/prettier': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: [
      'scripts/core/**/*.{mjs,ts}',
      'scripts/runners/**/*.{mjs,ts}',
      'scripts/lib/**/*.mjs',
      'scripts/analyzers/export-reports.mjs',
      'scripts/validators/validate-system-knowledge.ts',
    ],
    rules: {
      'no-console': 'error',
    },
  },
];