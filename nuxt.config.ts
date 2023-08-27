// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/content",
  ],
  css: [
    "@/assets/main.css",
  ],
  nitro: {
    compressPublicAssets: true,
  },
})
