<script setup lang="ts">
type Severity = "primary" | "secondary" | "success" | "warn" | "danger" | "plain";

const props = withDefaults(
  defineProps<{
    severity?: Severity;
  }>(),
  {
    severity: "primary",
  },
);

const shadowClass = computed(() => `nb-shadow-${props.severity}`);
</script>

<template>
  <div class="relative flex flex-col">
    <div
      class="aspect-video bg-zinc-800 border-3 border-black rounded-lg overflow-clip"
      :class="[shadowClass]"
    >
      <img alt="image" class="size-full object-cover" />
    </div>
    <div class="p-4">
      <h1 class="font-medium text-2xl">Title Goes Here</h1>
      <p class="line-clamp-3 text-zinc-300">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis autem, quod facere nisi
        vero officiis eveniet fugiat delectus! Hic et pariatur officia quas eum rem sint quos ea
        itaque quae.
      </p>
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
