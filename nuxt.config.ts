export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint'
  ],

  // FSD-aware component scanning
  // Each slice's ui/ dir is registered with a Layer+Slice prefix.
  // When adding a new slice, add: { path: '~/layer/sliceName/ui', prefix: 'LayerSliceName', pathPrefix: false }
  components: [
    { path: '~/shared/ui', prefix: 'Shared' },
    { path: '~/features/counter/ui', prefix: 'FeaturesCounter', pathPrefix: false },
    { path: '~/widgets/header/ui', prefix: 'WidgetsHeader', pathPrefix: false }
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
