const pkg = require("./package");
const loadingColor = "#68c5b3";

module.exports = {
  mode: "spa",

  /*
  ** Headers of the page
  */
  head: {
    title: "Awesome Library",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "~assets/fonts/ArchitectsDaughter.ttf" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Gaegu"
      },
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.1.1/css/all.css"
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: loadingColor, height: "4px" },
  loadingIndicator: {
    name: "rectangle-bounce",
    color: loadingColor,
    background: "white"
  },
  /*
  ** Global CSS
  */
  css: ["~assets/css/animation.css", "~assets/css/style.css"],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt"
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  },
  /*
  ** Transition between pages
  */
  transition: {
    name: "fade",
    mode: "out-in"
  }
};
