<script setup lang="ts">
import { VIEW_WRAPPER_PADDING, VIEW_WRAPPER_WIDTH } from "~/constants/preset";
import { PROJECTS } from "~/constants/projects";
</script>

<template>
  <div
    class="flex flex-col py-14 bg-white border-x-4 border-t-4"
    :class="[VIEW_WRAPPER_WIDTH, VIEW_WRAPPER_PADDING]"
    style="border-top-style: dashed"
  >
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <ProjectCard v-for="item in PROJECTS" :key="item.title" :data="item" />
    </div>
  </div>
</template>
