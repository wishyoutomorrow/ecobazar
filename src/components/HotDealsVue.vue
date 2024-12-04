<template>
    <div class="bg-[#F7F7F7] py-16">
        <div class="mb-8">
            <div class="container flex items-center justify-between ">
                <h2 class="text-3xl font-semibold text-gray-9">
                    Hot Deals
                </h2>
                <arrow-link href="/" class="text-primary stroke-primary">View All</arrow-link>
            </div>
        </div>
        <div class="container grid grid-cols-5">
            <ProductHot class="col-span-2 row-span-2 " />
            <Product v-for="product in productsStore.products" :product="product" :key="product.id" />


        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';
import ProductHot from './ProductHot.vue';
import ArrowLink from '@/ui/ArrowLink.vue';
import {useProducts} from "@/stores/products.js";

const productsStore = useProducts()
</script>