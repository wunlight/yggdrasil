<script setup lang="ts">
import { VIEW_WRAPPER_PADDING, VIEW_WRAPPER_WIDTH } from "~/constants/preset";
</script>

<template>
  <div
    class="flex flex-col gap-24 pt-10 pb-14 bg-amber-100 border-x-4"
    :class="[VIEW_WRAPPER_WIDTH, VIEW_WRAPPER_PADDING]"
  >
    <h6 class="flex flex-col uppercase font-medium text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      <span>What</span>
      <span>I've Worked</span>
    </h6>
  </div>
</template>
