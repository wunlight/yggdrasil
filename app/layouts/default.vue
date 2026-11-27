<script setup lang="ts">
const showMenu = ref(false);

const navTo = (path: string) => {
  navigateTo(path);
  showMenu.value = false;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <slot />

  <div class="fixed top-6 right-6 xl:right-[max(0px,calc((100vw-1200px)/2))] z-50">
    <UiButton
      :icon="showMenu ? 'icon-[tabler--x]' : 'icon-[tabler--menu-2]'"
      severity="plain"
      squared
      :raised="!showMenu"
      @click="showMenu = !showMenu"
    />
  </div>

  <div
    v-if="showMenu"
    class="fixed isolate inset-0 z-40 bg-zinc-900/50 backdrop-blur"
    @click.self="showMenu = false"
  />

  <Transition
    enter-active-class="origin-top-right transition duration-200 ease-out"
    enter-from-class="opacity-0 scale-5"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="origin-top-right transition duration-150 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0 scale-75"
  >
    <div v-if="showMenu" class="fixed isolate inset-0 z-40">
      <div
        class="fixed top-0 right-0 z-40 flex flex-col items-start gap-4 p-6 w-64 md:w-80 xl:w-100 bg-white shadow-[0_0_0_6px_#000000] rounded-bl-lg"
      >
        <UiButton
          label="Home"
          severity="plain"
          :outlined="false"
          :raised="false"
          @click="navTo('/')"
        />
        <UiButton
          label="Projects"
          severity="plain"
          :outlined="false"
          :raised="false"
          @click="navTo('/projects')"
        />
        <!-- <UiButton label="Blog" severity="plain" :outlined="false" :raised="false" /> -->
        <UiButton label="Contact" severity="plain" :outlined="false" :raised="false" />
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" @click="showMenu = false">
          <UiButton label="My Resume" severity="success" />
        </a>
      </div>
    </div>
  </Transition>

  <div
    class="fixed right-6 xl:right-[max(0px,calc((100vw-1200px)/2))] bottom-6 z-30 opacity-0 invisible translate-y-4 transition-all duration-200"
    id="scroll-to-top"
  >
    <UiButton icon="icon-[tabler--arrow-up]" severity="plain" squared @click="scrollToTop" />
  </div>
</template>

<style scoped>
@container scroll-state(scrollable: top) {
  #scroll-to-top {
    opacity: 1;
    visibility: visible;
    translate: 0;
  }
}
</style>
