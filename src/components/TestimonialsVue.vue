<script setup>

import IconArrowLeft from "@/ui/icons/IconArrowLeft.vue";
import IconArrowRight from "@/ui/icons/IconArrowRight.vue";
import TestimonialCard from "@/components/TestimonialCard.vue";
import {ref} from "vue";

const testimonials = ref([
  {
    user: {
      name: "Robert Fox",
      jobTitle: "Customer",
      imgUrl: "/src/assets/images/user1.jpg"
    },
    desc: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    id: 0
  },
  {
    user: {
      name: "Dianne Russell",
      jobTitle: "Customer",
      imgUrl: "/src/assets/images/user1.jpg"
    },
    desc: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    id: 1
  },
  {
    user: {
      name: "Eleanor Pena",
      jobTitle: "Customer",
      imgUrl: "/src/assets/images/user1.jpg"
    },
    desc: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
    id: 2
  }
])
</script>

<template>
  <div class="bg-gray-0.5 py-14">
    <div class="container flex items-center justify-between">
      <h2 class="text-3xl font-semibold text-gray-9">
        Client Testimonials
      </h2>
      <div class="flex gap-3">
        <a href="" class="text-gray-9 hover:text-white hover:bg-primary rounded-full bg-white border-1 border-gray-1 w-11 h-11 flex items-center justify-center">
          <IconArrowLeft />
        </a>
        <a href="" class="text-gray-9 hover:text-white hover:bg-primary rounded-full bg-white border-1 border-gray-1 w-11 h-11 flex items-center justify-center">
          <IconArrowRight />
        </a>
      </div>
    </div>
    <div class=" mt-8 ">
      <div class="container grid grid-cols-3 gap-6">
        <TestimonialCard v-for="item in testimonials" :key="item.id" :user="item.user" :desc="item.desc" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>