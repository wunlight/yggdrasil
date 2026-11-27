export const PROJECTS: Project[] = [
  {
    id: "005-amigo",
    title: "Amigo Workshop - POS",
    thumbnail: "",
    techStacks: ["Vue 3", "Go"],
    links: {
      github: "https://github.com/wunlight/amigo-client",
    },
    featured: true,
  },
  {
    id: "006-heimdall",
    title: "Heimdall - Spatial Monitoring Prototype",
    thumbnail: "",
    techStacks: ["Vue 3", "Three.js", "Leaflet"],
    links: {
      live: "https://heimdall-prototype.vercel.app/",
      github: "https://github.com/wunlight/heimdall-prototype",
    },
    featured: true,
  },
  {
    id: "003-apilogik",
    title: "Apilogik Watch - Realtime Fire Panel Monitoring ",
    thumbnail: "",
    techStacks: ["Vue 3", "Leaflet", "TypeScript"],
    links: {
      live: "https://apilogik.com/",
    },
    featured: true,
  },
  {
    id: "001-datis",
    title: "DATIS - Company Profile",
    thumbnail: "",
    techStacks: ["Nuxt", "Express.js"],
    links: {
      live: "https://datis.co.id/",
    },
  },
  {
    id: "002-eragon",
    title: "Eragon - Company Profile",
    thumbnail: "",
    techStacks: ["Nuxt", "Express.js"],
    links: {
      live: "https://www.eragon.co.id/",
    },
  },
];

export const FEATURED_PROJECTS = [
  {
    title: "Amigo Workshop - POS",
    description:
      "A workshop management system built with Vue.js and Go, featuring spare parts inventory management, transaction processing, and sales performance reporting.",
    stacks: ["Vue 3", "Go"],
  },
  {
    title: "Heimdall - Spatial Emergency Monitoring Prototype",
    description:
      "An emergency fire monitoring prototype built with Vue.js, Three.js, and Leaflet.js, designed to visualize building layouts, monitor device statuses, and replay emergency incidents across multiple floors.",
    stacks: ["Vue 3", "Three.js", "Leaflet"],
  },
];
