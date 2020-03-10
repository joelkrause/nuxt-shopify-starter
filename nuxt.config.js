

export default {
  siteName: 'Nuxt Test',
  mode: 'universal',
  /*
  ** Headers of the page
  */
 head: {
  titleTemplate: '%s - Nuxt Starter',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },

    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
    { hid: 'description', name: 'description', content: 'Meta description' }
  ]
},
  /*
  ** Customize the progress-bar color
  */
  /* Page Transitions */
  pageTransition: {
    name: "default",
    mode: "out-in"
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/pages.server.js",
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'nuxt-lazy-load',
    'nuxt-shopify'
  ],
  shopify: {
    /**
     * Your shopify domain
     */
    domain: 'raak-development.myshopify.com',
 
    /**
     * Your shopify storefront access token
     */
    storefrontAccessToken: 'e8071863e548dfec993929af9b9db0b4',
 
    /**
     * This will be larger than the optimized version, as it will contain all fields that are available in the
     * Storefront API. (https://help.shopify.com/en/api/custom-storefronts/storefront-api/reference)
     * This should only be used when you need to add custom queries to supplement the JS Buy SDK queries.
     */
    unoptimized: false,
  },
  styleResources: {
    scss: [
        'assets/styles/global.scss',
    ]
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
