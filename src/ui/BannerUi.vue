<template>
    <div class=" min-h-[536px] p-8 text-center ">
        <span class="uppercase text-sm font-medium leading-[100%]"> {{ suptitle }} </span>
        <h3 class="text-[40px] font-semibold leading-[120%] my-4"> {{ title }} </h3>
        <slot />
        <arrow-link :href="link" class=" flex gap-4 justify-center min-w-48 rounded-[53px] bg-white p-4 mt-6">Shop
            now</arrow-link>
    </div>
</template>

<script setup>
import ArrowLink from './ArrowLink.vue';

const props = defineProps([
    'title',
    'suptitle',
    'link'
])
</script>