<template>
    <div class="my-16">
        <div
            class="container rounded-xl flex justify-end items-center p-14 bg-[url('/src/assets/images/discount.jpg')] h-[360px] bg-cover bg-center  bg-no-repeat">
            <div class="text-left max-w-[447px]">
                <span class="mb-3 uppercase text-white text-base font-medium leading-[100%]">Summer Sale</span>
                <h3 class="mb-4 text-6xl uppercase leading-[120%] text-white font-normal">
                    <span class="font-semibold text-warning">37%</span> OFF
                </h3>
                <p class="mb-7 text-base opacity-70 leading-[150%] text-white">Free on all your order, Free Shipping and
                    30 days
                    money-back guarantee</p>
                <arrow-link href="#" class="p-4 text-white rounded-[43px] bg-primary w-48 justify-center stroke-white">
                    Shop Now
                </arrow-link>
            </div>
        </div>
    </div>
</template>

<script setup>
import ArrowLink from '@/ui/ArrowLink.vue';
</script>