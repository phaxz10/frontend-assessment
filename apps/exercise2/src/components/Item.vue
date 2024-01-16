<script setup lang="ts">
defineProps<{
  isContentVisible: boolean;
  onToggleVisibility: () => void;
  title: string;
  content: string;
}>();
</script>

<template>
  <div class="md:max-w-max border rounded-lg w-full md:border-none">
    <button
      class="p-3 font-bold w-full text-left flex items-center justify-between"
      :class="
        isContentVisible ? 'md:border-b border-b-black md:text-blue-800' : ''
      "
      @click="onToggleVisibility"
    >
      {{ title }}

      <span
        class="md:hidden"
        :class="isContentVisible ? '-rotate-90' : 'rotate-90'"
        >></span
      >
    </button>
    <div
      class="overflow-hidden h-auto transition-[max-height] ease-in-out duration-300 md:absolute top-full left-0"
      :class="
        isContentVisible
          ? 'block max-h-[400px] w-auto p-6 border-t border-t-black'
          : 'max-h-0 w-0'
      "
      v-html="content"
    ></div>
  </div>
</template>
