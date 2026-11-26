import express from "~/assets/images/skills/express.svg";
import go from "~/assets/images/skills/go.svg";
import leaflet from "~/assets/images/skills/leaflet.svg";
import postgres from "~/assets/images/skills/postgres.svg";
import tailwindcss from "~/assets/images/skills/tailwindcss.svg";
import threejs from "~/assets/images/skills/threejs.svg";
import typescript from "~/assets/images/skills/typescript.svg";
import vue from "~/assets/images/skills/vue.svg";

export const SKILLS = [
  { name: "TypeScript", src: typescript, exploring: false },
  { name: "Vue 3", src: vue, exploring: false },
  { name: "Tailwind CSS", src: tailwindcss, exploring: false },
  { name: "Three.js", src: threejs, exploring: true },
  { name: "Leaflet", src: leaflet, exploring: false },
  { name: "Express", src: express, exploring: false },
  { name: "Go", src: go, exploring: true },
  { name: "PostgreSQL", src: postgres, exploring: false },
] as const;
