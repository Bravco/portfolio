export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/icon", "@nuxtjs/tailwindcss", "@nuxtjs/robots", "lenis/nuxt"],
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
        {
          name: "keywords",
          content: "website development, web development, website developer, web developer, web design, website design, web designer, website desginer"
        }
      ],
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
  compatibilityDate: "2025-06-17"
})