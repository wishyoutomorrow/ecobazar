<template>
    <div class="container h-[75vh] py-6">
        <div class="grid grid-cols-[2fr_1fr] grid-rows-2 gap-6 h-full">
            <div class="rounded-lg row-span-2 flex flex-col justify-center items-start p-14 text-white 
                bg-[url('@/assets/images/banner1.jpg')] 
                bg-cover bg-no-repeat bg-center">

                <h1 class="text-5xl font-semibold leading-[120%]">Fresh & Healthy <br>
                    Organic Food
                </h1>
                <div class="pt-3 pb-2 pl-3 mt-8 border-l-2 border-l-soft-primary mb-7">
                    <h3 class="flex items-center text-xl font-medium">Sale up to <span
                            class="px-3 py-1 ml-2 font-bold rounded-md bg-warning">30%
                            off</span></h3>
                    <span class="leading-[150%] font-normal text-sm opacity-80">Free shipping on all your order.</span>

                </div>
                <a href="#"
                    class="flex gap-4 justify-center min-w-48 rounded-[53px] bg-white text-primary text-base font-semibold leading-[120%] p-4 items-center">
                    Shop now
                    <IconArrowRight />
                </a>
            </div>

            <div
                class="rounded-lg p-8 text-gray-9 bg-[url('@/assets/images/banner2.jpg')] bg-cover bg-no-repeat bg-center">
                <span class="text-sm font-medium text-gray-9">Summer Sale</span>
                <h2 class="mt-1 mb-2 text-3xl font-semibold text-gray-9">75% OFF</h2>
                <span class=" block leading-[150%] font-normal text-sm opacity-80">Only Fruit & Vegetable</span>
                <a href="#"
                    class="inline-flex mt-6 gap-4 justify-start  text-primary text-base font-semibold leading-[120%] items-center">
                    Shop now
                    <IconArrowRight />
                </a>
            </div>

            <div
                class="flex flex-col items-center justify-center col-start-2 p-8 text-center text-white bg-center bg-no-repeat bg-cover rounded-lg bg">
                <span class="text-sm font-medium text-white uppercase">Best Deal</span>
                <h2 class="text-3xl mt-3 mb-8 font-semibold leading-[120%]">Special Products <br> Deal of the Month</h2>
                <a href="#"
                    class="inline-flex gap-4 justify-start  text-primary text-base font-semibold leading-[120%] items-center">
                    Shop now
                    <IconArrowRight />
                </a>
            </div>
        </div>
        <!-- marketing /> -->

        <div class="flex justify-between gap-1 p-10 mt-6 bg-white shadow-shadowGray">
            <div class="flex items-center gap-4">
                <IconTruck />
                <div>
                    <span class="block text-base font-semibold leading-[120%] text-gray-9">Free Shipping</span>
                    <span class="block text-sm font-normal leading-[150%] text-gray-4 mt-2">Free shipping on all your
                        order</span>
                </div>
            </div>
            <!-- item /> -->

            <div class="flex items-center gap-4">
                <IconHeadphones />
                <div>
                    <span class="block text-base font-semibold leading-[120%] text-gray-9">Customer Support 24/7</span>
                    <span class="block text-sm font-normal leading-[150%] text-gray-4 mt-2">Instant access to
                        Support</span>
                </div>
            </div>
            <!-- item /> -->

            <div class="flex items-center gap-4">
                <IconShoppingBag />
                <div>
                    <span class="block text-base font-semibold leading-[120%] text-gray-9">100% Secure Payment</span>
                    <span class="block text-sm font-normal leading-[150%] text-gray-4 mt-2">We ensure your money is
                        save</span>
                </div>
            </div>
            <!-- item /> -->

            <div class="flex items-center gap-4">
                <IconPackage />
                <div>
                    <span class="block text-base font-semibold leading-[120%] text-gray-9">Money-Back Guarantee</span>
                    <span class="block text-sm font-normal leading-[150%] text-gray-4 mt-2">30 Days Money-Back
                        Guarantee</span>
                </div>
            </div>
            <!-- item /> -->
        </div>
        <!-- skills /> -->
    </div>
</template>

<script setup>
import IconArrowRight from '@/ui/icons/IconArrowRight.vue';
import IconTruck from '@/ui/icons/IconTruck.vue';
import IconHeadphones from '@/ui/icons/IconHeadphones.vue';
import IconShoppingBag from '@/ui/icons/IconShoppingBag.vue';
import IconPackage from '@/ui/icons/IconPackage.vue';

</script>

<style scoped>
.bg {
    background: linear-gradient(0deg, rgba(0, 38, 3, 0.80) 0%, rgba(0, 38, 3, 0.80) 100%), url('@/assets/images/banner3.jpg') lightgray 50% / cover no-repeat;
}
</style>