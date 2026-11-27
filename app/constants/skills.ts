import express from "~/assets/images/skills/express.svg";
import go from "~/assets/images/skills/go.svg";
import leaflet from "~/assets/images/skills/leaflet.svg";
import nuxt from "~/assets/images/skills/nuxt.svg";
import postgres from "~/assets/images/skills/postgres.svg";
import tailwindcss from "~/assets/images/skills/tailwindcss.svg";
import threejs from "~/assets/images/skills/threejs.svg";
import typescript from "~/assets/images/skills/typescript.svg";
import vue from "~/assets/images/skills/vue.svg";

export const SKILLS = [
  { name: "TypeScript", src: typescript },
  { name: "Vue 3", src: vue },
  { name: "Nuxt", src: nuxt },
  { name: "Tailwind CSS", src: tailwindcss },
  { name: "Three.js", src: threejs },
  { name: "Leaflet", src: leaflet },
  { name: "Express", src: express },
  { name: "Go", src: go },
  { name: "PostgreSQL", src: postgres },
] as const;
