export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ "@nuxt/image", "@nuxt/icon", "@nuxtjs/tailwindcss", "v-gsap-nuxt" ],
  css: [ "@/assets/main.css" ],
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
      title: "Andrej Hamráček - Web Developer",
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
          content: "I am a creative web developer who turns ideas into visually captivating and functional websites. Solid and professional website development. Includes design, programming, hosting and setuping up domain!",
        },
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  compatibilityDate: "2025-06-17"
})