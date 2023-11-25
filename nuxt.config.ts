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
  runtimeConfig: {
    public: {
      WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Andrej Hamráček - Website Developer",
      meta: [
        {
          name: "author",
          content: "Andrej Hamráček",
        },
        {
          name: "title",
          content: "Andrej Hamráček - Website Developer",
        },
        {
          name: "description",
          content: "I am a creative web developer who turns ideas into visually captivating and functional websites. Solid and professional website development. Includes design, programming, hosting and setuping up domain!",
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