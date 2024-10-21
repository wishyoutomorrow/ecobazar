<template>
    <div class="container grid grid-cols-3 gap-6 text-white py-14">
        <banner-ui title="Sale of the Month" suptitle="Best Deals" link="/"
            class="bg-[url('/src/assets/images/bigbanner1.jpg')] text-white bg-cover bg-no-repeat bg-center">
            <div class="flex items-start justify-center gap-2">
                <div class="inline-block">
                    <span class="block text-2xl leading-[150%] font-normal">00</span>
                    <span class="block uppercase opacity-80 text-xs font-normal leading-[100%] mt-1">days</span>
                </div>
                <span class="text-2xl opacity-80 leading-[150%] font-normal">:</span>
                <div class="inline-block">
                    <span class="block text-2xl leading-[150%] font-normal">02</span>
                    <span class="block uppercase opacity-80 text-xs font-normal leading-[100%] mt-1">hours</span>
                </div>
                <span class="text-2xl opacity-80 leading-[150%] font-normal">:</span>
                <div class="inline-block">
                    <span class="block text-2xl leading-[150%] font-normal">18</span>
                    <span class="block uppercase opacity-80 text-xs font-normal leading-[100%] mt-1">mins</span>
                </div>
                <span class="text-2xl opacity-80 leading-[150%] font-normal">:</span>
                <div class="inline-block">
                    <span class="block text-2xl leading-[150%] font-normal">46</span>
                    <span class="block uppercase opacity-80 text-xs font-normal leading-[100%] mt-1">secs</span>
                </div>
            </div>
        </banner-ui>


        <banner-ui title="Low-Fat Meat" suptitle="85% Fat Free" link="/"
            class="bg-[url('/src/assets/images/bigbanner2.jpg')] bg-cover bg-no-repeat text-white bg-center">
            <div class="flex items-center justify-center gap-2">
                <span class="text-lg font-normal leadign-[150%]">Started at</span> <span
                    class="text-xl font-medium leading-[150%] text-warning">$79.99</span>
            </div>
        </banner-ui>

        <banner-ui title="Low-Fat Meat" suptitle="85% Fat Free" link="/"
            class="bg-[url('/src/assets/images/bigbanner3.jpg')] bg-cover bg-no-repeat text-gray-9 bg-center">
            <div class="flex items-center justify-center gap-2">
                <span class="text-lg font-normal leadign-[150%]">Up to</span> <span
                    class="text-xl rounded-lg font-medium leading-[150%] text-[#fcc900] py-[6px] px-3 uppercase bg-gray-9">64%
                    off</span>
            </div>
        </banner-ui>
    </div>
</template>

<script setup>
import BannerUi from '@/ui/BannerUi.vue';

</script>