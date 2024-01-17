<script setup lang="ts">
defineProps<{
  image: string;
  content: string;
  onReadMore?: () => void;
}>();
</script>

<template>
  <div class="card">
    <div class="card__content">
      <img :src="image" alt="card_image" class="card__content__image" />
      <p class="card__content__description">{{ content }}</p>
    </div>

    <button class="card__button" @click="onReadMore">READ MORE</button>
  </div>
</template>
