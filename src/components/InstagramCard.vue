<script setup>

import IconInstagram from "@/ui/icons/IconInstagram.vue";

defineProps({
  imgUrl: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a href="#" class="w-48 h-48 group flex items-center hover:opacity-80 justify-center bg-cover bg-center bg-no-repeat rounded-lg" :style="{backgroundImage: `url('${imgUrl}')`}">
    <IconInstagram class="hidden group-hover:block"/>
  </a>
</template>

<style scoped>
</style>