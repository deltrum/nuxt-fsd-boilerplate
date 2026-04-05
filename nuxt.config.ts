export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint'
  ],

  // FSD-aware component scanning
  components: [
    { path: '~/shared/ui', prefix: 'Shared' },
    { path: '~/entities', pathPrefix: true },
    { path: '~/features', pathPrefix: true },
    { path: '~/widgets', pathPrefix: true }
  ],

  // Auto-import composables from FSD layers
  imports: {
    dirs: [
      'shared/lib',
      'shared/config',
      'features/**/model'
    ]
  },

  devtools: { enabled: true },

  css: ['~/app/styles/main.css'],

  dir: {
    layouts: 'app/layouts'
  }, compatibilityDate: '2025-01-01',

  typescript: {
    strict: true,
    typeCheck: false // enable in CI with `yarn typecheck`
  },

  eslint: {
    config: {
      stylistic: {
        semi: false,
        commaDangle: 'never'
      }
    }
  },

  // Pinia auto-imports
  pinia: {
    storesDirs: [
      'shared/**/model',
      'entities/**/model',
      'features/**/model'
    ]
  }
})
