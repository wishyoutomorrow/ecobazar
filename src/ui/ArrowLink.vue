<template>
    <a :href="url"
        class="inline-flex gap-4 justify-start  text-primary text-base font-semibold leading-[120%] items-center">
        {{ text }}
        <IconArrowRight />
    </a>
</template>

<script setup>
import IconArrowRight from '@/ui/icons/IconArrowRight.vue';

const props = defineProps(['text', 'url'])
</script>