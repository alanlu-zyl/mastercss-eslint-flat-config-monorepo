// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@master/css.nuxt'],
  css: ['@master/normal.css'],
  typescript: {
    typeCheck: true,
  },
})
