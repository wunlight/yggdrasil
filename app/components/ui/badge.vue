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
  primary: "text-black bg-cyan-400",
  secondary: "text-black bg-purple-400",
  success: "text-black bg-lime-400",
  warn: "text-black bg-amber-400",
  danger: "text-black bg-red-400",
  plain: "text-black bg-white",
};

const SIZE_CLASSES: Record<Size, string> = {
  sm: "h-5 text-xs",
  md: "h-7 text-sm",
  lg: "h-9 text-base",
};
</script>

<template>
  <button
    class="flex items-center justify-center gap-1.5 rounded-lg"
    :class="[
      SEVERITY_CLASSES[severity],
      SIZE_CLASSES[size],
      {
        'px-1.5': label,
        'flex-row-reverse': iconPos === 'right',
        'aspect-square overflow-hidden': squared,
        'border-2 border-black': outlined,
        'nb-shadow': raised,
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
