<template>
    <a :href="url"
        class="block pt-4 pb-6 text-center text-lg font-medium leading-[150%]  max-w-52 rounded-md border-[1px] border-gray-1 hover:broder-hard-primary text-gray-9 hover:text-hard-primary hover:shadow-shadowGreen">
        <img :src="imgUrl" alt="#product" class="block w-48 h-32">
        <span class="block mt-4 ">
            {{ name }}
        </span>
    </a>
</template>

<script setup>
const props = defineProps([
    'url',
    'name',
    'imgUrl'
])
</script>