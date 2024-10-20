<template>
    <div class="mb-12">
        <div class="container">
            <SectionTitle title="Popular Categories" link-text="View All" link-url="#" class="mb-8" />
        </div>
        <div class="container flex flex-wrap gap-6">
            <Category :name="product.name" :url="product.url" :img-url="product.imgUrl" v-for="product in products"
                :key="product.imgUrl" />
        </div>
    </div>
</template>

<script setup>
import SectionTitle from '@/ui/SectionTitle.vue';
import Category from './Category.vue';

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