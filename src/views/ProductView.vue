<script setup>
import {useProducts} from "@/stores/products.js";
import {useRoute} from "vue-router";

const products = useProducts().products;
const route = useRoute();
const product = products.find(p => p.id === +route.params.id);
console.log(product);
</script>

<template>
<div>
  {{product.title}}
</div>
</template>

<style scoped>

</style>