// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ['@/assets/css/tailwind.css','@fontsource/syne/400.css'],

  modules: [
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt'
  ],
  colorMode: {
    preference: 'dark',
  },
})
