<script setup lang="ts">
const SEVERITY = ["primary", "secondary", "success", "warn", "danger", "plain"] as const;
type Severity = (typeof SEVERITY)[number];

const props = withDefaults(
  defineProps<{
    data: Project;
    severity?: Severity;
  }>(),
  {
    severity: "primary",
  },
);

const shadowClass = computed(() => `nb-shadow-${props.severity}`);
</script>

<template>
  <div :title="data.title" class="group relative flex flex-col">
    <div
      class="relative z-0 aspect-video grid place-content-center bg-zinc-800 border-3 border-black rounded-lg overflow-clip"
      :class="[shadowClass]"
    >
      <img
        v-if="data.thumbnail"
        :src="data.thumbnail"
        :alt="data.title"
        class="aspect-video h-full"
      />
      <span v-else class="icon-[tabler--photo-off] size-10 text-white" />
    </div>
    <div class="relative z-0 flex flex-col gap-1.5 p-3">
      <h1 class="line-clamp-1 font-medium text-2xl">{{ data.title }}</h1>
      <div class="flex flex-wrap gap-3">
        <UiBadge
          v-for="(item, idx) in data.techStacks"
          :key="`${item}-${idx}`"
          :label="item"
          severity="danger"
          size="sm"
        />
      </div>
    </div>
    <div class="absolute right-3 top-3 z-1 flex gap-3">
      <NuxtLink v-if="data.links.blog" :to="data.links.blog">
        <UiButton icon="icon-[tabler--book]" severity="success" size="sm" squared />
      </NuxtLink>
      <a v-if="data.links.github" :href="data.links.github" target="_blank">
        <UiButton icon="icon-[tabler--brand-github]" severity="plain" size="sm" squared />
      </a>
      <a v-if="data.links.live" :href="data.links.live" target="_blank">
        <UiButton icon="icon-[tabler--arrow-up-right]" severity="warn" size="sm" squared />
      </a>
    </div>
  </div>
</template>

<style scoped>
.nb-shadow-primary {
  box-shadow:
    4px 4px 0 0 var(--color-cyan-400),
    8px 8px 0 0 var(--color-black);
}
.nb-shadow-secondary {
  box-shadow:
    4px 4px 0 0 var(--color-purple-400),
    8px 8px 0 0 var(--color-black);
}
.nb-shadow-success {
  box-shadow:
    4px 4px 0 0 var(--color-lime-400),
    8px 8px 0 0 var(--color-black);
}
.nb-shadow-warn {
  box-shadow:
    4px 4px 0 0 var(--color-amber-400),
    8px 8px 0 0 var(--color-black);
}
.nb-shadow-danger {
  box-shadow:
    4px 4px 0 0 var(--color-rose-400),
    8px 8px 0 0 var(--color-black);
}
.nb-shadow-plain {
  box-shadow:
    4px 4px 0 0 #ffffff,
    8px 8px 0 0 var(--color-black);
}
</style>
