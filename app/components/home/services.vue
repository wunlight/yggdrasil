<script setup lang="ts">
import { VIEW_WRAPPER_WIDTH } from "~/constants/preset";
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-8 border-4"
    :class="VIEW_WRAPPER_WIDTH"
    style="border-top-style: dashed"
  >
    <div class="order-1 md:order-2">
      <div class="flex items-center justify-end px-6 lg:px-16 py-4 h-full bg-amber-400 border-b-4">
        <p class="uppercase font-medium text-lg md:text-xl lg:text-2xl">02 | Services</p>
      </div>
    </div>

    <div class="order-2 md:order-1 md:row-span-4">
      <div
        class="flex flex-col justify-center gap-3 px-6 lg:px-16 py-10 h-full bg-emerald-300 md:border-r-4 border-b-4"
      >
        <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">
          Frontend Engineering & UI/UX Implementation
        </h1>
        <p class="text-zinc-700">
          Transform Figma designs or legacy interfaces into fast, responsive, component-driven web
          experiences. Focused on clean code, smooth interactivity, and maintainable frontend
          architecture.
        </p>
      </div>
    </div>

    <div class="order-3 md:order-4 md:row-span-4">
      <div
        class="flex flex-col justify-center gap-3 px-6 lg:px-16 py-10 h-full bg-white md:border-r-4 border-b-4 md:border-b-0"
      >
        <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">
          Landing Page & Custom CMS Development
        </h1>
        <p class="text-zinc-700">
          Custom-built landing pages and company profiles powered by modern JavaScript. Lightweight,
          secure, and engineered for conversion, complete with tailored CMS integration built around
          your team's workflow.
        </p>
      </div>
    </div>

    <div class="order-4 md:order-3 md:row-span-7">
      <div
        class="flex flex-col md:items-end justify-center gap-6 px-6 lg:px-16 py-10 size-full md:text-right bg-purple-400"
      >
        <div class="flex flex-col gap-3">
          <h1 class="font-bold text-xl md:text-2xl lg:text-3xl">
            Full-Stack Web Application Development
          </h1>
          <p class="text-zinc-700">
            End-to-end custom web applications built with modern JavaScript-from interactive
            dashboards and internal tools to scalable SaaS platforms. Engineered for clean
            architecture, high performance, and seamless API integration.
          </p>
        </div>
        <div class="flex gap-3">
          <UiButton label="Let's Talk" icon="icon-[tabler--phone]" severity="success" />
        </div>
      </div>
    </div>
  </div>
</template>
