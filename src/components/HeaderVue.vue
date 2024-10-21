<template>
    <header>
        <div class=" text-[#666] py-3 shadow-[0_1px_0px_0px_#e5e5e5]">
            <div class="container">
                <div class="flex justify-between">
                    <div class="text-xs adress">
                        <IconMapPin class="inline"></IconMapPin>
                        <span class="ml-2 text-xs font-normal">Store Location: Lincoln- 344, Illinois, Chicago,
                            USA</span>
                    </div>
                    <div class="flex gap-5 text-xs font-normal divide-x user-interface">
                        <div class="flex gap-5 divide-inherit user-interface__item">
                            <a href="#" class="capitalize">
                                Eng
                                <IconArrowDown class="inline ml-1.5"></IconArrowDown>
                            </a>
                            <a href="#" class="uppercase">
                                usd
                                <IconArrowDown class="inline ml-1.5"></IconArrowDown>
                            </a>
                        </div>
                        <!-- Currency and language -->
                        <div class="pl-5 ">
                            <a href="#">Sign in</a>
                            /
                            <a href="#">Sign out</a>
                        </div>
                        <!-- Log in and log out -->
                    </div>
                </div>
            </div>
        </div>
        <!-- top /> -->


        <div class="container flex justify-between py-6">
            <LogoUi />
            <div class="relative flex">
                <button class="absolute -translate-y-1/2 top-1/2 left-4">
                    <IconSearch />
                </button>
                <input type="text" placeholder="Search"
                    class="block outline-none text-base border-solid rounded-l-lg border-l-[1px] border-y-[1px] text-gray-5 w-96 pl-11 border-gray-5">
                <button
                    class="px-6 py-[14px] text-[14px] font-semibold text-white rounded-r-md bg-primary">Search</button>
            </div>
            <!-- search form />-->

            <div class="flex items-center gap-4 between">
                <a href="#!">
                    <IconHeart class="w-8 h-8" />
                </a>
                <span class="block w-0.5 h-2/3 bg-[#CCCCCC]"></span>
                <a href="#!" class="flex items-center gap-3">
                    <IconBag class="flex-grow w-9 h-9 stroke-gray-9" />
                    <div class="flex-shrink-0">
                        <span class="block text-xs text-[#4D4D4D]">Shopping cart:</span>
                        <span class="block mt-2 text-sm text-[#1A1A1A] font-medium">$57.00</span>
                    </div>
                </a>
            </div>
            <!-- cart and favorite /> -->
        </div>
        <!-- main />-->
        <div class="py-4 text-sm font-medium bg-gray-8 text-gray-4">
            <div class="container flex items-center justify-between">
                <nav>
                    <ul class="flex gap-8">
                        <li><a href="/" class="hover:text-white">
                                Home
                            </a></li>
                        <li><a href="#!" class="hover:text-white">
                                Shop
                            </a></li>
                        <li><a href="#!" class="hover:text-white">
                                Pages
                            </a></li>
                        <li><a href="#!" class="hover:text-white">
                                Blog
                            </a></li>
                        <li><a href="#!" class="hover:text-white">
                                About usd
                            </a></li>
                        <li><a href="#!" class="hover:text-white">
                                Contact Us
                            </a></li>
                    </ul>
                </nav>
                <!-- nav /> -->
                <a href="tel:+2195550114" class="flex items-center gap-2 font-medium text-white">
                    <IconPhone class="w-7 h-7" />
                    (219) 555-0114
                </a>
            </div>
        </div>
        <!-- bottom /> -->
    </header>
</template>
<script setup>
import IconMapPin from '@/ui/icons/IconMapPin.vue';
import IconArrowDown from '@/ui/icons/IconArrowDown.vue';
import IconSearch from '@/ui/icons/IconSearch.vue';
import IconHeart from '@/ui/icons/IconHeart.vue';
import IconBag from '@/ui/icons/IconBag.vue';
import IconPhone from '@/ui/icons/IconPhone.vue';
import LogoUi from '@/ui/LogoUi.vue';
</script>
<style lang="">

</style>