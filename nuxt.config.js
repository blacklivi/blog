export default {
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: { color: '#67AFFA'},

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '@/theme/index.css'
  ],
  plugins: [
    '@/plugins/globals'
  ],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {},
  build: {
    transpile: [/^element-ui/]
  }
}
