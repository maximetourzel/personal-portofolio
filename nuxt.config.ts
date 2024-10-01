// https://v3.nuxtjs.org/api/configuration/nuxt.config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    'nuxt-icon'
  ],

  runtimeConfig: {
    public: {
      githubToken: process.env.GITHUB_API_KEY
    }
  },

  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    baseURL: '/personal-portofolio/' // baseURL: '/<repository>/'
  },

  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css',
    '~/styles/main.scss',
    'devicon/devicon.min.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls
      }
    }
  },

  plugins: [
    {
      src: '~/plugins/aos.ts',
      mode: 'client'
    }
  ],

  compatibilityDate: '2024-10-01'
})
