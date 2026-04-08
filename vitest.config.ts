import path from 'node:path';

import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['src/test/setup.ts'],
    include: [
      'src/**/*.test.ts',
      'src/**/*.test.tsx',
      'tests/unit/**/*.test.ts',
      'tests/integration/**/*.test.ts',
      'tests/system/**/*.test.ts',
    ],
    exclude: ['tests/e2e/**', 'node_modules/**'],
  },
});
