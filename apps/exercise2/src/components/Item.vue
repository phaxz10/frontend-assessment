<script setup lang="ts">
defineProps<{
  isContentVisible: boolean;
  onToggleVisibility: () => void;
  title: string;
  content: string;
}>();
</script>

<template>
  <div class="tab">
    <button
      class="tab__button"
      :class="
        isContentVisible ? 'md:border-b border-b-black md:text-blue-800' : ''
      "
      @click="onToggleVisibility"
    >
      {{ title }}

      <span
        class="tab__button__icon"
        :class="isContentVisible ? '-rotate-90' : 'rotate-90'"
        >></span
      >
    </button>
    <div
      class="tab__content"
      :class="
        isContentVisible
          ? 'block max-h-[400px] w-auto p-6 border-t border-t-black'
          : 'max-h-0 w-0'
      "
      v-html="content"
    ></div>
  </div>
</template>
