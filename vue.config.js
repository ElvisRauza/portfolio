module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/sass/base.scss";`,
      },
    },
  },
};
