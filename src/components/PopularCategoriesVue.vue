<script setup>
import Category from './Category.vue';
import ArrowLink from '@/ui/ArrowLink.vue';
import {useCategories} from "@/stores/categories.js";

const categoriesStore = useCategories();

</script>
<template>
  <div class="mb-12">
    <div class="container">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-semibold text-gray-9">
          Popular Categories
        </h2>
        <router-link to="/categories" >
          <arrow-link class="text-primary stroke-primary">View All</arrow-link>
        </router-link>
      </div>
    </div>
    <div class="container grid grid-cols-6 gap-6">
      <router-link :to="{ name: 'shop', query: {
        category: category.id
      }}" v-for="category in categoriesStore.categories" :key="category.id">
        <Category :category="category" />
      </router-link>
    </div>
  </div>
</template>
