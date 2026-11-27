<script setup lang="ts">
import { VIEW_WRAPPER_PADDING, VIEW_WRAPPER_WIDTH } from "~/constants/preset";
import { PROJECTS } from "~/constants/projects";
</script>

<template>
  <div
    class="flex flex-col gap-6 md:gap-10 lg:gap-14 py-6 md:py-10 lg:py-14 text-white bg-zinc-900 border-x-4 border-black"
    :class="[VIEW_WRAPPER_WIDTH, VIEW_WRAPPER_PADDING]"
  >
    <p class="uppercase font-medium text-center text-lg md:text-xl lg:text-2xl">
      03 | Featured Projects
    </p>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ProjectCard
        v-for="item in PROJECTS.filter((p) => p.featured)"
        :key="item.title"
        :data="item"
      />
    </div>
    <UiButton
      label="View Projects"
      icon="icon-[tabler--arrow-up-right]"
      icon-pos="right"
      class="self-center text-black"
      @click="navigateTo('projects')"
    />
  </div>
</template>
