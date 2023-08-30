// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/content",
    "@invictus.codes/nuxt-vuetify",
  ],
  css: [
    "@/assets/main.css",
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Andrej Hamráček",
      meta: [
        {
          name: "author",
          content: "Andrej Hamráček",
        },
        {
          name: "title",
          content: "Andrej Hamráček - Web Developer",
        },
        {
          name: "description",
          content: "I am a creative web developer who turns ideas into visually captivating and functional websites.",
        },
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  image: {
    provider: "netlify",
    netlify: {
      baseURL: process.env.IMAGES_URL,
    },
  },
})