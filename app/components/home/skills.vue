<script setup lang="ts">
import { VIEW_WRAPPER_PADDING, VIEW_WRAPPER_WIDTH } from "~/constants/preset";
import { SKILLS } from "~/constants/skills";
</script>

<template>
  <div
    class="flex flex-col py-6 md:py-10 lg:py-14 bg-amber-100 border-x-4"
    :class="[VIEW_WRAPPER_WIDTH, VIEW_WRAPPER_PADDING]"
  >
    <p class="uppercase font-medium text-lg md:text-xl lg:text-2xl">04 | Skills</p>
    <div
      class="flex flex-wrap justify-center gap-6 mx-auto mt-6 md:mt-10 lg:mt-14 max-w-xl xl:max-w-2xl"
    >
      <div
        v-for="item in SKILLS"
        :key="item.name"
        :title="item.name"
        class="group relative p-6 hover:bg-white border rounded-lg hover:scale-110 transition-all duration-200"
      >
        <img
          :src="item.src"
          :alt="item.name"
          class="size-16 pointer-fine:grayscale-100 pointer-fine:group-hover:grayscale-0"
        />
        <UiBadge
          v-if="item.exploring"
          label="Exploring"
          class="absolute -right-3 -top-3 text-black"
        />
      </div>
    </div>
  </div>
</template>
