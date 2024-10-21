<template>
    <a href="#"
        class="inline-block bg-white p-6 group border-[1px] overflow-hidden border-gray-1 hover:border-hard-primary hover:shadow-shadowGreen">
        <div
            class="h-[446px] flex flex-col justify-between items-start bg-[url('/src/assets/images/product.png')] bg-cover bg-center bg-no-repeat">
            <div>
                <ChipUi />
            </div>

            <div class="flex items-center justify-between w-full gap-2">
                <a href=""
                    class="bg-gray-0.5 w-[46px] h-[46px] flex items-center justify-center  flex-shrink-0 p-3 rounded-full">
                    <IconHeart class="" />
                </a>
                <a href="/"
                    class="flex text-sm font-semibold leading[120%] h-[46px] flex-shrink text-white items-center justify-center gap-3 px-8 py-3 rounded-[43px] bg-primary w-3/4">
                    Add to Cart
                    <span class="inline-block">
                        <IconBag class="stroke-white" />
                    </span>
                </a>
                <a href=""
                    class="bg-gray-0.5 w-[46px] h-[46px] flex items-center justify-center flex-shrink-0 p-3 rounded-full">
                    <IconEye />
                </a>
            </div>
        </div>
        <div class="text-center mt-7">
            <span class="text-lg font-normal leading-[150%] text-hard-primary mb-2">Chinese cabbage</span>
            <div class="mb-2 text-2xl leading-[150%] flex gap-1 items-center justify-center">
                <span class="font-medium text-gray-9">$12.00</span>
                <span class="font-normal line-through text-gray-4">$24.00</span>
            </div>
            <div class="flex items-center justify-center mb-5">
                <a href="#">
                    <IconStar class="fill-warning" />
                </a>
                <a href="#">
                    <IconStar class="fill-warning" />
                </a>
                <a href="#">
                    <IconStar class="fill-warning" />
                </a>
                <a href="#">
                    <IconStar class="fill-warning" />
                </a>
                <a href="#">
                    <IconStar class="fill-gray-2" />
                </a>
                <span class="text-xs leading-[130%] font-normal text-gray-5 ml-1"> (524 Feedback)</span>
            </div>
            <div>
                <span class="mb-1 leading-[128%] text-gray-4 text-sm font-normal">
                    Hurry up! Offer ends In:
                </span>
                <div class="flex items-start justify-center gap-2 text-gray-9">
                    <div class="inline-block">
                        <span class="block text-lg leading-[150%] font-medium">00</span>
                        <span class="block uppercase opacity-80 text-[10px] font-medium leading-[100%] mt-1">days</span>
                    </div>
                    <span class="text-xl opacity-80 leading-[150%] font-normal">:</span>
                    <div class="inline-block">
                        <span class="block text-lg leading-[150%] font-medium">02</span>
                        <span
                            class="block uppercase opacity-80 text-[10px] font-medium leading-[100%] mt-1">hours</span>
                    </div>
                    <span class="text-xl opacity-80 leading-[150%] font-normal">:</span>
                    <div class="inline-block">
                        <span class="block text-lg leading-[150%] font-medium">18</span>
                        <span class="block uppercase opacity-80 text-[10px] font-medium leading-[100%] mt-1">mins</span>
                    </div>
                    <span class="text-xl opacity-80 leading-[150%] font-normal">:</span>
                    <div class="inline-block">
                        <span class="block text-lg leading-[150%] font-medium">46</span>
                        <span class="block uppercase opacity-80 text-[10px] font-medium leading-[100%] mt-1">secs</span>
                    </div>
                </div>

            </div>
        </div>
    </a>
</template>

<script setup>
import IconStar from '@/ui/icons/IconStar.vue';
import IconBag from '@/ui/icons/IconBag.vue';
import ChipUi from '@/ui/ChipUi.vue';
import IconHeart from '@/ui/icons/IconHeart.vue';
import IconEye from '@/ui/icons/IconEye.vue';


</script>