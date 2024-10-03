// plugins/vuetify.js
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import '@/styles/main.scss'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const customLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
      background: '#fff9ee', // Fond blanc pour le thème clair
      surface: '#f4eddf', // Surface légèrement grise pour les cartes et sections
      primary: '#2E7D32', // Vert foncé pour la couleur principale
      secondary: '#66BB6A', // Vert clair pour la couleur secondaire
      error: '#D32F2F', // Rouge vif pour les erreurs
      info: '#29B6F6', // Bleu clair pour les informations
      success: '#388E3C', // Vert pour les succès
      warning: '#FFA000', // Orange pour les avertissements
    },
  }

  const customDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
      background: '#15130b',
      surface: '#222017',
      primary: '#2E7D32',
      secondary: '#66BB6A',
      error: '#D32F2F',
      info: '#29B6F6',
      success: '#388E3C',
      warning: '#FFA000',
    },
  }

  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'customDarkTheme',
      themes: {
        customDarkTheme,
        customLightTheme,
      },
    },
    display: {
      mobileBreakpoint: 'md',
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
