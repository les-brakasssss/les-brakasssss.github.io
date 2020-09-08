export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: "Les Brakasssss'",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      { name: 'msapplication-TileImage', content: 'favicon-144.png' },
      { name: 'msapplication-TileColor', content: '#FFFFFF' },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32.png',
        sizes: '32x32',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-64.png',
        sizes: '64x64',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-96.png',
        sizes: '96x96',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-196.png',
        sizes: '196x196',
      },
    ],
  },
  // Global CSS
  css: ['vuesax/dist/vuesax.css'],
  // Plugins to load before mounting the App, https://nuxtjs.org/guide/plugins
  plugins: ['@/plugins/vuesax'],
  // Auto import components, https://nuxtjs.org/api/configuration-components
  components: true,
  // Nuxt.js dev-modules
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  // Nuxt.js modules
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
  ],
  // Axios module configuration, https://axios.nuxtjs.org/options
  axios: {},
  // Content module configuration, https://content.nuxtjs.org/configuration
  content: {},
  // Build configuration, https://nuxtjs.org/api/configuration-build/
  build: {},
}
