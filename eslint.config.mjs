import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Vue best practices
    'vue/multi-word-component-names': 'off',
    'vue/no-multiple-template-root': 'off',

    // Style
    '@stylistic/comma-dangle': ['error', 'never'],
    '@stylistic/semi': ['error', 'never'],

    // TypeScript
    '@typescript-eslint/no-explicit-any': 'warn',

    // FSD: prevent cross-layer imports (upper layers should not be imported by lower layers)
    'no-restricted-imports': ['error', {
      patterns: [
        { group: ['~/pages/*'], message: 'Pages layer cannot be imported from lower layers.' },
        { group: ['~/widgets/*'], message: 'Import widgets only from pages or app layer.' }
      ]
    }]
  }
})
