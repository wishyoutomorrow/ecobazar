<template>
    <a href="#"
        class="inline-flex flex-col justify-between bg-white p-3 group border-[1px] overflow-hidden border-gray-1 hover:border-hard-primary hover:shadow-shadowGreen">
        <div class="w-64 h-60 bg-[url('/src/assets/images/product.png')] bg-cover bg-center bg-no-repeat">
            <ChipUi />
        </div>
        <div class="flex items-center justify-between">
            <div>
                <span class="block text-sm font-normal text-gray-7 group-hover:text-hard-primary">Green Apple</span>
                <div>
                    <span class="text-base font-medium leading-[150%] text-gray-9 inline-block mr-1">$14.99</span>
                    <span class="line-through text-base font-normal leading-[150%] text-gray-4">$20.99</span>
                </div>
                <div class="flex items-center">
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
                </div>

            </div>
            <a href="#" class="inline-block p-3 rounded-full bg-gray-0.5">
                <IconBag class="stroke-gray-9" />
            </a>
        </div>
    </a>
</template>

<script setup>
import IconStar from '@/ui/icons/IconStar.vue';
import IconBag from '@/ui/icons/IconBag.vue';
import ChipUi from '@/ui/ChipUi.vue';


</script>