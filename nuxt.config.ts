import tailwind from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [tailwind()],
  },
});
