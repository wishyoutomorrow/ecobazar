<template>
    <div class="mb-12">
        <div class="container">
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-3xl font-semibold text-gray-9">
                    Popular Categories
                </h2>
                <arrow-link href="/" class="text-primary stroke-primary">View All</arrow-link>
            </div>
        </div>
        <div class="container grid grid-cols-6 gap-6">
            <Category :name="product.name" :url="product.url" :img-url="product.imgUrl" v-for="product in products"
                :key="product.imgUrl" />
        </div>
    </div>
</template>

<script setup>
import Category from './Category.vue';
import ArrowLink from '@/ui/ArrowLink.vue';
import { ref } from 'vue';

const products = ref([
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
    {
        name: 'Fresh fruit',
        url: "/",
        imgUrl: "/src/assets/images/product.png"
    },
])

</script>