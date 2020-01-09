import webpack from 'webpack'

const title = 'nuxt-app'
const description = 'Nuxt app template project with my customisation.'
const image = ''

export default {
  mode: 'spa',
  head: {
    title: title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'og:title', name: 'og:title', content: title},
      {hid: 'description', name: 'description', content: description},
      {hid: 'og:description', name: 'og:description', content: description},
      {hid: 'og:image', name: 'og:image', content: image},
      {name: 'og:locale', content: 'en_uk'},
    ],
    link: [
      {rel: 'icon', type: 'image/png', href: '/icon.png'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap'},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '~/assets/less/global.less'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/vue-rx',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    'portal-vue/nuxt',
  ],
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    plugins: [
      new webpack.ProvidePlugin({
        '_': 'lodash'
      }),
    ],
    babel: {
      plugins: ["@babel/plugin-proposal-optional-chaining"]
    },
  },
  sitemap: {
    gzip: true,
    path: '/sitemap.xml',
    hostname: 'https://...',
    cacheTime: 1000 * 60 * 15,
    exclude: [],
    routes: []
  }
}
