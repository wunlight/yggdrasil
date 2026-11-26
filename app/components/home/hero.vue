<script setup lang="ts">
import { VIEW_WRAPPER_PADDING, VIEW_WRAPPER_WIDTH } from "~/constants/preset";
</script>

<template>
  <div
    class="flex flex-col gap-24 pt-10 pb-14 bg-amber-100 border-x-4"
    :class="[VIEW_WRAPPER_WIDTH, VIEW_WRAPPER_PADDING]"
  >
    <div class="flex flex-col">
      <h6 class="flex flex-col uppercase font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
        <span>Hello,</span>
        <span>I am Rafael</span>
      </h6>
      <div class="flex gap-1.5 px-1.5">
        <span class="icon-[tabler--arrow-loop-left] size-6 lg:size-8 rotate-192" />
        <UiBadge label="Frontend Engineer" class="mt-1.5 lg:mt-3" />
      </div>
    </div>
    <div class="relative ml-auto max-w-64 lg:max-w-68 text-sm lg:text-base">
      <p>
        Focused on solving problems and turning ideas into functional, well-crafted web
        applications.
      </p>
      <div class="absolute right-0 -top-3 h-1.5 w-24 bg-black" />
      <div class="absolute left-1/4 -bottom-3 h-1.5 w-24 bg-black" />
    </div>
  </div>
</template>
