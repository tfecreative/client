// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = process.env.VUE_APP_TITLE;
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/main.scss";`,
      },
    },
  },
};
