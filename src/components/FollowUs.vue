<script setup>

import InstagramCard from "@/components/InstagramCard.vue";
import {ref} from "vue";

const cards = ref([
  {
    id: 0,
    imgUrl: '/src/assets/images/instagram1.jpg'
  },
  {
    id: 1,
    imgUrl: '/src/assets/images/instagram2.jpg'
  },
  {
    id: 2,
    imgUrl: '/src/assets/images/instagram3.jpg'
  },
  {
    id: 3,
    imgUrl: '/src/assets/images/instagram4.jpg'
  },
  {
    id: 4,
    imgUrl: '/src/assets/images/instagram5.jpg'
  },
  {
    id: 5,
    imgUrl: '/src/assets/images/instagram6.jpg'
  }
])

</script>

<template>
<div class="container pb-14">
  <h2 class="mb-8 text-3xl font-semibold text-center text-gray-9">
    Follow us on Instagram
  </h2>
  <div class="flex items-center justify-between gap-6">
    <InstagramCard class="instagram-card text-white " v-for="item in cards" :imgUrl="item.imgUrl" :key="item.id"/>

  </div>
</div>
</template>

<style scoped>

</style>