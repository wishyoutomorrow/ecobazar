<script setup>
  import {useProducts} from "@/stores/products.js";
  import Product from "@/components/Product.vue";
  import {useCategories} from "@/stores/categories.js";
  import {computed, ref, watch} from "vue";
  import {useRoute, useRouter} from "vue-router";
  const route = useRoute();
  const router = useRouter();
  const productsStore = useProducts();
  const selectedCtg = ref(route.query.category || "all")

  watch(selectedCtg, (newCategory) => {
    router.push({ query: { category: newCategory } });
    console.log(selectedCtg.value)
    // Обновить URL с новым параметром
  });


  const filteredProducts = computed(() => {
    if(selectedCtg.value === "all") return productsStore.products;

    return productsStore.products.filter(item => item.categoryId === +selectedCtg.value);
  })

</script>

<template>
<div>
  <div class="container">
    <div class="flex justify-between">
      <div class="flex gap-4 py-6 items-center">
        <select name="categories" id="categories" v-model="selectedCtg">
          <option value="all" selected>all</option>
          <option class="py-2 px-4" v-for="category in useCategories().categories" :key="category.id" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="flex items-center" >
        <select name="" id="">
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
        </select>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-4 container gap-6">
    <Product v-for="product in filteredProducts"  :product="product" :key="product.id" />
  </div>
</div>
</template>

<style scoped>

</style>