<script setup lang="ts">
const show = defineModel<boolean>({ default: false });

const open = () => (show.value = true);
const close = () => (show.value = false);
</script>

<template>
  <slot name="trigger" :open="open" />

  <div v-if="show" class="fixed inset-0 grid place-content-center bg-black/40 backdrop-blur z-99">
    <div class="flex flex-col gap-4 p-4 bg-white border-2 rounded-lg">
      <div class="flex items-center justify-between gap-4">
        <p class="font-medium text-lg">My Contacts</p>
        <UiButton
          icon="icon-[tabler--x]"
          severity="plain"
          size="sm"
          :raised="false"
          squared
          @click="close"
        />
      </div>

      <hr class="border-zinc-300" />

      <div class="flex flex-col gap-2">
        <a
          href="mailto:rafael14wun@gmail.com"
          target="_blank"
          class="flex items-center gap-2 p-1.5 hover:bg-purple-400 hover:outline-2 rounded"
        >
          <span class="icon-[tabler--mail] text-2xl" />
          <span>rafael14wun@gmail.com</span>
        </a>
        <a
          href="https://github.com/wunlight"
          target="_blank"
          class="flex items-center gap-2 p-1.5 hover:bg-purple-400 hover:outline-2 rounded"
        >
          <span class="icon-[tabler--brand-github] text-2xl" />
          <span>wunlight</span>
        </a>
        <a
          href="https://www.linkedin.com/in/rafael-wun-4411243a3"
          target="_blank"
          class="flex items-center gap-2 p-1.5 hover:bg-purple-400 hover:outline-2 rounded"
        >
          <span class="icon-[tabler--brand-linkedin] text-2xl" />
          <span>Rafael Wun</span>
        </a>
      </div>
    </div>
  </div>
</template>
