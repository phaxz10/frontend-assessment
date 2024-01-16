<script setup lang="ts">
import { ref } from 'vue';
import data from '../../../../data.json';
import Item from '../components/Item.vue';

const activeTab = ref(0);

const toggleActiveTab = (idx: number) => {
  if (idx === activeTab.value) {
    return (activeTab.value = -1);
  }
  activeTab.value = idx;
};
</script>

<template>
  <div class="relative flex flex-col md:flex-row md:items-center gap-4">
    <div v-for="(item, idx) in data" :key="item.title">
      <Item
        :isContentVisible="activeTab === idx"
        :onToggleVisibility="() => toggleActiveTab(idx)"
        :title="item.title"
        :content="item.content"
      />
    </div>
  </div>
</template>
