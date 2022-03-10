export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'format-detection',
        content: 'telephone=no',
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'article',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/favicon.png',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // SCSS file in the project
    '@/assets/css/main.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // https://github.com/Akryum/vue-observe-visibility
    '@/plugins/vue-observe-visibility',
    // https://github.com/shrpne/vue-inline-svg
    '@/plugins/vue-inline-svg',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
    // https://google-analytics.nuxtjs.org/
    '@nuxtjs/google-analytics',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://sitemap.nuxtjs.org/
    '@nuxtjs/sitemap',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Nuxt Style Resources
  styleResources: {
    scss: ['./assets/css/config/index.scss'],
  },

  // Google fonts
  googleFonts: {
    display: 'swap',
    families: {
      'Source+Sans+Pro': {
        wght: [400, 500, 600],
      },
    },
  },

  // Google Analytics
  googleAnalytics: {
    id: 'G-HMGFFXW6F1',
  },

  // Sitemap
  sitemap: {
    hostname: 'https://www.elvisrauza.me'
  }
}
