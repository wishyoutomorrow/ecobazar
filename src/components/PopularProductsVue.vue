<template>
    <div>
        <div class="container">
            <div class="flex items-center justify-between mb-8">
                <h2 class="text-3xl font-semibold text-gray-9">
                    Popular Products
                </h2>
                <arrow-link href="/">View All</arrow-link>
            </div>
        </div>
        <div class="container grid grid-cols-5">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />

        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';
import ArrowLink from '@/ui/ArrowLink.vue';
</script>