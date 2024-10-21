<template>
    <div>
        <div class="container flex items-center justify-between mb-8">
            <h2 class="text-3xl font-semibold text-gray-9">
                Hot Deals
            </h2>
            <arrow-link href="/">View All</arrow-link>
        </div>
        <div class="container grid grid-cols-5">
            <ProductHot class="col-span-2 row-span-2 " />
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
            <Product />
            <Product />
            <Product />
            <Product />

        </div>
    </div>
</template>

<script setup>
import Product from './Product.vue';
import ProductHot from './ProductHot.vue';
</script>