// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error (As seen in vuetify doc)
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-icon',
    '@nuxt/eslint',
  ],

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
    baseURL: '/personal-portofolio/', // baseURL: '/<repository>/'
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/styles/main.scss',
    'devicon/devicon.min.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },

  plugins: [
    {
      src: '~/plugins/aos.ts',
      mode: 'client',
    },
  ],

  compatibilityDate: '2024-10-01',
})
