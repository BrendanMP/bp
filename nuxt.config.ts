export default defineNuxtConfig({
  modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxt/content'],

  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      helloText: 'Hello from the Edge 👋',
    },
  },
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-03-01',
  hub: {},
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },
})
