<script setup lang="ts">
defineProps<{
  image: string;
  content: string;
  onReadMore?: () => void;
}>();
</script>

<template>
  <div class="card">
    <div class="content">
      <img :src="image" alt="card_image" class="image" />
      <p class="description">{{ content }}</p>
    </div>

    <button class="button" @click="onReadMore">READ MORE</button>
  </div>
</template>
