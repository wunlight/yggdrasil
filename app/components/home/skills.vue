<script setup lang="ts">
import { VIEW_WRAPPER_PADDING, VIEW_WRAPPER_WIDTH } from "~/constants/preset";
import { SKILLS } from "~/constants/skills";
</script>

<template>
  <div
    class="flex flex-col gap-6 md:gap-10 py-6 md:py-10 lg:py-14 bg-amber-100 border-x-4"
    :class="[VIEW_WRAPPER_WIDTH, VIEW_WRAPPER_PADDING]"
  >
    <p class="uppercase font-medium text-lg md:text-xl lg:text-2xl">04 | Skills</p>
    <div
      class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 mx-auto w-fit border-t-3 border-l-3 border-black"
    >
      <div
        v-for="item in SKILLS"
        :key="item.name"
        :title="item.name"
        class="group flex items-center justify-center p-8 hover:bg-black/20 border-r-3 border-b-3 border-black transition-colors"
      >
        <img
          :src="item.src"
          :alt="item.name"
          class="size-14 group-hover:scale-110 pointer-fine:grayscale group-hover:grayscale-0 transition-all duration-300 select-none"
        />
      </div>
    </div>
  </div>
</template>
