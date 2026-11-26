<script setup lang="ts">
const SEVERITY = ["primary", "secondary", "success", "warn", "danger", "plain"] as const;
type Severity = (typeof SEVERITY)[number];

const props = withDefaults(
  defineProps<{
    title: string;
    description: string;
    thumbnail?: string;
    severity?: Severity;
  }>(),
  {},
);

const severity = ref<Severity>(props.severity ?? "plain");

const shadowClass = computed(() => `nb-shadow-${severity.value}`);

onMounted(() => {
  if (!props.severity) severity.value = SEVERITY[Math.floor(Math.random() * 6)]!;
});
</script>

<template>
  <div class="relative flex flex-col">
    <div
      class="aspect-video grid place-content-center bg-zinc-800 border-3 border-black rounded-lg overflow-clip"
      :class="[shadowClass]"
    >
      <img v-if="thumbnail" alt="image" class="size-full object-cover" />
      <span v-else class="icon-[tabler--photo-off] size-10" />
    </div>
    <div class="p-4">
      <h1 class="line-clamp-1 font-medium text-2xl">{{ title }}</h1>
      <p class="line-clamp-3 text-zinc-300">{{ description }}</p>
    </div>
    <slot name="actions" />
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
