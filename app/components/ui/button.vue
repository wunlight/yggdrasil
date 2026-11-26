<script setup lang="ts">
type IconPosition = "left" | "right";
type Severity = "primary" | "secondary" | "success" | "warn" | "danger" | "plain";
type Size = "sm" | "md" | "lg";

const props = withDefaults(
  defineProps<{
    label?: string;
    icon?: string;
    iconPos?: IconPosition;
    squared?: boolean;
    severity?: Severity;
    outlined?: boolean;
    raised?: boolean;
    size?: Size;
    disabled?: boolean;
  }>(),
  {
    iconPos: "left",
    severity: "primary",
    outlined: true,
    raised: true,
    size: "md",
  },
);

const SEVERITY_CLASSES: Record<Severity, string> = {
  primary: "bg-cyan-400 hover:bg-cyan-500",
  secondary: "bg-purple-400 hover:bg-purple-500",
  success: "bg-lime-400 hover:bg-lime-500",
  warn: "bg-amber-400 hover:bg-amber-500",
  danger: "bg-red-400 hover:bg-red-500",
  plain: "bg-white hover:bg-zinc-200",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "h-8 text-sm",
  md: "h-10 text-base",
  lg: "h-12 text-lg",
};
</script>

<template>
  <button
    class="flex items-center justify-center gap-1.5 rounded-lg active:scale-95 transition-all duration-200 cursor-pointer"
    :class="[
      SEVERITY_CLASSES[severity],
      SIZE_CLASSES[size],
      {
        'px-3': label,
        'flex-row-reverse': iconPos === 'right',
        'aspect-square overflow-hidden': squared,
        'border-2': outlined,
        'nb-shadow': raised,
        'pointer-events-none opacity-50': disabled,
      },
    ]"
  >
    <span v-if="icon" :class="icon" />
    <span v-if="label" class="font-medium">{{ label }}</span>
  </button>
</template>

<style scoped>
.nb-shadow {
  box-shadow: 4px 4px 0 0 #000000;
}
</style>
