import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve(__dirname),
      '@': resolve(__dirname)
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['tests/**/*.test.ts'],
    setupFiles: ['tests/setup.ts'],
    coverage: {
      provider: 'v8',
      include: ['shared/**', 'entities/**', 'features/**', 'widgets/**'],
      exclude: ['**/*.d.ts', '**/*.test.ts']
    }
  }
})
