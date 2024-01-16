<script setup lang="ts">
import Hero from '../components/Hero.vue';
import Card from '../components/Card.vue';
</script>

<template>
  <Hero />

  <section
    class="flex flex-col items-center md:items-stretch md:flex-row justify-center gap-8 py-8 px-5 w-full"
  >
    <Card
      image="https://via.placeholder.com/400x300"
      content="Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    />
    <Card
      image="https://via.placeholder.com/400x300"
      content="Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmmod tempor incididunt ut labore et dolore magna aliqua."
    />
    <Card
      image="https://via.placeholder.com/400x300"
      content="Lorem ipsum dolor sit amet, consectetur adispiscing elit, sed do eiusmmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
    />
  </section>
</template>
